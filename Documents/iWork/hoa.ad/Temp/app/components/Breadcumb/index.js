import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { Grid } from '@material-ui/core'
import { Link } from 'react-router-dom'
import './style.scss'
const Breadcumb = ({ className, title, links, bgImg, stoketext }) => {
    return (
        <Grid
            style={{ background: `url(${bgImg}) no-repeat center center / cover`, marginBottom:'' }}
            className={`${className} breadcumbArea`}>
            <Grid className="container" spacing={4} container>
                <Grid item xs={12}>
                    <Grid className="breadcumbWrap">
                        <h2>{title}</h2>
                        <ul>
                            {links.map((item, i) => (
                                <li key={i}>
                                    {item.link ?
                                        <Link to={item.link}>{item.name}</Link> :
                                        <span>{item.name}</span>
                                    }
                                </li>
                            ))}
                        </ul>
                    </Grid>
                </Grid>
            </Grid>
            {stoketext && <h3>{stoketext}</h3>}
        </Grid>
    );
}

export default Breadcumb;
