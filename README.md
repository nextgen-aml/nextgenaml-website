# Next Gen AML Landing Page

A React + Vite web application for an AI-powered landing page experience.

## Tech Stack

- React 19
- Vite 6
- TypeScript
- Tailwind CSS
- Google GenAI SDK (`@google/genai`)

## Prerequisites

Before running locally, make sure you have:

- Node.js 18+ (Node.js 20+ recommended)
- npm (comes with Node.js)
- A valid Gemini API key

## Getting Started

1. Clone the repository and move into the project folder.
2. Install dependencies:

```bash
npm install
```

3. Create a local environment file from the example:

```bash
cp .env.example .env.local
```

4. Update `.env.local` with your values:

```env
GEMINI_API_KEY="your_gemini_api_key"
APP_URL="http://localhost:3000"
```

5. Start the development server:

```bash
npm run dev
```

6. Open the app at [http://localhost:3000](http://localhost:3000).

## Environment Variables

- `GEMINI_API_KEY` (required): API key for Gemini requests.
- `APP_URL` (optional locally): Base URL for callbacks/self-references.

## Available Scripts

- `npm run dev` - Start local dev server on `0.0.0.0:3000`
- `npm run build` - Build production assets into `dist/`
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run TypeScript type-check (`tsc --noEmit`)
- `npm run clean` - Remove `dist/`

## Production Build

To create and test a production build locally:

```bash
npm run build
npm run preview
```

## Troubleshooting

- If the app fails to start, verify Node.js version and reinstall dependencies:

```bash
rm -rf node_modules package-lock.json
npm install
```

