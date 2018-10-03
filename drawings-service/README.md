# Drawing Interpretations Service API

This service enables users to view drawings and submit interpretations
    of them.

## Requirements
- Python
- Virtualenv
- MySQL

## Initial Setup
- Python virtual environment setup
```
virtualenv venv
source venv
```

## Running the service

Run from project root in virtual environment:

```
python app.py
```

Access endpoint at `http://localhost:5000`

## Endpoints

### `GET /drawings` - List all drawings

### `GET /drawings/{drawing_id}` - Get a specific drawing with its interpretations

### `POST /drawings/{drawing_id}/interpretations` - Create an interpretation
#### Request Body
```
{
  "user_id": 1
  "drawing_id": 1
  "text": "Rocketship"
}
```
