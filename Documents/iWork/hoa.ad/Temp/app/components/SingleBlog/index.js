import React from 'react';
import { Grid } from '@material-ui/core'
import { Link } from 'react-router-dom'
import './style.scss'

const SingleBlog = ({ image, subtitle, id, title, details, link, date, avatar, facebook, twitter, email }) => {

    return (
        <Grid className="blogWrap">
            <Grid className="blogImg">
                <img src={image} alt="" />
                {/* {avatar && <a href="JavaScript:void(0);"><img className="avatarImg" src={avatar} alt="" /></a>} */}
            </Grid>
            <Grid className="blogContent">
                <h3><Link to={`/house-members/member/${id}`}>{title}</Link></h3>
                <p>{details}</p>
            </Grid>
            <ul className="blogMeta">
                <li><a href={facebook}><i className="fa fa-facebook"></i></a></li>
                <li><a href={twitter}><i className="fa fa-twitter"></i></a></li> 
                <li><a href={email}><i className="fa fa-envelope"></i></a></li>
            </ul>
        </Grid>
    );
}

export default SingleBlog;
