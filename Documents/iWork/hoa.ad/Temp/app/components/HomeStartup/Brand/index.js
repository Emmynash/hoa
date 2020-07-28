import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { Grid } from '@material-ui/core'
import Slider from "react-slick";

import './style.scss'


// images 
import brand1 from 'images/brand/img6.png'
import brand2 from 'images/brand/img7.png'
import brand3 from 'images/brand/img8.png'
import brand4 from 'images/brand/img9.png'
import brand5 from 'images/brand/img10.png'

const brands = [brand1, brand2, brand3, brand4, brand5, brand3, brand4,]

const StartupBrand = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        arrows: false,
        slidesToShow: 5,
        swipe: true,
        swipeToSlide: true,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 4,
                }
            },
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    };
    return (
        <Grid className="startupBrandArea">
            <Grid container spacing={4} className="container">
                <Grid item xs={12}>
                    <Slider
                        className="brandSlider"
                        {...settings}>
                        {brands.map((item, i) => (
                            <a key={i} className="brandItem" href="#"><img src={item} alt="" /></a>
                        ))}
                    </Slider>
                </Grid>
            </Grid>
        </Grid>
    );
}


export default StartupBrand;
