if(window.PaymentRequest) {
  // Use Payment Request API
  const supportedPaymentMethods = [
    {supportedMethods: ['basic-card'],}
  ];

  const paymentDetails = {
  total: {
    label: 'Total',
    amount:{
      currency: 'USD',
      value: 0
    }
  }
};

// Options isn't required.
const options = {};

const request = new PaymentRequest(
  supportedPaymentMethods,
  paymentDetails,
  options
);

request.show()
.then((res)=>console.log(res))

} else {
  console.log('Payment Request not supported, go to checkout routed');
  // Fallback to traditional checkout
}
