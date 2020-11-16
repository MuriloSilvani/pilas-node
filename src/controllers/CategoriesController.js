const connection = require('../database/connection')

module.exports = {
  async index (req, res) {
    const db = connection('categories')
    const categories = await db.select('*')

    return res.status(200).json(categories)
  },

  async store (req, res) {
    const db = connection('categories')
    const newCategory = {
      name: req.body.name
    }

    const response = await db.insert(newCategory)

    if (req.connectedUsers) {
      Object.keys(req.connectedUsers).map(client => {
        req.io.to(client).emit('update_categories')
        return true
      })
    }

    return res.status(201).json(response)
  },

  async show (req, res) {
    const db = connection('categories')
    const { _id } = req.params

    const response = await db.where('_id', '=', _id).select('*').first()

    return res.status(200).json(response)
  },

  async update (req, res) {
    const db = connection('categories')
    const { _id } = req.params

    const newCategory = {
      name: req.body.name
    }

    const response = await db.where('_id', '=', _id).update(newCategory)

    return res.status(200).json(response)
  },

  async destroy (req, res) {
    const db = connection('categories')
    const { _id } = req.params

    const response = await db.where('_id', '=', _id).delete()

    return res.status(204).json(response)
  }
}
