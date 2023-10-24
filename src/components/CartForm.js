import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Link } from 'react-router-dom';
function Contact(props) {
    const calculateTotal = () => {
        let total = 0;
        props.cart.forEach((item) => {
            total += parseInt(item.price);
        });
        return total;
    };
    let item = props.cart;

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
    const [state, HandleSubmit] = useForm("xleywngq");
    if (state.succeeded) {
        return (
            <section style={{ minHeight: '70vh', backgroundColor: 'wheat', textAlign: 'center', alignItems: 'center', padding: '3em' }}>
                <h1 className='heading2'>Thanks for Ordering! <br />We will Contact you shortly</h1>
                <Link to='/'> <button className='btn5'>Go Back Home</button></Link>
            </section>
        )
    }
    return (
        <div className="contact-form-container contact">
            <h1 className='heading'>Check Out</h1>

            <form onSubmit={HandleSubmit}
            >
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
                    <label htmlFor="phone">Phone Number:</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder='123-456-7890'
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
                    <label htmlFor="Address">Address</label>
                    <input type="address" placeholder='Address' id='Address' name='Address'
                        prefix="Email"
                        field="email"
                        errors={state.errors} />
                </div>
                <div className="form-group">
                    <label htmlFor="comments">Comments:</label>
                    <textarea
                        id="comments"
                        name="comments"
                        rows="4"
                        placeholder='Enter any additional comments...'
                    />
                </div>
                {/*

                   <div className="form-group">
                    <label htmlFor="checkbox">Cash on Delievery</label>
                    <input type="checkbox" name="checkbox" id="checkbox" />
                </div>
               */ }
                <label htmlFor="checkbox">Items on Cart</label>
                <div className="form-group">
                    <input type="text"
                        name='products'
                        id='product'
                        defaultValue={props.cart.map((item) => `${item.name} (${item.price})`).join(', ')}
                        readOnly
                    />
                </div>

                <div className="form-group">
                    <input type="text"
                        name='Total'
                        id='Total'
                        defaultValue={'Total Price : ' + calculateTotal()+ '/Rs'}
                        readOnly
                    />
                </div>
                <h5>Cash on Delievery Only</h5>
                <button type="submit" disabled={calculateTotal() === 0}>Check out</button>
            </form>

        </div>
    );
}

export default Contact;
