import React, { useState, Fragment } from 'react';
import { Grid, Tab, Tabs, Button } from '@material-ui/core'
import SectionTitle from 'components/SectionTitle/Loadable'
import MUIDataTable from "mui-datatables";
import Slider from "react-slick";
import { Helmet } from 'react-helmet';
// images 
import logo from 'images/logo-white.png'
// import logoBlack from 'images/logo.png'
import breadcumbImg from 'images/bg/info.png'

// components 
import Header from 'components/Header/Loadable'
import Breadcumb from 'components/Breadcumb/Loadable'
// import Activity from 'components/HomeBusiness/Activity/Loadable'
// import Testmonial from 'components/HomeBusiness/Testmonial/Loadable'
// import StartupPricing from 'components/HomeStartup/Pricing/Loadable'
// import CallToAction from 'components/CallToAction/Loadable'
import Footer from 'components/Footer/Loadable'
import './style.scss'

const links = [
    {
        name: 'Home',
        link: '/'
    },
    {
        name: 'Resources  |  Votes & Proceedings'
    }
]


const VoteProceedings = () => {
    const columns = [{
        name: "a",
        label: "Title",
        options: {
          filter: true,
          sort: false,
          customBodyRender: (value, tableMeta, updateValue) => {
            console.log(value);
            const pdf = require(`./${value.pdf}`);
            return <a href={pdf} rel="noopener noreferrer" target="_BLANK">{value.title}</a>;
          }
        },
        }, {
          name: "update_date",
          label: "Update Date",
          options: {
            filter: true,
            sort: false
          }},{
            name: "parliament",
            label: "Parliament",
            options: {
              filter: false,
              sort: true
          }}, 
        //   {
        //     name: "third_reading",
        //     label: "Parliament",
        //     options: {
        //       filter: false,
        //       sort: true
        //   }}
      ];
       
    const data = [
       {a: {
         title: `Health Sector Reform Law`, pdf: "VotePdf/1.png",
       }, update_date: "1/11/2019", parliament: "2nd Session", third_reading: "8th Parliament"},
       {a: {
         title: "Tenancy Law", pdf: "VotePdf/1.png",
        }, update_date: "3/11/2019", parliament: "7th parliament", third_reading: "9th Parliament"},
       {a: {
         title: "Special People's Law", pdf: "VotePdf/1.png",
        }, update_date: "6/11/2019", parliament: "7th parliament", third_reading: "6th Parliament"},
       {a: {
         title: "Water Sector Law", pdf: "VotePdf/2.png",
        }, update_date: "8/11/2019", parliament: "7th parliament", third_reading: "8th Parliament"},
       {a: {
         title: "Contruction Workers Safety", pdf: "VotePdf/1.png",
        }, update_date: "10/11/2019", parliament: "7th parliament", third_reading: "9th Parliament"},
       {a: {
         title: "Records and Archieves Law", pdf: "VotePdf/2.png",
        }, update_date: "13/11/2019", parliament: "7th parliament", third_reading: "4th Parliament"},
       {a: {
         title: "Cinematography Law", pdf: "VotePdf/1.png",
        }, update_date: "16/11/2019", parliament: "7th parliament", third_reading: "7th Parliament"},
       {a: {
         title: "Almajiri Law", pdf: "VotePdf/2.png",
        }, update_date: "19/11/2019", parliament: "7th parliament", third_reading: "9th Parliament"},
       {a: {
         title: "Citizen Mediation Centre Law", pdf: "VotePdf/1.png",
        }, update_date: "21/11/2019", parliament: "7th parliament", third_reading: "4th Parliament"},
       {a: {
         title: "Office of The Secretary Law", pdf: "VotePdf/1.png",
        }, update_date: "26/11/2019", parliament: "7th parliament", third_reading: "10th Parliament"},
       {a: {
         title: "Health Management System Law", pdf: "VotePdf/2.png",
        }, update_date: "29/11/2019", parliament: "7th parliament", third_reading: "9th Parliament"},
      ];

    const options = {
        filterType: 'textField',
        download: false,
        selectableRows: "none",
        responsive: 'scrollFullHeight'
      };

  
    return (
        <Fragment>
            <Helmet>
                <title>Votes & Proceedings</title>
            </Helmet>
            <Header
                className="headerStyleWhite"
                logo={logo}
            />
            <Breadcumb
                links={links}
                className="overlay breadcumbStyleTwo"
                title="Votes & Proceedings"
                bgImg={breadcumbImg}
                stoketext="Votes"
            />
            <Grid className="consultancyServiceArea">
                
                <Grid className="container" spacing={4} container>
                    <Grid item xs={12}>
                        <br />
                        <br />
                        <br />
                        <br />
                        <SectionTitle
                            title="Votes & Proceedings"
                            stoketext="Orders"
                        />
                    </Grid>
                    <Grid item xs={12}>
                    <SectionTitle
                            subtitle="Click on the search icon below to search for documents by session or parliament"
                            title=""
                            stoketext="Votes"
                        />
                    </Grid>
                    <Grid item md={12} sm={12} xs={12}>
                    <MUIDataTable
                        title={"Votes"}
                        data={data}
                        columns={columns}
                        options={options}
                    />
                    </Grid>
                </Grid>
            </Grid>
            <Footer
                // logo={logoBlack}
                className="blackFooterArea"
            />
        </Fragment>
    );
}

export default VoteProceedings;
