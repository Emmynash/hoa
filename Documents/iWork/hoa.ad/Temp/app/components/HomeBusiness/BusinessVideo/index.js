import React, { useState } from 'react';
import { injectIntl } from 'react-intl';
import messages from './messages';
import { Grid, Button } from '@material-ui/core'
import ModalVideo from 'react-modal-video'

import './style.scss'

// images 
import bg from 'images/bg/case.png'
import video from 'images/bg/case1.png'
import play from 'images/icons/play.png'


const BusinessVideo = (props) => {
    const [open, setOpen] = useState(false)

    const videos = {
        subtitle: `${props.intl.formatMessage({ ...messages.latestideo })}`,
        title: `${props.intl.formatMessage({ ...messages.header })}`,
        text: `${props.intl.formatMessage({ ...messages.detail })}`,
        bg: bg,
        image: video
    }

    return (
        <Grid
            style={{ background: `url(${videos.bg}) no-repeat center center / cover` }}
            className="businessVideoArea overlay">
            <Grid className="container" container spacing={4}>
                <Grid item lg={7} md={7} xs={12} className="textRight">
                    <span>{videos.subtitle}</span>
                    <h2>{videos.title}</h2>
                </Grid>
                <Grid item lg={5} md={5} xs={12}>
                    <p>{videos.text}</p>
                </Grid>
                <Grid item lg={1} > </Grid>
                <Grid item lg={10}>
                    <h3 style={{color: "#50c76f"}}>Click to play</h3>
                    <Grid className="businessVideoImg">
                        <img src={videos.image} alt="" />
                        <Button
                            onClick={() => setOpen(true)}
                            className="playBtn">
                            <img src={play} alt="" />
                        </Button> 
                    </Grid>
                </Grid>
            </Grid>
            <ModalVideo
                channel='youtube'
                isOpen={open}
                videoId='OXPhUp_Wmm4'
                onClose={() => setOpen(false)}
            />
        </Grid>
    );
}
export default injectIntl(BusinessVideo);
