const data = [
  {
    title: "About",
    content: "I am a passionate and dedicated software developer focused on web development, \
    with keen interest in audio, game development, and data science. I am driven by a desire for continuous \
    learning and thrive on challenging opportunities to enhance my \
    analytical thinking, problem-solving, and personal growth.",
  },
  {
    title: "Experience",
    content: [
      {
        job_title: "Software Developer, Internship",
        company_place: "Kitro - Zurich, Switzerland",
        href: "https://www.kitro.ch/",
        dates: "September 2023 - February 2024",
        job_info: 'During my internship at Kitro, I embarked on a journey \
        of full-stack development, encompassing backend data transformation, \
         report generation, and database querying. I harnessed the power of Python, \
         Chalice, and SQLAlchemy to automate tasks and streamline workflows. \
         Simultaneously, I delved into frontend development using Reactjs, \
         gaining exposure to the entire development lifecycle. \
         My experiences have equipped me with a solid foundation in full-stack development principles.'
      },
      {
        job_title: "Junior Pre-Event Trader (Basketball Betting)",
        company_place: "Novibet - Athens, Greece",
        href: "https://www.novibet.com",
        dates: "June 2023 - August 2023",
        job_info: 'Worked for Novibet, a sports betting company as a \
        pre-event trader. Among other responsibilities, I am responsible \
        for ensuring first-class sports offerings for Basketball events, \
        monitoring the internal tools, and solving various tasks'
      },
      {
        job_title: "Junior Software Developer",
        company_place: "Sports Betting - Athens, Greece",
        href: "https://github.com/georgedouzas/sports-betting",
        dates: "October 2021 - Present",
        job_info: 'I am working voluntarily for Sports-Betting, \
        an open-source collection of tools that makes it easy \
        to create machine learning models for sports betting \
        and evaluate their performance.'
      },
      {
        job_title: "Engineering CRM Tech & Web , Internship",
        company_place: "Adidas Runtastic GMBH - Vienna, Austria",
        href: "https://www.runtastic.com/",
        dates: "April 2021 - September 2021",
        job_info: 'Internship in Adidas Runtastic on the CRM Tech \
         and Web Team.Actively participated in various tasks for \
         the Web team, and following a well-structured plan, I \
         workd to reconfigure information and knowledge for s\
         pecific programming tools. Following that, I implemented\
         those into a new platform to ensure more smooth \
         onboarding procedures for new interns and configured \
         automated scripts for the internal development environment.'
      },
      {
        job_title: "Junior Frontend Developer",
        company_place: "AlgoWit AI Research - Lisbon, Portugal",
        href: "https://algowit.github.io/",
        dates: "March 2019 - August 2020",
        job_info: 'AlgoWit is an AI research company that aims to \
        develop smart algorithms for various applications including, \
        among others, algorithmic trading, sports betting, and fraud detection.\
        My responsibility is to develop and maintain the companys front end of \
        the website. The initial work, as a member of the front-end team, was to \
        use various tools to generate sketches and in turn a demo \
        for the companys website. The CSS frameworks Bootstrap and Bulma \
        were used as well as Webpack for the build process. In later stages, \
        React and D3.js were also utilized in order to develop interactive \
        pages that present various algorithms to the user. Test-driven development \
        was also practiced with the help of the Mocha framework, while Git was \
        used for version control of the codebase. Development was done on various \
        operating systems including Windows, macOS, and different Linux distributions.'
      }
    ]
  },
  {
    title: "Education",
    content: [
      {
        university: "Hellenic Open University",

        dates: "2019 - 2027",
        study: 'Bachelor of Science in Computer Science',
        href: "https://www.eap.gr/en/",
        courses: [
          {
            inner_title: 'Introduction to Informatics',
            inner_content: [
              
                {title: 'Introduction to Computer Science'},
                {title: 'Introduction to Programming Techniques'},
                {title: 'Introduction to Data Structures'},
                {title: 'Introduction to  Programming languages'},
            ],
          },

          {
            inner_title: 'Mathematics for Informatics I',
            inner_content: [
              {title: 'Linear Algebra'},
              {title: 'Single Variable Calculus'},
              {title: 'Elements of Probability Theory'},
            ],
          },
          {
            inner_title: 'Principles of Software Technology',
            inner_content: [
              {title: 'Software Engineering I'},
              {title: 'Databases'},
              {title: 'Operating Systems I'},
            ],
          },

          {
            inner_title: 'Discrete Mathematics and Mathematical Logic - Ongoing',
            inner_content: [
              {title: 'Discrete Mathematics'},
              {title: 'Graph Theory'},
              {title: 'Mathematical Logic'},
            ],
          },
          {
            inner_title: 'Also there are 7 more courses to follow such as:',
            inner_content: [
              {title: 'Digital Systems'},
              {title: 'Computer Network Fundamentals'},
              {title: 'Software Design'},
              {title: 'Foundations of Computer Science'},
              {title: 'Artificial Intelligence - Applications'},
              {title: 'Signals and Image Processing'},
              {title: 'Linear Programming and Modeling'}
            ],
          },
        ],
      },
    ],

  },
  {
    title: "Skills",
    content: [
      {
        general_info: "Basic - Experimental knowledge and familiar with :",

        subjects: [
          {
            subject_title: 'Programming Languages',
            subject_content: [
              
                {title: 'Javascript , ( For Web Development with HTML & CSS )'},
                {title: 'Python'},
                {title: 'C  , C++'},
                {title: 'Ruby , R , Bash'},
            ],
          },

          {
            subject_title: 'Software Tools',
            subject_content: [
              {title: 'Git'},
              {title: 'Npm'},
              {title: 'Node.js'},
              {title: 'Webpack'},
              {title: 'React.js'},
              {title: 'Backbone.js'},
              {title: 'D3.js'},
              {title: 'SQLAlchemy'},
              {title: 'AWS/Chalice'},
              {title: 'Tone.js'},
              {title: 'Bootstrap, Material UI & Bulma'},
              {title: 'Mocha'},
              {title: 'Gatsby.js, Jekyll & Hugo'},
              {title: 'Electron'},
              {title: 'Selenium'},
              {title: 'Ruby on Rails'},
              {title: 'Ember.js'},
            ],
          },
          {
            subject_title: 'Operating Systems',
            subject_content: [
              {title: 'Linux ( Debian Distributions)'},
              {title: 'Mac OS'},
              {title: 'Windows'},
            ],
          },
        ]
      },
    ],

  },

  {
    title: "Awards & Certifications",
    content: {
      specializations: [
        {
          title: "Python for Everybody Specialization",
          href: "https://www.coursera.org/account/accomplishments/specialization/HNRNTGG36Q6H",
          courses: [
            {
              title: "Using Databases with Python",
              href: "https://www.coursera.org/account/accomplishments/certificate/FJWWA2GTB29J"
            },
            {
              title: "Using Python to Access Web Data",
              href: "https://www.coursera.org/account/accomplishments/certificate/DXV8RWT52L98"
            },
            {
              title: "Python Data Structures",
              href: "https://www.coursera.org/account/accomplishments/certificate/3HNEXUW55UK2"
            },
            {
              title: "Programming for Everybody (Getting Started with Python)",
              href: "https://www.coursera.org/account/accomplishments/certificate/DJ6JKQS6DEKN"
            }
          ]
        },
        {
          title: "Web Design for Everybody: Basics of Web Development & Coding",
          href: "https://www.coursera.org/account/accomplishments/specialization/SL7377JLYYF9",
          courses: [
            {
              title: "Introduction to HTML5",
              href: "https://www.coursera.org/account/accomplishments/certificate/MD26CD8J283G"
            },
            {
              title: "Introduction to CSS3",
              href: "https://www.coursera.org/account/accomplishments/certificate/BLSNDCTC5CDP"
            },
            {
              title: "Interactivity with JavaScript",
              href: "https://www.coursera.org/account/accomplishments/certificate/8RWX3CW2LVR7"
            },
            {
              title: "Advanced Styling with Responsive Design",
              href: "https://www.coursera.org/account/accomplishments/certificate/Z3XDXRZ5MLPW"
            },
            {
              title: "Web Design for Everybody Capstone",
              href: "https://www.coursera.org/account/accomplishments/certificate/9P6G85E9KJDX"
            }
          ]
        },
        {
          title: "Full-Stack Web Development with React",
          href: "https://www.coursera.org/account/accomplishments/specialization/Y5JS7QGZGPMZ",
          courses: [
            {
              title: "Front-End Web UI Frameworks and Tools: Bootstrap 4",
              href: "https://www.coursera.org/account/accomplishments/certificate/9GXTCMWL4X7B"
            },
            {
              title: "Front-End Web Development with React",
              href: "https://www.coursera.org/account/accomplishments/certificate/AGJZ8KHE37CB"
            },
            {
              title: "Multiplatform Mobile App Development with React Native",
              href: "https://www.coursera.org/account/accomplishments/certificate/JSSPFJJ5TACC"
            },
            {
              title: "Server-side Development with NodeJS, Express and MongoDB",
              href: "https://www.coursera.org/account/accomplishments/certificate/ATTB8G9ZEA6G"
            }
          ]
        }
      ],
      courses: [
        {
          title: "Introduction to C++",
          href: "https://courses.edx.org/certificates/765007a8760341fea0a7f573553ed4e2"
        },
        {
          title: "Data Science Math Skills",
          href: "https://www.coursera.org/account/accomplishments/certificate/P773BFUPU2ST"
        },
        {
          title: "Getting Started With Music Theory",
          href: "https://www.coursera.org/account/accomplishments/certificate/BGJAX33JR5KL"
        },
        {
          title: "Code Yourself! An Introduction to Programming",
          href: "https://www.coursera.org/account/accomplishments/certificate/6KSRBF356FLQ"
        },
        {
          title: "Modern JavaScript: ES6 Basics",
          href: "https://www.coursera.org/account/accomplishments/certificate/TLMDDZ27YHPN"
        },
        {
          title: "Modern Open Source Software Development Methods",
          href: "https://www.coursera.org/account/accomplishments/verify/CWUXG5GK6W8Q"
        }
      ],
      currently_enrolled: [
        {
          title: "Google IT Support Professional Certificate",
          href: "https://www.coursera.org/programs/3ad8a40a-75b5-489c-9337-ffa78ba3842e/browse?productId=7lHCSlFIEeeffRIHljDI_g&productType=s12n&query=Google+IT+Support&showMiniModal=true",
          courses: [
            {
              title: "Technical Support Fundamentals",
              href: "https://www.coursera.org/learn/technical-support-fundamentals/home/welcome"
            },
            {
              title: "The Bits and Bytes of Computer Networking",
              href: "https://www.coursera.org/learn/computer-networking/home/welcome"
            },
            {
              title: "Operating Systems and You: Becoming a Power User (pending)",
              href:"https://www.coursera.org/learn/os-power-user"
            },
            {
              title: "System Administration and IT Infrastructure Services (pending)",
              href:"https://www.coursera.org/learn/system-administration-it-infrastructure-services"
            },
            {
              title: "IT Security: Defense against the digital dark arts (pending)",
              href:"https://www.coursera.org/learn/it-security"
            }
          ]
        }
      ]
    }
  },
  {
    title: "Latest Projects",
    content: [
      {
        title: "Recipe Cost Calculator",
        href: "https://gmoraitis.github.io/Recipe-Cost-Calculator/",
        description: "A simple recipe cost calculator that allows you to calculate the cost of a recipe based on the cost of the ingredients."      
      },
      {
        title: "Synth M-01",
        href: "https://gmoraitis.github.io/synth_m01/",
        description: "This Tone.js Synth Application (M-01) is a versatile web-based synthesizer built using the Tone.js library."      
      },

    ]
  },
  {
    title: "Blog",
    content: "Blog content goes here..."
  },
  
  {
    title: "Interests",
  },

];

export default data;
