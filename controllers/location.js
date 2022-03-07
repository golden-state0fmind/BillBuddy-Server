const db = require('../models');

//get all \
const index = async function (req, res) {
    try {
        let allLocations = await db.location.findAll()
        !allLocations
            ? res.json({ message: 'No Location found in the database' })
            : res.status(200).json({ allLocations: allLocations })
    } catch (error) {
        console.log(error);
    };
};
//get specific
const show = async function (req, res) {
    try {
        let singleLocation = await db.location.findByPk(req.params.id)
        !singleLocation
            ? res.json({ message: 'No Location found in the database' })
            : res.status(200).json({ singleLocation: singleLocation })
    } catch (error) {
        console.log(error)
    };
};
//create 
const create = async function (req, res) {
    try {
        let newLocation = await db.location.create(req.body)
        !newLocation
            ? res.json({ message: 'New Location Entry Failed, Try again!' })
            : res.status(200).json({ location: newLocation })
    } catch (error) {
        console.log(error)
    };
};
//update 
const update = async function (req, res) {
    try {
        let updateLocation = await db.location.update({
            ...req.body
        }, {
            where: { id: req.params.id }
        })
        !updateLocation
            ? res.json({ message: 'Failed to update, Try again!' })
            : res.status(200).json({ location: updateLocation })
    } catch (error) {
        console.log(error)
    };
};
//delete 
const destroy = async function (req, res) {
    try {
        await db.location.destroy({
            where: { id: req.params.id }
        })
        res.status(200).json({ message: `User succussfully deleted Location` })
        } catch (error) {
        console.log(error)
    };
};

module.exports = {
    index,
    show,
    create,
    update,
    destroy
};