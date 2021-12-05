import { Component } from "react";

class NavBarTrends extends Component {
    render() {
        const arr = this.props.trends
        return (
            <div className="trendings">
                <p>🔥 Hoy se habla de &gt;</p>
                {arr.map((element, index) => {
                    if (index === 0) {
                        return <><p key={index} className='trend'> {element} </p><p className='decoration'>➖</p></>
                    } else if (index > 1) {
                        return <> <p className='decoration'>➖</p> <p key={index} className='trend'>  {element} </p></>
                    } else {
                        return <p key={index} className='trend'> {element} </p>
                    }
                })}
            </div>
        )
    }
}

export default NavBarTrends