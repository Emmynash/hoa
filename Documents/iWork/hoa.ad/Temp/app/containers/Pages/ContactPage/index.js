import React, { Fragment, Component } from 'react';
import { Helmet } from 'react-helmet';
import { injectIntl } from 'react-intl';
import messages from 'components/messages';
import { Grid, Button, TextField, InputAdornment, FormLabel } from '@material-ui/core'
import Joi from 'joi-browser'
import { toast } from 'react-toastify'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import axios from 'axios';
// const nodemailer = require('nodemailer');
// const cors = require('cors')({ origin: true });
// components 
import Header from 'components/Header/Loadable'
import SectionTitle from 'components/SectionTitle/Loadable'
import Breadcumb from 'components/Breadcumb/Loadable'
import Footer from 'components/Footer/Loadable'
// import CallToAction from 'components/CallToAction/Loadable'

import './style.scss'

// images 
import logo from 'images/logo-white.png'
// import logoBlack from 'images/logo.png'
import breadcumbImg from 'images/bg/case1.png'
import user from 'images/icons/user.png'
import phone from 'images/icons/phone.png'
import email from 'images/icons/email.png'
import subject from 'images/icons/subject.png'

import emailIcon from 'images/email.png'
import phoneIcon from 'images/phone.png'
import mapIcon from 'images/map.png'


const contactInfo = [
    {
        name: 'Phone Number',
        value1: '***',
        value2: '+234 803 6477 424',
        icon: phoneIcon,
        btn: 'Call Us Now',
        link: 'tel:+2348036477424',
        id: 1
    },
    {
        name: 'Email Address',
        value1: '***',
        value2: 'info@hoa.ad.gov.ng',
        icon: emailIcon,
        btn: 'Mail Us Now',
        link: 'mailto:info@hoa.ad.gov.ng',
        id: 2
    },
    {
        name: 'Office Address',
        value1: 'P.M.B 2080, Gibson Jalo Road, Army',
        value2: 'Barack Road, Jimeta Yola.',
        icon: mapIcon,
        btn: 'Get Here',
        link: 'Jhttps://www.google.com/maps/place/House+Of+Assembly+Yola/@9.2370963,12.4496434,17z/data=!3m1!4b1!4m5!3m4!1s0x10fc6ca78500bb23:0x1c52b0d8d2a83d5e!8m2!3d9.237091!4d12.4518321',
        id: 3
    },
]

// let transporter = nodemailer.createTransport({
//     host: 'smtp.gmail.com',
//     port: 465,
//     secure: true,
//     auth: {
//         user: 'emmy4nash@gmail.com',
//         pass: '!@R00t991'
//     }
// });

const links = [
    {
        name: 'Home',
        link: '/'
    },
    {
        name: 'Contact Us'
    }
]

class ContactPage extends Component {
    state = {
        fname: '',
        email: '',
        phone: '',
        message: '',
        selectedPlace: {
            name: "Adamawa State House of Assembly"
        },
        error: {},
    }
    schema = {
        email: Joi.string().email({ minDomainAtoms: 2 }).required().error(errors => {
            errors.forEach(err => {
                switch (err.type) {
                    case "string.required":
                        err.message = `${this.t({ ...messages.EmailcanNobeempty })}`;
                        break;
                    case "string.email":
                        err.message = `${this.t({ ...messages.EmailMastbeaValidemail })}`;
                        break;
                    default:
                        break;
                }
            });
            return errors;
        }),
        fname: Joi.string().required().error(errors => {
            errors.forEach(err => {
                switch (err.type) {
                    case "string.required":
                        err.message = `${this.t({ ...messages.FirstNamecanNobeempty })}`;
                        break;
                    default:
                        break;
                }
            });
            return errors;
        }),
        phone: Joi.string().required().error(errors => {
            errors.forEach(err => {
                switch (err.type) {
                    case "string.required":
                        err.message = `${this.t({ ...messages.PhonecanNobeempty })}`;
                        break;
                    default:
                        break;
                }
            });
            return errors;
        }),
        message: Joi.string().required().error(errors => {
            errors.forEach(err => {
                switch (err.type) {
                    case "string.required":
                        err.message = `Message body cannot be empty`;
                        break;
                    default:
                        break;
                }
            });
            return errors;
        })
    }
    changeHandler = event => {
        const error = { ...this.state.error };
        const errorMassage = this.validationProperty(event);
        if (errorMassage) {
            error[event.target.name] = errorMassage;
        } else {
            delete error[event.target.name];
        }
        this.setState({
            [event.target.name]: event.target.value,
            error
        })
    };

    validationProperty = event => {
        const Obj = { [event.target.name]: event.target.value };
        const schema = { [event.target.name]: this.schema[event.target.name] }
        const { error } = Joi.validate(Obj, schema);
        return error ? error.details[0].message : null
    };

    validate = () => {
        const options = { abortEarly: false }
        const form = {
            email: this.state.email,
            fname: this.state.fname,
            phone: this.state.phone,
            message: this.state.message
        }
        const { error } = Joi.validate(form, this.schema, options)
        if (!error) return null;

        const errors = {};
        for (let item of error.details) errors[item.path[0]] = item.message
        return errors;
    };

    submitHandler = async (e) => {
        e.preventDefault();
        const error = this.validate();
        const {message, fname, phone, email} = this.state;
        const url = "https://us-central1-hoa-adamawa-state.cloudfunctions.net/submitContactForm";

        if (error) {
            this.setState({
                error: error || {}
            })
        }

        try {
            await axios.post("https://cors-anywhere.herokuapp.com/" + url, { email, phone, fname, message });
             this.setState({
                fname: '',
                email: '',
                phone: '',
                message: ''
            })
            console.log('Form submitted!')
           return toast.success('Successfully Done')
        } catch (error) {
            console.log(error)
        }
       
    }

