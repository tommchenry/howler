import React, { Component } from 'react'
import { Container, Item, Dimmer, Loader, Grid } from 'semantic-ui-react'
import NewMewlForm from './NewMewlForm.js'
import axios from 'axios'

class App extends Component {
  constructor () {
    super()
    this.state = {
      mewls: []
    }
    this.addNewMewl = this.addNewMewl.bind(this)
  }

  componentDidMount () {
    axios.get('/api/mewls')
      .then(response => {
        console.log(response)
        this.setState({
          mewls: response.data
        })
      })
      .catch(error => console.log(error))
  }

  addNewMewl(text) {
    axios.post( '/api/mewls', { mewl: {text} })
      .then(response => {
        console.log(response)
        const mewls = [ response.data, ...this.state.mewls ]
        this.setState({mewls})
      })
      .catch(error => {
        console.log(error)
      })
  }

  render () {
    let {mewls} = this.state
    return mewls
    ? <Container text>
        <Grid>
          <Grid.Column width={7}>
            <NewMewlForm onNewMewl={this.addNewMewl} />
          </Grid.Column>
          <Grid.Column width={9}>
            <Item.Group divided unstackable>
              {Object.keys(mewls).map((key) => (
                <Item>
                  <Item.Content>
                  <Item.Header>@{mewls[key].user.username}</Item.Header>
                  <Item.Meta>{mewls[key].user.name}</Item.Meta>
                  <Item.Description>
                    <span>{mewls[key].text}</span>
                  </Item.Description>
                  </Item.Content>
                </Item>
              ))}
            </Item.Group>
          </Grid.Column>
        </Grid>
      </Container>
    : <Container text>
        <Grid>
          <Grid.Column width={7}>
            <NewMewlForm onNewMewl={this.addNewMewl} />
          </Grid.Column>
          <Grid.Column width={9}>
            <Dimmer active inverted>
              <Loader content='Loading' />
            </Dimmer>
          </Grid.Column>
        </Grid>
      </Container>
  }
}

export default App
