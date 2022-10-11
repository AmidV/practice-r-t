import React from 'react';

import { useProductsHook } from '../../hooks/productsHook';
import CreateProduct from '../components/CreateProduct';
import ErrorMessage from '../components/ErrorMessage';
import Loader from '../components/Loader';
import Modal from '../components/Modal';
import { Product } from '../components/Product';
import styles from './index.module.scss';


const App: React.FC = () => {

  const { loading, error, products } = useProductsHook();
  
  return (
    <article className={styles.container}>
        {loading && <Loader />}

        {error && <ErrorMessage error={error}/>}

        <h1 style={{ textAlign: 'center'}}>Online Shop</h1>
        {products.map(productSlot => <Product key={productSlot.id}  product={productSlot}/>)}

        <Modal title='Create the Product'>
            <CreateProduct />
        </Modal>
    </article>
  )
}

export default App;