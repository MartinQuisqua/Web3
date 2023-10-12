import { useContext, useState } from 'react';
import { Context as OpinionContext } from 'contexts/opinionContext';

const AddOpinion = () => {
    const { addopgnon } = useContext(OpinionContext);
    const [opinion, setOpinion] = useState('');

    const handleOpinion = (e) => {
        setOpinion(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addopgnon(opinion);
        setOpinion('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Opinion"
                value={opinion}
                onChange={handleOpinion}
            />
            <button type="submit">Add</button>
        </form>
    )
}
export default AddOpinion;
