import React from 'react';
import AsideItem from './AsideItems';

class Aside extends React.Component {
    render() {
        let aside = this.props.data;
        return (
        <div className="aside-content">
        <div className="aside-list">
            {aside.map((element) => {
                return <AsideItem element={element} />
            })}
        </div>
    </div>            
        )

    }
}
export default Aside