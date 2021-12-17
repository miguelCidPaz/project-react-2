import { Component } from 'react';
import './style.css'

/**
 * Etiqueta sustituta de googleAds, mediante una pequeña
 * randomizacion vamos cambiando su contenido
 * 
 * Recibira una prop llamada ad que contendra todos los elementos
 */
class Banner extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ad: { ...this.props.ad },
            visible: true
        }
        this.adRandom = this.adRandom.bind(this);
        this.closeAd = this.closeAd.bind(this);
    }

    /**
     * Cerrara el ad en cuestion, no podra recuperarse en esa posicion
     * a no ser que se recargue la pagina
     */
    closeAd() {
        this.setState(({
            visible: !this.state.visible
        }))
    }

    /**
     * Pequeña randomizacion del contenido de los ads
     * 
     * @returns Object ads
     */
    adRandom() {
        const ads = Object.values({ ...this.state.ad })
        const select = Math.floor(Math.random() * ads.length)
        return ads[select];
    }


    render() {
        const ad = this.adRandom()
        return <>{this.state.visible ? <div className="content-banner">
            <div className="banner-frame">
                <img src={ad.img} alt="#" className="banner-img" />
            </div>
            <div className="banner-text">
                <p className="banner-message">{ad.text}</p>
                <p className="banner-trademark">{ad.mark}</p>
            </div>
            <div className="banner-action">
                <div onClick={this.closeAd} className="banner-exit">X</div>
                <div className="banner-action-p">{ad.action}</div>
            </div>
        </div> : null}</>
    }
}

export default Banner