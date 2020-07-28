
import React, { Fragment } from 'react';
import { injectIntl } from 'react-intl';
import messages from './messages';
import { Grid, Button } from '@material-ui/core'
import Swiper from 'react-id-swiper';
import { Link } from 'react-router-dom'
import './style.scss'

// images 
import image1 from 'images/slider/slider_2.jpg'
import image2 from 'images/slider/slider_1.jpg'
import image3 from 'images/slider/slider_3.jpg'

const HeroSlider = (props) => {
    const sliders = [
        {
            subtitle: 'Adamawa State',
            title: 'House of Assembly',
            image: image1,
            link: "/about",
            id: 1
        },
        {
            subtitle: 'Yola North Lawmaker',
            title: 'Constructs Primary Health Centre', 
            image: image2,
            link: "/news-details/1",
            id: 2
        },
        {
            subtitle: 'Adamawa Assembly',
            title: 'Sets Agenda For Its Operation',
            image: image3,
            link: "/news-details/3",
            id: 3
        },
    ]

    const params = {
        speed: 1000,
        parallax: true,
        slidesPerView: 1,
        loop: false,
        loopFillGroupWithBlank: false,
        parallaxEl: {
            el: '.parallax-bg',
        },
        autoplay: {
            delay: 7000,
            disableOnInteraction: false
        },
        pagination: false,
        navigation: false
    }
    return (
        <Swiper
            {...params}>
            {sliders.map(slider => (
                <Grid key={slider.id} style={{ background: `url(${slider.image}) no-repeat center center / cover`, width: 275, height: 385 }} className="heroSliderItem">
                    <Grid spacing={4} container className="container">
                        <Grid item xs={12} className="heroSliderContent">
                            <h4 data-swiper-parallax="-5000">{slider.subtitle}</h4>
                            <h2 data-swiper-parallax="-4000">{slider.title}</h2>
                            <ul data-swiper-parallax="-3000" className="heroSliderBtn">
                                <li><Button component={Link} to={slider.link} style={{color: '#50c76f'}}>Read More <svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="arrow-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="svg-inline--fa fa-arrow-right fa-w-14 fa-fw"><path fill="currentColor" d="M216.464 36.465l-7.071 7.07c-4.686 4.686-4.686 12.284 0 16.971L387.887 239H12c-6.627 0-12 5.373-12 12v10c0 6.627 5.373 12 12 12h375.887L209.393 451.494c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l211.051-211.05c4.686-4.686 4.686-12.284 0-16.971L233.434 36.465c-4.686-4.687-12.284-4.687-16.97 0z" className=""></path></svg></Button></li>
                                {/* <li><Button component={Link} to="/contact">Get A Quote <svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="arrow-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="svg-inline--fa fa-arrow-right fa-w-14 fa-fw"><path fill="currentColor" d="M216.464 36.465l-7.071 7.07c-4.686 4.686-4.686 12.284 0 16.971L387.887 239H12c-6.627 0-12 5.373-12 12v10c0 6.627 5.373 12 12 12h375.887L209.393 451.494c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l211.051-211.05c4.686-4.686 4.686-12.284 0-16.971L233.434 36.465c-4.686-4.687-12.284-4.687-16.97 0z" className=""></path></svg></Button></li> */}
                            </ul>
                            <h3>House</h3>
                        </Grid>
                    </Grid>
                </Grid>
            ))}

        </Swiper>
    );
}

export default injectIntl(HeroSlider);
