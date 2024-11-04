function App() {

  return (
    <div className="max-w-7xl px-5 mx-auto">
      <h1>{import.meta.env.VITE_ENVIRONMENT}</h1>
      <h2>This is {import.meta.env.VITE_TEST}</h2>
      <p>Test 4</p>
      <p>Description from main</p>
      <div>
        <strong>{import.meta.env.VITE_ENV}</strong>
      </div>
    </div>
  )
}

export default App
