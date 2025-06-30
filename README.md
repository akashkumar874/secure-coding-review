# ✅ Secure Coding Review – Task 3 (CodeAlpha Internship)

## 🔧 Project Name: secure-coding-review-task3  
## 👨‍💻 Language Used: HTML, CSS, JavaScript

---

## 🎯 Objective

To audit a simple login form for security issues and apply secure coding practices to fix them.

---

## 🚨 Security Issues Found

| Issue                     | Explanation                                                         |
|--------------------------|----------------------------------------------------------------------|
| ❌ Password Logging       | `console.log(password)` exposes sensitive data                      |
| ❌ No Input Validation    | User input is not checked or sanitized – allows XSS attacks         |
| ❌ Client-side Only       | No backend validation – login can be easily bypassed                |
| ❌ Sensitive Alerts       | Alert shows raw username – can be used in phishing scenarios        |

---

## ✅ Remediation / Fixes

- Removed password from `console.log()`
- Added input validation (`.trim()`, empty check)
- Avoided exposing username in `alert()`
- Educated user that backend should handle real login
- Provided secure version of `script.js`

---

## 📄 Files in the Project

- `index.html` → Structure of login form  
- `style.css` → Styling for the form  
- `script.js` → Secure JavaScript logic  
- `README.md` → Secure code review report (this file)

---

## 🔐 Best Practices Applied

- Never log passwords or sensitive data
- Validate user input properly
- Don’t display user data in alerts
- Backend should use hashing and authentication
- Use HTTPS and CSP headers (future scope)

---

## 🚀 Future Scope

- Integrate backend with Node.js + Express
- Store credentials securely using bcrypt hashing
- Add JWT-based login and token management
- Protect against XSS and CSRF

---

## ✅ Task Status: Completed
This completes Task 3 of the CodeAlpha Internship – Secure Coding Review.
