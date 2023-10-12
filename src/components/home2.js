import React from 'react'
import gainer from '../Png/gain-weight.png'
import accessory from '../Png/glove.png'
import fatloss from '../Png/man.png'
import protein from '../Png/muscle.png'
import preworkout from '../Png/workout.png'
import { HashLink as Link } from 'react-router-hash-link'

export default function Home2() {
  return (
    <section id='categories'>
    <h1 className='heading'>Shop By Categories</h1>
    <article className='home2'>
  <figure>
   <Link smooth to='/product#gainer' > <img src={gainer} alt="" /></Link>
    <figcaption>Mass Gainer</figcaption>
  </figure>
  <figure>
   <Link smooth to='/product#protein' > <img src={protein} alt="" /></Link>
    <figcaption>Protein</figcaption>
  </figure>   <figure>
   <Link smooth to='/product#fatBurner' ><img src={fatloss} alt="" /></Link>
    <figcaption>Fat Burner</figcaption>
  </figure>   <figure>
   <Link smooth to='/product#preWorkout' > <img src={preworkout} alt="" /></Link>
    <figcaption>Pre Workout</figcaption>
  </figure>   <figure>
   <Link smooth to='/product#accessory' > <img src={accessory} alt="" /></Link>
    <figcaption>Accessories</figcaption>
  </figure>
  
    </article>
    </section>
  )
}
