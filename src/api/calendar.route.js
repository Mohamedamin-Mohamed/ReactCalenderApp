import express from "express"
import CalendarCtrl from "./calendar.controller.js"

const router = express.Router()

router.route("/day").get(CalendarCtrl.apiGetDay)
router.route("/todo").post(CalendarCtrl.apiPostTodo)
router.route("/:id")
    .get(CalendarCtrl.apiGetDay)
    .put(CalendarCtrl.apiUpdateTodo)
    .delete(CalendarCtrl.apiDeleteTodo)

router.route("/").get((req, res) => res.send("test"))

export default router