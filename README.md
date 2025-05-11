# React Shopping Cart

This is a simple shopping cart application built with **React**, **TypeScript**, and **Vite**. It allows users to browse products, add them to a cart, and view a summary before and after placing an order.

## Features:

-   **Product List Page**: Displays a static list of products (name and price) loaded from a JSON file. Each product includes an "Add to Cart" button and a link to view the cart.
-   **Shopping Cart Page**: Shows all items added to the cart, with the ability to increase, decrease, or remove quantities. Displays per-item subtotals and the overall cart total. Includes navigation to the order summary and product list.
-   **Order Summary Page**: Presents a final summary of cart items before order placement, including all item details and total cost. Includes a "Place Order" button and a link to return to the cart for edits.
-   **Order Confirmation Page**: After order submission, the user is redirected to a new, fully-loaded HTML page confirming the order. It displays all order details and provides a link to return to the product list (clearing the cart).

## State Management:

The application uses the React Context API with the useReducer hook to manage the shopping cart state globally across components.

### Context Design:

-   CartContext.tsx: Defines the context and custom hook (useCart) to access cart state and dispatch actions.

-   CartProvider.tsx: Wraps the application and provides cart state to all child components.

-   cartReducer: Handles cart actions like adding, removing, changing quantities, and clearing the cart.

### Supported Actions:

-   ADD_ITEM: Adds a product to the cart (max quantity of 10 per product).

-   REMOVE_ITEM: Removes a product by ID.

-   CHANGE_QUANTITY: Updates the quantity of a specific product.

-   CLEAR_CART: Empties the entire cart (used after placing an order).

## Technologies:

-   React + TypeScript
-   React Router for page navigation
-   Context API for global cart state
-   Vite for fast development and build
-   Static data in JSON
-   HTML & CSS for static confirmation page
-   ESLint for code linting

## Link to the deployed app:

`https://olegparamey.github.io/Oleh_Paramei_Web_Wroclaw/`

## Setup:

1. **Install dependencies:**

    ```bash
    npm install
    ```

2. **Run the development server:**

    ```bash
    npm run dev
    ```

3. **Build for production:**

    ```bash
    npm run build
    ```

4. **Preview production build:**

    ```bash
    npm run preview
    ```
