import React from 'react';

class Zoom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dragable: false,
      clickX: 0,
      clickY: 0,
      moveX: 0,
      moveY: 0,
    };
  }

  mouseDown = e => {
    this.setState({
      dragable: true,
      clickX: e.clientX,
      clickY: e.clientY,
    });
  }

  mouseUp = e => {
    this.setState({
      dragable: false,
      clickX: e.clientX,
      clickY: e.clientY,
    });
  }

  mouseMove = e => {
    const { dragable, clickX, clickY } = this.state;
    if (dragable) {
      this.setState({
        moveX: e.clientX - clickX,
        moveY: e.clientY - clickY,
      });
    }
  }

  render = () => (
    <div className="zoom" style={{ transform: `scale(${this.props.scale || 1})`, }}>
      <div className="drag"
        onMouseDown={this.mouseDown}
        onMouseUp={this.mouseUp}
        onMouseMove={this.mouseMove}
        style={{
          transform: `translate(${this.state.moveX}px, ${this.state.moveY}px)`,
        }}
      >
        {this.props.children}
      </div>
    </div>
  );
}

export default Zoom;
