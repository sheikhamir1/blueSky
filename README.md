# 📦 Project Documentation: BlueSky

## Overview

This project is a modern React application scaffolded with **Vite**, designed for high-performance frontend development. It leverages key libraries like **React Router**, **Framer Motion**, and **Recharts** to build rich, interactive user experiences.

---

## 🧱 Tech Stack

### Core

- **[React 19](https://react.dev/)** – Library for building user interfaces
- **[Vite 6](https://vitejs.dev/)** – Next-generation frontend tooling for fast builds and hot module replacement
- **[React Router DOM 7](https://reactrouter.com/)** – Declarative routing for React
- **[Framer Motion](https://www.framer.com/motion/)** – Animation library for React
- **[Recharts](https://recharts.org/)** – Charting library based on React components

---

## 📁 Project Structure

Typical directory structure for a Vite + React project:

```
vite-project/
├── public/             # Static assets
├── src/                # Application source code
│   ├── components/     # Reusable React components
│   ├── pages/          # Route-based components
│   ├── App.jsx         # Main application entry
│   └── main.jsx        # Entry point for Vite
├── .eslintrc.js        # ESLint configuration
├── package.json        # Project metadata and dependencies
└── vite.config.js      # Vite configuration
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or later recommended)
- npm or yarn

### Installation

```bash
npm install
```

or

```bash
yarn
```

### Development Server

Start the local development server with hot module reloading:

```bash
npm run dev
```

### Build for Production

Generate optimized and minified assets for deployment:

```bash
npm run build
```

---

## 📊 Dependencies

### Runtime Dependencies

| Package          | Version | Description                        |
| ---------------- | ------- | ---------------------------------- |
| react            | ^19.0.0 | Core library for building UI       |
| react-dom        | ^19.0.0 | React DOM renderer                 |
| react-router-dom | ^7.5.1  | Declarative routing for React apps |
| framer-motion    | ^12.7.4 | Motion library for React           |
| recharts         | ^2.15.3 | Charting components for React      |
| react-feather    | ^2.0.10 | Feather icons as React components  |

### Dev Dependencies

| Package                     | Description                          |
| --------------------------- | ------------------------------------ |
| eslint                      | Core ESLint engine                   |
| @eslint/js                  | Official JavaScript ESLint config    |
| eslint-plugin-react-hooks   | Linting rules for React Hooks        |
| eslint-plugin-react-refresh | Enhances Vite's fast refresh support |
| @vitejs/plugin-react        | Official Vite plugin for React       |
| @types/react                | TypeScript definitions for React     |
| @types/react-dom            | TypeScript definitions for ReactDOM  |
| vite                        | Frontend tooling and dev server      |

---

## 📌 Notes

- This setup uses the latest **React 19**, which introduces features like async transitions and new server rendering enhancements.
- Vite’s modern dev server ensures a super-fast development experience.
- Recharts and Framer Motion are pre-installed for interactive UI elements and data visualization.
