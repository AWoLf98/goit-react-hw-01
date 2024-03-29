import './App.css';
import Profile from './Profile';
import userData from '../data/userData';

export default function App() {
  return (
    <>
      <h1 style={{ textTransform: 'uppercase', marginBottom: 8 }}>goit-react-hw-01</h1>
      <h2>Task 1</h2>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <h2>Task 2</h2>
      <h2>Task 3</h2>
    </>
  );
}
