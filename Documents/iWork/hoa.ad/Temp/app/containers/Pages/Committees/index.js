import React, { Fragment, useState } from 'react';
import { Helmet } from 'react-helmet';
import { injectIntl } from 'react-intl';
import { Grid, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Button } from '@material-ui/core'
import ModalVideo from 'react-modal-video'

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


// components 
import Header from 'components/Header/Loadable'
// import ContactInfo from 'components/ContactInfo/Loadable'
// import SectionTitle from 'components/SectionTitle/Loadable'
import Breadcumb from 'components/Breadcumb/Loadable'
import Footer from 'components/Footer/Loadable'

import './style.scss'

// images 
import logo from 'images/logo-white.png'
import logoBlack from 'images/logo-white.png'
// import faqImg from 'images/faq.jpg'
import breadcumbImg from 'images/bg/case1.png'
// import play from 'images/icons/play.png'

const links = [
    {
        name: 'Home',
        link: '/'
    },
    {
        name: 'Committees'
    }
]

const useStyles = makeStyles({
    root: {
      width: '100%',
      overflowX: 'auto',
    },
    table: {
      minWidth: 650,
    },
  });
  
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('Selection', "Rt. Hon. Aminu Iya Abbas", 'Rt. Hon. Pwamwakeno M. Mackondo', 'Hon. Hammantukur Yettisuri, Hon. Mohammed Mutawalli, Hon. Joseph A. Kwada, Hon. Ibrahim Musa, Hon. Japhet Kefas, Hon. Abdullahi Umar, Hon. Adwawa Dongolok, Hon. Shuaibu Musa'),
    createData('Rules, Business, Ethics  and Privileges',  "Hon. Hammantukur Yettisuri", 'Hon. Japhet Kefas', 'Hon. Mohammed Mutawalli, Hon. Abdullahi Ahmadu, Hon. Ibrahim Musa'),
    createData('Public Accounts',  "Hon. Mohammed Mutawalli", 'Hon. Musa Umar Bororo', 'Rt. Hon. Aminu Iya Abbas, Hon. Abdullahi Ahmadu, Hon. Umar Nashon'),
    createData('House Services',  "Hon. Bauna P. Myandasa", 'Hon. Haruna Jilantikiri', 'Hon. Musa Umar Bororo, Hon. Bathiya Wesley, Hon. Abdullahi Umar',),
    createData('Public Petitions',  "Hon. Shuaibu Babas", 'Rt. Hon. Kabiru Mijinyawa', 'Rt. Hon. Pwamwakeno M. Mackondo, Hon. Isa Abubakar, Hon. Isa Yahya',),
    createData('Agriculture and Livestock',  "Hon. Abdullahi Ahmadu", 'Hon. Joseph A. Kwada', 'Hon. Hammantukur Yettisuri, Hon. Bathiya Wesley, Hon. Adwawa Dongolok'),
    createData('State Security and Boarder Integration',  "Hon. Joseph A. Kwada", 'Hon. Bauna P. Myandasa', 'Hon. Japhet Kefas, Hon. Haruna Jilantikiri, Hon. Kabiru Mijinyawa'),
    createData('Finance, Appropriation and Budget',  "Hon. Kate Mamuno Raymond", 'Hon. Isa Yahya', 'Hon. Isa Abubakar, Hon. Bauna P. Myandasa, Hon. Adwawa Dongolok'),
    createData('Youths, Sports Culture and Tourism',  "Hon. Musa Umar Bororo", 'Hon. Umar Nashon', 'Hon. Joseph A. Kwada, Hon. Isa Yahya, Hon. Abdullahi Umaru Yapak'),
    createData('Education',  "Hon. Bathiya Wesley", 'Simon Isa', 'Hon. Muhammed Mutawalli, Hon. Alhassan Hammanjod, Hon. Shuaibu Babas'),
    createData('Transport',  "Hon. Ibrahim Musa", 'Hon. Alhassan Hammanjoda', 'Rt. Hon. Pwamwakeno M. Mackondo, Hon. Joseph A. Kwada, Hon. Abdullahi Umar'),
    createData('Environment and Solid Minerals',  "Hon. Abdullahi Umar", 'Rt. Hon. Aminu Iya Abbas', 'Rt. Hon. Kabiru Mijinyawa, Hon. Abdullahi Umaru Yapak, Hon. Adwawa Dongolok'),
    createData('Commerce, Trade and Cooperatives',  "Hon. Shuaibu Musa", 'Hon. Hamidu A. Sajo', 'Hon. Simon Isa, Hon. Ibrahim Musa, Hon. Bauna P. Myandasa'),
    createData('Health and Human Services',  "Hon. Hamidu A. Sajo", 'Hon. Shuaibu Musa', 'Hon. Kate Mamuno Raymond, Hon. Bathiya Wesley, Hon. Abdullahi Umaru Yapak'),
    createData('Housing and Urban Development',  "Hon. Isa Yahya", 'Hon. Abdullahi Ahmadu', 'Hon. Musa Umar Bororo, Hon. Simon Isa, Hon. Hamidu A. Sajo'),
    createData('Information, PAWECCO and SDGs',  "Hon. Japhet Kefas", 'Hon. Isa Abubakar', 'Hon. Abdullahi Ahmadu, Hon. Haruna Jilantikiri, Hon. Kate Mamuno Raymond'),
    createData('Inter-Parliamentary Affairs, Special Duties and IDP’s',  "Hon. Isa Abubakar", 'Hon. Shuaibu Babas', 'Hon. Alhassan Hammanjoda, Hon. Joseph A. Kwada, Hon. Isa Yahya'),
    createData('Judiciary',  "Rt. Hon. Pwamwakeno M. Mackondo", 'Hon. Hammantukur Yettisuri', 'Hon. Musa Umar Bororo, Hon. Kate Mamuno Raymond, Hon. Shuaibu Musa'),
    createData('Local Government and Chieftaincy Affairs',  "Hon. Umar Nashon", 'Hon. Bathiya Wesley', 'Hon. Haruna Jilantikiri, Hon. Simon Isa, Hon. Hamidu A. Sajo'),
    createData('Infrastructure, Community and Rural  Development',  "Hon. Alhassan Hammanjoda", 'Hon. Adwawa Dongolok', 'Hon. Japhet Kefas, Hon. Shuaibu Musa, Hon. Shuaibu Babas'),
    createData('Public Service and Electoral Matters',  "Hon. Adwawa Dongolok", 'Hon. Mohammed Mutawalli', 'Rt. Hon. Aminu Iya Abbas, Hon. Ibrahim Musa, Hon. Isa Abubakar'),
    createData('State Planning',  "Rt. Hon. Kabiru Mijinyawa", 'Hon. Abdullahi Umaru Yapak', 'Hon. Pwamwakeno M. Mackondo, Hon. Hammantukur Yettisuri, Hon. Umar Nashon'),
    createData('Water  Resources',  "Hon. Simon Isa", 'Hon. Abdullahi Umar', 'Hon. Shuaibu Musa, Rt. Hon. Kabiru Mijinyawa, Hon. Alhassan Hammanjoda'),
    createData('Women Affairs and Social Development',  "Hon. Abdullahi Umaru Yapak", 'Hon. Kate Mamuno Raymond', 'Rt. Hon. Aminu Iya Abbas, Hon. Abdullahi Umar, Hon. Hamidu A. Sajo'),
    createData('Works, Land and Survey',  "Hon. Haruna Jilantikiri", 'Hon. Ibrahim Musa', 'Hon. Umar Nashon, Hon. Bauna P. Myandasa, Hon. Shuaibu Babas'),
  ];
  
