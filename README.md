# Flipbook with PDF Upload and Text Input

This project is a web-based application that allows users to upload a PDF file and view it as a flipbook. Additionally, users can enter text into a textarea, which is displayed in a book-like format with pagination. The application provides a seamless experience for viewing both PDFs and text content with a 3D raised effect and interactive features. This application is applicable in creating custom restaurant menu in html 5, create PDF from text, view/compare PDF and text side-by-side. This app will be implemeted as a SAAS platform where users can scan a QR code, and the specific restaurant menu will be displayed.

---

## Features

1. **PDF Flipbook**:

   - Upload a PDF file and view it as an interactive flipbook.
   - Flip through pages using arrow keys or on-screen navigation.
   - Smooth page transitions with a 3D raised effect.

2. **Text Display**:

   - Enter text into a textarea and display it in a book-like format.
   - Pagination automatically splits the text into pages.
   - Navigate through text pages using "Previous" and "Next" buttons.

3. **Toggle Display**:

   - Choose to display the PDF flipbook and text book together or one at a time.
   - Toggle between views using a checkbox.

4. **Customizable Styling**:

   - Responsive design with Bootstrap for a clean and modern look.
   - 3D raised effect for both the flipbook and text book.
   - Customizable colors for the text book and page background.

5. **Pagination Controls**:

   - "Previous" and "Next" buttons for easy navigation.
   - Buttons are hidden when not applicable (e.g., no "Previous" button on the first page).

6. **Loading Indicator**:
   - A "Loading..." message is displayed during PDF processing (if processing takes longer than 50ms).

---

## Technologies Used

- **Frontend**:

  - HTML, CSS, JavaScript
  - [Bootstrap](https://getbootstrap.com/) for styling and responsiveness
  - [jQuery](https://jquery.com/) for DOM manipulation
  - [Turn.js](http://www.turnjs.com/) for flipbook functionality

- **Backend**:
  - [Node.js](https://nodejs.org/) with [Express.js](https://expressjs.com/) for the server
  - [Multer](https://github.com/expressjs/multer) for handling file uploads
  - [pdf-to-img](https://www.npmjs.com/package/pdf-to-img) for converting PDF pages to images

---

## Installation

### Prerequisites

- Node.js (v14 or higher)
- npm (Node Package Manager)

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/senxzo/flipbook-project.git
   cd flipbook-project
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the server:

   ```bash
   node server.js
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

---

## Usage

1. **Upload a PDF**:

   - Click the "Choose File" button to select a PDF file.
   - Click "Upload PDF" to process and display the flipbook.

2. **Enter Text**:

   - Type or paste text into the textarea.
   - Click "Display Text" to view the text in a book-like format.

3. **Toggle Display**:

   - Check the "Show Flipbook and TextBook Together" checkbox to display both the flipbook and text book simultaneously.

4. **Navigate Pages**:
   - Use the "Previous" and "Next" buttons to navigate through pages.
   - Use the left and right arrow keys to flip through the PDF flipbook.

---

## Customization

### Styling

- To customize the appearance of the flipbook or text book, modify the `style.css` file.
- Example: Change the background color of the text book:
  ```css
  .book {
    background-color: #ffffff; /* Change to your preferred color */
  }
  ```

### Pagination Controls

- To change the position of the pagination controls (top or bottom), update the `#paginationControls` CSS in `style.css`.

---

## Screenshots

![Flipbook Screenshot](screenshots/flipbook.png)
_Flipbook with PDF Upload_

![TextBook Screenshot](screenshots/textbook.png)
_Text Display in Book Format_

---

## Contributing

Contributions are welcome! If you'd like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Commit your changes and push to the branch.
4. Submit a pull request.

---

---

## Contributions Needed

We welcome contributions to improve this project! Here are some areas where we need help:

### 1. **Enhance Flipbook Features**

- Add support for **zoom functionality** in the flipbook.
- Implement **page thumbnails** for easier navigation.
- Add a **search feature** to find specific text within the flipbook.

### 2. **Improve Text Display**

- Add **text formatting options** (e.g., bold, italics, underline) for the text book.
- Implement **font size and style customization** for the text book.
- Add support for **markdown or rich text** in the text input.

### 3. **UI/UX Improvements**

- Improve the **3D raised effect** for the flipbook and text book.
- Add **dark mode** support for better accessibility.
- Make the application **fully responsive** for mobile devices.

### 4. **Backend Enhancements**

- Optimize the **PDF-to-image conversion** process for large files.
- Add support for **multiple file uploads**.
- Implement **user authentication** to save and manage uploaded files.

### 5. **Testing and Bug Fixes**

- Write **unit tests** for the frontend and backend.
- Identify and fix any **existing bugs** in the application.
- Improve **error handling** for file uploads and text input.

### 6. **Documentation**

- Improve the **README.md** with more detailed instructions.
- Add a **contributing guide** for new developers.
- Write **API documentation** for the backend.

---

### How to Contribute

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Commit your changes and push to the branch.
4. Submit a pull request with a detailed description of your changes.

---

### Contribution Guidelines

- Follow the existing code style and structure.
- Write clear and concise commit messages.
- Test your changes thoroughly before submitting a pull request.
- If you're adding a new feature, include documentation and examples.

---

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Acknowledgments

- [Turn.js](http://www.turnjs.com/) for providing the flipbook functionality.
- [Bootstrap](https://getbootstrap.com/) for responsive design components.
- [pdf-to-img](https://www.npmjs.com/package/pdf-to-img) for converting PDF pages to images.

---

## Contact

For questions or feedback, feel free to reach out:

- **GitHub**: [Senxzo](https://github.com/senxzo)
- **Portfolio**: https://portfolio-ruddy-six-20.vercel.app/

---

Enjoy using the Flipbook with PDF Upload and Text Input! 🚀

---

Let me know if you need further adjustments!
