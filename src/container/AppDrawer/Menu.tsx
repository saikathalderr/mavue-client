import React from "react";
import List from '@mui/material/List';
import MenuItem from './MenuItem'
import {IMenu} from "./interface";
import AssignmentIcon from '@mui/icons-material/Assignment';
import Brightness1Icon from '@mui/icons-material/Brightness1';
export default function Menu() {

    const menuItems: IMenu[] = [
        {
            title: 'Today articles',
            icon: AssignmentIcon,
            iconColor: 'secondary',
            path: '',
            items: [
                {
                    title: 'Articles',
                    path: '/articles',
                    iconColor: 'error',
                    icon: Brightness1Icon
                },
                {
                    title: 'Users',
                    path: '/users',
                    iconColor: 'info',
                    icon: Brightness1Icon
                },
                {
                    title: 'Tasks',
                    path: '',
                    iconColor: 'warning',
                    icon: Brightness1Icon
                }
            ]
        }
    ]
    return (
        <List
            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
            aria-label="contacts"
        >
            {
                menuItems.map((menu: IMenu) => {
                    return <MenuItem menu={menu} />
                })
            }
        </List>
    );
}