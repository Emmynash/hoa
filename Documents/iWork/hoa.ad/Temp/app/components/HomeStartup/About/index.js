import React from 'react';
import { injectIntl } from 'react-intl';
import messages from 'components/HomeMain/About/messages';
import { Link } from 'react-router-dom'
import { Grid, Button } from '@material-ui/core'
import 'components/HomeMain/About/style.scss'
import './style.scss'

// images 
import icon1 from 'images/icons/startup/icon1.png'
import icon1H from 'images/icons/startup/icon1-h.png'
import icon2 from 'images/icons/startup/icon2.png'
import icon2H from 'images/icons/startup/icon2-h.png'
import icon3 from 'images/icons/startup/icon3.png'
import icon3H from 'images/icons/startup/icon3-h.png'
import icon4 from 'images/icons/startup/icon4.png'
import icon4H from 'images/icons/startup/icon4-h.png'

const StartupAbout = (props) => {
    const abouts = {
        title: `${props.intl.formatMessage({ ...messages.MoreThan50MPeopleAreHappyWithUs })}`,
        subtitle: `${props.intl.formatMessage({ ...messages.Loremipsumdolorsitametconsecteturadipiscingelitseddoeiusmod })}`,
        details: `${props.intl.formatMessage({ ...messages.details })}`,
        text: `${props.intl.formatMessage({ ...messages.AboutUs })}`,
        featureds: [
            {
                icon: icon1,
                iconH: icon1H,
                title: `${props.intl.formatMessage({ ...messages.UIUXDesign })}`,
                text: `${props.intl.formatMessage({ ...messages.text })}`,
                className: 'uxui',
                id: 1,
            },
            {
                icon: icon3,
                iconH: icon3H,
                title: `${props.intl.formatMessage({ ...messages.GameDesign })}`,
                text: `${props.intl.formatMessage({ ...messages.text })}`,
                className: 'game',
                id: 3
            },
            {
                icon: icon2,
                iconH: icon2H,
                title: `${props.intl.formatMessage({ ...messages.WebDesign })}`,
                text: `${props.intl.formatMessage({ ...messages.text })}`,
                className: 'web',
                id: 2
            },

            {
                icon: icon4,
                iconH: icon4H,
                title: `${props.intl.formatMessage({ ...messages.InteriorDesign })}`,
                text: `${props.intl.formatMessage({ ...messages.text })}`,
                className: 'interior',
                id: 4
            },
        ]
    }

    return (
        <Grid className="startupAboutArea">
            <Grid
                alignItems="center"
                container
                spacing={4}
                className="container">
                <Grid item md={6} xs={12}>
                    <Grid container spacing={4}>
                        <Grid item sm={6} xs={12}>
                            {abouts.featureds.slice(0, 2).map((item, i) => (
                                <Grid key={i} className={`${item.className} startupFeatured`}>
                                    <span className="icon">
                                        <img className="normal" src={item.icon} alt="" />
                                        <img className="hover" src={item.iconH} alt="" />
                                    </span>
                                    <h3>{item.title}</h3>
                                    <p>{item.text}</p>
                                </Grid>
                            ))}
                        </Grid>
                        <Grid item sm={6} xs={12}>
                            {abouts.featureds.slice(2, 4).map((item, i) => (
                                <Grid key={i} className={`${item.className} startupFeatured`}>
                                    <span className="icon">
                                        <img className="normal" src={item.icon} alt="" />
                                        <img className="hover" src={item.iconH} alt="" />
                                    </span>
                                    <h3>{item.title}</h3>
                                    <p>{item.text}</p>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item md={6} xs={12}>
                    <Grid className="aboutContent">
                        <span className="dot"></span>
                        <span className="text">{abouts.text}</span>
                        <h2>{abouts.title}</h2>
                        <h4>{abouts.subtitle}</h4>
                        <Grid className="aboutDetails">
                            <p>{abouts.details}</p>
                        </Grid>
                        <Button className="btn" component={Link} to="/about">{props.intl.formatMessage({ ...messages.LearnMore })}</Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default injectIntl(StartupAbout)
