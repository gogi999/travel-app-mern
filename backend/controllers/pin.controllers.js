import Pin from '../models/pin.model.js';

export const createPin = async (req, res) => {
    const newPin = new Pin(req.body);

    try {
        const savedPin = await newPin.save();

        res.status(201).json(savedPin);
    } catch (err) {
        res.status(500).json(err);
    }
}

export const getAllPins = async (req, res) => {
    try {
        const pins = await Pin.find();

        res.status(200).json(pins);
    } catch (err) {
        res.status(500).json(err);
    }
}
