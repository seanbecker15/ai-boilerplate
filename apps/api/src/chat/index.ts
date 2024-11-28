import { pipeline } from "node:stream/promises";
import type { ReadableStream } from "node:stream/web";
import { Router } from "express";
import { generateText, streamText } from "ai";
import { openai } from "@ai-sdk/openai";

export class Chat {
  router: Router = Router();

  constructor() {
    this.router.get("/", (_req, res) => {
      generateText({
        model: openai("gpt-4o"),
        system: "You are a friendly assistant!",
        prompt: "Why is the sky blue?",
      })
        .then((text) => {
          res.json({ text });
        })
        .catch((error: Error) => {
          res.status(500).json({ error: error.message });
        });
    });

    this.router.get("/stream", (_req, res) => {
      const chatResponse = streamText({
        model: openai("gpt-4o"),
        system: "You are a friendly assistant!",
        prompt: "Why is the sky blue?",
      });

      const textStream = chatResponse.textStream as ReadableStream;
      pipeline(textStream, res).catch((error: Error) => {
        res.status(500).json({ error: error.message });
      });
    });
  }
}
