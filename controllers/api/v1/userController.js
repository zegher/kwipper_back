const {User} = require('../../../models/api/v1/User');

// Import the necessary modules and dependencies

// create new user
const createUser = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // create new user with hashed password
        const newUser = new User({ username, email, password });

        await newUser.save();

        res.status(201).json({ message: 'User created successfully', data: { user: newUser } });
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};


// Export the createUser function
module.exports = {
    createUser,
};