import React, {useState} from 'react'
import './ContactPage.css'

function ContactPage() {
const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
      )
      .join('&')
  }

  const resetForm = () => {
    document.getElementById('contact-form').reset()
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', name, email, message }),
    })
      .then(() => {
        alert('Message sent!')
        resetForm()
      })
      .catch((err) => alert(err))
  }
    return (
        <div className='contact-form-section'>

            <div className='form-section'>
                <form
                netlify
                name="contact"
                onSubmit={handleSubmit}
                id="contact-form"
                >
                <h2>
                    Contacta con nosotros.
                </h2>
                <p>
                    Tanto si quieres encargar algún producto, como si tienes alguna pregunta que podamos resolverte o deseas más información,
                    puedes hacerlo desde este formulario que te dejamos aquí abajo. 
                    <br>
                    </br>
                    <br>                    
                    </br>
                    Intentaremos responderte lo más rápidamente posible
                    y aclarar todas las dudas que puedas tener.
                    <br>
                    </br>
                    <br>                    
                    </br>
                </p>
                    <div className='inputs-section'>
                        <div>
                            <label
                            htmlFor="name"
                            >
                            Nombre
                            </label>
                            <input
                            type="text"
                            id="name"
                            name="name"
                            onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className='inputs'>
                            <label className='email'
                            htmlFor="email"
                            >
                            Email
                            </label>
                            <input
                            type="email"
                            id="email"
                            name="email"
                        
                            onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className='inputs'>
                            <label
                            htmlFor="message"
                            >
                            Mensaje
                            </label>
                            <textarea
                            id="message"
                            name="message"
                        
                            onChange={(e) => setMessage(e.target.value)}
                            />
                        </div>
                        <button className='submit'
                            type="submit"
                        >
                            Enviar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ContactPage
