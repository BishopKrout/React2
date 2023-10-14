### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?
It is a library in React used for navigating between different components or pages in a single page app, ensuring that the app behaves properly to URL changes. 
- What is a single page application?
It is a web app that interacts with the user by dynamically rewriting the current page, rather than loading entire new pages from the server, which causes a more fluid experience. 
- What are some differences between client side and server side routing?
Client side happens in the browser, updates the URL and dispalys different components without reloading the page, which makes it a fast and smooth experience. While server side involves requests to the server and responds with a new page, causing a refresh which makes it feel slower.
- What are two ways of handling redirects with React Router? When would you use each?
`<Redirect />` - automatically navigates to a different route when a condition is met. Use when you want immediate redirection based on specific logs, like user authentication. 
`useHistory` - Progammatically navigates to a diff route by pushing a new entry onto the history stack. Use for conditional or event-triggered redirection, like after a form submission. 
- What are two different ways to handle page-not-found user experiences using React Router? 
`<Route />` - without a path prop at the end of your routes. It will render a specified 'Not Found' component when no other routes match. 
Example: `<Route component={NotFoundComponent} />`
Using a wildcard `*` in the `<Route />` path - Define a route with path prop set to `*` which will catch all paths that havent matched any precedeing routes, displaying a "Not FOund" page. 
- How do you grab URL parameters from within a component using React Router?
In your route definition, include parameters within the path, enclosed in `:`, Example: `<Route path ="/user/:id" component={UserComponent} />`. You can also use the useParams hook. 
- What is context in React? When would you use it?
COntext in react allows for thesharing of values like themes or authentication status across various components without passing props manually at every level, facilitating global state management, theme configuration. It makes the code more readable by avoiding prop drilling. 
- Describe some differences between class-based components and function
  components in React.
Class based comps have lifecycle methods, require the `render` method to return JSX, and manage local state suing `this.state`. Function comps are simpler, can use hooks for state and lifecycle features, and return JSX directly, making them more concise and easier to read/write. 
- What are some of the problems that hooks were designed to solve?
1. Reusing Stateful Logic - Making it easier to reuse stateful logic between comps.
2. Complex components - Simplifying complex comps by splitting them into smaller functions based on related fucntionality. 
3. Classes - Avoiding confusion of `this` keyword and making the comp logic easier to understand and manage. 