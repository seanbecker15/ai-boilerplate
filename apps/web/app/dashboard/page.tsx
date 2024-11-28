"use client";

import { useState } from "react";
import { Code } from "@ai-boilerplate/ui/code";
import { useAuth } from "@clerk/nextjs";

export default function Page() {
  const { getToken } = useAuth();
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      setResponse("");
      const response = await fetch("http://localhost:5001/api/chat/stream", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${await getToken()}`,
        },
      });

      async function streamToString(body: any) {
        const reader = body?.pipeThrough(new TextDecoderStream()).getReader();
        while (reader) {
          const { value, done } = await reader.read();
          if (value) {
            setResponse((prev) => prev + value);
          }
          if (done) {
            break;
          }
        }
      }

      await streamToString(response.body);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Dashboard</h1>

      <h2>Chat</h2>
      <div>
        <Code>{response}</Code>
      </div>

      <textarea value={input} onChange={handleInputChange} />
      <div>
        <button onClick={handleSubmit}>Send</button>
      </div>
    </div>
  );
}
