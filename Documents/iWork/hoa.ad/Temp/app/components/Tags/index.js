import React from 'react';
import SidebarCard from 'components/SidebarCard/Loadable'
import { Button } from '@material-ui/core'
import './style.scss'


const cetagorys = ['Travel', 'Lifestyle', 'Photo', 'Adventures', 'Musician', '08', 'Web', 'app', 'games', 'Html', 'css']

const Tags = () => {
    return (
        <SidebarCard
            title="Tags"
        >
            <ul className="tagsWrap">
                {cetagorys.map((item, i) => (
                    <li key={i}>
                        <Button component="a" href="Javascript:void(0);">{item}</Button>
                    </li>
                ))}
            </ul>
        </SidebarCard>
    );
}

export default Tags;
