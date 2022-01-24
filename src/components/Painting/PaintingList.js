import Painting from './Painting';
import PropTypes from 'prop-types';

export default function PaintingList({ items }) {
  return (
    <ul>
      {items.map(e => (
        <li key={e.id}>
          <Painting
            imageUrl={e.url}
            title={e.title}
            price={e.price}
            authorName={e.author.tag}
            authorProfile={e.author.url}
            quantity={e.quantity}
          />
        </li>
      ))}
    </ul>
  );
}

PaintingList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};
