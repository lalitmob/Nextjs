import mongoose from "mongoose";
const roleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["admin", "user", "moderater"],
  },
  email: {
    type: String,
    required: true,
    validate : {
        validator : function(val){

        }
    }
  },
});
const roleModel = mongoose.model("role", roleSchema);
export default roleModel;
