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
router.get('/:id', async (req, res) => {
    const {id} = req.params;
    const project = await db('projects').where({id});
    try {
        if (project) {
            res.status(200).json(project)
        } else {
            res.status(404).json({
                message: "The project with the specified ID does not exist."
            })
        }
    } catch (e) {
        console.log(e);
        res.status(500).json({
            error: "The projects information could not be retrieved."
        })
    }
});

// GET /:id/actions
router.get('/:id/actions', async (req, res) => {
    try {
        const projectAction = await db('actions').where({
            projectID: req.params.id
        });
        res.status(200).json(projectAction)
    } catch (e) {
        console.log(e);
        res.status(500).json({
            error: "The project's actions information could not be retrieved"
        })
    }
});

// POST
router.post('/', async (req, res) => {
    try {
        const project = await db('projects').insert(req.body);
        res.status(201).json({
            message: "Project has been created",
            project
        })
    } catch (e) {
        console.log(e);
        res.status(500).json({
            error: "The projectss information could not be retrieved."
        })
    }
});

// PUT /:id

// DELETE /:id

module.exports = router;