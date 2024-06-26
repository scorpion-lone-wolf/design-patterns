import { PaymentService } from './payment.services';
import { CardStrategy } from './strategies/card-payment-strategy';
import { PaypalStrategy } from './strategies/paypal-payment-strategy';

function main() {
  const paypalPaymentStrategy = new PaypalStrategy('rahul@gmail.com');
  const cardPaymentStrategy = new CardStrategy('1234-1234-1234');

  const paymentServiceForPaypal = new PaymentService(
    paypalPaymentStrategy,
    1200
  );
  const paymentServiceForCard = new PaymentService(cardPaymentStrategy, 1200);

  paymentServiceForPaypal.pay();
  paymentServiceForCard.pay();
}

main();
