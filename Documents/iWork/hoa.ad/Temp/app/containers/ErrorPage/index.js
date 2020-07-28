import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { compose } from 'redux';
import { Grid, Button } from '@material-ui/core'
import messages from './messages';
import { Link } from 'react-router-dom'
import './style.scss'
// images 
import errorImg from 'images/404.png'
import errorImg2 from 'images/4042.png'


const ErrorPage = () => {
    return (
        <Fragment>
            <Helmet>
                <title>404 Page</title>
            </Helmet>
            <Grid className="errorArea ptb-104">
                <Grid
                    alignItems="center"
                    className="container"
                    spacing={4}
                    container>
                    <Grid item xs={12}>
                        <div className="errorWrap">
                            <span className="subText">here is nothing</span>
                            <h2>Don’t Be Fret We Are Here.</h2>
                            <img src={errorImg} alt="" className="errorimg" />
                            <Button className="btn textUppercase" component={Link} to="/">Go Home</Button>
                            <img src={errorImg2} alt="" className="errorimg2" />
                        </div>
                    </Grid>
                </Grid>
            </Grid>
        </Fragment>
    );
}

ErrorPage.propTypes = {
    dispatch: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
    return {
        dispatch,
    };
}

const withConnect = connect(
    null,
    mapDispatchToProps,
);

export default compose(withConnect)(ErrorPage);
