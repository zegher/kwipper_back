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

//get assortment based on id
const getAssortmentById = async (req, res) => {
    try {
        const { id } = req.params;

        if(!id) {
            return res.status(400).json({ message: 'Assortment id is required' });
        }
        const assortment = await Assortment.findById(id);

        if(!assortment) {
            return res.status(404).json({ message: 'Assortment not found' });
        }
        res.status(200).json({ data: { assortment } });
    }
    catch (error) {
        console.error('Error getting assortment by id:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

//delete assortment based on id
const deleteAssortment = async (req, res) => {
    try {
        const { id } = req.params;

        if(!id) {
            return res.status(400).json({ message: 'Assortment id is required' });
        }

        const deletedAssortment = await Assortment.findByIdAndDelete(id);

        if(!deletedAssortment) {
            return res.status(404).json({ message: 'Assortment not found' });
        }

        res.status(200).json({ message: 'Assortment deleted successfully' });
    } catch (error) {
        console.error('Error deleting assortment:', error);
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
    getAllAssortment, createAssortment, deleteAssortment, getAssortmentById
};