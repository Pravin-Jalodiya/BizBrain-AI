from dotenv import load_dotenv
import os
from flask import Flask
import openai
from controllers.main import main
from controllers.response_controller import response_controller

app = Flask(__name__)

load_dotenv()
# openai.api_key = os.getenv('OPEN_API_KEY')
#home page
app.register_blueprint(main)
#get response
app.register_blueprint(response_controller)

if __name__ == '__main__':
    app.run(debug=True)





