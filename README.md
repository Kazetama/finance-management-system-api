# Finance Management System API

A professional RESTful API for financial management applications, built using **Node.js**, **Express.js**, and **Clean Architecture** principles.  
This API is designed to handle financial transactions, budgeting, and user authentication in a scalable, maintainable, and secure manner.

---

## 📌 Features

- User authentication and authorization (JWT-based)
- Financial transaction management (income & expense)
- Budget planning and tracking
- Account / wallet management
- Secure RESTful API design
- Input validation and centralized error handling
- Environment-based configuration
- Clean Architecture implementation

---

## 🏗️ Project Architecture

This project follows **Clean Architecture**, ensuring separation of concerns and long-term maintainability.

```text
src/
├── controllers/        # Handle HTTP requests & responses
├── routes/             # API route definitions
├── middlewares/        # Authentication, validation, error handling
├── config/             # config db
├── services/           # services functions
└── app.js / server.js  # Application entry point
```

**Architecture Flow:**

```
Request → Route → Controller → Database
```

---

## 🧰 Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: Supabase 
- **Authentication**: JSON Web Token (JWT)
- **Environment Management**: dotenv
- **Package Manager**: npm

---

## ⚙️ Installation & Setup

### 1. Clone Repository

```bash
git clone https://github.com/Kazetama/finance-management-system-api.git
cd finance-management-system-api
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Configuration

```bash
cp .env.example .env
```

Configure required variables in `.env`.

### 4. Run Application

```bash
npm run dev
```

or

```bash
npm start
```

---

## 🔐 Authentication

This API uses **JWT (JSON Web Token)** for securing endpoints.

Include token in request header:

```http
Authorization: Bearer <token>
```

---

## 📡 API Endpoints (Overview)

| Method | Endpoint | Description |
|------|--------|------------|
| POST | `/auth/login` | User login |
| GET | `/transactions` | Get all transactions |
| POST | `/transactions` | Create transaction |
| PUT | `/transactions/:id` | Update transaction |
| DELETE | `/transactions/:id` | Delete transaction |
| GET | `/budgets` | Get budgets |
| POST | `/budgets` | Create budget |

---

## 🧪 Testing

Testing is focused on validating business logic and API consistency.

---

## 🔒 Security

- Password hashing
- JWT authentication
- Environment variable isolation
- Input validation
- Centralized error handling

---

## 🚀 Future Improvements

- Swagger / OpenAPI documentation
- Financial analytics & reporting

---

## 📄 License

This project is licensed under the MIT License.  
See the [LICENSE](LICENSE) file for details.

---

## 👤 Author

**Teuku Aryansyah Pratama (Kazetama)**  
GitHub: https://github.com/Kazetama
