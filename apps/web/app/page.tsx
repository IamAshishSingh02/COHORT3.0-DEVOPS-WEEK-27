const App = async () => {
  const res = await fetch("http://http-server:8080/users", {
    cache: "no-store",
  });

  const users = await res.json();

  return (
    <div>
      {JSON.stringify(users)}
    </div>
  );
};

export default App