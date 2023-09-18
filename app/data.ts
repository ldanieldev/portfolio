import { BsFiletypeXml } from 'react-icons/bs'
import {
  FaGlobe,
  FaPencilRuler,
  FaSearchDollar,
  FaShoppingCart,
} from 'react-icons/fa'
import { MdColorLens, MdDevicesOther } from 'react-icons/md'
import {
  SiAngular,
  SiBitbucket,
  SiBootstrap,
  SiCplusplus,
  SiCss3,
  SiExpress,
  SiGit,
  SiGitea,
  SiGithub,
  SiGrunt,
  SiGulp,
  SiHtml5,
  SiIntellijidea,
  SiJavascript,
  SiJquery,
  SiMagento,
  SiMicrosoft,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiNpm,
  SiPhp,
  SiPostman,
  SiReact,
  SiSap,
  SiSass,
  SiShopify,
  SiTailwindcss,
  SiTypescript,
  SiVisualstudiocode,
  SiWordpress,
} from 'react-icons/si'
import { TbJson, TbSql } from 'react-icons/tb'
import logo from '../public/img/le-andris-daniel-logo.svg'
import Project from './interfaces/Project'
import SkillList from './interfaces/SkillList'

export const Meta = {
  title: 'Portfolio of JavaScript Web Developer Le-Andris Daniel',
  description:
    'Portfolio of JavaScript web developer Le-Andris Daniel based in Saint Peters, MO. I develop HTML5, CSS3, and JavaScript webpages and web apps using clean and valid coding standards.',
  url: 'https://ldanieldev.com',
  keywords: [
    'JavaScript',
    'Web Development',
    'HTML5',
    'CSS3',
    'PHP',
    'PHP development',
    'css',
    'design to code',
    'missouri web developer',
    'web developer missouri',
    'web design',
    'Le-Andris Daniel',
  ],
  email: 'ldaniel38@gmail.com',
  logo: 'https://www.ldanieldev.com' + logo.src,
}

