export function App() {
  return (
    <div className="container">
      <h1>CV Builder</h1>
      <fieldset>
        <legend>General Information</legend>
        <form>
          <label>
            Name: <input type="text" />
          </label>
          <label>
            Address: <input type="text" />
          </label>
          <label>
            Age: <input type="text" />
          </label>
          <label>
            Email: <input type="email" />
          </label>
          <label>
            Phone Number: <input type="number" max={3} />
          </label>
        </form>
      </fieldset>
    </div>
  );
}
