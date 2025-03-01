import './newsletter.css'
import { useState } from 'react';
import emailjs from '@emailjs/browser'

function Newsletter() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [update, setUpdate] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    setUpdate('Please Wait While We Confirm Your Subscription')

    const serviceId = 'service_5065rji'
    const templateId = 'template_vhss2p8'
    const publicKey = 'm8eBEU9tkAuFnVAe0'

    const templateParams = {
      to_name: name,
      to_email: email,
      from_name: 'Librarium'
    }

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((resposne) => {
        setUpdate('Thank You For Subscribing To Our Web Page We Will Send You All The Latest Update On Your Email ')
        console.log('Email sent successfully!', resposne)
        setName('')
        setEmail('')
      })
      .catch((error) => {
        setUpdate("Sorry We Couldn't Find Your Email")
        console.error('Error Sending Email', email, error)
      })
  }

  return (
    <>
      <section class="newsletter">
        <form onSubmit={(e) => handleSubmit(e)}>
          <h3>Subscribe For Latest Updates</h3>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your Name" class="box" />
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your Email" class="box" />
          <button type="submit" class="btn"> Subscribe </button>
          <p className='update'>{update}</p>
        </form>
      </section>
    </>
  )

}

export default Newsletter;