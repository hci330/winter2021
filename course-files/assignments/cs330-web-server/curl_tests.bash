curl --header "Content-Type: application/json" \
  --request GET \
 http://127.0.0.1:5000/api/posts/


# curl --header "Content-Type: application/json" \
#   --request POST \
#   --data '{"title":"Weeee!","content":"testing testing 123","author":"Selena"}' \
# http://127.0.0.1:5000/api/posts/


# curl -H "Accept: application/json" \
#     -H "Content-type: application/json" \
#     -X POST -d '{"title":"Weeee!","content":"testing testing 123","author":"Selena"}' \
#     http://127.0.0.1:5000/api/posts/
