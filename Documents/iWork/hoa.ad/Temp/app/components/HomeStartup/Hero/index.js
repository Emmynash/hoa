import React, { useState } from 'react';
import { injectIntl } from 'react-intl';
import messages from './messages';
import { Grid, Button } from '@material-ui/core'
import { Link } from 'react-router-dom'
import ModalVideo from 'react-modal-video'
import './style.scss'

// images 
import bg from 'images/startup/hero.jpg'
import hero from 'images/startup/hero.png'

const StartupHero = (props) => {
    const [open, setOpen] = useState(false)

    const heros = {
        subtitle: `${props.intl.formatMessage({ ...messages.FirstTheBestITCompany })}`,
        title: `${props.intl.formatMessage({ ...messages.title })}`,
        details: `${props.intl.formatMessage({ ...messages.details })}`,
        btn: `${props.intl.formatMessage({ ...messages.LearnMore })}`,
        image: hero,
        bg: bg
    }

    return (
        <Grid style={{ background: `url(${heros.bg})no-repeat center center / cover` }} className="startupHeroArea">
            <Grid className="container" alignItems="center" spacing={4} container>
                <Grid item md={6} xs={12}>
                    <Grid className="startupHeroContent">
                        <span className="sub">{heros.subtitle}</span>
                        <h2>{heros.title}</h2>
                        <p>{heros.details}</p>
                        <ul>
                            <li><Button component={Link} to="/">{heros.btn} <svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="arrow-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="svg-inline--fa fa-arrow-right fa-w-14 fa-fw"><path fill="currentColor" d="M216.464 36.465l-7.071 7.07c-4.686 4.686-4.686 12.284 0 16.971L387.887 239H12c-6.627 0-12 5.373-12 12v10c0 6.627 5.373 12 12 12h375.887L209.393 451.494c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l211.051-211.05c4.686-4.686 4.686-12.284 0-16.971L233.434 36.465c-4.686-4.687-12.284-4.687-16.97 0z" className=""></path></svg></Button></li>
                            <li><Button onClick={() => setOpen(true)}><i className="fa fa-play"></i></Button></li>
                        </ul>
                    </Grid>
                </Grid>
                <Grid item md={6} xs={12}>
                    <Grid className="startupheroImg">
                        <img src={heros.image} alt="" />
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

export default injectIntl(StartupHero)
