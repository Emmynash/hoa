import React from 'react';
import { injectIntl } from 'react-intl';
import messages from './messages';
import { Grid } from '@material-ui/core'
import { Link } from 'react-router-dom'
import './style.scss'

// images 
import email from 'images/icons/email2.png'
import phone from 'images/icons/phone2.png'
import image1 from 'images/icons/sponsor1.png'
import image2 from 'images/icons/sponsor2.png'

const Support = (props) => {
    const supports = [
        {
            icon: email,
            title: `${props.intl.formatMessage({ ...messages.SupportMail })}`,
            text: `${props.intl.formatMessage({ ...messages.details })}`,
            image: image1,
            link: 'info@webmail.com',
            color: '#ff9232',
            background: '#6fe7f1',
            id: 1
        },
        {
            icon: phone,
            title: `${props.intl.formatMessage({ ...messages.MakeACall })}`,
            text: `${props.intl.formatMessage({ ...messages.details })}`,
            image: image2,
            link: `${props.intl.formatMessage({ ...messages.CallUsNow })}`,
            color: '#ff5f5f',
            linkRoute: '/contact',
            background: '#fbe8de',
            id: 2
        },
    ]
    return (
        <Grid className="suportArea">
            <Grid container spacing={4} className="container">
                {supports.map((item, i) => (
                    <Grid key={i} item md={6} xs={12}>
                        <Grid className="sponsorWrap">
                            <Grid style={{ background: item.background }} className="sponsorImg">
                                <img src={item.image} alt="" />
                            </Grid>
                            <Grid className="sponsorContent">
                                <img src={item.icon} alt="" />
                                <h3>{item.title}</h3>
                                <p>{item.text}</p>
                                {item.linkRoute ? <Link style={{ color: item.color }} to={item.linkRoute}>{item.link}</Link> : <a style={{ color: item.color }} href="mailto:info@webmail.com">{item.link}</a>}
                            </Grid>
                        </Grid>
                    </Grid>
                ))}
            </Grid>
        </Grid>
    );
}

export default injectIntl(Support)
