import jwt from 'jsonwebtoken';
import type { StringValue } from 'ms'; // jwt 토큰 expireIn 타입용
import hashUtil from '../utils/hashUtil';
import userRepository from '../repositories/userRepository';
import userService from './userService';
import { CustomError } from '../utils/customErrorUtil';
import { TokenDTO, UpdateTokenDTO } from '../types/authType';
import { LoginDTO, UserDTO } from '../types/userType';

class AuthService {
  /**
   *
   * @param user userId를 가져오기 위한 유저 정보
   * @param type accessToken인지 refreshToken인지를 결정합니다
   * @returns userId값으로 토큰을 만들어 유효기간이 정해진 토큰을 반환합니다.
   */
  createToken = (token: TokenDTO, type: string = 'access'): string => {
    // 1. 환경 변수에 저장된 비밀키를 가져옵니다.
    const secret = process.env.JWT_SECRET;
    if (!secret) {
      throw new CustomError('JWT_SECRET is not defined in the environment variables.', 500);
    }
    // 2-1. 토큰에 담을 정보와 유효기간을 설정합니다.
    const payload = { userId: token.userId };
    let expiresIn: StringValue = '1h';
    // 2-2. 생성하고자 하는 토큰이 refreshToken일 경우 유효기간을 길게 설정합니다.
    if (type === 'refresh') {
      expiresIn = '2w';
    }

    // 3. 위 정보들을 바탕으로 토큰을 발급합니다.
    return jwt.sign(payload, secret, { expiresIn });
  };
  /**
   *
   * @param userId 토큰을 재발행하고자 하는 유저의 id입니다.
   * @param refreshToken 유저에게 전달받은 refreshToken입니다.
   * @returns 새로운 accessToken을 발행하여 유저에게 반환합니다.
   */
  refreshingAccessToken = async (userId: number, refreshToken: string): Promise<string> => {
    // 1. DB에 저장된 refreshToken을 가져오기 위해 유저 정보를 가져옵니다.
    const user: UserDTO | null = await userRepository.getById(userId);
    if (!user) {
      throw CustomError.notFound('존재하지 않는 유저입니다.');
    }
    // 2. user의 저장된 토큰 정보와 유저에게 전달받은 토큰을 비교햐여 유효성을 검증합니다.
    if (user.refreshToken !== refreshToken) {
      throw CustomError.badRequest();
    }
    // 3. accessToken을 재발행하여 반환합니다.
    return this.createToken({ userId: user.id });
  };

  login = async (loginDTO: LoginDTO) => {
    // 1. DB에서 저장된 유저 조회
    const user: UserDTO | null = await userRepository.getByEmail(loginDTO.email);
    if (!user) {
      throw CustomError.notFound('존재하지 않는 유저입니다.');
    }

    // 2. 조회한 유저의 비밀번호화 입력받은 비밀번호를 검증합니다.
    if (!hashUtil.checkPassword(loginDTO.password, user.password!)) {
      throw CustomError.notFound('존재하지 않거나 비밀번호가 일치하지 않습니다');
    }

    // 3-1. token 발행을 위한 유저 id 값 가공
    const tokenDTO: TokenDTO = {
      userId: user.id,
    };
    // 3-2. accessToken, refreshToken 발행 및 업데이트
    const accessToken = this.createToken(tokenDTO);
    const refreshToken = this.createToken(tokenDTO, 'refresh');
    const updatedUser: UserDTO = await userRepository.update({ refreshToken }, user.id);

    // 4. 반환값을 가공하여 response를 돌려줍니다
    const filteredUser = userService.filterSensitiveUserData(updatedUser);
    return { user: filteredUser, accessToken, refreshToken };
  };

  updateToken = async (updateTokenDTO: UpdateTokenDTO) => {
    // 1. refreshingAccessToken에서 현재 전달받은 토큰이 유효한지 검증
    const accessToken = await this.refreshingAccessToken(
      updateTokenDTO.userId,
      updateTokenDTO.requestRefreshToken,
    );
    // 2-1. createToken 타입 맞추기 위해 감싸주기
    const tokenDTO: TokenDTO = {
      userId: updateTokenDTO.userId,
    };
    // 2-2. refreshToken 재발급
    const refreshToken = this.createToken(tokenDTO, 'refresh');
    // 2-3. 새로 refreshToken을 발급받았으므로 DB도 업데이트
    await userRepository.update({ refreshToken }, tokenDTO.userId);
    // 3. 토큰 반환
    return { accessToken, refreshToken };
  };
}

export default new AuthService();
