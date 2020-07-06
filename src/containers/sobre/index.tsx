import * as React from 'react';

import { Container, Grid, Header } from 'semantic-ui-react';

export default class Sobre extends React.Component {

  render() {

    return (
      <Container>
        <Grid divided='vertically'>
          <Grid.Row columns={2}>
            <Grid.Column>
              <Header color='blue' as='h2'>
                <Header.Content>
                  Sobre
                 <Header.Subheader>
                   Um pouco sobre mim
                 </Header.Subheader>
                </Header.Content>
              </Header>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}