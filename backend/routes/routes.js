import mongoose from "mongoose";
import express from "express";

import { Book }from "../models/bookSchema.js";

const router = express.Router();

router.get("/" , async (req,res) => {
    try {
        const books = await Book.find();
        res.status(200).json(books);
    } catch (error){
        console.log(error.message);
        res.status(500).json({ error: error.message });
    }
});

router.post("/create", async (req, res) => {
    try {
        const { title, author, publishYear } = req.body;
        const book = await Book.create({ title, author, publishYear });
        res.status(200).json(book);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: error.message });
    }
});

router.put("/update/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { title, author, publishYear } = req.body;
        const book = await Book.findByIdAndUpdate(id, { title, author, publishYear }, { new: true });
        res.status(200).json(book);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: error.message });
    }
})

router.delete("/update/:id", async (req, res) => {
    try {
        const { id } = req.params;
        await Book.findByIdAndDelete(id);
        res.status(200).send("Book deleted successfully");
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: error.message });
    }
})

export default router;
