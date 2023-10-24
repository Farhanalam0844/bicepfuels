import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
export default function Cart(props) {

  useEffect(() => {
    props.cart.unshift();
  })
  let navigate = useNavigate();
  let remove = (it) => {
    // props.removeFromCart(it.name);
    props.removeFromCart(it.name);
  }
  return (
    <section className='cart product'>
      <h1 className="heading">Cart</h1>
      <article className='cart2' style={{ width: '18rem' }}>
    <section className="carts">

        {
          props.cart &&
          props.cart.map((e, ind) => {
            return (
                  <figure key={ind} style={{ width: '20vw' }}>
                    <img style={{ width: '15vw' }} src={e.pic} alt="" onClick={(e) => {
                      props.Item(e);
                      navigate('/item')
                    }} />
                    <figcaption>Name : <strong> {e.name}</strong></figcaption>
                    <figcaption>Price : <strong> {e.price}</strong></figcaption>
                  <button className='btn5' onClick={() => { props.removeFromCart(e.name) }}>Remove</button>
                  </figure>
            

            )
          }
          )
        }
    </section>

        <Link to='/product/cart/form'> <button style={{ margin: '0px 40vw', width: "8em" }} className="btn5 " >Check out</button></Link>
      </article>
    </section>
  )
}