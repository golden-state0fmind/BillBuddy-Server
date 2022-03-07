const db = require('../models');

//get all
const index = async function (req, res) {
    try {
        let foundIndividualTickets = await db.individualTicket.findAll()
        !foundIndividualTickets
            ? res.json({ message: 'No tickets found in the database' })
            : res.status(200).json({ allIndividualTickets: foundIndividualTickets })
    } catch (error) {
        console.log(error);
    };
};
//get specific
const show = async function (req, res) {
    try {
        let findIndividualTicket = await db.individualTicket.findByPk(req.params.id)
        !findIndividualTicket
            ? res.json({ message: 'No tickets found in the database' })
            : res.status(200).json({ findIndividualTicket: findIndividualTicket })
    } catch (error) {
        console.log(error)
    };
};
//create
const create = async function (req, res) {
    try {
        let newIndividualTickets = await db.individualTicket.create(req.body)
        !newIndividualTickets
            ? res.json({ message: 'New Ticket Failed, Try again!' })
            : res.status(200).json({ newIndividualTicket: newIndividualTickets })
    } catch (error) {
        console.log(error)
    };
};
//update
const update = async function (req, res) {
    try {
        let updateIndividualTicket = await db.individualTicket.update({
            ...req.body
        }, {
            where: { id: req.params.id }
        })
        !updateIndividualTicket
            ? res.json({ message: 'Failed to update, Try again!' })
            : res.status(200).json({ updateIndividualTicket: updateIndividualTicket })
    } catch (error) {
        console.log(error)
    };
};
//delete
const destroy = async function (req, res) {
    try {
        await db.individualTicket.destroy({
            where: { id: req.params.id }
        })
        res.status(200).json({ message: `User succussfully deleted Ticket` })
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