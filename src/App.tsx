import React, { useState, useEffect } from "react";
import { useMsal } from "@azure/msal-react";
import { Button } from "@rneui/base";

function App() {
  const { instance } = useMsal();

  function login() {
    instance.loginRedirect().catch((err) => {
      console.log("log in error caught");
      console.log(err);
    });
  }

  function signout() {
    instance.logout().catch((err) => {
      console.log("log out error caught");
      console.log(err);
    });
  }

  useEffect(() => {
    instance.initialize().then(login);
  }, []);

  const [content, setContent] = useState<{ label: string; content: string }[]>([
    { label: "", content: "" },
  ]);

  const addFields = () => {
    let newField = { label: "", content: "" };
    setContent([...content, newField]);
  };

  const removeField = (index: number) => {
    let updatedContent = [...content];
    updatedContent.splice(index, 1);
    setContent(updatedContent);
  };

  const handleFormChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    let data = [...content];
    data[index] = {
      ...data[index],
      [event.target.name]: event.target.value,
    };
    setContent(data);
  };

  const submit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log(content);
  };
  return (
    <div>
      <header className="App-header">
        <button onClick={login}>click me</button>
        <button onClick={signout}>sign out</button>
        <hr />
        <form onSubmit={submit}>
          {content.map((input, index) => {
            return (
              <div key={index}>
                <input
                  name="label"
                  placeholder="Label"
                  value={input.label}
                  onChange={(event) => handleFormChange(index, event)}
                />
                <input
                  name="content"
                  placeholder="Content"
                  value={input.content}
                  onChange={(event) => handleFormChange(index, event)}
                />
                <button type="button" onClick={() => removeField(index)}>
                  Remove
                </button>
              </div>
            );
          })}
        </form>
        <button type="button" onClick={addFields}>
          Add Fields
        </button>
        <button onClick={submit}> Submit</button>
        <div></div>
      </header>
    </div>
  );
}

export default App;
