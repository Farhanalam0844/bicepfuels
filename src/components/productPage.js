import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from './footer';

const ProductPage = (props) => {
  let e = props.item;
  let navigate=useNavigate()
  return (
    <>
    <section className='pageItem'>
      <article className='itempg1'>
        <figure>
          <img style={{ width: '20vw', padding: '2em' }} src={e.pic} alt="" />
          <figcaption>Name : <strong> {e.name}</strong></figcaption>
          <figcaption>Weight : <strong> {props.item.weight}</strong></figcaption>
          <figcaption>Price : <strong> {props.item.price}</strong></figcaption>
        </figure>
        <button className='btn5' onClick={() => { props.submit(e); navigate('/product/cart') }}>Add to Cart</button>
      </article>
      <article>
        <h1 className="heading2">Details</h1>
        {e.description}
      </article>
    </section>
    <Footer />
    </>

  );
};

export default ProductPage;
