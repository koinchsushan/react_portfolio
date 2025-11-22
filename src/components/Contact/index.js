import React, { useEffect, useRef, useState } from 'react'
import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import emailjs from '@emailjs/browser'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const refForm = useRef()

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()
    // removed emailjs for security purposes
    emailjs
      .sendForm(
        'service_id',
        'template_id',
        refForm.current,
        'public_key'
      )
      .then(
        () => {
          alert('Message successfully sent!')
          refForm.current.reset()
        },
        () => {
          alert('Failed to send the message')
        }
      )
  }
  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
              letterClass={letterClass}
            />
          </h1>
          <div className="details">
            <p>
              Here, you can contact me as I am interested in working and
              freelancing opportunities. You can also write here for other
              request or ask questions. Don't hesitate!
            </p>
          </div>

          <div className="contact-form">
            <form ref={refForm} onSubmit={(e) => sendEmail(e)}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Sushan Sunuwar,
          <br />
          London
          <br />
          <span>koinchsushan@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[51.50588008454316, -0.13251018675401063]} zoom={13}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[51.50814584244242, -0.12718145002636952]}>
              <Popup>
                Sushan lives here, come over for a cup of coffee. :)
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="ball-rotate" />
    </>
  )
}

export default Contact
