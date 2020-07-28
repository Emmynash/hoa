import React, { useState, Fragment } from 'react';
import { Grid, Tab, Tabs, Button } from '@material-ui/core';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import SectionTitle from 'components/SectionTitle/Loadable';
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
        name: 'Resources  |  Bills'
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

const columns = [{
    name: "a",
    label: "Title",
    options: {
      filter: true,
      sort: false,
      customBodyRender: (value, tableMeta, updateValue) => {
        // console.log(value);
        const pdf = require(`./${value.pdf}`);
        return <a href={pdf} rel="noopener noreferrer" target="_BLANK">{value.title}</a>;
      }
    },
    }, 
    {
      name: "first_reading",
      label: "First Reading",
      options: {
        filter: true,
        sort: false
      }},
      {
        name: "second_reading",
        label: "Second Reading",
        options: {
          filter: false,
          sort: true,
          viewColumns: true
      }},
       {
        name: "third_reading",
        label: "Third Reading",
        options: {
          filter: false,
          sort: true,
          viewColumns: true,
          display: true
      }}
  ];
   
const data = [
   {a: {
     title: `Audit Law Amendment`, pdf: "BillsPdf/2.png",
   }, first_reading: "14/1/19", second_reading: "16/1/19", third_reading: "30/1/19"},
   {a: {
     title: "Sheriffs and Civil Procedure", pdf: "BillsPdf/1.png",
    }, first_reading: "20/12/18", second_reading: "", third_reading: ""},
   {a: {
     title: "Limitation of Actions", pdf: "BillsPdf/1.png",
    }, first_reading: "12/12/18", second_reading: "18/12/18", third_reading: ""},
   {a: {
     title: "Repeal College", pdf: "BillsPdf/2.png",
    }, first_reading: "12/12/18", second_reading: "18/12/18", third_reading: ""},
   {a: {
     title: "Health System", pdf: "BillsPdf/2.png",
    }, first_reading: "3/12/18", second_reading: "18/12/18", third_reading: ""},
   {a: {
     title: "Administration Staff Structure", pdf: "BillsPdf/1.png",
    }, first_reading: "12/11/18", second_reading: "13/11/18", third_reading: ""},
   {a: {
     title: "Water Ways Authority", pdf: "BillsPdf/1.png",
    }, first_reading: "", second_reading: "", third_reading: ""},
   {a: {
     title: "Energy Dev. Agency", pdf: "BillsPdf/2.png",
    }, first_reading: "", second_reading: "", third_reading: ""},
   {a: {
     title: "Peace Rehabilitation", pdf: "BillsPdf/1.png",
    }, first_reading: "10/9/18", second_reading: "", third_reading: ""},
   {a: {
     title: "Special Right Agency", pdf: "BillsPdf/2.png",
    }, first_reading: "10/9/18", second_reading: "", third_reading: ""},
   {a: {
     title: "Local Gov. care-taker Committee", pdf: "BillsPdf/1.png",
    }, first_reading: "4/9/18", second_reading: "330/10/18", third_reading: ""},
    {a: {
        title: "Mubi International Market", pdf: "BillsPdf/1.png",
       }, first_reading: "8/8/18", second_reading: "", third_reading: ""},
    {a: {
        title: "Women Discrimination (UN)", pdf: "BillsPdf/1.png",
       }, first_reading: "18/9/18", second_reading: "", third_reading: ""},
    {a: {
        title: "Management of Funds", pdf: "BillsPdf/1.png",
       }, first_reading: "6/8/18", second_reading: "30/10/18", third_reading: ""},
    {a: {
        title: "Specialist Hospital", pdf: "BillsPdf/1.png",
       }, first_reading: "", second_reading: "", third_reading: ""},
    {a: {
        title: "Violence in life", pdf: "BillsPdf/1.png",
       }, first_reading: "04/6/18", second_reading: "31/7/18", third_reading: ""},
    {a: {
        title: "United Football Club", pdf: "BillsPdf/1.png",
       }, first_reading: "04/6/18", second_reading: "23/7/18", third_reading: "25/7/18"},
    {a: {
        title: "Area Courts Edict 1988", pdf: "BillsPdf/1.png",
       }, first_reading: "25/7/18", second_reading: "331/7/18", third_reading: ""},
    {a: {
        title: "State University Mubi", pdf: "BillsPdf/1.png",
       }, first_reading: "19/2/18", second_reading: "21/5/18", third_reading: ""},
    {a: {
        title: "Boundary Commission", pdf: "BillsPdf/1.png",
       }, first_reading: "6/8/18", second_reading: "5/12/18", third_reading: ""},
    {a: {
        title: "cellphone use while driving", pdf: "BillsPdf/1.png",
       }, first_reading: "18/12/17", second_reading: "", third_reading: ""},
    {a: {
        title: "State Fire Service", pdf: "BillsPdf/1.png",
       }, first_reading: "7/8/17", second_reading: "27/2/18", third_reading: ""},
    {a: {
        title: "Economic Evaluation Agency", pdf: "BillsPdf/1.png",
       }, first_reading: "5/6/17", second_reading: "8/8/17", third_reading: ""},
    {a: {
        title: "Transport Board Edict", pdf: "BillsPdf/1.png",
       }, first_reading: "24/6/17", second_reading: "", third_reading: ""},
    {a: {
        title: "Reform Health Sector", pdf: "BillsPdf/1.png",
       }, first_reading: "09/4/18", second_reading: "", third_reading: ""},
   {a: {
        title: "Genotype & Sickle Cell Test", pdf: "BillsPdf/1.png",
       }, first_reading: "8/2/17", second_reading: "28/2/17", third_reading: ""},
   {a: {
        title: "Traffic Admin & Control Agency", pdf: "BillsPdf/1.png",
       }, first_reading: "28/2/17", second_reading: "316/5/17", third_reading: ""},
    {a: {
        title: "Veterinary Services", pdf: "BillsPdf/1.png",
       }, first_reading: "14/2/17", second_reading: "25/4/17", third_reading: ""},
    {a: {
        title: "Illegal Bush Burning", pdf: "BillsPdf/1.png",
       }, first_reading: "", second_reading: "", third_reading: ""},
    {a: {
        title: "Trafficking and Kidnapping", pdf: "BillsPdf/1.png",
       }, first_reading: "24/7/17", second_reading: "", third_reading: ""},
    {a: {
        title: "Open Records and Information", pdf: "BillsPdf/1.png",
       }, first_reading: "20/12/16", second_reading: "20/2/17", third_reading: ""},
    {a: {
        title: "Accident and Terrorism Victims", pdf: "BillsPdf/1.png",
       }, first_reading: "2/8/16", second_reading: "24/10/16", third_reading: ""},
    {a: {
        title: "Roads Maint. Agency", pdf: "BillsPdf/1.png",
       }, first_reading: "", second_reading: "", third_reading: ""},
    {a: {
        title: "Registration of Traders Assoc.", pdf: "BillsPdf/1.png",
       }, first_reading: "", second_reading: "", third_reading: ""},
    {a: {
        title: "German Medical Centre", pdf: "BillsPdf/1.png",
       }, first_reading: "8/6/16", second_reading: "19/7/16", third_reading: ""},
    {a: {
        title: "Waste Disposal Board", pdf: "BillsPdf/1.png",
       }, first_reading: "1/12/15", second_reading: "9/2/16", third_reading: ""},
    {a: {
        title: "employment for indigenes", pdf: "BillsPdf/1.png",
       }, first_reading: "28/10/15", second_reading: "09/3/16", third_reading: ""},
    {a: {
        title: "maint. of public infrastructure", pdf: "BillsPdf/1.png",
       }, first_reading: "2/11/15", second_reading: "9/11/15", third_reading: ""},
    {a: {
        title: "Terrains Dev. Board", pdf: "BillsPdf/1.png",
       }, first_reading: "4/11/15", second_reading: "2/3/16", third_reading: ""},
    {a: {
        title: "Amend Area Courts Edict 1988", pdf: "BillsPdf/1.png",
       }, first_reading: "2/11/15", second_reading: "10/11/15", third_reading: ""},
    {a: {
        title: "Neighborhood watch Committee", pdf: "BillsPdf/1.png",
       }, first_reading: "1/9/15", second_reading: "7/9/15", third_reading: ""},
    {a: {
        title: "Mining Company", pdf: "BillsPdf/1.png",
       }, first_reading: "4/8/15", second_reading: "5/8/15", third_reading: "21/12/15"},
    {a: {
        title: "Compulsory State Reserve Fund", pdf: "BillsPdf/1.png",
       }, first_reading: "1/9/15", second_reading: "", third_reading: ""},
    {a: {
        title: "Business Premises Registration", pdf: "BillsPdf/1.png",
       }, first_reading: "8/9/15", second_reading: "3/11/15", third_reading: ""},
    {a: {
        title: "Gongola Basin Energy Company", pdf: "BillsPdf/1.png",
       }, first_reading: "4/8/15", second_reading: "5/8/15", third_reading: "29/11/16"},
    {a: {
        title: "Judicial Service Committee", pdf: "BillsPdf/1.png",
       }, first_reading: "4/8/15", second_reading: "5/8/15", third_reading: ""},
   ];

 const options = {
    filterType: 'textField',
    download: false,
    selectableRows: "none",
    responsive: 'scrollFullHeight',
    // resizableColumns: true
  };

class Bills extends React.Component {

    getMuiTheme = () => createMuiTheme({
        overrides: {
          MUIDataTableHeadCell: {
            root: {
              '&:nth-child(1)': {
                width: 100
              },
            }
          }
        }
      })

    render(){
        return (
            <Fragment>
                <Helmet>
                    <title>Bills</title>
                </Helmet>
                <Header
                    className="headerStyleWhite"
                    logo={logo}
                />
                <Breadcumb
                    links={links}
                    className="overlay breadcumbStyleTwo"
                    title="Bills"
                    bgImg={breadcumbImg}
                    stoketext="Bills"
                />
                <Grid className="consultancyServiceArea">
                    
                    <Grid className="container" spacing={4} container>
                        <Grid item xs={12}>
                            <br />
                            <br />
                            <br />
                            <br />
                            <SectionTitle
                                title="Bill Tracker"
                                stoketext="Bills"
                            />
                        </Grid>
                        <Grid item xs={12}>
                        <SectionTitle
                                subtitle="Click on the search icon below to search filter bills by title"
                                title=""
                                stoketext="Bills"
                            />
                        </Grid>
                        <Grid item md={12} sm={12} xs={12}>
                            <MUIDataTable
                                title={"Bills"}
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
}

export default Bills;
