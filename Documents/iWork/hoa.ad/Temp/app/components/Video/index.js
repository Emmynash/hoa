import React, { useState } from 'react';
import { Grid, Button } from '@material-ui/core';
import ModalVideo from 'react-modal-video'
import './style.scss'

// images 
import bgImg from 'images/bg/case.png';

const VideoComponent = ({ className }) => {
    const [open, setOpen] = useState(false)

    return (
        <Grid
            style={{ background: `url(${bgImg}) no-repeat center center / cover` }}
            className={`${className} aboutVideoArea overlay`}>
            <Grid className="container" spacing={4} container>
                <Grid className="aboutVideoContent">
                    <Button
                        onClick={() => setOpen(true)}
                        className="videoBtn">
                        <i className="fa fa-play"></i>
                    </Button>
                    <span className="subText">Click to play</span>
                    <span className="subText">About us video</span>
                    <h2>Setting the Standard of Exellence</h2>
                    <h3>Video</h3>
                </Grid>
            </Grid>
            <ModalVideo
                channel='youtube'
                isOpen={open}
                videoId='MyztGbu7HRc'
                onClose={() => setOpen(false)}
            />
        </Grid>
    )
}


export default VideoComponent;