export const EmploymentHistory = [
  {
    location: 'Saint Louis, Missouri',
    name: 'World Wide Technology',
    positions: [
      {
        date: 'May 2022 - March 2023',
        duties: [
          'Support and enhance legacy web applications for timekeeping and benefit tracking.',
          'Update configurations to UKG Kronos Timekeeping to accommodate new HR story requirements.',
          'Support and enhance legacy web APIs.',
          'Implement strategic projects that improve operational efficiency across the Human Resources Organization.',
          'Support weekly payroll processing audits by finding and reconciling any erroneous data in the captured records.',
          'Work within an agile team to prioritize and plan development and user stories.',
        ],
        title: 'Developer',
      },
    ],
  },
  {
    location: 'Columbia, Maryland',
    name: 'Movilitas',
    positions: [
      {
        date: 'December 2017 - May 2022',
        duties: [
          'Web app programming, and support for SAP MII web apps to meet unique manufacturing needs and processes.',
          'Develop BLS Transactions to support manufacturing data processing requirements.',
          'Develop user interface screens with various web development tools (SAP UI5, HTML, CSS, JavaScript, Etc.)',
          'Develop required SQL tables, and queries to support manufacturing application requirements.',
          'Identified, recommended, and prioritized new web technologies, features, and applications in conjunction with business leaders and department managers',
          'Research and development of company best practices for SAPUI5, and emerging web technologies',
          'Create reporting dashboards and scoreboards to support business admin processes and workflows',
        ],
        title: 'MII UX/UI Consultant',
      },
    ],
  },
  {
    location: 'Arlington Heights, Illinois',
    name: 'Seeit Solutions',
    positions: [
      {
        date: 'December 2012 - December 2017',
        duties: [
          'Web application programming, and support for SAP MII applications to meet unique manufacturing needs and processes.',
          'Develop custom BLS Transactions to support manufacturing process requirements.',
          'Develop user interface screens with various web development tools (SAP UI5, Angular, HTML5, CSS, Etc.)',
          'Develop required SQL tables, and queries to support manufacturing application requirements.',
          'Perform internal software and functional testing.',
          "Participate in change management activities to train a client's staff on using created software",
          'Identified, recommended, and prioritized new Web features and applications in conjunction with business leaders and department managers',
          'Conducted research into current and emerging Web technologies and issues in support of Web development efforts',
          'Create reporting dashboards and scoreboards to support business admin processes and workflows',
        ],
        title: 'MII UX/UI Consultant',
      },
    ],
  },
  {
    location: 'Saint Louis, Missouri',
    name: 'TriLeaf Designs',
    positions: [
      {
        date: 'November 2011 - November 2012',
        duties: [
          "Manage company and clients' website security, hosting, domain names, and databases. ",
          'Coordinate, plan, and manage the projects and activities of the Web Department.',
          'Train and mentor new web programming interns.',
          'Converting PSD designs to full-fledged responsive webpages',
          'Website SEO coding and implementation',
          "Maintain, recommend, and implement new solutions to the company's web infrastructure",
          'Work closely with UX/UI designers, other web developers, and project stakeholders to understand requirements and translate into well-formed code',
          'Develop and implement hand coded HTML, CSS, JavaScript, & PHP for public-facing websites, landing pages, CMS, Email Templates, etc.',
          'Develop backend logic and database connections for websites with PHP and SQL',
          'Develop, maintain, and enhance WordPress websites, themes, and plugins',
        ],
        title: 'Lead Web Programmer',
      },
      {
        date: 'August 2011 - November 2011',
        duties: [
          'Work closely with UX/UI designers, other web developers, and project managers to understand requirements and translate into well-formed code',
          'Converting PSD designs to full-fledged responsive webpages',
          'Website SEO coding and implementation',
          'Develop and implement hand coded HTML, CSS, JavaScript, & PHP for public-facing websites, landing pages, CMS, Email Templates, etc.',
          'Develop backend logic and database connections for websites using PHP',
          'Develop, maintain, and enhance WordPress websites, themes, and plugins',
        ],
        title: 'Web Programmer Intern',
      },
    ],
  },
  {
    location: 'Saint Charles, Missouri',
    name: 'Lindenwood University',
    positions: [
      {
        date: 'August 2009 - August 2011',
        duties: [
          'Manage the diverse concerns of students, parents, and faculty',
          'Coordinate activates with the Resident Director and Resident Assistants',
          'Mediate roommate conflicts and oversee room change process',
          'Plan and implement social activities',
          'Provide leadership in emergency situations as needed within the dorm and community',
          'Assist and support residents with the day to day personal, social, academic, and occupational challenges of university life',
        ],
        title: 'Assistant Resident Director',
      },
      {
        date: 'August 2008 - August 2009',
        duties: [
          'Assist in the supervision of the residence hall, responding to all requests and emergencies',
          'Mediate roommate conflicts and oversee room change process',
          'Provide leadership in emergency situations as needed within the dorm and community',
          'Assist and support residents with the day-to-day personal, social, academic, and occupational challenges of university life',
        ],
        title: 'Resident Assistant',
      },
    ],
  },
]

