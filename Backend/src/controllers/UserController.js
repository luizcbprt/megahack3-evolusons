const connection = require('../database/connection');
const jwt = require('jsonwebtoken');
const jwt_token = 'suehtam';
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
    const { email, name, category, password, number } = req.body
    
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
            number
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
        console.log(password)


        if(!user){
            return res.json({message:'dados incorretos!'})
        }
        await bcrypt.compare(password , user.password, async function(err, result){
            if(err){
                console.log(err)
                return res.json({message:'erro na autenticação'})
            }
            //console.log(user)
            const ids = user.id+'0000'
            console.log(ids)
            if ( result ) { 

                bcrypt.hash(ids, 10, async (err, id) => {
                if(err){
                    console.log(err);
                    return res.json({message:'erro na autenticação, tente novamente mais tarde!'})
                }
                const token = jwt.sign({
                    id:id,
                }, jwt_token, {
                    expiresIn: "1h"
                })

                return res.status(200).json({messagem:'autenticação efetuada com sucesso!', token});
               });

               
            }



        } )
        

        



    }
}
    