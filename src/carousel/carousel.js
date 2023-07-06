import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import './carousel.css';
import leftArrow from '../assets/leftArrow.svg';
import rightArrow from '../assets/rightArrow.svg';

// import { IMAGES } from '../images';

function Carousel({ images }) {
    const intervalRef = useRef(null);
    const currentSlideRef = useRef(0);
    const slides = document.getElementsByClassName('slide');

    const changeImage = (current) => {
        const container = document.getElementsByClassName('slides')[0];
        container.style.transform = 'translateX(-' + current * 700 + 'px)';
        container.style.transition = current ? '.4s ease' : null;

        removeActiveCircles();
        document.getElementsByClassName('circle')[current].className =
            'circle active';
    };

    const removeActiveCircles = () => {
        const circles = document.getElementsByClassName('circle');
        for (let i = 0; i < circles.length; i++) {
            circles[i].className = 'circle';
        }
    };

    const interval = () => {
        return setInterval(() => {
            const current = currentSlideRef.current % slides.length;
            changeImage(current);
            currentSlideRef.current = currentSlideRef.current + 1;
        }, 5000);
    };

    const addImages = () => {
        return images.map((image, idx) => {
            return (
                <div
                    key={idx}
                    className={`slide slide-${idx + 1}`}
                    style={{ backgroundImage: `url(${image})` }}
                ></div>
            );
        });
    };

    const addCircles = () => {
        const length = images.length;
        const circles = [];
        for (let i = 0; i < length; i++) {
            const classname = i ? 'circle' : 'circle active';
            circles.push(
                <div
                    key={i}
                    className={classname}
                    data-testid={`circle-${i}`}
                    onClick={() => changeImage(i)}
                ></div>
            );
        }
        return circles;
    };

    useEffect(() => {
        intervalRef.current = interval();
        return () => {
            clearInterval(intervalRef.current);
        };
    }, []);

    const handleButton = (value) => {
        clearInterval(intervalRef.current);
        currentSlideRef.current =
            currentSlideRef.current + value < 0
                ? slides.length - 1
                : currentSlideRef.current + value;
        currentSlideRef.current = currentSlideRef.current % slides.length;
        changeImage(currentSlideRef.current);
        intervalRef.current = interval();
    };

    return (
        <div className="carousel">
            <div className="buttons">
                <div
                    className="button left"
                    data-testid="left-button"
                    onClick={() => handleButton(-1)}
                >
                    <img src={leftArrow} />
                </div>
                <div
                    className="button right"
                    data-testid="right-button"
                    onClick={() => handleButton(1)}
                >
                    <img src={rightArrow} />
                </div>
            </div>
            <div className="slides">{addImages()}</div>
            <div className="pagination">{addCircles()}</div>
        </div>
    );
}

Carousel.propTypes = {
    images: PropTypes.array,
};

export default Carousel;
