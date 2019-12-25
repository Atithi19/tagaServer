const express = require("express");
const taga = express.Router();
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const db = require("../database/db");
const Sequelize = require("sequelize");


taga.use(cors());

process.env.SECRET_KEY = "secret";


taga.post("/customer", (req, res) => {
  const userData = {};
  //console.log("Route : " + req.body);
  Academics.findAll(
    //{
    //  attributes: ["customer"]
    //},
    //{
    //  where: {
    //    studentid: req.body.student_id
    //  }
    //},
    { raw: true, hierarchy: true, mapToModel: false }
  )
    .then(user => {
      if (user) {
        //console.log("Academics In Progress");
        res.send(user);
      } else {
        res.status(400).send({
          status: 400,
          message: "Invalid Academics",
          type: "internal"
        });
      }
    })
    .catch(err => {
      //console.log("Us is here 4");
      res.status(400).json({ error: err });
    });
});