// function JavaScriptFramework(props){
//     const {frameworkName , sim } = props;
//     return <div>Hallo {frameworkName}{sim.repeat(3)}</div>;
// }
// export default JavaScriptFramework;


  
  function App() {
    function Welcome(props) {
        return <h1>Hello, {props.name}</h1>;
      }
    return (
      <div>
        <Welcome name="Sara" />
        <Welcome name="Cahal" />
        <Welcome name="Edite" />
      </div>
    );
  }

  export default App;
