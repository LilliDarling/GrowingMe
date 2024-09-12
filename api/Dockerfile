FROM python:latest

RUN python -m pip install --upgrade pip

ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.9.0/wait /wait
RUN chmod +x /wait

WORKDIR /deps

COPY requirements.txt requirements.txt
RUN python -m pip install -r requirements.txt

WORKDIR /app
COPY main.py main.py
COPY models models
COPY queries queries
COPY routes routes
COPY tests tests
COPY utils utils

EXPOSE 8000

CMD /wait && uvicorn main:app --reload --host 0.0.0.0