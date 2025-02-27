const Button = (props) => {
    const { name } = props;
    return <button className="btn">{name}</button>;
  };
  
  const element = (
    <div className="Main-container">
      <h1 className="Heading">Social Buttons</h1>
      <div className="subcontainer">
        <Button name="Like" />
        <Button name="Comment" />
        <Button name="Share" />
      </div>
    </div>
  );
  
  ReactDOM.render(element, document.getElementById("root"));
  