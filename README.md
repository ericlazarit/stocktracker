# Stock Tracker

A simple React stock tracker app that runs in the browser.

Enter a stock ticker symbol and a refresh interval, then the app collects up-to-date quote information in a table.

The table shows:

- Time stamp
- Current price
- High price
- Low price
- Open price
- Previous close price
- Percent change
- Price change

## Requirements

- Node.js
- npm
- A Finnhub API key

## Setup Instructions

1. Clone the repository:

   ```bash
   git clone https://github.com/ericlazarit/stocktracker.git
   cd stocktracker
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the project root:

   ```bash
   VITE_FINNHUB_KEY=your_finnhub_api_key_here
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL shown in your terminal.

## How to Use

1. Enter a stock symbol, such as `AAPL`, `TSLA`, or `MSFT`.
2. Enter how often you want the app to fetch stock data using the seconds or minutes inputs.
3. Click `It's Aliveeee!!!` to start tracking the stock.
4. Watch the table fill with updated quote information.
5. Click `KILL HIM` to stop collecting new data.

## Available Scripts

```bash
npm run dev
```

Starts the app in development mode.

```bash
npm run build
```

Builds the app for production.

```bash
npm run preview
```

Previews the production build locally.

```bash
npm run lint
```

Runs ESLint.

## Notes

This project uses Finnhub for stock quote data. Because Vite environment variables are included in browser code, do not use a private or high-value API key in this frontend-only project.
