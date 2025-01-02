const { count } = require("console");
const { MongoClient, Collection } = require("mongodb");

const url =
  "mongodb+srv://moaaz:KVAGCR2009@namastenode.bo1jq.mongodb.net/?retryWrites=true&w=majority&appName=NamasteNode"; //this connection string will get the data from the dtabase managed by the mongoDB website/server.

const client = new MongoClient(url);

const dbName = "HelloWorld";

async function main() {
  await client.connect();
  console.log("Connected successfull to server");
  const database = client.db(dbName);
  const collection = database.collection("user");

    // To inser multiple document/data.
    const data1 = {
      firstname: "Tanmay",
      lastname: "Das",
      city: "Mumbai",
      phoneNumber: 4545,
    };
    const data2 = {
      firstname: "Hassan",
      lastname: "Zaidi",
      city: "UP",
      phoneNumber: 98956,
    };
    const insertResult = await collection.insertMany([data1, data2]); //many data can be inserted using the array.
    console.log("Inserted documents =>", insertResult);

     // To insert a single document/data.
    const singleData = {
      firstname: "Ammar",
      lastname: "Ahmed",
      city: "Delhi",
      phoneNumber: 5487645,
    };
    const singleInsertion = await collection.insertOne(singleData);
    console.log("Single document Inserted =>", singleInsertion);

    // Find all the document with a filter.
    const filterResult = await collection.find({ firstname: "Zaki" }).toArray();
    console.log("Filtered Result Is => ", filterResult);

    // To update a first matching document. This function will only update the first match result.Will not check for the next matching.
    const updateSingleResult = await collection.updateOne(
      { firstname: "Ammar" },
      { $set: { phoneNumber: 112233 } }
    );
    console.log("Updated documents =>", updateSingleResult);

    // To update all matching results.
    const updateAllMatching = await collection.updateMany(
      { firstname: "Zaki" },
      { $set: { city: "Punjab" } }
    );
    console.log("All updated documents => ", updateAllMatching);

    // To delete documents.
    const deleteMatching = await collection.deleteMany({ firstname: "Ammar" });
    console.log("Deleted documents => ", deleteMatching);

  // To delete single document.
  const firstMatching = await collection.deleteOne({ city: "Mumbai" });
  console.log("First matching deleted => ", firstMatching);

     // code to read the file and search something in it.
    const findResult = await collection.find({}).toArray();
    console.log("Found documents =>", findResult);

    //counting the total documents.
    const countResult = await collection.countDocuments({});
    console.log("Count of documents in the user collection => ", countResult);

  return "done.";
}
main()
  .then(console.log)
  .catch(console.err)
  .finally(() => client.close);

//   console.log("Trying another example below: ");
//   async function run() {
//     try {
//       const database = client.db("sample_mflix");
//       const movies = database.collection("movies");

//       // Query for a movie that has the title 'Back to the Future'
//       const query = { title: "Back to the Future" };
//       const movie = await movies.findOne(query);
//       console.log(movie);
//     } finally {
//       // Ensure that the client will close when you finish/error
//       await client.close();
//     }
//   }
//   run().catch(console.dir);

// Notes
//Got to mongo db website,create a free M0 cluster, create a user, get the connection string,

// connection string:  mongodb+srv://moaaz:<db_password>@namastenode.bo1jq.mongodb.net/?retryWrites=true&w=majority&appName=NamasteNode
// user name: moaaz, pw: KVAGCR2009

//login --> username: moaazcse@gmail.com, pw: Moaaz02*
//install mongo db compass.
