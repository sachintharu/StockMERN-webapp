import React from 'react'
import "./dashboard.css"
import axios from "axios"
import { useState, useEffect } from 'react';

import {

  KeyboardArrowDown,
  KeyboardArrowUp,

} from "@mui/icons-material";
const WatchList = () => {
  const [watchList, setWatchList] = useState([]);
  //Fetch data
  const getWatchList = async () => {

  

    try {
      const token = localStorage.getItem("token");

      const res = await axios.get("http://localhost:4000/api/v1/watchlist", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.data.success) {
        setWatchList(res.data.data);
      }
    } catch (error) {
      console.log(error);
    }

  }
  useEffect(() => {
    getWatchList();
  }, []);

  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input type="text" name='search' id='search' placeholder='Search eg:infy, bse,nifty fut weekly,gold mcx' className='search' />

        <span className='counts'>{watchList.length}/9</span>
      </div>
      <ul className='list'>
        {watchList.map((stock, index) => {
          return <WatchListItem stock={stock} key={index} />;
        })}


      </ul>

    </div>
  )
}

export default WatchList

const WatchListItem = ({ stock }) => {

  return (<li>
    <div className="item">
      {/* Stock Name */}
      <p className={stock.isDown ? "down" : "up"}>
        {stock.name}
      </p>

      {/* Stock Info */}
      <div className="itemInfo">
        <span className="percent">{stock.percent}</span>

        {stock.isDown ? (
          <KeyboardArrowDown className="down" />
        ) : (
          <KeyboardArrowUp className="up" />
        )}

        <span className="price">{stock.price}</span>
      </div>
    </div>
  </li>
  )
}



