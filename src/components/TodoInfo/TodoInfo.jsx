import './TodoInfo.scss';
import { UserInfo } from '../UserInfo';

export const TodoInfo = ({ todo }) => {
  const { completed, title, user } = todo;

  return (
    <article
      className={`TodoInfo ${
        completed ? 'TodoInfo--completed' : ''
      }`}
    >
      <h2 className="TodoInfo__title">{title}</h2>

      {user !== undefined
        && <UserInfo user={user} />}
    </article>
  );
};
