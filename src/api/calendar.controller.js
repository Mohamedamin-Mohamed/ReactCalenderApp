import CalendarDAO from "..dao/calendarDAO.js"

export default class CalendarController {
    static async apiPostReview(req, res, next) {
        try {
            const dayId = parseInt(req.body.dayId)
            const todo = req.body.todo
            const user = req.body.user

            const todoResponse = await CalendarDAO.addTodo(
                dayId,
                user,
                todo
            )
            res.json({ status: "success" })
        } catch (e) {
            res.status(500).json({ error: e.message })
        }
    }

    static async apiGetTodo(req, res, next) {
        try {
            let id = req.params.id || {}
            let todo = await CalendarDAO.getTodo(id)
            if (!todo) {
                res.status(404).json({ error: "Not found" })
                return
            }
            res.json(todo)
        } catch (e) {
            console.log(`api, ${e}`)
            res.status(500).json({ error: e })
        }
    }

    static async apiUpdateTodo(req, res, next) {
        try {
            const todoId = req.params.id
            const todo = req.body.todo
            const user = req.body.user

            const todoResponse = await CalendarDAO.updateTodo(
                dayId,
                user,
                todo
            )

            var { error } = todoResponse
            if (error) {
                res.status(400).json({ error })
            }

            if (todoResponse.modifiedCount === 0) {
                throw new Error(
                    "unable to update todo",
                )
            }

            res.json({ status: "success" })
        } catch (e) {
            res.status(500).json({ error: e.message })
        }
    }

    static async apiDeleteTodo(req, res, next) {
        try {
            const todoId = req.params.id
            const todoResponse = await CalendarDAO.deleteTodo(todoId)
            res.json({ status: "success" })
        } catch (e) {
            res.status(500).json({ error: e.message })
        }
    }
    
    static async apiGetTodos(req, res, next) {
        try {
            let id = req.params.id || {}
            let todos = await CalendarDAO.getTodosByDayId(id)
            if (!todos) {
                res.status(404).json({ error: "Not found" })
                return
            }
            res.json(todos)
        } catch (e) {
            console.log(`api, ${e}`)
            res.status(500).json({ error: e })
        }
    }
}