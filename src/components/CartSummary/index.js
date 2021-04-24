import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import {Button, Segment, Divider, Input, Grid} from 'semantic-ui-react'
import $ from 'jquery';
import paymentOrder from '../../../lib/paymentOrder';
import { Link } from 'gatsby';

export default ({
  handleCheckout,
  display_price: {
    with_tax: {amount, currency, formatted},
  },
}) => (
  <div>
    <Divider />
    <Segment clearing size="large">
    <span>
        <strong>Sub total:</strong>
        {` ${formatted}`}
    </span>
    <Button as={Link} to="/checkout" color="black" floated="right" >
          Check out
    </Button>
    
    </Segment>    
  </div>
)
