const {User} = require('../../../models/api/v1/User');

// Import the necessary modules and dependencies

// create new user
const createUser = async (req, res) => {
    try {
        const { first_name, last_name, email, phone, password, role, what_jeugdbeweging, jb_name, group_number, verenigiging_name, has_ondnr, ondnr } = req.body;

        // create new user with hashed password
        const newUser = new User({ first_name, last_name, email, phone, password, role, what_jeugdbeweging, jb_name, group_number, verenigiging_name, has_ondnr, ondnr});

        await newUser.save();

        res.status(201).json({ message: 'User created successfully', data: { user: newUser } });
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

// get all users
const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();

        res.status(200).json({ data: { users } });
    } catch (error) {
        console.error('Error getting all users:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

// Export the createUser function
module.exports = {
    createUser, getAllUsers
};