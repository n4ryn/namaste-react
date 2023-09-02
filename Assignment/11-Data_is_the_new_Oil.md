# _Chapter 11 - Data is the new Oil_

## 1. What is prop drilling?

- `Prop drilling` is the process of passing data from one component via several interconnected components to the component that needs it.
- Prop drilling results in long and unclean code, and also there are greater possibilities for mistakes like renaming the props midway by mistake, refactoring some data's structure, props being forwarded more often than is necessary, using default props unfairly or using default props unfairly or insufficiently.
- By enclosing your state and data in a context provider, the Context API essentially allows you to transmit your state and data to numerous components. Afterward, it uses its value attribute to send this state to the context provider.

```js
<ParentComponent data={data}>
  <ChildComponent data={data}>
    <SubChildComponent data={data} />
  </ChildComponent>
</ParentComponent>
```

**More Details**

- Component composition is the process of putting together components like bricks to create a final product.
- There are two kinds of component composition :
  - container components and
  - specialized components

## 2. What is lifting the state up?

When we want to pass some props from child component to parent or its siblings, we can use `lifting up state` technique. It can be thought as if the control is handed over to the parent and let the child modify the data through the function that is passed to child as props. There is a `single source of truth` maintained by the parent.

### Example :

1. `Child -> Parent` : I have implemented this in my app for passing marked favorite restaurant card data to Body Component. Check code for implementation & coding-assignment.md for explanation.
2. `Child -> Siblings` : I have implemented this in my app for displaying FAQ sections under Help.js for letting child know about the state of its siblings by lifting up the state to the closest ancestor parent.

## 3. What is Context Provider and Context Consumer?

`React Context API` provides a way to pass data through multiple nested levels of components without having to manually pass that data to each level. It is a way of global state management.

Three steps of working with Context :

1.  Create the Context: Create using `createContext()` & Export context from a file (in utils folder)
2.  Provide Context: Wrap the required components with a `context provider`
3.  Use the Context: Import `useContext` hook & the created context and create variable to store and use this context

`Context Provider`

- Every Context object comes with a Provider.
- Its a React component that allows consuming components to subscribe to context changes.
- The Provider component accepts a value prop to be passed to consuming components that are descendants of this Provider. One Provider can be connected to many consumers. Providers can be nested to override values deeper within the tree.

```js
return (
  <UserContext.Provider value={{ user: user }}>
    <Head />
    <Outlet />
    <Footer />
  </UserContext.Provider>
);
```

`Context Consumer`

- Before `useContext` existed, there was an older way to read context : `Context.Consumer`
  ```javascript
  const User = () => {
    // 🟡 Legacy way (not recommended)
    return (
      <UserContext.Consumer>
        {({ user }) => <h1>{user}</h1>}
      </UserContext.Consumer>
    );
  };
  ```

## 4 . If you don’t pass a value to the provider does it take the default value?

- No, default value is not passed as value to components. When we don't pass a value to the provider then React throws an error in that case.
- If we don't need to pass value then value={undefined} must be mentioned in provider.
- The `defaultValue` argument is _only_ used when a component does not have a matching Provider above it in the tree.
