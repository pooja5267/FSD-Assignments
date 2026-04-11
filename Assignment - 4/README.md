# Global Finance Dashboard

An interactive data visualization dashboard built with HTML, CSS, JavaScript, and Chart.js. Displays simulated real-time financial market data through multiple chart types and live-updating components.

---

## Features

- **Portfolio performance** line chart with 1W / 1M / 3M / 1Y range switching
- **Asset allocation** donut chart (equities, bonds, crypto, commodities, cash)
- **Sector performance** horizontal bar chart with green/red color coding
- **Monthly revenue vs. expenses** combo chart (bars + dashed line)
- **Live ticker bar** — 8 symbols (AAPL, MSFT, NVDA, TSLA, GOOGL, AMZN, META, BTC) with prices updating every 2.5 seconds
- **4 metric cards** — portfolio value, day's gain, S&P 500, and VIX volatility
- **Live clock** in the header
- **Dark mode** support via CSS `prefers-color-scheme`
- **Responsive layout** — adapts to mobile and tablet screens

---

## Tech Stack

| Technology | Purpose |
|---|---|
| HTML5 | Structure and semantic markup |
| CSS3 | Styling, layout (CSS Grid), dark mode |
| JavaScript (ES6+) | Interactivity and live data simulation |
| [Chart.js v4.4.1](https://www.chartjs.org/) | All charts and graphs |

> No frameworks, no build tools, no package manager required.

---

## Charts Used

| Chart | Type | Library |
|---|---|---|
| Portfolio performance | Line (with fill) | Chart.js |
| Asset allocation | Doughnut | Chart.js |
| Sector performance | Horizontal Bar | Chart.js |
| Revenue vs. Expenses | Bar + Line combo | Chart.js |

---

## Getting Started

### Run locally

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/finance-dashboard.git
   ```
2. Open the file in your browser:
   ```bash
   cd finance-dashboard
   open finance-dashboard.html
   ```
   Or simply double-click `finance-dashboard.html` in your file explorer.

No installation, no dependencies, no server required.

---

## Project Structure

```
finance-dashboard/
│
├── finance-dashboard.html   # Complete single-file dashboard
└── README.md                # Project documentation
```

---

## Screenshots

> Add screenshots of your dashboard here after uploading.

---

## How It Works

- All chart data is **randomly generated** on page load to simulate real market data.
- The **ticker bar and portfolio value card** update every 2.5 seconds using `setInterval`, applying small random price jitters to simulate a live feed.
- **Range buttons** (1W, 1M, 3M, 1Y) regenerate the line chart data with appropriately labelled time axes.
- **Dark mode** is handled entirely through CSS custom properties and the `prefers-color-scheme` media query — no JavaScript toggle needed.

---

## Assignment Details

- **Subject:** Data Visualization / Web Development
- **Tool used:** Chart.js (via CDN)
- **Data:** Simulated / randomly generated (no external API)

---

## License

This project is for educational purposes.
