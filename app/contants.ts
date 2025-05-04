import dotenv from "dotenv";

dotenv.config();

const serverUrl = process.env.SERVER_URL;
const publishableApiKey = process.env.MEDUSA_PUBLISHABLE_API_KEY;

export { serverUrl, publishableApiKey }