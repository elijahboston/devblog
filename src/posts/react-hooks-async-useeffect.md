---
path: "/posts/react-hooks-async-useeffect"
date: "2019-08-27"
title: "Async Functions with useEffect"
---
useEffect replaces `componentDidMount` and `componentWillUpdate` to handle any sort of events that occur *after* the component is mounted. At first I was confused a little by this, because the signature of useEffect is:
```javascript
useEffect(() => { ... })
```
So I wondered, how would we use async functions in there? My first instinct was to just make the inner function async:
```javascript
// INCORRECT
useEffect(async () => {
 // ...
 await something;
})
```

React will yell at you if you try this though. See, `useEffect` *must be a synchronous function*, but there's nothing stopping us from *creating an async function inside of it*.

```javascript
// Almost there...
useEffect(() => {
 const loadData = async () => {
   await fetchData();
 }
})
```
Cool. I'm sure you see the problem though. How can we await the inner `loadData` function? Easy: we don't.

```javascript
// CORRECT
useEffect(() => {
 const loadData = async () => {
   await fetchData();
 }

 // Look Mom! No await!
 loadData();
})
```

By calling `loadData` but *not* awaiting it, we allow the outer `useEffect` function to finish while `loadData` is still executing. The one final missing element, is that `loadData` needs to update the component state itself. We can do this by using the `useState` hook:

```javascript
const [data, setData] = useState();

useEffect(() => {
 const loadData = async () => {
   const data = await fetchData();

   setData(data);
 }

 // Look Mom! No await!
 loadData();
})
```

Now we can load data asynchronously without blocking our thread. Another way to think about it, is that `useEffect` has no concern with `loadData` finishing, because `loadData` will update the state on its own, triggering a re-render with our data. All set? Well kinda. Depending on your specific situation, there are a few more things you should consider:

1. Handling error responses.
2. Preventing data from being fetched again if it's already loaded.
3. When/how to mark data as "stale" so fresh data can be fetched.

To see an advanced use of `useEffect` check out my post on [Using Generators with React](/using-generators-with-react)