# .env
Change 'env-exemple' to '.env' and set your preference config

Dockerfile ENV reference:
- https://docs.docker.com/engine/reference/builder/#env 
- https://www.baeldung.com/ops/dockerfile-env-variable 

# RUN 
$ docker compose build 
$ docker compose up -d

# Create database
enter the postgres CLI: 
- $ docker exec -it postgres-container psql -Umyname
- create database docker;
- \c docker
- create table users (name varchar(255), email varchar(255));

# Acess
- http://localhost:3000/

# More informations
- https://www.docker.com/blog/how-to-use-the-postgres-docker-official-image/
