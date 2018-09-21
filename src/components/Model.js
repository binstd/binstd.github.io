import React, { Component } from 'react';


export default class Model extends Component {

  render() {
    return (
        <div className="modal">
            <div class="modal-background">
            </div>
            <div class="modal-card">
                <header class="modal-card-head">
                    <p class="modal-card-title">Modal title</p>
                    <button class="delete" aria-label="close"></button>
                </header>
                <section class="modal-card-body">
                    222222!!!!!
                </section>
                <footer class="modal-card-foot">
                    <button class="button is-success">Save changes</button>
                    <button class="button">Cancel</button>
                </footer>
            </div>
      </div>
    );
  }
};

