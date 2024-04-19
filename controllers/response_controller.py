from flask import Blueprint, jsonify, request
import concurrent.futures
from concurrent.futures import ThreadPoolExecutor
from prompts import *
from middleware.generate_response import generate_response_bmu

response_controller = Blueprint('response_controller', __name__)

@response_controller.route('/get_responses', methods=['POST'])
def get_responses():
    user_prompt = request.form.get('user_prompt')
    if user_prompt is None:
        return jsonify({'error': 'Missing user_prompt in the request'}), 400
    
    responses = {}
    updated_prompt_list=[]

    with ThreadPoolExecutor() as executor:
        for i in range(len(prompt_list)):  
            updated_prompt_list.append(prompt_list[i].format(our_business=user_prompt))
        
        future_to_response = {executor.submit(generate_response_bmu, i, user_prompt): i for i, user_prompt in enumerate(updated_prompt_list)}
        
        for future in concurrent.futures.as_completed(future_to_response):
            i = future_to_response[future]
            key, response = future.result()
            responses[key] = response
            
    return jsonify(responses)