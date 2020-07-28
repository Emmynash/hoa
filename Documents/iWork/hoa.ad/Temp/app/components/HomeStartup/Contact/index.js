import React, { Component } from 'react';
import { injectIntl } from 'react-intl';
import messages from 'components/HomeMain/Contact/messages';
import { Grid, Button, TextField, InputAdornment, FormLabel } from '@material-ui/core'
import SectionTitle from 'components/SectionTitle/Loadable'
import Joi from 'joi-browser'
import { toast } from 'react-toastify'
import './style.scss'

// images 
import user from 'images/icons/user.png'
import phone from 'images/icons/phone.png'
import email from 'images/icons/email.png'
import contact from 'images/icons/contact2.png'

class StartupContact extends Component {
    state = {
        fname: '',
        email: '',
        phone: '',
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
        }
        const { error } = Joi.validate(form, this.schema, options)
        if (!error) return null;

        const errors = {};
        for (let item of error.details) errors[item.path[0]] = item.message
        return errors;
    };

    submitHandler = (e) => {
        e.preventDefault();
        const error = this.validate();
        if (error) {
            this.setState({
                error: error || {}
            })
        } else {
            this.setState({
                fname: '',
                email: '',
                phone: '',
            })
            toast.success('Successfully Done')
        }
    }

    t(msg, values) {
        return this.props.intl.formatMessage(msg, values);
    }

    render() {
        return (
            <Grid className="startupContactArea">
                <form onSubmit={this.submitHandler}>
                    <Grid
                        container
                        spacing={4}
                        alignItems="center"
                        className="container">
                        <Grid item xs={12}>
                            <SectionTitle
                                title={this.t({ ...messages.GetInTouch })}
                                subtitle={this.t({ ...messages.Action })}
                                stoketext={this.t({ ...messages.Quote })}
                                className="textLeft"
                            />
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <Grid container spacing={4}>
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
                                    <FormLabel className="inputLabel">{this.t({ ...messages.YourMessage })}</FormLabel>
                                    <TextField
                                        variant="outlined"
                                        fullWidth
                                        multiline
                                        classes={{
                                            root: 'inputField inputTextarea',
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Button type="submit" className="loadmore radiusOff">
                                        {this.t({ ...messages.GetAQuote })}
                                        <svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="arrow-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="svg-inline--fa fa-arrow-right fa-w-14 fa-fw"><path fill="currentColor" d="M216.464 36.465l-7.071 7.07c-4.686 4.686-4.686 12.284 0 16.971L387.887 239H12c-6.627 0-12 5.373-12 12v10c0 6.627 5.373 12 12 12h375.887L209.393 451.494c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l211.051-211.05c4.686-4.686 4.686-12.284 0-16.971L233.434 36.465c-4.686-4.687-12.284-4.687-16.97 0z"></path></svg>
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <Grid className="contactImg">
                                <img src={contact} alt="" />
                            </Grid>
                        </Grid>
                    </Grid>
                </form>
            </Grid >
        )
    }
}


export default injectIntl(StartupContact)
