# LLM + RAG Chatbot (Modern Full Stack)

A full-stack chatbot application that uses React for the frontend and Node.js/Express for the backend, with a retriever service for Retrieval-Augmented Generation (RAG) using ChromaDB.

---

## Project Structure

```
llm-rag-chatbot-modern-full/
├── client/        # React frontend (Vite)
├── server/        # Express backend API
└── retriever/     # Retriever service (RAG, ChromaDB)
```

---

## Prerequisites

- Node.js (v18+ recommended)
- npm or yarn

---

## Setup Instructions

### 1. Clone the Repository

```sh
git clone <repo-url>
cd llm-rag-chatbot-modern-full
```

---

### 2. Install Dependencies

#### Frontend (client)

```sh
cd client
npm install
```

#### Backend API (server)

```sh
cd ../server
npm install
```

#### Retriever Service

```sh
cd ../retriever
npm install
```

---

### 3. Run the Services

#### Start Retriever Service

```sh
cd retriever
npm run start
```

#### Start Backend API

```sh
cd ../server
npm start
```

#### Start Frontend (React)

```sh
cd ../client
npm run dev
```

---

## Usage

1. Open your browser and go to [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal).
2. Type a message in the chat


##sequence
User ->> React UI: Enters question
React UI ->> Express API: POST /api/chat
Express API ->> Retriever: POST /retrieve
Retriever ->> Express API: return relevant context
Express API ->> Ollama (http://localhost:11434/api/generate): POST prompt + context
Ollama ->> Express API: LLM-generated reply
Express API ->> React UI: Send reply

