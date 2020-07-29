import React from 'react';

const NewMewlForm = ({onNewMewl = f => f}) => {
    let text
    const submit = e => {
        e.preventDefault()
        onNewMewl(text.value)
        text.value = ''
        text.focus()
    }

    return (
        <form onSubmit={submit}>
            <input  ref={input => text = input}
                    type="text"
                    placeholder="Mewl it into the void..." required />
            <button>Mewl</button>
        </form>
    )
}

export default NewMewlForm;

