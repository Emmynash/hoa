import React, { useState, Fragment } from 'react';
import { Grid, Tab, Tabs, Button } from '@material-ui/core'
import SectionTitle from 'components/SectionTitle/Loadable'
import MUIDataTable from "mui-datatables";
import { Helmet } from 'react-helmet';
import Slider from "react-slick";
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
        name: 'Resources  |  Order Papers'
    }
]

const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: true,
    swipe: true,
    swipeToSlide: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
        {
            breakpoint: 1400,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 2,
            }
        },
        {
            breakpoint: 1300,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};

const OrderPaper = () => {
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
        //     label: "Session",
        //     options: {
        //       filter: false,
        //       sort: true
        //   }}
      ];
       
    const data = [
       {a: {
         title: `Health Sector Reform Law`, pdf: "OrderPaperPdf/2.png",
       }, update_date: "1/11/2019", parliament: "7th Parliament", third_reading: "8th Parliament"},
       {a: {
         title: "Tenancy Law", pdf: "OrderPaperPdf/1.png",
        }, update_date: "3/11/2019", parliament: "7th Parliament", third_reading: "9th Parliament"},
       {a: {
         title: "Special People's Law", pdf: "OrderPaperPdf/1.png",
        }, update_date: "6/11/2019", parliament: "7th Parliament", third_reading: "6th Parliament"},
       {a: {
         title: "Water Sector Law", pdf: "OrderPaperPdf/2.png",
        }, update_date: "8/11/2019", parliament: "7th Parliament", third_reading: "8th Parliament"},
       {a: {
         title: "Contruction Workers Safety", pdf: "OrderPaperPdf/2.png",
        }, update_date: "10/11/2019", parliament: "7th Parliament", third_reading: "9th Parliament"},
       {a: {
         title: "Records and Archieves Law", pdf: "OrderPaperPdf/1.png",
        }, update_date: "13/11/2019", parliament: "7th Parliament", third_reading: "4th Parliament"},
       {a: {
         title: "Cinematography Law", pdf: "OrderPaperPdf/1.png",
        }, update_date: "16/11/2019", parliament: "7th Parliament", third_reading: "7th Parliament"},
       {a: {
         title: "Almajiri Law", pdf: "OrderPaperPdf/2.png",
        }, update_date: "19/11/2019", parliament: "7th Parliament", third_reading: "9th Parliament"},
       {a: {
         title: "Citizen Mediation Centre Law", pdf: "OrderPaperPdf/1.png",
        }, update_date: "21/11/2019", parliament: "7th Parliament", third_reading: "4th Parliament"},
       {a: {
         title: "Office of The Secretary Law", pdf: "OrderPaperPdf/2.png",
        }, update_date: "26/11/2019", parliament: "7th Parliament", third_reading: "10th Parliament"},
       {a: {
         title: "Health Management System Law", pdf: "OrderPaperPdf/1.png",
        }, update_date: "29/11/2019", parliament: "7th Parliament", third_reading: "9th Parliament"},
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
                    <title>Order Paper</title>
            </Helmet>
            <Header
                className="headerStyleWhite"
                logo={logo}
            />
            <Breadcumb
                links={links}
                className="overlay breadcumbStyleTwo"
                title="Order Papers"
                bgImg={breadcumbImg}
                stoketext="Orders"
            />
            <Grid className="consultancyServiceArea">
                
                <Grid className="container" spacing={4} container>
                    <Grid item xs={12}>
                        <br />
                        <br />
                        <br />
                        <br />
                        <SectionTitle
                            title="Order Papers"
                            stoketext="Orders"
                        />
                    </Grid>
                    <Grid item xs={12}>
                    <SectionTitle
                            subtitle="Click on the search icon below to search for documents by session or parliament"
                            title=""
                            stoketext="Orders"
                        />
                    </Grid>
                    <Grid item md={12} sm={12} xs={12}>
                    <MUIDataTable
                        title={"Orders"}
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

export default OrderPaper;
