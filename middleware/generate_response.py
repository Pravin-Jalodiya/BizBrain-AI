import openai
from config.model import model
import logging
import time
import os
from dotenv import load_dotenv

load_dotenv()
client = openai.OpenAI(api_key=os.environ.get('OPEN_API_KEY'))
def generate_response_bmu(i, user_prompt):
    max_attempts = 5
    attempt = 0
    while attempt < max_attempts:
        try:
            completion = client.chat.completions.create(
                model=model,
                messages=[
                    {"role": "system", "content": "You are a helpful assistant. Answer to the best of your ability."},
                    {"role": "user", "content": user_prompt}
                ]
            )
            response = completion.choices[0].message.content
            return f'response_{i}', response
        except Exception as e:
            logging.error(f"Unexpected error in response {i}: {e}")
            attempt += 1
            if attempt < max_attempts:
                time.sleep(5) 
            else:
                return f'error_{i}', f'Unexpected error in response {i}: {str(e)}'
