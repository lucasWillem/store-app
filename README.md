# Store App

## Getting Started with the Front-end

To run the app locally, follow these steps:

1. Clone the repository by git clone command

2. Install Node.js version 20.15.0

3. Install yarn:

```bash
npm install -g yarn
```

4. Install dependencies:

```bash
cd store-app; yarn install
```

5. Start the development server:

```bash
yarn dev
```

6. Open your browser and navigate to http://localhost:5173 to see the app

7. Sign up with any random email address to register, and then log in to the app.

## Technologies and Packages Used

Store App leverages a variety of technologies and packages to provide a robust, user-friendly experience. Here's an overview of the key technologies and important packages used in the development of Fe-test:

- **Vite**: Chosen for its blazing-fast development environment, Vite serves as the build tool for the Store App. Unlike traditional tools that rely on bundling for development, Vite leverages modern browser capabilities to serve modules via native ES Module imports during development. This approach significantly speeds up the server start time and module loading, offering an almost instant feedback loop for developers. For production, Vite produces highly optimized builds with efficient bundling and tree-shaking capabilities. Its simplicity in setup and configuration, combined with powerful features like Hot Module Replacement (HMR), makes Vite an excellent choice for modern web development, enhancing both developer experience and application performance.

- **Material-UI**: A comprehensive UI library for React that implements Google's Material Design. Material-UI provides a wide range of customizable components, allowing for the creation of a modern and responsive user interface. The library offers extensive theming capabilities, enabling developers to tailor the appearance of the components to match the application's design aesthetic. By leveraging Material-UI, the app benefits from a cohesive look and feel, enhanced user experience, and streamlined development process.

- **Easy Peasy**: A robust, opinionated, but incredibly easy to use state management library for React. The app leverages Easy Peasy for its state management needs, providing a straightforward and efficient way to manage global state. The library's model-based approach to state management aligns well with the application's architecture, allowing for a clean and organized codebase. Actions and selectors provided by Easy Peasy are used throughout the application to interact with the state, ensuring a consistent and predictable state management flow. Easy peasy also allows for state persistence.

- **React Hook Form**: This library simplifies form management in React applications, offering an efficient and scalable way to handle form inputs and validations. React Hook Form reduces the amount of boilerplate code needed for creating forms, improving performance and developer productivity. It integrates seamlessly with the application, enhancing the form handling processes with its easy-to-use API and minimal re-renders.

- **React Query**: For server state management, React Query is utilized. It provides powerful tools for fetching, caching, and updating asynchronous data in React applications. This library helps in efficiently managing server data with automatic refetching, caching, and synchronization, ensuring that the UI is always up-to-date with the server state. React Query's simple and declarative API makes server state management straightforward and less error-prone.

- **Cypress**: As a part of our testing strategy, Cypress is used for end-to-end testing. This testing framework allows us to write tests that mimic real user interactions, ensuring that the application behaves as expected in a real-world scenario. Cypress's easy setup, fast test execution, and debugging capabilities make it an invaluable tool for maintaining the quality and reliability of the application.

- **React Router DOM**: Utilized for implementing dynamic routing in the application, React Router DOM enables the creation of protected routes that are accessible only to authenticated users. This package plays a crucial role in the app's navigation structure, allowing for the seamless transition between public and private sections of the app based on the user's authentication status.

- **Strapi**: Chosen for its flexibility and ease of use, Strapi serves as the headless CMS for managing the application's user authentication. It provides a powerful and developer-friendly API for user authentication, which is integrated into the Store App to secure access to certain parts of the application. Strapi's role-based access control (RBAC) capabilities ensure that only authorized users can access specific functionalities, enhancing the app's security and user management.


## Authentication in the Store App

The Store app utilizes a comprehensive authentication management system to guarantee secure access to user accounts and protect sensitive information. This system integrates React Router DOM for managing private and public routes, Easy Peasy to store and persist the user
in session storage, and Strapi as the headless CMS for user management. Additionally, a JWT is available for future authorization purposes.  

## Cypress Testing in the Store App

The Store app employs Cypress for E2E and component testing:

- **E2E Testing**: Tests simulate key user actions such as registration and login to ensure the app's reliability.

- **Component Testing**: Isolated testing on components verifies functionality and facilitates prompt issue resolution.

While I recognize the value of Test-Driven Development (TDD), time constraints prevented its full implementation. However, a few demo tests for both E2E and component testing have been added to demonstrate the approach.

Additionally, GitHub Actions is utilized for continuous integration, running these tests before merging PRs into the dev or master branches.

## Run Automated Tests Locally

- **yarn cypress:run:component**: This command will run component tests and unit tests for hand evaluators.

- **yarn cypress:run:e2e**: This command runs end-to-end (e2e) tests.

- **yarn cypress:open**: This command opens cypress and allow the user to manually run the existing e2e or component tests.


## Environment Variables

I've added and implemented development environment variables to streamline the app's configuration process and also prepared production environment variables for future use. Recognizing that pushing `.env` files to the repository is not typically recommended due to security concerns, I've decided to include them to simplify setup for reviewers. This approach ensures that the app can be easily configured and run without additional setup steps, prioritizing ease of review and evaluation.

## Git Flow Methodology

In developing the Store app, I've adopted the Git Flow methodology to streamline version control and ensure a structured development process. This approach allowed me to manage the project's complexity efficiently, facilitating parallel development, feature integration, bug fixes, and release management.

