# .env
Change 'env-exemple' to '.env' and set your preference config

# Dockerfile environment variables reference:
- https://docs.docker.com/engine/reference/builder/#env 
- https://www.baeldung.com/ops/dockerfile-env-variable 

# RUN 
- $ docker compose up -d

# Create table
Postgres CLI in container:
- $ docker exec -it project-compose-db-1 psql -Umyname docker
- $ create table users (name text, email text);

# Use de project
- http://localhost:3000/

# More informations
- https://www.docker.com/blog/how-to-use-the-postgres-docker-official-image/
