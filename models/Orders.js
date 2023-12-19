const Pool=require("../db")


async function Orderview (req, res) {
    const result = await Pool.query('SELECT * FROM orders');
    res.send(result.rows);
  };


  async function Orderchangestate (req, res) {
    const  result = await Pool.query('SELECT * FROM orders WHERE active = true');
    res.send(result.rows);
  };

  async function addOrder(req, res) {
    let { address } = req.body;
    const result = await Pool.query(`INSERT INTO products (address)
    VALUES ('${address}') RETURNING *`);
    res.send(result.rows);
  }


  module.exports(addOrder,Orderchangestate,Orderview);