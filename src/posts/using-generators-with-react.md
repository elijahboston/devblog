---
path: "/posts/using-generators-with-react"
date: "2019-08-27"
title: "Using Generators with React"
---
Similar to how a bookmark lets you save you place in a book and pick up from where you left off, generators are functions that can pause and resume their execution. In the context of React, this makes them really useful for situations where we want to iterate over API data in chunks.

For our example, we'll use the [Dog API](https://dog.ceo/dog-api/) to get a large list of image URL's, and then display them 5 at a time.

## Setup

A Javascript generator follows the pattern:
```javascript
function * myGeneratorName() {
    // code before yield
    yield someData;
    // code after yield
}
```

There's a great article [here](https://codeburst.io/understanding-generators-in-es6-javascript-with-examples-6728834016d5) that explains generators in much better detail. 

For now, all you need to know is that we're going to create a generator function that will only return 1 item from our array each time it's called.

```javascript
function* getUrl(urls) {
  for (let url of urls) {
    // We pause the loop to return a result
    yield { url };
  }

  // When we reach the end of the array we
  // just return an empty object
  return {};
}
```


## The App

We'll setup a simple app consisting of two components. The main App component handles fetching API data and setting it in state, as well as initializing the generator with the array of URL's.

```javascript
function App() {
  const [urls, setUrls] = useState([]);
  const urlGenerator = getUrls(urls);

  // Fetch API data and save to `urls`
  useEffect(() => { ... });

  return (
    <div className="App">
      <h1>Dog Fetcher</h1>
      <p>
        Fetch some images from the{" "}
        <a href="https://dog.ceo/dog-api/">Dog API</a>
      </p>

      ...

    </div>
  );
}
```

If you've looked at my previous post on [asynchronous data fetching with useEffect](/react-hooks-async-useeffect), then you'll see that we need to fetch our API data within `useEffect`. So lets do that now by changing `useEffect` to:

```javascript
  useEffect(() => {
    const loadData = async () => {
      const resp = await axios.get(apiUrl);

      if (resp.data) {
        urls = resp.data.message;
      }
    };

    // Note: No "await"!
    if (!urls.length) {
      loadData();
    }
  });
```

Next is our core `FetchDog` component that will use the generator and handle displaying the images 5 at a time. We stub that out like so:

```javascript
const FetchDog = ({ urlGenerator }) => {
  const [displayedData, setDisplayedData] = useState([]);

  const handleClick = () => {
    const data = [ ... ];

    setDisplayedData(data);
  };

  return (
    <React.Fragment>
      <button onClick={handleClick}>BARK!</button>
      <ul>
        {displayedData.map(data => (
          <li key={data.url}>
            <img alt="a pupper" src={data.url} />
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
};
```

This is about where we'd be if we weren't using generators, except we'd probably pass in the array of URL's, or the subset of URL's we want to display. Then we'd need to setup some way to keep track of the current position in the array, and get new data by slicing the `urls` array and adjusting the range and offset each time.

Alternatively you might use `shift()` or `pop()`, but those are destructive and will change our `url` array. Supposing want to keep that data around for other purposes elsewhere in our app, that wouldn't be desireable.

Back to generators: we know that each time we call `urlGenerator.next()` we'll get a new value, so really we just need to call that function multiple times.

So with that out of the way, here's the `handleClick` function using a generator:

```javascript
  const handleClick = () => {
    const data = [
      urlGenerator.next().value,
      urlGenerator.next().value,
      urlGenerator.next().value,
      urlGenerator.next().value,
      urlGenerator.next().value
    ];

    setDisplayedData(data);
  };
```

Each time we call the `next()` method we get the next iteration of the `for` loop within `getUrl`, but since the generator maintains its own state, we don't need to keep track of that ourselves. Nice right?

Putting it all together:

https://codesandbox.io/s/fetch-dogs-phgir