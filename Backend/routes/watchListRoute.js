import express from "express";
import { getWatchList } from "../controllers/watchListController.js"

const router = express.Router();

// GET WATCHLIST
router.get("/watchlist",getWatchList);

export default router;