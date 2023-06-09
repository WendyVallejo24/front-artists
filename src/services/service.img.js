import { Configuration, OpenAIApi } from "openai";

class ServiceImg {

  async getDaVinci(data) {
    const configuration = new Configuration({
        apiKey: "",
      });
    const openai = new OpenAIApi(configuration);
    console.log(configuration);
    console.log(data.artists);
    if (!configuration.apiKey) {
        /*
        res.status(500).json({
          error: {
            message: "OpenAI API key not configured, please follow instructions in README.md",
          }
        });
        */
        return {
            status:500,
            error: {
                message: "OpenAI API key not configured, please follow instructions in README.md",
            }
        };
      }
    
      const artists = data.artists || '';
      const number = Math.floor(data.n) || 1;
      if (artists.trim().length === 0) {
        /*
        res.status(400).json({
          error: {
            message: "Please enter a valid animal",
          }
        });
        */
        return {
            status:400,
            error: {
                message: "Please enter a valid",
            }
        };
      }
    
      try {
        const completion = await openai.createImage({
          prompt: this.generatePrompt(artists),
          n: number,
          size: "512x512",
        });
        // res.status(200).json({ result: completion.data.choices[0].text });
        const images = completion.data.data;
        const urls = images.map((image)=> image.url);
        return {
            status: 200,
            result: urls
        }
      } catch(error) {
        // Consider adjusting the error handling logic for your use case
        if (error.response) {
          console.error(error.response.status, error.response.data);
          // res.status(error.response.status).json(error.response.data);
          return {
            status: error.response.data
          }
        } else {
          console.error(`Error with OpenAI API request: ${error.message}`);
          /*
          res.status(500).json({
            error: {
              message: 'An error occurred during your request.',
            }
          });
          */
         return {
            status: 500,
            error: {
                message: 'An error occurred during your request.',
            }
         }
        }
      }
    //return ;
  }

    generatePrompt(artists) {
        const capitalizedArtists =
        artists[0].toUpperCase() + artists.slice(1).toLowerCase();
        return `Suggest images of artists.
    
        Artists: ${capitalizedArtists}
        Names:`;
    }
}
const instance = new ServiceImg()
export default instance;