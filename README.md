# WEB103 Prework - *Creatorverse 💫*

Submitted by: **Donald Reniff**

About this web app: **A person's top content creators can say a lot about them. Do they prefer lockpicking videos 🔒, casual art streams 🖼️, or hustle-culture TikTokers 📱?**

Time spent: **15** hours

---

## 🚀 Required Features

- [✔] **A logical component structure in React is used to create the frontend of the app**
- [✔] **At least five content creators are displayed on the homepage of the app**
- [✔] **Each content creator item includes their name, a link to their channel/page, and a short description of their content**
- [✔] **API calls use the async/await design pattern via Axios or fetch()**
- [✔] **Clicking on a content creator item takes the user to their details page, which includes their name, url, and description**
- [✔] **Each content creator has their own unique URL**
- [✔] **The user can edit a content creator to change their name, url, or description**
- [✔] **The user can delete a content creator**
- [✔] **The user can add a new content creator by entering a name, url, or description and then it is displayed on the homepage**

The following **optional** features are implemented:

- [❌] Picocss is used to style HTML elements
- [✔] The content creator items are displayed in a creative format, like cards instead of a list
- [✔] An image of each content creator is shown on their content creator card

---
 
## 📸 Video Walkthrough

Here's a walkthrough of implemented required features:

<img src='./public/creatorverse.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

GIF created with [ScreenToGif](https://www.screentogif.com/).

---

## Notes

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

---

## License

Copyright [2025] [Donald Reniff]

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

> http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
