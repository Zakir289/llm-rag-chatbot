import express from 'express';
import { generateResponse } from '../services/ollamaService.js';
import fetch from 'node-fetch';

const router = express.Router();

router.post('/chat', async (req, res) => {
  console.log('testing....')
  const { message } = req.body;
  const retrievedContext = await fetch('http://localhost:5000/retrieve', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query: message })
  }).then(r => r.json());

  const prompt = `Context:\n${retrievedContext.context}\n\nUser: ${message}\nAssistant:`;
  const reply = await generateResponse(prompt);
  res.json({ reply });
});

export default router;
