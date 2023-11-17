import { test, expect } from "vitest";
import supertest from "supertest";
import express from "express";
import routes from "../routes/posts";

// Create an instance of an express app
const app = express();
app.use(express.json());
app.use(routes);

const request = supertest(app);

test("GET /posts", async () => {
  const response = await request.get("/posts");
  expect(response.status).toBe(200);
  expect(response.body).toEqual({ message: "This is a GET request" });
});

test("PUT /posts/:id", async () => {
  const response = await request.put("/posts/123");
  expect(response.status).toBe(200);
  expect(response.body).toEqual({ message: "This is a UPDATE request" });
});

test("DELETE /posts/:id", async () => {
  const response = await request.delete("/posts/123");
  expect(response.status).toBe(200);
  expect(response.body).toEqual({ message: "This is a DELETE request" });
});

test("POST /posts", async () => {
  const response = await request.post("/posts");
  expect(response.status).toBe(200);
  expect(response.body).toEqual({ message: "This is a POST request" });
});
