# .env
change 'env-exemple' to '.env' and set your preference config

# RUN 
- $ docker compose up -d

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
