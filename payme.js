// Use Payment Request API
const supportedPaymentMethods = [{ supportedMethods: ['basic-card'] }];
// paymnet details of cost
const paymentDetails = { total: { label: 'Total',amount: { currency: 'USD',value: 0 } } };
// Options isn't required.
const options = {};
// PaymentRequest Constructor
const request = new PaymentRequest(supportedPaymentMethods, paymentDetails, options);

async function takeMoney() {
  // show the payment popup and wait until they fill it out
  const paymentResponse = await request.show();
  // complete payment
  await paymentResponse.complete();
  //now send it off to Nike checkout
  console.log(paymentResponse.details);
}
