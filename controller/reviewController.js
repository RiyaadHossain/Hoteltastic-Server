const Review = require("../model/reviewModel")

// Get All Reviews Controller____________________
module.exports.allReviews = async (req, res) => {
    try {
        const reviews = await Review.find()
        res.status(200).json({ reviews })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

// Get Review Controller____________________
module.exports.getReview = async (req, res) => {

    const { id } = req.params
    try {
        const review = await Review.findById({ _id: id })
        res.status(200).json({ review })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

// Update Review Controller____________________
module.exports.addReview = async (req, res) => {

    const review = req.body
    const newReview = new Review(review)
    try {
        const result = await newReview.save()
        res.status(201).json({ result })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

// Update Review Controller____________________
module.exports.updateReview = async (req, res) => {

    const { id } = req.params
    const updatedReview = req.body

    try {
        const result = await Review.findByIdAndUpdate({ _id: id }, updatedReview, { new: true })
        res.status(201).json({ message: "Your Review is Updated.", result })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

// Delete Review Controller____________________
module.exports.deleteReview = async (req, res) => {

    const { id } = req.params

    try {
        await Review.findByIdAndDelete({ _id: id })
        res.status(201).json({ message: "Your Review is Deleted." })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}