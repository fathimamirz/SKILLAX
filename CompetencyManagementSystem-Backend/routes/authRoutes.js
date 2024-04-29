const express = require("express");
const { registerUser, loginUser, logoutUser, UserList, managerList } = require("../controllers/authController");
const userAuth = require("../middlewares/authMiddleware");

//router object
const router = express.Router();

//REGISTER || POST
router.post("/register", registerUser)

//LOGIN || POST
router.post("/login", loginUser)

//LOGOUT || GET
router.get("/logout",userAuth, logoutUser);

// userlist || GET

router.get("/employees",UserList)

// Managerlist || GET

router.get("/managers",managerList)

module.exports = router;