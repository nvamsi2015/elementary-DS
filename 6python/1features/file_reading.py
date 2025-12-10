from fastapi import FastAPI
import json
import os

app = FastAPI()

@app.get("/read-stored-file")
def read_data_file():
    file_path = "path/to/your/data.json" # Replace with your actual file path

    if not os.path.exists(file_path):
        return {"error": f"File not found at {file_path}"}

    try:
        with open(file_path, mode="r", encoding="utf-8") as myfile:
            # Read the entire file content
            data = myfile.read()
            # If it's a JSON file, you can parse it
            # content = json.loads(data)
            return {"content": data}
    except Exception as e:
        return {"error": f"Error reading file: {str(e)}"}
