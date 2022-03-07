const db = require('../models');

//getting all users
const index = (req, res) => {
    db.user.findAll()
        .then((foundUsers) => {
            !foundUsers
                ? res.json({ message: 'No Users found in database.' })
                : res.status(200).json({ user: foundUsers });
        }).catch(err => console.log(err))
};

//getting one user 
const show = (req, res) => {
    db.user.findByPk(req.params.id)
        .then((foundUser) => {
            !foundUser
                ? res.json({ message: 'User with provided ID not found.' })
                : res.status(200).json({ user: foundUser })
        }).catch(err => console.log(err))
};

//creating a user
const create = (req, res) => {
    db.user.create(req.body)
        .then((savedUser) => {
            res.status(200).json({ user: savedUser })
        }).catch(err => console.log(err))
};

//updating a user
const update = (req, res) => {
    db.user.update({
        ...req.body
    }, {
        where: {
            id: req.params.id
        }
    })
        .then((updatedUser) => {
            !updatedUser
                ? res.json({ message: 'No User with that ID.' })
                : res.status(200).json({ user: updatedUser })
        }).catch(err => console.log(err))
};

//deleting a user by id
const destroy = (req, res) => {
    db.user.destroy({
        where: { id: req.params.id }
    })
        .then(() => {
            res.status(200).json({ message: 'User succussfully deleted' })
        }).catch(err => console.log(err))
};

module.exports = {
    index,
    show,
    create,
    update,
    destroy
};