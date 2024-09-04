FROM python:latest

RUN python -m pip install --upgrade pip

WORKDIR /app

COPY requirements.txt requirements.txt
COPY main.py main.py

COPY models models
COPY queries queries
COPY routes routes
COPY tests tests

RUN python -m pip install -r requirements.txt

EXPOSE 8000

CMD uvicorn main:app --host 0.0.0.0 --port 8000 --forwarded-allow-ips "*"