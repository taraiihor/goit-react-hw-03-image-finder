import { Component } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import './Button.css';
class Button extends Component {
  scroll = () => {
    this.props.onClick();
    scroll.scrollToBottom();
  };

  render() {
    return (
      <button onClick={this.scroll} className="Button" type="button">
        Загрузити ще...
      </button>
    );
  }
}

export default Button;
