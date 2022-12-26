import { useEffect, useState } from "react";

function Users() {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      });

    console.log("API CALL");
  }, []);

  console.log("UI REFRESH");

  return (
    <div>
      <h1>User List</h1>
      {loading ? <h1>Loading...</h1> : "로딩 완료"}

      {users.map((item) => {
        // return <li key={item.id}>{item.name}</li>;
        return (
          <User
            key={item.id}
            name={item.name}
            username={item.username}
            email={item.email}
          />
        );
      })}
    </div>
  );
}

const User = (props) => {
  return (
    <div>
      <li>
        {props.name}, {props.email}, {props.username}
      </li>
    </div>
  );
};

export default Users;
