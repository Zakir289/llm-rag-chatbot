import fetch from 'node-fetch';

export async function generateResponse(prompt) {
  const res = await fetch('http://localhost:11434/api/generate', {
    method: 'POST',
    body: JSON.stringify({ model: 'mistral', prompt }),
    headers: { 'Content-Type': 'application/json' },
  });
  const data = await res.json();
  return data.response;
}
