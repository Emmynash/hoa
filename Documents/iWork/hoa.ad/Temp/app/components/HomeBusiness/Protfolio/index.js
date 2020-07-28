import React, { useState, Fragment } from 'react';
import { injectIntl } from 'react-intl';
import messages from './messages';
import { Grid, Tab, Tabs } from '@material-ui/core'
import SectionTitle from 'components/SectionTitle/Loadable'
import SinglePortfolio from 'components/SinglePortfolio/Loadable'
import './style.scss'

// // images 
// import image1 from 'images/portfolio/img1.jpg'
// import image2 from 'images/portfolio/img2.jpg'
// import image3 from 'images/portfolio/img3.jpg'
// import image4 from 'images/portfolio/img4.jpg'
// import image5 from 'images/portfolio/img5.jpg'
// import image6 from 'images/portfolio/img6.jpg'
// import image7 from 'images/portfolio/img7.jpg'
// import image8 from 'images/portfolio/img8.jpg'
// import image9 from 'images/portfolio/img9.jpg'
// import image10 from 'images/portfolio/img10.jpg'

const Protfolio = (props) => {
    const [value, setValue] = useState(0);

    const portfolios = {
        title: `${props.intl.formatMessage({ ...messages.CaseStudy })}`,
        subtitle: `${props.intl.formatMessage({ ...messages.portfolio })}`,
        stoketext: `${props.intl.formatMessage({ ...messages.Goods })}`,
        // items: [
        //     {
        //         name: 'Yoko loko',
        //         desig: 'ui/ux',
        //         image: image1,
        //         id: 1
        //     },
        //     {
        //         name: 'Vebo Kim',
        //         desig: 'branding',
        //         image: image2,
        //         id: 2
        //     },
        //     {
        //         name: 'Humber A.',
        //         desig: 'website',
        //         image: image3,
        //         id: 3
        //     },
        //     {
        //         name: 'Yoko loko',
        //         desig: 'ui/ux',
        //         image: image4,
        //         id: 4
        //     },
        //     {
        //         name: 'Vebo Kim',
        //         desig: 'branding',
        //         image: image5,
        //         id: 5
        //     },
        //     {
        //         name: 'Humber A.',
        //         desig: 'website',
        //         image: image6,
        //         id: 6
        //     },

        //     {
        //         name: 'Yoko loko',
        //         desig: 'ui/ux',
        //         image: image7,
        //         id: 7
        //     },
        //     {
        //         name: 'Vebo Kim',
        //         desig: 'branding',
        //         image: image8,
        //         id: 8
        //     },
        //     {
        //         name: 'Humber A.',
        //         desig: 'website',
        //         image: image9,
        //         id: 9
        //     },
        //     {
        //         name: 'Yoko loko',
        //         desig: 'ui/ux',
        //         image: image10,
        //         id: 10
        //     }
        // ]
    }

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <Grid
            style={{ background: `url(${props.background}) no-repeat center center / cover` }}
            className={props.className ? `${props.className} portfolioArea` : 'portfolioArea'}>
            {/* <Grid className="container" spacing={4} container>
                <Grid item xs={12}>
                    <SectionTitle
                        title={portfolios.title}
                        subtitle={portfolios.subtitle}
                        stoketext={portfolios.stoketext}
                        className="sectionTitleWhite sectionTitleWhite2"
                    />
                </Grid>
                <Grid item xs={12}>
                    <Tabs
                        classes={{
                            root: 'protfolioTab',
                            flexContainer: 'protfolioTabContainer',
                            indicator: 'protfolioTabIndicator'
                        }}
                        value={value}
                        onChange={handleChange}>
                        <Tab label="All Works  " />
                        <Tab label="Design (4)" />
                        <Tab label="Game (2)" />
                        <Tab label="website (5) " />
                        <Tab label="interior (6)" />
                        <Tab label="consultancy (3)" />
                    </Tabs>
                </Grid>
                {value === 0 && <Fragment>
                    {portfolios.items.slice(0, 6).map((item, i) => (
                        <Grid key={i} item md={4} sm={6} xs={12}>
                            <SinglePortfolio
                                image={item.image}
                                name={item.name}
                                designation={item.desig}
                                id={item.id}
                            />
                        </Grid>
                    ))}
                </Fragment>}
                {value === 1 && <Fragment>
                    {portfolios.items.slice(0, 4).map((item, i) => (
                        <Grid key={i} item md={4} sm={6} xs={12}>
                            <SinglePortfolio
                                image={item.image}
                                name={item.name}
                                designation={item.desig}
                                id={item.id}
                            />
                        </Grid>
                    ))}
                </Fragment>}
                {value === 2 && <Fragment>
                    {portfolios.items.slice(0, 2).map((item, i) => (
                        <Grid key={i} item md={4} sm={6} xs={12}>
                            <SinglePortfolio
                                image={item.image}
                                name={item.name}
                                designation={item.desig}
                                id={item.id}
                            />
                        </Grid>
                    ))}
                </Fragment>}
                {value === 3 && <Fragment>
                    {portfolios.items.slice(0, 5).map((item, i) => (
                        <Grid key={i} item md={4} sm={6} xs={12}>
                            <SinglePortfolio
                                image={item.image}
                                name={item.name}
                                designation={item.desig}
                                id={item.id}
                            />
                        </Grid>
                    ))}
                </Fragment>}
                {value === 4 && <Fragment>
                    {portfolios.items.slice(0, 6).map((item, i) => (
                        <Grid key={i} item md={4} sm={6} xs={12}>
                            <SinglePortfolio
                                image={item.image}
                                name={item.name}
                                designation={item.desig}
                                id={item.id}
                            />
                        </Grid>
                    ))}
                </Fragment>}
                {value === 5 && <Fragment>
                    {portfolios.items.slice(0, 3).map((item, i) => (
                        <Grid key={i} item md={4} sm={6} xs={12}>
                            <SinglePortfolio
                                image={item.image}
                                name={item.name}
                                designation={item.desig}
                                id={item.id}
                            />
                        </Grid>
                    ))}
                </Fragment>}
            </Grid> */}
        </Grid>
    );
}

export default injectIntl(Protfolio)
