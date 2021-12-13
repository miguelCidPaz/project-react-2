import { Component } from "react";

class NavBarTrends extends Component {
    constructor(props) {
        super(props);
        this.changeCategory = this.changeCategory.bind(this)
    }

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