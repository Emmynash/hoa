import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { compose } from 'redux';
import messages from './messages';

// images 
import logo from 'images/logo.png'
import whiteLogo from 'images/logo-white.png'

// components 
import Header from 'components/Header/Loadable'
import Hero from 'components/HomeMain/Hero/Loadable'
import About from 'components/HomeMain/About/Loadable'
import Video from 'components/HomeMain/Video/Loadable'
import Service from 'components/HomeMain/Service/Loadable'
import WhyChoose from 'components/HomeMain/WhyChoose/Loadable'
import CaseStudy from 'components/HomeMain/CaseStudy/Loadable'
import Contact from 'components/HomeMain/Contact/Loadable'
import Team from 'components/HomeMain/Team/Loadable'
import Quote from 'components/HomeMain/Quote/Loadable'
import Blog from 'components/HomeMain/Blog/Loadable'
import Footer from 'components/Footer/Loadable'
const HomePage = () => {
    return (
        <Fragment>
            <Helmet>
                <title>Home main</title>
            </Helmet>
            <Header
                logo={logo}
            />
            <Hero />
            <About />
            <Video />
            <Service />
            <WhyChoose />
            <CaseStudy />
            <Contact />
            <Team
                loadmore
                jounus
                item={3}
            />
            <Quote />
            <Blog />
            <Footer
                logo={whiteLogo}
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

export default compose(withConnect)(HomePage);
