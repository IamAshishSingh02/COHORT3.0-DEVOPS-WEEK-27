import { db } from "@repo/db"

const App = async () => {
  const users = await db.user.findMany()
  return (
    <>
      <div>
        {JSON.stringify(users)}
      </div>
    </>
  )
}

export default App