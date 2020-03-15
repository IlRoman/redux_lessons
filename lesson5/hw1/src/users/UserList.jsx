import React from 'react';
import User from './User';
import Filter from '../Filter';
import { connect } from 'react-redux';
import { textFilter } from './users.actions';
import { userSelector, textSelector } from './users.selectors';

const UsersList = ({ users, text, textFilter }) => {
    const onChange = element => {
        textFilter(element.target.value);
    };

    const filteredUsers = users.filter(user => user.name.toUpperCase().includes(text.toUpperCase()));

    return (
        <div>
            <Filter text={text} count={filteredUsers.length} onChange={onChange} />
            <ul className="users">
                {filteredUsers
                    .map(user => <User key={user.id} name={user.name} age={user.age} />)}
            </ul>
        </div>
    );
};

const mapState = state => {
    return {
        users: userSelector(state),
        text: textSelector(state),
    };
};

const mapDispatch = {
    textFilter,
};

export default connect(mapState, mapDispatch)(UsersList);