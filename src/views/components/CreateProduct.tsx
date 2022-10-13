import axios from 'axios';
import React, { useState } from 'react';

import { IProduct } from '../../models';
import ErrorMessage from './ErrorMessage';

const productData: IProduct = {
  title: 'test product',
  price: 13.5,
  description: 'lorem ipsum',
  image: 'https://i.pravatar.cc',
  category: 'electronic',
  rating: {
    rate: 34,
    count: 14
  }
}


export default function CreateProduct() {
const [ value, setValue ] = useState('');
const [ error, setError ] = useState('');

  const submitHandler = async (e: React.FormEvent<Element>) => {
    e.preventDefault();

    if(value.trim().length === 0) {
      setError('Please enter valid title.');
      return
    }

    const response = await axios.post('https://fakestoreapi.com/products', productData)
    
  }

  const changeHandler = (event: any) => {
    setValue(event.target.value)
  }
  
  return (
    <form onSubmit={submitHandler}>
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
            value={value} 
            onChange={changeHandler}
        />

        { error && <ErrorMessage error={error}/> }

        <button type='submit' style={{
                background: 'yellow',
                border: '1px solid black',
                padding: '5px 7px',
                cursor: 'pointer'
            }}>Create</button>
    </form>
  )
}
