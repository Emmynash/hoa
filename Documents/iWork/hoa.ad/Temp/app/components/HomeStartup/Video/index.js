import React, { useState } from 'react';
import { injectIntl } from 'react-intl';
import messages from './messages';
import { Grid, Button } from '@material-ui/core'
import ModalVideo from 'react-modal-video'

import './style.scss'


// images 
import image from 'images/video/img4.jpg'
import play from 'images/icons/play.png'

const StartupVideo = ({ spacing, className }) => {
    const [open, setOpen] = useState(false)

    return (
        <Grid className={`startupVideoArea ${className}`}>
            <Grid className="container" container spacing={spacing}>
                <Grid item xs={12}>
                    <Grid style={{ background: `url(${image}) no-repeat center center / cover` }} className="startupvideo">
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
                videoId='XOStXaZ25cw'
                onClose={() => setOpen(false)}
            />
        </Grid>
    );
}

export default injectIntl(StartupVideo)
