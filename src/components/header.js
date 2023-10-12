import React from 'react'
import logo from '../Png/Bicep Fuels Logo.png'
import { Link } from 'react-router-dom'
export default function Header() {

  //    let [cardVis, setCardVis] = useState(true);
  return (
    <header  >
      <section className="headerMain">
        <Link to='/'>
      <figure>
        <img src={logo} alt="" style={{ width: '12em' }} />
      </figure>
      </Link>
<Link to='/'>
      <h1 className='heading'>
        Bicep Fuels
      </h1>
      </Link>
      </section>
    </header>

  )
}
