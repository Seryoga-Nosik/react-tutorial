import PropTypes from 'prop-types';
import defaultImg from '../default.jpeg';

export default function Painting({
  imageUrl = defaultImg,
  title,
  price,
  authorName,
  authorProfile,
  quantity,
}) {
  return (
    <div>
      <img src={imageUrl} alt={title} width="480" />
      <h2>{title}</h2>
      <p>
        Автор: <a href={authorProfile}>{authorName}</a>
      </p>
      <p>Цена: {price} кредитов</p>
      <p>Доступность: {quantity < 10 ? 'заканчивается' : 'есть в наличии'} </p>
      <button type="button">Добавить в корзину</button>
    </div>
  );
}

Painting.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  authorName: PropTypes.string.isRequired,
  authorProfile: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
};
