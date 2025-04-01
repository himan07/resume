const profileData = {
  title: "Resume",
  name: "Himanshu Yadav",
  sub_title: "Full Stack Developer",
  logoURL: "assets/images/dp.jpg",
  about: {
    intro: `Dynamic <strong>Full Stack Developer</strong> with <strong>3+</strong> years of experience in <strong>MERN stack</strong>. Skilled in building scalable, high-performance web apps with a focus on <strong>React.js, Node.js, and MongoDB</strong>. Expert in <strong>project leadership</strong>, designing reusable components, and optimizing performance. <strong>Strong problem-solver</strong>, committed to <strong>continuous learning and innovation</strong> in web development.`,
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
        `<strong>Developed & launched XMC (XcelMedConnect) and XGP (Xcel Global Panel) App</strong> using <strong>MERN stack</strong>, implementing <strong>secure 3-step registration</strong> with mobile & email validation, and <strong>JWT authentication with token expiry.</strong>`,
        `Designed and integrated a reward system allowing users to redeem rewards as cash or coupons, along with <strong>secure payment gateways</strong> for <strong>India & US.</strong>`,
        `Developed an in-house Help Center SDK with self-help and callback scheduling, reducing customer calls, and <strong>migrated legacy React class components</strong> to functional components for improved performance.`,
        `Improved <strong>API security & performance</strong> through <strong>encryption and optimization</strong>.`
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
          // `Optimized Redux state management by using efficient data structures and minimizing re-renders, reducing memory usage and improving data rendering speed.`
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
      date: "",
    },
    
    {
      desc: `<strong>JavaScript Complete Course</strong> by <strong>Udemy</strong>.`,
      date: "",
    },
    
    {
      desc: `<strong>MariaDB SQL </strong> by <strong>Udemy</strong>.`,
      date: "",
    },
    
  ],
  events: [],
};
