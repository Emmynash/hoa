import React from 'react';
import { TextField, InputAdornment } from '@material-ui/core'
import SidebarCard from 'components/SidebarCard/Loadable'
import './style.scss'
const SearchSidebar = ({ onChange, value }) => {
    return (
        <SidebarCard
            title="Search"
        >
            <TextField
                variant="outlined"
                value={value}
                fullWidth
                className="searchField"
                onChange={onChange}
                InputProps={{
                    endAdornment: <InputAdornment position="end">
                        <i className="fa fa-search"></i>
                    </InputAdornment>,
                }}
            />
        </SidebarCard>
    );
}

export default SearchSidebar;
