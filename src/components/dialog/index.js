import React, { Component } from 'react';

class Dialog extends Component {
    render() {
        return (
            <section class="overlay show edit">
                <article>
                    <h1 class="create">Create new contact</h1>
                    <h1 class="edit">Edit contact</h1>
                    <span class="close">×</span>
                    <form>
                        <label for="">Name</label>
                        <input type="text" />

                        <label for="">Email</label>
                        <input type="text" />

                        <label for="">Mobile phone</label>
                        <input type="text" />
                        <button type="submit">Save contact</button>
                    </form>
                </article>
            </section >
        );
    }
}

export default Dialog;
