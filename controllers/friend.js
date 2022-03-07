const db = require('../models');

//get all
const index = async function (req, res) {
    try {
        let allFriends = await db.friend.findAll()
        !allFriends
            ? res.json({ message: 'No friend found in the database' })
            : res.status(200).json({ allFriendships: allFriends })
    } catch (error) {
        console.log(error);
    };
};
//get specific
const show = async function (req, res) {
    try {
        let singleFriendship = await db.friend.findByPk(req.params.id)
        !singleFriendship
            ? res.json({ message: 'No friendship found in the database' })
            : res.status(200).json({ singleFriendship: singleFriendship })
    } catch (error) {
        console.log(error)
    };
};
//create
const create = async function (req, res) {
    try {
        let newFriendship = await db.friend.create(req.body)
        !newFriendship
            ? res.json({ message: 'New friendship Entry Failed, Try again!' })
            : res.status(200).json({ friendship: newFriendship })
    } catch (error) {
        console.log(error)
    };
};
//update
const update = async function (req, res) {
    try {
        let updateFriendship = await db.friend.update({
            ...req.body
        }, {
            where: { id: req.params.id }
        })
        !updateFriendship
            ? res.json({ message: 'Failed to update, Try again!' })
            : res.status(200).json({ friendship: updateFriendship })
    } catch (error) {
        console.log(error)
    };
};
//delete
const destroy = async function (req, res) {
    try {
        await db.friend.destroy({
            where: { id: req.params.id }
        })
        res.status(200).json({ message: `User succussfully deleted friendship` })
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