import './newsletter.css'
import { useState } from 'react';
import emailjs from '@emailjs/browser'

function Newsletter() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [update, setUpdate] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    setUpdate('Please wait while we are sending you request')

    // Your EmailJs details

    const serviceId = 'service_5065rji'
    const templateId = 'template_vhss2p8'
    const publicKey = 'm8eBEU9tkAuFnVAe0'

    // Object That Contains Dynamic Template

    const templateParams = {
      to_name: name,
      to_email: email,
      from_name: 'Librarium'
    }

    // Sending Email Using EmailJs

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((resposne) => {
        setUpdate('Thank You For Subscribing To Our Web Page We Will Send You All The Latest Update On Your Email ')
        console.log('Email sent successfully!', resposne)
        setName('')
        setEmail('')
      })
      .catch((error) => {
        console.error('Error Sending Email', email)
      })
  }

  return (
    <>
      <section class="newsletter">
        <form onSubmit={(e) => handleSubmit(e)}>
          <h3>subscribe for latest updates</h3>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your Name" class="box" />
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your Email" class="box" />
          <button type="submit" class="btn"> subscribe </button>
          <p className='update'>{update}</p>
        </form>
      </section>
    </>
  )

}

export default Newsletter;