import type { Transaction, TransactionStatus } from "../domain/banking";
import { isSuccessfulTransaction } from "../domain/banking";
import { assertNever } from "../utils/typeUtils";

export function getTransactionMessage(status: TransactionStatus): string {
  switch (status) {
    case "PENDING":
      return "Transaction is being processed.";
    case "SUCCESS":
      return "Transaction completed successfully.";
    case "FAILED":
      return "Transaction failed and requires review.";
    default:
      return assertNever(status);
  }
}

export function getSuccessfulTransactions(
  transactions: Transaction[],
): Array<Transaction & { status: "SUCCESS" }> {
  return transactions.filter(isSuccessfulTransaction);
}
