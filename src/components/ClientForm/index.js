import React from 'react'
import {Button, Segment, Divider, Grid, Header} from 'semantic-ui-react'
import $ from 'jquery';
import paymentOrder from '../../../lib/paymentOrder';
import { Link } from 'gatsby';

export default ({
  handleCheckout,
  display_price: {
    with_tax: {amount, currency, formatted},
  },
}) => (
  <div style={{alignItems:"center" , justifyContent:"center"}}>
    <Divider />
    <Segment clearing size="large">
        <Grid centered>
            <Grid>
                <Header size='huge' style={{margin:35}}>Formulario</Header>
            </Grid>
            <Grid centered >
                <div class="ui input" style={{marginBottom:5}}><input type="text" placeholder="Nombre Completo"/></div>
                <div class="ui input" style={{marginBottom:5}}><input type="text" placeholder="RUT"/></div>
                <div class="ui input" style={{marginBottom:5}}><input type="text" placeholder="Teléfono"/></div>
                <div class="ui input" style={{marginBottom:5}}><input type="text" placeholder="Dirección"/></div>
                <div class="ui input" style={{marginBottom:5}}><input type="text" placeholder="Comuna"/></div>
                <div class="ui input" style={{marginBottom:5}}><input type="text" placeholder="Ciudad"/></div>            
            </Grid>
            <Grid.Row>
            <Button color="black" style={{margin:15}} size="large" onClick={()=>paymentOrder(amount)}>
                Pago
            </Button>   
            </Grid.Row>
            <Grid centered >
            <span style={{margin:15}}>
            <strong>Total:</strong>
            {` ${formatted}`}
            </span>
            </Grid>                
        </Grid>    
    </Segment>    
  </div>
)
