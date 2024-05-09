const {Token} = require('../../../models/api/v1/Token');

//get tokens
const getTokens = async (req, res) => {
    try {
        const tokens = await Token.find();

        res.status(200).json({ data: { tokens } });
    } catch (error) {
        console.error('Error getting all tokens:', error);
        res.status(500).json({ message: 'Internal Server Error - getAllTokens' });
    }
};

// Export the createUser function
module.exports = {
    getTokens,
};