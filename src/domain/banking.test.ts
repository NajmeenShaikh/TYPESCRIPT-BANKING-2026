import assert from "node:assert/strict";
import test from "node:test";
import {
  isSuccessfulTransaction,
  type Transaction,
} from "./banking.js";

test("narrows a successful transaction", () => {
  const transaction: Transaction = {
    transactionId: "TXN-1001",
    accountId: "AC-1001",
    amount: 1250,
    type: "DEBIT",
    status: "SUCCESS",
    createdAt: "2026-09-14T08:00:00.000Z",
  };

  assert.equal(isSuccessfulTransaction(transaction), true);
});

test("does not classify pending transactions as successful", () => {
  const transaction: Transaction = {
    transactionId: "TXN-1002",
    accountId: "AC-1001",
    amount: 500,
    type: "DEBIT",
    status: "PENDING",
    createdAt: "2026-09-14T08:00:00.000Z",
  };

  assert.equal(isSuccessfulTransaction(transaction), false);
});
