import React, {Component} from 'react'
import {connect} from 'react-redux'

class NotFound extends Component{
    render(){
        return(
            <div>
                <h2>Page Not Found 404</h2>
            </div>
        )
    }
}

export default connect()(NotFound)