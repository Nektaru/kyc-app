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
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>Quiero esas costillas</Button>
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>Échale un ojo a nuestra carta</Button>
            </div>
        </div>
    )
}

export default HeroSection
