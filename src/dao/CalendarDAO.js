import mongodb from "mongodb"
const ObjectId = mongodb.ObjectId

let todos

export default class CalendarDAO {
    static async injectDB(conn) {
        if (todos) {
            return
        }
        try {
            todos = await conn.db("todos").collection("todos")
        } catch (e) {
            console.error(`Unable to establish collection handles in userDAO: ${e}`)
        }
    }

    static async addTodo(dayId, user, todo) {
        try {
            const todoDoc = {
                dayId: dayId,
                user: user,
                todo: todo,
            }

            return await todos.insertOne(todoDoc)
        } catch (e) {
            console.error(`Unable to post todo: ${e}`)
            return { error: e }
        }
    }

    static async getTodo(todoId) {
        try {
            return await todos.findOne({ _id: ObjectId(todoId) })
        } catch (e) {
            console.error(`Unable to get todo ${e}`)
            return { error: e }
        }
    }

    static async updateTodo(todoId, user, todo) {
        try {
            const updateResponse = await todos.updateOne(
                { _id: ObjectId(todoId) },
                { $set: { user: user, todo: todo } }
            )

            return updateResponse
        } catch (e) {
            console.error(`Unable to update todo: ${e}`)
            return { error: e }
        }
    }

    static async deleteTodo(todoId) {

        try {
            const deleteResponse = await todos.deleteOne({
                _id: ObjectId(todoId)
            })

            return deleteResponse
        } catch (e) {
            console.error(`Unable to delete todo: ${e}`)
            return { error: e }
        }
    }

    static async getTodosByDateId(dateId) {
        try {
            const cursor = await todos.find({ dateId: parseInt(dateId) })
            return cursor.toArray()
        } catch (e) {
            console.error(`Unable to get todo: $e}`)
            return { error: e }
        }
    }
}