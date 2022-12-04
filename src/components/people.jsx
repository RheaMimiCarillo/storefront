import { useSelector, useDispatch } from 'react-redux';
import peopleSlice from '../redux-store/people';

function People()
{
  let people = useSelector(state => state.people);
  let dispatch = useDispatch();

  let { add } = peopleSlice.actions;

  const handleClick = (e) =>
  {
    e.preventDefault;
    dispatch(add({ name: 'bobby hill', age: 12 }))
  }

  return (
    <div>
      <h1>People</h1>
      { people.map((person, idx) =>
      {
        return <p key={ idx }>{ person.name }</p>
      }) }
      <button onClick={ handleClick } />
    </div>
  )
}
