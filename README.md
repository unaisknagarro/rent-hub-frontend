# 🏠 RentHub (Property Listing App created in Angular)

A modern **Angular-based property listing platform** that allows users to browse listings, view details, add comments, mark favourites, and manage listings after login.

This project demonstrates **Angular routing, state management using localStorage, authentication flow, CRUD operations, and responsive UI design.**

---

## 🚀 Live Demo

🔗 **Application URL:**  
https://basic-assignment-rent-hub-frontend.vercel.app



## 🔑 Demo Credentials

Email: unaisk@xyz.com
Password: unaisk1234


> You may create your own account using the **Signup page**.

---

## ✨ Features

### 👤 Authentication
- Signup & Login
- Session persistence using localStorage
- Protected user actions

### 🏡 Listings
- View property listings in carousel layout
- View full listing details
- Add comments on listings
- Mark / unmark favourites
- Owner-only edit & delete

### ❤️ Favourites
- Add listings to favourites
- Favourites carousel embedded on Home page

### 🛠 CRUD Operations
- Create new listing
- Edit listing
- Delete listing
- View listing details

### 💾 Local Storage Persistence
- Listings
- Users
- Sessions
- Comments
- Favourites

### 🎨 UI & UX
- Responsive horizontal carousel
- Smooth scrolling navigation
- Clean modern UI
- Mobile-friendly layout

---

## 🛠 Tech Stack

- **Frontend Framework:** Angular 20 (Standalone Components)
- **Language:** TypeScript
- **Styling:** CSS3
- **Routing:** Angular Router
- **State Management:** Browser LocalStorage

---

## 📂 Project Structure

src/

├── app/


  ├── core/

    ├── guards/

      ├── auth.guard.ts

    ├── interceptors/

      ├── auth.ts

    ├── services/

      ├── auth.service.ts

      ├── auth.spec.ts

      ├── comment.ts

      ├── listing.ts

      ├── seed.service.ts

  ├── features/

    ├── home/

    ├── auth/

    ├── listing-create/

    ├── listing-detail/

    ├── preview/

  ├── shared/

    ├── components

      ├── navbar/

    ├── models

      ├── comment.ts

      ├── user.ts

  ├── app.config.ts

  ├── app.css

  ├── app.html

  ├── app.routes.ts

  ├── app.spec.ts

  ├── app.ts

└── index.html

└── main.ts

└── material-theme.scss

---

## ⚙️ Installation & Setup

### Step 1️⃣ Clone Repository

```bash
git clone https://github.com/unaisknagarro/rent-hub-frontend.git
cd rent-hub-frontend

Step 2️⃣ Install Dependencies

npm install

Step 3️⃣ Run Application

npm start

Step 4️⃣ Open in Browser

http://localhost:4200


🔒 Authentication Flow

Signup → Login → Session stored → Access features


👨‍💻 Author

Name: Unais Kamle
GitHub: https://github.com/unaisknagarro

📜 License

This project is licensed under the MIT License.
