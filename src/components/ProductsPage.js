import React from 'react'
import CardItem from './CardItem'
import './ProductsPage.css'

function ProductsPage() {
    return (
        <>
        <section id='especialidades'>
        <div className='cards'>
            <h1>Especialidades de la casa</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src='/images/img-9.jpg'
                            text='Nos jactamos de tener el mejor pollo asado de Madrid'
                            path=''
                        />
                        <CardItem
                            src='/images/bacalao.jpg'
                            text='Nuestro bacalao a la riojana es digno de estrella michelin'
                            path=''
                        />
                        <CardItem
                            src='/images/albondigas.jpg'
                            text='Albóndigas casi tan buenas como las que hacía tu abuela'
                            path=''
                        />
                        <CardItem
                            src='/images/croquetas.jpg'
                            text='Con la receta de la abuela nos hemos convertido en maestros croqueteros'
                            path=''
                        />
                    </ul>
                </div>
            </div>
        </div>
        </section>
        <section id='compartir'>
        <div className='cards'>
            <h1>Para compartir</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src='/images/costillas2.jpg'
                            text='Nuestras costillas recién hechas a baja temperatura durante 6 horas'
                            path=''
                        />
                        <CardItem
                            src='/images/rusa.jpg'
                            text='Te faltará pan para acompañar nuestra increíble ensaladilla rusa'
                            path=''
                        />
                        <CardItem
                            src='/images/tortilla.jpg'
                            text='Tortillas preparadas al momento hechas con huevos de gallinas camperas'
                            path=''
                        />
                        <CardItem
                            src='/images/cheesecake.jpg'
                            text='¡Hacemos también unos postres increíbles! '
                            path=''
                        />
                    </ul>
                </div>
            </div>
        </div>
        </section>
        <section id='encargos'>
        <div className='cards'>
            <h1>Por encargo</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src='/images/paletilla.jpg'
                            text='Paletilla de lechal de 600gr con guarnición por tan solo 24€/ud'
                            path=''
                        />
                        <CardItem
                            src='/images/Hamburguesa.jpg'
                            text='Nuestra increíble hamburguesa "Ringo Rango" con pollo de corral desmenuzado'
                            path=''
                        />
                        <CardItem
                            src='/images/img-3.png'
                            text='Paella mixta, de marisco, arroz a banda...Hacemos tu favorita por encargo'
                            path=''
                        /><CardItem
                            src='/images/pollo corral.jpg'
                            text='¿Prefieres un pollo de corral? Encárgalo y disfruta de una carne más jugosa'
                            path=''
                        />
                    </ul>
                </div>
            </div>
        </div>
        </section>
        <section id='campañas'>
        <div className='cards'>     
            <h1>Campañas especiales</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src='/images/roscon.jpg'
                            text='Nuestro increíble roscón para compartir el día de Reyes'
                            path=''
                        />
                        <CardItem
                            src='/images/pularda.jpg'
                            text='Pularda o capón relleno de ciruelas, jamón y foie'
                            path=''
                        />
                        <CardItem
                            src='/images/cochinillo.jpg'
                            text='No tienes que irte a Segovia para comerte un cochinillo de 10'
                            path=''
                        /><CardItem
                            src='/images/Buñuelos.jpeg'
                            text='Rellenos de trufa, crema, café, cabello de ángel...Tu Octubre más dulce'
                            path=''
                        />
                    </ul>
                </div>
            </div>
        </div>
        </section>
        </>
        
    )
}

export default ProductsPage
