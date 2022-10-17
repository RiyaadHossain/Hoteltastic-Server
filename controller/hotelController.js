const Room = require("../model/hotelModel")

// Get Rooms Controller _____________________
module.exports.getRooms = async (req, res) => {

    try {
        const rooms = await Room.find()
        res.status(200).json({ rooms })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }

}

// Get Single Room Controller _____________________
module.exports.getRoom = async (req, res) => {

    const { id } = req.params

    try {
        const room = await Room.findById({ _id: id })
        res.status(201).json({ room })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }

}

// Create Room Controller _____________________
module.exports.createRoom = async (req, res) => {

    const roomDetails = req.body
    console.log(roomDetails)
    const newRoom = new Room(roomDetails)
    try {
        const result = await newRoom.save()
        console.log({ result })
        res.status(201).json({ message: "Room Created Successfully!", result })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

// Update Room Controller _____________________
module.exports.updateRoom = async (req, res) => {
    const updatedDetails = req.body
    const { id } = req.params
    try {
        const result = await Room.findByIdAndUpdate({ _id: id }, updatedDetails, { new: true })
        res.status(201).json({ message: "Room Updated Successfully!", result })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

// Delete Room Controller _____________________
module.exports.deleteRoom = async (req, res) => {
    const { id } = req.params

    try {
        await Room.findByIdAndDelete({ _id: id })
        res.status(201).json({ message: "Room Deleted Successfully!" })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}