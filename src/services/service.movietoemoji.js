import { Configuration, OpenAIApi } from "openai";

class ServiceMovieToEmoji {

    async getMovieToEmoji(data) {
        const configuration = new Configuration({
            apiKey: '',
        });
        const openai = new OpenAIApi(configuration);
        console.log(configuration);
        console.log(data.movie);
        if (!configuration.apiKey) {
            return {
                status: 500,
                error: {
                    message: "OpenAI API key not configured, please follow instructions in README.md",
                }
            };
        }

        const movie = data.movie || '';
        if (movie.trim().length === 0) {
            return {
                status: 400,
                error: {
                    message: "Please enter a valid movie",
                }
            };
        }

        try {
            const completion = await openai.createCompletion({
                model: "text-davinci-003",
                prompt: this.generatePrompt(movie),
                temperature: 0.8,
                max_tokens: 60,
                top_p: 1.0,
                frequency_penalty: 0.0,
                presence_penalty: 0.0,
                stop: ["\n"],
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

    generatePrompt(movie) {
        const capitalizedMovie =
        movie[0].toUpperCase() + movie.slice(1).toLowerCase();
        return `Convert movie titles into emoji.

        Movie: Back to the Future
        Emojis: 👨👴🚗🕒
        Movie: Batman
        Emojis: 🤵🦇 
        Movie: Transformers
        Emojis: 🚗🤖 
        Movie: ${capitalizedMovie}
        Emojis:
        `;
    }
}

const instance = new ServiceMovieToEmoji();
export default instance;