/* falta importar react
import './styles/CssExample_gallery.css'
import abbeyRoad from '../images/abbey-road.jpg'
import aguaArdiente from '../images/agua-ardiente.jpg'
import americanIdiot from '../images/american-idiot.jpeg'
import animals from '../images/animals.jpg'
import artaud from '../images/artaud.jpg'
import axisBoldAsLove from '../images/axis-bold-as-love.png'
import bersuit from '../images/bersuit.png'
import bipolar from '../images/bipolar.jpeg'
import bloodflowers from '../images/bloodflowers.jpg'
import bocanada from '../images/bocanada.jpg'
import buenDia from '../images/buen-dia.jpg'
import civilizacion from '../images/civilizacion.jpg'
import desatormentandonos from '../images/desatormentandonos.jpg'
import diaDeLosMuertos from '../images/dia-de-los-muertos.jpg'
import dinastiaScorpio from '../images/dinastia-scorpio.jpg'
import disintegration from '../images/disintegration.jpg'
import dynamo from '../images/dynamo.jpg'
import areYouExperienced from '../images/experienced.jpg'
import gratitud from '../images/gratitud.jpeg'
import innespeaker from '../images/innespeaker.jpg'
import intoxicados from '../images/intoxicados.jpg'
import intoxicados2 from '../images/intoxicados2.jpg'
import invisible from '../images/invisible.jpg'
import jaimeSinTierra from '../images/jaimesintierra.jpg'
import jvlian from '../images/jvlian.jpg'
import karmagedon from '../images/karmagedon.jpeg'
import losEspiritus from '../images/los-espiritus.jpeg'
import luzbelito from '../images/luzbelito.jpg'
import mamut from '../images/mamut.jpg'
import maquinaDeSangre from '../images/maquina-de-sangre.jpeg'
import millonDeEuros from '../images/millon-de-euros.jpg'
import nostalgia from '../images/nostalgia.jpg'
import okComputer from '../images/okcomputer.jpg'
import otroDia from '../images/otrodia.jpg'
import pappo3 from '../images/pappo3.jpg'
import pappo5 from '../images/pappo5.jpg'
import pescado2 from '../images/pescado2.jpg'
import raro from '../images/raro.jpg'
import ringo from '../images/ringo.png'
import sargentPeppers from '../images/sgt-peppers.jpg'
import shaman from '../images/shaman.jpeg'
import suenoStereo from '../images/sueno-stereo.png'
import theWall from '../images/thewall.jpeg'
import trapos from '../images/trapos.jpg'
import tristeza from '../images/tristeza.jpg'
import viejasLocas from '../images/viejaslocas.png'
import viejasLocas2 from '../images/viejaslocas2.jpg'
import whiteAlbum from '../images/white.jpg'
import zeppelin1 from '../images/zeppelin1.jpg'
import zeppelin3 from '../images/zeppelin3.jpg'
import duraznoSangrando from '../images/durazno-sangrando.jpg'



/* puede que el problema de este complemento, sea
   que 'container' es el nombre del contenedor principal
   y puede que este sobreescrito por otro 'container' de
   por ahi. chequear
*/
/*
class CssExample_gallery extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="post-list">
                    <a href="" className="post">
                        <figure className="album-image">
                            <img src={abbeyRoad} alt="Abbey Road - The Beatles"></img>
                        </figure>
                        <span className="album-info">
                            <p>
                                <span className="album-name">Abbey Road</span>
                                <span className="album-about">1969</span>
                            </p>
                        </span>
                    </a>

                </div>

                <div className="post-list">
                    <a href="" className="post">
                        <figure className="album-image">
                            <img src={aguaArdiente} alt="Agua Ardiente - Los Espiritus"></img>
                        </figure>
                        <span className="album-info">
                            <p>
                                <span className="album-name">Agua Ardiente</span>
                                <span className="album-about">2017</span>
                            </p>
                        </span>
                    </a>

                </div>

                <div className="post-list">
                    <a href="" className="post">
                        <figure className="album-image">
                            <img src={artaud} alt=""></img>
                        </figure>
                        <span className="album-info">
                            <p>
                                <span className="album-name">Artaud</span>
                                <span className="album-about">1973</span>
                            </p>
                        </span>
                    </a>

                </div>

                <div className="post-list">
                    <a href="" className="post">
                        <figure className="album-image">
                            <img src={dinastiaScorpio} alt=""></img>
                        </figure>
                        <span className="album-info">
                            <p>
                                <span className="album-name">La Dinastia Scorpio</span>
                                <span className="album-about">2012</span>
                            </p>
                        </span>
                    </a>

                </div>

                <div className="post-list">
                    <a href="" className="post">
                        <figure className="album-image">
                            <img src={bocanada} alt="Bocanada - Gustavo Cerati"></img>
                        </figure>
                        <span className="album-info">
                            <p>
                                <span className="album-name">Bocanada</span>
                                <span className="album-about">1999</span>
                            </p>
                        </span>
                    </a>

                </div>

                <div className="post-list">
                    <a href="" className="post">
                        <figure className="album-image">
                            <img src={animals} alt="Animals - Pink Floyd"></img>
                        </figure>
                        <span className="album-info">
                            <p>
                                <span className="album-name">Animals</span>
                                <span className="album-about">1976</span>
                            </p>
                        </span>
                    </a>

                </div>

                <div className="post-list">
                    <a href="" className="post">
                        <figure className="album-image">
                            <img src={americanIdiot} alt="American Idiot - Green Day"></img>
                        </figure>
                        <span className="album-info">
                            <p>
                                <span className="album-name">American Idiot</span>
                                <span className="album-about">2004</span>
                            </p>
                        </span>
                    </a>

                </div>

                <div className="post-list">
                    <a href="" className="post">
                        <figure className="album-image">
                            <img src={axisBoldAsLove} alt="Axis Bold as Love - Jimi Hendrix"></img>
                        </figure>
                        <span className="album-info">
                            <p>
                                <span className="album-name">Axis Bold as Love</span>
                                <span className="album-about">1967</span>
                            </p>
                        </span>
                    </a>
                </div>

                <div className="post-list">
                    <a href="" className="post">
                        <figure className="album-image">
                            <img src={bersuit} alt="De la cabeza con Bersuit Vergarabat"></img>
                        </figure>
                        <span className="album-info">
                            <p>
                                <span className="album-name">De la cabeza con Bersuit</span>
                                <span className="album-about">2002</span>
                            </p>
                        </span>
                    </a>
                </div>

                <div className="post-list">
                    <a href="" className="post">
                        <figure className="album-image">
                            <img src={bipolar} alt="Bipolar - Cuarteto de Nos"></img>
                        </figure>
                        <span className="album-info">
                            <p>
                                <span className="album-name">Bipolar</span>
                                <span className="album-about">2009</span>
                            </p>
                        </span>
                    </a>
                </div>

            </div>
        )
    }
}


*/