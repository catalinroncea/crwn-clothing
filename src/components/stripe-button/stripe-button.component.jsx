import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51IBM9PFLEQKQD0EKajeWopE2gR7YWNt4NXIPQQ6ThfhmJMYeBmfICCZYtYZf3V5bjSWBARLKYzhoRgmv5nZTnaIZ00qPyqh6FK';

    const onToken = token => {
        console.log(token);
        alert('Payment successful');
    }

    return (
      <StripeCheckout
          label = 'Pay now'
          name = 'CRWN Clothing Ltd.'
          billingAddress
          shippingAddress
          image='https://sendeyo.com/up/d/f3eb2117da'
          description={`Your total is $${price}`}
          amount={priceForStripe}
          panelLabel='Pay Now'
          token={onToken}
          stripeKey={publishableKey}
      />
    );
}

export default StripeCheckoutButton;
