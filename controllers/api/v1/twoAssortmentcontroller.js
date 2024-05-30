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
        const { art_name, price, waarborg, available_from, available_until, art_desc, art_category, condition, size, brand, complete_set, free, premium, user_id, posted_by, location } = req.body;

        const { art_picture } = req.files;
        
        if (!art_picture) return res.status(400).json({ message: 'Image is required' });

        // If doesn't have image mime type prevent from uploading
        if (!/^image/.test(art_picture.mimetype)) return res.sendStatus(400);

        const newName = Date.now() + art_picture.name.replace(/ /g, '_');

        art_picture.mv(__dirname + '/../../../images/' + newName);
        const url  = req.protocol + '://' + req.get('host') + '/images/' + newName;

        const newAssortment = await Two.create({
            item: {
                art_name,
                art_picture: url, 
                price, 
                waarborg, 
                available_from, 
                available_until, 
                art_desc, 
                art_category, 
                condition, 
                size, brand, 
                complete_set, 
                free, 
                premium
            },
            user: {
                user_id,
                posted_by,
                location
            },
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