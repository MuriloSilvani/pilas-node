const connection = require('../database/connection')

module.exports = {
  async index (req, res) {
    const db = connection('launches')
    const launches = await db.select('*')

    return res.status(200).json(launches)
  },

  async store (req, res) {
    const db = connection('launches')
    const newLaunch = {
      type: req.body.type,
      description: req.body.description,
      value: req.body.value,
      category_id: req.body.category_id
    }

    const response = await db.insert(newLaunch)

    return res.status(201).json(response)
  },

  async show (req, res) {
    const db = connection('launches')
    const { _id } = req.params

    const response = await db.where('_id', '=', _id).select('*').first()

    return res.status(200).json(response)
  },

  async update (req, res) {
    const db = connection('launches')
    const { _id } = req.params

    const newLaunch = {
      type: req.body.type,
      description: req.body.description,
      value: req.body.value,
      category_id: req.body.category_id
    }

    const response = await db.where('_id', '=', _id).update(newLaunch)

    return res.status(200).json(response)
  },

  async destroy (req, res) {
    const db = connection('launches')
    const { _id } = req.params

    const response = await db.where('_id', '=', _id).delete()

    return res.status(204).json(response)
  }
}
