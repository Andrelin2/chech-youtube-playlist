const express = require("express")
const mongoose = require("mongoose")
const youtubePlaylist = require("../controllers/youtubePlaylist")
const router = express.Router()

router.get("/main", youtubePlaylist.getMain)
router.get("/addPlaylist", youtubePlaylist.getAddPlaylist)
router.get("/showPlaylist", youtubePlaylist.getShowPlaylist)
router.get("/showPlaylistList", youtubePlaylist.getPublicPlaylists)
router.get("/main", youtubePlaylist.postMain)
router.get("/addPlaylist", youtubePlaylist.postAddPlaylist)
router.get("/showPlaylist", youtubePlaylist.postShowPlaylist)
router.get("/showPlaylistList", youtubePlaylist.postPublicPlaylists)

module.exports = router
