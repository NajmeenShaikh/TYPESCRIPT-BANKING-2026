export interface Loan {
  readonly loanId: string;
  customerId: string;
  principal: number;
  annualInterestRate: number;
  tenureMonths: number;
  remainingPrincipal: number;
}

export interface EmiBreakdown {
  month: number;
  openingPrincipal: number;
  interest: number;
  principal: number;
  closingPrincipal: number;
}

export function calculateMonthlyEmi(
  principal: number,
  annualInterestRate: number,
  tenureMonths: number,
): number {
  if (principal <= 0 || tenureMonths <= 0) return 0;
  if (annualInterestRate === 0) return principal / tenureMonths;

  const monthlyRate = annualInterestRate / 12 / 100;
  const factor = (1 + monthlyRate) ** tenureMonths;
  return (principal * monthlyRate * factor) / (factor - 1);
}
