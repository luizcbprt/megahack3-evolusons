const connection = require('../database/connection');


module.exports = {
    async index( req, res) { 
        const courses = await connection('courses').select("*");
        return res.json(courses);
    },
    async show( req, res) {
        const id = req.params
        

       const idCourse =  await connection('courses')
       .where(id)
       .first()

       return res.json({idCourse});

    },
    async showCategory( req, res){
        const category = req.params;


        const result = await connection('courses')
        .where(category)
        .select('*')
        .first();

        return res.json(result);
    },
    async create( req, res) {
    const { title, category, duration, body } = req.body
    
    let course = await connection('courses')
    .where("title",title)
    .select('*')
    .first();

    if(course){
        return res.json({message:'Curso ja existente!'})
    }

    course = await connection('courses').insert({
        title,
        category,
        duration,
        body,
    });
    
    return res.json({message:'curso cadastrado com sucesso!'});


},
    async delete( req, res ) {

    },
    async update( req, res) {

    },
}
    