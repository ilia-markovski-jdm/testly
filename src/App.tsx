function App() {

  return (
    <div className="max-w-7xl px-5 mx-auto">
      <h1>{import.meta.env.VITE_ENVIRONMENT}</h1>
      <h2>This is {import.meta.env.VITE_TEST}</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero perspiciatis, quos fugit rerum ut vero ratione delectus quas eaque esse deleniti et! Necessitatibus corporis iste eius veniam voluptates, eaque minus?</p>
    </div>
  )
}

export default App
