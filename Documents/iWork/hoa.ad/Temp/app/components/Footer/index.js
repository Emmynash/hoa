
import React from 'react';
import { injectIntl } from 'react-intl';
import messages from './messages';
import { Grid, Button } from '@material-ui/core'
import { Link } from 'react-router-dom'
import ScrollTop from 'components/ScrollTop/Loadable'

import './style.scss'

// images 
import image1 from 'images/blogs/Ahmadu-Fintiri.jpg'
import image2 from 'images/blogs/Adamawa-House-of-Assembly-768x576.jpg'

const Footer = (props) => {
    const footers = {
        menus: [

            {
                name: 'Bills',
                link: 'resources/bills' 
            },
            {
                name: 'About us',
                link: 'about' 
            },
            {
                name: 'Order Papers',
                link: 'resources/order-paper' 
            },
            {
                name: 'Office of Speaker',
                link: 'office-of-speaker' 
            },
            {
                name: 'Votes and Proceedings',
                link: 'resources/votes-and-proceedings' 
            },
            // `${props.intl.formatMessage({ ...messages.Bills })}`,
            // `${props.intl.formatMessage({ ...messages.ProductEngineering })}`,
            // `${props.intl.formatMessage({ ...messages.OrderPapers })}`,
            // `${props.intl.formatMessage({ ...messages.AppDevelopment })}`,
            // `${props.intl.formatMessage({ ...messages.officeOfSpeaker })}`,
            // `${props.intl.formatMessage({ ...messages.SoftwareDevelopment })}`,
            // `${props.intl.formatMessage({ ...messages.VotesProceedings })}`,
            // `${props.intl.formatMessage({ ...messages.BusinessPlanning })}`,
        ],
        contacts: [
            'info@hoa.ad.gov.ng',
            '+234 803 6477 424',
            'Adamawa State House of Assembly', 
            'P.M.B 2080 Gibson Jalo Road',
            'Army Barack Road, Jimeta Yola',
        ],
        newsFeed: [
            {
                image: image1,
                title: `2020 Budget presentation by His Excellency Gov. Ahmadu Fintiri`,
                author: 'Ahmed'
            },
            {
                image: image2,
                title: `Adamawa Assembly sets agenda for its operation`,
                author: 'Aliyu'
            },
        ]
    }
    return (
        <footer className={props.className ? `${props.className} footerArea` : 'footerArea'}> 
            <ScrollTop
                scrollStepInPx="50"
                delayInMs="16.66"
            />
            <Grid
                container
                spacing={4}
                className="container">
                <Grid item xs={12}>
                    <Grid className="footerTop">
                        <Grid className="footerLogo">
                            {/* <img src={props.logo} alt="" /> */}
                        </Grid>
                        <ul className="socialLink">
                            <li><Button component="a" href="https://web.facebook.com/Adamawa-State-House-of-Assembly-108800890614840/?modal=admin_todo_tour"><i className="fa fa-facebook"></i></Button></li>
                            <li><Button component="a" href="https://twitter.com/AdamawaAssembly"><i className="fa fa-twitter"></i></Button></li>
                            <li><Button component="a" href="https://www.youtube.com/channel/UC_NcAKczWocIOCehN-TdaEQ?view_as=subscriber"><i className="fa fa-youtube"></i></Button></li>
                            {/* <li><Button component="a" href="javascript:void(0)"><i className="fa fa-linkedin"></i></Button></li>
                            <li><Button component="a" href="javascript:void(0)"><i className="fa fa-github"></i></Button></li> */}
                        </ul>
                    </Grid>
                </Grid>
                <Grid item lg={4} md={4} sm={6} xs={12}>
                    <h3 className="footerTitle">{props.intl.formatMessage({ ...messages.QuickLinks })}</h3>
                    <ul className="footerMenu">
                        {footers.menus.map((item, i) => (
                            <li key={i}><Link to={`/${item.link}`}>{item.name}</Link></li>
                        ))}
                    </ul>
                </Grid>
                <Grid item lg={4} md={3} sm={6} xs={12}>
                    <h3 className="footerTitle">{props.intl.formatMessage({ ...messages.contactus })}</h3>
                    <ul className="footerContact">
                        {footers.contacts.map((item, i) => (
                            <li key={i}>{item}</li>
                        ))}
                    </ul>
                </Grid>
                <Grid item lg={4} md={5} sm={6} xs={12}>
                    <h3 className="footerTitle">{props.intl.formatMessage({ ...messages.newsfeeds })}</h3>
                    <ul className="footerNews">
                        {footers.newsFeed.map((item, i) => (
                            <li key={i}>
                                <Grid className="footerNewsImg">
                                    <img src={item.image} alt="" width="100px" height="70px"/>
                                </Grid>
                                <Grid className="footerNewsContent">
                                    <Link to="/news-and-events">{item.title}</Link>
                                    <span><i className="fa fa-user"></i> By {item.author}</span>
                                </Grid>
                            </li>
                        ))}
                    </ul>
                </Grid>
            </Grid>
            <Grid className="footerBottomArea">
                <Grid
                    alignItems="center"
                    className="container"
                    container
                    spacing={4}>
                    <Grid item sm={6} xs={12}>
                        <p>Copyright of <a href='https://hoa.ad.gov.ng'>Adamawa State House of Assembly</a> - 2020</p>
                    </Grid>
                    <Grid item sm={6} xs={12}>
                        {/* <ul>
                            <li> <Link to="/privicy">{props.intl.formatMessage({ ...messages.privacy })}</Link></li>
                            <li> <Link to="/terms">{props.intl.formatMessage({ ...messages.TermsConditions })}</Link></li>
                        </ul> */}
                    </Grid>
                </Grid>
            </Grid>
        </footer >
    );
}

export default injectIntl(Footer);
