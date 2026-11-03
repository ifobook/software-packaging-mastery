const test = require("node:test");
const assert = require("node:assert/strict");
const app = require("../src/index.js");

async function startServer() {
  const server = app.listen(0);

  await new Promise((resolve) => {
    server.once("listening", resolve);
  });

  const address = server.address();

  return {
    server,
    baseUrl: `http://127.0.0.1:${address.port}`
  };
}

test("GET / returns application metadata", async () => {
  const { server, baseUrl } = await startServer();

  try {
    const response = await fetch(baseUrl);
    const data = await response.json();

    assert.equal(response.status, 200);
    assert.equal(data.application, "software-packaging-mastery");
    assert.equal(data.version, require("../package.json").version);
    assert.equal(data.message, "Software packaging successful");
  } finally {
    await new Promise((resolve, reject) => {
      server.close((error) => error ? reject(error) : resolve());
    });
  }
});

test("GET /health returns healthy status", async () => {
  const { server, baseUrl } = await startServer();

  try {
    const response = await fetch(`${baseUrl}/health`);
    const data = await response.json();

    assert.equal(response.status, 200);
    assert.equal(data.status, "healthy");
    assert.equal(data.version, require("../package.json").version);
  } finally {
    await new Promise((resolve, reject) => {
      server.close((error) => error ? reject(error) : resolve());
    });
  }
});

test("Unknown routes return HTTP 404", async () => {
  const { server, baseUrl } = await startServer();

  try {
    const response = await fetch(`${baseUrl}/unknown`);

    assert.equal(response.status, 404);
  } finally {
    await new Promise((resolve, reject) => {
      server.close((error) => error ? reject(error) : resolve());
    });
  }
});
