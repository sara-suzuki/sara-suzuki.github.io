// =====================================================
// SITE CONFIGURATION
// Edit this file to customize your website content
// =====================================================

const CONFIG = {
  // ----- PERSONAL INFO -----
  name: "Your Name",
  title: "Community Organizer & Advocate",
  tagline: "Building bridges, fostering connections, creating change.",
  
  // ----- CONTACT INFO -----
  contact: {
    email: "hello@example.com",
    linkedin: "https://linkedin.com/in/yourprofile",
    twitter: "https://twitter.com/yourhandle",
    location: "City, State/Country",
    // Add or remove contact methods as needed
  },

  // ----- NAVIGATION -----
  // Set enabled: false to hide a page from navigation
  navigation: [
    { name: "About", href: "index.html", enabled: true },
    { name: "Values", href: "pillars.html", enabled: true },
    { name: "CV", href: "cv.html", enabled: false },
    { name: "Speaking", href: "speaking.html", enabled: true },
    { name: "Projects", href: "projects.html", enabled: true },
    { name: "Publications", href: "publications.html", enabled: true },
    { name: "Press", href: "press.html", enabled: true },
    { name: "LPA Toolkit", href: "toolkit.html", enabled: false },
  ],

  // ----- ABOUT PAGE -----
  about: {
    intro: "I'm a community organizer passionate about grassroots movements and building authentic connections that drive meaningful change.",
    bio: [
      "With over a decade of experience in community organizing, I've dedicated my career to amplifying voices that often go unheard and creating spaces where everyone can contribute to collective action.",
      "My work spans policy advocacy, coalition building, and developing practical tools that empower communities to organize effectively.",
      "I believe in the power of relationships—that lasting change happens when we invest in genuine connections and work together toward shared goals."
    ],
    // Profile image (place in /images/ folder)
    image: "images/profile.jpg"
  },

  // ----- PILLARS/VALUES PAGE -----
  pillars: [
    {
      title: "Community First",
      icon: "🤝",
      description: "Every decision starts with the community. We listen before we act, and we ensure that those most affected by issues have the loudest voice in shaping solutions."
    },
    {
      title: "Radical Inclusion",
      icon: "🌍",
      description: "Building movements that welcome everyone, particularly those historically marginalized. Diversity isn't just valued—it's essential."
    },
    {
      title: "Relational Power",
      icon: "💪",
      description: "True power comes from authentic relationships. We invest in connections that transcend transactional interactions and build lasting solidarity."
    },
    {
      title: "Transparent Action",
      icon: "🔍",
      description: "We operate with openness and accountability. Our processes, decisions, and finances are accessible to all stakeholders."
    },
    {
      title: "Sustainable Change",
      icon: "🌱",
      description: "Quick wins matter, but we're building for the long haul. Our strategies prioritize lasting impact over temporary victories."
    }
  ],

  // ----- CV PAGE -----
  cv: {
    downloadFile: "files/cv.pdf",
    summary: "A community organizer with expertise in coalition building, policy advocacy, and grassroots campaign development.",
    sections: [
      {
        title: "Experience",
        items: [
          {
            role: "Executive Director",
            organization: "Community Action Network",
            period: "2020 - Present",
            description: "Leading a coalition of 50+ organizations focused on housing justice and economic equity."
          },
          {
            role: "Senior Organizer",
            organization: "Grassroots Leadership Initiative",
            period: "2016 - 2020",
            description: "Developed training programs for emerging community leaders across 12 states."
          },
          {
            role: "Campaign Coordinator",
            organization: "People's Voice Coalition",
            period: "2012 - 2016",
            description: "Coordinated voter engagement campaigns reaching 100,000+ community members."
          }
        ]
      },
      {
        title: "Education",
        items: [
          {
            role: "Master of Public Policy",
            organization: "University Name",
            period: "2012",
            description: "Focus on community development and nonprofit management."
          },
          {
            role: "Bachelor of Arts, Sociology",
            organization: "University Name",
            period: "2010",
            description: "Minor in Political Science."
          }
        ]
      }
    ]
  },

  // ----- SPEAKING PAGE -----
  speaking: {
    intro: "I speak on topics related to community organizing, grassroots leadership, and building sustainable movements for change.",
    topics: [
      {
        title: "Building Relational Power",
        description: "How authentic relationships form the foundation of effective organizing and lasting change."
      },
      {
        title: "From Grassroots to Policy",
        description: "Strategies for translating community voice into legislative action."
      },
      {
        title: "Inclusive Movement Building",
        description: "Creating organizations and campaigns that center marginalized voices."
      },
      {
        title: "The LPA Framework",
        description: "Introduction to the Leadership, Power, and Action toolkit for community organizers."
      }
    ],
    pastEngagements: [
      {
        event: "National Organizing Conference",
        type: "Keynote",
        date: "March 2024",
        location: "Chicago, IL"
      },
      {
        event: "Community Leadership Summit",
        type: "Workshop",
        date: "November 2023",
        location: "Atlanta, GA"
      },
      {
        event: "Grassroots Power Forum",
        type: "Panel",
        date: "June 2023",
        location: "Virtual"
      },
      {
        event: "State Policy Conference",
        type: "Keynote",
        date: "February 2023",
        location: "Austin, TX"
      }
    ],
    bookingNote: "Interested in having me speak at your event? Please reach out via email to discuss availability and topics."
  },

  // ----- PROJECTS PAGE -----
  // Each project has a card view and a detail page
  // - id: unique identifier (used for URL: project-{id}.html)
  // - coverImage: image shown on project card (place in images/projects/)
  // - shortDescription: shown on the projects grid
  // - fullDescription: array of paragraphs shown on detail page
  // - gallery: array of images for the detail page
  // - relatedPublications: array of publication titles (must match exactly)
  // - relatedPress: array of press titles (must match exactly)
  projects: [
    {
      id: "community-voices",
      title: "Community Voices Coalition",
      status: "Active",
      coverImage: "images/projects/community-voices.jpg",
      shortDescription: "A multi-organization alliance focused on amplifying resident voices in local policy decisions.",
      fullDescription: [
        "The Community Voices Coalition brings together over 50 organizations across 15 cities to ensure that residents have a meaningful seat at the table when policy decisions are made that affect their communities.",
        "Through coordinated advocacy, shared training resources, and joint campaigns, we've successfully influenced housing policy, environmental justice initiatives, and local budget priorities.",
        "Our model emphasizes deep community engagement over token participation, ensuring that the people most affected by policies are leading the conversations about solutions."
      ],
      gallery: [
        "images/projects/community-voices-1.jpg",
        "images/projects/community-voices-2.jpg",
        "images/projects/community-voices-3.jpg"
      ],
      externalLink: "https://example.com/community-voices",
      relatedPublications: [
        "Building Power from the Ground Up: A Framework for Community Organizing",
        "Coalition Building Across Difference"
      ],
      relatedPress: [
        "Local Organizer Wins National Recognition for Housing Work"
      ]
    },
    {
      id: "organizer-training",
      title: "Organizer Training Academy",
      status: "Active",
      coverImage: "images/projects/training-academy.jpg",
      shortDescription: "A 12-week intensive program training the next generation of community leaders.",
      fullDescription: [
        "The Organizer Training Academy is a comprehensive 12-week program designed to equip emerging leaders with the skills, frameworks, and networks they need to build power in their communities.",
        "Since 2018, we've graduated over 500 organizers who are now leading campaigns across the country. Our curriculum covers everything from one-on-one relational meetings to large-scale campaign strategy.",
        "The program combines in-person intensive sessions with ongoing mentorship and peer support, creating lasting connections among cohort members."
      ],
      gallery: [
        "images/projects/training-1.jpg",
        "images/projects/training-2.jpg"
      ],
      externalLink: "",
      relatedPublications: [
        "The Leadership-Power-Action Model",
        "Relational Organizing in the Digital Age"
      ],
      relatedPress: [
        "Interview: The Future of Grassroots Organizing"
      ]
    },
    {
      id: "housing-justice",
      title: "Housing Justice Campaign",
      status: "Completed",
      coverImage: "images/projects/housing-justice.jpg",
      shortDescription: "Successful campaign that resulted in tenant protection legislation in three municipalities.",
      fullDescription: [
        "The Housing Justice Campaign was a two-year effort to pass comprehensive tenant protection legislation in response to rising displacement and housing instability.",
        "Through a combination of tenant organizing, coalition building, and strategic media engagement, we successfully passed legislation in three municipalities that included rent stabilization, just-cause eviction protections, and anti-harassment provisions.",
        "The campaign demonstrated the power of centering directly affected community members in advocacy efforts, with tenant leaders serving as the primary spokespeople and decision-makers throughout."
      ],
      gallery: [
        "images/projects/housing-1.jpg",
        "images/projects/housing-2.jpg",
        "images/projects/housing-3.jpg",
        "images/projects/housing-4.jpg"
      ],
      externalLink: "",
      relatedPublications: [
        "Measuring Community Power: A Practitioner's Guide"
      ],
      relatedPress: [
        "Local Organizer Wins National Recognition for Housing Work",
        "Profile: Building Bridges in Divided Times"
      ]
    },
    {
      id: "digital-toolkit",
      title: "Digital Organizing Toolkit",
      status: "Active",
      coverImage: "images/projects/digital-toolkit.jpg",
      shortDescription: "Open-source resources for organizations adapting to hybrid and remote organizing strategies.",
      fullDescription: [
        "The Digital Organizing Toolkit is a free, open-source collection of resources designed to help community organizations adapt their strategies for hybrid and remote contexts.",
        "Developed in response to the challenges organizations faced during the pandemic, the toolkit includes guides for virtual one-on-ones, online meeting facilitation, digital campaign strategies, and maintaining relational culture in remote settings.",
        "The toolkit is continuously updated based on feedback from practitioners and emerging best practices in the field."
      ],
      gallery: [
        "images/projects/digital-1.jpg"
      ],
      externalLink: "https://example.com/digital-toolkit",
      relatedPublications: [
        "Relational Organizing in the Digital Age",
        "Five Lessons from Grassroots Campaigns"
      ],
      relatedPress: []
    }
  ],

  // ----- PUBLICATIONS PAGE -----
  // Available categories: "Book Chapter", "Report", "Web Article", "Journal Article"
  // - link: URL to external publication (journal website, publisher, etc.)
  // - downloadFile: path to downloadable PDF/Word file (place in files/publications/)
  // Either or both can be provided; leave empty string "" if not available
  publicationCategories: [
    { id: "all", label: "All" },
    { id: "book-chapter", label: "Book Chapter" },
    { id: "report", label: "Report" },
    { id: "web-article", label: "Web Article" },
    { id: "journal-article", label: "Journal Article" }
  ],
  publications: [
    {
      id: "building-power",
      title: "Building Power from the Ground Up: A Framework for Community Organizing",
      type: "Book Chapter",
      year: "2023",
      publisher: "Community Press",
      description: "A comprehensive guide to grassroots organizing strategies for the modern era.",
      link: "https://example.com/building-power",
      downloadFile: "files/publications/building-power.pdf"
    },
    {
      id: "relational-organizing",
      title: "Relational Organizing in the Digital Age",
      type: "Journal Article",
      year: "2022",
      publisher: "Journal of Community Practice",
      description: "Examining how technology can enhance rather than replace relationship-based organizing.",
      link: "https://example.com/relational-organizing",
      downloadFile: "files/publications/relational-organizing.pdf"
    },
    {
      id: "lpa-model",
      title: "The Leadership-Power-Action Model",
      type: "Report",
      year: "2021",
      publisher: "Self-published",
      description: "Introducing the LPA framework for building sustainable community power.",
      link: "",
      downloadFile: "files/publications/lpa-model.pdf"
    },
    {
      id: "coalition-building",
      title: "Coalition Building Across Difference",
      type: "Book Chapter",
      year: "2020",
      publisher: "Movement Building Reader",
      description: "Strategies for creating alliances that bridge ideological and demographic divides.",
      link: "https://example.com/coalition-building",
      downloadFile: ""
    },
    {
      id: "five-lessons",
      title: "Five Lessons from Grassroots Campaigns",
      type: "Web Article",
      year: "2022",
      publisher: "Organizing Weekly",
      description: "Key takeaways from successful community-led initiatives across the country.",
      link: "https://example.com/five-lessons",
      downloadFile: ""
    },
    {
      id: "measuring-power",
      title: "Measuring Community Power: A Practitioner's Guide",
      type: "Report",
      year: "2023",
      publisher: "Community Research Institute",
      description: "Frameworks and metrics for evaluating organizing impact.",
      link: "https://example.com/measuring-power",
      downloadFile: "files/publications/measuring-power.pdf"
    }
  ],

  // ----- PRESS PAGE -----
  // id: unique identifier for linking from project pages
  press: [
    {
      id: "housing-recognition",
      outlet: "The Community Times",
      title: "Local Organizer Wins National Recognition for Housing Work",
      date: "January 2024",
      type: "Feature",
      link: "https://example.com/press/housing-recognition"
    },
    {
      id: "future-organizing",
      outlet: "NPR Local",
      title: "Interview: The Future of Grassroots Organizing",
      date: "October 2023",
      type: "Radio Interview",
      link: "https://example.com/press/future-organizing"
    },
    {
      id: "building-bridges",
      outlet: "Organizing Magazine",
      title: "Profile: Building Bridges in Divided Times",
      date: "July 2023",
      type: "Profile",
      link: "https://example.com/press/building-bridges"
    },
    {
      id: "local-organizing",
      outlet: "Policy Watch",
      title: "Commentary: Why Local Organizing Matters More Than Ever",
      date: "March 2023",
      type: "Op-Ed",
      link: "https://example.com/press/local-organizing"
    }
  ],

  // ----- TOOLKIT PAGE -----
  toolkit: {
    title: "LPA Toolkit",
    subtitle: "Leadership • Power • Action",
    description: "The LPA Toolkit is a comprehensive resource for community organizers, providing frameworks, templates, and guides for building effective grassroots movements.",
    downloadFile: "files/lpa-toolkit.zip",
    contents: [
      "Leadership Development Curriculum (PDF)",
      "Power Mapping Templates (Excel/Sheets)",
      "Action Planning Worksheets",
      "Meeting Facilitation Guides",
      "Coalition Building Framework",
      "Campaign Strategy Templates",
      "Evaluation and Metrics Tools"
    ],
    license: "This toolkit is provided under a Creative Commons Attribution-NonCommercial license. Free for community use."
  },

  // ----- FOOTER -----
  footer: {
    copyright: "© 2024 Your Name. All rights reserved.",
    message: "Built with community in mind."
  }
};

// Make config available globally
if (typeof window !== 'undefined') {
  window.CONFIG = CONFIG;
}
