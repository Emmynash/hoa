import React from 'react';
import SidebarCard from 'components/SidebarCard/Loadable'
import { Link } from 'react-router-dom'
import './style.scss'

// images 
import image1 from 'images/blogs/Ahmadu-Fintiri.jpg'
import image2 from 'images/blogs/Adamawa-House-of-Assembly-768x576.jpg'
import image3 from 'images/blogs/adamawa tribunal.jpg'
import image4 from 'images/blogs/dss.jpg'
// import image5 from 'images/blogs/img5.jpg'
// import image6 from 'images/blogs/img6.jpg'

const cetagorys = [
    {
        image: image1,
        title: '2020 Budget presentation by His Excellency Gov. Ahmadu Fintiri',
        time: '6 Hours ago',
        link: "/news-details/1",
        id: 1
    },
    {
        image: image2,
        title: 'Adamawa Assembly sets agenda for its operation',
        time: '2 Hours ago',
        link: "/news-details/2",
        id: 2
    },
    {
        image: image3,
        title: 'Tribunal upholds Adamawa ex-speaker’s election',
        time: '20 min ago',
        link: "/news-details/3",
        id: 3
    },
    {
        image: image4,
        title: 'SSS arrest suspected fake doctor accused of killing 15 people',
        time: '10 min ago',
        link: "/news-details/4",
        id: 4
    },
    
]

const Feeds = () => {
    return (
        <SidebarCard
            title="Feeds"
        >
            <ul className="feedsItems">
                {cetagorys.map((item, i) => (
                    <li key={i}>
                        <Link className="feedItem" to={item.link}>
                            <span className="feedImg">
                                <img src={item.image} alt="" width="250px" height="100px" />
                            </span>
                            <div className="feedContent">
                                <h5>{item.title}</h5>
                                {/* <span><i className="fa fa-clock-o"></i> {item.time}</span> */}
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </SidebarCard>
    );
}

export default Feeds;
