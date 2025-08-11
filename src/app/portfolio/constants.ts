export interface Project {
  key: string;
  name: string;
  github: string;
  live: string;
  description: string;
  techStack: string[];
  images: string[];
}

export const PROJECTS: Project[] = [
  {
    key: 'project1',
    name: 'Portfolio Website',
    github: 'https://github.com/Samrat003/portfolio',
    live: 'https://samrat-portfolio.vercel.app/',
    description: `A modern, responsive portfolio built with Angular, featuring animated skills, tabbed About view, and beautiful UI/UX.\n\nThis project demonstrates advanced Angular routing, dynamic content, and a fully responsive layout. The Home page features a firecracker animation and animated profile picture. The Portfolio page includes a two-panel layout, project dropdown, and animated tabbed content.\n\nThe codebase is organized for maintainability, with all project data in a constants file.`,
    techStack: ['Angular', 'TypeScript', 'CSS', 'HTML', 'Vercel'],
    images: ['assets/profile.png']
  },
  {
    key: 'project2',
    name: 'E-commerce App',
    github: 'https://github.com/Samrat003/ecommerce',
    live: 'https://ecommerce-samrat.vercel.app/',
    description: `A full-featured e-commerce platform with product catalog, cart, checkout, and admin dashboard.\n\nThis app supports user authentication, order management, and payment integration with Stripe API. The admin dashboard allows product and order management.\n\nBuilt with Angular for the frontend and Spring Boot for the backend, using MongoDB for data storage.`,
    techStack: ['Angular', 'Spring Boot', 'MongoDB', 'Stripe API'],
    images: ['assets/logos/angular.png', 'assets/logos/spring.png']
  },
  {
    key: 'project3',
    name: 'Blog Platform',
    github: 'https://github.com/Samrat003/blog',
    live: 'https://blog-samrat.vercel.app/',
    description: `A multi-user blog platform with markdown editor, comments, and user authentication.\n\nUsers can create, edit, and delete posts, as well as comment on others' posts. The markdown editor supports rich formatting.\n\nThe backend is built with Node.js and Express, and MongoDB is used for persistent storage.`,
    techStack: ['Angular', 'Node.js', 'Express', 'MongoDB'],
    images: ['assets/logos/js.png']
  },
  {
    key: 'project4',
    name: 'Chatbot Integration',
    github: 'https://github.com/Samrat003/chatbot',
    live: 'https://chatbot-samrat.vercel.app/',
    description: `A smart chatbot using NLP, integrated with business workflows and real-time chat.\n\nThe chatbot can answer questions, automate tasks, and provide real-time support. It uses Python and Flask for the backend, with Socket.io for real-time communication.\n\nThe frontend is built with Angular and features a modern, responsive chat UI.`,
    techStack: ['Angular', 'Python', 'Flask', 'Socket.io'],
    images: ['assets/logos/python.png']
  },
  // Add more projects below as needed
];
