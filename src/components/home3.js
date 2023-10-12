import React from 'react'
import man from '../Png/pngegg (1).png'
import woman from '../Png/pngwing.com.png'
import Footer from './footer'
import { HashLink } from 'react-router-hash-link'
export default function Home3() {
    return (
        <>
            <section className='home3'>
                <article >
                    <div>
                        <h1>Men's Products</h1>
                        <h2>Discover performance gear designed to  <br /> elevate your workouts and achieve greatness.</h2>
                        <HashLink smooth to='/product#menProduct'>   <button className='btn4'>Check it</button>
                        </HashLink>
                    </div>
                    <div>

                        <img src={man} alt="" />
                    </div>
                </article>
                <article>
                    <div>
                        <h1>Woman's Product</h1>
                        <h2>Elevate your fitness journey with stylish and   <br /> functional workout essentials for women.</h2>
                        <HashLink smooth to='/product#womenProduct'>   <button className='btn4'>Check it</button>
                        </HashLink> 
                    </div>
                    <div>
                            <img src={woman} alt="" />
                    </div>
                </article>

            </section>
            <footer>
                <Footer />
            </footer>
        </>
    )
}
