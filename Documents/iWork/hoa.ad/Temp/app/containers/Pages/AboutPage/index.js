import React, { Fragment, useState } from 'react';
import { injectIntl } from 'react-intl';
import { Grid, Button } from '@material-ui/core'
import ModalVideo from 'react-modal-video'
import { Helmet } from 'react-helmet';

// components 
import Header from 'components/Header/Loadable'
import Breadcumb from 'components/Breadcumb/Loadable'
import CallToAction from 'components/CallToAction/Loadable'
import Footer from 'components/Footer/Loadable'
// import WhatWeDo from 'components/WhatWeDo/Loadable'
import Activity from 'components/HomeBusiness/Activity/Loadable'
import VideoComponent from 'components/Video'
import StartupFaq from 'components/HomeStartup/Faqs/Loadable'

import './style.scss'

// images 
import logo from 'images/logo-white.png'
// import logoBlack from 'images/logo.png'
import about from 'images/about/about_1.jpg'
import about2 from 'images/about/about_2.jpg'
import breadcumbImg from 'images/bg/about_page1.jpg'

const links = [
    {
        name: 'Home',
        link: '/'
    },
    {
        name: ' About'
    }
]

const AboutPage = () => {
    const [open, setOpen] = useState(false)
    return (
        <Fragment>
            <Helmet>
                <title>About us</title>
            </Helmet>
            <Header
                className="headerStyleWhite"
                logo={logo}
            />
            <Breadcumb
                links={links}
                className="overlay breadcumbStyleTwo"
                title="About Us"
                bgImg={breadcumbImg}
                stoketext="About"
            />

            <Grid className="aboutPageArea">
                <Grid
                    alignItems="center"
                    className="container"
                    spacing={4}
                    container>
                    <Grid item md={5} xs={12}>
                        <Grid style={{ background: `url(${about}) no-repeat center center / cover` }} className="aboutPageImg overlay">
                            <h2>25+</h2>
                            <span>Years in Service</span>
                        </Grid>
                    </Grid>
                    <Grid item md={7} xs={12}>
                        <Grid className="aboutPageContent">
                            <span className="subText">about us</span>
                            <h2>The House Explained</h2>
                            <strong>The law makers (members) are elected people from their various constituencies.</strong>
                            <p>The legislators come together during House sittings and debate on certain issues or matters, it may be from the Executive arm of government
                                like the appropriation bill, amendment bill or could be from members of the people known as private bill or a bill could also be from any of
                                the Honourable Members. The Legislative represent the interest of their electorates. The members sometimes bring issues that affect their
                                communities to the floor of the House for members to deliberate on. Generally, they are their people's representatives. A bill is a law passed 
                                by 2/3rd majority of the legislators after passing through the 3rd reading on the floor of the House.</p>
                                <p>The House has ten principal officers which constitute the leadership of the House with Hon. Aminu Iya Abbas as the Speaker</p>
                                <p>The legislators apart from law making role also engage in oversight functions through committee activities</p>
                            {/* <ul>
                                <li>
                                    <Button className="btn textUppercase">Learn More</Button>
                                </li>
                                <li>
                                    <Button
                                        onClick={() => setOpen(true)}
                                        className="videoBtn">
                                        <i className="fa fa-play"></i>
                                    </Button>
                                </li>
                            </ul> */}
                            <h3>About</h3>
                        </Grid>
                    </Grid>
                </Grid>
                <br />
                <br />
                <Grid
                    alignItems="center"
                    className="container"
                    spacing={4}
                    container>
                    <Grid item md={7} xs={12}>
                        <Grid className="aboutPageContent">
                            <span className="subText">More About the House</span>
                            <h2>Inauguration of The Assembly</h2>
                            <strong>Every new Legislative Assembly is officially introduced during a special ceremony called Inauguration.</strong>
                            <p>On the day of inauguration there is no Speaker’s procession into the Chamber;
                            The Mace is placed at the lower pedestal before the commencement of the inaugural ceremony and the state/crest of the Mace should be to the left of Sergeant-At-Arms and right hand side of the Chair.
                            Only Members-elect are allowed into the Chamber and invited guests sit at the Gallery.
                            The Governor of the State issues a Proclamation (an official announcement) for the holding of the first session of the House of Assembly
                            In Adamawa State; the proclamation is usually read by the Governor at the Hallowed Chamber and in the presence of Members-elect.
                            During the ceremony, immediately after reading of the Proclamation by the Governor, the Clerk of the House presides over the elections of the Speaker and the Deputy Speaker in a manner prescribed by the Business, Rules and Standing Orders of the House.
                            All Members-elect are eligible to participate in the voting for the Speaker and Deputy Speaker. It should be noted that neither a Point of Order nor a motion for adjournment may be moved by a Member-elect until a Speaker emerges.
                            Having been elected, He is conducted to the Speaker’s Chair and subscribes to the Oath of Allegiance and Oath of Membership before the Clerk of the House.
                            Thereafter, he expresses appreciation for the honour conferred upon him and sits down in the Chair.
                            At this point, the Mace (symbol of authority) which hitherto is placed in the Lower Brackets is now placed in the Upper Brackets.
                            The first official assignment of Mr. Speaker as the presiding officer of the House is administering the Oath of Allegiance and Oath of Membership on Members-elect before they take their seats.
                            After the subscription to the oaths, Members-elect are then referred to and recognized as Honourable Members of the Assembly.
                            Principal Officers such as: Majority Leader, Minority Leader, Party Whip, Deputy Majority Leader are not elected. They are only announced at the sitting of the House after the party’s caucus meeting must have furnished their names to the Leadership of the House; and
                            it is not a standard practice for the Speaker to robe on the day of inauguration of the Assembly.</p>
                            {/* <ul>
                                <li>
                                    <Button className="btn textUppercase">Learn More</Button>
                                </li>
                                <li>
                                    <Button
                                        onClick={() => setOpen(true)}
                                        className="videoBtn">
                                        <i className="fa fa-play"></i>
                                    </Button>
                                </li>
                            </ul> */}
                            <h3>About</h3>
                        </Grid>
                    </Grid>
                    <Grid item md={5} xs={12}>
                        <Grid style={{ background: `url(${about2}) no-repeat center center / cover` }} className="aboutPageImg overlay">
                            <h2>Inside</h2>
                            <span>The House</span>
                        </Grid>
                    </Grid>
                </Grid>
                    <ModalVideo
                    channel='youtube'
                    isOpen={open}
                    videoId='MyztGbu7HRc'
                    onClose={() => setOpen(false)}
                />
            </Grid>
            {/* <WhatWeDo /> */}
            <br />
            <br />
            <Activity className="activityStyleTwo" />
            <VideoComponent />
            <StartupFaq
                className="faqStyleTwoArea"
            />
            {/* <CallToAction /> */}
            <Footer
                // logo={logoBlack}
                className="blackFooterArea"
            />
        </Fragment>
    )
}

export default injectIntl(AboutPage)