const Committees = (props) => {
    const [expanded, setExpanded] = useState('');
    const [open, setOpen] = useState(false)

    const handleChange = panel => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };
    

    const classes = useStyles();
    return (
        <Fragment>
            <Helmet>
                <title>Committees</title>
            </Helmet>
            <Header
                logo={logoBlack}
            />
            <Breadcumb
                links={links}
                className="overlay"
                title="Know Your Parliament"
                bgImg={breadcumbImg}
            />
            <Grid className="faqPageArea ptb-104">
                <Grid container spacing={4} className="container">
                    
                     <Paper className={classes.root}>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                        <TableRow>
                            <TableCell style={{fontWeight: "bold"}} >Committee</TableCell>
                            <TableCell style={{fontWeight: "bold"}} align="right">Chairman</TableCell>
                            <TableCell style={{fontWeight: "bold"}} align="right">Deputy Chairman</TableCell>
                            <TableCell style={{fontWeight: "bold", width: "220px"}} align="right">Members</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {rows.map(row => (
                            <TableRow key={row.name}>
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.calories}</TableCell>
                            <TableCell align="right">{row.fat}</TableCell>
                            <TableCell align="right">{row.carbs}</TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                    </Paper>
                </Grid>
            </Grid>
            

            <Footer
                logo={logo}
            />
        </Fragment>
    )

}
export default injectIntl(Committees);
