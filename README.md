# Creatorverse 💫

A person's top content creators can say a lot about them. Do they prefer lockpicking videos 🔒, casual art streams 🖼️, or hustle-culture TikTokers 📱?

---

## 🚀 Features

- **CRUD Functionality**
  - Add a new content creator (name, URL, description, optional image).
  - View all content creators.
  - View details for a single creator on their own page.
  - Update creator info at any time.
  - Delete creators.

- **Database Integration**
  - Powered by [Supabase](https://supabase.com/).
  - Real-time updates with Supabase's client library.

---

## 📸 Screenshot
 
Example of the app with the required features implemented.

---

## 🛠️ Tech Stack

- [React](https://react.dev/) + [Vite](https://vitejs.dev/) ⚡
- [React Router](https://reactrouter.com/) 🔗
- [Supabase](https://supabase.com/) 🗄️

---

## ⚙️ Setup & Running Locally

### 1. Clone the Repository
```
git clone https://github.com/dreniff3/Creatorverse.git
cd creatorverse
```

###  2. Install Dependencies
```
npm install
```

### 3. Configure Environment Variables
In the ```client.js``` file, set the value for ```URL``` to your Supabase project URL and ```API_KEY``` to your Supabase project API key:
```
const URL = 'your-supabase-project-url';
const API_KEY = 'your-supabase-project-api-key';
```

### 4. Start the Dev Server
```
npm run dev
```
Your app should now be running at [http://localhost:5173↗](http://localhost:5173)🎉
