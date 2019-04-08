import React, { Component } from "react";
import { cloneDeep } from "lodash";

import "./style.scss";

class Box extends Component {
  constructor(props) {
    super(props);

    this.onMoveElement = this.onMoveElement.bind(this);
    this.collision = this.collision.bind(this);

    this.state = {
      container: {
        width: 300,
        height: 300,
      },
      player: {
        width: 30,
        height: 30,
        x: 0,
        y: 0,
      },
      obj: {
        width: 15,
        height: 15,
        x: 60,
        y: 60,
      },
    };
  }

  componentDidMount() {
    document.body.addEventListener("keydown", this.onMoveElement);
  }

  componentWillUnmount() {
    document.body.removeEventListener("keydown", this.onMoveElement);
  }

  collision(obj1, obj2) {
    let Xcoll = false;
    let Ycoll = false;

    if (obj1.x + obj1.width >= obj2.x && obj1.x <= obj2.x + obj2.width)
      Xcoll = true;
    if (obj1.y + obj1.height >= obj2.y && obj1.y <= obj2.y + obj2.height)
      Ycoll = true;

    if (Xcoll && Ycoll) {
      return true;
    }
    return false;
  }

  onMoveElement(e) {
    e.preventDefault();

    let player = cloneDeep(this.state.player);

    const playZone = {
      width: this.state.container.width - player.width,
      height: this.state.container.height - player.height,
    };

    let left = player.x;
    let top = player.y;
    const step = 20;

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

    if (left > playZone.width) {
      left = playZone.width - 2;
    } else if (left < 0) {
      left = 0;
    }

    if (top > playZone.height) {
      top = playZone.height - 2;
    } else if (top < 0) {
      top = 0;
    }

    player.x = left;
    player.y = top;

    let boom = this.collision(player, this.state.obj);

    if (boom) {
      console.log("boom!");
    }

    this.setState({ player });
  }

  render() {
    const container = this.state.container;
    const player = this.state.player;
    const obj = this.state.obj;

    const containerStyle = {
      width: container.width,
      height: container.height,
    };

    const playerStyle = {
      width: player.width,
      height: player.height,
      top: player.y,
      left: player.x,
    };

    const enemyStyle = {
      width: obj.width,
      height: obj.height,
      top: obj.y,
      left: obj.x,
    };

    return (
      <div
        className={"box__container"}
        style={containerStyle}
        ref={container => {
          this.container = container;
        }}>
        <div
          className={"box__element"}
          style={playerStyle}
          ref={block => {
            this.block = block;
          }}
          onKeyPress={this.onMoveElement}
        />
        <div className={"box__enemy"} style={enemyStyle} />
      </div>
    );
  }
}

export default Box;
