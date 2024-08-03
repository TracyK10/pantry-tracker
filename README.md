# Pantry Tracker Project

## Overview

The Pantry Tracker is a comprehensive application designed to help users efficiently manage their pantry inventory. It allows users to add, update, remove, and search for items within their pantry. This project leverages Next.js for server-side rendering and routing, Firebase for real-time database management, and Material UI for a modern, responsive user interface.

## Features

- **Add Items:** Users can easily add new items to their pantry.
- **Update Quantities:** Users can adjust the quantity of existing items.
- **Remove Items:** Users can remove items from their pantry.
- **Search Functionality:** Users can quickly find items using the search feature.
- **Real-Time Updates:** Changes to the pantry inventory are updated in real-time.

## Technologies Used

- **Next.js:** Utilized for server-side rendering and efficient routing.
- **Firebase Firestore:** Provides a real-time database for storing pantry items.
- **Material UI:** Offers a sleek and responsive design for the user interface.
- **React:** Core framework for building the frontend components.

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- Firebase account and project setup

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/pantry-tracker.git
   cd pantry-tracker
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Firebase:**
   - Create a Firebase project in the [Firebase Console](https://console.firebase.google.com/).
   - Add a web app to your Firebase project.
   - Copy the Firebase configuration and paste it into a new file named `firebase.js` in the project root.

4. **Run the development server:**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser to see the app in action.

## Usage

- **Add Items:** Click the "Add New Item" button, enter the item name, and click "Add".
- **Update Quantities:** Click the "Add" or "Remove" buttons next to an item to adjust its quantity.
- **Remove Items:** Click the "Remove" button until the quantity reaches zero to delete the item.
- **Search:** Use the search bar to find specific items in your pantry.

## Project Structure

- **`/app`**: Contains the main application files.
  - **`/components`**: Reusable UI components.
  - **`/pages`**: Next.js pages for routing.
  - **`/styles`**: Global and component-specific styles.
  - **`firebase.js`**: Firebase configuration and initialization.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes. Make sure to follow the coding standards and write clear commit messages.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [Next.js](https://nextjs.org/)
- [Firebase](https://firebase.google.com/)
- [Material UI](https://mui.com/)

## Contact

For any inquiries or feedback, please contact [chirutracy@gmail.com](mailto:chirutracy@gmail.com).

---

Thank you for using the Pantry Tracker! Happy tracking!