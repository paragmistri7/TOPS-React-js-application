
export const QueApi = [
    {
        id: 1,
        question: "What is JSX?",
        answer : "JSX is a syntax extension of JavaScript. It is used with React to describe what the user interface should look like. By using JSX, we can write HTML structures in the same file that contains JavaScript code."
    },
    {
        id: 2,
        question: "What is an event in React?",
        answer : "An event is an action that a user or system may trigger, such as pressing a key, a mouse click, etc.React events are named using camelCase, rather than lowercase in HTML. With JSX, you pass a function as the event handler, rather than a string in HTML"
    },
    {
        id: 3,
        question: "What are synthetic events in React?",
        answer : "Synthetic events combine the response of different browser's native events into one API, ensuring that the events are consistent across different browsers. The application is consistent regardless of the browser it is running in. Here, preventDefault is a synthetic event."
    },
    {
        id: 4,
        question: "What are the components in React",
        answer : "Components are the building blocks of any React application, and a single app usually consists of multiple components. A component is essentially a piece of the user interface. It splits the user interface into independent, reusable parts that can be processed separately."
    },
    {
        id: 5,
        question: "What is the use of render() in React",
        answer : "It is required for each component to have a render() function. This function returns the HTML, which is to be displayed in the component. If you need to render more than one element, all of the elements must be inside one parent tag like <div>, <form>."
    }
]