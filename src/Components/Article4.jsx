import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import pic1 from "../pics/image 28.jpg";
import pic2 from "../pics/image 29.png";
import pic3 from "../pics/image 30.png";

const images = [pic1, pic2, pic3];

export default function Article4() {
    const [currentIndex, setCurrentIndex] = useState(0); // Track the current index
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 768);

    useEffect(() => {
        const handleResize = () => setIsLargeScreen(window.innerWidth > 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        afterChange: (current) => {
            setCurrentIndex(current); // Update the current index on slide change
        },
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true,
                    dots: true,
                },
            },
        ],
    };

    return (
        <div className="article4">
            <div className="pudding">
                <div className="article41">
                    <h1>Our Awesome Portfolio</h1>
                </div>
                {/* <div className='olymp1'>
          <div class="containercircle">
            <div class="circle circle1"></div>
            <div class="circle circle2"></div>
          </div>
          </div> */}
                <div className="article42">
                    <div className="carousel-container">
                        <Slider {...settings}>
                            {images.map((image, index) => (
                                <div key={index} style={{ margin: '0 10px' }}>
                                    <img 
                                        src={image} 
                                        alt={`Carousel ${index + 1}`} 
                                        className="carousel-image" 
                                        style={{
                                            ...(
                                                isLargeScreen && {
                                                    marginTop: 
                                                        index === (currentIndex + 1) % images.length 
                                                        ? '100px' // Height for the second image
                                                        : index === (currentIndex + 2) % images.length 
                                                        ? '200px' // Height for the third image
                                                        : '0px', // Height for other images
                                                    transition: 'height 0.3s ease',
                                                    objectFit: 'cover',
                                                }
                                            )
                                        }} 
                                    />
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    );
}
