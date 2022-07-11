const db = require('./db')

const Consults = db.sequelize.define('consults', {
    name: {
        type: db.Sequelize.STRING
    },
    lastname: {
        type: db.Sequelize.STRING
    }
})

module.exports = Consults