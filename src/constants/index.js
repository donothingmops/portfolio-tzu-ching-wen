import {
    mobile,
    backend,
    creator,
    web,
    javascript,

    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,

    neuraLogo,

    StrabagLogo,
    fraunhofer,
    DualRobot,
    

    humanRobotCollaborate,
    smartAssemblyMotion,

    threejsPortfolioWeb,
    weldingRobot,
    uniStuttgart,
    knippersLogo,
    threejs,
    maxPlanck,
    

    EndEffectorDev_small,
    endEffectorPP,
    endEffectorSide,

    fiberWinding,
    buildingConfigurator,
    arOnsite,
    windingPathGenerator,
    humanRobotCollaboration,
    robotArmDev,
    SQL,
    ROS,


    CourseraLogo,
    udacity,
    nctu,
    chalmers,
    aka,

  } from "../assets";

  

  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "works",
      title: "Projects",
    },
    {
      id: "education",
      title: "Education",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Full Stack Developer",
      icon: web,
    },
    {
      title: "Robotics Developer",
      icon: creator,
    },
    {
      title: "Project Engineer",
      icon: mobile,
    },
    {
      title: "Digital Fabricator",
      icon: backend,
    },
/*     {
      title: "Graphic Designer",
      icon: backend,
    }, */

  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },

    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
    {
      name: "SQL",
      icon: SQL,
    },
    {
      name: "ROS",
      icon: ROS,
    },

  ];
  
  const experiences = [
    {
      title: "Full Stack Developer",
      company_name: "Strabag AG",
      icon: StrabagLogo,
      iconBg: "#383E56",
      date: "Feb 2023 - Present",
      points: [
        "Developed interactive web apps with React, Node.js, Three.js, Babylon.js and more",
        "Customized backend REST-APIs for configurators with Flask and Django",
        "Implemented and executed software testing",
        "Participated in code reviews and pair programming with fellow developers",
      ],
    },
    {
      title: "Robotics Software Developer Intern",
      company_name: "Neura Robotics",
      icon: neuraLogo,
      iconBg: "#E6DEDD",
      date: "Feb 2022 - Oct 2022",
      points: [
        "Responsible for software development and managed all tasks related to application development",
        "Executed tests on physical robotic system and new software functionalities",
        "Developed path planning for 12-axis Dual Robot arms in smart assembly application", 
        "Provided first-level customer support and troubleshooting for the Asia region",

      ],
    },
    {
      title: "Robotics Software Developer HIWI",
      company_name: "Fraunhofer IPA",
      icon: fraunhofer,
      iconBg: "#383E56",
      date: "Feb 2022 - July 2022",
      points: [
        "Developed a custom 3D Point Cloud processing algorithm for 6-axis welding robot",
        "Developed an online feedback loop for real-time sensing and path generation in welding robot", 
        "Engaged in code reviews with fellow developers",
      ],
    },
    {
      title: "Robotics Developer HIWI",
      company_name: "Max Planck Institute for Intelligent Systems",
      icon: maxPlanck,
      iconBg: "#383E56",
      date: "Jun 2021 - May 2022",
      points: [
        "Developed and prototyped 3-axis robot arm using 3D print and CNC methods",
        "Conducted Physical robot testing with newly trained RL model",
        "Assisted PhD students in prototyping physical robots",
      ],
    },
    {
      title: "Computational Design Project Engineer",
      company_name: "Knippers Helbig Advanced Engineering",
      icon:knippersLogo,
      iconBg: "#383E56",
      date: "Feb 2017 - Dec 2020",
      points: [
        "Developed Design-to-Optimization pipeline to automate design processes",
        "Developed parametric design algorithm to optimize geometry and structure",
        "Created digital twin for generate CNC fabrication code",
        "Participated and won several design competition",
      ],
    },
/*     {
      title: "Digital Fabricator",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    }, */
  ];
  
  const educations = [
    {
      title: "Integrative Technologies & Architectural Design Research",
      company_name: "Institute of Computational Design and Construction, University of Stuttgart",
      icon: uniStuttgart,
      iconBg: "#383E56",
      degree: "Diplom Degree",
      date: "Oct 2020 - Oct 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full Stack Development",
      company_name: "Coursera",
      icon: CourseraLogo,
      iconBg: "#383E56",
      degree: "Bootcamp",
      date: "Feb 2019 - Oct 2019",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Deep Learning NanoDegree",
      company_name: "Udacity",
      icon: udacity,
      iconBg: "#383E56",
      degree: "Bootcamp",
      date: "Jun 2018 - Oct 2018",
      points: [
        "Understanding and applying deep learning principles.",
        "Designing and implementing Convolutional Neural Networks for image processing tasks.",
        "Developing Recurrent Neural Networks and Transformers for sequential data applications.",
        "Creating Generative Adversarial Networks for realistic image generation.",
      ],
    },
    {
      title: "Architecture Design",
      company_name: "Staatliche Akademie der Bildenden Künste Stuttgart",
      icon: aka,
      iconBg: "#E6DEDD",
      degree: "Bachelor Degree",
      date: "Oct 2013 - June 2016",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Architecture Design",
      company_name: "Chalmers University of Technology",
      icon: chalmers,
      iconBg: "#383E56",
      degree: "Exchange Program",
      date: "Sep 2009 - Jun 2010",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Civil Engineering",
      company_name: "National Yang Ming Chiao Tung University",
      icon: nctu,
      iconBg: "#E6DEDD",
      degree: "Bachelor Degree",
      date: "Sep 2006 - Jun 2009",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];



  const projectDetails = [
    {
      id: "rapidRoboticPrototype", // Unique identifier for the project
      name: "Rapid Robotic Prototype Platform",
      description: "End Effector hardware development with 3 embedded microcontroller communicating with robot control box",
      tags: [
        { name: "kuka.sim", color: "blue-text-gradient" },
        { name: "rhino3d", color: "green-text-gradient" },
        { name: "grasshopper", color: "pink-text-gradient" },
      ],
      images: [EndEffectorDev_small, endEffectorPP, endEffectorSide], // Array of images for the project
      source_code_link: "https://github.com/your-repo", // Assuming a valid URL
    },
    // More projects...
  ];






  const testimonials = [
    {
      testimonial:
        "KUKA Robot Programming Certificate 2021",
      name: "KUKA ",
      designation: "",
      company: "",
      image: "",
    },
    {
      testimonial:
        "Stuttgart Academy Preis 2016 - 1. Preis",
      name: "Staatliche Akademie der Bildenden Künste Stuttgart",
      designation: "",
      company: "",
      image: robotArmDev,
    },
    {
      testimonial:
        "Deutsche Stahlbau Förderpreis 2018 - 3. Preis",
      name: "bauforumstahl",
      designation: "",
      company: "",
      image: "",
    },
    {
      testimonial:
        "IELTS B2",
      name: "IELTS Language Institute",
      designation: "",
      company: "",
      image: "",
    },
    {
      testimonial:
        "Deutsche Sprachkenntnisse(DSH 2)",
      name: "Universität der Künste Berlin",
      designation: "",
      company: "",
      image: "",
    },
    {
      testimonial:
        "Wettbeweb 'Neue elefantenwelt' der wilhelma - 1. Preis",
      name: "Baden-Württemberg",
      designation: "",
      company: "",
      image: "",
    },
  ];
  
  const projects = [
    {
      name: "Interactive Cyber-Physical Robotic System",
      description:
        /* "My diplom thesis is an interactive cyber-physical robotic system, which provides new approach for designing fiber structure. The system consists of Augmented Reality user interface for user to design fiber directly with augmented information and also allows user via AR remotely interact with the robot arm to prototype design model in real-time.", */ 
        "My diploma thesis presents an advanced interactive cyber-physical robotic system aimed at innovating fiber structure design. Equipped with an Augmented Reality interface, it allows users to delve into their design concepts with enriched information and remotely manipulate a robotic arm for immediate prototyping. This integration streamlines the design workflow and significantly reduces the iteration cycle, enhancing efficiency and creativity.",
      tags: [
        {
          name: "holenlens",
          color: "blue-text-gradient",
        },
        {
          name: "ur10e",
          color: "blue-text-gradient",
        },
        {
          name: "ui/ux",
          color: "green-text-gradient",
        },
        {
          name: "unity",
          color: "pink-text-gradient",
        },
        {
          name: "ros",
          color: "pink-text-gradient",
        },
      ],
      image: humanRobotCollaborate,
      source_code_link: "https://github.com/",
    },        
    {
      name: "Human-Robot Collaboration",
      description:
        /* "An integrative system fusions AR and robot technologies together. The scalable user-friendly UI provides different features with interactable buttons for design and fabrication purposes. The robot arm next to the user is standby and ready for receiving user command to start the prototype process.",
         */
        "This integrated system merges AR and robotic technologies, featuring a scalable, user-friendly interface with interactive buttons for both design and fabrication purposes. It incorporates a small-scale collaborative robot arm equipped with safety features, positioned to work alongside users, ready to receive commands and initiate the prototyping process. This synergy enhances efficiency and fosters a more intuitive fabrication experience.",
        
      tags: [
        {
          name: "ui/ux",
          color: "blue-text-gradient",
        },
        {
          name: "holenlens ui",
          color: "green-text-gradient",
        },
        {
          name: "unity",
          color: "pink-text-gradient",
        },
      ],
      image: humanRobotCollaboration,
      source_code_link: "https://github.com/",
    },
    

    {
      name: "Frontend Design",
      description:
        "This frontend development, a scalable and customizable Augmented Reality user interface was crafted, greatly enhancing user engagement by facilitating direct interaction with immersive environments. This intuitive design enables seamless design and manipulation within virtual spaces, catering to a wide range of application requirements. Furthermore, its adaptability and ease of use empower users, from designers to end-users, to explore and realize complex projects with unprecedented creativity and efficiency.",
      tags: [
        {
          name: "figma",
          color: "blue-text-gradient",
        },
        {
          name: "unity",
          color: "green-text-gradient",
        },
        {
          name: "python",
          color: "pink-text-gradient",
        },
      ],
      image: arOnsite,
      source_code_link: "https://github.com/",
    },
    {
      name: "Prototype Rapid Robotic Platform",
      description:
        /* "Robotic prototype setup is facilitated with a 6-axis manipulator(UR10e) featured with custom winding End Effector, embedded with three microcontrollers for 3D scanning, controlling servo motor and fiber tension sensing. A custom winding path planning solver features the real-time robot path generation based on fiber design input from designer.", */
        "The robotic prototype system features a 6-axis UR10e manipulator, outfitted with a specialized winding end effector, and incorporates three microcontrollers dedicated to 3D scanning, servo motor management, and fiber tension detection. The system boasts a custom winding path planning solver, enabling the generation of real-time robot trajectories informed directly by the designer's fiber design inputs, streamlining the process from conception to execution.",      
        tags:[
        {
          name: "ur10e robot",
          color: "blue-text-gradient",
        },
        {
          name: "jetson nano",
          color: "blue-text-gradient",
        },
        {
          name: "arduino mega",
          color: "blue-text-gradient",
        },
        {
          name: "moveit",
          color: "green-text-gradient",
        },
        {
          name: "ros",
          color: "pink-text-gradient",
        },

      ],
      image: [EndEffectorDev_small],
      source_code_link: "./",
    },

    {
      name: "Path Planning Plugin",
      description:
        /* "Fiber winding, a complex fabrication method, demands consideration to both design and fabrication constraints. Due to the absence of a direct 1:1 robot path planning software for this technique, I've developed a custom inverse kinematics (IK) solver for generating the required robot paths for fiber winding. This IK solver enables users to finely adjust various parameters related to design and fabrication, significantly improving design flexibility.", */
        "Fiber winding, a nuanced fabrication technique, requires careful management of design and fabrication constraints. In response to the lack of direct robot path planning software for this method, I developed a custom inverse kinematics (IK) solver. This tool allows for precise adjustments to design and fabrication parameters, greatly enhancing design versatility.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "custome ik solver",
          color: "green-text-gradient",
        },
        {
          name: "inverse kinematic",
          color: "pink-text-gradient",
        },
      ],
      image: windingPathGenerator,
      source_code_link: "https://github.com/",
    },
    
    
    /* #3# */
    
    /* #4# */
    {
      name: "Robot Fiber Winding",
      description:
      "User inputs through ARa provide the robot with environmental data and the preferred fiber design. Utilizing this information, the path-planning IK solver calculates joint angles for fabrication. This solver enables users to adjust and fine tune various fabrication parameters, like the approach direction to anchor points, circular path resolution, offset distance, and more, for precise control.",
      tags: [
        {
          name: "ui/ux",
          color: "blue-text-gradient",
        },
        {
          name: "holenlens ui",
          color: "green-text-gradient",
        },
        {
          name: "unity",
          color: "pink-text-gradient",
        },
      ],
      image: fiberWinding,
      source_code_link: "https://github.com/",
    },
   
    {
      name: "3-Axis Robot Arm Dev",
      description:
      "The fully custom 3DoF robot arm, developed for a PhD research project, incorporates pneumatic muscles aiming to master Ping-Pong using Reinforcement Learning. This initiative seeks to benchmark its performance and efficiency relative to conventional electric motor-driven robot arms. Employing advanced manufacturing techniques, the prototype is meticulously crafted through 3D printing and CNC technologies, showcasing a blend of innovation and precision engineering.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "react",
          color: "green-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "pink-text-gradient",
        },        
        {
          name: "threejs",
          color: "blue-text-gradient",
        },
      ],
      image: robotArmDev,
      source_code_link: "https://github.com/",
    },

    
    {
      name: "Dual Arm Winding Robots",
      description:
        "My expertise in digital fabrication encompasses working with both collaborative robots on a small scale and industrial 6-axis robot arms, aiming to advance industrial automation for both onsite fabrication and offsite prefabrication applications, including fiber winding. Simulations conducted with KUKA.sim illustrate the collaborative effort of two robots to accomplish fiber winding tasks.",
      tags: [
        {
          name: "kuka.sim",
          color: "blue-text-gradient",
        },
        {
          name: "rhino3d",
          color: "green-text-gradient",
        },
        {
          name: "grasshopper",
          color: "pink-text-gradient",
        },
      ],
      image: [DualRobot],
      source_code_link: "../assets/EndEffectorDev.gif",
    },
    /* #5# */
    
    {
      name: "Robotics Smart Assembly",
      description:
        "The dual-arm robotic assembly system, developed for smart factory applications in the automobile industry, was showcased at Messe Automatica 2022. Path planning for 12-axis Dual Robot arms was engineered to improve efficiency on smart assembly production lines. Additionally, experiments with reinforcement learning algorithms were conducted to optimize path planning generation.",
      tags: [
        {
          name: "ompl",
          color: "blue-text-gradient",
        },
        {
          name: "reinforcement learning",
          color: "green-text-gradient",
        },
        {
          name: "ros",
          color: "pink-text-gradient",
        },
      ],
      image: smartAssemblyMotion,
      source_code_link: "https://github.com/",
    },
    {
      name: "Automatic Welding Robot",
      description:
        "An algorithm for extracting features from 3D Point Clouds was specifically engineered for diverse welding objects, facilitating automated feature extraction and the generation of welding paths for a 6-axis welding robot (UR10e). The system was further enhanced with an online feedback loop, enabling real-time path generation for the welding robot. This innovative approach not only optimizes the welding process but also significantly improves the precision and efficiency of robotic welding operations.",
      tags: [
        {
          name: "3d pointcloud processing",
          color: "blue-text-gradient",
        },
        {
          name: "python",
          color: "green-text-gradient",
        },
        {
          name: "ros",
          color: "pink-text-gradient",
        },
      ],
      image: weldingRobot,
      source_code_link: "https://github.com/",
    },
    {
      name: "Building Configurator",
      description:
        "The Full Stack Building Configurator, a comprehensive CAD tool, encompasses a user-friendly frontend UI along with a backend API for structural calculations. It empowers users to intricately design and configure both residential and office buildings within a CAD framework. Additionally, the backend API conducts structural analysis to accurately determine the dimensions of the buildings, merging functionality with innovation to streamline architectural design processes.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "nodejs",
          color: "green-text-gradient",
        },
        {
          name: "sql",
          color: "pink-text-gradient",
        },
        {
          name: "rhino3d",
          color: "blue-text-gradient",
        },
      ],
      image: buildingConfigurator,
      source_code_link: "https://github.com/",
    },
    {
      name: "Portfolio 3D Website",
      description:
        "The interactive 3D portfolio website, crafted with JavaScript, React, Tailwind CSS, Three.js, and Node.js, immerses users in a dynamic experience through engaging 3D content. This platform not only showcases my proficiency in developing interactive frontends but also underscores my skill in implementing robust backend services. It stands as a testament to my ability to integrate cutting-edge technologies for creating rich, user-centric digital environments.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "green-text-gradient",
        },
        {
          name: "threejs",
          color: "pink-text-gradient",
        },
      ],
      image: threejsPortfolioWeb,
      source_code_link: "https://github.com/",
    },
    /* {
      name: "Automatic Welding Robot",
      description:
        "An algorithm for extracting features from 3D Point Clouds was specifically engineered for diverse welding objects, facilitating automated feature extraction and the generation of welding paths for a 6-axis welding robot (UR10e). The system was further enhanced with an online feedback loop, enabling real-time path generation for the welding robot. This innovative approach not only optimizes the welding process but also significantly improves the precision and efficiency of robotic welding operations.",
      tags: [
        {
          name: "3d pointcloud processing",
          color: "blue-text-gradient",
        },
        {
          name: "python",
          color: "green-text-gradient",
        },
        {
          name: "ros",
          color: "pink-text-gradient",
        },
      ],
      image: weldingRobot,
      source_code_link: "https://github.com/",
    },
    {
      name: "Automatic Welding Robot",
      description:
        "An algorithm for extracting features from 3D Point Clouds was specifically engineered for diverse welding objects, facilitating automated feature extraction and the generation of welding paths for a 6-axis welding robot (UR10e). The system was further enhanced with an online feedback loop, enabling real-time path generation for the welding robot. This innovative approach not only optimizes the welding process but also significantly improves the precision and efficiency of robotic welding operations.",
      tags: [
        {
          name: "3d pointcloud processing",
          color: "blue-text-gradient",
        },
        {
          name: "python",
          color: "green-text-gradient",
        },
        {
          name: "ros",
          color: "pink-text-gradient",
        },
      ],
      image: weldingRobot,
      source_code_link: "https://github.com/",
    },
    {
      name: "Automatic Welding Robot",
      description:
        "An algorithm for extracting features from 3D Point Clouds was specifically engineered for diverse welding objects, facilitating automated feature extraction and the generation of welding paths for a 6-axis welding robot (UR10e). The system was further enhanced with an online feedback loop, enabling real-time path generation for the welding robot. This innovative approach not only optimizes the welding process but also significantly improves the precision and efficiency of robotic welding operations.",
      tags: [
        {
          name: "3d pointcloud processing",
          color: "blue-text-gradient",
        },
        {
          name: "python",
          color: "green-text-gradient",
        },
        {
          name: "ros",
          color: "pink-text-gradient",
        },
      ],
      image: weldingRobot,
      source_code_link: "https://github.com/",
    }, */
  ];
  
  export { services, technologies, experiences, educations, testimonials, projects, projectDetails };