- **Branch Structure**: The repository features two main branches: `dev` for ongoing development and `main` for stable production releases. The `dev` branch serves as the base for feature development and bug fixes, ensuring that all new changes undergo thorough testing before reaching production.

- **Feature and Fix Development**: For new features or bug fixes, branches are created off `dev`. This practice keeps our development efforts organized and isolated until they're ready to be integrated back into the main development line.

- **Integration and Releases**: After completing development and testing on a feature or fix branch, it's rebased with `dev` to incorporate any concurrent changes. Once verified, changes are merged into `main` through a merge commit. This step marks the transition of tested code into production.

- **Tagging Releases**: Following a merge into `main`, I tag the commit to denote a new release. This tagging helps in tracking versions and managing releases efficiently.

- **Staging Environment**: Optionally, a `stage` branch can be created from `dev` for further testing. This branch acts as a pre-production environment, allowing for additional validation and stakeholder review before final deployment.

By adhering to the Git Flow methodology, we ensure that the Store app's development is organized, predictable, and aligned with best practices for software development and release management.

## Design Patterns

React-specific design patterns are instrumental in maintaining a clean, maintainable, and scalable codebase. They facilitate the separation of concerns, markedly improving the application's readability, development efficiency, and testability. Some would include.

- **Container/Presentational Pattern**
- **Controlled Component Pattern**
- **Composition Pattern**
- **Render Prop Pattern**
- **Compound Component Pattern**
- **Custom Hooks**
- **Higher Order Components**

The Store app implements several of these patterns, incorporating them wherever appropriate opportunities arose.

## Utilizing Atomic Design

The Store app adopts the Atomic Design methodology, a powerful approach to constructing user interfaces that is inspired by chemistry. This methodology breaks down UI components into five distinct levels: atoms, molecules, organisms, templates, and pages.

- **Atoms**: These are the fundamental building blocks of our application.

- **Molecules**: Molecules are groups of atoms bonded together to perform a specific function. 

- **Organisms**: Organisms are relatively complex UI components composed of groups of molecules and possibly atoms.

- **Templates**: Templates arrange organisms and possibly molecules and atoms into a layout, demonstrating the design's underlying content structure without actual content.

- **Pages**: Pages are specific instances of templates that show what a UI looks like with real representative content in place.

By adhering to the Atomic Design principles, the Store app ensures consistency, scalability, and modularity. This structured approach allows our team to efficiently design, develop, and maintain a cohesive and predictable user interface.

## Optimization in the Store App

To enhance the performance and efficiency of the Store app, we've implemented several optimization techniques, focusing on minimizing unnecessary re-renders and computations.

- **`useCallback` Hook**: This hook is used to memoize callback functions. In the Store app, `useCallback` is strategically applied to functions passed as props or used in event handlers, particularly in components that undergo frequent re-renders. This prevents the creation of a new function instance on every render, thus reducing the likelihood of unnecessary child component re-renders.

- **`useMemo` Hook**: This hook ensures that computational functions are only re-executed when one of their dependencies has changed. By implementing `useMemo`, an app avoids costly recalculations, enhancing performance.

- **Pure Components**: The Store app leverages Pure Components to prevent unnecessary re-renders. Pure Components shallowly compare the current props and state with the next ones and re-render only if there are actual changes.

## Use of Index Files for Encapsulation

- **Encapsulation and Exposure Control**: Utilizing index files in directories allows for precise control over what is exposed to the rest of the application. This method acts similarly to encapsulation in object-oriented programming, where only selected parts of a module are made available externally.

## Additional Features

### ESLint, Prettier, Lint-Staged and Husky Integration

- **Code Quality**: ESLint aids in detecting and reporting TypeScript and React issues, aiming to enhance code consistency and prevent bugs.
- **Code Formatting:** Prettier enforces a consistent style by parsing your code and re-printing it with its own rules, ensuring that the codebase has a uniform formatting style.
- **Automated Checks:** Husky and lint-staged automate the process of running linters and formatters on files that are about to be committed, ensuring that only quality code is committed to the repository.

### Import Aliases

- **Simplified Imports**: Import aliases reduce the complexity of import statements, especially in projects with deep directory structures, making them easier to read and manage.
- **Avoid Relative Path Hell**: They help in avoiding the confusion and maintenance headache associated with using long relative paths like `../../../utils/myUtil`.

### Custom Theme through Theme Provider and Styled Components

- **Consistent Theming**: Utilizing a Theme Provider with Styled Components allows for a consistent theme across the entire application, making it easier to manage and update the UI's look and feel.

- **Improved Scalability**: This method promotes scalability in styling large applications by providing a structured way to apply consistent styles and themes across numerous components.

### Code Splitting in Router

The application implements code splitting within its routing mechanism. This approach significantly enhances the app's performance and user experience by reducing the initial load time. By splitting the code into smaller bundles, only the necessary code is loaded on demand as the user navigates through the app. This leads to:

- **Smaller bundle sizes:** 
- **Faster page transitions:** 

### Responsive Design Implementation

Implementing responsive design ensures that the Store app project is accessible and provides an optimal viewing experience across a wide range of devices, from desktops to mobile phones.

### Error Boundary

- **Robust Error Handling:** Error boundaries are React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of the component tree that crashed. They provide a more graceful error-handling mechanism by isolating faulty components and preventing the entire application from crashing.