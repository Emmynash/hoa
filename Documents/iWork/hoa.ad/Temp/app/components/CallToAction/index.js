import React from 'react';
import { injectIntl } from 'react-intl';
import messages from './messages';
import { Grid, Button } from '@material-ui/core'
import './style.scss'

const CallToAction = (props) => {


    return (
        <Grid className={`callToActionArea ${props.className}`}>
            <Grid
                alignItems="center"
                container
                spacing={4}
                className="container">
                <Grid item lg={9} md={8} xs={12}>
                    <Grid className="callToActionWrap">
                        <span>{props.intl.formatMessage({ ...messages.calltoaction })}</span>
                        <h2>{props.intl.formatMessage({ ...messages.RepresentingAllOfTheMajorTelecomCompanies })}</h2>
                    </Grid>
                </Grid>
                <Grid className="textRight" item lg={3} md={4} xs={12}>
                    <Button className="btn textUppercase">{props.intl.formatMessage({ ...messages.getaquote })}</Button>
                </Grid>
            </Grid>
        </Grid>
    );
}


export default injectIntl(CallToAction);
