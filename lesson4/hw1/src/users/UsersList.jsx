import React from 'react';
import User from './User';
import Pagination from './Pagination';
import { connect } from 'react-redux';
import { nextPage, prevPage } from './user.actions.js';

const UsersList = ({ users, currentPage, nextPage, prevPage }) => {

    return (
        <>
            <Pagination
                prevPage={prevPage}
                nextPage={nextPage}
                currentPage={currentPage}
                totalItems={users.length}
            />
            <ul className="users">
                {users
                    .slice(currentPage * 3, currentPage * 3 + 3)
                    .map(user => <User key={user.id} name={user.name} age={user.age} />)}
            </ul>
        </>
    );
};

const mapState = state => {
    return {
        users: state.users.users,
        currentPage: state.users.currentPage,
    }
};

const mapDispatch = {
    nextPage,
    prevPage
}

export default connect(mapState, mapDispatch)(UsersList);