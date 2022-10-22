import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import player1 from '../../../assets/brands/player-1.jpg'
import player2 from '../../../assets/brands/player-2.jpg'
import player3 from '../../../assets/brands/player-3.jpg'
import player4 from '../../../assets/brands/player-4.jpg'

const BrandCarousel = () => {
   return (
     <Carousel>
       <Carousel.Item>
         <img
           className="d-block w-100"
           src={player1}
           alt="First slide"
         />
       </Carousel.Item>
       <Carousel.Item>
         <img
           className="d-block w-100"
           src={player2}
           alt="Second slide"
         />
       </Carousel.Item>
       <Carousel.Item>
         <img
           className="d-block w-100"
           src={player3}
           alt="Third slide"
         />

       </Carousel.Item>
       <Carousel.Item>
         <img
           className="d-block w-100"
           src={player4}
           alt="Third slide"
         />

       </Carousel.Item>
     </Carousel>
   );
};

export default BrandCarousel;