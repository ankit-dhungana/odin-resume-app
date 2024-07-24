import React from "react";

const personalInfo = {
  name: "John Doe",
  title: "Software Engineer",
  location: "San Francisco, CA",
  email: "johndoe@something.com",
};

const Header = () => {
  const [state, setState] = React.useState("");
  const [info, setInfo] = React.useState(personalInfo);

  function handleStateChange(e) {
    e.preventDefault();
    state === "edit" ? setState("") : setState("edit");
  }

  function handleInput(e) {
    setInfo({
      ...info,
      [e.target.placeholder.toLowerCase()]: e.target.value,
    });
  }

  return (
    <>
      <div>
        <h1 style={{ textAlign: "center" }}>{info.name}</h1>
        <div style={infoStyle}>
          <p>{info.title}</p>
          <p>{info.location}</p>
          <p>{info.email}</p>
        </div>

        {state !== "edit" && <button onClick={handleStateChange}>Edit</button>}
      </div>

      {state === "edit" && (
        <form style={formStyle}>
          <input
            type="text"
            placeholder="Name"
            onChange={handleInput}
            value={info.name}
          />
          <input
            type="text"
            placeholder="Title"
            onChange={handleInput}
            value={info.title}
          />
          <input
            type="text"
            placeholder="Location"
            onChange={handleInput}
            value={info.location}
          />
          <input
            type="email"
            placeholder="email"
            onChange={handleInput}
            value={info.email}
          />
          <button type="submit" onClick={handleStateChange}>
            Save
          </button>
        </form>
      )}
      <hr />
    </>
  );
};

const formStyle = {
  flexDirection: "column",
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "center",
};

const infoStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "10px",
};

export default Header;
