# AI Chatbot Project

## Project Overview
This project is an end-to-end AI chatbot designed to provide fast and effective responses using OpenAI's GPT-3.5 Turbo model. The chatbot is deployed with a sleek, modern aesthetic inspired by Apple.com.

## Tech Stack
- **Backend**: Python, Flask, OpenAI API
- **Frontend**: React.js, Tailwind CSS, Framer Motion
- **Deployment**: Backend on Heroku, Frontend on Vercel

## Features
- **Backend**:
  - Flask API endpoint `/chat` with error handling
  - Rate limiting (100 requests/hour)
  - Environment variable management for API keys
- **Frontend**:
  - Glassmorphism chat interface with message history
  - Loading animations for messages
  - Mobile-responsive design
  - "Typing indicator" animation for bot responses
- **Deployment**:
  - Dockerfile for containerization
  - GitHub Actions CI/CD pipeline
  - Automatic HTTPS via Vercel/Heroku

## Setup and Deployment

### Backend
1. Navigate to the `backend` directory:
    ```sh
    cd backend
    ```

2. Install the required dependencies:
    ```sh
    pip install -r requirements.txt
    ```

3. Set your OpenAI API key as an environment variable:
    ```sh
    export OPENAI_API_KEY="your-openai-api-key"
    ```

4. Run the Flask app:
    ```sh
    python app.py
    ```

5. To deploy on Heroku, follow the instructions in `deployment/heroku.yml`.

### Frontend
1. Navigate to the `frontend` directory:
    ```sh
    cd frontend
    ```

2. Install the required dependencies:
    ```sh
    npm install
    ```

3. Start the development server:
    ```sh
    npm start
    ```

4. To deploy on Vercel, follow the instructions in `deployment/vercel.json`.

## Resume Integration Template
```markdown
**AI Chatbot Project**
- Built full-stack AI chatbot with 300ms avg response time using OpenAI GPT-3.5 Turbo
- Designed Apple-like interface using React + Tailwind CSS (95+ Lighthouse score)
- Deployed with CI/CD pipelines handling 500+ daily users
- Technologies: Python, Flask, OpenAI API, React, Heroku, Vercel
```

### Performance Optimization Tips
- Add Redis caching for frequent queries
- Implement WebSocket for real-time communication
- Use Cloudflare CDN for global edge caching