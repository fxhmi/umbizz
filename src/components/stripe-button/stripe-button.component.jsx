import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51J0OMfL0cSjfqE3wZ4E19rBVQfju52U6KYtlkGhv2BoVQajqUxi43c19KluRoUfukp1YszQNwMqmrh1rAGoTOz1700YpuIymKk';

    const onToken =token => {
        console.log(token);
        alert('Payment Successful');
    }

    return (
        <StripeCheckout
        label='Pay Now'
        name='UMBizz'
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/Y12.svg'
        description={`Your total is RM${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
        currency= 'MYR'      />
    );
};

export default StripeCheckoutButton;