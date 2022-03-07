const db = require('../models');

//get all 
const index = async function (req, res) {
    try {
        let allItems = await db.item.findAll()
        !allItems
            ? res.json({ message: 'No items found in the database' })
            : res.status(200).json({ allItems: allItems })
    } catch (error) {
        console.log(error);
    };
};
//get specific 
const show = async function (req, res) {
    try {
        let singleItems = await db.item.findByPk(req.params.id)
        !singleItems
            ? res.json({ message: 'No Item found in the database' })
            : res.status(200).json({ singleItems: singleItems })
    } catch (error) {
        console.log(error)
    };
};
//create
const create = async function (req, res) {
    try {
        let newItem = await db.item.create(req.body)
        !newItem
            ? res.json({ message: 'New item Entry Failed, Try again!' })
            : res.status(200).json({ newItem: newItem })
    } catch (error) {
        console.log(error)
    };
};
//update
const update = async function (req, res) {
    try {
        let updateItem = await db.item.update({
            ...req.body
        }, {
            where: { id: req.params.id }
        })
        !updateItem
            ? res.json({ message: 'Failed to update, Try again!' })
            : res.status(200).json({ Item: updateItem })
    } catch (error) {
        console.log(error)
    };
};
//delete
const destroy = async function (req, res) {
    try {
        await db.item.destroy({
            where: { id: req.params.id }
        })
        res.status(200).json({ message: `User succussfully deleted item` })
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