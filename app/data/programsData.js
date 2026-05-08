// app/data/programsData.js

export const programsData = {
  "python-basic": {
    id: 1,
    title: "Python Basic",
    slug: "python-basic",
    category: "programming",
    icon: "Code2",
    duration: "4 Weeks",
    level: "Beginner",
    students: "1200+",
    shortDesc: "Master the fundamentals of Python syntax, loops, and functions.",
    fullDescription: `
      Python is one of the most versatile and in-demand programming languages today. 
      This comprehensive beginner course is designed to take you from zero to 
      programming hero with hands-on projects and real-world examples.

      You'll learn Python syntax, variables, data types, control flow, functions, 
      and modules. By the end of this course, you'll be able to write clean, 
      efficient Python code and build your own applications.

      Perfect for absolute beginners with no prior coding experience, as well as 
      professionals looking to add Python to他们的技能库。
    `,
    curriculum: [
      { week: 1, topics: ["Introduction to Python", "Variables & Data Types", "Basic Operators", "String Operations"] },
      { week: 2, topics: ["Lists & Tuples", "Dictionaries & Sets", "Control Flow (if/else)", "Loops (for/while)"] },
      { week: 3, topics: ["Functions", "Lambda Expressions", "Modules & Packages", "Error Handling"] },
      { week: 4, topics: ["File I/O", "Working with JSON", "Final Project", "Certification Exam"] }
    ],
    whatYouLearn: [
      "Write clean, efficient Python code",
      "Understand programming fundamentals",
      "Work with data structures like lists, dictionaries",
      "Create functions and modules",
      "Handle files and errors",
      "Build real-world projects"
    ],
    prerequisites: [
      "No prior programming experience needed",
      "A computer (Windows/Mac/Linux)",
      "Enthusiasm to learn!"
    ],
    price: 2499,
    originalPrice: 4999,
    discount: 50,
    features: [
      "Live online classes",
      "Recorded session access",
      "Certificate of completion",
      "Project-based learning",
      "Doubt clearing sessions",
      "Placement assistance"
    ],
    color: "from-yellow-400 to-orange-500",
    metaTitle: "Python Basic Course | Learn Python Programming",
    metaDescription: "Master Python programming from scratch. 4-week beginner course with live classes, projects, and certification."
  },

  "python-advance": {
    id: 2,
    title: "Python Advance",
    slug: "python-advance",
    category: "programming",
    icon: "Code2",
    duration: "6 Weeks",
    level: "Advanced",
    students: "800+",
    shortDesc: "Dive into OOP, decorators, generators, and data handling libraries.",
    fullDescription: `
      Take your Python skills to the next level with this advanced course. 
      Master object-oriented programming, decorators, generators, context managers, 
      and popular data science libraries like NumPy and Pandas.

      This course is designed for developers who already know Python basics and 
      want to build professional-grade applications and work with data.

      Learn advanced concepts that will make you a more efficient and powerful 
      Python developer.
    `,
    curriculum: [
      { week: 1, topics: ["OOP Deep Dive", "Classes & Objects", "Inheritance & Polymorphism", "Magic Methods"] },
      { week: 2, topics: ["Decorators", "Generators & Iterators", "Context Managers", "Metaclasses"] },
      { week: 3, topics: ["NumPy Fundamentals", "Array Operations", "Broadcasting", "Linear Algebra"] },
      { week: 4, topics: ["Pandas Series & DataFrame", "Data Cleaning", "Data Analysis", "Visualization"] },
      { week: 5, topics: ["Web Scraping", "APIs & Requests", "Database Integration", "Async Programming"] },
      { week: 6, topics: ["Testing & Debugging", "Performance Optimization", "Final Project", "Deployment"] }
    ],
    whatYouLearn: [
      "Master OOP concepts",
      "Use decorators and generators",
      "Work with NumPy and Pandas",
      "Build data analysis pipelines",
      "Create web scrapers",
      "Optimize Python performance"
    ],
    prerequisites: [
      "Python basics knowledge",
      "Familiarity with functions and loops",
      "Basic understanding of data types"
    ],
    price: 3999,
    originalPrice: 6999,
    discount: 43,
    features: [
      "Live online classes",
      "Recorded session access",
      "Certificate of completion",
      "Industry projects",
      "1-on-1 mentorship",
      "Resume building assistance"
    ],
    color: "from-yellow-500 to-orange-600",
    metaTitle: "Advanced Python Course | Master Python Programming",
    metaDescription: "Take your Python skills to advanced level. Learn OOP, NumPy, Pandas, and build professional applications."
  },

  "java-basic": {
    id: 3,
    title: "Java Basic",
    slug: "java-basic",
    category: "programming",
    icon: "Coffee",
    duration: "5 Weeks",
    level: "Beginner",
    students: "950+",
    shortDesc: "Learn core Java concepts, JVM architecture, and basic OOPs.",
    fullDescription: `
      Java is one of the most popular programming languages used by millions of 
      developers worldwide. This beginner-friendly course will teach you Java 
      from the ground up.

      You'll learn about JVM architecture, data types, operators, control statements, 
      arrays, and object-oriented programming basics. Start your journey to becoming 
      a Java developer today!
    `,
    curriculum: [
      { week: 1, topics: ["Java History & Features", "JVM Architecture", "Setting up JDK", "First Java Program"] },
      { week: 2, topics: ["Variables & Data Types", "Operators", "Control Statements", "Loops"] },
      { week: 3, topics: ["Arrays", "Strings", "Methods", "Command Line Arguments"] },
      { week: 4, topics: ["OOP Basics", "Classes & Objects", "Constructors", "this Keyword"] },
      { week: 5, topics: ["Inheritance", "Polymorphism", "Packages", "Final Project"] }
    ],
    whatYouLearn: [
      "Understand JVM architecture",
      "Write Java programs confidently",
      "Master OOP fundamentals",
      "Work with arrays and strings",
      "Handle exceptions",
      "Build console applications"
    ],
    prerequisites: [
      "Basic computer knowledge",
      "No prior programming needed"
    ],
    price: 2999,
    originalPrice: 5499,
    discount: 45,
    features: [
      "Live online classes",
      "Recorded session access",
      "Certificate of completion",
      "Practical assignments",
      "Doubt clearing sessions"
    ],
    color: "from-red-500 to-orange-500",
    metaTitle: "Java Basic Course | Learn Java Programming",
    metaDescription: "Start your Java journey from scratch. 5-week beginner course covering core Java concepts and OOP fundamentals."
  },

  "mern-stack": {
    id: 6,
    title: "MERN Stack Course",
    slug: "mern-stack",
    category: "web",
    icon: "Database",
    duration: "12 Weeks",
    level: "Full Stack",
    students: "2500+",
    shortDesc: "MongoDB, Express, React, Node.js. Build real-world projects.",
    fullDescription: `
      Become a full-stack JavaScript developer with our comprehensive MERN stack course. 
      Learn MongoDB, Express.js, React.js, and Node.js to build complete web applications 
      from scratch.

      Build e-commerce sites, social media apps, and real-time dashboards. By the end 
      of this course, you'll be ready for full-stack developer roles.
    `,
    curriculum: [
      { week: 1-2, topics: ["HTML5/CSS3 Modern", "JavaScript ES6+", "Async/Await", "DOM Manipulation"] },
      { week: 3-4, topics: ["React Fundamentals", "Hooks", "State Management", "React Router"] },
      { week: 5-6, topics: ["Node.js Basics", "Express.js", "REST APIs", "Middleware"] },
      { week: 7-8, topics: ["MongoDB", "Mongoose", "Authentication", "Authorization"] },
      { week: 9-10, topics: ["Integration", "File Upload", "WebSockets", "Real-time Features"] },
      { week: 11-12, topics: ["Deployment", "Performance", "Final Project", "Portfolio Building"] }
    ],
    whatYouLearn: [
      "Build full-stack web applications",
      "Master React.js with hooks",
      "Create RESTful APIs with Node.js",
      "Work with MongoDB databases",
      "Implement authentication",
      "Deploy to production"
    ],
    prerequisites: [
      "Basic JavaScript knowledge",
      "Understanding of HTML/CSS",
      "Familiarity with programming concepts"
    ],
    price: 9999,
    originalPrice: 19999,
    discount: 50,
    features: [
      "Live online classes",
      "Recorded session access",
      "Certificate of completion",
      "3 real-world projects",
      "Mock interviews",
      "Placement assistance"
    ],
    color: "from-teal-400 to-cyan-500",
    metaTitle: "MERN Stack Course | Full Stack Web Development",
    metaDescription: "Become a full-stack developer with MERN stack. Learn MongoDB, Express, React, Node.js with live projects."
  },

  "dsa-course": {
    id: 8,
    title: "DSA Course",
    slug: "dsa-course",
    category: "dsa",
    icon: "BrainCircuit",
    duration: "10 Weeks",
    level: "Intermediate",
    students: "3000+",
    shortDesc: "Data Structures & Algorithms in C++/Java. Crack coding interviews.",
    fullDescription: `
      Master Data Structures and Algorithms to crack coding interviews at top tech 
      companies. This comprehensive course covers all essential DSA topics with 
      hands-on coding practice and problem-solving techniques.

      Learn arrays, linked lists, trees, graphs, dynamic programming, and more. 
      Perfect for placement preparation and coding competitions.
    `,
    curriculum: [
      { week: 1-2, topics: ["Arrays", "Strings", "Two Pointers", "Sliding Window"] },
      { week: 3-4, topics: ["Recursion", "Backtracking", "Linked Lists", "Stacks & Queues"] },
      { week: 5-6, topics: ["Trees", "BST", "Heaps", "Priority Queues"] },
      { week: 7-8, topics: ["Graphs", "BFS/DFS", "Shortest Path", "Topological Sort"] },
      { week: 9-10, topics: ["Dynamic Programming", "Greedy Algorithms", "System Design Basics", "Mock Interviews"] }
    ],
    whatYouLearn: [
      "Master essential data structures",
      "Solve complex algorithmic problems",
      "Prepare for FAANG interviews",
      "Optimize code for performance",
      "Understand time/space complexity",
      "Crack coding assessments"
    ],
    prerequisites: [
      "Basic programming knowledge",
      "Familiarity with any programming language",
      "Logic and problem-solving mindset"
    ],
    price: 7999,
    originalPrice: 14999,
    discount: 47,
    features: [
      "Live online classes",
      "Recorded session access",
      "Certificate of completion",
      "500+ coding problems",
      "Mock interviews",
      "Placement preparation"
    ],
    color: "from-purple-500 to-violet-600",
    metaTitle: "DSA Course | Data Structures & Algorithms",
    metaDescription: "Master Data Structures & Algorithms. Crack coding interviews at top tech companies with our comprehensive DSA course."
  }
};

// Add all your 15 programs similarly...

// Helper function to get all program slugs
export function getAllProgramSlugs() {
  return Object.keys(programsData).map(slug => ({ slug }));
}

// Helper function to get program data by slug
export function getProgramData(slug) {
  return programsData[slug] || null;
}