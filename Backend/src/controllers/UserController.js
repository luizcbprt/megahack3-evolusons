const connection = require('../database/connection');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

module.exports = {
    async index( req, res) { 
        const users = await connection('users').select("*");
        return res.json(users);
    },
    async show( req, res) {
        const id = req.params
        

       const idUser =  await connection('users')
       .where(id)
       .first()

       return res.json(idUser);

    },
    async create( req, res) {
    const { email, name, category, password } = req.body
    
    let user = await connection('users')
    .where("email",email)
    .select('*')
    .first();

    if(user){
        return res.json({message:'Email ja cadastrado!'})
    }

    bcrypt.hash(password, 10, async ( errBcrypt, password ) => {
        if(errBcrypt) { return res.status(500).json(`error:${errBcrypt}`)  }

        user = await connection('users').insert({
            email,
            name,
            category,
            password,
        });
        
        return res.json({message:'Usuário cadastrado com sucesso!'});
        });
},
    async delete( req, res ) {

    },
    async update( req, res) {

    },
    async login ( req, res) {
        const { email, password } = req.body

        const user = await connection('users')
        .where('email',email)
        .select('*')
        .first()
        console.log(user)
        if(!user){
            return res.json({message:'dados incorretos!'})
        }

        const result = await bcrypt.compareSync(password, user.password) 

        if ( result ) { 

            const token = jwt.sign({
                name: user.name,
                isAdmin:user.isAdmin,
                id: user.id,
            }, jwt_token, {
                expiresIn: "1h"
            })

            return res.status(200).send({messagem:'autenticação efetuada com sucesso!', token:token});
        }

        



    }
}
    