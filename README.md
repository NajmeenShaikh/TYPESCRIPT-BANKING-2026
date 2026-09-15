# TypeScript Banking Domain Engineering

Strict TypeScript business-domain engineering for **React frontend and BFSI / FinTech applications**.

This repository demonstrates how I model banking entities, API contracts, financial calculations, service results and explicit success/failure states with TypeScript.

> **Portfolio role:** TypeScript/domain-engineering project supporting my React banking applications.

## 🎯 What This Demonstrates

- Strict TypeScript compiler safety
- Banking domain models with interfaces and literal unions
- Discriminated unions for explicit success/error handling
- Type guards and exhaustive `switch` handling
- Generic API response contracts
- Utility types and reusable type helpers
- Financial/EMI business calculations
- Typed service-layer boundaries
- Defensive validation of untrusted inputs
- Unit testing with Node's built-in test runner

## 🏦 Domain Model

```text
Customer
   ↓
Bank Account
   ↓
Transaction
   ↓
Transfer Service
   ↓
Result<T>
   ↓
React UI / API Client

Loan
   ↓
EMI Calculation
   ↓
Financial UI
```

## 📁 Architecture

```text
src/
├── domain/
│   ├── banking.ts
│   ├── banking.test.ts
│   ├── loan.ts
│   └── loan.test.ts
├── services/
│   ├── transferService.ts
│   └── transferService.test.ts
├── utils/
│   └── typeUtils.ts
├── exercises/
│   └── typeNarrowing.ts
└── index.ts
```

`domain/` contains business entities and financial rules. `services/` contains typed application contracts. `utils/` contains reusable helpers. The focused `exercises/` directory contains isolated narrowing/exhaustiveness examples.

## 🧠 Key TypeScript Patterns

### Literal unions

```ts
type TransactionStatus = "PENDING" | "SUCCESS" | "FAILED";
```

### Discriminated results

```ts
type Result<T> =
  | { ok: true; data: T }
  | { ok: false; error: ApiError };
```

Expected business failures are represented explicitly instead of relying on nullable values or exceptions for every branch.

### Type guards and exhaustive handling

Type guards narrow domain states, while `assertNever()` makes incomplete status handling visible during compilation when a new state is introduced.

### Strict compiler configuration

The project uses strict checking with additional safety options such as `noUncheckedIndexedAccess`, `exactOptionalPropertyTypes` and `noImplicitOverride`.

## 💳 Typed Transfer Service

The transfer service accepts a `TransferRequest` and returns `Promise<Result<TransferReceipt>>`. It validates source/destination account IDs, same-account transfers and finite positive amounts, with explicit success and failure paths.

In a real banking system, authorization, balance checks, fraud controls, idempotency and transaction uniqueness must be enforced by trusted backend services.

## 🏠 Loan & EMI Domain

The project includes a reducing-balance EMI calculation with validation for principal, interest rate and tenure, including a zero-interest case.

## 🧪 Testing Strategy

Business-rule tests cover:

- Transaction-state narrowing
- Pending/success/failure handling
- Standard and zero-interest EMI
- Invalid financial inputs
- Successful transfer receipt creation
- Invalid transfer amounts
- Same-account transfers
- Missing account identifiers

Run locally:

```bash
npm install
npm run typecheck
npm test
npm run build
```

## ⚛️ React + TypeScript Mapping

```text
React Component
      ↓
Custom Hook
      ↓
Typed Service
      ↓
Result<T> / ApiResponse<T>
      ↓
Banking Domain Model
```

The types are designed to be reusable from React applications such as a banking dashboard, transfer workflow or loan/EMI UI.

## 🔐 Engineering Boundary

This is a portfolio repository and does not process real money or store real customer information. TypeScript improves compile-time correctness; it is not a security boundary. Production banking applications still require server-side authorization, authentication, validation, audit logging, rate limiting, fraud controls and server-enforced idempotency.

## 👩‍💻 Author

**Najmeen Shaikh** — React UI Frontend Developer focused on React, TypeScript, JavaScript, REST APIs and BFSI / FinTech applications.
