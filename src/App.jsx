function App(){
  return(
    <div>
      <h1>first component</h1>
      <Fruit/>
      <Nitin/>
    </div>
  )
}

function Fruit()
{
  return (
    <h2>nitin rana second component</h2>
  )
}

const Nitin=()=>{
  return(
    <h3>Rana nitin the thired component</h3>
  )

}

export default App