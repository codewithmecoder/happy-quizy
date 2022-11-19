import dotenv from "dotenv";
dotenv.config();
import createServer from "./utils/server";
import logger from "./utils/logger";
import swaggerDocs from "./utils/swagger";
const port = process.env.PORT || "1300";
const app = createServer();
app.listen(port, async () => {
  logger.info(`App running on http://localhost:${port}`);
  swaggerDocs(app, port);
});
