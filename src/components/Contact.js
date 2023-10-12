import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Link } from 'react-router-dom';
import Footer from './footer';
function Contact() { 
 /* const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
*/
  const [state, HandleSubmit] = useForm("mzblagbb");
  if (state.succeeded) {
      return(
      <section style={{ minHeight:'70vh', backgroundColor:'wheat', textAlign:'center',alignItems:'center', padding:'3em'}}>
       <h1 className='heading2'>Thanks for Contacting!</h1>
       <Link to='/'> <button className='btn5'>Go Back Home</button></Link>
      </section>
       )
  }
  return (
    <div className="contact-form-container contact">
      <h1 className='heading'>Contact Us</h1>
      <form onSubmit={HandleSubmit} >
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
          minLength={3}
          maxLength={20}
            type="text"
            id="name"
            name="name"
            placeholder='Enter Your name'
          //  value={formData.name}
          //  onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"

            placeholder='abc@gmail.com'
          //  value={formData.email}
          //  onChange={handleChange}
            required
          />
            <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            placeholder='Enter Message'
          //  value={formData.message}
          //  onChange={handleChange}
            required
            rows={5}
            cols={18}
          />
               <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
        </div>
        <button type="submit" disabled={state.submitting}>Submit</button>
      </form>
      <Footer />
    </div>
  );
}

export default Contact;
