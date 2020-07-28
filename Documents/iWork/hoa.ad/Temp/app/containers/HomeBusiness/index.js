import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { injectIntl } from 'react-intl';
import { compose } from 'redux';
import messages from './messages';
import './style.scss'

// images 
import logo from 'images/logo-white.png'
// import logoBlack from 'images/logo.png'
import bg from 'images/bg/case.png'

// components 
import Header from 'components/Header/Loadable'
import Footer from 'components/Footer/Loadable'
import HeroSlider from 'components/HomeBusiness/HeroSlider/Loadable'
import Featured from 'components/HomeBusiness/Featured/Loadable'
import AboutBusiness from 'components/HomeBusiness/AboutBusiness/Loadable'
import BusinessVideo from 'components/HomeBusiness/BusinessVideo/Loadable'
import BusinessService from 'components/HomeBusiness/BusinessService/Loadable'
import Protfolio from 'components/HomeBusiness/Protfolio/Loadable'
import Activity from 'components/HomeBusiness/Activity/Loadable'
// import Testmonial from 'components/HomeBusiness/Testmonial/Loadable'
// import Skill from 'components/HomeBusiness/Skill/Loadable'
// import Brand from 'components/Brand/Loadable'
// import BusinessBlog from 'components/HomeBusiness/BusinessBlog/Loadable'
// import BusinessContact from 'components/HomeBusiness/Contact/Loadable'

const HomeBusiness = () => {
    return (
        <Fragment>
            <Helmet>
                <title>Adamawa House of Assembly</title>
            </Helmet>
            <Header
                className="headerStyleWhite"
                logo={logo}
            />
            <HeroSlider />
            <Featured />
            <AboutBusiness />
            <BusinessVideo />
            <BusinessService />
            <Protfolio
                background={bg}
            />
            <Activity />
            {/* <Testmonial />
            <Skill />
            <Brand /> */}
            {/* <BusinessBlog /> */}
            {/* <BusinessContact /> */}
            <Footer
                // logo={logoBlack}
                className="blackFooterArea"
            />
        </Fragment>
    );
}
function mapDispatchToProps(dispatch) {
    return {
        dispatch,
    };
}

const withConnect = connect(
    null,
    mapDispatchToProps,
);

export default compose(withConnect)(HomeBusiness);
