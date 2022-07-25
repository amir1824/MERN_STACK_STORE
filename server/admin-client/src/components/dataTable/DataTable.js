import "./DataTable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useState ,useEffect} from "react";
import axios from "axios";
import { userColumns ,userRows} from "../../datatablesource";


const Datatable = () => {
  const [users, setUsers] = useState([])
  

  useEffect(() => {

    const fetchUsers = async () => {
        const response = await axios.get('http://localhost:8000/api/v1/users/')

        const responseData = response.data.data.users
        
        setUsers(responseData)
       


    }
   
    fetchUsers()
}, [])

console.log(users)



  const handleDelete = async (id) => {
    try{
      await axios.delete(`/users/${id}`)
      setUsers(users.filter((item) => item._id !== id));
    }catch(error){

    }
   
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row._id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
     
      <DataGrid
        className="datagrid"
        rows={users}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
        getRowId={(rows) => rows._id}

       
      />
    </div>
  );
};

export default Datatable;