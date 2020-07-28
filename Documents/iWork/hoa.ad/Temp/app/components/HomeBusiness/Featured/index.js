import React from 'react';
import { injectIntl } from 'react-intl';
import messages from './messages';
import { Grid, Button } from '@material-ui/core'
import './style.scss'

// images 
import icon1 from 'images/icons/featured/icon1.png'
import icon2 from 'images/icons/featured/icon2.png'
import icon3 from 'images/icons/featured/icon3.png'
import big from 'images/icons/featured/big.png'

const Featured = (props) => {
    const featureds = [
        {
            image: icon1,
            id: 1,
            title: 'Our Mission',
            details: 'Ensuring consistency and uniformity in drafting with brevity, clarity and precision, Government Bills, Ordinances and Subordinate Legislation'
        },
        {
            image: icon2,
            id: 2,
            big: big,
            title: 'Our Vision',
            details: 'To achieve excellence in legislative matters for accomplishing the objectives set out in the Constitution of Nigeria.'
        },
        {
            image: icon3,
            id: 3,
            title: 'Our Goal',
            details: 'Improving the legislative drafting skills of the officers, as well as disposing of legislative proposals on time'
        },
    ]
    return (
        <Grid className="featuredArea">
            <Grid className="container" spacing={4} container>
                <Grid item xs={12}>
                    <ul className="featuredWrapper">
                        {featureds.map((item, i) => (
                            <li key={i} className="featuredItem">
                                <img className="icon" src={item.image} alt="" />
                                {item.big ? <img className="bigIcon" src={item.big} alt="" /> : ''}
                                <span className="devaidar"></span>
                                <h3>{item.title}</h3>
                                <p>{item.details}</p>
                                <Button><i className="fa fa-angle-right"></i></Button>
                            </li>
                        ))}
                    </ul>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default injectIntl(Featured);
