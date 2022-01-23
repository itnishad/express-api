#!/bin/bash

git pull 

docker-compose -f docker-compose.production.yaml build

docker-compose -f docker-compose.production.yaml down

docker-compose -f docker-compose.production.yaml up -d

exit