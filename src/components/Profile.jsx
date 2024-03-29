import css from './Profile.module.css';

export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={css.profile}>
      <img className={css['profile-img']} src={image} alt={name} width='100' height='100'/>
      <p className={css['profile-name']}>{name}</p>
      <p className={css['profile-tag']}>{`@${tag}`}</p>
      <p className={css['profile-location']}>{location}</p>
      <ul className={css['profile-data']}>
        {Object.entries(stats).map(([key, value]) => {
          console.log([key, value]);
          return (
            <li className={css['profile-data-item']} key={tag + key}>
              <span className={css['profile-data-key']}>{key}</span>
              <span className={css['profile-data-value']}>{value}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function consoleW(stats) {
  Object.entries(stats).map(([key, value]) => {
    console.log([key, value]);
  });
}

consoleW({
  followers: 5603,
  views: 4827,
  likes: 1308,
});
