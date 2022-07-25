import "./SingleCustomer.scss";
import SideBar from "../../components/sidebar/SideBar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/charts/Charts";
import List from "../../components/table/Table";

const SingleCustomer = () => {
  return (
    <div className="single">
      <SideBar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src="https://scontent.fsdv2-1.fna.fbcdn.net/v/t1.18169-9/17903668_10211863241763762_4715551952527607641_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=iPEKkTaan1EAX8Yw6EH&_nc_ht=scontent.fsdv2-1.fna&oh=00_AT9dkYpra1B3ZkXAvkSRw8bI3Sc9C3El2j6QMaC6ixqTdw&oe=62F2E26B"
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">Roey Botbol</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">Roey@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">+972542514774</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">
                  Mashabei Sade
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">Israel</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="User Spending ( Last 6 Months)" />
          </div>
        </div>
        <div className="bottom">
        <h1 className="title">Last Excitements</h1>
          <List/>
        </div>
      </div>
    </div>
  );
};

export default SingleCustomer;