// const {Twoassortment} = require('../../../models/api/v1/Two');
const { count } = require('console');
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
        const {item, user, art_name, price, waarborg, available_from, available_until, art_desc, art_category, condition, size, brand, complete_set, free, premium, user_id, posted_by, location } = req.body;
        
        // if(count(req.files) === 0) return res.status(400).json({ message: 'No files were uploaded' });

        const pictures = [];

        for (const key in req.files) {
            const art_picture = req.files[key];

            // If doesn't have image mime type prevent from uploading
            if (!/^image/.test(art_picture.mimetype)) return res.sendStatus(400);

            const newName = Date.now() + art_picture.name.replace(/ /g, '_');

            art_picture.mv(__dirname + '/../../../images/' + newName);
            const url  = req.protocol + '://' + req.get('host') + '/images/' + newName;

            console.log(req.files[key]);

            pictures.push(url);
        }

         const newAssortment = await Two.create({
            item,user,
                art_name,
                pictures, 
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
                premium,
            
            
                user_id,
                posted_by,
                location
            
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
        const assortment = await Two.find({ 'user.user_id': posted_by });
        res.status(200).json({ data: { assortment } });
    } catch (error) {
        console.error('Error getting assortment by user:', error);
        res.status(500).json({ message: 'Internal Server Error - getAssortmentByUser' });
    }
}

//post image by zoekertje id
const postImage = async (req, res) => {
    try {
        const { id } = req.params;
        const pictures = [];

        for (const key in req.files) {
            const art_picture = req.files[key];

            // If doesn't have image mime type prevent from uploading
            if (!/^image/.test(art_picture.mimetype)) return res.sendStatus(400);

            const newName = Date.now() + art_picture.name.replace(/ /g, '_');

            art_picture.mv(__dirname + '/../../../images/' + newName);
            const url  = req.protocol + '://' + req.get('host') + '/images/' + newName;

            console.log(req.files[key]);

            pictures.push(url);
        }

        if(!id) {
            return res.status(400).json({ message: 'Assortment id is required' });
        }
        const assortment = await Two.findById(id);

        // Update the assortment item with the new pictures
        assortment.item.pictures = pictures;
        await assortment.save();

        res.status(200).json({ data: { assortment } });
    } catch (error) {
        console.error('Error getting assortment by id:', error);
        res.status(500).json({ message: 'Internal Server Error - getAssortment2ById' });
    }
}

// Export the createUser function
module.exports = {
    getAss2, createAssortment2, getAssortmentById, deleteAssortment, getAssortmentByUser, postImage
};
