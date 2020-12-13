import './Button.css';
const Button = ({ fetchPage }) => (
  <>
    <button type="button" className="Button" onClick={fetchPage}>
      <span>Загрузити наступні зображення</span>
    </button>
  </>
);

export default Button;
