import React from 'react';
import {Link} from 'react-router-dom';

class User extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return (
            <div>
                <h1>{this.props.id}</h1>
                <Link to="/user/insert" onClick={() => this.props.insertHandler()}>
                    FUCK YOU!
                </Link>
            </div>
        );
    }

}

export default User;