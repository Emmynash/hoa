import React from 'react';
import { Switch, Route } from 'react-router-dom';

// routes 
import PrivateRoute from 'containers/_PrivateRoute'

// components 

// homes 
// import HomePage from 'containers/HomePage/Loadable'
import HomePage from 'containers/HomeBusiness/Loadable'
// import HomeStartup from 'containers/HomeStartup/Loadable'
// pages 
import NewsEvents from 'containers/Pages/NewsEvents/Loadable'
import HouseMembers from 'containers/Pages/HouseMember/Loadable'
// import BlogStandard from 'containers/Pages/BlogStandard/Loadable'
import NewsDetails from 'containers/Pages/NewsDetails/Loadable'
import HouseMember from 'containers/Pages/HouseMembers/Loadable'
import AboutPage from 'containers/Pages/AboutPage/Loadable'
// import TeamPage from 'containers/Pages/TeamPage/Loadable'
import SpeakerOffice from 'containers/Pages/Speaker/Loadable'
// import PrincipalOfficers from 'containers/Pages/PortfolioTwo/Loadable'
import HouseDirectorates from 'containers/Pages/HouseDirectorates/Loadable'
import Bills from 'containers/Pages/Bills/Loadable'
import OrderPapers from 'containers/Pages/OrderPaper/Loadable'
import HouseCommittees from 'containers/Pages/Committees/Loadable'
import ContactPage from 'containers/Pages/ContactPage/Loadable'
import VotesProceedings from 'containers/Pages/VoteProceedings/Loadable' 
import ErrorPage from 'containers/ErrorPage/Loadable'
const Routes = () => {
    return (
        <Switch>
            <PrivateRoute
                exact
                path="/"
                component={HomePage}
            />
            {/* <PrivateRoute
                exact
                path="/home-business"
                component={HomeBusiness}
            /> */}
            {/* <PrivateRoute
                exact
                path="/home-startup"
                component={HomeStartup}
            /> */}
            <PrivateRoute
                exact
                path="/news-and-events"
                component={NewsEvents}
            />
            <PrivateRoute
                exact
                path="/house-members"
                component={HouseMembers}
            />
            <PrivateRoute
                exact
                path="/blog"
                component={HouseMembers}
            />
            {/* <PrivateRoute
                exact
                path="/blog-standard"
                component={BlogStandard}
            /> */}
            <PrivateRoute
                exact
                path="/news-details/:id"
                component={NewsDetails}
            />
            <PrivateRoute
                exact
                path="/house-members/member/:id"
                component={HouseMember}
            />
            <PrivateRoute
                exact
                path="/about"
                component={AboutPage}
            />
            {/* <PrivateRoute
                exact
                path="/team"
                component={TeamPage}
            /> */}
            <PrivateRoute
                exact
                path="/office-of-speaker"
                component={SpeakerOffice}
            />
            {/* <PrivateRoute
                exact
                path="/principal-officers"
                component={PrincipalOfficers}
            /> */}
            <PrivateRoute
                exact
                path="/house-directorates"
                component={HouseDirectorates}
            />
            <PrivateRoute
                exact
                path="/resources/bills"
                component={Bills}
            />
            <PrivateRoute
                exact
                path="/resources/order-paper"
                component={OrderPapers}
            />
            <PrivateRoute
                exact
                path="/house-committees"
                component={HouseCommittees}
            />
            <PrivateRoute
                exact
                path="/contact"
                component={ContactPage}
            />
            <PrivateRoute
                exact
                path="/resources/votes-and-proceedings"
                component={VotesProceedings}
            />
            {/* <PublicRoute path="/maintenance" component={MaintenancePage} /> */}
            <Route component={ErrorPage} />
        </Switch>
    );
}
export default Routes