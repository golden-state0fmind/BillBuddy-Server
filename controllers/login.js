const db = require('../models');

//get all 
const index = async function (req, res) {
    try {
        let allLogins = await db.login.findAll()
        !allLogins
            ? res.json({ message: 'No login found in the database' })
            : res.status(200).json({ allLogins: allLogins })
    } catch (error) {
        console.log(error);
    };
};
//get specific 
const show = async function (req, res) {
    try {
        let singleLogins = await db.login.findByPk(req.params.id)
        !singleLogins
            ? res.json({ message: 'No login found in the database' })
            : res.status(200).json({ singleLogins: singleLogins })
    } catch (error) {
        console.log(error)
    };
};
//create
const create = async function (req, res) {
    try {
        let newLogin = await db.login.create(req.body)
        !newLogin
            ? res.json({ message: 'New login Entry Failed, Try again!' })
            : res.status(200).json({ newLogin: newLogin })
    } catch (error) {
        console.log(error)
    };
};
//update
const update = async function (req, res) {
    try {
        let updateLogin = await db.login.update({
            ...req.body
        }, {
            where: { id: req.params.id }
        })
        !updateLogin
            ? res.json({ message: 'Failed to update, Try again!' })
            : res.status(200).json({ Login: updateLogin })
    } catch (error) {
        console.log(error)
    };
};
//delete
const destroy = async function (req, res) {
    try {
        await db.login.destroy({
        where: { id: req.params.id }
        })
        res.status(200).json({ message: `User succussfully deleted login` })
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