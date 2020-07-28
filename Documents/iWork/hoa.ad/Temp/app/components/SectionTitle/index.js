import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { Grid, Button } from '@material-ui/core'
import './style.scss'
const SectionTitle = ({ title, subtitle, stoketext, className }) => {
    return (
        <Grid className={`sectionTitle ${className}`}>
            <span>{subtitle}</span>
            <h3>{title}</h3>
            <h2>{stoketext}</h2>
        </Grid>
    );
}
export default SectionTitle;
