import * as React from 'react';
import { Container, Grid, Header, Form, Button } from 'semantic-ui-react';
import { inject, observer } from 'mobx-react';
import NewRouterStore from '../../mobx/router.store';
import CacheStore from './store';

interface Props {
  router: NewRouterStore;
  cache: CacheStore;
}

@inject('router', 'cache')
@observer
export default class Cache extends React.Component<Props>{

  componentDidMount() {
    const { loadForm } = this.props.cache;
    loadForm();
  }
  
  render() {

    const { local, session, cookie, handleForm, submit } = this.props.cache;

    const submitForm = (e) => {
      e.preventDefault();
      submit();
    }

    return (
      <Container>
        <Grid divided='vertically'>
          <Grid.Row columns={2}>
            <Header color='blue' as='h2'>
              <Header.Content>
                Cache
                <Header.Subheader>Local Storage / Session Storage / Cookies</Header.Subheader>
              </Header.Content>
            </Header>
          </Grid.Row>
        </Grid>
        <Form onSubmit={submitForm}>
          <Form.Group widths='equal'>
            <Form.Field>
              <label>Local Storage</label>
              <input value={local || ''} name='local' onChange={handleForm} placeholder='Batata' />
            </Form.Field>
            <Form.Field>
              <label>Session Storage</label>
              <input value={session || ''} name='session' onChange={handleForm} placeholder='Maça' />
            </Form.Field>
            <Form.Field>
              <label>Cookie</label>
              <input value={cookie || ''} name='cookie' onChange={handleForm} placeholder='Beterraba' />
            </Form.Field>
          </Form.Group>
          <Button type='submit'>Armazenar</Button>
        </Form>
      </Container>)
  }
}