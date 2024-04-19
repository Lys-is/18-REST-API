const db = require("../db.js")
const dbService = require('../services/db.service');


const created_at = () => {
    let formatter = new Intl.DateTimeFormat("ru",{
        year: "numeric",
        month: "numeric",
        day: "numeric",
        hour: 'numeric',
        minute: '2-digit',
        timeZoneName: "short",

    });
    return formatter.format(Date.now());
}

class UserController {
    async getAll(req, res) {
        try {
            const result = await dbService(db, 'all', 'SELECT * FROM user', [])

            if(!result)
                return res.status(404).json({ message: 'Not found' })

            return res.json(result)
        } catch (e) {
            console.log(e)
            return res.status(500).json({ message: e.message })
        }
    }
    async getOne(req, res) {
        try {
            const result = await dbService(db, 'get' , 'SELECT * FROM user WHERE id = ?', [req.params.id])
            if(!result)
                return res.status(404).json({ message: 'Not found' })
            res.json(result)
        } catch (e) {
            console.log(e)
            return res.status(500).json({ message: e.message })
        }

    }
    async createOne(req, res) {
        try {
            const { name, email } = req.body
            if(!name || !email)
                return res.status(400).json({ message: 'Неверные данные' })
            const result = await dbService(db, 'run', 'INSERT INTO user (name, email, created_at) VALUES (?, ?, ?)', [name, email, created_at()])
            console.log(result)
            if(!result)
                    return res.status(404).json({ message: 'Not found' })
            res.json(result)

        } catch (e) {
            console.log(e)
            return res.status(500).json({ message: e.message })
        }

    }
    async updateOne(req, res) {
        try {
            const { name, email } = req.body
            if(!name || !email)
                return res.status(400).json({ message: 'Неверные данные' })
            const result = await dbService(db, 'run', `UPDATE user SET name = ?, email = ? WHERE id = ?`, [name, email, req.params.id])
            if(!result)
                    return res.status(404).json({ message: 'Not found' })
            res.json(result)
        } catch (e) {
            console.log(e)
            return res.status(500).json({ message: e.message })
        }

    }
    async deleteOne(req, res) {
        try {
            const result =  await dbService(db, 'run', 'DELETE FROM user WHERE id = ?', [req.params.id])
            if(!result)
                    return res.status(404).json({ message: 'Not found' })
            res.json(result)
        } catch (e) {
            console.log(e)
            return res.status(500).json({ message: e.message })
        }
        
    }
    async deleteAll(req, res) {
        try {
            const result = await dbService(db, 'run', 'DELETE FROM user')
            if(!result)
                    return res.status(404).json({ message: 'Not found' })
            res.json(result)
        } catch (e) {
            console.log(e)
            return res.status(500).json({ message: e.message })
    }
        
    }
}

module.exports = new UserController()