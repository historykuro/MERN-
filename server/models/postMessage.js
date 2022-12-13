import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  title: String,
  content: String,
  selectedFile: String,
});

const PostMessage = mongoose.model("Postmessage", postSchema);

export default PostMessage;
