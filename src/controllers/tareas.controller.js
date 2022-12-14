import Jwt from "jsonwebtoken";
import { Proyecto } from "../models/Proyecto.js";
import { Tarea } from "../models/Tareas.js";

export const getTareas = async(req, res) => {
    try {

      Jwt.verify(req.token, process.env.KEYSECRET, async (error, authData) => {
        if (error) {
          res.status(403).json({ mensaje: error.message, token:"Necesita autenticarse" });
        } else {
          const tareas = await Tarea.findAll({
            include: [{ model: Proyecto }],
          });
          res.json(tareas);
        }
    });
    } catch (error) {
      return res.status(500).json({ mensaje: error.message });
    }

}

export const crearTarea = async (req, res) => {
  try {

    Jwt.verify(req.token, process.env.KEYSECRET, async (error, authData) => {
      if (error) {
        res.status(403).json({ mensaje: error.message, token:"Necesita autenticarse" });
      } else {
        const { nombre, done, proyectoId } = req.body;
        const nuevaTarea = await Tarea.create({
          nombre,
          done,
          proyectoId
        });

        res.json(nuevaTarea);
      }
  });

  } catch (error) {
    return res.status(500).json({ mensaje: error.message });
  }
};

export const actualizarTarea = async (req, res) => {
  try {

    Jwt.verify(req.token, process.env.KEYSECRET, async (error, authData) => {
      if (error) {
        res.status(403).json({ mensaje: error.message, token:"Necesita autenticarse" });
      } else {
        const { id } = req.params;
        const { nombre, proyectoId } = req.body;
        const tarea = await Tarea.findByPk(id);
        tarea.nombre = nombre;
        tarea.proyectoId = proyectoId;
        await tarea.save();
        res.json(tarea);
      }
   });

  } catch (error) {
    return res.status(500).json({ mensaje: error.message });
  }
};

export const eliminarTarea = async (req, res) => {
  try {

    Jwt.verify(req.token, process.env.KEYSECRET, async (error, authData) => {
      if (error) {
        res.status(403).json({ mensaje: error.message, token:"Necesita autenticarse" });
      } else {
        const { id } = req.params;
        await Tarea.destroy({
          where: {
            id,
          },
        });
        res.sendStatus(204);
      }
   });

  } catch (error) {
    return res.status(500).json({ mensaje: error.message });
  }
};

export const tareaId = async (req, res) => {
  try {

    Jwt.verify(req.token, process.env.KEYSECRET, async (error, authData) => {
      if (error) {
        res.status(403).json({ mensaje: error.message, token:"Necesita autenticarse" });
      } else {
        const { id } = req.params;
        const tarea = await Tarea.findOne({
          where: { id: id },
          include: [{
             model: Proyecto,
             attributes:['nombre', 'descripcion']
            }],
        });
    
        if (!tarea)
          return res.status(404).json({ mensaje: "Tarea no existe" });
    
        res.json(tarea);
      }
   });

  } catch (error) {
    return res.status(500).json({ mensaje: error.message });
  }
};