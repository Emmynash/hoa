import React, { useState, Fragment } from 'react';
import { Grid, Tab, Tabs, Button } from '@material-ui/core'
import { Helmet } from 'react-helmet';
import Header from 'components/Header/Loadable'
import Breadcumb from 'components/Breadcumb/Loadable'
import Footer from 'components/Footer/Loadable'
import './style.scss'


// images 
import logo from 'images/logo-white.png'
// import logoBlack from 'images/logo.png'
import breadcumbImg from 'images/bg/speaker_bg.jpg'

// images 
import about from 'images/about/speaker_1.jpg'

const links = [
    {
        name: 'Home',
        link: '/'
    },
    {
        name: 'Office of The Speaker'
    }
]

const SpeakerOffice = () => {
    const [value, setValue] = useState(0);
    const [loadItems, setLoadItems] = useState(12)

 

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <Fragment>
            <Helmet>
                <title>Speaker</title>
            </Helmet>
            <Header
                className="headerStyleWhite"
                logo={logo}
            />
            <Breadcumb
                links={links}
                className="overlay breadcumbStyleTwo"
                title="The Speaker"
                bgImg={breadcumbImg}
                stoketext="Head"
            />
            <Grid className="aboutPageArea">
                <Grid
                    alignItems="center"
                    className="container"
                    spacing={4}
                    container>
                    <Grid item md={5} xs={12}>
                        <Grid style={{ background: `url(${about}) no-repeat center center / cover` }} className="aboutPageImg overlay">
                            <h2>Inside</h2>
                            <span>The 7th Assembly</span>
                        </Grid>
                    </Grid>
                    <Grid item md={7} xs={12}>
                        <Grid className="aboutPageContent">
                            <span className="subText">The Speaker</span>
                            <h2>The Office Overview</h2>
                            <p>The Speaker of the Adamawa State House of Assembly is the political head of the Adamawa State House of Assembly. Elected by the Members of the Assembly, the speaker's statutory duty is to preside over the sitting and deliberations of the Assembly. The Speaker also represents the voters of his constituency. Since inauguration of the state house of assembly, there have been 7 legislative assemblies with 7 representatives holding the office of Speaker.</p>
                            <h3>Head</h3>
                        </Grid>
                    </Grid>
                </Grid>
                <br />
                <br />
                <Grid
                    alignItems="center"
                    className="container"
                    spacing={4}
                    container>
                    <Grid item md={12} xs={12}>
                        <Grid className="aboutPageContent">
                            <span className="subText">More on the Speaker</span>
                            <h4>Key responsiblities & Duties of The Speaker</h4>
                            <p>The Speaker is best known as the person who keeps order and calls members to speak during proceedings. The Speaker presides over the affairs of the House and guides the proceedings impartially.</p>
                            <p>
                                The Speaker calls Members in turn to give their opinion on an issue. Members signal that they want to speak by standing up from their seats or they can notify the Speaker in advance by writing. The Speaker has full authority to make sure Members follow the rules of the House during proceedings. This can include:
                                <ol>
                                    <li>Directing a Member to withdraw remarks if, for example, they use abusive language</li>
                                    <li>Suspending the sitting of the House due to serious disorder</li>
                                    <li>Suspending Members who are deliberately disobedient</li>
                                </ol>
                                Aside from duties relating to presiding over the House, the Speaker also performs administrative and procedural functions, and remains a constituency Member of the Adamawa State House of Assembly.
                            </p>
                            <h3>Speaker</h3>
                        </Grid>
                    </Grid>
                    <br />
                    <Grid>
                        <Grid className="aboutPageContent">
                            <h4>SPEAKERS  &  LEGISLATIVE YEAR</h4>
                            <br />
                            <p>
                                <span style={{color: "#50c76f"}}>HON. PAUL WAMPANA - 1979 - 1982</span> <br />
                                <span style={{fontWeight: "bold"}}>Constituency :</span>  <span>Mubi  (1ST LEGISLATIVE ASSEMBLY)</span>   <br />
                                <span style={{fontWeight: "bold"}}><i className="fa fa-calendar"></i></span> <span> 02/10/1979 - 05/10/1982</span>   <br />
                            </p>
                            <p>
                                <span style={{color: "#50c76f"}}>HON. GODWIN PULDU - 1982 - 1983</span> <br />
                                <span style={{fontWeight: "bold"}}>Constituency :</span>  <span>Guyuk</span>   <br />
                                <span style={{fontWeight: "bold"}}><i className="fa fa-calendar"></i></span> <span> 06/10/1982 - 10/01/1983</span>   <br />
                            </p>
                            <p>
                                <span style={{color: "#50c76f"}}>HON. MAIGARI AHMADU - 1983 - 1983</span> <br />
                                <span style={{fontWeight: "bold"}}>Constituency :</span>  <span>Wukari</span>   <br />
                                <span style={{fontWeight: "bold"}}><i className="fa fa-calendar"></i></span> <span> 1/10/1983 - 1/12/1983</span>   <br />
                            </p>
                            <p>
                                <span style={{color: "#50c76f"}}>HON. AHMADU ALI GULAK 1992 - 1993</span> <br />
                                <span style={{fontWeight: "bold"}}>Constituency :</span>  <span>Madagali</span>   <br />
                                <span style={{fontWeight: "bold"}}><i className="fa fa-calendar"></i></span> <span> 01/01/1992 - 17/05/1993</span>   <br />
                            </p>
                            <p>
                                <span style={{color: "#50c76f"}}>HON. MAMMAN MALHONA - 1993 - 1993</span> <br />
                                <span style={{fontWeight: "bold"}}>Constituency :</span>  <span>Gombi</span>   <br />
                                <span style={{fontWeight: "bold"}}><i className="fa fa-calendar"></i></span> <span> 17/05/1993 - 17/11/1993</span>   <br />
                            </p>
                            <p>
                                <span style={{color: "#50c76f"}}>HON. BAHARU J. SHEHU- 1999 - 2000</span> <br />
                                <span style={{fontWeight: "bold"}}>Constituency :</span>  <span>Toungo</span>   <br />
                                <span style={{fontWeight: "bold"}}><i className="fa fa-calendar"></i></span> <span> 07/06/1999 - 02/02/2000</span>   <br />
                            </p>
                            <p>
                                <span style={{color: "#50c76f"}}>HON. ABUBAKAR ABDULLAHI- 2000 - 2003</span> <br />
                                <span style={{fontWeight: "bold"}}>Constituency :</span>  <span>Girei </span>   <br />
                                <span style={{fontWeight: "bold"}}><i className="fa fa-calendar"></i></span> <span> 02/02/2000 - 04/02/2003</span>   <br />
                            </p>
                            <p>
                                <span style={{color: "#50c76f"}}>HON. MUHAMMED H. TURAKI - 2003 - 2003</span> <br />
                                <span style={{fontWeight: "bold"}}>Constituency :</span>  <span>Yola North</span>   <br />
                                <span style={{fontWeight: "bold"}}><i className="fa fa-calendar"></i></span> <span> 04/02/2003 - 06/06/2003</span>   <br />
                            </p>
                            <p>
                                <span style={{color: "#50c76f"}}>HON. BAHARU J. SHEHU - 2003 - 2006</span> <br />
                                <span style={{fontWeight: "bold"}}>Constituency :</span>  <span>Toungo</span>   <br />
                                <span style={{fontWeight: "bold"}}><i className="fa fa-calendar"></i></span> <span> 07/06/2003 – 30/05/2006</span>   <br />
                            </p>
                            <p>
                                <span style={{color: "#50c76f"}}>HON. ABUBAKAR ABDULLAHI - 2006 - 2007</span> <br />
                                <span style={{fontWeight: "bold"}}>Constituency :</span>  <span>Girei</span>   <br />
                                <span style={{fontWeight: "bold"}}><i className="fa fa-calendar"></i></span> <span> 03/06/2006 - 06/06/2007</span>   <br />
                            </p>
                            <p>
                                <span style={{color: "#50c76f"}}>HON. JAMES S. BARKA - 2007 - 2008</span> <br />
                                <span style={{fontWeight: "bold"}}>Constituency :</span>  <span>Hong</span>   <br />
                                <span style={{fontWeight: "bold"}}><i className="fa fa-calendar"></i></span> <span> 30/04/2007 - 26/2/2008</span>   <br />
                            </p>
                            <p>
                                <span style={{color: "#50c76f"}}>HON. ALIYU ISA AHMAD - 2008 - 2008</span> <br />
                                <span style={{fontWeight: "bold"}}>Constituency :</span>  <span>Mubi North</span>   <br />
                                <span style={{fontWeight: "bold"}}><i className="fa fa-calendar"></i></span> <span> 26/02/2008 - 30/04/2008</span>   <br />
                            </p>
                            <p>
                                <span style={{color: "#50c76f"}}>HON. JAMES S. BARKA - 2008 - 2010</span> <br />
                                <span style={{fontWeight: "bold"}}>Constituency :</span>  <span>Hong</span>   <br />
                                <span style={{fontWeight: "bold"}}><i className="fa fa-calendar"></i></span> <span> 03/04/2008 - 31/04/2010</span>   <br />
                            </p>
                            <p>
                                <span style={{color: "#50c76f"}}>HON. BARR. SADIQ IBRAHIM- 2011 - 2011</span> <br />
                                <span style={{fontWeight: "bold"}}>Constituency :</span>  <span>Fufore/Gurin</span>   <br />
                                <span style={{fontWeight: "bold"}}><i className="fa fa-calendar"></i></span> <span> 09/06/2011 - 05/12/2011</span>   <br />
                            </p>
                            <p>
                                <span style={{color: "#50c76f"}}>HON. AHMADU UMARU FINTIRI - 2011 - 2012</span> <br />
                                <span style={{fontWeight: "bold"}}>Constituency :</span>  <span>Madagali</span>   <br />
                                <span style={{fontWeight: "bold"}}><i className="fa fa-calendar"></i></span> <span> 05/12/2011 – 27/01/2012</span>   <br />
                            </p>
                            <p>
                                <span style={{color: "#50c76f"}}>HON. BARR. KWAMOTI B. LAORI - 2012 - 2012</span> <br />
                                <span style={{fontWeight: "bold"}}>Constituency :</span>  <span>Numan</span>   <br />
                                <span style={{fontWeight: "bold"}}><i className="fa fa-calendar"></i></span> <span> 27/01/2012 - 08/02/2012</span>   <br />
                            </p>
                            <p>
                                <span style={{color: "#50c76f"}}>HON. AHMADU UMARU FINTIRI - 2012 - 2014</span> <br />
                                <span style={{fontWeight: "bold"}}>Constituency :</span>  <span>Madagali</span>   <br />
                                <span style={{fontWeight: "bold"}}><i className="fa fa-calendar"></i></span> <span> 08/02/2012 – 16/07/2014</span>   <br />
                            </p>
                            <p>
                                <span style={{color: "#50c76f"}}>HON. BARR. KWAMOTI B. LAORI - 2014 - 2014</span> <br />
                                <span style={{fontWeight: "bold"}}>Constituency :</span>  <span>Numan</span>   <br />
                                <span style={{fontWeight: "bold"}}><i className="fa fa-calendar"></i></span> <span> 16/07/2014 - 13/10/2014</span>   <br />
                            </p>
                            <p>
                                <span style={{color: "#50c76f"}}>HON. AHMADU UMARU FINTIRI - 2014 - 2015</span> <br />
                                <span style={{fontWeight: "bold"}}>Constituency :</span>  <span>Madagali</span>   <br />
                                <span style={{fontWeight: "bold"}}><i className="fa fa-calendar"></i></span> <span> 13/10/2014 – 08/06/2015</span>   <br />
                            </p>
                            <p>
                                <span style={{color: "#50c76f"}}>Rt. HON. KABIRU MIJINYAWA - 2015 - 2019</span> <br />
                                <span style={{fontWeight: "bold"}}>Constituency :</span>  <span>Yola North</span>   <br />
                                <span style={{fontWeight: "bold"}}><i className="fa fa-calendar"></i></span> <span> 09/06/2015 - 13/06/2019</span>   <br />
                            </p>
                            <p>
                                <span style={{color: "#50c76f"}}>Rt. HON. AMINU IYA ABBAS - 2019 – Till date</span> <br />
                                <span style={{fontWeight: "bold"}}>Constituency :</span>  <span>Uba/Gaya</span>   <br />
                                <span style={{fontWeight: "bold"}}><i className="fa fa-calendar"></i></span> <span> 13/06/2019 - Till Date</span>   <br />
                            </p>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            {/* <CallToAction /> */}
            <Footer
                // logo={logoBlack}
                className="blackFooterArea"
            />
        </Fragment>
    );
}

export default SpeakerOffice;
