import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../state/reducers";
import {bindActionCreators} from "redux";
import {actionCreators} from "../state";
import {useEffect} from "react";


export default function Users() {
  const userState = useSelector((state: RootState) => state.userList);

  const dispatch = useDispatch();

  const {fetchUsersList} = bindActionCreators(actionCreators, dispatch);

  useEffect(() => {
    fetchUsersList();
  }, []);

  return <>
    <div className="list-group">
      {
        userState.usersList.map(user =>
          <a href={`/todo/${user.id}`} className="list-group-item list-group-item-action" aria-current="true" key={user.id}>
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">{user.name} <small>(@{user.username})</small></h5>
            </div>
            <p className="mb-1">{user.email}</p>
          </a>
        )
      }
    </div>
  </>;
}