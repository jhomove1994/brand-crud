import "dotenv/config";
import express from "express";
import cors from "cors";
import { router } from "./routes";
import "reflect-metadata";
import { postgresConfig } from "./config/database/postgres";
import morgan from "morgan";

const PORT = process.env.PORT || 3000;
const DATABASE_TYPE = process.env.DATABASE_TYPE || "postgres";

const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(router);
if (DATABASE_TYPE === "postgres") {
  postgresConfig
    .initialize()
    .then(() => {
      console.info("Connected to Postgres");
    })
    .catch((error) => {
      console.error("Error connecting to Postgres", error);
    });
}
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
