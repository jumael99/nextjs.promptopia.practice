import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  email: {
    type: String,
    unique: [true, "Email already exists!"],
    required: [true, "Email is required"],
  },
  username: {
    type: String,
    required: [true, "Username is required"],
    /*Need to match a spechific regular expression*/
    /*match: [
      /^\S*(?=\S{6,})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*? ])\S*$/,
      "Minimum 6 characters\n" +
        "At least 1 upper case English letter\n" +
        "At least 1 lower case English letter\n" +
        "At least 1 letter\n" +
        "At least 1 special character",
    ],*/
  },
  image: {
    type: String,
  },
});

const User = models.User || model("User", UserSchema);

export default User;
