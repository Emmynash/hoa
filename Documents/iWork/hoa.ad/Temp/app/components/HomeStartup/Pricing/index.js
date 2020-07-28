import React from 'react';
import { injectIntl } from 'react-intl';
import messages from './messages';
import { Grid, Button } from '@material-ui/core'
import SectionTitle from 'components/SectionTitle/Loadable'
import './style.scss'

const StartupPricing = (props) => {

    const pricing = {
        stoketext: `${props.intl.formatMessage({ ...messages.Plans })}`,
        subtitle: `${props.intl.formatMessage({ ...messages.price })}`,
        title: `${props.intl.formatMessage({ ...messages.PricePlans })}`,
        plans: [
            {
                title: `${props.intl.formatMessage({ ...messages.FreeBasicPlans })}`,
                lavel: `${props.intl.formatMessage({ ...messages.NewValue })}`,
                text: `${props.intl.formatMessage({ ...messages.RepresentingallofthemajortelecomcompaniesGeeks })}`,
                value: '$0 ',
                date: `${props.intl.formatMessage({ ...messages.Month })}`,
                items: ['Voice and Data Systems', 'Crucial to the success', ' Failure of most', 'IT businesses', 'Companies provide ', 'Internet connections', ' Maintenance by internal'],
                id: 1,
                color: '#ff5f5f'
            },
            {
                title: `${props.intl.formatMessage({ ...messages.AdvancedPlans })}`,
                lavel: `${props.intl.formatMessage({ ...messages.Trend })}`,
                text: `${props.intl.formatMessage({ ...messages.RepresentingallofthemajortelecomcompaniesGeeks })}`,
                value: '$19.99 ',
                date: `${props.intl.formatMessage({ ...messages.Month })}`,
                items: ['Voice and Data Systems', 'Crucial to the success', ' Failure of most', 'IT businesses', 'Companies provide ', 'Internet connections', ' Maintenance by internal'],
                id: 2,
                color: '#5f79ff'
            },
            {
                title: `${props.intl.formatMessage({ ...messages.PopularPlans })}`,
                lavel: `${props.intl.formatMessage({ ...messages.NewValue })}`,
                text: `${props.intl.formatMessage({ ...messages.RepresentingallofthemajortelecomcompaniesGeeks })}`,
                value: '$19.99 ',
                date: `${props.intl.formatMessage({ ...messages.Month })}`,
                items: ['Voice and Data Systems', 'Crucial to the success', ' Failure of most', 'IT businesses', 'Companies provide ', 'Internet connections', ' Maintenance by internal'],
                id: 2,
                color: '#ff945f'
            },
        ]
    }

    return (
        <Grid className={props.className ? `${props.className} startupPricingArea` : 'startupPricingArea'}>
            <Grid className="container" spacing={4} container>
                <Grid item xs={12}>
                    <SectionTitle
                        title={pricing.title}
                        subtitle={pricing.subtitle}
                        stoketext={pricing.stoketext}
                    />
                </Grid>
                {pricing.plans.map((item, i) => (
                    <Grid key={i} item md={4} sm={6} xs={12}>
                        <Grid className="pricingWrap overlay">
                            <span style={{ background: item.color }} className="lavel">{item.lavel}</span>
                            <h4>{item.title}</h4>
                            <p>{item.text}</p>
                            <h3>{item.value} <span>/{item.date}</span></h3>
                            <ul className="pricingItem">
                                {item.items.map(item => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                            <div className="textCenter">
                                <Button><svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="arrow-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="svg-inline--fa fa-arrow-right fa-w-14 fa-fw"><path fill="currentColor" d="M216.464 36.465l-7.071 7.07c-4.686 4.686-4.686 12.284 0 16.971L387.887 239H12c-6.627 0-12 5.373-12 12v10c0 6.627 5.373 12 12 12h375.887L209.393 451.494c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l211.051-211.05c4.686-4.686 4.686-12.284 0-16.971L233.434 36.465c-4.686-4.687-12.284-4.687-16.97 0z"></path></svg></Button>
                            </div>
                        </Grid>
                    </Grid>
                ))}

            </Grid>
        </Grid>
    );
}

export default injectIntl(StartupPricing)
