import React from 'react'
import './Home.scss'
import SideBar from '../../components/sidebar/SideBar'
import Navbar from '../../components/navbar/Navbar'
import Widget from '../../components/widget/Widget'
import Featured from '../../components/features/Featured'
import Charts from '../../components/charts/Charts'
import Table from '../../components/table/Table'


const Home = () => {
  return (
    <div className='home'>
      <SideBar />
      <div className='homeContainer'>
        < Navbar />
        <div className='widgets'>
          <Widget type='user' />
          <Widget type='order' />
          <Widget type='earning' />
          <Widget type='balance' />
        </div>
        <div className="charts">
          <Featured />
          <Charts title="Last 6 Months (Revenue)" aspect={2 / 1} />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <Table />
        </div>


      </div>

    </div>
  )


}
export default Home