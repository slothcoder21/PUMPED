
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
 * Model Workout
 * 
 */
export type Workout = $Result.DefaultSelection<Prisma.$WorkoutPayload>
/**
 * Model Exercise
 * 
 */
export type Exercise = $Result.DefaultSelection<Prisma.$ExercisePayload>
/**
 * Model WorkoutExercise
 * 
 */
export type WorkoutExercise = $Result.DefaultSelection<Prisma.$WorkoutExercisePayload>
/**
 * Model Goal
 * 
 */
export type Goal = $Result.DefaultSelection<Prisma.$GoalPayload>
/**
 * Model Achievement
 * 
 */
export type Achievement = $Result.DefaultSelection<Prisma.$AchievementPayload>
/**
 * Model WeightHistory
 * 
 */
export type WeightHistory = $Result.DefaultSelection<Prisma.$WeightHistoryPayload>
/**
 * Model BodyMeasurement
 * 
 */
export type BodyMeasurement = $Result.DefaultSelection<Prisma.$BodyMeasurementPayload>
/**
 * Model AIWorkout
 * 
 */
export type AIWorkout = $Result.DefaultSelection<Prisma.$AIWorkoutPayload>
/**
 * Model AIWorkoutExercise
 * 
 */
export type AIWorkoutExercise = $Result.DefaultSelection<Prisma.$AIWorkoutExercisePayload>
/**
 * Model UserSettings
 * 
 */
export type UserSettings = $Result.DefaultSelection<Prisma.$UserSettingsPayload>
/**
 * Model ProgressStat
 * 
 */
export type ProgressStat = $Result.DefaultSelection<Prisma.$ProgressStatPayload>
/**
 * Model WorkoutStreak
 * 
 */
export type WorkoutStreak = $Result.DefaultSelection<Prisma.$WorkoutStreakPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const GoalType: {
  WEIGHT: 'WEIGHT',
  STRENGTH: 'STRENGTH',
  CARDIO: 'CARDIO',
  HABIT: 'HABIT',
  CUSTOM: 'CUSTOM'
};

export type GoalType = (typeof GoalType)[keyof typeof GoalType]


export const MeasurementType: {
  CHEST: 'CHEST',
  WAIST: 'WAIST',
  HIPS: 'HIPS',
  BICEP: 'BICEP',
  THIGH: 'THIGH',
  CALF: 'CALF',
  SHOULDERS: 'SHOULDERS',
  NECK: 'NECK',
  BODY_FAT_PERCENTAGE: 'BODY_FAT_PERCENTAGE',
  OTHER: 'OTHER'
};

export type MeasurementType = (typeof MeasurementType)[keyof typeof MeasurementType]


export const StatType: {
  WEIGHT: 'WEIGHT',
  STRENGTH: 'STRENGTH',
  CARDIO: 'CARDIO',
  WORKOUT_FREQUENCY: 'WORKOUT_FREQUENCY',
  BODY_MEASUREMENT: 'BODY_MEASUREMENT'
};

export type StatType = (typeof StatType)[keyof typeof StatType]


export const WorkoutStatus: {
  PLANNED: 'PLANNED',
  IN_PROGRESS: 'IN_PROGRESS',
  COMPLETED: 'COMPLETED'
};

export type WorkoutStatus = (typeof WorkoutStatus)[keyof typeof WorkoutStatus]

}

export type GoalType = $Enums.GoalType

export const GoalType: typeof $Enums.GoalType

export type MeasurementType = $Enums.MeasurementType

export const MeasurementType: typeof $Enums.MeasurementType

export type StatType = $Enums.StatType

export const StatType: typeof $Enums.StatType

export type WorkoutStatus = $Enums.WorkoutStatus

export const WorkoutStatus: typeof $Enums.WorkoutStatus

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

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
   * `prisma.workout`: Exposes CRUD operations for the **Workout** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Workouts
    * const workouts = await prisma.workout.findMany()
    * ```
    */
  get workout(): Prisma.WorkoutDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.exercise`: Exposes CRUD operations for the **Exercise** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Exercises
    * const exercises = await prisma.exercise.findMany()
    * ```
    */
  get exercise(): Prisma.ExerciseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workoutExercise`: Exposes CRUD operations for the **WorkoutExercise** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WorkoutExercises
    * const workoutExercises = await prisma.workoutExercise.findMany()
    * ```
    */
  get workoutExercise(): Prisma.WorkoutExerciseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.goal`: Exposes CRUD operations for the **Goal** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Goals
    * const goals = await prisma.goal.findMany()
    * ```
    */
  get goal(): Prisma.GoalDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.achievement`: Exposes CRUD operations for the **Achievement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Achievements
    * const achievements = await prisma.achievement.findMany()
    * ```
    */
  get achievement(): Prisma.AchievementDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.weightHistory`: Exposes CRUD operations for the **WeightHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WeightHistories
    * const weightHistories = await prisma.weightHistory.findMany()
    * ```
    */
  get weightHistory(): Prisma.WeightHistoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bodyMeasurement`: Exposes CRUD operations for the **BodyMeasurement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BodyMeasurements
    * const bodyMeasurements = await prisma.bodyMeasurement.findMany()
    * ```
    */
  get bodyMeasurement(): Prisma.BodyMeasurementDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.aIWorkout`: Exposes CRUD operations for the **AIWorkout** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AIWorkouts
    * const aIWorkouts = await prisma.aIWorkout.findMany()
    * ```
    */
  get aIWorkout(): Prisma.AIWorkoutDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.aIWorkoutExercise`: Exposes CRUD operations for the **AIWorkoutExercise** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AIWorkoutExercises
    * const aIWorkoutExercises = await prisma.aIWorkoutExercise.findMany()
    * ```
    */
  get aIWorkoutExercise(): Prisma.AIWorkoutExerciseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userSettings`: Exposes CRUD operations for the **UserSettings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserSettings
    * const userSettings = await prisma.userSettings.findMany()
    * ```
    */
  get userSettings(): Prisma.UserSettingsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.progressStat`: Exposes CRUD operations for the **ProgressStat** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProgressStats
    * const progressStats = await prisma.progressStat.findMany()
    * ```
    */
  get progressStat(): Prisma.ProgressStatDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workoutStreak`: Exposes CRUD operations for the **WorkoutStreak** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WorkoutStreaks
    * const workoutStreaks = await prisma.workoutStreak.findMany()
    * ```
    */
  get workoutStreak(): Prisma.WorkoutStreakDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
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
    User: 'User',
    Workout: 'Workout',
    Exercise: 'Exercise',
    WorkoutExercise: 'WorkoutExercise',
    Goal: 'Goal',
    Achievement: 'Achievement',
    WeightHistory: 'WeightHistory',
    BodyMeasurement: 'BodyMeasurement',
    AIWorkout: 'AIWorkout',
    AIWorkoutExercise: 'AIWorkoutExercise',
    UserSettings: 'UserSettings',
    ProgressStat: 'ProgressStat',
    WorkoutStreak: 'WorkoutStreak'
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
      modelProps: "user" | "workout" | "exercise" | "workoutExercise" | "goal" | "achievement" | "weightHistory" | "bodyMeasurement" | "aIWorkout" | "aIWorkoutExercise" | "userSettings" | "progressStat" | "workoutStreak"
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
      Workout: {
        payload: Prisma.$WorkoutPayload<ExtArgs>
        fields: Prisma.WorkoutFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkoutFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkoutFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPayload>
          }
          findFirst: {
            args: Prisma.WorkoutFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkoutFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPayload>
          }
          findMany: {
            args: Prisma.WorkoutFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPayload>[]
          }
          create: {
            args: Prisma.WorkoutCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPayload>
          }
          createMany: {
            args: Prisma.WorkoutCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorkoutCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPayload>[]
          }
          delete: {
            args: Prisma.WorkoutDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPayload>
          }
          update: {
            args: Prisma.WorkoutUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPayload>
          }
          deleteMany: {
            args: Prisma.WorkoutDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkoutUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WorkoutUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPayload>[]
          }
          upsert: {
            args: Prisma.WorkoutUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPayload>
          }
          aggregate: {
            args: Prisma.WorkoutAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkout>
          }
          groupBy: {
            args: Prisma.WorkoutGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkoutGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkoutCountArgs<ExtArgs>
            result: $Utils.Optional<WorkoutCountAggregateOutputType> | number
          }
        }
      }
      Exercise: {
        payload: Prisma.$ExercisePayload<ExtArgs>
        fields: Prisma.ExerciseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExerciseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExerciseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>
          }
          findFirst: {
            args: Prisma.ExerciseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExerciseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>
          }
          findMany: {
            args: Prisma.ExerciseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>[]
          }
          create: {
            args: Prisma.ExerciseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>
          }
          createMany: {
            args: Prisma.ExerciseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExerciseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>[]
          }
          delete: {
            args: Prisma.ExerciseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>
          }
          update: {
            args: Prisma.ExerciseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>
          }
          deleteMany: {
            args: Prisma.ExerciseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExerciseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExerciseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>[]
          }
          upsert: {
            args: Prisma.ExerciseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>
          }
          aggregate: {
            args: Prisma.ExerciseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExercise>
          }
          groupBy: {
            args: Prisma.ExerciseGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExerciseGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExerciseCountArgs<ExtArgs>
            result: $Utils.Optional<ExerciseCountAggregateOutputType> | number
          }
        }
      }
      WorkoutExercise: {
        payload: Prisma.$WorkoutExercisePayload<ExtArgs>
        fields: Prisma.WorkoutExerciseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkoutExerciseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutExercisePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkoutExerciseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutExercisePayload>
          }
          findFirst: {
            args: Prisma.WorkoutExerciseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutExercisePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkoutExerciseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutExercisePayload>
          }
          findMany: {
            args: Prisma.WorkoutExerciseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutExercisePayload>[]
          }
          create: {
            args: Prisma.WorkoutExerciseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutExercisePayload>
          }
          createMany: {
            args: Prisma.WorkoutExerciseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorkoutExerciseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutExercisePayload>[]
          }
          delete: {
            args: Prisma.WorkoutExerciseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutExercisePayload>
          }
          update: {
            args: Prisma.WorkoutExerciseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutExercisePayload>
          }
          deleteMany: {
            args: Prisma.WorkoutExerciseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkoutExerciseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WorkoutExerciseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutExercisePayload>[]
          }
          upsert: {
            args: Prisma.WorkoutExerciseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutExercisePayload>
          }
          aggregate: {
            args: Prisma.WorkoutExerciseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkoutExercise>
          }
          groupBy: {
            args: Prisma.WorkoutExerciseGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkoutExerciseGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkoutExerciseCountArgs<ExtArgs>
            result: $Utils.Optional<WorkoutExerciseCountAggregateOutputType> | number
          }
        }
      }
      Goal: {
        payload: Prisma.$GoalPayload<ExtArgs>
        fields: Prisma.GoalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GoalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GoalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>
          }
          findFirst: {
            args: Prisma.GoalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GoalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>
          }
          findMany: {
            args: Prisma.GoalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>[]
          }
          create: {
            args: Prisma.GoalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>
          }
          createMany: {
            args: Prisma.GoalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GoalCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>[]
          }
          delete: {
            args: Prisma.GoalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>
          }
          update: {
            args: Prisma.GoalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>
          }
          deleteMany: {
            args: Prisma.GoalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GoalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GoalUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>[]
          }
          upsert: {
            args: Prisma.GoalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>
          }
          aggregate: {
            args: Prisma.GoalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGoal>
          }
          groupBy: {
            args: Prisma.GoalGroupByArgs<ExtArgs>
            result: $Utils.Optional<GoalGroupByOutputType>[]
          }
          count: {
            args: Prisma.GoalCountArgs<ExtArgs>
            result: $Utils.Optional<GoalCountAggregateOutputType> | number
          }
        }
      }
      Achievement: {
        payload: Prisma.$AchievementPayload<ExtArgs>
        fields: Prisma.AchievementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AchievementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AchievementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload>
          }
          findFirst: {
            args: Prisma.AchievementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AchievementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload>
          }
          findMany: {
            args: Prisma.AchievementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload>[]
          }
          create: {
            args: Prisma.AchievementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload>
          }
          createMany: {
            args: Prisma.AchievementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AchievementCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload>[]
          }
          delete: {
            args: Prisma.AchievementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload>
          }
          update: {
            args: Prisma.AchievementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload>
          }
          deleteMany: {
            args: Prisma.AchievementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AchievementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AchievementUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload>[]
          }
          upsert: {
            args: Prisma.AchievementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload>
          }
          aggregate: {
            args: Prisma.AchievementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAchievement>
          }
          groupBy: {
            args: Prisma.AchievementGroupByArgs<ExtArgs>
            result: $Utils.Optional<AchievementGroupByOutputType>[]
          }
          count: {
            args: Prisma.AchievementCountArgs<ExtArgs>
            result: $Utils.Optional<AchievementCountAggregateOutputType> | number
          }
        }
      }
      WeightHistory: {
        payload: Prisma.$WeightHistoryPayload<ExtArgs>
        fields: Prisma.WeightHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WeightHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeightHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WeightHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeightHistoryPayload>
          }
          findFirst: {
            args: Prisma.WeightHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeightHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WeightHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeightHistoryPayload>
          }
          findMany: {
            args: Prisma.WeightHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeightHistoryPayload>[]
          }
          create: {
            args: Prisma.WeightHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeightHistoryPayload>
          }
          createMany: {
            args: Prisma.WeightHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WeightHistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeightHistoryPayload>[]
          }
          delete: {
            args: Prisma.WeightHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeightHistoryPayload>
          }
          update: {
            args: Prisma.WeightHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeightHistoryPayload>
          }
          deleteMany: {
            args: Prisma.WeightHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WeightHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WeightHistoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeightHistoryPayload>[]
          }
          upsert: {
            args: Prisma.WeightHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeightHistoryPayload>
          }
          aggregate: {
            args: Prisma.WeightHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWeightHistory>
          }
          groupBy: {
            args: Prisma.WeightHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<WeightHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.WeightHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<WeightHistoryCountAggregateOutputType> | number
          }
        }
      }
      BodyMeasurement: {
        payload: Prisma.$BodyMeasurementPayload<ExtArgs>
        fields: Prisma.BodyMeasurementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BodyMeasurementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BodyMeasurementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BodyMeasurementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BodyMeasurementPayload>
          }
          findFirst: {
            args: Prisma.BodyMeasurementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BodyMeasurementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BodyMeasurementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BodyMeasurementPayload>
          }
          findMany: {
            args: Prisma.BodyMeasurementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BodyMeasurementPayload>[]
          }
          create: {
            args: Prisma.BodyMeasurementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BodyMeasurementPayload>
          }
          createMany: {
            args: Prisma.BodyMeasurementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BodyMeasurementCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BodyMeasurementPayload>[]
          }
          delete: {
            args: Prisma.BodyMeasurementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BodyMeasurementPayload>
          }
          update: {
            args: Prisma.BodyMeasurementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BodyMeasurementPayload>
          }
          deleteMany: {
            args: Prisma.BodyMeasurementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BodyMeasurementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BodyMeasurementUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BodyMeasurementPayload>[]
          }
          upsert: {
            args: Prisma.BodyMeasurementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BodyMeasurementPayload>
          }
          aggregate: {
            args: Prisma.BodyMeasurementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBodyMeasurement>
          }
          groupBy: {
            args: Prisma.BodyMeasurementGroupByArgs<ExtArgs>
            result: $Utils.Optional<BodyMeasurementGroupByOutputType>[]
          }
          count: {
            args: Prisma.BodyMeasurementCountArgs<ExtArgs>
            result: $Utils.Optional<BodyMeasurementCountAggregateOutputType> | number
          }
        }
      }
      AIWorkout: {
        payload: Prisma.$AIWorkoutPayload<ExtArgs>
        fields: Prisma.AIWorkoutFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AIWorkoutFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIWorkoutPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AIWorkoutFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIWorkoutPayload>
          }
          findFirst: {
            args: Prisma.AIWorkoutFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIWorkoutPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AIWorkoutFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIWorkoutPayload>
          }
          findMany: {
            args: Prisma.AIWorkoutFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIWorkoutPayload>[]
          }
          create: {
            args: Prisma.AIWorkoutCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIWorkoutPayload>
          }
          createMany: {
            args: Prisma.AIWorkoutCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AIWorkoutCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIWorkoutPayload>[]
          }
          delete: {
            args: Prisma.AIWorkoutDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIWorkoutPayload>
          }
          update: {
            args: Prisma.AIWorkoutUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIWorkoutPayload>
          }
          deleteMany: {
            args: Prisma.AIWorkoutDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AIWorkoutUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AIWorkoutUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIWorkoutPayload>[]
          }
          upsert: {
            args: Prisma.AIWorkoutUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIWorkoutPayload>
          }
          aggregate: {
            args: Prisma.AIWorkoutAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAIWorkout>
          }
          groupBy: {
            args: Prisma.AIWorkoutGroupByArgs<ExtArgs>
            result: $Utils.Optional<AIWorkoutGroupByOutputType>[]
          }
          count: {
            args: Prisma.AIWorkoutCountArgs<ExtArgs>
            result: $Utils.Optional<AIWorkoutCountAggregateOutputType> | number
          }
        }
      }
      AIWorkoutExercise: {
        payload: Prisma.$AIWorkoutExercisePayload<ExtArgs>
        fields: Prisma.AIWorkoutExerciseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AIWorkoutExerciseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIWorkoutExercisePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AIWorkoutExerciseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIWorkoutExercisePayload>
          }
          findFirst: {
            args: Prisma.AIWorkoutExerciseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIWorkoutExercisePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AIWorkoutExerciseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIWorkoutExercisePayload>
          }
          findMany: {
            args: Prisma.AIWorkoutExerciseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIWorkoutExercisePayload>[]
          }
          create: {
            args: Prisma.AIWorkoutExerciseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIWorkoutExercisePayload>
          }
          createMany: {
            args: Prisma.AIWorkoutExerciseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AIWorkoutExerciseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIWorkoutExercisePayload>[]
          }
          delete: {
            args: Prisma.AIWorkoutExerciseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIWorkoutExercisePayload>
          }
          update: {
            args: Prisma.AIWorkoutExerciseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIWorkoutExercisePayload>
          }
          deleteMany: {
            args: Prisma.AIWorkoutExerciseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AIWorkoutExerciseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AIWorkoutExerciseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIWorkoutExercisePayload>[]
          }
          upsert: {
            args: Prisma.AIWorkoutExerciseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIWorkoutExercisePayload>
          }
          aggregate: {
            args: Prisma.AIWorkoutExerciseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAIWorkoutExercise>
          }
          groupBy: {
            args: Prisma.AIWorkoutExerciseGroupByArgs<ExtArgs>
            result: $Utils.Optional<AIWorkoutExerciseGroupByOutputType>[]
          }
          count: {
            args: Prisma.AIWorkoutExerciseCountArgs<ExtArgs>
            result: $Utils.Optional<AIWorkoutExerciseCountAggregateOutputType> | number
          }
        }
      }
      UserSettings: {
        payload: Prisma.$UserSettingsPayload<ExtArgs>
        fields: Prisma.UserSettingsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserSettingsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSettingsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserSettingsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSettingsPayload>
          }
          findFirst: {
            args: Prisma.UserSettingsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSettingsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserSettingsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSettingsPayload>
          }
          findMany: {
            args: Prisma.UserSettingsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSettingsPayload>[]
          }
          create: {
            args: Prisma.UserSettingsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSettingsPayload>
          }
          createMany: {
            args: Prisma.UserSettingsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserSettingsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSettingsPayload>[]
          }
          delete: {
            args: Prisma.UserSettingsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSettingsPayload>
          }
          update: {
            args: Prisma.UserSettingsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSettingsPayload>
          }
          deleteMany: {
            args: Prisma.UserSettingsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserSettingsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserSettingsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSettingsPayload>[]
          }
          upsert: {
            args: Prisma.UserSettingsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSettingsPayload>
          }
          aggregate: {
            args: Prisma.UserSettingsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserSettings>
          }
          groupBy: {
            args: Prisma.UserSettingsGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserSettingsGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserSettingsCountArgs<ExtArgs>
            result: $Utils.Optional<UserSettingsCountAggregateOutputType> | number
          }
        }
      }
      ProgressStat: {
        payload: Prisma.$ProgressStatPayload<ExtArgs>
        fields: Prisma.ProgressStatFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProgressStatFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressStatPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProgressStatFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressStatPayload>
          }
          findFirst: {
            args: Prisma.ProgressStatFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressStatPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProgressStatFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressStatPayload>
          }
          findMany: {
            args: Prisma.ProgressStatFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressStatPayload>[]
          }
          create: {
            args: Prisma.ProgressStatCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressStatPayload>
          }
          createMany: {
            args: Prisma.ProgressStatCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProgressStatCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressStatPayload>[]
          }
          delete: {
            args: Prisma.ProgressStatDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressStatPayload>
          }
          update: {
            args: Prisma.ProgressStatUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressStatPayload>
          }
          deleteMany: {
            args: Prisma.ProgressStatDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProgressStatUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProgressStatUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressStatPayload>[]
          }
          upsert: {
            args: Prisma.ProgressStatUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressStatPayload>
          }
          aggregate: {
            args: Prisma.ProgressStatAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProgressStat>
          }
          groupBy: {
            args: Prisma.ProgressStatGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProgressStatGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProgressStatCountArgs<ExtArgs>
            result: $Utils.Optional<ProgressStatCountAggregateOutputType> | number
          }
        }
      }
      WorkoutStreak: {
        payload: Prisma.$WorkoutStreakPayload<ExtArgs>
        fields: Prisma.WorkoutStreakFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkoutStreakFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutStreakPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkoutStreakFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutStreakPayload>
          }
          findFirst: {
            args: Prisma.WorkoutStreakFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutStreakPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkoutStreakFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutStreakPayload>
          }
          findMany: {
            args: Prisma.WorkoutStreakFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutStreakPayload>[]
          }
          create: {
            args: Prisma.WorkoutStreakCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutStreakPayload>
          }
          createMany: {
            args: Prisma.WorkoutStreakCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorkoutStreakCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutStreakPayload>[]
          }
          delete: {
            args: Prisma.WorkoutStreakDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutStreakPayload>
          }
          update: {
            args: Prisma.WorkoutStreakUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutStreakPayload>
          }
          deleteMany: {
            args: Prisma.WorkoutStreakDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkoutStreakUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WorkoutStreakUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutStreakPayload>[]
          }
          upsert: {
            args: Prisma.WorkoutStreakUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutStreakPayload>
          }
          aggregate: {
            args: Prisma.WorkoutStreakAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkoutStreak>
          }
          groupBy: {
            args: Prisma.WorkoutStreakGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkoutStreakGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkoutStreakCountArgs<ExtArgs>
            result: $Utils.Optional<WorkoutStreakCountAggregateOutputType> | number
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
    user?: UserOmit
    workout?: WorkoutOmit
    exercise?: ExerciseOmit
    workoutExercise?: WorkoutExerciseOmit
    goal?: GoalOmit
    achievement?: AchievementOmit
    weightHistory?: WeightHistoryOmit
    bodyMeasurement?: BodyMeasurementOmit
    aIWorkout?: AIWorkoutOmit
    aIWorkoutExercise?: AIWorkoutExerciseOmit
    userSettings?: UserSettingsOmit
    progressStat?: ProgressStatOmit
    workoutStreak?: WorkoutStreakOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    workouts: number
    goals: number
    achievements: number
    weightHistory: number
    bodyMeasurements: number
    aiWorkouts: number
    progressStats: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workouts?: boolean | UserCountOutputTypeCountWorkoutsArgs
    goals?: boolean | UserCountOutputTypeCountGoalsArgs
    achievements?: boolean | UserCountOutputTypeCountAchievementsArgs
    weightHistory?: boolean | UserCountOutputTypeCountWeightHistoryArgs
    bodyMeasurements?: boolean | UserCountOutputTypeCountBodyMeasurementsArgs
    aiWorkouts?: boolean | UserCountOutputTypeCountAiWorkoutsArgs
    progressStats?: boolean | UserCountOutputTypeCountProgressStatsArgs
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
  export type UserCountOutputTypeCountWorkoutsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkoutWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountGoalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GoalWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAchievementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AchievementWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountWeightHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WeightHistoryWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBodyMeasurementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BodyMeasurementWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAiWorkoutsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AIWorkoutWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProgressStatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProgressStatWhereInput
  }


  /**
   * Count Type WorkoutCountOutputType
   */

  export type WorkoutCountOutputType = {
    exercises: number
  }

  export type WorkoutCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exercises?: boolean | WorkoutCountOutputTypeCountExercisesArgs
  }

  // Custom InputTypes
  /**
   * WorkoutCountOutputType without action
   */
  export type WorkoutCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutCountOutputType
     */
    select?: WorkoutCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WorkoutCountOutputType without action
   */
  export type WorkoutCountOutputTypeCountExercisesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkoutExerciseWhereInput
  }


  /**
   * Count Type ExerciseCountOutputType
   */

  export type ExerciseCountOutputType = {
    workoutExercises: number
    aiWorkoutExercises: number
  }

  export type ExerciseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workoutExercises?: boolean | ExerciseCountOutputTypeCountWorkoutExercisesArgs
    aiWorkoutExercises?: boolean | ExerciseCountOutputTypeCountAiWorkoutExercisesArgs
  }

  // Custom InputTypes
  /**
   * ExerciseCountOutputType without action
   */
  export type ExerciseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseCountOutputType
     */
    select?: ExerciseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ExerciseCountOutputType without action
   */
  export type ExerciseCountOutputTypeCountWorkoutExercisesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkoutExerciseWhereInput
  }

  /**
   * ExerciseCountOutputType without action
   */
  export type ExerciseCountOutputTypeCountAiWorkoutExercisesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AIWorkoutExerciseWhereInput
  }


  /**
   * Count Type AIWorkoutCountOutputType
   */

  export type AIWorkoutCountOutputType = {
    exercises: number
  }

  export type AIWorkoutCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exercises?: boolean | AIWorkoutCountOutputTypeCountExercisesArgs
  }

  // Custom InputTypes
  /**
   * AIWorkoutCountOutputType without action
   */
  export type AIWorkoutCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIWorkoutCountOutputType
     */
    select?: AIWorkoutCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AIWorkoutCountOutputType without action
   */
  export type AIWorkoutCountOutputTypeCountExercisesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AIWorkoutExerciseWhereInput
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
    height: number | null
    weight: number | null
  }

  export type UserSumAggregateOutputType = {
    height: number | null
    weight: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    image: string | null
    height: number | null
    weight: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    image: string | null
    height: number | null
    weight: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    image: number
    height: number
    weight: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    height?: true
    weight?: true
  }

  export type UserSumAggregateInputType = {
    height?: true
    weight?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    image?: true
    height?: true
    weight?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    image?: true
    height?: true
    weight?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    image?: true
    height?: true
    weight?: true
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
    id: string
    name: string | null
    email: string
    password: string
    image: string | null
    height: number | null
    weight: number | null
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
    password?: boolean
    image?: boolean
    height?: boolean
    weight?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    workouts?: boolean | User$workoutsArgs<ExtArgs>
    goals?: boolean | User$goalsArgs<ExtArgs>
    achievements?: boolean | User$achievementsArgs<ExtArgs>
    weightHistory?: boolean | User$weightHistoryArgs<ExtArgs>
    bodyMeasurements?: boolean | User$bodyMeasurementsArgs<ExtArgs>
    aiWorkouts?: boolean | User$aiWorkoutsArgs<ExtArgs>
    userSettings?: boolean | User$userSettingsArgs<ExtArgs>
    progressStats?: boolean | User$progressStatsArgs<ExtArgs>
    workoutStreak?: boolean | User$workoutStreakArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    image?: boolean
    height?: boolean
    weight?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    image?: boolean
    height?: boolean
    weight?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    image?: boolean
    height?: boolean
    weight?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "image" | "height" | "weight" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workouts?: boolean | User$workoutsArgs<ExtArgs>
    goals?: boolean | User$goalsArgs<ExtArgs>
    achievements?: boolean | User$achievementsArgs<ExtArgs>
    weightHistory?: boolean | User$weightHistoryArgs<ExtArgs>
    bodyMeasurements?: boolean | User$bodyMeasurementsArgs<ExtArgs>
    aiWorkouts?: boolean | User$aiWorkoutsArgs<ExtArgs>
    userSettings?: boolean | User$userSettingsArgs<ExtArgs>
    progressStats?: boolean | User$progressStatsArgs<ExtArgs>
    workoutStreak?: boolean | User$workoutStreakArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      workouts: Prisma.$WorkoutPayload<ExtArgs>[]
      goals: Prisma.$GoalPayload<ExtArgs>[]
      achievements: Prisma.$AchievementPayload<ExtArgs>[]
      weightHistory: Prisma.$WeightHistoryPayload<ExtArgs>[]
      bodyMeasurements: Prisma.$BodyMeasurementPayload<ExtArgs>[]
      aiWorkouts: Prisma.$AIWorkoutPayload<ExtArgs>[]
      userSettings: Prisma.$UserSettingsPayload<ExtArgs> | null
      progressStats: Prisma.$ProgressStatPayload<ExtArgs>[]
      workoutStreak: Prisma.$WorkoutStreakPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      email: string
      password: string
      image: string | null
      height: number | null
      weight: number | null
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
    workouts<T extends User$workoutsArgs<ExtArgs> = {}>(args?: Subset<T, User$workoutsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    goals<T extends User$goalsArgs<ExtArgs> = {}>(args?: Subset<T, User$goalsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    achievements<T extends User$achievementsArgs<ExtArgs> = {}>(args?: Subset<T, User$achievementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    weightHistory<T extends User$weightHistoryArgs<ExtArgs> = {}>(args?: Subset<T, User$weightHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeightHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    bodyMeasurements<T extends User$bodyMeasurementsArgs<ExtArgs> = {}>(args?: Subset<T, User$bodyMeasurementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BodyMeasurementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    aiWorkouts<T extends User$aiWorkoutsArgs<ExtArgs> = {}>(args?: Subset<T, User$aiWorkoutsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AIWorkoutPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    userSettings<T extends User$userSettingsArgs<ExtArgs> = {}>(args?: Subset<T, User$userSettingsArgs<ExtArgs>>): Prisma__UserSettingsClient<$Result.GetResult<Prisma.$UserSettingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    progressStats<T extends User$progressStatsArgs<ExtArgs> = {}>(args?: Subset<T, User$progressStatsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgressStatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    workoutStreak<T extends User$workoutStreakArgs<ExtArgs> = {}>(args?: Subset<T, User$workoutStreakArgs<ExtArgs>>): Prisma__WorkoutStreakClient<$Result.GetResult<Prisma.$WorkoutStreakPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly image: FieldRef<"User", 'String'>
    readonly height: FieldRef<"User", 'Float'>
    readonly weight: FieldRef<"User", 'Float'>
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
   * User.workouts
   */
  export type User$workoutsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workout
     */
    omit?: WorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutInclude<ExtArgs> | null
    where?: WorkoutWhereInput
    orderBy?: WorkoutOrderByWithRelationInput | WorkoutOrderByWithRelationInput[]
    cursor?: WorkoutWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkoutScalarFieldEnum | WorkoutScalarFieldEnum[]
  }

  /**
   * User.goals
   */
  export type User$goalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    where?: GoalWhereInput
    orderBy?: GoalOrderByWithRelationInput | GoalOrderByWithRelationInput[]
    cursor?: GoalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GoalScalarFieldEnum | GoalScalarFieldEnum[]
  }

  /**
   * User.achievements
   */
  export type User$achievementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievement
     */
    omit?: AchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null
    where?: AchievementWhereInput
    orderBy?: AchievementOrderByWithRelationInput | AchievementOrderByWithRelationInput[]
    cursor?: AchievementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AchievementScalarFieldEnum | AchievementScalarFieldEnum[]
  }

  /**
   * User.weightHistory
   */
  export type User$weightHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeightHistory
     */
    select?: WeightHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeightHistory
     */
    omit?: WeightHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeightHistoryInclude<ExtArgs> | null
    where?: WeightHistoryWhereInput
    orderBy?: WeightHistoryOrderByWithRelationInput | WeightHistoryOrderByWithRelationInput[]
    cursor?: WeightHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WeightHistoryScalarFieldEnum | WeightHistoryScalarFieldEnum[]
  }

  /**
   * User.bodyMeasurements
   */
  export type User$bodyMeasurementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BodyMeasurement
     */
    select?: BodyMeasurementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BodyMeasurement
     */
    omit?: BodyMeasurementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BodyMeasurementInclude<ExtArgs> | null
    where?: BodyMeasurementWhereInput
    orderBy?: BodyMeasurementOrderByWithRelationInput | BodyMeasurementOrderByWithRelationInput[]
    cursor?: BodyMeasurementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BodyMeasurementScalarFieldEnum | BodyMeasurementScalarFieldEnum[]
  }

  /**
   * User.aiWorkouts
   */
  export type User$aiWorkoutsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIWorkout
     */
    select?: AIWorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIWorkout
     */
    omit?: AIWorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIWorkoutInclude<ExtArgs> | null
    where?: AIWorkoutWhereInput
    orderBy?: AIWorkoutOrderByWithRelationInput | AIWorkoutOrderByWithRelationInput[]
    cursor?: AIWorkoutWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AIWorkoutScalarFieldEnum | AIWorkoutScalarFieldEnum[]
  }

  /**
   * User.userSettings
   */
  export type User$userSettingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSettings
     */
    select?: UserSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSettings
     */
    omit?: UserSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSettingsInclude<ExtArgs> | null
    where?: UserSettingsWhereInput
  }

  /**
   * User.progressStats
   */
  export type User$progressStatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressStat
     */
    select?: ProgressStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressStat
     */
    omit?: ProgressStatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressStatInclude<ExtArgs> | null
    where?: ProgressStatWhereInput
    orderBy?: ProgressStatOrderByWithRelationInput | ProgressStatOrderByWithRelationInput[]
    cursor?: ProgressStatWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProgressStatScalarFieldEnum | ProgressStatScalarFieldEnum[]
  }

  /**
   * User.workoutStreak
   */
  export type User$workoutStreakArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutStreak
     */
    select?: WorkoutStreakSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutStreak
     */
    omit?: WorkoutStreakOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutStreakInclude<ExtArgs> | null
    where?: WorkoutStreakWhereInput
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
   * Model Workout
   */

  export type AggregateWorkout = {
    _count: WorkoutCountAggregateOutputType | null
    _avg: WorkoutAvgAggregateOutputType | null
    _sum: WorkoutSumAggregateOutputType | null
    _min: WorkoutMinAggregateOutputType | null
    _max: WorkoutMaxAggregateOutputType | null
  }

  export type WorkoutAvgAggregateOutputType = {
    duration: number | null
  }

  export type WorkoutSumAggregateOutputType = {
    duration: number | null
  }

  export type WorkoutMinAggregateOutputType = {
    id: string | null
    name: string | null
    date: Date | null
    duration: number | null
    notes: string | null
    isCompleted: boolean | null
    status: $Enums.WorkoutStatus | null
    startedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    category: string | null
  }

  export type WorkoutMaxAggregateOutputType = {
    id: string | null
    name: string | null
    date: Date | null
    duration: number | null
    notes: string | null
    isCompleted: boolean | null
    status: $Enums.WorkoutStatus | null
    startedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    category: string | null
  }

  export type WorkoutCountAggregateOutputType = {
    id: number
    name: number
    date: number
    duration: number
    notes: number
    isCompleted: number
    status: number
    startedAt: number
    createdAt: number
    updatedAt: number
    userId: number
    category: number
    _all: number
  }


  export type WorkoutAvgAggregateInputType = {
    duration?: true
  }

  export type WorkoutSumAggregateInputType = {
    duration?: true
  }

  export type WorkoutMinAggregateInputType = {
    id?: true
    name?: true
    date?: true
    duration?: true
    notes?: true
    isCompleted?: true
    status?: true
    startedAt?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    category?: true
  }

  export type WorkoutMaxAggregateInputType = {
    id?: true
    name?: true
    date?: true
    duration?: true
    notes?: true
    isCompleted?: true
    status?: true
    startedAt?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    category?: true
  }

  export type WorkoutCountAggregateInputType = {
    id?: true
    name?: true
    date?: true
    duration?: true
    notes?: true
    isCompleted?: true
    status?: true
    startedAt?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    category?: true
    _all?: true
  }

  export type WorkoutAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Workout to aggregate.
     */
    where?: WorkoutWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workouts to fetch.
     */
    orderBy?: WorkoutOrderByWithRelationInput | WorkoutOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkoutWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workouts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Workouts
    **/
    _count?: true | WorkoutCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WorkoutAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WorkoutSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkoutMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkoutMaxAggregateInputType
  }

  export type GetWorkoutAggregateType<T extends WorkoutAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkout]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkout[P]>
      : GetScalarType<T[P], AggregateWorkout[P]>
  }




  export type WorkoutGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkoutWhereInput
    orderBy?: WorkoutOrderByWithAggregationInput | WorkoutOrderByWithAggregationInput[]
    by: WorkoutScalarFieldEnum[] | WorkoutScalarFieldEnum
    having?: WorkoutScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkoutCountAggregateInputType | true
    _avg?: WorkoutAvgAggregateInputType
    _sum?: WorkoutSumAggregateInputType
    _min?: WorkoutMinAggregateInputType
    _max?: WorkoutMaxAggregateInputType
  }

  export type WorkoutGroupByOutputType = {
    id: string
    name: string
    date: Date
    duration: number | null
    notes: string | null
    isCompleted: boolean
    status: $Enums.WorkoutStatus
    startedAt: Date | null
    createdAt: Date
    updatedAt: Date
    userId: string
    category: string | null
    _count: WorkoutCountAggregateOutputType | null
    _avg: WorkoutAvgAggregateOutputType | null
    _sum: WorkoutSumAggregateOutputType | null
    _min: WorkoutMinAggregateOutputType | null
    _max: WorkoutMaxAggregateOutputType | null
  }

  type GetWorkoutGroupByPayload<T extends WorkoutGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkoutGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkoutGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkoutGroupByOutputType[P]>
            : GetScalarType<T[P], WorkoutGroupByOutputType[P]>
        }
      >
    >


  export type WorkoutSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    date?: boolean
    duration?: boolean
    notes?: boolean
    isCompleted?: boolean
    status?: boolean
    startedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    category?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    exercises?: boolean | Workout$exercisesArgs<ExtArgs>
    _count?: boolean | WorkoutCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workout"]>

  export type WorkoutSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    date?: boolean
    duration?: boolean
    notes?: boolean
    isCompleted?: boolean
    status?: boolean
    startedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    category?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workout"]>

  export type WorkoutSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    date?: boolean
    duration?: boolean
    notes?: boolean
    isCompleted?: boolean
    status?: boolean
    startedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    category?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workout"]>

  export type WorkoutSelectScalar = {
    id?: boolean
    name?: boolean
    date?: boolean
    duration?: boolean
    notes?: boolean
    isCompleted?: boolean
    status?: boolean
    startedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    category?: boolean
  }

  export type WorkoutOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "date" | "duration" | "notes" | "isCompleted" | "status" | "startedAt" | "createdAt" | "updatedAt" | "userId" | "category", ExtArgs["result"]["workout"]>
  export type WorkoutInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    exercises?: boolean | Workout$exercisesArgs<ExtArgs>
    _count?: boolean | WorkoutCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WorkoutIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type WorkoutIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $WorkoutPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Workout"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      exercises: Prisma.$WorkoutExercisePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      date: Date
      duration: number | null
      notes: string | null
      isCompleted: boolean
      status: $Enums.WorkoutStatus
      startedAt: Date | null
      createdAt: Date
      updatedAt: Date
      userId: string
      category: string | null
    }, ExtArgs["result"]["workout"]>
    composites: {}
  }

  type WorkoutGetPayload<S extends boolean | null | undefined | WorkoutDefaultArgs> = $Result.GetResult<Prisma.$WorkoutPayload, S>

  type WorkoutCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkoutFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkoutCountAggregateInputType | true
    }

  export interface WorkoutDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Workout'], meta: { name: 'Workout' } }
    /**
     * Find zero or one Workout that matches the filter.
     * @param {WorkoutFindUniqueArgs} args - Arguments to find a Workout
     * @example
     * // Get one Workout
     * const workout = await prisma.workout.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkoutFindUniqueArgs>(args: SelectSubset<T, WorkoutFindUniqueArgs<ExtArgs>>): Prisma__WorkoutClient<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Workout that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkoutFindUniqueOrThrowArgs} args - Arguments to find a Workout
     * @example
     * // Get one Workout
     * const workout = await prisma.workout.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkoutFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkoutFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkoutClient<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Workout that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutFindFirstArgs} args - Arguments to find a Workout
     * @example
     * // Get one Workout
     * const workout = await prisma.workout.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkoutFindFirstArgs>(args?: SelectSubset<T, WorkoutFindFirstArgs<ExtArgs>>): Prisma__WorkoutClient<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Workout that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutFindFirstOrThrowArgs} args - Arguments to find a Workout
     * @example
     * // Get one Workout
     * const workout = await prisma.workout.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkoutFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkoutFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkoutClient<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Workouts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Workouts
     * const workouts = await prisma.workout.findMany()
     * 
     * // Get first 10 Workouts
     * const workouts = await prisma.workout.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workoutWithIdOnly = await prisma.workout.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkoutFindManyArgs>(args?: SelectSubset<T, WorkoutFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Workout.
     * @param {WorkoutCreateArgs} args - Arguments to create a Workout.
     * @example
     * // Create one Workout
     * const Workout = await prisma.workout.create({
     *   data: {
     *     // ... data to create a Workout
     *   }
     * })
     * 
     */
    create<T extends WorkoutCreateArgs>(args: SelectSubset<T, WorkoutCreateArgs<ExtArgs>>): Prisma__WorkoutClient<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Workouts.
     * @param {WorkoutCreateManyArgs} args - Arguments to create many Workouts.
     * @example
     * // Create many Workouts
     * const workout = await prisma.workout.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkoutCreateManyArgs>(args?: SelectSubset<T, WorkoutCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Workouts and returns the data saved in the database.
     * @param {WorkoutCreateManyAndReturnArgs} args - Arguments to create many Workouts.
     * @example
     * // Create many Workouts
     * const workout = await prisma.workout.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Workouts and only return the `id`
     * const workoutWithIdOnly = await prisma.workout.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorkoutCreateManyAndReturnArgs>(args?: SelectSubset<T, WorkoutCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Workout.
     * @param {WorkoutDeleteArgs} args - Arguments to delete one Workout.
     * @example
     * // Delete one Workout
     * const Workout = await prisma.workout.delete({
     *   where: {
     *     // ... filter to delete one Workout
     *   }
     * })
     * 
     */
    delete<T extends WorkoutDeleteArgs>(args: SelectSubset<T, WorkoutDeleteArgs<ExtArgs>>): Prisma__WorkoutClient<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Workout.
     * @param {WorkoutUpdateArgs} args - Arguments to update one Workout.
     * @example
     * // Update one Workout
     * const workout = await prisma.workout.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkoutUpdateArgs>(args: SelectSubset<T, WorkoutUpdateArgs<ExtArgs>>): Prisma__WorkoutClient<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Workouts.
     * @param {WorkoutDeleteManyArgs} args - Arguments to filter Workouts to delete.
     * @example
     * // Delete a few Workouts
     * const { count } = await prisma.workout.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkoutDeleteManyArgs>(args?: SelectSubset<T, WorkoutDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Workouts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Workouts
     * const workout = await prisma.workout.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkoutUpdateManyArgs>(args: SelectSubset<T, WorkoutUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Workouts and returns the data updated in the database.
     * @param {WorkoutUpdateManyAndReturnArgs} args - Arguments to update many Workouts.
     * @example
     * // Update many Workouts
     * const workout = await prisma.workout.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Workouts and only return the `id`
     * const workoutWithIdOnly = await prisma.workout.updateManyAndReturn({
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
    updateManyAndReturn<T extends WorkoutUpdateManyAndReturnArgs>(args: SelectSubset<T, WorkoutUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Workout.
     * @param {WorkoutUpsertArgs} args - Arguments to update or create a Workout.
     * @example
     * // Update or create a Workout
     * const workout = await prisma.workout.upsert({
     *   create: {
     *     // ... data to create a Workout
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Workout we want to update
     *   }
     * })
     */
    upsert<T extends WorkoutUpsertArgs>(args: SelectSubset<T, WorkoutUpsertArgs<ExtArgs>>): Prisma__WorkoutClient<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Workouts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutCountArgs} args - Arguments to filter Workouts to count.
     * @example
     * // Count the number of Workouts
     * const count = await prisma.workout.count({
     *   where: {
     *     // ... the filter for the Workouts we want to count
     *   }
     * })
    **/
    count<T extends WorkoutCountArgs>(
      args?: Subset<T, WorkoutCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkoutCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Workout.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WorkoutAggregateArgs>(args: Subset<T, WorkoutAggregateArgs>): Prisma.PrismaPromise<GetWorkoutAggregateType<T>>

    /**
     * Group by Workout.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutGroupByArgs} args - Group by arguments.
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
      T extends WorkoutGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkoutGroupByArgs['orderBy'] }
        : { orderBy?: WorkoutGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WorkoutGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkoutGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Workout model
   */
  readonly fields: WorkoutFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Workout.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkoutClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    exercises<T extends Workout$exercisesArgs<ExtArgs> = {}>(args?: Subset<T, Workout$exercisesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutExercisePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Workout model
   */
  interface WorkoutFieldRefs {
    readonly id: FieldRef<"Workout", 'String'>
    readonly name: FieldRef<"Workout", 'String'>
    readonly date: FieldRef<"Workout", 'DateTime'>
    readonly duration: FieldRef<"Workout", 'Int'>
    readonly notes: FieldRef<"Workout", 'String'>
    readonly isCompleted: FieldRef<"Workout", 'Boolean'>
    readonly status: FieldRef<"Workout", 'WorkoutStatus'>
    readonly startedAt: FieldRef<"Workout", 'DateTime'>
    readonly createdAt: FieldRef<"Workout", 'DateTime'>
    readonly updatedAt: FieldRef<"Workout", 'DateTime'>
    readonly userId: FieldRef<"Workout", 'String'>
    readonly category: FieldRef<"Workout", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Workout findUnique
   */
  export type WorkoutFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workout
     */
    omit?: WorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutInclude<ExtArgs> | null
    /**
     * Filter, which Workout to fetch.
     */
    where: WorkoutWhereUniqueInput
  }

  /**
   * Workout findUniqueOrThrow
   */
  export type WorkoutFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workout
     */
    omit?: WorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutInclude<ExtArgs> | null
    /**
     * Filter, which Workout to fetch.
     */
    where: WorkoutWhereUniqueInput
  }

  /**
   * Workout findFirst
   */
  export type WorkoutFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workout
     */
    omit?: WorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutInclude<ExtArgs> | null
    /**
     * Filter, which Workout to fetch.
     */
    where?: WorkoutWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workouts to fetch.
     */
    orderBy?: WorkoutOrderByWithRelationInput | WorkoutOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Workouts.
     */
    cursor?: WorkoutWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workouts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Workouts.
     */
    distinct?: WorkoutScalarFieldEnum | WorkoutScalarFieldEnum[]
  }

  /**
   * Workout findFirstOrThrow
   */
  export type WorkoutFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workout
     */
    omit?: WorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutInclude<ExtArgs> | null
    /**
     * Filter, which Workout to fetch.
     */
    where?: WorkoutWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workouts to fetch.
     */
    orderBy?: WorkoutOrderByWithRelationInput | WorkoutOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Workouts.
     */
    cursor?: WorkoutWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workouts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Workouts.
     */
    distinct?: WorkoutScalarFieldEnum | WorkoutScalarFieldEnum[]
  }

  /**
   * Workout findMany
   */
  export type WorkoutFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workout
     */
    omit?: WorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutInclude<ExtArgs> | null
    /**
     * Filter, which Workouts to fetch.
     */
    where?: WorkoutWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workouts to fetch.
     */
    orderBy?: WorkoutOrderByWithRelationInput | WorkoutOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Workouts.
     */
    cursor?: WorkoutWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workouts.
     */
    skip?: number
    distinct?: WorkoutScalarFieldEnum | WorkoutScalarFieldEnum[]
  }

  /**
   * Workout create
   */
  export type WorkoutCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workout
     */
    omit?: WorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutInclude<ExtArgs> | null
    /**
     * The data needed to create a Workout.
     */
    data: XOR<WorkoutCreateInput, WorkoutUncheckedCreateInput>
  }

  /**
   * Workout createMany
   */
  export type WorkoutCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Workouts.
     */
    data: WorkoutCreateManyInput | WorkoutCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Workout createManyAndReturn
   */
  export type WorkoutCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Workout
     */
    omit?: WorkoutOmit<ExtArgs> | null
    /**
     * The data used to create many Workouts.
     */
    data: WorkoutCreateManyInput | WorkoutCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Workout update
   */
  export type WorkoutUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workout
     */
    omit?: WorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutInclude<ExtArgs> | null
    /**
     * The data needed to update a Workout.
     */
    data: XOR<WorkoutUpdateInput, WorkoutUncheckedUpdateInput>
    /**
     * Choose, which Workout to update.
     */
    where: WorkoutWhereUniqueInput
  }

  /**
   * Workout updateMany
   */
  export type WorkoutUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Workouts.
     */
    data: XOR<WorkoutUpdateManyMutationInput, WorkoutUncheckedUpdateManyInput>
    /**
     * Filter which Workouts to update
     */
    where?: WorkoutWhereInput
    /**
     * Limit how many Workouts to update.
     */
    limit?: number
  }

  /**
   * Workout updateManyAndReturn
   */
  export type WorkoutUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Workout
     */
    omit?: WorkoutOmit<ExtArgs> | null
    /**
     * The data used to update Workouts.
     */
    data: XOR<WorkoutUpdateManyMutationInput, WorkoutUncheckedUpdateManyInput>
    /**
     * Filter which Workouts to update
     */
    where?: WorkoutWhereInput
    /**
     * Limit how many Workouts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Workout upsert
   */
  export type WorkoutUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workout
     */
    omit?: WorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutInclude<ExtArgs> | null
    /**
     * The filter to search for the Workout to update in case it exists.
     */
    where: WorkoutWhereUniqueInput
    /**
     * In case the Workout found by the `where` argument doesn't exist, create a new Workout with this data.
     */
    create: XOR<WorkoutCreateInput, WorkoutUncheckedCreateInput>
    /**
     * In case the Workout was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkoutUpdateInput, WorkoutUncheckedUpdateInput>
  }

  /**
   * Workout delete
   */
  export type WorkoutDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workout
     */
    omit?: WorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutInclude<ExtArgs> | null
    /**
     * Filter which Workout to delete.
     */
    where: WorkoutWhereUniqueInput
  }

  /**
   * Workout deleteMany
   */
  export type WorkoutDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Workouts to delete
     */
    where?: WorkoutWhereInput
    /**
     * Limit how many Workouts to delete.
     */
    limit?: number
  }

  /**
   * Workout.exercises
   */
  export type Workout$exercisesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutExercise
     */
    select?: WorkoutExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutExercise
     */
    omit?: WorkoutExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutExerciseInclude<ExtArgs> | null
    where?: WorkoutExerciseWhereInput
    orderBy?: WorkoutExerciseOrderByWithRelationInput | WorkoutExerciseOrderByWithRelationInput[]
    cursor?: WorkoutExerciseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkoutExerciseScalarFieldEnum | WorkoutExerciseScalarFieldEnum[]
  }

  /**
   * Workout without action
   */
  export type WorkoutDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workout
     */
    omit?: WorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutInclude<ExtArgs> | null
  }


  /**
   * Model Exercise
   */

  export type AggregateExercise = {
    _count: ExerciseCountAggregateOutputType | null
    _min: ExerciseMinAggregateOutputType | null
    _max: ExerciseMaxAggregateOutputType | null
  }

  export type ExerciseMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    muscleGroup: string | null
    equipment: string | null
    instructions: string | null
    videoUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ExerciseMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    muscleGroup: string | null
    equipment: string | null
    instructions: string | null
    videoUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ExerciseCountAggregateOutputType = {
    id: number
    name: number
    description: number
    muscleGroup: number
    equipment: number
    instructions: number
    videoUrl: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ExerciseMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    muscleGroup?: true
    equipment?: true
    instructions?: true
    videoUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ExerciseMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    muscleGroup?: true
    equipment?: true
    instructions?: true
    videoUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ExerciseCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    muscleGroup?: true
    equipment?: true
    instructions?: true
    videoUrl?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ExerciseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Exercise to aggregate.
     */
    where?: ExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exercises to fetch.
     */
    orderBy?: ExerciseOrderByWithRelationInput | ExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Exercises
    **/
    _count?: true | ExerciseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExerciseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExerciseMaxAggregateInputType
  }

  export type GetExerciseAggregateType<T extends ExerciseAggregateArgs> = {
        [P in keyof T & keyof AggregateExercise]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExercise[P]>
      : GetScalarType<T[P], AggregateExercise[P]>
  }




  export type ExerciseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExerciseWhereInput
    orderBy?: ExerciseOrderByWithAggregationInput | ExerciseOrderByWithAggregationInput[]
    by: ExerciseScalarFieldEnum[] | ExerciseScalarFieldEnum
    having?: ExerciseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExerciseCountAggregateInputType | true
    _min?: ExerciseMinAggregateInputType
    _max?: ExerciseMaxAggregateInputType
  }

  export type ExerciseGroupByOutputType = {
    id: string
    name: string
    description: string | null
    muscleGroup: string
    equipment: string | null
    instructions: string | null
    videoUrl: string | null
    createdAt: Date
    updatedAt: Date
    _count: ExerciseCountAggregateOutputType | null
    _min: ExerciseMinAggregateOutputType | null
    _max: ExerciseMaxAggregateOutputType | null
  }

  type GetExerciseGroupByPayload<T extends ExerciseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExerciseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExerciseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExerciseGroupByOutputType[P]>
            : GetScalarType<T[P], ExerciseGroupByOutputType[P]>
        }
      >
    >


  export type ExerciseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    muscleGroup?: boolean
    equipment?: boolean
    instructions?: boolean
    videoUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    workoutExercises?: boolean | Exercise$workoutExercisesArgs<ExtArgs>
    aiWorkoutExercises?: boolean | Exercise$aiWorkoutExercisesArgs<ExtArgs>
    _count?: boolean | ExerciseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["exercise"]>

  export type ExerciseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    muscleGroup?: boolean
    equipment?: boolean
    instructions?: boolean
    videoUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["exercise"]>

  export type ExerciseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    muscleGroup?: boolean
    equipment?: boolean
    instructions?: boolean
    videoUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["exercise"]>

  export type ExerciseSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    muscleGroup?: boolean
    equipment?: boolean
    instructions?: boolean
    videoUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ExerciseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "muscleGroup" | "equipment" | "instructions" | "videoUrl" | "createdAt" | "updatedAt", ExtArgs["result"]["exercise"]>
  export type ExerciseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workoutExercises?: boolean | Exercise$workoutExercisesArgs<ExtArgs>
    aiWorkoutExercises?: boolean | Exercise$aiWorkoutExercisesArgs<ExtArgs>
    _count?: boolean | ExerciseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ExerciseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ExerciseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ExercisePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Exercise"
    objects: {
      workoutExercises: Prisma.$WorkoutExercisePayload<ExtArgs>[]
      aiWorkoutExercises: Prisma.$AIWorkoutExercisePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      muscleGroup: string
      equipment: string | null
      instructions: string | null
      videoUrl: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["exercise"]>
    composites: {}
  }

  type ExerciseGetPayload<S extends boolean | null | undefined | ExerciseDefaultArgs> = $Result.GetResult<Prisma.$ExercisePayload, S>

  type ExerciseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExerciseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExerciseCountAggregateInputType | true
    }

  export interface ExerciseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Exercise'], meta: { name: 'Exercise' } }
    /**
     * Find zero or one Exercise that matches the filter.
     * @param {ExerciseFindUniqueArgs} args - Arguments to find a Exercise
     * @example
     * // Get one Exercise
     * const exercise = await prisma.exercise.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExerciseFindUniqueArgs>(args: SelectSubset<T, ExerciseFindUniqueArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Exercise that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExerciseFindUniqueOrThrowArgs} args - Arguments to find a Exercise
     * @example
     * // Get one Exercise
     * const exercise = await prisma.exercise.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExerciseFindUniqueOrThrowArgs>(args: SelectSubset<T, ExerciseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Exercise that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseFindFirstArgs} args - Arguments to find a Exercise
     * @example
     * // Get one Exercise
     * const exercise = await prisma.exercise.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExerciseFindFirstArgs>(args?: SelectSubset<T, ExerciseFindFirstArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Exercise that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseFindFirstOrThrowArgs} args - Arguments to find a Exercise
     * @example
     * // Get one Exercise
     * const exercise = await prisma.exercise.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExerciseFindFirstOrThrowArgs>(args?: SelectSubset<T, ExerciseFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Exercises that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Exercises
     * const exercises = await prisma.exercise.findMany()
     * 
     * // Get first 10 Exercises
     * const exercises = await prisma.exercise.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const exerciseWithIdOnly = await prisma.exercise.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExerciseFindManyArgs>(args?: SelectSubset<T, ExerciseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Exercise.
     * @param {ExerciseCreateArgs} args - Arguments to create a Exercise.
     * @example
     * // Create one Exercise
     * const Exercise = await prisma.exercise.create({
     *   data: {
     *     // ... data to create a Exercise
     *   }
     * })
     * 
     */
    create<T extends ExerciseCreateArgs>(args: SelectSubset<T, ExerciseCreateArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Exercises.
     * @param {ExerciseCreateManyArgs} args - Arguments to create many Exercises.
     * @example
     * // Create many Exercises
     * const exercise = await prisma.exercise.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExerciseCreateManyArgs>(args?: SelectSubset<T, ExerciseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Exercises and returns the data saved in the database.
     * @param {ExerciseCreateManyAndReturnArgs} args - Arguments to create many Exercises.
     * @example
     * // Create many Exercises
     * const exercise = await prisma.exercise.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Exercises and only return the `id`
     * const exerciseWithIdOnly = await prisma.exercise.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExerciseCreateManyAndReturnArgs>(args?: SelectSubset<T, ExerciseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Exercise.
     * @param {ExerciseDeleteArgs} args - Arguments to delete one Exercise.
     * @example
     * // Delete one Exercise
     * const Exercise = await prisma.exercise.delete({
     *   where: {
     *     // ... filter to delete one Exercise
     *   }
     * })
     * 
     */
    delete<T extends ExerciseDeleteArgs>(args: SelectSubset<T, ExerciseDeleteArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Exercise.
     * @param {ExerciseUpdateArgs} args - Arguments to update one Exercise.
     * @example
     * // Update one Exercise
     * const exercise = await prisma.exercise.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExerciseUpdateArgs>(args: SelectSubset<T, ExerciseUpdateArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Exercises.
     * @param {ExerciseDeleteManyArgs} args - Arguments to filter Exercises to delete.
     * @example
     * // Delete a few Exercises
     * const { count } = await prisma.exercise.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExerciseDeleteManyArgs>(args?: SelectSubset<T, ExerciseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Exercises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Exercises
     * const exercise = await prisma.exercise.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExerciseUpdateManyArgs>(args: SelectSubset<T, ExerciseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Exercises and returns the data updated in the database.
     * @param {ExerciseUpdateManyAndReturnArgs} args - Arguments to update many Exercises.
     * @example
     * // Update many Exercises
     * const exercise = await prisma.exercise.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Exercises and only return the `id`
     * const exerciseWithIdOnly = await prisma.exercise.updateManyAndReturn({
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
    updateManyAndReturn<T extends ExerciseUpdateManyAndReturnArgs>(args: SelectSubset<T, ExerciseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Exercise.
     * @param {ExerciseUpsertArgs} args - Arguments to update or create a Exercise.
     * @example
     * // Update or create a Exercise
     * const exercise = await prisma.exercise.upsert({
     *   create: {
     *     // ... data to create a Exercise
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Exercise we want to update
     *   }
     * })
     */
    upsert<T extends ExerciseUpsertArgs>(args: SelectSubset<T, ExerciseUpsertArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Exercises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseCountArgs} args - Arguments to filter Exercises to count.
     * @example
     * // Count the number of Exercises
     * const count = await prisma.exercise.count({
     *   where: {
     *     // ... the filter for the Exercises we want to count
     *   }
     * })
    **/
    count<T extends ExerciseCountArgs>(
      args?: Subset<T, ExerciseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExerciseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Exercise.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ExerciseAggregateArgs>(args: Subset<T, ExerciseAggregateArgs>): Prisma.PrismaPromise<GetExerciseAggregateType<T>>

    /**
     * Group by Exercise.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseGroupByArgs} args - Group by arguments.
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
      T extends ExerciseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExerciseGroupByArgs['orderBy'] }
        : { orderBy?: ExerciseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ExerciseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExerciseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Exercise model
   */
  readonly fields: ExerciseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Exercise.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExerciseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    workoutExercises<T extends Exercise$workoutExercisesArgs<ExtArgs> = {}>(args?: Subset<T, Exercise$workoutExercisesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutExercisePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    aiWorkoutExercises<T extends Exercise$aiWorkoutExercisesArgs<ExtArgs> = {}>(args?: Subset<T, Exercise$aiWorkoutExercisesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AIWorkoutExercisePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Exercise model
   */
  interface ExerciseFieldRefs {
    readonly id: FieldRef<"Exercise", 'String'>
    readonly name: FieldRef<"Exercise", 'String'>
    readonly description: FieldRef<"Exercise", 'String'>
    readonly muscleGroup: FieldRef<"Exercise", 'String'>
    readonly equipment: FieldRef<"Exercise", 'String'>
    readonly instructions: FieldRef<"Exercise", 'String'>
    readonly videoUrl: FieldRef<"Exercise", 'String'>
    readonly createdAt: FieldRef<"Exercise", 'DateTime'>
    readonly updatedAt: FieldRef<"Exercise", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Exercise findUnique
   */
  export type ExerciseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * Filter, which Exercise to fetch.
     */
    where: ExerciseWhereUniqueInput
  }

  /**
   * Exercise findUniqueOrThrow
   */
  export type ExerciseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * Filter, which Exercise to fetch.
     */
    where: ExerciseWhereUniqueInput
  }

  /**
   * Exercise findFirst
   */
  export type ExerciseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * Filter, which Exercise to fetch.
     */
    where?: ExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exercises to fetch.
     */
    orderBy?: ExerciseOrderByWithRelationInput | ExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Exercises.
     */
    cursor?: ExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Exercises.
     */
    distinct?: ExerciseScalarFieldEnum | ExerciseScalarFieldEnum[]
  }

  /**
   * Exercise findFirstOrThrow
   */
  export type ExerciseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * Filter, which Exercise to fetch.
     */
    where?: ExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exercises to fetch.
     */
    orderBy?: ExerciseOrderByWithRelationInput | ExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Exercises.
     */
    cursor?: ExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Exercises.
     */
    distinct?: ExerciseScalarFieldEnum | ExerciseScalarFieldEnum[]
  }

  /**
   * Exercise findMany
   */
  export type ExerciseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * Filter, which Exercises to fetch.
     */
    where?: ExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exercises to fetch.
     */
    orderBy?: ExerciseOrderByWithRelationInput | ExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Exercises.
     */
    cursor?: ExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exercises.
     */
    skip?: number
    distinct?: ExerciseScalarFieldEnum | ExerciseScalarFieldEnum[]
  }

  /**
   * Exercise create
   */
  export type ExerciseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * The data needed to create a Exercise.
     */
    data: XOR<ExerciseCreateInput, ExerciseUncheckedCreateInput>
  }

  /**
   * Exercise createMany
   */
  export type ExerciseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Exercises.
     */
    data: ExerciseCreateManyInput | ExerciseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Exercise createManyAndReturn
   */
  export type ExerciseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * The data used to create many Exercises.
     */
    data: ExerciseCreateManyInput | ExerciseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Exercise update
   */
  export type ExerciseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * The data needed to update a Exercise.
     */
    data: XOR<ExerciseUpdateInput, ExerciseUncheckedUpdateInput>
    /**
     * Choose, which Exercise to update.
     */
    where: ExerciseWhereUniqueInput
  }

  /**
   * Exercise updateMany
   */
  export type ExerciseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Exercises.
     */
    data: XOR<ExerciseUpdateManyMutationInput, ExerciseUncheckedUpdateManyInput>
    /**
     * Filter which Exercises to update
     */
    where?: ExerciseWhereInput
    /**
     * Limit how many Exercises to update.
     */
    limit?: number
  }

  /**
   * Exercise updateManyAndReturn
   */
  export type ExerciseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * The data used to update Exercises.
     */
    data: XOR<ExerciseUpdateManyMutationInput, ExerciseUncheckedUpdateManyInput>
    /**
     * Filter which Exercises to update
     */
    where?: ExerciseWhereInput
    /**
     * Limit how many Exercises to update.
     */
    limit?: number
  }

  /**
   * Exercise upsert
   */
  export type ExerciseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * The filter to search for the Exercise to update in case it exists.
     */
    where: ExerciseWhereUniqueInput
    /**
     * In case the Exercise found by the `where` argument doesn't exist, create a new Exercise with this data.
     */
    create: XOR<ExerciseCreateInput, ExerciseUncheckedCreateInput>
    /**
     * In case the Exercise was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExerciseUpdateInput, ExerciseUncheckedUpdateInput>
  }

  /**
   * Exercise delete
   */
  export type ExerciseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * Filter which Exercise to delete.
     */
    where: ExerciseWhereUniqueInput
  }

  /**
   * Exercise deleteMany
   */
  export type ExerciseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Exercises to delete
     */
    where?: ExerciseWhereInput
    /**
     * Limit how many Exercises to delete.
     */
    limit?: number
  }

  /**
   * Exercise.workoutExercises
   */
  export type Exercise$workoutExercisesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutExercise
     */
    select?: WorkoutExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutExercise
     */
    omit?: WorkoutExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutExerciseInclude<ExtArgs> | null
    where?: WorkoutExerciseWhereInput
    orderBy?: WorkoutExerciseOrderByWithRelationInput | WorkoutExerciseOrderByWithRelationInput[]
    cursor?: WorkoutExerciseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkoutExerciseScalarFieldEnum | WorkoutExerciseScalarFieldEnum[]
  }

  /**
   * Exercise.aiWorkoutExercises
   */
  export type Exercise$aiWorkoutExercisesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIWorkoutExercise
     */
    select?: AIWorkoutExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIWorkoutExercise
     */
    omit?: AIWorkoutExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIWorkoutExerciseInclude<ExtArgs> | null
    where?: AIWorkoutExerciseWhereInput
    orderBy?: AIWorkoutExerciseOrderByWithRelationInput | AIWorkoutExerciseOrderByWithRelationInput[]
    cursor?: AIWorkoutExerciseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AIWorkoutExerciseScalarFieldEnum | AIWorkoutExerciseScalarFieldEnum[]
  }

  /**
   * Exercise without action
   */
  export type ExerciseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
  }


  /**
   * Model WorkoutExercise
   */

  export type AggregateWorkoutExercise = {
    _count: WorkoutExerciseCountAggregateOutputType | null
    _avg: WorkoutExerciseAvgAggregateOutputType | null
    _sum: WorkoutExerciseSumAggregateOutputType | null
    _min: WorkoutExerciseMinAggregateOutputType | null
    _max: WorkoutExerciseMaxAggregateOutputType | null
  }

  export type WorkoutExerciseAvgAggregateOutputType = {
    sets: number | null
    reps: number | null
    weight: number | null
    duration: number | null
    restTime: number | null
  }

  export type WorkoutExerciseSumAggregateOutputType = {
    sets: number | null
    reps: number | null
    weight: number | null
    duration: number | null
    restTime: number | null
  }

  export type WorkoutExerciseMinAggregateOutputType = {
    id: string | null
    sets: number | null
    reps: number | null
    weight: number | null
    duration: number | null
    restTime: number | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
    workoutId: string | null
    exerciseId: string | null
    personalBest: boolean | null
  }

  export type WorkoutExerciseMaxAggregateOutputType = {
    id: string | null
    sets: number | null
    reps: number | null
    weight: number | null
    duration: number | null
    restTime: number | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
    workoutId: string | null
    exerciseId: string | null
    personalBest: boolean | null
  }

  export type WorkoutExerciseCountAggregateOutputType = {
    id: number
    sets: number
    reps: number
    weight: number
    duration: number
    restTime: number
    notes: number
    createdAt: number
    updatedAt: number
    workoutId: number
    exerciseId: number
    personalBest: number
    _all: number
  }


  export type WorkoutExerciseAvgAggregateInputType = {
    sets?: true
    reps?: true
    weight?: true
    duration?: true
    restTime?: true
  }

  export type WorkoutExerciseSumAggregateInputType = {
    sets?: true
    reps?: true
    weight?: true
    duration?: true
    restTime?: true
  }

  export type WorkoutExerciseMinAggregateInputType = {
    id?: true
    sets?: true
    reps?: true
    weight?: true
    duration?: true
    restTime?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    workoutId?: true
    exerciseId?: true
    personalBest?: true
  }

  export type WorkoutExerciseMaxAggregateInputType = {
    id?: true
    sets?: true
    reps?: true
    weight?: true
    duration?: true
    restTime?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    workoutId?: true
    exerciseId?: true
    personalBest?: true
  }

  export type WorkoutExerciseCountAggregateInputType = {
    id?: true
    sets?: true
    reps?: true
    weight?: true
    duration?: true
    restTime?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    workoutId?: true
    exerciseId?: true
    personalBest?: true
    _all?: true
  }

  export type WorkoutExerciseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkoutExercise to aggregate.
     */
    where?: WorkoutExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkoutExercises to fetch.
     */
    orderBy?: WorkoutExerciseOrderByWithRelationInput | WorkoutExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkoutExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkoutExercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkoutExercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WorkoutExercises
    **/
    _count?: true | WorkoutExerciseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WorkoutExerciseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WorkoutExerciseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkoutExerciseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkoutExerciseMaxAggregateInputType
  }

  export type GetWorkoutExerciseAggregateType<T extends WorkoutExerciseAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkoutExercise]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkoutExercise[P]>
      : GetScalarType<T[P], AggregateWorkoutExercise[P]>
  }




  export type WorkoutExerciseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkoutExerciseWhereInput
    orderBy?: WorkoutExerciseOrderByWithAggregationInput | WorkoutExerciseOrderByWithAggregationInput[]
    by: WorkoutExerciseScalarFieldEnum[] | WorkoutExerciseScalarFieldEnum
    having?: WorkoutExerciseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkoutExerciseCountAggregateInputType | true
    _avg?: WorkoutExerciseAvgAggregateInputType
    _sum?: WorkoutExerciseSumAggregateInputType
    _min?: WorkoutExerciseMinAggregateInputType
    _max?: WorkoutExerciseMaxAggregateInputType
  }

  export type WorkoutExerciseGroupByOutputType = {
    id: string
    sets: number
    reps: number
    weight: number | null
    duration: number | null
    restTime: number | null
    notes: string | null
    createdAt: Date
    updatedAt: Date
    workoutId: string
    exerciseId: string
    personalBest: boolean
    _count: WorkoutExerciseCountAggregateOutputType | null
    _avg: WorkoutExerciseAvgAggregateOutputType | null
    _sum: WorkoutExerciseSumAggregateOutputType | null
    _min: WorkoutExerciseMinAggregateOutputType | null
    _max: WorkoutExerciseMaxAggregateOutputType | null
  }

  type GetWorkoutExerciseGroupByPayload<T extends WorkoutExerciseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkoutExerciseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkoutExerciseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkoutExerciseGroupByOutputType[P]>
            : GetScalarType<T[P], WorkoutExerciseGroupByOutputType[P]>
        }
      >
    >


  export type WorkoutExerciseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sets?: boolean
    reps?: boolean
    weight?: boolean
    duration?: boolean
    restTime?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    workoutId?: boolean
    exerciseId?: boolean
    personalBest?: boolean
    workout?: boolean | WorkoutDefaultArgs<ExtArgs>
    exercise?: boolean | ExerciseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workoutExercise"]>

  export type WorkoutExerciseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sets?: boolean
    reps?: boolean
    weight?: boolean
    duration?: boolean
    restTime?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    workoutId?: boolean
    exerciseId?: boolean
    personalBest?: boolean
    workout?: boolean | WorkoutDefaultArgs<ExtArgs>
    exercise?: boolean | ExerciseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workoutExercise"]>

  export type WorkoutExerciseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sets?: boolean
    reps?: boolean
    weight?: boolean
    duration?: boolean
    restTime?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    workoutId?: boolean
    exerciseId?: boolean
    personalBest?: boolean
    workout?: boolean | WorkoutDefaultArgs<ExtArgs>
    exercise?: boolean | ExerciseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workoutExercise"]>

  export type WorkoutExerciseSelectScalar = {
    id?: boolean
    sets?: boolean
    reps?: boolean
    weight?: boolean
    duration?: boolean
    restTime?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    workoutId?: boolean
    exerciseId?: boolean
    personalBest?: boolean
  }

  export type WorkoutExerciseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sets" | "reps" | "weight" | "duration" | "restTime" | "notes" | "createdAt" | "updatedAt" | "workoutId" | "exerciseId" | "personalBest", ExtArgs["result"]["workoutExercise"]>
  export type WorkoutExerciseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workout?: boolean | WorkoutDefaultArgs<ExtArgs>
    exercise?: boolean | ExerciseDefaultArgs<ExtArgs>
  }
  export type WorkoutExerciseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workout?: boolean | WorkoutDefaultArgs<ExtArgs>
    exercise?: boolean | ExerciseDefaultArgs<ExtArgs>
  }
  export type WorkoutExerciseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workout?: boolean | WorkoutDefaultArgs<ExtArgs>
    exercise?: boolean | ExerciseDefaultArgs<ExtArgs>
  }

  export type $WorkoutExercisePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WorkoutExercise"
    objects: {
      workout: Prisma.$WorkoutPayload<ExtArgs>
      exercise: Prisma.$ExercisePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sets: number
      reps: number
      weight: number | null
      duration: number | null
      restTime: number | null
      notes: string | null
      createdAt: Date
      updatedAt: Date
      workoutId: string
      exerciseId: string
      personalBest: boolean
    }, ExtArgs["result"]["workoutExercise"]>
    composites: {}
  }

  type WorkoutExerciseGetPayload<S extends boolean | null | undefined | WorkoutExerciseDefaultArgs> = $Result.GetResult<Prisma.$WorkoutExercisePayload, S>

  type WorkoutExerciseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkoutExerciseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkoutExerciseCountAggregateInputType | true
    }

  export interface WorkoutExerciseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WorkoutExercise'], meta: { name: 'WorkoutExercise' } }
    /**
     * Find zero or one WorkoutExercise that matches the filter.
     * @param {WorkoutExerciseFindUniqueArgs} args - Arguments to find a WorkoutExercise
     * @example
     * // Get one WorkoutExercise
     * const workoutExercise = await prisma.workoutExercise.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkoutExerciseFindUniqueArgs>(args: SelectSubset<T, WorkoutExerciseFindUniqueArgs<ExtArgs>>): Prisma__WorkoutExerciseClient<$Result.GetResult<Prisma.$WorkoutExercisePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WorkoutExercise that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkoutExerciseFindUniqueOrThrowArgs} args - Arguments to find a WorkoutExercise
     * @example
     * // Get one WorkoutExercise
     * const workoutExercise = await prisma.workoutExercise.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkoutExerciseFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkoutExerciseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkoutExerciseClient<$Result.GetResult<Prisma.$WorkoutExercisePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkoutExercise that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutExerciseFindFirstArgs} args - Arguments to find a WorkoutExercise
     * @example
     * // Get one WorkoutExercise
     * const workoutExercise = await prisma.workoutExercise.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkoutExerciseFindFirstArgs>(args?: SelectSubset<T, WorkoutExerciseFindFirstArgs<ExtArgs>>): Prisma__WorkoutExerciseClient<$Result.GetResult<Prisma.$WorkoutExercisePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkoutExercise that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutExerciseFindFirstOrThrowArgs} args - Arguments to find a WorkoutExercise
     * @example
     * // Get one WorkoutExercise
     * const workoutExercise = await prisma.workoutExercise.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkoutExerciseFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkoutExerciseFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkoutExerciseClient<$Result.GetResult<Prisma.$WorkoutExercisePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WorkoutExercises that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutExerciseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WorkoutExercises
     * const workoutExercises = await prisma.workoutExercise.findMany()
     * 
     * // Get first 10 WorkoutExercises
     * const workoutExercises = await prisma.workoutExercise.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workoutExerciseWithIdOnly = await prisma.workoutExercise.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkoutExerciseFindManyArgs>(args?: SelectSubset<T, WorkoutExerciseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutExercisePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WorkoutExercise.
     * @param {WorkoutExerciseCreateArgs} args - Arguments to create a WorkoutExercise.
     * @example
     * // Create one WorkoutExercise
     * const WorkoutExercise = await prisma.workoutExercise.create({
     *   data: {
     *     // ... data to create a WorkoutExercise
     *   }
     * })
     * 
     */
    create<T extends WorkoutExerciseCreateArgs>(args: SelectSubset<T, WorkoutExerciseCreateArgs<ExtArgs>>): Prisma__WorkoutExerciseClient<$Result.GetResult<Prisma.$WorkoutExercisePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WorkoutExercises.
     * @param {WorkoutExerciseCreateManyArgs} args - Arguments to create many WorkoutExercises.
     * @example
     * // Create many WorkoutExercises
     * const workoutExercise = await prisma.workoutExercise.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkoutExerciseCreateManyArgs>(args?: SelectSubset<T, WorkoutExerciseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WorkoutExercises and returns the data saved in the database.
     * @param {WorkoutExerciseCreateManyAndReturnArgs} args - Arguments to create many WorkoutExercises.
     * @example
     * // Create many WorkoutExercises
     * const workoutExercise = await prisma.workoutExercise.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WorkoutExercises and only return the `id`
     * const workoutExerciseWithIdOnly = await prisma.workoutExercise.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorkoutExerciseCreateManyAndReturnArgs>(args?: SelectSubset<T, WorkoutExerciseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutExercisePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WorkoutExercise.
     * @param {WorkoutExerciseDeleteArgs} args - Arguments to delete one WorkoutExercise.
     * @example
     * // Delete one WorkoutExercise
     * const WorkoutExercise = await prisma.workoutExercise.delete({
     *   where: {
     *     // ... filter to delete one WorkoutExercise
     *   }
     * })
     * 
     */
    delete<T extends WorkoutExerciseDeleteArgs>(args: SelectSubset<T, WorkoutExerciseDeleteArgs<ExtArgs>>): Prisma__WorkoutExerciseClient<$Result.GetResult<Prisma.$WorkoutExercisePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WorkoutExercise.
     * @param {WorkoutExerciseUpdateArgs} args - Arguments to update one WorkoutExercise.
     * @example
     * // Update one WorkoutExercise
     * const workoutExercise = await prisma.workoutExercise.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkoutExerciseUpdateArgs>(args: SelectSubset<T, WorkoutExerciseUpdateArgs<ExtArgs>>): Prisma__WorkoutExerciseClient<$Result.GetResult<Prisma.$WorkoutExercisePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WorkoutExercises.
     * @param {WorkoutExerciseDeleteManyArgs} args - Arguments to filter WorkoutExercises to delete.
     * @example
     * // Delete a few WorkoutExercises
     * const { count } = await prisma.workoutExercise.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkoutExerciseDeleteManyArgs>(args?: SelectSubset<T, WorkoutExerciseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkoutExercises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutExerciseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WorkoutExercises
     * const workoutExercise = await prisma.workoutExercise.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkoutExerciseUpdateManyArgs>(args: SelectSubset<T, WorkoutExerciseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkoutExercises and returns the data updated in the database.
     * @param {WorkoutExerciseUpdateManyAndReturnArgs} args - Arguments to update many WorkoutExercises.
     * @example
     * // Update many WorkoutExercises
     * const workoutExercise = await prisma.workoutExercise.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WorkoutExercises and only return the `id`
     * const workoutExerciseWithIdOnly = await prisma.workoutExercise.updateManyAndReturn({
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
    updateManyAndReturn<T extends WorkoutExerciseUpdateManyAndReturnArgs>(args: SelectSubset<T, WorkoutExerciseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutExercisePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WorkoutExercise.
     * @param {WorkoutExerciseUpsertArgs} args - Arguments to update or create a WorkoutExercise.
     * @example
     * // Update or create a WorkoutExercise
     * const workoutExercise = await prisma.workoutExercise.upsert({
     *   create: {
     *     // ... data to create a WorkoutExercise
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WorkoutExercise we want to update
     *   }
     * })
     */
    upsert<T extends WorkoutExerciseUpsertArgs>(args: SelectSubset<T, WorkoutExerciseUpsertArgs<ExtArgs>>): Prisma__WorkoutExerciseClient<$Result.GetResult<Prisma.$WorkoutExercisePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WorkoutExercises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutExerciseCountArgs} args - Arguments to filter WorkoutExercises to count.
     * @example
     * // Count the number of WorkoutExercises
     * const count = await prisma.workoutExercise.count({
     *   where: {
     *     // ... the filter for the WorkoutExercises we want to count
     *   }
     * })
    **/
    count<T extends WorkoutExerciseCountArgs>(
      args?: Subset<T, WorkoutExerciseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkoutExerciseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WorkoutExercise.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutExerciseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WorkoutExerciseAggregateArgs>(args: Subset<T, WorkoutExerciseAggregateArgs>): Prisma.PrismaPromise<GetWorkoutExerciseAggregateType<T>>

    /**
     * Group by WorkoutExercise.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutExerciseGroupByArgs} args - Group by arguments.
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
      T extends WorkoutExerciseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkoutExerciseGroupByArgs['orderBy'] }
        : { orderBy?: WorkoutExerciseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WorkoutExerciseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkoutExerciseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WorkoutExercise model
   */
  readonly fields: WorkoutExerciseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WorkoutExercise.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkoutExerciseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    workout<T extends WorkoutDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkoutDefaultArgs<ExtArgs>>): Prisma__WorkoutClient<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    exercise<T extends ExerciseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ExerciseDefaultArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the WorkoutExercise model
   */
  interface WorkoutExerciseFieldRefs {
    readonly id: FieldRef<"WorkoutExercise", 'String'>
    readonly sets: FieldRef<"WorkoutExercise", 'Int'>
    readonly reps: FieldRef<"WorkoutExercise", 'Int'>
    readonly weight: FieldRef<"WorkoutExercise", 'Float'>
    readonly duration: FieldRef<"WorkoutExercise", 'Int'>
    readonly restTime: FieldRef<"WorkoutExercise", 'Int'>
    readonly notes: FieldRef<"WorkoutExercise", 'String'>
    readonly createdAt: FieldRef<"WorkoutExercise", 'DateTime'>
    readonly updatedAt: FieldRef<"WorkoutExercise", 'DateTime'>
    readonly workoutId: FieldRef<"WorkoutExercise", 'String'>
    readonly exerciseId: FieldRef<"WorkoutExercise", 'String'>
    readonly personalBest: FieldRef<"WorkoutExercise", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * WorkoutExercise findUnique
   */
  export type WorkoutExerciseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutExercise
     */
    select?: WorkoutExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutExercise
     */
    omit?: WorkoutExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutExerciseInclude<ExtArgs> | null
    /**
     * Filter, which WorkoutExercise to fetch.
     */
    where: WorkoutExerciseWhereUniqueInput
  }

  /**
   * WorkoutExercise findUniqueOrThrow
   */
  export type WorkoutExerciseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutExercise
     */
    select?: WorkoutExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutExercise
     */
    omit?: WorkoutExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutExerciseInclude<ExtArgs> | null
    /**
     * Filter, which WorkoutExercise to fetch.
     */
    where: WorkoutExerciseWhereUniqueInput
  }

  /**
   * WorkoutExercise findFirst
   */
  export type WorkoutExerciseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutExercise
     */
    select?: WorkoutExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutExercise
     */
    omit?: WorkoutExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutExerciseInclude<ExtArgs> | null
    /**
     * Filter, which WorkoutExercise to fetch.
     */
    where?: WorkoutExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkoutExercises to fetch.
     */
    orderBy?: WorkoutExerciseOrderByWithRelationInput | WorkoutExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkoutExercises.
     */
    cursor?: WorkoutExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkoutExercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkoutExercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkoutExercises.
     */
    distinct?: WorkoutExerciseScalarFieldEnum | WorkoutExerciseScalarFieldEnum[]
  }

  /**
   * WorkoutExercise findFirstOrThrow
   */
  export type WorkoutExerciseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutExercise
     */
    select?: WorkoutExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutExercise
     */
    omit?: WorkoutExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutExerciseInclude<ExtArgs> | null
    /**
     * Filter, which WorkoutExercise to fetch.
     */
    where?: WorkoutExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkoutExercises to fetch.
     */
    orderBy?: WorkoutExerciseOrderByWithRelationInput | WorkoutExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkoutExercises.
     */
    cursor?: WorkoutExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkoutExercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkoutExercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkoutExercises.
     */
    distinct?: WorkoutExerciseScalarFieldEnum | WorkoutExerciseScalarFieldEnum[]
  }

  /**
   * WorkoutExercise findMany
   */
  export type WorkoutExerciseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutExercise
     */
    select?: WorkoutExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutExercise
     */
    omit?: WorkoutExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutExerciseInclude<ExtArgs> | null
    /**
     * Filter, which WorkoutExercises to fetch.
     */
    where?: WorkoutExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkoutExercises to fetch.
     */
    orderBy?: WorkoutExerciseOrderByWithRelationInput | WorkoutExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WorkoutExercises.
     */
    cursor?: WorkoutExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkoutExercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkoutExercises.
     */
    skip?: number
    distinct?: WorkoutExerciseScalarFieldEnum | WorkoutExerciseScalarFieldEnum[]
  }

  /**
   * WorkoutExercise create
   */
  export type WorkoutExerciseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutExercise
     */
    select?: WorkoutExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutExercise
     */
    omit?: WorkoutExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutExerciseInclude<ExtArgs> | null
    /**
     * The data needed to create a WorkoutExercise.
     */
    data: XOR<WorkoutExerciseCreateInput, WorkoutExerciseUncheckedCreateInput>
  }

  /**
   * WorkoutExercise createMany
   */
  export type WorkoutExerciseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WorkoutExercises.
     */
    data: WorkoutExerciseCreateManyInput | WorkoutExerciseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WorkoutExercise createManyAndReturn
   */
  export type WorkoutExerciseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutExercise
     */
    select?: WorkoutExerciseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutExercise
     */
    omit?: WorkoutExerciseOmit<ExtArgs> | null
    /**
     * The data used to create many WorkoutExercises.
     */
    data: WorkoutExerciseCreateManyInput | WorkoutExerciseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutExerciseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkoutExercise update
   */
  export type WorkoutExerciseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutExercise
     */
    select?: WorkoutExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutExercise
     */
    omit?: WorkoutExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutExerciseInclude<ExtArgs> | null
    /**
     * The data needed to update a WorkoutExercise.
     */
    data: XOR<WorkoutExerciseUpdateInput, WorkoutExerciseUncheckedUpdateInput>
    /**
     * Choose, which WorkoutExercise to update.
     */
    where: WorkoutExerciseWhereUniqueInput
  }

  /**
   * WorkoutExercise updateMany
   */
  export type WorkoutExerciseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WorkoutExercises.
     */
    data: XOR<WorkoutExerciseUpdateManyMutationInput, WorkoutExerciseUncheckedUpdateManyInput>
    /**
     * Filter which WorkoutExercises to update
     */
    where?: WorkoutExerciseWhereInput
    /**
     * Limit how many WorkoutExercises to update.
     */
    limit?: number
  }

  /**
   * WorkoutExercise updateManyAndReturn
   */
  export type WorkoutExerciseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutExercise
     */
    select?: WorkoutExerciseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutExercise
     */
    omit?: WorkoutExerciseOmit<ExtArgs> | null
    /**
     * The data used to update WorkoutExercises.
     */
    data: XOR<WorkoutExerciseUpdateManyMutationInput, WorkoutExerciseUncheckedUpdateManyInput>
    /**
     * Filter which WorkoutExercises to update
     */
    where?: WorkoutExerciseWhereInput
    /**
     * Limit how many WorkoutExercises to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutExerciseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkoutExercise upsert
   */
  export type WorkoutExerciseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutExercise
     */
    select?: WorkoutExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutExercise
     */
    omit?: WorkoutExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutExerciseInclude<ExtArgs> | null
    /**
     * The filter to search for the WorkoutExercise to update in case it exists.
     */
    where: WorkoutExerciseWhereUniqueInput
    /**
     * In case the WorkoutExercise found by the `where` argument doesn't exist, create a new WorkoutExercise with this data.
     */
    create: XOR<WorkoutExerciseCreateInput, WorkoutExerciseUncheckedCreateInput>
    /**
     * In case the WorkoutExercise was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkoutExerciseUpdateInput, WorkoutExerciseUncheckedUpdateInput>
  }

  /**
   * WorkoutExercise delete
   */
  export type WorkoutExerciseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutExercise
     */
    select?: WorkoutExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutExercise
     */
    omit?: WorkoutExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutExerciseInclude<ExtArgs> | null
    /**
     * Filter which WorkoutExercise to delete.
     */
    where: WorkoutExerciseWhereUniqueInput
  }

  /**
   * WorkoutExercise deleteMany
   */
  export type WorkoutExerciseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkoutExercises to delete
     */
    where?: WorkoutExerciseWhereInput
    /**
     * Limit how many WorkoutExercises to delete.
     */
    limit?: number
  }

  /**
   * WorkoutExercise without action
   */
  export type WorkoutExerciseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutExercise
     */
    select?: WorkoutExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutExercise
     */
    omit?: WorkoutExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutExerciseInclude<ExtArgs> | null
  }


  /**
   * Model Goal
   */

  export type AggregateGoal = {
    _count: GoalCountAggregateOutputType | null
    _avg: GoalAvgAggregateOutputType | null
    _sum: GoalSumAggregateOutputType | null
    _min: GoalMinAggregateOutputType | null
    _max: GoalMaxAggregateOutputType | null
  }

  export type GoalAvgAggregateOutputType = {
    targetValue: number | null
    currentValue: number | null
  }

  export type GoalSumAggregateOutputType = {
    targetValue: number | null
    currentValue: number | null
  }

  export type GoalMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    targetDate: Date | null
    isCompleted: boolean | null
    type: $Enums.GoalType | null
    metric: string | null
    targetValue: number | null
    currentValue: number | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type GoalMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    targetDate: Date | null
    isCompleted: boolean | null
    type: $Enums.GoalType | null
    metric: string | null
    targetValue: number | null
    currentValue: number | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type GoalCountAggregateOutputType = {
    id: number
    name: number
    description: number
    targetDate: number
    isCompleted: number
    type: number
    metric: number
    targetValue: number
    currentValue: number
    createdAt: number
    updatedAt: number
    userId: number
    _all: number
  }


  export type GoalAvgAggregateInputType = {
    targetValue?: true
    currentValue?: true
  }

  export type GoalSumAggregateInputType = {
    targetValue?: true
    currentValue?: true
  }

  export type GoalMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    targetDate?: true
    isCompleted?: true
    type?: true
    metric?: true
    targetValue?: true
    currentValue?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type GoalMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    targetDate?: true
    isCompleted?: true
    type?: true
    metric?: true
    targetValue?: true
    currentValue?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type GoalCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    targetDate?: true
    isCompleted?: true
    type?: true
    metric?: true
    targetValue?: true
    currentValue?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    _all?: true
  }

  export type GoalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Goal to aggregate.
     */
    where?: GoalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Goals to fetch.
     */
    orderBy?: GoalOrderByWithRelationInput | GoalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GoalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Goals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Goals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Goals
    **/
    _count?: true | GoalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GoalAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GoalSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GoalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GoalMaxAggregateInputType
  }

  export type GetGoalAggregateType<T extends GoalAggregateArgs> = {
        [P in keyof T & keyof AggregateGoal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGoal[P]>
      : GetScalarType<T[P], AggregateGoal[P]>
  }




  export type GoalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GoalWhereInput
    orderBy?: GoalOrderByWithAggregationInput | GoalOrderByWithAggregationInput[]
    by: GoalScalarFieldEnum[] | GoalScalarFieldEnum
    having?: GoalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GoalCountAggregateInputType | true
    _avg?: GoalAvgAggregateInputType
    _sum?: GoalSumAggregateInputType
    _min?: GoalMinAggregateInputType
    _max?: GoalMaxAggregateInputType
  }

  export type GoalGroupByOutputType = {
    id: string
    name: string
    description: string | null
    targetDate: Date | null
    isCompleted: boolean
    type: $Enums.GoalType
    metric: string | null
    targetValue: number | null
    currentValue: number | null
    createdAt: Date
    updatedAt: Date
    userId: string
    _count: GoalCountAggregateOutputType | null
    _avg: GoalAvgAggregateOutputType | null
    _sum: GoalSumAggregateOutputType | null
    _min: GoalMinAggregateOutputType | null
    _max: GoalMaxAggregateOutputType | null
  }

  type GetGoalGroupByPayload<T extends GoalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GoalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GoalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GoalGroupByOutputType[P]>
            : GetScalarType<T[P], GoalGroupByOutputType[P]>
        }
      >
    >


  export type GoalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    targetDate?: boolean
    isCompleted?: boolean
    type?: boolean
    metric?: boolean
    targetValue?: boolean
    currentValue?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["goal"]>

  export type GoalSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    targetDate?: boolean
    isCompleted?: boolean
    type?: boolean
    metric?: boolean
    targetValue?: boolean
    currentValue?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["goal"]>

  export type GoalSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    targetDate?: boolean
    isCompleted?: boolean
    type?: boolean
    metric?: boolean
    targetValue?: boolean
    currentValue?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["goal"]>

  export type GoalSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    targetDate?: boolean
    isCompleted?: boolean
    type?: boolean
    metric?: boolean
    targetValue?: boolean
    currentValue?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
  }

  export type GoalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "targetDate" | "isCompleted" | "type" | "metric" | "targetValue" | "currentValue" | "createdAt" | "updatedAt" | "userId", ExtArgs["result"]["goal"]>
  export type GoalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type GoalIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type GoalIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $GoalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Goal"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      targetDate: Date | null
      isCompleted: boolean
      type: $Enums.GoalType
      metric: string | null
      targetValue: number | null
      currentValue: number | null
      createdAt: Date
      updatedAt: Date
      userId: string
    }, ExtArgs["result"]["goal"]>
    composites: {}
  }

  type GoalGetPayload<S extends boolean | null | undefined | GoalDefaultArgs> = $Result.GetResult<Prisma.$GoalPayload, S>

  type GoalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GoalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GoalCountAggregateInputType | true
    }

  export interface GoalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Goal'], meta: { name: 'Goal' } }
    /**
     * Find zero or one Goal that matches the filter.
     * @param {GoalFindUniqueArgs} args - Arguments to find a Goal
     * @example
     * // Get one Goal
     * const goal = await prisma.goal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GoalFindUniqueArgs>(args: SelectSubset<T, GoalFindUniqueArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Goal that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GoalFindUniqueOrThrowArgs} args - Arguments to find a Goal
     * @example
     * // Get one Goal
     * const goal = await prisma.goal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GoalFindUniqueOrThrowArgs>(args: SelectSubset<T, GoalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Goal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalFindFirstArgs} args - Arguments to find a Goal
     * @example
     * // Get one Goal
     * const goal = await prisma.goal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GoalFindFirstArgs>(args?: SelectSubset<T, GoalFindFirstArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Goal that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalFindFirstOrThrowArgs} args - Arguments to find a Goal
     * @example
     * // Get one Goal
     * const goal = await prisma.goal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GoalFindFirstOrThrowArgs>(args?: SelectSubset<T, GoalFindFirstOrThrowArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Goals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Goals
     * const goals = await prisma.goal.findMany()
     * 
     * // Get first 10 Goals
     * const goals = await prisma.goal.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const goalWithIdOnly = await prisma.goal.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GoalFindManyArgs>(args?: SelectSubset<T, GoalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Goal.
     * @param {GoalCreateArgs} args - Arguments to create a Goal.
     * @example
     * // Create one Goal
     * const Goal = await prisma.goal.create({
     *   data: {
     *     // ... data to create a Goal
     *   }
     * })
     * 
     */
    create<T extends GoalCreateArgs>(args: SelectSubset<T, GoalCreateArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Goals.
     * @param {GoalCreateManyArgs} args - Arguments to create many Goals.
     * @example
     * // Create many Goals
     * const goal = await prisma.goal.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GoalCreateManyArgs>(args?: SelectSubset<T, GoalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Goals and returns the data saved in the database.
     * @param {GoalCreateManyAndReturnArgs} args - Arguments to create many Goals.
     * @example
     * // Create many Goals
     * const goal = await prisma.goal.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Goals and only return the `id`
     * const goalWithIdOnly = await prisma.goal.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GoalCreateManyAndReturnArgs>(args?: SelectSubset<T, GoalCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Goal.
     * @param {GoalDeleteArgs} args - Arguments to delete one Goal.
     * @example
     * // Delete one Goal
     * const Goal = await prisma.goal.delete({
     *   where: {
     *     // ... filter to delete one Goal
     *   }
     * })
     * 
     */
    delete<T extends GoalDeleteArgs>(args: SelectSubset<T, GoalDeleteArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Goal.
     * @param {GoalUpdateArgs} args - Arguments to update one Goal.
     * @example
     * // Update one Goal
     * const goal = await prisma.goal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GoalUpdateArgs>(args: SelectSubset<T, GoalUpdateArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Goals.
     * @param {GoalDeleteManyArgs} args - Arguments to filter Goals to delete.
     * @example
     * // Delete a few Goals
     * const { count } = await prisma.goal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GoalDeleteManyArgs>(args?: SelectSubset<T, GoalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Goals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Goals
     * const goal = await prisma.goal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GoalUpdateManyArgs>(args: SelectSubset<T, GoalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Goals and returns the data updated in the database.
     * @param {GoalUpdateManyAndReturnArgs} args - Arguments to update many Goals.
     * @example
     * // Update many Goals
     * const goal = await prisma.goal.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Goals and only return the `id`
     * const goalWithIdOnly = await prisma.goal.updateManyAndReturn({
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
    updateManyAndReturn<T extends GoalUpdateManyAndReturnArgs>(args: SelectSubset<T, GoalUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Goal.
     * @param {GoalUpsertArgs} args - Arguments to update or create a Goal.
     * @example
     * // Update or create a Goal
     * const goal = await prisma.goal.upsert({
     *   create: {
     *     // ... data to create a Goal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Goal we want to update
     *   }
     * })
     */
    upsert<T extends GoalUpsertArgs>(args: SelectSubset<T, GoalUpsertArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Goals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalCountArgs} args - Arguments to filter Goals to count.
     * @example
     * // Count the number of Goals
     * const count = await prisma.goal.count({
     *   where: {
     *     // ... the filter for the Goals we want to count
     *   }
     * })
    **/
    count<T extends GoalCountArgs>(
      args?: Subset<T, GoalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GoalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Goal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GoalAggregateArgs>(args: Subset<T, GoalAggregateArgs>): Prisma.PrismaPromise<GetGoalAggregateType<T>>

    /**
     * Group by Goal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalGroupByArgs} args - Group by arguments.
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
      T extends GoalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GoalGroupByArgs['orderBy'] }
        : { orderBy?: GoalGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GoalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGoalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Goal model
   */
  readonly fields: GoalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Goal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GoalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Goal model
   */
  interface GoalFieldRefs {
    readonly id: FieldRef<"Goal", 'String'>
    readonly name: FieldRef<"Goal", 'String'>
    readonly description: FieldRef<"Goal", 'String'>
    readonly targetDate: FieldRef<"Goal", 'DateTime'>
    readonly isCompleted: FieldRef<"Goal", 'Boolean'>
    readonly type: FieldRef<"Goal", 'GoalType'>
    readonly metric: FieldRef<"Goal", 'String'>
    readonly targetValue: FieldRef<"Goal", 'Float'>
    readonly currentValue: FieldRef<"Goal", 'Float'>
    readonly createdAt: FieldRef<"Goal", 'DateTime'>
    readonly updatedAt: FieldRef<"Goal", 'DateTime'>
    readonly userId: FieldRef<"Goal", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Goal findUnique
   */
  export type GoalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * Filter, which Goal to fetch.
     */
    where: GoalWhereUniqueInput
  }

  /**
   * Goal findUniqueOrThrow
   */
  export type GoalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * Filter, which Goal to fetch.
     */
    where: GoalWhereUniqueInput
  }

  /**
   * Goal findFirst
   */
  export type GoalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * Filter, which Goal to fetch.
     */
    where?: GoalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Goals to fetch.
     */
    orderBy?: GoalOrderByWithRelationInput | GoalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Goals.
     */
    cursor?: GoalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Goals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Goals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Goals.
     */
    distinct?: GoalScalarFieldEnum | GoalScalarFieldEnum[]
  }

  /**
   * Goal findFirstOrThrow
   */
  export type GoalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * Filter, which Goal to fetch.
     */
    where?: GoalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Goals to fetch.
     */
    orderBy?: GoalOrderByWithRelationInput | GoalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Goals.
     */
    cursor?: GoalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Goals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Goals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Goals.
     */
    distinct?: GoalScalarFieldEnum | GoalScalarFieldEnum[]
  }

  /**
   * Goal findMany
   */
  export type GoalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * Filter, which Goals to fetch.
     */
    where?: GoalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Goals to fetch.
     */
    orderBy?: GoalOrderByWithRelationInput | GoalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Goals.
     */
    cursor?: GoalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Goals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Goals.
     */
    skip?: number
    distinct?: GoalScalarFieldEnum | GoalScalarFieldEnum[]
  }

  /**
   * Goal create
   */
  export type GoalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * The data needed to create a Goal.
     */
    data: XOR<GoalCreateInput, GoalUncheckedCreateInput>
  }

  /**
   * Goal createMany
   */
  export type GoalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Goals.
     */
    data: GoalCreateManyInput | GoalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Goal createManyAndReturn
   */
  export type GoalCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * The data used to create many Goals.
     */
    data: GoalCreateManyInput | GoalCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Goal update
   */
  export type GoalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * The data needed to update a Goal.
     */
    data: XOR<GoalUpdateInput, GoalUncheckedUpdateInput>
    /**
     * Choose, which Goal to update.
     */
    where: GoalWhereUniqueInput
  }

  /**
   * Goal updateMany
   */
  export type GoalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Goals.
     */
    data: XOR<GoalUpdateManyMutationInput, GoalUncheckedUpdateManyInput>
    /**
     * Filter which Goals to update
     */
    where?: GoalWhereInput
    /**
     * Limit how many Goals to update.
     */
    limit?: number
  }

  /**
   * Goal updateManyAndReturn
   */
  export type GoalUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * The data used to update Goals.
     */
    data: XOR<GoalUpdateManyMutationInput, GoalUncheckedUpdateManyInput>
    /**
     * Filter which Goals to update
     */
    where?: GoalWhereInput
    /**
     * Limit how many Goals to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Goal upsert
   */
  export type GoalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * The filter to search for the Goal to update in case it exists.
     */
    where: GoalWhereUniqueInput
    /**
     * In case the Goal found by the `where` argument doesn't exist, create a new Goal with this data.
     */
    create: XOR<GoalCreateInput, GoalUncheckedCreateInput>
    /**
     * In case the Goal was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GoalUpdateInput, GoalUncheckedUpdateInput>
  }

  /**
   * Goal delete
   */
  export type GoalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * Filter which Goal to delete.
     */
    where: GoalWhereUniqueInput
  }

  /**
   * Goal deleteMany
   */
  export type GoalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Goals to delete
     */
    where?: GoalWhereInput
    /**
     * Limit how many Goals to delete.
     */
    limit?: number
  }

  /**
   * Goal without action
   */
  export type GoalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
  }


  /**
   * Model Achievement
   */

  export type AggregateAchievement = {
    _count: AchievementCountAggregateOutputType | null
    _min: AchievementMinAggregateOutputType | null
    _max: AchievementMaxAggregateOutputType | null
  }

  export type AchievementMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    image: string | null
    unlockedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type AchievementMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    image: string | null
    unlockedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type AchievementCountAggregateOutputType = {
    id: number
    name: number
    description: number
    image: number
    unlockedAt: number
    createdAt: number
    updatedAt: number
    userId: number
    _all: number
  }


  export type AchievementMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    image?: true
    unlockedAt?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type AchievementMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    image?: true
    unlockedAt?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type AchievementCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    image?: true
    unlockedAt?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    _all?: true
  }

  export type AchievementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Achievement to aggregate.
     */
    where?: AchievementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Achievements to fetch.
     */
    orderBy?: AchievementOrderByWithRelationInput | AchievementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AchievementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Achievements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Achievements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Achievements
    **/
    _count?: true | AchievementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AchievementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AchievementMaxAggregateInputType
  }

  export type GetAchievementAggregateType<T extends AchievementAggregateArgs> = {
        [P in keyof T & keyof AggregateAchievement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAchievement[P]>
      : GetScalarType<T[P], AggregateAchievement[P]>
  }




  export type AchievementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AchievementWhereInput
    orderBy?: AchievementOrderByWithAggregationInput | AchievementOrderByWithAggregationInput[]
    by: AchievementScalarFieldEnum[] | AchievementScalarFieldEnum
    having?: AchievementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AchievementCountAggregateInputType | true
    _min?: AchievementMinAggregateInputType
    _max?: AchievementMaxAggregateInputType
  }

  export type AchievementGroupByOutputType = {
    id: string
    name: string
    description: string
    image: string | null
    unlockedAt: Date | null
    createdAt: Date
    updatedAt: Date
    userId: string
    _count: AchievementCountAggregateOutputType | null
    _min: AchievementMinAggregateOutputType | null
    _max: AchievementMaxAggregateOutputType | null
  }

  type GetAchievementGroupByPayload<T extends AchievementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AchievementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AchievementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AchievementGroupByOutputType[P]>
            : GetScalarType<T[P], AchievementGroupByOutputType[P]>
        }
      >
    >


  export type AchievementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    image?: boolean
    unlockedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["achievement"]>

  export type AchievementSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    image?: boolean
    unlockedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["achievement"]>

  export type AchievementSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    image?: boolean
    unlockedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["achievement"]>

  export type AchievementSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    image?: boolean
    unlockedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
  }

  export type AchievementOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "image" | "unlockedAt" | "createdAt" | "updatedAt" | "userId", ExtArgs["result"]["achievement"]>
  export type AchievementInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AchievementIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AchievementIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AchievementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Achievement"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string
      image: string | null
      unlockedAt: Date | null
      createdAt: Date
      updatedAt: Date
      userId: string
    }, ExtArgs["result"]["achievement"]>
    composites: {}
  }

  type AchievementGetPayload<S extends boolean | null | undefined | AchievementDefaultArgs> = $Result.GetResult<Prisma.$AchievementPayload, S>

  type AchievementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AchievementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AchievementCountAggregateInputType | true
    }

  export interface AchievementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Achievement'], meta: { name: 'Achievement' } }
    /**
     * Find zero or one Achievement that matches the filter.
     * @param {AchievementFindUniqueArgs} args - Arguments to find a Achievement
     * @example
     * // Get one Achievement
     * const achievement = await prisma.achievement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AchievementFindUniqueArgs>(args: SelectSubset<T, AchievementFindUniqueArgs<ExtArgs>>): Prisma__AchievementClient<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Achievement that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AchievementFindUniqueOrThrowArgs} args - Arguments to find a Achievement
     * @example
     * // Get one Achievement
     * const achievement = await prisma.achievement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AchievementFindUniqueOrThrowArgs>(args: SelectSubset<T, AchievementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AchievementClient<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Achievement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchievementFindFirstArgs} args - Arguments to find a Achievement
     * @example
     * // Get one Achievement
     * const achievement = await prisma.achievement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AchievementFindFirstArgs>(args?: SelectSubset<T, AchievementFindFirstArgs<ExtArgs>>): Prisma__AchievementClient<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Achievement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchievementFindFirstOrThrowArgs} args - Arguments to find a Achievement
     * @example
     * // Get one Achievement
     * const achievement = await prisma.achievement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AchievementFindFirstOrThrowArgs>(args?: SelectSubset<T, AchievementFindFirstOrThrowArgs<ExtArgs>>): Prisma__AchievementClient<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Achievements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchievementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Achievements
     * const achievements = await prisma.achievement.findMany()
     * 
     * // Get first 10 Achievements
     * const achievements = await prisma.achievement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const achievementWithIdOnly = await prisma.achievement.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AchievementFindManyArgs>(args?: SelectSubset<T, AchievementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Achievement.
     * @param {AchievementCreateArgs} args - Arguments to create a Achievement.
     * @example
     * // Create one Achievement
     * const Achievement = await prisma.achievement.create({
     *   data: {
     *     // ... data to create a Achievement
     *   }
     * })
     * 
     */
    create<T extends AchievementCreateArgs>(args: SelectSubset<T, AchievementCreateArgs<ExtArgs>>): Prisma__AchievementClient<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Achievements.
     * @param {AchievementCreateManyArgs} args - Arguments to create many Achievements.
     * @example
     * // Create many Achievements
     * const achievement = await prisma.achievement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AchievementCreateManyArgs>(args?: SelectSubset<T, AchievementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Achievements and returns the data saved in the database.
     * @param {AchievementCreateManyAndReturnArgs} args - Arguments to create many Achievements.
     * @example
     * // Create many Achievements
     * const achievement = await prisma.achievement.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Achievements and only return the `id`
     * const achievementWithIdOnly = await prisma.achievement.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AchievementCreateManyAndReturnArgs>(args?: SelectSubset<T, AchievementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Achievement.
     * @param {AchievementDeleteArgs} args - Arguments to delete one Achievement.
     * @example
     * // Delete one Achievement
     * const Achievement = await prisma.achievement.delete({
     *   where: {
     *     // ... filter to delete one Achievement
     *   }
     * })
     * 
     */
    delete<T extends AchievementDeleteArgs>(args: SelectSubset<T, AchievementDeleteArgs<ExtArgs>>): Prisma__AchievementClient<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Achievement.
     * @param {AchievementUpdateArgs} args - Arguments to update one Achievement.
     * @example
     * // Update one Achievement
     * const achievement = await prisma.achievement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AchievementUpdateArgs>(args: SelectSubset<T, AchievementUpdateArgs<ExtArgs>>): Prisma__AchievementClient<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Achievements.
     * @param {AchievementDeleteManyArgs} args - Arguments to filter Achievements to delete.
     * @example
     * // Delete a few Achievements
     * const { count } = await prisma.achievement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AchievementDeleteManyArgs>(args?: SelectSubset<T, AchievementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Achievements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchievementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Achievements
     * const achievement = await prisma.achievement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AchievementUpdateManyArgs>(args: SelectSubset<T, AchievementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Achievements and returns the data updated in the database.
     * @param {AchievementUpdateManyAndReturnArgs} args - Arguments to update many Achievements.
     * @example
     * // Update many Achievements
     * const achievement = await prisma.achievement.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Achievements and only return the `id`
     * const achievementWithIdOnly = await prisma.achievement.updateManyAndReturn({
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
    updateManyAndReturn<T extends AchievementUpdateManyAndReturnArgs>(args: SelectSubset<T, AchievementUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Achievement.
     * @param {AchievementUpsertArgs} args - Arguments to update or create a Achievement.
     * @example
     * // Update or create a Achievement
     * const achievement = await prisma.achievement.upsert({
     *   create: {
     *     // ... data to create a Achievement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Achievement we want to update
     *   }
     * })
     */
    upsert<T extends AchievementUpsertArgs>(args: SelectSubset<T, AchievementUpsertArgs<ExtArgs>>): Prisma__AchievementClient<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Achievements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchievementCountArgs} args - Arguments to filter Achievements to count.
     * @example
     * // Count the number of Achievements
     * const count = await prisma.achievement.count({
     *   where: {
     *     // ... the filter for the Achievements we want to count
     *   }
     * })
    **/
    count<T extends AchievementCountArgs>(
      args?: Subset<T, AchievementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AchievementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Achievement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchievementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AchievementAggregateArgs>(args: Subset<T, AchievementAggregateArgs>): Prisma.PrismaPromise<GetAchievementAggregateType<T>>

    /**
     * Group by Achievement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchievementGroupByArgs} args - Group by arguments.
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
      T extends AchievementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AchievementGroupByArgs['orderBy'] }
        : { orderBy?: AchievementGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AchievementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAchievementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Achievement model
   */
  readonly fields: AchievementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Achievement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AchievementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Achievement model
   */
  interface AchievementFieldRefs {
    readonly id: FieldRef<"Achievement", 'String'>
    readonly name: FieldRef<"Achievement", 'String'>
    readonly description: FieldRef<"Achievement", 'String'>
    readonly image: FieldRef<"Achievement", 'String'>
    readonly unlockedAt: FieldRef<"Achievement", 'DateTime'>
    readonly createdAt: FieldRef<"Achievement", 'DateTime'>
    readonly updatedAt: FieldRef<"Achievement", 'DateTime'>
    readonly userId: FieldRef<"Achievement", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Achievement findUnique
   */
  export type AchievementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievement
     */
    omit?: AchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null
    /**
     * Filter, which Achievement to fetch.
     */
    where: AchievementWhereUniqueInput
  }

  /**
   * Achievement findUniqueOrThrow
   */
  export type AchievementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievement
     */
    omit?: AchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null
    /**
     * Filter, which Achievement to fetch.
     */
    where: AchievementWhereUniqueInput
  }

  /**
   * Achievement findFirst
   */
  export type AchievementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievement
     */
    omit?: AchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null
    /**
     * Filter, which Achievement to fetch.
     */
    where?: AchievementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Achievements to fetch.
     */
    orderBy?: AchievementOrderByWithRelationInput | AchievementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Achievements.
     */
    cursor?: AchievementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Achievements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Achievements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Achievements.
     */
    distinct?: AchievementScalarFieldEnum | AchievementScalarFieldEnum[]
  }

  /**
   * Achievement findFirstOrThrow
   */
  export type AchievementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievement
     */
    omit?: AchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null
    /**
     * Filter, which Achievement to fetch.
     */
    where?: AchievementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Achievements to fetch.
     */
    orderBy?: AchievementOrderByWithRelationInput | AchievementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Achievements.
     */
    cursor?: AchievementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Achievements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Achievements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Achievements.
     */
    distinct?: AchievementScalarFieldEnum | AchievementScalarFieldEnum[]
  }

  /**
   * Achievement findMany
   */
  export type AchievementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievement
     */
    omit?: AchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null
    /**
     * Filter, which Achievements to fetch.
     */
    where?: AchievementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Achievements to fetch.
     */
    orderBy?: AchievementOrderByWithRelationInput | AchievementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Achievements.
     */
    cursor?: AchievementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Achievements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Achievements.
     */
    skip?: number
    distinct?: AchievementScalarFieldEnum | AchievementScalarFieldEnum[]
  }

  /**
   * Achievement create
   */
  export type AchievementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievement
     */
    omit?: AchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null
    /**
     * The data needed to create a Achievement.
     */
    data: XOR<AchievementCreateInput, AchievementUncheckedCreateInput>
  }

  /**
   * Achievement createMany
   */
  export type AchievementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Achievements.
     */
    data: AchievementCreateManyInput | AchievementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Achievement createManyAndReturn
   */
  export type AchievementCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Achievement
     */
    omit?: AchievementOmit<ExtArgs> | null
    /**
     * The data used to create many Achievements.
     */
    data: AchievementCreateManyInput | AchievementCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Achievement update
   */
  export type AchievementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievement
     */
    omit?: AchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null
    /**
     * The data needed to update a Achievement.
     */
    data: XOR<AchievementUpdateInput, AchievementUncheckedUpdateInput>
    /**
     * Choose, which Achievement to update.
     */
    where: AchievementWhereUniqueInput
  }

  /**
   * Achievement updateMany
   */
  export type AchievementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Achievements.
     */
    data: XOR<AchievementUpdateManyMutationInput, AchievementUncheckedUpdateManyInput>
    /**
     * Filter which Achievements to update
     */
    where?: AchievementWhereInput
    /**
     * Limit how many Achievements to update.
     */
    limit?: number
  }

  /**
   * Achievement updateManyAndReturn
   */
  export type AchievementUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Achievement
     */
    omit?: AchievementOmit<ExtArgs> | null
    /**
     * The data used to update Achievements.
     */
    data: XOR<AchievementUpdateManyMutationInput, AchievementUncheckedUpdateManyInput>
    /**
     * Filter which Achievements to update
     */
    where?: AchievementWhereInput
    /**
     * Limit how many Achievements to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Achievement upsert
   */
  export type AchievementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievement
     */
    omit?: AchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null
    /**
     * The filter to search for the Achievement to update in case it exists.
     */
    where: AchievementWhereUniqueInput
    /**
     * In case the Achievement found by the `where` argument doesn't exist, create a new Achievement with this data.
     */
    create: XOR<AchievementCreateInput, AchievementUncheckedCreateInput>
    /**
     * In case the Achievement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AchievementUpdateInput, AchievementUncheckedUpdateInput>
  }

  /**
   * Achievement delete
   */
  export type AchievementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievement
     */
    omit?: AchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null
    /**
     * Filter which Achievement to delete.
     */
    where: AchievementWhereUniqueInput
  }

  /**
   * Achievement deleteMany
   */
  export type AchievementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Achievements to delete
     */
    where?: AchievementWhereInput
    /**
     * Limit how many Achievements to delete.
     */
    limit?: number
  }

  /**
   * Achievement without action
   */
  export type AchievementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievement
     */
    omit?: AchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null
  }


  /**
   * Model WeightHistory
   */

  export type AggregateWeightHistory = {
    _count: WeightHistoryCountAggregateOutputType | null
    _avg: WeightHistoryAvgAggregateOutputType | null
    _sum: WeightHistorySumAggregateOutputType | null
    _min: WeightHistoryMinAggregateOutputType | null
    _max: WeightHistoryMaxAggregateOutputType | null
  }

  export type WeightHistoryAvgAggregateOutputType = {
    weight: number | null
  }

  export type WeightHistorySumAggregateOutputType = {
    weight: number | null
  }

  export type WeightHistoryMinAggregateOutputType = {
    id: string | null
    weight: number | null
    date: Date | null
    notes: string | null
    userId: string | null
  }

  export type WeightHistoryMaxAggregateOutputType = {
    id: string | null
    weight: number | null
    date: Date | null
    notes: string | null
    userId: string | null
  }

  export type WeightHistoryCountAggregateOutputType = {
    id: number
    weight: number
    date: number
    notes: number
    userId: number
    _all: number
  }


  export type WeightHistoryAvgAggregateInputType = {
    weight?: true
  }

  export type WeightHistorySumAggregateInputType = {
    weight?: true
  }

  export type WeightHistoryMinAggregateInputType = {
    id?: true
    weight?: true
    date?: true
    notes?: true
    userId?: true
  }

  export type WeightHistoryMaxAggregateInputType = {
    id?: true
    weight?: true
    date?: true
    notes?: true
    userId?: true
  }

  export type WeightHistoryCountAggregateInputType = {
    id?: true
    weight?: true
    date?: true
    notes?: true
    userId?: true
    _all?: true
  }

  export type WeightHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WeightHistory to aggregate.
     */
    where?: WeightHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeightHistories to fetch.
     */
    orderBy?: WeightHistoryOrderByWithRelationInput | WeightHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WeightHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeightHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeightHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WeightHistories
    **/
    _count?: true | WeightHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WeightHistoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WeightHistorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WeightHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WeightHistoryMaxAggregateInputType
  }

  export type GetWeightHistoryAggregateType<T extends WeightHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateWeightHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWeightHistory[P]>
      : GetScalarType<T[P], AggregateWeightHistory[P]>
  }




  export type WeightHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WeightHistoryWhereInput
    orderBy?: WeightHistoryOrderByWithAggregationInput | WeightHistoryOrderByWithAggregationInput[]
    by: WeightHistoryScalarFieldEnum[] | WeightHistoryScalarFieldEnum
    having?: WeightHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WeightHistoryCountAggregateInputType | true
    _avg?: WeightHistoryAvgAggregateInputType
    _sum?: WeightHistorySumAggregateInputType
    _min?: WeightHistoryMinAggregateInputType
    _max?: WeightHistoryMaxAggregateInputType
  }

  export type WeightHistoryGroupByOutputType = {
    id: string
    weight: number
    date: Date
    notes: string | null
    userId: string
    _count: WeightHistoryCountAggregateOutputType | null
    _avg: WeightHistoryAvgAggregateOutputType | null
    _sum: WeightHistorySumAggregateOutputType | null
    _min: WeightHistoryMinAggregateOutputType | null
    _max: WeightHistoryMaxAggregateOutputType | null
  }

  type GetWeightHistoryGroupByPayload<T extends WeightHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WeightHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WeightHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WeightHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], WeightHistoryGroupByOutputType[P]>
        }
      >
    >


  export type WeightHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    weight?: boolean
    date?: boolean
    notes?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["weightHistory"]>

  export type WeightHistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    weight?: boolean
    date?: boolean
    notes?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["weightHistory"]>

  export type WeightHistorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    weight?: boolean
    date?: boolean
    notes?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["weightHistory"]>

  export type WeightHistorySelectScalar = {
    id?: boolean
    weight?: boolean
    date?: boolean
    notes?: boolean
    userId?: boolean
  }

  export type WeightHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "weight" | "date" | "notes" | "userId", ExtArgs["result"]["weightHistory"]>
  export type WeightHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type WeightHistoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type WeightHistoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $WeightHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WeightHistory"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      weight: number
      date: Date
      notes: string | null
      userId: string
    }, ExtArgs["result"]["weightHistory"]>
    composites: {}
  }

  type WeightHistoryGetPayload<S extends boolean | null | undefined | WeightHistoryDefaultArgs> = $Result.GetResult<Prisma.$WeightHistoryPayload, S>

  type WeightHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WeightHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WeightHistoryCountAggregateInputType | true
    }

  export interface WeightHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WeightHistory'], meta: { name: 'WeightHistory' } }
    /**
     * Find zero or one WeightHistory that matches the filter.
     * @param {WeightHistoryFindUniqueArgs} args - Arguments to find a WeightHistory
     * @example
     * // Get one WeightHistory
     * const weightHistory = await prisma.weightHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WeightHistoryFindUniqueArgs>(args: SelectSubset<T, WeightHistoryFindUniqueArgs<ExtArgs>>): Prisma__WeightHistoryClient<$Result.GetResult<Prisma.$WeightHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WeightHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WeightHistoryFindUniqueOrThrowArgs} args - Arguments to find a WeightHistory
     * @example
     * // Get one WeightHistory
     * const weightHistory = await prisma.weightHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WeightHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, WeightHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WeightHistoryClient<$Result.GetResult<Prisma.$WeightHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WeightHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeightHistoryFindFirstArgs} args - Arguments to find a WeightHistory
     * @example
     * // Get one WeightHistory
     * const weightHistory = await prisma.weightHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WeightHistoryFindFirstArgs>(args?: SelectSubset<T, WeightHistoryFindFirstArgs<ExtArgs>>): Prisma__WeightHistoryClient<$Result.GetResult<Prisma.$WeightHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WeightHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeightHistoryFindFirstOrThrowArgs} args - Arguments to find a WeightHistory
     * @example
     * // Get one WeightHistory
     * const weightHistory = await prisma.weightHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WeightHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, WeightHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__WeightHistoryClient<$Result.GetResult<Prisma.$WeightHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WeightHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeightHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WeightHistories
     * const weightHistories = await prisma.weightHistory.findMany()
     * 
     * // Get first 10 WeightHistories
     * const weightHistories = await prisma.weightHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const weightHistoryWithIdOnly = await prisma.weightHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WeightHistoryFindManyArgs>(args?: SelectSubset<T, WeightHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeightHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WeightHistory.
     * @param {WeightHistoryCreateArgs} args - Arguments to create a WeightHistory.
     * @example
     * // Create one WeightHistory
     * const WeightHistory = await prisma.weightHistory.create({
     *   data: {
     *     // ... data to create a WeightHistory
     *   }
     * })
     * 
     */
    create<T extends WeightHistoryCreateArgs>(args: SelectSubset<T, WeightHistoryCreateArgs<ExtArgs>>): Prisma__WeightHistoryClient<$Result.GetResult<Prisma.$WeightHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WeightHistories.
     * @param {WeightHistoryCreateManyArgs} args - Arguments to create many WeightHistories.
     * @example
     * // Create many WeightHistories
     * const weightHistory = await prisma.weightHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WeightHistoryCreateManyArgs>(args?: SelectSubset<T, WeightHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WeightHistories and returns the data saved in the database.
     * @param {WeightHistoryCreateManyAndReturnArgs} args - Arguments to create many WeightHistories.
     * @example
     * // Create many WeightHistories
     * const weightHistory = await prisma.weightHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WeightHistories and only return the `id`
     * const weightHistoryWithIdOnly = await prisma.weightHistory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WeightHistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, WeightHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeightHistoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WeightHistory.
     * @param {WeightHistoryDeleteArgs} args - Arguments to delete one WeightHistory.
     * @example
     * // Delete one WeightHistory
     * const WeightHistory = await prisma.weightHistory.delete({
     *   where: {
     *     // ... filter to delete one WeightHistory
     *   }
     * })
     * 
     */
    delete<T extends WeightHistoryDeleteArgs>(args: SelectSubset<T, WeightHistoryDeleteArgs<ExtArgs>>): Prisma__WeightHistoryClient<$Result.GetResult<Prisma.$WeightHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WeightHistory.
     * @param {WeightHistoryUpdateArgs} args - Arguments to update one WeightHistory.
     * @example
     * // Update one WeightHistory
     * const weightHistory = await prisma.weightHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WeightHistoryUpdateArgs>(args: SelectSubset<T, WeightHistoryUpdateArgs<ExtArgs>>): Prisma__WeightHistoryClient<$Result.GetResult<Prisma.$WeightHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WeightHistories.
     * @param {WeightHistoryDeleteManyArgs} args - Arguments to filter WeightHistories to delete.
     * @example
     * // Delete a few WeightHistories
     * const { count } = await prisma.weightHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WeightHistoryDeleteManyArgs>(args?: SelectSubset<T, WeightHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WeightHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeightHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WeightHistories
     * const weightHistory = await prisma.weightHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WeightHistoryUpdateManyArgs>(args: SelectSubset<T, WeightHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WeightHistories and returns the data updated in the database.
     * @param {WeightHistoryUpdateManyAndReturnArgs} args - Arguments to update many WeightHistories.
     * @example
     * // Update many WeightHistories
     * const weightHistory = await prisma.weightHistory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WeightHistories and only return the `id`
     * const weightHistoryWithIdOnly = await prisma.weightHistory.updateManyAndReturn({
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
    updateManyAndReturn<T extends WeightHistoryUpdateManyAndReturnArgs>(args: SelectSubset<T, WeightHistoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeightHistoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WeightHistory.
     * @param {WeightHistoryUpsertArgs} args - Arguments to update or create a WeightHistory.
     * @example
     * // Update or create a WeightHistory
     * const weightHistory = await prisma.weightHistory.upsert({
     *   create: {
     *     // ... data to create a WeightHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WeightHistory we want to update
     *   }
     * })
     */
    upsert<T extends WeightHistoryUpsertArgs>(args: SelectSubset<T, WeightHistoryUpsertArgs<ExtArgs>>): Prisma__WeightHistoryClient<$Result.GetResult<Prisma.$WeightHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WeightHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeightHistoryCountArgs} args - Arguments to filter WeightHistories to count.
     * @example
     * // Count the number of WeightHistories
     * const count = await prisma.weightHistory.count({
     *   where: {
     *     // ... the filter for the WeightHistories we want to count
     *   }
     * })
    **/
    count<T extends WeightHistoryCountArgs>(
      args?: Subset<T, WeightHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WeightHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WeightHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeightHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WeightHistoryAggregateArgs>(args: Subset<T, WeightHistoryAggregateArgs>): Prisma.PrismaPromise<GetWeightHistoryAggregateType<T>>

    /**
     * Group by WeightHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeightHistoryGroupByArgs} args - Group by arguments.
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
      T extends WeightHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WeightHistoryGroupByArgs['orderBy'] }
        : { orderBy?: WeightHistoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WeightHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWeightHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WeightHistory model
   */
  readonly fields: WeightHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WeightHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WeightHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the WeightHistory model
   */
  interface WeightHistoryFieldRefs {
    readonly id: FieldRef<"WeightHistory", 'String'>
    readonly weight: FieldRef<"WeightHistory", 'Float'>
    readonly date: FieldRef<"WeightHistory", 'DateTime'>
    readonly notes: FieldRef<"WeightHistory", 'String'>
    readonly userId: FieldRef<"WeightHistory", 'String'>
  }
    

  // Custom InputTypes
  /**
   * WeightHistory findUnique
   */
  export type WeightHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeightHistory
     */
    select?: WeightHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeightHistory
     */
    omit?: WeightHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeightHistoryInclude<ExtArgs> | null
    /**
     * Filter, which WeightHistory to fetch.
     */
    where: WeightHistoryWhereUniqueInput
  }

  /**
   * WeightHistory findUniqueOrThrow
   */
  export type WeightHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeightHistory
     */
    select?: WeightHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeightHistory
     */
    omit?: WeightHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeightHistoryInclude<ExtArgs> | null
    /**
     * Filter, which WeightHistory to fetch.
     */
    where: WeightHistoryWhereUniqueInput
  }

  /**
   * WeightHistory findFirst
   */
  export type WeightHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeightHistory
     */
    select?: WeightHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeightHistory
     */
    omit?: WeightHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeightHistoryInclude<ExtArgs> | null
    /**
     * Filter, which WeightHistory to fetch.
     */
    where?: WeightHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeightHistories to fetch.
     */
    orderBy?: WeightHistoryOrderByWithRelationInput | WeightHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WeightHistories.
     */
    cursor?: WeightHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeightHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeightHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WeightHistories.
     */
    distinct?: WeightHistoryScalarFieldEnum | WeightHistoryScalarFieldEnum[]
  }

  /**
   * WeightHistory findFirstOrThrow
   */
  export type WeightHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeightHistory
     */
    select?: WeightHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeightHistory
     */
    omit?: WeightHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeightHistoryInclude<ExtArgs> | null
    /**
     * Filter, which WeightHistory to fetch.
     */
    where?: WeightHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeightHistories to fetch.
     */
    orderBy?: WeightHistoryOrderByWithRelationInput | WeightHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WeightHistories.
     */
    cursor?: WeightHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeightHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeightHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WeightHistories.
     */
    distinct?: WeightHistoryScalarFieldEnum | WeightHistoryScalarFieldEnum[]
  }

  /**
   * WeightHistory findMany
   */
  export type WeightHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeightHistory
     */
    select?: WeightHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeightHistory
     */
    omit?: WeightHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeightHistoryInclude<ExtArgs> | null
    /**
     * Filter, which WeightHistories to fetch.
     */
    where?: WeightHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeightHistories to fetch.
     */
    orderBy?: WeightHistoryOrderByWithRelationInput | WeightHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WeightHistories.
     */
    cursor?: WeightHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeightHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeightHistories.
     */
    skip?: number
    distinct?: WeightHistoryScalarFieldEnum | WeightHistoryScalarFieldEnum[]
  }

  /**
   * WeightHistory create
   */
  export type WeightHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeightHistory
     */
    select?: WeightHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeightHistory
     */
    omit?: WeightHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeightHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a WeightHistory.
     */
    data: XOR<WeightHistoryCreateInput, WeightHistoryUncheckedCreateInput>
  }

  /**
   * WeightHistory createMany
   */
  export type WeightHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WeightHistories.
     */
    data: WeightHistoryCreateManyInput | WeightHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WeightHistory createManyAndReturn
   */
  export type WeightHistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeightHistory
     */
    select?: WeightHistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WeightHistory
     */
    omit?: WeightHistoryOmit<ExtArgs> | null
    /**
     * The data used to create many WeightHistories.
     */
    data: WeightHistoryCreateManyInput | WeightHistoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeightHistoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WeightHistory update
   */
  export type WeightHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeightHistory
     */
    select?: WeightHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeightHistory
     */
    omit?: WeightHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeightHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a WeightHistory.
     */
    data: XOR<WeightHistoryUpdateInput, WeightHistoryUncheckedUpdateInput>
    /**
     * Choose, which WeightHistory to update.
     */
    where: WeightHistoryWhereUniqueInput
  }

  /**
   * WeightHistory updateMany
   */
  export type WeightHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WeightHistories.
     */
    data: XOR<WeightHistoryUpdateManyMutationInput, WeightHistoryUncheckedUpdateManyInput>
    /**
     * Filter which WeightHistories to update
     */
    where?: WeightHistoryWhereInput
    /**
     * Limit how many WeightHistories to update.
     */
    limit?: number
  }

  /**
   * WeightHistory updateManyAndReturn
   */
  export type WeightHistoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeightHistory
     */
    select?: WeightHistorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WeightHistory
     */
    omit?: WeightHistoryOmit<ExtArgs> | null
    /**
     * The data used to update WeightHistories.
     */
    data: XOR<WeightHistoryUpdateManyMutationInput, WeightHistoryUncheckedUpdateManyInput>
    /**
     * Filter which WeightHistories to update
     */
    where?: WeightHistoryWhereInput
    /**
     * Limit how many WeightHistories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeightHistoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WeightHistory upsert
   */
  export type WeightHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeightHistory
     */
    select?: WeightHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeightHistory
     */
    omit?: WeightHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeightHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the WeightHistory to update in case it exists.
     */
    where: WeightHistoryWhereUniqueInput
    /**
     * In case the WeightHistory found by the `where` argument doesn't exist, create a new WeightHistory with this data.
     */
    create: XOR<WeightHistoryCreateInput, WeightHistoryUncheckedCreateInput>
    /**
     * In case the WeightHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WeightHistoryUpdateInput, WeightHistoryUncheckedUpdateInput>
  }

  /**
   * WeightHistory delete
   */
  export type WeightHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeightHistory
     */
    select?: WeightHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeightHistory
     */
    omit?: WeightHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeightHistoryInclude<ExtArgs> | null
    /**
     * Filter which WeightHistory to delete.
     */
    where: WeightHistoryWhereUniqueInput
  }

  /**
   * WeightHistory deleteMany
   */
  export type WeightHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WeightHistories to delete
     */
    where?: WeightHistoryWhereInput
    /**
     * Limit how many WeightHistories to delete.
     */
    limit?: number
  }

  /**
   * WeightHistory without action
   */
  export type WeightHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeightHistory
     */
    select?: WeightHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeightHistory
     */
    omit?: WeightHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeightHistoryInclude<ExtArgs> | null
  }


  /**
   * Model BodyMeasurement
   */

  export type AggregateBodyMeasurement = {
    _count: BodyMeasurementCountAggregateOutputType | null
    _avg: BodyMeasurementAvgAggregateOutputType | null
    _sum: BodyMeasurementSumAggregateOutputType | null
    _min: BodyMeasurementMinAggregateOutputType | null
    _max: BodyMeasurementMaxAggregateOutputType | null
  }

  export type BodyMeasurementAvgAggregateOutputType = {
    value: number | null
  }

  export type BodyMeasurementSumAggregateOutputType = {
    value: number | null
  }

  export type BodyMeasurementMinAggregateOutputType = {
    id: string | null
    date: Date | null
    type: $Enums.MeasurementType | null
    value: number | null
    notes: string | null
    userId: string | null
  }

  export type BodyMeasurementMaxAggregateOutputType = {
    id: string | null
    date: Date | null
    type: $Enums.MeasurementType | null
    value: number | null
    notes: string | null
    userId: string | null
  }

  export type BodyMeasurementCountAggregateOutputType = {
    id: number
    date: number
    type: number
    value: number
    notes: number
    userId: number
    _all: number
  }


  export type BodyMeasurementAvgAggregateInputType = {
    value?: true
  }

  export type BodyMeasurementSumAggregateInputType = {
    value?: true
  }

  export type BodyMeasurementMinAggregateInputType = {
    id?: true
    date?: true
    type?: true
    value?: true
    notes?: true
    userId?: true
  }

  export type BodyMeasurementMaxAggregateInputType = {
    id?: true
    date?: true
    type?: true
    value?: true
    notes?: true
    userId?: true
  }

  export type BodyMeasurementCountAggregateInputType = {
    id?: true
    date?: true
    type?: true
    value?: true
    notes?: true
    userId?: true
    _all?: true
  }

  export type BodyMeasurementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BodyMeasurement to aggregate.
     */
    where?: BodyMeasurementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BodyMeasurements to fetch.
     */
    orderBy?: BodyMeasurementOrderByWithRelationInput | BodyMeasurementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BodyMeasurementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BodyMeasurements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BodyMeasurements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BodyMeasurements
    **/
    _count?: true | BodyMeasurementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BodyMeasurementAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BodyMeasurementSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BodyMeasurementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BodyMeasurementMaxAggregateInputType
  }

  export type GetBodyMeasurementAggregateType<T extends BodyMeasurementAggregateArgs> = {
        [P in keyof T & keyof AggregateBodyMeasurement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBodyMeasurement[P]>
      : GetScalarType<T[P], AggregateBodyMeasurement[P]>
  }




  export type BodyMeasurementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BodyMeasurementWhereInput
    orderBy?: BodyMeasurementOrderByWithAggregationInput | BodyMeasurementOrderByWithAggregationInput[]
    by: BodyMeasurementScalarFieldEnum[] | BodyMeasurementScalarFieldEnum
    having?: BodyMeasurementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BodyMeasurementCountAggregateInputType | true
    _avg?: BodyMeasurementAvgAggregateInputType
    _sum?: BodyMeasurementSumAggregateInputType
    _min?: BodyMeasurementMinAggregateInputType
    _max?: BodyMeasurementMaxAggregateInputType
  }

  export type BodyMeasurementGroupByOutputType = {
    id: string
    date: Date
    type: $Enums.MeasurementType
    value: number
    notes: string | null
    userId: string
    _count: BodyMeasurementCountAggregateOutputType | null
    _avg: BodyMeasurementAvgAggregateOutputType | null
    _sum: BodyMeasurementSumAggregateOutputType | null
    _min: BodyMeasurementMinAggregateOutputType | null
    _max: BodyMeasurementMaxAggregateOutputType | null
  }

  type GetBodyMeasurementGroupByPayload<T extends BodyMeasurementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BodyMeasurementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BodyMeasurementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BodyMeasurementGroupByOutputType[P]>
            : GetScalarType<T[P], BodyMeasurementGroupByOutputType[P]>
        }
      >
    >


  export type BodyMeasurementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    type?: boolean
    value?: boolean
    notes?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bodyMeasurement"]>

  export type BodyMeasurementSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    type?: boolean
    value?: boolean
    notes?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bodyMeasurement"]>

  export type BodyMeasurementSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    type?: boolean
    value?: boolean
    notes?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bodyMeasurement"]>

  export type BodyMeasurementSelectScalar = {
    id?: boolean
    date?: boolean
    type?: boolean
    value?: boolean
    notes?: boolean
    userId?: boolean
  }

  export type BodyMeasurementOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "date" | "type" | "value" | "notes" | "userId", ExtArgs["result"]["bodyMeasurement"]>
  export type BodyMeasurementInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BodyMeasurementIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BodyMeasurementIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $BodyMeasurementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BodyMeasurement"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      date: Date
      type: $Enums.MeasurementType
      value: number
      notes: string | null
      userId: string
    }, ExtArgs["result"]["bodyMeasurement"]>
    composites: {}
  }

  type BodyMeasurementGetPayload<S extends boolean | null | undefined | BodyMeasurementDefaultArgs> = $Result.GetResult<Prisma.$BodyMeasurementPayload, S>

  type BodyMeasurementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BodyMeasurementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BodyMeasurementCountAggregateInputType | true
    }

  export interface BodyMeasurementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BodyMeasurement'], meta: { name: 'BodyMeasurement' } }
    /**
     * Find zero or one BodyMeasurement that matches the filter.
     * @param {BodyMeasurementFindUniqueArgs} args - Arguments to find a BodyMeasurement
     * @example
     * // Get one BodyMeasurement
     * const bodyMeasurement = await prisma.bodyMeasurement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BodyMeasurementFindUniqueArgs>(args: SelectSubset<T, BodyMeasurementFindUniqueArgs<ExtArgs>>): Prisma__BodyMeasurementClient<$Result.GetResult<Prisma.$BodyMeasurementPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BodyMeasurement that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BodyMeasurementFindUniqueOrThrowArgs} args - Arguments to find a BodyMeasurement
     * @example
     * // Get one BodyMeasurement
     * const bodyMeasurement = await prisma.bodyMeasurement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BodyMeasurementFindUniqueOrThrowArgs>(args: SelectSubset<T, BodyMeasurementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BodyMeasurementClient<$Result.GetResult<Prisma.$BodyMeasurementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BodyMeasurement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BodyMeasurementFindFirstArgs} args - Arguments to find a BodyMeasurement
     * @example
     * // Get one BodyMeasurement
     * const bodyMeasurement = await prisma.bodyMeasurement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BodyMeasurementFindFirstArgs>(args?: SelectSubset<T, BodyMeasurementFindFirstArgs<ExtArgs>>): Prisma__BodyMeasurementClient<$Result.GetResult<Prisma.$BodyMeasurementPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BodyMeasurement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BodyMeasurementFindFirstOrThrowArgs} args - Arguments to find a BodyMeasurement
     * @example
     * // Get one BodyMeasurement
     * const bodyMeasurement = await prisma.bodyMeasurement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BodyMeasurementFindFirstOrThrowArgs>(args?: SelectSubset<T, BodyMeasurementFindFirstOrThrowArgs<ExtArgs>>): Prisma__BodyMeasurementClient<$Result.GetResult<Prisma.$BodyMeasurementPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BodyMeasurements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BodyMeasurementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BodyMeasurements
     * const bodyMeasurements = await prisma.bodyMeasurement.findMany()
     * 
     * // Get first 10 BodyMeasurements
     * const bodyMeasurements = await prisma.bodyMeasurement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bodyMeasurementWithIdOnly = await prisma.bodyMeasurement.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BodyMeasurementFindManyArgs>(args?: SelectSubset<T, BodyMeasurementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BodyMeasurementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BodyMeasurement.
     * @param {BodyMeasurementCreateArgs} args - Arguments to create a BodyMeasurement.
     * @example
     * // Create one BodyMeasurement
     * const BodyMeasurement = await prisma.bodyMeasurement.create({
     *   data: {
     *     // ... data to create a BodyMeasurement
     *   }
     * })
     * 
     */
    create<T extends BodyMeasurementCreateArgs>(args: SelectSubset<T, BodyMeasurementCreateArgs<ExtArgs>>): Prisma__BodyMeasurementClient<$Result.GetResult<Prisma.$BodyMeasurementPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BodyMeasurements.
     * @param {BodyMeasurementCreateManyArgs} args - Arguments to create many BodyMeasurements.
     * @example
     * // Create many BodyMeasurements
     * const bodyMeasurement = await prisma.bodyMeasurement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BodyMeasurementCreateManyArgs>(args?: SelectSubset<T, BodyMeasurementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BodyMeasurements and returns the data saved in the database.
     * @param {BodyMeasurementCreateManyAndReturnArgs} args - Arguments to create many BodyMeasurements.
     * @example
     * // Create many BodyMeasurements
     * const bodyMeasurement = await prisma.bodyMeasurement.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BodyMeasurements and only return the `id`
     * const bodyMeasurementWithIdOnly = await prisma.bodyMeasurement.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BodyMeasurementCreateManyAndReturnArgs>(args?: SelectSubset<T, BodyMeasurementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BodyMeasurementPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BodyMeasurement.
     * @param {BodyMeasurementDeleteArgs} args - Arguments to delete one BodyMeasurement.
     * @example
     * // Delete one BodyMeasurement
     * const BodyMeasurement = await prisma.bodyMeasurement.delete({
     *   where: {
     *     // ... filter to delete one BodyMeasurement
     *   }
     * })
     * 
     */
    delete<T extends BodyMeasurementDeleteArgs>(args: SelectSubset<T, BodyMeasurementDeleteArgs<ExtArgs>>): Prisma__BodyMeasurementClient<$Result.GetResult<Prisma.$BodyMeasurementPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BodyMeasurement.
     * @param {BodyMeasurementUpdateArgs} args - Arguments to update one BodyMeasurement.
     * @example
     * // Update one BodyMeasurement
     * const bodyMeasurement = await prisma.bodyMeasurement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BodyMeasurementUpdateArgs>(args: SelectSubset<T, BodyMeasurementUpdateArgs<ExtArgs>>): Prisma__BodyMeasurementClient<$Result.GetResult<Prisma.$BodyMeasurementPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BodyMeasurements.
     * @param {BodyMeasurementDeleteManyArgs} args - Arguments to filter BodyMeasurements to delete.
     * @example
     * // Delete a few BodyMeasurements
     * const { count } = await prisma.bodyMeasurement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BodyMeasurementDeleteManyArgs>(args?: SelectSubset<T, BodyMeasurementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BodyMeasurements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BodyMeasurementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BodyMeasurements
     * const bodyMeasurement = await prisma.bodyMeasurement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BodyMeasurementUpdateManyArgs>(args: SelectSubset<T, BodyMeasurementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BodyMeasurements and returns the data updated in the database.
     * @param {BodyMeasurementUpdateManyAndReturnArgs} args - Arguments to update many BodyMeasurements.
     * @example
     * // Update many BodyMeasurements
     * const bodyMeasurement = await prisma.bodyMeasurement.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BodyMeasurements and only return the `id`
     * const bodyMeasurementWithIdOnly = await prisma.bodyMeasurement.updateManyAndReturn({
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
    updateManyAndReturn<T extends BodyMeasurementUpdateManyAndReturnArgs>(args: SelectSubset<T, BodyMeasurementUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BodyMeasurementPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BodyMeasurement.
     * @param {BodyMeasurementUpsertArgs} args - Arguments to update or create a BodyMeasurement.
     * @example
     * // Update or create a BodyMeasurement
     * const bodyMeasurement = await prisma.bodyMeasurement.upsert({
     *   create: {
     *     // ... data to create a BodyMeasurement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BodyMeasurement we want to update
     *   }
     * })
     */
    upsert<T extends BodyMeasurementUpsertArgs>(args: SelectSubset<T, BodyMeasurementUpsertArgs<ExtArgs>>): Prisma__BodyMeasurementClient<$Result.GetResult<Prisma.$BodyMeasurementPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BodyMeasurements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BodyMeasurementCountArgs} args - Arguments to filter BodyMeasurements to count.
     * @example
     * // Count the number of BodyMeasurements
     * const count = await prisma.bodyMeasurement.count({
     *   where: {
     *     // ... the filter for the BodyMeasurements we want to count
     *   }
     * })
    **/
    count<T extends BodyMeasurementCountArgs>(
      args?: Subset<T, BodyMeasurementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BodyMeasurementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BodyMeasurement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BodyMeasurementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BodyMeasurementAggregateArgs>(args: Subset<T, BodyMeasurementAggregateArgs>): Prisma.PrismaPromise<GetBodyMeasurementAggregateType<T>>

    /**
     * Group by BodyMeasurement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BodyMeasurementGroupByArgs} args - Group by arguments.
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
      T extends BodyMeasurementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BodyMeasurementGroupByArgs['orderBy'] }
        : { orderBy?: BodyMeasurementGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BodyMeasurementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBodyMeasurementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BodyMeasurement model
   */
  readonly fields: BodyMeasurementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BodyMeasurement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BodyMeasurementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the BodyMeasurement model
   */
  interface BodyMeasurementFieldRefs {
    readonly id: FieldRef<"BodyMeasurement", 'String'>
    readonly date: FieldRef<"BodyMeasurement", 'DateTime'>
    readonly type: FieldRef<"BodyMeasurement", 'MeasurementType'>
    readonly value: FieldRef<"BodyMeasurement", 'Float'>
    readonly notes: FieldRef<"BodyMeasurement", 'String'>
    readonly userId: FieldRef<"BodyMeasurement", 'String'>
  }
    

  // Custom InputTypes
  /**
   * BodyMeasurement findUnique
   */
  export type BodyMeasurementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BodyMeasurement
     */
    select?: BodyMeasurementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BodyMeasurement
     */
    omit?: BodyMeasurementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BodyMeasurementInclude<ExtArgs> | null
    /**
     * Filter, which BodyMeasurement to fetch.
     */
    where: BodyMeasurementWhereUniqueInput
  }

  /**
   * BodyMeasurement findUniqueOrThrow
   */
  export type BodyMeasurementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BodyMeasurement
     */
    select?: BodyMeasurementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BodyMeasurement
     */
    omit?: BodyMeasurementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BodyMeasurementInclude<ExtArgs> | null
    /**
     * Filter, which BodyMeasurement to fetch.
     */
    where: BodyMeasurementWhereUniqueInput
  }

  /**
   * BodyMeasurement findFirst
   */
  export type BodyMeasurementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BodyMeasurement
     */
    select?: BodyMeasurementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BodyMeasurement
     */
    omit?: BodyMeasurementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BodyMeasurementInclude<ExtArgs> | null
    /**
     * Filter, which BodyMeasurement to fetch.
     */
    where?: BodyMeasurementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BodyMeasurements to fetch.
     */
    orderBy?: BodyMeasurementOrderByWithRelationInput | BodyMeasurementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BodyMeasurements.
     */
    cursor?: BodyMeasurementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BodyMeasurements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BodyMeasurements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BodyMeasurements.
     */
    distinct?: BodyMeasurementScalarFieldEnum | BodyMeasurementScalarFieldEnum[]
  }

  /**
   * BodyMeasurement findFirstOrThrow
   */
  export type BodyMeasurementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BodyMeasurement
     */
    select?: BodyMeasurementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BodyMeasurement
     */
    omit?: BodyMeasurementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BodyMeasurementInclude<ExtArgs> | null
    /**
     * Filter, which BodyMeasurement to fetch.
     */
    where?: BodyMeasurementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BodyMeasurements to fetch.
     */
    orderBy?: BodyMeasurementOrderByWithRelationInput | BodyMeasurementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BodyMeasurements.
     */
    cursor?: BodyMeasurementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BodyMeasurements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BodyMeasurements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BodyMeasurements.
     */
    distinct?: BodyMeasurementScalarFieldEnum | BodyMeasurementScalarFieldEnum[]
  }

  /**
   * BodyMeasurement findMany
   */
  export type BodyMeasurementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BodyMeasurement
     */
    select?: BodyMeasurementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BodyMeasurement
     */
    omit?: BodyMeasurementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BodyMeasurementInclude<ExtArgs> | null
    /**
     * Filter, which BodyMeasurements to fetch.
     */
    where?: BodyMeasurementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BodyMeasurements to fetch.
     */
    orderBy?: BodyMeasurementOrderByWithRelationInput | BodyMeasurementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BodyMeasurements.
     */
    cursor?: BodyMeasurementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BodyMeasurements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BodyMeasurements.
     */
    skip?: number
    distinct?: BodyMeasurementScalarFieldEnum | BodyMeasurementScalarFieldEnum[]
  }

  /**
   * BodyMeasurement create
   */
  export type BodyMeasurementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BodyMeasurement
     */
    select?: BodyMeasurementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BodyMeasurement
     */
    omit?: BodyMeasurementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BodyMeasurementInclude<ExtArgs> | null
    /**
     * The data needed to create a BodyMeasurement.
     */
    data: XOR<BodyMeasurementCreateInput, BodyMeasurementUncheckedCreateInput>
  }

  /**
   * BodyMeasurement createMany
   */
  export type BodyMeasurementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BodyMeasurements.
     */
    data: BodyMeasurementCreateManyInput | BodyMeasurementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BodyMeasurement createManyAndReturn
   */
  export type BodyMeasurementCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BodyMeasurement
     */
    select?: BodyMeasurementSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BodyMeasurement
     */
    omit?: BodyMeasurementOmit<ExtArgs> | null
    /**
     * The data used to create many BodyMeasurements.
     */
    data: BodyMeasurementCreateManyInput | BodyMeasurementCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BodyMeasurementIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BodyMeasurement update
   */
  export type BodyMeasurementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BodyMeasurement
     */
    select?: BodyMeasurementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BodyMeasurement
     */
    omit?: BodyMeasurementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BodyMeasurementInclude<ExtArgs> | null
    /**
     * The data needed to update a BodyMeasurement.
     */
    data: XOR<BodyMeasurementUpdateInput, BodyMeasurementUncheckedUpdateInput>
    /**
     * Choose, which BodyMeasurement to update.
     */
    where: BodyMeasurementWhereUniqueInput
  }

  /**
   * BodyMeasurement updateMany
   */
  export type BodyMeasurementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BodyMeasurements.
     */
    data: XOR<BodyMeasurementUpdateManyMutationInput, BodyMeasurementUncheckedUpdateManyInput>
    /**
     * Filter which BodyMeasurements to update
     */
    where?: BodyMeasurementWhereInput
    /**
     * Limit how many BodyMeasurements to update.
     */
    limit?: number
  }

  /**
   * BodyMeasurement updateManyAndReturn
   */
  export type BodyMeasurementUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BodyMeasurement
     */
    select?: BodyMeasurementSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BodyMeasurement
     */
    omit?: BodyMeasurementOmit<ExtArgs> | null
    /**
     * The data used to update BodyMeasurements.
     */
    data: XOR<BodyMeasurementUpdateManyMutationInput, BodyMeasurementUncheckedUpdateManyInput>
    /**
     * Filter which BodyMeasurements to update
     */
    where?: BodyMeasurementWhereInput
    /**
     * Limit how many BodyMeasurements to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BodyMeasurementIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BodyMeasurement upsert
   */
  export type BodyMeasurementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BodyMeasurement
     */
    select?: BodyMeasurementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BodyMeasurement
     */
    omit?: BodyMeasurementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BodyMeasurementInclude<ExtArgs> | null
    /**
     * The filter to search for the BodyMeasurement to update in case it exists.
     */
    where: BodyMeasurementWhereUniqueInput
    /**
     * In case the BodyMeasurement found by the `where` argument doesn't exist, create a new BodyMeasurement with this data.
     */
    create: XOR<BodyMeasurementCreateInput, BodyMeasurementUncheckedCreateInput>
    /**
     * In case the BodyMeasurement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BodyMeasurementUpdateInput, BodyMeasurementUncheckedUpdateInput>
  }

  /**
   * BodyMeasurement delete
   */
  export type BodyMeasurementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BodyMeasurement
     */
    select?: BodyMeasurementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BodyMeasurement
     */
    omit?: BodyMeasurementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BodyMeasurementInclude<ExtArgs> | null
    /**
     * Filter which BodyMeasurement to delete.
     */
    where: BodyMeasurementWhereUniqueInput
  }

  /**
   * BodyMeasurement deleteMany
   */
  export type BodyMeasurementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BodyMeasurements to delete
     */
    where?: BodyMeasurementWhereInput
    /**
     * Limit how many BodyMeasurements to delete.
     */
    limit?: number
  }

  /**
   * BodyMeasurement without action
   */
  export type BodyMeasurementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BodyMeasurement
     */
    select?: BodyMeasurementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BodyMeasurement
     */
    omit?: BodyMeasurementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BodyMeasurementInclude<ExtArgs> | null
  }


  /**
   * Model AIWorkout
   */

  export type AggregateAIWorkout = {
    _count: AIWorkoutCountAggregateOutputType | null
    _avg: AIWorkoutAvgAggregateOutputType | null
    _sum: AIWorkoutSumAggregateOutputType | null
    _min: AIWorkoutMinAggregateOutputType | null
    _max: AIWorkoutMaxAggregateOutputType | null
  }

  export type AIWorkoutAvgAggregateOutputType = {
    duration: number | null
  }

  export type AIWorkoutSumAggregateOutputType = {
    duration: number | null
  }

  export type AIWorkoutMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    fitnessLevel: string | null
    goal: string | null
    duration: number | null
    equipment: string | null
    focusArea: string | null
    createdAt: Date | null
    userId: string | null
  }

  export type AIWorkoutMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    fitnessLevel: string | null
    goal: string | null
    duration: number | null
    equipment: string | null
    focusArea: string | null
    createdAt: Date | null
    userId: string | null
  }

  export type AIWorkoutCountAggregateOutputType = {
    id: number
    name: number
    description: number
    fitnessLevel: number
    goal: number
    duration: number
    equipment: number
    focusArea: number
    warmup: number
    cooldown: number
    createdAt: number
    userId: number
    _all: number
  }


  export type AIWorkoutAvgAggregateInputType = {
    duration?: true
  }

  export type AIWorkoutSumAggregateInputType = {
    duration?: true
  }

  export type AIWorkoutMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    fitnessLevel?: true
    goal?: true
    duration?: true
    equipment?: true
    focusArea?: true
    createdAt?: true
    userId?: true
  }

  export type AIWorkoutMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    fitnessLevel?: true
    goal?: true
    duration?: true
    equipment?: true
    focusArea?: true
    createdAt?: true
    userId?: true
  }

  export type AIWorkoutCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    fitnessLevel?: true
    goal?: true
    duration?: true
    equipment?: true
    focusArea?: true
    warmup?: true
    cooldown?: true
    createdAt?: true
    userId?: true
    _all?: true
  }

  export type AIWorkoutAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AIWorkout to aggregate.
     */
    where?: AIWorkoutWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AIWorkouts to fetch.
     */
    orderBy?: AIWorkoutOrderByWithRelationInput | AIWorkoutOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AIWorkoutWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AIWorkouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AIWorkouts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AIWorkouts
    **/
    _count?: true | AIWorkoutCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AIWorkoutAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AIWorkoutSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AIWorkoutMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AIWorkoutMaxAggregateInputType
  }

  export type GetAIWorkoutAggregateType<T extends AIWorkoutAggregateArgs> = {
        [P in keyof T & keyof AggregateAIWorkout]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAIWorkout[P]>
      : GetScalarType<T[P], AggregateAIWorkout[P]>
  }




  export type AIWorkoutGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AIWorkoutWhereInput
    orderBy?: AIWorkoutOrderByWithAggregationInput | AIWorkoutOrderByWithAggregationInput[]
    by: AIWorkoutScalarFieldEnum[] | AIWorkoutScalarFieldEnum
    having?: AIWorkoutScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AIWorkoutCountAggregateInputType | true
    _avg?: AIWorkoutAvgAggregateInputType
    _sum?: AIWorkoutSumAggregateInputType
    _min?: AIWorkoutMinAggregateInputType
    _max?: AIWorkoutMaxAggregateInputType
  }

  export type AIWorkoutGroupByOutputType = {
    id: string
    name: string
    description: string | null
    fitnessLevel: string
    goal: string
    duration: number
    equipment: string
    focusArea: string
    warmup: JsonValue | null
    cooldown: JsonValue | null
    createdAt: Date
    userId: string
    _count: AIWorkoutCountAggregateOutputType | null
    _avg: AIWorkoutAvgAggregateOutputType | null
    _sum: AIWorkoutSumAggregateOutputType | null
    _min: AIWorkoutMinAggregateOutputType | null
    _max: AIWorkoutMaxAggregateOutputType | null
  }

  type GetAIWorkoutGroupByPayload<T extends AIWorkoutGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AIWorkoutGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AIWorkoutGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AIWorkoutGroupByOutputType[P]>
            : GetScalarType<T[P], AIWorkoutGroupByOutputType[P]>
        }
      >
    >


  export type AIWorkoutSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    fitnessLevel?: boolean
    goal?: boolean
    duration?: boolean
    equipment?: boolean
    focusArea?: boolean
    warmup?: boolean
    cooldown?: boolean
    createdAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    exercises?: boolean | AIWorkout$exercisesArgs<ExtArgs>
    _count?: boolean | AIWorkoutCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aIWorkout"]>

  export type AIWorkoutSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    fitnessLevel?: boolean
    goal?: boolean
    duration?: boolean
    equipment?: boolean
    focusArea?: boolean
    warmup?: boolean
    cooldown?: boolean
    createdAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aIWorkout"]>

  export type AIWorkoutSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    fitnessLevel?: boolean
    goal?: boolean
    duration?: boolean
    equipment?: boolean
    focusArea?: boolean
    warmup?: boolean
    cooldown?: boolean
    createdAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aIWorkout"]>

  export type AIWorkoutSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    fitnessLevel?: boolean
    goal?: boolean
    duration?: boolean
    equipment?: boolean
    focusArea?: boolean
    warmup?: boolean
    cooldown?: boolean
    createdAt?: boolean
    userId?: boolean
  }

  export type AIWorkoutOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "fitnessLevel" | "goal" | "duration" | "equipment" | "focusArea" | "warmup" | "cooldown" | "createdAt" | "userId", ExtArgs["result"]["aIWorkout"]>
  export type AIWorkoutInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    exercises?: boolean | AIWorkout$exercisesArgs<ExtArgs>
    _count?: boolean | AIWorkoutCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AIWorkoutIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AIWorkoutIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AIWorkoutPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AIWorkout"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      exercises: Prisma.$AIWorkoutExercisePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      fitnessLevel: string
      goal: string
      duration: number
      equipment: string
      focusArea: string
      warmup: Prisma.JsonValue | null
      cooldown: Prisma.JsonValue | null
      createdAt: Date
      userId: string
    }, ExtArgs["result"]["aIWorkout"]>
    composites: {}
  }

  type AIWorkoutGetPayload<S extends boolean | null | undefined | AIWorkoutDefaultArgs> = $Result.GetResult<Prisma.$AIWorkoutPayload, S>

  type AIWorkoutCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AIWorkoutFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AIWorkoutCountAggregateInputType | true
    }

  export interface AIWorkoutDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AIWorkout'], meta: { name: 'AIWorkout' } }
    /**
     * Find zero or one AIWorkout that matches the filter.
     * @param {AIWorkoutFindUniqueArgs} args - Arguments to find a AIWorkout
     * @example
     * // Get one AIWorkout
     * const aIWorkout = await prisma.aIWorkout.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AIWorkoutFindUniqueArgs>(args: SelectSubset<T, AIWorkoutFindUniqueArgs<ExtArgs>>): Prisma__AIWorkoutClient<$Result.GetResult<Prisma.$AIWorkoutPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AIWorkout that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AIWorkoutFindUniqueOrThrowArgs} args - Arguments to find a AIWorkout
     * @example
     * // Get one AIWorkout
     * const aIWorkout = await prisma.aIWorkout.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AIWorkoutFindUniqueOrThrowArgs>(args: SelectSubset<T, AIWorkoutFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AIWorkoutClient<$Result.GetResult<Prisma.$AIWorkoutPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AIWorkout that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIWorkoutFindFirstArgs} args - Arguments to find a AIWorkout
     * @example
     * // Get one AIWorkout
     * const aIWorkout = await prisma.aIWorkout.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AIWorkoutFindFirstArgs>(args?: SelectSubset<T, AIWorkoutFindFirstArgs<ExtArgs>>): Prisma__AIWorkoutClient<$Result.GetResult<Prisma.$AIWorkoutPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AIWorkout that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIWorkoutFindFirstOrThrowArgs} args - Arguments to find a AIWorkout
     * @example
     * // Get one AIWorkout
     * const aIWorkout = await prisma.aIWorkout.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AIWorkoutFindFirstOrThrowArgs>(args?: SelectSubset<T, AIWorkoutFindFirstOrThrowArgs<ExtArgs>>): Prisma__AIWorkoutClient<$Result.GetResult<Prisma.$AIWorkoutPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AIWorkouts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIWorkoutFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AIWorkouts
     * const aIWorkouts = await prisma.aIWorkout.findMany()
     * 
     * // Get first 10 AIWorkouts
     * const aIWorkouts = await prisma.aIWorkout.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const aIWorkoutWithIdOnly = await prisma.aIWorkout.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AIWorkoutFindManyArgs>(args?: SelectSubset<T, AIWorkoutFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AIWorkoutPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AIWorkout.
     * @param {AIWorkoutCreateArgs} args - Arguments to create a AIWorkout.
     * @example
     * // Create one AIWorkout
     * const AIWorkout = await prisma.aIWorkout.create({
     *   data: {
     *     // ... data to create a AIWorkout
     *   }
     * })
     * 
     */
    create<T extends AIWorkoutCreateArgs>(args: SelectSubset<T, AIWorkoutCreateArgs<ExtArgs>>): Prisma__AIWorkoutClient<$Result.GetResult<Prisma.$AIWorkoutPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AIWorkouts.
     * @param {AIWorkoutCreateManyArgs} args - Arguments to create many AIWorkouts.
     * @example
     * // Create many AIWorkouts
     * const aIWorkout = await prisma.aIWorkout.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AIWorkoutCreateManyArgs>(args?: SelectSubset<T, AIWorkoutCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AIWorkouts and returns the data saved in the database.
     * @param {AIWorkoutCreateManyAndReturnArgs} args - Arguments to create many AIWorkouts.
     * @example
     * // Create many AIWorkouts
     * const aIWorkout = await prisma.aIWorkout.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AIWorkouts and only return the `id`
     * const aIWorkoutWithIdOnly = await prisma.aIWorkout.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AIWorkoutCreateManyAndReturnArgs>(args?: SelectSubset<T, AIWorkoutCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AIWorkoutPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AIWorkout.
     * @param {AIWorkoutDeleteArgs} args - Arguments to delete one AIWorkout.
     * @example
     * // Delete one AIWorkout
     * const AIWorkout = await prisma.aIWorkout.delete({
     *   where: {
     *     // ... filter to delete one AIWorkout
     *   }
     * })
     * 
     */
    delete<T extends AIWorkoutDeleteArgs>(args: SelectSubset<T, AIWorkoutDeleteArgs<ExtArgs>>): Prisma__AIWorkoutClient<$Result.GetResult<Prisma.$AIWorkoutPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AIWorkout.
     * @param {AIWorkoutUpdateArgs} args - Arguments to update one AIWorkout.
     * @example
     * // Update one AIWorkout
     * const aIWorkout = await prisma.aIWorkout.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AIWorkoutUpdateArgs>(args: SelectSubset<T, AIWorkoutUpdateArgs<ExtArgs>>): Prisma__AIWorkoutClient<$Result.GetResult<Prisma.$AIWorkoutPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AIWorkouts.
     * @param {AIWorkoutDeleteManyArgs} args - Arguments to filter AIWorkouts to delete.
     * @example
     * // Delete a few AIWorkouts
     * const { count } = await prisma.aIWorkout.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AIWorkoutDeleteManyArgs>(args?: SelectSubset<T, AIWorkoutDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AIWorkouts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIWorkoutUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AIWorkouts
     * const aIWorkout = await prisma.aIWorkout.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AIWorkoutUpdateManyArgs>(args: SelectSubset<T, AIWorkoutUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AIWorkouts and returns the data updated in the database.
     * @param {AIWorkoutUpdateManyAndReturnArgs} args - Arguments to update many AIWorkouts.
     * @example
     * // Update many AIWorkouts
     * const aIWorkout = await prisma.aIWorkout.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AIWorkouts and only return the `id`
     * const aIWorkoutWithIdOnly = await prisma.aIWorkout.updateManyAndReturn({
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
    updateManyAndReturn<T extends AIWorkoutUpdateManyAndReturnArgs>(args: SelectSubset<T, AIWorkoutUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AIWorkoutPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AIWorkout.
     * @param {AIWorkoutUpsertArgs} args - Arguments to update or create a AIWorkout.
     * @example
     * // Update or create a AIWorkout
     * const aIWorkout = await prisma.aIWorkout.upsert({
     *   create: {
     *     // ... data to create a AIWorkout
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AIWorkout we want to update
     *   }
     * })
     */
    upsert<T extends AIWorkoutUpsertArgs>(args: SelectSubset<T, AIWorkoutUpsertArgs<ExtArgs>>): Prisma__AIWorkoutClient<$Result.GetResult<Prisma.$AIWorkoutPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AIWorkouts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIWorkoutCountArgs} args - Arguments to filter AIWorkouts to count.
     * @example
     * // Count the number of AIWorkouts
     * const count = await prisma.aIWorkout.count({
     *   where: {
     *     // ... the filter for the AIWorkouts we want to count
     *   }
     * })
    **/
    count<T extends AIWorkoutCountArgs>(
      args?: Subset<T, AIWorkoutCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AIWorkoutCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AIWorkout.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIWorkoutAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AIWorkoutAggregateArgs>(args: Subset<T, AIWorkoutAggregateArgs>): Prisma.PrismaPromise<GetAIWorkoutAggregateType<T>>

    /**
     * Group by AIWorkout.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIWorkoutGroupByArgs} args - Group by arguments.
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
      T extends AIWorkoutGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AIWorkoutGroupByArgs['orderBy'] }
        : { orderBy?: AIWorkoutGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AIWorkoutGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAIWorkoutGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AIWorkout model
   */
  readonly fields: AIWorkoutFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AIWorkout.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AIWorkoutClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    exercises<T extends AIWorkout$exercisesArgs<ExtArgs> = {}>(args?: Subset<T, AIWorkout$exercisesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AIWorkoutExercisePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the AIWorkout model
   */
  interface AIWorkoutFieldRefs {
    readonly id: FieldRef<"AIWorkout", 'String'>
    readonly name: FieldRef<"AIWorkout", 'String'>
    readonly description: FieldRef<"AIWorkout", 'String'>
    readonly fitnessLevel: FieldRef<"AIWorkout", 'String'>
    readonly goal: FieldRef<"AIWorkout", 'String'>
    readonly duration: FieldRef<"AIWorkout", 'Int'>
    readonly equipment: FieldRef<"AIWorkout", 'String'>
    readonly focusArea: FieldRef<"AIWorkout", 'String'>
    readonly warmup: FieldRef<"AIWorkout", 'Json'>
    readonly cooldown: FieldRef<"AIWorkout", 'Json'>
    readonly createdAt: FieldRef<"AIWorkout", 'DateTime'>
    readonly userId: FieldRef<"AIWorkout", 'String'>
  }
    

  // Custom InputTypes
  /**
   * AIWorkout findUnique
   */
  export type AIWorkoutFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIWorkout
     */
    select?: AIWorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIWorkout
     */
    omit?: AIWorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIWorkoutInclude<ExtArgs> | null
    /**
     * Filter, which AIWorkout to fetch.
     */
    where: AIWorkoutWhereUniqueInput
  }

  /**
   * AIWorkout findUniqueOrThrow
   */
  export type AIWorkoutFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIWorkout
     */
    select?: AIWorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIWorkout
     */
    omit?: AIWorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIWorkoutInclude<ExtArgs> | null
    /**
     * Filter, which AIWorkout to fetch.
     */
    where: AIWorkoutWhereUniqueInput
  }

  /**
   * AIWorkout findFirst
   */
  export type AIWorkoutFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIWorkout
     */
    select?: AIWorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIWorkout
     */
    omit?: AIWorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIWorkoutInclude<ExtArgs> | null
    /**
     * Filter, which AIWorkout to fetch.
     */
    where?: AIWorkoutWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AIWorkouts to fetch.
     */
    orderBy?: AIWorkoutOrderByWithRelationInput | AIWorkoutOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AIWorkouts.
     */
    cursor?: AIWorkoutWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AIWorkouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AIWorkouts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AIWorkouts.
     */
    distinct?: AIWorkoutScalarFieldEnum | AIWorkoutScalarFieldEnum[]
  }

  /**
   * AIWorkout findFirstOrThrow
   */
  export type AIWorkoutFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIWorkout
     */
    select?: AIWorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIWorkout
     */
    omit?: AIWorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIWorkoutInclude<ExtArgs> | null
    /**
     * Filter, which AIWorkout to fetch.
     */
    where?: AIWorkoutWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AIWorkouts to fetch.
     */
    orderBy?: AIWorkoutOrderByWithRelationInput | AIWorkoutOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AIWorkouts.
     */
    cursor?: AIWorkoutWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AIWorkouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AIWorkouts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AIWorkouts.
     */
    distinct?: AIWorkoutScalarFieldEnum | AIWorkoutScalarFieldEnum[]
  }

  /**
   * AIWorkout findMany
   */
  export type AIWorkoutFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIWorkout
     */
    select?: AIWorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIWorkout
     */
    omit?: AIWorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIWorkoutInclude<ExtArgs> | null
    /**
     * Filter, which AIWorkouts to fetch.
     */
    where?: AIWorkoutWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AIWorkouts to fetch.
     */
    orderBy?: AIWorkoutOrderByWithRelationInput | AIWorkoutOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AIWorkouts.
     */
    cursor?: AIWorkoutWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AIWorkouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AIWorkouts.
     */
    skip?: number
    distinct?: AIWorkoutScalarFieldEnum | AIWorkoutScalarFieldEnum[]
  }

  /**
   * AIWorkout create
   */
  export type AIWorkoutCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIWorkout
     */
    select?: AIWorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIWorkout
     */
    omit?: AIWorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIWorkoutInclude<ExtArgs> | null
    /**
     * The data needed to create a AIWorkout.
     */
    data: XOR<AIWorkoutCreateInput, AIWorkoutUncheckedCreateInput>
  }

  /**
   * AIWorkout createMany
   */
  export type AIWorkoutCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AIWorkouts.
     */
    data: AIWorkoutCreateManyInput | AIWorkoutCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AIWorkout createManyAndReturn
   */
  export type AIWorkoutCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIWorkout
     */
    select?: AIWorkoutSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AIWorkout
     */
    omit?: AIWorkoutOmit<ExtArgs> | null
    /**
     * The data used to create many AIWorkouts.
     */
    data: AIWorkoutCreateManyInput | AIWorkoutCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIWorkoutIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AIWorkout update
   */
  export type AIWorkoutUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIWorkout
     */
    select?: AIWorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIWorkout
     */
    omit?: AIWorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIWorkoutInclude<ExtArgs> | null
    /**
     * The data needed to update a AIWorkout.
     */
    data: XOR<AIWorkoutUpdateInput, AIWorkoutUncheckedUpdateInput>
    /**
     * Choose, which AIWorkout to update.
     */
    where: AIWorkoutWhereUniqueInput
  }

  /**
   * AIWorkout updateMany
   */
  export type AIWorkoutUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AIWorkouts.
     */
    data: XOR<AIWorkoutUpdateManyMutationInput, AIWorkoutUncheckedUpdateManyInput>
    /**
     * Filter which AIWorkouts to update
     */
    where?: AIWorkoutWhereInput
    /**
     * Limit how many AIWorkouts to update.
     */
    limit?: number
  }

  /**
   * AIWorkout updateManyAndReturn
   */
  export type AIWorkoutUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIWorkout
     */
    select?: AIWorkoutSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AIWorkout
     */
    omit?: AIWorkoutOmit<ExtArgs> | null
    /**
     * The data used to update AIWorkouts.
     */
    data: XOR<AIWorkoutUpdateManyMutationInput, AIWorkoutUncheckedUpdateManyInput>
    /**
     * Filter which AIWorkouts to update
     */
    where?: AIWorkoutWhereInput
    /**
     * Limit how many AIWorkouts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIWorkoutIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AIWorkout upsert
   */
  export type AIWorkoutUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIWorkout
     */
    select?: AIWorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIWorkout
     */
    omit?: AIWorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIWorkoutInclude<ExtArgs> | null
    /**
     * The filter to search for the AIWorkout to update in case it exists.
     */
    where: AIWorkoutWhereUniqueInput
    /**
     * In case the AIWorkout found by the `where` argument doesn't exist, create a new AIWorkout with this data.
     */
    create: XOR<AIWorkoutCreateInput, AIWorkoutUncheckedCreateInput>
    /**
     * In case the AIWorkout was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AIWorkoutUpdateInput, AIWorkoutUncheckedUpdateInput>
  }

  /**
   * AIWorkout delete
   */
  export type AIWorkoutDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIWorkout
     */
    select?: AIWorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIWorkout
     */
    omit?: AIWorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIWorkoutInclude<ExtArgs> | null
    /**
     * Filter which AIWorkout to delete.
     */
    where: AIWorkoutWhereUniqueInput
  }

  /**
   * AIWorkout deleteMany
   */
  export type AIWorkoutDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AIWorkouts to delete
     */
    where?: AIWorkoutWhereInput
    /**
     * Limit how many AIWorkouts to delete.
     */
    limit?: number
  }

  /**
   * AIWorkout.exercises
   */
  export type AIWorkout$exercisesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIWorkoutExercise
     */
    select?: AIWorkoutExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIWorkoutExercise
     */
    omit?: AIWorkoutExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIWorkoutExerciseInclude<ExtArgs> | null
    where?: AIWorkoutExerciseWhereInput
    orderBy?: AIWorkoutExerciseOrderByWithRelationInput | AIWorkoutExerciseOrderByWithRelationInput[]
    cursor?: AIWorkoutExerciseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AIWorkoutExerciseScalarFieldEnum | AIWorkoutExerciseScalarFieldEnum[]
  }

  /**
   * AIWorkout without action
   */
  export type AIWorkoutDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIWorkout
     */
    select?: AIWorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIWorkout
     */
    omit?: AIWorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIWorkoutInclude<ExtArgs> | null
  }


  /**
   * Model AIWorkoutExercise
   */

  export type AggregateAIWorkoutExercise = {
    _count: AIWorkoutExerciseCountAggregateOutputType | null
    _avg: AIWorkoutExerciseAvgAggregateOutputType | null
    _sum: AIWorkoutExerciseSumAggregateOutputType | null
    _min: AIWorkoutExerciseMinAggregateOutputType | null
    _max: AIWorkoutExerciseMaxAggregateOutputType | null
  }

  export type AIWorkoutExerciseAvgAggregateOutputType = {
    sets: number | null
    reps: number | null
    duration: number | null
    rest: number | null
    order: number | null
  }

  export type AIWorkoutExerciseSumAggregateOutputType = {
    sets: number | null
    reps: number | null
    duration: number | null
    rest: number | null
    order: number | null
  }

  export type AIWorkoutExerciseMinAggregateOutputType = {
    id: string | null
    name: string | null
    sets: number | null
    reps: number | null
    duration: number | null
    rest: number | null
    instruction: string | null
    order: number | null
    aiWorkoutId: string | null
    exerciseId: string | null
  }

  export type AIWorkoutExerciseMaxAggregateOutputType = {
    id: string | null
    name: string | null
    sets: number | null
    reps: number | null
    duration: number | null
    rest: number | null
    instruction: string | null
    order: number | null
    aiWorkoutId: string | null
    exerciseId: string | null
  }

  export type AIWorkoutExerciseCountAggregateOutputType = {
    id: number
    name: number
    sets: number
    reps: number
    duration: number
    rest: number
    instruction: number
    order: number
    aiWorkoutId: number
    exerciseId: number
    _all: number
  }


  export type AIWorkoutExerciseAvgAggregateInputType = {
    sets?: true
    reps?: true
    duration?: true
    rest?: true
    order?: true
  }

  export type AIWorkoutExerciseSumAggregateInputType = {
    sets?: true
    reps?: true
    duration?: true
    rest?: true
    order?: true
  }

  export type AIWorkoutExerciseMinAggregateInputType = {
    id?: true
    name?: true
    sets?: true
    reps?: true
    duration?: true
    rest?: true
    instruction?: true
    order?: true
    aiWorkoutId?: true
    exerciseId?: true
  }

  export type AIWorkoutExerciseMaxAggregateInputType = {
    id?: true
    name?: true
    sets?: true
    reps?: true
    duration?: true
    rest?: true
    instruction?: true
    order?: true
    aiWorkoutId?: true
    exerciseId?: true
  }

  export type AIWorkoutExerciseCountAggregateInputType = {
    id?: true
    name?: true
    sets?: true
    reps?: true
    duration?: true
    rest?: true
    instruction?: true
    order?: true
    aiWorkoutId?: true
    exerciseId?: true
    _all?: true
  }

  export type AIWorkoutExerciseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AIWorkoutExercise to aggregate.
     */
    where?: AIWorkoutExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AIWorkoutExercises to fetch.
     */
    orderBy?: AIWorkoutExerciseOrderByWithRelationInput | AIWorkoutExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AIWorkoutExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AIWorkoutExercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AIWorkoutExercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AIWorkoutExercises
    **/
    _count?: true | AIWorkoutExerciseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AIWorkoutExerciseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AIWorkoutExerciseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AIWorkoutExerciseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AIWorkoutExerciseMaxAggregateInputType
  }

  export type GetAIWorkoutExerciseAggregateType<T extends AIWorkoutExerciseAggregateArgs> = {
        [P in keyof T & keyof AggregateAIWorkoutExercise]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAIWorkoutExercise[P]>
      : GetScalarType<T[P], AggregateAIWorkoutExercise[P]>
  }




  export type AIWorkoutExerciseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AIWorkoutExerciseWhereInput
    orderBy?: AIWorkoutExerciseOrderByWithAggregationInput | AIWorkoutExerciseOrderByWithAggregationInput[]
    by: AIWorkoutExerciseScalarFieldEnum[] | AIWorkoutExerciseScalarFieldEnum
    having?: AIWorkoutExerciseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AIWorkoutExerciseCountAggregateInputType | true
    _avg?: AIWorkoutExerciseAvgAggregateInputType
    _sum?: AIWorkoutExerciseSumAggregateInputType
    _min?: AIWorkoutExerciseMinAggregateInputType
    _max?: AIWorkoutExerciseMaxAggregateInputType
  }

  export type AIWorkoutExerciseGroupByOutputType = {
    id: string
    name: string
    sets: number
    reps: number | null
    duration: number | null
    rest: number | null
    instruction: string | null
    order: number
    aiWorkoutId: string
    exerciseId: string | null
    _count: AIWorkoutExerciseCountAggregateOutputType | null
    _avg: AIWorkoutExerciseAvgAggregateOutputType | null
    _sum: AIWorkoutExerciseSumAggregateOutputType | null
    _min: AIWorkoutExerciseMinAggregateOutputType | null
    _max: AIWorkoutExerciseMaxAggregateOutputType | null
  }

  type GetAIWorkoutExerciseGroupByPayload<T extends AIWorkoutExerciseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AIWorkoutExerciseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AIWorkoutExerciseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AIWorkoutExerciseGroupByOutputType[P]>
            : GetScalarType<T[P], AIWorkoutExerciseGroupByOutputType[P]>
        }
      >
    >


  export type AIWorkoutExerciseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    sets?: boolean
    reps?: boolean
    duration?: boolean
    rest?: boolean
    instruction?: boolean
    order?: boolean
    aiWorkoutId?: boolean
    exerciseId?: boolean
    aiWorkout?: boolean | AIWorkoutDefaultArgs<ExtArgs>
    exercise?: boolean | AIWorkoutExercise$exerciseArgs<ExtArgs>
  }, ExtArgs["result"]["aIWorkoutExercise"]>

  export type AIWorkoutExerciseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    sets?: boolean
    reps?: boolean
    duration?: boolean
    rest?: boolean
    instruction?: boolean
    order?: boolean
    aiWorkoutId?: boolean
    exerciseId?: boolean
    aiWorkout?: boolean | AIWorkoutDefaultArgs<ExtArgs>
    exercise?: boolean | AIWorkoutExercise$exerciseArgs<ExtArgs>
  }, ExtArgs["result"]["aIWorkoutExercise"]>

  export type AIWorkoutExerciseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    sets?: boolean
    reps?: boolean
    duration?: boolean
    rest?: boolean
    instruction?: boolean
    order?: boolean
    aiWorkoutId?: boolean
    exerciseId?: boolean
    aiWorkout?: boolean | AIWorkoutDefaultArgs<ExtArgs>
    exercise?: boolean | AIWorkoutExercise$exerciseArgs<ExtArgs>
  }, ExtArgs["result"]["aIWorkoutExercise"]>

  export type AIWorkoutExerciseSelectScalar = {
    id?: boolean
    name?: boolean
    sets?: boolean
    reps?: boolean
    duration?: boolean
    rest?: boolean
    instruction?: boolean
    order?: boolean
    aiWorkoutId?: boolean
    exerciseId?: boolean
  }

  export type AIWorkoutExerciseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "sets" | "reps" | "duration" | "rest" | "instruction" | "order" | "aiWorkoutId" | "exerciseId", ExtArgs["result"]["aIWorkoutExercise"]>
  export type AIWorkoutExerciseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    aiWorkout?: boolean | AIWorkoutDefaultArgs<ExtArgs>
    exercise?: boolean | AIWorkoutExercise$exerciseArgs<ExtArgs>
  }
  export type AIWorkoutExerciseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    aiWorkout?: boolean | AIWorkoutDefaultArgs<ExtArgs>
    exercise?: boolean | AIWorkoutExercise$exerciseArgs<ExtArgs>
  }
  export type AIWorkoutExerciseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    aiWorkout?: boolean | AIWorkoutDefaultArgs<ExtArgs>
    exercise?: boolean | AIWorkoutExercise$exerciseArgs<ExtArgs>
  }

  export type $AIWorkoutExercisePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AIWorkoutExercise"
    objects: {
      aiWorkout: Prisma.$AIWorkoutPayload<ExtArgs>
      exercise: Prisma.$ExercisePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      sets: number
      reps: number | null
      duration: number | null
      rest: number | null
      instruction: string | null
      order: number
      aiWorkoutId: string
      exerciseId: string | null
    }, ExtArgs["result"]["aIWorkoutExercise"]>
    composites: {}
  }

  type AIWorkoutExerciseGetPayload<S extends boolean | null | undefined | AIWorkoutExerciseDefaultArgs> = $Result.GetResult<Prisma.$AIWorkoutExercisePayload, S>

  type AIWorkoutExerciseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AIWorkoutExerciseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AIWorkoutExerciseCountAggregateInputType | true
    }

  export interface AIWorkoutExerciseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AIWorkoutExercise'], meta: { name: 'AIWorkoutExercise' } }
    /**
     * Find zero or one AIWorkoutExercise that matches the filter.
     * @param {AIWorkoutExerciseFindUniqueArgs} args - Arguments to find a AIWorkoutExercise
     * @example
     * // Get one AIWorkoutExercise
     * const aIWorkoutExercise = await prisma.aIWorkoutExercise.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AIWorkoutExerciseFindUniqueArgs>(args: SelectSubset<T, AIWorkoutExerciseFindUniqueArgs<ExtArgs>>): Prisma__AIWorkoutExerciseClient<$Result.GetResult<Prisma.$AIWorkoutExercisePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AIWorkoutExercise that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AIWorkoutExerciseFindUniqueOrThrowArgs} args - Arguments to find a AIWorkoutExercise
     * @example
     * // Get one AIWorkoutExercise
     * const aIWorkoutExercise = await prisma.aIWorkoutExercise.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AIWorkoutExerciseFindUniqueOrThrowArgs>(args: SelectSubset<T, AIWorkoutExerciseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AIWorkoutExerciseClient<$Result.GetResult<Prisma.$AIWorkoutExercisePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AIWorkoutExercise that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIWorkoutExerciseFindFirstArgs} args - Arguments to find a AIWorkoutExercise
     * @example
     * // Get one AIWorkoutExercise
     * const aIWorkoutExercise = await prisma.aIWorkoutExercise.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AIWorkoutExerciseFindFirstArgs>(args?: SelectSubset<T, AIWorkoutExerciseFindFirstArgs<ExtArgs>>): Prisma__AIWorkoutExerciseClient<$Result.GetResult<Prisma.$AIWorkoutExercisePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AIWorkoutExercise that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIWorkoutExerciseFindFirstOrThrowArgs} args - Arguments to find a AIWorkoutExercise
     * @example
     * // Get one AIWorkoutExercise
     * const aIWorkoutExercise = await prisma.aIWorkoutExercise.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AIWorkoutExerciseFindFirstOrThrowArgs>(args?: SelectSubset<T, AIWorkoutExerciseFindFirstOrThrowArgs<ExtArgs>>): Prisma__AIWorkoutExerciseClient<$Result.GetResult<Prisma.$AIWorkoutExercisePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AIWorkoutExercises that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIWorkoutExerciseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AIWorkoutExercises
     * const aIWorkoutExercises = await prisma.aIWorkoutExercise.findMany()
     * 
     * // Get first 10 AIWorkoutExercises
     * const aIWorkoutExercises = await prisma.aIWorkoutExercise.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const aIWorkoutExerciseWithIdOnly = await prisma.aIWorkoutExercise.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AIWorkoutExerciseFindManyArgs>(args?: SelectSubset<T, AIWorkoutExerciseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AIWorkoutExercisePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AIWorkoutExercise.
     * @param {AIWorkoutExerciseCreateArgs} args - Arguments to create a AIWorkoutExercise.
     * @example
     * // Create one AIWorkoutExercise
     * const AIWorkoutExercise = await prisma.aIWorkoutExercise.create({
     *   data: {
     *     // ... data to create a AIWorkoutExercise
     *   }
     * })
     * 
     */
    create<T extends AIWorkoutExerciseCreateArgs>(args: SelectSubset<T, AIWorkoutExerciseCreateArgs<ExtArgs>>): Prisma__AIWorkoutExerciseClient<$Result.GetResult<Prisma.$AIWorkoutExercisePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AIWorkoutExercises.
     * @param {AIWorkoutExerciseCreateManyArgs} args - Arguments to create many AIWorkoutExercises.
     * @example
     * // Create many AIWorkoutExercises
     * const aIWorkoutExercise = await prisma.aIWorkoutExercise.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AIWorkoutExerciseCreateManyArgs>(args?: SelectSubset<T, AIWorkoutExerciseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AIWorkoutExercises and returns the data saved in the database.
     * @param {AIWorkoutExerciseCreateManyAndReturnArgs} args - Arguments to create many AIWorkoutExercises.
     * @example
     * // Create many AIWorkoutExercises
     * const aIWorkoutExercise = await prisma.aIWorkoutExercise.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AIWorkoutExercises and only return the `id`
     * const aIWorkoutExerciseWithIdOnly = await prisma.aIWorkoutExercise.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AIWorkoutExerciseCreateManyAndReturnArgs>(args?: SelectSubset<T, AIWorkoutExerciseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AIWorkoutExercisePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AIWorkoutExercise.
     * @param {AIWorkoutExerciseDeleteArgs} args - Arguments to delete one AIWorkoutExercise.
     * @example
     * // Delete one AIWorkoutExercise
     * const AIWorkoutExercise = await prisma.aIWorkoutExercise.delete({
     *   where: {
     *     // ... filter to delete one AIWorkoutExercise
     *   }
     * })
     * 
     */
    delete<T extends AIWorkoutExerciseDeleteArgs>(args: SelectSubset<T, AIWorkoutExerciseDeleteArgs<ExtArgs>>): Prisma__AIWorkoutExerciseClient<$Result.GetResult<Prisma.$AIWorkoutExercisePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AIWorkoutExercise.
     * @param {AIWorkoutExerciseUpdateArgs} args - Arguments to update one AIWorkoutExercise.
     * @example
     * // Update one AIWorkoutExercise
     * const aIWorkoutExercise = await prisma.aIWorkoutExercise.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AIWorkoutExerciseUpdateArgs>(args: SelectSubset<T, AIWorkoutExerciseUpdateArgs<ExtArgs>>): Prisma__AIWorkoutExerciseClient<$Result.GetResult<Prisma.$AIWorkoutExercisePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AIWorkoutExercises.
     * @param {AIWorkoutExerciseDeleteManyArgs} args - Arguments to filter AIWorkoutExercises to delete.
     * @example
     * // Delete a few AIWorkoutExercises
     * const { count } = await prisma.aIWorkoutExercise.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AIWorkoutExerciseDeleteManyArgs>(args?: SelectSubset<T, AIWorkoutExerciseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AIWorkoutExercises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIWorkoutExerciseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AIWorkoutExercises
     * const aIWorkoutExercise = await prisma.aIWorkoutExercise.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AIWorkoutExerciseUpdateManyArgs>(args: SelectSubset<T, AIWorkoutExerciseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AIWorkoutExercises and returns the data updated in the database.
     * @param {AIWorkoutExerciseUpdateManyAndReturnArgs} args - Arguments to update many AIWorkoutExercises.
     * @example
     * // Update many AIWorkoutExercises
     * const aIWorkoutExercise = await prisma.aIWorkoutExercise.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AIWorkoutExercises and only return the `id`
     * const aIWorkoutExerciseWithIdOnly = await prisma.aIWorkoutExercise.updateManyAndReturn({
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
    updateManyAndReturn<T extends AIWorkoutExerciseUpdateManyAndReturnArgs>(args: SelectSubset<T, AIWorkoutExerciseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AIWorkoutExercisePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AIWorkoutExercise.
     * @param {AIWorkoutExerciseUpsertArgs} args - Arguments to update or create a AIWorkoutExercise.
     * @example
     * // Update or create a AIWorkoutExercise
     * const aIWorkoutExercise = await prisma.aIWorkoutExercise.upsert({
     *   create: {
     *     // ... data to create a AIWorkoutExercise
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AIWorkoutExercise we want to update
     *   }
     * })
     */
    upsert<T extends AIWorkoutExerciseUpsertArgs>(args: SelectSubset<T, AIWorkoutExerciseUpsertArgs<ExtArgs>>): Prisma__AIWorkoutExerciseClient<$Result.GetResult<Prisma.$AIWorkoutExercisePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AIWorkoutExercises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIWorkoutExerciseCountArgs} args - Arguments to filter AIWorkoutExercises to count.
     * @example
     * // Count the number of AIWorkoutExercises
     * const count = await prisma.aIWorkoutExercise.count({
     *   where: {
     *     // ... the filter for the AIWorkoutExercises we want to count
     *   }
     * })
    **/
    count<T extends AIWorkoutExerciseCountArgs>(
      args?: Subset<T, AIWorkoutExerciseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AIWorkoutExerciseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AIWorkoutExercise.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIWorkoutExerciseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AIWorkoutExerciseAggregateArgs>(args: Subset<T, AIWorkoutExerciseAggregateArgs>): Prisma.PrismaPromise<GetAIWorkoutExerciseAggregateType<T>>

    /**
     * Group by AIWorkoutExercise.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIWorkoutExerciseGroupByArgs} args - Group by arguments.
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
      T extends AIWorkoutExerciseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AIWorkoutExerciseGroupByArgs['orderBy'] }
        : { orderBy?: AIWorkoutExerciseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AIWorkoutExerciseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAIWorkoutExerciseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AIWorkoutExercise model
   */
  readonly fields: AIWorkoutExerciseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AIWorkoutExercise.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AIWorkoutExerciseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    aiWorkout<T extends AIWorkoutDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AIWorkoutDefaultArgs<ExtArgs>>): Prisma__AIWorkoutClient<$Result.GetResult<Prisma.$AIWorkoutPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    exercise<T extends AIWorkoutExercise$exerciseArgs<ExtArgs> = {}>(args?: Subset<T, AIWorkoutExercise$exerciseArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the AIWorkoutExercise model
   */
  interface AIWorkoutExerciseFieldRefs {
    readonly id: FieldRef<"AIWorkoutExercise", 'String'>
    readonly name: FieldRef<"AIWorkoutExercise", 'String'>
    readonly sets: FieldRef<"AIWorkoutExercise", 'Int'>
    readonly reps: FieldRef<"AIWorkoutExercise", 'Int'>
    readonly duration: FieldRef<"AIWorkoutExercise", 'Int'>
    readonly rest: FieldRef<"AIWorkoutExercise", 'Int'>
    readonly instruction: FieldRef<"AIWorkoutExercise", 'String'>
    readonly order: FieldRef<"AIWorkoutExercise", 'Int'>
    readonly aiWorkoutId: FieldRef<"AIWorkoutExercise", 'String'>
    readonly exerciseId: FieldRef<"AIWorkoutExercise", 'String'>
  }
    

  // Custom InputTypes
  /**
   * AIWorkoutExercise findUnique
   */
  export type AIWorkoutExerciseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIWorkoutExercise
     */
    select?: AIWorkoutExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIWorkoutExercise
     */
    omit?: AIWorkoutExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIWorkoutExerciseInclude<ExtArgs> | null
    /**
     * Filter, which AIWorkoutExercise to fetch.
     */
    where: AIWorkoutExerciseWhereUniqueInput
  }

  /**
   * AIWorkoutExercise findUniqueOrThrow
   */
  export type AIWorkoutExerciseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIWorkoutExercise
     */
    select?: AIWorkoutExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIWorkoutExercise
     */
    omit?: AIWorkoutExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIWorkoutExerciseInclude<ExtArgs> | null
    /**
     * Filter, which AIWorkoutExercise to fetch.
     */
    where: AIWorkoutExerciseWhereUniqueInput
  }

  /**
   * AIWorkoutExercise findFirst
   */
  export type AIWorkoutExerciseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIWorkoutExercise
     */
    select?: AIWorkoutExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIWorkoutExercise
     */
    omit?: AIWorkoutExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIWorkoutExerciseInclude<ExtArgs> | null
    /**
     * Filter, which AIWorkoutExercise to fetch.
     */
    where?: AIWorkoutExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AIWorkoutExercises to fetch.
     */
    orderBy?: AIWorkoutExerciseOrderByWithRelationInput | AIWorkoutExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AIWorkoutExercises.
     */
    cursor?: AIWorkoutExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AIWorkoutExercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AIWorkoutExercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AIWorkoutExercises.
     */
    distinct?: AIWorkoutExerciseScalarFieldEnum | AIWorkoutExerciseScalarFieldEnum[]
  }

  /**
   * AIWorkoutExercise findFirstOrThrow
   */
  export type AIWorkoutExerciseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIWorkoutExercise
     */
    select?: AIWorkoutExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIWorkoutExercise
     */
    omit?: AIWorkoutExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIWorkoutExerciseInclude<ExtArgs> | null
    /**
     * Filter, which AIWorkoutExercise to fetch.
     */
    where?: AIWorkoutExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AIWorkoutExercises to fetch.
     */
    orderBy?: AIWorkoutExerciseOrderByWithRelationInput | AIWorkoutExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AIWorkoutExercises.
     */
    cursor?: AIWorkoutExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AIWorkoutExercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AIWorkoutExercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AIWorkoutExercises.
     */
    distinct?: AIWorkoutExerciseScalarFieldEnum | AIWorkoutExerciseScalarFieldEnum[]
  }

  /**
   * AIWorkoutExercise findMany
   */
  export type AIWorkoutExerciseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIWorkoutExercise
     */
    select?: AIWorkoutExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIWorkoutExercise
     */
    omit?: AIWorkoutExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIWorkoutExerciseInclude<ExtArgs> | null
    /**
     * Filter, which AIWorkoutExercises to fetch.
     */
    where?: AIWorkoutExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AIWorkoutExercises to fetch.
     */
    orderBy?: AIWorkoutExerciseOrderByWithRelationInput | AIWorkoutExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AIWorkoutExercises.
     */
    cursor?: AIWorkoutExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AIWorkoutExercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AIWorkoutExercises.
     */
    skip?: number
    distinct?: AIWorkoutExerciseScalarFieldEnum | AIWorkoutExerciseScalarFieldEnum[]
  }

  /**
   * AIWorkoutExercise create
   */
  export type AIWorkoutExerciseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIWorkoutExercise
     */
    select?: AIWorkoutExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIWorkoutExercise
     */
    omit?: AIWorkoutExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIWorkoutExerciseInclude<ExtArgs> | null
    /**
     * The data needed to create a AIWorkoutExercise.
     */
    data: XOR<AIWorkoutExerciseCreateInput, AIWorkoutExerciseUncheckedCreateInput>
  }

  /**
   * AIWorkoutExercise createMany
   */
  export type AIWorkoutExerciseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AIWorkoutExercises.
     */
    data: AIWorkoutExerciseCreateManyInput | AIWorkoutExerciseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AIWorkoutExercise createManyAndReturn
   */
  export type AIWorkoutExerciseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIWorkoutExercise
     */
    select?: AIWorkoutExerciseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AIWorkoutExercise
     */
    omit?: AIWorkoutExerciseOmit<ExtArgs> | null
    /**
     * The data used to create many AIWorkoutExercises.
     */
    data: AIWorkoutExerciseCreateManyInput | AIWorkoutExerciseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIWorkoutExerciseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AIWorkoutExercise update
   */
  export type AIWorkoutExerciseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIWorkoutExercise
     */
    select?: AIWorkoutExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIWorkoutExercise
     */
    omit?: AIWorkoutExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIWorkoutExerciseInclude<ExtArgs> | null
    /**
     * The data needed to update a AIWorkoutExercise.
     */
    data: XOR<AIWorkoutExerciseUpdateInput, AIWorkoutExerciseUncheckedUpdateInput>
    /**
     * Choose, which AIWorkoutExercise to update.
     */
    where: AIWorkoutExerciseWhereUniqueInput
  }

  /**
   * AIWorkoutExercise updateMany
   */
  export type AIWorkoutExerciseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AIWorkoutExercises.
     */
    data: XOR<AIWorkoutExerciseUpdateManyMutationInput, AIWorkoutExerciseUncheckedUpdateManyInput>
    /**
     * Filter which AIWorkoutExercises to update
     */
    where?: AIWorkoutExerciseWhereInput
    /**
     * Limit how many AIWorkoutExercises to update.
     */
    limit?: number
  }

  /**
   * AIWorkoutExercise updateManyAndReturn
   */
  export type AIWorkoutExerciseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIWorkoutExercise
     */
    select?: AIWorkoutExerciseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AIWorkoutExercise
     */
    omit?: AIWorkoutExerciseOmit<ExtArgs> | null
    /**
     * The data used to update AIWorkoutExercises.
     */
    data: XOR<AIWorkoutExerciseUpdateManyMutationInput, AIWorkoutExerciseUncheckedUpdateManyInput>
    /**
     * Filter which AIWorkoutExercises to update
     */
    where?: AIWorkoutExerciseWhereInput
    /**
     * Limit how many AIWorkoutExercises to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIWorkoutExerciseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AIWorkoutExercise upsert
   */
  export type AIWorkoutExerciseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIWorkoutExercise
     */
    select?: AIWorkoutExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIWorkoutExercise
     */
    omit?: AIWorkoutExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIWorkoutExerciseInclude<ExtArgs> | null
    /**
     * The filter to search for the AIWorkoutExercise to update in case it exists.
     */
    where: AIWorkoutExerciseWhereUniqueInput
    /**
     * In case the AIWorkoutExercise found by the `where` argument doesn't exist, create a new AIWorkoutExercise with this data.
     */
    create: XOR<AIWorkoutExerciseCreateInput, AIWorkoutExerciseUncheckedCreateInput>
    /**
     * In case the AIWorkoutExercise was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AIWorkoutExerciseUpdateInput, AIWorkoutExerciseUncheckedUpdateInput>
  }

  /**
   * AIWorkoutExercise delete
   */
  export type AIWorkoutExerciseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIWorkoutExercise
     */
    select?: AIWorkoutExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIWorkoutExercise
     */
    omit?: AIWorkoutExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIWorkoutExerciseInclude<ExtArgs> | null
    /**
     * Filter which AIWorkoutExercise to delete.
     */
    where: AIWorkoutExerciseWhereUniqueInput
  }

  /**
   * AIWorkoutExercise deleteMany
   */
  export type AIWorkoutExerciseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AIWorkoutExercises to delete
     */
    where?: AIWorkoutExerciseWhereInput
    /**
     * Limit how many AIWorkoutExercises to delete.
     */
    limit?: number
  }

  /**
   * AIWorkoutExercise.exercise
   */
  export type AIWorkoutExercise$exerciseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    where?: ExerciseWhereInput
  }

  /**
   * AIWorkoutExercise without action
   */
  export type AIWorkoutExerciseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIWorkoutExercise
     */
    select?: AIWorkoutExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIWorkoutExercise
     */
    omit?: AIWorkoutExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIWorkoutExerciseInclude<ExtArgs> | null
  }


  /**
   * Model UserSettings
   */

  export type AggregateUserSettings = {
    _count: UserSettingsCountAggregateOutputType | null
    _min: UserSettingsMinAggregateOutputType | null
    _max: UserSettingsMaxAggregateOutputType | null
  }

  export type UserSettingsMinAggregateOutputType = {
    id: string | null
    theme: string | null
    units: string | null
    language: string | null
    privacyLevel: string | null
    workoutReminders: boolean | null
    progressUpdates: boolean | null
    achievementAlerts: boolean | null
    tipNotifications: boolean | null
    userId: string | null
  }

  export type UserSettingsMaxAggregateOutputType = {
    id: string | null
    theme: string | null
    units: string | null
    language: string | null
    privacyLevel: string | null
    workoutReminders: boolean | null
    progressUpdates: boolean | null
    achievementAlerts: boolean | null
    tipNotifications: boolean | null
    userId: string | null
  }

  export type UserSettingsCountAggregateOutputType = {
    id: number
    theme: number
    units: number
    language: number
    privacyLevel: number
    workoutReminders: number
    progressUpdates: number
    achievementAlerts: number
    tipNotifications: number
    userId: number
    _all: number
  }


  export type UserSettingsMinAggregateInputType = {
    id?: true
    theme?: true
    units?: true
    language?: true
    privacyLevel?: true
    workoutReminders?: true
    progressUpdates?: true
    achievementAlerts?: true
    tipNotifications?: true
    userId?: true
  }

  export type UserSettingsMaxAggregateInputType = {
    id?: true
    theme?: true
    units?: true
    language?: true
    privacyLevel?: true
    workoutReminders?: true
    progressUpdates?: true
    achievementAlerts?: true
    tipNotifications?: true
    userId?: true
  }

  export type UserSettingsCountAggregateInputType = {
    id?: true
    theme?: true
    units?: true
    language?: true
    privacyLevel?: true
    workoutReminders?: true
    progressUpdates?: true
    achievementAlerts?: true
    tipNotifications?: true
    userId?: true
    _all?: true
  }

  export type UserSettingsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserSettings to aggregate.
     */
    where?: UserSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSettings to fetch.
     */
    orderBy?: UserSettingsOrderByWithRelationInput | UserSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserSettings
    **/
    _count?: true | UserSettingsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserSettingsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserSettingsMaxAggregateInputType
  }

  export type GetUserSettingsAggregateType<T extends UserSettingsAggregateArgs> = {
        [P in keyof T & keyof AggregateUserSettings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserSettings[P]>
      : GetScalarType<T[P], AggregateUserSettings[P]>
  }




  export type UserSettingsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserSettingsWhereInput
    orderBy?: UserSettingsOrderByWithAggregationInput | UserSettingsOrderByWithAggregationInput[]
    by: UserSettingsScalarFieldEnum[] | UserSettingsScalarFieldEnum
    having?: UserSettingsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserSettingsCountAggregateInputType | true
    _min?: UserSettingsMinAggregateInputType
    _max?: UserSettingsMaxAggregateInputType
  }

  export type UserSettingsGroupByOutputType = {
    id: string
    theme: string
    units: string
    language: string
    privacyLevel: string
    workoutReminders: boolean
    progressUpdates: boolean
    achievementAlerts: boolean
    tipNotifications: boolean
    userId: string
    _count: UserSettingsCountAggregateOutputType | null
    _min: UserSettingsMinAggregateOutputType | null
    _max: UserSettingsMaxAggregateOutputType | null
  }

  type GetUserSettingsGroupByPayload<T extends UserSettingsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserSettingsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserSettingsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserSettingsGroupByOutputType[P]>
            : GetScalarType<T[P], UserSettingsGroupByOutputType[P]>
        }
      >
    >


  export type UserSettingsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    theme?: boolean
    units?: boolean
    language?: boolean
    privacyLevel?: boolean
    workoutReminders?: boolean
    progressUpdates?: boolean
    achievementAlerts?: boolean
    tipNotifications?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSettings"]>

  export type UserSettingsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    theme?: boolean
    units?: boolean
    language?: boolean
    privacyLevel?: boolean
    workoutReminders?: boolean
    progressUpdates?: boolean
    achievementAlerts?: boolean
    tipNotifications?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSettings"]>

  export type UserSettingsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    theme?: boolean
    units?: boolean
    language?: boolean
    privacyLevel?: boolean
    workoutReminders?: boolean
    progressUpdates?: boolean
    achievementAlerts?: boolean
    tipNotifications?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSettings"]>

  export type UserSettingsSelectScalar = {
    id?: boolean
    theme?: boolean
    units?: boolean
    language?: boolean
    privacyLevel?: boolean
    workoutReminders?: boolean
    progressUpdates?: boolean
    achievementAlerts?: boolean
    tipNotifications?: boolean
    userId?: boolean
  }

  export type UserSettingsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "theme" | "units" | "language" | "privacyLevel" | "workoutReminders" | "progressUpdates" | "achievementAlerts" | "tipNotifications" | "userId", ExtArgs["result"]["userSettings"]>
  export type UserSettingsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserSettingsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserSettingsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserSettingsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserSettings"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      theme: string
      units: string
      language: string
      privacyLevel: string
      workoutReminders: boolean
      progressUpdates: boolean
      achievementAlerts: boolean
      tipNotifications: boolean
      userId: string
    }, ExtArgs["result"]["userSettings"]>
    composites: {}
  }

  type UserSettingsGetPayload<S extends boolean | null | undefined | UserSettingsDefaultArgs> = $Result.GetResult<Prisma.$UserSettingsPayload, S>

  type UserSettingsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserSettingsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserSettingsCountAggregateInputType | true
    }

  export interface UserSettingsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserSettings'], meta: { name: 'UserSettings' } }
    /**
     * Find zero or one UserSettings that matches the filter.
     * @param {UserSettingsFindUniqueArgs} args - Arguments to find a UserSettings
     * @example
     * // Get one UserSettings
     * const userSettings = await prisma.userSettings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserSettingsFindUniqueArgs>(args: SelectSubset<T, UserSettingsFindUniqueArgs<ExtArgs>>): Prisma__UserSettingsClient<$Result.GetResult<Prisma.$UserSettingsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserSettings that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserSettingsFindUniqueOrThrowArgs} args - Arguments to find a UserSettings
     * @example
     * // Get one UserSettings
     * const userSettings = await prisma.userSettings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserSettingsFindUniqueOrThrowArgs>(args: SelectSubset<T, UserSettingsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserSettingsClient<$Result.GetResult<Prisma.$UserSettingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSettingsFindFirstArgs} args - Arguments to find a UserSettings
     * @example
     * // Get one UserSettings
     * const userSettings = await prisma.userSettings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserSettingsFindFirstArgs>(args?: SelectSubset<T, UserSettingsFindFirstArgs<ExtArgs>>): Prisma__UserSettingsClient<$Result.GetResult<Prisma.$UserSettingsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserSettings that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSettingsFindFirstOrThrowArgs} args - Arguments to find a UserSettings
     * @example
     * // Get one UserSettings
     * const userSettings = await prisma.userSettings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserSettingsFindFirstOrThrowArgs>(args?: SelectSubset<T, UserSettingsFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserSettingsClient<$Result.GetResult<Prisma.$UserSettingsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSettingsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserSettings
     * const userSettings = await prisma.userSettings.findMany()
     * 
     * // Get first 10 UserSettings
     * const userSettings = await prisma.userSettings.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userSettingsWithIdOnly = await prisma.userSettings.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserSettingsFindManyArgs>(args?: SelectSubset<T, UserSettingsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSettingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserSettings.
     * @param {UserSettingsCreateArgs} args - Arguments to create a UserSettings.
     * @example
     * // Create one UserSettings
     * const UserSettings = await prisma.userSettings.create({
     *   data: {
     *     // ... data to create a UserSettings
     *   }
     * })
     * 
     */
    create<T extends UserSettingsCreateArgs>(args: SelectSubset<T, UserSettingsCreateArgs<ExtArgs>>): Prisma__UserSettingsClient<$Result.GetResult<Prisma.$UserSettingsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserSettings.
     * @param {UserSettingsCreateManyArgs} args - Arguments to create many UserSettings.
     * @example
     * // Create many UserSettings
     * const userSettings = await prisma.userSettings.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserSettingsCreateManyArgs>(args?: SelectSubset<T, UserSettingsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserSettings and returns the data saved in the database.
     * @param {UserSettingsCreateManyAndReturnArgs} args - Arguments to create many UserSettings.
     * @example
     * // Create many UserSettings
     * const userSettings = await prisma.userSettings.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserSettings and only return the `id`
     * const userSettingsWithIdOnly = await prisma.userSettings.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserSettingsCreateManyAndReturnArgs>(args?: SelectSubset<T, UserSettingsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSettingsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserSettings.
     * @param {UserSettingsDeleteArgs} args - Arguments to delete one UserSettings.
     * @example
     * // Delete one UserSettings
     * const UserSettings = await prisma.userSettings.delete({
     *   where: {
     *     // ... filter to delete one UserSettings
     *   }
     * })
     * 
     */
    delete<T extends UserSettingsDeleteArgs>(args: SelectSubset<T, UserSettingsDeleteArgs<ExtArgs>>): Prisma__UserSettingsClient<$Result.GetResult<Prisma.$UserSettingsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserSettings.
     * @param {UserSettingsUpdateArgs} args - Arguments to update one UserSettings.
     * @example
     * // Update one UserSettings
     * const userSettings = await prisma.userSettings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserSettingsUpdateArgs>(args: SelectSubset<T, UserSettingsUpdateArgs<ExtArgs>>): Prisma__UserSettingsClient<$Result.GetResult<Prisma.$UserSettingsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserSettings.
     * @param {UserSettingsDeleteManyArgs} args - Arguments to filter UserSettings to delete.
     * @example
     * // Delete a few UserSettings
     * const { count } = await prisma.userSettings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserSettingsDeleteManyArgs>(args?: SelectSubset<T, UserSettingsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSettingsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserSettings
     * const userSettings = await prisma.userSettings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserSettingsUpdateManyArgs>(args: SelectSubset<T, UserSettingsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserSettings and returns the data updated in the database.
     * @param {UserSettingsUpdateManyAndReturnArgs} args - Arguments to update many UserSettings.
     * @example
     * // Update many UserSettings
     * const userSettings = await prisma.userSettings.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserSettings and only return the `id`
     * const userSettingsWithIdOnly = await prisma.userSettings.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserSettingsUpdateManyAndReturnArgs>(args: SelectSubset<T, UserSettingsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSettingsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserSettings.
     * @param {UserSettingsUpsertArgs} args - Arguments to update or create a UserSettings.
     * @example
     * // Update or create a UserSettings
     * const userSettings = await prisma.userSettings.upsert({
     *   create: {
     *     // ... data to create a UserSettings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserSettings we want to update
     *   }
     * })
     */
    upsert<T extends UserSettingsUpsertArgs>(args: SelectSubset<T, UserSettingsUpsertArgs<ExtArgs>>): Prisma__UserSettingsClient<$Result.GetResult<Prisma.$UserSettingsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSettingsCountArgs} args - Arguments to filter UserSettings to count.
     * @example
     * // Count the number of UserSettings
     * const count = await prisma.userSettings.count({
     *   where: {
     *     // ... the filter for the UserSettings we want to count
     *   }
     * })
    **/
    count<T extends UserSettingsCountArgs>(
      args?: Subset<T, UserSettingsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserSettingsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSettingsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserSettingsAggregateArgs>(args: Subset<T, UserSettingsAggregateArgs>): Prisma.PrismaPromise<GetUserSettingsAggregateType<T>>

    /**
     * Group by UserSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSettingsGroupByArgs} args - Group by arguments.
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
      T extends UserSettingsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserSettingsGroupByArgs['orderBy'] }
        : { orderBy?: UserSettingsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserSettingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserSettingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserSettings model
   */
  readonly fields: UserSettingsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserSettings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserSettingsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserSettings model
   */
  interface UserSettingsFieldRefs {
    readonly id: FieldRef<"UserSettings", 'String'>
    readonly theme: FieldRef<"UserSettings", 'String'>
    readonly units: FieldRef<"UserSettings", 'String'>
    readonly language: FieldRef<"UserSettings", 'String'>
    readonly privacyLevel: FieldRef<"UserSettings", 'String'>
    readonly workoutReminders: FieldRef<"UserSettings", 'Boolean'>
    readonly progressUpdates: FieldRef<"UserSettings", 'Boolean'>
    readonly achievementAlerts: FieldRef<"UserSettings", 'Boolean'>
    readonly tipNotifications: FieldRef<"UserSettings", 'Boolean'>
    readonly userId: FieldRef<"UserSettings", 'String'>
  }
    

  // Custom InputTypes
  /**
   * UserSettings findUnique
   */
  export type UserSettingsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSettings
     */
    select?: UserSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSettings
     */
    omit?: UserSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSettingsInclude<ExtArgs> | null
    /**
     * Filter, which UserSettings to fetch.
     */
    where: UserSettingsWhereUniqueInput
  }

  /**
   * UserSettings findUniqueOrThrow
   */
  export type UserSettingsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSettings
     */
    select?: UserSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSettings
     */
    omit?: UserSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSettingsInclude<ExtArgs> | null
    /**
     * Filter, which UserSettings to fetch.
     */
    where: UserSettingsWhereUniqueInput
  }

  /**
   * UserSettings findFirst
   */
  export type UserSettingsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSettings
     */
    select?: UserSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSettings
     */
    omit?: UserSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSettingsInclude<ExtArgs> | null
    /**
     * Filter, which UserSettings to fetch.
     */
    where?: UserSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSettings to fetch.
     */
    orderBy?: UserSettingsOrderByWithRelationInput | UserSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserSettings.
     */
    cursor?: UserSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserSettings.
     */
    distinct?: UserSettingsScalarFieldEnum | UserSettingsScalarFieldEnum[]
  }

  /**
   * UserSettings findFirstOrThrow
   */
  export type UserSettingsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSettings
     */
    select?: UserSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSettings
     */
    omit?: UserSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSettingsInclude<ExtArgs> | null
    /**
     * Filter, which UserSettings to fetch.
     */
    where?: UserSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSettings to fetch.
     */
    orderBy?: UserSettingsOrderByWithRelationInput | UserSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserSettings.
     */
    cursor?: UserSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserSettings.
     */
    distinct?: UserSettingsScalarFieldEnum | UserSettingsScalarFieldEnum[]
  }

  /**
   * UserSettings findMany
   */
  export type UserSettingsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSettings
     */
    select?: UserSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSettings
     */
    omit?: UserSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSettingsInclude<ExtArgs> | null
    /**
     * Filter, which UserSettings to fetch.
     */
    where?: UserSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSettings to fetch.
     */
    orderBy?: UserSettingsOrderByWithRelationInput | UserSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserSettings.
     */
    cursor?: UserSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSettings.
     */
    skip?: number
    distinct?: UserSettingsScalarFieldEnum | UserSettingsScalarFieldEnum[]
  }

  /**
   * UserSettings create
   */
  export type UserSettingsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSettings
     */
    select?: UserSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSettings
     */
    omit?: UserSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSettingsInclude<ExtArgs> | null
    /**
     * The data needed to create a UserSettings.
     */
    data: XOR<UserSettingsCreateInput, UserSettingsUncheckedCreateInput>
  }

  /**
   * UserSettings createMany
   */
  export type UserSettingsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserSettings.
     */
    data: UserSettingsCreateManyInput | UserSettingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserSettings createManyAndReturn
   */
  export type UserSettingsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSettings
     */
    select?: UserSettingsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserSettings
     */
    omit?: UserSettingsOmit<ExtArgs> | null
    /**
     * The data used to create many UserSettings.
     */
    data: UserSettingsCreateManyInput | UserSettingsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSettingsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserSettings update
   */
  export type UserSettingsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSettings
     */
    select?: UserSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSettings
     */
    omit?: UserSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSettingsInclude<ExtArgs> | null
    /**
     * The data needed to update a UserSettings.
     */
    data: XOR<UserSettingsUpdateInput, UserSettingsUncheckedUpdateInput>
    /**
     * Choose, which UserSettings to update.
     */
    where: UserSettingsWhereUniqueInput
  }

  /**
   * UserSettings updateMany
   */
  export type UserSettingsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserSettings.
     */
    data: XOR<UserSettingsUpdateManyMutationInput, UserSettingsUncheckedUpdateManyInput>
    /**
     * Filter which UserSettings to update
     */
    where?: UserSettingsWhereInput
    /**
     * Limit how many UserSettings to update.
     */
    limit?: number
  }

  /**
   * UserSettings updateManyAndReturn
   */
  export type UserSettingsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSettings
     */
    select?: UserSettingsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserSettings
     */
    omit?: UserSettingsOmit<ExtArgs> | null
    /**
     * The data used to update UserSettings.
     */
    data: XOR<UserSettingsUpdateManyMutationInput, UserSettingsUncheckedUpdateManyInput>
    /**
     * Filter which UserSettings to update
     */
    where?: UserSettingsWhereInput
    /**
     * Limit how many UserSettings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSettingsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserSettings upsert
   */
  export type UserSettingsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSettings
     */
    select?: UserSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSettings
     */
    omit?: UserSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSettingsInclude<ExtArgs> | null
    /**
     * The filter to search for the UserSettings to update in case it exists.
     */
    where: UserSettingsWhereUniqueInput
    /**
     * In case the UserSettings found by the `where` argument doesn't exist, create a new UserSettings with this data.
     */
    create: XOR<UserSettingsCreateInput, UserSettingsUncheckedCreateInput>
    /**
     * In case the UserSettings was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserSettingsUpdateInput, UserSettingsUncheckedUpdateInput>
  }

  /**
   * UserSettings delete
   */
  export type UserSettingsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSettings
     */
    select?: UserSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSettings
     */
    omit?: UserSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSettingsInclude<ExtArgs> | null
    /**
     * Filter which UserSettings to delete.
     */
    where: UserSettingsWhereUniqueInput
  }

  /**
   * UserSettings deleteMany
   */
  export type UserSettingsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserSettings to delete
     */
    where?: UserSettingsWhereInput
    /**
     * Limit how many UserSettings to delete.
     */
    limit?: number
  }

  /**
   * UserSettings without action
   */
  export type UserSettingsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSettings
     */
    select?: UserSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSettings
     */
    omit?: UserSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSettingsInclude<ExtArgs> | null
  }


  /**
   * Model ProgressStat
   */

  export type AggregateProgressStat = {
    _count: ProgressStatCountAggregateOutputType | null
    _avg: ProgressStatAvgAggregateOutputType | null
    _sum: ProgressStatSumAggregateOutputType | null
    _min: ProgressStatMinAggregateOutputType | null
    _max: ProgressStatMaxAggregateOutputType | null
  }

  export type ProgressStatAvgAggregateOutputType = {
    value: number | null
  }

  export type ProgressStatSumAggregateOutputType = {
    value: number | null
  }

  export type ProgressStatMinAggregateOutputType = {
    id: string | null
    date: Date | null
    statType: $Enums.StatType | null
    value: number | null
    userId: string | null
  }

  export type ProgressStatMaxAggregateOutputType = {
    id: string | null
    date: Date | null
    statType: $Enums.StatType | null
    value: number | null
    userId: string | null
  }

  export type ProgressStatCountAggregateOutputType = {
    id: number
    date: number
    statType: number
    value: number
    userId: number
    _all: number
  }


  export type ProgressStatAvgAggregateInputType = {
    value?: true
  }

  export type ProgressStatSumAggregateInputType = {
    value?: true
  }

  export type ProgressStatMinAggregateInputType = {
    id?: true
    date?: true
    statType?: true
    value?: true
    userId?: true
  }

  export type ProgressStatMaxAggregateInputType = {
    id?: true
    date?: true
    statType?: true
    value?: true
    userId?: true
  }

  export type ProgressStatCountAggregateInputType = {
    id?: true
    date?: true
    statType?: true
    value?: true
    userId?: true
    _all?: true
  }

  export type ProgressStatAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProgressStat to aggregate.
     */
    where?: ProgressStatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProgressStats to fetch.
     */
    orderBy?: ProgressStatOrderByWithRelationInput | ProgressStatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProgressStatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProgressStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProgressStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProgressStats
    **/
    _count?: true | ProgressStatCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProgressStatAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProgressStatSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProgressStatMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProgressStatMaxAggregateInputType
  }

  export type GetProgressStatAggregateType<T extends ProgressStatAggregateArgs> = {
        [P in keyof T & keyof AggregateProgressStat]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProgressStat[P]>
      : GetScalarType<T[P], AggregateProgressStat[P]>
  }




  export type ProgressStatGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProgressStatWhereInput
    orderBy?: ProgressStatOrderByWithAggregationInput | ProgressStatOrderByWithAggregationInput[]
    by: ProgressStatScalarFieldEnum[] | ProgressStatScalarFieldEnum
    having?: ProgressStatScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProgressStatCountAggregateInputType | true
    _avg?: ProgressStatAvgAggregateInputType
    _sum?: ProgressStatSumAggregateInputType
    _min?: ProgressStatMinAggregateInputType
    _max?: ProgressStatMaxAggregateInputType
  }

  export type ProgressStatGroupByOutputType = {
    id: string
    date: Date
    statType: $Enums.StatType
    value: number
    userId: string
    _count: ProgressStatCountAggregateOutputType | null
    _avg: ProgressStatAvgAggregateOutputType | null
    _sum: ProgressStatSumAggregateOutputType | null
    _min: ProgressStatMinAggregateOutputType | null
    _max: ProgressStatMaxAggregateOutputType | null
  }

  type GetProgressStatGroupByPayload<T extends ProgressStatGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProgressStatGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProgressStatGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProgressStatGroupByOutputType[P]>
            : GetScalarType<T[P], ProgressStatGroupByOutputType[P]>
        }
      >
    >


  export type ProgressStatSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    statType?: boolean
    value?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["progressStat"]>

  export type ProgressStatSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    statType?: boolean
    value?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["progressStat"]>

  export type ProgressStatSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    statType?: boolean
    value?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["progressStat"]>

  export type ProgressStatSelectScalar = {
    id?: boolean
    date?: boolean
    statType?: boolean
    value?: boolean
    userId?: boolean
  }

  export type ProgressStatOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "date" | "statType" | "value" | "userId", ExtArgs["result"]["progressStat"]>
  export type ProgressStatInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProgressStatIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProgressStatIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ProgressStatPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProgressStat"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      date: Date
      statType: $Enums.StatType
      value: number
      userId: string
    }, ExtArgs["result"]["progressStat"]>
    composites: {}
  }

  type ProgressStatGetPayload<S extends boolean | null | undefined | ProgressStatDefaultArgs> = $Result.GetResult<Prisma.$ProgressStatPayload, S>

  type ProgressStatCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProgressStatFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProgressStatCountAggregateInputType | true
    }

  export interface ProgressStatDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProgressStat'], meta: { name: 'ProgressStat' } }
    /**
     * Find zero or one ProgressStat that matches the filter.
     * @param {ProgressStatFindUniqueArgs} args - Arguments to find a ProgressStat
     * @example
     * // Get one ProgressStat
     * const progressStat = await prisma.progressStat.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProgressStatFindUniqueArgs>(args: SelectSubset<T, ProgressStatFindUniqueArgs<ExtArgs>>): Prisma__ProgressStatClient<$Result.GetResult<Prisma.$ProgressStatPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProgressStat that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProgressStatFindUniqueOrThrowArgs} args - Arguments to find a ProgressStat
     * @example
     * // Get one ProgressStat
     * const progressStat = await prisma.progressStat.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProgressStatFindUniqueOrThrowArgs>(args: SelectSubset<T, ProgressStatFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProgressStatClient<$Result.GetResult<Prisma.$ProgressStatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProgressStat that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressStatFindFirstArgs} args - Arguments to find a ProgressStat
     * @example
     * // Get one ProgressStat
     * const progressStat = await prisma.progressStat.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProgressStatFindFirstArgs>(args?: SelectSubset<T, ProgressStatFindFirstArgs<ExtArgs>>): Prisma__ProgressStatClient<$Result.GetResult<Prisma.$ProgressStatPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProgressStat that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressStatFindFirstOrThrowArgs} args - Arguments to find a ProgressStat
     * @example
     * // Get one ProgressStat
     * const progressStat = await prisma.progressStat.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProgressStatFindFirstOrThrowArgs>(args?: SelectSubset<T, ProgressStatFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProgressStatClient<$Result.GetResult<Prisma.$ProgressStatPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProgressStats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressStatFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProgressStats
     * const progressStats = await prisma.progressStat.findMany()
     * 
     * // Get first 10 ProgressStats
     * const progressStats = await prisma.progressStat.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const progressStatWithIdOnly = await prisma.progressStat.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProgressStatFindManyArgs>(args?: SelectSubset<T, ProgressStatFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgressStatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProgressStat.
     * @param {ProgressStatCreateArgs} args - Arguments to create a ProgressStat.
     * @example
     * // Create one ProgressStat
     * const ProgressStat = await prisma.progressStat.create({
     *   data: {
     *     // ... data to create a ProgressStat
     *   }
     * })
     * 
     */
    create<T extends ProgressStatCreateArgs>(args: SelectSubset<T, ProgressStatCreateArgs<ExtArgs>>): Prisma__ProgressStatClient<$Result.GetResult<Prisma.$ProgressStatPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProgressStats.
     * @param {ProgressStatCreateManyArgs} args - Arguments to create many ProgressStats.
     * @example
     * // Create many ProgressStats
     * const progressStat = await prisma.progressStat.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProgressStatCreateManyArgs>(args?: SelectSubset<T, ProgressStatCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProgressStats and returns the data saved in the database.
     * @param {ProgressStatCreateManyAndReturnArgs} args - Arguments to create many ProgressStats.
     * @example
     * // Create many ProgressStats
     * const progressStat = await prisma.progressStat.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProgressStats and only return the `id`
     * const progressStatWithIdOnly = await prisma.progressStat.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProgressStatCreateManyAndReturnArgs>(args?: SelectSubset<T, ProgressStatCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgressStatPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProgressStat.
     * @param {ProgressStatDeleteArgs} args - Arguments to delete one ProgressStat.
     * @example
     * // Delete one ProgressStat
     * const ProgressStat = await prisma.progressStat.delete({
     *   where: {
     *     // ... filter to delete one ProgressStat
     *   }
     * })
     * 
     */
    delete<T extends ProgressStatDeleteArgs>(args: SelectSubset<T, ProgressStatDeleteArgs<ExtArgs>>): Prisma__ProgressStatClient<$Result.GetResult<Prisma.$ProgressStatPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProgressStat.
     * @param {ProgressStatUpdateArgs} args - Arguments to update one ProgressStat.
     * @example
     * // Update one ProgressStat
     * const progressStat = await prisma.progressStat.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProgressStatUpdateArgs>(args: SelectSubset<T, ProgressStatUpdateArgs<ExtArgs>>): Prisma__ProgressStatClient<$Result.GetResult<Prisma.$ProgressStatPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProgressStats.
     * @param {ProgressStatDeleteManyArgs} args - Arguments to filter ProgressStats to delete.
     * @example
     * // Delete a few ProgressStats
     * const { count } = await prisma.progressStat.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProgressStatDeleteManyArgs>(args?: SelectSubset<T, ProgressStatDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProgressStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressStatUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProgressStats
     * const progressStat = await prisma.progressStat.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProgressStatUpdateManyArgs>(args: SelectSubset<T, ProgressStatUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProgressStats and returns the data updated in the database.
     * @param {ProgressStatUpdateManyAndReturnArgs} args - Arguments to update many ProgressStats.
     * @example
     * // Update many ProgressStats
     * const progressStat = await prisma.progressStat.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProgressStats and only return the `id`
     * const progressStatWithIdOnly = await prisma.progressStat.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProgressStatUpdateManyAndReturnArgs>(args: SelectSubset<T, ProgressStatUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgressStatPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProgressStat.
     * @param {ProgressStatUpsertArgs} args - Arguments to update or create a ProgressStat.
     * @example
     * // Update or create a ProgressStat
     * const progressStat = await prisma.progressStat.upsert({
     *   create: {
     *     // ... data to create a ProgressStat
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProgressStat we want to update
     *   }
     * })
     */
    upsert<T extends ProgressStatUpsertArgs>(args: SelectSubset<T, ProgressStatUpsertArgs<ExtArgs>>): Prisma__ProgressStatClient<$Result.GetResult<Prisma.$ProgressStatPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProgressStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressStatCountArgs} args - Arguments to filter ProgressStats to count.
     * @example
     * // Count the number of ProgressStats
     * const count = await prisma.progressStat.count({
     *   where: {
     *     // ... the filter for the ProgressStats we want to count
     *   }
     * })
    **/
    count<T extends ProgressStatCountArgs>(
      args?: Subset<T, ProgressStatCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProgressStatCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProgressStat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressStatAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProgressStatAggregateArgs>(args: Subset<T, ProgressStatAggregateArgs>): Prisma.PrismaPromise<GetProgressStatAggregateType<T>>

    /**
     * Group by ProgressStat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressStatGroupByArgs} args - Group by arguments.
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
      T extends ProgressStatGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProgressStatGroupByArgs['orderBy'] }
        : { orderBy?: ProgressStatGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProgressStatGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProgressStatGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProgressStat model
   */
  readonly fields: ProgressStatFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProgressStat.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProgressStatClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ProgressStat model
   */
  interface ProgressStatFieldRefs {
    readonly id: FieldRef<"ProgressStat", 'String'>
    readonly date: FieldRef<"ProgressStat", 'DateTime'>
    readonly statType: FieldRef<"ProgressStat", 'StatType'>
    readonly value: FieldRef<"ProgressStat", 'Float'>
    readonly userId: FieldRef<"ProgressStat", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ProgressStat findUnique
   */
  export type ProgressStatFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressStat
     */
    select?: ProgressStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressStat
     */
    omit?: ProgressStatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressStatInclude<ExtArgs> | null
    /**
     * Filter, which ProgressStat to fetch.
     */
    where: ProgressStatWhereUniqueInput
  }

  /**
   * ProgressStat findUniqueOrThrow
   */
  export type ProgressStatFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressStat
     */
    select?: ProgressStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressStat
     */
    omit?: ProgressStatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressStatInclude<ExtArgs> | null
    /**
     * Filter, which ProgressStat to fetch.
     */
    where: ProgressStatWhereUniqueInput
  }

  /**
   * ProgressStat findFirst
   */
  export type ProgressStatFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressStat
     */
    select?: ProgressStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressStat
     */
    omit?: ProgressStatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressStatInclude<ExtArgs> | null
    /**
     * Filter, which ProgressStat to fetch.
     */
    where?: ProgressStatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProgressStats to fetch.
     */
    orderBy?: ProgressStatOrderByWithRelationInput | ProgressStatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProgressStats.
     */
    cursor?: ProgressStatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProgressStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProgressStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProgressStats.
     */
    distinct?: ProgressStatScalarFieldEnum | ProgressStatScalarFieldEnum[]
  }

  /**
   * ProgressStat findFirstOrThrow
   */
  export type ProgressStatFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressStat
     */
    select?: ProgressStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressStat
     */
    omit?: ProgressStatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressStatInclude<ExtArgs> | null
    /**
     * Filter, which ProgressStat to fetch.
     */
    where?: ProgressStatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProgressStats to fetch.
     */
    orderBy?: ProgressStatOrderByWithRelationInput | ProgressStatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProgressStats.
     */
    cursor?: ProgressStatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProgressStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProgressStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProgressStats.
     */
    distinct?: ProgressStatScalarFieldEnum | ProgressStatScalarFieldEnum[]
  }

  /**
   * ProgressStat findMany
   */
  export type ProgressStatFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressStat
     */
    select?: ProgressStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressStat
     */
    omit?: ProgressStatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressStatInclude<ExtArgs> | null
    /**
     * Filter, which ProgressStats to fetch.
     */
    where?: ProgressStatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProgressStats to fetch.
     */
    orderBy?: ProgressStatOrderByWithRelationInput | ProgressStatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProgressStats.
     */
    cursor?: ProgressStatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProgressStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProgressStats.
     */
    skip?: number
    distinct?: ProgressStatScalarFieldEnum | ProgressStatScalarFieldEnum[]
  }

  /**
   * ProgressStat create
   */
  export type ProgressStatCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressStat
     */
    select?: ProgressStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressStat
     */
    omit?: ProgressStatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressStatInclude<ExtArgs> | null
    /**
     * The data needed to create a ProgressStat.
     */
    data: XOR<ProgressStatCreateInput, ProgressStatUncheckedCreateInput>
  }

  /**
   * ProgressStat createMany
   */
  export type ProgressStatCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProgressStats.
     */
    data: ProgressStatCreateManyInput | ProgressStatCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProgressStat createManyAndReturn
   */
  export type ProgressStatCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressStat
     */
    select?: ProgressStatSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressStat
     */
    omit?: ProgressStatOmit<ExtArgs> | null
    /**
     * The data used to create many ProgressStats.
     */
    data: ProgressStatCreateManyInput | ProgressStatCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressStatIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProgressStat update
   */
  export type ProgressStatUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressStat
     */
    select?: ProgressStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressStat
     */
    omit?: ProgressStatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressStatInclude<ExtArgs> | null
    /**
     * The data needed to update a ProgressStat.
     */
    data: XOR<ProgressStatUpdateInput, ProgressStatUncheckedUpdateInput>
    /**
     * Choose, which ProgressStat to update.
     */
    where: ProgressStatWhereUniqueInput
  }

  /**
   * ProgressStat updateMany
   */
  export type ProgressStatUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProgressStats.
     */
    data: XOR<ProgressStatUpdateManyMutationInput, ProgressStatUncheckedUpdateManyInput>
    /**
     * Filter which ProgressStats to update
     */
    where?: ProgressStatWhereInput
    /**
     * Limit how many ProgressStats to update.
     */
    limit?: number
  }

  /**
   * ProgressStat updateManyAndReturn
   */
  export type ProgressStatUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressStat
     */
    select?: ProgressStatSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressStat
     */
    omit?: ProgressStatOmit<ExtArgs> | null
    /**
     * The data used to update ProgressStats.
     */
    data: XOR<ProgressStatUpdateManyMutationInput, ProgressStatUncheckedUpdateManyInput>
    /**
     * Filter which ProgressStats to update
     */
    where?: ProgressStatWhereInput
    /**
     * Limit how many ProgressStats to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressStatIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProgressStat upsert
   */
  export type ProgressStatUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressStat
     */
    select?: ProgressStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressStat
     */
    omit?: ProgressStatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressStatInclude<ExtArgs> | null
    /**
     * The filter to search for the ProgressStat to update in case it exists.
     */
    where: ProgressStatWhereUniqueInput
    /**
     * In case the ProgressStat found by the `where` argument doesn't exist, create a new ProgressStat with this data.
     */
    create: XOR<ProgressStatCreateInput, ProgressStatUncheckedCreateInput>
    /**
     * In case the ProgressStat was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProgressStatUpdateInput, ProgressStatUncheckedUpdateInput>
  }

  /**
   * ProgressStat delete
   */
  export type ProgressStatDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressStat
     */
    select?: ProgressStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressStat
     */
    omit?: ProgressStatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressStatInclude<ExtArgs> | null
    /**
     * Filter which ProgressStat to delete.
     */
    where: ProgressStatWhereUniqueInput
  }

  /**
   * ProgressStat deleteMany
   */
  export type ProgressStatDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProgressStats to delete
     */
    where?: ProgressStatWhereInput
    /**
     * Limit how many ProgressStats to delete.
     */
    limit?: number
  }

  /**
   * ProgressStat without action
   */
  export type ProgressStatDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressStat
     */
    select?: ProgressStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressStat
     */
    omit?: ProgressStatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressStatInclude<ExtArgs> | null
  }


  /**
   * Model WorkoutStreak
   */

  export type AggregateWorkoutStreak = {
    _count: WorkoutStreakCountAggregateOutputType | null
    _avg: WorkoutStreakAvgAggregateOutputType | null
    _sum: WorkoutStreakSumAggregateOutputType | null
    _min: WorkoutStreakMinAggregateOutputType | null
    _max: WorkoutStreakMaxAggregateOutputType | null
  }

  export type WorkoutStreakAvgAggregateOutputType = {
    currentStreak: number | null
    longestStreak: number | null
  }

  export type WorkoutStreakSumAggregateOutputType = {
    currentStreak: number | null
    longestStreak: number | null
  }

  export type WorkoutStreakMinAggregateOutputType = {
    id: string | null
    currentStreak: number | null
    longestStreak: number | null
    lastWorkoutDate: Date | null
    userId: string | null
  }

  export type WorkoutStreakMaxAggregateOutputType = {
    id: string | null
    currentStreak: number | null
    longestStreak: number | null
    lastWorkoutDate: Date | null
    userId: string | null
  }

  export type WorkoutStreakCountAggregateOutputType = {
    id: number
    currentStreak: number
    longestStreak: number
    lastWorkoutDate: number
    userId: number
    _all: number
  }


  export type WorkoutStreakAvgAggregateInputType = {
    currentStreak?: true
    longestStreak?: true
  }

  export type WorkoutStreakSumAggregateInputType = {
    currentStreak?: true
    longestStreak?: true
  }

  export type WorkoutStreakMinAggregateInputType = {
    id?: true
    currentStreak?: true
    longestStreak?: true
    lastWorkoutDate?: true
    userId?: true
  }

  export type WorkoutStreakMaxAggregateInputType = {
    id?: true
    currentStreak?: true
    longestStreak?: true
    lastWorkoutDate?: true
    userId?: true
  }

  export type WorkoutStreakCountAggregateInputType = {
    id?: true
    currentStreak?: true
    longestStreak?: true
    lastWorkoutDate?: true
    userId?: true
    _all?: true
  }

  export type WorkoutStreakAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkoutStreak to aggregate.
     */
    where?: WorkoutStreakWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkoutStreaks to fetch.
     */
    orderBy?: WorkoutStreakOrderByWithRelationInput | WorkoutStreakOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkoutStreakWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkoutStreaks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkoutStreaks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WorkoutStreaks
    **/
    _count?: true | WorkoutStreakCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WorkoutStreakAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WorkoutStreakSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkoutStreakMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkoutStreakMaxAggregateInputType
  }

  export type GetWorkoutStreakAggregateType<T extends WorkoutStreakAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkoutStreak]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkoutStreak[P]>
      : GetScalarType<T[P], AggregateWorkoutStreak[P]>
  }




  export type WorkoutStreakGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkoutStreakWhereInput
    orderBy?: WorkoutStreakOrderByWithAggregationInput | WorkoutStreakOrderByWithAggregationInput[]
    by: WorkoutStreakScalarFieldEnum[] | WorkoutStreakScalarFieldEnum
    having?: WorkoutStreakScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkoutStreakCountAggregateInputType | true
    _avg?: WorkoutStreakAvgAggregateInputType
    _sum?: WorkoutStreakSumAggregateInputType
    _min?: WorkoutStreakMinAggregateInputType
    _max?: WorkoutStreakMaxAggregateInputType
  }

  export type WorkoutStreakGroupByOutputType = {
    id: string
    currentStreak: number
    longestStreak: number
    lastWorkoutDate: Date | null
    userId: string
    _count: WorkoutStreakCountAggregateOutputType | null
    _avg: WorkoutStreakAvgAggregateOutputType | null
    _sum: WorkoutStreakSumAggregateOutputType | null
    _min: WorkoutStreakMinAggregateOutputType | null
    _max: WorkoutStreakMaxAggregateOutputType | null
  }

  type GetWorkoutStreakGroupByPayload<T extends WorkoutStreakGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkoutStreakGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkoutStreakGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkoutStreakGroupByOutputType[P]>
            : GetScalarType<T[P], WorkoutStreakGroupByOutputType[P]>
        }
      >
    >


  export type WorkoutStreakSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    currentStreak?: boolean
    longestStreak?: boolean
    lastWorkoutDate?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workoutStreak"]>

  export type WorkoutStreakSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    currentStreak?: boolean
    longestStreak?: boolean
    lastWorkoutDate?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workoutStreak"]>

  export type WorkoutStreakSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    currentStreak?: boolean
    longestStreak?: boolean
    lastWorkoutDate?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workoutStreak"]>

  export type WorkoutStreakSelectScalar = {
    id?: boolean
    currentStreak?: boolean
    longestStreak?: boolean
    lastWorkoutDate?: boolean
    userId?: boolean
  }

  export type WorkoutStreakOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "currentStreak" | "longestStreak" | "lastWorkoutDate" | "userId", ExtArgs["result"]["workoutStreak"]>
  export type WorkoutStreakInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type WorkoutStreakIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type WorkoutStreakIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $WorkoutStreakPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WorkoutStreak"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      currentStreak: number
      longestStreak: number
      lastWorkoutDate: Date | null
      userId: string
    }, ExtArgs["result"]["workoutStreak"]>
    composites: {}
  }

  type WorkoutStreakGetPayload<S extends boolean | null | undefined | WorkoutStreakDefaultArgs> = $Result.GetResult<Prisma.$WorkoutStreakPayload, S>

  type WorkoutStreakCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkoutStreakFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkoutStreakCountAggregateInputType | true
    }

  export interface WorkoutStreakDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WorkoutStreak'], meta: { name: 'WorkoutStreak' } }
    /**
     * Find zero or one WorkoutStreak that matches the filter.
     * @param {WorkoutStreakFindUniqueArgs} args - Arguments to find a WorkoutStreak
     * @example
     * // Get one WorkoutStreak
     * const workoutStreak = await prisma.workoutStreak.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkoutStreakFindUniqueArgs>(args: SelectSubset<T, WorkoutStreakFindUniqueArgs<ExtArgs>>): Prisma__WorkoutStreakClient<$Result.GetResult<Prisma.$WorkoutStreakPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WorkoutStreak that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkoutStreakFindUniqueOrThrowArgs} args - Arguments to find a WorkoutStreak
     * @example
     * // Get one WorkoutStreak
     * const workoutStreak = await prisma.workoutStreak.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkoutStreakFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkoutStreakFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkoutStreakClient<$Result.GetResult<Prisma.$WorkoutStreakPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkoutStreak that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutStreakFindFirstArgs} args - Arguments to find a WorkoutStreak
     * @example
     * // Get one WorkoutStreak
     * const workoutStreak = await prisma.workoutStreak.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkoutStreakFindFirstArgs>(args?: SelectSubset<T, WorkoutStreakFindFirstArgs<ExtArgs>>): Prisma__WorkoutStreakClient<$Result.GetResult<Prisma.$WorkoutStreakPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkoutStreak that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutStreakFindFirstOrThrowArgs} args - Arguments to find a WorkoutStreak
     * @example
     * // Get one WorkoutStreak
     * const workoutStreak = await prisma.workoutStreak.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkoutStreakFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkoutStreakFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkoutStreakClient<$Result.GetResult<Prisma.$WorkoutStreakPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WorkoutStreaks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutStreakFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WorkoutStreaks
     * const workoutStreaks = await prisma.workoutStreak.findMany()
     * 
     * // Get first 10 WorkoutStreaks
     * const workoutStreaks = await prisma.workoutStreak.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workoutStreakWithIdOnly = await prisma.workoutStreak.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkoutStreakFindManyArgs>(args?: SelectSubset<T, WorkoutStreakFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutStreakPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WorkoutStreak.
     * @param {WorkoutStreakCreateArgs} args - Arguments to create a WorkoutStreak.
     * @example
     * // Create one WorkoutStreak
     * const WorkoutStreak = await prisma.workoutStreak.create({
     *   data: {
     *     // ... data to create a WorkoutStreak
     *   }
     * })
     * 
     */
    create<T extends WorkoutStreakCreateArgs>(args: SelectSubset<T, WorkoutStreakCreateArgs<ExtArgs>>): Prisma__WorkoutStreakClient<$Result.GetResult<Prisma.$WorkoutStreakPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WorkoutStreaks.
     * @param {WorkoutStreakCreateManyArgs} args - Arguments to create many WorkoutStreaks.
     * @example
     * // Create many WorkoutStreaks
     * const workoutStreak = await prisma.workoutStreak.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkoutStreakCreateManyArgs>(args?: SelectSubset<T, WorkoutStreakCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WorkoutStreaks and returns the data saved in the database.
     * @param {WorkoutStreakCreateManyAndReturnArgs} args - Arguments to create many WorkoutStreaks.
     * @example
     * // Create many WorkoutStreaks
     * const workoutStreak = await prisma.workoutStreak.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WorkoutStreaks and only return the `id`
     * const workoutStreakWithIdOnly = await prisma.workoutStreak.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorkoutStreakCreateManyAndReturnArgs>(args?: SelectSubset<T, WorkoutStreakCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutStreakPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WorkoutStreak.
     * @param {WorkoutStreakDeleteArgs} args - Arguments to delete one WorkoutStreak.
     * @example
     * // Delete one WorkoutStreak
     * const WorkoutStreak = await prisma.workoutStreak.delete({
     *   where: {
     *     // ... filter to delete one WorkoutStreak
     *   }
     * })
     * 
     */
    delete<T extends WorkoutStreakDeleteArgs>(args: SelectSubset<T, WorkoutStreakDeleteArgs<ExtArgs>>): Prisma__WorkoutStreakClient<$Result.GetResult<Prisma.$WorkoutStreakPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WorkoutStreak.
     * @param {WorkoutStreakUpdateArgs} args - Arguments to update one WorkoutStreak.
     * @example
     * // Update one WorkoutStreak
     * const workoutStreak = await prisma.workoutStreak.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkoutStreakUpdateArgs>(args: SelectSubset<T, WorkoutStreakUpdateArgs<ExtArgs>>): Prisma__WorkoutStreakClient<$Result.GetResult<Prisma.$WorkoutStreakPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WorkoutStreaks.
     * @param {WorkoutStreakDeleteManyArgs} args - Arguments to filter WorkoutStreaks to delete.
     * @example
     * // Delete a few WorkoutStreaks
     * const { count } = await prisma.workoutStreak.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkoutStreakDeleteManyArgs>(args?: SelectSubset<T, WorkoutStreakDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkoutStreaks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutStreakUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WorkoutStreaks
     * const workoutStreak = await prisma.workoutStreak.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkoutStreakUpdateManyArgs>(args: SelectSubset<T, WorkoutStreakUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkoutStreaks and returns the data updated in the database.
     * @param {WorkoutStreakUpdateManyAndReturnArgs} args - Arguments to update many WorkoutStreaks.
     * @example
     * // Update many WorkoutStreaks
     * const workoutStreak = await prisma.workoutStreak.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WorkoutStreaks and only return the `id`
     * const workoutStreakWithIdOnly = await prisma.workoutStreak.updateManyAndReturn({
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
    updateManyAndReturn<T extends WorkoutStreakUpdateManyAndReturnArgs>(args: SelectSubset<T, WorkoutStreakUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutStreakPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WorkoutStreak.
     * @param {WorkoutStreakUpsertArgs} args - Arguments to update or create a WorkoutStreak.
     * @example
     * // Update or create a WorkoutStreak
     * const workoutStreak = await prisma.workoutStreak.upsert({
     *   create: {
     *     // ... data to create a WorkoutStreak
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WorkoutStreak we want to update
     *   }
     * })
     */
    upsert<T extends WorkoutStreakUpsertArgs>(args: SelectSubset<T, WorkoutStreakUpsertArgs<ExtArgs>>): Prisma__WorkoutStreakClient<$Result.GetResult<Prisma.$WorkoutStreakPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WorkoutStreaks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutStreakCountArgs} args - Arguments to filter WorkoutStreaks to count.
     * @example
     * // Count the number of WorkoutStreaks
     * const count = await prisma.workoutStreak.count({
     *   where: {
     *     // ... the filter for the WorkoutStreaks we want to count
     *   }
     * })
    **/
    count<T extends WorkoutStreakCountArgs>(
      args?: Subset<T, WorkoutStreakCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkoutStreakCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WorkoutStreak.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutStreakAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WorkoutStreakAggregateArgs>(args: Subset<T, WorkoutStreakAggregateArgs>): Prisma.PrismaPromise<GetWorkoutStreakAggregateType<T>>

    /**
     * Group by WorkoutStreak.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutStreakGroupByArgs} args - Group by arguments.
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
      T extends WorkoutStreakGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkoutStreakGroupByArgs['orderBy'] }
        : { orderBy?: WorkoutStreakGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WorkoutStreakGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkoutStreakGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WorkoutStreak model
   */
  readonly fields: WorkoutStreakFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WorkoutStreak.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkoutStreakClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the WorkoutStreak model
   */
  interface WorkoutStreakFieldRefs {
    readonly id: FieldRef<"WorkoutStreak", 'String'>
    readonly currentStreak: FieldRef<"WorkoutStreak", 'Int'>
    readonly longestStreak: FieldRef<"WorkoutStreak", 'Int'>
    readonly lastWorkoutDate: FieldRef<"WorkoutStreak", 'DateTime'>
    readonly userId: FieldRef<"WorkoutStreak", 'String'>
  }
    

  // Custom InputTypes
  /**
   * WorkoutStreak findUnique
   */
  export type WorkoutStreakFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutStreak
     */
    select?: WorkoutStreakSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutStreak
     */
    omit?: WorkoutStreakOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutStreakInclude<ExtArgs> | null
    /**
     * Filter, which WorkoutStreak to fetch.
     */
    where: WorkoutStreakWhereUniqueInput
  }

  /**
   * WorkoutStreak findUniqueOrThrow
   */
  export type WorkoutStreakFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutStreak
     */
    select?: WorkoutStreakSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutStreak
     */
    omit?: WorkoutStreakOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutStreakInclude<ExtArgs> | null
    /**
     * Filter, which WorkoutStreak to fetch.
     */
    where: WorkoutStreakWhereUniqueInput
  }

  /**
   * WorkoutStreak findFirst
   */
  export type WorkoutStreakFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutStreak
     */
    select?: WorkoutStreakSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutStreak
     */
    omit?: WorkoutStreakOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutStreakInclude<ExtArgs> | null
    /**
     * Filter, which WorkoutStreak to fetch.
     */
    where?: WorkoutStreakWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkoutStreaks to fetch.
     */
    orderBy?: WorkoutStreakOrderByWithRelationInput | WorkoutStreakOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkoutStreaks.
     */
    cursor?: WorkoutStreakWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkoutStreaks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkoutStreaks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkoutStreaks.
     */
    distinct?: WorkoutStreakScalarFieldEnum | WorkoutStreakScalarFieldEnum[]
  }

  /**
   * WorkoutStreak findFirstOrThrow
   */
  export type WorkoutStreakFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutStreak
     */
    select?: WorkoutStreakSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutStreak
     */
    omit?: WorkoutStreakOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutStreakInclude<ExtArgs> | null
    /**
     * Filter, which WorkoutStreak to fetch.
     */
    where?: WorkoutStreakWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkoutStreaks to fetch.
     */
    orderBy?: WorkoutStreakOrderByWithRelationInput | WorkoutStreakOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkoutStreaks.
     */
    cursor?: WorkoutStreakWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkoutStreaks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkoutStreaks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkoutStreaks.
     */
    distinct?: WorkoutStreakScalarFieldEnum | WorkoutStreakScalarFieldEnum[]
  }

  /**
   * WorkoutStreak findMany
   */
  export type WorkoutStreakFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutStreak
     */
    select?: WorkoutStreakSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutStreak
     */
    omit?: WorkoutStreakOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutStreakInclude<ExtArgs> | null
    /**
     * Filter, which WorkoutStreaks to fetch.
     */
    where?: WorkoutStreakWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkoutStreaks to fetch.
     */
    orderBy?: WorkoutStreakOrderByWithRelationInput | WorkoutStreakOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WorkoutStreaks.
     */
    cursor?: WorkoutStreakWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkoutStreaks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkoutStreaks.
     */
    skip?: number
    distinct?: WorkoutStreakScalarFieldEnum | WorkoutStreakScalarFieldEnum[]
  }

  /**
   * WorkoutStreak create
   */
  export type WorkoutStreakCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutStreak
     */
    select?: WorkoutStreakSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutStreak
     */
    omit?: WorkoutStreakOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutStreakInclude<ExtArgs> | null
    /**
     * The data needed to create a WorkoutStreak.
     */
    data: XOR<WorkoutStreakCreateInput, WorkoutStreakUncheckedCreateInput>
  }

  /**
   * WorkoutStreak createMany
   */
  export type WorkoutStreakCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WorkoutStreaks.
     */
    data: WorkoutStreakCreateManyInput | WorkoutStreakCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WorkoutStreak createManyAndReturn
   */
  export type WorkoutStreakCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutStreak
     */
    select?: WorkoutStreakSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutStreak
     */
    omit?: WorkoutStreakOmit<ExtArgs> | null
    /**
     * The data used to create many WorkoutStreaks.
     */
    data: WorkoutStreakCreateManyInput | WorkoutStreakCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutStreakIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkoutStreak update
   */
  export type WorkoutStreakUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutStreak
     */
    select?: WorkoutStreakSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutStreak
     */
    omit?: WorkoutStreakOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutStreakInclude<ExtArgs> | null
    /**
     * The data needed to update a WorkoutStreak.
     */
    data: XOR<WorkoutStreakUpdateInput, WorkoutStreakUncheckedUpdateInput>
    /**
     * Choose, which WorkoutStreak to update.
     */
    where: WorkoutStreakWhereUniqueInput
  }

  /**
   * WorkoutStreak updateMany
   */
  export type WorkoutStreakUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WorkoutStreaks.
     */
    data: XOR<WorkoutStreakUpdateManyMutationInput, WorkoutStreakUncheckedUpdateManyInput>
    /**
     * Filter which WorkoutStreaks to update
     */
    where?: WorkoutStreakWhereInput
    /**
     * Limit how many WorkoutStreaks to update.
     */
    limit?: number
  }

  /**
   * WorkoutStreak updateManyAndReturn
   */
  export type WorkoutStreakUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutStreak
     */
    select?: WorkoutStreakSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutStreak
     */
    omit?: WorkoutStreakOmit<ExtArgs> | null
    /**
     * The data used to update WorkoutStreaks.
     */
    data: XOR<WorkoutStreakUpdateManyMutationInput, WorkoutStreakUncheckedUpdateManyInput>
    /**
     * Filter which WorkoutStreaks to update
     */
    where?: WorkoutStreakWhereInput
    /**
     * Limit how many WorkoutStreaks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutStreakIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkoutStreak upsert
   */
  export type WorkoutStreakUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutStreak
     */
    select?: WorkoutStreakSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutStreak
     */
    omit?: WorkoutStreakOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutStreakInclude<ExtArgs> | null
    /**
     * The filter to search for the WorkoutStreak to update in case it exists.
     */
    where: WorkoutStreakWhereUniqueInput
    /**
     * In case the WorkoutStreak found by the `where` argument doesn't exist, create a new WorkoutStreak with this data.
     */
    create: XOR<WorkoutStreakCreateInput, WorkoutStreakUncheckedCreateInput>
    /**
     * In case the WorkoutStreak was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkoutStreakUpdateInput, WorkoutStreakUncheckedUpdateInput>
  }

  /**
   * WorkoutStreak delete
   */
  export type WorkoutStreakDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutStreak
     */
    select?: WorkoutStreakSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutStreak
     */
    omit?: WorkoutStreakOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutStreakInclude<ExtArgs> | null
    /**
     * Filter which WorkoutStreak to delete.
     */
    where: WorkoutStreakWhereUniqueInput
  }

  /**
   * WorkoutStreak deleteMany
   */
  export type WorkoutStreakDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkoutStreaks to delete
     */
    where?: WorkoutStreakWhereInput
    /**
     * Limit how many WorkoutStreaks to delete.
     */
    limit?: number
  }

  /**
   * WorkoutStreak without action
   */
  export type WorkoutStreakDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutStreak
     */
    select?: WorkoutStreakSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutStreak
     */
    omit?: WorkoutStreakOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutStreakInclude<ExtArgs> | null
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
    name: 'name',
    email: 'email',
    password: 'password',
    image: 'image',
    height: 'height',
    weight: 'weight',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const WorkoutScalarFieldEnum: {
    id: 'id',
    name: 'name',
    date: 'date',
    duration: 'duration',
    notes: 'notes',
    isCompleted: 'isCompleted',
    status: 'status',
    startedAt: 'startedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId',
    category: 'category'
  };

  export type WorkoutScalarFieldEnum = (typeof WorkoutScalarFieldEnum)[keyof typeof WorkoutScalarFieldEnum]


  export const ExerciseScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    muscleGroup: 'muscleGroup',
    equipment: 'equipment',
    instructions: 'instructions',
    videoUrl: 'videoUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ExerciseScalarFieldEnum = (typeof ExerciseScalarFieldEnum)[keyof typeof ExerciseScalarFieldEnum]


  export const WorkoutExerciseScalarFieldEnum: {
    id: 'id',
    sets: 'sets',
    reps: 'reps',
    weight: 'weight',
    duration: 'duration',
    restTime: 'restTime',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    workoutId: 'workoutId',
    exerciseId: 'exerciseId',
    personalBest: 'personalBest'
  };

  export type WorkoutExerciseScalarFieldEnum = (typeof WorkoutExerciseScalarFieldEnum)[keyof typeof WorkoutExerciseScalarFieldEnum]


  export const GoalScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    targetDate: 'targetDate',
    isCompleted: 'isCompleted',
    type: 'type',
    metric: 'metric',
    targetValue: 'targetValue',
    currentValue: 'currentValue',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId'
  };

  export type GoalScalarFieldEnum = (typeof GoalScalarFieldEnum)[keyof typeof GoalScalarFieldEnum]


  export const AchievementScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    image: 'image',
    unlockedAt: 'unlockedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId'
  };

  export type AchievementScalarFieldEnum = (typeof AchievementScalarFieldEnum)[keyof typeof AchievementScalarFieldEnum]


  export const WeightHistoryScalarFieldEnum: {
    id: 'id',
    weight: 'weight',
    date: 'date',
    notes: 'notes',
    userId: 'userId'
  };

  export type WeightHistoryScalarFieldEnum = (typeof WeightHistoryScalarFieldEnum)[keyof typeof WeightHistoryScalarFieldEnum]


  export const BodyMeasurementScalarFieldEnum: {
    id: 'id',
    date: 'date',
    type: 'type',
    value: 'value',
    notes: 'notes',
    userId: 'userId'
  };

  export type BodyMeasurementScalarFieldEnum = (typeof BodyMeasurementScalarFieldEnum)[keyof typeof BodyMeasurementScalarFieldEnum]


  export const AIWorkoutScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    fitnessLevel: 'fitnessLevel',
    goal: 'goal',
    duration: 'duration',
    equipment: 'equipment',
    focusArea: 'focusArea',
    warmup: 'warmup',
    cooldown: 'cooldown',
    createdAt: 'createdAt',
    userId: 'userId'
  };

  export type AIWorkoutScalarFieldEnum = (typeof AIWorkoutScalarFieldEnum)[keyof typeof AIWorkoutScalarFieldEnum]


  export const AIWorkoutExerciseScalarFieldEnum: {
    id: 'id',
    name: 'name',
    sets: 'sets',
    reps: 'reps',
    duration: 'duration',
    rest: 'rest',
    instruction: 'instruction',
    order: 'order',
    aiWorkoutId: 'aiWorkoutId',
    exerciseId: 'exerciseId'
  };

  export type AIWorkoutExerciseScalarFieldEnum = (typeof AIWorkoutExerciseScalarFieldEnum)[keyof typeof AIWorkoutExerciseScalarFieldEnum]


  export const UserSettingsScalarFieldEnum: {
    id: 'id',
    theme: 'theme',
    units: 'units',
    language: 'language',
    privacyLevel: 'privacyLevel',
    workoutReminders: 'workoutReminders',
    progressUpdates: 'progressUpdates',
    achievementAlerts: 'achievementAlerts',
    tipNotifications: 'tipNotifications',
    userId: 'userId'
  };

  export type UserSettingsScalarFieldEnum = (typeof UserSettingsScalarFieldEnum)[keyof typeof UserSettingsScalarFieldEnum]


  export const ProgressStatScalarFieldEnum: {
    id: 'id',
    date: 'date',
    statType: 'statType',
    value: 'value',
    userId: 'userId'
  };

  export type ProgressStatScalarFieldEnum = (typeof ProgressStatScalarFieldEnum)[keyof typeof ProgressStatScalarFieldEnum]


  export const WorkoutStreakScalarFieldEnum: {
    id: 'id',
    currentStreak: 'currentStreak',
    longestStreak: 'longestStreak',
    lastWorkoutDate: 'lastWorkoutDate',
    userId: 'userId'
  };

  export type WorkoutStreakScalarFieldEnum = (typeof WorkoutStreakScalarFieldEnum)[keyof typeof WorkoutStreakScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


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


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'WorkoutStatus'
   */
  export type EnumWorkoutStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WorkoutStatus'>
    


  /**
   * Reference to a field of type 'WorkoutStatus[]'
   */
  export type ListEnumWorkoutStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WorkoutStatus[]'>
    


  /**
   * Reference to a field of type 'GoalType'
   */
  export type EnumGoalTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GoalType'>
    


  /**
   * Reference to a field of type 'GoalType[]'
   */
  export type ListEnumGoalTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GoalType[]'>
    


  /**
   * Reference to a field of type 'MeasurementType'
   */
  export type EnumMeasurementTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MeasurementType'>
    


  /**
   * Reference to a field of type 'MeasurementType[]'
   */
  export type ListEnumMeasurementTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MeasurementType[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'StatType'
   */
  export type EnumStatTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatType'>
    


  /**
   * Reference to a field of type 'StatType[]'
   */
  export type ListEnumStatTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatType[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    image?: StringNullableFilter<"User"> | string | null
    height?: FloatNullableFilter<"User"> | number | null
    weight?: FloatNullableFilter<"User"> | number | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    workouts?: WorkoutListRelationFilter
    goals?: GoalListRelationFilter
    achievements?: AchievementListRelationFilter
    weightHistory?: WeightHistoryListRelationFilter
    bodyMeasurements?: BodyMeasurementListRelationFilter
    aiWorkouts?: AIWorkoutListRelationFilter
    userSettings?: XOR<UserSettingsNullableScalarRelationFilter, UserSettingsWhereInput> | null
    progressStats?: ProgressStatListRelationFilter
    workoutStreak?: XOR<WorkoutStreakNullableScalarRelationFilter, WorkoutStreakWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrder
    image?: SortOrderInput | SortOrder
    height?: SortOrderInput | SortOrder
    weight?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    workouts?: WorkoutOrderByRelationAggregateInput
    goals?: GoalOrderByRelationAggregateInput
    achievements?: AchievementOrderByRelationAggregateInput
    weightHistory?: WeightHistoryOrderByRelationAggregateInput
    bodyMeasurements?: BodyMeasurementOrderByRelationAggregateInput
    aiWorkouts?: AIWorkoutOrderByRelationAggregateInput
    userSettings?: UserSettingsOrderByWithRelationInput
    progressStats?: ProgressStatOrderByRelationAggregateInput
    workoutStreak?: WorkoutStreakOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    image?: StringNullableFilter<"User"> | string | null
    height?: FloatNullableFilter<"User"> | number | null
    weight?: FloatNullableFilter<"User"> | number | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    workouts?: WorkoutListRelationFilter
    goals?: GoalListRelationFilter
    achievements?: AchievementListRelationFilter
    weightHistory?: WeightHistoryListRelationFilter
    bodyMeasurements?: BodyMeasurementListRelationFilter
    aiWorkouts?: AIWorkoutListRelationFilter
    userSettings?: XOR<UserSettingsNullableScalarRelationFilter, UserSettingsWhereInput> | null
    progressStats?: ProgressStatListRelationFilter
    workoutStreak?: XOR<WorkoutStreakNullableScalarRelationFilter, WorkoutStreakWhereInput> | null
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrder
    image?: SortOrderInput | SortOrder
    height?: SortOrderInput | SortOrder
    weight?: SortOrderInput | SortOrder
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
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    height?: FloatNullableWithAggregatesFilter<"User"> | number | null
    weight?: FloatNullableWithAggregatesFilter<"User"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type WorkoutWhereInput = {
    AND?: WorkoutWhereInput | WorkoutWhereInput[]
    OR?: WorkoutWhereInput[]
    NOT?: WorkoutWhereInput | WorkoutWhereInput[]
    id?: StringFilter<"Workout"> | string
    name?: StringFilter<"Workout"> | string
    date?: DateTimeFilter<"Workout"> | Date | string
    duration?: IntNullableFilter<"Workout"> | number | null
    notes?: StringNullableFilter<"Workout"> | string | null
    isCompleted?: BoolFilter<"Workout"> | boolean
    status?: EnumWorkoutStatusFilter<"Workout"> | $Enums.WorkoutStatus
    startedAt?: DateTimeNullableFilter<"Workout"> | Date | string | null
    createdAt?: DateTimeFilter<"Workout"> | Date | string
    updatedAt?: DateTimeFilter<"Workout"> | Date | string
    userId?: StringFilter<"Workout"> | string
    category?: StringNullableFilter<"Workout"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    exercises?: WorkoutExerciseListRelationFilter
  }

  export type WorkoutOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    date?: SortOrder
    duration?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    isCompleted?: SortOrder
    status?: SortOrder
    startedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    category?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    exercises?: WorkoutExerciseOrderByRelationAggregateInput
  }

  export type WorkoutWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WorkoutWhereInput | WorkoutWhereInput[]
    OR?: WorkoutWhereInput[]
    NOT?: WorkoutWhereInput | WorkoutWhereInput[]
    name?: StringFilter<"Workout"> | string
    date?: DateTimeFilter<"Workout"> | Date | string
    duration?: IntNullableFilter<"Workout"> | number | null
    notes?: StringNullableFilter<"Workout"> | string | null
    isCompleted?: BoolFilter<"Workout"> | boolean
    status?: EnumWorkoutStatusFilter<"Workout"> | $Enums.WorkoutStatus
    startedAt?: DateTimeNullableFilter<"Workout"> | Date | string | null
    createdAt?: DateTimeFilter<"Workout"> | Date | string
    updatedAt?: DateTimeFilter<"Workout"> | Date | string
    userId?: StringFilter<"Workout"> | string
    category?: StringNullableFilter<"Workout"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    exercises?: WorkoutExerciseListRelationFilter
  }, "id">

  export type WorkoutOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    date?: SortOrder
    duration?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    isCompleted?: SortOrder
    status?: SortOrder
    startedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    category?: SortOrderInput | SortOrder
    _count?: WorkoutCountOrderByAggregateInput
    _avg?: WorkoutAvgOrderByAggregateInput
    _max?: WorkoutMaxOrderByAggregateInput
    _min?: WorkoutMinOrderByAggregateInput
    _sum?: WorkoutSumOrderByAggregateInput
  }

  export type WorkoutScalarWhereWithAggregatesInput = {
    AND?: WorkoutScalarWhereWithAggregatesInput | WorkoutScalarWhereWithAggregatesInput[]
    OR?: WorkoutScalarWhereWithAggregatesInput[]
    NOT?: WorkoutScalarWhereWithAggregatesInput | WorkoutScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Workout"> | string
    name?: StringWithAggregatesFilter<"Workout"> | string
    date?: DateTimeWithAggregatesFilter<"Workout"> | Date | string
    duration?: IntNullableWithAggregatesFilter<"Workout"> | number | null
    notes?: StringNullableWithAggregatesFilter<"Workout"> | string | null
    isCompleted?: BoolWithAggregatesFilter<"Workout"> | boolean
    status?: EnumWorkoutStatusWithAggregatesFilter<"Workout"> | $Enums.WorkoutStatus
    startedAt?: DateTimeNullableWithAggregatesFilter<"Workout"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Workout"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Workout"> | Date | string
    userId?: StringWithAggregatesFilter<"Workout"> | string
    category?: StringNullableWithAggregatesFilter<"Workout"> | string | null
  }

  export type ExerciseWhereInput = {
    AND?: ExerciseWhereInput | ExerciseWhereInput[]
    OR?: ExerciseWhereInput[]
    NOT?: ExerciseWhereInput | ExerciseWhereInput[]
    id?: StringFilter<"Exercise"> | string
    name?: StringFilter<"Exercise"> | string
    description?: StringNullableFilter<"Exercise"> | string | null
    muscleGroup?: StringFilter<"Exercise"> | string
    equipment?: StringNullableFilter<"Exercise"> | string | null
    instructions?: StringNullableFilter<"Exercise"> | string | null
    videoUrl?: StringNullableFilter<"Exercise"> | string | null
    createdAt?: DateTimeFilter<"Exercise"> | Date | string
    updatedAt?: DateTimeFilter<"Exercise"> | Date | string
    workoutExercises?: WorkoutExerciseListRelationFilter
    aiWorkoutExercises?: AIWorkoutExerciseListRelationFilter
  }

  export type ExerciseOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    muscleGroup?: SortOrder
    equipment?: SortOrderInput | SortOrder
    instructions?: SortOrderInput | SortOrder
    videoUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    workoutExercises?: WorkoutExerciseOrderByRelationAggregateInput
    aiWorkoutExercises?: AIWorkoutExerciseOrderByRelationAggregateInput
  }

  export type ExerciseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ExerciseWhereInput | ExerciseWhereInput[]
    OR?: ExerciseWhereInput[]
    NOT?: ExerciseWhereInput | ExerciseWhereInput[]
    name?: StringFilter<"Exercise"> | string
    description?: StringNullableFilter<"Exercise"> | string | null
    muscleGroup?: StringFilter<"Exercise"> | string
    equipment?: StringNullableFilter<"Exercise"> | string | null
    instructions?: StringNullableFilter<"Exercise"> | string | null
    videoUrl?: StringNullableFilter<"Exercise"> | string | null
    createdAt?: DateTimeFilter<"Exercise"> | Date | string
    updatedAt?: DateTimeFilter<"Exercise"> | Date | string
    workoutExercises?: WorkoutExerciseListRelationFilter
    aiWorkoutExercises?: AIWorkoutExerciseListRelationFilter
  }, "id">

  export type ExerciseOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    muscleGroup?: SortOrder
    equipment?: SortOrderInput | SortOrder
    instructions?: SortOrderInput | SortOrder
    videoUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ExerciseCountOrderByAggregateInput
    _max?: ExerciseMaxOrderByAggregateInput
    _min?: ExerciseMinOrderByAggregateInput
  }

  export type ExerciseScalarWhereWithAggregatesInput = {
    AND?: ExerciseScalarWhereWithAggregatesInput | ExerciseScalarWhereWithAggregatesInput[]
    OR?: ExerciseScalarWhereWithAggregatesInput[]
    NOT?: ExerciseScalarWhereWithAggregatesInput | ExerciseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Exercise"> | string
    name?: StringWithAggregatesFilter<"Exercise"> | string
    description?: StringNullableWithAggregatesFilter<"Exercise"> | string | null
    muscleGroup?: StringWithAggregatesFilter<"Exercise"> | string
    equipment?: StringNullableWithAggregatesFilter<"Exercise"> | string | null
    instructions?: StringNullableWithAggregatesFilter<"Exercise"> | string | null
    videoUrl?: StringNullableWithAggregatesFilter<"Exercise"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Exercise"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Exercise"> | Date | string
  }

  export type WorkoutExerciseWhereInput = {
    AND?: WorkoutExerciseWhereInput | WorkoutExerciseWhereInput[]
    OR?: WorkoutExerciseWhereInput[]
    NOT?: WorkoutExerciseWhereInput | WorkoutExerciseWhereInput[]
    id?: StringFilter<"WorkoutExercise"> | string
    sets?: IntFilter<"WorkoutExercise"> | number
    reps?: IntFilter<"WorkoutExercise"> | number
    weight?: FloatNullableFilter<"WorkoutExercise"> | number | null
    duration?: IntNullableFilter<"WorkoutExercise"> | number | null
    restTime?: IntNullableFilter<"WorkoutExercise"> | number | null
    notes?: StringNullableFilter<"WorkoutExercise"> | string | null
    createdAt?: DateTimeFilter<"WorkoutExercise"> | Date | string
    updatedAt?: DateTimeFilter<"WorkoutExercise"> | Date | string
    workoutId?: StringFilter<"WorkoutExercise"> | string
    exerciseId?: StringFilter<"WorkoutExercise"> | string
    personalBest?: BoolFilter<"WorkoutExercise"> | boolean
    workout?: XOR<WorkoutScalarRelationFilter, WorkoutWhereInput>
    exercise?: XOR<ExerciseScalarRelationFilter, ExerciseWhereInput>
  }

  export type WorkoutExerciseOrderByWithRelationInput = {
    id?: SortOrder
    sets?: SortOrder
    reps?: SortOrder
    weight?: SortOrderInput | SortOrder
    duration?: SortOrderInput | SortOrder
    restTime?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    workoutId?: SortOrder
    exerciseId?: SortOrder
    personalBest?: SortOrder
    workout?: WorkoutOrderByWithRelationInput
    exercise?: ExerciseOrderByWithRelationInput
  }

  export type WorkoutExerciseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WorkoutExerciseWhereInput | WorkoutExerciseWhereInput[]
    OR?: WorkoutExerciseWhereInput[]
    NOT?: WorkoutExerciseWhereInput | WorkoutExerciseWhereInput[]
    sets?: IntFilter<"WorkoutExercise"> | number
    reps?: IntFilter<"WorkoutExercise"> | number
    weight?: FloatNullableFilter<"WorkoutExercise"> | number | null
    duration?: IntNullableFilter<"WorkoutExercise"> | number | null
    restTime?: IntNullableFilter<"WorkoutExercise"> | number | null
    notes?: StringNullableFilter<"WorkoutExercise"> | string | null
    createdAt?: DateTimeFilter<"WorkoutExercise"> | Date | string
    updatedAt?: DateTimeFilter<"WorkoutExercise"> | Date | string
    workoutId?: StringFilter<"WorkoutExercise"> | string
    exerciseId?: StringFilter<"WorkoutExercise"> | string
    personalBest?: BoolFilter<"WorkoutExercise"> | boolean
    workout?: XOR<WorkoutScalarRelationFilter, WorkoutWhereInput>
    exercise?: XOR<ExerciseScalarRelationFilter, ExerciseWhereInput>
  }, "id">

  export type WorkoutExerciseOrderByWithAggregationInput = {
    id?: SortOrder
    sets?: SortOrder
    reps?: SortOrder
    weight?: SortOrderInput | SortOrder
    duration?: SortOrderInput | SortOrder
    restTime?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    workoutId?: SortOrder
    exerciseId?: SortOrder
    personalBest?: SortOrder
    _count?: WorkoutExerciseCountOrderByAggregateInput
    _avg?: WorkoutExerciseAvgOrderByAggregateInput
    _max?: WorkoutExerciseMaxOrderByAggregateInput
    _min?: WorkoutExerciseMinOrderByAggregateInput
    _sum?: WorkoutExerciseSumOrderByAggregateInput
  }

  export type WorkoutExerciseScalarWhereWithAggregatesInput = {
    AND?: WorkoutExerciseScalarWhereWithAggregatesInput | WorkoutExerciseScalarWhereWithAggregatesInput[]
    OR?: WorkoutExerciseScalarWhereWithAggregatesInput[]
    NOT?: WorkoutExerciseScalarWhereWithAggregatesInput | WorkoutExerciseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WorkoutExercise"> | string
    sets?: IntWithAggregatesFilter<"WorkoutExercise"> | number
    reps?: IntWithAggregatesFilter<"WorkoutExercise"> | number
    weight?: FloatNullableWithAggregatesFilter<"WorkoutExercise"> | number | null
    duration?: IntNullableWithAggregatesFilter<"WorkoutExercise"> | number | null
    restTime?: IntNullableWithAggregatesFilter<"WorkoutExercise"> | number | null
    notes?: StringNullableWithAggregatesFilter<"WorkoutExercise"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"WorkoutExercise"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"WorkoutExercise"> | Date | string
    workoutId?: StringWithAggregatesFilter<"WorkoutExercise"> | string
    exerciseId?: StringWithAggregatesFilter<"WorkoutExercise"> | string
    personalBest?: BoolWithAggregatesFilter<"WorkoutExercise"> | boolean
  }

  export type GoalWhereInput = {
    AND?: GoalWhereInput | GoalWhereInput[]
    OR?: GoalWhereInput[]
    NOT?: GoalWhereInput | GoalWhereInput[]
    id?: StringFilter<"Goal"> | string
    name?: StringFilter<"Goal"> | string
    description?: StringNullableFilter<"Goal"> | string | null
    targetDate?: DateTimeNullableFilter<"Goal"> | Date | string | null
    isCompleted?: BoolFilter<"Goal"> | boolean
    type?: EnumGoalTypeFilter<"Goal"> | $Enums.GoalType
    metric?: StringNullableFilter<"Goal"> | string | null
    targetValue?: FloatNullableFilter<"Goal"> | number | null
    currentValue?: FloatNullableFilter<"Goal"> | number | null
    createdAt?: DateTimeFilter<"Goal"> | Date | string
    updatedAt?: DateTimeFilter<"Goal"> | Date | string
    userId?: StringFilter<"Goal"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type GoalOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    targetDate?: SortOrderInput | SortOrder
    isCompleted?: SortOrder
    type?: SortOrder
    metric?: SortOrderInput | SortOrder
    targetValue?: SortOrderInput | SortOrder
    currentValue?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type GoalWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GoalWhereInput | GoalWhereInput[]
    OR?: GoalWhereInput[]
    NOT?: GoalWhereInput | GoalWhereInput[]
    name?: StringFilter<"Goal"> | string
    description?: StringNullableFilter<"Goal"> | string | null
    targetDate?: DateTimeNullableFilter<"Goal"> | Date | string | null
    isCompleted?: BoolFilter<"Goal"> | boolean
    type?: EnumGoalTypeFilter<"Goal"> | $Enums.GoalType
    metric?: StringNullableFilter<"Goal"> | string | null
    targetValue?: FloatNullableFilter<"Goal"> | number | null
    currentValue?: FloatNullableFilter<"Goal"> | number | null
    createdAt?: DateTimeFilter<"Goal"> | Date | string
    updatedAt?: DateTimeFilter<"Goal"> | Date | string
    userId?: StringFilter<"Goal"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type GoalOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    targetDate?: SortOrderInput | SortOrder
    isCompleted?: SortOrder
    type?: SortOrder
    metric?: SortOrderInput | SortOrder
    targetValue?: SortOrderInput | SortOrder
    currentValue?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    _count?: GoalCountOrderByAggregateInput
    _avg?: GoalAvgOrderByAggregateInput
    _max?: GoalMaxOrderByAggregateInput
    _min?: GoalMinOrderByAggregateInput
    _sum?: GoalSumOrderByAggregateInput
  }

  export type GoalScalarWhereWithAggregatesInput = {
    AND?: GoalScalarWhereWithAggregatesInput | GoalScalarWhereWithAggregatesInput[]
    OR?: GoalScalarWhereWithAggregatesInput[]
    NOT?: GoalScalarWhereWithAggregatesInput | GoalScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Goal"> | string
    name?: StringWithAggregatesFilter<"Goal"> | string
    description?: StringNullableWithAggregatesFilter<"Goal"> | string | null
    targetDate?: DateTimeNullableWithAggregatesFilter<"Goal"> | Date | string | null
    isCompleted?: BoolWithAggregatesFilter<"Goal"> | boolean
    type?: EnumGoalTypeWithAggregatesFilter<"Goal"> | $Enums.GoalType
    metric?: StringNullableWithAggregatesFilter<"Goal"> | string | null
    targetValue?: FloatNullableWithAggregatesFilter<"Goal"> | number | null
    currentValue?: FloatNullableWithAggregatesFilter<"Goal"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Goal"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Goal"> | Date | string
    userId?: StringWithAggregatesFilter<"Goal"> | string
  }

  export type AchievementWhereInput = {
    AND?: AchievementWhereInput | AchievementWhereInput[]
    OR?: AchievementWhereInput[]
    NOT?: AchievementWhereInput | AchievementWhereInput[]
    id?: StringFilter<"Achievement"> | string
    name?: StringFilter<"Achievement"> | string
    description?: StringFilter<"Achievement"> | string
    image?: StringNullableFilter<"Achievement"> | string | null
    unlockedAt?: DateTimeNullableFilter<"Achievement"> | Date | string | null
    createdAt?: DateTimeFilter<"Achievement"> | Date | string
    updatedAt?: DateTimeFilter<"Achievement"> | Date | string
    userId?: StringFilter<"Achievement"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AchievementOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    image?: SortOrderInput | SortOrder
    unlockedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AchievementWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AchievementWhereInput | AchievementWhereInput[]
    OR?: AchievementWhereInput[]
    NOT?: AchievementWhereInput | AchievementWhereInput[]
    name?: StringFilter<"Achievement"> | string
    description?: StringFilter<"Achievement"> | string
    image?: StringNullableFilter<"Achievement"> | string | null
    unlockedAt?: DateTimeNullableFilter<"Achievement"> | Date | string | null
    createdAt?: DateTimeFilter<"Achievement"> | Date | string
    updatedAt?: DateTimeFilter<"Achievement"> | Date | string
    userId?: StringFilter<"Achievement"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type AchievementOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    image?: SortOrderInput | SortOrder
    unlockedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    _count?: AchievementCountOrderByAggregateInput
    _max?: AchievementMaxOrderByAggregateInput
    _min?: AchievementMinOrderByAggregateInput
  }

  export type AchievementScalarWhereWithAggregatesInput = {
    AND?: AchievementScalarWhereWithAggregatesInput | AchievementScalarWhereWithAggregatesInput[]
    OR?: AchievementScalarWhereWithAggregatesInput[]
    NOT?: AchievementScalarWhereWithAggregatesInput | AchievementScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Achievement"> | string
    name?: StringWithAggregatesFilter<"Achievement"> | string
    description?: StringWithAggregatesFilter<"Achievement"> | string
    image?: StringNullableWithAggregatesFilter<"Achievement"> | string | null
    unlockedAt?: DateTimeNullableWithAggregatesFilter<"Achievement"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Achievement"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Achievement"> | Date | string
    userId?: StringWithAggregatesFilter<"Achievement"> | string
  }

  export type WeightHistoryWhereInput = {
    AND?: WeightHistoryWhereInput | WeightHistoryWhereInput[]
    OR?: WeightHistoryWhereInput[]
    NOT?: WeightHistoryWhereInput | WeightHistoryWhereInput[]
    id?: StringFilter<"WeightHistory"> | string
    weight?: FloatFilter<"WeightHistory"> | number
    date?: DateTimeFilter<"WeightHistory"> | Date | string
    notes?: StringNullableFilter<"WeightHistory"> | string | null
    userId?: StringFilter<"WeightHistory"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type WeightHistoryOrderByWithRelationInput = {
    id?: SortOrder
    weight?: SortOrder
    date?: SortOrder
    notes?: SortOrderInput | SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type WeightHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WeightHistoryWhereInput | WeightHistoryWhereInput[]
    OR?: WeightHistoryWhereInput[]
    NOT?: WeightHistoryWhereInput | WeightHistoryWhereInput[]
    weight?: FloatFilter<"WeightHistory"> | number
    date?: DateTimeFilter<"WeightHistory"> | Date | string
    notes?: StringNullableFilter<"WeightHistory"> | string | null
    userId?: StringFilter<"WeightHistory"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type WeightHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    weight?: SortOrder
    date?: SortOrder
    notes?: SortOrderInput | SortOrder
    userId?: SortOrder
    _count?: WeightHistoryCountOrderByAggregateInput
    _avg?: WeightHistoryAvgOrderByAggregateInput
    _max?: WeightHistoryMaxOrderByAggregateInput
    _min?: WeightHistoryMinOrderByAggregateInput
    _sum?: WeightHistorySumOrderByAggregateInput
  }

  export type WeightHistoryScalarWhereWithAggregatesInput = {
    AND?: WeightHistoryScalarWhereWithAggregatesInput | WeightHistoryScalarWhereWithAggregatesInput[]
    OR?: WeightHistoryScalarWhereWithAggregatesInput[]
    NOT?: WeightHistoryScalarWhereWithAggregatesInput | WeightHistoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WeightHistory"> | string
    weight?: FloatWithAggregatesFilter<"WeightHistory"> | number
    date?: DateTimeWithAggregatesFilter<"WeightHistory"> | Date | string
    notes?: StringNullableWithAggregatesFilter<"WeightHistory"> | string | null
    userId?: StringWithAggregatesFilter<"WeightHistory"> | string
  }

  export type BodyMeasurementWhereInput = {
    AND?: BodyMeasurementWhereInput | BodyMeasurementWhereInput[]
    OR?: BodyMeasurementWhereInput[]
    NOT?: BodyMeasurementWhereInput | BodyMeasurementWhereInput[]
    id?: StringFilter<"BodyMeasurement"> | string
    date?: DateTimeFilter<"BodyMeasurement"> | Date | string
    type?: EnumMeasurementTypeFilter<"BodyMeasurement"> | $Enums.MeasurementType
    value?: FloatFilter<"BodyMeasurement"> | number
    notes?: StringNullableFilter<"BodyMeasurement"> | string | null
    userId?: StringFilter<"BodyMeasurement"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type BodyMeasurementOrderByWithRelationInput = {
    id?: SortOrder
    date?: SortOrder
    type?: SortOrder
    value?: SortOrder
    notes?: SortOrderInput | SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type BodyMeasurementWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BodyMeasurementWhereInput | BodyMeasurementWhereInput[]
    OR?: BodyMeasurementWhereInput[]
    NOT?: BodyMeasurementWhereInput | BodyMeasurementWhereInput[]
    date?: DateTimeFilter<"BodyMeasurement"> | Date | string
    type?: EnumMeasurementTypeFilter<"BodyMeasurement"> | $Enums.MeasurementType
    value?: FloatFilter<"BodyMeasurement"> | number
    notes?: StringNullableFilter<"BodyMeasurement"> | string | null
    userId?: StringFilter<"BodyMeasurement"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type BodyMeasurementOrderByWithAggregationInput = {
    id?: SortOrder
    date?: SortOrder
    type?: SortOrder
    value?: SortOrder
    notes?: SortOrderInput | SortOrder
    userId?: SortOrder
    _count?: BodyMeasurementCountOrderByAggregateInput
    _avg?: BodyMeasurementAvgOrderByAggregateInput
    _max?: BodyMeasurementMaxOrderByAggregateInput
    _min?: BodyMeasurementMinOrderByAggregateInput
    _sum?: BodyMeasurementSumOrderByAggregateInput
  }

  export type BodyMeasurementScalarWhereWithAggregatesInput = {
    AND?: BodyMeasurementScalarWhereWithAggregatesInput | BodyMeasurementScalarWhereWithAggregatesInput[]
    OR?: BodyMeasurementScalarWhereWithAggregatesInput[]
    NOT?: BodyMeasurementScalarWhereWithAggregatesInput | BodyMeasurementScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BodyMeasurement"> | string
    date?: DateTimeWithAggregatesFilter<"BodyMeasurement"> | Date | string
    type?: EnumMeasurementTypeWithAggregatesFilter<"BodyMeasurement"> | $Enums.MeasurementType
    value?: FloatWithAggregatesFilter<"BodyMeasurement"> | number
    notes?: StringNullableWithAggregatesFilter<"BodyMeasurement"> | string | null
    userId?: StringWithAggregatesFilter<"BodyMeasurement"> | string
  }

  export type AIWorkoutWhereInput = {
    AND?: AIWorkoutWhereInput | AIWorkoutWhereInput[]
    OR?: AIWorkoutWhereInput[]
    NOT?: AIWorkoutWhereInput | AIWorkoutWhereInput[]
    id?: StringFilter<"AIWorkout"> | string
    name?: StringFilter<"AIWorkout"> | string
    description?: StringNullableFilter<"AIWorkout"> | string | null
    fitnessLevel?: StringFilter<"AIWorkout"> | string
    goal?: StringFilter<"AIWorkout"> | string
    duration?: IntFilter<"AIWorkout"> | number
    equipment?: StringFilter<"AIWorkout"> | string
    focusArea?: StringFilter<"AIWorkout"> | string
    warmup?: JsonNullableFilter<"AIWorkout">
    cooldown?: JsonNullableFilter<"AIWorkout">
    createdAt?: DateTimeFilter<"AIWorkout"> | Date | string
    userId?: StringFilter<"AIWorkout"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    exercises?: AIWorkoutExerciseListRelationFilter
  }

  export type AIWorkoutOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    fitnessLevel?: SortOrder
    goal?: SortOrder
    duration?: SortOrder
    equipment?: SortOrder
    focusArea?: SortOrder
    warmup?: SortOrderInput | SortOrder
    cooldown?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    exercises?: AIWorkoutExerciseOrderByRelationAggregateInput
  }

  export type AIWorkoutWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AIWorkoutWhereInput | AIWorkoutWhereInput[]
    OR?: AIWorkoutWhereInput[]
    NOT?: AIWorkoutWhereInput | AIWorkoutWhereInput[]
    name?: StringFilter<"AIWorkout"> | string
    description?: StringNullableFilter<"AIWorkout"> | string | null
    fitnessLevel?: StringFilter<"AIWorkout"> | string
    goal?: StringFilter<"AIWorkout"> | string
    duration?: IntFilter<"AIWorkout"> | number
    equipment?: StringFilter<"AIWorkout"> | string
    focusArea?: StringFilter<"AIWorkout"> | string
    warmup?: JsonNullableFilter<"AIWorkout">
    cooldown?: JsonNullableFilter<"AIWorkout">
    createdAt?: DateTimeFilter<"AIWorkout"> | Date | string
    userId?: StringFilter<"AIWorkout"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    exercises?: AIWorkoutExerciseListRelationFilter
  }, "id">

  export type AIWorkoutOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    fitnessLevel?: SortOrder
    goal?: SortOrder
    duration?: SortOrder
    equipment?: SortOrder
    focusArea?: SortOrder
    warmup?: SortOrderInput | SortOrder
    cooldown?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    _count?: AIWorkoutCountOrderByAggregateInput
    _avg?: AIWorkoutAvgOrderByAggregateInput
    _max?: AIWorkoutMaxOrderByAggregateInput
    _min?: AIWorkoutMinOrderByAggregateInput
    _sum?: AIWorkoutSumOrderByAggregateInput
  }

  export type AIWorkoutScalarWhereWithAggregatesInput = {
    AND?: AIWorkoutScalarWhereWithAggregatesInput | AIWorkoutScalarWhereWithAggregatesInput[]
    OR?: AIWorkoutScalarWhereWithAggregatesInput[]
    NOT?: AIWorkoutScalarWhereWithAggregatesInput | AIWorkoutScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AIWorkout"> | string
    name?: StringWithAggregatesFilter<"AIWorkout"> | string
    description?: StringNullableWithAggregatesFilter<"AIWorkout"> | string | null
    fitnessLevel?: StringWithAggregatesFilter<"AIWorkout"> | string
    goal?: StringWithAggregatesFilter<"AIWorkout"> | string
    duration?: IntWithAggregatesFilter<"AIWorkout"> | number
    equipment?: StringWithAggregatesFilter<"AIWorkout"> | string
    focusArea?: StringWithAggregatesFilter<"AIWorkout"> | string
    warmup?: JsonNullableWithAggregatesFilter<"AIWorkout">
    cooldown?: JsonNullableWithAggregatesFilter<"AIWorkout">
    createdAt?: DateTimeWithAggregatesFilter<"AIWorkout"> | Date | string
    userId?: StringWithAggregatesFilter<"AIWorkout"> | string
  }

  export type AIWorkoutExerciseWhereInput = {
    AND?: AIWorkoutExerciseWhereInput | AIWorkoutExerciseWhereInput[]
    OR?: AIWorkoutExerciseWhereInput[]
    NOT?: AIWorkoutExerciseWhereInput | AIWorkoutExerciseWhereInput[]
    id?: StringFilter<"AIWorkoutExercise"> | string
    name?: StringFilter<"AIWorkoutExercise"> | string
    sets?: IntFilter<"AIWorkoutExercise"> | number
    reps?: IntNullableFilter<"AIWorkoutExercise"> | number | null
    duration?: IntNullableFilter<"AIWorkoutExercise"> | number | null
    rest?: IntNullableFilter<"AIWorkoutExercise"> | number | null
    instruction?: StringNullableFilter<"AIWorkoutExercise"> | string | null
    order?: IntFilter<"AIWorkoutExercise"> | number
    aiWorkoutId?: StringFilter<"AIWorkoutExercise"> | string
    exerciseId?: StringNullableFilter<"AIWorkoutExercise"> | string | null
    aiWorkout?: XOR<AIWorkoutScalarRelationFilter, AIWorkoutWhereInput>
    exercise?: XOR<ExerciseNullableScalarRelationFilter, ExerciseWhereInput> | null
  }

  export type AIWorkoutExerciseOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    sets?: SortOrder
    reps?: SortOrderInput | SortOrder
    duration?: SortOrderInput | SortOrder
    rest?: SortOrderInput | SortOrder
    instruction?: SortOrderInput | SortOrder
    order?: SortOrder
    aiWorkoutId?: SortOrder
    exerciseId?: SortOrderInput | SortOrder
    aiWorkout?: AIWorkoutOrderByWithRelationInput
    exercise?: ExerciseOrderByWithRelationInput
  }

  export type AIWorkoutExerciseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AIWorkoutExerciseWhereInput | AIWorkoutExerciseWhereInput[]
    OR?: AIWorkoutExerciseWhereInput[]
    NOT?: AIWorkoutExerciseWhereInput | AIWorkoutExerciseWhereInput[]
    name?: StringFilter<"AIWorkoutExercise"> | string
    sets?: IntFilter<"AIWorkoutExercise"> | number
    reps?: IntNullableFilter<"AIWorkoutExercise"> | number | null
    duration?: IntNullableFilter<"AIWorkoutExercise"> | number | null
    rest?: IntNullableFilter<"AIWorkoutExercise"> | number | null
    instruction?: StringNullableFilter<"AIWorkoutExercise"> | string | null
    order?: IntFilter<"AIWorkoutExercise"> | number
    aiWorkoutId?: StringFilter<"AIWorkoutExercise"> | string
    exerciseId?: StringNullableFilter<"AIWorkoutExercise"> | string | null
    aiWorkout?: XOR<AIWorkoutScalarRelationFilter, AIWorkoutWhereInput>
    exercise?: XOR<ExerciseNullableScalarRelationFilter, ExerciseWhereInput> | null
  }, "id">

  export type AIWorkoutExerciseOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    sets?: SortOrder
    reps?: SortOrderInput | SortOrder
    duration?: SortOrderInput | SortOrder
    rest?: SortOrderInput | SortOrder
    instruction?: SortOrderInput | SortOrder
    order?: SortOrder
    aiWorkoutId?: SortOrder
    exerciseId?: SortOrderInput | SortOrder
    _count?: AIWorkoutExerciseCountOrderByAggregateInput
    _avg?: AIWorkoutExerciseAvgOrderByAggregateInput
    _max?: AIWorkoutExerciseMaxOrderByAggregateInput
    _min?: AIWorkoutExerciseMinOrderByAggregateInput
    _sum?: AIWorkoutExerciseSumOrderByAggregateInput
  }

  export type AIWorkoutExerciseScalarWhereWithAggregatesInput = {
    AND?: AIWorkoutExerciseScalarWhereWithAggregatesInput | AIWorkoutExerciseScalarWhereWithAggregatesInput[]
    OR?: AIWorkoutExerciseScalarWhereWithAggregatesInput[]
    NOT?: AIWorkoutExerciseScalarWhereWithAggregatesInput | AIWorkoutExerciseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AIWorkoutExercise"> | string
    name?: StringWithAggregatesFilter<"AIWorkoutExercise"> | string
    sets?: IntWithAggregatesFilter<"AIWorkoutExercise"> | number
    reps?: IntNullableWithAggregatesFilter<"AIWorkoutExercise"> | number | null
    duration?: IntNullableWithAggregatesFilter<"AIWorkoutExercise"> | number | null
    rest?: IntNullableWithAggregatesFilter<"AIWorkoutExercise"> | number | null
    instruction?: StringNullableWithAggregatesFilter<"AIWorkoutExercise"> | string | null
    order?: IntWithAggregatesFilter<"AIWorkoutExercise"> | number
    aiWorkoutId?: StringWithAggregatesFilter<"AIWorkoutExercise"> | string
    exerciseId?: StringNullableWithAggregatesFilter<"AIWorkoutExercise"> | string | null
  }

  export type UserSettingsWhereInput = {
    AND?: UserSettingsWhereInput | UserSettingsWhereInput[]
    OR?: UserSettingsWhereInput[]
    NOT?: UserSettingsWhereInput | UserSettingsWhereInput[]
    id?: StringFilter<"UserSettings"> | string
    theme?: StringFilter<"UserSettings"> | string
    units?: StringFilter<"UserSettings"> | string
    language?: StringFilter<"UserSettings"> | string
    privacyLevel?: StringFilter<"UserSettings"> | string
    workoutReminders?: BoolFilter<"UserSettings"> | boolean
    progressUpdates?: BoolFilter<"UserSettings"> | boolean
    achievementAlerts?: BoolFilter<"UserSettings"> | boolean
    tipNotifications?: BoolFilter<"UserSettings"> | boolean
    userId?: StringFilter<"UserSettings"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserSettingsOrderByWithRelationInput = {
    id?: SortOrder
    theme?: SortOrder
    units?: SortOrder
    language?: SortOrder
    privacyLevel?: SortOrder
    workoutReminders?: SortOrder
    progressUpdates?: SortOrder
    achievementAlerts?: SortOrder
    tipNotifications?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type UserSettingsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: UserSettingsWhereInput | UserSettingsWhereInput[]
    OR?: UserSettingsWhereInput[]
    NOT?: UserSettingsWhereInput | UserSettingsWhereInput[]
    theme?: StringFilter<"UserSettings"> | string
    units?: StringFilter<"UserSettings"> | string
    language?: StringFilter<"UserSettings"> | string
    privacyLevel?: StringFilter<"UserSettings"> | string
    workoutReminders?: BoolFilter<"UserSettings"> | boolean
    progressUpdates?: BoolFilter<"UserSettings"> | boolean
    achievementAlerts?: BoolFilter<"UserSettings"> | boolean
    tipNotifications?: BoolFilter<"UserSettings"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type UserSettingsOrderByWithAggregationInput = {
    id?: SortOrder
    theme?: SortOrder
    units?: SortOrder
    language?: SortOrder
    privacyLevel?: SortOrder
    workoutReminders?: SortOrder
    progressUpdates?: SortOrder
    achievementAlerts?: SortOrder
    tipNotifications?: SortOrder
    userId?: SortOrder
    _count?: UserSettingsCountOrderByAggregateInput
    _max?: UserSettingsMaxOrderByAggregateInput
    _min?: UserSettingsMinOrderByAggregateInput
  }

  export type UserSettingsScalarWhereWithAggregatesInput = {
    AND?: UserSettingsScalarWhereWithAggregatesInput | UserSettingsScalarWhereWithAggregatesInput[]
    OR?: UserSettingsScalarWhereWithAggregatesInput[]
    NOT?: UserSettingsScalarWhereWithAggregatesInput | UserSettingsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserSettings"> | string
    theme?: StringWithAggregatesFilter<"UserSettings"> | string
    units?: StringWithAggregatesFilter<"UserSettings"> | string
    language?: StringWithAggregatesFilter<"UserSettings"> | string
    privacyLevel?: StringWithAggregatesFilter<"UserSettings"> | string
    workoutReminders?: BoolWithAggregatesFilter<"UserSettings"> | boolean
    progressUpdates?: BoolWithAggregatesFilter<"UserSettings"> | boolean
    achievementAlerts?: BoolWithAggregatesFilter<"UserSettings"> | boolean
    tipNotifications?: BoolWithAggregatesFilter<"UserSettings"> | boolean
    userId?: StringWithAggregatesFilter<"UserSettings"> | string
  }

  export type ProgressStatWhereInput = {
    AND?: ProgressStatWhereInput | ProgressStatWhereInput[]
    OR?: ProgressStatWhereInput[]
    NOT?: ProgressStatWhereInput | ProgressStatWhereInput[]
    id?: StringFilter<"ProgressStat"> | string
    date?: DateTimeFilter<"ProgressStat"> | Date | string
    statType?: EnumStatTypeFilter<"ProgressStat"> | $Enums.StatType
    value?: FloatFilter<"ProgressStat"> | number
    userId?: StringFilter<"ProgressStat"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ProgressStatOrderByWithRelationInput = {
    id?: SortOrder
    date?: SortOrder
    statType?: SortOrder
    value?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ProgressStatWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProgressStatWhereInput | ProgressStatWhereInput[]
    OR?: ProgressStatWhereInput[]
    NOT?: ProgressStatWhereInput | ProgressStatWhereInput[]
    date?: DateTimeFilter<"ProgressStat"> | Date | string
    statType?: EnumStatTypeFilter<"ProgressStat"> | $Enums.StatType
    value?: FloatFilter<"ProgressStat"> | number
    userId?: StringFilter<"ProgressStat"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ProgressStatOrderByWithAggregationInput = {
    id?: SortOrder
    date?: SortOrder
    statType?: SortOrder
    value?: SortOrder
    userId?: SortOrder
    _count?: ProgressStatCountOrderByAggregateInput
    _avg?: ProgressStatAvgOrderByAggregateInput
    _max?: ProgressStatMaxOrderByAggregateInput
    _min?: ProgressStatMinOrderByAggregateInput
    _sum?: ProgressStatSumOrderByAggregateInput
  }

  export type ProgressStatScalarWhereWithAggregatesInput = {
    AND?: ProgressStatScalarWhereWithAggregatesInput | ProgressStatScalarWhereWithAggregatesInput[]
    OR?: ProgressStatScalarWhereWithAggregatesInput[]
    NOT?: ProgressStatScalarWhereWithAggregatesInput | ProgressStatScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProgressStat"> | string
    date?: DateTimeWithAggregatesFilter<"ProgressStat"> | Date | string
    statType?: EnumStatTypeWithAggregatesFilter<"ProgressStat"> | $Enums.StatType
    value?: FloatWithAggregatesFilter<"ProgressStat"> | number
    userId?: StringWithAggregatesFilter<"ProgressStat"> | string
  }

  export type WorkoutStreakWhereInput = {
    AND?: WorkoutStreakWhereInput | WorkoutStreakWhereInput[]
    OR?: WorkoutStreakWhereInput[]
    NOT?: WorkoutStreakWhereInput | WorkoutStreakWhereInput[]
    id?: StringFilter<"WorkoutStreak"> | string
    currentStreak?: IntFilter<"WorkoutStreak"> | number
    longestStreak?: IntFilter<"WorkoutStreak"> | number
    lastWorkoutDate?: DateTimeNullableFilter<"WorkoutStreak"> | Date | string | null
    userId?: StringFilter<"WorkoutStreak"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type WorkoutStreakOrderByWithRelationInput = {
    id?: SortOrder
    currentStreak?: SortOrder
    longestStreak?: SortOrder
    lastWorkoutDate?: SortOrderInput | SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type WorkoutStreakWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: WorkoutStreakWhereInput | WorkoutStreakWhereInput[]
    OR?: WorkoutStreakWhereInput[]
    NOT?: WorkoutStreakWhereInput | WorkoutStreakWhereInput[]
    currentStreak?: IntFilter<"WorkoutStreak"> | number
    longestStreak?: IntFilter<"WorkoutStreak"> | number
    lastWorkoutDate?: DateTimeNullableFilter<"WorkoutStreak"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type WorkoutStreakOrderByWithAggregationInput = {
    id?: SortOrder
    currentStreak?: SortOrder
    longestStreak?: SortOrder
    lastWorkoutDate?: SortOrderInput | SortOrder
    userId?: SortOrder
    _count?: WorkoutStreakCountOrderByAggregateInput
    _avg?: WorkoutStreakAvgOrderByAggregateInput
    _max?: WorkoutStreakMaxOrderByAggregateInput
    _min?: WorkoutStreakMinOrderByAggregateInput
    _sum?: WorkoutStreakSumOrderByAggregateInput
  }

  export type WorkoutStreakScalarWhereWithAggregatesInput = {
    AND?: WorkoutStreakScalarWhereWithAggregatesInput | WorkoutStreakScalarWhereWithAggregatesInput[]
    OR?: WorkoutStreakScalarWhereWithAggregatesInput[]
    NOT?: WorkoutStreakScalarWhereWithAggregatesInput | WorkoutStreakScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WorkoutStreak"> | string
    currentStreak?: IntWithAggregatesFilter<"WorkoutStreak"> | number
    longestStreak?: IntWithAggregatesFilter<"WorkoutStreak"> | number
    lastWorkoutDate?: DateTimeNullableWithAggregatesFilter<"WorkoutStreak"> | Date | string | null
    userId?: StringWithAggregatesFilter<"WorkoutStreak"> | string
  }

  export type UserCreateInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    image?: string | null
    height?: number | null
    weight?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    workouts?: WorkoutCreateNestedManyWithoutUserInput
    goals?: GoalCreateNestedManyWithoutUserInput
    achievements?: AchievementCreateNestedManyWithoutUserInput
    weightHistory?: WeightHistoryCreateNestedManyWithoutUserInput
    bodyMeasurements?: BodyMeasurementCreateNestedManyWithoutUserInput
    aiWorkouts?: AIWorkoutCreateNestedManyWithoutUserInput
    userSettings?: UserSettingsCreateNestedOneWithoutUserInput
    progressStats?: ProgressStatCreateNestedManyWithoutUserInput
    workoutStreak?: WorkoutStreakCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    image?: string | null
    height?: number | null
    weight?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    workouts?: WorkoutUncheckedCreateNestedManyWithoutUserInput
    goals?: GoalUncheckedCreateNestedManyWithoutUserInput
    achievements?: AchievementUncheckedCreateNestedManyWithoutUserInput
    weightHistory?: WeightHistoryUncheckedCreateNestedManyWithoutUserInput
    bodyMeasurements?: BodyMeasurementUncheckedCreateNestedManyWithoutUserInput
    aiWorkouts?: AIWorkoutUncheckedCreateNestedManyWithoutUserInput
    userSettings?: UserSettingsUncheckedCreateNestedOneWithoutUserInput
    progressStats?: ProgressStatUncheckedCreateNestedManyWithoutUserInput
    workoutStreak?: WorkoutStreakUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workouts?: WorkoutUpdateManyWithoutUserNestedInput
    goals?: GoalUpdateManyWithoutUserNestedInput
    achievements?: AchievementUpdateManyWithoutUserNestedInput
    weightHistory?: WeightHistoryUpdateManyWithoutUserNestedInput
    bodyMeasurements?: BodyMeasurementUpdateManyWithoutUserNestedInput
    aiWorkouts?: AIWorkoutUpdateManyWithoutUserNestedInput
    userSettings?: UserSettingsUpdateOneWithoutUserNestedInput
    progressStats?: ProgressStatUpdateManyWithoutUserNestedInput
    workoutStreak?: WorkoutStreakUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workouts?: WorkoutUncheckedUpdateManyWithoutUserNestedInput
    goals?: GoalUncheckedUpdateManyWithoutUserNestedInput
    achievements?: AchievementUncheckedUpdateManyWithoutUserNestedInput
    weightHistory?: WeightHistoryUncheckedUpdateManyWithoutUserNestedInput
    bodyMeasurements?: BodyMeasurementUncheckedUpdateManyWithoutUserNestedInput
    aiWorkouts?: AIWorkoutUncheckedUpdateManyWithoutUserNestedInput
    userSettings?: UserSettingsUncheckedUpdateOneWithoutUserNestedInput
    progressStats?: ProgressStatUncheckedUpdateManyWithoutUserNestedInput
    workoutStreak?: WorkoutStreakUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    image?: string | null
    height?: number | null
    weight?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkoutCreateInput = {
    id?: string
    name: string
    date?: Date | string
    duration?: number | null
    notes?: string | null
    isCompleted?: boolean
    status?: $Enums.WorkoutStatus
    startedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    category?: string | null
    user: UserCreateNestedOneWithoutWorkoutsInput
    exercises?: WorkoutExerciseCreateNestedManyWithoutWorkoutInput
  }

  export type WorkoutUncheckedCreateInput = {
    id?: string
    name: string
    date?: Date | string
    duration?: number | null
    notes?: string | null
    isCompleted?: boolean
    status?: $Enums.WorkoutStatus
    startedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    category?: string | null
    exercises?: WorkoutExerciseUncheckedCreateNestedManyWithoutWorkoutInput
  }

  export type WorkoutUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumWorkoutStatusFieldUpdateOperationsInput | $Enums.WorkoutStatus
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutWorkoutsNestedInput
    exercises?: WorkoutExerciseUpdateManyWithoutWorkoutNestedInput
  }

  export type WorkoutUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumWorkoutStatusFieldUpdateOperationsInput | $Enums.WorkoutStatus
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    exercises?: WorkoutExerciseUncheckedUpdateManyWithoutWorkoutNestedInput
  }

  export type WorkoutCreateManyInput = {
    id?: string
    name: string
    date?: Date | string
    duration?: number | null
    notes?: string | null
    isCompleted?: boolean
    status?: $Enums.WorkoutStatus
    startedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    category?: string | null
  }

  export type WorkoutUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumWorkoutStatusFieldUpdateOperationsInput | $Enums.WorkoutStatus
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WorkoutUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumWorkoutStatusFieldUpdateOperationsInput | $Enums.WorkoutStatus
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ExerciseCreateInput = {
    id?: string
    name: string
    description?: string | null
    muscleGroup: string
    equipment?: string | null
    instructions?: string | null
    videoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    workoutExercises?: WorkoutExerciseCreateNestedManyWithoutExerciseInput
    aiWorkoutExercises?: AIWorkoutExerciseCreateNestedManyWithoutExerciseInput
  }

  export type ExerciseUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    muscleGroup: string
    equipment?: string | null
    instructions?: string | null
    videoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    workoutExercises?: WorkoutExerciseUncheckedCreateNestedManyWithoutExerciseInput
    aiWorkoutExercises?: AIWorkoutExerciseUncheckedCreateNestedManyWithoutExerciseInput
  }

  export type ExerciseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    muscleGroup?: StringFieldUpdateOperationsInput | string
    equipment?: NullableStringFieldUpdateOperationsInput | string | null
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workoutExercises?: WorkoutExerciseUpdateManyWithoutExerciseNestedInput
    aiWorkoutExercises?: AIWorkoutExerciseUpdateManyWithoutExerciseNestedInput
  }

  export type ExerciseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    muscleGroup?: StringFieldUpdateOperationsInput | string
    equipment?: NullableStringFieldUpdateOperationsInput | string | null
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workoutExercises?: WorkoutExerciseUncheckedUpdateManyWithoutExerciseNestedInput
    aiWorkoutExercises?: AIWorkoutExerciseUncheckedUpdateManyWithoutExerciseNestedInput
  }

  export type ExerciseCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    muscleGroup: string
    equipment?: string | null
    instructions?: string | null
    videoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ExerciseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    muscleGroup?: StringFieldUpdateOperationsInput | string
    equipment?: NullableStringFieldUpdateOperationsInput | string | null
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExerciseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    muscleGroup?: StringFieldUpdateOperationsInput | string
    equipment?: NullableStringFieldUpdateOperationsInput | string | null
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkoutExerciseCreateInput = {
    id?: string
    sets: number
    reps: number
    weight?: number | null
    duration?: number | null
    restTime?: number | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    personalBest?: boolean
    workout: WorkoutCreateNestedOneWithoutExercisesInput
    exercise: ExerciseCreateNestedOneWithoutWorkoutExercisesInput
  }

  export type WorkoutExerciseUncheckedCreateInput = {
    id?: string
    sets: number
    reps: number
    weight?: number | null
    duration?: number | null
    restTime?: number | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    workoutId: string
    exerciseId: string
    personalBest?: boolean
  }

  export type WorkoutExerciseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sets?: IntFieldUpdateOperationsInput | number
    reps?: IntFieldUpdateOperationsInput | number
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    restTime?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    personalBest?: BoolFieldUpdateOperationsInput | boolean
    workout?: WorkoutUpdateOneRequiredWithoutExercisesNestedInput
    exercise?: ExerciseUpdateOneRequiredWithoutWorkoutExercisesNestedInput
  }

  export type WorkoutExerciseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sets?: IntFieldUpdateOperationsInput | number
    reps?: IntFieldUpdateOperationsInput | number
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    restTime?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workoutId?: StringFieldUpdateOperationsInput | string
    exerciseId?: StringFieldUpdateOperationsInput | string
    personalBest?: BoolFieldUpdateOperationsInput | boolean
  }

  export type WorkoutExerciseCreateManyInput = {
    id?: string
    sets: number
    reps: number
    weight?: number | null
    duration?: number | null
    restTime?: number | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    workoutId: string
    exerciseId: string
    personalBest?: boolean
  }

  export type WorkoutExerciseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sets?: IntFieldUpdateOperationsInput | number
    reps?: IntFieldUpdateOperationsInput | number
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    restTime?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    personalBest?: BoolFieldUpdateOperationsInput | boolean
  }

  export type WorkoutExerciseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sets?: IntFieldUpdateOperationsInput | number
    reps?: IntFieldUpdateOperationsInput | number
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    restTime?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workoutId?: StringFieldUpdateOperationsInput | string
    exerciseId?: StringFieldUpdateOperationsInput | string
    personalBest?: BoolFieldUpdateOperationsInput | boolean
  }

  export type GoalCreateInput = {
    id?: string
    name: string
    description?: string | null
    targetDate?: Date | string | null
    isCompleted?: boolean
    type: $Enums.GoalType
    metric?: string | null
    targetValue?: number | null
    currentValue?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutGoalsInput
  }

  export type GoalUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    targetDate?: Date | string | null
    isCompleted?: boolean
    type: $Enums.GoalType
    metric?: string | null
    targetValue?: number | null
    currentValue?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type GoalUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    targetDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    type?: EnumGoalTypeFieldUpdateOperationsInput | $Enums.GoalType
    metric?: NullableStringFieldUpdateOperationsInput | string | null
    targetValue?: NullableFloatFieldUpdateOperationsInput | number | null
    currentValue?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutGoalsNestedInput
  }

  export type GoalUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    targetDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    type?: EnumGoalTypeFieldUpdateOperationsInput | $Enums.GoalType
    metric?: NullableStringFieldUpdateOperationsInput | string | null
    targetValue?: NullableFloatFieldUpdateOperationsInput | number | null
    currentValue?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type GoalCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    targetDate?: Date | string | null
    isCompleted?: boolean
    type: $Enums.GoalType
    metric?: string | null
    targetValue?: number | null
    currentValue?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type GoalUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    targetDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    type?: EnumGoalTypeFieldUpdateOperationsInput | $Enums.GoalType
    metric?: NullableStringFieldUpdateOperationsInput | string | null
    targetValue?: NullableFloatFieldUpdateOperationsInput | number | null
    currentValue?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GoalUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    targetDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    type?: EnumGoalTypeFieldUpdateOperationsInput | $Enums.GoalType
    metric?: NullableStringFieldUpdateOperationsInput | string | null
    targetValue?: NullableFloatFieldUpdateOperationsInput | number | null
    currentValue?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type AchievementCreateInput = {
    id?: string
    name: string
    description: string
    image?: string | null
    unlockedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutAchievementsInput
  }

  export type AchievementUncheckedCreateInput = {
    id?: string
    name: string
    description: string
    image?: string | null
    unlockedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type AchievementUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    unlockedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAchievementsNestedInput
  }

  export type AchievementUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    unlockedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type AchievementCreateManyInput = {
    id?: string
    name: string
    description: string
    image?: string | null
    unlockedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type AchievementUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    unlockedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AchievementUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    unlockedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type WeightHistoryCreateInput = {
    id?: string
    weight: number
    date?: Date | string
    notes?: string | null
    user: UserCreateNestedOneWithoutWeightHistoryInput
  }

  export type WeightHistoryUncheckedCreateInput = {
    id?: string
    weight: number
    date?: Date | string
    notes?: string | null
    userId: string
  }

  export type WeightHistoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutWeightHistoryNestedInput
  }

  export type WeightHistoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type WeightHistoryCreateManyInput = {
    id?: string
    weight: number
    date?: Date | string
    notes?: string | null
    userId: string
  }

  export type WeightHistoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WeightHistoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type BodyMeasurementCreateInput = {
    id?: string
    date?: Date | string
    type: $Enums.MeasurementType
    value: number
    notes?: string | null
    user: UserCreateNestedOneWithoutBodyMeasurementsInput
  }

  export type BodyMeasurementUncheckedCreateInput = {
    id?: string
    date?: Date | string
    type: $Enums.MeasurementType
    value: number
    notes?: string | null
    userId: string
  }

  export type BodyMeasurementUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumMeasurementTypeFieldUpdateOperationsInput | $Enums.MeasurementType
    value?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutBodyMeasurementsNestedInput
  }

  export type BodyMeasurementUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumMeasurementTypeFieldUpdateOperationsInput | $Enums.MeasurementType
    value?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type BodyMeasurementCreateManyInput = {
    id?: string
    date?: Date | string
    type: $Enums.MeasurementType
    value: number
    notes?: string | null
    userId: string
  }

  export type BodyMeasurementUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumMeasurementTypeFieldUpdateOperationsInput | $Enums.MeasurementType
    value?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BodyMeasurementUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumMeasurementTypeFieldUpdateOperationsInput | $Enums.MeasurementType
    value?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type AIWorkoutCreateInput = {
    id?: string
    name: string
    description?: string | null
    fitnessLevel: string
    goal: string
    duration: number
    equipment: string
    focusArea: string
    warmup?: NullableJsonNullValueInput | InputJsonValue
    cooldown?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutAiWorkoutsInput
    exercises?: AIWorkoutExerciseCreateNestedManyWithoutAiWorkoutInput
  }

  export type AIWorkoutUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    fitnessLevel: string
    goal: string
    duration: number
    equipment: string
    focusArea: string
    warmup?: NullableJsonNullValueInput | InputJsonValue
    cooldown?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    userId: string
    exercises?: AIWorkoutExerciseUncheckedCreateNestedManyWithoutAiWorkoutInput
  }

  export type AIWorkoutUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    fitnessLevel?: StringFieldUpdateOperationsInput | string
    goal?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    equipment?: StringFieldUpdateOperationsInput | string
    focusArea?: StringFieldUpdateOperationsInput | string
    warmup?: NullableJsonNullValueInput | InputJsonValue
    cooldown?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAiWorkoutsNestedInput
    exercises?: AIWorkoutExerciseUpdateManyWithoutAiWorkoutNestedInput
  }

  export type AIWorkoutUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    fitnessLevel?: StringFieldUpdateOperationsInput | string
    goal?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    equipment?: StringFieldUpdateOperationsInput | string
    focusArea?: StringFieldUpdateOperationsInput | string
    warmup?: NullableJsonNullValueInput | InputJsonValue
    cooldown?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    exercises?: AIWorkoutExerciseUncheckedUpdateManyWithoutAiWorkoutNestedInput
  }

  export type AIWorkoutCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    fitnessLevel: string
    goal: string
    duration: number
    equipment: string
    focusArea: string
    warmup?: NullableJsonNullValueInput | InputJsonValue
    cooldown?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    userId: string
  }

  export type AIWorkoutUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    fitnessLevel?: StringFieldUpdateOperationsInput | string
    goal?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    equipment?: StringFieldUpdateOperationsInput | string
    focusArea?: StringFieldUpdateOperationsInput | string
    warmup?: NullableJsonNullValueInput | InputJsonValue
    cooldown?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AIWorkoutUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    fitnessLevel?: StringFieldUpdateOperationsInput | string
    goal?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    equipment?: StringFieldUpdateOperationsInput | string
    focusArea?: StringFieldUpdateOperationsInput | string
    warmup?: NullableJsonNullValueInput | InputJsonValue
    cooldown?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type AIWorkoutExerciseCreateInput = {
    id?: string
    name: string
    sets: number
    reps?: number | null
    duration?: number | null
    rest?: number | null
    instruction?: string | null
    order: number
    aiWorkout: AIWorkoutCreateNestedOneWithoutExercisesInput
    exercise?: ExerciseCreateNestedOneWithoutAiWorkoutExercisesInput
  }

  export type AIWorkoutExerciseUncheckedCreateInput = {
    id?: string
    name: string
    sets: number
    reps?: number | null
    duration?: number | null
    rest?: number | null
    instruction?: string | null
    order: number
    aiWorkoutId: string
    exerciseId?: string | null
  }

  export type AIWorkoutExerciseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sets?: IntFieldUpdateOperationsInput | number
    reps?: NullableIntFieldUpdateOperationsInput | number | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    rest?: NullableIntFieldUpdateOperationsInput | number | null
    instruction?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    aiWorkout?: AIWorkoutUpdateOneRequiredWithoutExercisesNestedInput
    exercise?: ExerciseUpdateOneWithoutAiWorkoutExercisesNestedInput
  }

  export type AIWorkoutExerciseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sets?: IntFieldUpdateOperationsInput | number
    reps?: NullableIntFieldUpdateOperationsInput | number | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    rest?: NullableIntFieldUpdateOperationsInput | number | null
    instruction?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    aiWorkoutId?: StringFieldUpdateOperationsInput | string
    exerciseId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AIWorkoutExerciseCreateManyInput = {
    id?: string
    name: string
    sets: number
    reps?: number | null
    duration?: number | null
    rest?: number | null
    instruction?: string | null
    order: number
    aiWorkoutId: string
    exerciseId?: string | null
  }

  export type AIWorkoutExerciseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sets?: IntFieldUpdateOperationsInput | number
    reps?: NullableIntFieldUpdateOperationsInput | number | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    rest?: NullableIntFieldUpdateOperationsInput | number | null
    instruction?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
  }

  export type AIWorkoutExerciseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sets?: IntFieldUpdateOperationsInput | number
    reps?: NullableIntFieldUpdateOperationsInput | number | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    rest?: NullableIntFieldUpdateOperationsInput | number | null
    instruction?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    aiWorkoutId?: StringFieldUpdateOperationsInput | string
    exerciseId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserSettingsCreateInput = {
    id?: string
    theme?: string
    units?: string
    language?: string
    privacyLevel?: string
    workoutReminders?: boolean
    progressUpdates?: boolean
    achievementAlerts?: boolean
    tipNotifications?: boolean
    user: UserCreateNestedOneWithoutUserSettingsInput
  }

  export type UserSettingsUncheckedCreateInput = {
    id?: string
    theme?: string
    units?: string
    language?: string
    privacyLevel?: string
    workoutReminders?: boolean
    progressUpdates?: boolean
    achievementAlerts?: boolean
    tipNotifications?: boolean
    userId: string
  }

  export type UserSettingsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    theme?: StringFieldUpdateOperationsInput | string
    units?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    privacyLevel?: StringFieldUpdateOperationsInput | string
    workoutReminders?: BoolFieldUpdateOperationsInput | boolean
    progressUpdates?: BoolFieldUpdateOperationsInput | boolean
    achievementAlerts?: BoolFieldUpdateOperationsInput | boolean
    tipNotifications?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutUserSettingsNestedInput
  }

  export type UserSettingsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    theme?: StringFieldUpdateOperationsInput | string
    units?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    privacyLevel?: StringFieldUpdateOperationsInput | string
    workoutReminders?: BoolFieldUpdateOperationsInput | boolean
    progressUpdates?: BoolFieldUpdateOperationsInput | boolean
    achievementAlerts?: BoolFieldUpdateOperationsInput | boolean
    tipNotifications?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type UserSettingsCreateManyInput = {
    id?: string
    theme?: string
    units?: string
    language?: string
    privacyLevel?: string
    workoutReminders?: boolean
    progressUpdates?: boolean
    achievementAlerts?: boolean
    tipNotifications?: boolean
    userId: string
  }

  export type UserSettingsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    theme?: StringFieldUpdateOperationsInput | string
    units?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    privacyLevel?: StringFieldUpdateOperationsInput | string
    workoutReminders?: BoolFieldUpdateOperationsInput | boolean
    progressUpdates?: BoolFieldUpdateOperationsInput | boolean
    achievementAlerts?: BoolFieldUpdateOperationsInput | boolean
    tipNotifications?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserSettingsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    theme?: StringFieldUpdateOperationsInput | string
    units?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    privacyLevel?: StringFieldUpdateOperationsInput | string
    workoutReminders?: BoolFieldUpdateOperationsInput | boolean
    progressUpdates?: BoolFieldUpdateOperationsInput | boolean
    achievementAlerts?: BoolFieldUpdateOperationsInput | boolean
    tipNotifications?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ProgressStatCreateInput = {
    id?: string
    date?: Date | string
    statType: $Enums.StatType
    value: number
    user: UserCreateNestedOneWithoutProgressStatsInput
  }

  export type ProgressStatUncheckedCreateInput = {
    id?: string
    date?: Date | string
    statType: $Enums.StatType
    value: number
    userId: string
  }

  export type ProgressStatUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    statType?: EnumStatTypeFieldUpdateOperationsInput | $Enums.StatType
    value?: FloatFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutProgressStatsNestedInput
  }

  export type ProgressStatUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    statType?: EnumStatTypeFieldUpdateOperationsInput | $Enums.StatType
    value?: FloatFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ProgressStatCreateManyInput = {
    id?: string
    date?: Date | string
    statType: $Enums.StatType
    value: number
    userId: string
  }

  export type ProgressStatUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    statType?: EnumStatTypeFieldUpdateOperationsInput | $Enums.StatType
    value?: FloatFieldUpdateOperationsInput | number
  }

  export type ProgressStatUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    statType?: EnumStatTypeFieldUpdateOperationsInput | $Enums.StatType
    value?: FloatFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type WorkoutStreakCreateInput = {
    id?: string
    currentStreak?: number
    longestStreak?: number
    lastWorkoutDate?: Date | string | null
    user: UserCreateNestedOneWithoutWorkoutStreakInput
  }

  export type WorkoutStreakUncheckedCreateInput = {
    id?: string
    currentStreak?: number
    longestStreak?: number
    lastWorkoutDate?: Date | string | null
    userId: string
  }

  export type WorkoutStreakUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    currentStreak?: IntFieldUpdateOperationsInput | number
    longestStreak?: IntFieldUpdateOperationsInput | number
    lastWorkoutDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutWorkoutStreakNestedInput
  }

  export type WorkoutStreakUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    currentStreak?: IntFieldUpdateOperationsInput | number
    longestStreak?: IntFieldUpdateOperationsInput | number
    lastWorkoutDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type WorkoutStreakCreateManyInput = {
    id?: string
    currentStreak?: number
    longestStreak?: number
    lastWorkoutDate?: Date | string | null
    userId: string
  }

  export type WorkoutStreakUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    currentStreak?: IntFieldUpdateOperationsInput | number
    longestStreak?: IntFieldUpdateOperationsInput | number
    lastWorkoutDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type WorkoutStreakUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    currentStreak?: IntFieldUpdateOperationsInput | number
    longestStreak?: IntFieldUpdateOperationsInput | number
    lastWorkoutDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: StringFieldUpdateOperationsInput | string
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

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
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

  export type WorkoutListRelationFilter = {
    every?: WorkoutWhereInput
    some?: WorkoutWhereInput
    none?: WorkoutWhereInput
  }

  export type GoalListRelationFilter = {
    every?: GoalWhereInput
    some?: GoalWhereInput
    none?: GoalWhereInput
  }

  export type AchievementListRelationFilter = {
    every?: AchievementWhereInput
    some?: AchievementWhereInput
    none?: AchievementWhereInput
  }

  export type WeightHistoryListRelationFilter = {
    every?: WeightHistoryWhereInput
    some?: WeightHistoryWhereInput
    none?: WeightHistoryWhereInput
  }

  export type BodyMeasurementListRelationFilter = {
    every?: BodyMeasurementWhereInput
    some?: BodyMeasurementWhereInput
    none?: BodyMeasurementWhereInput
  }

  export type AIWorkoutListRelationFilter = {
    every?: AIWorkoutWhereInput
    some?: AIWorkoutWhereInput
    none?: AIWorkoutWhereInput
  }

  export type UserSettingsNullableScalarRelationFilter = {
    is?: UserSettingsWhereInput | null
    isNot?: UserSettingsWhereInput | null
  }

  export type ProgressStatListRelationFilter = {
    every?: ProgressStatWhereInput
    some?: ProgressStatWhereInput
    none?: ProgressStatWhereInput
  }

  export type WorkoutStreakNullableScalarRelationFilter = {
    is?: WorkoutStreakWhereInput | null
    isNot?: WorkoutStreakWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type WorkoutOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GoalOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AchievementOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WeightHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BodyMeasurementOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AIWorkoutOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProgressStatOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    image?: SortOrder
    height?: SortOrder
    weight?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    height?: SortOrder
    weight?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    image?: SortOrder
    height?: SortOrder
    weight?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    image?: SortOrder
    height?: SortOrder
    weight?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    height?: SortOrder
    weight?: SortOrder
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

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EnumWorkoutStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.WorkoutStatus | EnumWorkoutStatusFieldRefInput<$PrismaModel>
    in?: $Enums.WorkoutStatus[] | ListEnumWorkoutStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.WorkoutStatus[] | ListEnumWorkoutStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumWorkoutStatusFilter<$PrismaModel> | $Enums.WorkoutStatus
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type WorkoutExerciseListRelationFilter = {
    every?: WorkoutExerciseWhereInput
    some?: WorkoutExerciseWhereInput
    none?: WorkoutExerciseWhereInput
  }

  export type WorkoutExerciseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WorkoutCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    date?: SortOrder
    duration?: SortOrder
    notes?: SortOrder
    isCompleted?: SortOrder
    status?: SortOrder
    startedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    category?: SortOrder
  }

  export type WorkoutAvgOrderByAggregateInput = {
    duration?: SortOrder
  }

  export type WorkoutMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    date?: SortOrder
    duration?: SortOrder
    notes?: SortOrder
    isCompleted?: SortOrder
    status?: SortOrder
    startedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    category?: SortOrder
  }

  export type WorkoutMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    date?: SortOrder
    duration?: SortOrder
    notes?: SortOrder
    isCompleted?: SortOrder
    status?: SortOrder
    startedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    category?: SortOrder
  }

  export type WorkoutSumOrderByAggregateInput = {
    duration?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumWorkoutStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WorkoutStatus | EnumWorkoutStatusFieldRefInput<$PrismaModel>
    in?: $Enums.WorkoutStatus[] | ListEnumWorkoutStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.WorkoutStatus[] | ListEnumWorkoutStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumWorkoutStatusWithAggregatesFilter<$PrismaModel> | $Enums.WorkoutStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWorkoutStatusFilter<$PrismaModel>
    _max?: NestedEnumWorkoutStatusFilter<$PrismaModel>
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

  export type AIWorkoutExerciseListRelationFilter = {
    every?: AIWorkoutExerciseWhereInput
    some?: AIWorkoutExerciseWhereInput
    none?: AIWorkoutExerciseWhereInput
  }

  export type AIWorkoutExerciseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ExerciseCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    muscleGroup?: SortOrder
    equipment?: SortOrder
    instructions?: SortOrder
    videoUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ExerciseMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    muscleGroup?: SortOrder
    equipment?: SortOrder
    instructions?: SortOrder
    videoUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ExerciseMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    muscleGroup?: SortOrder
    equipment?: SortOrder
    instructions?: SortOrder
    videoUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type WorkoutScalarRelationFilter = {
    is?: WorkoutWhereInput
    isNot?: WorkoutWhereInput
  }

  export type ExerciseScalarRelationFilter = {
    is?: ExerciseWhereInput
    isNot?: ExerciseWhereInput
  }

  export type WorkoutExerciseCountOrderByAggregateInput = {
    id?: SortOrder
    sets?: SortOrder
    reps?: SortOrder
    weight?: SortOrder
    duration?: SortOrder
    restTime?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    workoutId?: SortOrder
    exerciseId?: SortOrder
    personalBest?: SortOrder
  }

  export type WorkoutExerciseAvgOrderByAggregateInput = {
    sets?: SortOrder
    reps?: SortOrder
    weight?: SortOrder
    duration?: SortOrder
    restTime?: SortOrder
  }

  export type WorkoutExerciseMaxOrderByAggregateInput = {
    id?: SortOrder
    sets?: SortOrder
    reps?: SortOrder
    weight?: SortOrder
    duration?: SortOrder
    restTime?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    workoutId?: SortOrder
    exerciseId?: SortOrder
    personalBest?: SortOrder
  }

  export type WorkoutExerciseMinOrderByAggregateInput = {
    id?: SortOrder
    sets?: SortOrder
    reps?: SortOrder
    weight?: SortOrder
    duration?: SortOrder
    restTime?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    workoutId?: SortOrder
    exerciseId?: SortOrder
    personalBest?: SortOrder
  }

  export type WorkoutExerciseSumOrderByAggregateInput = {
    sets?: SortOrder
    reps?: SortOrder
    weight?: SortOrder
    duration?: SortOrder
    restTime?: SortOrder
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

  export type EnumGoalTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.GoalType | EnumGoalTypeFieldRefInput<$PrismaModel>
    in?: $Enums.GoalType[] | ListEnumGoalTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.GoalType[] | ListEnumGoalTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumGoalTypeFilter<$PrismaModel> | $Enums.GoalType
  }

  export type GoalCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    targetDate?: SortOrder
    isCompleted?: SortOrder
    type?: SortOrder
    metric?: SortOrder
    targetValue?: SortOrder
    currentValue?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type GoalAvgOrderByAggregateInput = {
    targetValue?: SortOrder
    currentValue?: SortOrder
  }

  export type GoalMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    targetDate?: SortOrder
    isCompleted?: SortOrder
    type?: SortOrder
    metric?: SortOrder
    targetValue?: SortOrder
    currentValue?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type GoalMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    targetDate?: SortOrder
    isCompleted?: SortOrder
    type?: SortOrder
    metric?: SortOrder
    targetValue?: SortOrder
    currentValue?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type GoalSumOrderByAggregateInput = {
    targetValue?: SortOrder
    currentValue?: SortOrder
  }

  export type EnumGoalTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GoalType | EnumGoalTypeFieldRefInput<$PrismaModel>
    in?: $Enums.GoalType[] | ListEnumGoalTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.GoalType[] | ListEnumGoalTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumGoalTypeWithAggregatesFilter<$PrismaModel> | $Enums.GoalType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGoalTypeFilter<$PrismaModel>
    _max?: NestedEnumGoalTypeFilter<$PrismaModel>
  }

  export type AchievementCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    image?: SortOrder
    unlockedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type AchievementMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    image?: SortOrder
    unlockedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type AchievementMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    image?: SortOrder
    unlockedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type WeightHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    weight?: SortOrder
    date?: SortOrder
    notes?: SortOrder
    userId?: SortOrder
  }

  export type WeightHistoryAvgOrderByAggregateInput = {
    weight?: SortOrder
  }

  export type WeightHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    weight?: SortOrder
    date?: SortOrder
    notes?: SortOrder
    userId?: SortOrder
  }

  export type WeightHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    weight?: SortOrder
    date?: SortOrder
    notes?: SortOrder
    userId?: SortOrder
  }

  export type WeightHistorySumOrderByAggregateInput = {
    weight?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EnumMeasurementTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MeasurementType | EnumMeasurementTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MeasurementType[] | ListEnumMeasurementTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MeasurementType[] | ListEnumMeasurementTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMeasurementTypeFilter<$PrismaModel> | $Enums.MeasurementType
  }

  export type BodyMeasurementCountOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    type?: SortOrder
    value?: SortOrder
    notes?: SortOrder
    userId?: SortOrder
  }

  export type BodyMeasurementAvgOrderByAggregateInput = {
    value?: SortOrder
  }

  export type BodyMeasurementMaxOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    type?: SortOrder
    value?: SortOrder
    notes?: SortOrder
    userId?: SortOrder
  }

  export type BodyMeasurementMinOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    type?: SortOrder
    value?: SortOrder
    notes?: SortOrder
    userId?: SortOrder
  }

  export type BodyMeasurementSumOrderByAggregateInput = {
    value?: SortOrder
  }

  export type EnumMeasurementTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MeasurementType | EnumMeasurementTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MeasurementType[] | ListEnumMeasurementTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MeasurementType[] | ListEnumMeasurementTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMeasurementTypeWithAggregatesFilter<$PrismaModel> | $Enums.MeasurementType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMeasurementTypeFilter<$PrismaModel>
    _max?: NestedEnumMeasurementTypeFilter<$PrismaModel>
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type AIWorkoutCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    fitnessLevel?: SortOrder
    goal?: SortOrder
    duration?: SortOrder
    equipment?: SortOrder
    focusArea?: SortOrder
    warmup?: SortOrder
    cooldown?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type AIWorkoutAvgOrderByAggregateInput = {
    duration?: SortOrder
  }

  export type AIWorkoutMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    fitnessLevel?: SortOrder
    goal?: SortOrder
    duration?: SortOrder
    equipment?: SortOrder
    focusArea?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type AIWorkoutMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    fitnessLevel?: SortOrder
    goal?: SortOrder
    duration?: SortOrder
    equipment?: SortOrder
    focusArea?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type AIWorkoutSumOrderByAggregateInput = {
    duration?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type AIWorkoutScalarRelationFilter = {
    is?: AIWorkoutWhereInput
    isNot?: AIWorkoutWhereInput
  }

  export type ExerciseNullableScalarRelationFilter = {
    is?: ExerciseWhereInput | null
    isNot?: ExerciseWhereInput | null
  }

  export type AIWorkoutExerciseCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    sets?: SortOrder
    reps?: SortOrder
    duration?: SortOrder
    rest?: SortOrder
    instruction?: SortOrder
    order?: SortOrder
    aiWorkoutId?: SortOrder
    exerciseId?: SortOrder
  }

  export type AIWorkoutExerciseAvgOrderByAggregateInput = {
    sets?: SortOrder
    reps?: SortOrder
    duration?: SortOrder
    rest?: SortOrder
    order?: SortOrder
  }

  export type AIWorkoutExerciseMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    sets?: SortOrder
    reps?: SortOrder
    duration?: SortOrder
    rest?: SortOrder
    instruction?: SortOrder
    order?: SortOrder
    aiWorkoutId?: SortOrder
    exerciseId?: SortOrder
  }

  export type AIWorkoutExerciseMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    sets?: SortOrder
    reps?: SortOrder
    duration?: SortOrder
    rest?: SortOrder
    instruction?: SortOrder
    order?: SortOrder
    aiWorkoutId?: SortOrder
    exerciseId?: SortOrder
  }

  export type AIWorkoutExerciseSumOrderByAggregateInput = {
    sets?: SortOrder
    reps?: SortOrder
    duration?: SortOrder
    rest?: SortOrder
    order?: SortOrder
  }

  export type UserSettingsCountOrderByAggregateInput = {
    id?: SortOrder
    theme?: SortOrder
    units?: SortOrder
    language?: SortOrder
    privacyLevel?: SortOrder
    workoutReminders?: SortOrder
    progressUpdates?: SortOrder
    achievementAlerts?: SortOrder
    tipNotifications?: SortOrder
    userId?: SortOrder
  }

  export type UserSettingsMaxOrderByAggregateInput = {
    id?: SortOrder
    theme?: SortOrder
    units?: SortOrder
    language?: SortOrder
    privacyLevel?: SortOrder
    workoutReminders?: SortOrder
    progressUpdates?: SortOrder
    achievementAlerts?: SortOrder
    tipNotifications?: SortOrder
    userId?: SortOrder
  }

  export type UserSettingsMinOrderByAggregateInput = {
    id?: SortOrder
    theme?: SortOrder
    units?: SortOrder
    language?: SortOrder
    privacyLevel?: SortOrder
    workoutReminders?: SortOrder
    progressUpdates?: SortOrder
    achievementAlerts?: SortOrder
    tipNotifications?: SortOrder
    userId?: SortOrder
  }

  export type EnumStatTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.StatType | EnumStatTypeFieldRefInput<$PrismaModel>
    in?: $Enums.StatType[] | ListEnumStatTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatType[] | ListEnumStatTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumStatTypeFilter<$PrismaModel> | $Enums.StatType
  }

  export type ProgressStatCountOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    statType?: SortOrder
    value?: SortOrder
    userId?: SortOrder
  }

  export type ProgressStatAvgOrderByAggregateInput = {
    value?: SortOrder
  }

  export type ProgressStatMaxOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    statType?: SortOrder
    value?: SortOrder
    userId?: SortOrder
  }

  export type ProgressStatMinOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    statType?: SortOrder
    value?: SortOrder
    userId?: SortOrder
  }

  export type ProgressStatSumOrderByAggregateInput = {
    value?: SortOrder
  }

  export type EnumStatTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatType | EnumStatTypeFieldRefInput<$PrismaModel>
    in?: $Enums.StatType[] | ListEnumStatTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatType[] | ListEnumStatTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumStatTypeWithAggregatesFilter<$PrismaModel> | $Enums.StatType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatTypeFilter<$PrismaModel>
    _max?: NestedEnumStatTypeFilter<$PrismaModel>
  }

  export type WorkoutStreakCountOrderByAggregateInput = {
    id?: SortOrder
    currentStreak?: SortOrder
    longestStreak?: SortOrder
    lastWorkoutDate?: SortOrder
    userId?: SortOrder
  }

  export type WorkoutStreakAvgOrderByAggregateInput = {
    currentStreak?: SortOrder
    longestStreak?: SortOrder
  }

  export type WorkoutStreakMaxOrderByAggregateInput = {
    id?: SortOrder
    currentStreak?: SortOrder
    longestStreak?: SortOrder
    lastWorkoutDate?: SortOrder
    userId?: SortOrder
  }

  export type WorkoutStreakMinOrderByAggregateInput = {
    id?: SortOrder
    currentStreak?: SortOrder
    longestStreak?: SortOrder
    lastWorkoutDate?: SortOrder
    userId?: SortOrder
  }

  export type WorkoutStreakSumOrderByAggregateInput = {
    currentStreak?: SortOrder
    longestStreak?: SortOrder
  }

  export type WorkoutCreateNestedManyWithoutUserInput = {
    create?: XOR<WorkoutCreateWithoutUserInput, WorkoutUncheckedCreateWithoutUserInput> | WorkoutCreateWithoutUserInput[] | WorkoutUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorkoutCreateOrConnectWithoutUserInput | WorkoutCreateOrConnectWithoutUserInput[]
    createMany?: WorkoutCreateManyUserInputEnvelope
    connect?: WorkoutWhereUniqueInput | WorkoutWhereUniqueInput[]
  }

  export type GoalCreateNestedManyWithoutUserInput = {
    create?: XOR<GoalCreateWithoutUserInput, GoalUncheckedCreateWithoutUserInput> | GoalCreateWithoutUserInput[] | GoalUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GoalCreateOrConnectWithoutUserInput | GoalCreateOrConnectWithoutUserInput[]
    createMany?: GoalCreateManyUserInputEnvelope
    connect?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
  }

  export type AchievementCreateNestedManyWithoutUserInput = {
    create?: XOR<AchievementCreateWithoutUserInput, AchievementUncheckedCreateWithoutUserInput> | AchievementCreateWithoutUserInput[] | AchievementUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AchievementCreateOrConnectWithoutUserInput | AchievementCreateOrConnectWithoutUserInput[]
    createMany?: AchievementCreateManyUserInputEnvelope
    connect?: AchievementWhereUniqueInput | AchievementWhereUniqueInput[]
  }

  export type WeightHistoryCreateNestedManyWithoutUserInput = {
    create?: XOR<WeightHistoryCreateWithoutUserInput, WeightHistoryUncheckedCreateWithoutUserInput> | WeightHistoryCreateWithoutUserInput[] | WeightHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WeightHistoryCreateOrConnectWithoutUserInput | WeightHistoryCreateOrConnectWithoutUserInput[]
    createMany?: WeightHistoryCreateManyUserInputEnvelope
    connect?: WeightHistoryWhereUniqueInput | WeightHistoryWhereUniqueInput[]
  }

  export type BodyMeasurementCreateNestedManyWithoutUserInput = {
    create?: XOR<BodyMeasurementCreateWithoutUserInput, BodyMeasurementUncheckedCreateWithoutUserInput> | BodyMeasurementCreateWithoutUserInput[] | BodyMeasurementUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BodyMeasurementCreateOrConnectWithoutUserInput | BodyMeasurementCreateOrConnectWithoutUserInput[]
    createMany?: BodyMeasurementCreateManyUserInputEnvelope
    connect?: BodyMeasurementWhereUniqueInput | BodyMeasurementWhereUniqueInput[]
  }

  export type AIWorkoutCreateNestedManyWithoutUserInput = {
    create?: XOR<AIWorkoutCreateWithoutUserInput, AIWorkoutUncheckedCreateWithoutUserInput> | AIWorkoutCreateWithoutUserInput[] | AIWorkoutUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AIWorkoutCreateOrConnectWithoutUserInput | AIWorkoutCreateOrConnectWithoutUserInput[]
    createMany?: AIWorkoutCreateManyUserInputEnvelope
    connect?: AIWorkoutWhereUniqueInput | AIWorkoutWhereUniqueInput[]
  }

  export type UserSettingsCreateNestedOneWithoutUserInput = {
    create?: XOR<UserSettingsCreateWithoutUserInput, UserSettingsUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserSettingsCreateOrConnectWithoutUserInput
    connect?: UserSettingsWhereUniqueInput
  }

  export type ProgressStatCreateNestedManyWithoutUserInput = {
    create?: XOR<ProgressStatCreateWithoutUserInput, ProgressStatUncheckedCreateWithoutUserInput> | ProgressStatCreateWithoutUserInput[] | ProgressStatUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProgressStatCreateOrConnectWithoutUserInput | ProgressStatCreateOrConnectWithoutUserInput[]
    createMany?: ProgressStatCreateManyUserInputEnvelope
    connect?: ProgressStatWhereUniqueInput | ProgressStatWhereUniqueInput[]
  }

  export type WorkoutStreakCreateNestedOneWithoutUserInput = {
    create?: XOR<WorkoutStreakCreateWithoutUserInput, WorkoutStreakUncheckedCreateWithoutUserInput>
    connectOrCreate?: WorkoutStreakCreateOrConnectWithoutUserInput
    connect?: WorkoutStreakWhereUniqueInput
  }

  export type WorkoutUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<WorkoutCreateWithoutUserInput, WorkoutUncheckedCreateWithoutUserInput> | WorkoutCreateWithoutUserInput[] | WorkoutUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorkoutCreateOrConnectWithoutUserInput | WorkoutCreateOrConnectWithoutUserInput[]
    createMany?: WorkoutCreateManyUserInputEnvelope
    connect?: WorkoutWhereUniqueInput | WorkoutWhereUniqueInput[]
  }

  export type GoalUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<GoalCreateWithoutUserInput, GoalUncheckedCreateWithoutUserInput> | GoalCreateWithoutUserInput[] | GoalUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GoalCreateOrConnectWithoutUserInput | GoalCreateOrConnectWithoutUserInput[]
    createMany?: GoalCreateManyUserInputEnvelope
    connect?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
  }

  export type AchievementUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AchievementCreateWithoutUserInput, AchievementUncheckedCreateWithoutUserInput> | AchievementCreateWithoutUserInput[] | AchievementUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AchievementCreateOrConnectWithoutUserInput | AchievementCreateOrConnectWithoutUserInput[]
    createMany?: AchievementCreateManyUserInputEnvelope
    connect?: AchievementWhereUniqueInput | AchievementWhereUniqueInput[]
  }

  export type WeightHistoryUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<WeightHistoryCreateWithoutUserInput, WeightHistoryUncheckedCreateWithoutUserInput> | WeightHistoryCreateWithoutUserInput[] | WeightHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WeightHistoryCreateOrConnectWithoutUserInput | WeightHistoryCreateOrConnectWithoutUserInput[]
    createMany?: WeightHistoryCreateManyUserInputEnvelope
    connect?: WeightHistoryWhereUniqueInput | WeightHistoryWhereUniqueInput[]
  }

  export type BodyMeasurementUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BodyMeasurementCreateWithoutUserInput, BodyMeasurementUncheckedCreateWithoutUserInput> | BodyMeasurementCreateWithoutUserInput[] | BodyMeasurementUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BodyMeasurementCreateOrConnectWithoutUserInput | BodyMeasurementCreateOrConnectWithoutUserInput[]
    createMany?: BodyMeasurementCreateManyUserInputEnvelope
    connect?: BodyMeasurementWhereUniqueInput | BodyMeasurementWhereUniqueInput[]
  }

  export type AIWorkoutUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AIWorkoutCreateWithoutUserInput, AIWorkoutUncheckedCreateWithoutUserInput> | AIWorkoutCreateWithoutUserInput[] | AIWorkoutUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AIWorkoutCreateOrConnectWithoutUserInput | AIWorkoutCreateOrConnectWithoutUserInput[]
    createMany?: AIWorkoutCreateManyUserInputEnvelope
    connect?: AIWorkoutWhereUniqueInput | AIWorkoutWhereUniqueInput[]
  }

  export type UserSettingsUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<UserSettingsCreateWithoutUserInput, UserSettingsUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserSettingsCreateOrConnectWithoutUserInput
    connect?: UserSettingsWhereUniqueInput
  }

  export type ProgressStatUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ProgressStatCreateWithoutUserInput, ProgressStatUncheckedCreateWithoutUserInput> | ProgressStatCreateWithoutUserInput[] | ProgressStatUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProgressStatCreateOrConnectWithoutUserInput | ProgressStatCreateOrConnectWithoutUserInput[]
    createMany?: ProgressStatCreateManyUserInputEnvelope
    connect?: ProgressStatWhereUniqueInput | ProgressStatWhereUniqueInput[]
  }

  export type WorkoutStreakUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<WorkoutStreakCreateWithoutUserInput, WorkoutStreakUncheckedCreateWithoutUserInput>
    connectOrCreate?: WorkoutStreakCreateOrConnectWithoutUserInput
    connect?: WorkoutStreakWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type WorkoutUpdateManyWithoutUserNestedInput = {
    create?: XOR<WorkoutCreateWithoutUserInput, WorkoutUncheckedCreateWithoutUserInput> | WorkoutCreateWithoutUserInput[] | WorkoutUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorkoutCreateOrConnectWithoutUserInput | WorkoutCreateOrConnectWithoutUserInput[]
    upsert?: WorkoutUpsertWithWhereUniqueWithoutUserInput | WorkoutUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WorkoutCreateManyUserInputEnvelope
    set?: WorkoutWhereUniqueInput | WorkoutWhereUniqueInput[]
    disconnect?: WorkoutWhereUniqueInput | WorkoutWhereUniqueInput[]
    delete?: WorkoutWhereUniqueInput | WorkoutWhereUniqueInput[]
    connect?: WorkoutWhereUniqueInput | WorkoutWhereUniqueInput[]
    update?: WorkoutUpdateWithWhereUniqueWithoutUserInput | WorkoutUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WorkoutUpdateManyWithWhereWithoutUserInput | WorkoutUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WorkoutScalarWhereInput | WorkoutScalarWhereInput[]
  }

  export type GoalUpdateManyWithoutUserNestedInput = {
    create?: XOR<GoalCreateWithoutUserInput, GoalUncheckedCreateWithoutUserInput> | GoalCreateWithoutUserInput[] | GoalUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GoalCreateOrConnectWithoutUserInput | GoalCreateOrConnectWithoutUserInput[]
    upsert?: GoalUpsertWithWhereUniqueWithoutUserInput | GoalUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GoalCreateManyUserInputEnvelope
    set?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    disconnect?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    delete?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    connect?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    update?: GoalUpdateWithWhereUniqueWithoutUserInput | GoalUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GoalUpdateManyWithWhereWithoutUserInput | GoalUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GoalScalarWhereInput | GoalScalarWhereInput[]
  }

  export type AchievementUpdateManyWithoutUserNestedInput = {
    create?: XOR<AchievementCreateWithoutUserInput, AchievementUncheckedCreateWithoutUserInput> | AchievementCreateWithoutUserInput[] | AchievementUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AchievementCreateOrConnectWithoutUserInput | AchievementCreateOrConnectWithoutUserInput[]
    upsert?: AchievementUpsertWithWhereUniqueWithoutUserInput | AchievementUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AchievementCreateManyUserInputEnvelope
    set?: AchievementWhereUniqueInput | AchievementWhereUniqueInput[]
    disconnect?: AchievementWhereUniqueInput | AchievementWhereUniqueInput[]
    delete?: AchievementWhereUniqueInput | AchievementWhereUniqueInput[]
    connect?: AchievementWhereUniqueInput | AchievementWhereUniqueInput[]
    update?: AchievementUpdateWithWhereUniqueWithoutUserInput | AchievementUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AchievementUpdateManyWithWhereWithoutUserInput | AchievementUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AchievementScalarWhereInput | AchievementScalarWhereInput[]
  }

  export type WeightHistoryUpdateManyWithoutUserNestedInput = {
    create?: XOR<WeightHistoryCreateWithoutUserInput, WeightHistoryUncheckedCreateWithoutUserInput> | WeightHistoryCreateWithoutUserInput[] | WeightHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WeightHistoryCreateOrConnectWithoutUserInput | WeightHistoryCreateOrConnectWithoutUserInput[]
    upsert?: WeightHistoryUpsertWithWhereUniqueWithoutUserInput | WeightHistoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WeightHistoryCreateManyUserInputEnvelope
    set?: WeightHistoryWhereUniqueInput | WeightHistoryWhereUniqueInput[]
    disconnect?: WeightHistoryWhereUniqueInput | WeightHistoryWhereUniqueInput[]
    delete?: WeightHistoryWhereUniqueInput | WeightHistoryWhereUniqueInput[]
    connect?: WeightHistoryWhereUniqueInput | WeightHistoryWhereUniqueInput[]
    update?: WeightHistoryUpdateWithWhereUniqueWithoutUserInput | WeightHistoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WeightHistoryUpdateManyWithWhereWithoutUserInput | WeightHistoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WeightHistoryScalarWhereInput | WeightHistoryScalarWhereInput[]
  }

  export type BodyMeasurementUpdateManyWithoutUserNestedInput = {
    create?: XOR<BodyMeasurementCreateWithoutUserInput, BodyMeasurementUncheckedCreateWithoutUserInput> | BodyMeasurementCreateWithoutUserInput[] | BodyMeasurementUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BodyMeasurementCreateOrConnectWithoutUserInput | BodyMeasurementCreateOrConnectWithoutUserInput[]
    upsert?: BodyMeasurementUpsertWithWhereUniqueWithoutUserInput | BodyMeasurementUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BodyMeasurementCreateManyUserInputEnvelope
    set?: BodyMeasurementWhereUniqueInput | BodyMeasurementWhereUniqueInput[]
    disconnect?: BodyMeasurementWhereUniqueInput | BodyMeasurementWhereUniqueInput[]
    delete?: BodyMeasurementWhereUniqueInput | BodyMeasurementWhereUniqueInput[]
    connect?: BodyMeasurementWhereUniqueInput | BodyMeasurementWhereUniqueInput[]
    update?: BodyMeasurementUpdateWithWhereUniqueWithoutUserInput | BodyMeasurementUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BodyMeasurementUpdateManyWithWhereWithoutUserInput | BodyMeasurementUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BodyMeasurementScalarWhereInput | BodyMeasurementScalarWhereInput[]
  }

  export type AIWorkoutUpdateManyWithoutUserNestedInput = {
    create?: XOR<AIWorkoutCreateWithoutUserInput, AIWorkoutUncheckedCreateWithoutUserInput> | AIWorkoutCreateWithoutUserInput[] | AIWorkoutUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AIWorkoutCreateOrConnectWithoutUserInput | AIWorkoutCreateOrConnectWithoutUserInput[]
    upsert?: AIWorkoutUpsertWithWhereUniqueWithoutUserInput | AIWorkoutUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AIWorkoutCreateManyUserInputEnvelope
    set?: AIWorkoutWhereUniqueInput | AIWorkoutWhereUniqueInput[]
    disconnect?: AIWorkoutWhereUniqueInput | AIWorkoutWhereUniqueInput[]
    delete?: AIWorkoutWhereUniqueInput | AIWorkoutWhereUniqueInput[]
    connect?: AIWorkoutWhereUniqueInput | AIWorkoutWhereUniqueInput[]
    update?: AIWorkoutUpdateWithWhereUniqueWithoutUserInput | AIWorkoutUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AIWorkoutUpdateManyWithWhereWithoutUserInput | AIWorkoutUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AIWorkoutScalarWhereInput | AIWorkoutScalarWhereInput[]
  }

  export type UserSettingsUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserSettingsCreateWithoutUserInput, UserSettingsUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserSettingsCreateOrConnectWithoutUserInput
    upsert?: UserSettingsUpsertWithoutUserInput
    disconnect?: UserSettingsWhereInput | boolean
    delete?: UserSettingsWhereInput | boolean
    connect?: UserSettingsWhereUniqueInput
    update?: XOR<XOR<UserSettingsUpdateToOneWithWhereWithoutUserInput, UserSettingsUpdateWithoutUserInput>, UserSettingsUncheckedUpdateWithoutUserInput>
  }

  export type ProgressStatUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProgressStatCreateWithoutUserInput, ProgressStatUncheckedCreateWithoutUserInput> | ProgressStatCreateWithoutUserInput[] | ProgressStatUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProgressStatCreateOrConnectWithoutUserInput | ProgressStatCreateOrConnectWithoutUserInput[]
    upsert?: ProgressStatUpsertWithWhereUniqueWithoutUserInput | ProgressStatUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProgressStatCreateManyUserInputEnvelope
    set?: ProgressStatWhereUniqueInput | ProgressStatWhereUniqueInput[]
    disconnect?: ProgressStatWhereUniqueInput | ProgressStatWhereUniqueInput[]
    delete?: ProgressStatWhereUniqueInput | ProgressStatWhereUniqueInput[]
    connect?: ProgressStatWhereUniqueInput | ProgressStatWhereUniqueInput[]
    update?: ProgressStatUpdateWithWhereUniqueWithoutUserInput | ProgressStatUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProgressStatUpdateManyWithWhereWithoutUserInput | ProgressStatUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProgressStatScalarWhereInput | ProgressStatScalarWhereInput[]
  }

  export type WorkoutStreakUpdateOneWithoutUserNestedInput = {
    create?: XOR<WorkoutStreakCreateWithoutUserInput, WorkoutStreakUncheckedCreateWithoutUserInput>
    connectOrCreate?: WorkoutStreakCreateOrConnectWithoutUserInput
    upsert?: WorkoutStreakUpsertWithoutUserInput
    disconnect?: WorkoutStreakWhereInput | boolean
    delete?: WorkoutStreakWhereInput | boolean
    connect?: WorkoutStreakWhereUniqueInput
    update?: XOR<XOR<WorkoutStreakUpdateToOneWithWhereWithoutUserInput, WorkoutStreakUpdateWithoutUserInput>, WorkoutStreakUncheckedUpdateWithoutUserInput>
  }

  export type WorkoutUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<WorkoutCreateWithoutUserInput, WorkoutUncheckedCreateWithoutUserInput> | WorkoutCreateWithoutUserInput[] | WorkoutUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorkoutCreateOrConnectWithoutUserInput | WorkoutCreateOrConnectWithoutUserInput[]
    upsert?: WorkoutUpsertWithWhereUniqueWithoutUserInput | WorkoutUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WorkoutCreateManyUserInputEnvelope
    set?: WorkoutWhereUniqueInput | WorkoutWhereUniqueInput[]
    disconnect?: WorkoutWhereUniqueInput | WorkoutWhereUniqueInput[]
    delete?: WorkoutWhereUniqueInput | WorkoutWhereUniqueInput[]
    connect?: WorkoutWhereUniqueInput | WorkoutWhereUniqueInput[]
    update?: WorkoutUpdateWithWhereUniqueWithoutUserInput | WorkoutUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WorkoutUpdateManyWithWhereWithoutUserInput | WorkoutUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WorkoutScalarWhereInput | WorkoutScalarWhereInput[]
  }

  export type GoalUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<GoalCreateWithoutUserInput, GoalUncheckedCreateWithoutUserInput> | GoalCreateWithoutUserInput[] | GoalUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GoalCreateOrConnectWithoutUserInput | GoalCreateOrConnectWithoutUserInput[]
    upsert?: GoalUpsertWithWhereUniqueWithoutUserInput | GoalUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GoalCreateManyUserInputEnvelope
    set?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    disconnect?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    delete?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    connect?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    update?: GoalUpdateWithWhereUniqueWithoutUserInput | GoalUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GoalUpdateManyWithWhereWithoutUserInput | GoalUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GoalScalarWhereInput | GoalScalarWhereInput[]
  }

  export type AchievementUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AchievementCreateWithoutUserInput, AchievementUncheckedCreateWithoutUserInput> | AchievementCreateWithoutUserInput[] | AchievementUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AchievementCreateOrConnectWithoutUserInput | AchievementCreateOrConnectWithoutUserInput[]
    upsert?: AchievementUpsertWithWhereUniqueWithoutUserInput | AchievementUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AchievementCreateManyUserInputEnvelope
    set?: AchievementWhereUniqueInput | AchievementWhereUniqueInput[]
    disconnect?: AchievementWhereUniqueInput | AchievementWhereUniqueInput[]
    delete?: AchievementWhereUniqueInput | AchievementWhereUniqueInput[]
    connect?: AchievementWhereUniqueInput | AchievementWhereUniqueInput[]
    update?: AchievementUpdateWithWhereUniqueWithoutUserInput | AchievementUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AchievementUpdateManyWithWhereWithoutUserInput | AchievementUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AchievementScalarWhereInput | AchievementScalarWhereInput[]
  }

  export type WeightHistoryUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<WeightHistoryCreateWithoutUserInput, WeightHistoryUncheckedCreateWithoutUserInput> | WeightHistoryCreateWithoutUserInput[] | WeightHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WeightHistoryCreateOrConnectWithoutUserInput | WeightHistoryCreateOrConnectWithoutUserInput[]
    upsert?: WeightHistoryUpsertWithWhereUniqueWithoutUserInput | WeightHistoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WeightHistoryCreateManyUserInputEnvelope
    set?: WeightHistoryWhereUniqueInput | WeightHistoryWhereUniqueInput[]
    disconnect?: WeightHistoryWhereUniqueInput | WeightHistoryWhereUniqueInput[]
    delete?: WeightHistoryWhereUniqueInput | WeightHistoryWhereUniqueInput[]
    connect?: WeightHistoryWhereUniqueInput | WeightHistoryWhereUniqueInput[]
    update?: WeightHistoryUpdateWithWhereUniqueWithoutUserInput | WeightHistoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WeightHistoryUpdateManyWithWhereWithoutUserInput | WeightHistoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WeightHistoryScalarWhereInput | WeightHistoryScalarWhereInput[]
  }

  export type BodyMeasurementUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BodyMeasurementCreateWithoutUserInput, BodyMeasurementUncheckedCreateWithoutUserInput> | BodyMeasurementCreateWithoutUserInput[] | BodyMeasurementUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BodyMeasurementCreateOrConnectWithoutUserInput | BodyMeasurementCreateOrConnectWithoutUserInput[]
    upsert?: BodyMeasurementUpsertWithWhereUniqueWithoutUserInput | BodyMeasurementUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BodyMeasurementCreateManyUserInputEnvelope
    set?: BodyMeasurementWhereUniqueInput | BodyMeasurementWhereUniqueInput[]
    disconnect?: BodyMeasurementWhereUniqueInput | BodyMeasurementWhereUniqueInput[]
    delete?: BodyMeasurementWhereUniqueInput | BodyMeasurementWhereUniqueInput[]
    connect?: BodyMeasurementWhereUniqueInput | BodyMeasurementWhereUniqueInput[]
    update?: BodyMeasurementUpdateWithWhereUniqueWithoutUserInput | BodyMeasurementUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BodyMeasurementUpdateManyWithWhereWithoutUserInput | BodyMeasurementUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BodyMeasurementScalarWhereInput | BodyMeasurementScalarWhereInput[]
  }

  export type AIWorkoutUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AIWorkoutCreateWithoutUserInput, AIWorkoutUncheckedCreateWithoutUserInput> | AIWorkoutCreateWithoutUserInput[] | AIWorkoutUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AIWorkoutCreateOrConnectWithoutUserInput | AIWorkoutCreateOrConnectWithoutUserInput[]
    upsert?: AIWorkoutUpsertWithWhereUniqueWithoutUserInput | AIWorkoutUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AIWorkoutCreateManyUserInputEnvelope
    set?: AIWorkoutWhereUniqueInput | AIWorkoutWhereUniqueInput[]
    disconnect?: AIWorkoutWhereUniqueInput | AIWorkoutWhereUniqueInput[]
    delete?: AIWorkoutWhereUniqueInput | AIWorkoutWhereUniqueInput[]
    connect?: AIWorkoutWhereUniqueInput | AIWorkoutWhereUniqueInput[]
    update?: AIWorkoutUpdateWithWhereUniqueWithoutUserInput | AIWorkoutUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AIWorkoutUpdateManyWithWhereWithoutUserInput | AIWorkoutUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AIWorkoutScalarWhereInput | AIWorkoutScalarWhereInput[]
  }

  export type UserSettingsUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserSettingsCreateWithoutUserInput, UserSettingsUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserSettingsCreateOrConnectWithoutUserInput
    upsert?: UserSettingsUpsertWithoutUserInput
    disconnect?: UserSettingsWhereInput | boolean
    delete?: UserSettingsWhereInput | boolean
    connect?: UserSettingsWhereUniqueInput
    update?: XOR<XOR<UserSettingsUpdateToOneWithWhereWithoutUserInput, UserSettingsUpdateWithoutUserInput>, UserSettingsUncheckedUpdateWithoutUserInput>
  }

  export type ProgressStatUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProgressStatCreateWithoutUserInput, ProgressStatUncheckedCreateWithoutUserInput> | ProgressStatCreateWithoutUserInput[] | ProgressStatUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProgressStatCreateOrConnectWithoutUserInput | ProgressStatCreateOrConnectWithoutUserInput[]
    upsert?: ProgressStatUpsertWithWhereUniqueWithoutUserInput | ProgressStatUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProgressStatCreateManyUserInputEnvelope
    set?: ProgressStatWhereUniqueInput | ProgressStatWhereUniqueInput[]
    disconnect?: ProgressStatWhereUniqueInput | ProgressStatWhereUniqueInput[]
    delete?: ProgressStatWhereUniqueInput | ProgressStatWhereUniqueInput[]
    connect?: ProgressStatWhereUniqueInput | ProgressStatWhereUniqueInput[]
    update?: ProgressStatUpdateWithWhereUniqueWithoutUserInput | ProgressStatUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProgressStatUpdateManyWithWhereWithoutUserInput | ProgressStatUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProgressStatScalarWhereInput | ProgressStatScalarWhereInput[]
  }

  export type WorkoutStreakUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<WorkoutStreakCreateWithoutUserInput, WorkoutStreakUncheckedCreateWithoutUserInput>
    connectOrCreate?: WorkoutStreakCreateOrConnectWithoutUserInput
    upsert?: WorkoutStreakUpsertWithoutUserInput
    disconnect?: WorkoutStreakWhereInput | boolean
    delete?: WorkoutStreakWhereInput | boolean
    connect?: WorkoutStreakWhereUniqueInput
    update?: XOR<XOR<WorkoutStreakUpdateToOneWithWhereWithoutUserInput, WorkoutStreakUpdateWithoutUserInput>, WorkoutStreakUncheckedUpdateWithoutUserInput>
  }

  export type UserCreateNestedOneWithoutWorkoutsInput = {
    create?: XOR<UserCreateWithoutWorkoutsInput, UserUncheckedCreateWithoutWorkoutsInput>
    connectOrCreate?: UserCreateOrConnectWithoutWorkoutsInput
    connect?: UserWhereUniqueInput
  }

  export type WorkoutExerciseCreateNestedManyWithoutWorkoutInput = {
    create?: XOR<WorkoutExerciseCreateWithoutWorkoutInput, WorkoutExerciseUncheckedCreateWithoutWorkoutInput> | WorkoutExerciseCreateWithoutWorkoutInput[] | WorkoutExerciseUncheckedCreateWithoutWorkoutInput[]
    connectOrCreate?: WorkoutExerciseCreateOrConnectWithoutWorkoutInput | WorkoutExerciseCreateOrConnectWithoutWorkoutInput[]
    createMany?: WorkoutExerciseCreateManyWorkoutInputEnvelope
    connect?: WorkoutExerciseWhereUniqueInput | WorkoutExerciseWhereUniqueInput[]
  }

  export type WorkoutExerciseUncheckedCreateNestedManyWithoutWorkoutInput = {
    create?: XOR<WorkoutExerciseCreateWithoutWorkoutInput, WorkoutExerciseUncheckedCreateWithoutWorkoutInput> | WorkoutExerciseCreateWithoutWorkoutInput[] | WorkoutExerciseUncheckedCreateWithoutWorkoutInput[]
    connectOrCreate?: WorkoutExerciseCreateOrConnectWithoutWorkoutInput | WorkoutExerciseCreateOrConnectWithoutWorkoutInput[]
    createMany?: WorkoutExerciseCreateManyWorkoutInputEnvelope
    connect?: WorkoutExerciseWhereUniqueInput | WorkoutExerciseWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EnumWorkoutStatusFieldUpdateOperationsInput = {
    set?: $Enums.WorkoutStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutWorkoutsNestedInput = {
    create?: XOR<UserCreateWithoutWorkoutsInput, UserUncheckedCreateWithoutWorkoutsInput>
    connectOrCreate?: UserCreateOrConnectWithoutWorkoutsInput
    upsert?: UserUpsertWithoutWorkoutsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWorkoutsInput, UserUpdateWithoutWorkoutsInput>, UserUncheckedUpdateWithoutWorkoutsInput>
  }

  export type WorkoutExerciseUpdateManyWithoutWorkoutNestedInput = {
    create?: XOR<WorkoutExerciseCreateWithoutWorkoutInput, WorkoutExerciseUncheckedCreateWithoutWorkoutInput> | WorkoutExerciseCreateWithoutWorkoutInput[] | WorkoutExerciseUncheckedCreateWithoutWorkoutInput[]
    connectOrCreate?: WorkoutExerciseCreateOrConnectWithoutWorkoutInput | WorkoutExerciseCreateOrConnectWithoutWorkoutInput[]
    upsert?: WorkoutExerciseUpsertWithWhereUniqueWithoutWorkoutInput | WorkoutExerciseUpsertWithWhereUniqueWithoutWorkoutInput[]
    createMany?: WorkoutExerciseCreateManyWorkoutInputEnvelope
    set?: WorkoutExerciseWhereUniqueInput | WorkoutExerciseWhereUniqueInput[]
    disconnect?: WorkoutExerciseWhereUniqueInput | WorkoutExerciseWhereUniqueInput[]
    delete?: WorkoutExerciseWhereUniqueInput | WorkoutExerciseWhereUniqueInput[]
    connect?: WorkoutExerciseWhereUniqueInput | WorkoutExerciseWhereUniqueInput[]
    update?: WorkoutExerciseUpdateWithWhereUniqueWithoutWorkoutInput | WorkoutExerciseUpdateWithWhereUniqueWithoutWorkoutInput[]
    updateMany?: WorkoutExerciseUpdateManyWithWhereWithoutWorkoutInput | WorkoutExerciseUpdateManyWithWhereWithoutWorkoutInput[]
    deleteMany?: WorkoutExerciseScalarWhereInput | WorkoutExerciseScalarWhereInput[]
  }

  export type WorkoutExerciseUncheckedUpdateManyWithoutWorkoutNestedInput = {
    create?: XOR<WorkoutExerciseCreateWithoutWorkoutInput, WorkoutExerciseUncheckedCreateWithoutWorkoutInput> | WorkoutExerciseCreateWithoutWorkoutInput[] | WorkoutExerciseUncheckedCreateWithoutWorkoutInput[]
    connectOrCreate?: WorkoutExerciseCreateOrConnectWithoutWorkoutInput | WorkoutExerciseCreateOrConnectWithoutWorkoutInput[]
    upsert?: WorkoutExerciseUpsertWithWhereUniqueWithoutWorkoutInput | WorkoutExerciseUpsertWithWhereUniqueWithoutWorkoutInput[]
    createMany?: WorkoutExerciseCreateManyWorkoutInputEnvelope
    set?: WorkoutExerciseWhereUniqueInput | WorkoutExerciseWhereUniqueInput[]
    disconnect?: WorkoutExerciseWhereUniqueInput | WorkoutExerciseWhereUniqueInput[]
    delete?: WorkoutExerciseWhereUniqueInput | WorkoutExerciseWhereUniqueInput[]
    connect?: WorkoutExerciseWhereUniqueInput | WorkoutExerciseWhereUniqueInput[]
    update?: WorkoutExerciseUpdateWithWhereUniqueWithoutWorkoutInput | WorkoutExerciseUpdateWithWhereUniqueWithoutWorkoutInput[]
    updateMany?: WorkoutExerciseUpdateManyWithWhereWithoutWorkoutInput | WorkoutExerciseUpdateManyWithWhereWithoutWorkoutInput[]
    deleteMany?: WorkoutExerciseScalarWhereInput | WorkoutExerciseScalarWhereInput[]
  }

  export type WorkoutExerciseCreateNestedManyWithoutExerciseInput = {
    create?: XOR<WorkoutExerciseCreateWithoutExerciseInput, WorkoutExerciseUncheckedCreateWithoutExerciseInput> | WorkoutExerciseCreateWithoutExerciseInput[] | WorkoutExerciseUncheckedCreateWithoutExerciseInput[]
    connectOrCreate?: WorkoutExerciseCreateOrConnectWithoutExerciseInput | WorkoutExerciseCreateOrConnectWithoutExerciseInput[]
    createMany?: WorkoutExerciseCreateManyExerciseInputEnvelope
    connect?: WorkoutExerciseWhereUniqueInput | WorkoutExerciseWhereUniqueInput[]
  }

  export type AIWorkoutExerciseCreateNestedManyWithoutExerciseInput = {
    create?: XOR<AIWorkoutExerciseCreateWithoutExerciseInput, AIWorkoutExerciseUncheckedCreateWithoutExerciseInput> | AIWorkoutExerciseCreateWithoutExerciseInput[] | AIWorkoutExerciseUncheckedCreateWithoutExerciseInput[]
    connectOrCreate?: AIWorkoutExerciseCreateOrConnectWithoutExerciseInput | AIWorkoutExerciseCreateOrConnectWithoutExerciseInput[]
    createMany?: AIWorkoutExerciseCreateManyExerciseInputEnvelope
    connect?: AIWorkoutExerciseWhereUniqueInput | AIWorkoutExerciseWhereUniqueInput[]
  }

  export type WorkoutExerciseUncheckedCreateNestedManyWithoutExerciseInput = {
    create?: XOR<WorkoutExerciseCreateWithoutExerciseInput, WorkoutExerciseUncheckedCreateWithoutExerciseInput> | WorkoutExerciseCreateWithoutExerciseInput[] | WorkoutExerciseUncheckedCreateWithoutExerciseInput[]
    connectOrCreate?: WorkoutExerciseCreateOrConnectWithoutExerciseInput | WorkoutExerciseCreateOrConnectWithoutExerciseInput[]
    createMany?: WorkoutExerciseCreateManyExerciseInputEnvelope
    connect?: WorkoutExerciseWhereUniqueInput | WorkoutExerciseWhereUniqueInput[]
  }

  export type AIWorkoutExerciseUncheckedCreateNestedManyWithoutExerciseInput = {
    create?: XOR<AIWorkoutExerciseCreateWithoutExerciseInput, AIWorkoutExerciseUncheckedCreateWithoutExerciseInput> | AIWorkoutExerciseCreateWithoutExerciseInput[] | AIWorkoutExerciseUncheckedCreateWithoutExerciseInput[]
    connectOrCreate?: AIWorkoutExerciseCreateOrConnectWithoutExerciseInput | AIWorkoutExerciseCreateOrConnectWithoutExerciseInput[]
    createMany?: AIWorkoutExerciseCreateManyExerciseInputEnvelope
    connect?: AIWorkoutExerciseWhereUniqueInput | AIWorkoutExerciseWhereUniqueInput[]
  }

  export type WorkoutExerciseUpdateManyWithoutExerciseNestedInput = {
    create?: XOR<WorkoutExerciseCreateWithoutExerciseInput, WorkoutExerciseUncheckedCreateWithoutExerciseInput> | WorkoutExerciseCreateWithoutExerciseInput[] | WorkoutExerciseUncheckedCreateWithoutExerciseInput[]
    connectOrCreate?: WorkoutExerciseCreateOrConnectWithoutExerciseInput | WorkoutExerciseCreateOrConnectWithoutExerciseInput[]
    upsert?: WorkoutExerciseUpsertWithWhereUniqueWithoutExerciseInput | WorkoutExerciseUpsertWithWhereUniqueWithoutExerciseInput[]
    createMany?: WorkoutExerciseCreateManyExerciseInputEnvelope
    set?: WorkoutExerciseWhereUniqueInput | WorkoutExerciseWhereUniqueInput[]
    disconnect?: WorkoutExerciseWhereUniqueInput | WorkoutExerciseWhereUniqueInput[]
    delete?: WorkoutExerciseWhereUniqueInput | WorkoutExerciseWhereUniqueInput[]
    connect?: WorkoutExerciseWhereUniqueInput | WorkoutExerciseWhereUniqueInput[]
    update?: WorkoutExerciseUpdateWithWhereUniqueWithoutExerciseInput | WorkoutExerciseUpdateWithWhereUniqueWithoutExerciseInput[]
    updateMany?: WorkoutExerciseUpdateManyWithWhereWithoutExerciseInput | WorkoutExerciseUpdateManyWithWhereWithoutExerciseInput[]
    deleteMany?: WorkoutExerciseScalarWhereInput | WorkoutExerciseScalarWhereInput[]
  }

  export type AIWorkoutExerciseUpdateManyWithoutExerciseNestedInput = {
    create?: XOR<AIWorkoutExerciseCreateWithoutExerciseInput, AIWorkoutExerciseUncheckedCreateWithoutExerciseInput> | AIWorkoutExerciseCreateWithoutExerciseInput[] | AIWorkoutExerciseUncheckedCreateWithoutExerciseInput[]
    connectOrCreate?: AIWorkoutExerciseCreateOrConnectWithoutExerciseInput | AIWorkoutExerciseCreateOrConnectWithoutExerciseInput[]
    upsert?: AIWorkoutExerciseUpsertWithWhereUniqueWithoutExerciseInput | AIWorkoutExerciseUpsertWithWhereUniqueWithoutExerciseInput[]
    createMany?: AIWorkoutExerciseCreateManyExerciseInputEnvelope
    set?: AIWorkoutExerciseWhereUniqueInput | AIWorkoutExerciseWhereUniqueInput[]
    disconnect?: AIWorkoutExerciseWhereUniqueInput | AIWorkoutExerciseWhereUniqueInput[]
    delete?: AIWorkoutExerciseWhereUniqueInput | AIWorkoutExerciseWhereUniqueInput[]
    connect?: AIWorkoutExerciseWhereUniqueInput | AIWorkoutExerciseWhereUniqueInput[]
    update?: AIWorkoutExerciseUpdateWithWhereUniqueWithoutExerciseInput | AIWorkoutExerciseUpdateWithWhereUniqueWithoutExerciseInput[]
    updateMany?: AIWorkoutExerciseUpdateManyWithWhereWithoutExerciseInput | AIWorkoutExerciseUpdateManyWithWhereWithoutExerciseInput[]
    deleteMany?: AIWorkoutExerciseScalarWhereInput | AIWorkoutExerciseScalarWhereInput[]
  }

  export type WorkoutExerciseUncheckedUpdateManyWithoutExerciseNestedInput = {
    create?: XOR<WorkoutExerciseCreateWithoutExerciseInput, WorkoutExerciseUncheckedCreateWithoutExerciseInput> | WorkoutExerciseCreateWithoutExerciseInput[] | WorkoutExerciseUncheckedCreateWithoutExerciseInput[]
    connectOrCreate?: WorkoutExerciseCreateOrConnectWithoutExerciseInput | WorkoutExerciseCreateOrConnectWithoutExerciseInput[]
    upsert?: WorkoutExerciseUpsertWithWhereUniqueWithoutExerciseInput | WorkoutExerciseUpsertWithWhereUniqueWithoutExerciseInput[]
    createMany?: WorkoutExerciseCreateManyExerciseInputEnvelope
    set?: WorkoutExerciseWhereUniqueInput | WorkoutExerciseWhereUniqueInput[]
    disconnect?: WorkoutExerciseWhereUniqueInput | WorkoutExerciseWhereUniqueInput[]
    delete?: WorkoutExerciseWhereUniqueInput | WorkoutExerciseWhereUniqueInput[]
    connect?: WorkoutExerciseWhereUniqueInput | WorkoutExerciseWhereUniqueInput[]
    update?: WorkoutExerciseUpdateWithWhereUniqueWithoutExerciseInput | WorkoutExerciseUpdateWithWhereUniqueWithoutExerciseInput[]
    updateMany?: WorkoutExerciseUpdateManyWithWhereWithoutExerciseInput | WorkoutExerciseUpdateManyWithWhereWithoutExerciseInput[]
    deleteMany?: WorkoutExerciseScalarWhereInput | WorkoutExerciseScalarWhereInput[]
  }

  export type AIWorkoutExerciseUncheckedUpdateManyWithoutExerciseNestedInput = {
    create?: XOR<AIWorkoutExerciseCreateWithoutExerciseInput, AIWorkoutExerciseUncheckedCreateWithoutExerciseInput> | AIWorkoutExerciseCreateWithoutExerciseInput[] | AIWorkoutExerciseUncheckedCreateWithoutExerciseInput[]
    connectOrCreate?: AIWorkoutExerciseCreateOrConnectWithoutExerciseInput | AIWorkoutExerciseCreateOrConnectWithoutExerciseInput[]
    upsert?: AIWorkoutExerciseUpsertWithWhereUniqueWithoutExerciseInput | AIWorkoutExerciseUpsertWithWhereUniqueWithoutExerciseInput[]
    createMany?: AIWorkoutExerciseCreateManyExerciseInputEnvelope
    set?: AIWorkoutExerciseWhereUniqueInput | AIWorkoutExerciseWhereUniqueInput[]
    disconnect?: AIWorkoutExerciseWhereUniqueInput | AIWorkoutExerciseWhereUniqueInput[]
    delete?: AIWorkoutExerciseWhereUniqueInput | AIWorkoutExerciseWhereUniqueInput[]
    connect?: AIWorkoutExerciseWhereUniqueInput | AIWorkoutExerciseWhereUniqueInput[]
    update?: AIWorkoutExerciseUpdateWithWhereUniqueWithoutExerciseInput | AIWorkoutExerciseUpdateWithWhereUniqueWithoutExerciseInput[]
    updateMany?: AIWorkoutExerciseUpdateManyWithWhereWithoutExerciseInput | AIWorkoutExerciseUpdateManyWithWhereWithoutExerciseInput[]
    deleteMany?: AIWorkoutExerciseScalarWhereInput | AIWorkoutExerciseScalarWhereInput[]
  }

  export type WorkoutCreateNestedOneWithoutExercisesInput = {
    create?: XOR<WorkoutCreateWithoutExercisesInput, WorkoutUncheckedCreateWithoutExercisesInput>
    connectOrCreate?: WorkoutCreateOrConnectWithoutExercisesInput
    connect?: WorkoutWhereUniqueInput
  }

  export type ExerciseCreateNestedOneWithoutWorkoutExercisesInput = {
    create?: XOR<ExerciseCreateWithoutWorkoutExercisesInput, ExerciseUncheckedCreateWithoutWorkoutExercisesInput>
    connectOrCreate?: ExerciseCreateOrConnectWithoutWorkoutExercisesInput
    connect?: ExerciseWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type WorkoutUpdateOneRequiredWithoutExercisesNestedInput = {
    create?: XOR<WorkoutCreateWithoutExercisesInput, WorkoutUncheckedCreateWithoutExercisesInput>
    connectOrCreate?: WorkoutCreateOrConnectWithoutExercisesInput
    upsert?: WorkoutUpsertWithoutExercisesInput
    connect?: WorkoutWhereUniqueInput
    update?: XOR<XOR<WorkoutUpdateToOneWithWhereWithoutExercisesInput, WorkoutUpdateWithoutExercisesInput>, WorkoutUncheckedUpdateWithoutExercisesInput>
  }

  export type ExerciseUpdateOneRequiredWithoutWorkoutExercisesNestedInput = {
    create?: XOR<ExerciseCreateWithoutWorkoutExercisesInput, ExerciseUncheckedCreateWithoutWorkoutExercisesInput>
    connectOrCreate?: ExerciseCreateOrConnectWithoutWorkoutExercisesInput
    upsert?: ExerciseUpsertWithoutWorkoutExercisesInput
    connect?: ExerciseWhereUniqueInput
    update?: XOR<XOR<ExerciseUpdateToOneWithWhereWithoutWorkoutExercisesInput, ExerciseUpdateWithoutWorkoutExercisesInput>, ExerciseUncheckedUpdateWithoutWorkoutExercisesInput>
  }

  export type UserCreateNestedOneWithoutGoalsInput = {
    create?: XOR<UserCreateWithoutGoalsInput, UserUncheckedCreateWithoutGoalsInput>
    connectOrCreate?: UserCreateOrConnectWithoutGoalsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumGoalTypeFieldUpdateOperationsInput = {
    set?: $Enums.GoalType
  }

  export type UserUpdateOneRequiredWithoutGoalsNestedInput = {
    create?: XOR<UserCreateWithoutGoalsInput, UserUncheckedCreateWithoutGoalsInput>
    connectOrCreate?: UserCreateOrConnectWithoutGoalsInput
    upsert?: UserUpsertWithoutGoalsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutGoalsInput, UserUpdateWithoutGoalsInput>, UserUncheckedUpdateWithoutGoalsInput>
  }

  export type UserCreateNestedOneWithoutAchievementsInput = {
    create?: XOR<UserCreateWithoutAchievementsInput, UserUncheckedCreateWithoutAchievementsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAchievementsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutAchievementsNestedInput = {
    create?: XOR<UserCreateWithoutAchievementsInput, UserUncheckedCreateWithoutAchievementsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAchievementsInput
    upsert?: UserUpsertWithoutAchievementsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAchievementsInput, UserUpdateWithoutAchievementsInput>, UserUncheckedUpdateWithoutAchievementsInput>
  }

  export type UserCreateNestedOneWithoutWeightHistoryInput = {
    create?: XOR<UserCreateWithoutWeightHistoryInput, UserUncheckedCreateWithoutWeightHistoryInput>
    connectOrCreate?: UserCreateOrConnectWithoutWeightHistoryInput
    connect?: UserWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutWeightHistoryNestedInput = {
    create?: XOR<UserCreateWithoutWeightHistoryInput, UserUncheckedCreateWithoutWeightHistoryInput>
    connectOrCreate?: UserCreateOrConnectWithoutWeightHistoryInput
    upsert?: UserUpsertWithoutWeightHistoryInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWeightHistoryInput, UserUpdateWithoutWeightHistoryInput>, UserUncheckedUpdateWithoutWeightHistoryInput>
  }

  export type UserCreateNestedOneWithoutBodyMeasurementsInput = {
    create?: XOR<UserCreateWithoutBodyMeasurementsInput, UserUncheckedCreateWithoutBodyMeasurementsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBodyMeasurementsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumMeasurementTypeFieldUpdateOperationsInput = {
    set?: $Enums.MeasurementType
  }

  export type UserUpdateOneRequiredWithoutBodyMeasurementsNestedInput = {
    create?: XOR<UserCreateWithoutBodyMeasurementsInput, UserUncheckedCreateWithoutBodyMeasurementsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBodyMeasurementsInput
    upsert?: UserUpsertWithoutBodyMeasurementsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBodyMeasurementsInput, UserUpdateWithoutBodyMeasurementsInput>, UserUncheckedUpdateWithoutBodyMeasurementsInput>
  }

  export type UserCreateNestedOneWithoutAiWorkoutsInput = {
    create?: XOR<UserCreateWithoutAiWorkoutsInput, UserUncheckedCreateWithoutAiWorkoutsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAiWorkoutsInput
    connect?: UserWhereUniqueInput
  }

  export type AIWorkoutExerciseCreateNestedManyWithoutAiWorkoutInput = {
    create?: XOR<AIWorkoutExerciseCreateWithoutAiWorkoutInput, AIWorkoutExerciseUncheckedCreateWithoutAiWorkoutInput> | AIWorkoutExerciseCreateWithoutAiWorkoutInput[] | AIWorkoutExerciseUncheckedCreateWithoutAiWorkoutInput[]
    connectOrCreate?: AIWorkoutExerciseCreateOrConnectWithoutAiWorkoutInput | AIWorkoutExerciseCreateOrConnectWithoutAiWorkoutInput[]
    createMany?: AIWorkoutExerciseCreateManyAiWorkoutInputEnvelope
    connect?: AIWorkoutExerciseWhereUniqueInput | AIWorkoutExerciseWhereUniqueInput[]
  }

  export type AIWorkoutExerciseUncheckedCreateNestedManyWithoutAiWorkoutInput = {
    create?: XOR<AIWorkoutExerciseCreateWithoutAiWorkoutInput, AIWorkoutExerciseUncheckedCreateWithoutAiWorkoutInput> | AIWorkoutExerciseCreateWithoutAiWorkoutInput[] | AIWorkoutExerciseUncheckedCreateWithoutAiWorkoutInput[]
    connectOrCreate?: AIWorkoutExerciseCreateOrConnectWithoutAiWorkoutInput | AIWorkoutExerciseCreateOrConnectWithoutAiWorkoutInput[]
    createMany?: AIWorkoutExerciseCreateManyAiWorkoutInputEnvelope
    connect?: AIWorkoutExerciseWhereUniqueInput | AIWorkoutExerciseWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutAiWorkoutsNestedInput = {
    create?: XOR<UserCreateWithoutAiWorkoutsInput, UserUncheckedCreateWithoutAiWorkoutsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAiWorkoutsInput
    upsert?: UserUpsertWithoutAiWorkoutsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAiWorkoutsInput, UserUpdateWithoutAiWorkoutsInput>, UserUncheckedUpdateWithoutAiWorkoutsInput>
  }

  export type AIWorkoutExerciseUpdateManyWithoutAiWorkoutNestedInput = {
    create?: XOR<AIWorkoutExerciseCreateWithoutAiWorkoutInput, AIWorkoutExerciseUncheckedCreateWithoutAiWorkoutInput> | AIWorkoutExerciseCreateWithoutAiWorkoutInput[] | AIWorkoutExerciseUncheckedCreateWithoutAiWorkoutInput[]
    connectOrCreate?: AIWorkoutExerciseCreateOrConnectWithoutAiWorkoutInput | AIWorkoutExerciseCreateOrConnectWithoutAiWorkoutInput[]
    upsert?: AIWorkoutExerciseUpsertWithWhereUniqueWithoutAiWorkoutInput | AIWorkoutExerciseUpsertWithWhereUniqueWithoutAiWorkoutInput[]
    createMany?: AIWorkoutExerciseCreateManyAiWorkoutInputEnvelope
    set?: AIWorkoutExerciseWhereUniqueInput | AIWorkoutExerciseWhereUniqueInput[]
    disconnect?: AIWorkoutExerciseWhereUniqueInput | AIWorkoutExerciseWhereUniqueInput[]
    delete?: AIWorkoutExerciseWhereUniqueInput | AIWorkoutExerciseWhereUniqueInput[]
    connect?: AIWorkoutExerciseWhereUniqueInput | AIWorkoutExerciseWhereUniqueInput[]
    update?: AIWorkoutExerciseUpdateWithWhereUniqueWithoutAiWorkoutInput | AIWorkoutExerciseUpdateWithWhereUniqueWithoutAiWorkoutInput[]
    updateMany?: AIWorkoutExerciseUpdateManyWithWhereWithoutAiWorkoutInput | AIWorkoutExerciseUpdateManyWithWhereWithoutAiWorkoutInput[]
    deleteMany?: AIWorkoutExerciseScalarWhereInput | AIWorkoutExerciseScalarWhereInput[]
  }

  export type AIWorkoutExerciseUncheckedUpdateManyWithoutAiWorkoutNestedInput = {
    create?: XOR<AIWorkoutExerciseCreateWithoutAiWorkoutInput, AIWorkoutExerciseUncheckedCreateWithoutAiWorkoutInput> | AIWorkoutExerciseCreateWithoutAiWorkoutInput[] | AIWorkoutExerciseUncheckedCreateWithoutAiWorkoutInput[]
    connectOrCreate?: AIWorkoutExerciseCreateOrConnectWithoutAiWorkoutInput | AIWorkoutExerciseCreateOrConnectWithoutAiWorkoutInput[]
    upsert?: AIWorkoutExerciseUpsertWithWhereUniqueWithoutAiWorkoutInput | AIWorkoutExerciseUpsertWithWhereUniqueWithoutAiWorkoutInput[]
    createMany?: AIWorkoutExerciseCreateManyAiWorkoutInputEnvelope
    set?: AIWorkoutExerciseWhereUniqueInput | AIWorkoutExerciseWhereUniqueInput[]
    disconnect?: AIWorkoutExerciseWhereUniqueInput | AIWorkoutExerciseWhereUniqueInput[]
    delete?: AIWorkoutExerciseWhereUniqueInput | AIWorkoutExerciseWhereUniqueInput[]
    connect?: AIWorkoutExerciseWhereUniqueInput | AIWorkoutExerciseWhereUniqueInput[]
    update?: AIWorkoutExerciseUpdateWithWhereUniqueWithoutAiWorkoutInput | AIWorkoutExerciseUpdateWithWhereUniqueWithoutAiWorkoutInput[]
    updateMany?: AIWorkoutExerciseUpdateManyWithWhereWithoutAiWorkoutInput | AIWorkoutExerciseUpdateManyWithWhereWithoutAiWorkoutInput[]
    deleteMany?: AIWorkoutExerciseScalarWhereInput | AIWorkoutExerciseScalarWhereInput[]
  }

  export type AIWorkoutCreateNestedOneWithoutExercisesInput = {
    create?: XOR<AIWorkoutCreateWithoutExercisesInput, AIWorkoutUncheckedCreateWithoutExercisesInput>
    connectOrCreate?: AIWorkoutCreateOrConnectWithoutExercisesInput
    connect?: AIWorkoutWhereUniqueInput
  }

  export type ExerciseCreateNestedOneWithoutAiWorkoutExercisesInput = {
    create?: XOR<ExerciseCreateWithoutAiWorkoutExercisesInput, ExerciseUncheckedCreateWithoutAiWorkoutExercisesInput>
    connectOrCreate?: ExerciseCreateOrConnectWithoutAiWorkoutExercisesInput
    connect?: ExerciseWhereUniqueInput
  }

  export type AIWorkoutUpdateOneRequiredWithoutExercisesNestedInput = {
    create?: XOR<AIWorkoutCreateWithoutExercisesInput, AIWorkoutUncheckedCreateWithoutExercisesInput>
    connectOrCreate?: AIWorkoutCreateOrConnectWithoutExercisesInput
    upsert?: AIWorkoutUpsertWithoutExercisesInput
    connect?: AIWorkoutWhereUniqueInput
    update?: XOR<XOR<AIWorkoutUpdateToOneWithWhereWithoutExercisesInput, AIWorkoutUpdateWithoutExercisesInput>, AIWorkoutUncheckedUpdateWithoutExercisesInput>
  }

  export type ExerciseUpdateOneWithoutAiWorkoutExercisesNestedInput = {
    create?: XOR<ExerciseCreateWithoutAiWorkoutExercisesInput, ExerciseUncheckedCreateWithoutAiWorkoutExercisesInput>
    connectOrCreate?: ExerciseCreateOrConnectWithoutAiWorkoutExercisesInput
    upsert?: ExerciseUpsertWithoutAiWorkoutExercisesInput
    disconnect?: ExerciseWhereInput | boolean
    delete?: ExerciseWhereInput | boolean
    connect?: ExerciseWhereUniqueInput
    update?: XOR<XOR<ExerciseUpdateToOneWithWhereWithoutAiWorkoutExercisesInput, ExerciseUpdateWithoutAiWorkoutExercisesInput>, ExerciseUncheckedUpdateWithoutAiWorkoutExercisesInput>
  }

  export type UserCreateNestedOneWithoutUserSettingsInput = {
    create?: XOR<UserCreateWithoutUserSettingsInput, UserUncheckedCreateWithoutUserSettingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserSettingsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutUserSettingsNestedInput = {
    create?: XOR<UserCreateWithoutUserSettingsInput, UserUncheckedCreateWithoutUserSettingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserSettingsInput
    upsert?: UserUpsertWithoutUserSettingsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserSettingsInput, UserUpdateWithoutUserSettingsInput>, UserUncheckedUpdateWithoutUserSettingsInput>
  }

  export type UserCreateNestedOneWithoutProgressStatsInput = {
    create?: XOR<UserCreateWithoutProgressStatsInput, UserUncheckedCreateWithoutProgressStatsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProgressStatsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumStatTypeFieldUpdateOperationsInput = {
    set?: $Enums.StatType
  }

  export type UserUpdateOneRequiredWithoutProgressStatsNestedInput = {
    create?: XOR<UserCreateWithoutProgressStatsInput, UserUncheckedCreateWithoutProgressStatsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProgressStatsInput
    upsert?: UserUpsertWithoutProgressStatsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProgressStatsInput, UserUpdateWithoutProgressStatsInput>, UserUncheckedUpdateWithoutProgressStatsInput>
  }

  export type UserCreateNestedOneWithoutWorkoutStreakInput = {
    create?: XOR<UserCreateWithoutWorkoutStreakInput, UserUncheckedCreateWithoutWorkoutStreakInput>
    connectOrCreate?: UserCreateOrConnectWithoutWorkoutStreakInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutWorkoutStreakNestedInput = {
    create?: XOR<UserCreateWithoutWorkoutStreakInput, UserUncheckedCreateWithoutWorkoutStreakInput>
    connectOrCreate?: UserCreateOrConnectWithoutWorkoutStreakInput
    upsert?: UserUpsertWithoutWorkoutStreakInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWorkoutStreakInput, UserUpdateWithoutWorkoutStreakInput>, UserUncheckedUpdateWithoutWorkoutStreakInput>
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

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumWorkoutStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.WorkoutStatus | EnumWorkoutStatusFieldRefInput<$PrismaModel>
    in?: $Enums.WorkoutStatus[] | ListEnumWorkoutStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.WorkoutStatus[] | ListEnumWorkoutStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumWorkoutStatusFilter<$PrismaModel> | $Enums.WorkoutStatus
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumWorkoutStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WorkoutStatus | EnumWorkoutStatusFieldRefInput<$PrismaModel>
    in?: $Enums.WorkoutStatus[] | ListEnumWorkoutStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.WorkoutStatus[] | ListEnumWorkoutStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumWorkoutStatusWithAggregatesFilter<$PrismaModel> | $Enums.WorkoutStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWorkoutStatusFilter<$PrismaModel>
    _max?: NestedEnumWorkoutStatusFilter<$PrismaModel>
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

  export type NestedEnumGoalTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.GoalType | EnumGoalTypeFieldRefInput<$PrismaModel>
    in?: $Enums.GoalType[] | ListEnumGoalTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.GoalType[] | ListEnumGoalTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumGoalTypeFilter<$PrismaModel> | $Enums.GoalType
  }

  export type NestedEnumGoalTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GoalType | EnumGoalTypeFieldRefInput<$PrismaModel>
    in?: $Enums.GoalType[] | ListEnumGoalTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.GoalType[] | ListEnumGoalTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumGoalTypeWithAggregatesFilter<$PrismaModel> | $Enums.GoalType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGoalTypeFilter<$PrismaModel>
    _max?: NestedEnumGoalTypeFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumMeasurementTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MeasurementType | EnumMeasurementTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MeasurementType[] | ListEnumMeasurementTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MeasurementType[] | ListEnumMeasurementTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMeasurementTypeFilter<$PrismaModel> | $Enums.MeasurementType
  }

  export type NestedEnumMeasurementTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MeasurementType | EnumMeasurementTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MeasurementType[] | ListEnumMeasurementTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MeasurementType[] | ListEnumMeasurementTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMeasurementTypeWithAggregatesFilter<$PrismaModel> | $Enums.MeasurementType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMeasurementTypeFilter<$PrismaModel>
    _max?: NestedEnumMeasurementTypeFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumStatTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.StatType | EnumStatTypeFieldRefInput<$PrismaModel>
    in?: $Enums.StatType[] | ListEnumStatTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatType[] | ListEnumStatTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumStatTypeFilter<$PrismaModel> | $Enums.StatType
  }

  export type NestedEnumStatTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatType | EnumStatTypeFieldRefInput<$PrismaModel>
    in?: $Enums.StatType[] | ListEnumStatTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatType[] | ListEnumStatTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumStatTypeWithAggregatesFilter<$PrismaModel> | $Enums.StatType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatTypeFilter<$PrismaModel>
    _max?: NestedEnumStatTypeFilter<$PrismaModel>
  }

  export type WorkoutCreateWithoutUserInput = {
    id?: string
    name: string
    date?: Date | string
    duration?: number | null
    notes?: string | null
    isCompleted?: boolean
    status?: $Enums.WorkoutStatus
    startedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    category?: string | null
    exercises?: WorkoutExerciseCreateNestedManyWithoutWorkoutInput
  }

  export type WorkoutUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    date?: Date | string
    duration?: number | null
    notes?: string | null
    isCompleted?: boolean
    status?: $Enums.WorkoutStatus
    startedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    category?: string | null
    exercises?: WorkoutExerciseUncheckedCreateNestedManyWithoutWorkoutInput
  }

  export type WorkoutCreateOrConnectWithoutUserInput = {
    where: WorkoutWhereUniqueInput
    create: XOR<WorkoutCreateWithoutUserInput, WorkoutUncheckedCreateWithoutUserInput>
  }

  export type WorkoutCreateManyUserInputEnvelope = {
    data: WorkoutCreateManyUserInput | WorkoutCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type GoalCreateWithoutUserInput = {
    id?: string
    name: string
    description?: string | null
    targetDate?: Date | string | null
    isCompleted?: boolean
    type: $Enums.GoalType
    metric?: string | null
    targetValue?: number | null
    currentValue?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GoalUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    description?: string | null
    targetDate?: Date | string | null
    isCompleted?: boolean
    type: $Enums.GoalType
    metric?: string | null
    targetValue?: number | null
    currentValue?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GoalCreateOrConnectWithoutUserInput = {
    where: GoalWhereUniqueInput
    create: XOR<GoalCreateWithoutUserInput, GoalUncheckedCreateWithoutUserInput>
  }

  export type GoalCreateManyUserInputEnvelope = {
    data: GoalCreateManyUserInput | GoalCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AchievementCreateWithoutUserInput = {
    id?: string
    name: string
    description: string
    image?: string | null
    unlockedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AchievementUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    description: string
    image?: string | null
    unlockedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AchievementCreateOrConnectWithoutUserInput = {
    where: AchievementWhereUniqueInput
    create: XOR<AchievementCreateWithoutUserInput, AchievementUncheckedCreateWithoutUserInput>
  }

  export type AchievementCreateManyUserInputEnvelope = {
    data: AchievementCreateManyUserInput | AchievementCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type WeightHistoryCreateWithoutUserInput = {
    id?: string
    weight: number
    date?: Date | string
    notes?: string | null
  }

  export type WeightHistoryUncheckedCreateWithoutUserInput = {
    id?: string
    weight: number
    date?: Date | string
    notes?: string | null
  }

  export type WeightHistoryCreateOrConnectWithoutUserInput = {
    where: WeightHistoryWhereUniqueInput
    create: XOR<WeightHistoryCreateWithoutUserInput, WeightHistoryUncheckedCreateWithoutUserInput>
  }

  export type WeightHistoryCreateManyUserInputEnvelope = {
    data: WeightHistoryCreateManyUserInput | WeightHistoryCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type BodyMeasurementCreateWithoutUserInput = {
    id?: string
    date?: Date | string
    type: $Enums.MeasurementType
    value: number
    notes?: string | null
  }

  export type BodyMeasurementUncheckedCreateWithoutUserInput = {
    id?: string
    date?: Date | string
    type: $Enums.MeasurementType
    value: number
    notes?: string | null
  }

  export type BodyMeasurementCreateOrConnectWithoutUserInput = {
    where: BodyMeasurementWhereUniqueInput
    create: XOR<BodyMeasurementCreateWithoutUserInput, BodyMeasurementUncheckedCreateWithoutUserInput>
  }

  export type BodyMeasurementCreateManyUserInputEnvelope = {
    data: BodyMeasurementCreateManyUserInput | BodyMeasurementCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AIWorkoutCreateWithoutUserInput = {
    id?: string
    name: string
    description?: string | null
    fitnessLevel: string
    goal: string
    duration: number
    equipment: string
    focusArea: string
    warmup?: NullableJsonNullValueInput | InputJsonValue
    cooldown?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    exercises?: AIWorkoutExerciseCreateNestedManyWithoutAiWorkoutInput
  }

  export type AIWorkoutUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    description?: string | null
    fitnessLevel: string
    goal: string
    duration: number
    equipment: string
    focusArea: string
    warmup?: NullableJsonNullValueInput | InputJsonValue
    cooldown?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    exercises?: AIWorkoutExerciseUncheckedCreateNestedManyWithoutAiWorkoutInput
  }

  export type AIWorkoutCreateOrConnectWithoutUserInput = {
    where: AIWorkoutWhereUniqueInput
    create: XOR<AIWorkoutCreateWithoutUserInput, AIWorkoutUncheckedCreateWithoutUserInput>
  }

  export type AIWorkoutCreateManyUserInputEnvelope = {
    data: AIWorkoutCreateManyUserInput | AIWorkoutCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserSettingsCreateWithoutUserInput = {
    id?: string
    theme?: string
    units?: string
    language?: string
    privacyLevel?: string
    workoutReminders?: boolean
    progressUpdates?: boolean
    achievementAlerts?: boolean
    tipNotifications?: boolean
  }

  export type UserSettingsUncheckedCreateWithoutUserInput = {
    id?: string
    theme?: string
    units?: string
    language?: string
    privacyLevel?: string
    workoutReminders?: boolean
    progressUpdates?: boolean
    achievementAlerts?: boolean
    tipNotifications?: boolean
  }

  export type UserSettingsCreateOrConnectWithoutUserInput = {
    where: UserSettingsWhereUniqueInput
    create: XOR<UserSettingsCreateWithoutUserInput, UserSettingsUncheckedCreateWithoutUserInput>
  }

  export type ProgressStatCreateWithoutUserInput = {
    id?: string
    date?: Date | string
    statType: $Enums.StatType
    value: number
  }

  export type ProgressStatUncheckedCreateWithoutUserInput = {
    id?: string
    date?: Date | string
    statType: $Enums.StatType
    value: number
  }

  export type ProgressStatCreateOrConnectWithoutUserInput = {
    where: ProgressStatWhereUniqueInput
    create: XOR<ProgressStatCreateWithoutUserInput, ProgressStatUncheckedCreateWithoutUserInput>
  }

  export type ProgressStatCreateManyUserInputEnvelope = {
    data: ProgressStatCreateManyUserInput | ProgressStatCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type WorkoutStreakCreateWithoutUserInput = {
    id?: string
    currentStreak?: number
    longestStreak?: number
    lastWorkoutDate?: Date | string | null
  }

  export type WorkoutStreakUncheckedCreateWithoutUserInput = {
    id?: string
    currentStreak?: number
    longestStreak?: number
    lastWorkoutDate?: Date | string | null
  }

  export type WorkoutStreakCreateOrConnectWithoutUserInput = {
    where: WorkoutStreakWhereUniqueInput
    create: XOR<WorkoutStreakCreateWithoutUserInput, WorkoutStreakUncheckedCreateWithoutUserInput>
  }

  export type WorkoutUpsertWithWhereUniqueWithoutUserInput = {
    where: WorkoutWhereUniqueInput
    update: XOR<WorkoutUpdateWithoutUserInput, WorkoutUncheckedUpdateWithoutUserInput>
    create: XOR<WorkoutCreateWithoutUserInput, WorkoutUncheckedCreateWithoutUserInput>
  }

  export type WorkoutUpdateWithWhereUniqueWithoutUserInput = {
    where: WorkoutWhereUniqueInput
    data: XOR<WorkoutUpdateWithoutUserInput, WorkoutUncheckedUpdateWithoutUserInput>
  }

  export type WorkoutUpdateManyWithWhereWithoutUserInput = {
    where: WorkoutScalarWhereInput
    data: XOR<WorkoutUpdateManyMutationInput, WorkoutUncheckedUpdateManyWithoutUserInput>
  }

  export type WorkoutScalarWhereInput = {
    AND?: WorkoutScalarWhereInput | WorkoutScalarWhereInput[]
    OR?: WorkoutScalarWhereInput[]
    NOT?: WorkoutScalarWhereInput | WorkoutScalarWhereInput[]
    id?: StringFilter<"Workout"> | string
    name?: StringFilter<"Workout"> | string
    date?: DateTimeFilter<"Workout"> | Date | string
    duration?: IntNullableFilter<"Workout"> | number | null
    notes?: StringNullableFilter<"Workout"> | string | null
    isCompleted?: BoolFilter<"Workout"> | boolean
    status?: EnumWorkoutStatusFilter<"Workout"> | $Enums.WorkoutStatus
    startedAt?: DateTimeNullableFilter<"Workout"> | Date | string | null
    createdAt?: DateTimeFilter<"Workout"> | Date | string
    updatedAt?: DateTimeFilter<"Workout"> | Date | string
    userId?: StringFilter<"Workout"> | string
    category?: StringNullableFilter<"Workout"> | string | null
  }

  export type GoalUpsertWithWhereUniqueWithoutUserInput = {
    where: GoalWhereUniqueInput
    update: XOR<GoalUpdateWithoutUserInput, GoalUncheckedUpdateWithoutUserInput>
    create: XOR<GoalCreateWithoutUserInput, GoalUncheckedCreateWithoutUserInput>
  }

  export type GoalUpdateWithWhereUniqueWithoutUserInput = {
    where: GoalWhereUniqueInput
    data: XOR<GoalUpdateWithoutUserInput, GoalUncheckedUpdateWithoutUserInput>
  }

  export type GoalUpdateManyWithWhereWithoutUserInput = {
    where: GoalScalarWhereInput
    data: XOR<GoalUpdateManyMutationInput, GoalUncheckedUpdateManyWithoutUserInput>
  }

  export type GoalScalarWhereInput = {
    AND?: GoalScalarWhereInput | GoalScalarWhereInput[]
    OR?: GoalScalarWhereInput[]
    NOT?: GoalScalarWhereInput | GoalScalarWhereInput[]
    id?: StringFilter<"Goal"> | string
    name?: StringFilter<"Goal"> | string
    description?: StringNullableFilter<"Goal"> | string | null
    targetDate?: DateTimeNullableFilter<"Goal"> | Date | string | null
    isCompleted?: BoolFilter<"Goal"> | boolean
    type?: EnumGoalTypeFilter<"Goal"> | $Enums.GoalType
    metric?: StringNullableFilter<"Goal"> | string | null
    targetValue?: FloatNullableFilter<"Goal"> | number | null
    currentValue?: FloatNullableFilter<"Goal"> | number | null
    createdAt?: DateTimeFilter<"Goal"> | Date | string
    updatedAt?: DateTimeFilter<"Goal"> | Date | string
    userId?: StringFilter<"Goal"> | string
  }

  export type AchievementUpsertWithWhereUniqueWithoutUserInput = {
    where: AchievementWhereUniqueInput
    update: XOR<AchievementUpdateWithoutUserInput, AchievementUncheckedUpdateWithoutUserInput>
    create: XOR<AchievementCreateWithoutUserInput, AchievementUncheckedCreateWithoutUserInput>
  }

  export type AchievementUpdateWithWhereUniqueWithoutUserInput = {
    where: AchievementWhereUniqueInput
    data: XOR<AchievementUpdateWithoutUserInput, AchievementUncheckedUpdateWithoutUserInput>
  }

  export type AchievementUpdateManyWithWhereWithoutUserInput = {
    where: AchievementScalarWhereInput
    data: XOR<AchievementUpdateManyMutationInput, AchievementUncheckedUpdateManyWithoutUserInput>
  }

  export type AchievementScalarWhereInput = {
    AND?: AchievementScalarWhereInput | AchievementScalarWhereInput[]
    OR?: AchievementScalarWhereInput[]
    NOT?: AchievementScalarWhereInput | AchievementScalarWhereInput[]
    id?: StringFilter<"Achievement"> | string
    name?: StringFilter<"Achievement"> | string
    description?: StringFilter<"Achievement"> | string
    image?: StringNullableFilter<"Achievement"> | string | null
    unlockedAt?: DateTimeNullableFilter<"Achievement"> | Date | string | null
    createdAt?: DateTimeFilter<"Achievement"> | Date | string
    updatedAt?: DateTimeFilter<"Achievement"> | Date | string
    userId?: StringFilter<"Achievement"> | string
  }

  export type WeightHistoryUpsertWithWhereUniqueWithoutUserInput = {
    where: WeightHistoryWhereUniqueInput
    update: XOR<WeightHistoryUpdateWithoutUserInput, WeightHistoryUncheckedUpdateWithoutUserInput>
    create: XOR<WeightHistoryCreateWithoutUserInput, WeightHistoryUncheckedCreateWithoutUserInput>
  }

  export type WeightHistoryUpdateWithWhereUniqueWithoutUserInput = {
    where: WeightHistoryWhereUniqueInput
    data: XOR<WeightHistoryUpdateWithoutUserInput, WeightHistoryUncheckedUpdateWithoutUserInput>
  }

  export type WeightHistoryUpdateManyWithWhereWithoutUserInput = {
    where: WeightHistoryScalarWhereInput
    data: XOR<WeightHistoryUpdateManyMutationInput, WeightHistoryUncheckedUpdateManyWithoutUserInput>
  }

  export type WeightHistoryScalarWhereInput = {
    AND?: WeightHistoryScalarWhereInput | WeightHistoryScalarWhereInput[]
    OR?: WeightHistoryScalarWhereInput[]
    NOT?: WeightHistoryScalarWhereInput | WeightHistoryScalarWhereInput[]
    id?: StringFilter<"WeightHistory"> | string
    weight?: FloatFilter<"WeightHistory"> | number
    date?: DateTimeFilter<"WeightHistory"> | Date | string
    notes?: StringNullableFilter<"WeightHistory"> | string | null
    userId?: StringFilter<"WeightHistory"> | string
  }

  export type BodyMeasurementUpsertWithWhereUniqueWithoutUserInput = {
    where: BodyMeasurementWhereUniqueInput
    update: XOR<BodyMeasurementUpdateWithoutUserInput, BodyMeasurementUncheckedUpdateWithoutUserInput>
    create: XOR<BodyMeasurementCreateWithoutUserInput, BodyMeasurementUncheckedCreateWithoutUserInput>
  }

  export type BodyMeasurementUpdateWithWhereUniqueWithoutUserInput = {
    where: BodyMeasurementWhereUniqueInput
    data: XOR<BodyMeasurementUpdateWithoutUserInput, BodyMeasurementUncheckedUpdateWithoutUserInput>
  }

  export type BodyMeasurementUpdateManyWithWhereWithoutUserInput = {
    where: BodyMeasurementScalarWhereInput
    data: XOR<BodyMeasurementUpdateManyMutationInput, BodyMeasurementUncheckedUpdateManyWithoutUserInput>
  }

  export type BodyMeasurementScalarWhereInput = {
    AND?: BodyMeasurementScalarWhereInput | BodyMeasurementScalarWhereInput[]
    OR?: BodyMeasurementScalarWhereInput[]
    NOT?: BodyMeasurementScalarWhereInput | BodyMeasurementScalarWhereInput[]
    id?: StringFilter<"BodyMeasurement"> | string
    date?: DateTimeFilter<"BodyMeasurement"> | Date | string
    type?: EnumMeasurementTypeFilter<"BodyMeasurement"> | $Enums.MeasurementType
    value?: FloatFilter<"BodyMeasurement"> | number
    notes?: StringNullableFilter<"BodyMeasurement"> | string | null
    userId?: StringFilter<"BodyMeasurement"> | string
  }

  export type AIWorkoutUpsertWithWhereUniqueWithoutUserInput = {
    where: AIWorkoutWhereUniqueInput
    update: XOR<AIWorkoutUpdateWithoutUserInput, AIWorkoutUncheckedUpdateWithoutUserInput>
    create: XOR<AIWorkoutCreateWithoutUserInput, AIWorkoutUncheckedCreateWithoutUserInput>
  }

  export type AIWorkoutUpdateWithWhereUniqueWithoutUserInput = {
    where: AIWorkoutWhereUniqueInput
    data: XOR<AIWorkoutUpdateWithoutUserInput, AIWorkoutUncheckedUpdateWithoutUserInput>
  }

  export type AIWorkoutUpdateManyWithWhereWithoutUserInput = {
    where: AIWorkoutScalarWhereInput
    data: XOR<AIWorkoutUpdateManyMutationInput, AIWorkoutUncheckedUpdateManyWithoutUserInput>
  }

  export type AIWorkoutScalarWhereInput = {
    AND?: AIWorkoutScalarWhereInput | AIWorkoutScalarWhereInput[]
    OR?: AIWorkoutScalarWhereInput[]
    NOT?: AIWorkoutScalarWhereInput | AIWorkoutScalarWhereInput[]
    id?: StringFilter<"AIWorkout"> | string
    name?: StringFilter<"AIWorkout"> | string
    description?: StringNullableFilter<"AIWorkout"> | string | null
    fitnessLevel?: StringFilter<"AIWorkout"> | string
    goal?: StringFilter<"AIWorkout"> | string
    duration?: IntFilter<"AIWorkout"> | number
    equipment?: StringFilter<"AIWorkout"> | string
    focusArea?: StringFilter<"AIWorkout"> | string
    warmup?: JsonNullableFilter<"AIWorkout">
    cooldown?: JsonNullableFilter<"AIWorkout">
    createdAt?: DateTimeFilter<"AIWorkout"> | Date | string
    userId?: StringFilter<"AIWorkout"> | string
  }

  export type UserSettingsUpsertWithoutUserInput = {
    update: XOR<UserSettingsUpdateWithoutUserInput, UserSettingsUncheckedUpdateWithoutUserInput>
    create: XOR<UserSettingsCreateWithoutUserInput, UserSettingsUncheckedCreateWithoutUserInput>
    where?: UserSettingsWhereInput
  }

  export type UserSettingsUpdateToOneWithWhereWithoutUserInput = {
    where?: UserSettingsWhereInput
    data: XOR<UserSettingsUpdateWithoutUserInput, UserSettingsUncheckedUpdateWithoutUserInput>
  }

  export type UserSettingsUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    theme?: StringFieldUpdateOperationsInput | string
    units?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    privacyLevel?: StringFieldUpdateOperationsInput | string
    workoutReminders?: BoolFieldUpdateOperationsInput | boolean
    progressUpdates?: BoolFieldUpdateOperationsInput | boolean
    achievementAlerts?: BoolFieldUpdateOperationsInput | boolean
    tipNotifications?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserSettingsUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    theme?: StringFieldUpdateOperationsInput | string
    units?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    privacyLevel?: StringFieldUpdateOperationsInput | string
    workoutReminders?: BoolFieldUpdateOperationsInput | boolean
    progressUpdates?: BoolFieldUpdateOperationsInput | boolean
    achievementAlerts?: BoolFieldUpdateOperationsInput | boolean
    tipNotifications?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProgressStatUpsertWithWhereUniqueWithoutUserInput = {
    where: ProgressStatWhereUniqueInput
    update: XOR<ProgressStatUpdateWithoutUserInput, ProgressStatUncheckedUpdateWithoutUserInput>
    create: XOR<ProgressStatCreateWithoutUserInput, ProgressStatUncheckedCreateWithoutUserInput>
  }

  export type ProgressStatUpdateWithWhereUniqueWithoutUserInput = {
    where: ProgressStatWhereUniqueInput
    data: XOR<ProgressStatUpdateWithoutUserInput, ProgressStatUncheckedUpdateWithoutUserInput>
  }

  export type ProgressStatUpdateManyWithWhereWithoutUserInput = {
    where: ProgressStatScalarWhereInput
    data: XOR<ProgressStatUpdateManyMutationInput, ProgressStatUncheckedUpdateManyWithoutUserInput>
  }

  export type ProgressStatScalarWhereInput = {
    AND?: ProgressStatScalarWhereInput | ProgressStatScalarWhereInput[]
    OR?: ProgressStatScalarWhereInput[]
    NOT?: ProgressStatScalarWhereInput | ProgressStatScalarWhereInput[]
    id?: StringFilter<"ProgressStat"> | string
    date?: DateTimeFilter<"ProgressStat"> | Date | string
    statType?: EnumStatTypeFilter<"ProgressStat"> | $Enums.StatType
    value?: FloatFilter<"ProgressStat"> | number
    userId?: StringFilter<"ProgressStat"> | string
  }

  export type WorkoutStreakUpsertWithoutUserInput = {
    update: XOR<WorkoutStreakUpdateWithoutUserInput, WorkoutStreakUncheckedUpdateWithoutUserInput>
    create: XOR<WorkoutStreakCreateWithoutUserInput, WorkoutStreakUncheckedCreateWithoutUserInput>
    where?: WorkoutStreakWhereInput
  }

  export type WorkoutStreakUpdateToOneWithWhereWithoutUserInput = {
    where?: WorkoutStreakWhereInput
    data: XOR<WorkoutStreakUpdateWithoutUserInput, WorkoutStreakUncheckedUpdateWithoutUserInput>
  }

  export type WorkoutStreakUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    currentStreak?: IntFieldUpdateOperationsInput | number
    longestStreak?: IntFieldUpdateOperationsInput | number
    lastWorkoutDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type WorkoutStreakUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    currentStreak?: IntFieldUpdateOperationsInput | number
    longestStreak?: IntFieldUpdateOperationsInput | number
    lastWorkoutDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserCreateWithoutWorkoutsInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    image?: string | null
    height?: number | null
    weight?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    goals?: GoalCreateNestedManyWithoutUserInput
    achievements?: AchievementCreateNestedManyWithoutUserInput
    weightHistory?: WeightHistoryCreateNestedManyWithoutUserInput
    bodyMeasurements?: BodyMeasurementCreateNestedManyWithoutUserInput
    aiWorkouts?: AIWorkoutCreateNestedManyWithoutUserInput
    userSettings?: UserSettingsCreateNestedOneWithoutUserInput
    progressStats?: ProgressStatCreateNestedManyWithoutUserInput
    workoutStreak?: WorkoutStreakCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutWorkoutsInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    image?: string | null
    height?: number | null
    weight?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    goals?: GoalUncheckedCreateNestedManyWithoutUserInput
    achievements?: AchievementUncheckedCreateNestedManyWithoutUserInput
    weightHistory?: WeightHistoryUncheckedCreateNestedManyWithoutUserInput
    bodyMeasurements?: BodyMeasurementUncheckedCreateNestedManyWithoutUserInput
    aiWorkouts?: AIWorkoutUncheckedCreateNestedManyWithoutUserInput
    userSettings?: UserSettingsUncheckedCreateNestedOneWithoutUserInput
    progressStats?: ProgressStatUncheckedCreateNestedManyWithoutUserInput
    workoutStreak?: WorkoutStreakUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutWorkoutsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWorkoutsInput, UserUncheckedCreateWithoutWorkoutsInput>
  }

  export type WorkoutExerciseCreateWithoutWorkoutInput = {
    id?: string
    sets: number
    reps: number
    weight?: number | null
    duration?: number | null
    restTime?: number | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    personalBest?: boolean
    exercise: ExerciseCreateNestedOneWithoutWorkoutExercisesInput
  }

  export type WorkoutExerciseUncheckedCreateWithoutWorkoutInput = {
    id?: string
    sets: number
    reps: number
    weight?: number | null
    duration?: number | null
    restTime?: number | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    exerciseId: string
    personalBest?: boolean
  }

  export type WorkoutExerciseCreateOrConnectWithoutWorkoutInput = {
    where: WorkoutExerciseWhereUniqueInput
    create: XOR<WorkoutExerciseCreateWithoutWorkoutInput, WorkoutExerciseUncheckedCreateWithoutWorkoutInput>
  }

  export type WorkoutExerciseCreateManyWorkoutInputEnvelope = {
    data: WorkoutExerciseCreateManyWorkoutInput | WorkoutExerciseCreateManyWorkoutInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutWorkoutsInput = {
    update: XOR<UserUpdateWithoutWorkoutsInput, UserUncheckedUpdateWithoutWorkoutsInput>
    create: XOR<UserCreateWithoutWorkoutsInput, UserUncheckedCreateWithoutWorkoutsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWorkoutsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWorkoutsInput, UserUncheckedUpdateWithoutWorkoutsInput>
  }

  export type UserUpdateWithoutWorkoutsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    goals?: GoalUpdateManyWithoutUserNestedInput
    achievements?: AchievementUpdateManyWithoutUserNestedInput
    weightHistory?: WeightHistoryUpdateManyWithoutUserNestedInput
    bodyMeasurements?: BodyMeasurementUpdateManyWithoutUserNestedInput
    aiWorkouts?: AIWorkoutUpdateManyWithoutUserNestedInput
    userSettings?: UserSettingsUpdateOneWithoutUserNestedInput
    progressStats?: ProgressStatUpdateManyWithoutUserNestedInput
    workoutStreak?: WorkoutStreakUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutWorkoutsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    goals?: GoalUncheckedUpdateManyWithoutUserNestedInput
    achievements?: AchievementUncheckedUpdateManyWithoutUserNestedInput
    weightHistory?: WeightHistoryUncheckedUpdateManyWithoutUserNestedInput
    bodyMeasurements?: BodyMeasurementUncheckedUpdateManyWithoutUserNestedInput
    aiWorkouts?: AIWorkoutUncheckedUpdateManyWithoutUserNestedInput
    userSettings?: UserSettingsUncheckedUpdateOneWithoutUserNestedInput
    progressStats?: ProgressStatUncheckedUpdateManyWithoutUserNestedInput
    workoutStreak?: WorkoutStreakUncheckedUpdateOneWithoutUserNestedInput
  }

  export type WorkoutExerciseUpsertWithWhereUniqueWithoutWorkoutInput = {
    where: WorkoutExerciseWhereUniqueInput
    update: XOR<WorkoutExerciseUpdateWithoutWorkoutInput, WorkoutExerciseUncheckedUpdateWithoutWorkoutInput>
    create: XOR<WorkoutExerciseCreateWithoutWorkoutInput, WorkoutExerciseUncheckedCreateWithoutWorkoutInput>
  }

  export type WorkoutExerciseUpdateWithWhereUniqueWithoutWorkoutInput = {
    where: WorkoutExerciseWhereUniqueInput
    data: XOR<WorkoutExerciseUpdateWithoutWorkoutInput, WorkoutExerciseUncheckedUpdateWithoutWorkoutInput>
  }

  export type WorkoutExerciseUpdateManyWithWhereWithoutWorkoutInput = {
    where: WorkoutExerciseScalarWhereInput
    data: XOR<WorkoutExerciseUpdateManyMutationInput, WorkoutExerciseUncheckedUpdateManyWithoutWorkoutInput>
  }

  export type WorkoutExerciseScalarWhereInput = {
    AND?: WorkoutExerciseScalarWhereInput | WorkoutExerciseScalarWhereInput[]
    OR?: WorkoutExerciseScalarWhereInput[]
    NOT?: WorkoutExerciseScalarWhereInput | WorkoutExerciseScalarWhereInput[]
    id?: StringFilter<"WorkoutExercise"> | string
    sets?: IntFilter<"WorkoutExercise"> | number
    reps?: IntFilter<"WorkoutExercise"> | number
    weight?: FloatNullableFilter<"WorkoutExercise"> | number | null
    duration?: IntNullableFilter<"WorkoutExercise"> | number | null
    restTime?: IntNullableFilter<"WorkoutExercise"> | number | null
    notes?: StringNullableFilter<"WorkoutExercise"> | string | null
    createdAt?: DateTimeFilter<"WorkoutExercise"> | Date | string
    updatedAt?: DateTimeFilter<"WorkoutExercise"> | Date | string
    workoutId?: StringFilter<"WorkoutExercise"> | string
    exerciseId?: StringFilter<"WorkoutExercise"> | string
    personalBest?: BoolFilter<"WorkoutExercise"> | boolean
  }

  export type WorkoutExerciseCreateWithoutExerciseInput = {
    id?: string
    sets: number
    reps: number
    weight?: number | null
    duration?: number | null
    restTime?: number | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    personalBest?: boolean
    workout: WorkoutCreateNestedOneWithoutExercisesInput
  }

  export type WorkoutExerciseUncheckedCreateWithoutExerciseInput = {
    id?: string
    sets: number
    reps: number
    weight?: number | null
    duration?: number | null
    restTime?: number | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    workoutId: string
    personalBest?: boolean
  }

  export type WorkoutExerciseCreateOrConnectWithoutExerciseInput = {
    where: WorkoutExerciseWhereUniqueInput
    create: XOR<WorkoutExerciseCreateWithoutExerciseInput, WorkoutExerciseUncheckedCreateWithoutExerciseInput>
  }

  export type WorkoutExerciseCreateManyExerciseInputEnvelope = {
    data: WorkoutExerciseCreateManyExerciseInput | WorkoutExerciseCreateManyExerciseInput[]
    skipDuplicates?: boolean
  }

  export type AIWorkoutExerciseCreateWithoutExerciseInput = {
    id?: string
    name: string
    sets: number
    reps?: number | null
    duration?: number | null
    rest?: number | null
    instruction?: string | null
    order: number
    aiWorkout: AIWorkoutCreateNestedOneWithoutExercisesInput
  }

  export type AIWorkoutExerciseUncheckedCreateWithoutExerciseInput = {
    id?: string
    name: string
    sets: number
    reps?: number | null
    duration?: number | null
    rest?: number | null
    instruction?: string | null
    order: number
    aiWorkoutId: string
  }

  export type AIWorkoutExerciseCreateOrConnectWithoutExerciseInput = {
    where: AIWorkoutExerciseWhereUniqueInput
    create: XOR<AIWorkoutExerciseCreateWithoutExerciseInput, AIWorkoutExerciseUncheckedCreateWithoutExerciseInput>
  }

  export type AIWorkoutExerciseCreateManyExerciseInputEnvelope = {
    data: AIWorkoutExerciseCreateManyExerciseInput | AIWorkoutExerciseCreateManyExerciseInput[]
    skipDuplicates?: boolean
  }

  export type WorkoutExerciseUpsertWithWhereUniqueWithoutExerciseInput = {
    where: WorkoutExerciseWhereUniqueInput
    update: XOR<WorkoutExerciseUpdateWithoutExerciseInput, WorkoutExerciseUncheckedUpdateWithoutExerciseInput>
    create: XOR<WorkoutExerciseCreateWithoutExerciseInput, WorkoutExerciseUncheckedCreateWithoutExerciseInput>
  }

  export type WorkoutExerciseUpdateWithWhereUniqueWithoutExerciseInput = {
    where: WorkoutExerciseWhereUniqueInput
    data: XOR<WorkoutExerciseUpdateWithoutExerciseInput, WorkoutExerciseUncheckedUpdateWithoutExerciseInput>
  }

  export type WorkoutExerciseUpdateManyWithWhereWithoutExerciseInput = {
    where: WorkoutExerciseScalarWhereInput
    data: XOR<WorkoutExerciseUpdateManyMutationInput, WorkoutExerciseUncheckedUpdateManyWithoutExerciseInput>
  }

  export type AIWorkoutExerciseUpsertWithWhereUniqueWithoutExerciseInput = {
    where: AIWorkoutExerciseWhereUniqueInput
    update: XOR<AIWorkoutExerciseUpdateWithoutExerciseInput, AIWorkoutExerciseUncheckedUpdateWithoutExerciseInput>
    create: XOR<AIWorkoutExerciseCreateWithoutExerciseInput, AIWorkoutExerciseUncheckedCreateWithoutExerciseInput>
  }

  export type AIWorkoutExerciseUpdateWithWhereUniqueWithoutExerciseInput = {
    where: AIWorkoutExerciseWhereUniqueInput
    data: XOR<AIWorkoutExerciseUpdateWithoutExerciseInput, AIWorkoutExerciseUncheckedUpdateWithoutExerciseInput>
  }

  export type AIWorkoutExerciseUpdateManyWithWhereWithoutExerciseInput = {
    where: AIWorkoutExerciseScalarWhereInput
    data: XOR<AIWorkoutExerciseUpdateManyMutationInput, AIWorkoutExerciseUncheckedUpdateManyWithoutExerciseInput>
  }

  export type AIWorkoutExerciseScalarWhereInput = {
    AND?: AIWorkoutExerciseScalarWhereInput | AIWorkoutExerciseScalarWhereInput[]
    OR?: AIWorkoutExerciseScalarWhereInput[]
    NOT?: AIWorkoutExerciseScalarWhereInput | AIWorkoutExerciseScalarWhereInput[]
    id?: StringFilter<"AIWorkoutExercise"> | string
    name?: StringFilter<"AIWorkoutExercise"> | string
    sets?: IntFilter<"AIWorkoutExercise"> | number
    reps?: IntNullableFilter<"AIWorkoutExercise"> | number | null
    duration?: IntNullableFilter<"AIWorkoutExercise"> | number | null
    rest?: IntNullableFilter<"AIWorkoutExercise"> | number | null
    instruction?: StringNullableFilter<"AIWorkoutExercise"> | string | null
    order?: IntFilter<"AIWorkoutExercise"> | number
    aiWorkoutId?: StringFilter<"AIWorkoutExercise"> | string
    exerciseId?: StringNullableFilter<"AIWorkoutExercise"> | string | null
  }

  export type WorkoutCreateWithoutExercisesInput = {
    id?: string
    name: string
    date?: Date | string
    duration?: number | null
    notes?: string | null
    isCompleted?: boolean
    status?: $Enums.WorkoutStatus
    startedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    category?: string | null
    user: UserCreateNestedOneWithoutWorkoutsInput
  }

  export type WorkoutUncheckedCreateWithoutExercisesInput = {
    id?: string
    name: string
    date?: Date | string
    duration?: number | null
    notes?: string | null
    isCompleted?: boolean
    status?: $Enums.WorkoutStatus
    startedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    category?: string | null
  }

  export type WorkoutCreateOrConnectWithoutExercisesInput = {
    where: WorkoutWhereUniqueInput
    create: XOR<WorkoutCreateWithoutExercisesInput, WorkoutUncheckedCreateWithoutExercisesInput>
  }

  export type ExerciseCreateWithoutWorkoutExercisesInput = {
    id?: string
    name: string
    description?: string | null
    muscleGroup: string
    equipment?: string | null
    instructions?: string | null
    videoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    aiWorkoutExercises?: AIWorkoutExerciseCreateNestedManyWithoutExerciseInput
  }

  export type ExerciseUncheckedCreateWithoutWorkoutExercisesInput = {
    id?: string
    name: string
    description?: string | null
    muscleGroup: string
    equipment?: string | null
    instructions?: string | null
    videoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    aiWorkoutExercises?: AIWorkoutExerciseUncheckedCreateNestedManyWithoutExerciseInput
  }

  export type ExerciseCreateOrConnectWithoutWorkoutExercisesInput = {
    where: ExerciseWhereUniqueInput
    create: XOR<ExerciseCreateWithoutWorkoutExercisesInput, ExerciseUncheckedCreateWithoutWorkoutExercisesInput>
  }

  export type WorkoutUpsertWithoutExercisesInput = {
    update: XOR<WorkoutUpdateWithoutExercisesInput, WorkoutUncheckedUpdateWithoutExercisesInput>
    create: XOR<WorkoutCreateWithoutExercisesInput, WorkoutUncheckedCreateWithoutExercisesInput>
    where?: WorkoutWhereInput
  }

  export type WorkoutUpdateToOneWithWhereWithoutExercisesInput = {
    where?: WorkoutWhereInput
    data: XOR<WorkoutUpdateWithoutExercisesInput, WorkoutUncheckedUpdateWithoutExercisesInput>
  }

  export type WorkoutUpdateWithoutExercisesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumWorkoutStatusFieldUpdateOperationsInput | $Enums.WorkoutStatus
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutWorkoutsNestedInput
  }

  export type WorkoutUncheckedUpdateWithoutExercisesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumWorkoutStatusFieldUpdateOperationsInput | $Enums.WorkoutStatus
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ExerciseUpsertWithoutWorkoutExercisesInput = {
    update: XOR<ExerciseUpdateWithoutWorkoutExercisesInput, ExerciseUncheckedUpdateWithoutWorkoutExercisesInput>
    create: XOR<ExerciseCreateWithoutWorkoutExercisesInput, ExerciseUncheckedCreateWithoutWorkoutExercisesInput>
    where?: ExerciseWhereInput
  }

  export type ExerciseUpdateToOneWithWhereWithoutWorkoutExercisesInput = {
    where?: ExerciseWhereInput
    data: XOR<ExerciseUpdateWithoutWorkoutExercisesInput, ExerciseUncheckedUpdateWithoutWorkoutExercisesInput>
  }

  export type ExerciseUpdateWithoutWorkoutExercisesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    muscleGroup?: StringFieldUpdateOperationsInput | string
    equipment?: NullableStringFieldUpdateOperationsInput | string | null
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aiWorkoutExercises?: AIWorkoutExerciseUpdateManyWithoutExerciseNestedInput
  }

  export type ExerciseUncheckedUpdateWithoutWorkoutExercisesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    muscleGroup?: StringFieldUpdateOperationsInput | string
    equipment?: NullableStringFieldUpdateOperationsInput | string | null
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aiWorkoutExercises?: AIWorkoutExerciseUncheckedUpdateManyWithoutExerciseNestedInput
  }

  export type UserCreateWithoutGoalsInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    image?: string | null
    height?: number | null
    weight?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    workouts?: WorkoutCreateNestedManyWithoutUserInput
    achievements?: AchievementCreateNestedManyWithoutUserInput
    weightHistory?: WeightHistoryCreateNestedManyWithoutUserInput
    bodyMeasurements?: BodyMeasurementCreateNestedManyWithoutUserInput
    aiWorkouts?: AIWorkoutCreateNestedManyWithoutUserInput
    userSettings?: UserSettingsCreateNestedOneWithoutUserInput
    progressStats?: ProgressStatCreateNestedManyWithoutUserInput
    workoutStreak?: WorkoutStreakCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutGoalsInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    image?: string | null
    height?: number | null
    weight?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    workouts?: WorkoutUncheckedCreateNestedManyWithoutUserInput
    achievements?: AchievementUncheckedCreateNestedManyWithoutUserInput
    weightHistory?: WeightHistoryUncheckedCreateNestedManyWithoutUserInput
    bodyMeasurements?: BodyMeasurementUncheckedCreateNestedManyWithoutUserInput
    aiWorkouts?: AIWorkoutUncheckedCreateNestedManyWithoutUserInput
    userSettings?: UserSettingsUncheckedCreateNestedOneWithoutUserInput
    progressStats?: ProgressStatUncheckedCreateNestedManyWithoutUserInput
    workoutStreak?: WorkoutStreakUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutGoalsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGoalsInput, UserUncheckedCreateWithoutGoalsInput>
  }

  export type UserUpsertWithoutGoalsInput = {
    update: XOR<UserUpdateWithoutGoalsInput, UserUncheckedUpdateWithoutGoalsInput>
    create: XOR<UserCreateWithoutGoalsInput, UserUncheckedCreateWithoutGoalsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutGoalsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutGoalsInput, UserUncheckedUpdateWithoutGoalsInput>
  }

  export type UserUpdateWithoutGoalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workouts?: WorkoutUpdateManyWithoutUserNestedInput
    achievements?: AchievementUpdateManyWithoutUserNestedInput
    weightHistory?: WeightHistoryUpdateManyWithoutUserNestedInput
    bodyMeasurements?: BodyMeasurementUpdateManyWithoutUserNestedInput
    aiWorkouts?: AIWorkoutUpdateManyWithoutUserNestedInput
    userSettings?: UserSettingsUpdateOneWithoutUserNestedInput
    progressStats?: ProgressStatUpdateManyWithoutUserNestedInput
    workoutStreak?: WorkoutStreakUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutGoalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workouts?: WorkoutUncheckedUpdateManyWithoutUserNestedInput
    achievements?: AchievementUncheckedUpdateManyWithoutUserNestedInput
    weightHistory?: WeightHistoryUncheckedUpdateManyWithoutUserNestedInput
    bodyMeasurements?: BodyMeasurementUncheckedUpdateManyWithoutUserNestedInput
    aiWorkouts?: AIWorkoutUncheckedUpdateManyWithoutUserNestedInput
    userSettings?: UserSettingsUncheckedUpdateOneWithoutUserNestedInput
    progressStats?: ProgressStatUncheckedUpdateManyWithoutUserNestedInput
    workoutStreak?: WorkoutStreakUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutAchievementsInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    image?: string | null
    height?: number | null
    weight?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    workouts?: WorkoutCreateNestedManyWithoutUserInput
    goals?: GoalCreateNestedManyWithoutUserInput
    weightHistory?: WeightHistoryCreateNestedManyWithoutUserInput
    bodyMeasurements?: BodyMeasurementCreateNestedManyWithoutUserInput
    aiWorkouts?: AIWorkoutCreateNestedManyWithoutUserInput
    userSettings?: UserSettingsCreateNestedOneWithoutUserInput
    progressStats?: ProgressStatCreateNestedManyWithoutUserInput
    workoutStreak?: WorkoutStreakCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAchievementsInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    image?: string | null
    height?: number | null
    weight?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    workouts?: WorkoutUncheckedCreateNestedManyWithoutUserInput
    goals?: GoalUncheckedCreateNestedManyWithoutUserInput
    weightHistory?: WeightHistoryUncheckedCreateNestedManyWithoutUserInput
    bodyMeasurements?: BodyMeasurementUncheckedCreateNestedManyWithoutUserInput
    aiWorkouts?: AIWorkoutUncheckedCreateNestedManyWithoutUserInput
    userSettings?: UserSettingsUncheckedCreateNestedOneWithoutUserInput
    progressStats?: ProgressStatUncheckedCreateNestedManyWithoutUserInput
    workoutStreak?: WorkoutStreakUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAchievementsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAchievementsInput, UserUncheckedCreateWithoutAchievementsInput>
  }

  export type UserUpsertWithoutAchievementsInput = {
    update: XOR<UserUpdateWithoutAchievementsInput, UserUncheckedUpdateWithoutAchievementsInput>
    create: XOR<UserCreateWithoutAchievementsInput, UserUncheckedCreateWithoutAchievementsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAchievementsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAchievementsInput, UserUncheckedUpdateWithoutAchievementsInput>
  }

  export type UserUpdateWithoutAchievementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workouts?: WorkoutUpdateManyWithoutUserNestedInput
    goals?: GoalUpdateManyWithoutUserNestedInput
    weightHistory?: WeightHistoryUpdateManyWithoutUserNestedInput
    bodyMeasurements?: BodyMeasurementUpdateManyWithoutUserNestedInput
    aiWorkouts?: AIWorkoutUpdateManyWithoutUserNestedInput
    userSettings?: UserSettingsUpdateOneWithoutUserNestedInput
    progressStats?: ProgressStatUpdateManyWithoutUserNestedInput
    workoutStreak?: WorkoutStreakUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAchievementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workouts?: WorkoutUncheckedUpdateManyWithoutUserNestedInput
    goals?: GoalUncheckedUpdateManyWithoutUserNestedInput
    weightHistory?: WeightHistoryUncheckedUpdateManyWithoutUserNestedInput
    bodyMeasurements?: BodyMeasurementUncheckedUpdateManyWithoutUserNestedInput
    aiWorkouts?: AIWorkoutUncheckedUpdateManyWithoutUserNestedInput
    userSettings?: UserSettingsUncheckedUpdateOneWithoutUserNestedInput
    progressStats?: ProgressStatUncheckedUpdateManyWithoutUserNestedInput
    workoutStreak?: WorkoutStreakUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutWeightHistoryInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    image?: string | null
    height?: number | null
    weight?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    workouts?: WorkoutCreateNestedManyWithoutUserInput
    goals?: GoalCreateNestedManyWithoutUserInput
    achievements?: AchievementCreateNestedManyWithoutUserInput
    bodyMeasurements?: BodyMeasurementCreateNestedManyWithoutUserInput
    aiWorkouts?: AIWorkoutCreateNestedManyWithoutUserInput
    userSettings?: UserSettingsCreateNestedOneWithoutUserInput
    progressStats?: ProgressStatCreateNestedManyWithoutUserInput
    workoutStreak?: WorkoutStreakCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutWeightHistoryInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    image?: string | null
    height?: number | null
    weight?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    workouts?: WorkoutUncheckedCreateNestedManyWithoutUserInput
    goals?: GoalUncheckedCreateNestedManyWithoutUserInput
    achievements?: AchievementUncheckedCreateNestedManyWithoutUserInput
    bodyMeasurements?: BodyMeasurementUncheckedCreateNestedManyWithoutUserInput
    aiWorkouts?: AIWorkoutUncheckedCreateNestedManyWithoutUserInput
    userSettings?: UserSettingsUncheckedCreateNestedOneWithoutUserInput
    progressStats?: ProgressStatUncheckedCreateNestedManyWithoutUserInput
    workoutStreak?: WorkoutStreakUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutWeightHistoryInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWeightHistoryInput, UserUncheckedCreateWithoutWeightHistoryInput>
  }

  export type UserUpsertWithoutWeightHistoryInput = {
    update: XOR<UserUpdateWithoutWeightHistoryInput, UserUncheckedUpdateWithoutWeightHistoryInput>
    create: XOR<UserCreateWithoutWeightHistoryInput, UserUncheckedCreateWithoutWeightHistoryInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWeightHistoryInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWeightHistoryInput, UserUncheckedUpdateWithoutWeightHistoryInput>
  }

  export type UserUpdateWithoutWeightHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workouts?: WorkoutUpdateManyWithoutUserNestedInput
    goals?: GoalUpdateManyWithoutUserNestedInput
    achievements?: AchievementUpdateManyWithoutUserNestedInput
    bodyMeasurements?: BodyMeasurementUpdateManyWithoutUserNestedInput
    aiWorkouts?: AIWorkoutUpdateManyWithoutUserNestedInput
    userSettings?: UserSettingsUpdateOneWithoutUserNestedInput
    progressStats?: ProgressStatUpdateManyWithoutUserNestedInput
    workoutStreak?: WorkoutStreakUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutWeightHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workouts?: WorkoutUncheckedUpdateManyWithoutUserNestedInput
    goals?: GoalUncheckedUpdateManyWithoutUserNestedInput
    achievements?: AchievementUncheckedUpdateManyWithoutUserNestedInput
    bodyMeasurements?: BodyMeasurementUncheckedUpdateManyWithoutUserNestedInput
    aiWorkouts?: AIWorkoutUncheckedUpdateManyWithoutUserNestedInput
    userSettings?: UserSettingsUncheckedUpdateOneWithoutUserNestedInput
    progressStats?: ProgressStatUncheckedUpdateManyWithoutUserNestedInput
    workoutStreak?: WorkoutStreakUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutBodyMeasurementsInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    image?: string | null
    height?: number | null
    weight?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    workouts?: WorkoutCreateNestedManyWithoutUserInput
    goals?: GoalCreateNestedManyWithoutUserInput
    achievements?: AchievementCreateNestedManyWithoutUserInput
    weightHistory?: WeightHistoryCreateNestedManyWithoutUserInput
    aiWorkouts?: AIWorkoutCreateNestedManyWithoutUserInput
    userSettings?: UserSettingsCreateNestedOneWithoutUserInput
    progressStats?: ProgressStatCreateNestedManyWithoutUserInput
    workoutStreak?: WorkoutStreakCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBodyMeasurementsInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    image?: string | null
    height?: number | null
    weight?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    workouts?: WorkoutUncheckedCreateNestedManyWithoutUserInput
    goals?: GoalUncheckedCreateNestedManyWithoutUserInput
    achievements?: AchievementUncheckedCreateNestedManyWithoutUserInput
    weightHistory?: WeightHistoryUncheckedCreateNestedManyWithoutUserInput
    aiWorkouts?: AIWorkoutUncheckedCreateNestedManyWithoutUserInput
    userSettings?: UserSettingsUncheckedCreateNestedOneWithoutUserInput
    progressStats?: ProgressStatUncheckedCreateNestedManyWithoutUserInput
    workoutStreak?: WorkoutStreakUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBodyMeasurementsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBodyMeasurementsInput, UserUncheckedCreateWithoutBodyMeasurementsInput>
  }

  export type UserUpsertWithoutBodyMeasurementsInput = {
    update: XOR<UserUpdateWithoutBodyMeasurementsInput, UserUncheckedUpdateWithoutBodyMeasurementsInput>
    create: XOR<UserCreateWithoutBodyMeasurementsInput, UserUncheckedCreateWithoutBodyMeasurementsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBodyMeasurementsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBodyMeasurementsInput, UserUncheckedUpdateWithoutBodyMeasurementsInput>
  }

  export type UserUpdateWithoutBodyMeasurementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workouts?: WorkoutUpdateManyWithoutUserNestedInput
    goals?: GoalUpdateManyWithoutUserNestedInput
    achievements?: AchievementUpdateManyWithoutUserNestedInput
    weightHistory?: WeightHistoryUpdateManyWithoutUserNestedInput
    aiWorkouts?: AIWorkoutUpdateManyWithoutUserNestedInput
    userSettings?: UserSettingsUpdateOneWithoutUserNestedInput
    progressStats?: ProgressStatUpdateManyWithoutUserNestedInput
    workoutStreak?: WorkoutStreakUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBodyMeasurementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workouts?: WorkoutUncheckedUpdateManyWithoutUserNestedInput
    goals?: GoalUncheckedUpdateManyWithoutUserNestedInput
    achievements?: AchievementUncheckedUpdateManyWithoutUserNestedInput
    weightHistory?: WeightHistoryUncheckedUpdateManyWithoutUserNestedInput
    aiWorkouts?: AIWorkoutUncheckedUpdateManyWithoutUserNestedInput
    userSettings?: UserSettingsUncheckedUpdateOneWithoutUserNestedInput
    progressStats?: ProgressStatUncheckedUpdateManyWithoutUserNestedInput
    workoutStreak?: WorkoutStreakUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutAiWorkoutsInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    image?: string | null
    height?: number | null
    weight?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    workouts?: WorkoutCreateNestedManyWithoutUserInput
    goals?: GoalCreateNestedManyWithoutUserInput
    achievements?: AchievementCreateNestedManyWithoutUserInput
    weightHistory?: WeightHistoryCreateNestedManyWithoutUserInput
    bodyMeasurements?: BodyMeasurementCreateNestedManyWithoutUserInput
    userSettings?: UserSettingsCreateNestedOneWithoutUserInput
    progressStats?: ProgressStatCreateNestedManyWithoutUserInput
    workoutStreak?: WorkoutStreakCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAiWorkoutsInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    image?: string | null
    height?: number | null
    weight?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    workouts?: WorkoutUncheckedCreateNestedManyWithoutUserInput
    goals?: GoalUncheckedCreateNestedManyWithoutUserInput
    achievements?: AchievementUncheckedCreateNestedManyWithoutUserInput
    weightHistory?: WeightHistoryUncheckedCreateNestedManyWithoutUserInput
    bodyMeasurements?: BodyMeasurementUncheckedCreateNestedManyWithoutUserInput
    userSettings?: UserSettingsUncheckedCreateNestedOneWithoutUserInput
    progressStats?: ProgressStatUncheckedCreateNestedManyWithoutUserInput
    workoutStreak?: WorkoutStreakUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAiWorkoutsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAiWorkoutsInput, UserUncheckedCreateWithoutAiWorkoutsInput>
  }

  export type AIWorkoutExerciseCreateWithoutAiWorkoutInput = {
    id?: string
    name: string
    sets: number
    reps?: number | null
    duration?: number | null
    rest?: number | null
    instruction?: string | null
    order: number
    exercise?: ExerciseCreateNestedOneWithoutAiWorkoutExercisesInput
  }

  export type AIWorkoutExerciseUncheckedCreateWithoutAiWorkoutInput = {
    id?: string
    name: string
    sets: number
    reps?: number | null
    duration?: number | null
    rest?: number | null
    instruction?: string | null
    order: number
    exerciseId?: string | null
  }

  export type AIWorkoutExerciseCreateOrConnectWithoutAiWorkoutInput = {
    where: AIWorkoutExerciseWhereUniqueInput
    create: XOR<AIWorkoutExerciseCreateWithoutAiWorkoutInput, AIWorkoutExerciseUncheckedCreateWithoutAiWorkoutInput>
  }

  export type AIWorkoutExerciseCreateManyAiWorkoutInputEnvelope = {
    data: AIWorkoutExerciseCreateManyAiWorkoutInput | AIWorkoutExerciseCreateManyAiWorkoutInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutAiWorkoutsInput = {
    update: XOR<UserUpdateWithoutAiWorkoutsInput, UserUncheckedUpdateWithoutAiWorkoutsInput>
    create: XOR<UserCreateWithoutAiWorkoutsInput, UserUncheckedCreateWithoutAiWorkoutsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAiWorkoutsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAiWorkoutsInput, UserUncheckedUpdateWithoutAiWorkoutsInput>
  }

  export type UserUpdateWithoutAiWorkoutsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workouts?: WorkoutUpdateManyWithoutUserNestedInput
    goals?: GoalUpdateManyWithoutUserNestedInput
    achievements?: AchievementUpdateManyWithoutUserNestedInput
    weightHistory?: WeightHistoryUpdateManyWithoutUserNestedInput
    bodyMeasurements?: BodyMeasurementUpdateManyWithoutUserNestedInput
    userSettings?: UserSettingsUpdateOneWithoutUserNestedInput
    progressStats?: ProgressStatUpdateManyWithoutUserNestedInput
    workoutStreak?: WorkoutStreakUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAiWorkoutsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workouts?: WorkoutUncheckedUpdateManyWithoutUserNestedInput
    goals?: GoalUncheckedUpdateManyWithoutUserNestedInput
    achievements?: AchievementUncheckedUpdateManyWithoutUserNestedInput
    weightHistory?: WeightHistoryUncheckedUpdateManyWithoutUserNestedInput
    bodyMeasurements?: BodyMeasurementUncheckedUpdateManyWithoutUserNestedInput
    userSettings?: UserSettingsUncheckedUpdateOneWithoutUserNestedInput
    progressStats?: ProgressStatUncheckedUpdateManyWithoutUserNestedInput
    workoutStreak?: WorkoutStreakUncheckedUpdateOneWithoutUserNestedInput
  }

  export type AIWorkoutExerciseUpsertWithWhereUniqueWithoutAiWorkoutInput = {
    where: AIWorkoutExerciseWhereUniqueInput
    update: XOR<AIWorkoutExerciseUpdateWithoutAiWorkoutInput, AIWorkoutExerciseUncheckedUpdateWithoutAiWorkoutInput>
    create: XOR<AIWorkoutExerciseCreateWithoutAiWorkoutInput, AIWorkoutExerciseUncheckedCreateWithoutAiWorkoutInput>
  }

  export type AIWorkoutExerciseUpdateWithWhereUniqueWithoutAiWorkoutInput = {
    where: AIWorkoutExerciseWhereUniqueInput
    data: XOR<AIWorkoutExerciseUpdateWithoutAiWorkoutInput, AIWorkoutExerciseUncheckedUpdateWithoutAiWorkoutInput>
  }

  export type AIWorkoutExerciseUpdateManyWithWhereWithoutAiWorkoutInput = {
    where: AIWorkoutExerciseScalarWhereInput
    data: XOR<AIWorkoutExerciseUpdateManyMutationInput, AIWorkoutExerciseUncheckedUpdateManyWithoutAiWorkoutInput>
  }

  export type AIWorkoutCreateWithoutExercisesInput = {
    id?: string
    name: string
    description?: string | null
    fitnessLevel: string
    goal: string
    duration: number
    equipment: string
    focusArea: string
    warmup?: NullableJsonNullValueInput | InputJsonValue
    cooldown?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutAiWorkoutsInput
  }

  export type AIWorkoutUncheckedCreateWithoutExercisesInput = {
    id?: string
    name: string
    description?: string | null
    fitnessLevel: string
    goal: string
    duration: number
    equipment: string
    focusArea: string
    warmup?: NullableJsonNullValueInput | InputJsonValue
    cooldown?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    userId: string
  }

  export type AIWorkoutCreateOrConnectWithoutExercisesInput = {
    where: AIWorkoutWhereUniqueInput
    create: XOR<AIWorkoutCreateWithoutExercisesInput, AIWorkoutUncheckedCreateWithoutExercisesInput>
  }

  export type ExerciseCreateWithoutAiWorkoutExercisesInput = {
    id?: string
    name: string
    description?: string | null
    muscleGroup: string
    equipment?: string | null
    instructions?: string | null
    videoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    workoutExercises?: WorkoutExerciseCreateNestedManyWithoutExerciseInput
  }

  export type ExerciseUncheckedCreateWithoutAiWorkoutExercisesInput = {
    id?: string
    name: string
    description?: string | null
    muscleGroup: string
    equipment?: string | null
    instructions?: string | null
    videoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    workoutExercises?: WorkoutExerciseUncheckedCreateNestedManyWithoutExerciseInput
  }

  export type ExerciseCreateOrConnectWithoutAiWorkoutExercisesInput = {
    where: ExerciseWhereUniqueInput
    create: XOR<ExerciseCreateWithoutAiWorkoutExercisesInput, ExerciseUncheckedCreateWithoutAiWorkoutExercisesInput>
  }

  export type AIWorkoutUpsertWithoutExercisesInput = {
    update: XOR<AIWorkoutUpdateWithoutExercisesInput, AIWorkoutUncheckedUpdateWithoutExercisesInput>
    create: XOR<AIWorkoutCreateWithoutExercisesInput, AIWorkoutUncheckedCreateWithoutExercisesInput>
    where?: AIWorkoutWhereInput
  }

  export type AIWorkoutUpdateToOneWithWhereWithoutExercisesInput = {
    where?: AIWorkoutWhereInput
    data: XOR<AIWorkoutUpdateWithoutExercisesInput, AIWorkoutUncheckedUpdateWithoutExercisesInput>
  }

  export type AIWorkoutUpdateWithoutExercisesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    fitnessLevel?: StringFieldUpdateOperationsInput | string
    goal?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    equipment?: StringFieldUpdateOperationsInput | string
    focusArea?: StringFieldUpdateOperationsInput | string
    warmup?: NullableJsonNullValueInput | InputJsonValue
    cooldown?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAiWorkoutsNestedInput
  }

  export type AIWorkoutUncheckedUpdateWithoutExercisesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    fitnessLevel?: StringFieldUpdateOperationsInput | string
    goal?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    equipment?: StringFieldUpdateOperationsInput | string
    focusArea?: StringFieldUpdateOperationsInput | string
    warmup?: NullableJsonNullValueInput | InputJsonValue
    cooldown?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ExerciseUpsertWithoutAiWorkoutExercisesInput = {
    update: XOR<ExerciseUpdateWithoutAiWorkoutExercisesInput, ExerciseUncheckedUpdateWithoutAiWorkoutExercisesInput>
    create: XOR<ExerciseCreateWithoutAiWorkoutExercisesInput, ExerciseUncheckedCreateWithoutAiWorkoutExercisesInput>
    where?: ExerciseWhereInput
  }

  export type ExerciseUpdateToOneWithWhereWithoutAiWorkoutExercisesInput = {
    where?: ExerciseWhereInput
    data: XOR<ExerciseUpdateWithoutAiWorkoutExercisesInput, ExerciseUncheckedUpdateWithoutAiWorkoutExercisesInput>
  }

  export type ExerciseUpdateWithoutAiWorkoutExercisesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    muscleGroup?: StringFieldUpdateOperationsInput | string
    equipment?: NullableStringFieldUpdateOperationsInput | string | null
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workoutExercises?: WorkoutExerciseUpdateManyWithoutExerciseNestedInput
  }

  export type ExerciseUncheckedUpdateWithoutAiWorkoutExercisesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    muscleGroup?: StringFieldUpdateOperationsInput | string
    equipment?: NullableStringFieldUpdateOperationsInput | string | null
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workoutExercises?: WorkoutExerciseUncheckedUpdateManyWithoutExerciseNestedInput
  }

  export type UserCreateWithoutUserSettingsInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    image?: string | null
    height?: number | null
    weight?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    workouts?: WorkoutCreateNestedManyWithoutUserInput
    goals?: GoalCreateNestedManyWithoutUserInput
    achievements?: AchievementCreateNestedManyWithoutUserInput
    weightHistory?: WeightHistoryCreateNestedManyWithoutUserInput
    bodyMeasurements?: BodyMeasurementCreateNestedManyWithoutUserInput
    aiWorkouts?: AIWorkoutCreateNestedManyWithoutUserInput
    progressStats?: ProgressStatCreateNestedManyWithoutUserInput
    workoutStreak?: WorkoutStreakCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserSettingsInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    image?: string | null
    height?: number | null
    weight?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    workouts?: WorkoutUncheckedCreateNestedManyWithoutUserInput
    goals?: GoalUncheckedCreateNestedManyWithoutUserInput
    achievements?: AchievementUncheckedCreateNestedManyWithoutUserInput
    weightHistory?: WeightHistoryUncheckedCreateNestedManyWithoutUserInput
    bodyMeasurements?: BodyMeasurementUncheckedCreateNestedManyWithoutUserInput
    aiWorkouts?: AIWorkoutUncheckedCreateNestedManyWithoutUserInput
    progressStats?: ProgressStatUncheckedCreateNestedManyWithoutUserInput
    workoutStreak?: WorkoutStreakUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserSettingsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserSettingsInput, UserUncheckedCreateWithoutUserSettingsInput>
  }

  export type UserUpsertWithoutUserSettingsInput = {
    update: XOR<UserUpdateWithoutUserSettingsInput, UserUncheckedUpdateWithoutUserSettingsInput>
    create: XOR<UserCreateWithoutUserSettingsInput, UserUncheckedCreateWithoutUserSettingsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserSettingsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserSettingsInput, UserUncheckedUpdateWithoutUserSettingsInput>
  }

  export type UserUpdateWithoutUserSettingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workouts?: WorkoutUpdateManyWithoutUserNestedInput
    goals?: GoalUpdateManyWithoutUserNestedInput
    achievements?: AchievementUpdateManyWithoutUserNestedInput
    weightHistory?: WeightHistoryUpdateManyWithoutUserNestedInput
    bodyMeasurements?: BodyMeasurementUpdateManyWithoutUserNestedInput
    aiWorkouts?: AIWorkoutUpdateManyWithoutUserNestedInput
    progressStats?: ProgressStatUpdateManyWithoutUserNestedInput
    workoutStreak?: WorkoutStreakUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserSettingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workouts?: WorkoutUncheckedUpdateManyWithoutUserNestedInput
    goals?: GoalUncheckedUpdateManyWithoutUserNestedInput
    achievements?: AchievementUncheckedUpdateManyWithoutUserNestedInput
    weightHistory?: WeightHistoryUncheckedUpdateManyWithoutUserNestedInput
    bodyMeasurements?: BodyMeasurementUncheckedUpdateManyWithoutUserNestedInput
    aiWorkouts?: AIWorkoutUncheckedUpdateManyWithoutUserNestedInput
    progressStats?: ProgressStatUncheckedUpdateManyWithoutUserNestedInput
    workoutStreak?: WorkoutStreakUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutProgressStatsInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    image?: string | null
    height?: number | null
    weight?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    workouts?: WorkoutCreateNestedManyWithoutUserInput
    goals?: GoalCreateNestedManyWithoutUserInput
    achievements?: AchievementCreateNestedManyWithoutUserInput
    weightHistory?: WeightHistoryCreateNestedManyWithoutUserInput
    bodyMeasurements?: BodyMeasurementCreateNestedManyWithoutUserInput
    aiWorkouts?: AIWorkoutCreateNestedManyWithoutUserInput
    userSettings?: UserSettingsCreateNestedOneWithoutUserInput
    workoutStreak?: WorkoutStreakCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProgressStatsInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    image?: string | null
    height?: number | null
    weight?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    workouts?: WorkoutUncheckedCreateNestedManyWithoutUserInput
    goals?: GoalUncheckedCreateNestedManyWithoutUserInput
    achievements?: AchievementUncheckedCreateNestedManyWithoutUserInput
    weightHistory?: WeightHistoryUncheckedCreateNestedManyWithoutUserInput
    bodyMeasurements?: BodyMeasurementUncheckedCreateNestedManyWithoutUserInput
    aiWorkouts?: AIWorkoutUncheckedCreateNestedManyWithoutUserInput
    userSettings?: UserSettingsUncheckedCreateNestedOneWithoutUserInput
    workoutStreak?: WorkoutStreakUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProgressStatsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProgressStatsInput, UserUncheckedCreateWithoutProgressStatsInput>
  }

  export type UserUpsertWithoutProgressStatsInput = {
    update: XOR<UserUpdateWithoutProgressStatsInput, UserUncheckedUpdateWithoutProgressStatsInput>
    create: XOR<UserCreateWithoutProgressStatsInput, UserUncheckedCreateWithoutProgressStatsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProgressStatsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProgressStatsInput, UserUncheckedUpdateWithoutProgressStatsInput>
  }

  export type UserUpdateWithoutProgressStatsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workouts?: WorkoutUpdateManyWithoutUserNestedInput
    goals?: GoalUpdateManyWithoutUserNestedInput
    achievements?: AchievementUpdateManyWithoutUserNestedInput
    weightHistory?: WeightHistoryUpdateManyWithoutUserNestedInput
    bodyMeasurements?: BodyMeasurementUpdateManyWithoutUserNestedInput
    aiWorkouts?: AIWorkoutUpdateManyWithoutUserNestedInput
    userSettings?: UserSettingsUpdateOneWithoutUserNestedInput
    workoutStreak?: WorkoutStreakUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProgressStatsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workouts?: WorkoutUncheckedUpdateManyWithoutUserNestedInput
    goals?: GoalUncheckedUpdateManyWithoutUserNestedInput
    achievements?: AchievementUncheckedUpdateManyWithoutUserNestedInput
    weightHistory?: WeightHistoryUncheckedUpdateManyWithoutUserNestedInput
    bodyMeasurements?: BodyMeasurementUncheckedUpdateManyWithoutUserNestedInput
    aiWorkouts?: AIWorkoutUncheckedUpdateManyWithoutUserNestedInput
    userSettings?: UserSettingsUncheckedUpdateOneWithoutUserNestedInput
    workoutStreak?: WorkoutStreakUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutWorkoutStreakInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    image?: string | null
    height?: number | null
    weight?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    workouts?: WorkoutCreateNestedManyWithoutUserInput
    goals?: GoalCreateNestedManyWithoutUserInput
    achievements?: AchievementCreateNestedManyWithoutUserInput
    weightHistory?: WeightHistoryCreateNestedManyWithoutUserInput
    bodyMeasurements?: BodyMeasurementCreateNestedManyWithoutUserInput
    aiWorkouts?: AIWorkoutCreateNestedManyWithoutUserInput
    userSettings?: UserSettingsCreateNestedOneWithoutUserInput
    progressStats?: ProgressStatCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutWorkoutStreakInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    image?: string | null
    height?: number | null
    weight?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    workouts?: WorkoutUncheckedCreateNestedManyWithoutUserInput
    goals?: GoalUncheckedCreateNestedManyWithoutUserInput
    achievements?: AchievementUncheckedCreateNestedManyWithoutUserInput
    weightHistory?: WeightHistoryUncheckedCreateNestedManyWithoutUserInput
    bodyMeasurements?: BodyMeasurementUncheckedCreateNestedManyWithoutUserInput
    aiWorkouts?: AIWorkoutUncheckedCreateNestedManyWithoutUserInput
    userSettings?: UserSettingsUncheckedCreateNestedOneWithoutUserInput
    progressStats?: ProgressStatUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutWorkoutStreakInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWorkoutStreakInput, UserUncheckedCreateWithoutWorkoutStreakInput>
  }

  export type UserUpsertWithoutWorkoutStreakInput = {
    update: XOR<UserUpdateWithoutWorkoutStreakInput, UserUncheckedUpdateWithoutWorkoutStreakInput>
    create: XOR<UserCreateWithoutWorkoutStreakInput, UserUncheckedCreateWithoutWorkoutStreakInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWorkoutStreakInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWorkoutStreakInput, UserUncheckedUpdateWithoutWorkoutStreakInput>
  }

  export type UserUpdateWithoutWorkoutStreakInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workouts?: WorkoutUpdateManyWithoutUserNestedInput
    goals?: GoalUpdateManyWithoutUserNestedInput
    achievements?: AchievementUpdateManyWithoutUserNestedInput
    weightHistory?: WeightHistoryUpdateManyWithoutUserNestedInput
    bodyMeasurements?: BodyMeasurementUpdateManyWithoutUserNestedInput
    aiWorkouts?: AIWorkoutUpdateManyWithoutUserNestedInput
    userSettings?: UserSettingsUpdateOneWithoutUserNestedInput
    progressStats?: ProgressStatUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutWorkoutStreakInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workouts?: WorkoutUncheckedUpdateManyWithoutUserNestedInput
    goals?: GoalUncheckedUpdateManyWithoutUserNestedInput
    achievements?: AchievementUncheckedUpdateManyWithoutUserNestedInput
    weightHistory?: WeightHistoryUncheckedUpdateManyWithoutUserNestedInput
    bodyMeasurements?: BodyMeasurementUncheckedUpdateManyWithoutUserNestedInput
    aiWorkouts?: AIWorkoutUncheckedUpdateManyWithoutUserNestedInput
    userSettings?: UserSettingsUncheckedUpdateOneWithoutUserNestedInput
    progressStats?: ProgressStatUncheckedUpdateManyWithoutUserNestedInput
  }

  export type WorkoutCreateManyUserInput = {
    id?: string
    name: string
    date?: Date | string
    duration?: number | null
    notes?: string | null
    isCompleted?: boolean
    status?: $Enums.WorkoutStatus
    startedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    category?: string | null
  }

  export type GoalCreateManyUserInput = {
    id?: string
    name: string
    description?: string | null
    targetDate?: Date | string | null
    isCompleted?: boolean
    type: $Enums.GoalType
    metric?: string | null
    targetValue?: number | null
    currentValue?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AchievementCreateManyUserInput = {
    id?: string
    name: string
    description: string
    image?: string | null
    unlockedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WeightHistoryCreateManyUserInput = {
    id?: string
    weight: number
    date?: Date | string
    notes?: string | null
  }

  export type BodyMeasurementCreateManyUserInput = {
    id?: string
    date?: Date | string
    type: $Enums.MeasurementType
    value: number
    notes?: string | null
  }

  export type AIWorkoutCreateManyUserInput = {
    id?: string
    name: string
    description?: string | null
    fitnessLevel: string
    goal: string
    duration: number
    equipment: string
    focusArea: string
    warmup?: NullableJsonNullValueInput | InputJsonValue
    cooldown?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ProgressStatCreateManyUserInput = {
    id?: string
    date?: Date | string
    statType: $Enums.StatType
    value: number
  }

  export type WorkoutUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumWorkoutStatusFieldUpdateOperationsInput | $Enums.WorkoutStatus
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    exercises?: WorkoutExerciseUpdateManyWithoutWorkoutNestedInput
  }

  export type WorkoutUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumWorkoutStatusFieldUpdateOperationsInput | $Enums.WorkoutStatus
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    exercises?: WorkoutExerciseUncheckedUpdateManyWithoutWorkoutNestedInput
  }

  export type WorkoutUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumWorkoutStatusFieldUpdateOperationsInput | $Enums.WorkoutStatus
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GoalUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    targetDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    type?: EnumGoalTypeFieldUpdateOperationsInput | $Enums.GoalType
    metric?: NullableStringFieldUpdateOperationsInput | string | null
    targetValue?: NullableFloatFieldUpdateOperationsInput | number | null
    currentValue?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GoalUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    targetDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    type?: EnumGoalTypeFieldUpdateOperationsInput | $Enums.GoalType
    metric?: NullableStringFieldUpdateOperationsInput | string | null
    targetValue?: NullableFloatFieldUpdateOperationsInput | number | null
    currentValue?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GoalUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    targetDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    type?: EnumGoalTypeFieldUpdateOperationsInput | $Enums.GoalType
    metric?: NullableStringFieldUpdateOperationsInput | string | null
    targetValue?: NullableFloatFieldUpdateOperationsInput | number | null
    currentValue?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AchievementUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    unlockedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AchievementUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    unlockedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AchievementUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    unlockedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WeightHistoryUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WeightHistoryUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WeightHistoryUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BodyMeasurementUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumMeasurementTypeFieldUpdateOperationsInput | $Enums.MeasurementType
    value?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BodyMeasurementUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumMeasurementTypeFieldUpdateOperationsInput | $Enums.MeasurementType
    value?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BodyMeasurementUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumMeasurementTypeFieldUpdateOperationsInput | $Enums.MeasurementType
    value?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AIWorkoutUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    fitnessLevel?: StringFieldUpdateOperationsInput | string
    goal?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    equipment?: StringFieldUpdateOperationsInput | string
    focusArea?: StringFieldUpdateOperationsInput | string
    warmup?: NullableJsonNullValueInput | InputJsonValue
    cooldown?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    exercises?: AIWorkoutExerciseUpdateManyWithoutAiWorkoutNestedInput
  }

  export type AIWorkoutUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    fitnessLevel?: StringFieldUpdateOperationsInput | string
    goal?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    equipment?: StringFieldUpdateOperationsInput | string
    focusArea?: StringFieldUpdateOperationsInput | string
    warmup?: NullableJsonNullValueInput | InputJsonValue
    cooldown?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    exercises?: AIWorkoutExerciseUncheckedUpdateManyWithoutAiWorkoutNestedInput
  }

  export type AIWorkoutUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    fitnessLevel?: StringFieldUpdateOperationsInput | string
    goal?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    equipment?: StringFieldUpdateOperationsInput | string
    focusArea?: StringFieldUpdateOperationsInput | string
    warmup?: NullableJsonNullValueInput | InputJsonValue
    cooldown?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgressStatUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    statType?: EnumStatTypeFieldUpdateOperationsInput | $Enums.StatType
    value?: FloatFieldUpdateOperationsInput | number
  }

  export type ProgressStatUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    statType?: EnumStatTypeFieldUpdateOperationsInput | $Enums.StatType
    value?: FloatFieldUpdateOperationsInput | number
  }

  export type ProgressStatUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    statType?: EnumStatTypeFieldUpdateOperationsInput | $Enums.StatType
    value?: FloatFieldUpdateOperationsInput | number
  }

  export type WorkoutExerciseCreateManyWorkoutInput = {
    id?: string
    sets: number
    reps: number
    weight?: number | null
    duration?: number | null
    restTime?: number | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    exerciseId: string
    personalBest?: boolean
  }

  export type WorkoutExerciseUpdateWithoutWorkoutInput = {
    id?: StringFieldUpdateOperationsInput | string
    sets?: IntFieldUpdateOperationsInput | number
    reps?: IntFieldUpdateOperationsInput | number
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    restTime?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    personalBest?: BoolFieldUpdateOperationsInput | boolean
    exercise?: ExerciseUpdateOneRequiredWithoutWorkoutExercisesNestedInput
  }

  export type WorkoutExerciseUncheckedUpdateWithoutWorkoutInput = {
    id?: StringFieldUpdateOperationsInput | string
    sets?: IntFieldUpdateOperationsInput | number
    reps?: IntFieldUpdateOperationsInput | number
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    restTime?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    exerciseId?: StringFieldUpdateOperationsInput | string
    personalBest?: BoolFieldUpdateOperationsInput | boolean
  }

  export type WorkoutExerciseUncheckedUpdateManyWithoutWorkoutInput = {
    id?: StringFieldUpdateOperationsInput | string
    sets?: IntFieldUpdateOperationsInput | number
    reps?: IntFieldUpdateOperationsInput | number
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    restTime?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    exerciseId?: StringFieldUpdateOperationsInput | string
    personalBest?: BoolFieldUpdateOperationsInput | boolean
  }

  export type WorkoutExerciseCreateManyExerciseInput = {
    id?: string
    sets: number
    reps: number
    weight?: number | null
    duration?: number | null
    restTime?: number | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    workoutId: string
    personalBest?: boolean
  }

  export type AIWorkoutExerciseCreateManyExerciseInput = {
    id?: string
    name: string
    sets: number
    reps?: number | null
    duration?: number | null
    rest?: number | null
    instruction?: string | null
    order: number
    aiWorkoutId: string
  }

  export type WorkoutExerciseUpdateWithoutExerciseInput = {
    id?: StringFieldUpdateOperationsInput | string
    sets?: IntFieldUpdateOperationsInput | number
    reps?: IntFieldUpdateOperationsInput | number
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    restTime?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    personalBest?: BoolFieldUpdateOperationsInput | boolean
    workout?: WorkoutUpdateOneRequiredWithoutExercisesNestedInput
  }

  export type WorkoutExerciseUncheckedUpdateWithoutExerciseInput = {
    id?: StringFieldUpdateOperationsInput | string
    sets?: IntFieldUpdateOperationsInput | number
    reps?: IntFieldUpdateOperationsInput | number
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    restTime?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workoutId?: StringFieldUpdateOperationsInput | string
    personalBest?: BoolFieldUpdateOperationsInput | boolean
  }

  export type WorkoutExerciseUncheckedUpdateManyWithoutExerciseInput = {
    id?: StringFieldUpdateOperationsInput | string
    sets?: IntFieldUpdateOperationsInput | number
    reps?: IntFieldUpdateOperationsInput | number
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    restTime?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workoutId?: StringFieldUpdateOperationsInput | string
    personalBest?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AIWorkoutExerciseUpdateWithoutExerciseInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sets?: IntFieldUpdateOperationsInput | number
    reps?: NullableIntFieldUpdateOperationsInput | number | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    rest?: NullableIntFieldUpdateOperationsInput | number | null
    instruction?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    aiWorkout?: AIWorkoutUpdateOneRequiredWithoutExercisesNestedInput
  }

  export type AIWorkoutExerciseUncheckedUpdateWithoutExerciseInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sets?: IntFieldUpdateOperationsInput | number
    reps?: NullableIntFieldUpdateOperationsInput | number | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    rest?: NullableIntFieldUpdateOperationsInput | number | null
    instruction?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    aiWorkoutId?: StringFieldUpdateOperationsInput | string
  }

  export type AIWorkoutExerciseUncheckedUpdateManyWithoutExerciseInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sets?: IntFieldUpdateOperationsInput | number
    reps?: NullableIntFieldUpdateOperationsInput | number | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    rest?: NullableIntFieldUpdateOperationsInput | number | null
    instruction?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    aiWorkoutId?: StringFieldUpdateOperationsInput | string
  }

  export type AIWorkoutExerciseCreateManyAiWorkoutInput = {
    id?: string
    name: string
    sets: number
    reps?: number | null
    duration?: number | null
    rest?: number | null
    instruction?: string | null
    order: number
    exerciseId?: string | null
  }

  export type AIWorkoutExerciseUpdateWithoutAiWorkoutInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sets?: IntFieldUpdateOperationsInput | number
    reps?: NullableIntFieldUpdateOperationsInput | number | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    rest?: NullableIntFieldUpdateOperationsInput | number | null
    instruction?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    exercise?: ExerciseUpdateOneWithoutAiWorkoutExercisesNestedInput
  }

  export type AIWorkoutExerciseUncheckedUpdateWithoutAiWorkoutInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sets?: IntFieldUpdateOperationsInput | number
    reps?: NullableIntFieldUpdateOperationsInput | number | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    rest?: NullableIntFieldUpdateOperationsInput | number | null
    instruction?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    exerciseId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AIWorkoutExerciseUncheckedUpdateManyWithoutAiWorkoutInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sets?: IntFieldUpdateOperationsInput | number
    reps?: NullableIntFieldUpdateOperationsInput | number | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    rest?: NullableIntFieldUpdateOperationsInput | number | null
    instruction?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    exerciseId?: NullableStringFieldUpdateOperationsInput | string | null
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