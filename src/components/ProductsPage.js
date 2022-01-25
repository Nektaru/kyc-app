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
                    <ul className='cards__item'>
                        <CardItem
                            src='/images/img-9.jpg'
                            text='Nos jactamos de tener el mejor pollo asado de Madrid'
                            path=''
                            label='Pollo asado'
                        />
                        <CardItem
                            src='/images/bacalao.jpg'
                            text='Nuestro bacalao a la riojana es digno de estrella michelin'
                            path=''
                            label='Bacalao a la riojana'
                        />
                        <CardItem
                            src='/images/albondigas.jpg'
                            text='Albóndigas casi tan buenas como las que hacía tu abuela'
                            path=''
                            label='Albóndigas en salsa'
                        />
                        <CardItem
                            src='/images/croquetas.jpg'
                            text='Con la receta de la abuela nos hemos convertido en maestros croqueteros'
                            path=''
                            label='Croquetas de jamón'
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
                    <ul className='cards__item'>
                        <CardItem
                            src='/images/costillas2.jpg'
                            text='Nuestras costillas recién hechas a baja temperatura durante 6 horas'
                            path=''
                            label='Costillas BBQ'
                        />
                        <CardItem
                            src='/images/rusa.jpg'
                            text='Te faltará pan para acompañar nuestra increíble ensaladilla rusa'
                            path=''
                            label='Ensaladilla rusa'
                        />
                        <CardItem
                            src='/images/tortilla.jpg'
                            text='Tortillas preparadas al momento hechas con huevos de gallinas camperas'
                            path=''
                            label='Tortilla de patatas'
                        />
                        <CardItem
                            src='/images/cheesecake.jpg'
                            text='¡Hacemos también unos postres increíbles! '
                            path=''
                            label='Tarta de queso'
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
                    <ul className='cards__item'>
                        <CardItem
                            src='/images/paletilla.jpg'
                            text='Paletilla de lechal de 600gr con guarnición por tan solo 24€/ud'
                            path=''
                            label='Paletilla de lechal'
                        />
                        <CardItem
                            src='/images/Hamburguesa.jpg'
                            text='Nuestra increíble hamburguesa "Ringo Rango" con pollo de corral desmenuzado'
                            path=''
                            label='Hamburguesa de pollo'
                        />
                        <CardItem
                            src='/images/img-3.png'
                            text='Paella mixta, de marisco, arroz a banda...Hacemos tu favorita por encargo'
                            path=''
                            label='Paella de marisco'
                        /><CardItem
                            src='/images/pollo corral.jpg'
                            text='¿Prefieres un pollo de corral? Encárgalo y disfruta de una carne más jugosa'
                            path=''
                            label='Pollo de corral'
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
                    <ul className='cards__item'>
                        <CardItem
                            src='/images/roscon.jpg'
                            text='Nuestro increíble roscón para compartir el día de Reyes'
                            path=''
                            label='Roscón de reyes'
                        />
                        <CardItem
                            src='/images/pularda.jpg'
                            text='Pularda o capón relleno de ciruelas, jamón y foie'
                            path=''
                            label='Pularda rellena'
                        />
                        <CardItem
                            src='/images/cochinillo.jpg'
                            text='No tienes que irte a Segovia para comerte un cochinillo de 10'
                            path=''
                            label='Cochinillo de Segovia'
                        /><CardItem
                            src='/images/Buñuelos.jpeg'
                            text='Rellenos de trufa, crema, café, cabello de ángel...Tu Octubre más dulce'
                            path=''
                            label='Buñuelos rellenos'
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
