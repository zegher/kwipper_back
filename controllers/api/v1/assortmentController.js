// Initialize express router
const {Assortment} = require('../../../models/api/v1/Assortment');

// create new assortment
const createAssortment = async (req, res) => {
    try {
        const {user_id, posted_by, art_name, art_desc, art_category, condition, size, brand, complete_set, price, available_from, available_until, location, free, premium} = req.body;

        // create new assortment
        const newAssortment = new Assortment({ user_id, posted_by, art_name, art_desc, art_category, condition, size, brand, complete_set, price, available_from, available_until, location, free, premium});

        await newAssortment.save();

        res.status(201).json({ message: 'Assortiment created successfully', data: { assortment: newAssortment } });
    } catch (error) {
        console.error('Error creating assortment:', error);
        res.status(500).json({ message: 'Internal Server Error - createAssortment' });
    }
};

//get all assortment
const getAllAssortment = async (req, res) => {
    try {
        const assortment = await Assortment.find();

        res.status(200).json({ data: { assortment } });
    } catch (error) {
        console.error('Error getting all assortment:', error);
        res.status(500).json({ message: 'Internal Server Error - getAllAssortment' });
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
        // getAss2();
        console.error('Error getting assortment by id:', error);
        res.status(500).json({ message: 'Internal Server Error - getAssortmentById' });
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
        res.status(500).json({ message: 'Internal Server Error - deleteAssortment' });
    }
};


//get assortment based on posted_by
const getAssortmentByPostedBy = async (req, res) => {
    try {
        const { posted_by } = req.params;

        if(!posted_by) {
            return res.status(400).json({ message: 'Username is required' });
        }
        const assortment = await Assortment.find({ posted_by });

        if(!assortment) {
            return res.status(404).json({ message: 'This user has not posted anything (yet).' });
        }
        res.status(200).json({ data: { assortment } });
    }
    catch (error) {
        console.error('Error getting assortment by user error:', error);
        res.status(500).json({ message: 'Internal Server Error - getAssortmentByPostedBy' });
    }
}

//update assortment data
const updateAssortment = async (req, res) => {
    try {
        const { id } = req.params;
        const assortmentData = req.body;

        if (!id) {
            return res.status(400).json({ message: 'Assortment id is required' });
        }

        const updatedAssortment = await Assortment.findByIdAndUpdate(id, assortmentData, { new: true });

        if (!updatedAssortment) {
            return res.status(404).json({ message: 'Assortment not found' });
        }

        res.status(200).json({ message: 'Assortment updated successfully', data: { assortment: updatedAssortment } });
    } catch (error) {
        console.error('Error updating assortment:', error);
        res.status(500).json({ message: 'Internal Server Error - updateAssortment' });
    }
};

// Export the createUser function
module.exports = {
    getAllAssortment, createAssortment, deleteAssortment, getAssortmentById, getAssortmentByPostedBy, updateAssortment
};