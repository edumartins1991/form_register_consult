const Sequelize = require("sequelize")
const sequelize = new Sequelize ('consult', 'consultuser', '123456@Bc', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = {
Sequelize: Sequelize,
sequelize: sequelize

}