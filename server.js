import express from "express";
import { pdf } from "pdf-to-img";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import multer from "multer";

// Define __dirname in ES module context
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

// Configure multer for file uploads
const upload = multer({ dest: "uploads/" });

// Serve static files from the root directory
app.use(express.static(__dirname));

// Route for the root URL
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Handle PDF upload
app.post("/upload-pdf", upload.single("pdf"), (req, res) => {
  const filePath = req.file.path;
  res.json({ filePath });
});

// Convert PDF to images
app.get("/pdf-to-img", async (req, res) => {
  const filePath = req.query.filePath;
  const imagesDir = path.join(__dirname, "images");

  // Create the images directory if it doesn't exist
  if (!fs.existsSync(imagesDir)) {
    fs.mkdirSync(imagesDir);
  }

  // Clean the images directory
  fs.readdir(imagesDir, (err, files) => {
    if (err) throw err;
    for (const file of files) {
      fs.unlink(path.join(imagesDir, file), (err) => {
        if (err) throw err;
      });
    }
  });

  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");

  let pageNumber = 1;
  for await (const page of await pdf(filePath)) {
    fs.writeFileSync(path.join(imagesDir, `page${pageNumber}.png`), page);
    res.write(`event: generatedpages\ndata: ${pageNumber}\n\n`);
    pageNumber++;
  }
  res.write(`event: totalpages\ndata: ${pageNumber}\n\n`);
  res.end();
});

// Serve images
app.use("/images", express.static(path.join(__dirname, "images")));

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
