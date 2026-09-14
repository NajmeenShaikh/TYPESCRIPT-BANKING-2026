import assert from "node:assert/strict";
import test from "node:test";
import { createTransfer } from "./transferService.js";

test("creates a successful transfer receipt", async () => {
  const result = await createTransfer({
    fromAccountId: "AC-1001",
    toAccountId: "AC-2002",
    amount: 1250,
  });

  assert.equal(result.ok, true);
  if (result.ok) {
    assert.match(result.data.transactionId, /^TXN-/);
    assert.equal(result.data.status, "SUCCESS");
    assert.ok(result.data.processedAt);
  }
});

test("rejects invalid transfer amounts", async () => {
  const result = await createTransfer({
    fromAccountId: "AC-1001",
    toAccountId: "AC-2002",
    amount: 0,
  });

  assert.equal(result.ok, false);
  if (!result.ok) assert.equal(result.error.code, "INVALID_AMOUNT");
});

test("rejects transfers to the same account", async () => {
  const result = await createTransfer({
    fromAccountId: "AC-1001",
    toAccountId: "AC-1001",
    amount: 100,
  });

  assert.equal(result.ok, false);
  if (!result.ok) assert.equal(result.error.code, "SAME_ACCOUNT");
});

test("rejects missing account identifiers", async () => {
  const result = await createTransfer({
    fromAccountId: " ",
    toAccountId: "AC-2002",
    amount: 100,
  });

  assert.equal(result.ok, false);
  if (!result.ok) assert.equal(result.error.code, "INVALID_ACCOUNT");
});
