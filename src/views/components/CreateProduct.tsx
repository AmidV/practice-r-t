import axios from 'axios';
import React, { useState } from 'react';

import { IProduct } from '../../models';
import ErrorMessage from './ErrorMessage';

const productData: IProduct = {
  title: '',
  price: 13.5,
  description: 'lorem ipsum',
  image: 'https://i.pravatar.cc',
  category: 'electronic',
  rating: {
    rate: 34,
    count: 14
  }
}

interface CreateProductProps {
  onCreate: (product: IProduct) => void
}


export default function CreateProduct( { onCreate }: CreateProductProps ) {
const [ value, setValue ] = useState(' ');
const [ error, setError ] = useState('');

  const submitHandler = async (e: React.FormEvent<Element>) => {
    e.preventDefault();
    setError('');

    if(value.trim().length === 0) {
      setError('Please enter valid title.');
      return
    }

    productData.title = value;
    const response = await axios.post<IProduct>('https://fakestoreapi.com/products', productData)
    onCreate(response.data);
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
