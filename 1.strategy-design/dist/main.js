"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const payment_services_1 = require("./payment.services");
const card_payment_strategy_1 = require("./strategies/card-payment-strategy");
const paypal_payment_strategy_1 = require("./strategies/paypal-payment-strategy");
function main() {
    const paypalPaymentStrategy = new paypal_payment_strategy_1.PaypalStrategy('rahul@gmail.com');
    const cardPaymentStrategy = new card_payment_strategy_1.CardStrategy('1234-1234-1234');
    const paymentServiceForPaypal = new payment_services_1.PaymentService(paypalPaymentStrategy, 1200);
    const paymentServiceForCard = new payment_services_1.PaymentService(cardPaymentStrategy, 1200);
    paymentServiceForPaypal.pay();
    paymentServiceForCard.pay();
}
main();
