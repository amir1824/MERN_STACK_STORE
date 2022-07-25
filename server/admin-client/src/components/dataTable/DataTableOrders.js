import "./DataTable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useState ,useEffect} from "react";
import axios from "axios";



const Datatable = () => {
  const [product, setProduct] = useState([])

  const productColumns = [
    { field: "_id", headerName: "ID", width: 70 },
    {
      field: "product",
      headerName: "Product",
      width: 230,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img className="cellImg" src={params.row.img} alt="avatar" />
            {params.row.username}
          </div>
        );
      },
    },
    {
        field: "id",
        headerName: "Order ID",
        width: 230,
    },
    {
      field: "name",
      headerName: "Name",
      width: 230,
    },

  ];
  

  useEffect(() => {

    const fetchProdcuts = async () => {
        const response = await axios.get('http://localhost:8000/api/v1/product/')

        const responseData = response.data.data.data
        
        setProduct(responseData)
 
    }
   
    fetchProdcuts()
}, [])

console.log(product)



  const handleDelete = async (id) => {
    try{
      await axios.delete(`/products/${id}`)
      setProduct(product.filter((item) => item._id !== id));
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
        rows={product}
        columns={productColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
        getRowId={(rows) => rows._id}
   
      />
    </div>
  );
};

export default Datatable;