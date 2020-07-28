import React from 'react';
import { Grid } from '@material-ui/core'
import { Link } from 'react-router-dom'
import './style.scss'

const SingleBlog = ({ image, subtitle, id, title, details, author, date, avatar, facebook, twitter, email }) => {

    return (
        <Grid className="blogWrap">
            <Grid className="blogImg">
                <img src={image} alt="" />
                {/* {avatar && <a href="JavaScript:void(0);"><img className="avatarImg" src={avatar} alt="" /></a>} */}
            </Grid>
            <Grid className="blogContent">
                <h3><Link to={`/news-details/${id}`}>{title}</Link></h3>
                <p>{details}</p>
            </Grid>
            <ul className="blogMeta">
                <li><i className="fa fa-user"></i>{author}</li>
                <li><i className="fa fa-calendar"></i>{date}</li> 
            </ul>
        </Grid>
    );
}

export default SingleBlog;
