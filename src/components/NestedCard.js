import React from 'react';
import PropTypes from 'prop-types';

export default class NestedCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            // <>
            //     <app-nested-card cardTitle={this.props.title}></app-nested-card>
            // </>
            <div>
                {
                    React.Children.map(this.props.children, (item, i) => {
                        return <div>{item}</div>
                    })
                }
            </div>
        )
    }
}

NestedCard.propTypes = {
    children: PropTypes.node
}
   
NestedCard.defaultProps = {
    
}