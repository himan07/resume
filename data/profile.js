const profileData = {
  title: "Resume",
  name: "Himanshu Yadav",
  sub_title: "Full Stack Developer",
  logoURL: "assets/images/dp.jpg",
  about: {
    intro: `Full Stack Developer with 3+ years of experience in building scalable web applications with a focus on performance, security, and user experience. Expertise in React.js, Node.js, and MongoDB. Skilled in leading projects, designing reusable components, and integrating advanced caching techniques. Strong problem-solver and collaborator, dedicated to continuous learning and innovation in modern web development.`,
    contact: {
      email: "himan9714@gmail.com",
      phone: "+91-8127044098",
      address: "Bangalore, IN",
    },
  },
  links: [
    {
      title: "LinkedIn",
      src: "https://www.linkedin.com/in/himanshu-js",
      iconClass: "fa-brands fa-linkedin-in",
    },
    {
      title: "Github",
      src: "https://github.com/himan07",
      iconClass: "fa-brands fa-github",
    },
  ],
  skills: [
    {
      title: "Languages",
      value: "HTML5, CSS3, TypeScript, JavaScript.",
    },
    {
      title: "Frameworks/Libraries",
      value:
        "React.js, Next.js, React-Native, Redux ,  Node.js, Express.js, GraphQL, WebSockets.",
    },
    {
      title: "Databases",
      value: "MongoDB, RDBMS, MySQL, Redis.",
    },
    {
      title: "Testing & Debugging",
      value: "Jest, React Testing Library.",
    },
    {
      title: "Version Control & Tooling",
      value: "Git, GitLab, Webpack, Docker, Jenkins.",
    },
  ],
  experiences: [
    {
      organization: "Market Xcel",
      title: "Full Stack Developer",
      date: "Sept 2024 - Present",
      details: [
        `<strong>Led the end-to-end development</strong> of a <strong>healthcare application</strong> architecting a <strong>high-performance, secure, and scalable system</strong> using <strong>React.js, Node.js, and MongoDB.</strong>`,
        `Implemented <strong>advanced caching</strong> and <strong>lazy loading techniques</strong>, reducing load times by <strong>33.14%</strong> and significantly
         improving system responsiveness.`,
        `Integrated in-house <strong>help center SDK</strong>, offering self-help features like guided app core flows and callback scheduling for users, leading to a <strong>reduction in customer call volume</strong>.`,
        `<strong>Designed and built an intuitive admin panel</strong>, enabling real-time customization of survey templates, user access
         controls, and data analytics visualization.`,
        `<strong>Optimized database queries</strong> and <strong>indexing strategies,</strong> resulting in improved data retrieval
         speeds and enhanced performance under heavy loads.`,
      ],
    },
    {
      organization: "Costacloud",
      title: `Software Engineer`,
      date: "Apr 2022 - July 2024",
      details: [
        `Developed a <strong>photo-based identification system</strong> that processed over 1K user profiles, extracting <strong>personal details,
         live locations, and relationship status.</strong>`,
        `<strong>Integrated Elastic Search Web Crawler</strong> to <strong>aggregate data from 100+ newsletter websites</strong>, improving search efficiency and reducing query response time.`,
        `Led a team of five developers to build the <strong>eOffice application</strong>, implementing key features such as document signing,
         personal applications, and document updates.`,
         `Designed and implemented a <strong>role-based access control system</strong> managing permissions for over 1k internal and
          external users.`,
          `<strong>Reduced manual document distribution time</strong> by developing annexure viewing in PDF viewers and multi-role document sharing workflows.`,
          `Optimized Redux state management by implementing efficient data structures and minimizing unnecessary re-renders, resulting in reduced memory usage and improved data rendering speed`
      ],
    },
  ],
  projects: [
    {
      title: "ModernMart - An Ecommerce app",
      duration: "Jun - Nov 2023",
      link: "https://github.com/himan07/ModernMart",
      desc: `Developed a comprehensive e-commerce platform featuring robust user authentication (registration, login/logout,
password recovery), an interactive product catalog with detailed product information, a dynamic shopping cart with
real-time updates, and a secure payment gateway with thorough form validations for a seamless checkout experience.`,
    },
    {
      title: "MeetSphere – A virtual space for gatherings.",
      duration: "Feb - March 2024",
      link: "https://unite-meet.vercel.app/",
      desc: `Built a scalable video conferencing platform with <strong>Next.js and TypeScript</strong> supporting 100+ participants with ¡200ms
             latency, featuring real-time private/group messaging via Stream Chat API, secure synchronized media streaming,
             robust participant management, and optimized performance through server-side rendering and caching techniques for
             improved responsiveness.`,
    },
  ],
  education: [
    {
      alma: "Dr. APJ Abdul Kalam Technical University",
      duration: "2017 - 2011",
      std: "B.Tech. (Electronics & Communication Engineering)",
      score: "71.00%",
    },
    {
      alma: "Jwala Devi SVMIC, Prayagraj",
      duration: "2014 - 2016",
      std: "Class XI-XII (PCM)",
      score: "84.67%",
    },
  ],
  certifications: [
    {
      desc: `<strong>Web Development Internship Program </strong> by <strong>MNNIT, Prayagraj</strong>.
      `,
      date: "May - July 2019",
    },
    
    {
      desc: `<strong>JavaScript Complete Course</strong> by <strong>Udemy</strong>.
      `,
      date: "Feb - April 2024",
    },
    
    {
      desc: `<strong>MariaDB SQL </strong> by <strong>Udemy</strong>.
      `,
      date: "Mar - April 2025",
    },
    
  ],
  events: [],
};
