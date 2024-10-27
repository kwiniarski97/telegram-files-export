import "reflect-metadata";

import { errors, TelegramClient } from "telegram";
import { StringSession } from "telegram/sessions";

const readInput = async (message: string) => {
  process.stdout.write(message);
  for await (const line of console) {
    return line;
  }
};

const apiId = 17169487;
const apiHash = "594594a8bd7e43bc2dabdaf559654e8f";
const stringSession = new StringSession("");

const client = new TelegramClient(stringSession, apiId, apiHash, {
  connectionRetries: 5,
});

await client.start({
  phoneNumber: async () => readInput("Provide phone number"),
  password: async () => readInput("Provide password"),
  phoneCode: async () => readInput("Provide phone code"),
  onError: (error) => console.error(error),
});

const authKey = client.session.getAuthKey();
const a = stringSession.getAuthKey();
