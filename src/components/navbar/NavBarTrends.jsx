import { Component } from "react";

/**
 * Component that will contain a reduced version of the header navlink menu. 
 * Initially they were xataka trends, we decided to redirect their use to take advantage of them
 */
class NavBarTrends extends Component {
    constructor(props) {
        super(props);
        this.changeCategory = this.changeCategory.bind(this)
    }

    /**
     * It gets the value of the label and sends it up with the function brought from App, 
     * it uses exactly the same function as navlink
     * 
     * @param {Event} e 
     */
    changeCategory(e) {
        const value = e.target.value
        this.props.changeCategory(value)
    }

    render() {
        const arr = this.props.trends
        return (
            <div className="trendings">
                <p>🔥 Categorias &gt;</p>
                {arr.map((element, index) => {
                    if (index === 0) {
                        return <div key={element}>
                            <li key={index} className='trend' onClick={this.changeCategory} value={index}> {element} </li>
                            <p key={"sub" + index} className='decoration'>➖</p>
                        </div>
                    } else if (index > 1) {
                        return <div key={element}>
                            <p key={"sub" + index} className='decoration'>➖</p>
                            <li key={index} className='trend' onClick={this.changeCategory} value={index}>  {element} </li>
                        </div>
                    } else {
                        return <li key={index} className='trend' onClick={this.changeCategory} value={index}> {element} </li>
                    }
                })}
            </div>
        )
    }
}

export default NavBarTrends