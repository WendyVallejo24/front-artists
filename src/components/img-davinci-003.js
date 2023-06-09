import { useState } from "react";
import ServiceImg from "../services/service.img";

export default function Imgdavinci003() {
  const [artistsInput, setArtistsInput] = useState("");
  const [result, setResult] = useState();
  const [numberOfImages, setNumberOfImages] = useState(1)

  async function onSubmitImage(event) {
    event.preventDefault();
    try {
      const response = await ServiceImg.getDaVinci({ artists: artistsInput, n: numberOfImages });

      const data = await response;
      console.log(response);
      if (response.status !== 200) {
        throw data.error || new Error(`Request failed with status ${response.status}`);
      }
      console.log("response", response);
      setResult(data.result);
      setArtistsInput("");
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
        <img src="" alt=""/>
        <h3>Generador de imagenes</h3>
        <form onSubmit={onSubmitImage}>
          <input
            type="text"
            className="animal"
            placeholder="Enter an artist"
            value={artistsInput}
            onChange={(e) => setArtistsInput(e.target.value)}
          />
          <input
            type="number"
            className="number"
            placeholder="Enter a number de images"
            value={numberOfImages}
            onChange={(e) => setNumberOfImages(e.target.value)}
          />
          <input type="submit" value="Generate images" />
        </form>
        <div>
          {result && result.map((url) => (
            <img src={url} key={url} alt="imagen"></img>
          ))}
        </div>
      </main>
    </div>
  );
}