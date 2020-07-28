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
// import FlowUs from 'components/FlowUs/Loadable'
// import Cetagory from 'components/Cetagory/Loadable'
// import Feeds from 'components/Feeds/Loadable'
// import Tags from 'components/Tags/Loadable'
import './style.scss'

// images 
import logo from 'images/logo-white.png'
import logoBlack from 'images/logo-white.png'
// import banner from 'images/banner.jpg'
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
        name: 'News & Events Details',
        link: '/news-and-events'
    }
]



class NewsDetails extends Component {
    state = {
        blog: {},
        blogs: [
            {
                image: image1,
                title: `Yola North Lawmaker Constructs Primary Health Centre for Jambutu`,
                // details: `${this.t({ ...messages.details })}`,
                // subtitle: `${this.t({ ...messages.BusinessIT })}`,
                paragraph1: "The member representing Yola North constituency in Adamawa State House of Assembly, Hon. Hamidu Sajoh Lekki, has partnered the Save One Million Lives Initiative to provide primary healthcare services.",
                paragraph2: "Speaking to newsmen shortly after inspecting the ongoing construction of a clinic in Jambutu ward, Hon. Hamidu Sajoh Lekki said the project is part of the promises he made to the people of the area during the 2019 electioneering campaign.",
                paragraph3: "Lekki who is the Chairman House standing Committee on Health and Human Services, said he saw the need for intervention in the area and he decided to put it upon himself to provide quality healthcare not minding the harsh economic situation.",
                paragraph4: "He said that the aim of the project is to ensure that Jambutu Community and its environs, especially the rural ones, have quality healthcare at their door steps.",
                paragraph5: "The Lawmaker added that the motive behind his visit was to take a look at the infrastructure on ground at the ongoing construction of the clinic.",
                paragraph4: "He explained that the plot for the project was allocated by the Community and he facilitated the construction of the hospital from the Save One Million Lives Initiative to alleviate their suffering.",
                paragraph7: "He assured that he would do all he could to ensure that the facility is upgraded to ultra-modern standard for effective service delivery to the people.",
                paragraph8: "Hamidu Sajoh solicited prayers to enable him provide more dividends of democracy in the constituency, and commended the Save One Million Lives Initiative for providing the platform to deliver to the people of Yola North constituency and the state in general.",
                author: 'Ahmed',
                date: '26 Febraury 2020',
                // avatar: avatar1,
                id: 1
            },
            {
                image: image2,
                title: `2020 Budget presentation by His Excellency Gov. Ahmadu Fintiri`,
                // details: `${this.t({ ...messages.details })}`,
                // subtitle: `${this.t({ ...messages.BusinessIT })}`,
                paragraph1: "Gov. Ahmadu Fintiri of Adamawa State has presented a proposed budget of N183,36 billion for 2020 fiscal year the state House of Assembly Mr Fintiri, while making the presentation on Tuesday in Yola, said the estimates was primarily to finance Recurrent and Capital development programmes",
                paragraph2: "“The budget is articulated on the current National Economic indicators of 55 dollars per Barrel , 10.36 per cent inflation rate, N359 per one dollar exchange rate and 3.16 per cent Gross Domestic Product,’’ Mr Fintiri said. Explaining further, the governor noted that out of the total proposed budget estimate, the sum of N85.935 billion, which represents 47 per cent of the total budget had been earmarked for recurrent services of the state.",
                paragraph3: "He noted that the balance of N97.424 billion which equally represents 53 per cent was for capital development programmes. Mr Fintiri said that the total proposed revenue comprised the statutory allocation of N42.63 billion,VAT N18.10 billion, Excess crude oil two billion naira as well as Paris club refund of N7.02 billion.",
                paragraph4: "Others he said include support fund from the Federal Government’s N4 billion, Internally Generated Revenue N12.83 billion, capital receipts N94.42 billion, and the balance of N17.72 billion to come from other miscellaneous sources from the Federal Government. On performance of the 2019 budget of about N244 billion, he said it was not how much government got that mattered, but how best the available resources were utilised .",
                paragraph5: "“To make sure the 2020 budget is fully executed, we streamlined it to make it much reasonable and a departure from the past where you have the bogus budget of N244 billion and then achieved only 35 per cent. “We have brought down the budget to N183.36 billion which we feel would serve the desire of the people of the state better and to fully achieve 90 per cent implementation,’’ Mr Fintiri said. He said that education, health and human capital, agriculture, water supply and rural infrastructure and community development would be given top priority. Others he said were civil services, pension and gratuity among others.",
                paragraph6: "(NAN)",
                author: 'Ahmed',
                date: '28 November 2019',
                // avatar: avatar1,
                id: 2
            },
            {
                image: image3,
                title: `Adamawa Assembly sets agenda for its operation`,
                // details: `${this.t({ ...messages.details })}`,
                // subtitle: `${this.t({ ...messages.CreativeSoft })}`,
                paragraph1: "Adamawa State House of Assembly has formulated an agenda to serve as roadmap for its operations, Speaker of the House, Alhaji Aminu Iya-Abbas, said on Saturday. Iya-Abbas told newsmen in Yola that the agenda captured every sector in the state, particularly the critical ones.",
                paragraph2: "“We have formulated the agenda for the seventh assembly; it was reviewed and given to a committee in the House to be further reviewed and submit to the whole House.",
                paragraph3: "“In the agenda, we discussed every sector, particularly those critical sectors. “I hope by the time we are one year, people would see the manifestation of what we are planning to do,” Iya-Abbas said.",
                paragraph4: "The speaker said that the agenda would soon be made public to the people of the state, to be used in judging the performance of the House.",
                paragraph5: "While assuring the people of Adamawa of quality representation, the Speaker listed the implementation of local government autonomy, provision of befitting offices and facilities to all members, and addressing basic problems facing staff of the assembly as some of his achievements in 100 days.",
                paragraph6: "“We also have a lot of people-oriented bills before committees,” Iya-Abbas said.",
                paragraph7: "Source: todayng",
                author: 'Aliyu',
                date: '21 September 2019',
                // avatar: avatar2,
                id: 3
            },
            {
                image: image4,
                title: `Tribunal upholds Adamawa ex-speaker’s election`,
                // details: `${this.t({ ...messages.details })}`,
                // subtitle: `${this.t({ ...messages.Creativepark })}`,
                paragraph1: "The National and House of Assembly Election Petition Tribunal sitting in Yola has dismissed a case filed by Adamu Mustapha of the People’s Democratic Party (PDP) challenging the election of former Speaker Kabiru Mijinyawa of the All Progressives Congress (APC).",
                paragraph2: "The tribunal, headed by Justice Suleiman Akanbi, giving its judgment on the petition on Thursday, declared that the petition was dismissed because it lacked merit. Delivering judgment, the tribunal chairman said the petitioner also failed to prove the case beyond reasonable doubt.",
                paragraph3: "Justice Akanbi said the petitioner could not prove the case of over voting and noncompliance as well as irregularities during the March 2019 general election. The Counsel to the Respondent, Mr Tosin Alawode, said the judgment delivered was in order, as the petitioners failed to prove their case beyond reasonable doubt.",
                paragraph4: "He advised the petitioner to go to the appellate court if not satisfied with the judgment. Also, the APC Legal Adviser in Adamawa, Mr Shagnah Pwamaddi, expressed appreciation with the judgment delivered.",
                paragraph5: "He said: “This shows that the member representing Yola South Constituency, Kabiru Mijinyawa, was duly elected by his people to represent them at the state assembly. Also reacting to the judgment, Mr Sunday Wuriga, the Counsel to the petitioner, said that he would review and discuss the judgment with his client before they decide on what action to take.",
                paragraph6: "Mijinyawa is currently the member representing Yola South Constituency in the Adamawa State House of Assembly.",
                paragraph7: "Source: todayng",
                author: 'Abdulrasheed Bello ',
                date: '02 August 2019',
                // avatar: avatar3,
                id: 4
            },
            {
                image: image5,
                title: `SSS arrest suspected fake doctor accused of killing 15 people`,
                // details: `${this.t({ ...messages.details })}`,
                // subtitle: `${this.t({ ...messages.BusinessIT })}`,
                paragraph1: "Operatives of the State Security Services (SSS) have arrested a suspected fake 15 people in a cottage hospital in Adamawa State. Ibrahim Mustapha, the alleged fake doctor, was arrested last Thursday by the secret police following a tip-off and is being held in Yola, the state capital.",
                paragraph2: "Security sources told newsmen that Mr Mustapha was employed five years ago by the state’s Health Services Management Board and posted to Fufore Cottage Hospital. It was later discovered that he had applied for the job with alleged forged credentials. Speaking to reporters on Wednesday, the governor of the state, Ahmadu Fintiri, said the doctor, through unprofessional surgeries he conducted at cottage hospitals, caused the death of 15 people.",
                paragraph3: "Mr Mustapha had worked at the Mayo-Belwa Cottage Hospital until December 2017, before he was transferred to Fufore. A resident of Mayo-Belwa, Buba Muhammad, told newsmen that residents of the community had complained about the Mr Mustapha’s erratic conducts but state health authorities did nothing.",
                paragraph4: "“We even wrote a petition to the state Health Management Board and state House of Assembly against his crimes which includes carting away with some valuable property of this cottage hospital. But, unfortunately, our petitions were put under the carpets by both the Health Management Board and the last state House of Assembly members. “He was then transferred to Fufore cottage hospital and, to punish us, we people of Mayo-Belwa, no doctor was assigned nor deployed to us until last few months. We spent barely one and half years without a medical Doctor at Mayo cottage hospital,” he said.",
                paragraph5: "Another resident, Danladi Muhammad, accused Mr Mustapha of killing his father. “The same doctor operated my father on in August 2017 and unfortunately, he died the following morning.” He further accused Mr Mustapha of stealing items from the hospital. He said he did not believe that the state health officials were unaware that the doctor was not qualified.",
                paragraph6: "“We reported all and other complaints to Adamawa State House of Assembly. This is not a mistake. The agency knows. Let the government set up committee and invite us, we are ready to testify in any probe panel.” Officials of the Adamawa State Health Services Management Board did not respond to requests for comment.",
                paragraph7: "Source: todayng",
                author: 'Fateema Idris',
                date: '20 June 2019',
                // avatar: avatar1,
                id: 5
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
    t(msg, values) {
        return this.props.intl.formatMessage(msg, values);
    }



    render() {
        return (
            <Fragment>
                <Helmet>
                    <title>News Details</title>
                </Helmet>
                <Header
                    logo={logoBlack}
                />
                <Breadcumb
                    links={links}
                    className="overlay"
                    title="News Details"
                    bgImg={breadcumbImg}
                />
                <Grid className="blogDetailsArea">
                    <Grid container spacing={5} className="container">
                        <Grid item md={12} xs={10}>
                            <Grid className="blogDetailsWrap">
                                <div className="blogDetailsContent">
                                    <img src={this.state.blog.image} alt="" />
                                    <ul className="metaBlog">
                                        <li><i className="fa fa-user"></i> {this.state.blog.author}</li>
                                        <li><i className="fa fa-calendar"></i> {this.state.blog.date}</li>
                                    </ul>
                                    <h2>{this.state.blog.title}</h2>
                                    {/* <p>{this.state.blog.details}</p> */}
                                    <p>{this.state.blog.paragraph1}</p>
                                    <p>{this.state.blog.paragraph2}</p>
                                    <p>{this.state.blog.paragraph3}</p>
                                    {/* <blockquote>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        <h4>- Rosalina Pong</h4>
                                    </blockquote> */}
                                    <p>{this.state.blog.paragraph4}</p>
                                    <p>{this.state.blog.paragraph5}</p>
                                    <p>{this.state.blog.paragraph6}</p>
                                    <p>{this.state.blog.paragraph7}</p>
                                </div>
                                <div className="tagSocial">
                                    <div className="blogDetailsTag">
                                        <h3>Releted Tags</h3>
                                        <ul>
                                            <li><Button component="a" href="Javascript:void(0);">House</Button></li>
                                            <li><Button component="a" href="Javascript:void(0);">Locals</Button></li>
                                            <li><Button component="a" href="Javascript:void(0);">Schools</Button></li>
                                        </ul>
                                    </div>
                                    <div className="blogDetailsSocial">
                                        <h3>Social Share</h3>
                                        <ul>
                                            <li><a href="https://web.facebook.com/Adamawa-State-House-of-Assembly-108800890614840/?modal=admin_todo_tour"><i className="fa fa-facebook"></i></a></li>
                                            <li><a href="https://twitter.com/AdamawaAssembly"><i className="fa fa-twitter"></i></a></li>
                                            {/* <li><a href="Javascript:void(0);"><i className="fa fa-linkedin"></i></a></li> */}
                                            <li><a href="https://www.youtube.com/channel/UC_NcAKczWocIOCehN-TdaEQ?view_as=subscriber"><i className="fa fa-youtube"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </Grid>
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

export default compose(withConnect)(injectIntl(NewsDetails));
