'''
To run on command line:
export FLASK_APP=app.py
export FLASK_ENV=development
flask run
'''
from flask_restful import Api
from flask import Flask, request, Response
import db
# from views import posts, comments
from views import posts, comments

app = Flask(__name__)
db.init_database_connection(app)
api = Api(app)

# connect your routes to your app:
@app.route('/')
def home_page():
    return 'This is your API Homepage'

# routes from other files:
posts.initialize_routes(api)
comments.initialize_routes(api)


if __name__ == "__main__":
    print('running!')
    app.run(debug=True)