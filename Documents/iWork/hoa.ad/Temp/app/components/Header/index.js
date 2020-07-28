import React, { useState, Fragment } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { injectIntl } from 'react-intl';
import messages from './messages';
import { Grid, Menu, Button, ExpansionPanelSummary, ExpansionPanelDetails, MuiExpansionPanelDetails, ExpansionPanel } from '@material-ui/core'
import cookie from 'js-cookie';
import { Link, NavLink } from 'react-router-dom'
import LanguageSwitcher from 'components/LanguageSwitcher'
import { createStructuredSelector } from 'reselect';
import { makeSelectLocale } from 'containers/LanguageProvider/selectors';
import { changeLocale } from 'containers/LanguageProvider/actions';
import makeSelectHeader from './selectors';
import './style.scss'

// images 
// import logo from 'images/logo.png'
// import avatar from 'images/avatar.jpg'


const Header = (props) => {


    const menus = [
        {
            name: `${props.intl.formatMessage({ ...messages.Home })}`,
            link: '/',
            id: 1,
        },
        {
            name: `${props.intl.formatMessage({ ...messages.aboutus })}`,
            link: '/about',
            id: 7
        },
        {
            name: `${props.intl.formatMessage({ ...messages.Resources })}`,
            id: 2,
            submenu: [
                {
                    name: `${props.intl.formatMessage({ ...messages.Bills })}`,
                    link: '/resources/bills'
                },
                {
                    name: `${props.intl.formatMessage({ ...messages.OrderPaper })}`,
                    link: '/resources/order-paper'
                },
                {
                    name: `${props.intl.formatMessage({ ...messages.VotesProceeding })}`,
                    link: '/resources/votes-and-proceedings'
                },
            ],
        },
        {
            name: `${props.intl.formatMessage({ ...messages.TheHouse })}`,
            id: 3,
            submenu: [
                {
                    name: `${props.intl.formatMessage({ ...messages.HouseMembers })}`,
                    link: '/house-members'
                },
                {
                    name: `${props.intl.formatMessage({ ...messages.SpeakerOffice })}`,
                    link: '/office-of-speaker'
                },
                // {
                //     name: `${props.intl.formatMessage({ ...messages.PrincipalOfficers })}`,
                //     link: '/principal-officers'
                // },
                {
                    name: `${props.intl.formatMessage({ ...messages.HouseDirectorates })}`,
                    link: '/house-directorates'
                },
            ],
        }, 
        {
            name: `${props.intl.formatMessage({ ...messages.Committees })}`,
            link: '/house-committees',
            id: 4,
            // submenu: [
            //     {
            //         name: `${props.intl.formatMessage({ ...messages.faq })}`,
            //         link: '/house-committees'
            //     },
            //     {
            //         name: `${props.intl.formatMessage({ ...messages.OurTeam })}`,
            //         link: '/team'
            //     },
                // {
                //     name: `${props.intl.formatMessage({ ...messages.shop })}`,
                //     link: '/shop'
                // },
                // {
                //     name: `${props.intl.formatMessage({ ...messages.shopdetails })}`,
                //     link: '/shop-details'
                // },
            //     {
            //         name: '404',
            //         link: '/404'
            //     },
            // ],
        },
        {
            name: `${props.intl.formatMessage({ ...messages.News })}`,
            id: 5,
            link: '/news-and-events',
            // submenu: [
            //     {
            //         name: `${props.intl.formatMessage({ ...messages.blog })}`,
            //         link: '/blog'
            //     },
            //     {
            //         name: `${props.intl.formatMessage({ ...messages.blogTwoGrid })}`,
            //         link: '/news-and-events'
            //     },
            //     {
            //         name: `${props.intl.formatMessage({ ...messages.blogstandard })}`,
            //         link: '/blog-standard'
            //     },
            //     {
            //         name: `${props.intl.formatMessage({ ...messages.blogdetails })}`,
            //         link: '/blog-details/1'
            //     },
            // ],
        },
        {
            name: `${props.intl.formatMessage({ ...messages.contact })}`,
            link: '/contact',
            id: 6
        }
    ]
    const [openAccount, setOpenAccount] = useState(null);
    const [openProfile, setOpenProfile] = useState(null);
    const [expanded, setExpanded] = useState('0');
    const [menu, setMenu] = useState(false);

    const handleChange = panel => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };
    const handleClickAccount = event => {
        setOpenAccount(event.currentTarget);
    };

    const handleCloseAccount = () => {
        setOpenAccount(null);
    };

    const handleClickProfile = event => {
        setOpenProfile(event.currentTarget);
    };

    const handleCloseProfile = () => {
        setOpenProfile(null);
    };

    const responsiveMenuHandler = () => {
        setMenu(!menu)
    }
    const onChangeLocale = (locale) => {
        cookie.set('onova_lang', locale);
        props.changeLocale(locale);
    }


    return (
        <header className={props.className ? `${props.className} headerArea` : 'headerArea'}>
            <Grid
                container
                alignItems="center"
                className="container">
                <Grid item lg={4} md={8} sm={6} xs={8}>
                    <Link to="/" className="logoWrapper">
                        <img src={props.logo} alt="" width="70px" height="70px"/>
                    </Link>
                </Grid>
                <Grid item className="d-none" lg={8}>
                    <ul className="mainmenu">
                        {menus.map(menu => (
                            <li key={menu.id}>
                                {menu.link ? <NavLink onClick={window.scrollTo(0, 0)} exact to={menu.link}>{menu.name}</NavLink> : <span>{menu.name} <i className="fa fa-angle-down"></i></span>}
                                {menu.submenu ? <ul>
                                    {menu.submenu.map((sub, i) => (
                                        <li key={i}><NavLink onClick={window.scrollTo(0, 0)} exact to={sub.link}>{sub.name}</NavLink></li>
                                    ))}
                                </ul> : ''}
                            </li>
                        ))}
                    </ul>
                </Grid>

                {/*<Grid item lg={2} md={2} sm={3} xs={6}>
                    <Grid
                        onClick={handleClickProfile}
                        className="profileWrap">
                        <span
                            className="profile">
                            <span className="avatar">
                                <img src={avatar} alt="" />
                            </span>
                            <span className="name">Jone Doe</span>
                        </span>
                    </Grid>
                    <Menu
                        anchorEl={openProfile}
                        keepMounted
                        open={Boolean(openProfile)}
                        onClose={handleCloseProfile}
                        elevation={0}
                        getContentAnchorEl={null}
                        className="profileWrapper"
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        classes={{
                            paper: 'profilePaper',
                            list: 'profileList'
                        }}
                    >
                        <li>
                            <Button component={Link} to="/profile">
                                <i className="fa fa-user"></i>
                                Profile
                            </Button>
                        </li>
                        <li>
                            <Button component={Link} to="/profile">
                                <i className="fa fa-cog"></i>
                                Setting
                            </Button>
                        </li>
                        <li>
                            <Button component={Link} to="/signin">
                                <i className="fa fa-sign-out"></i>
                                Logout
                            </Button>
                        </li>
                    </Menu>
                </Grid>*/}
                {/*<Grid item lg={2} md={3} sm={4} xs={10}>
                    <ul className="headerRight">
                        <li className="language">
                            <LanguageSwitcher
                                onChange={onChangeLocale}
                                locale={props.locale}
                            />
                        </li>
                        <li><Button><i className="fa fa-search"></i></Button></li>
                        <li><Button><i className="fa fa-shopping-cart"></i></Button></li>
                        <li onClick={handleClickAccount}><Button><i className="fa fa-user"></i></Button></li>
                    </ul>
                </Grid>*/}
                <Grid item md={1} sm={1} xs={2} className="responsiveMenuTrigger">
                    <ul onClick={responsiveMenuHandler} className={menu ? 'responsiveMenuTriggerItem active' : 'responsiveMenuTriggerItem'}>
                        <li className="first"></li>
                        <li className="second"></li>
                        <li className="third"></li>
                    </ul>
                </Grid>

                <Menu
                    anchorEl={openAccount}
                    keepMounted
                    open={Boolean(openAccount)}
                    onClose={handleCloseAccount}
                    elevation={0}
                    getContentAnchorEl={null}
                    className="profileWrapper"
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    classes={{
                        paper: 'profilePaper',
                        list: 'profileList'
                    }}
                >
                    <li>
                        <Button component={Link} to="/profile">
                            <i className="fa fa-user"></i>
                            login
                        </Button>
                    </li>
                    <li>
                        <Button component={Link} to="/profile">
                            <i className="fa fa-cog"></i>
                            Registation
                        </Button>
                    </li>
                </Menu>
            </Grid>
            <Grid className={menu ? 'responsiveMenuWrap active' : 'responsiveMenuWrap'}>
                {menus.map((menu, i) => (
                    <Fragment key={i}>
                        {menu.submenu ? <ExpansionPanel
                            classes={{
                                root: 'responsiveColups',
                            }}
                            square
                            expanded={expanded === menu.id}
                            onChange={handleChange(menu.id)}>
                            <ExpansionPanelSummary className="responsiveColupdHead">{menu.name}</ExpansionPanelSummary>
                            <ExpansionPanelDetails className="responsiveColupdDetails">
                                <ul className="responsiveSubmenuItems">
                                    {menu.submenu.map(((sub, i) => (
                                        <li key={i}><NavLink activeClassName="active" to={sub.link}>{sub.name}</NavLink></li>
                                    )))}
                                </ul>
                            </ExpansionPanelDetails>
                        </ExpansionPanel> : <NavLink activeClassName="active" to={menu.link}>{menu.name}</NavLink>}
                    </Fragment>
                ))}

            </Grid>
        </header>
    );
}

const mapStateToProps = createStructuredSelector({
    headerComponent: makeSelectHeader(),
    locale: makeSelectLocale(),
});

function mapDispatchToProps(dispatch) {
    return {
        changeLocale: locale => dispatch(changeLocale(locale)),
    };
}

const withConnect = connect(
    mapStateToProps,
    mapDispatchToProps,
);

export default compose(withConnect)(injectIntl(Header));
