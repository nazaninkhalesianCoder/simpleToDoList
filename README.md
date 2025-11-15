Simple ToDoList App

A clean and functional React project demonstrating task management, controlled components, state updates, and UI behavior using React, TailwindCSS, and Material UI.
This app allows users to add tasks, mark them as completed (with a one-way check), and delete tasks — all inside a simple, responsive interface.

🚀 About the Project
This project is built to practice and showcase core frontend skills including:
Managing state with useState
Handling input fields as controlled components
Updating arrays immutably
Rendering dynamic lists
Using Material UI components (Checkbox & Icons)
Styling with TailwindCSS
The app provides three main actions:
➕ Add Task
Users can type a task and add it. The input clears automatically after adding.
✔️ Mark as Completed (One-Way Check)
A task can be checked only once.

After checking:
The text becomes line-through
The item fades using opacity
The entire task becomes disabled
The checkbox cannot be unchecked again

🗑️ Delete Task
Each task can be removed using a Material UI Delete icon.
This demonstrates clean component logic, UI feedback, and state-driven rendering.

🧠 What You Will Learn
How to manage arrays of objects using useState
How to build controlled input components
How to update individual items inside state
Using Material UI icons & components
Styling UI with TailwindCSS utility classes
Clean component structure and reusable patterns
Handling conditional rendering based on state (done === true)



📁 Project Structure

ToDoList/
│── src/
│   │── components/
│   │   │── HomePage.jsx
│   │   │── Btn.jsx
│   │   │── Input.jsx
│   │── App.jsx
│   │── index.css
│   │── main.jsx
│── public/
│── package.json
└── README.md




⚙️ Installation & Setup
1.Clone the repository:
git clone https://github.com/YourUsername/ToDoList.git

2.Navigate into the project:
cd ToDoList


3.Install dependencies:
npm install


4.Start the development server:
npm run dev


🖥️ Preview
The app displays:
A text input to type new tasks
A button to add the task
A dynamic list of items showing:
Material UI Checkbox
Task title
Material UI Delete icon
Once checked:
The task fades
Text becomes crossed-out
The checkbox becomes disabled
The entire task becomes non-interactive
All updates happen instantly using React state.


🧩 Tech Stack
React
JavaScript (ES6+)
TailwindCSS
Material UI (Checkbox + Icons)
Vite


🌟 Why This Project Matters
This project is small, but it clearly demonstrates:
Solid understanding of React fundamentals
Component-based architecture
Clean and readable logic
Ability to work with external UI libraries (MUI)
Real-time, interactive UI behavior
Handling state changes and rendering efficiently
Perfect for showcasing your frontend development fundamentals to recruiters and employers.

📬 Contact
If you'd like to see more of my work or collaborate, feel free to reach out through my GitHub!
