import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import { FiChevronsRight } from 'react-icons/fi';
import { updateCredits } from '../../redux/slices/auth-slice';

import './payments.style.scss';
const Payments = () => {
  const [accessToken, setAccessToken] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    const postData = async () => {
      const res = await axios.post('/api/stripe', accessToken);
      setAccessToken(null);
      dispatch(updateCredits(res.data.credits));
    };
    if (accessToken) postData();
  }, [accessToken, dispatch]);
  return (
    <StripeCheckout
      name="Emailly"
      description="$5 for 5 email credits"
      amount={500}
      token={(token) => setAccessToken(token)}
      stripeKey={process.env.REACT_APP_STRIPE_KEY}>
      <button className="pay-btn">
        Add Credits <FiChevronsRight />
      </button>
    </StripeCheckout>
  );
};

export default Payments;
