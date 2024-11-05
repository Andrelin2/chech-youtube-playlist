const express = require("express")
const user = require("../controllers/user")

const router = express.Router()

router.get("/login",user.getLogin)
router.post("/login",user.postLogin)
router.get("/register",user.getRegister)
router.post("/register",user.postRegister)
router.get("/logout",user.getAccount)
router.get("/account",user.getLogout)
router.post("/deleteUser",user.getDeleteAccount)


module.exports = router