import { useSelector, useDispatch } from 'react-redux';

import { selectUsers } from './apiTableSlice';
import { userApiThunk } from './apiTableSlice';


export function ApiTable() {

    const users = useSelector(selectUsers);
    const dispatch = useDispatch();

    const onClk = () => { dispatch(userApiThunk())}

    return (
        <>
            <input type='button' onClick={onClk} value='Call'/>
            { users.length }
            { users.map( us => <img src={us.avatar}/>) }
        </>
    )
}