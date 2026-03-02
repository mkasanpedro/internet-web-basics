import './App.css'

function App() {
  const showAlert = () => alert('Button clicked successfully!');

  return (
    <>
      <header className="header">
        <h1>Welcome to My Web Page</h1>
        <p>FrontEnd-Lab</p>
      </header>
      <main className="container">
        <section className="card">
          <h2>About This Lab</h2>
          <p>This is my front-end laboratory activity.</p>
          <button onClick={showAlert}>Click Me</button>
        </section>
        <section className="card highlight">
          <h2>Student Information</h2>
          <p>Name: <strong>KERSTEIN ASHBY SAN PEDRO</strong></p>
          <p>Program: <strong>COMPUTER ENGINEERING</strong></p>
        </section>
      </main>
      <footer className="footer"><p>© 2026 KEI</p></footer>
    </>
  )
}
export default App