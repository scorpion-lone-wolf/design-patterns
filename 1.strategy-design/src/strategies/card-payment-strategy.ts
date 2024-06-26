import { IPaymentStrategy } from './payment-strategy.interface';

export class CardStrategy implements IPaymentStrategy {
  private _cardNumber: string;
  constructor(cardNumbers: string) {
    this._cardNumber = cardNumbers;
  }
  payment(amount: number): boolean {
    console.log(
      `Paymnet has been made through card ${this._cardNumber} with amount ${amount}`
    );
    return true;
  }
}
