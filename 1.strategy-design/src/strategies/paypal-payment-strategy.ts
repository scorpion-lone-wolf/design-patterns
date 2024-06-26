import { IPaymentStrategy } from './payment-strategy.interface';

export class PaypalStrategy implements IPaymentStrategy {
  private _email: string;
  constructor(email: string) {
    this._email = email;
  }
  payment(amount: number): boolean {
    console.log(
      `Paymnet has been made through paypal having email ${this._email} with amount ${amount}`
    );
    return true;
  }
}
