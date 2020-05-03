import React, { Component} from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
    
class Nav extends Component {
    render() {
        const { user, authedUser } = this.props
        const avatar = user ? user.avatarURL : 'placeholder.png'
        const name = user ? user.name : ''
        return (
        
        <div>
        <nav className='nav'>
            <ul>
                <li>
                    <NavLink to='/dashboard' exact activeClassName='active'>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/NewQuestion' exact activeClassName='active'>
                        New Question
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/Leaderboard' exact activeClassName='active'>
                        Leader Board
                    </NavLink>
                </li>
            </ul>
        </nav>
                {
                    authedUser
                    && <div className='right-nav'>
                            <NavLink to='/' exact activeClassName='active'>
                                <div className="nav-user">
                                    <span>Hello {name}</span>
                                    <img
                                    src={avatar}
                                    alt={`Avatar of ${authedUser}`}
                                    className='avatar'
                                    />
                                    <span>Logout</span>
                                </div>
                            </NavLink>
                        </div>
                }
        </div>   
    )
    }
}

function mapStateToProps( { authedUser, users}, props) {
    return {
        authedUser,
        users,
        user: users[authedUser]
    }

}
export default connect(mapStateToProps)(Nav)