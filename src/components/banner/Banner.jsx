import { Component } from 'react';
import './style.css'

/**
 * Substitute label for googleAds, through a small randomization we are changing its content
 * 
 * You will receive a prop called ad that will contain all the elements
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
     * It will close the ad in question, it will not be able to 
     * recover in that position unless the page is reloaded
     */
    closeAd() {
        this.setState(({
            visible: !this.state.visible
        }))
    }

    /**
     * Small randomization of the content of the ads
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