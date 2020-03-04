import React from 'react';
import { userInfo, UserContext } from './themes-context';
import Header from './Header';

class App extends React.Component {
    state = {
        userData: userInfo,
    };

    render() {
        return (
            <div className="page">
                <UserContext.Provider value={this.state.userData}>
                    <Header />
                </UserContext.Provider>
            </div>
        );
    };
};

export default App;