import { Component } from "react";

class NavBarTrends extends Component {
    render() {
        const arr = this.props.trends
        return (
            <div className="trendings">
                <p>🔥 Hoy se habla de &gt;</p>
                {arr.map((element, index) => {
                    if (index === 0) {
                        return <p key={index}> {element} ➖ </p>
                    } else if (index > 1) {
                        return <p key={index}> ➖ {element} </p>
                    } else {
                        return <p key={index}> {element} </p>
                    }
                })}
            </div>
        )
    }
}

export default NavBarTrends