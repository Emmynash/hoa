import React, { Fragment, Component } from 'react';
import { injectIntl } from 'react-intl';
// import messages from 'components/HomeMain/Blog/messages';
import { Grid } from '@material-ui/core';
import { Helmet } from 'react-helmet';
// components 
import Header from 'components/Header/Loadable'
import Breadcumb from 'components/Breadcumb/Loadable'
import SingleBlog from 'components/SingleBlog/Loadable'
// import CallToAction from 'components/CallToAction/Loadable'
import Footer from 'components/Footer/Loadable'
import './style.scss'

// images 
import logo from 'images/logo-white.png'
// import logoBlack from 'images/logo.png'
import breadcumbImg from 'images/bg/house_0.jpg'

import image1 from 'images/Legislators/Hon. Abdullahi Ahmadu.jpg'
import image2 from 'images/Legislators/Hon. Abdullahi Umar.jpg'
import image3 from 'images/Legislators/Hon. Abubakar Isa.jpg'
import image4 from 'images/Legislators/Hon. Abdullahi Umaru Yapak.jpg'
import image5 from 'images/Legislators/Hon. Adwawa W. Dongolok.jpg'
import image6 from 'images/Legislators/Hon. Alhassan Hammanjoda.jpg'
import image7 from 'images/Legislators/Hon. Battiya Wisely.jpg'
import image8 from 'images/Legislators/Hon. Bauna P. Myandasa.jpg'
import image9 from 'images/Legislators/Hon. Hamidu A.  Sajo.jpg'
import image10 from 'images/Legislators/Hon. Musa Bororo.jpg'
import image11 from 'images/Legislators/Hon. Haruna Jilantikiri.jpg'
import image12 from 'images/Legislators/Hon. Ibrahim Musa.jpg'
import image13 from 'images/Legislators/Hon. Isa Yahya.jpg'
import image14 from 'images/Legislators/Hon. Japhet Kefas.jpg'
import image15 from 'images/Legislators/Hon. Joseph A. Kwada.jpg'
import image16 from 'images/Legislators/Hon. Kate Mamuno Raymond.jpg'
import image17 from 'images/Legislators/Hon. Mohammed Mutawalli Minority Leader.jpg'
import image18 from 'images/Legislators/Hon. Hammantukur Yettisuri.jpg'
import image19 from 'images/Legislators/Rt. Hon. Kabiru Mijinyawa.jpg'
import image20 from 'images/Legislators/Hon. Shuaibu Babas.jpg'
import image21 from 'images/Legislators/Hon. Shuaibu Musa.jpg'
import image22 from 'images/Legislators/Hon. Simon Isa.jpg'
import image23 from 'images/Legislators/Hon. Umar G. Nashon.jpg'
import image24 from 'images/Legislators/Rt. Hon. Aminu Iya Abbas Speaker.jpg'
import image25 from 'images/Legislators/Hon. Pwamwakeno M. Makondo.jpg'

// import avatar1 from 'images/blogs/avatar/img1.png'
// import avatar2 from 'images/blogs/avatar/img2.png'
// import avatar3 from 'images/blogs/avatar/img3.png'


const links = [
    {
        name: 'Home',
        link: '/'
    },
    {
        name: ' House | Members'
    }
]

class HouseMembers extends Component {
    t(msg, values) {
        return this.props.intl.formatMessage(msg, values); 
    }

