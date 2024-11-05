const mongoose = require("mongoose")


const getMain = async (req,res) => {



    res.render("main",{title:"Main"})
} 

const getAddPlaylist = async (req,res) => {



    res.render("addCheckPlaylist",{title:"AddPlaylist"})
} 

const getShowPlaylist = async (req,res) => {



    res.render("showPlaylist",{title:"ShowPlaylist"})
} 

const getShowPlaylistList = async (req,res) => {



    res.render("showPlaylistList",{title:"showPlaylistList"})
} 

const postMain = async (req,res) => {} 

const postAddPlaylist = async (req,res) => {} 

const postShowPlaylist = async (req,res) => {} 

const postshowPlaylistList = async (req,res) => {} 


module.exports = {
    getMain,
    getAddPlaylist,
    getShowPlaylist,
    getShowPlaylistList,
    postMain,
    postAddPlaylist,
    postShowPlaylist,
    postshowPlaylistList,
}