
import Jwt from "jsonwebtoken";
import { Proyecto } from "../models/Proyecto.js";
import { Tarea } from "../models/Tareas.js";

export const getProyectos = async(req, res) => {

    try {

        Jwt.verify(req.token, process.env.KEYSECRET, async (error, authData) => {
          if (error) {
            res.status(403).json({ mensaje: error.message });
          } else {
            const proyectos = await Proyecto.findAll();
            res.json({ proyectos, authData, mensaje: "lista de proyectos" });
          }
        });

        
    } catch (error) {
        return res.status(500).json({mensaje:error.message});
    }

}

export const crearProyecto = async(req, res) => {
    try {
        Jwt.verify(req.token, process.env.KEYSECRET, async (error, authData) => {
            if (error) {
              res.status(403).json({ mensaje: error.message, token:"Necesita autenticarse" });
            } else {
                const { nombre, prioridad, descripcion } = req.body;
                const nuevoProyecto = await Proyecto.create({
                    nombre,
                    prioridad,
                    descripcion,
                });
                res.json(nuevoProyecto);
            }
          });
    } catch (error) {
        return res.status(500).json({ mensaje: error.message });
    }
};

export const actualizarProyecto = async(req, res) => {

     try {

        Jwt.verify(req.token, process.env.KEYSECRET, async (error, authData) => {
            if (error) {
              res.status(403).json({ mensaje: error.message, token:"Necesita autenticarse" });
            } else {
                const { id } = req.params;
                const { nombre, prioridad, descripcion } = req.body;
                const proyecto = await Proyecto.findByPk(id);
                proyecto.nombre = nombre;
                proyecto.prioridad = prioridad;
                proyecto.descripcion = descripcion;
                await proyecto.save();
                res.json(proyecto);
            }
          });
     } catch (error) {
        return res.status(500).json({ mensaje: error.message });
     }
     
}

export const eliminarProyecto = async(req, res) => {
    
    try {
        Jwt.verify(req.token, process.env.KEYSECRET, async (error, authData) => {
            if (error) {
              res.status(403).json({ mensaje: error.message, token:"Necesita autenticarse" });
            } else {
                const { id } = req.params;
                await Proyecto.destroy({
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

   
}

export const prouectoID = async(req, res) => {
    try {

        Jwt.verify(req.token, process.env.KEYSECRET, async (error, authData) => {
            if (error) {
              res.status(403).json({ mensaje: error.message, token:"Necesita autenticarse" });
            } else {
                const { id } = req.params;
                const proyecto = await Proyecto.findOne({
                    where: {id:id}
                });

                if(!proyecto)
                    return res.status(404).json({mensaje:"Proyecto no existe"});

                res.json(proyecto);
                        }
        });

        
    } catch (error) {
        return res.status(500).json({ mensaje: error.message });
    }
     
}

export const getproyectoTareas = async(req, res) => {
    try {

        Jwt.verify(req.token, process.env.KEYSECRET, async (error, authData) => {
            if (error) {
              res.status(403).json({ mensaje: error.message, token:"Necesita autenticarse" });
            } else {
                const { id } = req.params;
                const tareas = await Tarea.findAll({
                   where:{ proyectoId:id }
                });
                res.json(tareas);
            }
        });
         
    } catch (error) {
        return res.status(500).json({ mensaje: error.message });
    }
};