import React, {useEffect, useState} from 'react';
import axios, { AxiosError } from 'axios';

import { IProduct } from '../models';


export const useProductsHook = () => {
    const [products, setProducts] = useState<IProduct[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const addProduct = ( product: IProduct ) => {
      setProducts(prev => [...prev, product]);
    }
  
    async function fetchProducts() {
      try {
          setError('')
          setLoading(true);
          const res = await axios.get<IProduct[]> ('https://fakestoreapi.com/products?limit=5');
          setProducts(res.data)
          setLoading(false);
      } catch(e) {
          const error = e as AxiosError
          setLoading(false);
          setError(error.message);
      }
    }
  
    useEffect(() => {
      fetchProducts();
    }, []);

    return { loading, error, products, addProduct }
}
