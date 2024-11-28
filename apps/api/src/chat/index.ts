import { Router } from "express";
import { generateText, streamText } from "ai";
import { openai } from "@ai-sdk/openai";
import { pipeline } from "node:stream/promises";

export class Chat {
  router: Router = Router();

  constructor() {
    this.router.get("/", async (req, res) => {
      const { text } = await generateText({
        model: openai("gpt-4o"),
        system: "You are a friendly assistant!",
        prompt: "Why is the sky blue?",
      });

      res.send(text);
    });

    this.router.get("/stream", async (req, res) => {
      const { textStream } = streamText({
        model: openai("gpt-4o"),
        system: "You are a friendly assistant!",
        prompt: "Why is the sky blue?",
      });

      await pipeline(textStream, res);
    });
  }
}
