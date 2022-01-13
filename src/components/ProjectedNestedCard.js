import React from 'react';
import PropTypes from 'prop-types';

import { ProjectedNestedCard } from '../nested-web-components/web-components';
import '../nested-web-components/styles.css';

export default class ProjNestedCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <app-projected-nested-card>
                    {/* <p>Hello from React</p> */}
                    {
                        React.Children.map(this.props.children, (item, i) => {
                            return <>{item}</>
                        })
                    }
                </app-projected-nested-card>
            </div>
        )
    }
}

ProjNestedCard.propTypes = {
    children: PropTypes.node
}
