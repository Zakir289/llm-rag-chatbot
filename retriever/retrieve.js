import express from 'express';
import bodyParser from 'body-parser';
import { ChromaClient } from 'chromadb';

const app = express();
app.use(bodyParser.json());

const client = new ChromaClient();

(async () => {
  await client.connect();
  const collection = await client.getCollection('docs');

  app.post('/retrieve', async (req, res) => {
    const { query } = req.body;
    const result = await collection.query({
      queryTexts: [query],
      nResults: 3
    });

    const context = result.documents[0].map((d, i) => `- ${d}`).join('\n');
    res.json({ context });
  });

  app.listen(5000, () => console.log('Retriever running on http://localhost:5000'));
})();
