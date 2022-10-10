import React from 'react';
import { Product } from '../components/Product';

import { products } from '../../data/stores/products';

import styles from './index.module.scss';


const App: React.FC = () => {
  return (
    <article className={styles.container}>
        <h1>Hello World!</h1>
        <Product product={ products[0] }/>
        <Product product={ products[1] }/>
    </article>
  )
}

export default App;