FROM python:3.11-alpine

WORKDIR /usr/share/compose/app

COPY  . .

RUN pip install -r requirements.txt

CMD ["python","app.py"]


