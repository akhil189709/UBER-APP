# API Documentation

## Endpoints

### POST /users/register

Register a new user.

#### Description

This endpoint allows you to register a new user by providing the required information.

#### Request Body

- `email` (string, required): The user's email address. Must be a valid email.
- `fullname` (object, required):
  - `firstname` (string, required): The user's first name. Must be at least 3 characters long.
  - `lastname` (string, optional): The user's last name. Must be at least 3 characters long if provided.
- `password` (string, required): The user's password. Must be at least 6 characters long.

#### Example Request

```json
{
  "email": "user@example.com",
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "password": "password123"
}
```

#### Responses

- `201 Created`: User successfully registered.
  - Example Response:
    ```json
    {
      "token": "jwt_token_here",
      "user": {
        "_id": "user_id_here",
        "fullname": {
          "firstname": "John",
          "lastname": "Doe"
        },
        "email": "user@example.com",
        "socketId": null
      }
    }
    ```
- `400 Bad Request`: Validation error.
  - Example Response:
    ```json
    {
      "errors": [
        {
          "msg": "Invalid Email",
          "param": "email",
          "location": "body"
        },
        {
          "msg": "First name must be at least 3 characters long",
          "param": "fullname.firstname",
          "location": "body"
        },
        {
          "msg": "Password must be at least 6 characters long",
          "param": "password",
          "location": "body"
        }
      ]
    }
    ``