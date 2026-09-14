import type { Result, TransferRequest } from "../domain/banking.js";

export interface TransferReceipt {
  readonly transactionId: string;
  readonly status: "PENDING" | "SUCCESS";
  readonly processedAt: string;
}

function createTransactionId(): string {
  if (typeof globalThis.crypto?.randomUUID === "function") {
    return `TXN-${globalThis.crypto.randomUUID()}`;
  }

  return `TXN-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
}

function invalidRequest(message: string, code: string): Result<never> {
  return {
    ok: false,
    error: { code, message },
  };
}

export async function createTransfer(
  request: TransferRequest,
): Promise<Result<TransferReceipt>> {
  if (!request.fromAccountId.trim() || !request.toAccountId.trim()) {
    return invalidRequest(
      "Source and destination account IDs are required.",
      "INVALID_ACCOUNT",
    );
  }

  if (request.fromAccountId === request.toAccountId) {
    return invalidRequest(
      "Source and destination accounts must be different.",
      "SAME_ACCOUNT",
    );
  }

  if (!Number.isFinite(request.amount) || request.amount <= 0) {
    return invalidRequest(
      "Transfer amount must be greater than zero.",
      "INVALID_AMOUNT",
    );
  }

  return {
    ok: true,
    data: {
      transactionId: createTransactionId(),
      status: "SUCCESS",
      processedAt: new Date().toISOString(),
    },
  };
}
