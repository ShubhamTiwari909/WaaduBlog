from os import name
import time
import calendar
from flask import Flask



app = Flask(__name__)

@app.route('/time')
def get_current_time():
    return {'time': str("hello")}

if __name__ == '__main__':
    app.run(debug=True)