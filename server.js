const db = require('./db')

const init = async() =>{
    try {
        await db.seed()
    } catch (ex) {
        console.log(ex)
    }
    
}

init()