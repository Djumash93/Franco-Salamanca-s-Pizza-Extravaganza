import { useSelector } from 'react-redux';
import CreateUser from '../features/user/CreateUser';
import Button from './Button';
function Home() {
  const username = useSelector((state) => state.user.username);

  return (
    <div className="my-10 px-4 text-center sm:my-16">
      <h1 className="mb-8 text-center text-xl font-semibold md:text-3xl">
        Mouth wateringly delicious pizza.
        <br />
        <span className="text-amber-400">
          Delivered to you piping hot, anywhere in London.
        </span>
      </h1>
      {username === '' ? (
        <CreateUser />
      ) : (
        <Button to="/menu" type="primary">
          Choose your Pizza, {username} :)
        </Button>
      )}
    </div>
  );
}

export default Home;
