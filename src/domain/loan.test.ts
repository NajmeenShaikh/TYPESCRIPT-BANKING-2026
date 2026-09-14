import assert from "node:assert/strict";
import test from "node:test";
import { calculateMonthlyEmi } from "./loan.js";

test("calculates EMI for a standard loan", () => {
  const emi = calculateMonthlyEmi(500000, 10, 60);
  assert.ok(emi > 10000 && emi < 11000);
});

test("calculates zero-interest EMI", () => {
  assert.equal(calculateMonthlyEmi(120000, 0, 12), 10000);
});

test("rejects invalid financial inputs", () => {
  assert.equal(calculateMonthlyEmi(0, 10, 12), 0);
  assert.equal(calculateMonthlyEmi(100000, -1, 12), 0);
  assert.equal(calculateMonthlyEmi(100000, 10, 0), 0);
  assert.equal(calculateMonthlyEmi(100000, 10, 12.5), 0);
});
