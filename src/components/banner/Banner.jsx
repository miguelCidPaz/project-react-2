import { Component } from 'react';
import './style.css'

class Banner extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ad: { ...this.props.ad },
            /*  visible: true */
        }
        console.disableYellowBox = true;
        this.adRandom = this.adRandom.bind(this);
        /* this.closeAd = this.closeAd.bind(this); */
    }

    /*     closeAd() {
            this.setState(({
                visible: !this.state.visible
            }))
        } */

    adRandom() {
        const ads = Object.values({ ...this.state.ad })
        const select = Math.floor(Math.random() * ads.length)
        return ads[select];
    }


    render() {
        const ad = this.adRandom()
        return <div className="content-banner">
            <div className="banner-frame">
                <img src={ad.img} alt="#" className="banner-img" />
            </div>
            <div className="banner-text">
                <p className="banner-message">{ad.text}</p>
                <p className="banner-trademark">{ad.mark}</p>
            </div>
            <div className="banner-action">
                <div className="banner-exit">X</div>
                <div className="banner-action-p">{ad.action}</div>
            </div>
        </div>
    }
}

export default Banner