    render() {
        const blogs = [
            {
                image: image1,
                title: `Hon. Abdullahi Ahmadu`,
                details: `Leko/Koma`,
                // subtitle: `${this.t({ ...messages.BusinessIT })}`,
                author: 'Isa Yola',
                date: '23 May 2019',
                // avatar: avatar1,
                facebook: "https://facebook.com",
                twitter: "https://twitter.com",
                email: "mailto:abdulla@yahoo.com",
                id: 1
            },
            {
                image: image2,
                title: `Hon. Abdullahi Umar`,
                details: `Toungo`,
                // subtitle: `${this.t({ ...messages.CreativeSoft })}`,
                author: 'Isa Yola',
                date: '20 May 2019',
                // avatar: avatar2,
                facebook: "https://facebook.com",
                twitter: "https://twitter.com",
                email: "mailto:aunyako73@gmail.com",
                id: 2
            },
            {
                image: image3,
                title: `Hon. Abubakar Isa`,
                details: `Shelleng`,
                // subtitle: `${this.t({ ...messages.Creativepark })}`,
                author: 'Isa Yola',
                date: '05 Jan 2019',
                // avatar: avatar3,
                facebook: "https://facebook.com/Mai Jama'a Abubakar",
                twitter: "https://twitter.com/aimshelleng",
                email: "abubakarisa933@gmail.com",
                id: 3
            },
            {
                image: image4,
                title: `Hon. Abdullahi Umaru Yapak`,
                details: `Verre`,
                // subtitle: `${this.t({ ...messages.BusinessIT })}`,
                author: 'Isa Yola',
                date: '23 May 2019',
                // avatar: avatar1,
                facebook: "https://facebook.com",
                twitter: "https://twitter.com",
                email: "mailto:abdulyapak@gmail.com",
                id: 4
            },
            {
                image: image5,
                title: `Hon. Adwawa W. Dongolok`,
                details: `Guyuk`,
                // subtitle: `${this.t({ ...messages.CreativeSoft })}`,
                author: 'Isa Yola',
                date: '20 May 2019',
                // avatar: avatar2,
                facebook: "https://facebook.com/adwawadongolok",
                twitter: "https://twitter.com",
                email: "mailto:swildongs@yahoo.com",
                id: 5
            },
            {
                image: image6,
                title: `Hon. Alhassan Hammanjoda`,
                details: `Ganye`,
                // subtitle: `${this.t({ ...messages.Creativepark })}`,
                author: 'Isa Yola',
                date: '05 Jan 2019',
                // avatar: avatar3,
                facebook: "https://facebook.com",
                twitter: "https://twitter.com",
                email: "mailto:alhassangeon@gmail.com",
                id: 6
            },
            {
                image: image7,
                title: `Hon. Battiya Wisely`,
                details: `Hong`,
                // subtitle: `${this.t({ ...messages.BusinessIT })}`,
                author: 'Isa Yola',
                date: '23 May 2019',
                // avatar: avatar1,
                facebook: "https://facebook.com",
                twitter: "https://twitter.com",
                email: "mailto:wesleybathiya@gmail.com",
                id: 7
            },
            {
                image: image8,
                title: `Hon. Bauna P. Myandasa`,
                details: `Lamurde`,
                // subtitle: `${this.t({ ...messages.CreativeSoft })}`,
                author: 'Isa Yola',
                date: '20 May 2019',
                // avatar: avatar2,
                facebook: "https://facebook.com",
                twitter: "https://twitter.com",
                email: "mailto:sbaunapm@gmail.com",
                id: 8
            },
            {
                image: image9,
                title: `Hon. Hamidu A.  Sajo`,
                details: `Jimeta`,
                // subtitle: `${this.t({ ...messages.Creativepark })}`,
                author: 'Isa Yola',
                date: '05 Jan 2019',
                // avatar: avatar3,
                facebook: "https://facebook.com",
                twitter: "https://twitter.com",
                email: "mailto:aunyako73@gmail.com",
                id: 9
            },
            {
                image: image10,
                title: `Hon. Musa Bororo`,
                details: `Mubi South`,
                // subtitle: `${this.t({ ...messages.BusinessIT })}`,
                author: 'Isa Yola',
                date: '23 May 2019',
                // avatar: avatar1,
                facebook: "https://facebook.com",
                twitter: "https://twitter.com",
                email: "mailto:musabororo94@gmail.com",
                id: 10
            },
            {
                image: image11,
                title: `Hon. Haruna Jilantikiri`,
                details: `Madagali`,
                // subtitle: `${this.t({ ...messages.CreativeSoft })}`,
                author: 'Isa Yola',
                date: '20 May 2019',
                // avatar: avatar2,
                facebook: "https://facebook.com",
                twitter: "https://twitter.com",
                email: "mailto:sinamaiharuna@gmail.com",
                id: 11
            },
            {
                image: image12,
                title: `Hon. Ibrahim Musa`,
                details: `Mayo-Belwa`,
                // subtitle: `${this.t({ ...messages.CreativeSoft })}`,
                author: 'Isa Yola',
                date: '20 May 2019',
                // avatar: avatar2,
                facebook: "https://facebook.com/ibrahimitaliay",
                twitter: "https://twitter.com",
                email: "mailto:ibrahimmusaitaliya@gmail.com",
                id: 12
            },
            {
                image: image13,
                title: `Hon. Isa Yahya`,
                details: `Maiha`,
                // subtitle: `${this.t({ ...messages.CreativeSoft })}`,
                author: 'Isa Yola',
                date: '20 May 2019',
                // avatar: avatar2,
                facebook: "https://facebook.com/isayahyasorau",
                twitter: "https://twitter.com",
                email: "mailto:hassanisayahya@gmail.com",
                id: 13
            },
            {
                image: image14,
                title: `Hon. Japhet Kefas`,
                details: `Gombi`,
                // subtitle: `${this.t({ ...messages.CreativeSoft })}`,
                author: 'Isa Yola',
                date: '20 May 2019',
                // avatar: avatar2,
                facebook: "https://facebook.com",
                twitter: "https://twitter.com",
                email: "mailto:japhetkefas1@gmail.com",
                id: 14
            },
            {
                image: image15,
                title: `Hon. Joseph A. Kwada`,
                details: `Michika`,
                // subtitle: `${this.t({ ...messages.CreativeSoft })}`,
                author: 'Isa Yola',
                date: '20 May 2019',
                // avatar: avatar2,
                facebook: "https://facebook.com",
                twitter: "https://twitter.com",
                email: "mailto:honisayahya@yahoo.com",
                id: 15
            },
            {
                image: image16,
                title: `Hon. Kate Mamuno Raymond`,
                details: `Demsa`,
                // subtitle: `${this.t({ ...messages.CreativeSoft })}`,
                author: 'Isa Yola',
                date: '20 May 2019',
                // avatar: avatar2,
                facebook: "https://facebook.com",
                twitter: "https://twitter.com",
                email: "mailto:kmamuno1663@gmail.com",
                id: 16
            },
            {
                image: image17,
                title: `Hon. Mohammed Mutawalli`,
                details: `Girei`,
                // subtitle: `${this.t({ ...messages.CreativeSoft })}`,
                author: 'Isa Yola',
                date: '20 May 2019',
                // avatar: avatar2,
                facebook: "https://facebook.com",
                twitter: "https://twitter.com",
                email: "mailto:mutawalliwwurodole@gmail.com",
                id: 17
            },
            {
                image: image18,
                title: `Hon. Hammantukur Yettisuri`,
                details: `Jada`,
                // subtitle: `${this.t({ ...messages.CreativeSoft })}`,
                author: 'Isa Yola',
                date: '20 May 2019',
                // avatar: avatar2,
                facebook: "https://facebook.com",
                twitter: "https://twitter.com",
                email: "mailto:hammantukuryettisuri@gmail.com",
                id: 18
            },
            {
                image: image19,
                title: `Rt. Hon. Kabiru Mijinyawa`,
                details: `Yola South`,
                // subtitle: `${this.t({ ...messages.CreativeSoft })}`,
                author: 'Isa Yola',
                date: '20 May 2019',
                // avatar: avatar2,
                facebook: "https://facebook.com",
                twitter: "https://twitter.com",
                email: "mailto:kabirumijinyawa@gmail.com",
                id: 19
            },
            {
                image: image20,
                title: `Hon. Shuaibu Babas`,
                details: `Fufore/Gurin`,
                // subtitle: `${this.t({ ...messages.CreativeSoft })}`,
                author: 'Isa Yola',
                date: '20 May 2019',
                // avatar: avatar2
                facebook: "https://facebook.com",
                twitter: "https://twitter.com",
                email: "mailto:smusa@gmail.com",
                id: 20
            },
            {
                image: image21,
                title: `Hon. Shuaibu Musa`,
                details: `Mubi North`,
                // subtitle: `${this.t({ ...messages.CreativeSoft })}`,
                author: 'Isa Yola',
                date: '20 May 2019',
                // avatar: avatar2,
                facebook: "https://facebook.com",
                twitter: "https://twitter.com",
                email: "mailto:babasshuaibu14@gmail.com",
                id: 21
            },
            {
                image: image22,
                title: `Hon. Simon Isa`,
                details: `Song`,
                // subtitle: `${this.t({ ...messages.CreativeSoft })}`,
                author: 'Isa Yola',
                date: '20 May 2019',
                // avatar: avatar2,
                facebook: "https://facebook.com/simonisa",
                twitter: "https://twitter.com",
                email: "mailto:sisagarau@gmail.com",
                id: 22
            },
            {
                image: image23,
                title: `Hon. Umar G. Nashon`,
                details: `Nassarawo-Binyeri`,
                // subtitle: `${this.t({ ...messages.CreativeSoft })}`,
                author: 'Isa Yola',
                date: '20 May 2019',
                // avatar: avatar2,
                facebook: "https://facebook.com",
                twitter: "https://twitter.com",
                email: "mailto:umarnash2018@gmail.com",
                id: 23
            },
            {
                image: image24,
                title: `Rt. Hon. Aminu Iya Abbas `,
                details: `Uba/Gaya`,
                // subtitle: `${this.t({ ...messages.CreativeSoft })}`,
                author: 'Isa Yola',
                date: '20 May 2019',
                // avatar: avatar2,
                facebook: "https://facebook.com",
                twitter: "https://twitter.com",
                email: "mailto:iyaabbas@gmail.com",
                id: 24
            },
            {
                image: image25,
                title: `Hon. Pwamwakeno M. Makondo`,
                details: `Numan`,
                // subtitle: `${this.t({ ...messages.CreativeSoft })}`,
                author: 'Isa Yola',
                date: '20 May 2019',
                // avatar: avatar2,
                facebook: "https://facebook.com",
                twitter: "https://twitter.com",
                email: "mailto:pwamwakenomackondo@yahoo.com",
                id: 25
            },
            
        ]

        return (
            <Fragment>
                <Helmet>
                    <title>House Members</title>
                </Helmet>
                <Header
                    className="headerStyleWhite"
                    logo={logo}
                />
                <Breadcumb
                    links={links}
                    className="overlay breadcumbStyleTwo"
                    title="House Members"
                    bgImg={breadcumbImg}
                    stoketext="House"
                />
                <Grid className="blogGridArea">
                    <Grid container spacing={4} className="container">
                        {blogs.map((blog, i) => (
                            <Grid key={i} item lg={4} sm={6} xs={12}>
                                <SingleBlog
                                    image={blog.image}
                                    subtitle={blog.subtitle}
                                    id={blog.id}
                                    title={blog.title}
                                    author={blog.author}
                                    date={blog.date}
                                    details={blog.details}
                                    avatar={blog.avatar}
                                    facebook={blog.facebook}
                                    twitter={blog.twitter}
                                    email={blog.email}
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

export default injectIntl(HouseMembers)