    t(msg, values) {
        return this.props.intl.formatMessage(msg, values);
    }
    render() {
        return (
            <Fragment>
                <Helmet>
                    <title>Contact Us</title>
                </Helmet>
                <Header
                    className="headerStyleWhite"
                    logo={logo}
                />
                <Breadcumb
                    links={links}
                    className="overlay breadcumbStyleTwo"
                    title="Contact us"
                    bgImg={breadcumbImg}
                    stoketext="Talk"
                />
                <Grid className="contactpageArea bgGray ptb-104">
                    <Grid className="googleMap">
                        <Map 
                            google={this.props.google} zoom={14}
                            initialCenter={{
                                lat: 9.2370963,
                                lng: 12.4496434
                              }}>
                         <Marker onClick={this.onMarkerClick}
                            name={'Current location'} />
                    
                            <InfoWindow onClose={this.onInfoWindowClose}>
                                <div>
                                    <h1>{this.state.selectedPlace.name}</h1>
                                </div>
                            </InfoWindow>
                        </Map>
                    </Grid>
                    <Grid className="container" spacing={4} container>
                        <form onSubmit={this.submitHandler}>
                            <Grid item lg={6} xs={12}>
                                <Grid spacing={4} container>
                                    <Grid item xs={12}>
                                        <SectionTitle
                                            title={this.t({ ...messages.GetInTouch })}
                                            subtitle='estimate'
                                            stoketext='Quote'
                                            className="textLeft"
                                        />
                                    </Grid>
                                    <Grid item sm={6} xs={12}>
                                        <FormLabel className="inputLabel">{this.t({ ...messages.name })}</FormLabel>
                                        <TextField
                                            variant="outlined"
                                            value={this.state.fname}
                                            name="fname"
                                            onChange={this.changeHandler}
                                            fullWidth
                                            classes={{
                                                root: 'inputField',
                                            }}
                                            InputProps={{
                                                endAdornment: <InputAdornment position="end">
                                                    <img src={user} alt="" />
                                                </InputAdornment>,
                                            }}
                                            error={this.state.error.fname && true}
                                            helperText={this.state.error.fname && this.state.error.fname}
                                        />
                                    </Grid>
                                    <Grid item sm={6} xs={12}>
                                        <FormLabel className="inputLabel">{this.t({ ...messages.Email })}</FormLabel>
                                        <TextField
                                            variant="outlined"
                                            value={this.state.email}
                                            name="email"
                                            onChange={this.changeHandler}
                                            fullWidth
                                            classes={{
                                                root: 'inputField',
                                            }}
                                            InputProps={{
                                                endAdornment: <InputAdornment position="end">
                                                    <img src={email} alt="" />
                                                </InputAdornment>,
                                            }}
                                            error={this.state.error.email && true}
                                            helperText={this.state.error.email && this.state.error.email}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <FormLabel className="inputLabel">{this.t({ ...messages.Phone })}</FormLabel>
                                        <TextField
                                            variant="outlined"
                                            value={this.state.phone}
                                            name="phone"
                                            onChange={this.changeHandler}
                                            fullWidth
                                            classes={{
                                                root: 'inputField',
                                            }}
                                            InputProps={{
                                                endAdornment: <InputAdornment position="end">
                                                    <img src={phone} alt="" />
                                                </InputAdornment>,
                                            }}
                                            error={this.state.error.phone && true}
                                            helperText={this.state.error.phone && this.state.error.phone}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <FormLabel className="inputLabel">Message</FormLabel>
                                        <TextField
                                            variant="outlined"
                                            fullWidth
                                            multiline
                                            value={this.state.message}
                                            name="message"
                                            onChange={this.changeHandler}
                                            classes={{
                                                root: 'inputField inputTextarea',
                                            }}
                                            InputProps={{
                                                endAdornment: <InputAdornment position="end">
                                                    <img src={subject} alt="" />
                                                </InputAdornment>,
                                            }}
                                        />
                                    </Grid>

                                    <Grid item xs={12} >
                                        <Button type="submit" className="loadmore radiusOff">Send</Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </form>
                    </Grid>
                </Grid>
                <Grid className="contactNowArea ptb-104">
                    <Grid className="container" spacing={4} container>
                        <Grid xs={12} item>
                            <SectionTitle
                                title='Contact Now'
                                subtitle='Contact'
                                stoketext='Contact'
                            />
                        </Grid>

                        {contactInfo.map((item, i) => (
                            <Grid key={i} item md={4} xs={12} sm={6}>
                                <Grid className="contactNowWrap">
                                    <Grid className="contactNowInfo">
                                        <img src={item.icon} alt="" />
                                        <h3>{item.name}</h3>
                                        <span>{item.value1}</span>
                                        <span>{item.value2}</span>
                                        <Button component="a" href={item.link}>{item.btn}</Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        ))}

                    </Grid>
                </Grid>
                {/* <CallToAction /> */}
                <Footer
                    // logo={logoBlack}
                    className="blackFooterArea"
                />
            </Fragment>
        )
    }
}
export default GoogleApiWrapper({
    apiKey: ('AIzaSyB6915TJf9GmA_KQr-j8Wma94YdoJTq7nU')
})(injectIntl(ContactPage))
