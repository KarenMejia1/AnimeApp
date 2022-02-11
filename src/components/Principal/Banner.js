import React from 'react';

import Carousel from 'react-bootstrap/Carousel';

export const Banner = () => {
    return(
        <div>
                <Carousel className='mb-5'>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://images8.alphacoders.com/108/thumb-1920-1081458.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>Shingeki no Kyojin: The Final Season Part 2</h3>
                            <p>Final de temporada dos</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://www.kolpaper.com/wp-content/uploads/2020/05/4K-Demon-Slayer-Wallpaper.jpg"
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>Kimetsu no Yaiba: Yuukaku-hen</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://wallpaperaccess.com/full/1309183.png"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
    )
}