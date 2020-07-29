import React from 'react';
import { Button, Form, TextArea, Header } from 'semantic-ui-react'

const NewMewlForm = ({onNewMewl = f => f}) => {
    let text
    const submit = e => {
        e.preventDefault()
        onNewMewl(text.ref.current.value)
        text.ref.current.value = ''
        text.focus()
    }

    return (
        <Form onSubmit={submit}>
            <Header size='huge'>Howler</Header>
            <TextArea ref={input => text = input}
                    type="text"
                    placeholder="Mewl it into the void..." required />
            <Button color='red'>Mewl</Button>
        </Form>
    )
}

export default NewMewlForm;

