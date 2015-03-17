## PV API


----------

**Registration**

    curl -X POST -H "Content-Type:application/json" \
  -d '{"email": "me@domain.com", "password": "secret"}' \
  http://localhost:3000/api/users

**Login and token generation**

    curl -X POST -H "Content-Type:application/json" \
  -d '{"email": "me@domain.com", "password": "secret", "ttl":1209600000}' \
  http://localhost:3000/api/users/login
