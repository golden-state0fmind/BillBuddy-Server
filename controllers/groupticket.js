const db = require('../models');

//get all the
const index = async function (req, res) {
    try {
        let foundGroupTickets = await db.groupticket.findAll()
        !foundGroupTickets
            ? res.json({ message: 'No group tickets found in the database' })
            : res.status(200).json({ allGroupTicket: foundGroupTickets })
    } catch (error) {
        console.log(error);
    };
};
//get specific
const show = async function (req, res) {
    try {
        let findGroupTicket = await db.groupticket.findByPk(req.params.id)
        !findGroupTicket
            ? res.json({ message: 'No group tickets found in the database' })
            : res.status(200).json({ findGroupTicket: findGroupTicket })
    } catch (error) {
        console.log(error)
    };
};
//create
const create = async function (req, res) {
    try {
        let newGroupTickets = await db.groupticket.create(req.body)
        !newGroupTickets
            ? res.json({ message: 'New Group Ticket Failed, Try again!' })
            : res.status(200).json({ newGroupTicket: newGroupTickets })
    } catch (error) {
        console.log(error)
    };
};
//update
const update = async function (req, res) {
    try {
        let updateGroupTicket = await db.groupticket.update({
            ...req.body
        }, {
            where: { id: req.params.id }
        })
        !updateGroupTicket
            ? res.json({ message: 'Failed to update, Try again!' })
            : res.status(200).json({ updateGroupTicket: updateGroupTicket })
    } catch (error) {
        console.log(error)
    };
};
//delete
const destroy = async function (req, res) {
    try {
        await db.groupticket.destroy({
            where: { id: req.params.id }
        })
        res.status(200).json({ message: `User succussfully deleted GroupTicket` })
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
}