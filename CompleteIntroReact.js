const render = () => {
    document.getElementById('mountNode').innerHTML = `
      <div>
        Hello HTML
        <input />
        <pre>${new Date().toLocaleTimeString()}</pre>
      </div>
    `;
  
    ReactDOM.render(
      React.createElement(
        'div',
        null,
        'Hello React',
        React.createElement('input', null),
        React.createElement('pre', null, new Date().toLocaleTimeString())
      ),
      document.getElementById('mountNode2')
    );
  };
  
  setInterval(render, 1000);

  function Button (props) {
    // Returns a DOM/React element here. For example:
    return <button type="submit">{props.label}</button>;
  }
  
  // To render a Button element in the browser
  ReactDOM.render(<Button label="Save" />, mountNode);

  //Expressions in JSX

  const RandomValue = () => (
    <div>
      { Math.floor(Math.random() * 100) }
    </div>
  );

  ReactDOM.render(<RandomValue />, mountNode);

  const ErrorDisplay = ({ message }) => (
    <div style={ { color:'red', backgroundColor:'yellow' } }>
      {message}
    </div>
  );
  
  ReactDOM.render(
    <ErrorDisplay
      message="These aren't the droids you're looking for"
    />,
    mountNode
  );

  // Applying conditional styles to elements

  class ConditionalStyle extends React.Component {
    render() {
      return (
        <div style={{ color: Math.random() < 0.5 ? 'green': 'red' }}>
          How do you like this?
        </div>
      );
    }
  }
  
  ReactDOM.render(
    <ConditionalStyle />,
    mountNode,
  );

  //Creating components using classes

  class Button extends React.Component {
    render() {
      return (
        <button>{this.props.label}</button>
      );
    }
  }
  
  // Use it (same syntax)
  ReactDOM.render(<Button label="Save" />, mountNode);

  // Hooks

  const Button = () => {
    let count = 0;
  
    return (
      <button>{count}</button>
    );
  };
  
  ReactDOM.render(<Button />, mountNode);

  // Responding to user events

  const Button = () => {
    let count = 0;
  
    return (
      <button onClick={() => console.log('Button clicked')}>
        {count}
      </button>
    );
  };
  
  ReactDOM.render(<Button />, mountNode);

  // Reading and updating state

  const Button = () => {
    const [count, setCount] = useState(0);
  
    return (
      <button onClick={() => setCount(count + 1)}>
        {count}
      </button>
    );
  };
  
  ReactDOM.render(<Button />, mountNode);

  // Rendering sibling components

  ReactDOM.render(
    <>
      <Button />
      <Display />
    </>,
    mountNode
  );

  const CountManager = () => {
    return (
      <>
        <Button />
        <Display />
      </>
    );
  };
  
  ReactDOM.render(<CountManager />, mountNode);

  const Button = () => {
    return (
      <button onClick={() => console.log('TODO: Increment counter')}>
        +1
      </button>
    );
  };
  
  const CountManager = () => {
    const [count, setCount] = useState(0);
  
    return (
      <>
        <Button />
        <Display content={count} />
      </>
    );
  };
  
  ReactDOM.render(<CountManager />, mountNode);

  const Button = ({ clickAction }) => {
    return (
      <button onClick={clickAction}>
        +1
      </button>
    );
  };
  
  const Display = ({ content }) => (
    <pre>{content}</pre>
  );
  
  const CountManager = () => {
    const [count, setCount] = useState(0);
  
    const incrementCounter = () =>
      setCount(count + 1);
  
    return (
      <div>
        <Button clickAction={incrementCounter} />
        <Display content={count} />
      </div>
    );
  }
  
  ReactDOM.render(<CountManager />, mountNode);

  // Making components reusable

  const Button = ({ clickValue, clickAction }) => {
    return (
      <button onClick={() => clickAction(clickValue)}>
        +{clickValue}
      </button>
    );
  };
  
  const Display = ({ content }) => (
    <pre>{content}</pre>
  );
  
  const CountManager = () => {
    const [count, setCount] = useState(0);
  
    const incrementCounter = (increment) =>
      setCount(count + increment);
  
    return (
      <div>
        <Button clickAction={incrementCounter} clickValue={1} />
        <Button clickAction={incrementCounter} clickValue={5} />
        <Button clickAction={incrementCounter} clickValue={10} />
        <Display content={count} />
      </div>
    );
  }
  
  ReactDOM.render(<CountManager />, mountNode);

  // Accepting input from the user

  const CharacterCounter = () => {
    const [count, setCount] = useState(0);
    
    const handleChange = (event) => {
      const element = event.target;
      setCount(element.value.length);
    };
    
    return (
      <div>
        <textarea cols={80} rows={10} onChange={handleChange} />
        <div>Count: {count}</div>
      </div>
    );
  };
  
  ReactDOM.render(<CharacterCounter />, mountNode);

  const CharacterCounter = () => {
    const [inputValue, setInputValue] = useState('');
    
    const handleChange = (event) => {
      const element = event.target;
      setInputValue(element.value);
    };
    
    return (
      <div>
        <textarea cols={80} rows={10} value={inputValue} onChange={handleChange} />
        <div>Count: {inputValue.length}</div>
      </div>
    );
  };
  
  ReactDOM.render(<CharacterCounter />, mountNode);

  
