---
path: "/posts/using-generators-with-react"
date: "2019-08-27"
title: "Using Generators with React"
summary: "Learn how generators can simplify situations where you need to get data in 'chunks'."
---
Generators allow you to pause the execution of a function and resume it later. This is incredibly useful when you *don't* want to iterate over an array all at once, and the behavior pairs nicely with React giving us the capability to control *what's* render and *when*.

The biggest benefit to using generators becomes clear when you find yourself needing to grab multiples of something.

For our example, we'll use the [Dog API](https://dog.ceo/dog-api/) to get a list of URL's. Our goal is to display 5 images at a time each time the user clicks a button.

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

For now, all you need to know is that we're going to create a function that will only return 1 item from our array each time it's called.

```javascript
const apiUrl = "https://dog.ceo/api/breed/hound/images";

let urls = [];

function* getUrl() {
  for (let url of urls) {
    // We pause the loop to return a result
    yield { url };
  }
}

// Initialize the generator
const urlGenerator = getUrl();
```


## The App

We'll setup a simple app with a local state handler to store an array of items we want displayed.

```javascript
function App() {
  const [displayedData, setDisplayedData] = useState([]);

  useEffect(() => { ... });

  const handleClick = () => { ... };

  return (
    <div className="App">
      <h1>Dog Fetcher</h1>
      <p>
        Fetch some images from the{" "}
        <a href="https://dog.ceo/dog-api/">Dog API</a>
      </p>
      <button onClick={handleClick}>BARK!</button>
      <ul>
        {displayedData.map(data => (
          <li key={data.url}>
            <img alt="a pupper" src={data.url} />
          </li>
        ))}
      </ul>
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

Now when the component loads we'll set our data on our global variable `urls`.

The final piece is where the magic happens. We need to hook up `handleClick` so that each time it's called we update the state of `displayedData` with the next 5 items in the array.

Before we do that, take a second and consider how you might solve this situation conventionally. More likely than not you'd need to setup some way to keep track of the current position in the array, and get new data by slicing the `urls` array and adjusting the range and offset each time.

Alternatively you might use `shift()` or `pop()`, but those are destructive and will change our `url` array. Supposing want to keep that data around for other purposes elsewhere in our app, that wouldn't be desireable.

Now, we know that each time we call `urlGenerator.next()` we'll get a new value, so really we just need to call that function multiple times.

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

https://codesandbox.io/s/dog-fetcher-phgir