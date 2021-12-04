import { Component } from "react";

class NavBarTrends extends Component {
    render() {
        const arr = this.props.trends
        console.log(arr)
        return (
            <div className="trendings">
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