// Initialize express router
const {Assortment} = require('../../../models/api/v1/assortment');
// Import the necessary modules and dependencies

//get all assortment
const getAllAssortment = async (req, res) => {
    try {
        const assortment = await Assortment.find();

        res.status(200).json({ data: { assortment } });
    } catch (error) {
        console.error('Error getting all assortment:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

// create new assortment
const createAssortment = async (req, res) => {
    try {
        const {posted_by, art_name, art_desc, art_category, condition, size, brand, complete_set, price, available_from, available_until, location, free, premium} = req.body;

        // create new assortment
        const newAssortment = new Assortment({ posted_by, art_name, art_desc, art_category, condition, size, brand, complete_set, price, available_from, available_until, location, free, premium});

        await newAssortment.save();

        res.status(201).json({ message: 'Assortiment created successfully', data: { assortment: newAssortment } });
    } catch (error) {
        console.error('Error creating assortment:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

// Export the createUser function
module.exports = {
    getAllAssortment, createAssortment
};