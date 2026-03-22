import watchListModel from "../models/watchListModel.js";


// Get watchlist
export const getWatchList= async(req,res)=>{
    try {
        const userId = req.userId; // get userId from auth middleware
        console.log("Logged in User ID:", userId);
        
        const data = await watchListModel.find({userId});
      res.status(200).send({
      success: true,
      data,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error fetching watchlist",
      error,
    });
  }
}