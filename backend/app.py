import os
import openai
from flask import Flask, request, jsonify
from flask_limiter import Limiter
from flask_limiter.util import get_remote_address
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Rate limiting
limiter = Limiter(
    key_func=get_remote_address
)
limiter.init_app(app)

# Load your OpenAI API key from an environment variable or secret management service
openai.api_key = os.getenv("OPENAI_API_KEY")

# System prompt for the chatbot
SYSTEM_PROMPT = "You are a friendly and helpful AI assistant."

@app.route('/chat', methods=['POST'])
@limiter.limit("100 per hour")
def chat():
    try:
        # Get the user's message from the request
        user_message = request.json.get("message")
        if not user_message:
            return jsonify({"error": "No message provided"}), 400

        # Generate a response from OpenAI
        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "system", "content": SYSTEM_PROMPT},
                {"role": "user", "content": user_message}
            ]
        )

        # Extract the chatbot's response
        chatbot_message = response.choices[0].message["content"]

        # Return the response as JSON
        return jsonify({"response": chatbot_message})

    except Exception as e:
        # Handle any errors that occur
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)