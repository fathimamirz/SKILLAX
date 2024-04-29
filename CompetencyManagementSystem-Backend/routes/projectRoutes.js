const express = require("express");
// const userAuth = require("../middlewares/authMiddleware");
// const userRole = require("../middlewares/roleMiddleware");

const {addProject, getAllProjects, getProject, updateProject, deleteProject} = require("../controllers/projectController");

//router object
const router = express.Router();

//ADD PROJECT || POST
router.post("/", addProject);

//GET ALL PROJECTS || GET
router.get("/",getAllProjects);

//GET A manager's  PROJECT || GET
router.get("/:id",getProject);

//UPDATE PROJECT || PUT
router.put("/:id",updateProject);

//DELETE PROJECT || DELETE
router.delete("/:id",deleteProject);

module.exports = router;