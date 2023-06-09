import { Configuration, OpenAIApi } from "openai";

class ServiceTraductor {

    async getTraductor(data) {
        const configuration = new Configuration({
            apiKey: '',
        });
        const openai = new OpenAIApi(configuration);
        console.log(configuration);
        console.log(data.traductor);
        if (!configuration.apiKey) {
            return {
                status: 500,
                error: {
                    message: "OpenAI API key not configured, please follow instructions in README.md",
                }
            };
        }

        const traductor = data.traductor || '';
        if (traductor.trim().length === 0) {
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
                prompt: this.generatePrompt(traductor),
                temperature: 0.3,
                max_tokens: 100,
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
        //return;
    }

    generatePrompt(traductor) {
        const capitalizedTraductor =
        traductor[0].toUpperCase() + traductor.slice(1).toLowerCase();
        return `Translate this into 1. French, 2. English and 3. Japanese.
        
        Translate: ¿Qué habitaciones tienes disponibles?.
        Traduccion: 1. Quels sont les chambres que vous avez disponibles?,  2. What rooms do you have available?,   3. どの部屋が利用可能ですか？"
        Translate: ${capitalizedTraductor}
        Traduccion: 
        `;
    }
}

const instance = new ServiceTraductor();
export default instance;