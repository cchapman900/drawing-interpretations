# Drawing Interpretations Service API

This service enables users to view drawings and submit interpretations
    of them.

## Requirements
- Python
- Virtualenv
- MySQL

## Initial Setup
- ####Python virtual environment setup
```
virtualenv venv
source venv
pip install -r requirements.txt
```
- ####MySQL setup
This service expects a database called `drawings` with three tables with the following structure:

    - `user`
        - `id`
        - `username`
    - `drawings`
        - `id`
        - `image_url`
        - `description`
    - `interpretations`
        - `id`
        - `user_id`
        - `drawing_id`
        - `text`
        
An import file can be found at `/db/import.sql`. The configuration for connecting to the database can be found at `/config.py`.

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
