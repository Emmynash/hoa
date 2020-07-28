import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { Grid, Button } from '@material-ui/core'
import './style.scss'

// images 
import info1 from 'images/info.jpg'
import info2 from 'images/info.png'
import phone from 'images/phone.png'
import email from 'images/email.png'
import bgImg from 'images/bg/info.jpg'

const ContactInfo = () => {
    return (
        <Grid style={{ background: `url(${bgImg})no-repeat center center / cover` }} className="contactInfoArea">
            <Grid className="container" spacing={4} container>
                <Grid item md={6} xs={12}>
                    <Grid className="contactInfoLeft">
                        <Button component="a" href="tel:+98989878767" className="contactInfoBtn">
                            <span className="infoLeft">
                                <img src={phone} alt="" />
                            </span>
                            <span className="infoRight">
                                <span>Phone Number</span>
                                <h3>+989 898 787 67</h3>
                            </span>
                        </Button>
                        <img className="infoLeftImg" src={info1} alt="" />
                    </Grid>
                </Grid>
                <Grid item md={6} xs={12}>
                    <Grid className="contactInfoRight">
                        <div className="textCenter">
                            <img className="infoRightImg" src={info2} alt="" />
                        </div>
                        <Button component="a" href="mailto:info@example.com" className="contactInfoBtn">
                            <span className="infoLeft">
                                <img src={email} alt="" />
                            </span>
                            <span className="infoRight">
                                <span>Email Address</span>
                                <h3>info@example.com</h3>
                            </span>
                        </Button>

                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default ContactInfo;
