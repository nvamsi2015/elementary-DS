# ============= google it ===========
# mkdir my-fastapi-project
# cd my-fastapi-project


# python3 -m venv venv
# source venv/bin/activate


# pip install "fastapi[standard]"


# touch main.py


# ----------- main.py -------------

from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "Hello, FastAPI!"}

# ------- run the development server by using the uvicorn command, or the built-in fastapi dev command if you used the [standard] install:


# uvicorn main:app --reload


# or 


# fastapi dev


# The --reload flag automatically restarts the server when you make changes to your code, which is useful during development. Your API will then be accessible at http://127.0.0.1:8000, with interactive documentation available at http://127.0.0.1:8000/docs


# pip install pydantic
# pip freeze > requirement.txt

# ------requirements.txt already shows this ----------
# annotated-doc==0.0.4
# annotated-types==0.7.0
# anyio==4.12.0
# certifi==2025.11.12
# click==8.3.1
# dnspython==2.8.0
# email-validator==2.3.0
# exceptiongroup==1.3.1
# fastapi==0.123.2
# fastapi-cli==0.0.16
# fastapi-cloud-cli==0.5.2
# fastar==0.8.0
# h11==0.16.0
# httpcore==1.0.9
# httptools==0.7.1
# httpx==0.28.1
# idna==3.11
# Jinja2==3.1.6
# markdown-it-py==4.0.0
# MarkupSafe==3.0.3
# mdurl==0.1.2
# pydantic==2.12.5
# pydantic_core==2.41.5
# Pygments==2.19.2
# python-dotenv==1.2.1
# python-multipart==0.0.20
# PyYAML==6.0.3
# rich==14.2.0
# rich-toolkit==0.17.0
# rignore==0.7.6
# sentry-sdk==2.46.0
# shellingham==1.5.4
# starlette==0.50.0
# tomli==2.3.0
# typer==0.20.0
# typing-inspection==0.4.2
# typing_extensions==4.15.0
# urllib3==2.5.0
# uvicorn==0.38.0
# uvloop==0.22.1
# watchfiles==1.1.1
# websockets==15.0.1


# -------- initialize logal repo and  add gitignore to prevent unnecessary file like venv being commited -------------

# Initialize the local repository
git init

# Create a basic .gitignore file (you can open and edit this later)
echo "venv/" >> .gitignore
echo "__pycache__/" >> .gitignore
echo "*.pyc" >> .gitignore


# Add all tracked files (main.py, requirements.txt, .gitignore)
git add .

# Make the first commit
git commit -m "Initial FastAPI project setup"

# Replace <YOUR_REMOTE_URL> with the actual URL of your empty repository
git remote add origin <YOUR_REMOTE_URL>

# Push the committed code to the main branch of the remote repository
git push -u origin main


# -----------------------------