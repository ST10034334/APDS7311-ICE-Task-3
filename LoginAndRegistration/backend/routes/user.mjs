{/* The IIE (2024) demonstrates how to work with routes - User Route */}
import express from "express";
import db from "../db/conn.mjs";
import { ObjectId } from "mongodb";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import ExpressBrute from "express-brute";

//Creates a new router instance for handling routes.
const router = express.Router(); 

//Creates an in-memory store for brute-force protection to track login attempts.
var store = new ExpressBrute.MemoryStore();
var bruteforce = new ExpressBrute(store, {

    freeRetries: 3, //Number of allowed attempts before blocking.
    minTimeout: 15 * 60 * 1000, //Blocks for 15 minutes after exceeding attempts.
    maxTimeout: 30 * 60 * 1000 //Maximum block time (30 minutes).
})

//Defines a POST route for signing up a new user.
router.post("/signup", async (req, res) => {

    //Hashes the password with bcrypt before storing it.
    const password = bcrypt.hash(req.body.password, 10);

    //Creates a new document from the request body.
    let newDocument = {
        name: req.body.name, //User's name.
        password: (await password).toString(), //User's hashed password.
    };

    //Retrieves the "Users" collection from the database.
    let collection = await db.collection("Users");

    //Inserts the new document into the "Users" collection.
    let results = await collection.insertOne(newDocument);

    //Sends a response indicating that the document was successfully inserted with a status code of 204 (No Content).
    res.status(204).send(results);
});

//Defines a POST route for logging in a user, with brute-force protection.
router.post("/login", bruteforce.prevent, async (req, res) => {
    const { name, password } = req.body;
    console.log(name + " " + password);

    try {
        //Retrieves the "Users" collection from the database.
        let collection = await db.collection("Users");

        //Finds a user document that matches the provided name.
        let user = await collection.findOne({ name });

        if (!user) {
            //Sends a 401 (Unauthorized) response if the user is not found.
            res.status(401).json({ message: "Authentication Failed!" });
            return;
        }

        //Compares the provided password with the stored hashed password.
        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {

            //Sends a 401 (Unauthorized) response if the password does not match.
            res.status(401).json({ message: "Authentication Failed!" });

        } else {

            //Generates a JSON Web Token (JWT) for the authenticated user.
            const token = jwt.sign({ name: req.body.name, password: req.body.password }, "registration_login__user_validation_token_true", { expiresIn: "1h" });

           //Sets the Authorization header with the generated token.
           {/* */}
           // res.setHeader('Authorization', `Bearer ${token}`);

            //Sends a response with the success message, token, and user name.
            res.status(200).json({ message: "Authentication Successful!", token: token, name: req.body.name });
        }
    } catch (e) {

        //Logs and sends a 500 (Internal Server Error) response if an exception occurs.
        console.error("Login error", e);
        res.status(500).json({ message: "Login Failed!" });
    }
});


//Defines a PATCH route for updating a specific user's name by ID.
router.patch("/:id", async (req, res) => {

    //Query to find the post by its ID.
    const query = { _id: new ObjectId(req.params.id) }; 

    const updates = {
        $set: {
            name: req.body.name, //Updated user name.
        }
    };

    //Retrieves the "Users" collection from the database.
    let collection = await db.collection("Users");

    //Updates the post that matches the query with the provided updates.
    let results = await collection.updateOne(query, updates);

    //Sends a response with the result of the update operation and a status code of 200 (OK).
    res.status(200).send(results);
});

//Exports the router to be used in other parts of the application.
export default router;

{/* REFERENCE LIST:
The IIE. 2024. LAB GUIDE 2024 [APDS7311/w Learn]. The Independent Institute of Education:
Unpublished.    
*/}