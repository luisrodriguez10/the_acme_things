const Sequelize = require('sequelize')
const {STRING} = Sequelize
const conn = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/the_acme_things_db')

const Thing = conn.define('thing', {
    name:{
        type: STRING,
        unique: true,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    }
})

const seed = async() =>{
    await conn.sync({force: true})
    await Promise.all([
        Thing.create({name: 'foo'}),
        Thing.create({name: 'bar'}),
        Thing.create({name: 'bazz'})
    ])
}

module.exports = {
    seed
}