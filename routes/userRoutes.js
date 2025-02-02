const express = require('express');
const User = require('../models/User');
const router = express.Router();

// Create User
router.post('/users', async (req, res) => {
    try {
        const { name, age, email } = req.body;
        const newUser = new User({ name, age, email });
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Read Users with Search, Sorting & Pagination
router.get('/users', async (req, res) => {
    try {
        let { search, sortBy, order, page, limit } = req.query;

        // Default values
        page = parseInt(page) || 1;
        limit = parseInt(limit) || 5;
        order = order === 'desc' ? -1 : 1;

        let query = {};

        // Search by name (case-insensitive)
        if (search) {
            query.name = { $regex: search, $options: 'i' }; 
        }

        const users = await User.find(query)
            .sort(sortBy ? { [sortBy]: order } : {})
            .skip((page - 1) * limit)
            .limit(limit);

        const totalUsers = await User.countDocuments(query);

        res.json({ users, totalPages: Math.ceil(totalUsers / limit), currentPage: page });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Update User
router.put('/users/:id', async (req, res) => {
    try {
        const { name, age, email } = req.body;
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id, 
            { name, age, email },
            { new: true } 
        );
        res.json(updatedUser);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});


// Delete User
router.delete('/users/:id', async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.json({ message: "User deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
