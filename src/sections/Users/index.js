import { useEffect, useState } from "react"

function UsersSection() {
  const [users, setUsers] = useState(null)

  console.log({ users })

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=10")
      .then(res => res.json())
      .then(data => setUsers(data.results))
  }, [])

  if (!users) return <p>Loading...</p>

  return (
    <section>
      <h2>Users Section</h2>
      <div className="scroll-container">
        <ul className="users-list">
          {users.map((user, index) => {
            const { picture, name, gender, email } = user

            const { title, first, last } = name

            const fullname = first + " " + last

            return (
              <li
                key={index}
                className={gender === "male" ? "bg-blue" : "bg-pink"}
              >
                <img src={picture.medium} alt={fullname} />
                <h3>
                  {title} {fullname}
                </h3>
                <p>Email: {email}</p>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

export default UsersSection
