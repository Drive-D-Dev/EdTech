
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Choice
 * 
 */
export type Choice = $Result.DefaultSelection<Prisma.$ChoicePayload>
/**
 * Model Question
 * 
 */
export type Question = $Result.DefaultSelection<Prisma.$QuestionPayload>
/**
 * Model Answer
 * 
 */
export type Answer = $Result.DefaultSelection<Prisma.$AnswerPayload>
/**
 * Model Study_Set
 * 
 */
export type Study_Set = $Result.DefaultSelection<Prisma.$Study_SetPayload>
/**
 * Model Study_Set_Questions_List
 * 
 */
export type Study_Set_Questions_List = $Result.DefaultSelection<Prisma.$Study_Set_Questions_ListPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ADMIN: 'ADMIN',
  USER: 'USER'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.choice`: Exposes CRUD operations for the **Choice** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Choices
    * const choices = await prisma.choice.findMany()
    * ```
    */
  get choice(): Prisma.ChoiceDelegate<ExtArgs>;

  /**
   * `prisma.question`: Exposes CRUD operations for the **Question** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Questions
    * const questions = await prisma.question.findMany()
    * ```
    */
  get question(): Prisma.QuestionDelegate<ExtArgs>;

  /**
   * `prisma.answer`: Exposes CRUD operations for the **Answer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Answers
    * const answers = await prisma.answer.findMany()
    * ```
    */
  get answer(): Prisma.AnswerDelegate<ExtArgs>;

  /**
   * `prisma.study_Set`: Exposes CRUD operations for the **Study_Set** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Study_Sets
    * const study_Sets = await prisma.study_Set.findMany()
    * ```
    */
  get study_Set(): Prisma.Study_SetDelegate<ExtArgs>;

  /**
   * `prisma.study_Set_Questions_List`: Exposes CRUD operations for the **Study_Set_Questions_List** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Study_Set_Questions_Lists
    * const study_Set_Questions_Lists = await prisma.study_Set_Questions_List.findMany()
    * ```
    */
  get study_Set_Questions_List(): Prisma.Study_Set_Questions_ListDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.18.0
   * Query Engine version: 69d742ee20b815d88e17e54db4a2a7a3b30324e3
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    User: 'User',
    Choice: 'Choice',
    Question: 'Question',
    Answer: 'Answer',
    Study_Set: 'Study_Set',
    Study_Set_Questions_List: 'Study_Set_Questions_List'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "choice" | "question" | "answer" | "study_Set" | "study_Set_Questions_List"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
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
      Choice: {
        payload: Prisma.$ChoicePayload<ExtArgs>
        fields: Prisma.ChoiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChoiceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChoicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChoiceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChoicePayload>
          }
          findFirst: {
            args: Prisma.ChoiceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChoicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChoiceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChoicePayload>
          }
          findMany: {
            args: Prisma.ChoiceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChoicePayload>[]
          }
          create: {
            args: Prisma.ChoiceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChoicePayload>
          }
          createMany: {
            args: Prisma.ChoiceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChoiceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChoicePayload>[]
          }
          delete: {
            args: Prisma.ChoiceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChoicePayload>
          }
          update: {
            args: Prisma.ChoiceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChoicePayload>
          }
          deleteMany: {
            args: Prisma.ChoiceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChoiceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ChoiceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChoicePayload>
          }
          aggregate: {
            args: Prisma.ChoiceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChoice>
          }
          groupBy: {
            args: Prisma.ChoiceGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChoiceGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChoiceCountArgs<ExtArgs>
            result: $Utils.Optional<ChoiceCountAggregateOutputType> | number
          }
        }
      }
      Question: {
        payload: Prisma.$QuestionPayload<ExtArgs>
        fields: Prisma.QuestionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuestionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuestionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          findFirst: {
            args: Prisma.QuestionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuestionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          findMany: {
            args: Prisma.QuestionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>[]
          }
          create: {
            args: Prisma.QuestionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          createMany: {
            args: Prisma.QuestionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QuestionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>[]
          }
          delete: {
            args: Prisma.QuestionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          update: {
            args: Prisma.QuestionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          deleteMany: {
            args: Prisma.QuestionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuestionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.QuestionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          aggregate: {
            args: Prisma.QuestionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuestion>
          }
          groupBy: {
            args: Prisma.QuestionGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuestionGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuestionCountArgs<ExtArgs>
            result: $Utils.Optional<QuestionCountAggregateOutputType> | number
          }
        }
      }
      Answer: {
        payload: Prisma.$AnswerPayload<ExtArgs>
        fields: Prisma.AnswerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AnswerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AnswerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>
          }
          findFirst: {
            args: Prisma.AnswerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AnswerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>
          }
          findMany: {
            args: Prisma.AnswerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>[]
          }
          create: {
            args: Prisma.AnswerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>
          }
          createMany: {
            args: Prisma.AnswerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AnswerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>[]
          }
          delete: {
            args: Prisma.AnswerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>
          }
          update: {
            args: Prisma.AnswerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>
          }
          deleteMany: {
            args: Prisma.AnswerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AnswerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AnswerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>
          }
          aggregate: {
            args: Prisma.AnswerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAnswer>
          }
          groupBy: {
            args: Prisma.AnswerGroupByArgs<ExtArgs>
            result: $Utils.Optional<AnswerGroupByOutputType>[]
          }
          count: {
            args: Prisma.AnswerCountArgs<ExtArgs>
            result: $Utils.Optional<AnswerCountAggregateOutputType> | number
          }
        }
      }
      Study_Set: {
        payload: Prisma.$Study_SetPayload<ExtArgs>
        fields: Prisma.Study_SetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Study_SetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Study_SetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Study_SetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Study_SetPayload>
          }
          findFirst: {
            args: Prisma.Study_SetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Study_SetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Study_SetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Study_SetPayload>
          }
          findMany: {
            args: Prisma.Study_SetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Study_SetPayload>[]
          }
          create: {
            args: Prisma.Study_SetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Study_SetPayload>
          }
          createMany: {
            args: Prisma.Study_SetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Study_SetCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Study_SetPayload>[]
          }
          delete: {
            args: Prisma.Study_SetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Study_SetPayload>
          }
          update: {
            args: Prisma.Study_SetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Study_SetPayload>
          }
          deleteMany: {
            args: Prisma.Study_SetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Study_SetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.Study_SetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Study_SetPayload>
          }
          aggregate: {
            args: Prisma.Study_SetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudy_Set>
          }
          groupBy: {
            args: Prisma.Study_SetGroupByArgs<ExtArgs>
            result: $Utils.Optional<Study_SetGroupByOutputType>[]
          }
          count: {
            args: Prisma.Study_SetCountArgs<ExtArgs>
            result: $Utils.Optional<Study_SetCountAggregateOutputType> | number
          }
        }
      }
      Study_Set_Questions_List: {
        payload: Prisma.$Study_Set_Questions_ListPayload<ExtArgs>
        fields: Prisma.Study_Set_Questions_ListFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Study_Set_Questions_ListFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Study_Set_Questions_ListPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Study_Set_Questions_ListFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Study_Set_Questions_ListPayload>
          }
          findFirst: {
            args: Prisma.Study_Set_Questions_ListFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Study_Set_Questions_ListPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Study_Set_Questions_ListFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Study_Set_Questions_ListPayload>
          }
          findMany: {
            args: Prisma.Study_Set_Questions_ListFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Study_Set_Questions_ListPayload>[]
          }
          create: {
            args: Prisma.Study_Set_Questions_ListCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Study_Set_Questions_ListPayload>
          }
          createMany: {
            args: Prisma.Study_Set_Questions_ListCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Study_Set_Questions_ListCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Study_Set_Questions_ListPayload>[]
          }
          delete: {
            args: Prisma.Study_Set_Questions_ListDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Study_Set_Questions_ListPayload>
          }
          update: {
            args: Prisma.Study_Set_Questions_ListUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Study_Set_Questions_ListPayload>
          }
          deleteMany: {
            args: Prisma.Study_Set_Questions_ListDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Study_Set_Questions_ListUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.Study_Set_Questions_ListUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Study_Set_Questions_ListPayload>
          }
          aggregate: {
            args: Prisma.Study_Set_Questions_ListAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudy_Set_Questions_List>
          }
          groupBy: {
            args: Prisma.Study_Set_Questions_ListGroupByArgs<ExtArgs>
            result: $Utils.Optional<Study_Set_Questions_ListGroupByOutputType>[]
          }
          count: {
            args: Prisma.Study_Set_Questions_ListCountArgs<ExtArgs>
            result: $Utils.Optional<Study_Set_Questions_ListCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type ChoiceCountOutputType
   */

  export type ChoiceCountOutputType = {
    Answer: number
  }

  export type ChoiceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Answer?: boolean | ChoiceCountOutputTypeCountAnswerArgs
  }

  // Custom InputTypes
  /**
   * ChoiceCountOutputType without action
   */
  export type ChoiceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChoiceCountOutputType
     */
    select?: ChoiceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ChoiceCountOutputType without action
   */
  export type ChoiceCountOutputTypeCountAnswerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnswerWhereInput
  }


  /**
   * Count Type QuestionCountOutputType
   */

  export type QuestionCountOutputType = {
    Choice: number
    Study_Set_Questions_List: number
    Answer: number
  }

  export type QuestionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Choice?: boolean | QuestionCountOutputTypeCountChoiceArgs
    Study_Set_Questions_List?: boolean | QuestionCountOutputTypeCountStudy_Set_Questions_ListArgs
    Answer?: boolean | QuestionCountOutputTypeCountAnswerArgs
  }

  // Custom InputTypes
  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionCountOutputType
     */
    select?: QuestionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeCountChoiceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChoiceWhereInput
  }

  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeCountStudy_Set_Questions_ListArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Study_Set_Questions_ListWhereInput
  }

  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeCountAnswerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnswerWhereInput
  }


  /**
   * Count Type Study_SetCountOutputType
   */

  export type Study_SetCountOutputType = {
    Study_Set_Questions_List: number
  }

  export type Study_SetCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Study_Set_Questions_List?: boolean | Study_SetCountOutputTypeCountStudy_Set_Questions_ListArgs
  }

  // Custom InputTypes
  /**
   * Study_SetCountOutputType without action
   */
  export type Study_SetCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Study_SetCountOutputType
     */
    select?: Study_SetCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Study_SetCountOutputType without action
   */
  export type Study_SetCountOutputTypeCountStudy_Set_Questions_ListArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Study_Set_Questions_ListWhereInput
  }


  /**
   * Models
   */

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
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    name: string | null
    role: $Enums.Role | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    name: string | null
    role: $Enums.Role | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    name: number
    role: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    role?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    role?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    role?: true
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
    email: string
    password: string
    name: string
    role: $Enums.Role
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
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      password: string
      name: string
      role: $Enums.Role
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
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
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

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
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

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
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

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
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

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
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

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
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

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
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

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
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

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
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

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
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
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
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
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
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
  }


  /**
   * Model Choice
   */

  export type AggregateChoice = {
    _count: ChoiceCountAggregateOutputType | null
    _avg: ChoiceAvgAggregateOutputType | null
    _sum: ChoiceSumAggregateOutputType | null
    _min: ChoiceMinAggregateOutputType | null
    _max: ChoiceMaxAggregateOutputType | null
  }

  export type ChoiceAvgAggregateOutputType = {
    id: number | null
    number: number | null
    question_id: number | null
  }

  export type ChoiceSumAggregateOutputType = {
    id: number | null
    number: number | null
    question_id: number | null
  }

  export type ChoiceMinAggregateOutputType = {
    id: number | null
    content: string | null
    number: number | null
    question_id: number | null
  }

  export type ChoiceMaxAggregateOutputType = {
    id: number | null
    content: string | null
    number: number | null
    question_id: number | null
  }

  export type ChoiceCountAggregateOutputType = {
    id: number
    content: number
    number: number
    question_id: number
    _all: number
  }


  export type ChoiceAvgAggregateInputType = {
    id?: true
    number?: true
    question_id?: true
  }

  export type ChoiceSumAggregateInputType = {
    id?: true
    number?: true
    question_id?: true
  }

  export type ChoiceMinAggregateInputType = {
    id?: true
    content?: true
    number?: true
    question_id?: true
  }

  export type ChoiceMaxAggregateInputType = {
    id?: true
    content?: true
    number?: true
    question_id?: true
  }

  export type ChoiceCountAggregateInputType = {
    id?: true
    content?: true
    number?: true
    question_id?: true
    _all?: true
  }

  export type ChoiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Choice to aggregate.
     */
    where?: ChoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Choices to fetch.
     */
    orderBy?: ChoiceOrderByWithRelationInput | ChoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Choices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Choices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Choices
    **/
    _count?: true | ChoiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChoiceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChoiceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChoiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChoiceMaxAggregateInputType
  }

  export type GetChoiceAggregateType<T extends ChoiceAggregateArgs> = {
        [P in keyof T & keyof AggregateChoice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChoice[P]>
      : GetScalarType<T[P], AggregateChoice[P]>
  }




  export type ChoiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChoiceWhereInput
    orderBy?: ChoiceOrderByWithAggregationInput | ChoiceOrderByWithAggregationInput[]
    by: ChoiceScalarFieldEnum[] | ChoiceScalarFieldEnum
    having?: ChoiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChoiceCountAggregateInputType | true
    _avg?: ChoiceAvgAggregateInputType
    _sum?: ChoiceSumAggregateInputType
    _min?: ChoiceMinAggregateInputType
    _max?: ChoiceMaxAggregateInputType
  }

  export type ChoiceGroupByOutputType = {
    id: number
    content: string
    number: number
    question_id: number
    _count: ChoiceCountAggregateOutputType | null
    _avg: ChoiceAvgAggregateOutputType | null
    _sum: ChoiceSumAggregateOutputType | null
    _min: ChoiceMinAggregateOutputType | null
    _max: ChoiceMaxAggregateOutputType | null
  }

  type GetChoiceGroupByPayload<T extends ChoiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChoiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChoiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChoiceGroupByOutputType[P]>
            : GetScalarType<T[P], ChoiceGroupByOutputType[P]>
        }
      >
    >


  export type ChoiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    number?: boolean
    question_id?: boolean
    Question?: boolean | QuestionDefaultArgs<ExtArgs>
    Answer?: boolean | Choice$AnswerArgs<ExtArgs>
    _count?: boolean | ChoiceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["choice"]>

  export type ChoiceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    number?: boolean
    question_id?: boolean
    Question?: boolean | QuestionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["choice"]>

  export type ChoiceSelectScalar = {
    id?: boolean
    content?: boolean
    number?: boolean
    question_id?: boolean
  }

  export type ChoiceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Question?: boolean | QuestionDefaultArgs<ExtArgs>
    Answer?: boolean | Choice$AnswerArgs<ExtArgs>
    _count?: boolean | ChoiceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ChoiceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Question?: boolean | QuestionDefaultArgs<ExtArgs>
  }

  export type $ChoicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Choice"
    objects: {
      Question: Prisma.$QuestionPayload<ExtArgs>
      Answer: Prisma.$AnswerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      content: string
      number: number
      question_id: number
    }, ExtArgs["result"]["choice"]>
    composites: {}
  }

  type ChoiceGetPayload<S extends boolean | null | undefined | ChoiceDefaultArgs> = $Result.GetResult<Prisma.$ChoicePayload, S>

  type ChoiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ChoiceFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ChoiceCountAggregateInputType | true
    }

  export interface ChoiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Choice'], meta: { name: 'Choice' } }
    /**
     * Find zero or one Choice that matches the filter.
     * @param {ChoiceFindUniqueArgs} args - Arguments to find a Choice
     * @example
     * // Get one Choice
     * const choice = await prisma.choice.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChoiceFindUniqueArgs>(args: SelectSubset<T, ChoiceFindUniqueArgs<ExtArgs>>): Prisma__ChoiceClient<$Result.GetResult<Prisma.$ChoicePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Choice that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ChoiceFindUniqueOrThrowArgs} args - Arguments to find a Choice
     * @example
     * // Get one Choice
     * const choice = await prisma.choice.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChoiceFindUniqueOrThrowArgs>(args: SelectSubset<T, ChoiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChoiceClient<$Result.GetResult<Prisma.$ChoicePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Choice that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChoiceFindFirstArgs} args - Arguments to find a Choice
     * @example
     * // Get one Choice
     * const choice = await prisma.choice.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChoiceFindFirstArgs>(args?: SelectSubset<T, ChoiceFindFirstArgs<ExtArgs>>): Prisma__ChoiceClient<$Result.GetResult<Prisma.$ChoicePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Choice that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChoiceFindFirstOrThrowArgs} args - Arguments to find a Choice
     * @example
     * // Get one Choice
     * const choice = await prisma.choice.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChoiceFindFirstOrThrowArgs>(args?: SelectSubset<T, ChoiceFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChoiceClient<$Result.GetResult<Prisma.$ChoicePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Choices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChoiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Choices
     * const choices = await prisma.choice.findMany()
     * 
     * // Get first 10 Choices
     * const choices = await prisma.choice.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const choiceWithIdOnly = await prisma.choice.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChoiceFindManyArgs>(args?: SelectSubset<T, ChoiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChoicePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Choice.
     * @param {ChoiceCreateArgs} args - Arguments to create a Choice.
     * @example
     * // Create one Choice
     * const Choice = await prisma.choice.create({
     *   data: {
     *     // ... data to create a Choice
     *   }
     * })
     * 
     */
    create<T extends ChoiceCreateArgs>(args: SelectSubset<T, ChoiceCreateArgs<ExtArgs>>): Prisma__ChoiceClient<$Result.GetResult<Prisma.$ChoicePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Choices.
     * @param {ChoiceCreateManyArgs} args - Arguments to create many Choices.
     * @example
     * // Create many Choices
     * const choice = await prisma.choice.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChoiceCreateManyArgs>(args?: SelectSubset<T, ChoiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Choices and returns the data saved in the database.
     * @param {ChoiceCreateManyAndReturnArgs} args - Arguments to create many Choices.
     * @example
     * // Create many Choices
     * const choice = await prisma.choice.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Choices and only return the `id`
     * const choiceWithIdOnly = await prisma.choice.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChoiceCreateManyAndReturnArgs>(args?: SelectSubset<T, ChoiceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChoicePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Choice.
     * @param {ChoiceDeleteArgs} args - Arguments to delete one Choice.
     * @example
     * // Delete one Choice
     * const Choice = await prisma.choice.delete({
     *   where: {
     *     // ... filter to delete one Choice
     *   }
     * })
     * 
     */
    delete<T extends ChoiceDeleteArgs>(args: SelectSubset<T, ChoiceDeleteArgs<ExtArgs>>): Prisma__ChoiceClient<$Result.GetResult<Prisma.$ChoicePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Choice.
     * @param {ChoiceUpdateArgs} args - Arguments to update one Choice.
     * @example
     * // Update one Choice
     * const choice = await prisma.choice.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChoiceUpdateArgs>(args: SelectSubset<T, ChoiceUpdateArgs<ExtArgs>>): Prisma__ChoiceClient<$Result.GetResult<Prisma.$ChoicePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Choices.
     * @param {ChoiceDeleteManyArgs} args - Arguments to filter Choices to delete.
     * @example
     * // Delete a few Choices
     * const { count } = await prisma.choice.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChoiceDeleteManyArgs>(args?: SelectSubset<T, ChoiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Choices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChoiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Choices
     * const choice = await prisma.choice.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChoiceUpdateManyArgs>(args: SelectSubset<T, ChoiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Choice.
     * @param {ChoiceUpsertArgs} args - Arguments to update or create a Choice.
     * @example
     * // Update or create a Choice
     * const choice = await prisma.choice.upsert({
     *   create: {
     *     // ... data to create a Choice
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Choice we want to update
     *   }
     * })
     */
    upsert<T extends ChoiceUpsertArgs>(args: SelectSubset<T, ChoiceUpsertArgs<ExtArgs>>): Prisma__ChoiceClient<$Result.GetResult<Prisma.$ChoicePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Choices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChoiceCountArgs} args - Arguments to filter Choices to count.
     * @example
     * // Count the number of Choices
     * const count = await prisma.choice.count({
     *   where: {
     *     // ... the filter for the Choices we want to count
     *   }
     * })
    **/
    count<T extends ChoiceCountArgs>(
      args?: Subset<T, ChoiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChoiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Choice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChoiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChoiceAggregateArgs>(args: Subset<T, ChoiceAggregateArgs>): Prisma.PrismaPromise<GetChoiceAggregateType<T>>

    /**
     * Group by Choice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChoiceGroupByArgs} args - Group by arguments.
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
      T extends ChoiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChoiceGroupByArgs['orderBy'] }
        : { orderBy?: ChoiceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ChoiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChoiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Choice model
   */
  readonly fields: ChoiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Choice.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChoiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Question<T extends QuestionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuestionDefaultArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    Answer<T extends Choice$AnswerArgs<ExtArgs> = {}>(args?: Subset<T, Choice$AnswerArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Choice model
   */ 
  interface ChoiceFieldRefs {
    readonly id: FieldRef<"Choice", 'Int'>
    readonly content: FieldRef<"Choice", 'String'>
    readonly number: FieldRef<"Choice", 'Int'>
    readonly question_id: FieldRef<"Choice", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Choice findUnique
   */
  export type ChoiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Choice
     */
    select?: ChoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoiceInclude<ExtArgs> | null
    /**
     * Filter, which Choice to fetch.
     */
    where: ChoiceWhereUniqueInput
  }

  /**
   * Choice findUniqueOrThrow
   */
  export type ChoiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Choice
     */
    select?: ChoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoiceInclude<ExtArgs> | null
    /**
     * Filter, which Choice to fetch.
     */
    where: ChoiceWhereUniqueInput
  }

  /**
   * Choice findFirst
   */
  export type ChoiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Choice
     */
    select?: ChoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoiceInclude<ExtArgs> | null
    /**
     * Filter, which Choice to fetch.
     */
    where?: ChoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Choices to fetch.
     */
    orderBy?: ChoiceOrderByWithRelationInput | ChoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Choices.
     */
    cursor?: ChoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Choices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Choices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Choices.
     */
    distinct?: ChoiceScalarFieldEnum | ChoiceScalarFieldEnum[]
  }

  /**
   * Choice findFirstOrThrow
   */
  export type ChoiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Choice
     */
    select?: ChoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoiceInclude<ExtArgs> | null
    /**
     * Filter, which Choice to fetch.
     */
    where?: ChoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Choices to fetch.
     */
    orderBy?: ChoiceOrderByWithRelationInput | ChoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Choices.
     */
    cursor?: ChoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Choices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Choices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Choices.
     */
    distinct?: ChoiceScalarFieldEnum | ChoiceScalarFieldEnum[]
  }

  /**
   * Choice findMany
   */
  export type ChoiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Choice
     */
    select?: ChoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoiceInclude<ExtArgs> | null
    /**
     * Filter, which Choices to fetch.
     */
    where?: ChoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Choices to fetch.
     */
    orderBy?: ChoiceOrderByWithRelationInput | ChoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Choices.
     */
    cursor?: ChoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Choices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Choices.
     */
    skip?: number
    distinct?: ChoiceScalarFieldEnum | ChoiceScalarFieldEnum[]
  }

  /**
   * Choice create
   */
  export type ChoiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Choice
     */
    select?: ChoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoiceInclude<ExtArgs> | null
    /**
     * The data needed to create a Choice.
     */
    data: XOR<ChoiceCreateInput, ChoiceUncheckedCreateInput>
  }

  /**
   * Choice createMany
   */
  export type ChoiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Choices.
     */
    data: ChoiceCreateManyInput | ChoiceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Choice createManyAndReturn
   */
  export type ChoiceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Choice
     */
    select?: ChoiceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Choices.
     */
    data: ChoiceCreateManyInput | ChoiceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoiceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Choice update
   */
  export type ChoiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Choice
     */
    select?: ChoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoiceInclude<ExtArgs> | null
    /**
     * The data needed to update a Choice.
     */
    data: XOR<ChoiceUpdateInput, ChoiceUncheckedUpdateInput>
    /**
     * Choose, which Choice to update.
     */
    where: ChoiceWhereUniqueInput
  }

  /**
   * Choice updateMany
   */
  export type ChoiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Choices.
     */
    data: XOR<ChoiceUpdateManyMutationInput, ChoiceUncheckedUpdateManyInput>
    /**
     * Filter which Choices to update
     */
    where?: ChoiceWhereInput
  }

  /**
   * Choice upsert
   */
  export type ChoiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Choice
     */
    select?: ChoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoiceInclude<ExtArgs> | null
    /**
     * The filter to search for the Choice to update in case it exists.
     */
    where: ChoiceWhereUniqueInput
    /**
     * In case the Choice found by the `where` argument doesn't exist, create a new Choice with this data.
     */
    create: XOR<ChoiceCreateInput, ChoiceUncheckedCreateInput>
    /**
     * In case the Choice was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChoiceUpdateInput, ChoiceUncheckedUpdateInput>
  }

  /**
   * Choice delete
   */
  export type ChoiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Choice
     */
    select?: ChoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoiceInclude<ExtArgs> | null
    /**
     * Filter which Choice to delete.
     */
    where: ChoiceWhereUniqueInput
  }

  /**
   * Choice deleteMany
   */
  export type ChoiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Choices to delete
     */
    where?: ChoiceWhereInput
  }

  /**
   * Choice.Answer
   */
  export type Choice$AnswerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    where?: AnswerWhereInput
    orderBy?: AnswerOrderByWithRelationInput | AnswerOrderByWithRelationInput[]
    cursor?: AnswerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnswerScalarFieldEnum | AnswerScalarFieldEnum[]
  }

  /**
   * Choice without action
   */
  export type ChoiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Choice
     */
    select?: ChoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoiceInclude<ExtArgs> | null
  }


  /**
   * Model Question
   */

  export type AggregateQuestion = {
    _count: QuestionCountAggregateOutputType | null
    _avg: QuestionAvgAggregateOutputType | null
    _sum: QuestionSumAggregateOutputType | null
    _min: QuestionMinAggregateOutputType | null
    _max: QuestionMaxAggregateOutputType | null
  }

  export type QuestionAvgAggregateOutputType = {
    id: number | null
    accuracy_percentage: Decimal | null
  }

  export type QuestionSumAggregateOutputType = {
    id: number | null
    accuracy_percentage: Decimal | null
  }

  export type QuestionMinAggregateOutputType = {
    id: number | null
    content: string | null
    explanation: string | null
    accuracy_percentage: Decimal | null
  }

  export type QuestionMaxAggregateOutputType = {
    id: number | null
    content: string | null
    explanation: string | null
    accuracy_percentage: Decimal | null
  }

  export type QuestionCountAggregateOutputType = {
    id: number
    content: number
    explanation: number
    accuracy_percentage: number
    _all: number
  }


  export type QuestionAvgAggregateInputType = {
    id?: true
    accuracy_percentage?: true
  }

  export type QuestionSumAggregateInputType = {
    id?: true
    accuracy_percentage?: true
  }

  export type QuestionMinAggregateInputType = {
    id?: true
    content?: true
    explanation?: true
    accuracy_percentage?: true
  }

  export type QuestionMaxAggregateInputType = {
    id?: true
    content?: true
    explanation?: true
    accuracy_percentage?: true
  }

  export type QuestionCountAggregateInputType = {
    id?: true
    content?: true
    explanation?: true
    accuracy_percentage?: true
    _all?: true
  }

  export type QuestionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Question to aggregate.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Questions
    **/
    _count?: true | QuestionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuestionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuestionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuestionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuestionMaxAggregateInputType
  }

  export type GetQuestionAggregateType<T extends QuestionAggregateArgs> = {
        [P in keyof T & keyof AggregateQuestion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuestion[P]>
      : GetScalarType<T[P], AggregateQuestion[P]>
  }




  export type QuestionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionWhereInput
    orderBy?: QuestionOrderByWithAggregationInput | QuestionOrderByWithAggregationInput[]
    by: QuestionScalarFieldEnum[] | QuestionScalarFieldEnum
    having?: QuestionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuestionCountAggregateInputType | true
    _avg?: QuestionAvgAggregateInputType
    _sum?: QuestionSumAggregateInputType
    _min?: QuestionMinAggregateInputType
    _max?: QuestionMaxAggregateInputType
  }

  export type QuestionGroupByOutputType = {
    id: number
    content: string
    explanation: string
    accuracy_percentage: Decimal
    _count: QuestionCountAggregateOutputType | null
    _avg: QuestionAvgAggregateOutputType | null
    _sum: QuestionSumAggregateOutputType | null
    _min: QuestionMinAggregateOutputType | null
    _max: QuestionMaxAggregateOutputType | null
  }

  type GetQuestionGroupByPayload<T extends QuestionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuestionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuestionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuestionGroupByOutputType[P]>
            : GetScalarType<T[P], QuestionGroupByOutputType[P]>
        }
      >
    >


  export type QuestionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    explanation?: boolean
    accuracy_percentage?: boolean
    Choice?: boolean | Question$ChoiceArgs<ExtArgs>
    Study_Set_Questions_List?: boolean | Question$Study_Set_Questions_ListArgs<ExtArgs>
    Answer?: boolean | Question$AnswerArgs<ExtArgs>
    _count?: boolean | QuestionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["question"]>

  export type QuestionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    explanation?: boolean
    accuracy_percentage?: boolean
  }, ExtArgs["result"]["question"]>

  export type QuestionSelectScalar = {
    id?: boolean
    content?: boolean
    explanation?: boolean
    accuracy_percentage?: boolean
  }

  export type QuestionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Choice?: boolean | Question$ChoiceArgs<ExtArgs>
    Study_Set_Questions_List?: boolean | Question$Study_Set_Questions_ListArgs<ExtArgs>
    Answer?: boolean | Question$AnswerArgs<ExtArgs>
    _count?: boolean | QuestionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type QuestionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $QuestionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Question"
    objects: {
      Choice: Prisma.$ChoicePayload<ExtArgs>[]
      Study_Set_Questions_List: Prisma.$Study_Set_Questions_ListPayload<ExtArgs>[]
      Answer: Prisma.$AnswerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      content: string
      explanation: string
      accuracy_percentage: Prisma.Decimal
    }, ExtArgs["result"]["question"]>
    composites: {}
  }

  type QuestionGetPayload<S extends boolean | null | undefined | QuestionDefaultArgs> = $Result.GetResult<Prisma.$QuestionPayload, S>

  type QuestionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<QuestionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: QuestionCountAggregateInputType | true
    }

  export interface QuestionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Question'], meta: { name: 'Question' } }
    /**
     * Find zero or one Question that matches the filter.
     * @param {QuestionFindUniqueArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuestionFindUniqueArgs>(args: SelectSubset<T, QuestionFindUniqueArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Question that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {QuestionFindUniqueOrThrowArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuestionFindUniqueOrThrowArgs>(args: SelectSubset<T, QuestionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Question that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindFirstArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuestionFindFirstArgs>(args?: SelectSubset<T, QuestionFindFirstArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Question that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindFirstOrThrowArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuestionFindFirstOrThrowArgs>(args?: SelectSubset<T, QuestionFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Questions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Questions
     * const questions = await prisma.question.findMany()
     * 
     * // Get first 10 Questions
     * const questions = await prisma.question.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const questionWithIdOnly = await prisma.question.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuestionFindManyArgs>(args?: SelectSubset<T, QuestionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Question.
     * @param {QuestionCreateArgs} args - Arguments to create a Question.
     * @example
     * // Create one Question
     * const Question = await prisma.question.create({
     *   data: {
     *     // ... data to create a Question
     *   }
     * })
     * 
     */
    create<T extends QuestionCreateArgs>(args: SelectSubset<T, QuestionCreateArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Questions.
     * @param {QuestionCreateManyArgs} args - Arguments to create many Questions.
     * @example
     * // Create many Questions
     * const question = await prisma.question.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuestionCreateManyArgs>(args?: SelectSubset<T, QuestionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Questions and returns the data saved in the database.
     * @param {QuestionCreateManyAndReturnArgs} args - Arguments to create many Questions.
     * @example
     * // Create many Questions
     * const question = await prisma.question.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Questions and only return the `id`
     * const questionWithIdOnly = await prisma.question.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QuestionCreateManyAndReturnArgs>(args?: SelectSubset<T, QuestionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Question.
     * @param {QuestionDeleteArgs} args - Arguments to delete one Question.
     * @example
     * // Delete one Question
     * const Question = await prisma.question.delete({
     *   where: {
     *     // ... filter to delete one Question
     *   }
     * })
     * 
     */
    delete<T extends QuestionDeleteArgs>(args: SelectSubset<T, QuestionDeleteArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Question.
     * @param {QuestionUpdateArgs} args - Arguments to update one Question.
     * @example
     * // Update one Question
     * const question = await prisma.question.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuestionUpdateArgs>(args: SelectSubset<T, QuestionUpdateArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Questions.
     * @param {QuestionDeleteManyArgs} args - Arguments to filter Questions to delete.
     * @example
     * // Delete a few Questions
     * const { count } = await prisma.question.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuestionDeleteManyArgs>(args?: SelectSubset<T, QuestionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Questions
     * const question = await prisma.question.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuestionUpdateManyArgs>(args: SelectSubset<T, QuestionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Question.
     * @param {QuestionUpsertArgs} args - Arguments to update or create a Question.
     * @example
     * // Update or create a Question
     * const question = await prisma.question.upsert({
     *   create: {
     *     // ... data to create a Question
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Question we want to update
     *   }
     * })
     */
    upsert<T extends QuestionUpsertArgs>(args: SelectSubset<T, QuestionUpsertArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionCountArgs} args - Arguments to filter Questions to count.
     * @example
     * // Count the number of Questions
     * const count = await prisma.question.count({
     *   where: {
     *     // ... the filter for the Questions we want to count
     *   }
     * })
    **/
    count<T extends QuestionCountArgs>(
      args?: Subset<T, QuestionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuestionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Question.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuestionAggregateArgs>(args: Subset<T, QuestionAggregateArgs>): Prisma.PrismaPromise<GetQuestionAggregateType<T>>

    /**
     * Group by Question.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionGroupByArgs} args - Group by arguments.
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
      T extends QuestionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuestionGroupByArgs['orderBy'] }
        : { orderBy?: QuestionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, QuestionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuestionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Question model
   */
  readonly fields: QuestionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Question.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuestionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Choice<T extends Question$ChoiceArgs<ExtArgs> = {}>(args?: Subset<T, Question$ChoiceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChoicePayload<ExtArgs>, T, "findMany"> | Null>
    Study_Set_Questions_List<T extends Question$Study_Set_Questions_ListArgs<ExtArgs> = {}>(args?: Subset<T, Question$Study_Set_Questions_ListArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Study_Set_Questions_ListPayload<ExtArgs>, T, "findMany"> | Null>
    Answer<T extends Question$AnswerArgs<ExtArgs> = {}>(args?: Subset<T, Question$AnswerArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Question model
   */ 
  interface QuestionFieldRefs {
    readonly id: FieldRef<"Question", 'Int'>
    readonly content: FieldRef<"Question", 'String'>
    readonly explanation: FieldRef<"Question", 'String'>
    readonly accuracy_percentage: FieldRef<"Question", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * Question findUnique
   */
  export type QuestionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question findUniqueOrThrow
   */
  export type QuestionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question findFirst
   */
  export type QuestionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questions.
     */
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question findFirstOrThrow
   */
  export type QuestionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questions.
     */
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question findMany
   */
  export type QuestionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Questions to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question create
   */
  export type QuestionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The data needed to create a Question.
     */
    data: XOR<QuestionCreateInput, QuestionUncheckedCreateInput>
  }

  /**
   * Question createMany
   */
  export type QuestionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Questions.
     */
    data: QuestionCreateManyInput | QuestionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Question createManyAndReturn
   */
  export type QuestionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Questions.
     */
    data: QuestionCreateManyInput | QuestionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Question update
   */
  export type QuestionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The data needed to update a Question.
     */
    data: XOR<QuestionUpdateInput, QuestionUncheckedUpdateInput>
    /**
     * Choose, which Question to update.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question updateMany
   */
  export type QuestionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Questions.
     */
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyInput>
    /**
     * Filter which Questions to update
     */
    where?: QuestionWhereInput
  }

  /**
   * Question upsert
   */
  export type QuestionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The filter to search for the Question to update in case it exists.
     */
    where: QuestionWhereUniqueInput
    /**
     * In case the Question found by the `where` argument doesn't exist, create a new Question with this data.
     */
    create: XOR<QuestionCreateInput, QuestionUncheckedCreateInput>
    /**
     * In case the Question was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuestionUpdateInput, QuestionUncheckedUpdateInput>
  }

  /**
   * Question delete
   */
  export type QuestionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter which Question to delete.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question deleteMany
   */
  export type QuestionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Questions to delete
     */
    where?: QuestionWhereInput
  }

  /**
   * Question.Choice
   */
  export type Question$ChoiceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Choice
     */
    select?: ChoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoiceInclude<ExtArgs> | null
    where?: ChoiceWhereInput
    orderBy?: ChoiceOrderByWithRelationInput | ChoiceOrderByWithRelationInput[]
    cursor?: ChoiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChoiceScalarFieldEnum | ChoiceScalarFieldEnum[]
  }

  /**
   * Question.Study_Set_Questions_List
   */
  export type Question$Study_Set_Questions_ListArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Study_Set_Questions_List
     */
    select?: Study_Set_Questions_ListSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Study_Set_Questions_ListInclude<ExtArgs> | null
    where?: Study_Set_Questions_ListWhereInput
    orderBy?: Study_Set_Questions_ListOrderByWithRelationInput | Study_Set_Questions_ListOrderByWithRelationInput[]
    cursor?: Study_Set_Questions_ListWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Study_Set_Questions_ListScalarFieldEnum | Study_Set_Questions_ListScalarFieldEnum[]
  }

  /**
   * Question.Answer
   */
  export type Question$AnswerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    where?: AnswerWhereInput
    orderBy?: AnswerOrderByWithRelationInput | AnswerOrderByWithRelationInput[]
    cursor?: AnswerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnswerScalarFieldEnum | AnswerScalarFieldEnum[]
  }

  /**
   * Question without action
   */
  export type QuestionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
  }


  /**
   * Model Answer
   */

  export type AggregateAnswer = {
    _count: AnswerCountAggregateOutputType | null
    _avg: AnswerAvgAggregateOutputType | null
    _sum: AnswerSumAggregateOutputType | null
    _min: AnswerMinAggregateOutputType | null
    _max: AnswerMaxAggregateOutputType | null
  }

  export type AnswerAvgAggregateOutputType = {
    question_id: number | null
    choice_id: number | null
  }

  export type AnswerSumAggregateOutputType = {
    question_id: number | null
    choice_id: number | null
  }

  export type AnswerMinAggregateOutputType = {
    question_id: number | null
    choice_id: number | null
  }

  export type AnswerMaxAggregateOutputType = {
    question_id: number | null
    choice_id: number | null
  }

  export type AnswerCountAggregateOutputType = {
    question_id: number
    choice_id: number
    _all: number
  }


  export type AnswerAvgAggregateInputType = {
    question_id?: true
    choice_id?: true
  }

  export type AnswerSumAggregateInputType = {
    question_id?: true
    choice_id?: true
  }

  export type AnswerMinAggregateInputType = {
    question_id?: true
    choice_id?: true
  }

  export type AnswerMaxAggregateInputType = {
    question_id?: true
    choice_id?: true
  }

  export type AnswerCountAggregateInputType = {
    question_id?: true
    choice_id?: true
    _all?: true
  }

  export type AnswerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Answer to aggregate.
     */
    where?: AnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Answers to fetch.
     */
    orderBy?: AnswerOrderByWithRelationInput | AnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Answers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Answers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Answers
    **/
    _count?: true | AnswerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AnswerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AnswerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnswerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnswerMaxAggregateInputType
  }

  export type GetAnswerAggregateType<T extends AnswerAggregateArgs> = {
        [P in keyof T & keyof AggregateAnswer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnswer[P]>
      : GetScalarType<T[P], AggregateAnswer[P]>
  }




  export type AnswerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnswerWhereInput
    orderBy?: AnswerOrderByWithAggregationInput | AnswerOrderByWithAggregationInput[]
    by: AnswerScalarFieldEnum[] | AnswerScalarFieldEnum
    having?: AnswerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnswerCountAggregateInputType | true
    _avg?: AnswerAvgAggregateInputType
    _sum?: AnswerSumAggregateInputType
    _min?: AnswerMinAggregateInputType
    _max?: AnswerMaxAggregateInputType
  }

  export type AnswerGroupByOutputType = {
    question_id: number
    choice_id: number
    _count: AnswerCountAggregateOutputType | null
    _avg: AnswerAvgAggregateOutputType | null
    _sum: AnswerSumAggregateOutputType | null
    _min: AnswerMinAggregateOutputType | null
    _max: AnswerMaxAggregateOutputType | null
  }

  type GetAnswerGroupByPayload<T extends AnswerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnswerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnswerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnswerGroupByOutputType[P]>
            : GetScalarType<T[P], AnswerGroupByOutputType[P]>
        }
      >
    >


  export type AnswerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    question_id?: boolean
    choice_id?: boolean
    Question?: boolean | QuestionDefaultArgs<ExtArgs>
    Choice?: boolean | ChoiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["answer"]>

  export type AnswerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    question_id?: boolean
    choice_id?: boolean
    Question?: boolean | QuestionDefaultArgs<ExtArgs>
    Choice?: boolean | ChoiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["answer"]>

  export type AnswerSelectScalar = {
    question_id?: boolean
    choice_id?: boolean
  }

  export type AnswerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Question?: boolean | QuestionDefaultArgs<ExtArgs>
    Choice?: boolean | ChoiceDefaultArgs<ExtArgs>
  }
  export type AnswerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Question?: boolean | QuestionDefaultArgs<ExtArgs>
    Choice?: boolean | ChoiceDefaultArgs<ExtArgs>
  }

  export type $AnswerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Answer"
    objects: {
      Question: Prisma.$QuestionPayload<ExtArgs>
      Choice: Prisma.$ChoicePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      question_id: number
      choice_id: number
    }, ExtArgs["result"]["answer"]>
    composites: {}
  }

  type AnswerGetPayload<S extends boolean | null | undefined | AnswerDefaultArgs> = $Result.GetResult<Prisma.$AnswerPayload, S>

  type AnswerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AnswerFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AnswerCountAggregateInputType | true
    }

  export interface AnswerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Answer'], meta: { name: 'Answer' } }
    /**
     * Find zero or one Answer that matches the filter.
     * @param {AnswerFindUniqueArgs} args - Arguments to find a Answer
     * @example
     * // Get one Answer
     * const answer = await prisma.answer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AnswerFindUniqueArgs>(args: SelectSubset<T, AnswerFindUniqueArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Answer that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AnswerFindUniqueOrThrowArgs} args - Arguments to find a Answer
     * @example
     * // Get one Answer
     * const answer = await prisma.answer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AnswerFindUniqueOrThrowArgs>(args: SelectSubset<T, AnswerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Answer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerFindFirstArgs} args - Arguments to find a Answer
     * @example
     * // Get one Answer
     * const answer = await prisma.answer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AnswerFindFirstArgs>(args?: SelectSubset<T, AnswerFindFirstArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Answer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerFindFirstOrThrowArgs} args - Arguments to find a Answer
     * @example
     * // Get one Answer
     * const answer = await prisma.answer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AnswerFindFirstOrThrowArgs>(args?: SelectSubset<T, AnswerFindFirstOrThrowArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Answers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Answers
     * const answers = await prisma.answer.findMany()
     * 
     * // Get first 10 Answers
     * const answers = await prisma.answer.findMany({ take: 10 })
     * 
     * // Only select the `question_id`
     * const answerWithQuestion_idOnly = await prisma.answer.findMany({ select: { question_id: true } })
     * 
     */
    findMany<T extends AnswerFindManyArgs>(args?: SelectSubset<T, AnswerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Answer.
     * @param {AnswerCreateArgs} args - Arguments to create a Answer.
     * @example
     * // Create one Answer
     * const Answer = await prisma.answer.create({
     *   data: {
     *     // ... data to create a Answer
     *   }
     * })
     * 
     */
    create<T extends AnswerCreateArgs>(args: SelectSubset<T, AnswerCreateArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Answers.
     * @param {AnswerCreateManyArgs} args - Arguments to create many Answers.
     * @example
     * // Create many Answers
     * const answer = await prisma.answer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AnswerCreateManyArgs>(args?: SelectSubset<T, AnswerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Answers and returns the data saved in the database.
     * @param {AnswerCreateManyAndReturnArgs} args - Arguments to create many Answers.
     * @example
     * // Create many Answers
     * const answer = await prisma.answer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Answers and only return the `question_id`
     * const answerWithQuestion_idOnly = await prisma.answer.createManyAndReturn({ 
     *   select: { question_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AnswerCreateManyAndReturnArgs>(args?: SelectSubset<T, AnswerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Answer.
     * @param {AnswerDeleteArgs} args - Arguments to delete one Answer.
     * @example
     * // Delete one Answer
     * const Answer = await prisma.answer.delete({
     *   where: {
     *     // ... filter to delete one Answer
     *   }
     * })
     * 
     */
    delete<T extends AnswerDeleteArgs>(args: SelectSubset<T, AnswerDeleteArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Answer.
     * @param {AnswerUpdateArgs} args - Arguments to update one Answer.
     * @example
     * // Update one Answer
     * const answer = await prisma.answer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AnswerUpdateArgs>(args: SelectSubset<T, AnswerUpdateArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Answers.
     * @param {AnswerDeleteManyArgs} args - Arguments to filter Answers to delete.
     * @example
     * // Delete a few Answers
     * const { count } = await prisma.answer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AnswerDeleteManyArgs>(args?: SelectSubset<T, AnswerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Answers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Answers
     * const answer = await prisma.answer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AnswerUpdateManyArgs>(args: SelectSubset<T, AnswerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Answer.
     * @param {AnswerUpsertArgs} args - Arguments to update or create a Answer.
     * @example
     * // Update or create a Answer
     * const answer = await prisma.answer.upsert({
     *   create: {
     *     // ... data to create a Answer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Answer we want to update
     *   }
     * })
     */
    upsert<T extends AnswerUpsertArgs>(args: SelectSubset<T, AnswerUpsertArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Answers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerCountArgs} args - Arguments to filter Answers to count.
     * @example
     * // Count the number of Answers
     * const count = await prisma.answer.count({
     *   where: {
     *     // ... the filter for the Answers we want to count
     *   }
     * })
    **/
    count<T extends AnswerCountArgs>(
      args?: Subset<T, AnswerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnswerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Answer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AnswerAggregateArgs>(args: Subset<T, AnswerAggregateArgs>): Prisma.PrismaPromise<GetAnswerAggregateType<T>>

    /**
     * Group by Answer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerGroupByArgs} args - Group by arguments.
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
      T extends AnswerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnswerGroupByArgs['orderBy'] }
        : { orderBy?: AnswerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AnswerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnswerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Answer model
   */
  readonly fields: AnswerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Answer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AnswerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Question<T extends QuestionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuestionDefaultArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    Choice<T extends ChoiceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChoiceDefaultArgs<ExtArgs>>): Prisma__ChoiceClient<$Result.GetResult<Prisma.$ChoicePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the Answer model
   */ 
  interface AnswerFieldRefs {
    readonly question_id: FieldRef<"Answer", 'Int'>
    readonly choice_id: FieldRef<"Answer", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Answer findUnique
   */
  export type AnswerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * Filter, which Answer to fetch.
     */
    where: AnswerWhereUniqueInput
  }

  /**
   * Answer findUniqueOrThrow
   */
  export type AnswerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * Filter, which Answer to fetch.
     */
    where: AnswerWhereUniqueInput
  }

  /**
   * Answer findFirst
   */
  export type AnswerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * Filter, which Answer to fetch.
     */
    where?: AnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Answers to fetch.
     */
    orderBy?: AnswerOrderByWithRelationInput | AnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Answers.
     */
    cursor?: AnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Answers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Answers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Answers.
     */
    distinct?: AnswerScalarFieldEnum | AnswerScalarFieldEnum[]
  }

  /**
   * Answer findFirstOrThrow
   */
  export type AnswerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * Filter, which Answer to fetch.
     */
    where?: AnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Answers to fetch.
     */
    orderBy?: AnswerOrderByWithRelationInput | AnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Answers.
     */
    cursor?: AnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Answers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Answers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Answers.
     */
    distinct?: AnswerScalarFieldEnum | AnswerScalarFieldEnum[]
  }

  /**
   * Answer findMany
   */
  export type AnswerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * Filter, which Answers to fetch.
     */
    where?: AnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Answers to fetch.
     */
    orderBy?: AnswerOrderByWithRelationInput | AnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Answers.
     */
    cursor?: AnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Answers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Answers.
     */
    skip?: number
    distinct?: AnswerScalarFieldEnum | AnswerScalarFieldEnum[]
  }

  /**
   * Answer create
   */
  export type AnswerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * The data needed to create a Answer.
     */
    data: XOR<AnswerCreateInput, AnswerUncheckedCreateInput>
  }

  /**
   * Answer createMany
   */
  export type AnswerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Answers.
     */
    data: AnswerCreateManyInput | AnswerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Answer createManyAndReturn
   */
  export type AnswerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Answers.
     */
    data: AnswerCreateManyInput | AnswerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Answer update
   */
  export type AnswerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * The data needed to update a Answer.
     */
    data: XOR<AnswerUpdateInput, AnswerUncheckedUpdateInput>
    /**
     * Choose, which Answer to update.
     */
    where: AnswerWhereUniqueInput
  }

  /**
   * Answer updateMany
   */
  export type AnswerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Answers.
     */
    data: XOR<AnswerUpdateManyMutationInput, AnswerUncheckedUpdateManyInput>
    /**
     * Filter which Answers to update
     */
    where?: AnswerWhereInput
  }

  /**
   * Answer upsert
   */
  export type AnswerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * The filter to search for the Answer to update in case it exists.
     */
    where: AnswerWhereUniqueInput
    /**
     * In case the Answer found by the `where` argument doesn't exist, create a new Answer with this data.
     */
    create: XOR<AnswerCreateInput, AnswerUncheckedCreateInput>
    /**
     * In case the Answer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnswerUpdateInput, AnswerUncheckedUpdateInput>
  }

  /**
   * Answer delete
   */
  export type AnswerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * Filter which Answer to delete.
     */
    where: AnswerWhereUniqueInput
  }

  /**
   * Answer deleteMany
   */
  export type AnswerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Answers to delete
     */
    where?: AnswerWhereInput
  }

  /**
   * Answer without action
   */
  export type AnswerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
  }


  /**
   * Model Study_Set
   */

  export type AggregateStudy_Set = {
    _count: Study_SetCountAggregateOutputType | null
    _avg: Study_SetAvgAggregateOutputType | null
    _sum: Study_SetSumAggregateOutputType | null
    _min: Study_SetMinAggregateOutputType | null
    _max: Study_SetMaxAggregateOutputType | null
  }

  export type Study_SetAvgAggregateOutputType = {
    id: number | null
  }

  export type Study_SetSumAggregateOutputType = {
    id: number | null
  }

  export type Study_SetMinAggregateOutputType = {
    id: number | null
    stage: string | null
    label: string | null
  }

  export type Study_SetMaxAggregateOutputType = {
    id: number | null
    stage: string | null
    label: string | null
  }

  export type Study_SetCountAggregateOutputType = {
    id: number
    stage: number
    label: number
    _all: number
  }


  export type Study_SetAvgAggregateInputType = {
    id?: true
  }

  export type Study_SetSumAggregateInputType = {
    id?: true
  }

  export type Study_SetMinAggregateInputType = {
    id?: true
    stage?: true
    label?: true
  }

  export type Study_SetMaxAggregateInputType = {
    id?: true
    stage?: true
    label?: true
  }

  export type Study_SetCountAggregateInputType = {
    id?: true
    stage?: true
    label?: true
    _all?: true
  }

  export type Study_SetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Study_Set to aggregate.
     */
    where?: Study_SetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Study_Sets to fetch.
     */
    orderBy?: Study_SetOrderByWithRelationInput | Study_SetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Study_SetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Study_Sets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Study_Sets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Study_Sets
    **/
    _count?: true | Study_SetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Study_SetAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Study_SetSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Study_SetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Study_SetMaxAggregateInputType
  }

  export type GetStudy_SetAggregateType<T extends Study_SetAggregateArgs> = {
        [P in keyof T & keyof AggregateStudy_Set]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudy_Set[P]>
      : GetScalarType<T[P], AggregateStudy_Set[P]>
  }




  export type Study_SetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Study_SetWhereInput
    orderBy?: Study_SetOrderByWithAggregationInput | Study_SetOrderByWithAggregationInput[]
    by: Study_SetScalarFieldEnum[] | Study_SetScalarFieldEnum
    having?: Study_SetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Study_SetCountAggregateInputType | true
    _avg?: Study_SetAvgAggregateInputType
    _sum?: Study_SetSumAggregateInputType
    _min?: Study_SetMinAggregateInputType
    _max?: Study_SetMaxAggregateInputType
  }

  export type Study_SetGroupByOutputType = {
    id: number
    stage: string
    label: string
    _count: Study_SetCountAggregateOutputType | null
    _avg: Study_SetAvgAggregateOutputType | null
    _sum: Study_SetSumAggregateOutputType | null
    _min: Study_SetMinAggregateOutputType | null
    _max: Study_SetMaxAggregateOutputType | null
  }

  type GetStudy_SetGroupByPayload<T extends Study_SetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Study_SetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Study_SetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Study_SetGroupByOutputType[P]>
            : GetScalarType<T[P], Study_SetGroupByOutputType[P]>
        }
      >
    >


  export type Study_SetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    stage?: boolean
    label?: boolean
    Study_Set_Questions_List?: boolean | Study_Set$Study_Set_Questions_ListArgs<ExtArgs>
    _count?: boolean | Study_SetCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["study_Set"]>

  export type Study_SetSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    stage?: boolean
    label?: boolean
  }, ExtArgs["result"]["study_Set"]>

  export type Study_SetSelectScalar = {
    id?: boolean
    stage?: boolean
    label?: boolean
  }

  export type Study_SetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Study_Set_Questions_List?: boolean | Study_Set$Study_Set_Questions_ListArgs<ExtArgs>
    _count?: boolean | Study_SetCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type Study_SetIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $Study_SetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Study_Set"
    objects: {
      Study_Set_Questions_List: Prisma.$Study_Set_Questions_ListPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      stage: string
      label: string
    }, ExtArgs["result"]["study_Set"]>
    composites: {}
  }

  type Study_SetGetPayload<S extends boolean | null | undefined | Study_SetDefaultArgs> = $Result.GetResult<Prisma.$Study_SetPayload, S>

  type Study_SetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<Study_SetFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Study_SetCountAggregateInputType | true
    }

  export interface Study_SetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Study_Set'], meta: { name: 'Study_Set' } }
    /**
     * Find zero or one Study_Set that matches the filter.
     * @param {Study_SetFindUniqueArgs} args - Arguments to find a Study_Set
     * @example
     * // Get one Study_Set
     * const study_Set = await prisma.study_Set.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Study_SetFindUniqueArgs>(args: SelectSubset<T, Study_SetFindUniqueArgs<ExtArgs>>): Prisma__Study_SetClient<$Result.GetResult<Prisma.$Study_SetPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Study_Set that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {Study_SetFindUniqueOrThrowArgs} args - Arguments to find a Study_Set
     * @example
     * // Get one Study_Set
     * const study_Set = await prisma.study_Set.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Study_SetFindUniqueOrThrowArgs>(args: SelectSubset<T, Study_SetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Study_SetClient<$Result.GetResult<Prisma.$Study_SetPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Study_Set that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Study_SetFindFirstArgs} args - Arguments to find a Study_Set
     * @example
     * // Get one Study_Set
     * const study_Set = await prisma.study_Set.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Study_SetFindFirstArgs>(args?: SelectSubset<T, Study_SetFindFirstArgs<ExtArgs>>): Prisma__Study_SetClient<$Result.GetResult<Prisma.$Study_SetPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Study_Set that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Study_SetFindFirstOrThrowArgs} args - Arguments to find a Study_Set
     * @example
     * // Get one Study_Set
     * const study_Set = await prisma.study_Set.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Study_SetFindFirstOrThrowArgs>(args?: SelectSubset<T, Study_SetFindFirstOrThrowArgs<ExtArgs>>): Prisma__Study_SetClient<$Result.GetResult<Prisma.$Study_SetPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Study_Sets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Study_SetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Study_Sets
     * const study_Sets = await prisma.study_Set.findMany()
     * 
     * // Get first 10 Study_Sets
     * const study_Sets = await prisma.study_Set.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const study_SetWithIdOnly = await prisma.study_Set.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Study_SetFindManyArgs>(args?: SelectSubset<T, Study_SetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Study_SetPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Study_Set.
     * @param {Study_SetCreateArgs} args - Arguments to create a Study_Set.
     * @example
     * // Create one Study_Set
     * const Study_Set = await prisma.study_Set.create({
     *   data: {
     *     // ... data to create a Study_Set
     *   }
     * })
     * 
     */
    create<T extends Study_SetCreateArgs>(args: SelectSubset<T, Study_SetCreateArgs<ExtArgs>>): Prisma__Study_SetClient<$Result.GetResult<Prisma.$Study_SetPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Study_Sets.
     * @param {Study_SetCreateManyArgs} args - Arguments to create many Study_Sets.
     * @example
     * // Create many Study_Sets
     * const study_Set = await prisma.study_Set.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Study_SetCreateManyArgs>(args?: SelectSubset<T, Study_SetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Study_Sets and returns the data saved in the database.
     * @param {Study_SetCreateManyAndReturnArgs} args - Arguments to create many Study_Sets.
     * @example
     * // Create many Study_Sets
     * const study_Set = await prisma.study_Set.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Study_Sets and only return the `id`
     * const study_SetWithIdOnly = await prisma.study_Set.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Study_SetCreateManyAndReturnArgs>(args?: SelectSubset<T, Study_SetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Study_SetPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Study_Set.
     * @param {Study_SetDeleteArgs} args - Arguments to delete one Study_Set.
     * @example
     * // Delete one Study_Set
     * const Study_Set = await prisma.study_Set.delete({
     *   where: {
     *     // ... filter to delete one Study_Set
     *   }
     * })
     * 
     */
    delete<T extends Study_SetDeleteArgs>(args: SelectSubset<T, Study_SetDeleteArgs<ExtArgs>>): Prisma__Study_SetClient<$Result.GetResult<Prisma.$Study_SetPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Study_Set.
     * @param {Study_SetUpdateArgs} args - Arguments to update one Study_Set.
     * @example
     * // Update one Study_Set
     * const study_Set = await prisma.study_Set.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Study_SetUpdateArgs>(args: SelectSubset<T, Study_SetUpdateArgs<ExtArgs>>): Prisma__Study_SetClient<$Result.GetResult<Prisma.$Study_SetPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Study_Sets.
     * @param {Study_SetDeleteManyArgs} args - Arguments to filter Study_Sets to delete.
     * @example
     * // Delete a few Study_Sets
     * const { count } = await prisma.study_Set.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Study_SetDeleteManyArgs>(args?: SelectSubset<T, Study_SetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Study_Sets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Study_SetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Study_Sets
     * const study_Set = await prisma.study_Set.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Study_SetUpdateManyArgs>(args: SelectSubset<T, Study_SetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Study_Set.
     * @param {Study_SetUpsertArgs} args - Arguments to update or create a Study_Set.
     * @example
     * // Update or create a Study_Set
     * const study_Set = await prisma.study_Set.upsert({
     *   create: {
     *     // ... data to create a Study_Set
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Study_Set we want to update
     *   }
     * })
     */
    upsert<T extends Study_SetUpsertArgs>(args: SelectSubset<T, Study_SetUpsertArgs<ExtArgs>>): Prisma__Study_SetClient<$Result.GetResult<Prisma.$Study_SetPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Study_Sets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Study_SetCountArgs} args - Arguments to filter Study_Sets to count.
     * @example
     * // Count the number of Study_Sets
     * const count = await prisma.study_Set.count({
     *   where: {
     *     // ... the filter for the Study_Sets we want to count
     *   }
     * })
    **/
    count<T extends Study_SetCountArgs>(
      args?: Subset<T, Study_SetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Study_SetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Study_Set.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Study_SetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Study_SetAggregateArgs>(args: Subset<T, Study_SetAggregateArgs>): Prisma.PrismaPromise<GetStudy_SetAggregateType<T>>

    /**
     * Group by Study_Set.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Study_SetGroupByArgs} args - Group by arguments.
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
      T extends Study_SetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Study_SetGroupByArgs['orderBy'] }
        : { orderBy?: Study_SetGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Study_SetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudy_SetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Study_Set model
   */
  readonly fields: Study_SetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Study_Set.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Study_SetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Study_Set_Questions_List<T extends Study_Set$Study_Set_Questions_ListArgs<ExtArgs> = {}>(args?: Subset<T, Study_Set$Study_Set_Questions_ListArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Study_Set_Questions_ListPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Study_Set model
   */ 
  interface Study_SetFieldRefs {
    readonly id: FieldRef<"Study_Set", 'Int'>
    readonly stage: FieldRef<"Study_Set", 'String'>
    readonly label: FieldRef<"Study_Set", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Study_Set findUnique
   */
  export type Study_SetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Study_Set
     */
    select?: Study_SetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Study_SetInclude<ExtArgs> | null
    /**
     * Filter, which Study_Set to fetch.
     */
    where: Study_SetWhereUniqueInput
  }

  /**
   * Study_Set findUniqueOrThrow
   */
  export type Study_SetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Study_Set
     */
    select?: Study_SetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Study_SetInclude<ExtArgs> | null
    /**
     * Filter, which Study_Set to fetch.
     */
    where: Study_SetWhereUniqueInput
  }

  /**
   * Study_Set findFirst
   */
  export type Study_SetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Study_Set
     */
    select?: Study_SetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Study_SetInclude<ExtArgs> | null
    /**
     * Filter, which Study_Set to fetch.
     */
    where?: Study_SetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Study_Sets to fetch.
     */
    orderBy?: Study_SetOrderByWithRelationInput | Study_SetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Study_Sets.
     */
    cursor?: Study_SetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Study_Sets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Study_Sets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Study_Sets.
     */
    distinct?: Study_SetScalarFieldEnum | Study_SetScalarFieldEnum[]
  }

  /**
   * Study_Set findFirstOrThrow
   */
  export type Study_SetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Study_Set
     */
    select?: Study_SetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Study_SetInclude<ExtArgs> | null
    /**
     * Filter, which Study_Set to fetch.
     */
    where?: Study_SetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Study_Sets to fetch.
     */
    orderBy?: Study_SetOrderByWithRelationInput | Study_SetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Study_Sets.
     */
    cursor?: Study_SetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Study_Sets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Study_Sets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Study_Sets.
     */
    distinct?: Study_SetScalarFieldEnum | Study_SetScalarFieldEnum[]
  }

  /**
   * Study_Set findMany
   */
  export type Study_SetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Study_Set
     */
    select?: Study_SetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Study_SetInclude<ExtArgs> | null
    /**
     * Filter, which Study_Sets to fetch.
     */
    where?: Study_SetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Study_Sets to fetch.
     */
    orderBy?: Study_SetOrderByWithRelationInput | Study_SetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Study_Sets.
     */
    cursor?: Study_SetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Study_Sets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Study_Sets.
     */
    skip?: number
    distinct?: Study_SetScalarFieldEnum | Study_SetScalarFieldEnum[]
  }

  /**
   * Study_Set create
   */
  export type Study_SetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Study_Set
     */
    select?: Study_SetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Study_SetInclude<ExtArgs> | null
    /**
     * The data needed to create a Study_Set.
     */
    data: XOR<Study_SetCreateInput, Study_SetUncheckedCreateInput>
  }

  /**
   * Study_Set createMany
   */
  export type Study_SetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Study_Sets.
     */
    data: Study_SetCreateManyInput | Study_SetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Study_Set createManyAndReturn
   */
  export type Study_SetCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Study_Set
     */
    select?: Study_SetSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Study_Sets.
     */
    data: Study_SetCreateManyInput | Study_SetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Study_Set update
   */
  export type Study_SetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Study_Set
     */
    select?: Study_SetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Study_SetInclude<ExtArgs> | null
    /**
     * The data needed to update a Study_Set.
     */
    data: XOR<Study_SetUpdateInput, Study_SetUncheckedUpdateInput>
    /**
     * Choose, which Study_Set to update.
     */
    where: Study_SetWhereUniqueInput
  }

  /**
   * Study_Set updateMany
   */
  export type Study_SetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Study_Sets.
     */
    data: XOR<Study_SetUpdateManyMutationInput, Study_SetUncheckedUpdateManyInput>
    /**
     * Filter which Study_Sets to update
     */
    where?: Study_SetWhereInput
  }

  /**
   * Study_Set upsert
   */
  export type Study_SetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Study_Set
     */
    select?: Study_SetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Study_SetInclude<ExtArgs> | null
    /**
     * The filter to search for the Study_Set to update in case it exists.
     */
    where: Study_SetWhereUniqueInput
    /**
     * In case the Study_Set found by the `where` argument doesn't exist, create a new Study_Set with this data.
     */
    create: XOR<Study_SetCreateInput, Study_SetUncheckedCreateInput>
    /**
     * In case the Study_Set was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Study_SetUpdateInput, Study_SetUncheckedUpdateInput>
  }

  /**
   * Study_Set delete
   */
  export type Study_SetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Study_Set
     */
    select?: Study_SetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Study_SetInclude<ExtArgs> | null
    /**
     * Filter which Study_Set to delete.
     */
    where: Study_SetWhereUniqueInput
  }

  /**
   * Study_Set deleteMany
   */
  export type Study_SetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Study_Sets to delete
     */
    where?: Study_SetWhereInput
  }

  /**
   * Study_Set.Study_Set_Questions_List
   */
  export type Study_Set$Study_Set_Questions_ListArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Study_Set_Questions_List
     */
    select?: Study_Set_Questions_ListSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Study_Set_Questions_ListInclude<ExtArgs> | null
    where?: Study_Set_Questions_ListWhereInput
    orderBy?: Study_Set_Questions_ListOrderByWithRelationInput | Study_Set_Questions_ListOrderByWithRelationInput[]
    cursor?: Study_Set_Questions_ListWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Study_Set_Questions_ListScalarFieldEnum | Study_Set_Questions_ListScalarFieldEnum[]
  }

  /**
   * Study_Set without action
   */
  export type Study_SetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Study_Set
     */
    select?: Study_SetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Study_SetInclude<ExtArgs> | null
  }


  /**
   * Model Study_Set_Questions_List
   */

  export type AggregateStudy_Set_Questions_List = {
    _count: Study_Set_Questions_ListCountAggregateOutputType | null
    _avg: Study_Set_Questions_ListAvgAggregateOutputType | null
    _sum: Study_Set_Questions_ListSumAggregateOutputType | null
    _min: Study_Set_Questions_ListMinAggregateOutputType | null
    _max: Study_Set_Questions_ListMaxAggregateOutputType | null
  }

  export type Study_Set_Questions_ListAvgAggregateOutputType = {
    id: number | null
    question_id: number | null
    studyset_id: number | null
  }

  export type Study_Set_Questions_ListSumAggregateOutputType = {
    id: number | null
    question_id: number | null
    studyset_id: number | null
  }

  export type Study_Set_Questions_ListMinAggregateOutputType = {
    id: number | null
    question_id: number | null
    studyset_id: number | null
  }

  export type Study_Set_Questions_ListMaxAggregateOutputType = {
    id: number | null
    question_id: number | null
    studyset_id: number | null
  }

  export type Study_Set_Questions_ListCountAggregateOutputType = {
    id: number
    question_id: number
    studyset_id: number
    _all: number
  }


  export type Study_Set_Questions_ListAvgAggregateInputType = {
    id?: true
    question_id?: true
    studyset_id?: true
  }

  export type Study_Set_Questions_ListSumAggregateInputType = {
    id?: true
    question_id?: true
    studyset_id?: true
  }

  export type Study_Set_Questions_ListMinAggregateInputType = {
    id?: true
    question_id?: true
    studyset_id?: true
  }

  export type Study_Set_Questions_ListMaxAggregateInputType = {
    id?: true
    question_id?: true
    studyset_id?: true
  }

  export type Study_Set_Questions_ListCountAggregateInputType = {
    id?: true
    question_id?: true
    studyset_id?: true
    _all?: true
  }

  export type Study_Set_Questions_ListAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Study_Set_Questions_List to aggregate.
     */
    where?: Study_Set_Questions_ListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Study_Set_Questions_Lists to fetch.
     */
    orderBy?: Study_Set_Questions_ListOrderByWithRelationInput | Study_Set_Questions_ListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Study_Set_Questions_ListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Study_Set_Questions_Lists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Study_Set_Questions_Lists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Study_Set_Questions_Lists
    **/
    _count?: true | Study_Set_Questions_ListCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Study_Set_Questions_ListAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Study_Set_Questions_ListSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Study_Set_Questions_ListMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Study_Set_Questions_ListMaxAggregateInputType
  }

  export type GetStudy_Set_Questions_ListAggregateType<T extends Study_Set_Questions_ListAggregateArgs> = {
        [P in keyof T & keyof AggregateStudy_Set_Questions_List]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudy_Set_Questions_List[P]>
      : GetScalarType<T[P], AggregateStudy_Set_Questions_List[P]>
  }




  export type Study_Set_Questions_ListGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Study_Set_Questions_ListWhereInput
    orderBy?: Study_Set_Questions_ListOrderByWithAggregationInput | Study_Set_Questions_ListOrderByWithAggregationInput[]
    by: Study_Set_Questions_ListScalarFieldEnum[] | Study_Set_Questions_ListScalarFieldEnum
    having?: Study_Set_Questions_ListScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Study_Set_Questions_ListCountAggregateInputType | true
    _avg?: Study_Set_Questions_ListAvgAggregateInputType
    _sum?: Study_Set_Questions_ListSumAggregateInputType
    _min?: Study_Set_Questions_ListMinAggregateInputType
    _max?: Study_Set_Questions_ListMaxAggregateInputType
  }

  export type Study_Set_Questions_ListGroupByOutputType = {
    id: number
    question_id: number
    studyset_id: number | null
    _count: Study_Set_Questions_ListCountAggregateOutputType | null
    _avg: Study_Set_Questions_ListAvgAggregateOutputType | null
    _sum: Study_Set_Questions_ListSumAggregateOutputType | null
    _min: Study_Set_Questions_ListMinAggregateOutputType | null
    _max: Study_Set_Questions_ListMaxAggregateOutputType | null
  }

  type GetStudy_Set_Questions_ListGroupByPayload<T extends Study_Set_Questions_ListGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Study_Set_Questions_ListGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Study_Set_Questions_ListGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Study_Set_Questions_ListGroupByOutputType[P]>
            : GetScalarType<T[P], Study_Set_Questions_ListGroupByOutputType[P]>
        }
      >
    >


  export type Study_Set_Questions_ListSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    question_id?: boolean
    studyset_id?: boolean
    Question?: boolean | QuestionDefaultArgs<ExtArgs>
    Study_Set?: boolean | Study_Set_Questions_List$Study_SetArgs<ExtArgs>
  }, ExtArgs["result"]["study_Set_Questions_List"]>

  export type Study_Set_Questions_ListSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    question_id?: boolean
    studyset_id?: boolean
    Question?: boolean | QuestionDefaultArgs<ExtArgs>
    Study_Set?: boolean | Study_Set_Questions_List$Study_SetArgs<ExtArgs>
  }, ExtArgs["result"]["study_Set_Questions_List"]>

  export type Study_Set_Questions_ListSelectScalar = {
    id?: boolean
    question_id?: boolean
    studyset_id?: boolean
  }

  export type Study_Set_Questions_ListInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Question?: boolean | QuestionDefaultArgs<ExtArgs>
    Study_Set?: boolean | Study_Set_Questions_List$Study_SetArgs<ExtArgs>
  }
  export type Study_Set_Questions_ListIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Question?: boolean | QuestionDefaultArgs<ExtArgs>
    Study_Set?: boolean | Study_Set_Questions_List$Study_SetArgs<ExtArgs>
  }

  export type $Study_Set_Questions_ListPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Study_Set_Questions_List"
    objects: {
      Question: Prisma.$QuestionPayload<ExtArgs>
      Study_Set: Prisma.$Study_SetPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      question_id: number
      studyset_id: number | null
    }, ExtArgs["result"]["study_Set_Questions_List"]>
    composites: {}
  }

  type Study_Set_Questions_ListGetPayload<S extends boolean | null | undefined | Study_Set_Questions_ListDefaultArgs> = $Result.GetResult<Prisma.$Study_Set_Questions_ListPayload, S>

  type Study_Set_Questions_ListCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<Study_Set_Questions_ListFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Study_Set_Questions_ListCountAggregateInputType | true
    }

  export interface Study_Set_Questions_ListDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Study_Set_Questions_List'], meta: { name: 'Study_Set_Questions_List' } }
    /**
     * Find zero or one Study_Set_Questions_List that matches the filter.
     * @param {Study_Set_Questions_ListFindUniqueArgs} args - Arguments to find a Study_Set_Questions_List
     * @example
     * // Get one Study_Set_Questions_List
     * const study_Set_Questions_List = await prisma.study_Set_Questions_List.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Study_Set_Questions_ListFindUniqueArgs>(args: SelectSubset<T, Study_Set_Questions_ListFindUniqueArgs<ExtArgs>>): Prisma__Study_Set_Questions_ListClient<$Result.GetResult<Prisma.$Study_Set_Questions_ListPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Study_Set_Questions_List that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {Study_Set_Questions_ListFindUniqueOrThrowArgs} args - Arguments to find a Study_Set_Questions_List
     * @example
     * // Get one Study_Set_Questions_List
     * const study_Set_Questions_List = await prisma.study_Set_Questions_List.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Study_Set_Questions_ListFindUniqueOrThrowArgs>(args: SelectSubset<T, Study_Set_Questions_ListFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Study_Set_Questions_ListClient<$Result.GetResult<Prisma.$Study_Set_Questions_ListPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Study_Set_Questions_List that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Study_Set_Questions_ListFindFirstArgs} args - Arguments to find a Study_Set_Questions_List
     * @example
     * // Get one Study_Set_Questions_List
     * const study_Set_Questions_List = await prisma.study_Set_Questions_List.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Study_Set_Questions_ListFindFirstArgs>(args?: SelectSubset<T, Study_Set_Questions_ListFindFirstArgs<ExtArgs>>): Prisma__Study_Set_Questions_ListClient<$Result.GetResult<Prisma.$Study_Set_Questions_ListPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Study_Set_Questions_List that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Study_Set_Questions_ListFindFirstOrThrowArgs} args - Arguments to find a Study_Set_Questions_List
     * @example
     * // Get one Study_Set_Questions_List
     * const study_Set_Questions_List = await prisma.study_Set_Questions_List.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Study_Set_Questions_ListFindFirstOrThrowArgs>(args?: SelectSubset<T, Study_Set_Questions_ListFindFirstOrThrowArgs<ExtArgs>>): Prisma__Study_Set_Questions_ListClient<$Result.GetResult<Prisma.$Study_Set_Questions_ListPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Study_Set_Questions_Lists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Study_Set_Questions_ListFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Study_Set_Questions_Lists
     * const study_Set_Questions_Lists = await prisma.study_Set_Questions_List.findMany()
     * 
     * // Get first 10 Study_Set_Questions_Lists
     * const study_Set_Questions_Lists = await prisma.study_Set_Questions_List.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const study_Set_Questions_ListWithIdOnly = await prisma.study_Set_Questions_List.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Study_Set_Questions_ListFindManyArgs>(args?: SelectSubset<T, Study_Set_Questions_ListFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Study_Set_Questions_ListPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Study_Set_Questions_List.
     * @param {Study_Set_Questions_ListCreateArgs} args - Arguments to create a Study_Set_Questions_List.
     * @example
     * // Create one Study_Set_Questions_List
     * const Study_Set_Questions_List = await prisma.study_Set_Questions_List.create({
     *   data: {
     *     // ... data to create a Study_Set_Questions_List
     *   }
     * })
     * 
     */
    create<T extends Study_Set_Questions_ListCreateArgs>(args: SelectSubset<T, Study_Set_Questions_ListCreateArgs<ExtArgs>>): Prisma__Study_Set_Questions_ListClient<$Result.GetResult<Prisma.$Study_Set_Questions_ListPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Study_Set_Questions_Lists.
     * @param {Study_Set_Questions_ListCreateManyArgs} args - Arguments to create many Study_Set_Questions_Lists.
     * @example
     * // Create many Study_Set_Questions_Lists
     * const study_Set_Questions_List = await prisma.study_Set_Questions_List.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Study_Set_Questions_ListCreateManyArgs>(args?: SelectSubset<T, Study_Set_Questions_ListCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Study_Set_Questions_Lists and returns the data saved in the database.
     * @param {Study_Set_Questions_ListCreateManyAndReturnArgs} args - Arguments to create many Study_Set_Questions_Lists.
     * @example
     * // Create many Study_Set_Questions_Lists
     * const study_Set_Questions_List = await prisma.study_Set_Questions_List.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Study_Set_Questions_Lists and only return the `id`
     * const study_Set_Questions_ListWithIdOnly = await prisma.study_Set_Questions_List.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Study_Set_Questions_ListCreateManyAndReturnArgs>(args?: SelectSubset<T, Study_Set_Questions_ListCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Study_Set_Questions_ListPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Study_Set_Questions_List.
     * @param {Study_Set_Questions_ListDeleteArgs} args - Arguments to delete one Study_Set_Questions_List.
     * @example
     * // Delete one Study_Set_Questions_List
     * const Study_Set_Questions_List = await prisma.study_Set_Questions_List.delete({
     *   where: {
     *     // ... filter to delete one Study_Set_Questions_List
     *   }
     * })
     * 
     */
    delete<T extends Study_Set_Questions_ListDeleteArgs>(args: SelectSubset<T, Study_Set_Questions_ListDeleteArgs<ExtArgs>>): Prisma__Study_Set_Questions_ListClient<$Result.GetResult<Prisma.$Study_Set_Questions_ListPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Study_Set_Questions_List.
     * @param {Study_Set_Questions_ListUpdateArgs} args - Arguments to update one Study_Set_Questions_List.
     * @example
     * // Update one Study_Set_Questions_List
     * const study_Set_Questions_List = await prisma.study_Set_Questions_List.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Study_Set_Questions_ListUpdateArgs>(args: SelectSubset<T, Study_Set_Questions_ListUpdateArgs<ExtArgs>>): Prisma__Study_Set_Questions_ListClient<$Result.GetResult<Prisma.$Study_Set_Questions_ListPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Study_Set_Questions_Lists.
     * @param {Study_Set_Questions_ListDeleteManyArgs} args - Arguments to filter Study_Set_Questions_Lists to delete.
     * @example
     * // Delete a few Study_Set_Questions_Lists
     * const { count } = await prisma.study_Set_Questions_List.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Study_Set_Questions_ListDeleteManyArgs>(args?: SelectSubset<T, Study_Set_Questions_ListDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Study_Set_Questions_Lists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Study_Set_Questions_ListUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Study_Set_Questions_Lists
     * const study_Set_Questions_List = await prisma.study_Set_Questions_List.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Study_Set_Questions_ListUpdateManyArgs>(args: SelectSubset<T, Study_Set_Questions_ListUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Study_Set_Questions_List.
     * @param {Study_Set_Questions_ListUpsertArgs} args - Arguments to update or create a Study_Set_Questions_List.
     * @example
     * // Update or create a Study_Set_Questions_List
     * const study_Set_Questions_List = await prisma.study_Set_Questions_List.upsert({
     *   create: {
     *     // ... data to create a Study_Set_Questions_List
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Study_Set_Questions_List we want to update
     *   }
     * })
     */
    upsert<T extends Study_Set_Questions_ListUpsertArgs>(args: SelectSubset<T, Study_Set_Questions_ListUpsertArgs<ExtArgs>>): Prisma__Study_Set_Questions_ListClient<$Result.GetResult<Prisma.$Study_Set_Questions_ListPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Study_Set_Questions_Lists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Study_Set_Questions_ListCountArgs} args - Arguments to filter Study_Set_Questions_Lists to count.
     * @example
     * // Count the number of Study_Set_Questions_Lists
     * const count = await prisma.study_Set_Questions_List.count({
     *   where: {
     *     // ... the filter for the Study_Set_Questions_Lists we want to count
     *   }
     * })
    **/
    count<T extends Study_Set_Questions_ListCountArgs>(
      args?: Subset<T, Study_Set_Questions_ListCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Study_Set_Questions_ListCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Study_Set_Questions_List.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Study_Set_Questions_ListAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Study_Set_Questions_ListAggregateArgs>(args: Subset<T, Study_Set_Questions_ListAggregateArgs>): Prisma.PrismaPromise<GetStudy_Set_Questions_ListAggregateType<T>>

    /**
     * Group by Study_Set_Questions_List.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Study_Set_Questions_ListGroupByArgs} args - Group by arguments.
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
      T extends Study_Set_Questions_ListGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Study_Set_Questions_ListGroupByArgs['orderBy'] }
        : { orderBy?: Study_Set_Questions_ListGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Study_Set_Questions_ListGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudy_Set_Questions_ListGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Study_Set_Questions_List model
   */
  readonly fields: Study_Set_Questions_ListFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Study_Set_Questions_List.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Study_Set_Questions_ListClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Question<T extends QuestionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuestionDefaultArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    Study_Set<T extends Study_Set_Questions_List$Study_SetArgs<ExtArgs> = {}>(args?: Subset<T, Study_Set_Questions_List$Study_SetArgs<ExtArgs>>): Prisma__Study_SetClient<$Result.GetResult<Prisma.$Study_SetPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
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
   * Fields of the Study_Set_Questions_List model
   */ 
  interface Study_Set_Questions_ListFieldRefs {
    readonly id: FieldRef<"Study_Set_Questions_List", 'Int'>
    readonly question_id: FieldRef<"Study_Set_Questions_List", 'Int'>
    readonly studyset_id: FieldRef<"Study_Set_Questions_List", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Study_Set_Questions_List findUnique
   */
  export type Study_Set_Questions_ListFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Study_Set_Questions_List
     */
    select?: Study_Set_Questions_ListSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Study_Set_Questions_ListInclude<ExtArgs> | null
    /**
     * Filter, which Study_Set_Questions_List to fetch.
     */
    where: Study_Set_Questions_ListWhereUniqueInput
  }

  /**
   * Study_Set_Questions_List findUniqueOrThrow
   */
  export type Study_Set_Questions_ListFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Study_Set_Questions_List
     */
    select?: Study_Set_Questions_ListSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Study_Set_Questions_ListInclude<ExtArgs> | null
    /**
     * Filter, which Study_Set_Questions_List to fetch.
     */
    where: Study_Set_Questions_ListWhereUniqueInput
  }

  /**
   * Study_Set_Questions_List findFirst
   */
  export type Study_Set_Questions_ListFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Study_Set_Questions_List
     */
    select?: Study_Set_Questions_ListSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Study_Set_Questions_ListInclude<ExtArgs> | null
    /**
     * Filter, which Study_Set_Questions_List to fetch.
     */
    where?: Study_Set_Questions_ListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Study_Set_Questions_Lists to fetch.
     */
    orderBy?: Study_Set_Questions_ListOrderByWithRelationInput | Study_Set_Questions_ListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Study_Set_Questions_Lists.
     */
    cursor?: Study_Set_Questions_ListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Study_Set_Questions_Lists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Study_Set_Questions_Lists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Study_Set_Questions_Lists.
     */
    distinct?: Study_Set_Questions_ListScalarFieldEnum | Study_Set_Questions_ListScalarFieldEnum[]
  }

  /**
   * Study_Set_Questions_List findFirstOrThrow
   */
  export type Study_Set_Questions_ListFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Study_Set_Questions_List
     */
    select?: Study_Set_Questions_ListSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Study_Set_Questions_ListInclude<ExtArgs> | null
    /**
     * Filter, which Study_Set_Questions_List to fetch.
     */
    where?: Study_Set_Questions_ListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Study_Set_Questions_Lists to fetch.
     */
    orderBy?: Study_Set_Questions_ListOrderByWithRelationInput | Study_Set_Questions_ListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Study_Set_Questions_Lists.
     */
    cursor?: Study_Set_Questions_ListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Study_Set_Questions_Lists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Study_Set_Questions_Lists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Study_Set_Questions_Lists.
     */
    distinct?: Study_Set_Questions_ListScalarFieldEnum | Study_Set_Questions_ListScalarFieldEnum[]
  }

  /**
   * Study_Set_Questions_List findMany
   */
  export type Study_Set_Questions_ListFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Study_Set_Questions_List
     */
    select?: Study_Set_Questions_ListSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Study_Set_Questions_ListInclude<ExtArgs> | null
    /**
     * Filter, which Study_Set_Questions_Lists to fetch.
     */
    where?: Study_Set_Questions_ListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Study_Set_Questions_Lists to fetch.
     */
    orderBy?: Study_Set_Questions_ListOrderByWithRelationInput | Study_Set_Questions_ListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Study_Set_Questions_Lists.
     */
    cursor?: Study_Set_Questions_ListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Study_Set_Questions_Lists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Study_Set_Questions_Lists.
     */
    skip?: number
    distinct?: Study_Set_Questions_ListScalarFieldEnum | Study_Set_Questions_ListScalarFieldEnum[]
  }

  /**
   * Study_Set_Questions_List create
   */
  export type Study_Set_Questions_ListCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Study_Set_Questions_List
     */
    select?: Study_Set_Questions_ListSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Study_Set_Questions_ListInclude<ExtArgs> | null
    /**
     * The data needed to create a Study_Set_Questions_List.
     */
    data: XOR<Study_Set_Questions_ListCreateInput, Study_Set_Questions_ListUncheckedCreateInput>
  }

  /**
   * Study_Set_Questions_List createMany
   */
  export type Study_Set_Questions_ListCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Study_Set_Questions_Lists.
     */
    data: Study_Set_Questions_ListCreateManyInput | Study_Set_Questions_ListCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Study_Set_Questions_List createManyAndReturn
   */
  export type Study_Set_Questions_ListCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Study_Set_Questions_List
     */
    select?: Study_Set_Questions_ListSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Study_Set_Questions_Lists.
     */
    data: Study_Set_Questions_ListCreateManyInput | Study_Set_Questions_ListCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Study_Set_Questions_ListIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Study_Set_Questions_List update
   */
  export type Study_Set_Questions_ListUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Study_Set_Questions_List
     */
    select?: Study_Set_Questions_ListSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Study_Set_Questions_ListInclude<ExtArgs> | null
    /**
     * The data needed to update a Study_Set_Questions_List.
     */
    data: XOR<Study_Set_Questions_ListUpdateInput, Study_Set_Questions_ListUncheckedUpdateInput>
    /**
     * Choose, which Study_Set_Questions_List to update.
     */
    where: Study_Set_Questions_ListWhereUniqueInput
  }

  /**
   * Study_Set_Questions_List updateMany
   */
  export type Study_Set_Questions_ListUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Study_Set_Questions_Lists.
     */
    data: XOR<Study_Set_Questions_ListUpdateManyMutationInput, Study_Set_Questions_ListUncheckedUpdateManyInput>
    /**
     * Filter which Study_Set_Questions_Lists to update
     */
    where?: Study_Set_Questions_ListWhereInput
  }

  /**
   * Study_Set_Questions_List upsert
   */
  export type Study_Set_Questions_ListUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Study_Set_Questions_List
     */
    select?: Study_Set_Questions_ListSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Study_Set_Questions_ListInclude<ExtArgs> | null
    /**
     * The filter to search for the Study_Set_Questions_List to update in case it exists.
     */
    where: Study_Set_Questions_ListWhereUniqueInput
    /**
     * In case the Study_Set_Questions_List found by the `where` argument doesn't exist, create a new Study_Set_Questions_List with this data.
     */
    create: XOR<Study_Set_Questions_ListCreateInput, Study_Set_Questions_ListUncheckedCreateInput>
    /**
     * In case the Study_Set_Questions_List was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Study_Set_Questions_ListUpdateInput, Study_Set_Questions_ListUncheckedUpdateInput>
  }

  /**
   * Study_Set_Questions_List delete
   */
  export type Study_Set_Questions_ListDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Study_Set_Questions_List
     */
    select?: Study_Set_Questions_ListSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Study_Set_Questions_ListInclude<ExtArgs> | null
    /**
     * Filter which Study_Set_Questions_List to delete.
     */
    where: Study_Set_Questions_ListWhereUniqueInput
  }

  /**
   * Study_Set_Questions_List deleteMany
   */
  export type Study_Set_Questions_ListDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Study_Set_Questions_Lists to delete
     */
    where?: Study_Set_Questions_ListWhereInput
  }

  /**
   * Study_Set_Questions_List.Study_Set
   */
  export type Study_Set_Questions_List$Study_SetArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Study_Set
     */
    select?: Study_SetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Study_SetInclude<ExtArgs> | null
    where?: Study_SetWhereInput
  }

  /**
   * Study_Set_Questions_List without action
   */
  export type Study_Set_Questions_ListDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Study_Set_Questions_List
     */
    select?: Study_Set_Questions_ListSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Study_Set_Questions_ListInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    name: 'name',
    role: 'role'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ChoiceScalarFieldEnum: {
    id: 'id',
    content: 'content',
    number: 'number',
    question_id: 'question_id'
  };

  export type ChoiceScalarFieldEnum = (typeof ChoiceScalarFieldEnum)[keyof typeof ChoiceScalarFieldEnum]


  export const QuestionScalarFieldEnum: {
    id: 'id',
    content: 'content',
    explanation: 'explanation',
    accuracy_percentage: 'accuracy_percentage'
  };

  export type QuestionScalarFieldEnum = (typeof QuestionScalarFieldEnum)[keyof typeof QuestionScalarFieldEnum]


  export const AnswerScalarFieldEnum: {
    question_id: 'question_id',
    choice_id: 'choice_id'
  };

  export type AnswerScalarFieldEnum = (typeof AnswerScalarFieldEnum)[keyof typeof AnswerScalarFieldEnum]


  export const Study_SetScalarFieldEnum: {
    id: 'id',
    stage: 'stage',
    label: 'label'
  };

  export type Study_SetScalarFieldEnum = (typeof Study_SetScalarFieldEnum)[keyof typeof Study_SetScalarFieldEnum]


  export const Study_Set_Questions_ListScalarFieldEnum: {
    id: 'id',
    question_id: 'question_id',
    studyset_id: 'studyset_id'
  };

  export type Study_Set_Questions_ListScalarFieldEnum = (typeof Study_Set_Questions_ListScalarFieldEnum)[keyof typeof Study_Set_Questions_ListScalarFieldEnum]


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
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


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


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
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
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
  }

  export type ChoiceWhereInput = {
    AND?: ChoiceWhereInput | ChoiceWhereInput[]
    OR?: ChoiceWhereInput[]
    NOT?: ChoiceWhereInput | ChoiceWhereInput[]
    id?: IntFilter<"Choice"> | number
    content?: StringFilter<"Choice"> | string
    number?: IntFilter<"Choice"> | number
    question_id?: IntFilter<"Choice"> | number
    Question?: XOR<QuestionRelationFilter, QuestionWhereInput>
    Answer?: AnswerListRelationFilter
  }

  export type ChoiceOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    number?: SortOrder
    question_id?: SortOrder
    Question?: QuestionOrderByWithRelationInput
    Answer?: AnswerOrderByRelationAggregateInput
  }

  export type ChoiceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ChoiceWhereInput | ChoiceWhereInput[]
    OR?: ChoiceWhereInput[]
    NOT?: ChoiceWhereInput | ChoiceWhereInput[]
    content?: StringFilter<"Choice"> | string
    number?: IntFilter<"Choice"> | number
    question_id?: IntFilter<"Choice"> | number
    Question?: XOR<QuestionRelationFilter, QuestionWhereInput>
    Answer?: AnswerListRelationFilter
  }, "id">

  export type ChoiceOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    number?: SortOrder
    question_id?: SortOrder
    _count?: ChoiceCountOrderByAggregateInput
    _avg?: ChoiceAvgOrderByAggregateInput
    _max?: ChoiceMaxOrderByAggregateInput
    _min?: ChoiceMinOrderByAggregateInput
    _sum?: ChoiceSumOrderByAggregateInput
  }

  export type ChoiceScalarWhereWithAggregatesInput = {
    AND?: ChoiceScalarWhereWithAggregatesInput | ChoiceScalarWhereWithAggregatesInput[]
    OR?: ChoiceScalarWhereWithAggregatesInput[]
    NOT?: ChoiceScalarWhereWithAggregatesInput | ChoiceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Choice"> | number
    content?: StringWithAggregatesFilter<"Choice"> | string
    number?: IntWithAggregatesFilter<"Choice"> | number
    question_id?: IntWithAggregatesFilter<"Choice"> | number
  }

  export type QuestionWhereInput = {
    AND?: QuestionWhereInput | QuestionWhereInput[]
    OR?: QuestionWhereInput[]
    NOT?: QuestionWhereInput | QuestionWhereInput[]
    id?: IntFilter<"Question"> | number
    content?: StringFilter<"Question"> | string
    explanation?: StringFilter<"Question"> | string
    accuracy_percentage?: DecimalFilter<"Question"> | Decimal | DecimalJsLike | number | string
    Choice?: ChoiceListRelationFilter
    Study_Set_Questions_List?: Study_Set_Questions_ListListRelationFilter
    Answer?: AnswerListRelationFilter
  }

  export type QuestionOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    explanation?: SortOrder
    accuracy_percentage?: SortOrder
    Choice?: ChoiceOrderByRelationAggregateInput
    Study_Set_Questions_List?: Study_Set_Questions_ListOrderByRelationAggregateInput
    Answer?: AnswerOrderByRelationAggregateInput
  }

  export type QuestionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: QuestionWhereInput | QuestionWhereInput[]
    OR?: QuestionWhereInput[]
    NOT?: QuestionWhereInput | QuestionWhereInput[]
    content?: StringFilter<"Question"> | string
    explanation?: StringFilter<"Question"> | string
    accuracy_percentage?: DecimalFilter<"Question"> | Decimal | DecimalJsLike | number | string
    Choice?: ChoiceListRelationFilter
    Study_Set_Questions_List?: Study_Set_Questions_ListListRelationFilter
    Answer?: AnswerListRelationFilter
  }, "id">

  export type QuestionOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    explanation?: SortOrder
    accuracy_percentage?: SortOrder
    _count?: QuestionCountOrderByAggregateInput
    _avg?: QuestionAvgOrderByAggregateInput
    _max?: QuestionMaxOrderByAggregateInput
    _min?: QuestionMinOrderByAggregateInput
    _sum?: QuestionSumOrderByAggregateInput
  }

  export type QuestionScalarWhereWithAggregatesInput = {
    AND?: QuestionScalarWhereWithAggregatesInput | QuestionScalarWhereWithAggregatesInput[]
    OR?: QuestionScalarWhereWithAggregatesInput[]
    NOT?: QuestionScalarWhereWithAggregatesInput | QuestionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Question"> | number
    content?: StringWithAggregatesFilter<"Question"> | string
    explanation?: StringWithAggregatesFilter<"Question"> | string
    accuracy_percentage?: DecimalWithAggregatesFilter<"Question"> | Decimal | DecimalJsLike | number | string
  }

  export type AnswerWhereInput = {
    AND?: AnswerWhereInput | AnswerWhereInput[]
    OR?: AnswerWhereInput[]
    NOT?: AnswerWhereInput | AnswerWhereInput[]
    question_id?: IntFilter<"Answer"> | number
    choice_id?: IntFilter<"Answer"> | number
    Question?: XOR<QuestionRelationFilter, QuestionWhereInput>
    Choice?: XOR<ChoiceRelationFilter, ChoiceWhereInput>
  }

  export type AnswerOrderByWithRelationInput = {
    question_id?: SortOrder
    choice_id?: SortOrder
    Question?: QuestionOrderByWithRelationInput
    Choice?: ChoiceOrderByWithRelationInput
  }

  export type AnswerWhereUniqueInput = Prisma.AtLeast<{
    question_id?: number
    AND?: AnswerWhereInput | AnswerWhereInput[]
    OR?: AnswerWhereInput[]
    NOT?: AnswerWhereInput | AnswerWhereInput[]
    choice_id?: IntFilter<"Answer"> | number
    Question?: XOR<QuestionRelationFilter, QuestionWhereInput>
    Choice?: XOR<ChoiceRelationFilter, ChoiceWhereInput>
  }, "question_id">

  export type AnswerOrderByWithAggregationInput = {
    question_id?: SortOrder
    choice_id?: SortOrder
    _count?: AnswerCountOrderByAggregateInput
    _avg?: AnswerAvgOrderByAggregateInput
    _max?: AnswerMaxOrderByAggregateInput
    _min?: AnswerMinOrderByAggregateInput
    _sum?: AnswerSumOrderByAggregateInput
  }

  export type AnswerScalarWhereWithAggregatesInput = {
    AND?: AnswerScalarWhereWithAggregatesInput | AnswerScalarWhereWithAggregatesInput[]
    OR?: AnswerScalarWhereWithAggregatesInput[]
    NOT?: AnswerScalarWhereWithAggregatesInput | AnswerScalarWhereWithAggregatesInput[]
    question_id?: IntWithAggregatesFilter<"Answer"> | number
    choice_id?: IntWithAggregatesFilter<"Answer"> | number
  }

  export type Study_SetWhereInput = {
    AND?: Study_SetWhereInput | Study_SetWhereInput[]
    OR?: Study_SetWhereInput[]
    NOT?: Study_SetWhereInput | Study_SetWhereInput[]
    id?: IntFilter<"Study_Set"> | number
    stage?: StringFilter<"Study_Set"> | string
    label?: StringFilter<"Study_Set"> | string
    Study_Set_Questions_List?: Study_Set_Questions_ListListRelationFilter
  }

  export type Study_SetOrderByWithRelationInput = {
    id?: SortOrder
    stage?: SortOrder
    label?: SortOrder
    Study_Set_Questions_List?: Study_Set_Questions_ListOrderByRelationAggregateInput
  }

  export type Study_SetWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: Study_SetWhereInput | Study_SetWhereInput[]
    OR?: Study_SetWhereInput[]
    NOT?: Study_SetWhereInput | Study_SetWhereInput[]
    stage?: StringFilter<"Study_Set"> | string
    label?: StringFilter<"Study_Set"> | string
    Study_Set_Questions_List?: Study_Set_Questions_ListListRelationFilter
  }, "id">

  export type Study_SetOrderByWithAggregationInput = {
    id?: SortOrder
    stage?: SortOrder
    label?: SortOrder
    _count?: Study_SetCountOrderByAggregateInput
    _avg?: Study_SetAvgOrderByAggregateInput
    _max?: Study_SetMaxOrderByAggregateInput
    _min?: Study_SetMinOrderByAggregateInput
    _sum?: Study_SetSumOrderByAggregateInput
  }

  export type Study_SetScalarWhereWithAggregatesInput = {
    AND?: Study_SetScalarWhereWithAggregatesInput | Study_SetScalarWhereWithAggregatesInput[]
    OR?: Study_SetScalarWhereWithAggregatesInput[]
    NOT?: Study_SetScalarWhereWithAggregatesInput | Study_SetScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Study_Set"> | number
    stage?: StringWithAggregatesFilter<"Study_Set"> | string
    label?: StringWithAggregatesFilter<"Study_Set"> | string
  }

  export type Study_Set_Questions_ListWhereInput = {
    AND?: Study_Set_Questions_ListWhereInput | Study_Set_Questions_ListWhereInput[]
    OR?: Study_Set_Questions_ListWhereInput[]
    NOT?: Study_Set_Questions_ListWhereInput | Study_Set_Questions_ListWhereInput[]
    id?: IntFilter<"Study_Set_Questions_List"> | number
    question_id?: IntFilter<"Study_Set_Questions_List"> | number
    studyset_id?: IntNullableFilter<"Study_Set_Questions_List"> | number | null
    Question?: XOR<QuestionRelationFilter, QuestionWhereInput>
    Study_Set?: XOR<Study_SetNullableRelationFilter, Study_SetWhereInput> | null
  }

  export type Study_Set_Questions_ListOrderByWithRelationInput = {
    id?: SortOrder
    question_id?: SortOrder
    studyset_id?: SortOrderInput | SortOrder
    Question?: QuestionOrderByWithRelationInput
    Study_Set?: Study_SetOrderByWithRelationInput
  }

  export type Study_Set_Questions_ListWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: Study_Set_Questions_ListWhereInput | Study_Set_Questions_ListWhereInput[]
    OR?: Study_Set_Questions_ListWhereInput[]
    NOT?: Study_Set_Questions_ListWhereInput | Study_Set_Questions_ListWhereInput[]
    question_id?: IntFilter<"Study_Set_Questions_List"> | number
    studyset_id?: IntNullableFilter<"Study_Set_Questions_List"> | number | null
    Question?: XOR<QuestionRelationFilter, QuestionWhereInput>
    Study_Set?: XOR<Study_SetNullableRelationFilter, Study_SetWhereInput> | null
  }, "id">

  export type Study_Set_Questions_ListOrderByWithAggregationInput = {
    id?: SortOrder
    question_id?: SortOrder
    studyset_id?: SortOrderInput | SortOrder
    _count?: Study_Set_Questions_ListCountOrderByAggregateInput
    _avg?: Study_Set_Questions_ListAvgOrderByAggregateInput
    _max?: Study_Set_Questions_ListMaxOrderByAggregateInput
    _min?: Study_Set_Questions_ListMinOrderByAggregateInput
    _sum?: Study_Set_Questions_ListSumOrderByAggregateInput
  }

  export type Study_Set_Questions_ListScalarWhereWithAggregatesInput = {
    AND?: Study_Set_Questions_ListScalarWhereWithAggregatesInput | Study_Set_Questions_ListScalarWhereWithAggregatesInput[]
    OR?: Study_Set_Questions_ListScalarWhereWithAggregatesInput[]
    NOT?: Study_Set_Questions_ListScalarWhereWithAggregatesInput | Study_Set_Questions_ListScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Study_Set_Questions_List"> | number
    question_id?: IntWithAggregatesFilter<"Study_Set_Questions_List"> | number
    studyset_id?: IntNullableWithAggregatesFilter<"Study_Set_Questions_List"> | number | null
  }

  export type UserCreateInput = {
    email: string
    password: string
    name: string
    role: $Enums.Role
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    password: string
    name: string
    role: $Enums.Role
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    password: string
    name: string
    role: $Enums.Role
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type ChoiceCreateInput = {
    content: string
    number: number
    Question: QuestionCreateNestedOneWithoutChoiceInput
    Answer?: AnswerCreateNestedManyWithoutChoiceInput
  }

  export type ChoiceUncheckedCreateInput = {
    id?: number
    content: string
    number: number
    question_id: number
    Answer?: AnswerUncheckedCreateNestedManyWithoutChoiceInput
  }

  export type ChoiceUpdateInput = {
    content?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    Question?: QuestionUpdateOneRequiredWithoutChoiceNestedInput
    Answer?: AnswerUpdateManyWithoutChoiceNestedInput
  }

  export type ChoiceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    question_id?: IntFieldUpdateOperationsInput | number
    Answer?: AnswerUncheckedUpdateManyWithoutChoiceNestedInput
  }

  export type ChoiceCreateManyInput = {
    id?: number
    content: string
    number: number
    question_id: number
  }

  export type ChoiceUpdateManyMutationInput = {
    content?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
  }

  export type ChoiceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    question_id?: IntFieldUpdateOperationsInput | number
  }

  export type QuestionCreateInput = {
    content: string
    explanation: string
    accuracy_percentage: Decimal | DecimalJsLike | number | string
    Choice?: ChoiceCreateNestedManyWithoutQuestionInput
    Study_Set_Questions_List?: Study_Set_Questions_ListCreateNestedManyWithoutQuestionInput
    Answer?: AnswerCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUncheckedCreateInput = {
    id?: number
    content: string
    explanation: string
    accuracy_percentage: Decimal | DecimalJsLike | number | string
    Choice?: ChoiceUncheckedCreateNestedManyWithoutQuestionInput
    Study_Set_Questions_List?: Study_Set_Questions_ListUncheckedCreateNestedManyWithoutQuestionInput
    Answer?: AnswerUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUpdateInput = {
    content?: StringFieldUpdateOperationsInput | string
    explanation?: StringFieldUpdateOperationsInput | string
    accuracy_percentage?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Choice?: ChoiceUpdateManyWithoutQuestionNestedInput
    Study_Set_Questions_List?: Study_Set_Questions_ListUpdateManyWithoutQuestionNestedInput
    Answer?: AnswerUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    explanation?: StringFieldUpdateOperationsInput | string
    accuracy_percentage?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Choice?: ChoiceUncheckedUpdateManyWithoutQuestionNestedInput
    Study_Set_Questions_List?: Study_Set_Questions_ListUncheckedUpdateManyWithoutQuestionNestedInput
    Answer?: AnswerUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionCreateManyInput = {
    id?: number
    content: string
    explanation: string
    accuracy_percentage: Decimal | DecimalJsLike | number | string
  }

  export type QuestionUpdateManyMutationInput = {
    content?: StringFieldUpdateOperationsInput | string
    explanation?: StringFieldUpdateOperationsInput | string
    accuracy_percentage?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type QuestionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    explanation?: StringFieldUpdateOperationsInput | string
    accuracy_percentage?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type AnswerCreateInput = {
    Question: QuestionCreateNestedOneWithoutAnswerInput
    Choice: ChoiceCreateNestedOneWithoutAnswerInput
  }

  export type AnswerUncheckedCreateInput = {
    question_id: number
    choice_id: number
  }

  export type AnswerUpdateInput = {
    Question?: QuestionUpdateOneRequiredWithoutAnswerNestedInput
    Choice?: ChoiceUpdateOneRequiredWithoutAnswerNestedInput
  }

  export type AnswerUncheckedUpdateInput = {
    question_id?: IntFieldUpdateOperationsInput | number
    choice_id?: IntFieldUpdateOperationsInput | number
  }

  export type AnswerCreateManyInput = {
    question_id: number
    choice_id: number
  }

  export type AnswerUpdateManyMutationInput = {

  }

  export type AnswerUncheckedUpdateManyInput = {
    question_id?: IntFieldUpdateOperationsInput | number
    choice_id?: IntFieldUpdateOperationsInput | number
  }

  export type Study_SetCreateInput = {
    stage: string
    label: string
    Study_Set_Questions_List?: Study_Set_Questions_ListCreateNestedManyWithoutStudy_SetInput
  }

  export type Study_SetUncheckedCreateInput = {
    id?: number
    stage: string
    label: string
    Study_Set_Questions_List?: Study_Set_Questions_ListUncheckedCreateNestedManyWithoutStudy_SetInput
  }

  export type Study_SetUpdateInput = {
    stage?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    Study_Set_Questions_List?: Study_Set_Questions_ListUpdateManyWithoutStudy_SetNestedInput
  }

  export type Study_SetUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    stage?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    Study_Set_Questions_List?: Study_Set_Questions_ListUncheckedUpdateManyWithoutStudy_SetNestedInput
  }

  export type Study_SetCreateManyInput = {
    id?: number
    stage: string
    label: string
  }

  export type Study_SetUpdateManyMutationInput = {
    stage?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
  }

  export type Study_SetUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    stage?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
  }

  export type Study_Set_Questions_ListCreateInput = {
    Question: QuestionCreateNestedOneWithoutStudy_Set_Questions_ListInput
    Study_Set?: Study_SetCreateNestedOneWithoutStudy_Set_Questions_ListInput
  }

  export type Study_Set_Questions_ListUncheckedCreateInput = {
    id?: number
    question_id: number
    studyset_id?: number | null
  }

  export type Study_Set_Questions_ListUpdateInput = {
    Question?: QuestionUpdateOneRequiredWithoutStudy_Set_Questions_ListNestedInput
    Study_Set?: Study_SetUpdateOneWithoutStudy_Set_Questions_ListNestedInput
  }

  export type Study_Set_Questions_ListUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    question_id?: IntFieldUpdateOperationsInput | number
    studyset_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type Study_Set_Questions_ListCreateManyInput = {
    id?: number
    question_id: number
    studyset_id?: number | null
  }

  export type Study_Set_Questions_ListUpdateManyMutationInput = {

  }

  export type Study_Set_Questions_ListUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    question_id?: IntFieldUpdateOperationsInput | number
    studyset_id?: NullableIntFieldUpdateOperationsInput | number | null
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

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
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

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type QuestionRelationFilter = {
    is?: QuestionWhereInput
    isNot?: QuestionWhereInput
  }

  export type AnswerListRelationFilter = {
    every?: AnswerWhereInput
    some?: AnswerWhereInput
    none?: AnswerWhereInput
  }

  export type AnswerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChoiceCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    number?: SortOrder
    question_id?: SortOrder
  }

  export type ChoiceAvgOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
    question_id?: SortOrder
  }

  export type ChoiceMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    number?: SortOrder
    question_id?: SortOrder
  }

  export type ChoiceMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    number?: SortOrder
    question_id?: SortOrder
  }

  export type ChoiceSumOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
    question_id?: SortOrder
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type ChoiceListRelationFilter = {
    every?: ChoiceWhereInput
    some?: ChoiceWhereInput
    none?: ChoiceWhereInput
  }

  export type Study_Set_Questions_ListListRelationFilter = {
    every?: Study_Set_Questions_ListWhereInput
    some?: Study_Set_Questions_ListWhereInput
    none?: Study_Set_Questions_ListWhereInput
  }

  export type ChoiceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Study_Set_Questions_ListOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QuestionCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    explanation?: SortOrder
    accuracy_percentage?: SortOrder
  }

  export type QuestionAvgOrderByAggregateInput = {
    id?: SortOrder
    accuracy_percentage?: SortOrder
  }

  export type QuestionMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    explanation?: SortOrder
    accuracy_percentage?: SortOrder
  }

  export type QuestionMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    explanation?: SortOrder
    accuracy_percentage?: SortOrder
  }

  export type QuestionSumOrderByAggregateInput = {
    id?: SortOrder
    accuracy_percentage?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type ChoiceRelationFilter = {
    is?: ChoiceWhereInput
    isNot?: ChoiceWhereInput
  }

  export type AnswerCountOrderByAggregateInput = {
    question_id?: SortOrder
    choice_id?: SortOrder
  }

  export type AnswerAvgOrderByAggregateInput = {
    question_id?: SortOrder
    choice_id?: SortOrder
  }

  export type AnswerMaxOrderByAggregateInput = {
    question_id?: SortOrder
    choice_id?: SortOrder
  }

  export type AnswerMinOrderByAggregateInput = {
    question_id?: SortOrder
    choice_id?: SortOrder
  }

  export type AnswerSumOrderByAggregateInput = {
    question_id?: SortOrder
    choice_id?: SortOrder
  }

  export type Study_SetCountOrderByAggregateInput = {
    id?: SortOrder
    stage?: SortOrder
    label?: SortOrder
  }

  export type Study_SetAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type Study_SetMaxOrderByAggregateInput = {
    id?: SortOrder
    stage?: SortOrder
    label?: SortOrder
  }

  export type Study_SetMinOrderByAggregateInput = {
    id?: SortOrder
    stage?: SortOrder
    label?: SortOrder
  }

  export type Study_SetSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type Study_SetNullableRelationFilter = {
    is?: Study_SetWhereInput | null
    isNot?: Study_SetWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type Study_Set_Questions_ListCountOrderByAggregateInput = {
    id?: SortOrder
    question_id?: SortOrder
    studyset_id?: SortOrder
  }

  export type Study_Set_Questions_ListAvgOrderByAggregateInput = {
    id?: SortOrder
    question_id?: SortOrder
    studyset_id?: SortOrder
  }

  export type Study_Set_Questions_ListMaxOrderByAggregateInput = {
    id?: SortOrder
    question_id?: SortOrder
    studyset_id?: SortOrder
  }

  export type Study_Set_Questions_ListMinOrderByAggregateInput = {
    id?: SortOrder
    question_id?: SortOrder
    studyset_id?: SortOrder
  }

  export type Study_Set_Questions_ListSumOrderByAggregateInput = {
    id?: SortOrder
    question_id?: SortOrder
    studyset_id?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type QuestionCreateNestedOneWithoutChoiceInput = {
    create?: XOR<QuestionCreateWithoutChoiceInput, QuestionUncheckedCreateWithoutChoiceInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutChoiceInput
    connect?: QuestionWhereUniqueInput
  }

  export type AnswerCreateNestedManyWithoutChoiceInput = {
    create?: XOR<AnswerCreateWithoutChoiceInput, AnswerUncheckedCreateWithoutChoiceInput> | AnswerCreateWithoutChoiceInput[] | AnswerUncheckedCreateWithoutChoiceInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutChoiceInput | AnswerCreateOrConnectWithoutChoiceInput[]
    createMany?: AnswerCreateManyChoiceInputEnvelope
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
  }

  export type AnswerUncheckedCreateNestedManyWithoutChoiceInput = {
    create?: XOR<AnswerCreateWithoutChoiceInput, AnswerUncheckedCreateWithoutChoiceInput> | AnswerCreateWithoutChoiceInput[] | AnswerUncheckedCreateWithoutChoiceInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutChoiceInput | AnswerCreateOrConnectWithoutChoiceInput[]
    createMany?: AnswerCreateManyChoiceInputEnvelope
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
  }

  export type QuestionUpdateOneRequiredWithoutChoiceNestedInput = {
    create?: XOR<QuestionCreateWithoutChoiceInput, QuestionUncheckedCreateWithoutChoiceInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutChoiceInput
    upsert?: QuestionUpsertWithoutChoiceInput
    connect?: QuestionWhereUniqueInput
    update?: XOR<XOR<QuestionUpdateToOneWithWhereWithoutChoiceInput, QuestionUpdateWithoutChoiceInput>, QuestionUncheckedUpdateWithoutChoiceInput>
  }

  export type AnswerUpdateManyWithoutChoiceNestedInput = {
    create?: XOR<AnswerCreateWithoutChoiceInput, AnswerUncheckedCreateWithoutChoiceInput> | AnswerCreateWithoutChoiceInput[] | AnswerUncheckedCreateWithoutChoiceInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutChoiceInput | AnswerCreateOrConnectWithoutChoiceInput[]
    upsert?: AnswerUpsertWithWhereUniqueWithoutChoiceInput | AnswerUpsertWithWhereUniqueWithoutChoiceInput[]
    createMany?: AnswerCreateManyChoiceInputEnvelope
    set?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    disconnect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    delete?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    update?: AnswerUpdateWithWhereUniqueWithoutChoiceInput | AnswerUpdateWithWhereUniqueWithoutChoiceInput[]
    updateMany?: AnswerUpdateManyWithWhereWithoutChoiceInput | AnswerUpdateManyWithWhereWithoutChoiceInput[]
    deleteMany?: AnswerScalarWhereInput | AnswerScalarWhereInput[]
  }

  export type AnswerUncheckedUpdateManyWithoutChoiceNestedInput = {
    create?: XOR<AnswerCreateWithoutChoiceInput, AnswerUncheckedCreateWithoutChoiceInput> | AnswerCreateWithoutChoiceInput[] | AnswerUncheckedCreateWithoutChoiceInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutChoiceInput | AnswerCreateOrConnectWithoutChoiceInput[]
    upsert?: AnswerUpsertWithWhereUniqueWithoutChoiceInput | AnswerUpsertWithWhereUniqueWithoutChoiceInput[]
    createMany?: AnswerCreateManyChoiceInputEnvelope
    set?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    disconnect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    delete?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    update?: AnswerUpdateWithWhereUniqueWithoutChoiceInput | AnswerUpdateWithWhereUniqueWithoutChoiceInput[]
    updateMany?: AnswerUpdateManyWithWhereWithoutChoiceInput | AnswerUpdateManyWithWhereWithoutChoiceInput[]
    deleteMany?: AnswerScalarWhereInput | AnswerScalarWhereInput[]
  }

  export type ChoiceCreateNestedManyWithoutQuestionInput = {
    create?: XOR<ChoiceCreateWithoutQuestionInput, ChoiceUncheckedCreateWithoutQuestionInput> | ChoiceCreateWithoutQuestionInput[] | ChoiceUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: ChoiceCreateOrConnectWithoutQuestionInput | ChoiceCreateOrConnectWithoutQuestionInput[]
    createMany?: ChoiceCreateManyQuestionInputEnvelope
    connect?: ChoiceWhereUniqueInput | ChoiceWhereUniqueInput[]
  }

  export type Study_Set_Questions_ListCreateNestedManyWithoutQuestionInput = {
    create?: XOR<Study_Set_Questions_ListCreateWithoutQuestionInput, Study_Set_Questions_ListUncheckedCreateWithoutQuestionInput> | Study_Set_Questions_ListCreateWithoutQuestionInput[] | Study_Set_Questions_ListUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: Study_Set_Questions_ListCreateOrConnectWithoutQuestionInput | Study_Set_Questions_ListCreateOrConnectWithoutQuestionInput[]
    createMany?: Study_Set_Questions_ListCreateManyQuestionInputEnvelope
    connect?: Study_Set_Questions_ListWhereUniqueInput | Study_Set_Questions_ListWhereUniqueInput[]
  }

  export type AnswerCreateNestedManyWithoutQuestionInput = {
    create?: XOR<AnswerCreateWithoutQuestionInput, AnswerUncheckedCreateWithoutQuestionInput> | AnswerCreateWithoutQuestionInput[] | AnswerUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutQuestionInput | AnswerCreateOrConnectWithoutQuestionInput[]
    createMany?: AnswerCreateManyQuestionInputEnvelope
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
  }

  export type ChoiceUncheckedCreateNestedManyWithoutQuestionInput = {
    create?: XOR<ChoiceCreateWithoutQuestionInput, ChoiceUncheckedCreateWithoutQuestionInput> | ChoiceCreateWithoutQuestionInput[] | ChoiceUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: ChoiceCreateOrConnectWithoutQuestionInput | ChoiceCreateOrConnectWithoutQuestionInput[]
    createMany?: ChoiceCreateManyQuestionInputEnvelope
    connect?: ChoiceWhereUniqueInput | ChoiceWhereUniqueInput[]
  }

  export type Study_Set_Questions_ListUncheckedCreateNestedManyWithoutQuestionInput = {
    create?: XOR<Study_Set_Questions_ListCreateWithoutQuestionInput, Study_Set_Questions_ListUncheckedCreateWithoutQuestionInput> | Study_Set_Questions_ListCreateWithoutQuestionInput[] | Study_Set_Questions_ListUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: Study_Set_Questions_ListCreateOrConnectWithoutQuestionInput | Study_Set_Questions_ListCreateOrConnectWithoutQuestionInput[]
    createMany?: Study_Set_Questions_ListCreateManyQuestionInputEnvelope
    connect?: Study_Set_Questions_ListWhereUniqueInput | Study_Set_Questions_ListWhereUniqueInput[]
  }

  export type AnswerUncheckedCreateNestedManyWithoutQuestionInput = {
    create?: XOR<AnswerCreateWithoutQuestionInput, AnswerUncheckedCreateWithoutQuestionInput> | AnswerCreateWithoutQuestionInput[] | AnswerUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutQuestionInput | AnswerCreateOrConnectWithoutQuestionInput[]
    createMany?: AnswerCreateManyQuestionInputEnvelope
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type ChoiceUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<ChoiceCreateWithoutQuestionInput, ChoiceUncheckedCreateWithoutQuestionInput> | ChoiceCreateWithoutQuestionInput[] | ChoiceUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: ChoiceCreateOrConnectWithoutQuestionInput | ChoiceCreateOrConnectWithoutQuestionInput[]
    upsert?: ChoiceUpsertWithWhereUniqueWithoutQuestionInput | ChoiceUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: ChoiceCreateManyQuestionInputEnvelope
    set?: ChoiceWhereUniqueInput | ChoiceWhereUniqueInput[]
    disconnect?: ChoiceWhereUniqueInput | ChoiceWhereUniqueInput[]
    delete?: ChoiceWhereUniqueInput | ChoiceWhereUniqueInput[]
    connect?: ChoiceWhereUniqueInput | ChoiceWhereUniqueInput[]
    update?: ChoiceUpdateWithWhereUniqueWithoutQuestionInput | ChoiceUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: ChoiceUpdateManyWithWhereWithoutQuestionInput | ChoiceUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: ChoiceScalarWhereInput | ChoiceScalarWhereInput[]
  }

  export type Study_Set_Questions_ListUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<Study_Set_Questions_ListCreateWithoutQuestionInput, Study_Set_Questions_ListUncheckedCreateWithoutQuestionInput> | Study_Set_Questions_ListCreateWithoutQuestionInput[] | Study_Set_Questions_ListUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: Study_Set_Questions_ListCreateOrConnectWithoutQuestionInput | Study_Set_Questions_ListCreateOrConnectWithoutQuestionInput[]
    upsert?: Study_Set_Questions_ListUpsertWithWhereUniqueWithoutQuestionInput | Study_Set_Questions_ListUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: Study_Set_Questions_ListCreateManyQuestionInputEnvelope
    set?: Study_Set_Questions_ListWhereUniqueInput | Study_Set_Questions_ListWhereUniqueInput[]
    disconnect?: Study_Set_Questions_ListWhereUniqueInput | Study_Set_Questions_ListWhereUniqueInput[]
    delete?: Study_Set_Questions_ListWhereUniqueInput | Study_Set_Questions_ListWhereUniqueInput[]
    connect?: Study_Set_Questions_ListWhereUniqueInput | Study_Set_Questions_ListWhereUniqueInput[]
    update?: Study_Set_Questions_ListUpdateWithWhereUniqueWithoutQuestionInput | Study_Set_Questions_ListUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: Study_Set_Questions_ListUpdateManyWithWhereWithoutQuestionInput | Study_Set_Questions_ListUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: Study_Set_Questions_ListScalarWhereInput | Study_Set_Questions_ListScalarWhereInput[]
  }

  export type AnswerUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<AnswerCreateWithoutQuestionInput, AnswerUncheckedCreateWithoutQuestionInput> | AnswerCreateWithoutQuestionInput[] | AnswerUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutQuestionInput | AnswerCreateOrConnectWithoutQuestionInput[]
    upsert?: AnswerUpsertWithWhereUniqueWithoutQuestionInput | AnswerUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: AnswerCreateManyQuestionInputEnvelope
    set?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    disconnect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    delete?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    update?: AnswerUpdateWithWhereUniqueWithoutQuestionInput | AnswerUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: AnswerUpdateManyWithWhereWithoutQuestionInput | AnswerUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: AnswerScalarWhereInput | AnswerScalarWhereInput[]
  }

  export type ChoiceUncheckedUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<ChoiceCreateWithoutQuestionInput, ChoiceUncheckedCreateWithoutQuestionInput> | ChoiceCreateWithoutQuestionInput[] | ChoiceUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: ChoiceCreateOrConnectWithoutQuestionInput | ChoiceCreateOrConnectWithoutQuestionInput[]
    upsert?: ChoiceUpsertWithWhereUniqueWithoutQuestionInput | ChoiceUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: ChoiceCreateManyQuestionInputEnvelope
    set?: ChoiceWhereUniqueInput | ChoiceWhereUniqueInput[]
    disconnect?: ChoiceWhereUniqueInput | ChoiceWhereUniqueInput[]
    delete?: ChoiceWhereUniqueInput | ChoiceWhereUniqueInput[]
    connect?: ChoiceWhereUniqueInput | ChoiceWhereUniqueInput[]
    update?: ChoiceUpdateWithWhereUniqueWithoutQuestionInput | ChoiceUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: ChoiceUpdateManyWithWhereWithoutQuestionInput | ChoiceUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: ChoiceScalarWhereInput | ChoiceScalarWhereInput[]
  }

  export type Study_Set_Questions_ListUncheckedUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<Study_Set_Questions_ListCreateWithoutQuestionInput, Study_Set_Questions_ListUncheckedCreateWithoutQuestionInput> | Study_Set_Questions_ListCreateWithoutQuestionInput[] | Study_Set_Questions_ListUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: Study_Set_Questions_ListCreateOrConnectWithoutQuestionInput | Study_Set_Questions_ListCreateOrConnectWithoutQuestionInput[]
    upsert?: Study_Set_Questions_ListUpsertWithWhereUniqueWithoutQuestionInput | Study_Set_Questions_ListUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: Study_Set_Questions_ListCreateManyQuestionInputEnvelope
    set?: Study_Set_Questions_ListWhereUniqueInput | Study_Set_Questions_ListWhereUniqueInput[]
    disconnect?: Study_Set_Questions_ListWhereUniqueInput | Study_Set_Questions_ListWhereUniqueInput[]
    delete?: Study_Set_Questions_ListWhereUniqueInput | Study_Set_Questions_ListWhereUniqueInput[]
    connect?: Study_Set_Questions_ListWhereUniqueInput | Study_Set_Questions_ListWhereUniqueInput[]
    update?: Study_Set_Questions_ListUpdateWithWhereUniqueWithoutQuestionInput | Study_Set_Questions_ListUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: Study_Set_Questions_ListUpdateManyWithWhereWithoutQuestionInput | Study_Set_Questions_ListUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: Study_Set_Questions_ListScalarWhereInput | Study_Set_Questions_ListScalarWhereInput[]
  }

  export type AnswerUncheckedUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<AnswerCreateWithoutQuestionInput, AnswerUncheckedCreateWithoutQuestionInput> | AnswerCreateWithoutQuestionInput[] | AnswerUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutQuestionInput | AnswerCreateOrConnectWithoutQuestionInput[]
    upsert?: AnswerUpsertWithWhereUniqueWithoutQuestionInput | AnswerUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: AnswerCreateManyQuestionInputEnvelope
    set?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    disconnect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    delete?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    update?: AnswerUpdateWithWhereUniqueWithoutQuestionInput | AnswerUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: AnswerUpdateManyWithWhereWithoutQuestionInput | AnswerUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: AnswerScalarWhereInput | AnswerScalarWhereInput[]
  }

  export type QuestionCreateNestedOneWithoutAnswerInput = {
    create?: XOR<QuestionCreateWithoutAnswerInput, QuestionUncheckedCreateWithoutAnswerInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutAnswerInput
    connect?: QuestionWhereUniqueInput
  }

  export type ChoiceCreateNestedOneWithoutAnswerInput = {
    create?: XOR<ChoiceCreateWithoutAnswerInput, ChoiceUncheckedCreateWithoutAnswerInput>
    connectOrCreate?: ChoiceCreateOrConnectWithoutAnswerInput
    connect?: ChoiceWhereUniqueInput
  }

  export type QuestionUpdateOneRequiredWithoutAnswerNestedInput = {
    create?: XOR<QuestionCreateWithoutAnswerInput, QuestionUncheckedCreateWithoutAnswerInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutAnswerInput
    upsert?: QuestionUpsertWithoutAnswerInput
    connect?: QuestionWhereUniqueInput
    update?: XOR<XOR<QuestionUpdateToOneWithWhereWithoutAnswerInput, QuestionUpdateWithoutAnswerInput>, QuestionUncheckedUpdateWithoutAnswerInput>
  }

  export type ChoiceUpdateOneRequiredWithoutAnswerNestedInput = {
    create?: XOR<ChoiceCreateWithoutAnswerInput, ChoiceUncheckedCreateWithoutAnswerInput>
    connectOrCreate?: ChoiceCreateOrConnectWithoutAnswerInput
    upsert?: ChoiceUpsertWithoutAnswerInput
    connect?: ChoiceWhereUniqueInput
    update?: XOR<XOR<ChoiceUpdateToOneWithWhereWithoutAnswerInput, ChoiceUpdateWithoutAnswerInput>, ChoiceUncheckedUpdateWithoutAnswerInput>
  }

  export type Study_Set_Questions_ListCreateNestedManyWithoutStudy_SetInput = {
    create?: XOR<Study_Set_Questions_ListCreateWithoutStudy_SetInput, Study_Set_Questions_ListUncheckedCreateWithoutStudy_SetInput> | Study_Set_Questions_ListCreateWithoutStudy_SetInput[] | Study_Set_Questions_ListUncheckedCreateWithoutStudy_SetInput[]
    connectOrCreate?: Study_Set_Questions_ListCreateOrConnectWithoutStudy_SetInput | Study_Set_Questions_ListCreateOrConnectWithoutStudy_SetInput[]
    createMany?: Study_Set_Questions_ListCreateManyStudy_SetInputEnvelope
    connect?: Study_Set_Questions_ListWhereUniqueInput | Study_Set_Questions_ListWhereUniqueInput[]
  }

  export type Study_Set_Questions_ListUncheckedCreateNestedManyWithoutStudy_SetInput = {
    create?: XOR<Study_Set_Questions_ListCreateWithoutStudy_SetInput, Study_Set_Questions_ListUncheckedCreateWithoutStudy_SetInput> | Study_Set_Questions_ListCreateWithoutStudy_SetInput[] | Study_Set_Questions_ListUncheckedCreateWithoutStudy_SetInput[]
    connectOrCreate?: Study_Set_Questions_ListCreateOrConnectWithoutStudy_SetInput | Study_Set_Questions_ListCreateOrConnectWithoutStudy_SetInput[]
    createMany?: Study_Set_Questions_ListCreateManyStudy_SetInputEnvelope
    connect?: Study_Set_Questions_ListWhereUniqueInput | Study_Set_Questions_ListWhereUniqueInput[]
  }

  export type Study_Set_Questions_ListUpdateManyWithoutStudy_SetNestedInput = {
    create?: XOR<Study_Set_Questions_ListCreateWithoutStudy_SetInput, Study_Set_Questions_ListUncheckedCreateWithoutStudy_SetInput> | Study_Set_Questions_ListCreateWithoutStudy_SetInput[] | Study_Set_Questions_ListUncheckedCreateWithoutStudy_SetInput[]
    connectOrCreate?: Study_Set_Questions_ListCreateOrConnectWithoutStudy_SetInput | Study_Set_Questions_ListCreateOrConnectWithoutStudy_SetInput[]
    upsert?: Study_Set_Questions_ListUpsertWithWhereUniqueWithoutStudy_SetInput | Study_Set_Questions_ListUpsertWithWhereUniqueWithoutStudy_SetInput[]
    createMany?: Study_Set_Questions_ListCreateManyStudy_SetInputEnvelope
    set?: Study_Set_Questions_ListWhereUniqueInput | Study_Set_Questions_ListWhereUniqueInput[]
    disconnect?: Study_Set_Questions_ListWhereUniqueInput | Study_Set_Questions_ListWhereUniqueInput[]
    delete?: Study_Set_Questions_ListWhereUniqueInput | Study_Set_Questions_ListWhereUniqueInput[]
    connect?: Study_Set_Questions_ListWhereUniqueInput | Study_Set_Questions_ListWhereUniqueInput[]
    update?: Study_Set_Questions_ListUpdateWithWhereUniqueWithoutStudy_SetInput | Study_Set_Questions_ListUpdateWithWhereUniqueWithoutStudy_SetInput[]
    updateMany?: Study_Set_Questions_ListUpdateManyWithWhereWithoutStudy_SetInput | Study_Set_Questions_ListUpdateManyWithWhereWithoutStudy_SetInput[]
    deleteMany?: Study_Set_Questions_ListScalarWhereInput | Study_Set_Questions_ListScalarWhereInput[]
  }

  export type Study_Set_Questions_ListUncheckedUpdateManyWithoutStudy_SetNestedInput = {
    create?: XOR<Study_Set_Questions_ListCreateWithoutStudy_SetInput, Study_Set_Questions_ListUncheckedCreateWithoutStudy_SetInput> | Study_Set_Questions_ListCreateWithoutStudy_SetInput[] | Study_Set_Questions_ListUncheckedCreateWithoutStudy_SetInput[]
    connectOrCreate?: Study_Set_Questions_ListCreateOrConnectWithoutStudy_SetInput | Study_Set_Questions_ListCreateOrConnectWithoutStudy_SetInput[]
    upsert?: Study_Set_Questions_ListUpsertWithWhereUniqueWithoutStudy_SetInput | Study_Set_Questions_ListUpsertWithWhereUniqueWithoutStudy_SetInput[]
    createMany?: Study_Set_Questions_ListCreateManyStudy_SetInputEnvelope
    set?: Study_Set_Questions_ListWhereUniqueInput | Study_Set_Questions_ListWhereUniqueInput[]
    disconnect?: Study_Set_Questions_ListWhereUniqueInput | Study_Set_Questions_ListWhereUniqueInput[]
    delete?: Study_Set_Questions_ListWhereUniqueInput | Study_Set_Questions_ListWhereUniqueInput[]
    connect?: Study_Set_Questions_ListWhereUniqueInput | Study_Set_Questions_ListWhereUniqueInput[]
    update?: Study_Set_Questions_ListUpdateWithWhereUniqueWithoutStudy_SetInput | Study_Set_Questions_ListUpdateWithWhereUniqueWithoutStudy_SetInput[]
    updateMany?: Study_Set_Questions_ListUpdateManyWithWhereWithoutStudy_SetInput | Study_Set_Questions_ListUpdateManyWithWhereWithoutStudy_SetInput[]
    deleteMany?: Study_Set_Questions_ListScalarWhereInput | Study_Set_Questions_ListScalarWhereInput[]
  }

  export type QuestionCreateNestedOneWithoutStudy_Set_Questions_ListInput = {
    create?: XOR<QuestionCreateWithoutStudy_Set_Questions_ListInput, QuestionUncheckedCreateWithoutStudy_Set_Questions_ListInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutStudy_Set_Questions_ListInput
    connect?: QuestionWhereUniqueInput
  }

  export type Study_SetCreateNestedOneWithoutStudy_Set_Questions_ListInput = {
    create?: XOR<Study_SetCreateWithoutStudy_Set_Questions_ListInput, Study_SetUncheckedCreateWithoutStudy_Set_Questions_ListInput>
    connectOrCreate?: Study_SetCreateOrConnectWithoutStudy_Set_Questions_ListInput
    connect?: Study_SetWhereUniqueInput
  }

  export type QuestionUpdateOneRequiredWithoutStudy_Set_Questions_ListNestedInput = {
    create?: XOR<QuestionCreateWithoutStudy_Set_Questions_ListInput, QuestionUncheckedCreateWithoutStudy_Set_Questions_ListInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutStudy_Set_Questions_ListInput
    upsert?: QuestionUpsertWithoutStudy_Set_Questions_ListInput
    connect?: QuestionWhereUniqueInput
    update?: XOR<XOR<QuestionUpdateToOneWithWhereWithoutStudy_Set_Questions_ListInput, QuestionUpdateWithoutStudy_Set_Questions_ListInput>, QuestionUncheckedUpdateWithoutStudy_Set_Questions_ListInput>
  }

  export type Study_SetUpdateOneWithoutStudy_Set_Questions_ListNestedInput = {
    create?: XOR<Study_SetCreateWithoutStudy_Set_Questions_ListInput, Study_SetUncheckedCreateWithoutStudy_Set_Questions_ListInput>
    connectOrCreate?: Study_SetCreateOrConnectWithoutStudy_Set_Questions_ListInput
    upsert?: Study_SetUpsertWithoutStudy_Set_Questions_ListInput
    disconnect?: Study_SetWhereInput | boolean
    delete?: Study_SetWhereInput | boolean
    connect?: Study_SetWhereUniqueInput
    update?: XOR<XOR<Study_SetUpdateToOneWithWhereWithoutStudy_Set_Questions_ListInput, Study_SetUpdateWithoutStudy_Set_Questions_ListInput>, Study_SetUncheckedUpdateWithoutStudy_Set_Questions_ListInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
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

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type QuestionCreateWithoutChoiceInput = {
    content: string
    explanation: string
    accuracy_percentage: Decimal | DecimalJsLike | number | string
    Study_Set_Questions_List?: Study_Set_Questions_ListCreateNestedManyWithoutQuestionInput
    Answer?: AnswerCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUncheckedCreateWithoutChoiceInput = {
    id?: number
    content: string
    explanation: string
    accuracy_percentage: Decimal | DecimalJsLike | number | string
    Study_Set_Questions_List?: Study_Set_Questions_ListUncheckedCreateNestedManyWithoutQuestionInput
    Answer?: AnswerUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionCreateOrConnectWithoutChoiceInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutChoiceInput, QuestionUncheckedCreateWithoutChoiceInput>
  }

  export type AnswerCreateWithoutChoiceInput = {
    Question: QuestionCreateNestedOneWithoutAnswerInput
  }

  export type AnswerUncheckedCreateWithoutChoiceInput = {
    question_id: number
  }

  export type AnswerCreateOrConnectWithoutChoiceInput = {
    where: AnswerWhereUniqueInput
    create: XOR<AnswerCreateWithoutChoiceInput, AnswerUncheckedCreateWithoutChoiceInput>
  }

  export type AnswerCreateManyChoiceInputEnvelope = {
    data: AnswerCreateManyChoiceInput | AnswerCreateManyChoiceInput[]
    skipDuplicates?: boolean
  }

  export type QuestionUpsertWithoutChoiceInput = {
    update: XOR<QuestionUpdateWithoutChoiceInput, QuestionUncheckedUpdateWithoutChoiceInput>
    create: XOR<QuestionCreateWithoutChoiceInput, QuestionUncheckedCreateWithoutChoiceInput>
    where?: QuestionWhereInput
  }

  export type QuestionUpdateToOneWithWhereWithoutChoiceInput = {
    where?: QuestionWhereInput
    data: XOR<QuestionUpdateWithoutChoiceInput, QuestionUncheckedUpdateWithoutChoiceInput>
  }

  export type QuestionUpdateWithoutChoiceInput = {
    content?: StringFieldUpdateOperationsInput | string
    explanation?: StringFieldUpdateOperationsInput | string
    accuracy_percentage?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Study_Set_Questions_List?: Study_Set_Questions_ListUpdateManyWithoutQuestionNestedInput
    Answer?: AnswerUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateWithoutChoiceInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    explanation?: StringFieldUpdateOperationsInput | string
    accuracy_percentage?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Study_Set_Questions_List?: Study_Set_Questions_ListUncheckedUpdateManyWithoutQuestionNestedInput
    Answer?: AnswerUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type AnswerUpsertWithWhereUniqueWithoutChoiceInput = {
    where: AnswerWhereUniqueInput
    update: XOR<AnswerUpdateWithoutChoiceInput, AnswerUncheckedUpdateWithoutChoiceInput>
    create: XOR<AnswerCreateWithoutChoiceInput, AnswerUncheckedCreateWithoutChoiceInput>
  }

  export type AnswerUpdateWithWhereUniqueWithoutChoiceInput = {
    where: AnswerWhereUniqueInput
    data: XOR<AnswerUpdateWithoutChoiceInput, AnswerUncheckedUpdateWithoutChoiceInput>
  }

  export type AnswerUpdateManyWithWhereWithoutChoiceInput = {
    where: AnswerScalarWhereInput
    data: XOR<AnswerUpdateManyMutationInput, AnswerUncheckedUpdateManyWithoutChoiceInput>
  }

  export type AnswerScalarWhereInput = {
    AND?: AnswerScalarWhereInput | AnswerScalarWhereInput[]
    OR?: AnswerScalarWhereInput[]
    NOT?: AnswerScalarWhereInput | AnswerScalarWhereInput[]
    question_id?: IntFilter<"Answer"> | number
    choice_id?: IntFilter<"Answer"> | number
  }

  export type ChoiceCreateWithoutQuestionInput = {
    content: string
    number: number
    Answer?: AnswerCreateNestedManyWithoutChoiceInput
  }

  export type ChoiceUncheckedCreateWithoutQuestionInput = {
    id?: number
    content: string
    number: number
    Answer?: AnswerUncheckedCreateNestedManyWithoutChoiceInput
  }

  export type ChoiceCreateOrConnectWithoutQuestionInput = {
    where: ChoiceWhereUniqueInput
    create: XOR<ChoiceCreateWithoutQuestionInput, ChoiceUncheckedCreateWithoutQuestionInput>
  }

  export type ChoiceCreateManyQuestionInputEnvelope = {
    data: ChoiceCreateManyQuestionInput | ChoiceCreateManyQuestionInput[]
    skipDuplicates?: boolean
  }

  export type Study_Set_Questions_ListCreateWithoutQuestionInput = {
    Study_Set?: Study_SetCreateNestedOneWithoutStudy_Set_Questions_ListInput
  }

  export type Study_Set_Questions_ListUncheckedCreateWithoutQuestionInput = {
    id?: number
    studyset_id?: number | null
  }

  export type Study_Set_Questions_ListCreateOrConnectWithoutQuestionInput = {
    where: Study_Set_Questions_ListWhereUniqueInput
    create: XOR<Study_Set_Questions_ListCreateWithoutQuestionInput, Study_Set_Questions_ListUncheckedCreateWithoutQuestionInput>
  }

  export type Study_Set_Questions_ListCreateManyQuestionInputEnvelope = {
    data: Study_Set_Questions_ListCreateManyQuestionInput | Study_Set_Questions_ListCreateManyQuestionInput[]
    skipDuplicates?: boolean
  }

  export type AnswerCreateWithoutQuestionInput = {
    Choice: ChoiceCreateNestedOneWithoutAnswerInput
  }

  export type AnswerUncheckedCreateWithoutQuestionInput = {
    choice_id: number
  }

  export type AnswerCreateOrConnectWithoutQuestionInput = {
    where: AnswerWhereUniqueInput
    create: XOR<AnswerCreateWithoutQuestionInput, AnswerUncheckedCreateWithoutQuestionInput>
  }

  export type AnswerCreateManyQuestionInputEnvelope = {
    data: AnswerCreateManyQuestionInput | AnswerCreateManyQuestionInput[]
    skipDuplicates?: boolean
  }

  export type ChoiceUpsertWithWhereUniqueWithoutQuestionInput = {
    where: ChoiceWhereUniqueInput
    update: XOR<ChoiceUpdateWithoutQuestionInput, ChoiceUncheckedUpdateWithoutQuestionInput>
    create: XOR<ChoiceCreateWithoutQuestionInput, ChoiceUncheckedCreateWithoutQuestionInput>
  }

  export type ChoiceUpdateWithWhereUniqueWithoutQuestionInput = {
    where: ChoiceWhereUniqueInput
    data: XOR<ChoiceUpdateWithoutQuestionInput, ChoiceUncheckedUpdateWithoutQuestionInput>
  }

  export type ChoiceUpdateManyWithWhereWithoutQuestionInput = {
    where: ChoiceScalarWhereInput
    data: XOR<ChoiceUpdateManyMutationInput, ChoiceUncheckedUpdateManyWithoutQuestionInput>
  }

  export type ChoiceScalarWhereInput = {
    AND?: ChoiceScalarWhereInput | ChoiceScalarWhereInput[]
    OR?: ChoiceScalarWhereInput[]
    NOT?: ChoiceScalarWhereInput | ChoiceScalarWhereInput[]
    id?: IntFilter<"Choice"> | number
    content?: StringFilter<"Choice"> | string
    number?: IntFilter<"Choice"> | number
    question_id?: IntFilter<"Choice"> | number
  }

  export type Study_Set_Questions_ListUpsertWithWhereUniqueWithoutQuestionInput = {
    where: Study_Set_Questions_ListWhereUniqueInput
    update: XOR<Study_Set_Questions_ListUpdateWithoutQuestionInput, Study_Set_Questions_ListUncheckedUpdateWithoutQuestionInput>
    create: XOR<Study_Set_Questions_ListCreateWithoutQuestionInput, Study_Set_Questions_ListUncheckedCreateWithoutQuestionInput>
  }

  export type Study_Set_Questions_ListUpdateWithWhereUniqueWithoutQuestionInput = {
    where: Study_Set_Questions_ListWhereUniqueInput
    data: XOR<Study_Set_Questions_ListUpdateWithoutQuestionInput, Study_Set_Questions_ListUncheckedUpdateWithoutQuestionInput>
  }

  export type Study_Set_Questions_ListUpdateManyWithWhereWithoutQuestionInput = {
    where: Study_Set_Questions_ListScalarWhereInput
    data: XOR<Study_Set_Questions_ListUpdateManyMutationInput, Study_Set_Questions_ListUncheckedUpdateManyWithoutQuestionInput>
  }

  export type Study_Set_Questions_ListScalarWhereInput = {
    AND?: Study_Set_Questions_ListScalarWhereInput | Study_Set_Questions_ListScalarWhereInput[]
    OR?: Study_Set_Questions_ListScalarWhereInput[]
    NOT?: Study_Set_Questions_ListScalarWhereInput | Study_Set_Questions_ListScalarWhereInput[]
    id?: IntFilter<"Study_Set_Questions_List"> | number
    question_id?: IntFilter<"Study_Set_Questions_List"> | number
    studyset_id?: IntNullableFilter<"Study_Set_Questions_List"> | number | null
  }

  export type AnswerUpsertWithWhereUniqueWithoutQuestionInput = {
    where: AnswerWhereUniqueInput
    update: XOR<AnswerUpdateWithoutQuestionInput, AnswerUncheckedUpdateWithoutQuestionInput>
    create: XOR<AnswerCreateWithoutQuestionInput, AnswerUncheckedCreateWithoutQuestionInput>
  }

  export type AnswerUpdateWithWhereUniqueWithoutQuestionInput = {
    where: AnswerWhereUniqueInput
    data: XOR<AnswerUpdateWithoutQuestionInput, AnswerUncheckedUpdateWithoutQuestionInput>
  }

  export type AnswerUpdateManyWithWhereWithoutQuestionInput = {
    where: AnswerScalarWhereInput
    data: XOR<AnswerUpdateManyMutationInput, AnswerUncheckedUpdateManyWithoutQuestionInput>
  }

  export type QuestionCreateWithoutAnswerInput = {
    content: string
    explanation: string
    accuracy_percentage: Decimal | DecimalJsLike | number | string
    Choice?: ChoiceCreateNestedManyWithoutQuestionInput
    Study_Set_Questions_List?: Study_Set_Questions_ListCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUncheckedCreateWithoutAnswerInput = {
    id?: number
    content: string
    explanation: string
    accuracy_percentage: Decimal | DecimalJsLike | number | string
    Choice?: ChoiceUncheckedCreateNestedManyWithoutQuestionInput
    Study_Set_Questions_List?: Study_Set_Questions_ListUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionCreateOrConnectWithoutAnswerInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutAnswerInput, QuestionUncheckedCreateWithoutAnswerInput>
  }

  export type ChoiceCreateWithoutAnswerInput = {
    content: string
    number: number
    Question: QuestionCreateNestedOneWithoutChoiceInput
  }

  export type ChoiceUncheckedCreateWithoutAnswerInput = {
    id?: number
    content: string
    number: number
    question_id: number
  }

  export type ChoiceCreateOrConnectWithoutAnswerInput = {
    where: ChoiceWhereUniqueInput
    create: XOR<ChoiceCreateWithoutAnswerInput, ChoiceUncheckedCreateWithoutAnswerInput>
  }

  export type QuestionUpsertWithoutAnswerInput = {
    update: XOR<QuestionUpdateWithoutAnswerInput, QuestionUncheckedUpdateWithoutAnswerInput>
    create: XOR<QuestionCreateWithoutAnswerInput, QuestionUncheckedCreateWithoutAnswerInput>
    where?: QuestionWhereInput
  }

  export type QuestionUpdateToOneWithWhereWithoutAnswerInput = {
    where?: QuestionWhereInput
    data: XOR<QuestionUpdateWithoutAnswerInput, QuestionUncheckedUpdateWithoutAnswerInput>
  }

  export type QuestionUpdateWithoutAnswerInput = {
    content?: StringFieldUpdateOperationsInput | string
    explanation?: StringFieldUpdateOperationsInput | string
    accuracy_percentage?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Choice?: ChoiceUpdateManyWithoutQuestionNestedInput
    Study_Set_Questions_List?: Study_Set_Questions_ListUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateWithoutAnswerInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    explanation?: StringFieldUpdateOperationsInput | string
    accuracy_percentage?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Choice?: ChoiceUncheckedUpdateManyWithoutQuestionNestedInput
    Study_Set_Questions_List?: Study_Set_Questions_ListUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type ChoiceUpsertWithoutAnswerInput = {
    update: XOR<ChoiceUpdateWithoutAnswerInput, ChoiceUncheckedUpdateWithoutAnswerInput>
    create: XOR<ChoiceCreateWithoutAnswerInput, ChoiceUncheckedCreateWithoutAnswerInput>
    where?: ChoiceWhereInput
  }

  export type ChoiceUpdateToOneWithWhereWithoutAnswerInput = {
    where?: ChoiceWhereInput
    data: XOR<ChoiceUpdateWithoutAnswerInput, ChoiceUncheckedUpdateWithoutAnswerInput>
  }

  export type ChoiceUpdateWithoutAnswerInput = {
    content?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    Question?: QuestionUpdateOneRequiredWithoutChoiceNestedInput
  }

  export type ChoiceUncheckedUpdateWithoutAnswerInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    question_id?: IntFieldUpdateOperationsInput | number
  }

  export type Study_Set_Questions_ListCreateWithoutStudy_SetInput = {
    Question: QuestionCreateNestedOneWithoutStudy_Set_Questions_ListInput
  }

  export type Study_Set_Questions_ListUncheckedCreateWithoutStudy_SetInput = {
    id?: number
    question_id: number
  }

  export type Study_Set_Questions_ListCreateOrConnectWithoutStudy_SetInput = {
    where: Study_Set_Questions_ListWhereUniqueInput
    create: XOR<Study_Set_Questions_ListCreateWithoutStudy_SetInput, Study_Set_Questions_ListUncheckedCreateWithoutStudy_SetInput>
  }

  export type Study_Set_Questions_ListCreateManyStudy_SetInputEnvelope = {
    data: Study_Set_Questions_ListCreateManyStudy_SetInput | Study_Set_Questions_ListCreateManyStudy_SetInput[]
    skipDuplicates?: boolean
  }

  export type Study_Set_Questions_ListUpsertWithWhereUniqueWithoutStudy_SetInput = {
    where: Study_Set_Questions_ListWhereUniqueInput
    update: XOR<Study_Set_Questions_ListUpdateWithoutStudy_SetInput, Study_Set_Questions_ListUncheckedUpdateWithoutStudy_SetInput>
    create: XOR<Study_Set_Questions_ListCreateWithoutStudy_SetInput, Study_Set_Questions_ListUncheckedCreateWithoutStudy_SetInput>
  }

  export type Study_Set_Questions_ListUpdateWithWhereUniqueWithoutStudy_SetInput = {
    where: Study_Set_Questions_ListWhereUniqueInput
    data: XOR<Study_Set_Questions_ListUpdateWithoutStudy_SetInput, Study_Set_Questions_ListUncheckedUpdateWithoutStudy_SetInput>
  }

  export type Study_Set_Questions_ListUpdateManyWithWhereWithoutStudy_SetInput = {
    where: Study_Set_Questions_ListScalarWhereInput
    data: XOR<Study_Set_Questions_ListUpdateManyMutationInput, Study_Set_Questions_ListUncheckedUpdateManyWithoutStudy_SetInput>
  }

  export type QuestionCreateWithoutStudy_Set_Questions_ListInput = {
    content: string
    explanation: string
    accuracy_percentage: Decimal | DecimalJsLike | number | string
    Choice?: ChoiceCreateNestedManyWithoutQuestionInput
    Answer?: AnswerCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUncheckedCreateWithoutStudy_Set_Questions_ListInput = {
    id?: number
    content: string
    explanation: string
    accuracy_percentage: Decimal | DecimalJsLike | number | string
    Choice?: ChoiceUncheckedCreateNestedManyWithoutQuestionInput
    Answer?: AnswerUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionCreateOrConnectWithoutStudy_Set_Questions_ListInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutStudy_Set_Questions_ListInput, QuestionUncheckedCreateWithoutStudy_Set_Questions_ListInput>
  }

  export type Study_SetCreateWithoutStudy_Set_Questions_ListInput = {
    stage: string
    label: string
  }

  export type Study_SetUncheckedCreateWithoutStudy_Set_Questions_ListInput = {
    id?: number
    stage: string
    label: string
  }

  export type Study_SetCreateOrConnectWithoutStudy_Set_Questions_ListInput = {
    where: Study_SetWhereUniqueInput
    create: XOR<Study_SetCreateWithoutStudy_Set_Questions_ListInput, Study_SetUncheckedCreateWithoutStudy_Set_Questions_ListInput>
  }

  export type QuestionUpsertWithoutStudy_Set_Questions_ListInput = {
    update: XOR<QuestionUpdateWithoutStudy_Set_Questions_ListInput, QuestionUncheckedUpdateWithoutStudy_Set_Questions_ListInput>
    create: XOR<QuestionCreateWithoutStudy_Set_Questions_ListInput, QuestionUncheckedCreateWithoutStudy_Set_Questions_ListInput>
    where?: QuestionWhereInput
  }

  export type QuestionUpdateToOneWithWhereWithoutStudy_Set_Questions_ListInput = {
    where?: QuestionWhereInput
    data: XOR<QuestionUpdateWithoutStudy_Set_Questions_ListInput, QuestionUncheckedUpdateWithoutStudy_Set_Questions_ListInput>
  }

  export type QuestionUpdateWithoutStudy_Set_Questions_ListInput = {
    content?: StringFieldUpdateOperationsInput | string
    explanation?: StringFieldUpdateOperationsInput | string
    accuracy_percentage?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Choice?: ChoiceUpdateManyWithoutQuestionNestedInput
    Answer?: AnswerUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateWithoutStudy_Set_Questions_ListInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    explanation?: StringFieldUpdateOperationsInput | string
    accuracy_percentage?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Choice?: ChoiceUncheckedUpdateManyWithoutQuestionNestedInput
    Answer?: AnswerUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type Study_SetUpsertWithoutStudy_Set_Questions_ListInput = {
    update: XOR<Study_SetUpdateWithoutStudy_Set_Questions_ListInput, Study_SetUncheckedUpdateWithoutStudy_Set_Questions_ListInput>
    create: XOR<Study_SetCreateWithoutStudy_Set_Questions_ListInput, Study_SetUncheckedCreateWithoutStudy_Set_Questions_ListInput>
    where?: Study_SetWhereInput
  }

  export type Study_SetUpdateToOneWithWhereWithoutStudy_Set_Questions_ListInput = {
    where?: Study_SetWhereInput
    data: XOR<Study_SetUpdateWithoutStudy_Set_Questions_ListInput, Study_SetUncheckedUpdateWithoutStudy_Set_Questions_ListInput>
  }

  export type Study_SetUpdateWithoutStudy_Set_Questions_ListInput = {
    stage?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
  }

  export type Study_SetUncheckedUpdateWithoutStudy_Set_Questions_ListInput = {
    id?: IntFieldUpdateOperationsInput | number
    stage?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
  }

  export type AnswerCreateManyChoiceInput = {
    question_id: number
  }

  export type AnswerUpdateWithoutChoiceInput = {
    Question?: QuestionUpdateOneRequiredWithoutAnswerNestedInput
  }

  export type AnswerUncheckedUpdateWithoutChoiceInput = {
    question_id?: IntFieldUpdateOperationsInput | number
  }

  export type AnswerUncheckedUpdateManyWithoutChoiceInput = {
    question_id?: IntFieldUpdateOperationsInput | number
  }

  export type ChoiceCreateManyQuestionInput = {
    id?: number
    content: string
    number: number
  }

  export type Study_Set_Questions_ListCreateManyQuestionInput = {
    id?: number
    studyset_id?: number | null
  }

  export type AnswerCreateManyQuestionInput = {
    choice_id: number
  }

  export type ChoiceUpdateWithoutQuestionInput = {
    content?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    Answer?: AnswerUpdateManyWithoutChoiceNestedInput
  }

  export type ChoiceUncheckedUpdateWithoutQuestionInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    Answer?: AnswerUncheckedUpdateManyWithoutChoiceNestedInput
  }

  export type ChoiceUncheckedUpdateManyWithoutQuestionInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
  }

  export type Study_Set_Questions_ListUpdateWithoutQuestionInput = {
    Study_Set?: Study_SetUpdateOneWithoutStudy_Set_Questions_ListNestedInput
  }

  export type Study_Set_Questions_ListUncheckedUpdateWithoutQuestionInput = {
    id?: IntFieldUpdateOperationsInput | number
    studyset_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type Study_Set_Questions_ListUncheckedUpdateManyWithoutQuestionInput = {
    id?: IntFieldUpdateOperationsInput | number
    studyset_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AnswerUpdateWithoutQuestionInput = {
    Choice?: ChoiceUpdateOneRequiredWithoutAnswerNestedInput
  }

  export type AnswerUncheckedUpdateWithoutQuestionInput = {
    choice_id?: IntFieldUpdateOperationsInput | number
  }

  export type AnswerUncheckedUpdateManyWithoutQuestionInput = {
    choice_id?: IntFieldUpdateOperationsInput | number
  }

  export type Study_Set_Questions_ListCreateManyStudy_SetInput = {
    id?: number
    question_id: number
  }

  export type Study_Set_Questions_ListUpdateWithoutStudy_SetInput = {
    Question?: QuestionUpdateOneRequiredWithoutStudy_Set_Questions_ListNestedInput
  }

  export type Study_Set_Questions_ListUncheckedUpdateWithoutStudy_SetInput = {
    id?: IntFieldUpdateOperationsInput | number
    question_id?: IntFieldUpdateOperationsInput | number
  }

  export type Study_Set_Questions_ListUncheckedUpdateManyWithoutStudy_SetInput = {
    id?: IntFieldUpdateOperationsInput | number
    question_id?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use ChoiceCountOutputTypeDefaultArgs instead
     */
    export type ChoiceCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ChoiceCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use QuestionCountOutputTypeDefaultArgs instead
     */
    export type QuestionCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = QuestionCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use Study_SetCountOutputTypeDefaultArgs instead
     */
    export type Study_SetCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Study_SetCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ChoiceDefaultArgs instead
     */
    export type ChoiceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ChoiceDefaultArgs<ExtArgs>
    /**
     * @deprecated Use QuestionDefaultArgs instead
     */
    export type QuestionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = QuestionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AnswerDefaultArgs instead
     */
    export type AnswerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AnswerDefaultArgs<ExtArgs>
    /**
     * @deprecated Use Study_SetDefaultArgs instead
     */
    export type Study_SetArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Study_SetDefaultArgs<ExtArgs>
    /**
     * @deprecated Use Study_Set_Questions_ListDefaultArgs instead
     */
    export type Study_Set_Questions_ListArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Study_Set_Questions_ListDefaultArgs<ExtArgs>

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