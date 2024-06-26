"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentService = void 0;
class PaymentService {
    constructor(paymentStrategy, amount) {
        this._strategy = paymentStrategy;
        this._amount = amount;
    }
    pay() {
        this._strategy.payment(this._amount);
    }
}
exports.PaymentService = PaymentService;
