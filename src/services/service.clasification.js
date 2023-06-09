import { Configuration, OpenAIApi } from "openai";

class ServiceClasification {
    async getClasification(data) {
        const configuration = new Configuration({
            apiKey: "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",
        });
        const openai = new OpenAIApi(configuration);
        console.log(configuration);
        console.log(data.clasificacion);
        if (!configuration.apiKey) {

            return {
                status: 500,
                error: {
                    message: "OpenAI API key not configured, please follow instructions in README.md",
                }
            };
        }

        const clasificacion = data.clasificacion || '';
        if (clasificacion.trim().length === 0) {

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
                prompt: this.generatePrompt(clasificacion),
                temperature: 0,
                max_tokens: 64,
                top_p: 1.0,
                frequency_penalty: 0.0,
                presence_penalty: 0.0,
            });
            // res.status(200).json({ result: completion.data.choices[0].text });
            return {
                status: 200,
                result: completion.data.choices[0].text
            }
        } catch (error) {
            // Consider adjusting the error handling logic for your use case
            if (error.response) {
                console.error(error.response.status, error.response.data);
                // res.status(error.response.status).json(error.response.data);
                return {
                    status: error.response.data
                }
            } else {
                console.error(`Error with OpenAI API request: ${error.message}`);

                return {
                    status: 500,
                    error: {
                        message: 'An error occurred during your request.',
                    }
                }
            }
        }
        //return;
    }

    generatePrompt(clasificacion) {
        const capitalizedClasificacion =
            clasificacion[0].toUpperCase() + clasificacion.slice(1).toLowerCase();
        return `Escribe la categoria a la que pertenecen.\n
            
            Palabra: Facebook
            Categoria: Red Social
            Palabra: ${capitalizedClasificacion}\n
            Categoria:`;
    }
}

const instance = new ServiceClasification();
export default instance;