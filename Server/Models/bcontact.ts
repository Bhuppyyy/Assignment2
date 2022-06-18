// Step 1 - Import Mongoose
import mongoose from 'mongoose';
const Schema = mongoose.Schema; // alias for mongoose.Schema

// Step 2 - Create a Schema that matches the data
const ContactSchema = new Schema
({
    Name: String,
    Phone_Number: String,
    Email_Address: String
},
{
    collection: "businesscontactlist"
});

// Step 3 - Create a Model using the Schema
const Model = mongoose.model("Contact", ContactSchema);

// Step 4 - Export the Model -> this makes the file a module
export default Model;