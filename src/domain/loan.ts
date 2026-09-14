export interface Loan {
  readonly loanId: string;
  readonly customerId: string;
  principal: number;
  annualInterestRate: number;
  tenureMonths: number;
  remainingPrincipal: number;
}

export interface EmiBreakdown {
  readonly month: number;
  readonly openingPrincipal: number;
  readonly interest: number;
  readonly principal: number;
  readonly closingPrincipal: number;
}

export function calculateMonthlyEmi(
  principal: number,
  annualInterestRate: number,
  tenureMonths: number,
): number {
  if (
    !Number.isFinite(principal) ||
    !Number.isFinite(annualInterestRate) ||
    !Number.isInteger(tenureMonths) ||
    principal <= 0 ||
    annualInterestRate < 0 ||
    tenureMonths <= 0
  ) {
    return 0;
  }

  if (annualInterestRate === 0) return principal / tenureMonths;

  const monthlyRate = annualInterestRate / 12 / 100;
  const factor = (1 + monthlyRate) ** tenureMonths;
  return (principal * monthlyRate * factor) / (factor - 1);
}
