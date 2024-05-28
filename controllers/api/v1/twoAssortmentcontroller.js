// const {Twoassortment} = require('../../../models/api/v1/Two');
const {Two} = require('../../../models/api/v1/Two');

//get all assortment based on tester model
const getAss2 = async (req, res) => {
    try{
        const twoAssortment = await Two.find();
        res.status(200).json({ data: { twoAssortment } });
    } catch (error) {
        console.error('Error getting all assortment:', error);
        res.status(500).json({ message: 'Internal Server Error - get2ndAssortment' });
    }
}

//create new assortment based on two model
const createAssortment2 = async (req, res) => {
    try {
        const { item, user, price, waarborg, available_from, available_until, art_desc, art_category, condition, size, brand, complete_set, free, premium, posted_by, location } = req.body;

        // if(!name || !description || !price || !quantity || !image || !posted_by) {
        //     return res.status(400).json({ message: 'All fields are required' });
        // }

        const { image } = req.files;
        const url  = req.protocol + '://' + req.get('host') + '/images/' + image.name;
        // if (!image) return res.sendStatus(400); //image not required so not needed yet
        // If doesn't have image mime type prevent from uploading
        if (!/^image/.test(image.mimetype)) return res.sendStatus(400);
        image.mv('../../../images/' + image.name);

        const newAssortment = await Two.create({
            item, user, url, price, waarborg, available_from, available_until, art_desc, art_category, condition, size, brand, complete_set, free, premium, posted_by, location 
        });

        res.status(201).json({ data: { assortment: newAssortment } });
    } catch (error) {
        console.error('Error creating new assortment:', error);
        res.status(500).json({ message: 'Internal Server Error - createAssortment2' });
    }
}

//get assortment based on id
const getAssortmentById = async (req, res) => {
    try {
        const { id } = req.params;

        if(!id) {
            return res.status(400).json({ message: 'Assortment id is required' });
        }
        const assortment = await Two.findById(id);
        res.status(200).json({ data: { assortment } });
    } catch (error) {
        console.error('Error getting assortment by id:', error);
        res.status(500).json({ message: 'Internal Server Error - getAssortment2ById' });
    }
}

//delete assortment based on id
const deleteAssortment = async (req, res) => {
    try {
        const { id } = req.params;

        if(!id) {
            return res.status(400).json({ message: 'Assortment id is required' });
        }
        const deletedAssortment = await Two.findByIdAndDelete(id);
        res.status(200).json({ message: 'Assortment deleted successfully', data: { deletedAssortment } });
    }
    catch (error) {
        console.error('Error deleting assortment:', error);
        res.status(500).json({ message: 'Internal Server Error - deleteAssortment2' });
    }
};

//get assortiment by posted_by
const getAssortmentByUser = async (req, res) => {
    try {
        const { posted_by } = req.params;

        if(!posted_by) {
            return res.status(400).json({ message: 'User id is required' });
        }
        const assortment = await Two.find({ 'user.posted_by': posted_by });
        res.status(200).json({ data: { assortment } });
    } catch (error) {
        console.error('Error getting assortment by user:', error);
        res.status(500).json({ message: 'Internal Server Error - getAssortmentByUser' });
    }
}

// Export the createUser function
module.exports = {
    getAss2, createAssortment2, getAssortmentById, deleteAssortment, getAssortmentByUser
};