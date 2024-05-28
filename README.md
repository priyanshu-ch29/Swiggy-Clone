# Swiggy Project

# Table of Contents

.Project Overview <br>
.Features <br>
.Installation <br>
.Usage <br>
.File Structure <br>
.Components <br>
.Utilities <br>
.Contributing <br>
.License <br>
.Acknowledgements <br>

# Project Overview

.The Swiggy Project is a web application that mimics the functionalities of the Swiggy food delivery platform. It allows users to browse restaurants, view menus, add items to their cart, and place orders. This project is built using React for the frontend.

# Features

.User authentication and sign-in
.Browse restaurants and menus
.Search functionality
.Add items to cart
.View cart and manage items
.Place orders

# Installation

# Clone the repository:

.git clone https://github.com/priyanshu-ch29/Swiggy-Clone.git
.Navigate to the project directory:

.cd swiggy-project
.Install dependencies:

.npm install
.Start the development server:

.npm start

# Usage

.After starting the development server, open your web browser and go to http://localhost:3000 to see the application in action.

# File Structure

swiggy-project/
├── assets/
│ ├── react.svg
│ └── swiggy.png
├── components/
│ ├── Body.jsx
│ ├── Card.jsx
│ ├── Cart.jsx
│ ├── CartData.jsx
│ ├── CartLoader.jsx
│ ├── Error.jsx
│ ├── Footer.jsx
│ ├── Loader.jsx
│ ├── MenuCategory.jsx
│ ├── MenuItem.jsx
│ ├── Navbar.jsx
│ ├── Product.jsx
│ ├── Search.jsx
│ ├── Shimmer.jsx
│ ├── Signin.jsx
│ ├── SingleCard.jsx
│ └── SingleProduct.jsx
├── utils/
│ ├── cartSlice.js
│ ├── constant.js
│ ├── firebase.js
│ ├── store.js
│ ├── toggleSlice.js
│ ├── useProductList.js
│ └── useRestaurantMenu.js
│ └── userSlice.js
└── README.md

# Components

.Body.jsx: Main body of the application.
.Card.jsx: Component to display individual restaurant or product cards.
.Cart.jsx: Cart component to manage items added by the user.
.CartData.jsx: Component handling the data for the cart.
.CartLoader.jsx: Loader component for cart operations.
.Error.jsx: Error handling component.
.Footer.jsx: Footer of the application.
.Loader.jsx: General loader component.
.MenuCategory.jsx: Component to display menu categories.
.MenuItem.jsx: Component to display individual menu items.
.Navbar.jsx: Navigation bar component.
.Product.jsx: Component to display individual product details.
.Search.jsx: Search functionality component.
.Shimmer.jsx: Shimmer effect for loading states.
.Signin.jsx: User sign-in component.
.SingleCard.jsx: Component to display a single card item.
.SingleProduct.jsx: Component to display a single product detail.

# Utilities

.cartSlice.js: Redux slice for managing cart state.
.constant.js: File for constants used across the project.
.firebase.js: Firebase configuration and initialization.
.store.js: Redux store configuration.
.toggleSlice.js: Redux slice for toggle states.
.useProductList.js: Custom hook for fetching product lists.
.useRestaurantMenu.js: Custom hook for fetching restaurant menu.
vuserSlice.js: Redux slice for user state.

# Contributing

.Contributions are welcome! Please read the CONTRIBUTING.md for guidelines on how to contribute to this project.

# License

.This project is licensed under the MIT License. See the LICENSE file for more details.

# Acknowledgements

.Thanks to the contributors and the open-source community.
.Inspired by the Swiggy food delivery platform.
