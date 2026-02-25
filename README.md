
# **Email Sending API**

This is an API built with [Node.js](https://nodejs.org/) and [Express](https://expressjs.com/) for sending emails using [Resend](https://resend.com).

---

## **Features**

- Send emails through a secure endpoint.
- Configure credentials and recipients via environment variables.
- [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) support for cross-origin requests.

---

## **Prerequisites**

Before getting started, make sure you have the following installed:

- [Node.js](https://nodejs.org) (version 14 or higher).
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/).
- A [Resend](https://resend.com) account to obtain your API Key.

---

## **Installation**

1. **Clone this repository:**
   ```bash
   git clone https://github.com/your-username/your-repo.git
   ```

2. **Navigate to the project directory:**
   ```bash
   cd your-repo
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Set up environment variables:**

   Create a `.env` file in the project root and add the following variables:
   ```env
   RESEND_API_KEY=your-resend-api-key
   EMAIL_FROM=no-reply@yourdomain.com
   EMAIL_TO=recipient@email.com
   PORT=3000
   ```

---

## **Local Usage**

1. **Start the server:**
   ```bash
   node api/index.js
   ```

2. **Access the API at:**
   ```
   http://localhost:3000
   ```

---

## **Endpoints**

### **1. `GET /`**

- **Description:** Verifies that the server is running correctly.
- **Example response:**
  ```json
  {
    "message": "Express on Vercel!!"
  }
  ```

---

### **2. `POST /api/send-email`**

- **Description:** Sends an email using Resend.
- **Request body:** Must be sent in JSON format.
  ```json
  {
    "user_name": "Your Name",
    "user_email": "your-email@gmail.com",
    "subject": "Email subject",
    "message": "This is the message content."
  }
  ```

- **Successful response:**
  ```json
  {
    "message": "Email sent successfully."
  }
  ```

- **Possible errors:**
  - If any data is missing from the request body:
    ```json
    {
      "message": "Error sending the email."
    }
    ```

---

## **Deploy to Vercel**

1. **Configure environment variables in Vercel**:
   Go to `Settings > Environment Variables` in your Vercel project and add the following variables:
   - `RESEND_API_KEY`
   - `EMAIL_FROM`
   - `EMAIL_TO`

2. **Deploy the project:**
   - From the command line:
     ```bash
     vercel
     ```

   - Or connect your repository in the [Vercel](https://vercel.com) dashboard.

---

## **License**

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
