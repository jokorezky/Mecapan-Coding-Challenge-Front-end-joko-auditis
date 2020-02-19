import express, { Request, Response } from "express";
import next from "next";

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const port = process.env.PORT || 3000;

(async () => {
  try {
    await app.prepare();
    const server = express();
    server.get('/:url', (req, res) => {
      return app.render(req, res, '/detail', {
        url: req.params.url,
      });
    });
    server.all("*", (req: Request, res: Response) => {
      return handle(req, res);
    });
    server.listen(port, (err?: any) => {
      if (err) throw err;
      console.log(`> Hello Ready on localhost:${port}`);
    });
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
})();