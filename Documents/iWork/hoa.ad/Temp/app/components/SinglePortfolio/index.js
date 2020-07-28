import React from 'react';
import { Link } from 'react-router-dom'
import { Grid } from '@material-ui/core'
import './style.scss'
const SinglePortfolio = ({ image, designation, name, id, details }) => {
    return (
        <Grid className="portfolioWrap">
            <Grid className="portfolioImg">
                <img src={image} alt="" />
            </Grid>
            <Grid className="portfolioContent">
                <Grid className="portfolioContentLeft">
                    <span>{designation}</span>
                    <h4>{name}</h4>
                </Grid>
                <Link to={`/house-members/member/${id}`}>
                    <i className="pe-7s-right-arrow"></i>
                </Link>
            </Grid>
            <Grid><span>{details}</span></Grid>
        </Grid>
    );
}

export default SinglePortfolio;
