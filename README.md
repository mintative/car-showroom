# 🚗 Car Showroom

A single-page application built as a test assignment for the **Intern Frontend Developer** position. The project simulates a virtual car showroom where users can browse available vehicles, search and filter the catalog, view detailed information about each car, and leave reviews.

## 🌐 Live Demo

**https://car-showroom.mintative.com**

The application is deployed on **Vercel** and connected to a custom domain.

## ✨ Features

* Browse a catalog of vehicles fetched from the **DummyJSON API**.
* Search vehicles by:

  * Brand
  * Model
  * SKU
* Filter vehicles by:

  * Availability
  * Brand
  * Rating
  * Minimum price
  * Maximum price
* View a detailed page for each vehicle.
* Image gallery with a photo slider.
* Display both primary and additional vehicle information.
* Add your own reviews using a validated form.
* Inline validation messages displayed next to invalid fields.
* User reviews are stored in **localStorage** and persist after page refresh.
* Reviews are sorted by creation date (newest first).
* Fully responsive layout optimized for desktop, tablet, and mobile devices.

## 🛠 Tech Stack

* React
* React Router
* Vite
* CSS Modules
* DummyJSON API
* LocalStorage

## 🚀 Getting Started

### Prerequisites

* Node.js (latest LTS version recommended)

### Installation

```bash
git clone <repository-url>
cd <project-folder>
npm install
```

### Run the development server

```bash
npm run dev
```

After that, open the local URL displayed in the terminal (usually **http://localhost:5173**).

## 📂 Project Structure

The project follows a modular structure with reusable React components, separated pages, API utilities, and CSS Modules for component-scoped styling.

## 📌 Notes

This project was developed as a frontend test assignment with a focus on clean architecture, responsive design, form validation, reusable components, and a user-friendly interface.
