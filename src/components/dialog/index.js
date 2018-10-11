import React, { Component } from 'react';

class Dialog extends Component {

    constructor(props) {
        super(props);
        this.state = {
            visible: 'show'
        }
    }

    toggleDialog() {
        this.setState({
            visible: ''
        });
    }

    render() {
        return (
            <section className={'overlay create ' + this.state.visible}>
                <article>
                    <h1 className="create">Create new contact</h1>
                    <h1 className="edit">Edit contact</h1>
                    <span className="close" onClick={this.toggleDialog.bind(this)}>×</span>
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
