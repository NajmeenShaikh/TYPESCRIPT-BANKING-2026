export type Currency = "INR" | "USD" | "EUR";

export type AccountStatus = "ACTIVE" | "BLOCKED" | "CLOSED";

export type TransactionStatus = "PENDING" | "SUCCESS" | "FAILED";

export type TransactionType = "DEBIT" | "CREDIT";

export interface Customer {
  readonly customerId: string;
  name: string;
  email: string;
  kycVerified: boolean;
}

export interface BankAccount {
  readonly accountId: string;
  readonly customerId: string;
  currency: Currency;
  balance: number;
  status: AccountStatus;
}

export interface Transaction {
  readonly transactionId: string;
  accountId: string;
  amount: number;
  type: TransactionType;
  status: TransactionStatus;
  createdAt: string;
}

export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
}

export interface ApiError {
  code: string;
  message: string;
  correlationId?: string;
}

export type Result<T> =
  | { ok: true; data: T }
  | { ok: false; error: ApiError };

export type TransferRequest = {
  fromAccountId: string;
  toAccountId: string;
  amount: number;
  remarks?: string;
};

export function isSuccessfulTransaction(
  transaction: Transaction,
): transaction is Transaction & { status: "SUCCESS" } {
  return transaction.status === "SUCCESS";
}
