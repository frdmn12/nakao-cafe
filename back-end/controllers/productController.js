const { db, query } = require("../config");

const books = [
  {
    author: "Chinua Achebe",
    country: "Nigeria",
    language: "English",
    pages: 209,
    title: "Things Fall Apart",
    year: 1958,
  },
  {
    author: "Hans Christian Andersen",
    country: "Denmark",
    language: "Danish",
    pages: 784,
    title: "Fairy tales",
    year: 1836,
  },
  {
    author: "Dante Alighieri",
    country: "Italy",
    language: "Italian",
    pages: 928,
    title: "The Divine Comedy",
    year: 1315,
  },
];
//  Test Book
const product_books = async (req, res) => {
  try {
    return res.status(200).send(books);
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

// Get All Product
const product_index = async (req, res) => {
  try {
    let sql = `SELECT 
    p.name,
    p.price,
    p.description,
    p.qty,
    p.image,
    c.name AS "category"
    FROM products p
    JOIN categories c ON 
    p.product_category = c.id`;

    const data = await query(sql);
    console.log(data);
    return res.status(200).send(data);
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

// Get product details
const product_details = async (req, res) => {
  try {
    let id = req.params.id;

    let sql = `select 
    p.id, 
    p.name, 
    p.price, 
    p.qty, 
    pc.category_name,
    pt.type_name
from 
    products p, product_category pc, product_type pt 
where 
    p.product_category = pc.id  AND 
    p.product_type = pt.id AND 
    p.id = ${id}`;

    const data = await query(sql);
    return res.status(200).send(data);
  } catch (err) {
    return res.status(500).send(err.message);
    // console.log(err);
  }
};

// Get product by category
const product_category = async (req, res) => {
  try {
    let category = req.params.category;
    let sql = `select 
    p.id, 
    p.name, 
    p.price, 
    p.description, 
    p.qty, 
    c.name 
    from 
    products p, 
    categories c 
    where 
    p.product_category = c.id AND 
    c.name = "${category}"`;

    const data = await query(sql);

    let sendData = {
      category: category,
      data : {
        data
      }
    };

    return res.status(200).send(sendData);
  } catch (err) {
    return res.status(500).send(err.message);
  }
}


// Get product food
const product_food = async (req, res) => {
  try {
    let sql = `select 
    p.id, 
    p.name, 
    p.price, 
    p.description, 
    p.qty, 
    c.name 
    from 
    products p, 
    categories c 
    where 
    p.product_category = c.id AND 
    c.name = "Food"`;

    const data = await query(sql);

    let sendData = {
      foodMenu: {
        data,
      },
    };

    return res.status(200).send(sendData);
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

// Get product drink
const product_drink = async (req, res) => {
  try {
    let sql = `select 
    p.id, 
    p.name, 
    p.price,
    p.description, 
    p.qty, 
    c.name 
    from 
    products p, 
    categories c 
    where 
    p.product_category = c.id AND 
    c.name = "Drink"`;

    const data = await query(sql);

    let sendData = {
      drinkMenu: {
        data,
      },
    };

    return res.status(200).send(sendData);
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

// Add Product
const product_create = async (req, res, next) => {
  try {
    const { name, price, qty, product_category, description } = req.body;

    const reqBody = req.body;
    
    // console.log(req.body, req.file.path)
    // return res.status(200).send('Sukses');
    
    
    if(!req.file) return res.status(400).send({
      Status : "Failed",
      message : "Image Required"
    });
    
    
    const image = req.file.path.replace(/\\/g, '/');
    console.log(req.file.path)
    let sql = `
    INSERT INTO products 
    (name, price, description,qty, product_category, image) 
    values
    ("${name}", ${price}, "${description}" ,${qty}, ${product_category}, "${image}" )
    `;

    let data = await query(sql);

    let insertData = {
      Status: "Data Created",
      newData: {
        reqBody,
      },
      data,
    };
    return res.status(200).send(insertData);


  } catch (err) {
    res.status(500).send(err.message);
  }
};

// Delete Product
const product_delete = async (req, res) => {
  try {
    let id = req.params.id;
    let sql = `delete from products where id = ${id}`;

    await query(sql);

    let deleteData = {
      Status: "Data Deleted",
    };

    return res.status(200).send(deleteData);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  product_index,
  product_details,
  product_food,
  product_drink,
  product_create,
  product_delete,
  product_books,
  product_category,
};
