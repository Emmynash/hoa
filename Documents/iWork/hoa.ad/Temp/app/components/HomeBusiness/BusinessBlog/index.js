import React from 'react';
import { injectIntl } from 'react-intl';
import messages from 'components/HomeMain/Blog/messages';
import { Grid } from '@material-ui/core'
import { Link } from 'react-router-dom'
import SectionTitle from 'components/SectionTitle/Loadable'
import 'components/HomeMain/Blog/style.scss'
import './style.scss'
// images 
import image1 from 'images/blogs/img4.jpg'
import image2 from 'images/blogs/img5.jpg'
import image3 from 'images/blogs/img6.jpg'
import bg from 'images/bg/blog.jpg'
const BusinessBlog = (props) => {
    const blogs = {
        title: `${props.intl.formatMessage({ ...messages.NewsFeeds })}`,
        subtitle: `${props.intl.formatMessage({ ...messages.blog })}`,
        items: [
            {
                image: image1,
                title: `${props.intl.formatMessage({ ...messages.Loremipsumdolorsitametconsectetur })} 01`,
                details: `${props.intl.formatMessage({ ...messages.details })}`,
                subtitle: `${props.intl.formatMessage({ ...messages.BusinessIT })}`,
                author: 'Mr Jon',
                date: '23 May 2019',
                id: 1
            },
            {
                image: image2,
                title: `${props.intl.formatMessage({ ...messages.Loremipsumdolorsitametconsectetur })} 02`,
                details: `${props.intl.formatMessage({ ...messages.details })}`,
                subtitle: `${props.intl.formatMessage({ ...messages.CreativeSoft })}`,
                author: 'Mr kaji',
                date: '20 May 2019',
                id: 2
            },
            {
                image: image3,
                title: `${props.intl.formatMessage({ ...messages.Loremipsumdolorsitametconsectetur })} 03`,
                details: `${props.intl.formatMessage({ ...messages.details })}`,
                subtitle: `${props.intl.formatMessage({ ...messages.Creativepark })}`,
                author: 'Jone doe',
                date: '05 Jan 2019',
                id: 3
            },
        ]
    }
    return (
        <Grid style={{ background: `url(${bg}) no-repeat center center / cover` }} className="businessBlogArea overlay">
            <Grid
                container
                spacing={4}
                className="container">
                <Grid item xs={12}>
                    <SectionTitle
                        title={blogs.title}
                        subtitle={blogs.subtitle}
                        stoketext={blogs.subtitle}
                        className="sectionTitleWhite sectionTitleWhite2"
                    />
                </Grid>
                {blogs.items.map((item, i) => (
                    <Grid key={i} item lg={4} md={4} sm={6} xs={12}>
                        <Grid className="blogWrap">
                            <Grid className="blogImg">
                                <img src={item.image} alt="" />
                            </Grid>
                            <ul className="blogMeta">
                                <li><i className="fa fa-user"></i>By {item.author}</li>
                                <li><i className="fa fa-calendar-o"></i> {item.date}</li>
                                <li><i className="fa fa-share"></i></li>
                            </ul>
                            <Grid className="blogContent">
                                <h3><Link to={`/blog-details/${item.id}`}>{item.title}</Link></h3>
                                <p>{item.details}</p>
                            </Grid>
                            <ul className="tagsWrap">
                                <li>Design</li>
                                <li>Tech</li>
                                <li><i className="fa fa-share"></i></li>
                            </ul>
                        </Grid>
                    </Grid>
                ))}
            </Grid>
        </Grid >
    );
}

export default injectIntl(BusinessBlog)
