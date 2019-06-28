const express = require("express");
const router = express.Router();
const Business = require("../models/Business");

//Esta ruta es para traer los negocios

router.get("/getAll", (req, res, next) => {
  //qwery para busquedas

  Business.find()
    .then(business => res.status(200).json({ business }))
    .catch(error => {
      error.action = "Error al buscar el negocio";
      next(error);
    });
});

// Esta ruta crea el negocio

router.post("/addBusiness", (req, res, next) => {
  //qwery para busquedas

  Business.create({ ...req.body })
    .then(business => res.status(200).json({ business }))
    .catch(error => {
      error.action = "Error al buscar el negocio";
      next(error);
    });
});

router.patch("/:id/edit", (req, res, next) => {
  //qwery para busquedas
  let { id } = req.params;
  let business = req.body;
  Busines.findByIdAndUpdate(
    { _id: id },
    { $set: { ...business } },
    { new: true }
  )
    .then(business => res.status(200).json({ business }))
    .catch(error => {
      error.action = "Error al editar el negocio";
      next(error);
    });
});

// Pedir por categoría

router.get("/getByCategory/:id", (req, res, next) => {
  //qwery para busquedas
  let { id } = req.params;
  let { subid } = req.params;
  Business.find({ category: id, subCategory: subid })
    .then(business => res.status(200).json({ business }))
    .catch(error => {
      error.action = "Error al buscar el negocio";
      next(error);
    });
});

module.exports = router;
