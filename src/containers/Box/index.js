import React, { Component } from "react";

import "./style.scss";

class Box extends Component {
  constructor(props) {
    super(props);

    this.moveElement = this.moveElement.bind(this);

    this.state = {};
  }

  componentDidMount() {
    document.body.addEventListener("keydown", this.moveElement);
  }

  moveElement(e) {
    e.preventDefault();
    let block = this.block;
    let container = this.container;

    let blockWidth = block.clientWidth;
    let blockHeight = block.clientHeight;
    let containerWidth = container.clientWidth;
    let containerHeight = container.clientHeight;
    let playZone = {
      width: containerWidth - blockWidth,
      height: containerHeight - blockHeight,
    };

    let left = Number(block.style.left.slice(0, -2));
    let top = Number(block.style.top.slice(0, -2));
    let step = 20;

    switch (e.keyCode) {
      case 37:
        left = left - step;
        break;
      case 38:
        top = top - step;
        break;
      case 39:
        left = left + step;
        break;
      case 40:
        top = top + step;
        break;
      default:
        break;
    }

    if (left > 0 && left < playZone.width) {
      block.style.left = left + "px";
    } else if (left >= playZone.width) {
      block.style.left = playZone.width + "px";
    } else if (left <= playZone.width) {
      block.style.left = 0 + "px";
    }

    if (top > 0 && top < playZone.height) {
      block.style.top = top + "px";
    } else if (top >= playZone.height) {
      block.style.top = playZone.height + "px";
    } else if (top <= playZone.height) {
      block.style.top = 0 + "px";
    }
  }

  render() {
    return (
      <div
        className={"box__container"}
        ref={container => {
          this.container = container;
        }}>
        <div
          className={"box__element"}
          ref={block => {
            this.block = block;
          }}
          onKeyPress={this.moveElement}
        />
      </div>
    );
  }
}

export default Box;
