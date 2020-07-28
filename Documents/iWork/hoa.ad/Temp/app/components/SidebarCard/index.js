import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { Grid } from '@material-ui/core'
import './style.scss'
const SidebarCard = ({ title, children, className }) => {
    return (
        <Grid className={`sidebarCard ${className}`}>
            <h4>{title}</h4>
            {children}
        </Grid>
    );
}


export default SidebarCard;
