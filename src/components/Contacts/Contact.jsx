import React from 'react'
import "./contact.css"

const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "ef2d0ad5-ae82-477a-99fa-2c8ecbb71550");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        event.target.value=""
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  return (
    <div className='contact'>
        <div className="contactNav">
        <p>TESTIMONIALS</p>
        <h2>What Student Says</h2>
        </div>
        <div className="mail">
            <form action="" onSubmit={onSubmit}>
                <label htmlFor="">Your Name</label>
                <input type="text" name='name' placeholder='Enter your name' required/>
                <label htmlFor="">Your PhoneNo.</label>
                <input type="tel" name='phone' placeholder='Enter your number' required />
                <label htmlFor="">Your Email</label>
                <input type="email" name='email'  placeholder='Enter your email' required/>
                <label htmlFor="">Write your message here</label>
                <textarea type="text" name='message' placeholder='Enter your message' required/>
                <button type="submit" className='btn'>Submit Now</button>
                <span>{result}</span>
            </form>
            
        </div>
       
    </div>
  )
}

export default Contact