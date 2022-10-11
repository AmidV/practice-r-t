import React from 'react'

export default function CreateProduct() {
  return (
    <form>
        <input
            type='text'
            style={{
                border: '1px solid black',
                padding: '5px 7px',
                width: '90%',
                marginBottom: '10px',
                outline: '0'
            }}
            placeholder='Type a product title...'
        />
        <button type='submit' style={{
                background: 'yellow',
                border: '1px solid black',
                padding: '5px 7px',
                cursor: 'pointer'
            }}>Create</button>
    </form>
  )
}
