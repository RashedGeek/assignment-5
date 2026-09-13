#Dev Stack
It's a React based web application that helps developers explore different technologies and build their own development stack. Users can browse technologies, see their category, difficulty, rating, and add the technologies they want to their personal stack.


##Technologies Used in this Project
1.React
2.Typescript
3.Tailwind CSS
4.React Toastify
5.HTML
6.CSS
7.JavaScript
8.JSON

##Features of this Project

1.Users can browse different frontend, backend, database, and development tools with their descriptions, ratings, difficulty levels, and categories.


2.Users can add technologies to their personal stack and remove individual technologies whenever they want.


3.The website works across desktop, tablet, and mobile screen sizes with a responsive navigation bar and technology card layout.

#########
1.What is JSX?
-JSX is a syntax that lets us write HTML-like code inside JavaScript or TypeScript. React uses JSX because it makes it easier to create and understand the UI components.


2.What is the difference between props and state?
-Props are data passed from a parent component to a child component. State is data that belongs to a component and can change when the user interacts with the application.


3.What does the `useState` hook do, and where did you use it in this project?
-`useState` lets us store and update data inside a React component. I used it in `App.tsx` to store the technologies, loading state, and the technologies selected by the user.


4.What does the `useEffect` hook do, and why did you need it to load the JSON data?
-`useEffect` is used to perform something after a component renders. I used it in `App.tsx` to fetch the technology data from the `technologies.json` file when the application loads.


5.Why does every item in a `.map()` list need a unique `key` prop?
-React uses the `key` to identify each item in a list. A unique key helps React know which item has changed, been added, or removed.


6.What is conditional rendering? Show one place you used it.
-Conditional rendering means showing different UI depending on a condition.


7.How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
-In React, data usually moves from parent → child using props.
But child doesn't directly change the parent's state.
A child sends data to a parent by calling a function passed from the parent as a prop.
The parent provides the function, and the child calls it with the data it wants to send back.