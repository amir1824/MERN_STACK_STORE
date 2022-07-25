import './Widget.scss'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonIcon from '@mui/icons-material/Person';

const Widget =({type})=>{

    let data;
    
    
    switch(type){
        case 'user':
            data={
                title:'USERS',
                isMoney: false,
                link:'See all users',
                icon: <PersonIcon className='icon'/>
            }
            break;
            case 'order':
            data={
                title:'Orders',
                isMoney: false,
                link:'View all orders',
                icon: <PersonIcon className='icon'/>
            }
            break;
            case 'earning':
            data={
                title:'Erarings',
                isMoney: true,
                link:'View all earning',
                icon: <PersonIcon className='icon'/>
            }
            break;
            case 'balance':
            data={
                title:'Balance',
                isMoney: true,
                link:'See details',
                icon: <PersonIcon className='icon'/>
            }
            break;
            default:
            break;
        
    }
   
    return( 
        <div className="widget">
            <div className="left">
                <span className='title'> {data.title  } </span>
                <span className='title'> {data.isMoney &&  `${420}$` } </span>
                <span className='title'> {data.title} </span>
            </div>
            <div className="right"> 
              <div className='percentage positive'>
                  <KeyboardArrowUpIcon/>
                  20%
              </div>
              <PersonIcon className='icon'/>

            </div>
             </div>
    )

}
export default Widget