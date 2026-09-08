# TypeScript Banking Domain Engineering

Production-oriented TypeScript practice for React frontend and BFSI / FinTech applications.

This repository focuses on using TypeScript to make banking business rules, API contracts, financial calculations, and application state safer and easier to maintain.

## 🎯 What This Project Demonstrates

- Strong typing for banking domain entities
- Interfaces and type aliases
- Union and literal types
- Optional and readonly properties
- Generic API response types
- Discriminated unions
- Type guards and type narrowing
- Utility types and reusable type helpers
- Type-safe error modeling
- Financial/EMI calculations
- Service-layer contracts
- Production-oriented TypeScript patterns

## 🏦 Banking Domain Model

```text
Customer
   ↓
Bank Account
   ↓
Transaction
   ↓
Payment / Transfer
   ↓
Loan / EMI
```

The domain models intentionally represent realistic frontend concerns such as account status, transaction status, currency, KYC state, transfer requests, and API errors.

## 📁 Architecture

```text
src/
├── domain/
│   ├── banking.ts
│   └── loan.ts
├── exercises/
│   └── typeNarrowing.ts
├── services/
│   └── transferService.ts
├── utils/
│   └── typeUtils.ts
└── index.ts
```

- `domain/` contains business entities and rules.
- `services/` isolates application/API behavior.
- `utils/` contains reusable type-safe helpers.
- `exercises/` demonstrates advanced language features through business examples.
- `index.ts` provides a clean module boundary.

## 🧠 Core TypeScript Patterns

### Union types

```ts
type TransactionStatus = "PENDING" | "SUCCESS" | "FAILED";
```

Prevents invalid transaction states from entering the application.

### Readonly domain identifiers

```ts
interface BankAccount {
  readonly accountId: string;
}
```

Account identity should not accidentally change after creation.

### Generic API responses

```ts
interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
}
```

The same response contract can safely represent accounts, transactions, loans, or other resources.

### Discriminated unions

```ts
type Result<T> =
  | { ok: true; data: T }
  | { ok: false; error: ApiError };
```

This makes success and failure paths explicit and helps TypeScript prevent unsafe property access.

### Type guards

The project includes a type guard that narrows successful transactions to `status: "SUCCESS"`.

### Utility types

Reusable helpers demonstrate patterns based on `Partial`, `Required`, `Pick`, `Record`, nullable values, and async-state modeling.

## 💳 Type-Safe Transfer Example

The transfer service accepts a strongly typed request:

```ts
interface TransferRequest {
  fromAccountId: string;
  toAccountId: string;
  amount: number;
  remarks?: string;
}
```

The service returns a typed `Result<TransferReceipt>` so success and failure are explicit at the application boundary.

## 🏠 Loan & EMI Domain

The project models loans and provides a monthly EMI calculation function, including the zero-interest edge case.

```text
EMI = P × r × (1 + r)^n / ((1 + r)^n − 1)
```

Where `P` is principal, `r` is the monthly interest rate, and `n` is the number of monthly instalments.

## ⚛️ React + TypeScript Mapping

```text
React Component
      ↓
Custom Hook
      ↓
Typed Service
      ↓
Typed API Response
      ↓
Banking Domain Model
```

These types are designed to be consumed by React applications and typed REST clients.

## 🧪 Testing Strategy

The intended business-rule coverage includes:

- valid transfer
- invalid transfer amount
- zero-interest EMI
- normal-interest EMI
- transaction status narrowing
- API success response
- API error response
- account status rules

Recommended React integration tooling: **Vitest + React Testing Library**.

## 🚀 Getting Started

```bash
npm install
npm run build
```

## 💡 Engineering Principles

- Prefer explicit domain types over `any`.
- Model business states explicitly.
- Keep API concerns separate from React components.
- Make validation and failure states first-class.
- Optimize types for maintainability and refactoring safety.

## 🔮 Roadmap

- [ ] Add full Vitest unit tests
- [ ] Add React + TypeScript examples
- [ ] Add typed Fetch API client
- [ ] Add runtime validation with Zod at API boundaries
- [ ] Add pagination/filter/sort API contracts
- [ ] Add authentication/session types
- [ ] Add typed beneficiary and card domains
- [ ] Add CI workflow for typecheck + test + build
- [ ] Integrate selected models into `react-bank-dashboard`

## 👩‍💻 Author

**Najmeen Shaikh** — React UI Frontend Developer focused on React, TypeScript, JavaScript, REST APIs, and BFSI / FinTech applications.

GitHub: https://github.com/NajmeenShaikh
