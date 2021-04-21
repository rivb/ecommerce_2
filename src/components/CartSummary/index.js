import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import {Button, Segment, Divider, Input} from 'semantic-ui-react'
import $ from 'jquery';
import paymentOrder from '../../../lib/paymentOrder';

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
    <Button color="black" floated="right" onClick={()=>paymentOrder(amount)}>
          Check out
    </Button>
    <br></br><br></br><br></br>
    <strong>Formulario</strong>
    <br></br><br></br>
    <div class="ui input"><input type="text" placeholder="Nombre Completo"/></div>
    <br></br><br></br>
    <div class="ui input"><input type="text" placeholder="RUT"/></div>
    <br></br><br></br>
    <div class="ui input"><input type="text" placeholder="Teléfono"/></div>
    <br></br><br></br>
    <div class="ui input"><input type="text" placeholder="Dirección"/></div>
    <br></br><br></br>
    <div class="ui input"><input type="text" placeholder="Comuna"/></div>
    <br></br><br></br>
    <div class="ui input"><input type="text" placeholder="Ciudad"/></div>
    <Button color="black" floated="right" onClick={()=>paymentOrder(amount)}>
          Check out
    </Button>
    <br></br><br></br>
    </Segment>

    
  </div>
)
