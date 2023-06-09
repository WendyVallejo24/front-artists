import { Configuration, OpenAIApi } from "openai";

class ServiceDavinci003 {

  async getDaVinci(data) {
    const configuration = new Configuration({
        apiKey: "",
      });
    const openai = new OpenAIApi(configuration);
    console.log(configuration);
    console.log(data.artist);
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
    
      const artist = data.artist || '';
      if (artist.trim().length === 0) {
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
                message: "Please enter a valid animal",
            }
        };
      }
    
      try {
        const completion = await openai.createCompletion({
          model: "text-davinci-003",
          prompt: this.generatePrompt(artist),
          temperature: 0.6,
        });
        // res.status(200).json({ result: completion.data.choices[0].text });
        return {
            status: 200,
            result: completion.data.choices[0].text
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

    generatePrompt(artist) {
        const capitalizedArtist =
        artist[0].toUpperCase() + artist.slice(1).toLowerCase();
        return `Suggest three names for an artist.
    
        Artists: Singer
        Names: Angela Aguilar, Selena, Yuridia
        Artists: Cantante
        Names: Enrique Iglesias, Christian Nodal, Sebastian Yatra
        Artists: ${capitalizedArtist}
        Names:`;
    }
}
const instance = new ServiceDavinci003()
export default instance;