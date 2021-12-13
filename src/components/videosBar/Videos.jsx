import React from 'react';
import './styles.css';
import logoyoutube from './assets/descarga.png';

class Videos extends React.Component {
    render() {
        const videos = Object.values(this.props.data.videos.secondary);
        function resize(e){
            let videoToShowDiv,videoToShow,aux;
            console.log(e.target.innerHTML);
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