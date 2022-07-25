import './Navbar.scss'
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";

const Navbar =()=>{

    return(
        <div className='navbar'>
            <div className='wrapper'>
                <div className='search'>
                    <input className='input' type='text' placeholder='Search..'/>
                    <ManageSearchIcon/>
                </div>
                <div className='items'>

                    <div className='item'>
                    <NotificationsNoneOutlinedIcon className="icon" />
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Navbar