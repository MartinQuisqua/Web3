import { Context as OpinionContext } from 'contexts/opinionContext';
import { useContext } from 'react';
import Opinion from 'components/ListeOpignon/opignon';

const OpinionList = () => {
  const { sortedOpignonCounters } = useContext(OpinionContext);

  return (
    <div>
      {sortedOpignonCounters.map((opinion) => (
        <Opinion key={opinion.id} opinion={opinion}  />
      ))}
    </div>
  );
};

export default OpinionList;
