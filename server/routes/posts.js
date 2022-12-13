import express from "express";
import {
  getPosts,
  createPost,
  updatePost,
  deletePost,
  getPost,
  likePost,
} from "../controllers/posts";
import verifyToken from "../middlewares/auth";

const router = express.Router();

// localhost:5000/posts

router.get("/", getPosts);
router.post("/", createPost);
router.get("/:id", getPost);
router.patch("/:id", updatePost);
router.delete("/:id", deletePost);
router.patch("/:id/likePost", likePost);

export default router;
