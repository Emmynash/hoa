import React, { Fragment, Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { injectIntl } from 'react-intl';
import { compose } from 'redux';
import { Grid, Button, TextField, InputAdornment } from '@material-ui/core'
// import messages from 'components/HomeMain/Blog/messages';
// import Joi from 'joi-browser'
// import { toast } from 'react-toastify'
import './style.scss'

// components 
import Header from 'components/Header/Loadable'
import Breadcumb from 'components/Breadcumb/Loadable'
import Footer from 'components/Footer/Loadable'

// sidebar 
// import SearchSidebar from 'components/SearchSidebar/Loadable'
// import Instagram from 'components/Instagram/Loadable'
import FlowUs from 'components/FlowUs/Loadable'
// import Cetagory from 'components/Cetagory/Loadable'
import Feeds from 'components/Feeds/Loadable'
// import Tags from 'components/Tags/Loadable'
import './style.scss'

// images 
import logo from 'images/logo-white.png'
import logoBlack from 'images/logo-white.png'
import breadcumbImg from 'images/bg/house.jpg'
// import banner from 'images/banner.jpg'

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
// import bar from 'images/bar.png'
// import author from 'images/author.jpg'
// import comment1 from 'images/comment1.jpg'
// import comment2 from 'images/comment2.jpg'

// import commentIcon from 'images/icons/comment/icon1.png'
// import user from 'images/icons/comment/icon2.png'
// import email from 'images/icons/comment/icon3.png'
// import website from 'images/icons/comment/icon4.png'

const links = [
    {
        name: 'Home',
        link: '/'
    },
    {
        name: 'Members',
        link: '/house-members'
    },
    {
        name: 'Constituent Member'
    }
]


class HouseMember extends Component {
    state = {
        blog: {},
        blogs: [
            {
                image: image1,
                title: `Hon. Abdullahi Ahmadu`,
                details: `Leko/Koma`,
                address: `Adamawa State House of Assembly, Yola`,
                party: 'APC',
                dateOfBirth: '15 May 1980',
                phoneNo: '08162024533',
                LGA: 'Jadda',
                previousOfice: '',
                HonoursandAwards: '',
                primaryEducation: 'FSLC',
                secondaryEducation: 'SSCE',
                tertiaryEducation: '',
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
                address: `Barade one Ward`,
                party: 'APC',
                dateOfBirth: '02 May 1975',
                phoneNo: '08035094926',
                LGA: 'Toungo',
                previousOfice: 'Executive Chairman',
                HonoursandAwards: "",
                primaryEducation: '',
                secondaryEducation: '',
                tertiaryEducation: 'Diploma in Common Law',
                // avatar: avatar1,
                facebook: "",
                twitter: "https://twitter.com",
                email: "mailto:aunyako73@gmail.com",
                id: 2
            },
            {
                image: image3,
                title: `Hon. Abubakar Isa`,
                details: `Shelleng`,
                address: `Adamawa State House of Assembly`,
                party: 'APC',
                dateOfBirth: '17 May 1975',
                phoneNo: '08033909389',
                LGA: 'Shelleng',
                previousOfice: 'Assistance Chief Admin. Officer Federal Civil Service of Nigeria, and Special Adviser to the Governor on Economic matters',
                HonoursandAwards: "United Nation High Commission for Refugees (Award for Humanitarian Service)",
                primaryEducation: 'FSLC',
                secondaryEducation: 'SSCE',
                tertiaryEducation: 'B.Tech, MPA, MSc',
                comment: "Determined to impact positively on the live of the people of my constituency in particular and Adamawa citizens in general  through meaningful and affective representation.",
                // avatar: avatar1,
                facebook: "https://facebook.com/Mai Jama'a Abubakar",
                twitter: "https://twitter.com/aimshelleng",
                email: "mailto:abubakarisa933@gmail.com",
                id: 3
            },
            {
                image: image4,
                title: `Hon. Abdullahi Umaru Yapak`,
                details: `Verre`,
                address: `Adamawa State House of Assembly, Yola`,
                party: 'APC',
                dateOfBirth: '12 December 1972',
                phoneNo: '08034954210',
                LGA: 'Fufore',
                previousOfice: 'Chief Accountant HEAD of Operation Tars Nig. LTD',
                HonoursandAwards: 'Fellow Charterd Int. of Economics, Fellow Ins. of Bus Dip & Financial Management, Ambassador of Peace VN Polac',
                primaryEducation: 'FSLC',
                secondaryEducation: 'SSCE',
                tertiaryEducation: 'IJMB, Bsc. Economics',
                // avatar: avatar1,
                facebook: "",
                twitter: "https://twitter.com",
                email: "mailto:abdulyapak@gmail.com",
                id: 4
            },
            {
                image: image5,
                title: `Hon. Adwawa W. Dongolok`,
                details: `Guyuk`,
                address: `Adamawa State House of Assembly`,
                party: 'PDP',
                dateOfBirth: '04 August 1982',
                phoneNo: '08135878700',
                LGA: 'Guyuk',
                previousOfice: 'Programme Officer II National Orientation Agency, NOA',
                HonoursandAwards: 'NYSC Award',
                primaryEducation: 'Savana Staff Primary School, Numan,',
                secondaryEducation: ' Federal Science College, Sokoto State',
                tertiaryEducation: 'University of Jos',
                // avatar: avatar1,
                facebook: "https://facebook.com/adwawadongolok",
                twitter: "https://twitter.com",
                email: "mailto:swildongs@yahoo.com",
                id: 5
            },
            {
                image: image6,
                title: `Hon. Alhassan Hammanjoda`,
                details: `Ganye`,
                address: `Adamawa State House of Assembly, Yola`,
                party: 'APC',
                dateOfBirth: '10 October 1982',
                phoneNo: '08035224449',
                LGA: 'Ganye',
                previousOfice: 'Former Member 2015',
                HonoursandAwards: '',
                primaryEducation: 'FSLC',
                secondaryEducation: 'SSCE',
                tertiaryEducation: 'Diploma',
                // avatar: avatar3,
                facebook: "https://facebook.com",
                twitter: "https://twitter.com",
                email: "mailto:alhassangeon@gmail.com",
                id: 6
            },
            {
                image: image7,
                title: `Hon. Bathiya Wisely`,
                details: `Hong`,
                address: `Adamawa State House of Assembly`,
                party: 'APC',
                dateOfBirth: '07 June 1969',
                phoneNo: '07065785533',
                LGA: 'Hong',
                previousOfice: 'Former Speaker Adamawa State House of Assembly',
                HonoursandAwards: '',
                primaryEducation: 'FSLC',
                secondaryEducation: 'SSCE',
                tertiaryEducation: '',
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
                address: `Lamurde Local Government`,
                party: 'PDP',
                dateOfBirth: '16 April 1969',
                phoneNo: '08069136871',
                LGA: 'Lamurde',
                previousOfice: 'Party Chairman Lamurde LGA',
                HonoursandAwards: '',
                primaryEducation: '',
                secondaryEducation: '',
                tertiaryEducation: '',
                // avatar: avatar1,
                facebook: "",
                twitter: "https://twitter.com",
                email: "mailto:sbaunapm@gmail.com",
                id: 8
            },
            {
                image: image9,
                title: `Hon. Hamidu A.  Sajo`,
                details: `Jimeta`,
                address: `Adamawa State House of Assembly Complex, Yola`,
                party: 'PDP',
                dateOfBirth: '15 December 1974',
                phoneNo: '08035094926',
                LGA: 'Yola North',
                previousOfice: 'PDP Youth Leader',
                HonoursandAwards: '',
                primaryEducation: 'FSLC',
                secondaryEducation: 'SSCE',
                tertiaryEducation: '',
                // avatar: avatar1,
                facebook: "https://facebook.com",
                twitter: "https://twitter.com",
                email: "mailto:aunyako73@gmail.com",
                id: 9
            },
            {
                image: image10,
                title: `Hon. Musa Bororo`,
                details: `Mubi South`,
                address: `Nasarawo Ward, Mubi South`,
                party: 'APC',
                dateOfBirth: '15 February 1970',
                phoneNo: '08036572172',
                LGA: 'Mubi South',
                previousOfice: 'Senior Special Adviser',
                HonoursandAwards: '',
                primaryEducation: '',
                secondaryEducation: '',
                tertiaryEducation: '',
                // avatar: avatar1,
                facebook: "",
                twitter: "https://twitter.com",
                email: "mailto:musabororo94@gmail.com",
                id: 10
            },
            {
                image: image11,
                title: `Hon. Haruna Jilantikiri`,
                details: `Madagali`,
                address: `Adamawa State House of Assembly, Yola`,
                party: 'PDP',
                dateOfBirth: '13 November 1972',
                phoneNo: '08138775055',
                LGA: 'Madagali',
                previousOfice: 'Accountant',
                HonoursandAwards: '',
                primaryEducation: 'FSLC 1986',
                secondaryEducation: 'SSCE 1991',
                tertiaryEducation: 'Bsc. 2005',
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
                address: `Wakili BUBA B. Mayo-Belwa`,
                party: 'ADC',
                dateOfBirth: '04 March 1980',
                phoneNo: '08038411197',
                LGA: 'Mayo-Belwa',
                previousOfice: 'PA to the Former Chairman PDP Adamawa State. Alh. umaru Mijiyawa Kugama',
                HonoursandAwards: "Best Award PA's forum PDP Chairman's of Nigeria 2007-2013",
                primaryEducation: '',
                secondaryEducation: '',
                tertiaryEducation: 'Diploma in Information Technology',
                // avatar: avatar1,
                facebook: "https://facebook.com/ibrahimitaliay",
                twitter: "https://twitter.com",
                email: "mailto:ibrahimmusaitaliya@gmail.com",
                id: 12
            },
            {
                image: image13,
                title: `Hon. Isa Yahya`,
                details: `Maiha`,
                address: `Adamawa State House of Assembly, Yola`,
                party: 'APC',
                dateOfBirth: '15 September 1965',
                phoneNo: '08032506621',
                LGA: 'Maiha',
                previousOfice: 'Three time Member ',
                HonoursandAwards: '',
                primaryEducation: 'FSLC',
                secondaryEducation: 'SSCE',
                tertiaryEducation: 'Diploma',
                facebook: "https://facebook.com/isayahyasorau",
                twitter: "https://twitter.com",
                email: "mailto:hassanisayahya@gmail.com",
                id: 13
            },
            {
                image: image14,
                title: `Hon. Japhet Kefas`,
                details: `Gombi`,
                address: `Gombi LGA Dingai Village, Lala District`,
                party: 'PDP',
                dateOfBirth: '13 June 1965',
                phoneNo: '08035696906',
                LGA: 'Gombi',
                previousOfice: 'Council Chairman',
                HonoursandAwards: 'Press Award',
                primaryEducation: '',
                secondaryEducation: '',
                tertiaryEducation: 'Post Graduate Diploma',
                // avatar: avatar1,
                facebook: "https://facebook.com",
                twitter: "https://twitter.com",
                email: "mailto:japhetkefas1@gmail.com",
                id: 14
            },
            {
                image: image15,
                title: `Hon. Joseph A. Kwada`,
                details: `Michika`,
                address: `Adamawa State House of Assembly, Yola`,
                party: 'PDP',
                dateOfBirth: '27 September 1967',
                phoneNo: '07066390444',
                LGA: 'Michika',
                previousOfice: 'Chairman of Michika Local government Area of Adamawa State',
                HonoursandAwards: '',
                primaryEducation: 'FSLC',
                secondaryEducation: 'SSCE',
                tertiaryEducation: '',
                // avatar: avatar1,
                facebook: "https://facebook.com",
                twitter: "https://twitter.com",
                email: "mailto:honisayahya@yahoo.com",
                id: 15
            },
            {
                image: image16,
                title: `Hon. Kate Mamuno Raymond`,
                details: `Demsa`,
                address: `Adamawa State House of Assembly, Yola`,
                party: 'PDP',
                dateOfBirth: '16 November 1964',
                phoneNo: '08034365509',
                LGA: 'Demsa',
                previousOfice: 'Director Finance and Supply, Adamawa State',
                HonoursandAwards: '',
                primaryEducation: 'FSLC',
                secondaryEducation: 'SSCE',
                tertiaryEducation: 'Bsc',
                // avatar: avatar1,
                facebook: "https://facebook.com",
                twitter: "https://twitter.com",
                email: "mailto:kmamuno1663@gmail.com",
                id: 16
            },
            {
                image: image17,
                title: `Hon. Mohammed Mutawalli`,
                details: `Girei`,
                address: `Adamawa State House of Assembly Complex, Yola`,
                party: 'APC',
                dateOfBirth: '10 Febraury 1969',
                phoneNo: '08064398681',
                LGA: 'Girei',
                previousOfice: 'Hon. Member',
                HonoursandAwards: '',
                primaryEducation: 'FSLC',
                secondaryEducation: 'SSCE',
                tertiaryEducation: '',
                // avatar: avatar1,
                facebook: "https://facebook.com",
                twitter: "https://twitter.com",
                email: "mutawalliwwurodole@gmail.com",
                id: 17
            },
            {
                image: image18,
                title: `Hon. Hammantukur Yettisuri`,
                details: `Jada`,
                address: `Damilu Jimeta Yola`,
                party: 'PDP',
                dateOfBirth: '04 January 1965',
                phoneNo: '080829101851',
                LGA: 'Jada',
                previousOfice: 'Ward Councilor',
                HonoursandAwards: '',
                primaryEducation: 'Gangalda Primary School 1977-1983',
                secondaryEducation: 'Government Secondary School Sugu 1983-1988,',
                tertiaryEducation: 'College for Legal Studies, Yola 1990-1993',
                // avatar: avatar1,
                facebook: "https://facebook.com",
                twitter: "https://twitter.com",
                email: "mailto:hammantukuryettisuri@gmail.com",
                id: 18
            },
            {
                image: image19,
                title: `Rt. Hon. Kabiru Mijinyawa`,
                details: `Yola South`,
                address: `Adamawa State House of Assembly`,
                party: 'APC',
                dateOfBirth: '04 December 1969',
                phoneNo: '08065695550',
                LGA: 'Yola South',
                previousOfice: 'Former Speaker Adamawa State House of Assembly',
                HonoursandAwards: '',
                primaryEducation: 'Woro Hausa Primary School, Yola',
                secondaryEducation: '',
                tertiaryEducation: 'Federal College of Education',
                // avatar: avatar1,
                facebook: "https://facebook.com",
                twitter: "https://twitter.com",
                email: "mailto:kabirumijinyawa@gmail.com",
                id: 19
            },
            {
                image: image20,
                title: `Hon. Shuaibu Babas`,
                details: `Fufore/Gurin`,
                address: `Adamawa State House of Assembly`,
                party: 'APC',
                dateOfBirth: '01 April 1972',
                phoneNo: '08034507336',
                LGA: 'Fufore',
                previousOfice: 'ASS. C.E.O CRC Motor',
                HonoursandAwards: 'NYSC Award',
                primaryEducation: '',
                secondaryEducation: '',
                tertiaryEducation: '',
                // avatar: avatar1,
                facebook: "https://facebook.com",
                twitter: "https://twitter.com",
                email: "mailto:smusa@gmail.com",
                id: 20
            },
            {
                image: image21,
                title: `Hon. Shuaibu Musa`,
                details: `Mubi North`,
                address: `Adamawa State House of Assembly Complex, Yola`,
                party: 'APC',
                dateOfBirth: '16 March 1967',
                phoneNo: '08037846660',
                LGA: 'Mubi North',
                previousOfice: 'Administrator Development Area Malabu',
                HonoursandAwards: '',
                primaryEducation: 'FSLC',
                secondaryEducation: 'SSCE',
                tertiaryEducation: 'B.Tech',
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
                address: `Adamawa State House of Assembly, Yola`,
                party: 'PDP',
                dateOfBirth: '28 February 1971',
                phoneNo: '08064098504',
                LGA: 'Song',
                previousOfice: 'Elected Member 2011-2015',
                HonoursandAwards: '',
                primaryEducation: 'FSLC',
                secondaryEducation: 'SSCE',
                tertiaryEducation: 'Coollege',
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
                address: `Adamawa State House of Assembly`,
                party: 'PDP',
                dateOfBirth: '10 April 1976',
                phoneNo: '07038901330',
                LGA: 'Mayo-Belwa',
                previousOfice: '',
                HonoursandAwards: '',
                primaryEducation: 'Primary School Certificate',
                secondaryEducation: 'SSCE',
                tertiaryEducation: 'Diploma in Computer Science',
                // avatar: avatar1,
                facebook: "https://facebook.com",
                twitter: "https://twitter.com",
                email: "mailto:umarnash2018@gmail.com",
                id: 23
            },
            {
                image: image24,
                title: `Rt. Hon. Aminu Iya Abbas `,
                details: `Uba/Gaya`,
                address: `Adamawa State House of Assembly, Yola`,
                party: 'PDP',
                dateOfBirth: '24 June 1973',
                phoneNo: '08033210226',
                LGA: 'Hong',
                previousOfice: 'Honorable Member, Adamawa State House of Assembly 2011 to 2015',
                HonoursandAwards: 'Fellow Chartered Accountants (FCA) 2018, Associate of Chartered Accountants (ACA) 2005, Associate of Chartered Taxation Institute (ACTI) 2007, Certified Fraud Examiner (CFE) 2008',
                primaryEducation: 'FSLC',
                secondaryEducation: 'SSCE',
                tertiaryEducation: 'National Diploma, B.Sc. Accounting, Master’s Degree in Treasury Management',
                // avatar: avatar1,
                facebook: "",
                twitter: "https://twitter.com",
                email: "mailto:iyaabbas@gmail.com",
                id: 24
            },
            {
                image: image25,
                title: `Hon. Pwamwakeno M. Makondo`,
                details: `Numan`,
                address: `Numan Local Government`,
                party: 'PDP',
                dateOfBirth: '19 November 1971',
                phoneNo: '08039099880',
                LGA: 'Numan',
                previousOfice: 'Adamawa State Board of Internal Revenue',
                HonoursandAwards: '',
                primaryEducation: 'Sandada Primary School',
                secondaryEducation: 'GMMC Yola',
                tertiaryEducation: 'Mautech University',
                // avatar: avatar1,
                facebook: "",
                twitter: "https://twitter.com",
                email: "mailto:pwamwakenomackondo@yahoo.com",
                id: 25
            },
        ],
        name: '',
        email: '',
        website: '',
        comment: '',
        error: {}
    }


    componentDidMount() {
        const id = parseInt(this.props.match.params.id);
        let blog = this.state.blogs.filter(b => b.id === id);
        if (blog.length >= 0) {
            this.setState({
                blog: blog[0]
            })
        }
    }
    
    render() {
        return (
            <Fragment>
                <Helmet>
                    <title>House Member</title>
                </Helmet>
                <Header
                    logo={logoBlack}
                />
                <Breadcumb
                    links={links}
                    className="overlay house"
                    title="House Member"
                    bgImg={breadcumbImg}
                />
                <Grid className="blogDetailsArea">
                    <Grid container spacing={4} className="container">
                        <Grid item md={8} xs={12}>
                            <Grid className="blogDetailsWrap">
                                <div className="blogDetailsContent">
                                    <img src={this.state.blog.image} alt="" />
                                    <ul className="metaBlog">
                                        <li><a href={this.state.blog.facebook}><i className="fa fa-facebook"></i></a></li>
                                        <li><a href={this.state.blog.twitter}><i className="fa fa-twitter"></i></a></li>
                                        <li><a href={this.state.blog.email}><i className="fa fa-envelope"></i></a></li>
                                    </ul>
                                    <h2>{this.state.blog.title}</h2>
                                    <h3>{this.state.blog.details}</h3>

                                    <br />
                                    <br />

                                    <h5>About</h5>
                                    <p>
                                        <span style={{fontWeight: "bold"}}>Date of Birth :</span>  <span>{this.state.blog.dateOfBirth}</span>   <br />
                                        <span style={{fontWeight: "bold"}}>Local Government Area :</span> <span>{this.state.blog.LGA}</span>   <br />
                                        <span style={{fontWeight: "bold"}}>Party :</span> <span>{this.state.blog.party}</span>   <br />
                                    </p>  <br />
                                   
                                    <h5>Previous Offices</h5>
                                    <p>
                                        <span style={{fontWeight: "bold"}}>{this.state.blog.previousOfice}</span> 
                                    </p> <br />

                                    <h5>Educational History</h5>
                                    <p>
                                        <span style={{fontWeight: "bold"}}>Primary Education :</span>  <span>{this.state.blog.primaryEducation}</span>   <br />
                                        <span style={{fontWeight: "bold"}}>Post Primary Education :</span> <span>{this.state.blog.secondaryEducation}</span>   <br />
                                        <span style={{fontWeight: "bold"}}>Tertiary Education :</span> <span>{this.state.blog.tertiaryEducation}</span>   <br />
                                    </p> <br />

                                    <h5>Awards & Honors</h5>
                                    <p>
                                        <span style={{fontWeight: "bold"}}>{this.state.blog.HonoursandAwards}</span>
                                    </p> <br />

                                    <h5>Contact Information </h5>
                                    <p>
                                        <span style={{fontWeight: "bold"}}>Address :</span>  <span>{this.state.blog.address}</span>   <br />
                                        {/* <span style={{fontWeight: "bold"}}>Phone Number :</span> <span>{this.state.blog.phoneNo}</span>   <br /> */}
                                    </p> <br />
                                    <h5>Comment</h5>
                                    <p>{this.state.blog.comment}</p>
                                </div>
                            </Grid>
                        </Grid>
                        <Grid item md={4} xs={12}>
                            <aside className="blogSidebar">
                                <FlowUs />
                                <Feeds />
                            </aside>
                        </Grid>
                    </Grid>
                </Grid>

                <Footer
                    logo={logo}
                />
            </Fragment>
        )
    }

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

export default compose(withConnect)(injectIntl(HouseMember));
