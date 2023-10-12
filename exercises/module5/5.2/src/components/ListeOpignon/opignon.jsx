import { Context as OpinionContext } from 'contexts/opinionContext';
import { useContext } from 'react';

const Opinion = ({ opinion }) => {
  const { addVote } = useContext(OpinionContext);

  return (
    <div>
        <p>{opinion.name}  {opinion.count} : <button onClick={() => addVote(opinion.id)}>Vote</button> </p>
    </div>
  );
};

export default Opinion;
