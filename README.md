### What problem are you trying to solve?

- Build and scalable and reliable form application in order to support special considerations, in this case, given a particular country and keeping a common set of fields among them.

### Why should we solve it?

- Part of the core concept of the project it's to adapt this special behavior of the form (dynamic fields given a selected country), so accomplish this in a performant an easy-to-expand (add new countries and specific configurations) is mandatory.

### How do you propose to solve it?

- Given the entity of the project, a fast to start, opinionated but flexible option, and easy to bootstrap solution was desirable. I opted for NextJS, since it's developing philosophy match almost exactly from what I think is the optimal solution for a standard application. The default dev tools are very suited for the job, and it's abstractions for the life cycle of the app are battle-tested.

- For this scenario I decided to use the reliable combo Rebass/Theme-UI, since both of them provide right out of the box a scalable and easy to use mix of primitive components and theming capabilities (any design system can be easily adapted and expanded with them).

- The structure of the code and the components try to follow a composition over configuration approach. Instead of make use of excessive coercion and configuration objects, the "special" considerations for a given country are handled as separated components, which act as a wrapper to create the desired form fields, and its particular behavior.

- In order to get this app to production a further attention to UI will be necessary, specially the user feedback when the form is not ready to submission (explicit and intuitive error messages). As well, a mandatory E2E test to ensure the user journey is properly supported (Cypress) and small unit testing on the components behavior side (react-testing-library) should be implemented.

- An user and auth/session management module will be necessary: a very reliable unit is NextAuth, which used with JWT is, in my opinion, one of the best approaches.

### What other approaches did you consider?

- A very important aspect of a codebase is and effective code modularization, giving to specific functions/components a unique responsibility. The approach I used avoid having big files with a lot of behavior there, which is prone to errors and difficult to debug. However, this can lead to a bloated component tree and folder structure which precisely defeats the purpose of clarity and intuitiveness, that's why I prefer having a small amount of general upper-level folders than a very detailed folder tree.

- Using the reducer paradigm can lead as well to a lot of boilerplate and bloated files. On the other hand, a big abstraction can lead to a rather obscure implementation and the readability can get a dangerous hit. This is why I tried to find a middleground and not ending up doing an upper level abstraction for the actions in the reducer. In this case I find to be explicit a better approach.

- Given the current inference capabilities of Typescript I do not feel particular useful, specially in prototyping phases, to write the types all over the place. For the requirements of the project I think the code is well covered this way. Of course, this should be a code agreement from the dev team, taking in consideration the entity of the project.

### What could go wrong?

- Test, test and test again, ensure in the better way possible the quality of the app before production

### How to use

- `yarn` to install dependencies
- `yarn dev` to start the dev server (http://localhost:3000)
- `yarn build` to build the production bundle
- `yarn start` to serve the production bundle (http://localhost:3000)
