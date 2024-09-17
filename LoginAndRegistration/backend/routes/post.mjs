{/* The IIE (2024) demonstrates how to work with routes - Post Route */}
import express from "express";
import db from "../db/conn.mjs";
import { ObjectId } from "mongodb";
import checkAuthorisation from "../check-auth.mjs";

//Creates a new router instance for handling routes.
const router = express.Router(); 

//Defines a GET route for the root path ("/").
router.get("/", async (req, res) => {

    //Retrieves the "Posts" collection from the database.
    let collection = await db.collection("Posts");

    //Finds all documents in the "Posts" collection and converts them to an array.
    let results = await collection.find({}).toArray();

    //Sends the results as the response with a status code of 200 (OK).
    res.status(200).send(results);
});

//Defines a POST route for the "/upload" path.
//Uses checkAuthorisation to confirm user is logged in.
router.post("/upload", checkAuthorisation, async (req, res) => {

    //Creates a new document from the request body.
    let newDocument = {
        user: req.body.user, //User information.
        content: req.body.content, //Content of the post.
        image: req.body.image //Optional image associated with the post.
    };

    //Retrieves the "Posts" collection from the database.
    let collection = await db.collection("Posts");

    //Inserts the new document into the "Posts" collection.
    let results = await collection.insertOne(newDocument);

    //Sends a response indicating that the document was successfully inserted with a status code of 201 (Created).
    res.status(201).send(results);
});

//Defines a PATCH route for updating a specific post by ID.
//Uses checkAuthorisation to confirm user is logged in.
router.patch("/:id", checkAuthorisation, async (req, res) => {

    //Query to find the post by its ID.
    const query = { _id: new ObjectId(req.params.id) }; 

    const updates = {
        $set: {
            user: req.body.user, //Updated user field.
            content: req.body.content, //Updated content field.
            image: req.body.image //Updated image field.
        }
    };

    //Retrieves the "Posts" collection from the database.
    let collection = await db.collection("Posts");

    //Updates the post that matches the query with the provided updates.
    let results = await collection.updateOne(query, updates);

    //Sends a response with the result of the update operation and a status code of 200 (OK).
    res.status(200).send(results);
});

//Defines a GET route for retrieving a specific post by ID.
router.get("/:id", async (req, res) => {

    //Query to find the post by its ID.
    const query = { _id: new ObjectId(req.params.id) }; 

    //Retrieves the "Posts" collection from the database.
    let collection = await db.collection("Posts");

    //Finds the post that matches the query.
    let results = await collection.findOne(query);

    //Sends a response with the post data if found, or a 404 (Not Found) status if not.
    if (!results) {
        res.status(404).send("Not Found");
    } else {
        res.status(200).send(results);
    }
});

//Defines a DELETE route for removing a specific post by ID.
//Uses checkAuthorisation to confirm user is logged in.
router.delete("/:id", checkAuthorisation, async (req, res) => {

    //Query to find the post by its ID.
    const query = { _id: new ObjectId(req.params.id) }; 

    //Retrieves the "Posts" collection from the database.
    let collection = await db.collection("Posts");

    //Deletes the post that matches the query.
    let results = await collection.deleteOne(query);

    //Sends a response with the result of the delete operation and a status code of 200 (OK).
    res.status(200).send(results);
});

//Exports the router to be used in other parts of the application.
export default router;


{/* REFERENCE LIST:
The IIE. 2024. LAB GUIDE 2024 [APDS7311/w Learn]. The Independent Institute of Education:
Unpublished.    
*/}