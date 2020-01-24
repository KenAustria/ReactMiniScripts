import React from 'react';
import './App.css';
import ClockWidget from './components/clockWidget';
import TabsWidget from './components/tabsWidget';

const panes = [
	{title: "one", content: "hey"},
	{title: "two", content: "ho"},
	{title: "three", content: "let's go"}
];

function App() {
  return (
    <div className="App">
			<ClockWidget />
			<div className="interactive">
				<TabsWidget panes={panes} />
			</div>
    </div>
  );
}

export default App;