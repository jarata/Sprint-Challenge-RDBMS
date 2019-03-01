const router = require('express').Router();
const knex = require('knex');
const knexConfig = require('../knexfile');

const db = knex(knexConfig.development);

// GET
router.get('/', async (req, res) => {
    try {
        const project = await db('projects');
        res.status(200).json(project)
    } catch (e) {
        console.log(e);
        res.status(500).json({
            error: "The projects information could not be retrieved."
        })
    }
});

// GET /:id

// POST

// PUT /:id

// DELETE /:id

module.exports = router;