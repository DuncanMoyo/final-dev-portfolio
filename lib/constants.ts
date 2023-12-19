export const navLinks: { name: string; url: string; itemNumber: string }[] = [
  {
    name: "About",
    url: "/#about",
    itemNumber: "01.",
  },
  {
    name: "Experience",
    url: "/#jobs",
    itemNumber: "02.",
  },
  {
    name: "Work",
    url: "/#projects",
    itemNumber: "03.",
  },
  {
    name: "Contact",
    url: "/#contact",
    itemNumber: "04.",
  },
];

export const aboutLanguages: string[] = [
  "TypeScript",
  "JavaScript",
  "React",
  "Next.js",
  "Node.js",
  "Python",
];

export const workData: {
  title: string;
  company: string;
  startDate: string;
  endDate: string;
  responsibilities: string[];
}[] = [
  {
    title: "React Frontend Developer",
    company: "Dark Pools",
    startDate: "October 2021",
    endDate: "October 2022",
    responsibilities: [
      "Develop user-facing features using React.js",
      "Build reusable components and front-end libraries for future use",
      "Translate designs and wireframes into high-quality code",
      "Optimize components for maximum performance across a vast array of web-capable devices and browsers",
      "Participate in code reviews to maintain code quality and share knowledge",
      "Collaborate with product team and graphic designers",
      "Learn and understand user interactions",
      "Co-develop a robust testing suite for component and system testing"
    ]
  },
  {
    title: "Junior Frontend Developer",
    company: "BackMeNow Pty Ltd",
    startDate: "September 2020",
    endDate: "March 2021",
    responsibilities: [
      "Design and implement complex user interfaces using React.js",
      "Create and maintain state management systems using Redux or Context API",
      "Implement server-side rendering and static site generation using Next.js",
      "Develop and maintain microservices using Node.js and Express.js",
      "Implement robust error handling and data validation systems",
      "Collaborate with backend developers to design and implement RESTful APIs",
      "Write comprehensive unit tests using testing frameworks like Jest",
      "Ensure application accessibility and performance using tools like Lighthouse"
    ]
  },
  {
    title: "ReactJS Intern",
    company: "ALYX Projects",
    startDate: "January 2020",
    endDate: "June 2020",
    responsibilities: [
      "Develop and maintain web applications using React.js",
      "Utilize React Router for routing in single-page applications",
      "Implement state management using React Hooks.",
      "Work with RESTful APIs for data fetching and handling",
      "Write clean, readable, and testable code using best practices",
      "Collaborate with the design team to implement responsive and user-friendly UI",
      "Use version control systems like Git for collaborative work",
      "Participate in agile development process with daily standups and sprint planning"
    ]
  }
];
