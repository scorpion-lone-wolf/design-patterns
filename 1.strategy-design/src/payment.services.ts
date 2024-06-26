import { IPaymentStrategy } from './strategies/payment-strategy.interface';

export class PaymentService {
  private _amount: number;
  private _strategy: IPaymentStrategy;
  constructor(paymentStrategy: IPaymentStrategy, amount: number) {
    this._strategy = paymentStrategy;
    this._amount = amount;
  }

  pay() {
    this._strategy.payment(this._amount);
  }
}
