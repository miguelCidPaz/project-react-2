import React from 'react';
import AsideItem from './AsideItems';
import './style.css';
/**receives data from App and returns aside section, filtering 5 news to show in the aside list
 * call class AsideItem passing the data as props.
*/
class Aside extends React.Component {
    render() {
        let aside = Object.values(this.props.data);
        return (
            <div className="aside-content">
                <div className="aside-list">
                    {aside.map((element, index) => {
                        if (index < 5) {
                            return <AsideItem element={element} key={index} />
                        } else {
                            return null
                        }
                    })}
                </div>
            </div>
        )

    }
}
export default Aside