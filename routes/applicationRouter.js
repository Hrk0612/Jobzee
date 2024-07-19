import express from "express";
import {employerGetAllApplication, jobSeekerGetAllApplication, jobSeekerDeleteApplication, postApplication} from '../controllers/applicationController.js'
import {isAuthorized} from "../middlewares/auth.js"

const router = express.Router()

router.post("/post", isAuthorized, postApplication)
router.get("/jobseeker/getall", isAuthorized, jobSeekerGetAllApplication)
router.get("/employer/getall", isAuthorized, employerGetAllApplication)
router.delete("/delete/:id", isAuthorized, jobSeekerDeleteApplication)


export default router