const Pool=require("../db");

async function getProducts(req, res) {
  try {
    let { search, filter, page = 1, limit = 10, sortField = 'name', sortOrder = 'asc' } = req.query;

    let query = 'SELECT * FROM products';

    if (search) {
      query += ` WHERE LOWER(name) LIKE LOWER('%${search}%')`;
    }

    if (filter) {
      query += search ? ' AND' : ' WHERE';
      query += ` department = '${filter}'`;
    }

    query += ` ORDER BY ${sortField} ${sortOrder} LIMIT ${limit} OFFSET ${(page - 1) * limit}`;

    const result = await Pool.query(query);
    res.send(result.rows);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).send('Internal Server Error');
  }
}


async function addProducts(req, res) {
  let { name, username,department,password } = req.body;
  const result = await Pool.query(`INSERT INTO products (name, stage)
  VALUES ('${name}', '${department}','${username}','${password}') RETURNING *`);
  res.send(result.rows);
}
// '${}'
async function updataProducts(req,res){

    let{name,department}=req.body;
    const id=req.params.id;
    const result=await Pool.query(`UPDATE products
    SET name = '${name}' , department = '${department}'
    WHERE id = ${id} RETURNING *`);
    res.send(result.rows);
}


async function deletProducts(req,res){
    let id=req.params.id;
const result=await Pool.query(`DELETE FROM products
WHERE id = ${id}
RETURNING *`);
res.send(result.rows);

async function search(req,res) {

  const result=await Pool.query('RETURNING *')
}

async function filter(req,res){

  const result=await Pool.query(' RETURNING *')
}


}
module.exports = {
    getProducts,
    addProducts,
    updataProducts,
    deletProducts
    
}