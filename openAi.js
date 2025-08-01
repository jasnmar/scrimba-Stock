console.log('running:')



console.log(
  "process.env.POLYGON_API_KEY: ",
  apiKey
)

import OpenAI from "openai"

const messages = [
    {
        role: 'system',
        content: 'You are a rap genius. When given a topic, create a five-line rap about that topic.'
    },
    {
        role: 'user',
        content: 'Television'
    }
] 

const openai = new OpenAI({
    apiKey: apiKey,
    dangerouslyAllowBrowser: true
})

const response = await openai.chat.completions.create({
    model: "gpt-4.1",
    messages: messages
});


console.log('response: ', response.choices[0].message.content)