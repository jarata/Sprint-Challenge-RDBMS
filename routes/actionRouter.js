const router = require('express').Router();
const knex = require('knex');
const knexConfig = require('../knexfile');

const db = knex(knexConfig.development);

// GET
router.get('/', async (req, res) => {
    try {
        const action = await db('actions');
        res.status(200).json(action)
    } catch (e) {
        console.log(e);
        res.status(500).json({
            error: "The actions information could not be retrieved."
        })
    }
});

// POST
router.post('/', async (req, res) => {
    try {
        const action = await db('actions').insert(req.body);
        res.status(201).json({
            message: "Action has been created",
            action
        })
    } catch (e) {
        console.log(e);
        res.status(500).json({
            error: "The actions information could not be retrieved."
        })
    }
});

module.exports = router;