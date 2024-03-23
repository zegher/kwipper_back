const {User} = require('../../../models/api/v1/User');
const bcrypt = require('bcryptjs');

// Import the necessary modules and dependencies

// create new user
const createUser = async (req, res) => {
    try {
        const { first_name, last_name, email, phone, password, role, what_jeugdbeweging, jb_name, group_number, verenigiging_name, has_ondnr, ondnr, straatnaam, huisnummer, postcode, gemeente} = req.body;

        //hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // create new user with hashed password
        const newUser = new User({ first_name, last_name, email, phone, password: hashedPassword, role, what_jeugdbeweging, jb_name, group_number, verenigiging_name, has_ondnr, ondnr, straatnaam, huisnummer, postcode, gemeente});

        await newUser.save();

        res.status(201).json({ message: 'User created successfully', data: { user: newUser } });
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ message: 'Internal Server Error - createUser' });
    }
};

// get all users
const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();

        res.status(200).json({ data: { users } });
    } catch (error) {
        console.error('Error getting all users:', error);
        res.status(500).json({ message: 'Internal Server Error - getAllUsers' });
    }
};

//GET user by id
const getUserById = async (req, res) => {
    try {
        const { id } = req.params;

        if(!id) {
            return res.status(400).json({ message: 'User id is required' });
        }
        const user = await User.findById(id);

        if(!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({ data: { user } });
    }
    catch (error) {
        console.error('Error getting user by id:', error);
        res.status(500).json({ message: 'Internal Server Error - getUserById' });
    }
};

//detete user based on id
const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;

        if(!id) {
            return res.status(400).json({ message: 'User id is required' });
        }

        //find user by id and then delete user
        const detetedUser = await User.findByIdAndDelete(id);

        if(!detetedUser) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json({ message: 'User deleted successfully' });

    } catch (error) {
        console.error('Error deleting user:', error);
        res.status(500).json({ message: 'Internal Server Error - deteleUser' });
    }
};

// Update user information
const putUser = async (req, res) => {
    try {
        const { id } = req.params; // Extract user ID from request parameters
        const userDataToUpdate = req.body; // Get updated user data from request body

        // Check if user ID is provided
        if (!id) {
            return res.status(400).json({ message: 'User id is required' });
        }

        // Find the user by ID and update their information
        const updatedUser = await User.findByIdAndUpdate(id, userDataToUpdate, { new: true });

        // Check if the user exists
        if (!updatedUser) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Respond with the updated user data
        res.status(200).json({ message: 'User information updated successfully', data: { user: updatedUser } });
    } catch (error) {
        console.error('Error updating user information:', error);
        res.status(500).json({ message: 'Internal Server Error - updateUser' });
    }
};

// Export the createUser function
module.exports = {
    createUser, getAllUsers, deleteUser, getUserById, putUser
};