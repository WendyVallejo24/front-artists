import { useState } from "react";
import ServiceDavinci003 from "../services/service.davinci-003";


export default function Textdavinci003() {
  const [artistInput, setArtistInput] = useState("");
  const [result, setResult] = useState();

  async function onSubmitText(event) {
    event.preventDefault();
    try {
      const response = await ServiceDavinci003.getDaVinci({ artist: artistInput });

      const data = await response;
      console.log(response);
      if (response.status !== 200) {
        throw data.error || new Error(`Request failed with status ${response.status}`);
      }
      console.log("response", response);
      setResult(data.result);
      setArtistInput("");
    } catch(error) {
      console.error(error);
      alert(error.message);
    }
  }

  return (
    <div>
        <title>OpenAI Quickstart</title>
        <link rel="icon" href="/dog.png" />

      <main>
        <h3>Name for artist</h3>
        <form onSubmit={onSubmitText}>
          <input
            type="text"
            className="animal"
            placeholder="Enter an artist"
            value={artistInput}
            onChange={(e) => setArtistInput(e.target.value)}
          />
          <input type="submit" value="Generate names" />
        </form>
        <div>{result}</div>
      </main>
    </div>
  );
}