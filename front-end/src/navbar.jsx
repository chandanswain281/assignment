import  React, {NavLink} from 'react'

class Navbar extends React.Component {
    render() {
        return (
            <ul class="nav">
                    <li class="nav-item">
                        <NavLink to="/createUser">Create user</NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink to="/userList">User List</NavLink>
                    </li>
            </ul>
        )
    }
}