export const SkillLists: SkillList = {
  languages: {
    title: 'Coding Languages',
    skills: {
      html: { name: 'HTML5', icon: SiHtml5, color: '#F06529' },
      css: { name: 'CSS3', icon: SiCss3, color: '#2965f1' },
      php: { name: 'PHP', icon: SiPhp, color: '#777bb3' },
      javaScript: {
        name: 'JavaScript',
        icon: SiJavascript,
        color: '#f7df1e',
      },
      typeScript: {
        name: 'TypeScript',
        icon: SiTypescript,
        color: '#3178c6',
      },
      jQuery: { name: 'JQuery', icon: SiJquery, color: '#0868ac' },
      sql: { name: 'SQL', icon: TbSql, color: '#fff' },
      xml: { name: 'XML', icon: BsFiletypeXml, color: '#000' },
      json: { name: 'JSON', icon: TbJson, color: '#fff' },
      cpp: { name: 'C++', icon: SiCplusplus, color: '#00599C' },
    },
  },
  frameworks: {
    title: 'Frameworks / Libraries / CMSs',
    skills: {
      react: { name: 'React', icon: SiReact, color: '#61dafb' },
      nextJs: { name: 'Next.js', icon: SiNextdotjs, color: '#000' },
      angular: { name: 'Angular', icon: SiAngular, color: '#a6120d' },
      nodeJs: { name: 'Node.js', icon: SiNodedotjs, color: '#689f63' },
      expressJs: { name: 'Express.js', icon: SiExpress, color: '#000' },
      mongoose: { name: 'Mongoose', icon: SiMongodb, color: '#800' },
      sapUI5: { name: 'SAPUI5', icon: SiSap, color: '#1873B4' },
      bootstrap: { name: 'Bootstrap', icon: SiBootstrap, color: '#9013fe' },
      tailWindCss: {
        name: 'TailWind CSS',
        icon: SiTailwindcss,
        color: '#07B6D5',
      },
      magento: { name: 'Magento', icon: SiMagento, color: '#f26322' },
      wordPress: { name: 'WordPress', icon: SiWordpress, color: '#464342' },
      shopify: { name: 'Shopify', icon: SiShopify, color: '#95BF47' },
    },
  },
  tools: {
    title: 'Tools / Platforms',
    skills: {
      git: { name: 'Git', icon: SiGit, color: '#f05133' },
      github: { name: 'GitHub', icon: SiGithub, color: '#1B1F23' },
      gitea: { name: 'Gitea', icon: SiGitea, color: '#609926' },
      bitBucket: { name: 'Bitbucket', icon: SiBitbucket, color: '#2684ff' },
      mongoDB: { name: 'MongoDB', icon: SiMongodb, color: '#10aa50' },
      npm: { name: 'NPM', icon: SiNpm, color: '#CB3837' },
      postman: { name: 'Postman', icon: SiPostman, color: '#ff6c37' },
      sass: { name: 'Sass', icon: SiSass, color: '#CD6799' },
      MySQL: { name: 'MySQL', icon: SiMysql, color: '#00758f' },
      msSQL: { name: 'MS SQL Server', icon: SiMicrosoft, color: '#00A4EFFF' },
      sapMII: { name: 'SAP MII', icon: SiSap, color: '#1873B4' },
      vsCode: {
        name: 'Visual Studio',
        icon: SiVisualstudiocode,
        color: '#00A4EFFF',
      },
      intelliJ: { name: 'IntelliJ IDEA', icon: SiIntellijidea, color: '#000' },
      grunt: { name: 'Grunt', icon: SiGrunt, color: '#FBA919' },
      gulp: { name: 'Gulp', icon: SiGulp, color: '#DA4648' },
    },
  },
}

