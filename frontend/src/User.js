import React from 'react';

class User extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return (
            <h1>{this.props.id}</h1>
        );
    }

}

export default User;