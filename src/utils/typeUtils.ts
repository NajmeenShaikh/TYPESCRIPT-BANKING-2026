export type Nullable<T> = T | null;

export type ReadonlyRecord<T> = Readonly<Record<string, T>>;

export type Update<T> = Partial<T>;

export type RequireFields<T, K extends keyof T> = T & Required<Pick<T, K>>;

export type AsyncState<T, E = Error> =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success"; data: T }
  | { status: "error"; error: E };

export function assertNever(value: never): never {
  throw new Error(`Unhandled value: ${String(value)}`);
}

export function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}
