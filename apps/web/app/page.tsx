import { db } from "@repo/db"

export const dynamic = "force-dynamic";

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