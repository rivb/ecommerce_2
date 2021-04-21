import React from 'react'
import {Link} from 'gatsby'
import {Segment, Container, Grid, List, Header} from 'semantic-ui-react'

const instagramLink = (
  <a href="https://www.instagram.com/bloque_55/?hl=es-la" alt="instagram link">
    Instagram
  </a>
)
const facebookLink = (
  <a href="https://www.facebook.com/Bloque55" alt="facebook link">
    Facebook
  </a>
)
const whatsappLink = (
  <a href="mailto:john@doe.com" alt="whatsapp link">
    Whatsapp
  </a>
)

const Footer = () => (
  <Segment
    vertical
    style={{
      padding: '4em 0em',
      marginTop: '3em',
      borderTop: '1px solid #f2f2f2',
    }}
  >
    <Container text>
      <Grid stackable>
        <Grid.Row>
          <Grid.Column width={4}>
            <Header as="h4" content="Sobre" />
            <List>
              <List.Item as={Link} to="/privacy/">
                Privacidad
              </List.Item>
              <List.Item as={Link} to="/terms/">
                Terminos
              </List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={5}>
            <Header as="h4" content="Nosotros" />
            <List>
              <List.Item as={Link} to="/">
                Nuestros Productos
              </List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={7}>
            <Header as="h4">Bloque 55</Header>
            <p>
              Extra space for a call to action inside the footer that could help
              re-engage users.
            </p>
            <List horizontal style={{display: 'flex'}}>
              <List.Item
                icon="instagram"
                style={{display: 'flex'}}
                content={instagramLink}
              />
              <List.Item
                icon="facebook"
                style={{display: 'flex'}}
                content={facebookLink}
              />
              <List.Item
                icon="whatsapp"
                style={{display: 'flex'}}
                content={whatsappLink}
              />
            </List>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </Segment>
)

export default Footer
