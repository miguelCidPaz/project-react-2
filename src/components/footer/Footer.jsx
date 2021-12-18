import React from 'react';
import './styles.css';
/**This class returns the footer
 * it receives data as props from App,
 * it has a call to an anchor to come back to the header
*/
class Footer extends React.Component {
    render() {

        const lists = Object.values(this.props.data.lists);
        return (
            <div className={this.props.data.class}>
                <div className='footer-head'>
                    <h2>{this.props.data.tittle}</h2>
                    <button><a href="#top-anchor">VOLVER ARRIBA</a></button>
                </div>
                <div className="lists-container">
                    {lists.map((element,index) => {
                        const individualLists = Object.values(element.links);
                        return <div key={index} className='footer-lists'>
                            <h4>{element.tittle}</h4>
                            <ul>
                                {individualLists.map((element, index) => {
                                    return <li key={index}>{element}</li>
                                })}    
                            </ul>
                        </div>
                    })}                    
                </div>

            </div>            
        )
    }
}
export default Footer