const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 8280;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB configuration
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = "mongodb+srv://bookstore:2IS3VJAT0346UduO@cluster0.liqtg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

// MongoDB connection setup
async function connectToDB() {
  try {
    await client.connect();
    console.log("Connected to MongoDB successfully!");

    // Get the books collection
    const bookCollections = client.db("BookInventory").collection("books");

    // Route for inserting a book
    app.post("/upload-book", async (req, res) => {
      try {
        const data = req.body;
        const result = await bookCollections.insertOne(data);
        res.status(201).send(result);  // Send appropriate status code
      } catch (err) {
        console.error("Error uploading book:", err);
        res.status(500).send({ error: "Failed to upload book" });
      }
    });
    //get all the books from the database
    app.get("/all-books",async(req,res)=>{
      const books=await bookCollections.find();
      const result=await books.toArray();
      res.send(result);
    });
    // update a book data :patch update methods
    app.patch("/book/:id",async(req,res) => {
      const id=req.params.id;
      //console.log(result);
      const updateBookData=req.body;
      const filter={_id:new ObjectId(id)};
      const options={upsert:true};
      const updateDoc={
        $set:{
          ...updateBookData
        }
      }
      const result=await bookCollections.updateOne(filter,updateDoc,options);
      res.send(result);

    });
    //delete book data
    app.delete("/book/:id",async(req,res)=>{
      const id=req.params.id;
      const filter={_id:new ObjectId(id)};
      const result=await bookCollections.deleteOne(filter);
      res.send(result);
    });
    //finf by cat
    app.get("/all-books",async(req,res)=>{
      let query={};
      if (req.query?.category){
        query={category:req.query.category};

      }
      const result=await bookCollections.find(query).toArray();
      res.send(result);
    });

    app.get("/book/:id",async(req,res)=>{
      const id=req.params.id;
      const filter={_id:new ObjectId(id)};
      const result=await bookCollections.findOne(filter)
      res.send(result);
    })

  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  }
}

// Run the database connection
connectToDB();

// Root route
app.get('/', (req, res) => {
  res.send('Hello World');
});

// Server listener
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
