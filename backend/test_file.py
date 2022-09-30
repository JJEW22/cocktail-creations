from flask import Flask, request
from flask_cors import CORS, cross_origin
from flask_restful import Resource, Api
from json import dumps
from flask_jsonpify import jsonify

app = Flask(__name__)
api = Api(app)

RECIPES_DATA_BASE = {'cocktails': {
    1 : {'id': 1,
     'name':'Old Fashion',
     'ingredients': [
        {'name': 'whiskey',
        'amount': 2,
        'unit': 'oz'},
        {'name': 'bitters',
        'amount': 4,
        'unit': 'dashes'},
        {'name': 'syrup',
        'amount': 0.5,
        'unit': 'oz'},
     ]
     },
    2: {'id': 2,
     'name':'sweet martini',
     'ingredients': [
        {'name': 'gin',
        'amount': 2.5,
        'unit': 'oz'},
        {'name': 'sweet vermouth',
        'amount': 0.5,
        'unit': 'oz'},
        {'name': 'cherry',
        'amount': 1,
        'unit': 'count'},
     ]
     }}
    } 

CORS(app)

@app.route("/")
def hello():
    return jsonify({'text':'Hello World!'})

class Recipies(Resource):
    def get(self):
        return list(RECIPES_DATA_BASE['cocktails'].values())

class Recipies_Name(Resource):
    def get(self, recipe_id):
        print('Employee id:' + recipe_id)
        result = {'data': RECIPES_DATA_BASE['cocktails'][recipe_id]}
        return jsonify(result)       


api.add_resource(Recipies, '/recipes') # Route_1
api.add_resource(Recipies_Name, '/recipes/<recipe_id>') # Route_3


if __name__ == '__main__':
   app.run(port=2222)