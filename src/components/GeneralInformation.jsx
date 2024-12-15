export function GeneralInformation({ generalInfo, updateGenInfo }) {
  function handleText(e, id) {
    updateGenInfo({ ...generalInfo, [id]: e.target.value });
  }
  return (
    <form>
      <label htmlFor="name">Name</label>
      <input
        value={generalInfo.name}
        onChange={(e) => handleText(e, "name")}
        type="text"
        id="name"
        required
        autoComplete="off"
      />
      <label htmlFor="address">Address</label>
      <input
        value={generalInfo.address}
        onChange={(e) => handleText(e, "address")}
        type="text"
        id="address"
        required
        autoComplete="off"
      />
      <label htmlFor="age">Age</label>
      <input
        value={generalInfo.age}
        onChange={(e) => handleText(e, "age")}
        type="number"
        id="age"
        required
        autoComplete="off"
      />
      <label htmlFor="email">Email</label>
      <input
        value={generalInfo.email}
        onChange={(e) => handleText(e, "email")}
        type="email"
        id="email"
        required
        autoComplete="off"
      />
      <label htmlFor="phone">Phone Number</label>
      <input
        value={generalInfo.phone}
        onChange={(e) => handleText(e, "phone")}
        type="number"
        id="phone"
        required
        autoComplete="off"
      />
    </form>
  );
}
