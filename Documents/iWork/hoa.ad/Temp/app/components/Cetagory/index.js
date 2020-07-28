import React from 'react';
import SidebarCard from 'components/SidebarCard/Loadable'
import './style.scss'
const cetagorys = [
    {
        name: 'Lifestyle',
        value: '(05)'
    },
    {
        name: 'Travel',
        value: '(34)'
    },
    {
        name: 'Fashion',
        value: '(89)'
    },
    {
        name: 'Music',
        value: '(96)'
    },
    {
        name: 'Branding',
        value: '(78)'
    },
]

const Cetagory = () => {
    return (
        <SidebarCard
            title="Categories"
        >
            <ul className="categoriesItems">
                {cetagorys.map((item, i) => (
                    <li key={i}>
                        <a href="Javascript:void(0);">
                            {item.name}
                            <span>{item.value}</span>
                        </a>
                    </li>
                ))}
            </ul>
        </SidebarCard>
    );
}

export default Cetagory;
