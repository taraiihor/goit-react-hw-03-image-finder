import { Component } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import './Button.css';
import PropTypes from 'prop-types';
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
Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
export default Button;
