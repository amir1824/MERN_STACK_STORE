import React, { useContext } from 'react'
import './Sidebar.scss'
import { AuthContext } from '../../context/auth-context';
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';


const SideBar = () => {
    const { auth } = useContext(AuthContext)


    const logOutHandler = () => {

        localStorage.removeItem("authToken")

    }

    return (
        <div className='sidebar'>
            <div className='top'>
                <span className='logo'>Admin Panel</span>
            </div>
            <div className='center'>
                <ul>
                    <p className='title'> MAIN</p>
                    <Link to='/'>

                        <li>
                            <DashboardIcon className='icon' />
                            <span>Dashboard</span>
                        </li>
                    </Link>
                    <p className='title'> LIST</p>
                    <Link to='/users'>
                        <li>
                            <GroupIcon className='icon' />

                            <span> Users</span>
                        </li>
                    </Link>
                    <Link to='/prodcut'>
                        <li>

                            <LocalMallIcon className='icon' />
                            <span>Products</span>
                        </li>
                    </Link>


                    <Link to='/orders'>
                    <li>


                        <LocalShippingIcon className='icon' />
                        <span>Orders</span>
                    </li>
                    </Link>
                    <li>
                        <QueryStatsIcon className='icon' />
                        <span>Stats</span>
                    </li>
                    <p className='title'> USER</p>
                    <li>
                        <PersonIcon className='icon' />
                        <span>Profile</span>
                    </li>
                    {
                        auth && <li>
                            <LogoutIcon className='icon' />
                            <Link to='/' onClick={logOutHandler}>Logout</Link>
                        </li>

                    }
                </ul>
            </div>

        </div>
    )

}

export default SideBar