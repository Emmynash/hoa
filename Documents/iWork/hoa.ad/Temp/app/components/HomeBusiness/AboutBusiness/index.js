import React from 'react';

import { injectIntl } from 'react-intl';
import messages from './messages';
import { Link } from 'react-router-dom'
import { Grid, Button } from '@material-ui/core'
import './style.scss'

// images 
import image1 from 'images/about/about_house_1.jpg'
import image2 from 'images/about/about_house_2.jpg'
import image3 from 'images/about/about_house_3.jpg'
import image4 from 'images/about/about_house_4.jpg'

const About = (props) => {
    const abouts = {
        title: `${props.intl.formatMessage({ ...messages.AQuickGlimpseofTheHouse })}`,
        subtitle: `${props.intl.formatMessage({ ...messages.KnowYourParliament })}`,
        details: `${props.intl.formatMessage({ ...messages.details1 })}`,
        text: `${props.intl.formatMessage({ ...messages.AboutUs })}`,
        images: [
            {
                pic: image1,
                big: true
            },
            {
                pic: image2,
                big: false
            },
            {
                pic: image3,
                big: false
            },
            {
                pic: image4,
                big: true
            },
        ]
    }

    return (
        <Grid className="aboutArea">
            <Grid className="aboutImageWrap">
                <Button className="quoteBtn"><i className="fa fa-quote-left"></i></Button>
                <Grid container spacing={2}>
                    {abouts.images.map((img, i) => (
                        <Grid key={i} item lg={img.big ? 7 : 5} md={img.big ? 7 : 5} sm={6} xs={12}>
                            <Grid key={i} className="aboutImg">
                                <img src={img.pic} alt="" />
                            </Grid>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
            <Grid
                alignItems="center"
                container
                spacing={4}
                className="container">
                <Grid item lg={6} className="d-none"></Grid>
                <Grid item lg={6} xs={12}>
                    <Grid className="aboutContent">
                        <span className="dot"></span>
                        <span className="text">{abouts.text}</span>
                        <h2>{abouts.title}</h2>
                        <h4>{abouts.subtitle}</h4>
                        <Grid className="aboutDetails">
                            <p>{abouts.details}</p>
                            <p>{abouts.details2}</p> 
                        </Grid>
                        <Button className="loadmore" component={Link} to="/about">{props.intl.formatMessage({ ...messages.LearnMore })}</Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default injectIntl(About);
