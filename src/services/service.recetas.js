import { Configuration, OpenAIApi } from "openai";

class ServiceRecetas {

    async getRecetas(data) {
        const configuration = new Configuration({
            apiKey: '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',
        });
        const openai = new OpenAIApi(configuration);
        console.log(configuration);
        console.log(data.recetas);
        if (!configuration.apiKey) {
            return {
                status: 500,
                error: {
                    message: "OpenAI API key not configured, please follow instructions in README.md",
                }
            };
        }

        const recetas = data.recetas || '';
        if (recetas.trim().length === 0) {
            return {
                status: 400,
                error: {
                    message: "Please enter a valid word",
                }
            };
        }

        try {
            const completion = await openai.createCompletion({
                model: "text-davinci-003",
                prompt: this.generatePrompt(recetas),
                temperature: 0.3,
                max_tokens: 1000,
                top_p: 1.0,
                frequency_penalty: 0.0,
                presence_penalty: 0.0,

            });
            return {
                status: 200,
                result: completion.data.choices[0].text
            }
        } catch (e) {
            if (e.response) {
                console.error(e.response.status, e.response.data);
                return {
                    status: e.response.data
                }
            } else {
                console.error(`Ewith OpenAI API request: ${e.response.messahe}`);

                return {
                    status: 500,
                    error: {
                        message: "An error occurred during your request.",
                    }
                }
            }
        }
    }

    generatePrompt(recetas) {
        const capitalizedRecetas =
        recetas[0].toUpperCase() + recetas.slice(1).toLowerCase();
        return `Escriba una receta basada en estos ingredientes e instrucciones:
        
        Platillo: ${capitalizedRecetas}
        Ingredientes:
        `;
    }
}

const instance = new ServiceRecetas();
export default instance;