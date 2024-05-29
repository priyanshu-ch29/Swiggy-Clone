# Note 
# Live link : https://swiggy-clone-umber.vercel.app/  but to use this first you need to add cors plugin extension on your browser without this api will not load as real api is used in this project

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

.User authentication and sign-in<br>
.Browse restaurants and menus<br>
.Search functionality<br>
.Add items to cart<br>
.View cart and manage items<br>
.Place orders<br>

# Installation

# Clone the repository:

.git clone https://github.com/priyanshu-ch29/Swiggy-Clone.git<br>
.Navigate to the project directory:<br>

.cd swiggy-project<br>
.Install dependencies:<br>

.npm install<br>
.Start the development server:<br>

.npm start<br>

# Usage

.After starting the development server, open your web browser and go to http://localhost:3000 to see the application in action.

# File Structure

swiggy-project/<br>
├── assets/<br>
│ ├── react.svg<br>
│ └── swiggy.png<br>
├── components/<br>
│ ├── Body.jsx<br>
│ ├── Card.jsx<br>
│ ├── Cart.jsx<br>
│ ├── CartData.jsx<br>
│ ├── CartLoader.jsx<br>
│ ├── Error.jsx<br>
│ ├── Footer.jsx<br>
│ ├── Loader.jsx<br>
│ ├── MenuCategory.jsx<br>
│ ├── MenuItem.jsx<br>
│ ├── Navbar.jsx<br>
│ ├── Product.jsx<br>
│ ├── Search.jsx<br>
│ ├── Shimmer.jsx<br>
│ ├── Signin.jsx<br>
│ ├── SingleCard.jsx<br>
│ └── SingleProduct.jsx<br>
├── utils/<br>
│ ├── cartSlice.js<br>
│ ├── constant.js<br>
│ ├── firebase.js<br>
│ ├── store.js<br>
│ ├── toggleSlice.js<br>
│ ├── useProductList.js<br>
│ └── useRestaurantMenu.js<br>
│ └── userSlice.js<br>
└── README.md<br>

# Components

.Body.jsx: Main body of the application.<br>
.Card.jsx: Component to display individual restaurant or product cards.<br>
.Cart.jsx: Cart component to manage items added by the user.<br>
.CartData.jsx: Component handling the data for the cart.<br>
.CartLoader.jsx: Loader component for cart operations.<br>
.Error.jsx: Error handling component.<br>
.Footer.jsx: Footer of the application.<br>
.Loader.jsx: General loader component.<br>
.MenuCategory.jsx: Component to display menu categories.<br>
.MenuItem.jsx: Component to display individual menu items.<br>
.Navbar.jsx: Navigation bar component.<br>
.Product.jsx: Component to display individual product details.<br>
.Search.jsx: Search functionality component.<br>
.Shimmer.jsx: Shimmer effect for loading states.<br>
.Signin.jsx: User sign-in component.<br>
.SingleCard.jsx: Component to display a single card item.<br>
.SingleProduct.jsx: Component to display a single product detail.<br>

# Utilities

.cartSlice.js: Redux slice for managing cart state.<br>
.constant.js: File for constants used across the project.<br>
.firebase.js: Firebase configuration and initialization.<br>
.store.js: Redux store configuration.<br>
.toggleSlice.js: Redux slice for toggle states.<br>
.useProductList.js: Custom hook for fetching product lists.<br>
.useRestaurantMenu.js: Custom hook for fetching restaurant menu.<br>
vuserSlice.js: Redux slice for user state.<br>

# Contributing

.Contributions are welcome! Please read the CONTRIBUTING.md for guidelines on how to contribute to this project.

# License

.This project is licensed under the MIT License. See the LICENSE file for more details.

# Acknowledgements

.Thanks to the contributors and the open-source community.
.Inspired by the Swiggy food delivery platform.
