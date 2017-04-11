#!/bin/bash

curl "http://localhost:4741/patch?id=${ID}" \
  --include \
  --request PATCH \
  --header "Authorization: Token token=${TOKEN}" \
  --data-urlencode "passwords[old]=$OLD" \
  --data-urlencode "passwords[new]=$NEW"

echo
