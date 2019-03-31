import React, { Component } from "react";

import "./style.scss";
import FindRange from "./utils/FindRange";

class CustomText extends Component {
  constructor(props) {
    super(props);

    this.replaceSelectedText = this.replaceSelectedText.bind(this);
    this.change_str = this.change_str.bind(this);

    this.state = {};
  }

  replaceSelectedText() {
    let str = this.change_str;
    let range = FindRange();
    let sel = window.getSelection();
    let offset = document.createRange();

    console.log(sel);

    let newText = sel.toString();
    let textEnd = sel.focusNode.data;

    if (typeof sel.anchorOffset === "number") {
      let start = sel.anchorOffset;
      let end = range.endOffset;
      let rs = str(newText);

      this.editText.innerHTML =
        this.editText.innerText.substr(0, start) + rs + textEnd;
    }
    // if (typeof sel.anchorOffset === "number") {
    //     let start = range.startOffset;
    //     let end = range.endOffset;
    //     let rs = str(elemString.substr(start, end - start));
    //
    //     elemString = elemString.substr(0, start) + rs + elemString.substr(end);
    //
    //     range.innerHTML = elemString;
    // }
    return false;
  }

  change_str(s) {
    return "<b>" + s + "</b>";
  }

  render() {
    return (
      <div className={"custom-text__container"}>
        <button onClick={this.replaceSelectedText}>ссылка</button>
        <button onClick={this.replaceSelectedText}>жирный</button>
        <button onClick={this.replaceSelectedText}>курсив</button>
        <div
          contentEditable={true}
          ref={editText => (this.editText = editText)}
          className={"custom-text__text-edit"}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque earum
          mollitia repellat <a href={"/"}>similique</a>. Aliquid assumenda
          autem, <a href={"/"}>similique</a> cupiditate dicta, ea earum expedita
          illum, iusto labore odit quae quis saepe totam vero!
        </div>
      </div>
    );
  }
}

export default CustomText;
