import React from 'react';
import './styles.css';
import logoyoutube from './assets/descarga.png';
/**horizontal section with youtube videos, with one main video and a lateral scroll that play at center at click
 * it receives as props videos and images urls
 * minimized videos open with autoplay at click
 */
class Videos extends React.Component {
    render() {
        const videos = Object.values(this.props.data.videos.secondary);
        /**this function listen images on lateral list of videos 
         * it searchs for the event div parent to show the hidden parent and start the video when click on the image
         * and hid the div and stop the video when click on the p CERRAR
         */
        function resize(e){
            let videoToShowDiv,videoToShow,aux;
            if (e.target.innerHTML ==='CERRAR(X)') {
                videoToShow = e.target.parentNode;
                aux = videoToShow.firstChild.src.slice(0,-11);
                videoToShow.firstChild.src = aux;
            }
            else {
                videoToShowDiv = e.target.parentNode.parentNode;
                videoToShow = videoToShowDiv.querySelector('.videoDiv');
                aux = videoToShow.firstChild.src += '?autoplay=1'
            }
            videoToShow.classList.toggle('videoHidden'); 
       }
        return (
            
        <div className={this.props.data.class}>
            <div className="top-videos">
                <h2>{this.props.data.top.tittle}</h2>
                <div className="follow"><p>{this.props.data.top.follow}<a href='https://www.youtube.com/channel/UCUrYBZGlEOSD1_ds_HcNd6A'><img src={logoyoutube} alt='logo youtube'/></a></p></div>
            </div>
            <div className="videos">
                <div className="mainVideo">{this.props.data.videos.main}</div>
                <div className="videos-box">
                    {videos.map((element,index) => {
                    return <div className='videos-box-individual'key={index}><div className='videoDiv videoHidden'>{element.video}<p onClick={resize}>CERRAR(X)</p></div> <div><img src={element.img} onClick={resize} alt='video youtube'/></div><p>{element.text}</p></div>
                    })}  
                </div>
            </div>
        </div>            
        )
    }
}
export default Videos