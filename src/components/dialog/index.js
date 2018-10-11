import React, { Component } from 'react';

class Dialog extends Component {
    render() {
        return (
            <section className="overlay show edit">
                <article>
                    <h1 className="create">Create new contact</h1>
                    <h1 className="edit">Edit contact</h1>
                    <span className="close">×</span>
                    <form>
                        <label htmlFor="">Name</label>
                        <input type="text" />

                        <label htmlFor="">Email</label>
                        <input type="text" />

                        <label htmlFor="">Mobile phone</label>
                        <input type="text" />
                        <button type="submit">Save contact</button>
                    </form>
                </article>
            </section >
        );
    }
}

export default Dialog;
