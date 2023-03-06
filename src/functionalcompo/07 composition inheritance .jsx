function SplitPane(props) {
  return (
    <div className="SplitPane">
      <div className="SplitPane-left">
        <h1> {props.left}</h1>
      </div>
      <div className="SplitPane-right">
        <h1>{props.right} </h1>
      </div>
    </div>
  );
}

function Inheritancefunc() {
  return (
    <SplitPane
      left={
        "Parag"
        // import any component
        //   <Contacts />
      }
      right={
        "Gohil"
        //   <Chat />
      }
    />
  );
}
export default Inheritancefunc;
