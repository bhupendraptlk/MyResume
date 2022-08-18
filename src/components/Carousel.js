import React from 'react';
import {Carousel} from 'react-bootstrap';
import One from '../images/1.jpg';
import Two from '../images/2.jpg';
import Three from '../images/3.jpg';

export default function bsCarousel() {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={One}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First</h3>
            <p>Hey</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Two}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second</h3>
            <p>Sup</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Three}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third</h3>
            <p>Bye</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  )
}

