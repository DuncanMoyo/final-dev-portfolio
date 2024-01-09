export const navLinks: { name: string; url: string; itemNumber: string }[] = [
  {
    name: "About",
    url: "#about",
    itemNumber: "01.",
  },
  {
    name: "Experience",
    url: "#experience",
    itemNumber: "02.",
  },
  {
    name: "Projects",
    url: "#projects",
    itemNumber: "03.",
  },
  {
    name: "Contact",
    url: "#contact",
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
      "Co-develop a robust testing suite for component and system testing",
    ],
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
      "Ensure application accessibility and performance using tools like Lighthouse",
    ],
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
      "Participate in agile development process with daily standups and sprint planning",
    ],
  },
];

export const projectsData: {
  title: string;
  image: string;
  description: string;
  tech: string[];
  github: string;
  externalLink: string;
}[] = [
  {
    title: "Admin Dashboard",
    description:
      "A comprehensive web application designed to streamline administrative tasks. This dashboard provides a centralized platform for managing various online projects and services.",
    tech: ["Mongo", "Express", "React", "Node", "MongoDB"],
    github: " https://github.com/DuncanMoyo/mern-admin-dashboard",
    externalLink: "https://admin-frontend-qp6d.onrender.com",
    image: "/assets/images/admin.png",
  },
  {
    title: "Paws&Purrs",
    description:
      "This website is a fun and interactive platform that utilizes TheDogAPI and TheCatAPI. It provides users with a wide variety of images and information about different breeds of cats and dogs.",
    tech: ["Python", "CSS", "Flask", "Nginx"],
    github: "https://github.com/F1R3BLAZ3/Paws-Purrs",
    externalLink: "http://16.170.162.77/",
    image: "/assets/images/paws.png",
  },
  {
    title: "Threads Clone",
    description:
      "A dynamic and interactive platform that allows users to create, manage, and participate in discussion threads1. It provides a user-friendly interface where users can post new topics, reply to existing threads and engage",
    tech: ["Next.js", "Tailwind", "Vercel", "Typescript", "Clerk"],
    externalLink:
      "https://647d4c0caf2e9e162c6f1c1b--gregarious-cannoli-cffcbf.netlify.app/",
    github: "https://github.com/DuncanMoyo/threads_app",
    image: "/assets/images/threads.png",
  },
];

export const noteworthyProjects: {
  title: string;
  description: string;
  tech: string[];
  externalLink: string;
  github: string;
}[] = [
  {
    title: "Evo Gym",
    description:
      "A simple gym landing page for a prospective gym company looking for customers",
    tech: ["TypeScript", "Vite", "Framer-motion", "Tailwind"],
    externalLink: "https://d6505744.gym-typescript-cgl.pages.dev/",
    github: "https://github.com/DuncanMoyo/gym-typescript",
  },
  {
    title: "Duncbook",
    description:
      "A web application that enables you to create, comment and post on your wall, kind of like Facebook.",
    tech: ["Mongo", "Express", "React", "Node"],
    externalLink: "https://duncbook-frontend.onrender.com/",
    github: "https://github.com/DuncanMoyo/duncbook-mern",
  },
  {
    title: "My Portfolio v1",
    description: "My first serious attempt to create my developer portfolio. Learn more about the developer by the name Duncan Moyo.",
    tech: ["React", "Framer-motion", "CSS", "Tailwind"],
    externalLink: "https://duncan-portfolio.pages.dev/",
    github: "https://github.com/DuncanMoyo/duncan-portfolio",
  },
  {
    title: "Dunc-tube",
    description: "A youtube clone where you can stream videos, Watch and enjoy! Your own streaming service right at your fingertips.",
    tech: ["React", "Rapid-Api", "MUI", "React-player"],
    externalLink: "https://sage-strudel-d9e012.netlify.app/",
    github: "https://github.com/DuncanMoyo/youtube-clone/",
  },
  {
    title: "Duncan Fitness Club",
    description:
      "An application that can help you with any type of exercises, free weights, machines, body exercises, you name it, we got it.",
    tech: ["React", "Rapid-Api", "MUI", "Netlify"],
    externalLink: "https://duncan-fitness-club.netlify.app/",
    github: "https://github.com/DuncanMoyo/gym-exercises/",
  },
  {
    title: "Article Summariser",
    description:
      "An article summariser that lets you summarise online articles using ChatGpt. Summarise!",
    tech: ["Vite", "Tailwind", "ChatGpt", "React"],
    externalLink:
      "https://647d4c0caf2e9e162c6f1c1b--gregarious-cannoli-cffcbf.netlify.app/",
    github: "https://github.com/DuncanMoyo/sumz/",
  },
  {
    title: "Breadit",
    description:
      "Breadit is awesome, it is a reddit clone that you can use to start chats and create communities. Post and enjoy!",
    tech: ["Typescript", "Tailwind", "Next.js", "Vercel"],
    externalLink: "https://breadit-h457n5edu-duncanmoyo.vercel.app/",
    github: "https://github.com/DuncanMoyo/breadit",
  },
  {
    title: "Friendzone",
    description:
      "A simple app where you can send messages to friends that you have accepted after they have requested you",
    tech: ["Next.js", "Tailwind", "Pusher", "Jwt"],
    externalLink: "https://friendzone-4jgsjubxb-duncanmoyo.vercel.app/login",
    github: "https://github.com/DuncanMoyo/friendzone/",
  },
];

export const socialLinks: {icon: string, link: string}[] = [
  {
    icon: 'github',
    link: 'https://github.com/DuncanMoyo'
  },
  {
    icon: 'instagram',
    link: 'https://www.instagram.com/duncan_moyo92'
  },
  {
    icon: 'twitter',
    link: 'https://twitter.com/moyoduncan2'
  },
  {
    icon: 'linkedin',
    link: 'http://www.linkedin.com/in/duncanmoyo'
  }
]
