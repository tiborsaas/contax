import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <header>
                <article>
                    <h1>Contax</h1>
                    <button class="create-contact">Add new contact</button>
                </article>
            </header>
        );
    }
}

export default Header;
