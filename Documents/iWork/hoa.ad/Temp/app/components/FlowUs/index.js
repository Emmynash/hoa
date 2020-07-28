import React from 'react';
import SidebarCard from 'components/SidebarCard/Loadable'
import './style.scss'
import { Button } from '@material-ui/core'
const flows = [
    {
        name: 'facebook',
        link: "https://web.facebook.com/Adamawa-State-House-of-Assembly-108800890614840/?modal=admin_todo_tour"
    }, 
    {
        name: 'twitter',
        link: "https://twitter.com/AdamawaAssembly"
    }, 
    {
        name: 'youtube',
        link: "https://www.youtube.com/channel/UC_NcAKczWocIOCehN-TdaEQ?view_as=subscriber"
    },
]

const FlowUs = () => {
    return (
        <SidebarCard
            title="Follow Us"
        >
            <ul className="flowusItem">
                {flows.map((item, i) => (
                    <li key={i}>
                        <Button
                            className={item.name}
                            component="a"
                            href={item.link}>
                            <i className={`fa fa-${item.name}`}></i>
                        </Button>
                    </li>
                ))}
            </ul>
        </SidebarCard>
    );
}

export default FlowUs;
