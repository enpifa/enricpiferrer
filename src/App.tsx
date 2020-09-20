import React from 'react';
import './App.css';
import TopBar from './components/TopBar/TopBar';
import Content from './components/Content/Content';

function App() {
  return (
    <div className="App">
      <TopBar />
      <Content />
      {/* <header className="App-header">
        <h1>Welcome, visitor</h1>
        <h2>This is Enric's website</h2>
        <h3>Sometimes known as Pifa</h3>
        <p>This website is under construction. Please wait patiently until Enric find some time to work on its implementation. Meanwhile, you might want to check out my <i>LinkedIn</i> account <a href="https://www.linkedin.com/in/enric-piferrer-torres-47503447/">here</a>.</p>
        <p>You can even check my fiance's <a href="http://foodfirstfuel.com">website</a>!</p>
      </header> */}
    </div>
  );
}

export default App;
