import * as React from 'react';
import SHOP_DATA from './shop.data';
import {withRouter} from 'react-router-dom';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';

class ShopPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collections: SHOP_DATA
        };
    }

    render() {
        return (
            <div className='shop-page'>
                {this.state.collections
                    .filter((item, idx) => idx < 4)
                    .map(({id, ...otherCollectionProps}) => (
                    <CollectionPreview key={id} {...otherCollectionProps } />
                ))}
            </div>
        )
    }
}

export default withRouter(ShopPage);
