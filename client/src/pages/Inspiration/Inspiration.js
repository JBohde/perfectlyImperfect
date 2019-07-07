import React from 'react';
import NavHeader from '../../components/NavHeader';
import './Inspiration.css';

class Inspiration extends React.Component {
  state = {};

  render() {
    return (
      <>
        <NavHeader />
        <div className="video-display">
          <h1 id="inspiration">THIS IS THE INSPIRATION PAGE</h1>
        </div>
      </>
    );
  }
}

export default Inspiration;
