import React, { Component } from 'react'
import UpdatedComponent from './WithCounter';

class ClickCounter extends Component {

    

    render() {
        const { count, incrementCount } = this.props
        return (
            <div>
                <button onClick={incrementCount}>{this.props.name} Cliked  {count} Times</button>         
            </div>
        )
    }
}

export default UpdatedComponent(ClickCounter)
