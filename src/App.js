import logo from './logo.svg';
import './App.css';

function App() {

  const handleSumit = (e) => {
    e.preventDefault()

    const name = e.target.name.value;
    const address = e.target.address.value;
    const email = e.target.email.value;

    const contact = [name, address, email]
    console.log(contact)

    const url = `http://localhost:5000/api/insert`;

    fetch(url, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(contact)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
      })

  }
  return (
    <div className="App">

      <form onSubmit={handleSumit}>
        <input type="text" name='name' placeholder='name' />
        <input type="text" name='email' placeholder='email' />
        <input type="text" name='address' placeholder='address' />

        <input type="submit" value="submit" />
      </form>


    </div>
  );
}

export default App;
