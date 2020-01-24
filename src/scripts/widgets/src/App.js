import React from 'react';
import './App.css';
import ClockWidget from './components/clockWidget';
import TabsWidget from './components/tabsWidget';
import AutocompleteWidget from './components/autocompleteWidget';

const names = [
	"Homer",
	"Marge",
	"Bart",
	"Lisa",
	"Maggie"
]

const panes = [
	{title: "one", content: "hey"},
	{title: "two", content: "ho"},
	{title: "three", content: "let's go"}
];

function App() {
  return (
    <div className="App">
			<ClockWidget />
			<TabsWidget panes={panes} />
			<br />
			<br />
			<AutocompleteWidget names={names} />
    </div>
  );
}

export default App;