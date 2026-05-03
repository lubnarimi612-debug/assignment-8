## 📌 About Project

This is a simple online book library website.
Users can see books, search books, and borrow books after login.

---

## 🚀 Features

* Login & Register system
* Google Login
* See all books
* Search books
* Filter by category (Story, Tech, Science)
* Book details page (private)
* Borrow book button
* User profile page
* Update profile

---

## 🏠 Pages

* Home
* All Books
* Book Details (Private)
* My Profile (Private)
* Login
* Register

---

## 🛠️ Technology

* Next.js
* Tailwind CSS
* DaisyUI
* BetterAuth
* MongoDB

---

## 🔑 Environment Variables

Create `.env.local` file:

```env id="env001"
MONGODB_URI=your_mongodb_url
BETTER_AUTH_SECRET=your_secret
GOOGLE_CLIENT_ID=your_client_id
GOOGLE_CLIENT_SECRET=your_secret
```

---

## ▶️ Run Project

```bash id="run001"
npm install
npm run dev
```

---

## 📦 Data Structure

```json id="json001"
{
  "id": 1,
  "title": "Book Name",
  "author": "Author",
  "description": "Some text",
  "category": "Story",
  "available_quantity": 5,
  "image_url": "link"
}
## 📌 Note

* This project is responsive
* Private routes are protected
* Used simple UI design

## 👨‍💻 Author

Lobna Khanam Rimi
