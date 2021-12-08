import React, { useEffect, useState } from "react";

function UsersSection() {
  const [users, setUsers] = useState([]);
  //console.log(Users)
  useEffect(() => {
    fetch("https://randomuser.me/api/")
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data.results);
        setUsers(data.results);
      });
  }, []);
  console.log(users);
  /*users.map((user) => {
          return <p>{user.name}</p>;
        })*/
  return (
    <section>
      <h2>Users Section</h2>
      <div className="scroll-container">
        {users.map((user) => (
          <li>
            {user.name.first}
            {user.name.last}
            {user.name.title}
          </li>
        ))}
      </div>
    </section>
  );
}
//console.log(results);
export default UsersSection;
