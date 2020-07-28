import React from 'react';
import { injectIntl } from 'react-intl';
import messages from './messages';
import { Grid } from '@material-ui/core'
import SectionTitle from 'components/SectionTitle/Loadable'
import Slider from "react-slick";
import { Link } from 'react-router-dom'
import './style.scss'

// images 
import image1 from 'images/service/img4.jpg'
import image2 from 'images/service/img5.jpg'
import image3 from 'images/service/img6.jpg'
import image4 from 'images/service/img7.jpg'
import image5 from 'images/service/img8.jpg'
import image6 from 'images/service/img9.jpg'


const StartupService = (props) => {
    const services = {
        title: 'What We Do',
        subtitle: 'services',
        items: [
            {
                title: 'Mobile App Design',
                details: 'Voice and Data Systems are crucial to the success or failure of most businesses. Many companies provide.',
                image: image1,
                id: 1,
                icon: 'pe-7s-diamond',
            },
            {
                title: 'Website Development',
                details: 'Voice and Data Systems are crucial to the success or failure of most businesses. Many companies provide.',
                image: image2,
                id: 2,
                icon: 'pe-7s-arc',
            },
            {
                title: 'Game Development',
                details: 'Voice and Data Systems are crucial to the success or failure of most businesses. Many companies provide.',
                image: image3,
                id: 3,
                icon: 'pe-7s-headphones',
            },
            {
                title: 'AI Development',
                details: 'Voice and Data Systems are crucial to the success or failure of most businesses. Many companies provide.',
                image: image4,
                id: 4,
                icon: 'pe-7s-hammer',
            },
            {
                title: 'Architecture Development',
                details: 'Voice and Data Systems are crucial to the success or failure of most businesses. Many companies provide.',
                image: image5,
                id: 5,
                icon: 'pe-7s-world',
            },
            {
                title: 'Stratigic Planing',
                details: 'Voice and Data Systems are crucial to the success or failure of most businesses. Many companies provide.',
                image: image6,
                id: 6,
                icon: 'pe-7s-target',
            },
            {
                title: 'Mobile App Design',
                details: 'Voice and Data Systems are crucial to the success or failure of most businesses. Many companies provide.',
                image: image1,
                id: 1,
                icon: 'pe-7s-diamond',
            },
            {
                title: 'Website Development',
                details: 'Voice and Data Systems are crucial to the success or failure of most businesses. Many companies provide.',
                image: image2,
                id: 2,
                icon: 'pe-7s-arc',
            },
            {
                title: 'Game Development',
                details: 'Voice and Data Systems are crucial to the success or failure of most businesses. Many companies provide.',
                image: image3,
                id: 3,
                icon: 'pe-7s-headphones',
            },
            {
                title: 'AI Development',
                details: 'Voice and Data Systems are crucial to the success or failure of most businesses. Many companies provide.',
                image: image4,
                id: 4,
                icon: 'pe-7s-hammer',
            },
            {
                title: 'Architecture Development',
                details: 'Voice and Data Systems are crucial to the success or failure of most businesses. Many companies provide.',
                image: image5,
                id: 5,
                icon: 'pe-7s-world',
            },
            {
                title: 'Stratigic Planing',
                details: 'Voice and Data Systems are crucial to the success or failure of most businesses. Many companies provide.',
                image: image6,
                id: 6,
                icon: 'pe-7s-target',
            },
        ]
    }

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        arrows: true,
        swipe: true,
        swipeToSlide: true,
        slidesToShow: 3,
        slidesToScroll: 2,
        rows: 2,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <Grid className="startupServiceArea">
            <Grid className="container" container spacing={4}>
                <Grid item xs={12}>
                    <SectionTitle
                        title={services.title}
                        subtitle={services.subtitle}
                        stoketext={services.subtitle}
                        className="textLeft"
                    />
                </Grid>
                <Grid item xs={12}>
                    <Slider
                        className="startupServiceSlider"
                        {...settings}>
                        {services.items.map((item, i) => (
                            <Grid key={i} className="startupServiceWrap">
                                <Grid style={{ background: `url(${item.image}) no-repeat center center / cover` }} className="startupServiceItem">
                                    <Grid className="startupServiceContent">
                                        <i className={item.icon}></i>
                                        <h3>{item.title}</h3>
                                        <p>{item.details}</p>
                                        <Link to="/">Read more</Link>
                                    </Grid>
                                </Grid>
                            </Grid>
                        ))}

                    </Slider>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default injectIntl(StartupService)
