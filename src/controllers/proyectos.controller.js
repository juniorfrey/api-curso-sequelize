import { Proyecto } from "../models/Proyecto.js";

export const getProyectos = async(req, res) => {

    try {
        const proyectos = await Proyecto.findAll();
        res.json(proyectos);
    } catch (error) {
        return res.status(500).json({mensaje:error.message});
    }

}

export const crearProyecto = async(req, res) => {
    try {
        const { nombre, prioridad, descripcion } = req.body;
        const nuevoProyecto = await Proyecto.create({
            nombre,
            prioridad,
            descripcion,
        });

        res.json(nuevoProyecto);
    } catch (error) {
        return res.status(500).json({ mensaje: error.message });
    }
};

export const actualizarProyecto = async(req, res) => {

     const { id } = req.params;
     const { nombre, prioridad, descripcion } = req.body;
     const proyecto = await Proyecto.findByPk(id);
     proyecto.nombre = nombre;
     proyecto.prioridad = prioridad;
     proyecto.descripcion = descripcion;

     

}

export const eliminarProyecto = async(req, res) => {
    
    try {
         const { id } = req.params;
         await Proyecto.destroy({
           where: {
             id,
           },
         });
         res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({ mensaje: error.message });
    }

   
}