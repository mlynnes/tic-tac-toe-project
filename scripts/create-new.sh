#!/bin/bash

curl --include --request POST http://localhost:4741/games \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=$TOKEN" \
  --data ''

  echo
