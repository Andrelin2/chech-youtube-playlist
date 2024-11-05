const mongoose = require("mongoose")
const express = require("express")


const getRegister = async (req, res) => {



    res.render("/getRegister", { title: "Register" })
}

const getLogin =  async (req, res) => {



    res.render("login", { title: "Login" })
}

const postRegister = async (req, res) => { }

const postLogin = async (req, res) => { }

const getAccount = async (req, res) => {



    res.render("/getAccount", { title: "Account" })
}

const getLogout = async (req, res) => {



    res.render("/getLogout", { title: "Logout" })
}

const getDeleteAccount = async (req, res) => {



    res.render("/getDeleteAccount", { title: "DeleteAccount" })
}

module.exports = {
    getRegister,
    getLogin,
    postRegister,
    postLogin,
    getAccount,
    getLogout,
    getDeleteAccount,
}








