# CRUD Products React App - WIP


**Overview:**

This is a simple CRUD product apploication so demonstrate using [React Query](https://react-query.tanstack.com/) side by side with redux.  The idea is that [React Query](https://react-query.tanstack.com/) takes care of the data loading and saving and React only takes care of application specific state like is modal open or closed, selected rows etc. 

**Prerequistes:**

- You'll need the [Mongo-Api-Docker](https://github.com/loanburger/Mongo-Api-Docker) mock api. 

**Tech:**

- [Yarn](https://yarnpkg.com/)
- React TypeScript
- [Material UI](https://mui.com/getting-started/installation/)
- [React Hook Forms](https://react-hook-form.com)
- React Testing Library
- [React Query](https://react-query.tanstack.com/)
- [Redux Toolkit](https://redux-toolkit.js.org/) - used for local app sate like modal open/closed, selectred rows etc.

**To run the project:**

- Start the [Mongo-Api-Docker](https://github.com/loanburger/Mongo-Api-Docker) mock api as descriped in [readme](https://github.com/loanburger/Mongo-Api-Docker/blob/master/README.MD) file of that repo.
- run `yarn install`
- run `yarn start:dev`


**Useful Articles:**

- [Getting Started with React-Query for Data Fetching and State Management](https://www.section.io/engineering-education/react-query-data-fetching-and-server-state-management)
