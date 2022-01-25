import React from 'react'
import './Infopage.css'

function Infopage() {
    return (
        <div className='info-page'>
            <section className='text-image-section'>
                <div className='text-side'>
                    <p>Kilo y cuarto nació en 1994 en el barrio de Hortaleza, destacando siempre por tener un trato muy cercano, unos productos de alta calidad y unos precios muy asequibles.
                    <br/>
                    <br/>
                    Compramos y elaboramos nuestros platos cada día siguiendo las recetas más tradicionales.
                    Los arroces y el pollo asado son los principales causantes de nuestro éxito, 
                    siempre bien acompañados de más de 30 platos, y nuestras especialidades en pan, bollería y pastelería.</p>
                    <br/>
                    <br/>
                    Actualmente nos encontramos en San Fernando de Henares y en la Calle Antonio López, en Madrid.           
                </div>
            </section>
            <section>
                <div className='title'>
                    <p>Dónde nos encontramos</p>
                </div>
                <div className='maps-section'>
                    <div className='maps-section-text'>
                        <iframe title="MapSF" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.096101800453!2d-3.535917749010599!3d40.42887086272371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd42308f645812db%3A0x7daded5415031301!2sKilo%20y%20Cuarto!5e0!3m2!1ses!2ses!4v1642698615324!5m2!1ses!2ses" width="600" height="450" style={{ border: "0"}} allowfullscreen="true" loading="lazy"></iframe>
                            <a href='https://www.google.com/maps/place/Kilo+y+Cuarto/@40.4288668,-3.5337237,15z/data=!4m5!3m4!1s0x0:0x7daded5415031301!8m2!3d40.4288696!4d-3.5337171'>
                                <p>San Fernando de Henares</p>
                            </a>
                    </div>    
                    <div className='maps-section-text'>
                        <iframe title="MapAL" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.6403074426753!2d-3.7091692!3d40.3946639!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4227c9a1faaef5%3A0x14d232c9ea283c04!2sKilo%20Y%20Cuarto!5e0!3m2!1ses!2ses!4v1642697853831!5m2!1ses!2ses" width="600" height="450" style={{ border: "0"}} allowfullscreen="true" loading="lazy"></iframe>
                            <a href='https://www.google.com/maps/place/Kilo+Y+Cuarto/@40.3945809,-3.7114656,17z/data=!3m1!4b1!4m5!3m4!1s0xd4227c9a1faaef5:0x14d232c9ea283c04!8m2!3d40.3945734!4d-3.7092835'>
                                <p>Calle Antonio López</p>
                            </a>
                    </div>
                </div>
                <div className='maps-sites-name'>
                </div>
            </section>
        </div>
    )
}

export default Infopage

