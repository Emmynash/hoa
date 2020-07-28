import React, { useState, Fragment } from 'react';
import { injectIntl } from 'react-intl';
import { Grid, ExpansionPanelSummary, ExpansionPanelDetails, ExpansionPanel } from '@material-ui/core'
import messages from 'components/Header/messages'
import { Link, NavLink } from 'react-router-dom'
import './style.scss'
const StartupHeader = (props) => {
    const menus = [
        {
            name: `${props.intl.formatMessage({ ...messages.Home })}`,
            id: 1,
            submenu: [
                {
                    name: `${props.intl.formatMessage({ ...messages.Homemain })}`,
                    link: '/'
                },
                {
                    name: `${props.intl.formatMessage({ ...messages.HomeITBusiness })}`,
                    link: '/home-business'
                },
                {
                    name: `${props.intl.formatMessage({ ...messages.HomeITStartup })}`,
                    link: '/home-startup'
                },
            ],
        },
        {
            name: `${props.intl.formatMessage({ ...messages.aboutus })}`,
            link: '/about',
            id: 7
        },
        {
            name: `${props.intl.formatMessage({ ...messages.company })}`,
            id: 2,
            submenu: [
                {
                    name: `${props.intl.formatMessage({ ...messages.ITServices })}`,
                    link: '/service'
                },
                {
                    name: `${props.intl.formatMessage({ ...messages.ITConsultancy })}`,
                    link: '/consultancy'
                },
                {
                    name: `${props.intl.formatMessage({ ...messages.OurHistory })}`,
                    link: '/history'
                },
            ],
        },
        {
            name: `${props.intl.formatMessage({ ...messages.Portfolio })}`,
            id: 3,
            submenu: [
                {
                    name: `${props.intl.formatMessage({ ...messages.Portfolio })}`,
                    link: '/portfolio-one'
                },
                {
                    name: `${props.intl.formatMessage({ ...messages.portfoliotwo })}`,
                    link: '/portfolio-two'
                },
                {
                    name: `${props.intl.formatMessage({ ...messages.portfoliodetails })}`,
                    link: '/portfolio-details/1'
                },
            ],
        },
        {
            name: `${props.intl.formatMessage({ ...messages.Pages })}`,
            id: 4,
            submenu: [
                {
                    name: `${props.intl.formatMessage({ ...messages.faq })}`,
                    link: '/faq'
                },
                {
                    name: `${props.intl.formatMessage({ ...messages.OurTeam })}`,
                    link: '/team'
                },
                {
                    name: `${props.intl.formatMessage({ ...messages.shop })}`,
                    link: '/shop'
                },
                {
                    name: `${props.intl.formatMessage({ ...messages.shopdetails })}`,
                    link: '/shop-details'
                },
                {
                    name: '404',
                    link: '/404'
                },
            ],
        },
        {
            name: `${props.intl.formatMessage({ ...messages.News })}`,
            id: 5,
            submenu: [
                {
                    name: `${props.intl.formatMessage({ ...messages.blog })}`,
                    link: '/blog'
                },
                {
                    name: `${props.intl.formatMessage({ ...messages.blogTwoGrid })}`,
                    link: '/blog-two-grid'
                },
                {
                    name: `${props.intl.formatMessage({ ...messages.blogstandard })}`,
                    link: '/blog-standard'
                },
                {
                    name: `${props.intl.formatMessage({ ...messages.blogdetails })}`,
                    link: '/blog-details/1'
                },
            ],
        },
        {
            name: `${props.intl.formatMessage({ ...messages.contact })}`,
            link: '/contact',
            id: 6
        }
    ]

    const [expanded, setExpanded] = useState('0');
    const [menu, setMenu] = useState(false);

    const handleChange = panel => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    const responsiveMenuHandler = () => {
        setMenu(!menu)
    }


    return (
        <header className={props.className ? `${props.className} startupHeaderArea` : 'startupHeaderArea'}>
            <Grid
                container
                alignItems="center"
                spacing={4}
                className="container">
                <Grid item lg={2} md={8} sm={7} xs={8}>
                    <Link to="/" className="logoWrapper">
                        <img src={props.logo} alt="" />
                    </Link>
                </Grid>
                <Grid item className="d-none" lg={9}>
                    <ul className="mainmenu">
                        {menus.map(menu => (
                            <li key={menu.id}>
                                {menu.link ? <NavLink exact to={menu.link}>{menu.name}</NavLink> : <span>{menu.name} <i className="fa fa-angle-down"></i></span>}
                                {menu.submenu ? <ul>
                                    {menu.submenu.map((sub, i) => (
                                        <li key={i}><NavLink exact to={sub.link}>{sub.name}</NavLink></li>
                                    ))}
                                </ul> : ''}
                            </li>
                        ))}
                    </ul>
                </Grid>

                <Grid item lg={1} md={3} sm={4} xs={2}>
                    <ul className="startupHeaderRight">
                        <li><i className="fa fa-search"></i></li>
                    </ul>
                </Grid>
                <Grid item md={1} sm={1} xs={2} className="responsiveMenuTrigger">
                    <ul onClick={responsiveMenuHandler} className={menu ? 'responsiveMenuTriggerItem active' : 'responsiveMenuTriggerItem'}>
                        <li className="first"></li>
                        <li className="second"></li>
                        <li className="third"></li>
                    </ul>
                </Grid>
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
        </header >
    );
}


export default injectIntl(StartupHeader)
