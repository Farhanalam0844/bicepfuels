import React from 'react'
import Trending from './Trending'
import Home3 from './home3'
import Home2 from './home2'
import { useNavigate } from 'react-router-dom'

export default function Home(props) {
  let navigate = useNavigate();
  return (
    <section className='home'>
      <article className='article'>
        <div className="article">

          <h1 className='h1' >Bicep Fuels</h1>
          <h1 className='heading1 h1'>Fuel Your Potential</h1>
          <h2 className='h3'>Explore Supplemets | Brands | <br /> Accessories etc </h2>
        </div>
        <button onClick={() => navigate('/product')} className='btn'>Explore</button>
      </article>
      <section>
        <Trending handlePageItem={props.handlePageItem} submit={props.submit} />
      </section>
      <section className='homesec2'>
        <Home2 />
      </section>
      <section>
        <Home3 />
      </section>
    </section>
  )
}
