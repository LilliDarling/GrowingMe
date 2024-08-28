FROM python:latest

RUN python -m pip install --upgrade pip

WORKDIR /app

COPY requirements.txt requirements.txt
COPY main.py main.py

COPY models models
COPY queries queries
COPY routes routes

RUN python -m pip install -r requirements.txt

CMD uvicorn main:app --host 0.0.0.0 --port 80 --forwarded-allow-ips "*"