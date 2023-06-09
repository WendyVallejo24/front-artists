import { useState } from "react";
import ServiceDavinci003 from "../services/service.davinci-003";
import ServiceImg from "../services/service.img";
import ServiceMovietoemoji from "../services/service.movietoemoji";
import ServiceChat from "../services/service.chat";
import ServiceTraductor from "../services/service.traductor";
import ServiceRecetas from "../services/service.recetas";
import ServiceClasification from "../services/service.clasification";
import { useTranslation } from "react-i18next";

export default function OpenAI() {
    const { t } = useTranslation();
    const [selectedService, setSelectedService] = useState(null);
    const [artistsInput, setArtistsInput] = useState("");
    const [artistsInputText, setArtistsInputText] = useState("");
    const [result, setResult] = useState();
    const [numberOfImages, setNumberOfImages] = useState(1)
    const [movieInput, setMovieInput] = useState("");
    const [chatInput, setChatInput] = useState("");
    const [traductorInput, setTraductorInput] = useState("");
    const [recetasInput, setRecetasInput] = useState("");
    const [clasificationInput, setClasificationInput] = useState("");

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
        } catch (error) {
            console.error(error);
            alert(error.message);
        }
    }

    async function onSubmitText(event) {
        event.preventDefault();
        try {
            const response = await ServiceDavinci003.getDaVinci({ artist: artistsInputText });

            const data = await response;
            console.log(response);
            if (response.status !== 200) {
                throw data.error || new Error(`Request failed with status ${response.status}`);
            }
            console.log("response", response);
            setResult(data.result);
            setArtistsInputText("");
        } catch (error) {
            console.error(error);
            alert(error.message);
        }
    }

    async function onSubmitMovie(event) {
        event.preventDefault();

        try {
            const response = await ServiceMovietoemoji.getMovieToEmoji({ movie: movieInput });

            const data = await response;
            console.log(response);
            if (response.status !== 200) {
                throw data.error || new Error(`Request failed with status ${response.status}`);
            }
            console.log("response", response);
            setResult(data.result);
            setMovieInput("");
        } catch (e) {
            console.error(e);
            alert(e.message);
        }
    }

    async function onSubmitChat(event) {
        event.preventDefault();

        try {
            const response = await ServiceChat.getChat({ chat: chatInput });

            const data = await response;
            console.log(response);
            if (response.status !== 200) {
                throw data.error || new Error(`Request failed with status ${response.status}`);
            }
            console.log("response", response);
            setResult(data.result);
            setChatInput("");
        } catch (e) {
            console.error(e);
            alert(e.message);
        }
    }

    async function onSubmitTraductor(event) {
        event.preventDefault();

        try {
            const response = await ServiceTraductor.getTraductor({ traductor: traductorInput });

            const data = await response;
            console.log(response);
            if (response.status !== 200) {
                throw data.error || new Error(`Request failed with status ${response.status}`);
            }
            console.log("response", response);
            setResult(data.result);
            setTraductorInput("");
        } catch (e) {
            console.error(e);
            alert(e.message);
        }
    }

    async function onSubmitRecetas(event) {
        event.preventDefault();

        try {
            const response = await ServiceRecetas.getRecetas({ recetas: recetasInput });

            const data = await response;
            console.log(response);
            if (response.status !== 200) {
                throw data.error || new Error(`Request failed with status ${response.status}`);
            }
            console.log("response", response);
            setResult(data.result);
            setRecetasInput("");
        } catch (e) {
            console.error(e);
            alert(e.message);
        }
    }

    async function onSubmitClasification(event) {
        event.preventDefault();

        try {
            const response = await ServiceClasification.getClasification({ clasificacion: clasificationInput });

            const data = await response;
            console.log(response);
            if (response.status !== 200) {
                throw data.error || new Error(`Request failed with status ${response.status}`);
            }
            console.log("response", response);
            setResult(data.result);
            setClasificationInput("");
        } catch (e) {
            console.error(e);
            alert(e.message);
        }
    }

    return (
        <div>
            <button className="boton-ia" onClick={() => setSelectedService("image")}>{t('generadorImg')}</button>
            <button className="boton-ia" onClick={() => setSelectedService("text")}>{t('generadorNom')}</button>
            <button className="boton-ia" onClick={() => setSelectedService("movie")}>{t('generadorEmojis')}</button>
            <button className="boton-ia" onClick={() => setSelectedService("chat")}>Q&A</button>
            <button className="boton-ia" onClick={() => setSelectedService("traductor")}>Traductor</button>
            <button className="boton-ia" onClick={() => setSelectedService("recetas")}>Recetas</button>
            <button className="boton-ia" onClick={() => setSelectedService("clasification")}>Clasificacion</button>

            {selectedService === "image" && (
                <div className="contenedores">
                    <h3 className="title">{t('generadorImg')}</h3>
                    <form onSubmit={onSubmitImage}>
                        <input
                            type="text"
                            className="animal"
                            placeholder="Enter a text"
                            value={artistsInput}
                            onChange={(e) => setArtistsInput(e.target.value)}
                        />
                        <input
                            type="number"
                            className="cantidad"
                            placeholder="Enter a number de images"
                            value={numberOfImages}
                            onChange={(e) => setNumberOfImages(e.target.value)}
                        />
                        <input className="generadores" type="submit" value={t('generadorImg')} />
                    </form>
                    <div className="resultados">
                        {result && result.map((url) => (
                            <img src={url} key={url} alt="imagen"></img>
                        ))}
                    </div>
                </div>
            )
            }

            {
                selectedService === "text" && (
                    <div className="contenedores">
                        <h3 className="title">{t('generadorNom')}</h3>
                        <form onSubmit={onSubmitText}>
                            <input
                                type="text"
                                className="animal"
                                placeholder="Enter a text"
                                value={artistsInputText}
                                onChange={(e) => setArtistsInputText(e.target.value)}
                            />
                            <input className="generadores" type="submit" value={t('generadorNom')} />
                        </form>
                        <div className="resultados">{result}</div>
                    </div>
                )
            }

            {
                selectedService === "movie" && (
                    <div className="contenedores">
                        <h3 className="title">{t('generadorEmojis')}</h3>
                        <form onSubmit={onSubmitMovie}>
                            <input
                                type="text"
                                className="animal"
                                placeholder="Enter a text"
                                value={movieInput}
                                onChange={(e) => setMovieInput(e.target.value)}
                            />
                            <input className="generadores" type="submit" value={t('generadorEmojis')} />
                        </form>
                        <div className="resultados">{result}</div>
                    </div>
                )
            }

            {
                selectedService === "chat" && (
                    <div className="contenedores">
                        <h3 className="title">Preguntas y Respuestas</h3>
                        <form onSubmit={onSubmitChat}>
                            <input
                                type="text"
                                className="animal"
                                placeholder="Enter a text"
                                value={chatInput}
                                onChange={(e) => setChatInput(e.target.value)}
                            />
                            <input className="generadores" type="submit" value="Submit" />
                        </form>
                        <div className="resultados">{result}</div>
                    </div>
                )
            }

            {
                selectedService === "traductor" && (
                    <div className="contenedores">
                        <h3 className="title">Traductor</h3>
                        <h4 className="descripcion">Traduce de español a 1.Francés, 2.Inglés 3.Japones</h4>
                        <form onSubmit={onSubmitTraductor}>
                            <input
                                type="text"
                                className="animal"
                                placeholder="Enter a text"
                                value={traductorInput}
                                onChange={(e) => setTraductorInput(e.target.value)}
                            />
                            <input className="generadores" type="submit" value="Traducir" />
                        </form>
                        <div className="resultados">{result}</div>
                    </div>
                )
            }

            {
                selectedService === "recetas" && (
                    <div className="contenedores">
                        <h3 className="title">Recetas</h3>
                        <form onSubmit={onSubmitRecetas}>
                            <input
                                type="text"
                                className="animal"
                                placeholder="Enter a text"
                                value={recetasInput}
                                onChange={(e) => setRecetasInput(e.target.value)}
                            />
                            <input className="generadores" type="submit" value="Submit" />
                        </form>
                        <div className="resultados">{result}</div>
                    </div>
                )
            }

            {
                selectedService === "clasification" && (
                    <div className="contenedores">
                        <h3 className="title">Clasificación</h3>
                        <form onSubmit={onSubmitClasification}>
                            <input
                                type="text"
                                className="animal"
                                placeholder="Enter a text"
                                value={clasificationInput}
                                onChange={(e) => setClasificationInput(e.target.value)}
                            />
                            <input className="generadores" type="submit" value="Submit" />
                        </form>
                        <div className="resultados">{result}</div>
                    </div>
                )
            }
        </div >

    )
}