
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Company
 * 
 */
export type Company = $Result.DefaultSelection<Prisma.$CompanyPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Customer
 * 
 */
export type Customer = $Result.DefaultSelection<Prisma.$CustomerPayload>
/**
 * Model Car
 * 
 */
export type Car = $Result.DefaultSelection<Prisma.$CarPayload>
/**
 * Model CarModel
 * 
 */
export type CarModel = $Result.DefaultSelection<Prisma.$CarModelPayload>
/**
 * Model Contract
 * 
 */
export type Contract = $Result.DefaultSelection<Prisma.$ContractPayload>
/**
 * Model Meetings
 * 
 */
export type Meetings = $Result.DefaultSelection<Prisma.$MeetingsPayload>
/**
 * Model ContractDocument
 * 
 */
export type ContractDocument = $Result.DefaultSelection<Prisma.$ContractDocumentPayload>
/**
 * Model ContractDocumentRelation
 * 
 */
export type ContractDocumentRelation = $Result.DefaultSelection<Prisma.$ContractDocumentRelationPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Gender: {
  male: 'male',
  female: 'female'
};

export type Gender = (typeof Gender)[keyof typeof Gender]


export const AgeGroup: {
  TEEN: 'TEEN',
  TWENTY: 'TWENTY',
  THIRTY: 'THIRTY',
  FORTY: 'FORTY',
  FIFTY: 'FIFTY',
  SIXTY: 'SIXTY',
  SEVENTY: 'SEVENTY',
  EIGHTY: 'EIGHTY'
};

export type AgeGroup = (typeof AgeGroup)[keyof typeof AgeGroup]


export const Region: {
  SEOUL: 'SEOUL',
  GYEONGGI: 'GYEONGGI',
  INCHEON: 'INCHEON',
  GANGWON: 'GANGWON',
  CHUNGBUK: 'CHUNGBUK',
  CHUNGNAM: 'CHUNGNAM',
  SEJONG: 'SEJONG',
  DAEJEON: 'DAEJEON',
  JEONBUK: 'JEONBUK',
  JEONNAM: 'JEONNAM',
  GWANGJU: 'GWANGJU',
  GYEONGBUK: 'GYEONGBUK',
  GYEONGNAM: 'GYEONGNAM',
  DAEGU: 'DAEGU',
  ULSAN: 'ULSAN',
  BUSAN: 'BUSAN',
  JEJU: 'JEJU'
};

export type Region = (typeof Region)[keyof typeof Region]


export const CarStatus: {
  possession: 'possession',
  contractProceeding: 'contractProceeding',
  contractCompleted: 'contractCompleted'
};

export type CarStatus = (typeof CarStatus)[keyof typeof CarStatus]


export const ContractStatus: {
  carInspection: 'carInspection',
  priceNegotiation: 'priceNegotiation',
  contractDraft: 'contractDraft',
  contractSuccessful: 'contractSuccessful',
  contractFailed: 'contractFailed'
};

export type ContractStatus = (typeof ContractStatus)[keyof typeof ContractStatus]

}

export type Gender = $Enums.Gender

export const Gender: typeof $Enums.Gender

export type AgeGroup = $Enums.AgeGroup

export const AgeGroup: typeof $Enums.AgeGroup

export type Region = $Enums.Region

export const Region: typeof $Enums.Region

export type CarStatus = $Enums.CarStatus

export const CarStatus: typeof $Enums.CarStatus

export type ContractStatus = $Enums.ContractStatus

