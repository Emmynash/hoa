import React, { Fragment, Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { injectIntl } from 'react-intl';
import { compose } from 'redux';
import { Grid, Button, TextField, InputAdornment } from '@material-ui/core'
// import Joi from 'joi-browser'
// import { toast } from 'react-toastify'
import 'containers/Pages/HouseMembers/style.scss'

// components 
import Header from 'components/Header/Loadable'
import Breadcumb from 'components/Breadcumb/Loadable'
import Footer from 'components/Footer/Loadable'
// import SinglePortfolio from 'components/SinglePortfolio/Loadable'
// import StartupVideo from 'components/HomeStartup/Video/Loadable'
import './style.scss'

// images 
import logo from 'images/logo-white.png'
import logoBlack from 'images/logo-white.png'
import breadcumbImg from 'images/bg/directorate.jpg'

// images 
import image1 from "images/Directors/Acting Clerk.jpg";
import image2 from "images/Directors/procurment_Director.jpg"
import image3 from "images/Directors/Information_and_Publication.jpg"
import image4 from "images/Directors/Malam Musa Ahmad Gaude.jpg"
import image5 from "images/Directors/Director_Legal.jpg"
import image6 from "images/Directors/Finance_Director.jpg"
import image7 from "images/Directors/Director-Library.jpg"
import image8 from "images/Directors/Director_personnel.jpg"

const links = [
    {
        name: 'Home',
        link: '/'
    },
    {
        name: 'House-Directorate'
    }
]




class HouseDirectorates extends Component {
    state = {
        portfolio: {},
        
        name: '',
        email: '',
        website: '',
        comment: '',
        error: {}
    }



    
    t(msg, values) {
        return this.props.intl.formatMessage(msg, values);
    }



    render() {
        return (
            <Fragment>
                <Helmet>
                    <title>House Directorate</title>
                </Helmet>
                <Header
                    logo={logoBlack}
                />
                <Breadcumb
                    links={links}
                    className="overlay"
                    title="House Directorates"
                    bgImg={breadcumbImg}
                />
                <Grid className="blogDetailsArea">
                    <Grid container spacing={4} className="container">
                           
                            <Grid className="commentsWrap">
                                <h3 className="blogDetailsSub blogDetailsSubBorder">Directorates</h3>
                                <ul className="commentItems">

                                    {/* Clerk */}
                                    <li className="commentItem">
                                            <div className="commentContent">
                                                <Grid className="blogImg">
                                                    <img src={image4} alt="" />
                                                </Grid>
                                                <h4>Clerk of the House</h4>
                                                <ul className="blogMeta">
                                                    <li><i className="fa fa-user"></i>Malam Musa Ahmad Gaude</li>
                                                </ul>
                                                <ul>
                                                    <li><span style={{textTransform: "lowercase"}}><i className="fa fa-envelope"></i></span></li> 
                                                </ul>
                                                <h5>Office Description</h5>
                                                <p  style={{width: "80%"}}><ol>
                                                    <li>
                                                        The accounting officer of the Assembly.
                                                    </li>
                                                    <li>
                                                        Chief Administrator of House of Assembly.
                                                    </li>
                                                    <li>
                                                        Head of management committee of the Assembly.
                                                    </li>
                                                    <li>
                                                        Coordinate day to day activities of the Assembly.
                                                    </li>
                                                    <li>
                                                        Directs and supervises the activities of the Directorates in the Assembly.
                                                    </li>
                                                    <li>
                                                        Head of secretary selection committee.
                                                    </li>
                                                    <li>
                                                        Advices the house leadership and honorable members on legislative practices and procedures.
                                                    </li>
                                                </ol></p>
                                            </div>
                                        </li>

                                    {/* Deputy Clerk */}
                                        <li className="commentItem">
                                            <div className="commentContent">
                                                <Grid className="blogImg">
                                                    <img src={image1} alt="" />
                                                </Grid>
                                                <h4>Deputy Clerk/Director Legislative</h4>
                                                <ul className="blogMeta">
                                                    <li><i className="fa fa-user"></i>Umar Usman Hamid </li>
                                                </ul>
                                                <ul>
                                                    <li><span style={{textTransform: "lowercase"}}><i className="fa fa-envelope">umarusmanhamid1967@gmail.com</i></span></li> 
                                                </ul>
                                                <h5>Office Description</h5>
                                                <p  style={{width: "80%"}}><ol>
                                                    <li>
                                                         Assisting the clerk, formulating, executing and reviewing the administrating policies of the legislative.
                                                    </li>
                                                    <li>
                                                          Advising the chief Executives on legislative procedures and practice.
                                                    </li>
                                                    <li>
                                                           Assisting the clerk in implementation of the decisions of the House.
                                                    </li>
                                                    <li>
                                                          Supervising the compilation of the ruling from the Chairs, the Votes and proceedings, the Order Book and the House Journals.
                                                    </li>
                                                </ol></p>
                                            </div>
                                        </li>
                                        <br />
                                        <li className="commentItem">
                                            <div className="commentContent">
                                                <Grid className="blogImg">
                                                    <img src={image2} alt="" />
                                                </Grid>
                                                <h4>Director Procurement Department</h4>
                                                <ul className="blogMeta">
                                                    <li><i className="fa fa-user"></i>Sarah Sunday</li>
                                                </ul>
                                                <ul>
                                                    <li><span style={{textTransform: "lowercase"}}><i className="fa fa-envelope">sarahsunday1767@gmail.com</i></span></li> 
                                                </ul>
                                                <h5>Office Description</h5>
                                                <p style={{width: "80%"}}>
                                                    The department implements procurement policies and procedures for Adamawa State House of Assembly in line with its overall objectives and strategies. We ensure the aggregate and categorization of all procurement requests from all the Directorates, prepare and updates annual procurement plan for Adamawa State House of Assembly using the Annual budget, prepare the advertisement and publications to solicit for bids in line with the existing legislation, ensures that suppliers, contractors and consultants are paid on time, participate in the inspection of suppliers/contractors sites, maintain files and electronic records of procurement, and ensure transparency in the disposal of property.
                                                </p>
                                            </div>
                                        </li>
                                        <br />
                                        <li className="commentItem">
                                            <div className="commentContent">
                                                <Grid className="blogImg">
                                                    <img src={image3} alt="" />
                                                </Grid>
                                                <h4>Information and Publication</h4>
                                                <ul className="blogMeta">
                                                    <li><i className="fa fa-user"></i>Zailani Umar Nuhu</li>
                                                </ul>
                                                <ul>
                                                    <li><span style={{textTransform: "lowercase"}}><i className="fa fa-envelope">modibbozailani@gmail.com</i></span></li> 
                                                </ul>
                                                <h5>Office Description</h5>
                                                <p style={{width: "80%"}}>
                                                    In Information and Publication, we are into giving information to the public on the achievements of the House of Assembly. We are also into public relations, that is projecting the image of the House in good light in line with what is happening on the floor of the House.
                                                </p>
                                            </div>
                                        </li>
                                        <br />
                                        <li className="commentItem">
                                            <div className="commentContent">
                                                <Grid className="blogImg">
                                                    <img src={image8} alt="" />
                                                </Grid>
                                                <h4> Director Personnel Management </h4>
                                                <ul className="blogMeta">
                                                    <li><i className="fa fa-user"></i>Umara Kida Banu</li>
                                                </ul>
                                                <ul>
                                                    <li><span style={{textTransform: "lowercase"}}><i className="fa fa-envelope">umarabanu2@gmail.com</i></span></li> 
                                                </ul>
                                                <h5>Office Description</h5>
                                                <p style={{width: "80%"}}>
                                                    Director Personnel Management.
                                                </p>
                                            </div>
                                        </li>
                                        <br />
                                        <br />
                                        <li className="commentItem">
                                            <div className="commentContent">
                                                <Grid className="blogImg">
                                                    <img src={image5} alt="" />
                                                </Grid>
                                                <h4>Legal Service Department</h4>
                                                <ul className="blogMeta">
                                                    <li><i className="fa fa-user"></i>Ashiyati Ananze</li>
                                                </ul>
                                                <ul>
                                                    <li><span style={{textTransform: "lowercase"}}><i className="fa fa-envelope">ashiyatihanze@gmail.com</i></span></li> 
                                                </ul>
                                                <h5>Office Description</h5>
                                                <p style={{width: "80%"}}>
                                                    Providing Legal Service to Honourable House and Members.
                                                </p>
                                            </div>
                                        </li>
                                        <br />
                                        <br />
                                        <li className="commentItem">
                                            <div className="commentContent">
                                                <Grid className="blogImg">
                                                    <img src={image6} alt="" />
                                                </Grid>
                                                <h4>Director of Finance</h4>
                                                <ul className="blogMeta">
                                                    <li><i className="fa fa-user"></i>Abdulmalik Ahmed</li>
                                                </ul>
                                                <ul>
                                                    <li><span style={{textTransform: "lowercase"}}><i className="fa fa-envelope">malikahmed2008@hotmail.com</i></span></li> 
                                                </ul>
                                                <h5>Office Description</h5>
                                                <p style={{width: "80%"}}>
                                                    Department of Finance is responsible for all financial transactions of the Adamawa State House of Assembly. The department is headed by a Director and ably assisted by Assistant Directors and other Accounting staff.
                                                </p>
                                            </div>
                                        </li>
                                        <br />
                                        <br />
                                        <li className="commentItem">
                                            <div className="commentContent">
                                                <Grid className="blogImg">
                                                    <img src={image7} alt="" />
                                                </Grid>
                                                <h4>Director Library and Computer Services</h4>
                                                <ul className="blogMeta">
                                                    <li><i className="fa fa-user"></i>Ibrahim Tola Usman</li>
                                                </ul>
                                                <ul>
                                                    <li><span style={{textTransform: "lowercase"}}><i className="fa fa-envelope"></i></span></li> 
                                                </ul>
                                                <h5>Office Description</h5>
                                                <p style={{width: "80%"}}>
                                                    The Library Department is in charge with the responsibility of providing technical and support services to Adamawa State House of Assembly legislators and staff.
                                                </p>
                                            </div>
                                        </li>
                                    {/* ))} */}

                                </ul>
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

export default compose(withConnect)(injectIntl(HouseDirectorates));
