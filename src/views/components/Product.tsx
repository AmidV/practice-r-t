import React, { useState } from 'react';
import { IProduct } from '../../models';
import  styles from './Product.module.scss';

interface ProductProps {
    product: IProduct
}

export const Product = ({ product }: ProductProps) => {
    const [details, setDetails] = useState(false); 
  
    function detailsHandler() {
        return setDetails(!details)
    }


    
    return (
    <div className={styles.card}>
        <img src={product.image} className={styles.cardImg} alt={product.title}/>
        <p>{product.title}</p>
        <p className={styles.cardPrice}>{ product.price }</p>
        <p>Rate: <span style={{fontWeight: 'bold'}}>{product.rating.rate}</span></p>

       {!details && <button className={styles.cardBtn} onClick={detailsHandler}>Show Details</button>}
        {details && <p>{ product.description }</p>}
        {details && <button className={styles.cardBtn2} onClick={detailsHandler}>less...</button>}
    </div>
  )
}
