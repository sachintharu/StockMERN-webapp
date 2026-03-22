import mongoose from "mongoose"

const watchListSchema = new mongoose.Schema({
   name: String,
  price: Number,
  percent: String,
  isDown: Boolean,
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  }
}, { timestamps: true });


const watchListModel = mongoose.model("watchlist", watchListSchema);
export default watchListModel;