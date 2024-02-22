const GoogleVertexAI = require("@langchain/community/llms/googlevertexai").GoogleVertexAI;
async function generateNameStream() {
    const prompt = "What would be a good beer name for a company that makes premium draft beers? Give me 5 alternatives. Use the following json format: {\"new_beer_name\": \"My Beer Name\"}";
    console.log(prompt);
    const model = new GoogleVertexAI({
      temperature: 0.7,
      modelName: "gemini-pro",
      maxOutputTokens: 2048,
    });
    const stream = await model.stream(
      prompt,
    );
    for await (const chunk of stream) {
      console.log(chunk);
    }
  }

async function generateName() {
    const prompt = "Give me the top 5 beers in Spain. Use the following json format: {\"beer_name\": \"My Beer Name\"}";
    console.log(prompt);
    const model = new GoogleVertexAI({
      temperature: 0.7,
      modelName: "gemini-pro",
      maxOutputTokens: 2048,
    });
    const res = await model.invoke(
      prompt,
    );
    // for await (const chunk of stream) {
    //   console.log(chunk);
    // }
    console.log(res);
  }


  if (process.argv.length === 2) {
    console.error('Expected at least one argument!');
    process.exit(1);
  }

if (process.argv[2] && process.argv[2] === '--stream') {
    generateNameStream();
  } else {
    generateName();
  }

