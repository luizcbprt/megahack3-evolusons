const connection = require('../database/connection');


module.exports = {
    async index( req, res) { 
        const points = await connection('users').select("points","name");
        return res.json(points);
    },
}