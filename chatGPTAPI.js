const apiKey = "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";

const sendMessageToChatGPT = async (message) => {
  const response = await fetch('https://api.openai.com/v1/engines/davinci-codex/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      prompt: `The following is a conversation with an AI assistant. The assistant is helpful, creative, clever, and very friendly.
      User: ${message}
      AI:`
    })
  });

  const jsonResponse = await response.json();
  const { choices } = jsonResponse;
  const [{ text }] = choices;

  return text;
}

export { sendMessageToChatGPT };
