"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaypalStrategy = void 0;
class PaypalStrategy {
    constructor(email) {
        this._email = email;
    }
    payment(amount) {
        console.log(`Paymnet has been made through paypal having email ${this._email} with amount ${amount}`);
        return true;
    }
}
exports.PaypalStrategy = PaypalStrategy;
