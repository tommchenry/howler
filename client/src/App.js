import React, { Component } from 'react'
import { Container, Item, Dimmer, Loader } from 'semantic-ui-react'

class App extends Component {
  constructor () {
    super()
    this.state = {}
    this.getMewls = this.getMewls.bind(this)
  }

  componentDidMount () {
    this.getMewls()
  }

  fetch (endpoint) {
    return window.fetch(endpoint)
      .then(response => response.json())
      .catch(error => console.log(error))
  }

  getMewls () {
    this.fetch('/api/mewls')
      .then(mewls => {
        if (mewls.length) {
          this.setState({mewls: mewls})
        } else {
          this.setState({mewls: []})
        }
      })
  }

  render () {
    let {mewls} = this.state
    return mewls
    ? <Container text>
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
      </Container>
    : <Container text>
        <Dimmer active inverted>
          <Loader content='Loading' />
        </Dimmer>
      </Container>
  }
}

export default App
