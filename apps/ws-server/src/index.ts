import { WebSocketServer } from "ws";
import { db } from "@repo/db"; // your prisma client

const wss = new WebSocketServer({ port: 8081 });

wss.on("connection", (ws) => {
  console.log("Client connected");

  ws.on("message", async (message) => {
    try {
      // create user in DB
      await db.user.create({
        data: {
          username: Math.random().toString(),
          password: Math.random().toString(),
        },
      });

      // echo back message
      ws.send(message.toString());
    } catch (error) {
      console.error("Error:", error);
      ws.send("Error occurred");
    }
  });

  ws.on("close", () => {
    console.log("Client disconnected");
  });
});