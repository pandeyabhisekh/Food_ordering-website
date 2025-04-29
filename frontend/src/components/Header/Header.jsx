import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [transitioning, setTransitioning] = useState(false);
    
    const slides = [
        {
            title: "Order your favourite food here",
            description: "Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients.",
            image: "/header_img.png"
        },
        {
            title: "Delicious Pizzas",
            description: "Try our signature pizzas made with authentic ingredients and baked to perfection.",
            image: "/header_img1.png"
        },
        {
            title: "Fresh Salads",
            description: "Healthy and fresh salads prepared daily with organic vegetables and dressings.",
            image: "/header_img.png"
        },
        {
            title: "Mouthwatering Burgers",
            description: "Juicy burgers with premium patties and freshly baked buns for that perfect bite.",
            image: "/header_img.png"
        },
        {
            title: "Dessert Specials",
            description: "Indulge in our sweet treats that will satisfy your dessert cravings.",
            image: "/header_img.png"
        }
    ];

    // Auto-scroll effect with slower transition
    useEffect(() => {
        const interval = setInterval(() => {
            setTransitioning(true);
            setTimeout(() => {
                setCurrentSlide((prev) => (prev + 1) % slides.length);
                setTransitioning(false);
            }, 3000); // Matches the CSS transition duration
        }, 6000); // Total time per slide (transition + display time)
        
        return () => clearInterval(interval);
    }, [slides.length]);

    const goToNext = () => {
        setTransitioning(true);
        setTimeout(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
            setTransitioning(false);
        }, 3000);
    };

    const goToPrev = () => {
        setTransitioning(true);
        setTimeout(() => {
            setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
            setTransitioning(false);
        }, 3000);
    };

    const goToSlide = (index) => {
        if (index !== currentSlide) {
            setTransitioning(true);
            setTimeout(() => {
                setCurrentSlide(index);
                setTransitioning(false);
            }, 3000);
        }
    };

    return (
        <div className='header'>
            <div 
                className={`header-bg ${transitioning ? 'transitioning' : ''}`}
                style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
            ></div>
            
            <div className='header-contents'>
                <h2>{slides[currentSlide].title}</h2>
                <p>{slides[currentSlide].description}</p>
                <button>View Menu</button>
            </div>
            
            <button className="carousel-button prev" onClick={goToPrev}>&#10094;</button>
            <button className="carousel-button next" onClick={goToNext}>&#10095;</button>
            
            <div className="carousel-indicators">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={`indicator ${index === currentSlide ? 'active' : ''}`}
                        onClick={() => goToSlide(index)}
                        disabled={transitioning}
                    />
                ))}
            </div>
        </div>
    );
}

export default Header;