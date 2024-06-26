"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardStrategy = void 0;
class CardStrategy {
    constructor(cardNumbers) {
        this._cardNumber = cardNumbers;
    }
    payment(amount) {
        console.log(`Paymnet has been made through card ${this._cardNumber} with amount ${amount}`);
        return true;
    }
}
exports.CardStrategy = CardStrategy;
