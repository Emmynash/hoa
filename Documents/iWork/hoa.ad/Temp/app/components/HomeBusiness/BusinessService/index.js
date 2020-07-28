import React from 'react';
import { injectIntl } from 'react-intl';
import messages from './messages';
import { Grid } from '@material-ui/core'
import SinglePortfolio from 'components/SinglePortfolio/Loadable'
import SectionTitle from 'components/SectionTitle/Loadable'
import Slider from "react-slick";
import './style.scss'

// images 
import icon1 from 'images/icons/service/icon1.png'
import icon2 from 'images/icons/service/icon2.png'
import icon3 from 'images/icons/service/icon3.png'
import icon4 from 'images/icons/service/icon4.png'

import image1 from 'images/Legislators/Rt. Hon. Aminu Iya Abbas Speaker.jpg'
import image2 from 'images/Legislators/Hon. Pwamwakeno M. Makondo.jpg'
import image3 from 'images/Legislators/Hon. Hammantukur Yettisuri.jpg'
import image4 from 'images/Legislators/Hon. Mohammed Mutawalli Minority Leader.jpg'
import image5 from 'images/Legislators/Hon. Haruna Jilantikiri.jpg'
import image6 from 'images/Legislators/Hon. Ibrahim Musa.jpg'
import image7 from 'images/Legislators/Hon. Japhet Kefas.jpg'
import image8 from 'images/Legislators/Hon. Abdullahi Umar.jpg'
import image9 from 'images/Legislators/Hon. Adwawa W. Dongolok.jpg'
import image10 from 'images/Legislators/Hon. Shuaibu Musa.jpg'
import image11 from 'images/Legislators/clerk.jpg'

const BusinessService = (props) => {
    const services = {
        title: `${props.intl.formatMessage({ ...messages.principalOfficers })}`,
        subtitle: `${props.intl.formatMessage({ ...messages.leadership })}`,
        service: [
            {
                title: `${props.intl.formatMessage({ ...messages.ProductDesign })}`,
                icon: icon1,
                details: 'The Speaker presides over the affairs of the House and guides the proceedings impartially, preserves the Order and Rules of the House.',
                image: image1,
                name: 'Rt. Hon. Aminu Iya Abbas',
                desig: 'The Speaker',
                id: 24,
                
            },
            {
                title: `${props.intl.formatMessage({ ...messages.DigitalService })}`,
                icon: icon2,
                details: 'Performs the duties and functions of the Speaker in the absence of the Speaker, as he guides proceedings impartially.',
                name: 'Hon. Pwamwakeno M. Makondo',
                desig: 'Deputy Speaker',
                image: image2,
                id: 25,
               
            },
            {
                title: `${props.intl.formatMessage({ ...messages.Architecture })}`,
                icon: icon3,
                details: 'Nominated from amongst the members belonging to the party with the majority seat. He leads the business of the House.',
                name: 'Hon. Hammantukur Yettisuri',
                desig: 'Majority Leader',
                image: image3,
                id: 18,
                
            },
            {
                title: `${props.intl.formatMessage({ ...messages.ProductSelling })}`,
                icon: icon4,
                details: 'Often assisted by one or more Whips, he is to enforce party discipline on votes deemed to be crucial by the party leadership.',
                name: 'Hon. Mohammed Mutawalli',
                desig: 'Minority Leader',
                image: image4,
                id: 17,
               
            },
            {
                title: `${props.intl.formatMessage({ ...messages.Architecture })}`,
                icon: icon3,
                details: 'Helps in assisting the Leaders of the Parties in the performance of their functions, liaising with Chairmen of Committees on behalf of the party.',
                name: 'Hon. Haruna Jilantikiri ',
                desig: 'Chief Whip',
                image: image5,
                id: 15,
               
            },
            {
                title: `${props.intl.formatMessage({ ...messages.DigitalService })}`,
                icon: icon2,
                details: 'The Minority Whip helps to assist the floor leader, ensure member attendance, count votes and generally communicate the minority position.',
                name: 'Hon. Ibrahim Musa',
                desig: 'Minority Whip',
                image: image6,
                id: 12,
               
            },
            {
                title: `${props.intl.formatMessage({ ...messages.DigitalService })}`,
                icon: icon2,
                details: 'Nominated from the Party with the highest number of seats in the House, deputizes for the Majority Leader in his absence.',
                name: 'Hon. Japhet Kefas',
                desig: 'Dept. Major Leader',
                image: image7,
                id: 14,
                
            },
            {
                title: `${props.intl.formatMessage({ ...messages.DigitalService })}`,
                icon: icon2,
                details: 'He assists the Minority Leader in performing his functions; and represent the Minority Leader in his absence.',
                name: 'Hon. Abdullahi Umar',
                desig: 'Dept. Minor Leader',
                image: image8,
                id: 2,
               
            },
            {
                title: `${props.intl.formatMessage({ ...messages.DigitalService })}`,
                icon: icon2,
                details: 'He performs all the duties of the Chief Whip in his absence and serves as parliamentary secretary during Executive Sessions of Members of the House.',
                name: 'Hon. Adwawa W. Dongolok.',
                desig: 'Deputy Chief Whip',
                image: image9,
                id: 5,
                
            },
            {
                title: `${props.intl.formatMessage({ ...messages.DigitalService })}`,
                icon: icon2,
                details: 'Assists the minority whip in performing his functions and represents the minority whip in his absence.',
                name: 'Hon. Shuaibu Musa',
                desig: 'Deputy Minority Whip',
                image: image10,
                id: 21,
                
            },
            {
                title: `${props.intl.formatMessage({ ...messages.DigitalService })}`,
                icon: icon2,
                details: 'He provides both administrative and legislative advice to all Hon. Members of the Assembly, and also the custodian of the Votes & Proceedings, and Bills.',
                name: 'Malam Musa Ahmad Gaude',
                desig: 'Clerk of the House',
                image: image11,
                id: 0,
                
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
        slidesToShow: 4,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 4,
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
        <Grid className="businessServiceArea">
            <Grid className="container" spacing={4} container>
                <Grid item xs={12}>
                    <SectionTitle
                        title={services.title}
                        subtitle={services.subtitle}
                        stoketext={services.subtitle}
                        className="textLeft"
                    />
                </Grid>
            </Grid>
            <Grid className="businessServiceSliderArea">
                <Slider
                    className="businessServiceSlider"
                    {...settings}>
                    {services.service.map((item, i) => (
                        <Grid key={i} className="businessServiceWrap">
                            <Grid className="businessServiceItem">
                                <SinglePortfolio
                                    image={item.image}
                                    name={item.name}
                                    designation={item.desig}
                                    details={item.details}
                                    id={item.id}
                                />
                                {/*<ul className="serviceList">
                                    {item.items.map((item, i) => (
                                       {/*} <li key={i}>
                                            <i className={item.icon}></i>
                                            {item.text}
                                    </li>
                                    ))}
                                </ul>*/}
                            </Grid>
                        </Grid>
                    ))}
                </Slider>
            </Grid>

        </Grid>
    );
}

export default injectIntl(BusinessService)
