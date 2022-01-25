import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
    return (
        <div className='cards'>
            <h1>Échale un ojo a nuestros productos estrella</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src='/images/img-9.jpg'
                            text='Cocinando para ti desde 1994'
                            label='Especialidades de la casa'
                            path='/products/#especialidades'
                        />
                        <CardItem
                            src='/images/img-3.png'
                            text='¿Tienes invitados? Tenemos la solución'
                            label='Para compartir'
                            path='/products/#compartir'
                        />
                        <CardItem
                            src='/images/paletilla.jpg'
                            text='¿Algo que celebrar?'
                            label='Bajo encargo'
                            path='/products/#encargos'
                        />
                        <CardItem
                            src='/images/img-4.png'
                            text='En fechas especiales déjanos la cocina a nosotros'
                            label='Campañas especiales'
                            path='/products/#campañas'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
