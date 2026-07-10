<h1>Notes App Backend API</h1>

A RESTful Notes Management API built using Express.js, Node.js, MongoDB, and Mongoose. This project demonstrates one-to-many relationships using MongoDB references and Mongoose Populate. Users can create notes, manage them, and archive notes without permanently deleting them.

## Features

- Create a new user
- Create a new note
- Get all notes
- Get a single note by ID
- Update a note
- Archive (Soft Delete) a note
- Get all notes of a specific user
- Populate user details inside notes
- MongoDB ObjectId references
- Mongoose Populate
- Proper HTTP status codes and error handling

## Tech Stack

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- Postman

## Database Relationship

One User → Many Notes

Each note stores the ObjectId of its owner, and Mongoose Populate is used to fetch user details along with notes.

## API Endpoints

### Create User

POST /api/users

Request Body

```json
{
  "name": "Swayam",
  "email": "swayam@gmail.com"
}
```

---

### Create Note

POST /api/notes

Request Body

```json
{
  "title": "MongoDB Notes",
  "content": "Learning Populate in Mongoose",
  "userId": "USER_ID"
}
```

---

### Get All Notes

GET /api/notes

---

### Get Note By ID

GET /api/notes/:id

---

### Update Note

PUT /api/notes/:id

---

### Archive Note (Soft Delete)

PATCH /api/notes/:id/archive

---

### Get All Notes of a User

GET /api/notes/user/:userId

---

### Get User with Notes

GET /api/notes/:id/notes

## Concepts Covered

- MongoDB Relationships
- ObjectId References
- Mongoose Populate
- Virtual Populate
- One-to-Many Relationship
- Soft Delete (Archive)
- CRUD Operations
- REST API Design

## Status Codes

- 200 - Success
- 201 - Resource Created
- 400 - Bad Request
- 404 - Resource Not Found
- 500 - Internal Server Error

## Testing

All API endpoints were tested using Postman.

## Author

Created as part of the **Syntecxhub Backend Development Internship**.

<br>
<br>

## Postman Testing Screenshots

### Create User

<img width="1090" height="527" alt="Screenshot 2026-07-10 205316" src="https://github.com/user-attachments/assets/b2a7a6d3-c803-4cb8-a5c3-025a55f5df62" />


### Create Note

<img width="1092" height="592" alt="Screenshot 2026-07-10 205616" src="https://github.com/user-attachments/assets/850118fb-33d3-494a-96d0-738956f6df6c" />

### Get All Notes (Populate User)

<img width="1090" height="832" alt="Screenshot 2026-07-11 000926" src="https://github.com/user-attachments/assets/3c8e9580-5805-4a9f-a216-28f525842b0d" />


### Update Note

<img width="1090" height="587" alt="Screenshot 2026-07-10 225503" src="https://github.com/user-attachments/assets/df02f11c-98d3-4b40-9511-e959ca102d91" />


### Archive Note

<img width="1100" height="535" alt="Screenshot 2026-07-10 225902" src="https://github.com/user-attachments/assets/34999ffc-1237-4ae3-914c-23a11ce840dc" />


### Get User Notes

<img width="1077" height="888" alt="Screenshot 2026-07-11 000629" src="https://github.com/user-attachments/assets/b6a63662-db12-4e84-9ff2-4f1ffa374501" />
