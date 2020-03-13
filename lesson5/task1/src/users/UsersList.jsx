import React from 'react';
import User from './User';
import Pagination from './Pagination';
import { connect } from 'react-redux';
import { goPrev, goNext } from './user.actions.js';
import { usersListSelector, currentPageSelector } from './users.selectors'

const UsersList = ({ users, currentPage, goNext, goPrev }) => {

    return (
        <>
            <Pagination
                goPrev={goPrev}
                goNext={goNext}
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
        users: usersListSelector(state),
        currentPage: currentPageSelector(state),
    }
};

const mapDispatch = {
    goNext,
    goPrev
}

export default connect(mapState, mapDispatch)(UsersList);