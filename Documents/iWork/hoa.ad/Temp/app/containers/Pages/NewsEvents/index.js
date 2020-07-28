import React, { Fragment, Component } from 'react';
import { injectIntl } from 'react-intl';
// import messages from 'components/HomeMain/Blog/messages';
import { Grid } from '@material-ui/core'
import { Helmet } from 'react-helmet';
// components 
import Header from 'components/Header/Loadable'
import Breadcumb from 'components/Breadcumb/Loadable'
import SingleBlog from 'components/SingleNews/Loadable'
// import CallToAction from 'components/CallToAction/Loadable'
import Footer from 'components/Footer/Loadable'
import './style.scss'

// images 
import logo from 'images/logo-white.png'
// import logoBlack from 'images/logo.png'
import breadcumbImg from 'images/bg/news.jpg'

import image1 from 'images/blogs/Hon Hamido Sajo.jpg'
import image2 from 'images/blogs/Ahmadu-Fintiri.jpg'
import image3 from 'images/blogs/Adamawa-House-of-Assembly-768x576.jpg'
import image4 from 'images/blogs/adamawa tribunal.jpg'
import image5 from 'images/blogs/dss.jpg'
// import image5 from 'images/blogs/img5.jpg'
// import image6 from 'images/blogs/img6.jpg'


// import avatar1 from 'images/blogs/avatar/img1.png'
// import avatar2 from 'images/blogs/avatar/img2.png'
// import avatar3 from 'images/blogs/avatar/img3.png'


const links = [
    {
        name: 'Home',
        link: '/'
    },
    {
        name: ' News & Events'
    }
]

class NewsEvents extends Component {
    t(msg, values) {
        return this.props.intl.formatMessage(msg, values); 
    }

    render() {
        const blogs = [
            {
                image: image1,
                title: `Yola North Lawmaker Constructs Primary Health Centre for Jambutu`,
                details: `The member representing Yola North constituency in Adamawa State House of Assembly, Hon. Hamidu Sajoh Lekki, has partnered the Save One Million Lives...`,
                // subtitle: `${this.t({ ...messages.BusinessIT })}`,
                author: 'Ahmed',
                date: '26 Febraury 2020',
                // avatar: avatar1,
                id: 1
            },
            {
                image: image2,
                title: `2020 Budget presentation by His Excellency Gov. Ahmadu Fintiri`,
                details: `Gov. Ahmadu Fintiri of Adamawa State has presented a proposed budget of N183,36 billion for 2020 fiscal year the state House of Assembly...`,
                // subtitle: `${this.t({ ...messages.BusinessIT })}`,
                author: 'Ahmed',
                date: '28 November 2019',
                // avatar: avatar1,
                id: 2
            },
            {
                image: image3,
                title: `Adamawa Assembly sets agenda for its operation`,
                details: `Adamawa State House of Assembly has formulated an agenda to serve as roadmap for its operations, Speaker of the House, Alhaji Aminu Iya-Abbas, said on Saturday...`,
                // subtitle: `${this.t({ ...messages.CreativeSoft })}`,
                author: 'Aliyu',
                date: '21 September 2019',
                // avatar: avatar2,
                id: 3
            },
            {
                image: image4,
                title: `Tribunal upholds Adamawa ex-speaker’s election`,
                details: `The National and House of Assembly Election Petition Tribunal sitting in Yola has dismissed a case filed by Adamu Mustapha of the People’s Democratic Party (PDP)...`,
                // subtitle: `${this.t({ ...messages.Creativepark })}`,
                author: 'Abdulrasheed Bello ',
                date: '02 August 2019',
                // avatar: avatar3,
                id: 4
            },
            {
                image: image5,
                title: `SSS arrest suspected fake doctor accused of killing 15 people`,
                details: `Operatives of the State Security Services (SSS) have arrested a suspected fake 15 people in a cottage hospital in Adamawa State...`,
                // subtitle: `${this.t({ ...messages.BusinessIT })}`,
                author: 'Fateema Idris',
                date: '20 June 2019',
                // avatar: avatar1,
                id: 5
            },
            
        ]

        return (
            <Fragment>
                <Helmet>
                    <title>News & Events</title>
                </Helmet>
                <Header
                    className="headerStyleWhite"
                    logo={logo}
                />
                <Breadcumb
                    links={links}
                    className="overlay breadcumbStyleTwo"
                    title="Press Release"
                    bgImg={breadcumbImg}
                    stoketext="News"
                />
                <Grid className="blogTwoGridArea">
                    <Grid container spacing={4} className="container">
                        {blogs.map((blog, i) => (
                            <Grid key={i} item sm={6} xs={12}>
                                <SingleBlog
                                    image={blog.image}
                                    subtitle={blog.subtitle}
                                    id={blog.id}
                                    title={blog.title}
                                    author={blog.author}
                                    date={blog.date}
                                    details={blog.details}
                                    avatar={blog.avatar}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
                {/* <CallToAction /> */}
                <Footer
                    // logo={logoBlack}
                    className="blackFooterArea"
                />
            </Fragment>
        )
    }
}

export default injectIntl(NewsEvents)
