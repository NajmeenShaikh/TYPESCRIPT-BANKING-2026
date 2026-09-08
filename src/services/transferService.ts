import type { Result, TransferRequest } from "../domain/banking";

export interface TransferReceipt {
  transactionId: string;
  status: "PENDING" | "SUCCESS";
  processedAt: string;
}

export async function createTransfer(
  request: TransferRequest,
): Promise<Result<TransferReceipt>> {
  if (request.amount <= 0) {
    return {
      ok: false,
      error: {
        code: "INVALID_AMOUNT",
        message: "Transfer amount must be greater than zero.",
      },
    };
  }

  return {
    ok: true,
    data: {
      transactionId: `TXN-${Date.now()}`,
      status: "SUCCESS",
      processedAt: new Date().toISOString(),
    },
  };
}
