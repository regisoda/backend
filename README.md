# REST API em NodeJS (Prisma ORM, Express)

Passos para iniciar:

- npm install
- npm run dev


docker rm $(docker ps -a -q) -f

docker build -t backend-key-team .

docker run -p 49160:8080 backend-key-team

docker run -d -p 49160:8080 backend-key-team 

docker run -d -p 49160:8080 regisoda/backend-key-team 

docker login
docker tag backend-key-team regisoda/backend-key-team
docker push regisoda/backend-key-team