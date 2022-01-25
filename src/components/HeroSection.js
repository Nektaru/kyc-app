import React from 'react'
import '../App.css'
import { Button } from './Button'
import './HeroSection.css'

function HeroSection() {
    return (
        <div className='hero-container'>

            <h1>Kilo y Cuarto</h1>
            <p>¿Qué te apetece comer hoy?</p>
            <div className='hero-btns'>
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>Ponte en contacto con nosotros</Button>
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>Hacer un pedido para recoger.</Button>
            </div>
        </div>
    )
}

export default HeroSection
