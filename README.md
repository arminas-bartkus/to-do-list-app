# To-Do List App

An Odin Project challenge building a
feature-rich To-Do List application.
This project combines strong JavaScript
logic with good coding practices,
focusing more on functionality than
visual design.

## Purpose

The aim of this project is to:
- Apply good coding practices and SOLID
  principles.
- Expand my understanding of Webpack
  configuration.
- Practice Object-Oriented Programming
  using constructor classes.
- Use composition instead of inheritance
  where suitable.
- Work with local storage for the first
  time.
- Include external libraries such as
  date-fns for date handling.
- Strengthen modular code structure and
  loose coupling of objects.

## SOLID Principles Applied

1. **Single Responsibility** – Each class
   and module handles one purpose.
2. **Open-Closed** – Code is extendable
   without modifying existing logic.
3. **Liskov Substitution** – Components
   can be replaced without breaking code.
4. **Interface Segregation** – Only
   relevant methods are exposed.
5. **Dependency Inversion** – High-level
   modules do not depend on low-level
   details.

## Key Features

- **Projects & Lists**
  - Default project plus ability to add
    more.
  - Sub-sections within projects for
    better organization.
  - Delete projects and sub-sections
    (updates underlying arrays).

- **Tasks**
  - Create tasks with title, description,
    due date, priority level, additional
    notes, and checklist.
  - Edit and delete tasks, reflecting
    changes in both UI and data arrays.
  - Mark tasks complete with a checkbox.
  - Live completion tracker for each
    project.
  - Colour-coded priority switching.
  - Countdown to task completion.

- **Task Management**
  - Sort tasks by priority or due date.
  - "In progress" status tracking.
  - Crossed-out completed tasks section.
  - Search bar for notes.

- **Data & Storage**
  - Uses date-fns for date manipulation.
  - Persists data in local storage via the
    Web Storage API.
  - Plenty of array manipulation for
    managing data efficiently.

- **UI & Interaction**
  - Uses modals for clean user input.
  - Functional-first approach over
    aesthetics.

## Future Improvements

- Enhanced UI/UX styling.
- Drag-and-drop task reordering.
- Cloud sync for cross-device access.
