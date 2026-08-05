// Shipment tracker: the sample application the federated workflow
// 
// Lab contract: this code is correct and never changes during the lab. It is
// deliberately zero-dependency (Node core modules only), so the workflow has
// no install or build step to fail. Two routes matter to the lab's
// validation: the root page, which replaces the default App Service page
// when the deployment succeeds, and /version, which returns the deployed
// application version as JSON.

const http = require("http");
const fs = require("fs");
const path = require("path");

const pkg = JSON.parse(
  fs.readFileSync(path.join(__dirname, "package.json"), "utf8")
);

const port = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
  if (req.url === "/version") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({ application: pkg.name, version: pkg.version })
    );
    return;
  }

  const page = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Shipment Tracker</title>
  <style>
    body { font-family: 'Segoe UI', Arial, sans-serif; background: #f4f4f7; margin: 0; }
    main { max-width: 640px; margin: 8vh auto; background: #ffffff; border-radius: 12px;
           padding: 32px 40px; box-shadow: 0 2px 12px rgba(27, 24, 52, 0.08); }
    h1 { color: #1b1834; margin-top: 0; }
    p { color: #444; }
    code { background: #f0f0f4; padding: 2px 6px; border-radius: 4px; }
  </style>
</head>
<body>
  <main>
    <h1>Shipment Tracker</h1>
    <p>Deployed by GitHub Actions with federated identity. No client secret was stored anywhere to put this page here.</p>
    <p>Application <code>${pkg.name}</code>, version <code>${pkg.version}</code>. The version endpoint is at <code>/version</code>.</p>
  </main>
</body>
</html>`;
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  res.end(page);
});

server.listen(port, () => {
  console.log(`shipment tracker listening on port ${port}`);
});
