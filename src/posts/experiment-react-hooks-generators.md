---
path: "/experiment-react-hooks-with-generators"
date: "2019-05-04"
title: "Experiment: Using React Hooks with Generators"
summary: "Sometimes when I encounter a concept that's hard for me to wrap my head around I find it helps to try using the concept in an actual scenario. For this article we'll learn a bit about ES6 generators by building a very simple React app to demonstrate their behavior."
---
Generators allow you to pause the execution of a function and resume it later. This is incredibly useful when you *don't* want to iterate over an array all at once, and the behavior pairs nicely with React giving us the capability to control *what's* render and *when*.

It's a little hard to conceptualize without seeing it in action, so I decided to build a really simple React app to demonstrate how it works.

**Disclaimer:** You can do everything we're about to do with just the `useState` hook, and it'll be much easier. This is just very simple demonstration of genrators using React to provide visual feedback.

## Data Source and Components
Suppose that being the clever developers we are, we fetch all of our data up-front, but we only want to display one item at a time.

To start off with we'll use a simple variable to act as our "data source", and setup a few components to handle displaying the label for each item.

```javascript
// app.js
const allResults = [
  { label: "first result" },
  { label: "second result" },
  { label: "third result" }
];

// Setup some basic components for our list
const List = ({ items }) => items.map(item => <ListItem item={item} />);

const ListItem = ({ item }) => <li>{item.label}</li>;
```

## Setup the Generator
A Javascript generator follows the pattern:
```javascript
function * myGeneratorName() {
    // code before yield
    yield someData;
    // code after yield
}
```
Doesn't look much different than any other function does it? So what's different? Well the `*` denotes that this function is a generator, and that enables us to use `yield`. Calling `yield` pauses the function and lets us return data.

There's a great article [here](https://codeburst.io/understanding-generators-in-es6-javascript-with-examples-6728834016d5) that explains generators in much better detail. For now, all you need to know is that we're going to create a function that will only return 1 item from our array each time it's called.

```javascript
// app.js
function* getNextResult() {
    for (let result of allResults) {
        // pause the loop and return "result"
        yield result;
    }
}

const resultGenerator = getNextResult();
```

Not so bad eh? `getNextResult` works just like a normal `for` loop, except when `yield` is called we return a value and pause the loop. The next time we call `getNextResult` we resume the loop and get the *next* value from `allResults`.

Finally, before we can actually use the generator, we create an instance of it.

## The App

In order to get results from the generator we'd need to use its `next()` method. We setup a simple app to give us a button we can click to call this method.

```javascript
// app.js
function App() {
  // We use local state to store results that are
  // being displayed
  const [results, setResults] = useState([]);

  function handleClick() {
    // do stuff on click
    
  }

  return (
    <div className="App">
      <h1>React Hooks with Generators</h1>
      <button onClick={handleClick}>Get Next Result</button>
      <List items={results} />
    </div>
  );
}
```
Almost there. Now we have an app that's setup to list the contents of `result`, which is using the `useState` hook so we can maintain local component state between renders.

Our button is setup to call a function, and that's where it gets a little fuzzy. See we can't just call `resultGenerator` over and over, we need to use its `next()` method to let the generator function know it should start running again.

We can pair this with React's `useState` hook to update the local state each time `resultGenerator` gives us a result.

Applying what we know try using the following for the `handleClick` function:

```javascript
function handleClick() {
    // Get the next result from the generator
    const result = resultGenerator.next();
    console.log(result)

    setResults([...results, result]);
}
```
Uh oh. We have an error. Checking the console you should see the reason why. Unlike a normal function, `resultGenerator.next()` wraps the return value of `getNextResult()`, so our actual return data is under the `value` key.

Updating our code:
```javascript
function handleClick() {
    // Get the next result from the generator
    const result = resultGenerator.next().value;

    setResults([...results, result]);
}
```
Sweet! You should see elements appear in order after each click of the button. One problem: If you click more than 3 times, bad things happen.

There's a pretty simple fix though. Think of what would happen if the `for` loop inside of `getNextResult` was a normal non-generator loop. Once it reached the end of the array what would happen?

It would just be done. The function would finish and any code afterwards would complete. This means all we really need to do is make sure we got *something* from our generator.

This gives us the final `handleClick` function of:

```javascript
function handleClick() {
    // Get the next result from the generator
    const result = resultGenerator.next().value;

    if (result) {
        setResults([...results, result]);
    }
}
```

Now when you click the button more than 3 times, it'll just stop trying to update the state.

[See the completed project here](https://codesandbox.io/s/iterative-loading-with-generator-5bc45) or via Codesandbox below.

## Code Sandbox

https://codesandbox.io/s/iterative-loading-with-generator-5bc45
