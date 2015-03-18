## PV API


----------
StrongLoop powered api for Tunisia 2014 elections ; legislative and presidential.

all requests require a token  generated after login .

**Registration**

```shell
curl -X POST -H "Content-Type:application/json" \
-d '{"email": "me@domain.com", "password": "secret"}' \
http://domain:port/api/users
```

**Login and token generation**

```shell
    curl -X POST -H "Content-Type:application/json" \
    -d '{"email": "me@domain.com", "password": "secret", "ttl":1209600000}' \
    http://domain:port/api/users/login
```
the output of that command will be something like

{"id":"KWrxiDejXLkZ2kGcE9oLmclHxmsatK5hTtiTbDKTGsgZAppGplmzDXVEjX0EW4qU","ttl":31556926,"created":"2015-03-17T20:33:55.028Z","userId":1}.

where the token is : KWrxiDejXLkZ2kGcE9oLmclHxmsatK5hTtiTbDKTGsgZAppGplmzDXVEjX0EW4PU
