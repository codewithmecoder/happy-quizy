import dotenv from "dotenv";
dotenv.config();
import createServer from "./utils/server";
import swaggerDocs from "./utils/swagger";
const port = process.env.PORT || "1300";
const app = createServer();
app.listen(port, async () => {
  console.log(`App running on http://localhost:${port}`);
  swaggerDocs(app, port);
});
