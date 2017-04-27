curl --include --request POST http://localhost:4741/games/ \
  --header "Authorization: Token token=$TOKEN" \
  --header "Content-Type: application/json" \
  --data '{
  "game": {
    "id": 1,
    "gameArray": ["","","","","","","","",""],
    "win": false,
    "currentPlayer": {
      "id": 1,
      "email": "and@and.com"
    },
    "currentPlayer": null
  }
}'

echo
