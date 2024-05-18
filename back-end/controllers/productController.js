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
    let sql = `select 
  p.id, 
  p.name, 
  p.price, 
  p.qty, 
  pc.category_name,
  pt.type_name
from products p, product_category pc, product_type pt 
where p.product_category = pc.id  AND p.product_type = pt.id`;

    const data = await query(sql);
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
  }
};

// Get product food
const product_food = async (req, res) => {
  try {
    let sql = `select 
    p.id, p.name, 
    p.price, p.qty, 
    pc.category_name 
    from 
    products p, 
    product_category pc 
    where 
    p.product_category = pc.id AND 
    pc.category_name = "Food"`;

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
    p.id, p.name, 
    p.price, p.qty, 
    pc.category_name 
    from 
    products p, 
    product_category pc 
    where 
    p.product_category = pc.id AND 
    pc.category_name = "Drink"`;

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
const product_create = async (req, res) => {
  try {
    const { name, price, qty, product_type, product_category } = req.body;

    const reqBody = req.body;
    let sql = `
    insert into products 
    (name, price, qty, product_type, product_category) 
    values
    ("${name}", ${price}, ${qty}, ${product_type}, ${product_category} )
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
};
