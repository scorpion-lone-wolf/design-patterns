// * This is the Base PaymnetStrategy that defines what other Concrete strategies should implement.
export interface IPaymentStrategy {
  payment(amount: number): boolean;
}
