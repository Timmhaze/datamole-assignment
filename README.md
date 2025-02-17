# Datamole's React / TypeScript Assignment

Please, read following instructions and let us know if anything is not clear.

## 📋 General Rules and Requirements

-   Utilize any npm package you deem suitable.
-   In case of uncertainty about our expectations, please ask.
-   If unable to resolve an issue promptly, provide a brief explanation (e.g., missing knowledge, time constraints) and proceed.
-   Adhere to all familiar code quality principles.
-   Limit time spent on our assignment to a maximum of 6 hours. If necessary, prioritize tasks.
-   Submit your work via a git repository link (e.g., GitHub).
    -   Include the time spent on the assignment in your submission.
-   Document key solutions and decisions. Briefly explain your approach and reasoning in complex areas.

### 🚫 Restrictions

-   Do not modify the API (props) of the provided components.
-   Do not use any component library (Material UI for example).
-   Do not use Tailwind CSS.

### ⏰ Time Estimation

-   Start by thoroughly reading the assignment and reviewing the provided code to ensure you fully grasp the requirements.
-   Estimate the time needed to complete the assignment.
-   Email us your estimated completion time along with a realistic deadline, considering your existing commitments (e.g., work obligations, family responsibilities, vacations, or public holidays).

## 📝 Assignment Tasks

Complete all the tasks below.

### Client Application

More information about the client are in the `client/README.md`. Make sure you read them.

Using the provided UI components, implement the following modifications, bugfixes or new features (you can decide in what order):

#### Bugs

-   [✔️] **B1**: `List` content
    -   Fix the content alignment of the non-empty `List` component.
-   [✔️] **B2**: `Footer` alignment
    -   Fix the `Layout` component so the `Footer` is always attached to the bottom of the `Layout`.

_Fix all other bugs and visual imperfections you find._

#### Features

-   [✔️] **F1**: Default values in `Footer`
    -   Modify the counters in `Footer` to show 0 when no value(s) are passed.
-   [✔️] **F2**: Load todo items
    -   After opening the application, todo items should be loaded from the server
    -   The todo items should be displayed in the `List` component.
-   [✔️] **F3**: Add a todo item
    -   Implement logic, which toggles visibility between the "add" button in the `Header` and a `Form` component.
    -   Entering a value inside the `Form` component and submitting it should create a new todo item.
    -   Data should be persisted on the server via an API call.
-   [✔️] **F4**: Edit a todo item's label
    -   Implement logic, which toggles visibility between the "edit" button in the `ListItem` and a `Form` component.
    -   Entering a value inside the `Form` component and submitting it should edit the existing todo item.
    -   Changes to the data should be persisted on the server via an API call.
-   [✔️] **F5**: Complete a todo item
    -   After clicking on the checkbox in the `ListItem`, the todo item should toggle between "done" and "todo" states.
    -   Changes to the data should be persisted on the server via an API call.
-   [✔️] **F6**: Delete a todo item
    -   After clicking the "delete" button in the `ListItem`, the todo item should be deleted.
    -   Changes to the data should be persisted on the server via an API call.
-   [✔️] **F7**: Sort the todo items
    -   Sort the list of the todo items:
        -   "todo" items (not "done") should be displayed first,
        -   after that, items should be sorted by their creation date, descending.
-   [✔️] **F8**: Count the todo items
    -   Show a number of the "todo"/"done" items in the `Footer`.
-   [✔️] **F9**: `Button` component
    -   Create a `Button` component and use it instead of HTML `button` elements.

#### Styling

-   [✔️] **UI1**: `Header` "add" button alignment
    -   The "add" button should be aligned to the right in the `Header` component.
-   [✔️] **UI2**: `ListItem` actions alignment
    -   Action buttons in the `ListItem` component should be aligned to the right.
-   [✔️] **UI3**: `ListItem` actions visibility
    -   Action buttons in the `ListItem` component should be visible only when hovering over the `ListItem`.

#### Stories (optional tasks)

-   [❔] **SB1**: Add a story/stories for the `Layout` component.
-   [❔] **SB2**: Add stories showing available `Button` variants.
-   [❔] **SB3**: Add a story showcasing the `ListItem` actions visibility change on hover (implemented in _"UI3"_).

### Server

-   [❌] **S1**: Implement a custom endpoint for marking single todo item as "done". Calling this endpoint sets the `done` field to `true` and the `finishedAt` field to current time. Use this new endpoint in the client.

## Additional Comments

-   Feel free to do any visual modifications that - in your opinion - improve the design of the application.
-   Feel free to install and use any public package you may need.

### GitHub

-   Do your best to use atomic commits.
-   In each commit that solves (fully or partly) one of the tasks above, add the task's id into the commit message. For example: _"B1: fix typo in ..."_.

### Storybook

-   We use the Storybook's format CSF3, but you can use the older version of the CSF format if you are more familiar with it.



# My Notes on the Assignment

Hi, I hope that adding this section to the README is a suitable way to document my key solutions and decisions.

## Overview

I have included comments in the code with appropriate tags (e.g., `B1: xxxxxxx`) to indicate the sections related to CRUD functionality and bug fixes. These comments should be largely self-explanatory, but I will also briefly describe my approach and the challenges I encountered.

## My Approach

My experience with full MVC frameworks has primarily been on the frontend, though I have handled some backend work before. When reviewing the assignment requirements, I quickly realized that I needed to prioritize certain aspects, as I wasn't confident I could complete everything within the given time. Since I am more experienced in frontend development and the majority of the assignment was frontend-focused, I decided to concentrate on the CRUD functionality first. If I encountered relevant sections for bug fixes or UI improvements along the way, I addressed them as well.

## Challenges and Key Decisions

### Initial Setup

I had never used Vite before, so it took me longer than I would have liked to realize that `npm start` or `npm run dev` wouldn’t work to boot the client or server. After some research, I discovered that the project required `pnpm` instead. Once I resolved this, I could run the frontend and backend properly.

### Fetching Data

The first task was to display data from `db.json`. While this wasn't particularly difficult, I had to refresh my memory on identifying the correct API endpoint. Revisiting some old college projects helped with this. Once I had the endpoint, fetching and displaying data was straightforward. However, reaching this point took around two hours, including setup and debugging.

### CRUD Functionality

The next day was much smoother. Implementing CRUD operations is more about understanding how data should be manipulated rather than dealing with complexity. Each operation—creating, updating, and deleting items—followed the same pattern of interacting with the API using `POST`, `PUT`, and `DELETE` requests.

Sorting the array of displayed items took some extra thought. Initially, I struggled with when to reorder it, but I realized that sorting could be done before passing data to the `ListItem` component rather than after rendering.

### UI and Code Organization

After completing CRUD functionality, I focused on bug fixes, UI improvements, and enhancing user experience. Some of the changes I made included:

- Validating the add form to prevent users from submitting blank items.
- Breaking down the application into smaller, more manageable components to maintain separation of concerns. The `ListItem` component, in particular, was refactored since it contained the most code.
- Moving inline styles into separate CSS files to improve readability.

## Unfinished Tasks

Due to time constraints, I didn’t complete the server endpoint part of the assignment. I would have liked to attempt this if I had more time. Additionally, I did not implement Storybook, as I have never used it before. My prototyping experience has been with Illustrator or Photoshop, so I decided to focus on areas where I could contribute most effectively.

## Final Thoughts

Overall, my progress started slow as I familiarized myself with the project structure, but once I gained confidence, I worked much more efficiently. I hope this write-up provides insight into my approach and reasoning.

