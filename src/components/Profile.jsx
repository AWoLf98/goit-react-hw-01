// import css from './Profile.module.css';

export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div>
      <img src={image} alt={name} />
      <p>{name}</p>
      <p>{`@${tag}`}</p>
      <p>{location}</p>
      <ul>
        {Object.entries(stats).map(([key, value]) => {
          console.log([key, value]);
          return (
            <li key={tag + key}>
              <span>{key}</span>
              <span>{value}</span>
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