export const Projects: Project[] = [
  {
    slug: 'divine-tree-coffee-store',
    categories: ['eCommerce'],
    title: 'divine tree coffee store',
    summary:
      'An e-commerce website I designed and setup using the Shopify platform for a coffee and tea retailer.',
    description:
      'An e-commerce website I designed and setup using the Shopify platform for a coffee and tea retailer.',
    featureImg: 'divine-tree-coffee-store.jpeg',
    liveUrl: 'https://www.divinetreecoffee.com/',
    projectDetails: [
      'Custom theme design & code to extend the Dawn base theme',
      'Navbar menu design with category images driven from the admin panel featured image setting',
      'Integrated solution to facilitate subscription based purchases',
      'Ensure compatibility in all modern browsers',
      'Responsive design for multiple devices',
    ],
    languages: [
      SkillLists.languages.skills.html,
      SkillLists.languages.skills.css,
      SkillLists.languages.skills.javaScript,
    ],
    frameworks: [SkillLists.frameworks.skills.shopify],
    imageList: ['1.jpg', '2.jpg', '3.jpg'],
  },
  {
    slug: 'sapui5-bakery-app',
    categories: ['webApp'],
    title: 'SAPUI5 Bakery App',
    summary: 'A product recipe and ingredient management demo application.',
    description: 'A product recipe and ingredient management demo application.',
    featureImg: 'sapui5-bakery-app.jpeg',
    demoUrl: 'https://sapui5bakeryapp.ldanieldev.com/',
    codeUrl: 'https://github.com/ldanieldev/ui5bakeryApp',
    projectDetails: [
      'Backend API using ExpressJs & MongoDB.',
      'Image uploading & handling through Cloudinary',
      'Light & dark theme switching with automatic system theme detection',
      'Ensure compatibility in all modern browsers',
      'Responsive design for optimized for desktop and tablet devices',
    ],
    languages: [
      SkillLists.languages.skills.html,
      SkillLists.languages.skills.css,
      SkillLists.languages.skills.javaScript,
      SkillLists.languages.skills.json,
      SkillLists.languages.skills.xml,
    ],
    frameworks: [
      SkillLists.frameworks.skills.nodeJs,
      SkillLists.frameworks.skills.expressJs,
      SkillLists.frameworks.skills.sapUI5,
      SkillLists.frameworks.skills.mongoose,
    ],
    tools: [SkillLists.tools.skills.npm, SkillLists.tools.skills.mongoDB],
    imageList: ['1.jpeg'],
  },
  {
    slug: 'le-andris-daniel-portfolio',
    categories: ['webApp', 'website'],
    title: 'My Dev Portfolio',
    summary:
      'A portfolio that I designed and coded for myself to showcase some of my web development projects that I have completed.',
    description:
      "A portfolio that I designed and coded for myself to showcase some of my web development projects that I have completed. This portfolio shows off the progression in my coding skills from the time I began developing websites up until now. I'm always learning new tools and ways to develop more efficiently, and refactor my code to make it more concise.",
    featureImg: 'le-andris-daniel-portfolio.png',
    liveUrl: Meta.url,
    codeUrl: 'https://github.com/ldanieldev/portfolio',
    projectDetails: [
      'Nextjs 13 app router',
      'Search Engine Optimization (SEO)',
      'Ensure compatibility in all modern browsers',
      'Responsive design for multiple devices',
    ],
    languages: [
      SkillLists.languages.skills.html,
      SkillLists.languages.skills.css,
      SkillLists.languages.skills.javaScript,
      SkillLists.languages.skills.typeScript,
      SkillLists.languages.skills.json,
    ],
    frameworks: [
      SkillLists.frameworks.skills.nextJs,
      SkillLists.frameworks.skills.tailWindCss,
    ],
    tools: [SkillLists.tools.skills.npm],
    imageList: ['1.jpg', '2.jpg', '3.jpg'],
  },
  {
    slug: 'g-bravo-music',
    categories: ['website'],
    description:
      'A Squarespace website I designed and coded for a local artist based in Saint Louis, Missouri. The client needed a solution to feature their music library and upcoming events, integrates their party newsletter solution, and web analytics to track website metrics and traffic sources.',
    featureImg: 'g-bravo-music/g-bravo-music.png',
    liveUrl: 'http://gbravomusic.com',
    projectDetails: [
      'Custom theme design',
      'Integration of third-party plugin for newsletter signUps',
      'Integration of Sound Cloud plugin for music playback and downloads',
      'Ensure compatibility in all modern browsers',
      'Responsive design for multiple devices',
    ],
    summary:
      'A website I designed and developed for the hip-hop/rap artist G. Bravo',
    title: 'G. Bravo Music Website',
    languages: [
      SkillLists.languages.skills.html,
      SkillLists.languages.skills.css,
      SkillLists.languages.skills.javaScript,
    ],
    imageList: ['1.jpg'],
  },
  {
    slug: 'g-bravo-store',
    categories: ['eCommerce'],
    description:
      'An e-commerce website I created for the local artist G. Bravo in the Saint Louis, Missouri. The client needed their Shopify theme coded to match their new website solution.',
    featureImg: 'g-bravo-store.png',
    liveUrl: '',
    projectDetails: [
      'Custom theme design',
      'Custom theme design coded to match the design of the G. Bravo Music website',
      'Ensure compatibility in all modern browsers',
      'Responsive design for multiple devices',
    ],
    summary:
      'An e-commerce website I created for the local artist G. Bravo in the Saint Louis, Missouri.',
    title: 'G. Bravo Merchandise Store',
    languages: [
      SkillLists.languages.skills.html,
      SkillLists.languages.skills.css,
      SkillLists.languages.skills.javaScript,
    ],
    frameworks: [SkillLists.frameworks.skills.shopify],
    imageList: ['1.jpg'],
  },
  {
    slug: 'rc-compucare',
    categories: ['website'],
    description:
      'A website I designed and coded for a computer repair company based on the island of Saint Kitts.',
    featureImg: 'rc-compucare.png',
    projectDetails: [
      'Custom website design',
      'jQuery Image Slider',
      'Ajax Customer Support Chat Client',
      'Facebook API Integration',
      'PHP RSS Feed Readers',
      'Compatible in IE7+, Firefox, Safari, Chrome, and Opera',
    ],
    languages: [
      SkillLists.languages.skills.html,
      SkillLists.languages.skills.css,
      SkillLists.languages.skills.javaScript,
      SkillLists.languages.skills.jQuery,
      SkillLists.languages.skills.php,
    ],
    summary:
      'A website I designed and coded for a computer repair company based on the island of Saint Kitts.',
    title: 'RC Compucare',
    imageList: ['1.jpg'],
  },
  {
    categories: ['website'],
    description:
      'A website I coded for a medical waste disposal company of St. Louis.',
    featureImg: 'gateway-medical-disposal.png',
    slug: 'gateway-medical-disposal',
    projectDetails: [
      'jQuery banner slider',
      'Compatible in IE7+, Firefox, Safari, Chrome, and Opera',
      'Designed by <a href="http://www.trileafdesigns.com" target="_blank">TriLeaf Designs</a>',
    ],
    summary:
      'A website I coded for a medical waste disposal company in St. Louis.',
    title: 'Gateway Medical Disposal',
    languages: [
      SkillLists.languages.skills.html,
      SkillLists.languages.skills.css,
      SkillLists.languages.skills.jQuery,
    ],
    imageList: ['1.jpg'],
  },
  {
    categories: ['website'],
    description:
      'A website I coded for a reputable, family-owned exterior remodeling and construction company in St. Louis.',
    featureImg: 'jh-exteriors.png',
    slug: 'jh-exteriors',
    projectDetails: [
      'Query homepage slider',
      'jQuery animated drop-down menu',
      'Compatible in IE7+, Firefox, Safari, Chrome, and Opera',
      'Designed by <a href="http://www.trileafdesigns.com" target="_blank">TriLeaf Designs</a>',
    ],
    languages: [
      SkillLists.languages.skills.html,
      SkillLists.languages.skills.css,
      SkillLists.languages.skills.jQuery,
    ],
    summary:
      'A website I coded for a exterior remodeling and construction company in St. Louis.',
    title: 'JH Exteriors',
    imageList: ['1.jpg'],
  },
  {
    categories: ['cms'],
    description:
      'A WordPress website I coded for a Missouri divorce, family law and personal injury lawyer.',
    featureImg: 'law-donovan.png',
    slug: 'law-donovan',
    liveUrl: 'https://www.lawdonovan.com/',
    projectDetails: [
      'Custom coded WordPress theme',
      'Compatible in IE8+, Firefox, Safari, Chrome, and Opera',
      'Designed by <a href="http://www.trileafdesigns.com" target="_blank">TriLeaf Designs</a>',
    ],
    summary:
      'A WordPress website I coded for a Missouri divorce, family law and personal injury lawyer.',
    title: 'JoAnn C Donovan LLC',
    languages: [
      SkillLists.languages.skills.html,
      SkillLists.languages.skills.css,
      SkillLists.languages.skills.jQuery,
      SkillLists.languages.skills.php,
    ],
    frameworks: [SkillLists.frameworks.skills.wordPress],
    imageList: ['1.jpg'],
  },
  {
    categories: ['website'],
    description:
      'A website I coded for a certified home and commercial plumbing company in Missouri.',
    featureImg: 'ps-rapp.png',
    slug: 'ps-rapp',
    liveUrl: '',
    projectDetails: [
      'Compatible in IE7+, Firefox, Safari, Chrome, and Opera',
      'Designed by <a href="http://www.trileafdesigns.com" target="_blank">TriLeaf Designs</a>',
    ],
    summary:
      'A website I coded for a certified home and commercial plumbing company in Missouri.',
    title: 'PS Rapp Sewer and Plumbing',
    languages: [
      SkillLists.languages.skills.html,
      SkillLists.languages.skills.css,
    ],
    imageList: ['1.jpg'],
  },
  {
    categories: ['cms'],
    description: 'A WordPress blog I coded for a St. Louis skin care company.',
    featureImg: 'rx-systems-blog.png',
    slug: 'rx-systems-blog',
    projectDetails: [
      'Custom coded wordpress theme',
      'Compatible in IE7+, Firefox, Safari, Chrome, and Opera',
      'Designed by <a href="http://www.trileafdesigns.com" target="_blank">TriLeaf Designs</a>',
    ],
    summary: 'A WordPress blog I coded for a St. Louis skin care company.',
    title: 'Rx Systems Blog',
    languages: [
      SkillLists.languages.skills.html,
      SkillLists.languages.skills.css,
      SkillLists.languages.skills.php,
    ],
    frameworks: [SkillLists.frameworks.skills.wordPress],
    imageList: ['1.jpg'],
  },
  {
    categories: ['website'],
    description:
      'The main website of a marketing, web programming, and graphic design company in St. Louis where I worked as the lead web developer. Featured a dynamic header that pushed SEO metadata unique to each page. As well as a custom social media bar solution with multiple integration such as, Facebook, Twitter, LinkedIn, etc., that allowed for liking, re-tweeting and sharing of website and individual pages.',
    featureImg: 'trileaf-designs.png',
    slug: 'trileaf-designs',
    projectDetails: [
      'PHP based dynamic SEO metadata definitions per page',
      'jQuery homepage slider',
      'jQuery/PHP based Wordpress RSS feed pulls',
      'Custom coded jQuery/PHP Social Media Bar',
      'Compatible in IE7+, Firefox, Safari, Chrome, and Opera',
      'Designed by <a href="http://www.trileafdesigns.com" target="_blank">TriLeaf Designs</a>',
    ],
    summary:
      'The main website of a marketing, web programming, and graphic design company in St. Louis where I worked as the lead web developer.',
    title: 'TriLeaf Designs',
    languages: [
      SkillLists.languages.skills.html,
      SkillLists.languages.skills.css,
      SkillLists.languages.skills.javaScript,
      SkillLists.languages.skills.jQuery,
      SkillLists.languages.skills.php,
    ],
    imageList: ['1.jpg'],
  },
  {
    categories: ['eCommerce'],
    description:
      'A Magento e-commerce website I coded for Trileaf Designs LLC in St. Louis to facilitate ordering customized Take Shape for Life marketing materials for coaches.',
    featureImg: 'trileaf-tsfl-store.png',
    slug: 'trileaf-tsfl-store',
    projectDetails: [
      'Custom Coded Store Theme to match main company website',
      'Compatible in IE7+, Firefox, Safari, Chrome, and Opera',
      'Designed by <a href="http://www.trileafdesigns.com" target="_blank">TriLeaf Designs</a>',
    ],
    summary:
      'A Magento e-commerce website I coded for life coaches to order customized marketing materials',
    title: 'TriLeaf Designs - Take Shape for Life Store',
    languages: [
      SkillLists.languages.skills.html,
      SkillLists.languages.skills.css,
      SkillLists.languages.skills.javaScript,
      SkillLists.languages.skills.jQuery,
      SkillLists.languages.skills.php,
    ],
    frameworks: [SkillLists.frameworks.skills.magento],
    imageList: ['1.jpg'],
  },
  {
    categories: ['cms'],
    description:
      'A WordPress blog I coded for a certified custom sign and banner company in St. Louis.',
    featureImg: 'zane-williams-blog.png',
    slug: 'zane-williams-blog',
    projectDetails: [
      'Custom coded wordpress theme',
      'Compatible in IE7+, Firefox, Safari, Chrome, and Opera',
      'Designed by <a href="http://www.trileafdesigns.com" target="_blank">TriLeaf Designs</a>',
    ],
    summary:
      'A WordPress blog I coded for a certified custom sign and banner company in St. Louis.',
    title: 'Zane Williams Blog',
    languages: [
      SkillLists.languages.skills.html,
      SkillLists.languages.skills.css,
      SkillLists.languages.skills.php,
    ],
    frameworks: [SkillLists.frameworks.skills.wordPress],
    imageList: ['1.jpg'],
  },
  {
    categories: ['website'],
    description:
      'An e-newsletter template I coded for a certified custom sign and banner company in St. Louis. Each part of the template was clearly outlined and coded in a way that allows for easy content changes by non-technical and  creative professionals.',
    featureImg: 'zane-williams-e-newsletter-template.png',
    slug: 'zane-williams-e-newsletter-template',
    projectDetails: [
      'Compatible in Hotmail, Gmail, Mozilla Thunderbird, Apple Mail, and Yahoo Mail clients',
      'Designed by <a href="http://www.trileafdesigns.com" target="_blank">TriLeaf Designs</a>',
    ],
    summary:
      'An e-newsletter template I coded for a certified custom sign and banner company in St. Louis.',
    title: 'Zane Williams E-Newsletter Template',
    languages: [
      SkillLists.languages.skills.html,
      SkillLists.languages.skills.css,
    ],
    imageList: ['1.jpg', 'top.jpg', 'middle.jpg', 'bottom.jpg'],
  },
]

export const Techniques = [
  {
    desc: 'I ensure maximum compatibly of websites. Make sure it looks the same in all browsers and operating systems.',
    icon: MdDevicesOther,
    title: 'Cross-Browser Compatibility',
  },
  {
    desc: 'Ensure your website is found on the web with search engine optimization and keyword analysis.',
    icon: FaSearchDollar,
    title: 'Search Engine Optimization',
  },
  {
    desc: 'Shopping carts, and payment solutions though systems like Magento, WordPress and PayPal.',
    icon: FaShoppingCart,
    title: 'E-Commerce',
  },
  {
    desc: 'Make sure your website looks the same in all devices and operating systems.',
    icon: FaPencilRuler,
    title: 'Responsive Design',
  },
  {
    desc: 'Rich, clean website development using HTML, PHP, jQuery, and frameworks such as WordPress and Magento.',
    icon: FaGlobe,
    title: 'Web Development',
  },
  {
    desc: 'Convert Adobe Illustrator and PhotoShop designs into a HTML or PHP website with great attention to detail.',
    icon: MdColorLens,
    title: 'Designs to Code',
  },
]