export const ContractStatus: typeof $Enums.ContractStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Companies
 * const companies = await prisma.company.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Companies
   * const companies = await prisma.company.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.company`: Exposes CRUD operations for the **Company** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Companies
    * const companies = await prisma.company.findMany()
    * ```
    */
  get company(): Prisma.CompanyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.customer`: Exposes CRUD operations for the **Customer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Customers
    * const customers = await prisma.customer.findMany()
    * ```
    */
  get customer(): Prisma.CustomerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.car`: Exposes CRUD operations for the **Car** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cars
    * const cars = await prisma.car.findMany()
    * ```
    */
  get car(): Prisma.CarDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.carModel`: Exposes CRUD operations for the **CarModel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CarModels
    * const carModels = await prisma.carModel.findMany()
    * ```
    */
  get carModel(): Prisma.CarModelDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contract`: Exposes CRUD operations for the **Contract** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Contracts
    * const contracts = await prisma.contract.findMany()
    * ```
    */
  get contract(): Prisma.ContractDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.meetings`: Exposes CRUD operations for the **Meetings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Meetings
    * const meetings = await prisma.meetings.findMany()
    * ```
    */
  get meetings(): Prisma.MeetingsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contractDocument`: Exposes CRUD operations for the **ContractDocument** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ContractDocuments
    * const contractDocuments = await prisma.contractDocument.findMany()
    * ```
    */
  get contractDocument(): Prisma.ContractDocumentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contractDocumentRelation`: Exposes CRUD operations for the **ContractDocumentRelation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ContractDocumentRelations
    * const contractDocumentRelations = await prisma.contractDocumentRelation.findMany()
    * ```
    */
  get contractDocumentRelation(): Prisma.ContractDocumentRelationDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.14.0
   * Query Engine version: 717184b7b35ea05dfa71a3236b7af656013e1e49
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Company: 'Company',
    User: 'User',
    Customer: 'Customer',
    Car: 'Car',
    CarModel: 'CarModel',
    Contract: 'Contract',
    Meetings: 'Meetings',
    ContractDocument: 'ContractDocument',
    ContractDocumentRelation: 'ContractDocumentRelation'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "company" | "user" | "customer" | "car" | "carModel" | "contract" | "meetings" | "contractDocument" | "contractDocumentRelation"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Company: {
        payload: Prisma.$CompanyPayload<ExtArgs>
        fields: Prisma.CompanyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompanyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompanyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          findFirst: {
            args: Prisma.CompanyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompanyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          findMany: {
            args: Prisma.CompanyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[]
          }
          create: {
            args: Prisma.CompanyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          createMany: {
            args: Prisma.CompanyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CompanyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[]
          }
          delete: {
            args: Prisma.CompanyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          update: {
            args: Prisma.CompanyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          deleteMany: {
            args: Prisma.CompanyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CompanyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CompanyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[]
          }
          upsert: {
            args: Prisma.CompanyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          aggregate: {
            args: Prisma.CompanyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompany>
          }
          groupBy: {
            args: Prisma.CompanyGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompanyGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompanyCountArgs<ExtArgs>
            result: $Utils.Optional<CompanyCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Customer: {
        payload: Prisma.$CustomerPayload<ExtArgs>
        fields: Prisma.CustomerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustomerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustomerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findFirst: {
            args: Prisma.CustomerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustomerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findMany: {
            args: Prisma.CustomerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          create: {
            args: Prisma.CustomerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          createMany: {
            args: Prisma.CustomerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CustomerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          delete: {
            args: Prisma.CustomerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          update: {
            args: Prisma.CustomerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          deleteMany: {
            args: Prisma.CustomerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CustomerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CustomerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          upsert: {
            args: Prisma.CustomerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          aggregate: {
            args: Prisma.CustomerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomer>
          }
          groupBy: {
            args: Prisma.CustomerGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomerGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustomerCountArgs<ExtArgs>
            result: $Utils.Optional<CustomerCountAggregateOutputType> | number
          }
        }
      }
      Car: {
        payload: Prisma.$CarPayload<ExtArgs>
        fields: Prisma.CarFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CarFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CarFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload>
          }
          findFirst: {
            args: Prisma.CarFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CarFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload>
          }
          findMany: {
            args: Prisma.CarFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload>[]
          }
          create: {
            args: Prisma.CarCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload>
          }
          createMany: {
            args: Prisma.CarCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CarCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload>[]
          }
          delete: {
            args: Prisma.CarDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload>
          }
          update: {
            args: Prisma.CarUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload>
          }
          deleteMany: {
            args: Prisma.CarDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CarUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CarUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload>[]
          }
          upsert: {
            args: Prisma.CarUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload>
          }
          aggregate: {
            args: Prisma.CarAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCar>
          }
          groupBy: {
            args: Prisma.CarGroupByArgs<ExtArgs>
            result: $Utils.Optional<CarGroupByOutputType>[]
          }
          count: {
            args: Prisma.CarCountArgs<ExtArgs>
            result: $Utils.Optional<CarCountAggregateOutputType> | number
          }
        }
      }
      CarModel: {
        payload: Prisma.$CarModelPayload<ExtArgs>
        fields: Prisma.CarModelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CarModelFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarModelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CarModelFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarModelPayload>
          }
          findFirst: {
            args: Prisma.CarModelFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarModelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CarModelFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarModelPayload>
          }
          findMany: {
            args: Prisma.CarModelFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarModelPayload>[]
          }
          create: {
            args: Prisma.CarModelCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarModelPayload>
          }
          createMany: {
            args: Prisma.CarModelCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CarModelCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarModelPayload>[]
          }
          delete: {
            args: Prisma.CarModelDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarModelPayload>
          }
          update: {
            args: Prisma.CarModelUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarModelPayload>
          }
          deleteMany: {
            args: Prisma.CarModelDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CarModelUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CarModelUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarModelPayload>[]
          }
          upsert: {
            args: Prisma.CarModelUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarModelPayload>
          }
          aggregate: {
            args: Prisma.CarModelAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCarModel>
          }
          groupBy: {
            args: Prisma.CarModelGroupByArgs<ExtArgs>
            result: $Utils.Optional<CarModelGroupByOutputType>[]
          }
          count: {
            args: Prisma.CarModelCountArgs<ExtArgs>
            result: $Utils.Optional<CarModelCountAggregateOutputType> | number
          }
        }
      }
      Contract: {
        payload: Prisma.$ContractPayload<ExtArgs>
        fields: Prisma.ContractFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContractFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContractFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractPayload>
          }
          findFirst: {
            args: Prisma.ContractFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContractFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractPayload>
          }
          findMany: {
            args: Prisma.ContractFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractPayload>[]
          }
          create: {
            args: Prisma.ContractCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractPayload>
          }
          createMany: {
            args: Prisma.ContractCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContractCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractPayload>[]
          }
          delete: {
            args: Prisma.ContractDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractPayload>
          }
          update: {
            args: Prisma.ContractUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractPayload>
          }
          deleteMany: {
            args: Prisma.ContractDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContractUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ContractUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractPayload>[]
          }
          upsert: {
            args: Prisma.ContractUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractPayload>
          }
          aggregate: {
            args: Prisma.ContractAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContract>
          }
          groupBy: {
            args: Prisma.ContractGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContractGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContractCountArgs<ExtArgs>
            result: $Utils.Optional<ContractCountAggregateOutputType> | number
          }
        }
      }
      Meetings: {
        payload: Prisma.$MeetingsPayload<ExtArgs>
        fields: Prisma.MeetingsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MeetingsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MeetingsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingsPayload>
          }
          findFirst: {
            args: Prisma.MeetingsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MeetingsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingsPayload>
          }
          findMany: {
            args: Prisma.MeetingsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingsPayload>[]
          }
          create: {
            args: Prisma.MeetingsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingsPayload>
          }
          createMany: {
            args: Prisma.MeetingsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MeetingsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingsPayload>[]
          }
          delete: {
            args: Prisma.MeetingsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingsPayload>
          }
          update: {
            args: Prisma.MeetingsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingsPayload>
          }
          deleteMany: {
            args: Prisma.MeetingsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MeetingsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MeetingsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingsPayload>[]
          }
          upsert: {
            args: Prisma.MeetingsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingsPayload>
          }
          aggregate: {
            args: Prisma.MeetingsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMeetings>
          }
          groupBy: {
            args: Prisma.MeetingsGroupByArgs<ExtArgs>
            result: $Utils.Optional<MeetingsGroupByOutputType>[]
          }
          count: {
            args: Prisma.MeetingsCountArgs<ExtArgs>
            result: $Utils.Optional<MeetingsCountAggregateOutputType> | number
          }
        }
      }
      ContractDocument: {
        payload: Prisma.$ContractDocumentPayload<ExtArgs>
        fields: Prisma.ContractDocumentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContractDocumentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractDocumentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContractDocumentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractDocumentPayload>
          }
          findFirst: {
            args: Prisma.ContractDocumentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractDocumentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContractDocumentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractDocumentPayload>
          }
          findMany: {
            args: Prisma.ContractDocumentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractDocumentPayload>[]
          }
          create: {
            args: Prisma.ContractDocumentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractDocumentPayload>
          }
          createMany: {
            args: Prisma.ContractDocumentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContractDocumentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractDocumentPayload>[]
          }
          delete: {
            args: Prisma.ContractDocumentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractDocumentPayload>
          }
          update: {
            args: Prisma.ContractDocumentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractDocumentPayload>
          }
          deleteMany: {
            args: Prisma.ContractDocumentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContractDocumentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ContractDocumentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractDocumentPayload>[]
          }
          upsert: {
            args: Prisma.ContractDocumentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractDocumentPayload>
          }
          aggregate: {
            args: Prisma.ContractDocumentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContractDocument>
          }
          groupBy: {
            args: Prisma.ContractDocumentGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContractDocumentGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContractDocumentCountArgs<ExtArgs>
            result: $Utils.Optional<ContractDocumentCountAggregateOutputType> | number
          }
        }
      }
      ContractDocumentRelation: {
        payload: Prisma.$ContractDocumentRelationPayload<ExtArgs>
        fields: Prisma.ContractDocumentRelationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContractDocumentRelationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractDocumentRelationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContractDocumentRelationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractDocumentRelationPayload>
          }
          findFirst: {
            args: Prisma.ContractDocumentRelationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractDocumentRelationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContractDocumentRelationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractDocumentRelationPayload>
          }
          findMany: {
            args: Prisma.ContractDocumentRelationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractDocumentRelationPayload>[]
          }
          create: {
            args: Prisma.ContractDocumentRelationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractDocumentRelationPayload>
          }
          createMany: {
            args: Prisma.ContractDocumentRelationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContractDocumentRelationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractDocumentRelationPayload>[]
          }
          delete: {
            args: Prisma.ContractDocumentRelationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractDocumentRelationPayload>
          }
          update: {
            args: Prisma.ContractDocumentRelationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractDocumentRelationPayload>
          }
          deleteMany: {
            args: Prisma.ContractDocumentRelationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContractDocumentRelationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ContractDocumentRelationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractDocumentRelationPayload>[]
          }
          upsert: {
            args: Prisma.ContractDocumentRelationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractDocumentRelationPayload>
          }
          aggregate: {
            args: Prisma.ContractDocumentRelationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContractDocumentRelation>
          }
          groupBy: {
            args: Prisma.ContractDocumentRelationGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContractDocumentRelationGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContractDocumentRelationCountArgs<ExtArgs>
            result: $Utils.Optional<ContractDocumentRelationCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    company?: CompanyOmit
    user?: UserOmit
    customer?: CustomerOmit
    car?: CarOmit
    carModel?: CarModelOmit
    contract?: ContractOmit
    meetings?: MeetingsOmit
    contractDocument?: ContractDocumentOmit
    contractDocumentRelation?: ContractDocumentRelationOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CompanyCountOutputType
   */

  export type CompanyCountOutputType = {
    user: number
    customer: number
    car: number
    contract: number
  }

  export type CompanyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | CompanyCountOutputTypeCountUserArgs
    customer?: boolean | CompanyCountOutputTypeCountCustomerArgs
    car?: boolean | CompanyCountOutputTypeCountCarArgs
    contract?: boolean | CompanyCountOutputTypeCountContractArgs
  }

  // Custom InputTypes
  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyCountOutputType
     */
    select?: CompanyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountCustomerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerWhereInput
  }

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountCarArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CarWhereInput
  }

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountContractArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContractWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    contract: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contract?: boolean | UserCountOutputTypeCountContractArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountContractArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContractWhereInput
  }


  /**
   * Count Type CustomerCountOutputType
   */

  export type CustomerCountOutputType = {
    contract: number
  }

  export type CustomerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contract?: boolean | CustomerCountOutputTypeCountContractArgs
  }

  // Custom InputTypes
  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerCountOutputType
     */
    select?: CustomerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountContractArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContractWhereInput
  }


  /**
   * Count Type CarCountOutputType
   */

  export type CarCountOutputType = {
    contract: number
  }

  export type CarCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contract?: boolean | CarCountOutputTypeCountContractArgs
  }

  // Custom InputTypes
  /**
   * CarCountOutputType without action
   */
  export type CarCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarCountOutputType
     */
    select?: CarCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CarCountOutputType without action
   */
  export type CarCountOutputTypeCountContractArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContractWhereInput
  }


  /**
   * Count Type CarModelCountOutputType
   */

  export type CarModelCountOutputType = {
    car: number
  }

  export type CarModelCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    car?: boolean | CarModelCountOutputTypeCountCarArgs
  }

  // Custom InputTypes
  /**
   * CarModelCountOutputType without action
   */
  export type CarModelCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarModelCountOutputType
     */
    select?: CarModelCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CarModelCountOutputType without action
   */
  export type CarModelCountOutputTypeCountCarArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CarWhereInput
  }


  /**
   * Count Type ContractCountOutputType
   */

  export type ContractCountOutputType = {
    meetings: number
    contractDocumentRelation: number
  }

  export type ContractCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meetings?: boolean | ContractCountOutputTypeCountMeetingsArgs
    contractDocumentRelation?: boolean | ContractCountOutputTypeCountContractDocumentRelationArgs
  }

  // Custom InputTypes
  /**
   * ContractCountOutputType without action
   */
  export type ContractCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContractCountOutputType
     */
    select?: ContractCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ContractCountOutputType without action
   */
  export type ContractCountOutputTypeCountMeetingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MeetingsWhereInput
  }

  /**
   * ContractCountOutputType without action
   */
  export type ContractCountOutputTypeCountContractDocumentRelationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContractDocumentRelationWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Company
   */

  export type AggregateCompany = {
    _count: CompanyCountAggregateOutputType | null
    _avg: CompanyAvgAggregateOutputType | null
    _sum: CompanySumAggregateOutputType | null
    _min: CompanyMinAggregateOutputType | null
    _max: CompanyMaxAggregateOutputType | null
  }

  export type CompanyAvgAggregateOutputType = {
    id: number | null
  }

  export type CompanySumAggregateOutputType = {
    id: number | null
  }

  export type CompanyMinAggregateOutputType = {
    id: number | null
    companyName: string | null
    companyCode: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CompanyMaxAggregateOutputType = {
    id: number | null
    companyName: string | null
    companyCode: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CompanyCountAggregateOutputType = {
    id: number
    companyName: number
    companyCode: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CompanyAvgAggregateInputType = {
    id?: true
  }

  export type CompanySumAggregateInputType = {
    id?: true
  }

  export type CompanyMinAggregateInputType = {
    id?: true
    companyName?: true
    companyCode?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CompanyMaxAggregateInputType = {
    id?: true
    companyName?: true
    companyCode?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CompanyCountAggregateInputType = {
    id?: true
    companyName?: true
    companyCode?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CompanyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Company to aggregate.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Companies
    **/
    _count?: true | CompanyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CompanyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CompanySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompanyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompanyMaxAggregateInputType
  }

  export type GetCompanyAggregateType<T extends CompanyAggregateArgs> = {
        [P in keyof T & keyof AggregateCompany]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompany[P]>
      : GetScalarType<T[P], AggregateCompany[P]>
  }




  export type CompanyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompanyWhereInput
    orderBy?: CompanyOrderByWithAggregationInput | CompanyOrderByWithAggregationInput[]
    by: CompanyScalarFieldEnum[] | CompanyScalarFieldEnum
    having?: CompanyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompanyCountAggregateInputType | true
    _avg?: CompanyAvgAggregateInputType
    _sum?: CompanySumAggregateInputType
    _min?: CompanyMinAggregateInputType
    _max?: CompanyMaxAggregateInputType
  }

  export type CompanyGroupByOutputType = {
    id: number
    companyName: string
    companyCode: string
    createdAt: Date
    updatedAt: Date
    _count: CompanyCountAggregateOutputType | null
    _avg: CompanyAvgAggregateOutputType | null
    _sum: CompanySumAggregateOutputType | null
    _min: CompanyMinAggregateOutputType | null
    _max: CompanyMaxAggregateOutputType | null
  }

  type GetCompanyGroupByPayload<T extends CompanyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompanyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompanyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompanyGroupByOutputType[P]>
            : GetScalarType<T[P], CompanyGroupByOutputType[P]>
        }
      >
    >


  export type CompanySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyName?: boolean
    companyCode?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | Company$userArgs<ExtArgs>
    customer?: boolean | Company$customerArgs<ExtArgs>
    car?: boolean | Company$carArgs<ExtArgs>
    contract?: boolean | Company$contractArgs<ExtArgs>
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["company"]>

  export type CompanySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyName?: boolean
    companyCode?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["company"]>

  export type CompanySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyName?: boolean
    companyCode?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["company"]>

  export type CompanySelectScalar = {
    id?: boolean
    companyName?: boolean
    companyCode?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CompanyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "companyName" | "companyCode" | "createdAt" | "updatedAt", ExtArgs["result"]["company"]>
  export type CompanyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Company$userArgs<ExtArgs>
    customer?: boolean | Company$customerArgs<ExtArgs>
    car?: boolean | Company$carArgs<ExtArgs>
    contract?: boolean | Company$contractArgs<ExtArgs>
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CompanyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CompanyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CompanyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Company"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>[]
      customer: Prisma.$CustomerPayload<ExtArgs>[]
      car: Prisma.$CarPayload<ExtArgs>[]
      contract: Prisma.$ContractPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      companyName: string
      companyCode: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["company"]>
    composites: {}
  }

  type CompanyGetPayload<S extends boolean | null | undefined | CompanyDefaultArgs> = $Result.GetResult<Prisma.$CompanyPayload, S>

  type CompanyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CompanyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CompanyCountAggregateInputType | true
    }

  export interface CompanyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Company'], meta: { name: 'Company' } }
    /**
     * Find zero or one Company that matches the filter.
     * @param {CompanyFindUniqueArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CompanyFindUniqueArgs>(args: SelectSubset<T, CompanyFindUniqueArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Company that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CompanyFindUniqueOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CompanyFindUniqueOrThrowArgs>(args: SelectSubset<T, CompanyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Company that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindFirstArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CompanyFindFirstArgs>(args?: SelectSubset<T, CompanyFindFirstArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Company that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindFirstOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CompanyFindFirstOrThrowArgs>(args?: SelectSubset<T, CompanyFindFirstOrThrowArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Companies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Companies
     * const companies = await prisma.company.findMany()
     * 
     * // Get first 10 Companies
     * const companies = await prisma.company.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const companyWithIdOnly = await prisma.company.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CompanyFindManyArgs>(args?: SelectSubset<T, CompanyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Company.
     * @param {CompanyCreateArgs} args - Arguments to create a Company.
     * @example
     * // Create one Company
     * const Company = await prisma.company.create({
     *   data: {
     *     // ... data to create a Company
     *   }
     * })
     * 
     */
    create<T extends CompanyCreateArgs>(args: SelectSubset<T, CompanyCreateArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Companies.
     * @param {CompanyCreateManyArgs} args - Arguments to create many Companies.
     * @example
     * // Create many Companies
     * const company = await prisma.company.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CompanyCreateManyArgs>(args?: SelectSubset<T, CompanyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Companies and returns the data saved in the database.
     * @param {CompanyCreateManyAndReturnArgs} args - Arguments to create many Companies.
     * @example
     * // Create many Companies
     * const company = await prisma.company.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Companies and only return the `id`
     * const companyWithIdOnly = await prisma.company.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CompanyCreateManyAndReturnArgs>(args?: SelectSubset<T, CompanyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Company.
     * @param {CompanyDeleteArgs} args - Arguments to delete one Company.
     * @example
     * // Delete one Company
     * const Company = await prisma.company.delete({
     *   where: {
     *     // ... filter to delete one Company
     *   }
     * })
     * 
     */
    delete<T extends CompanyDeleteArgs>(args: SelectSubset<T, CompanyDeleteArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Company.
     * @param {CompanyUpdateArgs} args - Arguments to update one Company.
     * @example
     * // Update one Company
     * const company = await prisma.company.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CompanyUpdateArgs>(args: SelectSubset<T, CompanyUpdateArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Companies.
     * @param {CompanyDeleteManyArgs} args - Arguments to filter Companies to delete.
     * @example
     * // Delete a few Companies
     * const { count } = await prisma.company.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CompanyDeleteManyArgs>(args?: SelectSubset<T, CompanyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CompanyUpdateManyArgs>(args: SelectSubset<T, CompanyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companies and returns the data updated in the database.
     * @param {CompanyUpdateManyAndReturnArgs} args - Arguments to update many Companies.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Companies and only return the `id`
     * const companyWithIdOnly = await prisma.company.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CompanyUpdateManyAndReturnArgs>(args: SelectSubset<T, CompanyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Company.
     * @param {CompanyUpsertArgs} args - Arguments to update or create a Company.
     * @example
     * // Update or create a Company
     * const company = await prisma.company.upsert({
     *   create: {
     *     // ... data to create a Company
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Company we want to update
     *   }
     * })
     */
    upsert<T extends CompanyUpsertArgs>(args: SelectSubset<T, CompanyUpsertArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyCountArgs} args - Arguments to filter Companies to count.
     * @example
     * // Count the number of Companies
     * const count = await prisma.company.count({
     *   where: {
     *     // ... the filter for the Companies we want to count
     *   }
     * })
    **/
    count<T extends CompanyCountArgs>(
      args?: Subset<T, CompanyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CompanyAggregateArgs>(args: Subset<T, CompanyAggregateArgs>): Prisma.PrismaPromise<GetCompanyAggregateType<T>>

    /**
     * Group by Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CompanyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompanyGroupByArgs['orderBy'] }
        : { orderBy?: CompanyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CompanyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompanyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Company model
   */
  readonly fields: CompanyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Company.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompanyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends Company$userArgs<ExtArgs> = {}>(args?: Subset<T, Company$userArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    customer<T extends Company$customerArgs<ExtArgs> = {}>(args?: Subset<T, Company$customerArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    car<T extends Company$carArgs<ExtArgs> = {}>(args?: Subset<T, Company$carArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    contract<T extends Company$contractArgs<ExtArgs> = {}>(args?: Subset<T, Company$contractArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Company model
   */
  interface CompanyFieldRefs {
    readonly id: FieldRef<"Company", 'Int'>
    readonly companyName: FieldRef<"Company", 'String'>
    readonly companyCode: FieldRef<"Company", 'String'>
    readonly createdAt: FieldRef<"Company", 'DateTime'>
    readonly updatedAt: FieldRef<"Company", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Company findUnique
   */
  export type CompanyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company findUniqueOrThrow
   */
  export type CompanyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company findFirst
   */
  export type CompanyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company findFirstOrThrow
   */
  export type CompanyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company findMany
   */
  export type CompanyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Companies to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company create
   */
  export type CompanyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The data needed to create a Company.
     */
    data: XOR<CompanyCreateInput, CompanyUncheckedCreateInput>
  }

  /**
   * Company createMany
   */
  export type CompanyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Companies.
     */
    data: CompanyCreateManyInput | CompanyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Company createManyAndReturn
   */
  export type CompanyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * The data used to create many Companies.
     */
    data: CompanyCreateManyInput | CompanyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Company update
   */
  export type CompanyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The data needed to update a Company.
     */
    data: XOR<CompanyUpdateInput, CompanyUncheckedUpdateInput>
    /**
     * Choose, which Company to update.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company updateMany
   */
  export type CompanyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Companies.
     */
    data: XOR<CompanyUpdateManyMutationInput, CompanyUncheckedUpdateManyInput>
    /**
     * Filter which Companies to update
     */
    where?: CompanyWhereInput
    /**
     * Limit how many Companies to update.
     */
    limit?: number
  }

  /**
   * Company updateManyAndReturn
   */
  export type CompanyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * The data used to update Companies.
     */
    data: XOR<CompanyUpdateManyMutationInput, CompanyUncheckedUpdateManyInput>
    /**
     * Filter which Companies to update
     */
    where?: CompanyWhereInput
    /**
     * Limit how many Companies to update.
     */
    limit?: number
  }

  /**
   * Company upsert
   */
  export type CompanyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The filter to search for the Company to update in case it exists.
     */
    where: CompanyWhereUniqueInput
    /**
     * In case the Company found by the `where` argument doesn't exist, create a new Company with this data.
     */
    create: XOR<CompanyCreateInput, CompanyUncheckedCreateInput>
    /**
     * In case the Company was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompanyUpdateInput, CompanyUncheckedUpdateInput>
  }

  /**
   * Company delete
   */
  export type CompanyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter which Company to delete.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company deleteMany
   */
  export type CompanyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Companies to delete
     */
    where?: CompanyWhereInput
    /**
     * Limit how many Companies to delete.
     */
    limit?: number
  }

  /**
   * Company.user
   */
  export type Company$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Company.customer
   */
  export type Company$customerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    where?: CustomerWhereInput
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    cursor?: CustomerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Company.car
   */
  export type Company$carArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
    where?: CarWhereInput
    orderBy?: CarOrderByWithRelationInput | CarOrderByWithRelationInput[]
    cursor?: CarWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CarScalarFieldEnum | CarScalarFieldEnum[]
  }

  /**
   * Company.contract
   */
  export type Company$contractArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    where?: ContractWhereInput
    orderBy?: ContractOrderByWithRelationInput | ContractOrderByWithRelationInput[]
    cursor?: ContractWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContractScalarFieldEnum | ContractScalarFieldEnum[]
  }

  /**
   * Company without action
   */
  export type CompanyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    companyId: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    companyId: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    employeeNumber: string | null
    phoneNumber: string | null
    password: string | null
    imageUrl: string | null
    refreshToken: string | null
    isAdmin: boolean | null
    companyId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    employeeNumber: string | null
    phoneNumber: string | null
    password: string | null
    imageUrl: string | null
    refreshToken: string | null
    isAdmin: boolean | null
    companyId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    employeeNumber: number
    phoneNumber: number
    password: number
    imageUrl: number
    refreshToken: number
    isAdmin: number
    companyId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    companyId?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    companyId?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    employeeNumber?: true
    phoneNumber?: true
    password?: true
    imageUrl?: true
    refreshToken?: true
    isAdmin?: true
    companyId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    employeeNumber?: true
    phoneNumber?: true
    password?: true
    imageUrl?: true
    refreshToken?: true
    isAdmin?: true
    companyId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    employeeNumber?: true
    phoneNumber?: true
    password?: true
    imageUrl?: true
    refreshToken?: true
    isAdmin?: true
    companyId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    name: string
    email: string
    employeeNumber: string
    phoneNumber: string
    password: string
    imageUrl: string | null
    refreshToken: string | null
    isAdmin: boolean
    companyId: number
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    employeeNumber?: boolean
    phoneNumber?: boolean
    password?: boolean
    imageUrl?: boolean
    refreshToken?: boolean
    isAdmin?: boolean
    companyId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    contract?: boolean | User$contractArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    employeeNumber?: boolean
    phoneNumber?: boolean
    password?: boolean
    imageUrl?: boolean
    refreshToken?: boolean
    isAdmin?: boolean
    companyId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    employeeNumber?: boolean
    phoneNumber?: boolean
    password?: boolean
    imageUrl?: boolean
    refreshToken?: boolean
    isAdmin?: boolean
    companyId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    employeeNumber?: boolean
    phoneNumber?: boolean
    password?: boolean
    imageUrl?: boolean
    refreshToken?: boolean
    isAdmin?: boolean
    companyId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "employeeNumber" | "phoneNumber" | "password" | "imageUrl" | "refreshToken" | "isAdmin" | "companyId" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    contract?: boolean | User$contractArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      company: Prisma.$CompanyPayload<ExtArgs>
      contract: Prisma.$ContractPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      employeeNumber: string
      phoneNumber: string
      password: string
      imageUrl: string | null
      refreshToken: string | null
      isAdmin: boolean
      companyId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    company<T extends CompanyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompanyDefaultArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    contract<T extends User$contractArgs<ExtArgs> = {}>(args?: Subset<T, User$contractArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly employeeNumber: FieldRef<"User", 'String'>
    readonly phoneNumber: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly imageUrl: FieldRef<"User", 'String'>
    readonly refreshToken: FieldRef<"User", 'String'>
    readonly isAdmin: FieldRef<"User", 'Boolean'>
    readonly companyId: FieldRef<"User", 'Int'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.contract
   */
  export type User$contractArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    where?: ContractWhereInput
    orderBy?: ContractOrderByWithRelationInput | ContractOrderByWithRelationInput[]
    cursor?: ContractWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContractScalarFieldEnum | ContractScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Customer
   */

  export type AggregateCustomer = {
    _count: CustomerCountAggregateOutputType | null
    _avg: CustomerAvgAggregateOutputType | null
    _sum: CustomerSumAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  export type CustomerAvgAggregateOutputType = {
    id: number | null
    companyId: number | null
  }

  export type CustomerSumAggregateOutputType = {
    id: number | null
    companyId: number | null
  }

  export type CustomerMinAggregateOutputType = {
    id: number | null
    name: string | null
    gender: $Enums.Gender | null
    phoneNumber: string | null
    ageGroup: $Enums.AgeGroup | null
    region: $Enums.Region | null
    email: string | null
    memo: string | null
    companyId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CustomerMaxAggregateOutputType = {
    id: number | null
    name: string | null
    gender: $Enums.Gender | null
    phoneNumber: string | null
    ageGroup: $Enums.AgeGroup | null
    region: $Enums.Region | null
    email: string | null
    memo: string | null
    companyId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CustomerCountAggregateOutputType = {
    id: number
    name: number
    gender: number
    phoneNumber: number
    ageGroup: number
    region: number
    email: number
    memo: number
    companyId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CustomerAvgAggregateInputType = {
    id?: true
    companyId?: true
  }

  export type CustomerSumAggregateInputType = {
    id?: true
    companyId?: true
  }

  export type CustomerMinAggregateInputType = {
    id?: true
    name?: true
    gender?: true
    phoneNumber?: true
    ageGroup?: true
    region?: true
    email?: true
    memo?: true
    companyId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CustomerMaxAggregateInputType = {
    id?: true
    name?: true
    gender?: true
    phoneNumber?: true
    ageGroup?: true
    region?: true
    email?: true
    memo?: true
    companyId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CustomerCountAggregateInputType = {
    id?: true
    name?: true
    gender?: true
    phoneNumber?: true
    ageGroup?: true
    region?: true
    email?: true
    memo?: true
    companyId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CustomerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customer to aggregate.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Customers
    **/
    _count?: true | CustomerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CustomerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CustomerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomerMaxAggregateInputType
  }

  export type GetCustomerAggregateType<T extends CustomerAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomer[P]>
      : GetScalarType<T[P], AggregateCustomer[P]>
  }




  export type CustomerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerWhereInput
    orderBy?: CustomerOrderByWithAggregationInput | CustomerOrderByWithAggregationInput[]
    by: CustomerScalarFieldEnum[] | CustomerScalarFieldEnum
    having?: CustomerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomerCountAggregateInputType | true
    _avg?: CustomerAvgAggregateInputType
    _sum?: CustomerSumAggregateInputType
    _min?: CustomerMinAggregateInputType
    _max?: CustomerMaxAggregateInputType
  }

  export type CustomerGroupByOutputType = {
    id: number
    name: string
    gender: $Enums.Gender
    phoneNumber: string
    ageGroup: $Enums.AgeGroup | null
    region: $Enums.Region | null
    email: string
    memo: string | null
    companyId: number
    createdAt: Date
    updatedAt: Date
    _count: CustomerCountAggregateOutputType | null
    _avg: CustomerAvgAggregateOutputType | null
    _sum: CustomerSumAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  type GetCustomerGroupByPayload<T extends CustomerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomerGroupByOutputType[P]>
            : GetScalarType<T[P], CustomerGroupByOutputType[P]>
        }
      >
    >


  export type CustomerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    gender?: boolean
    phoneNumber?: boolean
    ageGroup?: boolean
    region?: boolean
    email?: boolean
    memo?: boolean
    companyId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    contract?: boolean | Customer$contractArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    gender?: boolean
    phoneNumber?: boolean
    ageGroup?: boolean
    region?: boolean
    email?: boolean
    memo?: boolean
    companyId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    gender?: boolean
    phoneNumber?: boolean
    ageGroup?: boolean
    region?: boolean
    email?: boolean
    memo?: boolean
    companyId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectScalar = {
    id?: boolean
    name?: boolean
    gender?: boolean
    phoneNumber?: boolean
    ageGroup?: boolean
    region?: boolean
    email?: boolean
    memo?: boolean
    companyId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CustomerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "gender" | "phoneNumber" | "ageGroup" | "region" | "email" | "memo" | "companyId" | "createdAt" | "updatedAt", ExtArgs["result"]["customer"]>
  export type CustomerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    contract?: boolean | Customer$contractArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CustomerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }
  export type CustomerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }

  export type $CustomerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Customer"
    objects: {
      company: Prisma.$CompanyPayload<ExtArgs>
      contract: Prisma.$ContractPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      gender: $Enums.Gender
      phoneNumber: string
      ageGroup: $Enums.AgeGroup | null
      region: $Enums.Region | null
      email: string
      memo: string | null
      companyId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["customer"]>
    composites: {}
  }

  type CustomerGetPayload<S extends boolean | null | undefined | CustomerDefaultArgs> = $Result.GetResult<Prisma.$CustomerPayload, S>

  type CustomerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CustomerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CustomerCountAggregateInputType | true
    }

  export interface CustomerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Customer'], meta: { name: 'Customer' } }
    /**
     * Find zero or one Customer that matches the filter.
     * @param {CustomerFindUniqueArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CustomerFindUniqueArgs>(args: SelectSubset<T, CustomerFindUniqueArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Customer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CustomerFindUniqueOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CustomerFindUniqueOrThrowArgs>(args: SelectSubset<T, CustomerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CustomerFindFirstArgs>(args?: SelectSubset<T, CustomerFindFirstArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CustomerFindFirstOrThrowArgs>(args?: SelectSubset<T, CustomerFindFirstOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Customers
     * const customers = await prisma.customer.findMany()
     * 
     * // Get first 10 Customers
     * const customers = await prisma.customer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customerWithIdOnly = await prisma.customer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CustomerFindManyArgs>(args?: SelectSubset<T, CustomerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Customer.
     * @param {CustomerCreateArgs} args - Arguments to create a Customer.
     * @example
     * // Create one Customer
     * const Customer = await prisma.customer.create({
     *   data: {
     *     // ... data to create a Customer
     *   }
     * })
     * 
     */
    create<T extends CustomerCreateArgs>(args: SelectSubset<T, CustomerCreateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Customers.
     * @param {CustomerCreateManyArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CustomerCreateManyArgs>(args?: SelectSubset<T, CustomerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Customers and returns the data saved in the database.
     * @param {CustomerCreateManyAndReturnArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Customers and only return the `id`
     * const customerWithIdOnly = await prisma.customer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CustomerCreateManyAndReturnArgs>(args?: SelectSubset<T, CustomerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Customer.
     * @param {CustomerDeleteArgs} args - Arguments to delete one Customer.
     * @example
     * // Delete one Customer
     * const Customer = await prisma.customer.delete({
     *   where: {
     *     // ... filter to delete one Customer
     *   }
     * })
     * 
     */
    delete<T extends CustomerDeleteArgs>(args: SelectSubset<T, CustomerDeleteArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Customer.
     * @param {CustomerUpdateArgs} args - Arguments to update one Customer.
     * @example
     * // Update one Customer
     * const customer = await prisma.customer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CustomerUpdateArgs>(args: SelectSubset<T, CustomerUpdateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Customers.
     * @param {CustomerDeleteManyArgs} args - Arguments to filter Customers to delete.
     * @example
     * // Delete a few Customers
     * const { count } = await prisma.customer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CustomerDeleteManyArgs>(args?: SelectSubset<T, CustomerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CustomerUpdateManyArgs>(args: SelectSubset<T, CustomerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers and returns the data updated in the database.
     * @param {CustomerUpdateManyAndReturnArgs} args - Arguments to update many Customers.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Customers and only return the `id`
     * const customerWithIdOnly = await prisma.customer.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CustomerUpdateManyAndReturnArgs>(args: SelectSubset<T, CustomerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Customer.
     * @param {CustomerUpsertArgs} args - Arguments to update or create a Customer.
     * @example
     * // Update or create a Customer
     * const customer = await prisma.customer.upsert({
     *   create: {
     *     // ... data to create a Customer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Customer we want to update
     *   }
     * })
     */
    upsert<T extends CustomerUpsertArgs>(args: SelectSubset<T, CustomerUpsertArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerCountArgs} args - Arguments to filter Customers to count.
     * @example
     * // Count the number of Customers
     * const count = await prisma.customer.count({
     *   where: {
     *     // ... the filter for the Customers we want to count
     *   }
     * })
    **/
    count<T extends CustomerCountArgs>(
      args?: Subset<T, CustomerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CustomerAggregateArgs>(args: Subset<T, CustomerAggregateArgs>): Prisma.PrismaPromise<GetCustomerAggregateType<T>>

    /**
     * Group by Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CustomerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomerGroupByArgs['orderBy'] }
        : { orderBy?: CustomerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CustomerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Customer model
   */
  readonly fields: CustomerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Customer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustomerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    company<T extends CompanyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompanyDefaultArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    contract<T extends Customer$contractArgs<ExtArgs> = {}>(args?: Subset<T, Customer$contractArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Customer model
   */
  interface CustomerFieldRefs {
    readonly id: FieldRef<"Customer", 'Int'>
    readonly name: FieldRef<"Customer", 'String'>
    readonly gender: FieldRef<"Customer", 'Gender'>
    readonly phoneNumber: FieldRef<"Customer", 'String'>
    readonly ageGroup: FieldRef<"Customer", 'AgeGroup'>
    readonly region: FieldRef<"Customer", 'Region'>
    readonly email: FieldRef<"Customer", 'String'>
    readonly memo: FieldRef<"Customer", 'String'>
    readonly companyId: FieldRef<"Customer", 'Int'>
    readonly createdAt: FieldRef<"Customer", 'DateTime'>
    readonly updatedAt: FieldRef<"Customer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Customer findUnique
   */
  export type CustomerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findUniqueOrThrow
   */
  export type CustomerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findFirst
   */
  export type CustomerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findFirstOrThrow
   */
  export type CustomerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findMany
   */
  export type CustomerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customers to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer create
   */
  export type CustomerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to create a Customer.
     */
    data: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
  }

  /**
   * Customer createMany
   */
  export type CustomerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Customer createManyAndReturn
   */
  export type CustomerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Customer update
   */
  export type CustomerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to update a Customer.
     */
    data: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
    /**
     * Choose, which Customer to update.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer updateMany
   */
  export type CustomerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to update.
     */
    limit?: number
  }

  /**
   * Customer updateManyAndReturn
   */
  export type CustomerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Customer upsert
   */
  export type CustomerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The filter to search for the Customer to update in case it exists.
     */
    where: CustomerWhereUniqueInput
    /**
     * In case the Customer found by the `where` argument doesn't exist, create a new Customer with this data.
     */
    create: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
    /**
     * In case the Customer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
  }

  /**
   * Customer delete
   */
  export type CustomerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter which Customer to delete.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer deleteMany
   */
  export type CustomerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customers to delete
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to delete.
     */
    limit?: number
  }

  /**
   * Customer.contract
   */
  export type Customer$contractArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    where?: ContractWhereInput
    orderBy?: ContractOrderByWithRelationInput | ContractOrderByWithRelationInput[]
    cursor?: ContractWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContractScalarFieldEnum | ContractScalarFieldEnum[]
  }

  /**
   * Customer without action
   */
  export type CustomerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
  }


  /**
   * Model Car
   */

  export type AggregateCar = {
    _count: CarCountAggregateOutputType | null
    _avg: CarAvgAggregateOutputType | null
    _sum: CarSumAggregateOutputType | null
    _min: CarMinAggregateOutputType | null
    _max: CarMaxAggregateOutputType | null
  }

  export type CarAvgAggregateOutputType = {
    id: number | null
    manufacturingYear: number | null
    mileage: number | null
    price: number | null
    accidentCount: number | null
    companyId: number | null
  }

  export type CarSumAggregateOutputType = {
    id: number | null
    manufacturingYear: number | null
    mileage: number | null
    price: number | null
    accidentCount: number | null
    companyId: number | null
  }

  export type CarMinAggregateOutputType = {
    id: number | null
    carNumber: string | null
    manufacturingYear: number | null
    mileage: number | null
    price: number | null
    accidentCount: number | null
    explanation: string | null
    accidentDetails: string | null
    status: $Enums.CarStatus | null
    model: string | null
    companyId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CarMaxAggregateOutputType = {
    id: number | null
    carNumber: string | null
    manufacturingYear: number | null
    mileage: number | null
    price: number | null
    accidentCount: number | null
    explanation: string | null
    accidentDetails: string | null
    status: $Enums.CarStatus | null
    model: string | null
    companyId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CarCountAggregateOutputType = {
    id: number
    carNumber: number
    manufacturingYear: number
    mileage: number
    price: number
    accidentCount: number
    explanation: number
    accidentDetails: number
    status: number
    model: number
    companyId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CarAvgAggregateInputType = {
    id?: true
    manufacturingYear?: true
    mileage?: true
    price?: true
    accidentCount?: true
    companyId?: true
  }

  export type CarSumAggregateInputType = {
    id?: true
    manufacturingYear?: true
    mileage?: true
    price?: true
    accidentCount?: true
    companyId?: true
  }

  export type CarMinAggregateInputType = {
    id?: true
    carNumber?: true
    manufacturingYear?: true
    mileage?: true
    price?: true
    accidentCount?: true
    explanation?: true
    accidentDetails?: true
    status?: true
    model?: true
    companyId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CarMaxAggregateInputType = {
    id?: true
    carNumber?: true
    manufacturingYear?: true
    mileage?: true
    price?: true
    accidentCount?: true
    explanation?: true
    accidentDetails?: true
    status?: true
    model?: true
    companyId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CarCountAggregateInputType = {
    id?: true
    carNumber?: true
    manufacturingYear?: true
    mileage?: true
    price?: true
    accidentCount?: true
    explanation?: true
    accidentDetails?: true
    status?: true
    model?: true
    companyId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CarAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Car to aggregate.
     */
    where?: CarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cars to fetch.
     */
    orderBy?: CarOrderByWithRelationInput | CarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cars
    **/
    _count?: true | CarCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CarAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CarSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CarMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CarMaxAggregateInputType
  }

  export type GetCarAggregateType<T extends CarAggregateArgs> = {
        [P in keyof T & keyof AggregateCar]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCar[P]>
      : GetScalarType<T[P], AggregateCar[P]>
  }




  export type CarGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CarWhereInput
    orderBy?: CarOrderByWithAggregationInput | CarOrderByWithAggregationInput[]
    by: CarScalarFieldEnum[] | CarScalarFieldEnum
    having?: CarScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CarCountAggregateInputType | true
    _avg?: CarAvgAggregateInputType
    _sum?: CarSumAggregateInputType
    _min?: CarMinAggregateInputType
    _max?: CarMaxAggregateInputType
  }

  export type CarGroupByOutputType = {
    id: number
    carNumber: string
    manufacturingYear: number
    mileage: number
    price: number
    accidentCount: number
    explanation: string | null
    accidentDetails: string | null
    status: $Enums.CarStatus
    model: string
    companyId: number
    createdAt: Date
    updatedAt: Date
    _count: CarCountAggregateOutputType | null
    _avg: CarAvgAggregateOutputType | null
    _sum: CarSumAggregateOutputType | null
    _min: CarMinAggregateOutputType | null
    _max: CarMaxAggregateOutputType | null
  }

  type GetCarGroupByPayload<T extends CarGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CarGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CarGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CarGroupByOutputType[P]>
            : GetScalarType<T[P], CarGroupByOutputType[P]>
        }
      >
    >


  export type CarSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    carNumber?: boolean
    manufacturingYear?: boolean
    mileage?: boolean
    price?: boolean
    accidentCount?: boolean
    explanation?: boolean
    accidentDetails?: boolean
    status?: boolean
    model?: boolean
    companyId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    carModel?: boolean | CarModelDefaultArgs<ExtArgs>
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    contract?: boolean | Car$contractArgs<ExtArgs>
    _count?: boolean | CarCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["car"]>

  export type CarSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    carNumber?: boolean
    manufacturingYear?: boolean
    mileage?: boolean
    price?: boolean
    accidentCount?: boolean
    explanation?: boolean
    accidentDetails?: boolean
    status?: boolean
    model?: boolean
    companyId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    carModel?: boolean | CarModelDefaultArgs<ExtArgs>
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["car"]>

  export type CarSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    carNumber?: boolean
    manufacturingYear?: boolean
    mileage?: boolean
    price?: boolean
    accidentCount?: boolean
    explanation?: boolean
    accidentDetails?: boolean
    status?: boolean
    model?: boolean
    companyId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    carModel?: boolean | CarModelDefaultArgs<ExtArgs>
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["car"]>

  export type CarSelectScalar = {
    id?: boolean
    carNumber?: boolean
    manufacturingYear?: boolean
    mileage?: boolean
    price?: boolean
    accidentCount?: boolean
    explanation?: boolean
    accidentDetails?: boolean
    status?: boolean
    model?: boolean
    companyId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CarOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "carNumber" | "manufacturingYear" | "mileage" | "price" | "accidentCount" | "explanation" | "accidentDetails" | "status" | "model" | "companyId" | "createdAt" | "updatedAt", ExtArgs["result"]["car"]>
  export type CarInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    carModel?: boolean | CarModelDefaultArgs<ExtArgs>
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    contract?: boolean | Car$contractArgs<ExtArgs>
    _count?: boolean | CarCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CarIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    carModel?: boolean | CarModelDefaultArgs<ExtArgs>
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }
  export type CarIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    carModel?: boolean | CarModelDefaultArgs<ExtArgs>
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }

  export type $CarPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Car"
    objects: {
      carModel: Prisma.$CarModelPayload<ExtArgs>
      company: Prisma.$CompanyPayload<ExtArgs>
      contract: Prisma.$ContractPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      carNumber: string
      manufacturingYear: number
      mileage: number
      price: number
      accidentCount: number
      explanation: string | null
      accidentDetails: string | null
      status: $Enums.CarStatus
      model: string
      companyId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["car"]>
    composites: {}
  }

  type CarGetPayload<S extends boolean | null | undefined | CarDefaultArgs> = $Result.GetResult<Prisma.$CarPayload, S>

  type CarCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CarFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CarCountAggregateInputType | true
    }

  export interface CarDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Car'], meta: { name: 'Car' } }
    /**
     * Find zero or one Car that matches the filter.
     * @param {CarFindUniqueArgs} args - Arguments to find a Car
     * @example
     * // Get one Car
     * const car = await prisma.car.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CarFindUniqueArgs>(args: SelectSubset<T, CarFindUniqueArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Car that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CarFindUniqueOrThrowArgs} args - Arguments to find a Car
     * @example
     * // Get one Car
     * const car = await prisma.car.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CarFindUniqueOrThrowArgs>(args: SelectSubset<T, CarFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Car that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarFindFirstArgs} args - Arguments to find a Car
     * @example
     * // Get one Car
     * const car = await prisma.car.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CarFindFirstArgs>(args?: SelectSubset<T, CarFindFirstArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Car that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarFindFirstOrThrowArgs} args - Arguments to find a Car
     * @example
     * // Get one Car
     * const car = await prisma.car.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CarFindFirstOrThrowArgs>(args?: SelectSubset<T, CarFindFirstOrThrowArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cars that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cars
     * const cars = await prisma.car.findMany()
     * 
     * // Get first 10 Cars
     * const cars = await prisma.car.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const carWithIdOnly = await prisma.car.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CarFindManyArgs>(args?: SelectSubset<T, CarFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Car.
     * @param {CarCreateArgs} args - Arguments to create a Car.
     * @example
     * // Create one Car
     * const Car = await prisma.car.create({
     *   data: {
     *     // ... data to create a Car
     *   }
     * })
     * 
     */
    create<T extends CarCreateArgs>(args: SelectSubset<T, CarCreateArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cars.
     * @param {CarCreateManyArgs} args - Arguments to create many Cars.
     * @example
     * // Create many Cars
     * const car = await prisma.car.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CarCreateManyArgs>(args?: SelectSubset<T, CarCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cars and returns the data saved in the database.
     * @param {CarCreateManyAndReturnArgs} args - Arguments to create many Cars.
     * @example
     * // Create many Cars
     * const car = await prisma.car.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cars and only return the `id`
     * const carWithIdOnly = await prisma.car.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CarCreateManyAndReturnArgs>(args?: SelectSubset<T, CarCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Car.
     * @param {CarDeleteArgs} args - Arguments to delete one Car.
     * @example
     * // Delete one Car
     * const Car = await prisma.car.delete({
     *   where: {
     *     // ... filter to delete one Car
     *   }
     * })
     * 
     */
    delete<T extends CarDeleteArgs>(args: SelectSubset<T, CarDeleteArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Car.
     * @param {CarUpdateArgs} args - Arguments to update one Car.
     * @example
     * // Update one Car
     * const car = await prisma.car.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CarUpdateArgs>(args: SelectSubset<T, CarUpdateArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cars.
     * @param {CarDeleteManyArgs} args - Arguments to filter Cars to delete.
     * @example
     * // Delete a few Cars
     * const { count } = await prisma.car.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CarDeleteManyArgs>(args?: SelectSubset<T, CarDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cars
     * const car = await prisma.car.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CarUpdateManyArgs>(args: SelectSubset<T, CarUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cars and returns the data updated in the database.
     * @param {CarUpdateManyAndReturnArgs} args - Arguments to update many Cars.
     * @example
     * // Update many Cars
     * const car = await prisma.car.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Cars and only return the `id`
     * const carWithIdOnly = await prisma.car.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CarUpdateManyAndReturnArgs>(args: SelectSubset<T, CarUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Car.
     * @param {CarUpsertArgs} args - Arguments to update or create a Car.
     * @example
     * // Update or create a Car
     * const car = await prisma.car.upsert({
     *   create: {
     *     // ... data to create a Car
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Car we want to update
     *   }
     * })
     */
    upsert<T extends CarUpsertArgs>(args: SelectSubset<T, CarUpsertArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarCountArgs} args - Arguments to filter Cars to count.
     * @example
     * // Count the number of Cars
     * const count = await prisma.car.count({
     *   where: {
     *     // ... the filter for the Cars we want to count
     *   }
     * })
    **/
    count<T extends CarCountArgs>(
      args?: Subset<T, CarCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CarCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Car.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CarAggregateArgs>(args: Subset<T, CarAggregateArgs>): Prisma.PrismaPromise<GetCarAggregateType<T>>

    /**
     * Group by Car.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CarGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CarGroupByArgs['orderBy'] }
        : { orderBy?: CarGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CarGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCarGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Car model
   */
  readonly fields: CarFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Car.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CarClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    carModel<T extends CarModelDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CarModelDefaultArgs<ExtArgs>>): Prisma__CarModelClient<$Result.GetResult<Prisma.$CarModelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    company<T extends CompanyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompanyDefaultArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    contract<T extends Car$contractArgs<ExtArgs> = {}>(args?: Subset<T, Car$contractArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Car model
   */
  interface CarFieldRefs {
    readonly id: FieldRef<"Car", 'Int'>
    readonly carNumber: FieldRef<"Car", 'String'>
    readonly manufacturingYear: FieldRef<"Car", 'Int'>
    readonly mileage: FieldRef<"Car", 'Int'>
    readonly price: FieldRef<"Car", 'Int'>
    readonly accidentCount: FieldRef<"Car", 'Int'>
    readonly explanation: FieldRef<"Car", 'String'>
    readonly accidentDetails: FieldRef<"Car", 'String'>
    readonly status: FieldRef<"Car", 'CarStatus'>
    readonly model: FieldRef<"Car", 'String'>
    readonly companyId: FieldRef<"Car", 'Int'>
    readonly createdAt: FieldRef<"Car", 'DateTime'>
    readonly updatedAt: FieldRef<"Car", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Car findUnique
   */
  export type CarFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
    /**
     * Filter, which Car to fetch.
     */
    where: CarWhereUniqueInput
  }

  /**
   * Car findUniqueOrThrow
   */
  export type CarFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
    /**
     * Filter, which Car to fetch.
     */
    where: CarWhereUniqueInput
  }

  /**
   * Car findFirst
   */
  export type CarFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
    /**
     * Filter, which Car to fetch.
     */
    where?: CarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cars to fetch.
     */
    orderBy?: CarOrderByWithRelationInput | CarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cars.
     */
    cursor?: CarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cars.
     */
    distinct?: CarScalarFieldEnum | CarScalarFieldEnum[]
  }

  /**
   * Car findFirstOrThrow
   */
  export type CarFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
    /**
     * Filter, which Car to fetch.
     */
    where?: CarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cars to fetch.
     */
    orderBy?: CarOrderByWithRelationInput | CarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cars.
     */
    cursor?: CarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cars.
     */
    distinct?: CarScalarFieldEnum | CarScalarFieldEnum[]
  }

  /**
   * Car findMany
   */
  export type CarFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
    /**
     * Filter, which Cars to fetch.
     */
    where?: CarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cars to fetch.
     */
    orderBy?: CarOrderByWithRelationInput | CarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cars.
     */
    cursor?: CarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cars.
     */
    skip?: number
    distinct?: CarScalarFieldEnum | CarScalarFieldEnum[]
  }

  /**
   * Car create
   */
  export type CarCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
    /**
     * The data needed to create a Car.
     */
    data: XOR<CarCreateInput, CarUncheckedCreateInput>
  }

  /**
   * Car createMany
   */
  export type CarCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cars.
     */
    data: CarCreateManyInput | CarCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Car createManyAndReturn
   */
  export type CarCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * The data used to create many Cars.
     */
    data: CarCreateManyInput | CarCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Car update
   */
  export type CarUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
    /**
     * The data needed to update a Car.
     */
    data: XOR<CarUpdateInput, CarUncheckedUpdateInput>
    /**
     * Choose, which Car to update.
     */
    where: CarWhereUniqueInput
  }

  /**
   * Car updateMany
   */
  export type CarUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cars.
     */
    data: XOR<CarUpdateManyMutationInput, CarUncheckedUpdateManyInput>
    /**
     * Filter which Cars to update
     */
    where?: CarWhereInput
    /**
     * Limit how many Cars to update.
     */
    limit?: number
  }

  /**
   * Car updateManyAndReturn
   */
  export type CarUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * The data used to update Cars.
     */
    data: XOR<CarUpdateManyMutationInput, CarUncheckedUpdateManyInput>
    /**
     * Filter which Cars to update
     */
    where?: CarWhereInput
    /**
     * Limit how many Cars to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Car upsert
   */
  export type CarUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
    /**
     * The filter to search for the Car to update in case it exists.
     */
    where: CarWhereUniqueInput
    /**
     * In case the Car found by the `where` argument doesn't exist, create a new Car with this data.
     */
    create: XOR<CarCreateInput, CarUncheckedCreateInput>
    /**
     * In case the Car was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CarUpdateInput, CarUncheckedUpdateInput>
  }

  /**
   * Car delete
   */
  export type CarDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
    /**
     * Filter which Car to delete.
     */
    where: CarWhereUniqueInput
  }

  /**
   * Car deleteMany
   */
  export type CarDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cars to delete
     */
    where?: CarWhereInput
    /**
     * Limit how many Cars to delete.
     */
    limit?: number
  }

  /**
   * Car.contract
   */
  export type Car$contractArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    where?: ContractWhereInput
    orderBy?: ContractOrderByWithRelationInput | ContractOrderByWithRelationInput[]
    cursor?: ContractWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContractScalarFieldEnum | ContractScalarFieldEnum[]
  }

  /**
   * Car without action
   */
  export type CarDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
  }


  /**
   * Model CarModel
   */

  export type AggregateCarModel = {
    _count: CarModelCountAggregateOutputType | null
    _min: CarModelMinAggregateOutputType | null
    _max: CarModelMaxAggregateOutputType | null
  }

  export type CarModelMinAggregateOutputType = {
    model: string | null
    manufacturer: string | null
    type: string | null
  }

  export type CarModelMaxAggregateOutputType = {
    model: string | null
    manufacturer: string | null
    type: string | null
  }

  export type CarModelCountAggregateOutputType = {
    model: number
    manufacturer: number
    type: number
    _all: number
  }


  export type CarModelMinAggregateInputType = {
    model?: true
    manufacturer?: true
    type?: true
  }

  export type CarModelMaxAggregateInputType = {
    model?: true
    manufacturer?: true
    type?: true
  }

  export type CarModelCountAggregateInputType = {
    model?: true
    manufacturer?: true
    type?: true
    _all?: true
  }

  export type CarModelAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CarModel to aggregate.
     */
    where?: CarModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CarModels to fetch.
     */
    orderBy?: CarModelOrderByWithRelationInput | CarModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CarModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CarModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CarModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CarModels
    **/
    _count?: true | CarModelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CarModelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CarModelMaxAggregateInputType
  }

  export type GetCarModelAggregateType<T extends CarModelAggregateArgs> = {
        [P in keyof T & keyof AggregateCarModel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCarModel[P]>
      : GetScalarType<T[P], AggregateCarModel[P]>
  }




  export type CarModelGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CarModelWhereInput
    orderBy?: CarModelOrderByWithAggregationInput | CarModelOrderByWithAggregationInput[]
    by: CarModelScalarFieldEnum[] | CarModelScalarFieldEnum
    having?: CarModelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CarModelCountAggregateInputType | true
    _min?: CarModelMinAggregateInputType
    _max?: CarModelMaxAggregateInputType
  }

  export type CarModelGroupByOutputType = {
    model: string
    manufacturer: string
    type: string
    _count: CarModelCountAggregateOutputType | null
    _min: CarModelMinAggregateOutputType | null
    _max: CarModelMaxAggregateOutputType | null
  }

  type GetCarModelGroupByPayload<T extends CarModelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CarModelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CarModelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CarModelGroupByOutputType[P]>
            : GetScalarType<T[P], CarModelGroupByOutputType[P]>
        }
      >
    >


  export type CarModelSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    model?: boolean
    manufacturer?: boolean
    type?: boolean
    car?: boolean | CarModel$carArgs<ExtArgs>
    _count?: boolean | CarModelCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["carModel"]>

  export type CarModelSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    model?: boolean
    manufacturer?: boolean
    type?: boolean
  }, ExtArgs["result"]["carModel"]>

  export type CarModelSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    model?: boolean
    manufacturer?: boolean
    type?: boolean
  }, ExtArgs["result"]["carModel"]>

  export type CarModelSelectScalar = {
    model?: boolean
    manufacturer?: boolean
    type?: boolean
  }

  export type CarModelOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"model" | "manufacturer" | "type", ExtArgs["result"]["carModel"]>
  export type CarModelInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    car?: boolean | CarModel$carArgs<ExtArgs>
    _count?: boolean | CarModelCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CarModelIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CarModelIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CarModelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CarModel"
    objects: {
      car: Prisma.$CarPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      model: string
      manufacturer: string
      type: string
    }, ExtArgs["result"]["carModel"]>
    composites: {}
  }

  type CarModelGetPayload<S extends boolean | null | undefined | CarModelDefaultArgs> = $Result.GetResult<Prisma.$CarModelPayload, S>

  type CarModelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CarModelFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CarModelCountAggregateInputType | true
    }

  export interface CarModelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CarModel'], meta: { name: 'CarModel' } }
    /**
     * Find zero or one CarModel that matches the filter.
     * @param {CarModelFindUniqueArgs} args - Arguments to find a CarModel
     * @example
     * // Get one CarModel
     * const carModel = await prisma.carModel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CarModelFindUniqueArgs>(args: SelectSubset<T, CarModelFindUniqueArgs<ExtArgs>>): Prisma__CarModelClient<$Result.GetResult<Prisma.$CarModelPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CarModel that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CarModelFindUniqueOrThrowArgs} args - Arguments to find a CarModel
     * @example
     * // Get one CarModel
     * const carModel = await prisma.carModel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CarModelFindUniqueOrThrowArgs>(args: SelectSubset<T, CarModelFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CarModelClient<$Result.GetResult<Prisma.$CarModelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CarModel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarModelFindFirstArgs} args - Arguments to find a CarModel
     * @example
     * // Get one CarModel
     * const carModel = await prisma.carModel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CarModelFindFirstArgs>(args?: SelectSubset<T, CarModelFindFirstArgs<ExtArgs>>): Prisma__CarModelClient<$Result.GetResult<Prisma.$CarModelPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CarModel that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarModelFindFirstOrThrowArgs} args - Arguments to find a CarModel
     * @example
     * // Get one CarModel
     * const carModel = await prisma.carModel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CarModelFindFirstOrThrowArgs>(args?: SelectSubset<T, CarModelFindFirstOrThrowArgs<ExtArgs>>): Prisma__CarModelClient<$Result.GetResult<Prisma.$CarModelPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CarModels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarModelFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CarModels
     * const carModels = await prisma.carModel.findMany()
     * 
     * // Get first 10 CarModels
     * const carModels = await prisma.carModel.findMany({ take: 10 })
     * 
     * // Only select the `model`
     * const carModelWithModelOnly = await prisma.carModel.findMany({ select: { model: true } })
     * 
     */
    findMany<T extends CarModelFindManyArgs>(args?: SelectSubset<T, CarModelFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarModelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CarModel.
     * @param {CarModelCreateArgs} args - Arguments to create a CarModel.
     * @example
     * // Create one CarModel
     * const CarModel = await prisma.carModel.create({
     *   data: {
     *     // ... data to create a CarModel
     *   }
     * })
     * 
     */
    create<T extends CarModelCreateArgs>(args: SelectSubset<T, CarModelCreateArgs<ExtArgs>>): Prisma__CarModelClient<$Result.GetResult<Prisma.$CarModelPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CarModels.
     * @param {CarModelCreateManyArgs} args - Arguments to create many CarModels.
     * @example
     * // Create many CarModels
     * const carModel = await prisma.carModel.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CarModelCreateManyArgs>(args?: SelectSubset<T, CarModelCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CarModels and returns the data saved in the database.
     * @param {CarModelCreateManyAndReturnArgs} args - Arguments to create many CarModels.
     * @example
     * // Create many CarModels
     * const carModel = await prisma.carModel.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CarModels and only return the `model`
     * const carModelWithModelOnly = await prisma.carModel.createManyAndReturn({
     *   select: { model: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CarModelCreateManyAndReturnArgs>(args?: SelectSubset<T, CarModelCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarModelPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CarModel.
     * @param {CarModelDeleteArgs} args - Arguments to delete one CarModel.
     * @example
     * // Delete one CarModel
     * const CarModel = await prisma.carModel.delete({
     *   where: {
     *     // ... filter to delete one CarModel
     *   }
     * })
     * 
     */
    delete<T extends CarModelDeleteArgs>(args: SelectSubset<T, CarModelDeleteArgs<ExtArgs>>): Prisma__CarModelClient<$Result.GetResult<Prisma.$CarModelPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CarModel.
     * @param {CarModelUpdateArgs} args - Arguments to update one CarModel.
     * @example
     * // Update one CarModel
     * const carModel = await prisma.carModel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CarModelUpdateArgs>(args: SelectSubset<T, CarModelUpdateArgs<ExtArgs>>): Prisma__CarModelClient<$Result.GetResult<Prisma.$CarModelPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CarModels.
     * @param {CarModelDeleteManyArgs} args - Arguments to filter CarModels to delete.
     * @example
     * // Delete a few CarModels
     * const { count } = await prisma.carModel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CarModelDeleteManyArgs>(args?: SelectSubset<T, CarModelDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CarModels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarModelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CarModels
     * const carModel = await prisma.carModel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CarModelUpdateManyArgs>(args: SelectSubset<T, CarModelUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CarModels and returns the data updated in the database.
     * @param {CarModelUpdateManyAndReturnArgs} args - Arguments to update many CarModels.
     * @example
     * // Update many CarModels
     * const carModel = await prisma.carModel.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CarModels and only return the `model`
     * const carModelWithModelOnly = await prisma.carModel.updateManyAndReturn({
     *   select: { model: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CarModelUpdateManyAndReturnArgs>(args: SelectSubset<T, CarModelUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarModelPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CarModel.
     * @param {CarModelUpsertArgs} args - Arguments to update or create a CarModel.
     * @example
     * // Update or create a CarModel
     * const carModel = await prisma.carModel.upsert({
     *   create: {
     *     // ... data to create a CarModel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CarModel we want to update
     *   }
     * })
     */
    upsert<T extends CarModelUpsertArgs>(args: SelectSubset<T, CarModelUpsertArgs<ExtArgs>>): Prisma__CarModelClient<$Result.GetResult<Prisma.$CarModelPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CarModels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarModelCountArgs} args - Arguments to filter CarModels to count.
     * @example
     * // Count the number of CarModels
     * const count = await prisma.carModel.count({
     *   where: {
     *     // ... the filter for the CarModels we want to count
     *   }
     * })
    **/
    count<T extends CarModelCountArgs>(
      args?: Subset<T, CarModelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CarModelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CarModel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarModelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CarModelAggregateArgs>(args: Subset<T, CarModelAggregateArgs>): Prisma.PrismaPromise<GetCarModelAggregateType<T>>

    /**
     * Group by CarModel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarModelGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CarModelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CarModelGroupByArgs['orderBy'] }
        : { orderBy?: CarModelGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CarModelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCarModelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CarModel model
   */
  readonly fields: CarModelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CarModel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CarModelClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    car<T extends CarModel$carArgs<ExtArgs> = {}>(args?: Subset<T, CarModel$carArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CarModel model
   */
  interface CarModelFieldRefs {
    readonly model: FieldRef<"CarModel", 'String'>
    readonly manufacturer: FieldRef<"CarModel", 'String'>
    readonly type: FieldRef<"CarModel", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CarModel findUnique
   */
  export type CarModelFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarModel
     */
    select?: CarModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarModel
     */
    omit?: CarModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarModelInclude<ExtArgs> | null
    /**
     * Filter, which CarModel to fetch.
     */
    where: CarModelWhereUniqueInput
  }

  /**
   * CarModel findUniqueOrThrow
   */
  export type CarModelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarModel
     */
    select?: CarModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarModel
     */
    omit?: CarModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarModelInclude<ExtArgs> | null
    /**
     * Filter, which CarModel to fetch.
     */
    where: CarModelWhereUniqueInput
  }

  /**
   * CarModel findFirst
   */
  export type CarModelFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarModel
     */
    select?: CarModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarModel
     */
    omit?: CarModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarModelInclude<ExtArgs> | null
    /**
     * Filter, which CarModel to fetch.
     */
    where?: CarModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CarModels to fetch.
     */
    orderBy?: CarModelOrderByWithRelationInput | CarModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CarModels.
     */
    cursor?: CarModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CarModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CarModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CarModels.
     */
    distinct?: CarModelScalarFieldEnum | CarModelScalarFieldEnum[]
  }

  /**
   * CarModel findFirstOrThrow
   */
  export type CarModelFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarModel
     */
    select?: CarModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarModel
     */
    omit?: CarModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarModelInclude<ExtArgs> | null
    /**
     * Filter, which CarModel to fetch.
     */
    where?: CarModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CarModels to fetch.
     */
    orderBy?: CarModelOrderByWithRelationInput | CarModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CarModels.
     */
    cursor?: CarModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CarModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CarModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CarModels.
     */
    distinct?: CarModelScalarFieldEnum | CarModelScalarFieldEnum[]
  }

  /**
   * CarModel findMany
   */
  export type CarModelFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarModel
     */
    select?: CarModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarModel
     */
    omit?: CarModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarModelInclude<ExtArgs> | null
    /**
     * Filter, which CarModels to fetch.
     */
    where?: CarModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CarModels to fetch.
     */
    orderBy?: CarModelOrderByWithRelationInput | CarModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CarModels.
     */
    cursor?: CarModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CarModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CarModels.
     */
    skip?: number
    distinct?: CarModelScalarFieldEnum | CarModelScalarFieldEnum[]
  }

  /**
   * CarModel create
   */
  export type CarModelCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarModel
     */
    select?: CarModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarModel
     */
    omit?: CarModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarModelInclude<ExtArgs> | null
    /**
     * The data needed to create a CarModel.
     */
    data: XOR<CarModelCreateInput, CarModelUncheckedCreateInput>
  }

  /**
   * CarModel createMany
   */
  export type CarModelCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CarModels.
     */
    data: CarModelCreateManyInput | CarModelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CarModel createManyAndReturn
   */
  export type CarModelCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarModel
     */
    select?: CarModelSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CarModel
     */
    omit?: CarModelOmit<ExtArgs> | null
    /**
     * The data used to create many CarModels.
     */
    data: CarModelCreateManyInput | CarModelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CarModel update
   */
  export type CarModelUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarModel
     */
    select?: CarModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarModel
     */
    omit?: CarModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarModelInclude<ExtArgs> | null
    /**
     * The data needed to update a CarModel.
     */
    data: XOR<CarModelUpdateInput, CarModelUncheckedUpdateInput>
    /**
     * Choose, which CarModel to update.
     */
    where: CarModelWhereUniqueInput
  }

  /**
   * CarModel updateMany
   */
  export type CarModelUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CarModels.
     */
    data: XOR<CarModelUpdateManyMutationInput, CarModelUncheckedUpdateManyInput>
    /**
     * Filter which CarModels to update
     */
    where?: CarModelWhereInput
    /**
     * Limit how many CarModels to update.
     */
    limit?: number
  }

  /**
   * CarModel updateManyAndReturn
   */
  export type CarModelUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarModel
     */
    select?: CarModelSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CarModel
     */
    omit?: CarModelOmit<ExtArgs> | null
    /**
     * The data used to update CarModels.
     */
    data: XOR<CarModelUpdateManyMutationInput, CarModelUncheckedUpdateManyInput>
    /**
     * Filter which CarModels to update
     */
    where?: CarModelWhereInput
    /**
     * Limit how many CarModels to update.
     */
    limit?: number
  }

  /**
   * CarModel upsert
   */
  export type CarModelUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarModel
     */
    select?: CarModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarModel
     */
    omit?: CarModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarModelInclude<ExtArgs> | null
    /**
     * The filter to search for the CarModel to update in case it exists.
     */
    where: CarModelWhereUniqueInput
    /**
     * In case the CarModel found by the `where` argument doesn't exist, create a new CarModel with this data.
     */
    create: XOR<CarModelCreateInput, CarModelUncheckedCreateInput>
    /**
     * In case the CarModel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CarModelUpdateInput, CarModelUncheckedUpdateInput>
  }

  /**
   * CarModel delete
   */
  export type CarModelDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarModel
     */
    select?: CarModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarModel
     */
    omit?: CarModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarModelInclude<ExtArgs> | null
    /**
     * Filter which CarModel to delete.
     */
    where: CarModelWhereUniqueInput
  }

  /**
   * CarModel deleteMany
   */
  export type CarModelDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CarModels to delete
     */
    where?: CarModelWhereInput
    /**
     * Limit how many CarModels to delete.
     */
    limit?: number
  }

  /**
   * CarModel.car
   */
  export type CarModel$carArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
    where?: CarWhereInput
    orderBy?: CarOrderByWithRelationInput | CarOrderByWithRelationInput[]
    cursor?: CarWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CarScalarFieldEnum | CarScalarFieldEnum[]
  }

  /**
   * CarModel without action
   */
  export type CarModelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarModel
     */
    select?: CarModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarModel
     */
    omit?: CarModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarModelInclude<ExtArgs> | null
  }


  /**
   * Model Contract
   */

  export type AggregateContract = {
    _count: ContractCountAggregateOutputType | null
    _avg: ContractAvgAggregateOutputType | null
    _sum: ContractSumAggregateOutputType | null
    _min: ContractMinAggregateOutputType | null
    _max: ContractMaxAggregateOutputType | null
  }

  export type ContractAvgAggregateOutputType = {
    id: number | null
    contractPrice: number | null
    carId: number | null
    customerId: number | null
    userId: number | null
    companyId: number | null
  }

  export type ContractSumAggregateOutputType = {
    id: number | null
    contractPrice: number | null
    carId: number | null
    customerId: number | null
    userId: number | null
    companyId: number | null
  }

  export type ContractMinAggregateOutputType = {
    id: number | null
    status: $Enums.ContractStatus | null
    resolutionDate: Date | null
    contractPrice: number | null
    carId: number | null
    customerId: number | null
    userId: number | null
    companyId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContractMaxAggregateOutputType = {
    id: number | null
    status: $Enums.ContractStatus | null
    resolutionDate: Date | null
    contractPrice: number | null
    carId: number | null
    customerId: number | null
    userId: number | null
    companyId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContractCountAggregateOutputType = {
    id: number
    status: number
    resolutionDate: number
    contractPrice: number
    carId: number
    customerId: number
    userId: number
    companyId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ContractAvgAggregateInputType = {
    id?: true
    contractPrice?: true
    carId?: true
    customerId?: true
    userId?: true
    companyId?: true
  }

  export type ContractSumAggregateInputType = {
    id?: true
    contractPrice?: true
    carId?: true
    customerId?: true
    userId?: true
    companyId?: true
  }

  export type ContractMinAggregateInputType = {
    id?: true
    status?: true
    resolutionDate?: true
    contractPrice?: true
    carId?: true
    customerId?: true
    userId?: true
    companyId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContractMaxAggregateInputType = {
    id?: true
    status?: true
    resolutionDate?: true
    contractPrice?: true
    carId?: true
    customerId?: true
    userId?: true
    companyId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContractCountAggregateInputType = {
    id?: true
    status?: true
    resolutionDate?: true
    contractPrice?: true
    carId?: true
    customerId?: true
    userId?: true
    companyId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ContractAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contract to aggregate.
     */
    where?: ContractWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contracts to fetch.
     */
    orderBy?: ContractOrderByWithRelationInput | ContractOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContractWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contracts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contracts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Contracts
    **/
    _count?: true | ContractCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContractAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContractSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContractMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContractMaxAggregateInputType
  }

  export type GetContractAggregateType<T extends ContractAggregateArgs> = {
        [P in keyof T & keyof AggregateContract]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContract[P]>
      : GetScalarType<T[P], AggregateContract[P]>
  }




  export type ContractGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContractWhereInput
    orderBy?: ContractOrderByWithAggregationInput | ContractOrderByWithAggregationInput[]
    by: ContractScalarFieldEnum[] | ContractScalarFieldEnum
    having?: ContractScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContractCountAggregateInputType | true
    _avg?: ContractAvgAggregateInputType
    _sum?: ContractSumAggregateInputType
    _min?: ContractMinAggregateInputType
    _max?: ContractMaxAggregateInputType
  }

  export type ContractGroupByOutputType = {
    id: number
    status: $Enums.ContractStatus
    resolutionDate: Date | null
    contractPrice: number
    carId: number
    customerId: number
    userId: number
    companyId: number
    createdAt: Date
    updatedAt: Date
    _count: ContractCountAggregateOutputType | null
    _avg: ContractAvgAggregateOutputType | null
    _sum: ContractSumAggregateOutputType | null
    _min: ContractMinAggregateOutputType | null
    _max: ContractMaxAggregateOutputType | null
  }

  type GetContractGroupByPayload<T extends ContractGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContractGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContractGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContractGroupByOutputType[P]>
            : GetScalarType<T[P], ContractGroupByOutputType[P]>
        }
      >
    >


  export type ContractSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    resolutionDate?: boolean
    contractPrice?: boolean
    carId?: boolean
    customerId?: boolean
    userId?: boolean
    companyId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    car?: boolean | CarDefaultArgs<ExtArgs>
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    meetings?: boolean | Contract$meetingsArgs<ExtArgs>
    contractDocumentRelation?: boolean | Contract$contractDocumentRelationArgs<ExtArgs>
    _count?: boolean | ContractCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contract"]>

  export type ContractSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    resolutionDate?: boolean
    contractPrice?: boolean
    carId?: boolean
    customerId?: boolean
    userId?: boolean
    companyId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    car?: boolean | CarDefaultArgs<ExtArgs>
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contract"]>

  export type ContractSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    resolutionDate?: boolean
    contractPrice?: boolean
    carId?: boolean
    customerId?: boolean
    userId?: boolean
    companyId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    car?: boolean | CarDefaultArgs<ExtArgs>
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contract"]>

  export type ContractSelectScalar = {
    id?: boolean
    status?: boolean
    resolutionDate?: boolean
    contractPrice?: boolean
    carId?: boolean
    customerId?: boolean
    userId?: boolean
    companyId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ContractOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "status" | "resolutionDate" | "contractPrice" | "carId" | "customerId" | "userId" | "companyId" | "createdAt" | "updatedAt", ExtArgs["result"]["contract"]>
  export type ContractInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    car?: boolean | CarDefaultArgs<ExtArgs>
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    meetings?: boolean | Contract$meetingsArgs<ExtArgs>
    contractDocumentRelation?: boolean | Contract$contractDocumentRelationArgs<ExtArgs>
    _count?: boolean | ContractCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ContractIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    car?: boolean | CarDefaultArgs<ExtArgs>
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }
  export type ContractIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    car?: boolean | CarDefaultArgs<ExtArgs>
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }

  export type $ContractPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Contract"
    objects: {
      car: Prisma.$CarPayload<ExtArgs>
      customer: Prisma.$CustomerPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
      company: Prisma.$CompanyPayload<ExtArgs>
      meetings: Prisma.$MeetingsPayload<ExtArgs>[]
      contractDocumentRelation: Prisma.$ContractDocumentRelationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      status: $Enums.ContractStatus
      resolutionDate: Date | null
      contractPrice: number
      carId: number
      customerId: number
      userId: number
      companyId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["contract"]>
    composites: {}
  }

  type ContractGetPayload<S extends boolean | null | undefined | ContractDefaultArgs> = $Result.GetResult<Prisma.$ContractPayload, S>

  type ContractCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContractFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContractCountAggregateInputType | true
    }

  export interface ContractDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Contract'], meta: { name: 'Contract' } }
    /**
     * Find zero or one Contract that matches the filter.
     * @param {ContractFindUniqueArgs} args - Arguments to find a Contract
     * @example
     * // Get one Contract
     * const contract = await prisma.contract.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContractFindUniqueArgs>(args: SelectSubset<T, ContractFindUniqueArgs<ExtArgs>>): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Contract that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContractFindUniqueOrThrowArgs} args - Arguments to find a Contract
     * @example
     * // Get one Contract
     * const contract = await prisma.contract.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContractFindUniqueOrThrowArgs>(args: SelectSubset<T, ContractFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contract that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractFindFirstArgs} args - Arguments to find a Contract
     * @example
     * // Get one Contract
     * const contract = await prisma.contract.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContractFindFirstArgs>(args?: SelectSubset<T, ContractFindFirstArgs<ExtArgs>>): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contract that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractFindFirstOrThrowArgs} args - Arguments to find a Contract
     * @example
     * // Get one Contract
     * const contract = await prisma.contract.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContractFindFirstOrThrowArgs>(args?: SelectSubset<T, ContractFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Contracts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Contracts
     * const contracts = await prisma.contract.findMany()
     * 
     * // Get first 10 Contracts
     * const contracts = await prisma.contract.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contractWithIdOnly = await prisma.contract.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContractFindManyArgs>(args?: SelectSubset<T, ContractFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Contract.
     * @param {ContractCreateArgs} args - Arguments to create a Contract.
     * @example
     * // Create one Contract
     * const Contract = await prisma.contract.create({
     *   data: {
     *     // ... data to create a Contract
     *   }
     * })
     * 
     */
    create<T extends ContractCreateArgs>(args: SelectSubset<T, ContractCreateArgs<ExtArgs>>): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Contracts.
     * @param {ContractCreateManyArgs} args - Arguments to create many Contracts.
     * @example
     * // Create many Contracts
     * const contract = await prisma.contract.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContractCreateManyArgs>(args?: SelectSubset<T, ContractCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Contracts and returns the data saved in the database.
     * @param {ContractCreateManyAndReturnArgs} args - Arguments to create many Contracts.
     * @example
     * // Create many Contracts
     * const contract = await prisma.contract.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Contracts and only return the `id`
     * const contractWithIdOnly = await prisma.contract.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContractCreateManyAndReturnArgs>(args?: SelectSubset<T, ContractCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Contract.
     * @param {ContractDeleteArgs} args - Arguments to delete one Contract.
     * @example
     * // Delete one Contract
     * const Contract = await prisma.contract.delete({
     *   where: {
     *     // ... filter to delete one Contract
     *   }
     * })
     * 
     */
    delete<T extends ContractDeleteArgs>(args: SelectSubset<T, ContractDeleteArgs<ExtArgs>>): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Contract.
     * @param {ContractUpdateArgs} args - Arguments to update one Contract.
     * @example
     * // Update one Contract
     * const contract = await prisma.contract.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContractUpdateArgs>(args: SelectSubset<T, ContractUpdateArgs<ExtArgs>>): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Contracts.
     * @param {ContractDeleteManyArgs} args - Arguments to filter Contracts to delete.
     * @example
     * // Delete a few Contracts
     * const { count } = await prisma.contract.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContractDeleteManyArgs>(args?: SelectSubset<T, ContractDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contracts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Contracts
     * const contract = await prisma.contract.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContractUpdateManyArgs>(args: SelectSubset<T, ContractUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contracts and returns the data updated in the database.
     * @param {ContractUpdateManyAndReturnArgs} args - Arguments to update many Contracts.
     * @example
     * // Update many Contracts
     * const contract = await prisma.contract.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Contracts and only return the `id`
     * const contractWithIdOnly = await prisma.contract.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ContractUpdateManyAndReturnArgs>(args: SelectSubset<T, ContractUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Contract.
     * @param {ContractUpsertArgs} args - Arguments to update or create a Contract.
     * @example
     * // Update or create a Contract
     * const contract = await prisma.contract.upsert({
     *   create: {
     *     // ... data to create a Contract
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Contract we want to update
     *   }
     * })
     */
    upsert<T extends ContractUpsertArgs>(args: SelectSubset<T, ContractUpsertArgs<ExtArgs>>): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Contracts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractCountArgs} args - Arguments to filter Contracts to count.
     * @example
     * // Count the number of Contracts
     * const count = await prisma.contract.count({
     *   where: {
     *     // ... the filter for the Contracts we want to count
     *   }
     * })
    **/
    count<T extends ContractCountArgs>(
      args?: Subset<T, ContractCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContractCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Contract.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ContractAggregateArgs>(args: Subset<T, ContractAggregateArgs>): Prisma.PrismaPromise<GetContractAggregateType<T>>

    /**
     * Group by Contract.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ContractGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContractGroupByArgs['orderBy'] }
        : { orderBy?: ContractGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ContractGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContractGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Contract model
   */
  readonly fields: ContractFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Contract.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContractClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    car<T extends CarDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CarDefaultArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    customer<T extends CustomerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CustomerDefaultArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    company<T extends CompanyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompanyDefaultArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    meetings<T extends Contract$meetingsArgs<ExtArgs> = {}>(args?: Subset<T, Contract$meetingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MeetingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    contractDocumentRelation<T extends Contract$contractDocumentRelationArgs<ExtArgs> = {}>(args?: Subset<T, Contract$contractDocumentRelationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContractDocumentRelationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Contract model
   */
  interface ContractFieldRefs {
    readonly id: FieldRef<"Contract", 'Int'>
    readonly status: FieldRef<"Contract", 'ContractStatus'>
    readonly resolutionDate: FieldRef<"Contract", 'DateTime'>
    readonly contractPrice: FieldRef<"Contract", 'Int'>
    readonly carId: FieldRef<"Contract", 'Int'>
    readonly customerId: FieldRef<"Contract", 'Int'>
    readonly userId: FieldRef<"Contract", 'Int'>
    readonly companyId: FieldRef<"Contract", 'Int'>
    readonly createdAt: FieldRef<"Contract", 'DateTime'>
    readonly updatedAt: FieldRef<"Contract", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Contract findUnique
   */
  export type ContractFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    /**
     * Filter, which Contract to fetch.
     */
    where: ContractWhereUniqueInput
  }

  /**
   * Contract findUniqueOrThrow
   */
  export type ContractFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    /**
     * Filter, which Contract to fetch.
     */
    where: ContractWhereUniqueInput
  }

  /**
   * Contract findFirst
   */
  export type ContractFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    /**
     * Filter, which Contract to fetch.
     */
    where?: ContractWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contracts to fetch.
     */
    orderBy?: ContractOrderByWithRelationInput | ContractOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contracts.
     */
    cursor?: ContractWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contracts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contracts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contracts.
     */
    distinct?: ContractScalarFieldEnum | ContractScalarFieldEnum[]
  }

  /**
   * Contract findFirstOrThrow
   */
  export type ContractFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    /**
     * Filter, which Contract to fetch.
     */
    where?: ContractWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contracts to fetch.
     */
    orderBy?: ContractOrderByWithRelationInput | ContractOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contracts.
     */
    cursor?: ContractWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contracts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contracts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contracts.
     */
    distinct?: ContractScalarFieldEnum | ContractScalarFieldEnum[]
  }

  /**
   * Contract findMany
   */
  export type ContractFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    /**
     * Filter, which Contracts to fetch.
     */
    where?: ContractWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contracts to fetch.
     */
    orderBy?: ContractOrderByWithRelationInput | ContractOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Contracts.
     */
    cursor?: ContractWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contracts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contracts.
     */
    skip?: number
    distinct?: ContractScalarFieldEnum | ContractScalarFieldEnum[]
  }

  /**
   * Contract create
   */
  export type ContractCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    /**
     * The data needed to create a Contract.
     */
    data: XOR<ContractCreateInput, ContractUncheckedCreateInput>
  }

  /**
   * Contract createMany
   */
  export type ContractCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Contracts.
     */
    data: ContractCreateManyInput | ContractCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Contract createManyAndReturn
   */
  export type ContractCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * The data used to create many Contracts.
     */
    data: ContractCreateManyInput | ContractCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Contract update
   */
  export type ContractUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    /**
     * The data needed to update a Contract.
     */
    data: XOR<ContractUpdateInput, ContractUncheckedUpdateInput>
    /**
     * Choose, which Contract to update.
     */
    where: ContractWhereUniqueInput
  }

  /**
   * Contract updateMany
   */
  export type ContractUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Contracts.
     */
    data: XOR<ContractUpdateManyMutationInput, ContractUncheckedUpdateManyInput>
    /**
     * Filter which Contracts to update
     */
    where?: ContractWhereInput
    /**
     * Limit how many Contracts to update.
     */
    limit?: number
  }

  /**
   * Contract updateManyAndReturn
   */
  export type ContractUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * The data used to update Contracts.
     */
    data: XOR<ContractUpdateManyMutationInput, ContractUncheckedUpdateManyInput>
    /**
     * Filter which Contracts to update
     */
    where?: ContractWhereInput
    /**
     * Limit how many Contracts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Contract upsert
   */
  export type ContractUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    /**
     * The filter to search for the Contract to update in case it exists.
     */
    where: ContractWhereUniqueInput
    /**
     * In case the Contract found by the `where` argument doesn't exist, create a new Contract with this data.
     */
    create: XOR<ContractCreateInput, ContractUncheckedCreateInput>
    /**
     * In case the Contract was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContractUpdateInput, ContractUncheckedUpdateInput>
  }

  /**
   * Contract delete
   */
  export type ContractDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    /**
     * Filter which Contract to delete.
     */
    where: ContractWhereUniqueInput
  }

  /**
   * Contract deleteMany
   */
  export type ContractDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contracts to delete
     */
    where?: ContractWhereInput
    /**
     * Limit how many Contracts to delete.
     */
    limit?: number
  }

  /**
   * Contract.meetings
   */
  export type Contract$meetingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meetings
     */
    select?: MeetingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meetings
     */
    omit?: MeetingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingsInclude<ExtArgs> | null
    where?: MeetingsWhereInput
    orderBy?: MeetingsOrderByWithRelationInput | MeetingsOrderByWithRelationInput[]
    cursor?: MeetingsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MeetingsScalarFieldEnum | MeetingsScalarFieldEnum[]
  }

  /**
   * Contract.contractDocumentRelation
   */
  export type Contract$contractDocumentRelationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContractDocumentRelation
     */
    select?: ContractDocumentRelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContractDocumentRelation
     */
    omit?: ContractDocumentRelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractDocumentRelationInclude<ExtArgs> | null
    where?: ContractDocumentRelationWhereInput
    orderBy?: ContractDocumentRelationOrderByWithRelationInput | ContractDocumentRelationOrderByWithRelationInput[]
    cursor?: ContractDocumentRelationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContractDocumentRelationScalarFieldEnum | ContractDocumentRelationScalarFieldEnum[]
  }

  /**
   * Contract without action
   */
  export type ContractDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
  }


  /**
   * Model Meetings
   */

  export type AggregateMeetings = {
    _count: MeetingsCountAggregateOutputType | null
    _avg: MeetingsAvgAggregateOutputType | null
    _sum: MeetingsSumAggregateOutputType | null
    _min: MeetingsMinAggregateOutputType | null
    _max: MeetingsMaxAggregateOutputType | null
  }

  export type MeetingsAvgAggregateOutputType = {
    id: number | null
    contractId: number | null
  }

  export type MeetingsSumAggregateOutputType = {
    id: number | null
    contractId: number | null
  }

  export type MeetingsMinAggregateOutputType = {
    id: number | null
    date: Date | null
    contractId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MeetingsMaxAggregateOutputType = {
    id: number | null
    date: Date | null
    contractId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MeetingsCountAggregateOutputType = {
    id: number
    date: number
    alarms: number
    contractId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MeetingsAvgAggregateInputType = {
    id?: true
    contractId?: true
  }

  export type MeetingsSumAggregateInputType = {
    id?: true
    contractId?: true
  }

  export type MeetingsMinAggregateInputType = {
    id?: true
    date?: true
    contractId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MeetingsMaxAggregateInputType = {
    id?: true
    date?: true
    contractId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MeetingsCountAggregateInputType = {
    id?: true
    date?: true
    alarms?: true
    contractId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MeetingsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Meetings to aggregate.
     */
    where?: MeetingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Meetings to fetch.
     */
    orderBy?: MeetingsOrderByWithRelationInput | MeetingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MeetingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Meetings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Meetings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Meetings
    **/
    _count?: true | MeetingsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MeetingsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MeetingsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MeetingsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MeetingsMaxAggregateInputType
  }

  export type GetMeetingsAggregateType<T extends MeetingsAggregateArgs> = {
        [P in keyof T & keyof AggregateMeetings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMeetings[P]>
      : GetScalarType<T[P], AggregateMeetings[P]>
  }




  export type MeetingsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MeetingsWhereInput
    orderBy?: MeetingsOrderByWithAggregationInput | MeetingsOrderByWithAggregationInput[]
    by: MeetingsScalarFieldEnum[] | MeetingsScalarFieldEnum
    having?: MeetingsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MeetingsCountAggregateInputType | true
    _avg?: MeetingsAvgAggregateInputType
    _sum?: MeetingsSumAggregateInputType
    _min?: MeetingsMinAggregateInputType
    _max?: MeetingsMaxAggregateInputType
  }

  export type MeetingsGroupByOutputType = {
    id: number
    date: Date
    alarms: string[]
    contractId: number
    createdAt: Date
    updatedAt: Date
    _count: MeetingsCountAggregateOutputType | null
    _avg: MeetingsAvgAggregateOutputType | null
    _sum: MeetingsSumAggregateOutputType | null
    _min: MeetingsMinAggregateOutputType | null
    _max: MeetingsMaxAggregateOutputType | null
  }

  type GetMeetingsGroupByPayload<T extends MeetingsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MeetingsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MeetingsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MeetingsGroupByOutputType[P]>
            : GetScalarType<T[P], MeetingsGroupByOutputType[P]>
        }
      >
    >


  export type MeetingsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    alarms?: boolean
    contractId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    contract?: boolean | ContractDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["meetings"]>

  export type MeetingsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    alarms?: boolean
    contractId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    contract?: boolean | ContractDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["meetings"]>

  export type MeetingsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    alarms?: boolean
    contractId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    contract?: boolean | ContractDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["meetings"]>

  export type MeetingsSelectScalar = {
    id?: boolean
    date?: boolean
    alarms?: boolean
    contractId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MeetingsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "date" | "alarms" | "contractId" | "createdAt" | "updatedAt", ExtArgs["result"]["meetings"]>
  export type MeetingsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contract?: boolean | ContractDefaultArgs<ExtArgs>
  }
  export type MeetingsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contract?: boolean | ContractDefaultArgs<ExtArgs>
  }
  export type MeetingsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contract?: boolean | ContractDefaultArgs<ExtArgs>
  }

  export type $MeetingsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Meetings"
    objects: {
      contract: Prisma.$ContractPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      date: Date
      alarms: string[]
      contractId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["meetings"]>
    composites: {}
  }

  type MeetingsGetPayload<S extends boolean | null | undefined | MeetingsDefaultArgs> = $Result.GetResult<Prisma.$MeetingsPayload, S>

  type MeetingsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MeetingsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MeetingsCountAggregateInputType | true
    }

  export interface MeetingsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Meetings'], meta: { name: 'Meetings' } }
    /**
     * Find zero or one Meetings that matches the filter.
     * @param {MeetingsFindUniqueArgs} args - Arguments to find a Meetings
     * @example
     * // Get one Meetings
     * const meetings = await prisma.meetings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MeetingsFindUniqueArgs>(args: SelectSubset<T, MeetingsFindUniqueArgs<ExtArgs>>): Prisma__MeetingsClient<$Result.GetResult<Prisma.$MeetingsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Meetings that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MeetingsFindUniqueOrThrowArgs} args - Arguments to find a Meetings
     * @example
     * // Get one Meetings
     * const meetings = await prisma.meetings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MeetingsFindUniqueOrThrowArgs>(args: SelectSubset<T, MeetingsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MeetingsClient<$Result.GetResult<Prisma.$MeetingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Meetings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingsFindFirstArgs} args - Arguments to find a Meetings
     * @example
     * // Get one Meetings
     * const meetings = await prisma.meetings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MeetingsFindFirstArgs>(args?: SelectSubset<T, MeetingsFindFirstArgs<ExtArgs>>): Prisma__MeetingsClient<$Result.GetResult<Prisma.$MeetingsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Meetings that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingsFindFirstOrThrowArgs} args - Arguments to find a Meetings
     * @example
     * // Get one Meetings
     * const meetings = await prisma.meetings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MeetingsFindFirstOrThrowArgs>(args?: SelectSubset<T, MeetingsFindFirstOrThrowArgs<ExtArgs>>): Prisma__MeetingsClient<$Result.GetResult<Prisma.$MeetingsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Meetings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Meetings
     * const meetings = await prisma.meetings.findMany()
     * 
     * // Get first 10 Meetings
     * const meetings = await prisma.meetings.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const meetingsWithIdOnly = await prisma.meetings.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MeetingsFindManyArgs>(args?: SelectSubset<T, MeetingsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MeetingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Meetings.
     * @param {MeetingsCreateArgs} args - Arguments to create a Meetings.
     * @example
     * // Create one Meetings
     * const Meetings = await prisma.meetings.create({
     *   data: {
     *     // ... data to create a Meetings
     *   }
     * })
     * 
     */
    create<T extends MeetingsCreateArgs>(args: SelectSubset<T, MeetingsCreateArgs<ExtArgs>>): Prisma__MeetingsClient<$Result.GetResult<Prisma.$MeetingsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Meetings.
     * @param {MeetingsCreateManyArgs} args - Arguments to create many Meetings.
     * @example
     * // Create many Meetings
     * const meetings = await prisma.meetings.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MeetingsCreateManyArgs>(args?: SelectSubset<T, MeetingsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Meetings and returns the data saved in the database.
     * @param {MeetingsCreateManyAndReturnArgs} args - Arguments to create many Meetings.
     * @example
     * // Create many Meetings
     * const meetings = await prisma.meetings.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Meetings and only return the `id`
     * const meetingsWithIdOnly = await prisma.meetings.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MeetingsCreateManyAndReturnArgs>(args?: SelectSubset<T, MeetingsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MeetingsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Meetings.
     * @param {MeetingsDeleteArgs} args - Arguments to delete one Meetings.
     * @example
     * // Delete one Meetings
     * const Meetings = await prisma.meetings.delete({
     *   where: {
     *     // ... filter to delete one Meetings
     *   }
     * })
     * 
     */
    delete<T extends MeetingsDeleteArgs>(args: SelectSubset<T, MeetingsDeleteArgs<ExtArgs>>): Prisma__MeetingsClient<$Result.GetResult<Prisma.$MeetingsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Meetings.
     * @param {MeetingsUpdateArgs} args - Arguments to update one Meetings.
     * @example
     * // Update one Meetings
     * const meetings = await prisma.meetings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MeetingsUpdateArgs>(args: SelectSubset<T, MeetingsUpdateArgs<ExtArgs>>): Prisma__MeetingsClient<$Result.GetResult<Prisma.$MeetingsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Meetings.
     * @param {MeetingsDeleteManyArgs} args - Arguments to filter Meetings to delete.
     * @example
     * // Delete a few Meetings
     * const { count } = await prisma.meetings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MeetingsDeleteManyArgs>(args?: SelectSubset<T, MeetingsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Meetings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Meetings
     * const meetings = await prisma.meetings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MeetingsUpdateManyArgs>(args: SelectSubset<T, MeetingsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Meetings and returns the data updated in the database.
     * @param {MeetingsUpdateManyAndReturnArgs} args - Arguments to update many Meetings.
     * @example
     * // Update many Meetings
     * const meetings = await prisma.meetings.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Meetings and only return the `id`
     * const meetingsWithIdOnly = await prisma.meetings.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MeetingsUpdateManyAndReturnArgs>(args: SelectSubset<T, MeetingsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MeetingsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Meetings.
     * @param {MeetingsUpsertArgs} args - Arguments to update or create a Meetings.
     * @example
     * // Update or create a Meetings
     * const meetings = await prisma.meetings.upsert({
     *   create: {
     *     // ... data to create a Meetings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Meetings we want to update
     *   }
     * })
     */
    upsert<T extends MeetingsUpsertArgs>(args: SelectSubset<T, MeetingsUpsertArgs<ExtArgs>>): Prisma__MeetingsClient<$Result.GetResult<Prisma.$MeetingsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Meetings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingsCountArgs} args - Arguments to filter Meetings to count.
     * @example
     * // Count the number of Meetings
     * const count = await prisma.meetings.count({
     *   where: {
     *     // ... the filter for the Meetings we want to count
     *   }
     * })
    **/
    count<T extends MeetingsCountArgs>(
      args?: Subset<T, MeetingsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MeetingsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Meetings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MeetingsAggregateArgs>(args: Subset<T, MeetingsAggregateArgs>): Prisma.PrismaPromise<GetMeetingsAggregateType<T>>

    /**
     * Group by Meetings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MeetingsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MeetingsGroupByArgs['orderBy'] }
        : { orderBy?: MeetingsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MeetingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMeetingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Meetings model
   */
  readonly fields: MeetingsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Meetings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MeetingsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    contract<T extends ContractDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ContractDefaultArgs<ExtArgs>>): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Meetings model
   */
  interface MeetingsFieldRefs {
    readonly id: FieldRef<"Meetings", 'Int'>
    readonly date: FieldRef<"Meetings", 'DateTime'>
    readonly alarms: FieldRef<"Meetings", 'String[]'>
    readonly contractId: FieldRef<"Meetings", 'Int'>
    readonly createdAt: FieldRef<"Meetings", 'DateTime'>
    readonly updatedAt: FieldRef<"Meetings", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Meetings findUnique
   */
  export type MeetingsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meetings
     */
    select?: MeetingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meetings
     */
    omit?: MeetingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingsInclude<ExtArgs> | null
    /**
     * Filter, which Meetings to fetch.
     */
    where: MeetingsWhereUniqueInput
  }

  /**
   * Meetings findUniqueOrThrow
   */
  export type MeetingsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meetings
     */
    select?: MeetingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meetings
     */
    omit?: MeetingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingsInclude<ExtArgs> | null
    /**
     * Filter, which Meetings to fetch.
     */
    where: MeetingsWhereUniqueInput
  }

  /**
   * Meetings findFirst
   */
  export type MeetingsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meetings
     */
    select?: MeetingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meetings
     */
    omit?: MeetingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingsInclude<ExtArgs> | null
    /**
     * Filter, which Meetings to fetch.
     */
    where?: MeetingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Meetings to fetch.
     */
    orderBy?: MeetingsOrderByWithRelationInput | MeetingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Meetings.
     */
    cursor?: MeetingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Meetings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Meetings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Meetings.
     */
    distinct?: MeetingsScalarFieldEnum | MeetingsScalarFieldEnum[]
  }

  /**
   * Meetings findFirstOrThrow
   */
  export type MeetingsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meetings
     */
    select?: MeetingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meetings
     */
    omit?: MeetingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingsInclude<ExtArgs> | null
    /**
     * Filter, which Meetings to fetch.
     */
    where?: MeetingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Meetings to fetch.
     */
    orderBy?: MeetingsOrderByWithRelationInput | MeetingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Meetings.
     */
    cursor?: MeetingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Meetings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Meetings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Meetings.
     */
    distinct?: MeetingsScalarFieldEnum | MeetingsScalarFieldEnum[]
  }

  /**
   * Meetings findMany
   */
  export type MeetingsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meetings
     */
    select?: MeetingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meetings
     */
    omit?: MeetingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingsInclude<ExtArgs> | null
    /**
     * Filter, which Meetings to fetch.
     */
    where?: MeetingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Meetings to fetch.
     */
    orderBy?: MeetingsOrderByWithRelationInput | MeetingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Meetings.
     */
    cursor?: MeetingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Meetings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Meetings.
     */
    skip?: number
    distinct?: MeetingsScalarFieldEnum | MeetingsScalarFieldEnum[]
  }

  /**
   * Meetings create
   */
  export type MeetingsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meetings
     */
    select?: MeetingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meetings
     */
    omit?: MeetingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingsInclude<ExtArgs> | null
    /**
     * The data needed to create a Meetings.
     */
    data: XOR<MeetingsCreateInput, MeetingsUncheckedCreateInput>
  }

  /**
   * Meetings createMany
   */
  export type MeetingsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Meetings.
     */
    data: MeetingsCreateManyInput | MeetingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Meetings createManyAndReturn
   */
  export type MeetingsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meetings
     */
    select?: MeetingsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Meetings
     */
    omit?: MeetingsOmit<ExtArgs> | null
    /**
     * The data used to create many Meetings.
     */
    data: MeetingsCreateManyInput | MeetingsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Meetings update
   */
  export type MeetingsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meetings
     */
    select?: MeetingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meetings
     */
    omit?: MeetingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingsInclude<ExtArgs> | null
    /**
     * The data needed to update a Meetings.
     */
    data: XOR<MeetingsUpdateInput, MeetingsUncheckedUpdateInput>
    /**
     * Choose, which Meetings to update.
     */
    where: MeetingsWhereUniqueInput
  }

  /**
   * Meetings updateMany
   */
  export type MeetingsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Meetings.
     */
    data: XOR<MeetingsUpdateManyMutationInput, MeetingsUncheckedUpdateManyInput>
    /**
     * Filter which Meetings to update
     */
    where?: MeetingsWhereInput
    /**
     * Limit how many Meetings to update.
     */
    limit?: number
  }

  /**
   * Meetings updateManyAndReturn
   */
  export type MeetingsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meetings
     */
    select?: MeetingsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Meetings
     */
    omit?: MeetingsOmit<ExtArgs> | null
    /**
     * The data used to update Meetings.
     */
    data: XOR<MeetingsUpdateManyMutationInput, MeetingsUncheckedUpdateManyInput>
    /**
     * Filter which Meetings to update
     */
    where?: MeetingsWhereInput
    /**
     * Limit how many Meetings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Meetings upsert
   */
  export type MeetingsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meetings
     */
    select?: MeetingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meetings
     */
    omit?: MeetingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingsInclude<ExtArgs> | null
    /**
     * The filter to search for the Meetings to update in case it exists.
     */
    where: MeetingsWhereUniqueInput
    /**
     * In case the Meetings found by the `where` argument doesn't exist, create a new Meetings with this data.
     */
    create: XOR<MeetingsCreateInput, MeetingsUncheckedCreateInput>
    /**
     * In case the Meetings was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MeetingsUpdateInput, MeetingsUncheckedUpdateInput>
  }

  /**
   * Meetings delete
   */
  export type MeetingsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meetings
     */
    select?: MeetingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meetings
     */
    omit?: MeetingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingsInclude<ExtArgs> | null
    /**
     * Filter which Meetings to delete.
     */
    where: MeetingsWhereUniqueInput
  }

  /**
   * Meetings deleteMany
   */
  export type MeetingsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Meetings to delete
     */
    where?: MeetingsWhereInput
    /**
     * Limit how many Meetings to delete.
     */
    limit?: number
  }

  /**
   * Meetings without action
   */
  export type MeetingsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meetings
     */
    select?: MeetingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meetings
     */
    omit?: MeetingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingsInclude<ExtArgs> | null
  }


  /**
   * Model ContractDocument
   */

  export type AggregateContractDocument = {
    _count: ContractDocumentCountAggregateOutputType | null
    _avg: ContractDocumentAvgAggregateOutputType | null
    _sum: ContractDocumentSumAggregateOutputType | null
    _min: ContractDocumentMinAggregateOutputType | null
    _max: ContractDocumentMaxAggregateOutputType | null
  }

  export type ContractDocumentAvgAggregateOutputType = {
    id: number | null
  }

  export type ContractDocumentSumAggregateOutputType = {
    id: number | null
  }

  export type ContractDocumentMinAggregateOutputType = {
    id: number | null
    fileName: string | null
    createdAt: Date | null
  }

  export type ContractDocumentMaxAggregateOutputType = {
    id: number | null
    fileName: string | null
    createdAt: Date | null
  }

  export type ContractDocumentCountAggregateOutputType = {
    id: number
    fileName: number
    createdAt: number
    _all: number
  }


  export type ContractDocumentAvgAggregateInputType = {
    id?: true
  }

  export type ContractDocumentSumAggregateInputType = {
    id?: true
  }

  export type ContractDocumentMinAggregateInputType = {
    id?: true
    fileName?: true
    createdAt?: true
  }

  export type ContractDocumentMaxAggregateInputType = {
    id?: true
    fileName?: true
    createdAt?: true
  }

  export type ContractDocumentCountAggregateInputType = {
    id?: true
    fileName?: true
    createdAt?: true
    _all?: true
  }

  export type ContractDocumentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContractDocument to aggregate.
     */
    where?: ContractDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContractDocuments to fetch.
     */
    orderBy?: ContractDocumentOrderByWithRelationInput | ContractDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContractDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContractDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContractDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ContractDocuments
    **/
    _count?: true | ContractDocumentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContractDocumentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContractDocumentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContractDocumentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContractDocumentMaxAggregateInputType
  }

  export type GetContractDocumentAggregateType<T extends ContractDocumentAggregateArgs> = {
        [P in keyof T & keyof AggregateContractDocument]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContractDocument[P]>
      : GetScalarType<T[P], AggregateContractDocument[P]>
  }




  export type ContractDocumentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContractDocumentWhereInput
    orderBy?: ContractDocumentOrderByWithAggregationInput | ContractDocumentOrderByWithAggregationInput[]
    by: ContractDocumentScalarFieldEnum[] | ContractDocumentScalarFieldEnum
    having?: ContractDocumentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContractDocumentCountAggregateInputType | true
    _avg?: ContractDocumentAvgAggregateInputType
    _sum?: ContractDocumentSumAggregateInputType
    _min?: ContractDocumentMinAggregateInputType
    _max?: ContractDocumentMaxAggregateInputType
  }

  export type ContractDocumentGroupByOutputType = {
    id: number
    fileName: string
    createdAt: Date
    _count: ContractDocumentCountAggregateOutputType | null
    _avg: ContractDocumentAvgAggregateOutputType | null
    _sum: ContractDocumentSumAggregateOutputType | null
    _min: ContractDocumentMinAggregateOutputType | null
    _max: ContractDocumentMaxAggregateOutputType | null
  }

  type GetContractDocumentGroupByPayload<T extends ContractDocumentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContractDocumentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContractDocumentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContractDocumentGroupByOutputType[P]>
            : GetScalarType<T[P], ContractDocumentGroupByOutputType[P]>
        }
      >
    >


  export type ContractDocumentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fileName?: boolean
    createdAt?: boolean
    contractDocumentRelation?: boolean | ContractDocument$contractDocumentRelationArgs<ExtArgs>
  }, ExtArgs["result"]["contractDocument"]>

  export type ContractDocumentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fileName?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["contractDocument"]>

  export type ContractDocumentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fileName?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["contractDocument"]>

  export type ContractDocumentSelectScalar = {
    id?: boolean
    fileName?: boolean
    createdAt?: boolean
  }

  export type ContractDocumentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fileName" | "createdAt", ExtArgs["result"]["contractDocument"]>
  export type ContractDocumentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contractDocumentRelation?: boolean | ContractDocument$contractDocumentRelationArgs<ExtArgs>
  }
  export type ContractDocumentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ContractDocumentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ContractDocumentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ContractDocument"
    objects: {
      contractDocumentRelation: Prisma.$ContractDocumentRelationPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      fileName: string
      createdAt: Date
    }, ExtArgs["result"]["contractDocument"]>
    composites: {}
  }

  type ContractDocumentGetPayload<S extends boolean | null | undefined | ContractDocumentDefaultArgs> = $Result.GetResult<Prisma.$ContractDocumentPayload, S>

  type ContractDocumentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContractDocumentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContractDocumentCountAggregateInputType | true
    }

  export interface ContractDocumentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ContractDocument'], meta: { name: 'ContractDocument' } }
    /**
     * Find zero or one ContractDocument that matches the filter.
     * @param {ContractDocumentFindUniqueArgs} args - Arguments to find a ContractDocument
     * @example
     * // Get one ContractDocument
     * const contractDocument = await prisma.contractDocument.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContractDocumentFindUniqueArgs>(args: SelectSubset<T, ContractDocumentFindUniqueArgs<ExtArgs>>): Prisma__ContractDocumentClient<$Result.GetResult<Prisma.$ContractDocumentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ContractDocument that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContractDocumentFindUniqueOrThrowArgs} args - Arguments to find a ContractDocument
     * @example
     * // Get one ContractDocument
     * const contractDocument = await prisma.contractDocument.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContractDocumentFindUniqueOrThrowArgs>(args: SelectSubset<T, ContractDocumentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContractDocumentClient<$Result.GetResult<Prisma.$ContractDocumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContractDocument that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractDocumentFindFirstArgs} args - Arguments to find a ContractDocument
     * @example
     * // Get one ContractDocument
     * const contractDocument = await prisma.contractDocument.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContractDocumentFindFirstArgs>(args?: SelectSubset<T, ContractDocumentFindFirstArgs<ExtArgs>>): Prisma__ContractDocumentClient<$Result.GetResult<Prisma.$ContractDocumentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContractDocument that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractDocumentFindFirstOrThrowArgs} args - Arguments to find a ContractDocument
     * @example
     * // Get one ContractDocument
     * const contractDocument = await prisma.contractDocument.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContractDocumentFindFirstOrThrowArgs>(args?: SelectSubset<T, ContractDocumentFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContractDocumentClient<$Result.GetResult<Prisma.$ContractDocumentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ContractDocuments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractDocumentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ContractDocuments
     * const contractDocuments = await prisma.contractDocument.findMany()
     * 
     * // Get first 10 ContractDocuments
     * const contractDocuments = await prisma.contractDocument.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contractDocumentWithIdOnly = await prisma.contractDocument.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContractDocumentFindManyArgs>(args?: SelectSubset<T, ContractDocumentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContractDocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ContractDocument.
     * @param {ContractDocumentCreateArgs} args - Arguments to create a ContractDocument.
     * @example
     * // Create one ContractDocument
     * const ContractDocument = await prisma.contractDocument.create({
     *   data: {
     *     // ... data to create a ContractDocument
     *   }
     * })
     * 
     */
    create<T extends ContractDocumentCreateArgs>(args: SelectSubset<T, ContractDocumentCreateArgs<ExtArgs>>): Prisma__ContractDocumentClient<$Result.GetResult<Prisma.$ContractDocumentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ContractDocuments.
     * @param {ContractDocumentCreateManyArgs} args - Arguments to create many ContractDocuments.
     * @example
     * // Create many ContractDocuments
     * const contractDocument = await prisma.contractDocument.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContractDocumentCreateManyArgs>(args?: SelectSubset<T, ContractDocumentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ContractDocuments and returns the data saved in the database.
     * @param {ContractDocumentCreateManyAndReturnArgs} args - Arguments to create many ContractDocuments.
     * @example
     * // Create many ContractDocuments
     * const contractDocument = await prisma.contractDocument.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ContractDocuments and only return the `id`
     * const contractDocumentWithIdOnly = await prisma.contractDocument.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContractDocumentCreateManyAndReturnArgs>(args?: SelectSubset<T, ContractDocumentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContractDocumentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ContractDocument.
     * @param {ContractDocumentDeleteArgs} args - Arguments to delete one ContractDocument.
     * @example
     * // Delete one ContractDocument
     * const ContractDocument = await prisma.contractDocument.delete({
     *   where: {
     *     // ... filter to delete one ContractDocument
     *   }
     * })
     * 
     */
    delete<T extends ContractDocumentDeleteArgs>(args: SelectSubset<T, ContractDocumentDeleteArgs<ExtArgs>>): Prisma__ContractDocumentClient<$Result.GetResult<Prisma.$ContractDocumentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ContractDocument.
     * @param {ContractDocumentUpdateArgs} args - Arguments to update one ContractDocument.
     * @example
     * // Update one ContractDocument
     * const contractDocument = await prisma.contractDocument.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContractDocumentUpdateArgs>(args: SelectSubset<T, ContractDocumentUpdateArgs<ExtArgs>>): Prisma__ContractDocumentClient<$Result.GetResult<Prisma.$ContractDocumentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ContractDocuments.
     * @param {ContractDocumentDeleteManyArgs} args - Arguments to filter ContractDocuments to delete.
     * @example
     * // Delete a few ContractDocuments
     * const { count } = await prisma.contractDocument.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContractDocumentDeleteManyArgs>(args?: SelectSubset<T, ContractDocumentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContractDocuments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractDocumentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ContractDocuments
     * const contractDocument = await prisma.contractDocument.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContractDocumentUpdateManyArgs>(args: SelectSubset<T, ContractDocumentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContractDocuments and returns the data updated in the database.
     * @param {ContractDocumentUpdateManyAndReturnArgs} args - Arguments to update many ContractDocuments.
     * @example
     * // Update many ContractDocuments
     * const contractDocument = await prisma.contractDocument.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ContractDocuments and only return the `id`
     * const contractDocumentWithIdOnly = await prisma.contractDocument.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ContractDocumentUpdateManyAndReturnArgs>(args: SelectSubset<T, ContractDocumentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContractDocumentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ContractDocument.
     * @param {ContractDocumentUpsertArgs} args - Arguments to update or create a ContractDocument.
     * @example
     * // Update or create a ContractDocument
     * const contractDocument = await prisma.contractDocument.upsert({
     *   create: {
     *     // ... data to create a ContractDocument
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ContractDocument we want to update
     *   }
     * })
     */
    upsert<T extends ContractDocumentUpsertArgs>(args: SelectSubset<T, ContractDocumentUpsertArgs<ExtArgs>>): Prisma__ContractDocumentClient<$Result.GetResult<Prisma.$ContractDocumentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ContractDocuments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractDocumentCountArgs} args - Arguments to filter ContractDocuments to count.
     * @example
     * // Count the number of ContractDocuments
     * const count = await prisma.contractDocument.count({
     *   where: {
     *     // ... the filter for the ContractDocuments we want to count
     *   }
     * })
    **/
    count<T extends ContractDocumentCountArgs>(
      args?: Subset<T, ContractDocumentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContractDocumentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ContractDocument.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractDocumentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ContractDocumentAggregateArgs>(args: Subset<T, ContractDocumentAggregateArgs>): Prisma.PrismaPromise<GetContractDocumentAggregateType<T>>

    /**
     * Group by ContractDocument.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractDocumentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ContractDocumentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContractDocumentGroupByArgs['orderBy'] }
        : { orderBy?: ContractDocumentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ContractDocumentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContractDocumentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ContractDocument model
   */
  readonly fields: ContractDocumentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ContractDocument.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContractDocumentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    contractDocumentRelation<T extends ContractDocument$contractDocumentRelationArgs<ExtArgs> = {}>(args?: Subset<T, ContractDocument$contractDocumentRelationArgs<ExtArgs>>): Prisma__ContractDocumentRelationClient<$Result.GetResult<Prisma.$ContractDocumentRelationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ContractDocument model
   */
  interface ContractDocumentFieldRefs {
    readonly id: FieldRef<"ContractDocument", 'Int'>
    readonly fileName: FieldRef<"ContractDocument", 'String'>
    readonly createdAt: FieldRef<"ContractDocument", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ContractDocument findUnique
   */
  export type ContractDocumentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContractDocument
     */
    select?: ContractDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContractDocument
     */
    omit?: ContractDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractDocumentInclude<ExtArgs> | null
    /**
     * Filter, which ContractDocument to fetch.
     */
    where: ContractDocumentWhereUniqueInput
  }

  /**
   * ContractDocument findUniqueOrThrow
   */
  export type ContractDocumentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContractDocument
     */
    select?: ContractDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContractDocument
     */
    omit?: ContractDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractDocumentInclude<ExtArgs> | null
    /**
     * Filter, which ContractDocument to fetch.
     */
    where: ContractDocumentWhereUniqueInput
  }

  /**
   * ContractDocument findFirst
   */
  export type ContractDocumentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContractDocument
     */
    select?: ContractDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContractDocument
     */
    omit?: ContractDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractDocumentInclude<ExtArgs> | null
    /**
     * Filter, which ContractDocument to fetch.
     */
    where?: ContractDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContractDocuments to fetch.
     */
    orderBy?: ContractDocumentOrderByWithRelationInput | ContractDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContractDocuments.
     */
    cursor?: ContractDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContractDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContractDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContractDocuments.
     */
    distinct?: ContractDocumentScalarFieldEnum | ContractDocumentScalarFieldEnum[]
  }

  /**
   * ContractDocument findFirstOrThrow
   */
  export type ContractDocumentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContractDocument
     */
    select?: ContractDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContractDocument
     */
    omit?: ContractDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractDocumentInclude<ExtArgs> | null
    /**
     * Filter, which ContractDocument to fetch.
     */
    where?: ContractDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContractDocuments to fetch.
     */
    orderBy?: ContractDocumentOrderByWithRelationInput | ContractDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContractDocuments.
     */
    cursor?: ContractDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContractDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContractDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContractDocuments.
     */
    distinct?: ContractDocumentScalarFieldEnum | ContractDocumentScalarFieldEnum[]
  }

  /**
   * ContractDocument findMany
   */
  export type ContractDocumentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContractDocument
     */
    select?: ContractDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContractDocument
     */
    omit?: ContractDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractDocumentInclude<ExtArgs> | null
    /**
     * Filter, which ContractDocuments to fetch.
     */
    where?: ContractDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContractDocuments to fetch.
     */
    orderBy?: ContractDocumentOrderByWithRelationInput | ContractDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ContractDocuments.
     */
    cursor?: ContractDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContractDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContractDocuments.
     */
    skip?: number
    distinct?: ContractDocumentScalarFieldEnum | ContractDocumentScalarFieldEnum[]
  }

  /**
   * ContractDocument create
   */
  export type ContractDocumentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContractDocument
     */
    select?: ContractDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContractDocument
     */
    omit?: ContractDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractDocumentInclude<ExtArgs> | null
    /**
     * The data needed to create a ContractDocument.
     */
    data: XOR<ContractDocumentCreateInput, ContractDocumentUncheckedCreateInput>
  }

  /**
   * ContractDocument createMany
   */
  export type ContractDocumentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ContractDocuments.
     */
    data: ContractDocumentCreateManyInput | ContractDocumentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ContractDocument createManyAndReturn
   */
  export type ContractDocumentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContractDocument
     */
    select?: ContractDocumentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContractDocument
     */
    omit?: ContractDocumentOmit<ExtArgs> | null
    /**
     * The data used to create many ContractDocuments.
     */
    data: ContractDocumentCreateManyInput | ContractDocumentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ContractDocument update
   */
  export type ContractDocumentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContractDocument
     */
    select?: ContractDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContractDocument
     */
    omit?: ContractDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractDocumentInclude<ExtArgs> | null
    /**
     * The data needed to update a ContractDocument.
     */
    data: XOR<ContractDocumentUpdateInput, ContractDocumentUncheckedUpdateInput>
    /**
     * Choose, which ContractDocument to update.
     */
    where: ContractDocumentWhereUniqueInput
  }

  /**
   * ContractDocument updateMany
   */
  export type ContractDocumentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ContractDocuments.
     */
    data: XOR<ContractDocumentUpdateManyMutationInput, ContractDocumentUncheckedUpdateManyInput>
    /**
     * Filter which ContractDocuments to update
     */
    where?: ContractDocumentWhereInput
    /**
     * Limit how many ContractDocuments to update.
     */
    limit?: number
  }

  /**
   * ContractDocument updateManyAndReturn
   */
  export type ContractDocumentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContractDocument
     */
    select?: ContractDocumentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContractDocument
     */
    omit?: ContractDocumentOmit<ExtArgs> | null
    /**
     * The data used to update ContractDocuments.
     */
    data: XOR<ContractDocumentUpdateManyMutationInput, ContractDocumentUncheckedUpdateManyInput>
    /**
     * Filter which ContractDocuments to update
     */
    where?: ContractDocumentWhereInput
    /**
     * Limit how many ContractDocuments to update.
     */
    limit?: number
  }

  /**
   * ContractDocument upsert
   */
  export type ContractDocumentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContractDocument
     */
    select?: ContractDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContractDocument
     */
    omit?: ContractDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractDocumentInclude<ExtArgs> | null
    /**
     * The filter to search for the ContractDocument to update in case it exists.
     */
    where: ContractDocumentWhereUniqueInput
    /**
     * In case the ContractDocument found by the `where` argument doesn't exist, create a new ContractDocument with this data.
     */
    create: XOR<ContractDocumentCreateInput, ContractDocumentUncheckedCreateInput>
    /**
     * In case the ContractDocument was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContractDocumentUpdateInput, ContractDocumentUncheckedUpdateInput>
  }

  /**
   * ContractDocument delete
   */
  export type ContractDocumentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContractDocument
     */
    select?: ContractDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContractDocument
     */
    omit?: ContractDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractDocumentInclude<ExtArgs> | null
    /**
     * Filter which ContractDocument to delete.
     */
    where: ContractDocumentWhereUniqueInput
  }

  /**
   * ContractDocument deleteMany
   */
  export type ContractDocumentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContractDocuments to delete
     */
    where?: ContractDocumentWhereInput
    /**
     * Limit how many ContractDocuments to delete.
     */
    limit?: number
  }

  /**
   * ContractDocument.contractDocumentRelation
   */
  export type ContractDocument$contractDocumentRelationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContractDocumentRelation
     */
    select?: ContractDocumentRelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContractDocumentRelation
     */
    omit?: ContractDocumentRelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractDocumentRelationInclude<ExtArgs> | null
    where?: ContractDocumentRelationWhereInput
  }

  /**
   * ContractDocument without action
   */
  export type ContractDocumentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContractDocument
     */
    select?: ContractDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContractDocument
     */
    omit?: ContractDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractDocumentInclude<ExtArgs> | null
  }


  /**
   * Model ContractDocumentRelation
   */

  export type AggregateContractDocumentRelation = {
    _count: ContractDocumentRelationCountAggregateOutputType | null
    _avg: ContractDocumentRelationAvgAggregateOutputType | null
    _sum: ContractDocumentRelationSumAggregateOutputType | null
    _min: ContractDocumentRelationMinAggregateOutputType | null
    _max: ContractDocumentRelationMaxAggregateOutputType | null
  }

  export type ContractDocumentRelationAvgAggregateOutputType = {
    contractId: number | null
    contractDocumentId: number | null
  }

  export type ContractDocumentRelationSumAggregateOutputType = {
    contractId: number | null
    contractDocumentId: number | null
  }

  export type ContractDocumentRelationMinAggregateOutputType = {
    contractId: number | null
    contractDocumentId: number | null
    createdAt: Date | null
  }

  export type ContractDocumentRelationMaxAggregateOutputType = {
    contractId: number | null
    contractDocumentId: number | null
    createdAt: Date | null
  }

  export type ContractDocumentRelationCountAggregateOutputType = {
    contractId: number
    contractDocumentId: number
    createdAt: number
    _all: number
  }


  export type ContractDocumentRelationAvgAggregateInputType = {
    contractId?: true
    contractDocumentId?: true
  }

  export type ContractDocumentRelationSumAggregateInputType = {
    contractId?: true
    contractDocumentId?: true
  }

  export type ContractDocumentRelationMinAggregateInputType = {
    contractId?: true
    contractDocumentId?: true
    createdAt?: true
  }

  export type ContractDocumentRelationMaxAggregateInputType = {
    contractId?: true
    contractDocumentId?: true
    createdAt?: true
  }

  export type ContractDocumentRelationCountAggregateInputType = {
    contractId?: true
    contractDocumentId?: true
    createdAt?: true
    _all?: true
  }

  export type ContractDocumentRelationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContractDocumentRelation to aggregate.
     */
    where?: ContractDocumentRelationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContractDocumentRelations to fetch.
     */
    orderBy?: ContractDocumentRelationOrderByWithRelationInput | ContractDocumentRelationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContractDocumentRelationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContractDocumentRelations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContractDocumentRelations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ContractDocumentRelations
    **/
    _count?: true | ContractDocumentRelationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContractDocumentRelationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContractDocumentRelationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContractDocumentRelationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContractDocumentRelationMaxAggregateInputType
  }

  export type GetContractDocumentRelationAggregateType<T extends ContractDocumentRelationAggregateArgs> = {
        [P in keyof T & keyof AggregateContractDocumentRelation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContractDocumentRelation[P]>
      : GetScalarType<T[P], AggregateContractDocumentRelation[P]>
  }




  export type ContractDocumentRelationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContractDocumentRelationWhereInput
    orderBy?: ContractDocumentRelationOrderByWithAggregationInput | ContractDocumentRelationOrderByWithAggregationInput[]
    by: ContractDocumentRelationScalarFieldEnum[] | ContractDocumentRelationScalarFieldEnum
    having?: ContractDocumentRelationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContractDocumentRelationCountAggregateInputType | true
    _avg?: ContractDocumentRelationAvgAggregateInputType
    _sum?: ContractDocumentRelationSumAggregateInputType
    _min?: ContractDocumentRelationMinAggregateInputType
    _max?: ContractDocumentRelationMaxAggregateInputType
  }

  export type ContractDocumentRelationGroupByOutputType = {
    contractId: number
    contractDocumentId: number
    createdAt: Date
    _count: ContractDocumentRelationCountAggregateOutputType | null
    _avg: ContractDocumentRelationAvgAggregateOutputType | null
    _sum: ContractDocumentRelationSumAggregateOutputType | null
    _min: ContractDocumentRelationMinAggregateOutputType | null
    _max: ContractDocumentRelationMaxAggregateOutputType | null
  }

  type GetContractDocumentRelationGroupByPayload<T extends ContractDocumentRelationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContractDocumentRelationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContractDocumentRelationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContractDocumentRelationGroupByOutputType[P]>
            : GetScalarType<T[P], ContractDocumentRelationGroupByOutputType[P]>
        }
      >
    >


  export type ContractDocumentRelationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    contractId?: boolean
    contractDocumentId?: boolean
    createdAt?: boolean
    contract?: boolean | ContractDefaultArgs<ExtArgs>
    contractDocument?: boolean | ContractDocumentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contractDocumentRelation"]>

  export type ContractDocumentRelationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    contractId?: boolean
    contractDocumentId?: boolean
    createdAt?: boolean
    contract?: boolean | ContractDefaultArgs<ExtArgs>
    contractDocument?: boolean | ContractDocumentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contractDocumentRelation"]>

  export type ContractDocumentRelationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    contractId?: boolean
    contractDocumentId?: boolean
    createdAt?: boolean
    contract?: boolean | ContractDefaultArgs<ExtArgs>
    contractDocument?: boolean | ContractDocumentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contractDocumentRelation"]>

  export type ContractDocumentRelationSelectScalar = {
    contractId?: boolean
    contractDocumentId?: boolean
    createdAt?: boolean
  }

  export type ContractDocumentRelationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"contractId" | "contractDocumentId" | "createdAt", ExtArgs["result"]["contractDocumentRelation"]>
  export type ContractDocumentRelationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contract?: boolean | ContractDefaultArgs<ExtArgs>
    contractDocument?: boolean | ContractDocumentDefaultArgs<ExtArgs>
  }
  export type ContractDocumentRelationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contract?: boolean | ContractDefaultArgs<ExtArgs>
    contractDocument?: boolean | ContractDocumentDefaultArgs<ExtArgs>
  }
  export type ContractDocumentRelationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contract?: boolean | ContractDefaultArgs<ExtArgs>
    contractDocument?: boolean | ContractDocumentDefaultArgs<ExtArgs>
  }

  export type $ContractDocumentRelationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ContractDocumentRelation"
    objects: {
      contract: Prisma.$ContractPayload<ExtArgs>
      contractDocument: Prisma.$ContractDocumentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      contractId: number
      contractDocumentId: number
      createdAt: Date
    }, ExtArgs["result"]["contractDocumentRelation"]>
    composites: {}
  }

  type ContractDocumentRelationGetPayload<S extends boolean | null | undefined | ContractDocumentRelationDefaultArgs> = $Result.GetResult<Prisma.$ContractDocumentRelationPayload, S>

  type ContractDocumentRelationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContractDocumentRelationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContractDocumentRelationCountAggregateInputType | true
    }

  export interface ContractDocumentRelationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ContractDocumentRelation'], meta: { name: 'ContractDocumentRelation' } }
    /**
     * Find zero or one ContractDocumentRelation that matches the filter.
     * @param {ContractDocumentRelationFindUniqueArgs} args - Arguments to find a ContractDocumentRelation
     * @example
     * // Get one ContractDocumentRelation
     * const contractDocumentRelation = await prisma.contractDocumentRelation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContractDocumentRelationFindUniqueArgs>(args: SelectSubset<T, ContractDocumentRelationFindUniqueArgs<ExtArgs>>): Prisma__ContractDocumentRelationClient<$Result.GetResult<Prisma.$ContractDocumentRelationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ContractDocumentRelation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContractDocumentRelationFindUniqueOrThrowArgs} args - Arguments to find a ContractDocumentRelation
     * @example
     * // Get one ContractDocumentRelation
     * const contractDocumentRelation = await prisma.contractDocumentRelation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContractDocumentRelationFindUniqueOrThrowArgs>(args: SelectSubset<T, ContractDocumentRelationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContractDocumentRelationClient<$Result.GetResult<Prisma.$ContractDocumentRelationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContractDocumentRelation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractDocumentRelationFindFirstArgs} args - Arguments to find a ContractDocumentRelation
     * @example
     * // Get one ContractDocumentRelation
     * const contractDocumentRelation = await prisma.contractDocumentRelation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContractDocumentRelationFindFirstArgs>(args?: SelectSubset<T, ContractDocumentRelationFindFirstArgs<ExtArgs>>): Prisma__ContractDocumentRelationClient<$Result.GetResult<Prisma.$ContractDocumentRelationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContractDocumentRelation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractDocumentRelationFindFirstOrThrowArgs} args - Arguments to find a ContractDocumentRelation
     * @example
     * // Get one ContractDocumentRelation
     * const contractDocumentRelation = await prisma.contractDocumentRelation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContractDocumentRelationFindFirstOrThrowArgs>(args?: SelectSubset<T, ContractDocumentRelationFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContractDocumentRelationClient<$Result.GetResult<Prisma.$ContractDocumentRelationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ContractDocumentRelations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractDocumentRelationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ContractDocumentRelations
     * const contractDocumentRelations = await prisma.contractDocumentRelation.findMany()
     * 
     * // Get first 10 ContractDocumentRelations
     * const contractDocumentRelations = await prisma.contractDocumentRelation.findMany({ take: 10 })
     * 
     * // Only select the `contractId`
     * const contractDocumentRelationWithContractIdOnly = await prisma.contractDocumentRelation.findMany({ select: { contractId: true } })
     * 
     */
    findMany<T extends ContractDocumentRelationFindManyArgs>(args?: SelectSubset<T, ContractDocumentRelationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContractDocumentRelationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ContractDocumentRelation.
     * @param {ContractDocumentRelationCreateArgs} args - Arguments to create a ContractDocumentRelation.
     * @example
     * // Create one ContractDocumentRelation
     * const ContractDocumentRelation = await prisma.contractDocumentRelation.create({
     *   data: {
     *     // ... data to create a ContractDocumentRelation
     *   }
     * })
     * 
     */
    create<T extends ContractDocumentRelationCreateArgs>(args: SelectSubset<T, ContractDocumentRelationCreateArgs<ExtArgs>>): Prisma__ContractDocumentRelationClient<$Result.GetResult<Prisma.$ContractDocumentRelationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ContractDocumentRelations.
     * @param {ContractDocumentRelationCreateManyArgs} args - Arguments to create many ContractDocumentRelations.
     * @example
     * // Create many ContractDocumentRelations
     * const contractDocumentRelation = await prisma.contractDocumentRelation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContractDocumentRelationCreateManyArgs>(args?: SelectSubset<T, ContractDocumentRelationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ContractDocumentRelations and returns the data saved in the database.
     * @param {ContractDocumentRelationCreateManyAndReturnArgs} args - Arguments to create many ContractDocumentRelations.
     * @example
     * // Create many ContractDocumentRelations
     * const contractDocumentRelation = await prisma.contractDocumentRelation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ContractDocumentRelations and only return the `contractId`
     * const contractDocumentRelationWithContractIdOnly = await prisma.contractDocumentRelation.createManyAndReturn({
     *   select: { contractId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContractDocumentRelationCreateManyAndReturnArgs>(args?: SelectSubset<T, ContractDocumentRelationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContractDocumentRelationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ContractDocumentRelation.
     * @param {ContractDocumentRelationDeleteArgs} args - Arguments to delete one ContractDocumentRelation.
     * @example
     * // Delete one ContractDocumentRelation
     * const ContractDocumentRelation = await prisma.contractDocumentRelation.delete({
     *   where: {
     *     // ... filter to delete one ContractDocumentRelation
     *   }
     * })
     * 
     */
    delete<T extends ContractDocumentRelationDeleteArgs>(args: SelectSubset<T, ContractDocumentRelationDeleteArgs<ExtArgs>>): Prisma__ContractDocumentRelationClient<$Result.GetResult<Prisma.$ContractDocumentRelationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ContractDocumentRelation.
     * @param {ContractDocumentRelationUpdateArgs} args - Arguments to update one ContractDocumentRelation.
     * @example
     * // Update one ContractDocumentRelation
     * const contractDocumentRelation = await prisma.contractDocumentRelation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContractDocumentRelationUpdateArgs>(args: SelectSubset<T, ContractDocumentRelationUpdateArgs<ExtArgs>>): Prisma__ContractDocumentRelationClient<$Result.GetResult<Prisma.$ContractDocumentRelationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ContractDocumentRelations.
     * @param {ContractDocumentRelationDeleteManyArgs} args - Arguments to filter ContractDocumentRelations to delete.
     * @example
     * // Delete a few ContractDocumentRelations
     * const { count } = await prisma.contractDocumentRelation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContractDocumentRelationDeleteManyArgs>(args?: SelectSubset<T, ContractDocumentRelationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContractDocumentRelations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractDocumentRelationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ContractDocumentRelations
     * const contractDocumentRelation = await prisma.contractDocumentRelation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContractDocumentRelationUpdateManyArgs>(args: SelectSubset<T, ContractDocumentRelationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContractDocumentRelations and returns the data updated in the database.
     * @param {ContractDocumentRelationUpdateManyAndReturnArgs} args - Arguments to update many ContractDocumentRelations.
     * @example
     * // Update many ContractDocumentRelations
     * const contractDocumentRelation = await prisma.contractDocumentRelation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ContractDocumentRelations and only return the `contractId`
     * const contractDocumentRelationWithContractIdOnly = await prisma.contractDocumentRelation.updateManyAndReturn({
     *   select: { contractId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ContractDocumentRelationUpdateManyAndReturnArgs>(args: SelectSubset<T, ContractDocumentRelationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContractDocumentRelationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ContractDocumentRelation.
     * @param {ContractDocumentRelationUpsertArgs} args - Arguments to update or create a ContractDocumentRelation.
     * @example
     * // Update or create a ContractDocumentRelation
     * const contractDocumentRelation = await prisma.contractDocumentRelation.upsert({
     *   create: {
     *     // ... data to create a ContractDocumentRelation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ContractDocumentRelation we want to update
     *   }
     * })
     */
    upsert<T extends ContractDocumentRelationUpsertArgs>(args: SelectSubset<T, ContractDocumentRelationUpsertArgs<ExtArgs>>): Prisma__ContractDocumentRelationClient<$Result.GetResult<Prisma.$ContractDocumentRelationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ContractDocumentRelations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractDocumentRelationCountArgs} args - Arguments to filter ContractDocumentRelations to count.
     * @example
     * // Count the number of ContractDocumentRelations
     * const count = await prisma.contractDocumentRelation.count({
     *   where: {
     *     // ... the filter for the ContractDocumentRelations we want to count
     *   }
     * })
    **/
    count<T extends ContractDocumentRelationCountArgs>(
      args?: Subset<T, ContractDocumentRelationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContractDocumentRelationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ContractDocumentRelation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractDocumentRelationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ContractDocumentRelationAggregateArgs>(args: Subset<T, ContractDocumentRelationAggregateArgs>): Prisma.PrismaPromise<GetContractDocumentRelationAggregateType<T>>

    /**
     * Group by ContractDocumentRelation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractDocumentRelationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ContractDocumentRelationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContractDocumentRelationGroupByArgs['orderBy'] }
        : { orderBy?: ContractDocumentRelationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ContractDocumentRelationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContractDocumentRelationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ContractDocumentRelation model
   */
  readonly fields: ContractDocumentRelationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ContractDocumentRelation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContractDocumentRelationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    contract<T extends ContractDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ContractDefaultArgs<ExtArgs>>): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    contractDocument<T extends ContractDocumentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ContractDocumentDefaultArgs<ExtArgs>>): Prisma__ContractDocumentClient<$Result.GetResult<Prisma.$ContractDocumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ContractDocumentRelation model
   */
  interface ContractDocumentRelationFieldRefs {
    readonly contractId: FieldRef<"ContractDocumentRelation", 'Int'>
    readonly contractDocumentId: FieldRef<"ContractDocumentRelation", 'Int'>
    readonly createdAt: FieldRef<"ContractDocumentRelation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ContractDocumentRelation findUnique
   */
  export type ContractDocumentRelationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContractDocumentRelation
     */
    select?: ContractDocumentRelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContractDocumentRelation
     */
    omit?: ContractDocumentRelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractDocumentRelationInclude<ExtArgs> | null
    /**
     * Filter, which ContractDocumentRelation to fetch.
     */
    where: ContractDocumentRelationWhereUniqueInput
  }

  /**
   * ContractDocumentRelation findUniqueOrThrow
   */
  export type ContractDocumentRelationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContractDocumentRelation
     */
    select?: ContractDocumentRelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContractDocumentRelation
     */
    omit?: ContractDocumentRelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractDocumentRelationInclude<ExtArgs> | null
    /**
     * Filter, which ContractDocumentRelation to fetch.
     */
    where: ContractDocumentRelationWhereUniqueInput
  }

  /**
   * ContractDocumentRelation findFirst
   */
  export type ContractDocumentRelationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContractDocumentRelation
     */
    select?: ContractDocumentRelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContractDocumentRelation
     */
    omit?: ContractDocumentRelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractDocumentRelationInclude<ExtArgs> | null
    /**
     * Filter, which ContractDocumentRelation to fetch.
     */
    where?: ContractDocumentRelationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContractDocumentRelations to fetch.
     */
    orderBy?: ContractDocumentRelationOrderByWithRelationInput | ContractDocumentRelationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContractDocumentRelations.
     */
    cursor?: ContractDocumentRelationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContractDocumentRelations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContractDocumentRelations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContractDocumentRelations.
     */
    distinct?: ContractDocumentRelationScalarFieldEnum | ContractDocumentRelationScalarFieldEnum[]
  }

  /**
   * ContractDocumentRelation findFirstOrThrow
   */
  export type ContractDocumentRelationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContractDocumentRelation
     */
    select?: ContractDocumentRelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContractDocumentRelation
     */
    omit?: ContractDocumentRelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractDocumentRelationInclude<ExtArgs> | null
    /**
     * Filter, which ContractDocumentRelation to fetch.
     */
    where?: ContractDocumentRelationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContractDocumentRelations to fetch.
     */
    orderBy?: ContractDocumentRelationOrderByWithRelationInput | ContractDocumentRelationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContractDocumentRelations.
     */
    cursor?: ContractDocumentRelationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContractDocumentRelations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContractDocumentRelations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContractDocumentRelations.
     */
    distinct?: ContractDocumentRelationScalarFieldEnum | ContractDocumentRelationScalarFieldEnum[]
  }

  /**
   * ContractDocumentRelation findMany
   */
  export type ContractDocumentRelationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContractDocumentRelation
     */
    select?: ContractDocumentRelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContractDocumentRelation
     */
    omit?: ContractDocumentRelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractDocumentRelationInclude<ExtArgs> | null
    /**
     * Filter, which ContractDocumentRelations to fetch.
     */
    where?: ContractDocumentRelationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContractDocumentRelations to fetch.
     */
    orderBy?: ContractDocumentRelationOrderByWithRelationInput | ContractDocumentRelationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ContractDocumentRelations.
     */
    cursor?: ContractDocumentRelationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContractDocumentRelations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContractDocumentRelations.
     */
    skip?: number
    distinct?: ContractDocumentRelationScalarFieldEnum | ContractDocumentRelationScalarFieldEnum[]
  }

  /**
   * ContractDocumentRelation create
   */
  export type ContractDocumentRelationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContractDocumentRelation
     */
    select?: ContractDocumentRelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContractDocumentRelation
     */
    omit?: ContractDocumentRelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractDocumentRelationInclude<ExtArgs> | null
    /**
     * The data needed to create a ContractDocumentRelation.
     */
    data: XOR<ContractDocumentRelationCreateInput, ContractDocumentRelationUncheckedCreateInput>
  }

  /**
   * ContractDocumentRelation createMany
   */
  export type ContractDocumentRelationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ContractDocumentRelations.
     */
    data: ContractDocumentRelationCreateManyInput | ContractDocumentRelationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ContractDocumentRelation createManyAndReturn
   */
  export type ContractDocumentRelationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContractDocumentRelation
     */
    select?: ContractDocumentRelationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContractDocumentRelation
     */
    omit?: ContractDocumentRelationOmit<ExtArgs> | null
    /**
     * The data used to create many ContractDocumentRelations.
     */
    data: ContractDocumentRelationCreateManyInput | ContractDocumentRelationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractDocumentRelationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ContractDocumentRelation update
   */
  export type ContractDocumentRelationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContractDocumentRelation
     */
    select?: ContractDocumentRelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContractDocumentRelation
     */
    omit?: ContractDocumentRelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractDocumentRelationInclude<ExtArgs> | null
    /**
     * The data needed to update a ContractDocumentRelation.
     */
    data: XOR<ContractDocumentRelationUpdateInput, ContractDocumentRelationUncheckedUpdateInput>
    /**
     * Choose, which ContractDocumentRelation to update.
     */
    where: ContractDocumentRelationWhereUniqueInput
  }

  /**
   * ContractDocumentRelation updateMany
   */
  export type ContractDocumentRelationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ContractDocumentRelations.
     */
    data: XOR<ContractDocumentRelationUpdateManyMutationInput, ContractDocumentRelationUncheckedUpdateManyInput>
    /**
     * Filter which ContractDocumentRelations to update
     */
    where?: ContractDocumentRelationWhereInput
    /**
     * Limit how many ContractDocumentRelations to update.
     */
    limit?: number
  }

  /**
   * ContractDocumentRelation updateManyAndReturn
   */
  export type ContractDocumentRelationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContractDocumentRelation
     */
    select?: ContractDocumentRelationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContractDocumentRelation
     */
    omit?: ContractDocumentRelationOmit<ExtArgs> | null
    /**
     * The data used to update ContractDocumentRelations.
     */
    data: XOR<ContractDocumentRelationUpdateManyMutationInput, ContractDocumentRelationUncheckedUpdateManyInput>
    /**
     * Filter which ContractDocumentRelations to update
     */
    where?: ContractDocumentRelationWhereInput
    /**
     * Limit how many ContractDocumentRelations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractDocumentRelationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ContractDocumentRelation upsert
   */
  export type ContractDocumentRelationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContractDocumentRelation
     */
    select?: ContractDocumentRelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContractDocumentRelation
     */
    omit?: ContractDocumentRelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractDocumentRelationInclude<ExtArgs> | null
    /**
     * The filter to search for the ContractDocumentRelation to update in case it exists.
     */
    where: ContractDocumentRelationWhereUniqueInput
    /**
     * In case the ContractDocumentRelation found by the `where` argument doesn't exist, create a new ContractDocumentRelation with this data.
     */
    create: XOR<ContractDocumentRelationCreateInput, ContractDocumentRelationUncheckedCreateInput>
    /**
     * In case the ContractDocumentRelation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContractDocumentRelationUpdateInput, ContractDocumentRelationUncheckedUpdateInput>
  }

  /**
   * ContractDocumentRelation delete
   */
  export type ContractDocumentRelationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContractDocumentRelation
     */
    select?: ContractDocumentRelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContractDocumentRelation
     */
    omit?: ContractDocumentRelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractDocumentRelationInclude<ExtArgs> | null
    /**
     * Filter which ContractDocumentRelation to delete.
     */
    where: ContractDocumentRelationWhereUniqueInput
  }

  /**
   * ContractDocumentRelation deleteMany
   */
  export type ContractDocumentRelationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContractDocumentRelations to delete
     */
    where?: ContractDocumentRelationWhereInput
    /**
     * Limit how many ContractDocumentRelations to delete.
     */
    limit?: number
  }

  /**
   * ContractDocumentRelation without action
   */
  export type ContractDocumentRelationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContractDocumentRelation
     */
    select?: ContractDocumentRelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContractDocumentRelation
     */
    omit?: ContractDocumentRelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractDocumentRelationInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CompanyScalarFieldEnum: {
    id: 'id',
    companyName: 'companyName',
    companyCode: 'companyCode',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CompanyScalarFieldEnum = (typeof CompanyScalarFieldEnum)[keyof typeof CompanyScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    employeeNumber: 'employeeNumber',
    phoneNumber: 'phoneNumber',
    password: 'password',
    imageUrl: 'imageUrl',
    refreshToken: 'refreshToken',
    isAdmin: 'isAdmin',
    companyId: 'companyId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CustomerScalarFieldEnum: {
    id: 'id',
    name: 'name',
    gender: 'gender',
    phoneNumber: 'phoneNumber',
    ageGroup: 'ageGroup',
    region: 'region',
    email: 'email',
    memo: 'memo',
    companyId: 'companyId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CustomerScalarFieldEnum = (typeof CustomerScalarFieldEnum)[keyof typeof CustomerScalarFieldEnum]


  export const CarScalarFieldEnum: {
    id: 'id',
    carNumber: 'carNumber',
    manufacturingYear: 'manufacturingYear',
    mileage: 'mileage',
    price: 'price',
    accidentCount: 'accidentCount',
    explanation: 'explanation',
    accidentDetails: 'accidentDetails',
    status: 'status',
    model: 'model',
    companyId: 'companyId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CarScalarFieldEnum = (typeof CarScalarFieldEnum)[keyof typeof CarScalarFieldEnum]


  export const CarModelScalarFieldEnum: {
    model: 'model',
    manufacturer: 'manufacturer',
    type: 'type'
  };

  export type CarModelScalarFieldEnum = (typeof CarModelScalarFieldEnum)[keyof typeof CarModelScalarFieldEnum]


  export const ContractScalarFieldEnum: {
    id: 'id',
    status: 'status',
    resolutionDate: 'resolutionDate',
    contractPrice: 'contractPrice',
    carId: 'carId',
    customerId: 'customerId',
    userId: 'userId',
    companyId: 'companyId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ContractScalarFieldEnum = (typeof ContractScalarFieldEnum)[keyof typeof ContractScalarFieldEnum]


  export const MeetingsScalarFieldEnum: {
    id: 'id',
    date: 'date',
    alarms: 'alarms',
    contractId: 'contractId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MeetingsScalarFieldEnum = (typeof MeetingsScalarFieldEnum)[keyof typeof MeetingsScalarFieldEnum]


  export const ContractDocumentScalarFieldEnum: {
    id: 'id',
    fileName: 'fileName',
    createdAt: 'createdAt'
  };

  export type ContractDocumentScalarFieldEnum = (typeof ContractDocumentScalarFieldEnum)[keyof typeof ContractDocumentScalarFieldEnum]


  export const ContractDocumentRelationScalarFieldEnum: {
    contractId: 'contractId',
    contractDocumentId: 'contractDocumentId',
    createdAt: 'createdAt'
  };

  export type ContractDocumentRelationScalarFieldEnum = (typeof ContractDocumentRelationScalarFieldEnum)[keyof typeof ContractDocumentRelationScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Gender'
   */
  export type EnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender'>
    


  /**
   * Reference to a field of type 'Gender[]'
   */
  export type ListEnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender[]'>
    


  /**
   * Reference to a field of type 'AgeGroup'
   */
  export type EnumAgeGroupFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AgeGroup'>
    


  /**
   * Reference to a field of type 'AgeGroup[]'
   */
  export type ListEnumAgeGroupFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AgeGroup[]'>
    


  /**
   * Reference to a field of type 'Region'
   */
  export type EnumRegionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Region'>
    


  /**
   * Reference to a field of type 'Region[]'
   */
  export type ListEnumRegionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Region[]'>
    


  /**
   * Reference to a field of type 'CarStatus'
   */
  export type EnumCarStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CarStatus'>
    


  /**
   * Reference to a field of type 'CarStatus[]'
   */
  export type ListEnumCarStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CarStatus[]'>
    


  /**
   * Reference to a field of type 'ContractStatus'
   */
  export type EnumContractStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ContractStatus'>
    


  /**
   * Reference to a field of type 'ContractStatus[]'
   */
  export type ListEnumContractStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ContractStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type CompanyWhereInput = {
    AND?: CompanyWhereInput | CompanyWhereInput[]
    OR?: CompanyWhereInput[]
    NOT?: CompanyWhereInput | CompanyWhereInput[]
    id?: IntFilter<"Company"> | number
    companyName?: StringFilter<"Company"> | string
    companyCode?: StringFilter<"Company"> | string
    createdAt?: DateTimeFilter<"Company"> | Date | string
    updatedAt?: DateTimeFilter<"Company"> | Date | string
    user?: UserListRelationFilter
    customer?: CustomerListRelationFilter
    car?: CarListRelationFilter
    contract?: ContractListRelationFilter
  }

  export type CompanyOrderByWithRelationInput = {
    id?: SortOrder
    companyName?: SortOrder
    companyCode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByRelationAggregateInput
    customer?: CustomerOrderByRelationAggregateInput
    car?: CarOrderByRelationAggregateInput
    contract?: ContractOrderByRelationAggregateInput
  }

  export type CompanyWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    companyCode?: string
    AND?: CompanyWhereInput | CompanyWhereInput[]
    OR?: CompanyWhereInput[]
    NOT?: CompanyWhereInput | CompanyWhereInput[]
    companyName?: StringFilter<"Company"> | string
    createdAt?: DateTimeFilter<"Company"> | Date | string
    updatedAt?: DateTimeFilter<"Company"> | Date | string
    user?: UserListRelationFilter
    customer?: CustomerListRelationFilter
    car?: CarListRelationFilter
    contract?: ContractListRelationFilter
  }, "id" | "companyCode">

  export type CompanyOrderByWithAggregationInput = {
    id?: SortOrder
    companyName?: SortOrder
    companyCode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CompanyCountOrderByAggregateInput
    _avg?: CompanyAvgOrderByAggregateInput
    _max?: CompanyMaxOrderByAggregateInput
    _min?: CompanyMinOrderByAggregateInput
    _sum?: CompanySumOrderByAggregateInput
  }

  export type CompanyScalarWhereWithAggregatesInput = {
    AND?: CompanyScalarWhereWithAggregatesInput | CompanyScalarWhereWithAggregatesInput[]
    OR?: CompanyScalarWhereWithAggregatesInput[]
    NOT?: CompanyScalarWhereWithAggregatesInput | CompanyScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Company"> | number
    companyName?: StringWithAggregatesFilter<"Company"> | string
    companyCode?: StringWithAggregatesFilter<"Company"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Company"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Company"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    employeeNumber?: StringFilter<"User"> | string
    phoneNumber?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    imageUrl?: StringNullableFilter<"User"> | string | null
    refreshToken?: StringNullableFilter<"User"> | string | null
    isAdmin?: BoolFilter<"User"> | boolean
    companyId?: IntFilter<"User"> | number
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
    contract?: ContractListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    employeeNumber?: SortOrder
    phoneNumber?: SortOrder
    password?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    isAdmin?: SortOrder
    companyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    company?: CompanyOrderByWithRelationInput
    contract?: ContractOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    employeeNumber?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    phoneNumber?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    imageUrl?: StringNullableFilter<"User"> | string | null
    refreshToken?: StringNullableFilter<"User"> | string | null
    isAdmin?: BoolFilter<"User"> | boolean
    companyId?: IntFilter<"User"> | number
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
    contract?: ContractListRelationFilter
  }, "id" | "email" | "employeeNumber">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    employeeNumber?: SortOrder
    phoneNumber?: SortOrder
    password?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    isAdmin?: SortOrder
    companyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    employeeNumber?: StringWithAggregatesFilter<"User"> | string
    phoneNumber?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    imageUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
    refreshToken?: StringNullableWithAggregatesFilter<"User"> | string | null
    isAdmin?: BoolWithAggregatesFilter<"User"> | boolean
    companyId?: IntWithAggregatesFilter<"User"> | number
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type CustomerWhereInput = {
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    id?: IntFilter<"Customer"> | number
    name?: StringFilter<"Customer"> | string
    gender?: EnumGenderFilter<"Customer"> | $Enums.Gender
    phoneNumber?: StringFilter<"Customer"> | string
    ageGroup?: EnumAgeGroupNullableFilter<"Customer"> | $Enums.AgeGroup | null
    region?: EnumRegionNullableFilter<"Customer"> | $Enums.Region | null
    email?: StringFilter<"Customer"> | string
    memo?: StringNullableFilter<"Customer"> | string | null
    companyId?: IntFilter<"Customer"> | number
    createdAt?: DateTimeFilter<"Customer"> | Date | string
    updatedAt?: DateTimeFilter<"Customer"> | Date | string
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
    contract?: ContractListRelationFilter
  }

  export type CustomerOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    gender?: SortOrder
    phoneNumber?: SortOrder
    ageGroup?: SortOrderInput | SortOrder
    region?: SortOrderInput | SortOrder
    email?: SortOrder
    memo?: SortOrderInput | SortOrder
    companyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    company?: CompanyOrderByWithRelationInput
    contract?: ContractOrderByRelationAggregateInput
  }

  export type CustomerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    name?: StringFilter<"Customer"> | string
    gender?: EnumGenderFilter<"Customer"> | $Enums.Gender
    phoneNumber?: StringFilter<"Customer"> | string
    ageGroup?: EnumAgeGroupNullableFilter<"Customer"> | $Enums.AgeGroup | null
    region?: EnumRegionNullableFilter<"Customer"> | $Enums.Region | null
    memo?: StringNullableFilter<"Customer"> | string | null
    companyId?: IntFilter<"Customer"> | number
    createdAt?: DateTimeFilter<"Customer"> | Date | string
    updatedAt?: DateTimeFilter<"Customer"> | Date | string
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
    contract?: ContractListRelationFilter
  }, "id" | "email">

  export type CustomerOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    gender?: SortOrder
    phoneNumber?: SortOrder
    ageGroup?: SortOrderInput | SortOrder
    region?: SortOrderInput | SortOrder
    email?: SortOrder
    memo?: SortOrderInput | SortOrder
    companyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CustomerCountOrderByAggregateInput
    _avg?: CustomerAvgOrderByAggregateInput
    _max?: CustomerMaxOrderByAggregateInput
    _min?: CustomerMinOrderByAggregateInput
    _sum?: CustomerSumOrderByAggregateInput
  }

  export type CustomerScalarWhereWithAggregatesInput = {
    AND?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    OR?: CustomerScalarWhereWithAggregatesInput[]
    NOT?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Customer"> | number
    name?: StringWithAggregatesFilter<"Customer"> | string
    gender?: EnumGenderWithAggregatesFilter<"Customer"> | $Enums.Gender
    phoneNumber?: StringWithAggregatesFilter<"Customer"> | string
    ageGroup?: EnumAgeGroupNullableWithAggregatesFilter<"Customer"> | $Enums.AgeGroup | null
    region?: EnumRegionNullableWithAggregatesFilter<"Customer"> | $Enums.Region | null
    email?: StringWithAggregatesFilter<"Customer"> | string
    memo?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    companyId?: IntWithAggregatesFilter<"Customer"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Customer"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Customer"> | Date | string
  }

  export type CarWhereInput = {
    AND?: CarWhereInput | CarWhereInput[]
    OR?: CarWhereInput[]
    NOT?: CarWhereInput | CarWhereInput[]
    id?: IntFilter<"Car"> | number
    carNumber?: StringFilter<"Car"> | string
    manufacturingYear?: IntFilter<"Car"> | number
    mileage?: IntFilter<"Car"> | number
    price?: IntFilter<"Car"> | number
    accidentCount?: IntFilter<"Car"> | number
    explanation?: StringNullableFilter<"Car"> | string | null
    accidentDetails?: StringNullableFilter<"Car"> | string | null
    status?: EnumCarStatusFilter<"Car"> | $Enums.CarStatus
    model?: StringFilter<"Car"> | string
    companyId?: IntFilter<"Car"> | number
    createdAt?: DateTimeFilter<"Car"> | Date | string
    updatedAt?: DateTimeFilter<"Car"> | Date | string
    carModel?: XOR<CarModelScalarRelationFilter, CarModelWhereInput>
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
    contract?: ContractListRelationFilter
  }

  export type CarOrderByWithRelationInput = {
    id?: SortOrder
    carNumber?: SortOrder
    manufacturingYear?: SortOrder
    mileage?: SortOrder
    price?: SortOrder
    accidentCount?: SortOrder
    explanation?: SortOrderInput | SortOrder
    accidentDetails?: SortOrderInput | SortOrder
    status?: SortOrder
    model?: SortOrder
    companyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    carModel?: CarModelOrderByWithRelationInput
    company?: CompanyOrderByWithRelationInput
    contract?: ContractOrderByRelationAggregateInput
  }

  export type CarWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    carNumber?: string
    AND?: CarWhereInput | CarWhereInput[]
    OR?: CarWhereInput[]
    NOT?: CarWhereInput | CarWhereInput[]
    manufacturingYear?: IntFilter<"Car"> | number
    mileage?: IntFilter<"Car"> | number
    price?: IntFilter<"Car"> | number
    accidentCount?: IntFilter<"Car"> | number
    explanation?: StringNullableFilter<"Car"> | string | null
    accidentDetails?: StringNullableFilter<"Car"> | string | null
    status?: EnumCarStatusFilter<"Car"> | $Enums.CarStatus
    model?: StringFilter<"Car"> | string
    companyId?: IntFilter<"Car"> | number
    createdAt?: DateTimeFilter<"Car"> | Date | string
    updatedAt?: DateTimeFilter<"Car"> | Date | string
    carModel?: XOR<CarModelScalarRelationFilter, CarModelWhereInput>
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
    contract?: ContractListRelationFilter
  }, "id" | "carNumber">

  export type CarOrderByWithAggregationInput = {
    id?: SortOrder
    carNumber?: SortOrder
    manufacturingYear?: SortOrder
    mileage?: SortOrder
    price?: SortOrder
    accidentCount?: SortOrder
    explanation?: SortOrderInput | SortOrder
    accidentDetails?: SortOrderInput | SortOrder
    status?: SortOrder
    model?: SortOrder
    companyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CarCountOrderByAggregateInput
    _avg?: CarAvgOrderByAggregateInput
    _max?: CarMaxOrderByAggregateInput
    _min?: CarMinOrderByAggregateInput
    _sum?: CarSumOrderByAggregateInput
  }

  export type CarScalarWhereWithAggregatesInput = {
    AND?: CarScalarWhereWithAggregatesInput | CarScalarWhereWithAggregatesInput[]
    OR?: CarScalarWhereWithAggregatesInput[]
    NOT?: CarScalarWhereWithAggregatesInput | CarScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Car"> | number
    carNumber?: StringWithAggregatesFilter<"Car"> | string
    manufacturingYear?: IntWithAggregatesFilter<"Car"> | number
    mileage?: IntWithAggregatesFilter<"Car"> | number
    price?: IntWithAggregatesFilter<"Car"> | number
    accidentCount?: IntWithAggregatesFilter<"Car"> | number
    explanation?: StringNullableWithAggregatesFilter<"Car"> | string | null
    accidentDetails?: StringNullableWithAggregatesFilter<"Car"> | string | null
    status?: EnumCarStatusWithAggregatesFilter<"Car"> | $Enums.CarStatus
    model?: StringWithAggregatesFilter<"Car"> | string
    companyId?: IntWithAggregatesFilter<"Car"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Car"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Car"> | Date | string
  }

  export type CarModelWhereInput = {
    AND?: CarModelWhereInput | CarModelWhereInput[]
    OR?: CarModelWhereInput[]
    NOT?: CarModelWhereInput | CarModelWhereInput[]
    model?: StringFilter<"CarModel"> | string
    manufacturer?: StringFilter<"CarModel"> | string
    type?: StringFilter<"CarModel"> | string
    car?: CarListRelationFilter
  }

  export type CarModelOrderByWithRelationInput = {
    model?: SortOrder
    manufacturer?: SortOrder
    type?: SortOrder
    car?: CarOrderByRelationAggregateInput
  }

  export type CarModelWhereUniqueInput = Prisma.AtLeast<{
    model?: string
    AND?: CarModelWhereInput | CarModelWhereInput[]
    OR?: CarModelWhereInput[]
    NOT?: CarModelWhereInput | CarModelWhereInput[]
    manufacturer?: StringFilter<"CarModel"> | string
    type?: StringFilter<"CarModel"> | string
    car?: CarListRelationFilter
  }, "model">

  export type CarModelOrderByWithAggregationInput = {
    model?: SortOrder
    manufacturer?: SortOrder
    type?: SortOrder
    _count?: CarModelCountOrderByAggregateInput
    _max?: CarModelMaxOrderByAggregateInput
    _min?: CarModelMinOrderByAggregateInput
  }

  export type CarModelScalarWhereWithAggregatesInput = {
    AND?: CarModelScalarWhereWithAggregatesInput | CarModelScalarWhereWithAggregatesInput[]
    OR?: CarModelScalarWhereWithAggregatesInput[]
    NOT?: CarModelScalarWhereWithAggregatesInput | CarModelScalarWhereWithAggregatesInput[]
    model?: StringWithAggregatesFilter<"CarModel"> | string
    manufacturer?: StringWithAggregatesFilter<"CarModel"> | string
    type?: StringWithAggregatesFilter<"CarModel"> | string
  }

  export type ContractWhereInput = {
    AND?: ContractWhereInput | ContractWhereInput[]
    OR?: ContractWhereInput[]
    NOT?: ContractWhereInput | ContractWhereInput[]
    id?: IntFilter<"Contract"> | number
    status?: EnumContractStatusFilter<"Contract"> | $Enums.ContractStatus
    resolutionDate?: DateTimeNullableFilter<"Contract"> | Date | string | null
    contractPrice?: IntFilter<"Contract"> | number
    carId?: IntFilter<"Contract"> | number
    customerId?: IntFilter<"Contract"> | number
    userId?: IntFilter<"Contract"> | number
    companyId?: IntFilter<"Contract"> | number
    createdAt?: DateTimeFilter<"Contract"> | Date | string
    updatedAt?: DateTimeFilter<"Contract"> | Date | string
    car?: XOR<CarScalarRelationFilter, CarWhereInput>
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
    meetings?: MeetingsListRelationFilter
    contractDocumentRelation?: ContractDocumentRelationListRelationFilter
  }

  export type ContractOrderByWithRelationInput = {
    id?: SortOrder
    status?: SortOrder
    resolutionDate?: SortOrderInput | SortOrder
    contractPrice?: SortOrder
    carId?: SortOrder
    customerId?: SortOrder
    userId?: SortOrder
    companyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    car?: CarOrderByWithRelationInput
    customer?: CustomerOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    company?: CompanyOrderByWithRelationInput
    meetings?: MeetingsOrderByRelationAggregateInput
    contractDocumentRelation?: ContractDocumentRelationOrderByRelationAggregateInput
  }

  export type ContractWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ContractWhereInput | ContractWhereInput[]
    OR?: ContractWhereInput[]
    NOT?: ContractWhereInput | ContractWhereInput[]
    status?: EnumContractStatusFilter<"Contract"> | $Enums.ContractStatus
    resolutionDate?: DateTimeNullableFilter<"Contract"> | Date | string | null
    contractPrice?: IntFilter<"Contract"> | number
    carId?: IntFilter<"Contract"> | number
    customerId?: IntFilter<"Contract"> | number
    userId?: IntFilter<"Contract"> | number
    companyId?: IntFilter<"Contract"> | number
    createdAt?: DateTimeFilter<"Contract"> | Date | string
    updatedAt?: DateTimeFilter<"Contract"> | Date | string
    car?: XOR<CarScalarRelationFilter, CarWhereInput>
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
    meetings?: MeetingsListRelationFilter
    contractDocumentRelation?: ContractDocumentRelationListRelationFilter
  }, "id">

  export type ContractOrderByWithAggregationInput = {
    id?: SortOrder
    status?: SortOrder
    resolutionDate?: SortOrderInput | SortOrder
    contractPrice?: SortOrder
    carId?: SortOrder
    customerId?: SortOrder
    userId?: SortOrder
    companyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ContractCountOrderByAggregateInput
    _avg?: ContractAvgOrderByAggregateInput
    _max?: ContractMaxOrderByAggregateInput
    _min?: ContractMinOrderByAggregateInput
    _sum?: ContractSumOrderByAggregateInput
  }

  export type ContractScalarWhereWithAggregatesInput = {
    AND?: ContractScalarWhereWithAggregatesInput | ContractScalarWhereWithAggregatesInput[]
    OR?: ContractScalarWhereWithAggregatesInput[]
    NOT?: ContractScalarWhereWithAggregatesInput | ContractScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Contract"> | number
    status?: EnumContractStatusWithAggregatesFilter<"Contract"> | $Enums.ContractStatus
    resolutionDate?: DateTimeNullableWithAggregatesFilter<"Contract"> | Date | string | null
    contractPrice?: IntWithAggregatesFilter<"Contract"> | number
    carId?: IntWithAggregatesFilter<"Contract"> | number
    customerId?: IntWithAggregatesFilter<"Contract"> | number
    userId?: IntWithAggregatesFilter<"Contract"> | number
    companyId?: IntWithAggregatesFilter<"Contract"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Contract"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Contract"> | Date | string
  }

  export type MeetingsWhereInput = {
    AND?: MeetingsWhereInput | MeetingsWhereInput[]
    OR?: MeetingsWhereInput[]
    NOT?: MeetingsWhereInput | MeetingsWhereInput[]
    id?: IntFilter<"Meetings"> | number
    date?: DateTimeFilter<"Meetings"> | Date | string
    alarms?: StringNullableListFilter<"Meetings">
    contractId?: IntFilter<"Meetings"> | number
    createdAt?: DateTimeFilter<"Meetings"> | Date | string
    updatedAt?: DateTimeFilter<"Meetings"> | Date | string
    contract?: XOR<ContractScalarRelationFilter, ContractWhereInput>
  }

  export type MeetingsOrderByWithRelationInput = {
    id?: SortOrder
    date?: SortOrder
    alarms?: SortOrder
    contractId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    contract?: ContractOrderByWithRelationInput
  }

  export type MeetingsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MeetingsWhereInput | MeetingsWhereInput[]
    OR?: MeetingsWhereInput[]
    NOT?: MeetingsWhereInput | MeetingsWhereInput[]
    date?: DateTimeFilter<"Meetings"> | Date | string
    alarms?: StringNullableListFilter<"Meetings">
    contractId?: IntFilter<"Meetings"> | number
    createdAt?: DateTimeFilter<"Meetings"> | Date | string
    updatedAt?: DateTimeFilter<"Meetings"> | Date | string
    contract?: XOR<ContractScalarRelationFilter, ContractWhereInput>
  }, "id">

  export type MeetingsOrderByWithAggregationInput = {
    id?: SortOrder
    date?: SortOrder
    alarms?: SortOrder
    contractId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MeetingsCountOrderByAggregateInput
    _avg?: MeetingsAvgOrderByAggregateInput
    _max?: MeetingsMaxOrderByAggregateInput
    _min?: MeetingsMinOrderByAggregateInput
    _sum?: MeetingsSumOrderByAggregateInput
  }

  export type MeetingsScalarWhereWithAggregatesInput = {
    AND?: MeetingsScalarWhereWithAggregatesInput | MeetingsScalarWhereWithAggregatesInput[]
    OR?: MeetingsScalarWhereWithAggregatesInput[]
    NOT?: MeetingsScalarWhereWithAggregatesInput | MeetingsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Meetings"> | number
    date?: DateTimeWithAggregatesFilter<"Meetings"> | Date | string
    alarms?: StringNullableListFilter<"Meetings">
    contractId?: IntWithAggregatesFilter<"Meetings"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Meetings"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Meetings"> | Date | string
  }

  export type ContractDocumentWhereInput = {
    AND?: ContractDocumentWhereInput | ContractDocumentWhereInput[]
    OR?: ContractDocumentWhereInput[]
    NOT?: ContractDocumentWhereInput | ContractDocumentWhereInput[]
    id?: IntFilter<"ContractDocument"> | number
    fileName?: StringFilter<"ContractDocument"> | string
    createdAt?: DateTimeFilter<"ContractDocument"> | Date | string
    contractDocumentRelation?: XOR<ContractDocumentRelationNullableScalarRelationFilter, ContractDocumentRelationWhereInput> | null
  }

  export type ContractDocumentOrderByWithRelationInput = {
    id?: SortOrder
    fileName?: SortOrder
    createdAt?: SortOrder
    contractDocumentRelation?: ContractDocumentRelationOrderByWithRelationInput
  }

  export type ContractDocumentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ContractDocumentWhereInput | ContractDocumentWhereInput[]
    OR?: ContractDocumentWhereInput[]
    NOT?: ContractDocumentWhereInput | ContractDocumentWhereInput[]
    fileName?: StringFilter<"ContractDocument"> | string
    createdAt?: DateTimeFilter<"ContractDocument"> | Date | string
    contractDocumentRelation?: XOR<ContractDocumentRelationNullableScalarRelationFilter, ContractDocumentRelationWhereInput> | null
  }, "id">

  export type ContractDocumentOrderByWithAggregationInput = {
    id?: SortOrder
    fileName?: SortOrder
    createdAt?: SortOrder
    _count?: ContractDocumentCountOrderByAggregateInput
    _avg?: ContractDocumentAvgOrderByAggregateInput
    _max?: ContractDocumentMaxOrderByAggregateInput
    _min?: ContractDocumentMinOrderByAggregateInput
    _sum?: ContractDocumentSumOrderByAggregateInput
  }

  export type ContractDocumentScalarWhereWithAggregatesInput = {
    AND?: ContractDocumentScalarWhereWithAggregatesInput | ContractDocumentScalarWhereWithAggregatesInput[]
    OR?: ContractDocumentScalarWhereWithAggregatesInput[]
    NOT?: ContractDocumentScalarWhereWithAggregatesInput | ContractDocumentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ContractDocument"> | number
    fileName?: StringWithAggregatesFilter<"ContractDocument"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ContractDocument"> | Date | string
  }

  export type ContractDocumentRelationWhereInput = {
    AND?: ContractDocumentRelationWhereInput | ContractDocumentRelationWhereInput[]
    OR?: ContractDocumentRelationWhereInput[]
    NOT?: ContractDocumentRelationWhereInput | ContractDocumentRelationWhereInput[]
    contractId?: IntFilter<"ContractDocumentRelation"> | number
    contractDocumentId?: IntFilter<"ContractDocumentRelation"> | number
    createdAt?: DateTimeFilter<"ContractDocumentRelation"> | Date | string
    contract?: XOR<ContractScalarRelationFilter, ContractWhereInput>
    contractDocument?: XOR<ContractDocumentScalarRelationFilter, ContractDocumentWhereInput>
  }

  export type ContractDocumentRelationOrderByWithRelationInput = {
    contractId?: SortOrder
    contractDocumentId?: SortOrder
    createdAt?: SortOrder
    contract?: ContractOrderByWithRelationInput
    contractDocument?: ContractDocumentOrderByWithRelationInput
  }

  export type ContractDocumentRelationWhereUniqueInput = Prisma.AtLeast<{
    contractDocumentId?: number
    contractId_contractDocumentId?: ContractDocumentRelationContractIdContractDocumentIdCompoundUniqueInput
    AND?: ContractDocumentRelationWhereInput | ContractDocumentRelationWhereInput[]
    OR?: ContractDocumentRelationWhereInput[]
    NOT?: ContractDocumentRelationWhereInput | ContractDocumentRelationWhereInput[]
    contractId?: IntFilter<"ContractDocumentRelation"> | number
    createdAt?: DateTimeFilter<"ContractDocumentRelation"> | Date | string
    contract?: XOR<ContractScalarRelationFilter, ContractWhereInput>
    contractDocument?: XOR<ContractDocumentScalarRelationFilter, ContractDocumentWhereInput>
  }, "contractId_contractDocumentId" | "contractDocumentId">

  export type ContractDocumentRelationOrderByWithAggregationInput = {
    contractId?: SortOrder
    contractDocumentId?: SortOrder
    createdAt?: SortOrder
    _count?: ContractDocumentRelationCountOrderByAggregateInput
    _avg?: ContractDocumentRelationAvgOrderByAggregateInput
    _max?: ContractDocumentRelationMaxOrderByAggregateInput
    _min?: ContractDocumentRelationMinOrderByAggregateInput
    _sum?: ContractDocumentRelationSumOrderByAggregateInput
  }

  export type ContractDocumentRelationScalarWhereWithAggregatesInput = {
    AND?: ContractDocumentRelationScalarWhereWithAggregatesInput | ContractDocumentRelationScalarWhereWithAggregatesInput[]
    OR?: ContractDocumentRelationScalarWhereWithAggregatesInput[]
    NOT?: ContractDocumentRelationScalarWhereWithAggregatesInput | ContractDocumentRelationScalarWhereWithAggregatesInput[]
    contractId?: IntWithAggregatesFilter<"ContractDocumentRelation"> | number
    contractDocumentId?: IntWithAggregatesFilter<"ContractDocumentRelation"> | number
    createdAt?: DateTimeWithAggregatesFilter<"ContractDocumentRelation"> | Date | string
  }

  export type CompanyCreateInput = {
    companyName: string
    companyCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedManyWithoutCompanyInput
    customer?: CustomerCreateNestedManyWithoutCompanyInput
    car?: CarCreateNestedManyWithoutCompanyInput
    contract?: ContractCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateInput = {
    id?: number
    companyName: string
    companyCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserUncheckedCreateNestedManyWithoutCompanyInput
    customer?: CustomerUncheckedCreateNestedManyWithoutCompanyInput
    car?: CarUncheckedCreateNestedManyWithoutCompanyInput
    contract?: ContractUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUpdateInput = {
    companyName?: StringFieldUpdateOperationsInput | string
    companyCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateManyWithoutCompanyNestedInput
    customer?: CustomerUpdateManyWithoutCompanyNestedInput
    car?: CarUpdateManyWithoutCompanyNestedInput
    contract?: ContractUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    companyName?: StringFieldUpdateOperationsInput | string
    companyCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUncheckedUpdateManyWithoutCompanyNestedInput
    customer?: CustomerUncheckedUpdateManyWithoutCompanyNestedInput
    car?: CarUncheckedUpdateManyWithoutCompanyNestedInput
    contract?: ContractUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyCreateManyInput = {
    id?: number
    companyName: string
    companyCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CompanyUpdateManyMutationInput = {
    companyName?: StringFieldUpdateOperationsInput | string
    companyCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    companyName?: StringFieldUpdateOperationsInput | string
    companyCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    name: string
    email: string
    employeeNumber: string
    phoneNumber: string
    password: string
    imageUrl?: string | null
    refreshToken?: string | null
    isAdmin?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    company: CompanyCreateNestedOneWithoutUserInput
    contract?: ContractCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    employeeNumber: string
    phoneNumber: string
    password: string
    imageUrl?: string | null
    refreshToken?: string | null
    isAdmin?: boolean
    companyId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    contract?: ContractUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    employeeNumber?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneRequiredWithoutUserNestedInput
    contract?: ContractUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    employeeNumber?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    companyId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contract?: ContractUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    name: string
    email: string
    employeeNumber: string
    phoneNumber: string
    password: string
    imageUrl?: string | null
    refreshToken?: string | null
    isAdmin?: boolean
    companyId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    employeeNumber?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    employeeNumber?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    companyId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerCreateInput = {
    name: string
    gender: $Enums.Gender
    phoneNumber: string
    ageGroup?: $Enums.AgeGroup | null
    region?: $Enums.Region | null
    email: string
    memo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    company: CompanyCreateNestedOneWithoutCustomerInput
    contract?: ContractCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateInput = {
    id?: number
    name: string
    gender: $Enums.Gender
    phoneNumber: string
    ageGroup?: $Enums.AgeGroup | null
    region?: $Enums.Region | null
    email: string
    memo?: string | null
    companyId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    contract?: ContractUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    phoneNumber?: StringFieldUpdateOperationsInput | string
    ageGroup?: NullableEnumAgeGroupFieldUpdateOperationsInput | $Enums.AgeGroup | null
    region?: NullableEnumRegionFieldUpdateOperationsInput | $Enums.Region | null
    email?: StringFieldUpdateOperationsInput | string
    memo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneRequiredWithoutCustomerNestedInput
    contract?: ContractUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    phoneNumber?: StringFieldUpdateOperationsInput | string
    ageGroup?: NullableEnumAgeGroupFieldUpdateOperationsInput | $Enums.AgeGroup | null
    region?: NullableEnumRegionFieldUpdateOperationsInput | $Enums.Region | null
    email?: StringFieldUpdateOperationsInput | string
    memo?: NullableStringFieldUpdateOperationsInput | string | null
    companyId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contract?: ContractUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerCreateManyInput = {
    id?: number
    name: string
    gender: $Enums.Gender
    phoneNumber: string
    ageGroup?: $Enums.AgeGroup | null
    region?: $Enums.Region | null
    email: string
    memo?: string | null
    companyId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustomerUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    phoneNumber?: StringFieldUpdateOperationsInput | string
    ageGroup?: NullableEnumAgeGroupFieldUpdateOperationsInput | $Enums.AgeGroup | null
    region?: NullableEnumRegionFieldUpdateOperationsInput | $Enums.Region | null
    email?: StringFieldUpdateOperationsInput | string
    memo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    phoneNumber?: StringFieldUpdateOperationsInput | string
    ageGroup?: NullableEnumAgeGroupFieldUpdateOperationsInput | $Enums.AgeGroup | null
    region?: NullableEnumRegionFieldUpdateOperationsInput | $Enums.Region | null
    email?: StringFieldUpdateOperationsInput | string
    memo?: NullableStringFieldUpdateOperationsInput | string | null
    companyId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CarCreateInput = {
    carNumber: string
    manufacturingYear: number
    mileage: number
    price: number
    accidentCount: number
    explanation?: string | null
    accidentDetails?: string | null
    status: $Enums.CarStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    carModel: CarModelCreateNestedOneWithoutCarInput
    company: CompanyCreateNestedOneWithoutCarInput
    contract?: ContractCreateNestedManyWithoutCarInput
  }

  export type CarUncheckedCreateInput = {
    id?: number
    carNumber: string
    manufacturingYear: number
    mileage: number
    price: number
    accidentCount: number
    explanation?: string | null
    accidentDetails?: string | null
    status: $Enums.CarStatus
    model: string
    companyId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    contract?: ContractUncheckedCreateNestedManyWithoutCarInput
  }

  export type CarUpdateInput = {
    carNumber?: StringFieldUpdateOperationsInput | string
    manufacturingYear?: IntFieldUpdateOperationsInput | number
    mileage?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    accidentCount?: IntFieldUpdateOperationsInput | number
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    accidentDetails?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCarStatusFieldUpdateOperationsInput | $Enums.CarStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    carModel?: CarModelUpdateOneRequiredWithoutCarNestedInput
    company?: CompanyUpdateOneRequiredWithoutCarNestedInput
    contract?: ContractUpdateManyWithoutCarNestedInput
  }

  export type CarUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    carNumber?: StringFieldUpdateOperationsInput | string
    manufacturingYear?: IntFieldUpdateOperationsInput | number
    mileage?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    accidentCount?: IntFieldUpdateOperationsInput | number
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    accidentDetails?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCarStatusFieldUpdateOperationsInput | $Enums.CarStatus
    model?: StringFieldUpdateOperationsInput | string
    companyId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contract?: ContractUncheckedUpdateManyWithoutCarNestedInput
  }

  export type CarCreateManyInput = {
    id?: number
    carNumber: string
    manufacturingYear: number
    mileage: number
    price: number
    accidentCount: number
    explanation?: string | null
    accidentDetails?: string | null
    status: $Enums.CarStatus
    model: string
    companyId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CarUpdateManyMutationInput = {
    carNumber?: StringFieldUpdateOperationsInput | string
    manufacturingYear?: IntFieldUpdateOperationsInput | number
    mileage?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    accidentCount?: IntFieldUpdateOperationsInput | number
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    accidentDetails?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCarStatusFieldUpdateOperationsInput | $Enums.CarStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CarUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    carNumber?: StringFieldUpdateOperationsInput | string
    manufacturingYear?: IntFieldUpdateOperationsInput | number
    mileage?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    accidentCount?: IntFieldUpdateOperationsInput | number
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    accidentDetails?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCarStatusFieldUpdateOperationsInput | $Enums.CarStatus
    model?: StringFieldUpdateOperationsInput | string
    companyId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CarModelCreateInput = {
    model: string
    manufacturer: string
    type: string
    car?: CarCreateNestedManyWithoutCarModelInput
  }

  export type CarModelUncheckedCreateInput = {
    model: string
    manufacturer: string
    type: string
    car?: CarUncheckedCreateNestedManyWithoutCarModelInput
  }

  export type CarModelUpdateInput = {
    model?: StringFieldUpdateOperationsInput | string
    manufacturer?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    car?: CarUpdateManyWithoutCarModelNestedInput
  }

  export type CarModelUncheckedUpdateInput = {
    model?: StringFieldUpdateOperationsInput | string
    manufacturer?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    car?: CarUncheckedUpdateManyWithoutCarModelNestedInput
  }

  export type CarModelCreateManyInput = {
    model: string
    manufacturer: string
    type: string
  }

  export type CarModelUpdateManyMutationInput = {
    model?: StringFieldUpdateOperationsInput | string
    manufacturer?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type CarModelUncheckedUpdateManyInput = {
    model?: StringFieldUpdateOperationsInput | string
    manufacturer?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type ContractCreateInput = {
    status: $Enums.ContractStatus
    resolutionDate?: Date | string | null
    contractPrice: number
    createdAt?: Date | string
    updatedAt?: Date | string
    car: CarCreateNestedOneWithoutContractInput
    customer: CustomerCreateNestedOneWithoutContractInput
    user: UserCreateNestedOneWithoutContractInput
    company: CompanyCreateNestedOneWithoutContractInput
    meetings?: MeetingsCreateNestedManyWithoutContractInput
    contractDocumentRelation?: ContractDocumentRelationCreateNestedManyWithoutContractInput
  }

  export type ContractUncheckedCreateInput = {
    id?: number
    status: $Enums.ContractStatus
    resolutionDate?: Date | string | null
    contractPrice: number
    carId: number
    customerId: number
    userId: number
    companyId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    meetings?: MeetingsUncheckedCreateNestedManyWithoutContractInput
    contractDocumentRelation?: ContractDocumentRelationUncheckedCreateNestedManyWithoutContractInput
  }

  export type ContractUpdateInput = {
    status?: EnumContractStatusFieldUpdateOperationsInput | $Enums.ContractStatus
    resolutionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    contractPrice?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    car?: CarUpdateOneRequiredWithoutContractNestedInput
    customer?: CustomerUpdateOneRequiredWithoutContractNestedInput
    user?: UserUpdateOneRequiredWithoutContractNestedInput
    company?: CompanyUpdateOneRequiredWithoutContractNestedInput
    meetings?: MeetingsUpdateManyWithoutContractNestedInput
    contractDocumentRelation?: ContractDocumentRelationUpdateManyWithoutContractNestedInput
  }

  export type ContractUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: EnumContractStatusFieldUpdateOperationsInput | $Enums.ContractStatus
    resolutionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    contractPrice?: IntFieldUpdateOperationsInput | number
    carId?: IntFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    companyId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    meetings?: MeetingsUncheckedUpdateManyWithoutContractNestedInput
    contractDocumentRelation?: ContractDocumentRelationUncheckedUpdateManyWithoutContractNestedInput
  }

  export type ContractCreateManyInput = {
    id?: number
    status: $Enums.ContractStatus
    resolutionDate?: Date | string | null
    contractPrice: number
    carId: number
    customerId: number
    userId: number
    companyId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContractUpdateManyMutationInput = {
    status?: EnumContractStatusFieldUpdateOperationsInput | $Enums.ContractStatus
    resolutionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    contractPrice?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContractUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: EnumContractStatusFieldUpdateOperationsInput | $Enums.ContractStatus
    resolutionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    contractPrice?: IntFieldUpdateOperationsInput | number
    carId?: IntFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    companyId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MeetingsCreateInput = {
    date: Date | string
    alarms?: MeetingsCreatealarmsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    contract: ContractCreateNestedOneWithoutMeetingsInput
  }

  export type MeetingsUncheckedCreateInput = {
    id?: number
    date: Date | string
    alarms?: MeetingsCreatealarmsInput | string[]
    contractId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MeetingsUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    alarms?: MeetingsUpdatealarmsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contract?: ContractUpdateOneRequiredWithoutMeetingsNestedInput
  }

  export type MeetingsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    alarms?: MeetingsUpdatealarmsInput | string[]
    contractId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MeetingsCreateManyInput = {
    id?: number
    date: Date | string
    alarms?: MeetingsCreatealarmsInput | string[]
    contractId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MeetingsUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    alarms?: MeetingsUpdatealarmsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MeetingsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    alarms?: MeetingsUpdatealarmsInput | string[]
    contractId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContractDocumentCreateInput = {
    fileName: string
    createdAt?: Date | string
    contractDocumentRelation?: ContractDocumentRelationCreateNestedOneWithoutContractDocumentInput
  }

  export type ContractDocumentUncheckedCreateInput = {
    id?: number
    fileName: string
    createdAt?: Date | string
    contractDocumentRelation?: ContractDocumentRelationUncheckedCreateNestedOneWithoutContractDocumentInput
  }

  export type ContractDocumentUpdateInput = {
    fileName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contractDocumentRelation?: ContractDocumentRelationUpdateOneWithoutContractDocumentNestedInput
  }

  export type ContractDocumentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fileName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contractDocumentRelation?: ContractDocumentRelationUncheckedUpdateOneWithoutContractDocumentNestedInput
  }

  export type ContractDocumentCreateManyInput = {
    id?: number
    fileName: string
    createdAt?: Date | string
  }

  export type ContractDocumentUpdateManyMutationInput = {
    fileName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContractDocumentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fileName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContractDocumentRelationCreateInput = {
    createdAt?: Date | string
    contract: ContractCreateNestedOneWithoutContractDocumentRelationInput
    contractDocument: ContractDocumentCreateNestedOneWithoutContractDocumentRelationInput
  }

  export type ContractDocumentRelationUncheckedCreateInput = {
    contractId: number
    contractDocumentId: number
    createdAt?: Date | string
  }

  export type ContractDocumentRelationUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contract?: ContractUpdateOneRequiredWithoutContractDocumentRelationNestedInput
    contractDocument?: ContractDocumentUpdateOneRequiredWithoutContractDocumentRelationNestedInput
  }

  export type ContractDocumentRelationUncheckedUpdateInput = {
    contractId?: IntFieldUpdateOperationsInput | number
    contractDocumentId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContractDocumentRelationCreateManyInput = {
    contractId: number
    contractDocumentId: number
    createdAt?: Date | string
  }

  export type ContractDocumentRelationUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContractDocumentRelationUncheckedUpdateManyInput = {
    contractId?: IntFieldUpdateOperationsInput | number
    contractDocumentId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type CustomerListRelationFilter = {
    every?: CustomerWhereInput
    some?: CustomerWhereInput
    none?: CustomerWhereInput
  }

  export type CarListRelationFilter = {
    every?: CarWhereInput
    some?: CarWhereInput
    none?: CarWhereInput
  }

  export type ContractListRelationFilter = {
    every?: ContractWhereInput
    some?: ContractWhereInput
    none?: ContractWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CustomerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CarOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ContractOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CompanyCountOrderByAggregateInput = {
    id?: SortOrder
    companyName?: SortOrder
    companyCode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CompanyAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CompanyMaxOrderByAggregateInput = {
    id?: SortOrder
    companyName?: SortOrder
    companyCode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CompanyMinOrderByAggregateInput = {
    id?: SortOrder
    companyName?: SortOrder
    companyCode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CompanySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type CompanyScalarRelationFilter = {
    is?: CompanyWhereInput
    isNot?: CompanyWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    employeeNumber?: SortOrder
    phoneNumber?: SortOrder
    password?: SortOrder
    imageUrl?: SortOrder
    refreshToken?: SortOrder
    isAdmin?: SortOrder
    companyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    employeeNumber?: SortOrder
    phoneNumber?: SortOrder
    password?: SortOrder
    imageUrl?: SortOrder
    refreshToken?: SortOrder
    isAdmin?: SortOrder
    companyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    employeeNumber?: SortOrder
    phoneNumber?: SortOrder
    password?: SortOrder
    imageUrl?: SortOrder
    refreshToken?: SortOrder
    isAdmin?: SortOrder
    companyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender
  }

  export type EnumAgeGroupNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.AgeGroup | EnumAgeGroupFieldRefInput<$PrismaModel> | null
    in?: $Enums.AgeGroup[] | ListEnumAgeGroupFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.AgeGroup[] | ListEnumAgeGroupFieldRefInput<$PrismaModel> | null
    not?: NestedEnumAgeGroupNullableFilter<$PrismaModel> | $Enums.AgeGroup | null
  }

  export type EnumRegionNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Region | EnumRegionFieldRefInput<$PrismaModel> | null
    in?: $Enums.Region[] | ListEnumRegionFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Region[] | ListEnumRegionFieldRefInput<$PrismaModel> | null
    not?: NestedEnumRegionNullableFilter<$PrismaModel> | $Enums.Region | null
  }

  export type CustomerCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    gender?: SortOrder
    phoneNumber?: SortOrder
    ageGroup?: SortOrder
    region?: SortOrder
    email?: SortOrder
    memo?: SortOrder
    companyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomerAvgOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
  }

  export type CustomerMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    gender?: SortOrder
    phoneNumber?: SortOrder
    ageGroup?: SortOrder
    region?: SortOrder
    email?: SortOrder
    memo?: SortOrder
    companyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomerMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    gender?: SortOrder
    phoneNumber?: SortOrder
    ageGroup?: SortOrder
    region?: SortOrder
    email?: SortOrder
    memo?: SortOrder
    companyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomerSumOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
  }

  export type EnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderFilter<$PrismaModel>
    _max?: NestedEnumGenderFilter<$PrismaModel>
  }

  export type EnumAgeGroupNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AgeGroup | EnumAgeGroupFieldRefInput<$PrismaModel> | null
    in?: $Enums.AgeGroup[] | ListEnumAgeGroupFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.AgeGroup[] | ListEnumAgeGroupFieldRefInput<$PrismaModel> | null
    not?: NestedEnumAgeGroupNullableWithAggregatesFilter<$PrismaModel> | $Enums.AgeGroup | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumAgeGroupNullableFilter<$PrismaModel>
    _max?: NestedEnumAgeGroupNullableFilter<$PrismaModel>
  }

  export type EnumRegionNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Region | EnumRegionFieldRefInput<$PrismaModel> | null
    in?: $Enums.Region[] | ListEnumRegionFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Region[] | ListEnumRegionFieldRefInput<$PrismaModel> | null
    not?: NestedEnumRegionNullableWithAggregatesFilter<$PrismaModel> | $Enums.Region | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumRegionNullableFilter<$PrismaModel>
    _max?: NestedEnumRegionNullableFilter<$PrismaModel>
  }

  export type EnumCarStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CarStatus | EnumCarStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CarStatus[] | ListEnumCarStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CarStatus[] | ListEnumCarStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCarStatusFilter<$PrismaModel> | $Enums.CarStatus
  }

  export type CarModelScalarRelationFilter = {
    is?: CarModelWhereInput
    isNot?: CarModelWhereInput
  }

  export type CarCountOrderByAggregateInput = {
    id?: SortOrder
    carNumber?: SortOrder
    manufacturingYear?: SortOrder
    mileage?: SortOrder
    price?: SortOrder
    accidentCount?: SortOrder
    explanation?: SortOrder
    accidentDetails?: SortOrder
    status?: SortOrder
    model?: SortOrder
    companyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CarAvgOrderByAggregateInput = {
    id?: SortOrder
    manufacturingYear?: SortOrder
    mileage?: SortOrder
    price?: SortOrder
    accidentCount?: SortOrder
    companyId?: SortOrder
  }

  export type CarMaxOrderByAggregateInput = {
    id?: SortOrder
    carNumber?: SortOrder
    manufacturingYear?: SortOrder
    mileage?: SortOrder
    price?: SortOrder
    accidentCount?: SortOrder
    explanation?: SortOrder
    accidentDetails?: SortOrder
    status?: SortOrder
    model?: SortOrder
    companyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CarMinOrderByAggregateInput = {
    id?: SortOrder
    carNumber?: SortOrder
    manufacturingYear?: SortOrder
    mileage?: SortOrder
    price?: SortOrder
    accidentCount?: SortOrder
    explanation?: SortOrder
    accidentDetails?: SortOrder
    status?: SortOrder
    model?: SortOrder
    companyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CarSumOrderByAggregateInput = {
    id?: SortOrder
    manufacturingYear?: SortOrder
    mileage?: SortOrder
    price?: SortOrder
    accidentCount?: SortOrder
    companyId?: SortOrder
  }

  export type EnumCarStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CarStatus | EnumCarStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CarStatus[] | ListEnumCarStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CarStatus[] | ListEnumCarStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCarStatusWithAggregatesFilter<$PrismaModel> | $Enums.CarStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCarStatusFilter<$PrismaModel>
    _max?: NestedEnumCarStatusFilter<$PrismaModel>
  }

  export type CarModelCountOrderByAggregateInput = {
    model?: SortOrder
    manufacturer?: SortOrder
    type?: SortOrder
  }

  export type CarModelMaxOrderByAggregateInput = {
    model?: SortOrder
    manufacturer?: SortOrder
    type?: SortOrder
  }

  export type CarModelMinOrderByAggregateInput = {
    model?: SortOrder
    manufacturer?: SortOrder
    type?: SortOrder
  }

  export type EnumContractStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ContractStatus | EnumContractStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ContractStatus[] | ListEnumContractStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ContractStatus[] | ListEnumContractStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumContractStatusFilter<$PrismaModel> | $Enums.ContractStatus
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type CarScalarRelationFilter = {
    is?: CarWhereInput
    isNot?: CarWhereInput
  }

  export type CustomerScalarRelationFilter = {
    is?: CustomerWhereInput
    isNot?: CustomerWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type MeetingsListRelationFilter = {
    every?: MeetingsWhereInput
    some?: MeetingsWhereInput
    none?: MeetingsWhereInput
  }

  export type ContractDocumentRelationListRelationFilter = {
    every?: ContractDocumentRelationWhereInput
    some?: ContractDocumentRelationWhereInput
    none?: ContractDocumentRelationWhereInput
  }

  export type MeetingsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ContractDocumentRelationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ContractCountOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    resolutionDate?: SortOrder
    contractPrice?: SortOrder
    carId?: SortOrder
    customerId?: SortOrder
    userId?: SortOrder
    companyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContractAvgOrderByAggregateInput = {
    id?: SortOrder
    contractPrice?: SortOrder
    carId?: SortOrder
    customerId?: SortOrder
    userId?: SortOrder
    companyId?: SortOrder
  }

  export type ContractMaxOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    resolutionDate?: SortOrder
    contractPrice?: SortOrder
    carId?: SortOrder
    customerId?: SortOrder
    userId?: SortOrder
    companyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContractMinOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    resolutionDate?: SortOrder
    contractPrice?: SortOrder
    carId?: SortOrder
    customerId?: SortOrder
    userId?: SortOrder
    companyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContractSumOrderByAggregateInput = {
    id?: SortOrder
    contractPrice?: SortOrder
    carId?: SortOrder
    customerId?: SortOrder
    userId?: SortOrder
    companyId?: SortOrder
  }

  export type EnumContractStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ContractStatus | EnumContractStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ContractStatus[] | ListEnumContractStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ContractStatus[] | ListEnumContractStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumContractStatusWithAggregatesFilter<$PrismaModel> | $Enums.ContractStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumContractStatusFilter<$PrismaModel>
    _max?: NestedEnumContractStatusFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type ContractScalarRelationFilter = {
    is?: ContractWhereInput
    isNot?: ContractWhereInput
  }

  export type MeetingsCountOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    alarms?: SortOrder
    contractId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MeetingsAvgOrderByAggregateInput = {
    id?: SortOrder
    contractId?: SortOrder
  }

  export type MeetingsMaxOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    contractId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MeetingsMinOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    contractId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MeetingsSumOrderByAggregateInput = {
    id?: SortOrder
    contractId?: SortOrder
  }

  export type ContractDocumentRelationNullableScalarRelationFilter = {
    is?: ContractDocumentRelationWhereInput | null
    isNot?: ContractDocumentRelationWhereInput | null
  }

  export type ContractDocumentCountOrderByAggregateInput = {
    id?: SortOrder
    fileName?: SortOrder
    createdAt?: SortOrder
  }

  export type ContractDocumentAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ContractDocumentMaxOrderByAggregateInput = {
    id?: SortOrder
    fileName?: SortOrder
    createdAt?: SortOrder
  }

  export type ContractDocumentMinOrderByAggregateInput = {
    id?: SortOrder
    fileName?: SortOrder
    createdAt?: SortOrder
  }

  export type ContractDocumentSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ContractDocumentScalarRelationFilter = {
    is?: ContractDocumentWhereInput
    isNot?: ContractDocumentWhereInput
  }

  export type ContractDocumentRelationContractIdContractDocumentIdCompoundUniqueInput = {
    contractId: number
    contractDocumentId: number
  }

  export type ContractDocumentRelationCountOrderByAggregateInput = {
    contractId?: SortOrder
    contractDocumentId?: SortOrder
    createdAt?: SortOrder
  }

  export type ContractDocumentRelationAvgOrderByAggregateInput = {
    contractId?: SortOrder
    contractDocumentId?: SortOrder
  }

  export type ContractDocumentRelationMaxOrderByAggregateInput = {
    contractId?: SortOrder
    contractDocumentId?: SortOrder
    createdAt?: SortOrder
  }

  export type ContractDocumentRelationMinOrderByAggregateInput = {
    contractId?: SortOrder
    contractDocumentId?: SortOrder
    createdAt?: SortOrder
  }

  export type ContractDocumentRelationSumOrderByAggregateInput = {
    contractId?: SortOrder
    contractDocumentId?: SortOrder
  }

  export type UserCreateNestedManyWithoutCompanyInput = {
    create?: XOR<UserCreateWithoutCompanyInput, UserUncheckedCreateWithoutCompanyInput> | UserCreateWithoutCompanyInput[] | UserUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCompanyInput | UserCreateOrConnectWithoutCompanyInput[]
    createMany?: UserCreateManyCompanyInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type CustomerCreateNestedManyWithoutCompanyInput = {
    create?: XOR<CustomerCreateWithoutCompanyInput, CustomerUncheckedCreateWithoutCompanyInput> | CustomerCreateWithoutCompanyInput[] | CustomerUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: CustomerCreateOrConnectWithoutCompanyInput | CustomerCreateOrConnectWithoutCompanyInput[]
    createMany?: CustomerCreateManyCompanyInputEnvelope
    connect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
  }

  export type CarCreateNestedManyWithoutCompanyInput = {
    create?: XOR<CarCreateWithoutCompanyInput, CarUncheckedCreateWithoutCompanyInput> | CarCreateWithoutCompanyInput[] | CarUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: CarCreateOrConnectWithoutCompanyInput | CarCreateOrConnectWithoutCompanyInput[]
    createMany?: CarCreateManyCompanyInputEnvelope
    connect?: CarWhereUniqueInput | CarWhereUniqueInput[]
  }

  export type ContractCreateNestedManyWithoutCompanyInput = {
    create?: XOR<ContractCreateWithoutCompanyInput, ContractUncheckedCreateWithoutCompanyInput> | ContractCreateWithoutCompanyInput[] | ContractUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: ContractCreateOrConnectWithoutCompanyInput | ContractCreateOrConnectWithoutCompanyInput[]
    createMany?: ContractCreateManyCompanyInputEnvelope
    connect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<UserCreateWithoutCompanyInput, UserUncheckedCreateWithoutCompanyInput> | UserCreateWithoutCompanyInput[] | UserUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCompanyInput | UserCreateOrConnectWithoutCompanyInput[]
    createMany?: UserCreateManyCompanyInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type CustomerUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<CustomerCreateWithoutCompanyInput, CustomerUncheckedCreateWithoutCompanyInput> | CustomerCreateWithoutCompanyInput[] | CustomerUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: CustomerCreateOrConnectWithoutCompanyInput | CustomerCreateOrConnectWithoutCompanyInput[]
    createMany?: CustomerCreateManyCompanyInputEnvelope
    connect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
  }

  export type CarUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<CarCreateWithoutCompanyInput, CarUncheckedCreateWithoutCompanyInput> | CarCreateWithoutCompanyInput[] | CarUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: CarCreateOrConnectWithoutCompanyInput | CarCreateOrConnectWithoutCompanyInput[]
    createMany?: CarCreateManyCompanyInputEnvelope
    connect?: CarWhereUniqueInput | CarWhereUniqueInput[]
  }

  export type ContractUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<ContractCreateWithoutCompanyInput, ContractUncheckedCreateWithoutCompanyInput> | ContractCreateWithoutCompanyInput[] | ContractUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: ContractCreateOrConnectWithoutCompanyInput | ContractCreateOrConnectWithoutCompanyInput[]
    createMany?: ContractCreateManyCompanyInputEnvelope
    connect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<UserCreateWithoutCompanyInput, UserUncheckedCreateWithoutCompanyInput> | UserCreateWithoutCompanyInput[] | UserUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCompanyInput | UserCreateOrConnectWithoutCompanyInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutCompanyInput | UserUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: UserCreateManyCompanyInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutCompanyInput | UserUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: UserUpdateManyWithWhereWithoutCompanyInput | UserUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type CustomerUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<CustomerCreateWithoutCompanyInput, CustomerUncheckedCreateWithoutCompanyInput> | CustomerCreateWithoutCompanyInput[] | CustomerUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: CustomerCreateOrConnectWithoutCompanyInput | CustomerCreateOrConnectWithoutCompanyInput[]
    upsert?: CustomerUpsertWithWhereUniqueWithoutCompanyInput | CustomerUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: CustomerCreateManyCompanyInputEnvelope
    set?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    disconnect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    delete?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    connect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    update?: CustomerUpdateWithWhereUniqueWithoutCompanyInput | CustomerUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: CustomerUpdateManyWithWhereWithoutCompanyInput | CustomerUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: CustomerScalarWhereInput | CustomerScalarWhereInput[]
  }

  export type CarUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<CarCreateWithoutCompanyInput, CarUncheckedCreateWithoutCompanyInput> | CarCreateWithoutCompanyInput[] | CarUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: CarCreateOrConnectWithoutCompanyInput | CarCreateOrConnectWithoutCompanyInput[]
    upsert?: CarUpsertWithWhereUniqueWithoutCompanyInput | CarUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: CarCreateManyCompanyInputEnvelope
    set?: CarWhereUniqueInput | CarWhereUniqueInput[]
    disconnect?: CarWhereUniqueInput | CarWhereUniqueInput[]
    delete?: CarWhereUniqueInput | CarWhereUniqueInput[]
    connect?: CarWhereUniqueInput | CarWhereUniqueInput[]
    update?: CarUpdateWithWhereUniqueWithoutCompanyInput | CarUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: CarUpdateManyWithWhereWithoutCompanyInput | CarUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: CarScalarWhereInput | CarScalarWhereInput[]
  }

  export type ContractUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<ContractCreateWithoutCompanyInput, ContractUncheckedCreateWithoutCompanyInput> | ContractCreateWithoutCompanyInput[] | ContractUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: ContractCreateOrConnectWithoutCompanyInput | ContractCreateOrConnectWithoutCompanyInput[]
    upsert?: ContractUpsertWithWhereUniqueWithoutCompanyInput | ContractUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: ContractCreateManyCompanyInputEnvelope
    set?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    disconnect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    delete?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    connect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    update?: ContractUpdateWithWhereUniqueWithoutCompanyInput | ContractUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: ContractUpdateManyWithWhereWithoutCompanyInput | ContractUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: ContractScalarWhereInput | ContractScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<UserCreateWithoutCompanyInput, UserUncheckedCreateWithoutCompanyInput> | UserCreateWithoutCompanyInput[] | UserUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCompanyInput | UserCreateOrConnectWithoutCompanyInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutCompanyInput | UserUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: UserCreateManyCompanyInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutCompanyInput | UserUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: UserUpdateManyWithWhereWithoutCompanyInput | UserUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type CustomerUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<CustomerCreateWithoutCompanyInput, CustomerUncheckedCreateWithoutCompanyInput> | CustomerCreateWithoutCompanyInput[] | CustomerUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: CustomerCreateOrConnectWithoutCompanyInput | CustomerCreateOrConnectWithoutCompanyInput[]
    upsert?: CustomerUpsertWithWhereUniqueWithoutCompanyInput | CustomerUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: CustomerCreateManyCompanyInputEnvelope
    set?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    disconnect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    delete?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    connect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    update?: CustomerUpdateWithWhereUniqueWithoutCompanyInput | CustomerUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: CustomerUpdateManyWithWhereWithoutCompanyInput | CustomerUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: CustomerScalarWhereInput | CustomerScalarWhereInput[]
  }

  export type CarUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<CarCreateWithoutCompanyInput, CarUncheckedCreateWithoutCompanyInput> | CarCreateWithoutCompanyInput[] | CarUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: CarCreateOrConnectWithoutCompanyInput | CarCreateOrConnectWithoutCompanyInput[]
    upsert?: CarUpsertWithWhereUniqueWithoutCompanyInput | CarUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: CarCreateManyCompanyInputEnvelope
    set?: CarWhereUniqueInput | CarWhereUniqueInput[]
    disconnect?: CarWhereUniqueInput | CarWhereUniqueInput[]
    delete?: CarWhereUniqueInput | CarWhereUniqueInput[]
    connect?: CarWhereUniqueInput | CarWhereUniqueInput[]
    update?: CarUpdateWithWhereUniqueWithoutCompanyInput | CarUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: CarUpdateManyWithWhereWithoutCompanyInput | CarUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: CarScalarWhereInput | CarScalarWhereInput[]
  }

  export type ContractUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<ContractCreateWithoutCompanyInput, ContractUncheckedCreateWithoutCompanyInput> | ContractCreateWithoutCompanyInput[] | ContractUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: ContractCreateOrConnectWithoutCompanyInput | ContractCreateOrConnectWithoutCompanyInput[]
    upsert?: ContractUpsertWithWhereUniqueWithoutCompanyInput | ContractUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: ContractCreateManyCompanyInputEnvelope
    set?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    disconnect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    delete?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    connect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    update?: ContractUpdateWithWhereUniqueWithoutCompanyInput | ContractUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: ContractUpdateManyWithWhereWithoutCompanyInput | ContractUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: ContractScalarWhereInput | ContractScalarWhereInput[]
  }

  export type CompanyCreateNestedOneWithoutUserInput = {
    create?: XOR<CompanyCreateWithoutUserInput, CompanyUncheckedCreateWithoutUserInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutUserInput
    connect?: CompanyWhereUniqueInput
  }

  export type ContractCreateNestedManyWithoutUserInput = {
    create?: XOR<ContractCreateWithoutUserInput, ContractUncheckedCreateWithoutUserInput> | ContractCreateWithoutUserInput[] | ContractUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ContractCreateOrConnectWithoutUserInput | ContractCreateOrConnectWithoutUserInput[]
    createMany?: ContractCreateManyUserInputEnvelope
    connect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
  }

  export type ContractUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ContractCreateWithoutUserInput, ContractUncheckedCreateWithoutUserInput> | ContractCreateWithoutUserInput[] | ContractUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ContractCreateOrConnectWithoutUserInput | ContractCreateOrConnectWithoutUserInput[]
    createMany?: ContractCreateManyUserInputEnvelope
    connect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type CompanyUpdateOneRequiredWithoutUserNestedInput = {
    create?: XOR<CompanyCreateWithoutUserInput, CompanyUncheckedCreateWithoutUserInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutUserInput
    upsert?: CompanyUpsertWithoutUserInput
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutUserInput, CompanyUpdateWithoutUserInput>, CompanyUncheckedUpdateWithoutUserInput>
  }

  export type ContractUpdateManyWithoutUserNestedInput = {
    create?: XOR<ContractCreateWithoutUserInput, ContractUncheckedCreateWithoutUserInput> | ContractCreateWithoutUserInput[] | ContractUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ContractCreateOrConnectWithoutUserInput | ContractCreateOrConnectWithoutUserInput[]
    upsert?: ContractUpsertWithWhereUniqueWithoutUserInput | ContractUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ContractCreateManyUserInputEnvelope
    set?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    disconnect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    delete?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    connect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    update?: ContractUpdateWithWhereUniqueWithoutUserInput | ContractUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ContractUpdateManyWithWhereWithoutUserInput | ContractUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ContractScalarWhereInput | ContractScalarWhereInput[]
  }

  export type ContractUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ContractCreateWithoutUserInput, ContractUncheckedCreateWithoutUserInput> | ContractCreateWithoutUserInput[] | ContractUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ContractCreateOrConnectWithoutUserInput | ContractCreateOrConnectWithoutUserInput[]
    upsert?: ContractUpsertWithWhereUniqueWithoutUserInput | ContractUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ContractCreateManyUserInputEnvelope
    set?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    disconnect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    delete?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    connect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    update?: ContractUpdateWithWhereUniqueWithoutUserInput | ContractUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ContractUpdateManyWithWhereWithoutUserInput | ContractUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ContractScalarWhereInput | ContractScalarWhereInput[]
  }

  export type CompanyCreateNestedOneWithoutCustomerInput = {
    create?: XOR<CompanyCreateWithoutCustomerInput, CompanyUncheckedCreateWithoutCustomerInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutCustomerInput
    connect?: CompanyWhereUniqueInput
  }

  export type ContractCreateNestedManyWithoutCustomerInput = {
    create?: XOR<ContractCreateWithoutCustomerInput, ContractUncheckedCreateWithoutCustomerInput> | ContractCreateWithoutCustomerInput[] | ContractUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: ContractCreateOrConnectWithoutCustomerInput | ContractCreateOrConnectWithoutCustomerInput[]
    createMany?: ContractCreateManyCustomerInputEnvelope
    connect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
  }

  export type ContractUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<ContractCreateWithoutCustomerInput, ContractUncheckedCreateWithoutCustomerInput> | ContractCreateWithoutCustomerInput[] | ContractUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: ContractCreateOrConnectWithoutCustomerInput | ContractCreateOrConnectWithoutCustomerInput[]
    createMany?: ContractCreateManyCustomerInputEnvelope
    connect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
  }

  export type EnumGenderFieldUpdateOperationsInput = {
    set?: $Enums.Gender
  }

  export type NullableEnumAgeGroupFieldUpdateOperationsInput = {
    set?: $Enums.AgeGroup | null
  }

  export type NullableEnumRegionFieldUpdateOperationsInput = {
    set?: $Enums.Region | null
  }

  export type CompanyUpdateOneRequiredWithoutCustomerNestedInput = {
    create?: XOR<CompanyCreateWithoutCustomerInput, CompanyUncheckedCreateWithoutCustomerInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutCustomerInput
    upsert?: CompanyUpsertWithoutCustomerInput
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutCustomerInput, CompanyUpdateWithoutCustomerInput>, CompanyUncheckedUpdateWithoutCustomerInput>
  }

  export type ContractUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<ContractCreateWithoutCustomerInput, ContractUncheckedCreateWithoutCustomerInput> | ContractCreateWithoutCustomerInput[] | ContractUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: ContractCreateOrConnectWithoutCustomerInput | ContractCreateOrConnectWithoutCustomerInput[]
    upsert?: ContractUpsertWithWhereUniqueWithoutCustomerInput | ContractUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: ContractCreateManyCustomerInputEnvelope
    set?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    disconnect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    delete?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    connect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    update?: ContractUpdateWithWhereUniqueWithoutCustomerInput | ContractUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: ContractUpdateManyWithWhereWithoutCustomerInput | ContractUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: ContractScalarWhereInput | ContractScalarWhereInput[]
  }

  export type ContractUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<ContractCreateWithoutCustomerInput, ContractUncheckedCreateWithoutCustomerInput> | ContractCreateWithoutCustomerInput[] | ContractUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: ContractCreateOrConnectWithoutCustomerInput | ContractCreateOrConnectWithoutCustomerInput[]
    upsert?: ContractUpsertWithWhereUniqueWithoutCustomerInput | ContractUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: ContractCreateManyCustomerInputEnvelope
    set?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    disconnect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    delete?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    connect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    update?: ContractUpdateWithWhereUniqueWithoutCustomerInput | ContractUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: ContractUpdateManyWithWhereWithoutCustomerInput | ContractUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: ContractScalarWhereInput | ContractScalarWhereInput[]
  }

  export type CarModelCreateNestedOneWithoutCarInput = {
    create?: XOR<CarModelCreateWithoutCarInput, CarModelUncheckedCreateWithoutCarInput>
    connectOrCreate?: CarModelCreateOrConnectWithoutCarInput
    connect?: CarModelWhereUniqueInput
  }

  export type CompanyCreateNestedOneWithoutCarInput = {
    create?: XOR<CompanyCreateWithoutCarInput, CompanyUncheckedCreateWithoutCarInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutCarInput
    connect?: CompanyWhereUniqueInput
  }

  export type ContractCreateNestedManyWithoutCarInput = {
    create?: XOR<ContractCreateWithoutCarInput, ContractUncheckedCreateWithoutCarInput> | ContractCreateWithoutCarInput[] | ContractUncheckedCreateWithoutCarInput[]
    connectOrCreate?: ContractCreateOrConnectWithoutCarInput | ContractCreateOrConnectWithoutCarInput[]
    createMany?: ContractCreateManyCarInputEnvelope
    connect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
  }

  export type ContractUncheckedCreateNestedManyWithoutCarInput = {
    create?: XOR<ContractCreateWithoutCarInput, ContractUncheckedCreateWithoutCarInput> | ContractCreateWithoutCarInput[] | ContractUncheckedCreateWithoutCarInput[]
    connectOrCreate?: ContractCreateOrConnectWithoutCarInput | ContractCreateOrConnectWithoutCarInput[]
    createMany?: ContractCreateManyCarInputEnvelope
    connect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
  }

  export type EnumCarStatusFieldUpdateOperationsInput = {
    set?: $Enums.CarStatus
  }

  export type CarModelUpdateOneRequiredWithoutCarNestedInput = {
    create?: XOR<CarModelCreateWithoutCarInput, CarModelUncheckedCreateWithoutCarInput>
    connectOrCreate?: CarModelCreateOrConnectWithoutCarInput
    upsert?: CarModelUpsertWithoutCarInput
    connect?: CarModelWhereUniqueInput
    update?: XOR<XOR<CarModelUpdateToOneWithWhereWithoutCarInput, CarModelUpdateWithoutCarInput>, CarModelUncheckedUpdateWithoutCarInput>
  }

  export type CompanyUpdateOneRequiredWithoutCarNestedInput = {
    create?: XOR<CompanyCreateWithoutCarInput, CompanyUncheckedCreateWithoutCarInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutCarInput
    upsert?: CompanyUpsertWithoutCarInput
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutCarInput, CompanyUpdateWithoutCarInput>, CompanyUncheckedUpdateWithoutCarInput>
  }

  export type ContractUpdateManyWithoutCarNestedInput = {
    create?: XOR<ContractCreateWithoutCarInput, ContractUncheckedCreateWithoutCarInput> | ContractCreateWithoutCarInput[] | ContractUncheckedCreateWithoutCarInput[]
    connectOrCreate?: ContractCreateOrConnectWithoutCarInput | ContractCreateOrConnectWithoutCarInput[]
    upsert?: ContractUpsertWithWhereUniqueWithoutCarInput | ContractUpsertWithWhereUniqueWithoutCarInput[]
    createMany?: ContractCreateManyCarInputEnvelope
    set?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    disconnect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    delete?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    connect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    update?: ContractUpdateWithWhereUniqueWithoutCarInput | ContractUpdateWithWhereUniqueWithoutCarInput[]
    updateMany?: ContractUpdateManyWithWhereWithoutCarInput | ContractUpdateManyWithWhereWithoutCarInput[]
    deleteMany?: ContractScalarWhereInput | ContractScalarWhereInput[]
  }

  export type ContractUncheckedUpdateManyWithoutCarNestedInput = {
    create?: XOR<ContractCreateWithoutCarInput, ContractUncheckedCreateWithoutCarInput> | ContractCreateWithoutCarInput[] | ContractUncheckedCreateWithoutCarInput[]
    connectOrCreate?: ContractCreateOrConnectWithoutCarInput | ContractCreateOrConnectWithoutCarInput[]
    upsert?: ContractUpsertWithWhereUniqueWithoutCarInput | ContractUpsertWithWhereUniqueWithoutCarInput[]
    createMany?: ContractCreateManyCarInputEnvelope
    set?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    disconnect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    delete?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    connect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    update?: ContractUpdateWithWhereUniqueWithoutCarInput | ContractUpdateWithWhereUniqueWithoutCarInput[]
    updateMany?: ContractUpdateManyWithWhereWithoutCarInput | ContractUpdateManyWithWhereWithoutCarInput[]
    deleteMany?: ContractScalarWhereInput | ContractScalarWhereInput[]
  }

  export type CarCreateNestedManyWithoutCarModelInput = {
    create?: XOR<CarCreateWithoutCarModelInput, CarUncheckedCreateWithoutCarModelInput> | CarCreateWithoutCarModelInput[] | CarUncheckedCreateWithoutCarModelInput[]
    connectOrCreate?: CarCreateOrConnectWithoutCarModelInput | CarCreateOrConnectWithoutCarModelInput[]
    createMany?: CarCreateManyCarModelInputEnvelope
    connect?: CarWhereUniqueInput | CarWhereUniqueInput[]
  }

  export type CarUncheckedCreateNestedManyWithoutCarModelInput = {
    create?: XOR<CarCreateWithoutCarModelInput, CarUncheckedCreateWithoutCarModelInput> | CarCreateWithoutCarModelInput[] | CarUncheckedCreateWithoutCarModelInput[]
    connectOrCreate?: CarCreateOrConnectWithoutCarModelInput | CarCreateOrConnectWithoutCarModelInput[]
    createMany?: CarCreateManyCarModelInputEnvelope
    connect?: CarWhereUniqueInput | CarWhereUniqueInput[]
  }

  export type CarUpdateManyWithoutCarModelNestedInput = {
    create?: XOR<CarCreateWithoutCarModelInput, CarUncheckedCreateWithoutCarModelInput> | CarCreateWithoutCarModelInput[] | CarUncheckedCreateWithoutCarModelInput[]
    connectOrCreate?: CarCreateOrConnectWithoutCarModelInput | CarCreateOrConnectWithoutCarModelInput[]
    upsert?: CarUpsertWithWhereUniqueWithoutCarModelInput | CarUpsertWithWhereUniqueWithoutCarModelInput[]
    createMany?: CarCreateManyCarModelInputEnvelope
    set?: CarWhereUniqueInput | CarWhereUniqueInput[]
    disconnect?: CarWhereUniqueInput | CarWhereUniqueInput[]
    delete?: CarWhereUniqueInput | CarWhereUniqueInput[]
    connect?: CarWhereUniqueInput | CarWhereUniqueInput[]
    update?: CarUpdateWithWhereUniqueWithoutCarModelInput | CarUpdateWithWhereUniqueWithoutCarModelInput[]
    updateMany?: CarUpdateManyWithWhereWithoutCarModelInput | CarUpdateManyWithWhereWithoutCarModelInput[]
    deleteMany?: CarScalarWhereInput | CarScalarWhereInput[]
  }

  export type CarUncheckedUpdateManyWithoutCarModelNestedInput = {
    create?: XOR<CarCreateWithoutCarModelInput, CarUncheckedCreateWithoutCarModelInput> | CarCreateWithoutCarModelInput[] | CarUncheckedCreateWithoutCarModelInput[]
    connectOrCreate?: CarCreateOrConnectWithoutCarModelInput | CarCreateOrConnectWithoutCarModelInput[]
    upsert?: CarUpsertWithWhereUniqueWithoutCarModelInput | CarUpsertWithWhereUniqueWithoutCarModelInput[]
    createMany?: CarCreateManyCarModelInputEnvelope
    set?: CarWhereUniqueInput | CarWhereUniqueInput[]
    disconnect?: CarWhereUniqueInput | CarWhereUniqueInput[]
    delete?: CarWhereUniqueInput | CarWhereUniqueInput[]
    connect?: CarWhereUniqueInput | CarWhereUniqueInput[]
    update?: CarUpdateWithWhereUniqueWithoutCarModelInput | CarUpdateWithWhereUniqueWithoutCarModelInput[]
    updateMany?: CarUpdateManyWithWhereWithoutCarModelInput | CarUpdateManyWithWhereWithoutCarModelInput[]
    deleteMany?: CarScalarWhereInput | CarScalarWhereInput[]
  }

  export type CarCreateNestedOneWithoutContractInput = {
    create?: XOR<CarCreateWithoutContractInput, CarUncheckedCreateWithoutContractInput>
    connectOrCreate?: CarCreateOrConnectWithoutContractInput
    connect?: CarWhereUniqueInput
  }

  export type CustomerCreateNestedOneWithoutContractInput = {
    create?: XOR<CustomerCreateWithoutContractInput, CustomerUncheckedCreateWithoutContractInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutContractInput
    connect?: CustomerWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutContractInput = {
    create?: XOR<UserCreateWithoutContractInput, UserUncheckedCreateWithoutContractInput>
    connectOrCreate?: UserCreateOrConnectWithoutContractInput
    connect?: UserWhereUniqueInput
  }

  export type CompanyCreateNestedOneWithoutContractInput = {
    create?: XOR<CompanyCreateWithoutContractInput, CompanyUncheckedCreateWithoutContractInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutContractInput
    connect?: CompanyWhereUniqueInput
  }

  export type MeetingsCreateNestedManyWithoutContractInput = {
    create?: XOR<MeetingsCreateWithoutContractInput, MeetingsUncheckedCreateWithoutContractInput> | MeetingsCreateWithoutContractInput[] | MeetingsUncheckedCreateWithoutContractInput[]
    connectOrCreate?: MeetingsCreateOrConnectWithoutContractInput | MeetingsCreateOrConnectWithoutContractInput[]
    createMany?: MeetingsCreateManyContractInputEnvelope
    connect?: MeetingsWhereUniqueInput | MeetingsWhereUniqueInput[]
  }

  export type ContractDocumentRelationCreateNestedManyWithoutContractInput = {
    create?: XOR<ContractDocumentRelationCreateWithoutContractInput, ContractDocumentRelationUncheckedCreateWithoutContractInput> | ContractDocumentRelationCreateWithoutContractInput[] | ContractDocumentRelationUncheckedCreateWithoutContractInput[]
    connectOrCreate?: ContractDocumentRelationCreateOrConnectWithoutContractInput | ContractDocumentRelationCreateOrConnectWithoutContractInput[]
    createMany?: ContractDocumentRelationCreateManyContractInputEnvelope
    connect?: ContractDocumentRelationWhereUniqueInput | ContractDocumentRelationWhereUniqueInput[]
  }

  export type MeetingsUncheckedCreateNestedManyWithoutContractInput = {
    create?: XOR<MeetingsCreateWithoutContractInput, MeetingsUncheckedCreateWithoutContractInput> | MeetingsCreateWithoutContractInput[] | MeetingsUncheckedCreateWithoutContractInput[]
    connectOrCreate?: MeetingsCreateOrConnectWithoutContractInput | MeetingsCreateOrConnectWithoutContractInput[]
    createMany?: MeetingsCreateManyContractInputEnvelope
    connect?: MeetingsWhereUniqueInput | MeetingsWhereUniqueInput[]
  }

  export type ContractDocumentRelationUncheckedCreateNestedManyWithoutContractInput = {
    create?: XOR<ContractDocumentRelationCreateWithoutContractInput, ContractDocumentRelationUncheckedCreateWithoutContractInput> | ContractDocumentRelationCreateWithoutContractInput[] | ContractDocumentRelationUncheckedCreateWithoutContractInput[]
    connectOrCreate?: ContractDocumentRelationCreateOrConnectWithoutContractInput | ContractDocumentRelationCreateOrConnectWithoutContractInput[]
    createMany?: ContractDocumentRelationCreateManyContractInputEnvelope
    connect?: ContractDocumentRelationWhereUniqueInput | ContractDocumentRelationWhereUniqueInput[]
  }

  export type EnumContractStatusFieldUpdateOperationsInput = {
    set?: $Enums.ContractStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type CarUpdateOneRequiredWithoutContractNestedInput = {
    create?: XOR<CarCreateWithoutContractInput, CarUncheckedCreateWithoutContractInput>
    connectOrCreate?: CarCreateOrConnectWithoutContractInput
    upsert?: CarUpsertWithoutContractInput
    connect?: CarWhereUniqueInput
    update?: XOR<XOR<CarUpdateToOneWithWhereWithoutContractInput, CarUpdateWithoutContractInput>, CarUncheckedUpdateWithoutContractInput>
  }

  export type CustomerUpdateOneRequiredWithoutContractNestedInput = {
    create?: XOR<CustomerCreateWithoutContractInput, CustomerUncheckedCreateWithoutContractInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutContractInput
    upsert?: CustomerUpsertWithoutContractInput
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutContractInput, CustomerUpdateWithoutContractInput>, CustomerUncheckedUpdateWithoutContractInput>
  }

  export type UserUpdateOneRequiredWithoutContractNestedInput = {
    create?: XOR<UserCreateWithoutContractInput, UserUncheckedCreateWithoutContractInput>
    connectOrCreate?: UserCreateOrConnectWithoutContractInput
    upsert?: UserUpsertWithoutContractInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutContractInput, UserUpdateWithoutContractInput>, UserUncheckedUpdateWithoutContractInput>
  }

  export type CompanyUpdateOneRequiredWithoutContractNestedInput = {
    create?: XOR<CompanyCreateWithoutContractInput, CompanyUncheckedCreateWithoutContractInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutContractInput
    upsert?: CompanyUpsertWithoutContractInput
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutContractInput, CompanyUpdateWithoutContractInput>, CompanyUncheckedUpdateWithoutContractInput>
  }

  export type MeetingsUpdateManyWithoutContractNestedInput = {
    create?: XOR<MeetingsCreateWithoutContractInput, MeetingsUncheckedCreateWithoutContractInput> | MeetingsCreateWithoutContractInput[] | MeetingsUncheckedCreateWithoutContractInput[]
    connectOrCreate?: MeetingsCreateOrConnectWithoutContractInput | MeetingsCreateOrConnectWithoutContractInput[]
    upsert?: MeetingsUpsertWithWhereUniqueWithoutContractInput | MeetingsUpsertWithWhereUniqueWithoutContractInput[]
    createMany?: MeetingsCreateManyContractInputEnvelope
    set?: MeetingsWhereUniqueInput | MeetingsWhereUniqueInput[]
    disconnect?: MeetingsWhereUniqueInput | MeetingsWhereUniqueInput[]
    delete?: MeetingsWhereUniqueInput | MeetingsWhereUniqueInput[]
    connect?: MeetingsWhereUniqueInput | MeetingsWhereUniqueInput[]
    update?: MeetingsUpdateWithWhereUniqueWithoutContractInput | MeetingsUpdateWithWhereUniqueWithoutContractInput[]
    updateMany?: MeetingsUpdateManyWithWhereWithoutContractInput | MeetingsUpdateManyWithWhereWithoutContractInput[]
    deleteMany?: MeetingsScalarWhereInput | MeetingsScalarWhereInput[]
  }

  export type ContractDocumentRelationUpdateManyWithoutContractNestedInput = {
    create?: XOR<ContractDocumentRelationCreateWithoutContractInput, ContractDocumentRelationUncheckedCreateWithoutContractInput> | ContractDocumentRelationCreateWithoutContractInput[] | ContractDocumentRelationUncheckedCreateWithoutContractInput[]
    connectOrCreate?: ContractDocumentRelationCreateOrConnectWithoutContractInput | ContractDocumentRelationCreateOrConnectWithoutContractInput[]
    upsert?: ContractDocumentRelationUpsertWithWhereUniqueWithoutContractInput | ContractDocumentRelationUpsertWithWhereUniqueWithoutContractInput[]
    createMany?: ContractDocumentRelationCreateManyContractInputEnvelope
    set?: ContractDocumentRelationWhereUniqueInput | ContractDocumentRelationWhereUniqueInput[]
    disconnect?: ContractDocumentRelationWhereUniqueInput | ContractDocumentRelationWhereUniqueInput[]
    delete?: ContractDocumentRelationWhereUniqueInput | ContractDocumentRelationWhereUniqueInput[]
    connect?: ContractDocumentRelationWhereUniqueInput | ContractDocumentRelationWhereUniqueInput[]
    update?: ContractDocumentRelationUpdateWithWhereUniqueWithoutContractInput | ContractDocumentRelationUpdateWithWhereUniqueWithoutContractInput[]
    updateMany?: ContractDocumentRelationUpdateManyWithWhereWithoutContractInput | ContractDocumentRelationUpdateManyWithWhereWithoutContractInput[]
    deleteMany?: ContractDocumentRelationScalarWhereInput | ContractDocumentRelationScalarWhereInput[]
  }

  export type MeetingsUncheckedUpdateManyWithoutContractNestedInput = {
    create?: XOR<MeetingsCreateWithoutContractInput, MeetingsUncheckedCreateWithoutContractInput> | MeetingsCreateWithoutContractInput[] | MeetingsUncheckedCreateWithoutContractInput[]
    connectOrCreate?: MeetingsCreateOrConnectWithoutContractInput | MeetingsCreateOrConnectWithoutContractInput[]
    upsert?: MeetingsUpsertWithWhereUniqueWithoutContractInput | MeetingsUpsertWithWhereUniqueWithoutContractInput[]
    createMany?: MeetingsCreateManyContractInputEnvelope
    set?: MeetingsWhereUniqueInput | MeetingsWhereUniqueInput[]
    disconnect?: MeetingsWhereUniqueInput | MeetingsWhereUniqueInput[]
    delete?: MeetingsWhereUniqueInput | MeetingsWhereUniqueInput[]
    connect?: MeetingsWhereUniqueInput | MeetingsWhereUniqueInput[]
    update?: MeetingsUpdateWithWhereUniqueWithoutContractInput | MeetingsUpdateWithWhereUniqueWithoutContractInput[]
    updateMany?: MeetingsUpdateManyWithWhereWithoutContractInput | MeetingsUpdateManyWithWhereWithoutContractInput[]
    deleteMany?: MeetingsScalarWhereInput | MeetingsScalarWhereInput[]
  }

  export type ContractDocumentRelationUncheckedUpdateManyWithoutContractNestedInput = {
    create?: XOR<ContractDocumentRelationCreateWithoutContractInput, ContractDocumentRelationUncheckedCreateWithoutContractInput> | ContractDocumentRelationCreateWithoutContractInput[] | ContractDocumentRelationUncheckedCreateWithoutContractInput[]
    connectOrCreate?: ContractDocumentRelationCreateOrConnectWithoutContractInput | ContractDocumentRelationCreateOrConnectWithoutContractInput[]
    upsert?: ContractDocumentRelationUpsertWithWhereUniqueWithoutContractInput | ContractDocumentRelationUpsertWithWhereUniqueWithoutContractInput[]
    createMany?: ContractDocumentRelationCreateManyContractInputEnvelope
    set?: ContractDocumentRelationWhereUniqueInput | ContractDocumentRelationWhereUniqueInput[]
    disconnect?: ContractDocumentRelationWhereUniqueInput | ContractDocumentRelationWhereUniqueInput[]
    delete?: ContractDocumentRelationWhereUniqueInput | ContractDocumentRelationWhereUniqueInput[]
    connect?: ContractDocumentRelationWhereUniqueInput | ContractDocumentRelationWhereUniqueInput[]
    update?: ContractDocumentRelationUpdateWithWhereUniqueWithoutContractInput | ContractDocumentRelationUpdateWithWhereUniqueWithoutContractInput[]
    updateMany?: ContractDocumentRelationUpdateManyWithWhereWithoutContractInput | ContractDocumentRelationUpdateManyWithWhereWithoutContractInput[]
    deleteMany?: ContractDocumentRelationScalarWhereInput | ContractDocumentRelationScalarWhereInput[]
  }

  export type MeetingsCreatealarmsInput = {
    set: string[]
  }

  export type ContractCreateNestedOneWithoutMeetingsInput = {
    create?: XOR<ContractCreateWithoutMeetingsInput, ContractUncheckedCreateWithoutMeetingsInput>
    connectOrCreate?: ContractCreateOrConnectWithoutMeetingsInput
    connect?: ContractWhereUniqueInput
  }

  export type MeetingsUpdatealarmsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ContractUpdateOneRequiredWithoutMeetingsNestedInput = {
    create?: XOR<ContractCreateWithoutMeetingsInput, ContractUncheckedCreateWithoutMeetingsInput>
    connectOrCreate?: ContractCreateOrConnectWithoutMeetingsInput
    upsert?: ContractUpsertWithoutMeetingsInput
    connect?: ContractWhereUniqueInput
    update?: XOR<XOR<ContractUpdateToOneWithWhereWithoutMeetingsInput, ContractUpdateWithoutMeetingsInput>, ContractUncheckedUpdateWithoutMeetingsInput>
  }

  export type ContractDocumentRelationCreateNestedOneWithoutContractDocumentInput = {
    create?: XOR<ContractDocumentRelationCreateWithoutContractDocumentInput, ContractDocumentRelationUncheckedCreateWithoutContractDocumentInput>
    connectOrCreate?: ContractDocumentRelationCreateOrConnectWithoutContractDocumentInput
    connect?: ContractDocumentRelationWhereUniqueInput
  }

  export type ContractDocumentRelationUncheckedCreateNestedOneWithoutContractDocumentInput = {
    create?: XOR<ContractDocumentRelationCreateWithoutContractDocumentInput, ContractDocumentRelationUncheckedCreateWithoutContractDocumentInput>
    connectOrCreate?: ContractDocumentRelationCreateOrConnectWithoutContractDocumentInput
    connect?: ContractDocumentRelationWhereUniqueInput
  }

  export type ContractDocumentRelationUpdateOneWithoutContractDocumentNestedInput = {
    create?: XOR<ContractDocumentRelationCreateWithoutContractDocumentInput, ContractDocumentRelationUncheckedCreateWithoutContractDocumentInput>
    connectOrCreate?: ContractDocumentRelationCreateOrConnectWithoutContractDocumentInput
    upsert?: ContractDocumentRelationUpsertWithoutContractDocumentInput
    disconnect?: ContractDocumentRelationWhereInput | boolean
    delete?: ContractDocumentRelationWhereInput | boolean
    connect?: ContractDocumentRelationWhereUniqueInput
    update?: XOR<XOR<ContractDocumentRelationUpdateToOneWithWhereWithoutContractDocumentInput, ContractDocumentRelationUpdateWithoutContractDocumentInput>, ContractDocumentRelationUncheckedUpdateWithoutContractDocumentInput>
  }

  export type ContractDocumentRelationUncheckedUpdateOneWithoutContractDocumentNestedInput = {
    create?: XOR<ContractDocumentRelationCreateWithoutContractDocumentInput, ContractDocumentRelationUncheckedCreateWithoutContractDocumentInput>
    connectOrCreate?: ContractDocumentRelationCreateOrConnectWithoutContractDocumentInput
    upsert?: ContractDocumentRelationUpsertWithoutContractDocumentInput
    disconnect?: ContractDocumentRelationWhereInput | boolean
    delete?: ContractDocumentRelationWhereInput | boolean
    connect?: ContractDocumentRelationWhereUniqueInput
    update?: XOR<XOR<ContractDocumentRelationUpdateToOneWithWhereWithoutContractDocumentInput, ContractDocumentRelationUpdateWithoutContractDocumentInput>, ContractDocumentRelationUncheckedUpdateWithoutContractDocumentInput>
  }

  export type ContractCreateNestedOneWithoutContractDocumentRelationInput = {
    create?: XOR<ContractCreateWithoutContractDocumentRelationInput, ContractUncheckedCreateWithoutContractDocumentRelationInput>
    connectOrCreate?: ContractCreateOrConnectWithoutContractDocumentRelationInput
    connect?: ContractWhereUniqueInput
  }

  export type ContractDocumentCreateNestedOneWithoutContractDocumentRelationInput = {
    create?: XOR<ContractDocumentCreateWithoutContractDocumentRelationInput, ContractDocumentUncheckedCreateWithoutContractDocumentRelationInput>
    connectOrCreate?: ContractDocumentCreateOrConnectWithoutContractDocumentRelationInput
    connect?: ContractDocumentWhereUniqueInput
  }

  export type ContractUpdateOneRequiredWithoutContractDocumentRelationNestedInput = {
    create?: XOR<ContractCreateWithoutContractDocumentRelationInput, ContractUncheckedCreateWithoutContractDocumentRelationInput>
    connectOrCreate?: ContractCreateOrConnectWithoutContractDocumentRelationInput
    upsert?: ContractUpsertWithoutContractDocumentRelationInput
    connect?: ContractWhereUniqueInput
    update?: XOR<XOR<ContractUpdateToOneWithWhereWithoutContractDocumentRelationInput, ContractUpdateWithoutContractDocumentRelationInput>, ContractUncheckedUpdateWithoutContractDocumentRelationInput>
  }

  export type ContractDocumentUpdateOneRequiredWithoutContractDocumentRelationNestedInput = {
    create?: XOR<ContractDocumentCreateWithoutContractDocumentRelationInput, ContractDocumentUncheckedCreateWithoutContractDocumentRelationInput>
    connectOrCreate?: ContractDocumentCreateOrConnectWithoutContractDocumentRelationInput
    upsert?: ContractDocumentUpsertWithoutContractDocumentRelationInput
    connect?: ContractDocumentWhereUniqueInput
    update?: XOR<XOR<ContractDocumentUpdateToOneWithWhereWithoutContractDocumentRelationInput, ContractDocumentUpdateWithoutContractDocumentRelationInput>, ContractDocumentUncheckedUpdateWithoutContractDocumentRelationInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender
  }

  export type NestedEnumAgeGroupNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.AgeGroup | EnumAgeGroupFieldRefInput<$PrismaModel> | null
    in?: $Enums.AgeGroup[] | ListEnumAgeGroupFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.AgeGroup[] | ListEnumAgeGroupFieldRefInput<$PrismaModel> | null
    not?: NestedEnumAgeGroupNullableFilter<$PrismaModel> | $Enums.AgeGroup | null
  }

  export type NestedEnumRegionNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Region | EnumRegionFieldRefInput<$PrismaModel> | null
    in?: $Enums.Region[] | ListEnumRegionFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Region[] | ListEnumRegionFieldRefInput<$PrismaModel> | null
    not?: NestedEnumRegionNullableFilter<$PrismaModel> | $Enums.Region | null
  }

  export type NestedEnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderFilter<$PrismaModel>
    _max?: NestedEnumGenderFilter<$PrismaModel>
  }

  export type NestedEnumAgeGroupNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AgeGroup | EnumAgeGroupFieldRefInput<$PrismaModel> | null
    in?: $Enums.AgeGroup[] | ListEnumAgeGroupFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.AgeGroup[] | ListEnumAgeGroupFieldRefInput<$PrismaModel> | null
    not?: NestedEnumAgeGroupNullableWithAggregatesFilter<$PrismaModel> | $Enums.AgeGroup | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumAgeGroupNullableFilter<$PrismaModel>
    _max?: NestedEnumAgeGroupNullableFilter<$PrismaModel>
  }

  export type NestedEnumRegionNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Region | EnumRegionFieldRefInput<$PrismaModel> | null
    in?: $Enums.Region[] | ListEnumRegionFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Region[] | ListEnumRegionFieldRefInput<$PrismaModel> | null
    not?: NestedEnumRegionNullableWithAggregatesFilter<$PrismaModel> | $Enums.Region | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumRegionNullableFilter<$PrismaModel>
    _max?: NestedEnumRegionNullableFilter<$PrismaModel>
  }

  export type NestedEnumCarStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CarStatus | EnumCarStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CarStatus[] | ListEnumCarStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CarStatus[] | ListEnumCarStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCarStatusFilter<$PrismaModel> | $Enums.CarStatus
  }

  export type NestedEnumCarStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CarStatus | EnumCarStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CarStatus[] | ListEnumCarStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CarStatus[] | ListEnumCarStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCarStatusWithAggregatesFilter<$PrismaModel> | $Enums.CarStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCarStatusFilter<$PrismaModel>
    _max?: NestedEnumCarStatusFilter<$PrismaModel>
  }

  export type NestedEnumContractStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ContractStatus | EnumContractStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ContractStatus[] | ListEnumContractStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ContractStatus[] | ListEnumContractStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumContractStatusFilter<$PrismaModel> | $Enums.ContractStatus
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumContractStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ContractStatus | EnumContractStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ContractStatus[] | ListEnumContractStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ContractStatus[] | ListEnumContractStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumContractStatusWithAggregatesFilter<$PrismaModel> | $Enums.ContractStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumContractStatusFilter<$PrismaModel>
    _max?: NestedEnumContractStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type UserCreateWithoutCompanyInput = {
    name: string
    email: string
    employeeNumber: string
    phoneNumber: string
    password: string
    imageUrl?: string | null
    refreshToken?: string | null
    isAdmin?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    contract?: ContractCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCompanyInput = {
    id?: number
    name: string
    email: string
    employeeNumber: string
    phoneNumber: string
    password: string
    imageUrl?: string | null
    refreshToken?: string | null
    isAdmin?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    contract?: ContractUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCompanyInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCompanyInput, UserUncheckedCreateWithoutCompanyInput>
  }

  export type UserCreateManyCompanyInputEnvelope = {
    data: UserCreateManyCompanyInput | UserCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type CustomerCreateWithoutCompanyInput = {
    name: string
    gender: $Enums.Gender
    phoneNumber: string
    ageGroup?: $Enums.AgeGroup | null
    region?: $Enums.Region | null
    email: string
    memo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    contract?: ContractCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutCompanyInput = {
    id?: number
    name: string
    gender: $Enums.Gender
    phoneNumber: string
    ageGroup?: $Enums.AgeGroup | null
    region?: $Enums.Region | null
    email: string
    memo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    contract?: ContractUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerCreateOrConnectWithoutCompanyInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutCompanyInput, CustomerUncheckedCreateWithoutCompanyInput>
  }

  export type CustomerCreateManyCompanyInputEnvelope = {
    data: CustomerCreateManyCompanyInput | CustomerCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type CarCreateWithoutCompanyInput = {
    carNumber: string
    manufacturingYear: number
    mileage: number
    price: number
    accidentCount: number
    explanation?: string | null
    accidentDetails?: string | null
    status: $Enums.CarStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    carModel: CarModelCreateNestedOneWithoutCarInput
    contract?: ContractCreateNestedManyWithoutCarInput
  }

  export type CarUncheckedCreateWithoutCompanyInput = {
    id?: number
    carNumber: string
    manufacturingYear: number
    mileage: number
    price: number
    accidentCount: number
    explanation?: string | null
    accidentDetails?: string | null
    status: $Enums.CarStatus
    model: string
    createdAt?: Date | string
    updatedAt?: Date | string
    contract?: ContractUncheckedCreateNestedManyWithoutCarInput
  }

  export type CarCreateOrConnectWithoutCompanyInput = {
    where: CarWhereUniqueInput
    create: XOR<CarCreateWithoutCompanyInput, CarUncheckedCreateWithoutCompanyInput>
  }

  export type CarCreateManyCompanyInputEnvelope = {
    data: CarCreateManyCompanyInput | CarCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type ContractCreateWithoutCompanyInput = {
    status: $Enums.ContractStatus
    resolutionDate?: Date | string | null
    contractPrice: number
    createdAt?: Date | string
    updatedAt?: Date | string
    car: CarCreateNestedOneWithoutContractInput
    customer: CustomerCreateNestedOneWithoutContractInput
    user: UserCreateNestedOneWithoutContractInput
    meetings?: MeetingsCreateNestedManyWithoutContractInput
    contractDocumentRelation?: ContractDocumentRelationCreateNestedManyWithoutContractInput
  }

  export type ContractUncheckedCreateWithoutCompanyInput = {
    id?: number
    status: $Enums.ContractStatus
    resolutionDate?: Date | string | null
    contractPrice: number
    carId: number
    customerId: number
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    meetings?: MeetingsUncheckedCreateNestedManyWithoutContractInput
    contractDocumentRelation?: ContractDocumentRelationUncheckedCreateNestedManyWithoutContractInput
  }

  export type ContractCreateOrConnectWithoutCompanyInput = {
    where: ContractWhereUniqueInput
    create: XOR<ContractCreateWithoutCompanyInput, ContractUncheckedCreateWithoutCompanyInput>
  }

  export type ContractCreateManyCompanyInputEnvelope = {
    data: ContractCreateManyCompanyInput | ContractCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutCompanyInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutCompanyInput, UserUncheckedUpdateWithoutCompanyInput>
    create: XOR<UserCreateWithoutCompanyInput, UserUncheckedCreateWithoutCompanyInput>
  }

  export type UserUpdateWithWhereUniqueWithoutCompanyInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutCompanyInput, UserUncheckedUpdateWithoutCompanyInput>
  }

  export type UserUpdateManyWithWhereWithoutCompanyInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutCompanyInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    employeeNumber?: StringFilter<"User"> | string
    phoneNumber?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    imageUrl?: StringNullableFilter<"User"> | string | null
    refreshToken?: StringNullableFilter<"User"> | string | null
    isAdmin?: BoolFilter<"User"> | boolean
    companyId?: IntFilter<"User"> | number
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type CustomerUpsertWithWhereUniqueWithoutCompanyInput = {
    where: CustomerWhereUniqueInput
    update: XOR<CustomerUpdateWithoutCompanyInput, CustomerUncheckedUpdateWithoutCompanyInput>
    create: XOR<CustomerCreateWithoutCompanyInput, CustomerUncheckedCreateWithoutCompanyInput>
  }

  export type CustomerUpdateWithWhereUniqueWithoutCompanyInput = {
    where: CustomerWhereUniqueInput
    data: XOR<CustomerUpdateWithoutCompanyInput, CustomerUncheckedUpdateWithoutCompanyInput>
  }

  export type CustomerUpdateManyWithWhereWithoutCompanyInput = {
    where: CustomerScalarWhereInput
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyWithoutCompanyInput>
  }

  export type CustomerScalarWhereInput = {
    AND?: CustomerScalarWhereInput | CustomerScalarWhereInput[]
    OR?: CustomerScalarWhereInput[]
    NOT?: CustomerScalarWhereInput | CustomerScalarWhereInput[]
    id?: IntFilter<"Customer"> | number
    name?: StringFilter<"Customer"> | string
    gender?: EnumGenderFilter<"Customer"> | $Enums.Gender
    phoneNumber?: StringFilter<"Customer"> | string
    ageGroup?: EnumAgeGroupNullableFilter<"Customer"> | $Enums.AgeGroup | null
    region?: EnumRegionNullableFilter<"Customer"> | $Enums.Region | null
    email?: StringFilter<"Customer"> | string
    memo?: StringNullableFilter<"Customer"> | string | null
    companyId?: IntFilter<"Customer"> | number
    createdAt?: DateTimeFilter<"Customer"> | Date | string
    updatedAt?: DateTimeFilter<"Customer"> | Date | string
  }

  export type CarUpsertWithWhereUniqueWithoutCompanyInput = {
    where: CarWhereUniqueInput
    update: XOR<CarUpdateWithoutCompanyInput, CarUncheckedUpdateWithoutCompanyInput>
    create: XOR<CarCreateWithoutCompanyInput, CarUncheckedCreateWithoutCompanyInput>
  }

  export type CarUpdateWithWhereUniqueWithoutCompanyInput = {
    where: CarWhereUniqueInput
    data: XOR<CarUpdateWithoutCompanyInput, CarUncheckedUpdateWithoutCompanyInput>
  }

  export type CarUpdateManyWithWhereWithoutCompanyInput = {
    where: CarScalarWhereInput
    data: XOR<CarUpdateManyMutationInput, CarUncheckedUpdateManyWithoutCompanyInput>
  }

  export type CarScalarWhereInput = {
    AND?: CarScalarWhereInput | CarScalarWhereInput[]
    OR?: CarScalarWhereInput[]
    NOT?: CarScalarWhereInput | CarScalarWhereInput[]
    id?: IntFilter<"Car"> | number
    carNumber?: StringFilter<"Car"> | string
    manufacturingYear?: IntFilter<"Car"> | number
    mileage?: IntFilter<"Car"> | number
    price?: IntFilter<"Car"> | number
    accidentCount?: IntFilter<"Car"> | number
    explanation?: StringNullableFilter<"Car"> | string | null
    accidentDetails?: StringNullableFilter<"Car"> | string | null
    status?: EnumCarStatusFilter<"Car"> | $Enums.CarStatus
    model?: StringFilter<"Car"> | string
    companyId?: IntFilter<"Car"> | number
    createdAt?: DateTimeFilter<"Car"> | Date | string
    updatedAt?: DateTimeFilter<"Car"> | Date | string
  }

  export type ContractUpsertWithWhereUniqueWithoutCompanyInput = {
    where: ContractWhereUniqueInput
    update: XOR<ContractUpdateWithoutCompanyInput, ContractUncheckedUpdateWithoutCompanyInput>
    create: XOR<ContractCreateWithoutCompanyInput, ContractUncheckedCreateWithoutCompanyInput>
  }

  export type ContractUpdateWithWhereUniqueWithoutCompanyInput = {
    where: ContractWhereUniqueInput
    data: XOR<ContractUpdateWithoutCompanyInput, ContractUncheckedUpdateWithoutCompanyInput>
  }

  export type ContractUpdateManyWithWhereWithoutCompanyInput = {
    where: ContractScalarWhereInput
    data: XOR<ContractUpdateManyMutationInput, ContractUncheckedUpdateManyWithoutCompanyInput>
  }

  export type ContractScalarWhereInput = {
    AND?: ContractScalarWhereInput | ContractScalarWhereInput[]
    OR?: ContractScalarWhereInput[]
    NOT?: ContractScalarWhereInput | ContractScalarWhereInput[]
    id?: IntFilter<"Contract"> | number
    status?: EnumContractStatusFilter<"Contract"> | $Enums.ContractStatus
    resolutionDate?: DateTimeNullableFilter<"Contract"> | Date | string | null
    contractPrice?: IntFilter<"Contract"> | number
    carId?: IntFilter<"Contract"> | number
    customerId?: IntFilter<"Contract"> | number
    userId?: IntFilter<"Contract"> | number
    companyId?: IntFilter<"Contract"> | number
    createdAt?: DateTimeFilter<"Contract"> | Date | string
    updatedAt?: DateTimeFilter<"Contract"> | Date | string
  }

  export type CompanyCreateWithoutUserInput = {
    companyName: string
    companyCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
    customer?: CustomerCreateNestedManyWithoutCompanyInput
    car?: CarCreateNestedManyWithoutCompanyInput
    contract?: ContractCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateWithoutUserInput = {
    id?: number
    companyName: string
    companyCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
    customer?: CustomerUncheckedCreateNestedManyWithoutCompanyInput
    car?: CarUncheckedCreateNestedManyWithoutCompanyInput
    contract?: ContractUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyCreateOrConnectWithoutUserInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutUserInput, CompanyUncheckedCreateWithoutUserInput>
  }

  export type ContractCreateWithoutUserInput = {
    status: $Enums.ContractStatus
    resolutionDate?: Date | string | null
    contractPrice: number
    createdAt?: Date | string
    updatedAt?: Date | string
    car: CarCreateNestedOneWithoutContractInput
    customer: CustomerCreateNestedOneWithoutContractInput
    company: CompanyCreateNestedOneWithoutContractInput
    meetings?: MeetingsCreateNestedManyWithoutContractInput
    contractDocumentRelation?: ContractDocumentRelationCreateNestedManyWithoutContractInput
  }

  export type ContractUncheckedCreateWithoutUserInput = {
    id?: number
    status: $Enums.ContractStatus
    resolutionDate?: Date | string | null
    contractPrice: number
    carId: number
    customerId: number
    companyId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    meetings?: MeetingsUncheckedCreateNestedManyWithoutContractInput
    contractDocumentRelation?: ContractDocumentRelationUncheckedCreateNestedManyWithoutContractInput
  }

  export type ContractCreateOrConnectWithoutUserInput = {
    where: ContractWhereUniqueInput
    create: XOR<ContractCreateWithoutUserInput, ContractUncheckedCreateWithoutUserInput>
  }

  export type ContractCreateManyUserInputEnvelope = {
    data: ContractCreateManyUserInput | ContractCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CompanyUpsertWithoutUserInput = {
    update: XOR<CompanyUpdateWithoutUserInput, CompanyUncheckedUpdateWithoutUserInput>
    create: XOR<CompanyCreateWithoutUserInput, CompanyUncheckedCreateWithoutUserInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutUserInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutUserInput, CompanyUncheckedUpdateWithoutUserInput>
  }

  export type CompanyUpdateWithoutUserInput = {
    companyName?: StringFieldUpdateOperationsInput | string
    companyCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateManyWithoutCompanyNestedInput
    car?: CarUpdateManyWithoutCompanyNestedInput
    contract?: ContractUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    companyName?: StringFieldUpdateOperationsInput | string
    companyCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUncheckedUpdateManyWithoutCompanyNestedInput
    car?: CarUncheckedUpdateManyWithoutCompanyNestedInput
    contract?: ContractUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type ContractUpsertWithWhereUniqueWithoutUserInput = {
    where: ContractWhereUniqueInput
    update: XOR<ContractUpdateWithoutUserInput, ContractUncheckedUpdateWithoutUserInput>
    create: XOR<ContractCreateWithoutUserInput, ContractUncheckedCreateWithoutUserInput>
  }

  export type ContractUpdateWithWhereUniqueWithoutUserInput = {
    where: ContractWhereUniqueInput
    data: XOR<ContractUpdateWithoutUserInput, ContractUncheckedUpdateWithoutUserInput>
  }

  export type ContractUpdateManyWithWhereWithoutUserInput = {
    where: ContractScalarWhereInput
    data: XOR<ContractUpdateManyMutationInput, ContractUncheckedUpdateManyWithoutUserInput>
  }

  export type CompanyCreateWithoutCustomerInput = {
    companyName: string
    companyCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedManyWithoutCompanyInput
    car?: CarCreateNestedManyWithoutCompanyInput
    contract?: ContractCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateWithoutCustomerInput = {
    id?: number
    companyName: string
    companyCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserUncheckedCreateNestedManyWithoutCompanyInput
    car?: CarUncheckedCreateNestedManyWithoutCompanyInput
    contract?: ContractUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyCreateOrConnectWithoutCustomerInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutCustomerInput, CompanyUncheckedCreateWithoutCustomerInput>
  }

  export type ContractCreateWithoutCustomerInput = {
    status: $Enums.ContractStatus
    resolutionDate?: Date | string | null
    contractPrice: number
    createdAt?: Date | string
    updatedAt?: Date | string
    car: CarCreateNestedOneWithoutContractInput
    user: UserCreateNestedOneWithoutContractInput
    company: CompanyCreateNestedOneWithoutContractInput
    meetings?: MeetingsCreateNestedManyWithoutContractInput
    contractDocumentRelation?: ContractDocumentRelationCreateNestedManyWithoutContractInput
  }

  export type ContractUncheckedCreateWithoutCustomerInput = {
    id?: number
    status: $Enums.ContractStatus
    resolutionDate?: Date | string | null
    contractPrice: number
    carId: number
    userId: number
    companyId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    meetings?: MeetingsUncheckedCreateNestedManyWithoutContractInput
    contractDocumentRelation?: ContractDocumentRelationUncheckedCreateNestedManyWithoutContractInput
  }

  export type ContractCreateOrConnectWithoutCustomerInput = {
    where: ContractWhereUniqueInput
    create: XOR<ContractCreateWithoutCustomerInput, ContractUncheckedCreateWithoutCustomerInput>
  }

  export type ContractCreateManyCustomerInputEnvelope = {
    data: ContractCreateManyCustomerInput | ContractCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type CompanyUpsertWithoutCustomerInput = {
    update: XOR<CompanyUpdateWithoutCustomerInput, CompanyUncheckedUpdateWithoutCustomerInput>
    create: XOR<CompanyCreateWithoutCustomerInput, CompanyUncheckedCreateWithoutCustomerInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutCustomerInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutCustomerInput, CompanyUncheckedUpdateWithoutCustomerInput>
  }

  export type CompanyUpdateWithoutCustomerInput = {
    companyName?: StringFieldUpdateOperationsInput | string
    companyCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateManyWithoutCompanyNestedInput
    car?: CarUpdateManyWithoutCompanyNestedInput
    contract?: ContractUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateWithoutCustomerInput = {
    id?: IntFieldUpdateOperationsInput | number
    companyName?: StringFieldUpdateOperationsInput | string
    companyCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUncheckedUpdateManyWithoutCompanyNestedInput
    car?: CarUncheckedUpdateManyWithoutCompanyNestedInput
    contract?: ContractUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type ContractUpsertWithWhereUniqueWithoutCustomerInput = {
    where: ContractWhereUniqueInput
    update: XOR<ContractUpdateWithoutCustomerInput, ContractUncheckedUpdateWithoutCustomerInput>
    create: XOR<ContractCreateWithoutCustomerInput, ContractUncheckedCreateWithoutCustomerInput>
  }

  export type ContractUpdateWithWhereUniqueWithoutCustomerInput = {
    where: ContractWhereUniqueInput
    data: XOR<ContractUpdateWithoutCustomerInput, ContractUncheckedUpdateWithoutCustomerInput>
  }

  export type ContractUpdateManyWithWhereWithoutCustomerInput = {
    where: ContractScalarWhereInput
    data: XOR<ContractUpdateManyMutationInput, ContractUncheckedUpdateManyWithoutCustomerInput>
  }

  export type CarModelCreateWithoutCarInput = {
    model: string
    manufacturer: string
    type: string
  }

  export type CarModelUncheckedCreateWithoutCarInput = {
    model: string
    manufacturer: string
    type: string
  }

  export type CarModelCreateOrConnectWithoutCarInput = {
    where: CarModelWhereUniqueInput
    create: XOR<CarModelCreateWithoutCarInput, CarModelUncheckedCreateWithoutCarInput>
  }

  export type CompanyCreateWithoutCarInput = {
    companyName: string
    companyCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedManyWithoutCompanyInput
    customer?: CustomerCreateNestedManyWithoutCompanyInput
    contract?: ContractCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateWithoutCarInput = {
    id?: number
    companyName: string
    companyCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserUncheckedCreateNestedManyWithoutCompanyInput
    customer?: CustomerUncheckedCreateNestedManyWithoutCompanyInput
    contract?: ContractUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyCreateOrConnectWithoutCarInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutCarInput, CompanyUncheckedCreateWithoutCarInput>
  }

  export type ContractCreateWithoutCarInput = {
    status: $Enums.ContractStatus
    resolutionDate?: Date | string | null
    contractPrice: number
    createdAt?: Date | string
    updatedAt?: Date | string
    customer: CustomerCreateNestedOneWithoutContractInput
    user: UserCreateNestedOneWithoutContractInput
    company: CompanyCreateNestedOneWithoutContractInput
    meetings?: MeetingsCreateNestedManyWithoutContractInput
    contractDocumentRelation?: ContractDocumentRelationCreateNestedManyWithoutContractInput
  }

  export type ContractUncheckedCreateWithoutCarInput = {
    id?: number
    status: $Enums.ContractStatus
    resolutionDate?: Date | string | null
    contractPrice: number
    customerId: number
    userId: number
    companyId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    meetings?: MeetingsUncheckedCreateNestedManyWithoutContractInput
    contractDocumentRelation?: ContractDocumentRelationUncheckedCreateNestedManyWithoutContractInput
  }

  export type ContractCreateOrConnectWithoutCarInput = {
    where: ContractWhereUniqueInput
    create: XOR<ContractCreateWithoutCarInput, ContractUncheckedCreateWithoutCarInput>
  }

  export type ContractCreateManyCarInputEnvelope = {
    data: ContractCreateManyCarInput | ContractCreateManyCarInput[]
    skipDuplicates?: boolean
  }

  export type CarModelUpsertWithoutCarInput = {
    update: XOR<CarModelUpdateWithoutCarInput, CarModelUncheckedUpdateWithoutCarInput>
    create: XOR<CarModelCreateWithoutCarInput, CarModelUncheckedCreateWithoutCarInput>
    where?: CarModelWhereInput
  }

  export type CarModelUpdateToOneWithWhereWithoutCarInput = {
    where?: CarModelWhereInput
    data: XOR<CarModelUpdateWithoutCarInput, CarModelUncheckedUpdateWithoutCarInput>
  }

  export type CarModelUpdateWithoutCarInput = {
    model?: StringFieldUpdateOperationsInput | string
    manufacturer?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type CarModelUncheckedUpdateWithoutCarInput = {
    model?: StringFieldUpdateOperationsInput | string
    manufacturer?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type CompanyUpsertWithoutCarInput = {
    update: XOR<CompanyUpdateWithoutCarInput, CompanyUncheckedUpdateWithoutCarInput>
    create: XOR<CompanyCreateWithoutCarInput, CompanyUncheckedCreateWithoutCarInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutCarInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutCarInput, CompanyUncheckedUpdateWithoutCarInput>
  }

  export type CompanyUpdateWithoutCarInput = {
    companyName?: StringFieldUpdateOperationsInput | string
    companyCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateManyWithoutCompanyNestedInput
    customer?: CustomerUpdateManyWithoutCompanyNestedInput
    contract?: ContractUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateWithoutCarInput = {
    id?: IntFieldUpdateOperationsInput | number
    companyName?: StringFieldUpdateOperationsInput | string
    companyCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUncheckedUpdateManyWithoutCompanyNestedInput
    customer?: CustomerUncheckedUpdateManyWithoutCompanyNestedInput
    contract?: ContractUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type ContractUpsertWithWhereUniqueWithoutCarInput = {
    where: ContractWhereUniqueInput
    update: XOR<ContractUpdateWithoutCarInput, ContractUncheckedUpdateWithoutCarInput>
    create: XOR<ContractCreateWithoutCarInput, ContractUncheckedCreateWithoutCarInput>
  }

  export type ContractUpdateWithWhereUniqueWithoutCarInput = {
    where: ContractWhereUniqueInput
    data: XOR<ContractUpdateWithoutCarInput, ContractUncheckedUpdateWithoutCarInput>
  }

  export type ContractUpdateManyWithWhereWithoutCarInput = {
    where: ContractScalarWhereInput
    data: XOR<ContractUpdateManyMutationInput, ContractUncheckedUpdateManyWithoutCarInput>
  }

  export type CarCreateWithoutCarModelInput = {
    carNumber: string
    manufacturingYear: number
    mileage: number
    price: number
    accidentCount: number
    explanation?: string | null
    accidentDetails?: string | null
    status: $Enums.CarStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    company: CompanyCreateNestedOneWithoutCarInput
    contract?: ContractCreateNestedManyWithoutCarInput
  }

  export type CarUncheckedCreateWithoutCarModelInput = {
    id?: number
    carNumber: string
    manufacturingYear: number
    mileage: number
    price: number
    accidentCount: number
    explanation?: string | null
    accidentDetails?: string | null
    status: $Enums.CarStatus
    companyId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    contract?: ContractUncheckedCreateNestedManyWithoutCarInput
  }

  export type CarCreateOrConnectWithoutCarModelInput = {
    where: CarWhereUniqueInput
    create: XOR<CarCreateWithoutCarModelInput, CarUncheckedCreateWithoutCarModelInput>
  }

  export type CarCreateManyCarModelInputEnvelope = {
    data: CarCreateManyCarModelInput | CarCreateManyCarModelInput[]
    skipDuplicates?: boolean
  }

  export type CarUpsertWithWhereUniqueWithoutCarModelInput = {
    where: CarWhereUniqueInput
    update: XOR<CarUpdateWithoutCarModelInput, CarUncheckedUpdateWithoutCarModelInput>
    create: XOR<CarCreateWithoutCarModelInput, CarUncheckedCreateWithoutCarModelInput>
  }

  export type CarUpdateWithWhereUniqueWithoutCarModelInput = {
    where: CarWhereUniqueInput
    data: XOR<CarUpdateWithoutCarModelInput, CarUncheckedUpdateWithoutCarModelInput>
  }

  export type CarUpdateManyWithWhereWithoutCarModelInput = {
    where: CarScalarWhereInput
    data: XOR<CarUpdateManyMutationInput, CarUncheckedUpdateManyWithoutCarModelInput>
  }

  export type CarCreateWithoutContractInput = {
    carNumber: string
    manufacturingYear: number
    mileage: number
    price: number
    accidentCount: number
    explanation?: string | null
    accidentDetails?: string | null
    status: $Enums.CarStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    carModel: CarModelCreateNestedOneWithoutCarInput
    company: CompanyCreateNestedOneWithoutCarInput
  }

  export type CarUncheckedCreateWithoutContractInput = {
    id?: number
    carNumber: string
    manufacturingYear: number
    mileage: number
    price: number
    accidentCount: number
    explanation?: string | null
    accidentDetails?: string | null
    status: $Enums.CarStatus
    model: string
    companyId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CarCreateOrConnectWithoutContractInput = {
    where: CarWhereUniqueInput
    create: XOR<CarCreateWithoutContractInput, CarUncheckedCreateWithoutContractInput>
  }

  export type CustomerCreateWithoutContractInput = {
    name: string
    gender: $Enums.Gender
    phoneNumber: string
    ageGroup?: $Enums.AgeGroup | null
    region?: $Enums.Region | null
    email: string
    memo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    company: CompanyCreateNestedOneWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutContractInput = {
    id?: number
    name: string
    gender: $Enums.Gender
    phoneNumber: string
    ageGroup?: $Enums.AgeGroup | null
    region?: $Enums.Region | null
    email: string
    memo?: string | null
    companyId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustomerCreateOrConnectWithoutContractInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutContractInput, CustomerUncheckedCreateWithoutContractInput>
  }

  export type UserCreateWithoutContractInput = {
    name: string
    email: string
    employeeNumber: string
    phoneNumber: string
    password: string
    imageUrl?: string | null
    refreshToken?: string | null
    isAdmin?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    company: CompanyCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutContractInput = {
    id?: number
    name: string
    email: string
    employeeNumber: string
    phoneNumber: string
    password: string
    imageUrl?: string | null
    refreshToken?: string | null
    isAdmin?: boolean
    companyId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutContractInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutContractInput, UserUncheckedCreateWithoutContractInput>
  }

  export type CompanyCreateWithoutContractInput = {
    companyName: string
    companyCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedManyWithoutCompanyInput
    customer?: CustomerCreateNestedManyWithoutCompanyInput
    car?: CarCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateWithoutContractInput = {
    id?: number
    companyName: string
    companyCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserUncheckedCreateNestedManyWithoutCompanyInput
    customer?: CustomerUncheckedCreateNestedManyWithoutCompanyInput
    car?: CarUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyCreateOrConnectWithoutContractInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutContractInput, CompanyUncheckedCreateWithoutContractInput>
  }

  export type MeetingsCreateWithoutContractInput = {
    date: Date | string
    alarms?: MeetingsCreatealarmsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MeetingsUncheckedCreateWithoutContractInput = {
    id?: number
    date: Date | string
    alarms?: MeetingsCreatealarmsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MeetingsCreateOrConnectWithoutContractInput = {
    where: MeetingsWhereUniqueInput
    create: XOR<MeetingsCreateWithoutContractInput, MeetingsUncheckedCreateWithoutContractInput>
  }

  export type MeetingsCreateManyContractInputEnvelope = {
    data: MeetingsCreateManyContractInput | MeetingsCreateManyContractInput[]
    skipDuplicates?: boolean
  }

  export type ContractDocumentRelationCreateWithoutContractInput = {
    createdAt?: Date | string
    contractDocument: ContractDocumentCreateNestedOneWithoutContractDocumentRelationInput
  }

  export type ContractDocumentRelationUncheckedCreateWithoutContractInput = {
    contractDocumentId: number
    createdAt?: Date | string
  }

  export type ContractDocumentRelationCreateOrConnectWithoutContractInput = {
    where: ContractDocumentRelationWhereUniqueInput
    create: XOR<ContractDocumentRelationCreateWithoutContractInput, ContractDocumentRelationUncheckedCreateWithoutContractInput>
  }

  export type ContractDocumentRelationCreateManyContractInputEnvelope = {
    data: ContractDocumentRelationCreateManyContractInput | ContractDocumentRelationCreateManyContractInput[]
    skipDuplicates?: boolean
  }

  export type CarUpsertWithoutContractInput = {
    update: XOR<CarUpdateWithoutContractInput, CarUncheckedUpdateWithoutContractInput>
    create: XOR<CarCreateWithoutContractInput, CarUncheckedCreateWithoutContractInput>
    where?: CarWhereInput
  }

  export type CarUpdateToOneWithWhereWithoutContractInput = {
    where?: CarWhereInput
    data: XOR<CarUpdateWithoutContractInput, CarUncheckedUpdateWithoutContractInput>
  }

  export type CarUpdateWithoutContractInput = {
    carNumber?: StringFieldUpdateOperationsInput | string
    manufacturingYear?: IntFieldUpdateOperationsInput | number
    mileage?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    accidentCount?: IntFieldUpdateOperationsInput | number
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    accidentDetails?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCarStatusFieldUpdateOperationsInput | $Enums.CarStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    carModel?: CarModelUpdateOneRequiredWithoutCarNestedInput
    company?: CompanyUpdateOneRequiredWithoutCarNestedInput
  }

  export type CarUncheckedUpdateWithoutContractInput = {
    id?: IntFieldUpdateOperationsInput | number
    carNumber?: StringFieldUpdateOperationsInput | string
    manufacturingYear?: IntFieldUpdateOperationsInput | number
    mileage?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    accidentCount?: IntFieldUpdateOperationsInput | number
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    accidentDetails?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCarStatusFieldUpdateOperationsInput | $Enums.CarStatus
    model?: StringFieldUpdateOperationsInput | string
    companyId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerUpsertWithoutContractInput = {
    update: XOR<CustomerUpdateWithoutContractInput, CustomerUncheckedUpdateWithoutContractInput>
    create: XOR<CustomerCreateWithoutContractInput, CustomerUncheckedCreateWithoutContractInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutContractInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutContractInput, CustomerUncheckedUpdateWithoutContractInput>
  }

  export type CustomerUpdateWithoutContractInput = {
    name?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    phoneNumber?: StringFieldUpdateOperationsInput | string
    ageGroup?: NullableEnumAgeGroupFieldUpdateOperationsInput | $Enums.AgeGroup | null
    region?: NullableEnumRegionFieldUpdateOperationsInput | $Enums.Region | null
    email?: StringFieldUpdateOperationsInput | string
    memo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneRequiredWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutContractInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    phoneNumber?: StringFieldUpdateOperationsInput | string
    ageGroup?: NullableEnumAgeGroupFieldUpdateOperationsInput | $Enums.AgeGroup | null
    region?: NullableEnumRegionFieldUpdateOperationsInput | $Enums.Region | null
    email?: StringFieldUpdateOperationsInput | string
    memo?: NullableStringFieldUpdateOperationsInput | string | null
    companyId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutContractInput = {
    update: XOR<UserUpdateWithoutContractInput, UserUncheckedUpdateWithoutContractInput>
    create: XOR<UserCreateWithoutContractInput, UserUncheckedCreateWithoutContractInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutContractInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutContractInput, UserUncheckedUpdateWithoutContractInput>
  }

  export type UserUpdateWithoutContractInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    employeeNumber?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneRequiredWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutContractInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    employeeNumber?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    companyId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyUpsertWithoutContractInput = {
    update: XOR<CompanyUpdateWithoutContractInput, CompanyUncheckedUpdateWithoutContractInput>
    create: XOR<CompanyCreateWithoutContractInput, CompanyUncheckedCreateWithoutContractInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutContractInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutContractInput, CompanyUncheckedUpdateWithoutContractInput>
  }

  export type CompanyUpdateWithoutContractInput = {
    companyName?: StringFieldUpdateOperationsInput | string
    companyCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateManyWithoutCompanyNestedInput
    customer?: CustomerUpdateManyWithoutCompanyNestedInput
    car?: CarUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateWithoutContractInput = {
    id?: IntFieldUpdateOperationsInput | number
    companyName?: StringFieldUpdateOperationsInput | string
    companyCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUncheckedUpdateManyWithoutCompanyNestedInput
    customer?: CustomerUncheckedUpdateManyWithoutCompanyNestedInput
    car?: CarUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type MeetingsUpsertWithWhereUniqueWithoutContractInput = {
    where: MeetingsWhereUniqueInput
    update: XOR<MeetingsUpdateWithoutContractInput, MeetingsUncheckedUpdateWithoutContractInput>
    create: XOR<MeetingsCreateWithoutContractInput, MeetingsUncheckedCreateWithoutContractInput>
  }

  export type MeetingsUpdateWithWhereUniqueWithoutContractInput = {
    where: MeetingsWhereUniqueInput
    data: XOR<MeetingsUpdateWithoutContractInput, MeetingsUncheckedUpdateWithoutContractInput>
  }

  export type MeetingsUpdateManyWithWhereWithoutContractInput = {
    where: MeetingsScalarWhereInput
    data: XOR<MeetingsUpdateManyMutationInput, MeetingsUncheckedUpdateManyWithoutContractInput>
  }

  export type MeetingsScalarWhereInput = {
    AND?: MeetingsScalarWhereInput | MeetingsScalarWhereInput[]
    OR?: MeetingsScalarWhereInput[]
    NOT?: MeetingsScalarWhereInput | MeetingsScalarWhereInput[]
    id?: IntFilter<"Meetings"> | number
    date?: DateTimeFilter<"Meetings"> | Date | string
    alarms?: StringNullableListFilter<"Meetings">
    contractId?: IntFilter<"Meetings"> | number
    createdAt?: DateTimeFilter<"Meetings"> | Date | string
    updatedAt?: DateTimeFilter<"Meetings"> | Date | string
  }

  export type ContractDocumentRelationUpsertWithWhereUniqueWithoutContractInput = {
    where: ContractDocumentRelationWhereUniqueInput
    update: XOR<ContractDocumentRelationUpdateWithoutContractInput, ContractDocumentRelationUncheckedUpdateWithoutContractInput>
    create: XOR<ContractDocumentRelationCreateWithoutContractInput, ContractDocumentRelationUncheckedCreateWithoutContractInput>
  }

  export type ContractDocumentRelationUpdateWithWhereUniqueWithoutContractInput = {
    where: ContractDocumentRelationWhereUniqueInput
    data: XOR<ContractDocumentRelationUpdateWithoutContractInput, ContractDocumentRelationUncheckedUpdateWithoutContractInput>
  }

  export type ContractDocumentRelationUpdateManyWithWhereWithoutContractInput = {
    where: ContractDocumentRelationScalarWhereInput
    data: XOR<ContractDocumentRelationUpdateManyMutationInput, ContractDocumentRelationUncheckedUpdateManyWithoutContractInput>
  }

  export type ContractDocumentRelationScalarWhereInput = {
    AND?: ContractDocumentRelationScalarWhereInput | ContractDocumentRelationScalarWhereInput[]
    OR?: ContractDocumentRelationScalarWhereInput[]
    NOT?: ContractDocumentRelationScalarWhereInput | ContractDocumentRelationScalarWhereInput[]
    contractId?: IntFilter<"ContractDocumentRelation"> | number
    contractDocumentId?: IntFilter<"ContractDocumentRelation"> | number
    createdAt?: DateTimeFilter<"ContractDocumentRelation"> | Date | string
  }

  export type ContractCreateWithoutMeetingsInput = {
    status: $Enums.ContractStatus
    resolutionDate?: Date | string | null
    contractPrice: number
    createdAt?: Date | string
    updatedAt?: Date | string
    car: CarCreateNestedOneWithoutContractInput
    customer: CustomerCreateNestedOneWithoutContractInput
    user: UserCreateNestedOneWithoutContractInput
    company: CompanyCreateNestedOneWithoutContractInput
    contractDocumentRelation?: ContractDocumentRelationCreateNestedManyWithoutContractInput
  }

  export type ContractUncheckedCreateWithoutMeetingsInput = {
    id?: number
    status: $Enums.ContractStatus
    resolutionDate?: Date | string | null
    contractPrice: number
    carId: number
    customerId: number
    userId: number
    companyId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    contractDocumentRelation?: ContractDocumentRelationUncheckedCreateNestedManyWithoutContractInput
  }

  export type ContractCreateOrConnectWithoutMeetingsInput = {
    where: ContractWhereUniqueInput
    create: XOR<ContractCreateWithoutMeetingsInput, ContractUncheckedCreateWithoutMeetingsInput>
  }

  export type ContractUpsertWithoutMeetingsInput = {
    update: XOR<ContractUpdateWithoutMeetingsInput, ContractUncheckedUpdateWithoutMeetingsInput>
    create: XOR<ContractCreateWithoutMeetingsInput, ContractUncheckedCreateWithoutMeetingsInput>
    where?: ContractWhereInput
  }

  export type ContractUpdateToOneWithWhereWithoutMeetingsInput = {
    where?: ContractWhereInput
    data: XOR<ContractUpdateWithoutMeetingsInput, ContractUncheckedUpdateWithoutMeetingsInput>
  }

  export type ContractUpdateWithoutMeetingsInput = {
    status?: EnumContractStatusFieldUpdateOperationsInput | $Enums.ContractStatus
    resolutionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    contractPrice?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    car?: CarUpdateOneRequiredWithoutContractNestedInput
    customer?: CustomerUpdateOneRequiredWithoutContractNestedInput
    user?: UserUpdateOneRequiredWithoutContractNestedInput
    company?: CompanyUpdateOneRequiredWithoutContractNestedInput
    contractDocumentRelation?: ContractDocumentRelationUpdateManyWithoutContractNestedInput
  }

  export type ContractUncheckedUpdateWithoutMeetingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: EnumContractStatusFieldUpdateOperationsInput | $Enums.ContractStatus
    resolutionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    contractPrice?: IntFieldUpdateOperationsInput | number
    carId?: IntFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    companyId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contractDocumentRelation?: ContractDocumentRelationUncheckedUpdateManyWithoutContractNestedInput
  }

  export type ContractDocumentRelationCreateWithoutContractDocumentInput = {
    createdAt?: Date | string
    contract: ContractCreateNestedOneWithoutContractDocumentRelationInput
  }

  export type ContractDocumentRelationUncheckedCreateWithoutContractDocumentInput = {
    contractId: number
    createdAt?: Date | string
  }

  export type ContractDocumentRelationCreateOrConnectWithoutContractDocumentInput = {
    where: ContractDocumentRelationWhereUniqueInput
    create: XOR<ContractDocumentRelationCreateWithoutContractDocumentInput, ContractDocumentRelationUncheckedCreateWithoutContractDocumentInput>
  }

  export type ContractDocumentRelationUpsertWithoutContractDocumentInput = {
    update: XOR<ContractDocumentRelationUpdateWithoutContractDocumentInput, ContractDocumentRelationUncheckedUpdateWithoutContractDocumentInput>
    create: XOR<ContractDocumentRelationCreateWithoutContractDocumentInput, ContractDocumentRelationUncheckedCreateWithoutContractDocumentInput>
    where?: ContractDocumentRelationWhereInput
  }

  export type ContractDocumentRelationUpdateToOneWithWhereWithoutContractDocumentInput = {
    where?: ContractDocumentRelationWhereInput
    data: XOR<ContractDocumentRelationUpdateWithoutContractDocumentInput, ContractDocumentRelationUncheckedUpdateWithoutContractDocumentInput>
  }

  export type ContractDocumentRelationUpdateWithoutContractDocumentInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contract?: ContractUpdateOneRequiredWithoutContractDocumentRelationNestedInput
  }

  export type ContractDocumentRelationUncheckedUpdateWithoutContractDocumentInput = {
    contractId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContractCreateWithoutContractDocumentRelationInput = {
    status: $Enums.ContractStatus
    resolutionDate?: Date | string | null
    contractPrice: number
    createdAt?: Date | string
    updatedAt?: Date | string
    car: CarCreateNestedOneWithoutContractInput
    customer: CustomerCreateNestedOneWithoutContractInput
    user: UserCreateNestedOneWithoutContractInput
    company: CompanyCreateNestedOneWithoutContractInput
    meetings?: MeetingsCreateNestedManyWithoutContractInput
  }

  export type ContractUncheckedCreateWithoutContractDocumentRelationInput = {
    id?: number
    status: $Enums.ContractStatus
    resolutionDate?: Date | string | null
    contractPrice: number
    carId: number
    customerId: number
    userId: number
    companyId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    meetings?: MeetingsUncheckedCreateNestedManyWithoutContractInput
  }

  export type ContractCreateOrConnectWithoutContractDocumentRelationInput = {
    where: ContractWhereUniqueInput
    create: XOR<ContractCreateWithoutContractDocumentRelationInput, ContractUncheckedCreateWithoutContractDocumentRelationInput>
  }

  export type ContractDocumentCreateWithoutContractDocumentRelationInput = {
    fileName: string
    createdAt?: Date | string
  }

  export type ContractDocumentUncheckedCreateWithoutContractDocumentRelationInput = {
    id?: number
    fileName: string
    createdAt?: Date | string
  }

  export type ContractDocumentCreateOrConnectWithoutContractDocumentRelationInput = {
    where: ContractDocumentWhereUniqueInput
    create: XOR<ContractDocumentCreateWithoutContractDocumentRelationInput, ContractDocumentUncheckedCreateWithoutContractDocumentRelationInput>
  }

  export type ContractUpsertWithoutContractDocumentRelationInput = {
    update: XOR<ContractUpdateWithoutContractDocumentRelationInput, ContractUncheckedUpdateWithoutContractDocumentRelationInput>
    create: XOR<ContractCreateWithoutContractDocumentRelationInput, ContractUncheckedCreateWithoutContractDocumentRelationInput>
    where?: ContractWhereInput
  }

  export type ContractUpdateToOneWithWhereWithoutContractDocumentRelationInput = {
    where?: ContractWhereInput
    data: XOR<ContractUpdateWithoutContractDocumentRelationInput, ContractUncheckedUpdateWithoutContractDocumentRelationInput>
  }

  export type ContractUpdateWithoutContractDocumentRelationInput = {
    status?: EnumContractStatusFieldUpdateOperationsInput | $Enums.ContractStatus
    resolutionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    contractPrice?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    car?: CarUpdateOneRequiredWithoutContractNestedInput
    customer?: CustomerUpdateOneRequiredWithoutContractNestedInput
    user?: UserUpdateOneRequiredWithoutContractNestedInput
    company?: CompanyUpdateOneRequiredWithoutContractNestedInput
    meetings?: MeetingsUpdateManyWithoutContractNestedInput
  }

  export type ContractUncheckedUpdateWithoutContractDocumentRelationInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: EnumContractStatusFieldUpdateOperationsInput | $Enums.ContractStatus
    resolutionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    contractPrice?: IntFieldUpdateOperationsInput | number
    carId?: IntFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    companyId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    meetings?: MeetingsUncheckedUpdateManyWithoutContractNestedInput
  }

  export type ContractDocumentUpsertWithoutContractDocumentRelationInput = {
    update: XOR<ContractDocumentUpdateWithoutContractDocumentRelationInput, ContractDocumentUncheckedUpdateWithoutContractDocumentRelationInput>
    create: XOR<ContractDocumentCreateWithoutContractDocumentRelationInput, ContractDocumentUncheckedCreateWithoutContractDocumentRelationInput>
    where?: ContractDocumentWhereInput
  }

  export type ContractDocumentUpdateToOneWithWhereWithoutContractDocumentRelationInput = {
    where?: ContractDocumentWhereInput
    data: XOR<ContractDocumentUpdateWithoutContractDocumentRelationInput, ContractDocumentUncheckedUpdateWithoutContractDocumentRelationInput>
  }

  export type ContractDocumentUpdateWithoutContractDocumentRelationInput = {
    fileName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContractDocumentUncheckedUpdateWithoutContractDocumentRelationInput = {
    id?: IntFieldUpdateOperationsInput | number
    fileName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyCompanyInput = {
    id?: number
    name: string
    email: string
    employeeNumber: string
    phoneNumber: string
    password: string
    imageUrl?: string | null
    refreshToken?: string | null
    isAdmin?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustomerCreateManyCompanyInput = {
    id?: number
    name: string
    gender: $Enums.Gender
    phoneNumber: string
    ageGroup?: $Enums.AgeGroup | null
    region?: $Enums.Region | null
    email: string
    memo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CarCreateManyCompanyInput = {
    id?: number
    carNumber: string
    manufacturingYear: number
    mileage: number
    price: number
    accidentCount: number
    explanation?: string | null
    accidentDetails?: string | null
    status: $Enums.CarStatus
    model: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContractCreateManyCompanyInput = {
    id?: number
    status: $Enums.ContractStatus
    resolutionDate?: Date | string | null
    contractPrice: number
    carId: number
    customerId: number
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateWithoutCompanyInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    employeeNumber?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contract?: ContractUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCompanyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    employeeNumber?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contract?: ContractUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutCompanyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    employeeNumber?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerUpdateWithoutCompanyInput = {
    name?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    phoneNumber?: StringFieldUpdateOperationsInput | string
    ageGroup?: NullableEnumAgeGroupFieldUpdateOperationsInput | $Enums.AgeGroup | null
    region?: NullableEnumRegionFieldUpdateOperationsInput | $Enums.Region | null
    email?: StringFieldUpdateOperationsInput | string
    memo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contract?: ContractUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutCompanyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    phoneNumber?: StringFieldUpdateOperationsInput | string
    ageGroup?: NullableEnumAgeGroupFieldUpdateOperationsInput | $Enums.AgeGroup | null
    region?: NullableEnumRegionFieldUpdateOperationsInput | $Enums.Region | null
    email?: StringFieldUpdateOperationsInput | string
    memo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contract?: ContractUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateManyWithoutCompanyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    phoneNumber?: StringFieldUpdateOperationsInput | string
    ageGroup?: NullableEnumAgeGroupFieldUpdateOperationsInput | $Enums.AgeGroup | null
    region?: NullableEnumRegionFieldUpdateOperationsInput | $Enums.Region | null
    email?: StringFieldUpdateOperationsInput | string
    memo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CarUpdateWithoutCompanyInput = {
    carNumber?: StringFieldUpdateOperationsInput | string
    manufacturingYear?: IntFieldUpdateOperationsInput | number
    mileage?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    accidentCount?: IntFieldUpdateOperationsInput | number
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    accidentDetails?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCarStatusFieldUpdateOperationsInput | $Enums.CarStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    carModel?: CarModelUpdateOneRequiredWithoutCarNestedInput
    contract?: ContractUpdateManyWithoutCarNestedInput
  }

  export type CarUncheckedUpdateWithoutCompanyInput = {
    id?: IntFieldUpdateOperationsInput | number
    carNumber?: StringFieldUpdateOperationsInput | string
    manufacturingYear?: IntFieldUpdateOperationsInput | number
    mileage?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    accidentCount?: IntFieldUpdateOperationsInput | number
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    accidentDetails?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCarStatusFieldUpdateOperationsInput | $Enums.CarStatus
    model?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contract?: ContractUncheckedUpdateManyWithoutCarNestedInput
  }

  export type CarUncheckedUpdateManyWithoutCompanyInput = {
    id?: IntFieldUpdateOperationsInput | number
    carNumber?: StringFieldUpdateOperationsInput | string
    manufacturingYear?: IntFieldUpdateOperationsInput | number
    mileage?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    accidentCount?: IntFieldUpdateOperationsInput | number
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    accidentDetails?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCarStatusFieldUpdateOperationsInput | $Enums.CarStatus
    model?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContractUpdateWithoutCompanyInput = {
    status?: EnumContractStatusFieldUpdateOperationsInput | $Enums.ContractStatus
    resolutionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    contractPrice?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    car?: CarUpdateOneRequiredWithoutContractNestedInput
    customer?: CustomerUpdateOneRequiredWithoutContractNestedInput
    user?: UserUpdateOneRequiredWithoutContractNestedInput
    meetings?: MeetingsUpdateManyWithoutContractNestedInput
    contractDocumentRelation?: ContractDocumentRelationUpdateManyWithoutContractNestedInput
  }

  export type ContractUncheckedUpdateWithoutCompanyInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: EnumContractStatusFieldUpdateOperationsInput | $Enums.ContractStatus
    resolutionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    contractPrice?: IntFieldUpdateOperationsInput | number
    carId?: IntFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    meetings?: MeetingsUncheckedUpdateManyWithoutContractNestedInput
    contractDocumentRelation?: ContractDocumentRelationUncheckedUpdateManyWithoutContractNestedInput
  }

  export type ContractUncheckedUpdateManyWithoutCompanyInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: EnumContractStatusFieldUpdateOperationsInput | $Enums.ContractStatus
    resolutionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    contractPrice?: IntFieldUpdateOperationsInput | number
    carId?: IntFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContractCreateManyUserInput = {
    id?: number
    status: $Enums.ContractStatus
    resolutionDate?: Date | string | null
    contractPrice: number
    carId: number
    customerId: number
    companyId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContractUpdateWithoutUserInput = {
    status?: EnumContractStatusFieldUpdateOperationsInput | $Enums.ContractStatus
    resolutionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    contractPrice?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    car?: CarUpdateOneRequiredWithoutContractNestedInput
    customer?: CustomerUpdateOneRequiredWithoutContractNestedInput
    company?: CompanyUpdateOneRequiredWithoutContractNestedInput
    meetings?: MeetingsUpdateManyWithoutContractNestedInput
    contractDocumentRelation?: ContractDocumentRelationUpdateManyWithoutContractNestedInput
  }

  export type ContractUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: EnumContractStatusFieldUpdateOperationsInput | $Enums.ContractStatus
    resolutionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    contractPrice?: IntFieldUpdateOperationsInput | number
    carId?: IntFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
    companyId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    meetings?: MeetingsUncheckedUpdateManyWithoutContractNestedInput
    contractDocumentRelation?: ContractDocumentRelationUncheckedUpdateManyWithoutContractNestedInput
  }

  export type ContractUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: EnumContractStatusFieldUpdateOperationsInput | $Enums.ContractStatus
    resolutionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    contractPrice?: IntFieldUpdateOperationsInput | number
    carId?: IntFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
    companyId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContractCreateManyCustomerInput = {
    id?: number
    status: $Enums.ContractStatus
    resolutionDate?: Date | string | null
    contractPrice: number
    carId: number
    userId: number
    companyId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContractUpdateWithoutCustomerInput = {
    status?: EnumContractStatusFieldUpdateOperationsInput | $Enums.ContractStatus
    resolutionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    contractPrice?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    car?: CarUpdateOneRequiredWithoutContractNestedInput
    user?: UserUpdateOneRequiredWithoutContractNestedInput
    company?: CompanyUpdateOneRequiredWithoutContractNestedInput
    meetings?: MeetingsUpdateManyWithoutContractNestedInput
    contractDocumentRelation?: ContractDocumentRelationUpdateManyWithoutContractNestedInput
  }

  export type ContractUncheckedUpdateWithoutCustomerInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: EnumContractStatusFieldUpdateOperationsInput | $Enums.ContractStatus
    resolutionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    contractPrice?: IntFieldUpdateOperationsInput | number
    carId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    companyId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    meetings?: MeetingsUncheckedUpdateManyWithoutContractNestedInput
    contractDocumentRelation?: ContractDocumentRelationUncheckedUpdateManyWithoutContractNestedInput
  }

  export type ContractUncheckedUpdateManyWithoutCustomerInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: EnumContractStatusFieldUpdateOperationsInput | $Enums.ContractStatus
    resolutionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    contractPrice?: IntFieldUpdateOperationsInput | number
    carId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    companyId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContractCreateManyCarInput = {
    id?: number
    status: $Enums.ContractStatus
    resolutionDate?: Date | string | null
    contractPrice: number
    customerId: number
    userId: number
    companyId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContractUpdateWithoutCarInput = {
    status?: EnumContractStatusFieldUpdateOperationsInput | $Enums.ContractStatus
    resolutionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    contractPrice?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutContractNestedInput
    user?: UserUpdateOneRequiredWithoutContractNestedInput
    company?: CompanyUpdateOneRequiredWithoutContractNestedInput
    meetings?: MeetingsUpdateManyWithoutContractNestedInput
    contractDocumentRelation?: ContractDocumentRelationUpdateManyWithoutContractNestedInput
  }

  export type ContractUncheckedUpdateWithoutCarInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: EnumContractStatusFieldUpdateOperationsInput | $Enums.ContractStatus
    resolutionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    contractPrice?: IntFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    companyId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    meetings?: MeetingsUncheckedUpdateManyWithoutContractNestedInput
    contractDocumentRelation?: ContractDocumentRelationUncheckedUpdateManyWithoutContractNestedInput
  }

  export type ContractUncheckedUpdateManyWithoutCarInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: EnumContractStatusFieldUpdateOperationsInput | $Enums.ContractStatus
    resolutionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    contractPrice?: IntFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    companyId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CarCreateManyCarModelInput = {
    id?: number
    carNumber: string
    manufacturingYear: number
    mileage: number
    price: number
    accidentCount: number
    explanation?: string | null
    accidentDetails?: string | null
    status: $Enums.CarStatus
    companyId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CarUpdateWithoutCarModelInput = {
    carNumber?: StringFieldUpdateOperationsInput | string
    manufacturingYear?: IntFieldUpdateOperationsInput | number
    mileage?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    accidentCount?: IntFieldUpdateOperationsInput | number
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    accidentDetails?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCarStatusFieldUpdateOperationsInput | $Enums.CarStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneRequiredWithoutCarNestedInput
    contract?: ContractUpdateManyWithoutCarNestedInput
  }

  export type CarUncheckedUpdateWithoutCarModelInput = {
    id?: IntFieldUpdateOperationsInput | number
    carNumber?: StringFieldUpdateOperationsInput | string
    manufacturingYear?: IntFieldUpdateOperationsInput | number
    mileage?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    accidentCount?: IntFieldUpdateOperationsInput | number
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    accidentDetails?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCarStatusFieldUpdateOperationsInput | $Enums.CarStatus
    companyId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contract?: ContractUncheckedUpdateManyWithoutCarNestedInput
  }

  export type CarUncheckedUpdateManyWithoutCarModelInput = {
    id?: IntFieldUpdateOperationsInput | number
    carNumber?: StringFieldUpdateOperationsInput | string
    manufacturingYear?: IntFieldUpdateOperationsInput | number
    mileage?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    accidentCount?: IntFieldUpdateOperationsInput | number
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    accidentDetails?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCarStatusFieldUpdateOperationsInput | $Enums.CarStatus
    companyId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MeetingsCreateManyContractInput = {
    id?: number
    date: Date | string
    alarms?: MeetingsCreatealarmsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContractDocumentRelationCreateManyContractInput = {
    contractDocumentId: number
    createdAt?: Date | string
  }

  export type MeetingsUpdateWithoutContractInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    alarms?: MeetingsUpdatealarmsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MeetingsUncheckedUpdateWithoutContractInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    alarms?: MeetingsUpdatealarmsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MeetingsUncheckedUpdateManyWithoutContractInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    alarms?: MeetingsUpdatealarmsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContractDocumentRelationUpdateWithoutContractInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contractDocument?: ContractDocumentUpdateOneRequiredWithoutContractDocumentRelationNestedInput
  }

  export type ContractDocumentRelationUncheckedUpdateWithoutContractInput = {
    contractDocumentId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContractDocumentRelationUncheckedUpdateManyWithoutContractInput = {
    contractDocumentId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}