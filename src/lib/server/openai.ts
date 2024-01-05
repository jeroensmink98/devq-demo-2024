import { env } from '$env/dynamic/private';
import { OpenAIClient, AzureKeyCredential, type ChatRequestMessage } from '@azure/openai';

const client = new OpenAIClient(
	env.AZURE_OPEN_AI_ENDPOINT,
	new AzureKeyCredential(env.AZURE_OPENAI_KEY)
);

const deploymentId = 'devq';

export async function GenerateTripAdvice(destination: string, activity: string, budget: string) {
	try {
		const messages = [
			{
				role: 'system',
				content: `You are an AI specialized in travel advice. Provide a JSON formatted list of activities suitable for a trip to ${destination}. The activities should match the style '${activity}' (sporty, relaxing, or adventurous) and fit within a budget of ${budget} euros. List activities with brief descriptions and estimated costs. Ensure the response is concise and only includes relevant activities.`
			},
			{
				role: 'user',
				content: `I'm planning a trip to ${destination}. My budget is ${budget} euros, and I'm interested in a ${activity} type of trip. What activities do you recommend?`
			}
		];

		const resp = client.listChatCompletions(deploymentId, messages as ChatRequestMessage[], {
			maxTokens: 160
		});
		let responseText = '';

		for await (const event of resp) {
			for (const choice of event.choices) {
				const delta = choice.delta?.content;
				if (delta !== undefined) {
					responseText += delta;
				}
			}
		}
		console.log(responseText);
		return responseText;
	} catch (error: any) {
		console.log(error);
		return error.message;
	}
}

export async function CheckComment(comment: string): Promise<boolean> {
	try {
		const messages = [
            {
                role: 'system',
                content: `Your task is to evaluate a user comment. If the comment contains any curse words, bad language, or very negative or unkind remarks, respond with "NOT ALLOWED". If the comment is free from these elements, respond with "ALLOWED`
            },
            {
                role: 'user',
                content: `${comment}`
            }
        ];

		const resp = client.listChatCompletions(deploymentId, messages as ChatRequestMessage[], {
			maxTokens: 24
		});
		let responseText = '';

		for await (const event of resp) {
			for (const choice of event.choices) {
				const delta = choice.delta?.content;
				if (delta !== undefined) {
					responseText += delta;
				}
			}
		}
		if (responseText.trim() == "ALLOWED"){
			return true
		}else{
			return false
		}
	} catch (error: any) {
		console.log(error);
		return error.message;
	}
}
