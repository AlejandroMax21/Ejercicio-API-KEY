import * as model from '../models/user.model.js';
import { ValidationError } from '../utils/errors.js';
import { validateUser } from '../utils/validations.js';

export const getAllUsers = (req, res) => {
    const data = model.filterUser(req.query);
    res.status(200).json(data);
}

export const getUserById = (req, res) => {
    const {id} = req.params;
    const data = model.findById(id);
    if (data === null) return res.status(404).json({message: "Usuario no encontrado."});
    res.status(200).json(data);
}

export const addUser = (req, res) => {
    const dataNewUser = req.body;
    try {
        validateUser(dataNewUser);
    } catch (e) {
        if (e instanceof ValidationError) {
            return res.status(400).json({ message: e.message }); // envia los errores de validación
        }
        return res.status(500).json({ message: "Error interno del servidor" });
    }
    const newUser = model.addUser(dataNewUser);
    res.status(201).json(newUser);
}

export const updateUser = (req, res) => {
    const {id} = req.params;
    try {
        validateUser(req.body);
    } catch (e) {
        if (e instanceof ValidationError) {
            return res.status(400).json({ message: e.message }); // envia los errores de validación
        }
        return res.status(500).json({ message: "Error interno del servidor" });
    }
    const result = model.updateUser(id, req.body);
    if (result === null) return res.status(404).json({message: "Usuario no encontrado."});
    res.status(200).json(result);
}