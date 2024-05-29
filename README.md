# Note

-> In this swiggy real api is used so there will be cors plugin issue so for anyone to use this first they must have the cors plugin extension in their browser otherwise the restaurant cards will not display or api will not fetch

# Live link : https://swiggy-clone-umber.vercel.app/

# Swiggy Project

# Project Overview

This project is a clone of Swiggy, a popular food delivery app, built using modern web development technologies. The application is developed using HTML, Tailwind CSS for styling, JavaScript, ReactJS, Redux Toolkit for state management, React Router for navigation, and custom hooks for code reusability. Firebase Authentication is integrated to manage user sign-ups and logins, ensuring that user data is securely stored and displayed in Firebase.

# Features

-> User Authentication: Users can sign up and log in through Firebase Authentication. Once signed up, their data is securely stored in Firebase, allowing for seamless user management and personalized experiences.
-> Responsive Design: The app is designed to be fully responsive, ensuring a seamless experience on mobile devices. Tailwind CSS is utilized to implement a responsive layout that adjusts gracefully to different screen sizes.
-> Cart Functionality:
-> Add to Cart: Users can browse through a list of food items and add their desired items to the cart.
-> View Cart: The cart is accessible from any page, showing a summary of items added along with their quantities and prices.
-> Update Cart: Users can update the quantity of items directly from the cart, ensuring flexibility and ease of use.
-> Remove Items: Items can be removed from the cart if the user changes their mind.
-> Persisted State: The cart state is managed using Redux Toolkit, ensuring that the cart content persists across page reloads and navigations.

# Technical Stack

HTML: For structuring the content.
Tailwind CSS: For creating a responsive and modern UI.
JavaScript: For adding interactivity and logic.
ReactJS: For building a dynamic user interface.
Redux Toolkit: For efficient state management.
React Router: For managing navigation between different pages.
Custom Hooks: For encapsulating reusable logic.
Firebase Authentication: For secure user authentication and data management.

# Responsive Design

The application is designed to be mobile-friendly, leveraging Tailwind CSS's responsive utilities to ensure that the layout adjusts smoothly to different screen sizes. Key elements such as navigation, cart, and product listings are optimized for touch interactions, providing a user-friendly experience on mobile devices.

This Swiggy clone project showcases a comprehensive implementation of a modern web application with a focus on user authentication, state management, and responsive design, making it a robust example of a full-stack development project.

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

# Contributing

.Contributions are welcome! Please read the CONTRIBUTING.md for guidelines on how to contribute to this project.

# License

.This project is licensed under the MIT License. See the LICENSE file for more details.

# Acknowledgements

.Thanks to the contributors and the open-source community.
.Inspired by the Swiggy food delivery platform.
