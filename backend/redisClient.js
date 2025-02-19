import { Redis } from "ioredis";
const redisClient = async () => {
  const client = new Redis({
    host: "localhost",
    port: process.env.redis_PORT,
  });
  client.on("connect", () => console.log("connected to Redis"));
  client.on('error', (error)=>console.log("connection failed error : ", error))
  return client
};
export default redisClient
