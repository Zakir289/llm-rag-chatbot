import { ChromaClient } from 'chromadb';
const client = new ChromaClient();

(async () => {
  await client.connect();
  const collection = await client.createCollection('docs');

  const documents = [
    { id: '1', text: 'React is a JavaScript library for building UIs.' },
    { id: '2', text: 'Components in React help you split the UI into reusable parts.' },
    { id: '3', text: 'React uses a virtual DOM for efficient updates.' }
  ];

  for (const doc of documents) {
    await collection.add({
      ids: [doc.id],
      documents: [doc.text]
    });
  }

  console.log('Documents ingested into vector DB.');
})();
