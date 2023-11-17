/** source/controllers/posts.ts */
import { Request, Response, NextFunction } from "express";

// getting all posts
const getPosts = async (req: Request, res: Response, next: NextFunction) => {
  return res.status(200).json({
    message: "This is a GET request",
  });
};

// updating a post
const updatePost = async (req: Request, res: Response, next: NextFunction) => {
  return res.status(200).json({
    message: "This is a UPDATE request",
  });
};

// deleting a post
const deletePost = async (req: Request, res: Response, next: NextFunction) => {
  return res.status(200).json({
    message: "This is a DELETE request",
  });
};

// adding a post
const addPost = async (req: Request, res: Response, next: NextFunction) => {
  return res.status(200).json({
    message: "This is a POST request",
  });
};

export default { getPosts, updatePost, deletePost, addPost };
