const connection = require('../database/connection');


module.exports = {
    async index( req, res) { 
        const categories = await connection('categories').select("*");
        return res.json(categories);
    },
    async show( req, res) {
        const id = req.params
        

       const idCategory =  await connection('categories')
       .where(id)
       .first()

       return res.json(idCategory);

    },
    async create( req, res) {
    const { title } = req.body
    
    let category = await connection('categories')
    .where('title', title)
    .first();

    if(category){
        return res.json({message:'Categoria já existente!'})
    }

    category = await connection('categories').insert({
        title,
    });
    
    return res.json({message:'Categoria cadastrada com sucesso!'});


},
    async delete( req, res ) {

    },
    async update( req, res) {

    },
}
    