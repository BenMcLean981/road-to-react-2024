const welcome = {
  greeting: "Hey",
  title: "React",
};

export function App() {
  return (
    <div>
      <h1>
        {welcome.greeting} {welcome.title}
      </h1>
      <label>
        Age
        <input />
      </label>
    </div>
  );
}
