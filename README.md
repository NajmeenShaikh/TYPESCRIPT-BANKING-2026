# TypeScript Banking Domain Engineering

Strict TypeScript business-domain practice for React frontend and BFSI / FinTech applications.

This repository demonstrates how I use TypeScript to model banking entities, API contracts, financial calculations, service-layer results, and explicit success/failure states.

> **Portfolio role:** TypeScript/domain-engineering project supporting my React banking applications.

## 🎯 What This Demonstrates

- Strict TypeScript compiler safety
- Banking domain modeling with interfaces and literal unions
- Discriminated unions for predictable success/error handling
- Type guards and exhaustive `switch` handling
- Generic API response contracts
- Utility types and reusable type helpers
- Financial/EMI business calculations
- Typed service-layer boundaries
- Defensive validation of untrusted inputs
- Unit testing with Node's built-in test runner
- ESM module structure compatible with modern TypeScript projects

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
Typed Result<T>
   ↓
React UI / API Client

Loan
   ↓
EMI Calculation
   ↓
Financial UI
```

Core domain types model account status, transaction lifecycle, currency, KYC state, transfer requests, and API errors. fileciteturn186file0

## 📁 Architecture

```text
src/
├── domain/
│   ├── banking.ts
│   ├── banking.test.ts
│   ├── loan.ts
│   └── loan.test.ts
├── exercises/
│   └── typeNarrowing.ts
├── services/
│   ├── transferService.ts
│   └── transferService.test.ts
├── utils/
│   └── typeUtils.ts
└── index.ts
```

- `domain/` — business entities, states, and financial rules.
- `services/` — application/service contracts and typed results.
- `utils/` — reusable TypeScript helpers.
- `exercises/` — focused examples of narrowing and exhaustive handling.
- Tests sit beside the business modules they protect.

## 🧠 Key TypeScript Patterns

### 1. Literal unions

```ts
type TransactionStatus = "PENDING" | "SUCCESS" | "FAILED";
```

The compiler prevents unsupported transaction states from being passed around.

### 2. Discriminated result

```ts
type Result<T> =
  | { ok: true; data: T }
  | { ok: false; error: ApiError };
```

Consumers must handle success and failure explicitly instead of relying on nullable data or exceptions for expected business errors.

### 3. Type guards

```ts
function isSuccessfulTransaction(transaction: Transaction) {
  return transaction.status === "SUCCESS";
}
```

The guard narrows the transaction status at compile time.

### 4. Exhaustive handling

`assertNever()` is used with transaction-status switches so adding a new status can surface a compile-time failure instead of silently creating an incomplete branch.

### 5. Strict compiler configuration

The project enables strict checking plus additional safety options such as `noUncheckedIndexedAccess`, `exactOptionalPropertyTypes`, `noImplicitOverride`, and exhaustive switch protections.

## 💳 Typed Transfer Service

The service accepts a `TransferRequest` and returns `Promise<Result<TransferReceipt>>`. It validates:

- source and destination account IDs
- same-account transfers
- finite positive amounts
- successful vs failed result paths

The service also generates unique transaction identifiers for the portfolio simulation. In a real banking system, authorization, idempotency, balance checks, fraud controls, and transaction uniqueness must be enforced by the backend as well.

## 🏠 Loan & EMI Domain

The project includes a reducing-balance EMI calculation with validation for principal, interest rate, and tenure, including a zero-interest case.

```text
EMI = P × r × (1 + r)^n / ((1 + r)^n − 1)
```

Where `P` is principal, `r` is the monthly interest rate, and `n` is the number of instalments.

## 🧪 Testing Strategy

Business-rule tests cover:

- successful transaction narrowing
- pending transaction handling
- standard EMI calculation
- zero-interest EMI
- invalid financial inputs
- successful transfer receipt creation
- invalid transfer amounts
- same-account transfers
- missing account identifiers

Run locally with:

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

The types are intentionally reusable from React applications such as a banking dashboard, transfer workflow, or loan/EMI UI.

## 🔐 Engineering & Security Boundary

This is a learning and portfolio repository. It does not process real money or store real customer information.

TypeScript improves compile-time correctness, but it is **not a security boundary**. Production banking applications still require server-side authorization, authentication/session controls, input validation, audit logging, rate limiting, fraud controls, secure transport, and server-enforced idempotency.

## 🚀 Roadmap

- [x] Strict TypeScript domain model
- [x] Typed transfer service
- [x] EMI business calculation
- [x] Discriminated result/error model
- [x] Type guards and exhaustive handling
- [x] Business-rule unit tests
- [ ] Typed Fetch API client
- [ ] Runtime API validation at network boundaries
- [ ] Pagination/filter/sort contracts
- [ ] Beneficiary/card domains
- [ ] React integration examples
- [ ] CI workflow verification

## 👩‍💻 Author

**Najmeen Shaikh** — React UI Frontend Developer focused on React, TypeScript, JavaScript, REST APIs, and BFSI / FinTech applications.

GitHub: https://github.com/NajmeenShaikh
