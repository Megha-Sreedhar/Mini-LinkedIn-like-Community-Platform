<h1 align="center">Mini LinkedIn-like Community Platform</h1>

About This Site:

-   🗄️ MongoDB Integration
-   🔐 Authentication System with JWT
-   ✉️ Welcome Emails
-   🎨 Design with Tailwind & DaisyUI
-   🛡️ Data Protection
-   🤝 Connection Requests (Send, Accept, Reject)
-   📝 Creating Posts
-   🖼️ Image Upload for Posts and Profiles
-   👤 Profile Creation and Updates
-   👥 Suggested Users Feature
-   👍 Like and Comment on Posts
-   📰 News Feed 

### Tech Stack Used:
- **Frontend:** React.js, Tailwind CSS, DaisyUI
- **Backend:** Node.js, Express.js
- **Database:** MongoDB Atlas
- **Authentication:** JWT (JSON Web Tokens)
- **Image Hosting:** Cloudinary
- **Email Service:** Mailtrap
- **Hosting:** Render
- 
### Setup .env file

```bash
PORT=5000
MONGO_URI=<your_mongo_uri>

JWT_SECRET=<yourjwtsecret>

NODE_ENV=development

MAILTRAP_TOKEN=<your_mailtrap_token>
EMAIL_FROM=mailtrap@demomailtrap.com
EMAIL_FROM_NAME=<Your_Name>

CLOUDINARY_API_KEY=<your_cloudinary_api_key>
CLOUDINARY_API_SECRET=<your_cloudinary_api_secret>
CLOUDINARY_CLOUD_NAME=<your_cloudinary_cloud_name>

CLIENT_URL=http://localhost:5173
```

### Run this app locally

```shell
npm run build
```

### Start the app

```shell
npm run start
```

### Live Link
https://unlinked-siot.onrender.com/
