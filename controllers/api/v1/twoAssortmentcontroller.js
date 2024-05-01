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

// Export the createUser function
module.exports = {
    getAss2
};