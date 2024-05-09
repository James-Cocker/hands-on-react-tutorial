import React, {useState} from 'react';

function ExampleForm() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [agreedToTerms, setAgreedToTerms] = React.useState(false);

  const handleSubmit = (event:any) => {
    event.preventDefault();
    console.log(username, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      <input
        type="password"
        name="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <input
        type="checkbox"
        name="agreedToTerms"
        checked={agreedToTerms}
        onChange={(e) => setAgreedToTerms(e.target.checked)}
      />
      I agree to the terms and conditions.
      <button type="submit">Sign In</button>
    </form>
  );
}

export default ExampleForm;