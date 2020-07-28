import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { Grid, Button } from '@material-ui/core'
import { Link } from 'react-router-dom'
import './style.scss'
const SingleService = ({ icon, color, title, details, number, image }) => {
    return (
        <Grid className="serviceItem">
            <Grid className="serviceImg">
                <img src={image} alt="" />
                <Button component={Link} to="/service">
                    <i style={{ color: `#${color}` }} className={`normal ${icon}`}></i>
                    <i className={`hover ${icon}`}></i>
                </Button>
            </Grid>
            <Grid className="serviceContent">
                <h3>{title}</h3>
                <p>{details}</p>
                <span>{number}</span>
            </Grid>
        </Grid>
    );
}


export default SingleService;
