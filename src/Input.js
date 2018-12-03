import React from 'react';
import { connect } from 'react-redux';

export class Input extends React.Component {
  render() {
    return (
      <div>
        <button>button</button>
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return {};
}
 export default connect(mapStateToProps)(Input);
