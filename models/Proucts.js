const pool=require("../db");

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

    const result = await pool.query(query);
    res.send(result.rows);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).send('Internal Server Error');
  }
}


async function addProducts(req, res) {
  let { name, price,discount } = req.body;
  const result = await pool.query(`INSERT INTO products (name, price,discount)
  VALUES ('${name}','${price}','${discount}') RETURNING *`);
  res.send(result.rows);
}
// '${}'
async function updataProducts(req,res){

    let{name,discount}=req.body;
    const id=req.params.id;
    const result=await pool.query(`UPDATE products
    SET name = '${name}' , discount = '${discount}'
    WHERE id = ${id} RETURNING *`);
    res.send(result.rows);
}


async function deletProducts(req,res){
    let id=req.params.id;
const result=await pool.query(`DELETE FROM products
WHERE id = ${id}
RETURNING *`);
res.send(result.rows);



}
module.exports = {
    getProducts,
    addProducts,
    updataProducts,
    deletProducts
    
}