import OpenAI from 'openai';

const apiKey = import.meta.env.VITE_OPENAI_API_KEY;

if (!apiKey) {
  throw new Error('VITE_OPENAI_API_KEY is not set in the environment variables.');
}

const openai = new OpenAI({
  apiKey: apiKey,
  dangerouslyAllowBrowser: true // Note: In production, use a backend to make API calls
});

export async function getChatbotResponse(userMessage: string): Promise<string> {
  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {"role": "system", "content": "You are a helpful mental health support chatbot. Provide empathetic, supportive responses and suggest coping strategies. If the user seems to be in crisis, recommend professional help."},
        {"role": "user", "content": userMessage}
      ],
      max_tokens: 150
    });

    return completion.choices[0].message.content || "I'm sorry, I couldn't generate a response. Please try again.";
  } catch (error) {
    console.error('Error calling OpenAI API:', error);
    return "I'm sorry, I encountered an error. Please try again later.";
  }
}