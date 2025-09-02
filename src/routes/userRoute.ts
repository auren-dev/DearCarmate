import express, { Router } from 'express';
import userController from '../controllers/userController';
import auth from '../middlewares/auth';

const userRouter: Router = express.Router();

userRouter.route('/').post(userController.createUser);

userRouter
  .route('/me')
  .get(auth.verifyAccessToken, auth.verifyUserAuth, userController.getUser)
  .patch(auth.verifyAccessToken, auth.verifyUserAuth, userController.updateUser)
  .delete(auth.verifyAccessToken, auth.verifyUserAuth, userController.deleteUser);

userRouter
  .route('/:userId')
  .delete(auth.verifyAccessToken, auth.verifyAdminAuth, userController.deleteUserByAdmin);
export default userRouter;
