import React, { useState } from 'react';
import { injectIntl } from 'react-intl';
import messages from './messages';
import { Grid, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Typography } from '@material-ui/core'
import './style.scss'



const StartupFaq = (props) => {
    const [expanded, setExpanded] = useState('');

    const handleChange = panel => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    const faqs = {
        sub: 'faq',
        title: 'Get Some Answers',
        items: [
            {
                title: 'Who determines the size of the Legislature?',
                details: 'The Adamawa Constitution states that the size of the Legislature must be prescribed by law, therefore the Legislature determines the size of the Legislature',
                id: '1'
            },
            {
                title: 'How can I find the laws governing the Legislature?',
                details: "Statutes, and the Adamawa Constitution, including Articles, are available online through the Legislature's website",
                id: '2'
            },
            {
                title: 'How many types of bills are there?',
                details: 'There are three categories of bills: executive, private, and member’s bills. ',
                id: '3'
            },
        ]
    }

    return (
        <Grid className={`startupFaqArea ${props.className}`}>
            <Grid className="container" container spacing={4}>
                <Grid item xs={12}>
                    <Grid className="startupfaqWrap">
                        <Grid className="faqContent">
                            <span className="sub">{faqs.sub}</span>
                            <h2>{faqs.title}</h2>
                            {faqs.items.map((item, i) => (
                                <ExpansionPanel
                                    key={i}
                                    classes={{
                                        root: 'faqWrapper',
                                        expanded: 'faqWrapperExpanded',
                                    }}
                                    square
                                    expanded={expanded === item.id}
                                    onChange={handleChange(item.id)}>
                                    <ExpansionPanelSummary
                                        className="faqHeader"
                                    >
                                        <p><span>0{i + 1}.</span> {item.title}</p>
                                    </ExpansionPanelSummary>
                                    <ExpansionPanelDetails className="faqDetails">
                                        <p>{item.details}</p>
                                    </ExpansionPanelDetails>
                                </ExpansionPanel>
                            ))}

                        </Grid> 
                        {/* {props.image && <Grid className="faqImg">
                            <img src={props.image} alt="" />
                        </Grid>} */}
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default injectIntl(StartupFaq)
