#!/bin/bash

# clone repositories
source ./repositories.sh

WORKING_DIR=`pwd`
for progetto in "${repositories[@]}"
do
  if [ ! -d "./$progetto/.git" ]; then
    git clone git@gitlab.com:lexhero-lab/pokedex/$progetto.git
    git checkout main
    #sudo chown -R $(whoami):$(whoami) ./$(echo $progetto)
  fi
    cd "./$progetto"
    git pull -r origin main
    echo "Pull fatto."
    cd $WORKING_DIR
done
