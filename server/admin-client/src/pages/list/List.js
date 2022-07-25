
import "./List.scss"
import SideBar from "../../components/sidebar/SideBar"
import Navbar from "../../components/navbar/Navbar"
import Datatable from "../../components/dataTable/DataTable"

const List = () => {
  return (
    <div className="list">
      <SideBar/>
      <div className="listContainer">
        <Navbar/>
        <Datatable/>
      </div>
    </div>
  )
}

export default List