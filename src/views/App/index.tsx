import React, { useState } from 'react';

import { useProductsHook } from '../../hooks/productsHook';
import { IProduct } from '../../models';
import CreateProduct from '../components/CreateProduct';
import ErrorMessage from '../components/ErrorMessage';
import Loader from '../components/Loader';
import Modal from '../components/Modal';
import { Product } from '../components/Product';
import styles from './index.module.scss';


const App: React.FC = () => {

  const { loading, error, products, addProduct } = useProductsHook();
  const [modal, setModal] = useState(false);

  const createHandler = (product: IProduct) => {
    setModal(false);
    addProduct(product);
  }


  
  return (
    <article className={styles.container}>
        {loading && <Loader />}

        {error && <ErrorMessage error={error}/>}

        <h1 style={{ textAlign: 'center'}}>Online Shop</h1>
        {products.map(productSlot => <Product key={productSlot.id}  product={productSlot}/>)}

        { modal && <Modal title='Create the Product' onClose={() => setModal(false)}>
            <CreateProduct onCreate={createHandler}/>
        </Modal> }

        <button
         style={{
          position: 'fixed',
          bottom: '10px',
          right: '10px',
          borderRadius: '50px',
          color: 'white',
          background: 'red',
          paddingLeft: '15px',
          paddingRight: '15px',
          paddingTop: '15px',
          paddingBottom: '15px',
          cursor: 'pointer'
         }}
         onClick={() => setModal(true)}

        >+</button>
    </article>
  )
}

export default App;