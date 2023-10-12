import React, { useState } from 'react'
import fb from '../Png/facebook.png'
import ins from '../Png/instagram.png'
import wh from '../Png/social.png'
import gm from '../Png/social (1).png'
import tw from '../Png/twitter.png'
import { HashLink } from 'react-router-hash-link'

import { Link } from 'react-router-dom'
export default function Footer() {
    const [ph, setPh] = useState(false);
    const [gmail, setGmail] = useState(false);
    const [facebook, setFacebook] = useState(false);
    const [insta, setInsta] = useState(false);
    const [twitter, setTwitter] = useState(false);

    return (
        <footer id='footer'>
            <article className='footercategories'>
                <h3>Categories</h3>
                <ul className='underline'>
                    <li>
                        <HashLink smooth to='/product#gainer'>
                            Mass Gainer
                        </HashLink >
                    </li>

                    <li>
                        <HashLink smooth to='/product#protein' >
                            Protein
                        </HashLink >
                    </li>

                    <li>

                        <HashLink smooth to='/product#fat'>
                            Fat Burner
                        </HashLink >
                    </li>
                    <li>
                        <HashLink smooth to='/product#pre'>
                            Pre Workout
                        </HashLink >
                    </li>
                    <li>

                        <HashLink smooth to='/product#accessory'>
                            Accessories
                        </HashLink >
                    </li>

                </ul>
            </article>
            <article>
                <h3>Address</h3>
                <ul>
                    <li>City</li>
                    <li>Country</li>
                    <li>Shop</li>
                </ul>
            </article>
            <article>
                <h3>Contact Information</h3>
                <ul>
                    <li><img onClick={() => setPh(!ph)} src={wh} alt="" /> {ph ? '0342551167' : null}</li>
                    <li><img onClick={() => setGmail(!gmail)} src={gm} alt="" />{gmail ? 'abc@gmail.com' : null}</li>
                    <li><img onClick={() => setTwitter(!twitter)} src={tw} alt="" />{twitter ? <Link to={'https://twitter.com/home'} target='_blank'> 'www.gsgsdg.twitter.com' </Link> : null} </li>
                    <li><img onClick={() => setFacebook(!facebook)} src={fb} alt="" />{facebook ? <Link to={'https://facebook.com/home'} target='_blank'> 'www.gsgsdg.facebook.com' </Link>  : null}</li>
                    <li><img onClick={() => setInsta(!insta)} src={ins} alt="" />{insta ?<Link to={'https://instagram.com/home'} target='_blank'> 'www.gsgsdg.instagram.com' </Link>  : null}</li>
                </ul>
            </article>
            <article >
                <ul >
                    <li> <Link href="/about"> Terms and Conditions</Link></li>
                    <li> <Link href="/about"> Copyright Reserved</Link></li>
                    <li> <Link href="/about">© 2023 Supps</Link></li>

                </ul>
            </article>
        </footer>
    )
}
