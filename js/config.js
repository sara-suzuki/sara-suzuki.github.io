// =====================================================
// SITE CONFIGURATION
// Edit this file to customize your website content
// =====================================================

const CONFIG = {
  // ----- PERSONAL INFO -----
  name: "Sara Suzuki",
  title: "Ph.D. (she/her/hers)",
  tagline: "I strive to build a more just democracy through co-creating knowledge and power with young people.",
  
  // ----- CONTACT INFO -----
  contact: {
    email: "sara.suzuki@tufts.edu",
    linkedin: "https://www.linkedin.com/in/sarasuzuki/", 
    bluesky: "https://bsky.app/profile/sara-suzuki.com",
    location: "Somerville, MA",
  },

  // ----- NAVIGATION -----
  // Set enabled: false to hide a page from navigation
  navigation: [
    { name: "About", href: "index.html", enabled: true },
    { name: "Pillars", href: "pillars.html", enabled: true },
    { name: "Projects", href: "projects.html", enabled: true },
    { name: "Publications", href: "publications.html", enabled: true },
    { name: "Speaking", href: "speaking.html", enabled: true },
    { name: "Press", href: "press.html", enabled: true },
  ],

  // ----- ABOUT PAGE -----
  about: {
    intro: "Hello there! Thank you for visiting my personal website. I am interested in opportunities for collaboration and look forward to connecting with you.",
    bio: [
      "My research focuses on uncovering and disrupting inequities in youth civic engagement. I consider all forms of change-making, including voting, running for office, community organizing, and service. I look at the pathways that young people have to tackle the issues that they care about and investigate shifts—individual, organizational, institutional, and system-wide—that can bring greater inclusion to those pathways.",
      "I believe that young people have the power to enact sociopolitical praxis (critical consciousness) to challenge systems of oppression and bring about social change. I strive to use my skills of quantitative, qualitative, and mixed methods research, facilitation, organizational capacity-building, and leadership development to learn from and with young people about how they are creating a more equitable future.",
      "I currently work as a Senior Researcher at CIRCLE, a non-partisan research center that is part of the Tisch College of Civic Life at Tufts University. I received my Ph.D. in Applied Developmental and Educational Psychology from Boston College."
    ],
    // Profile image (place in /images/ folder)
    image: "images/profile.jpeg"
  },

  // ----- PILLARS/VALUES PAGE -----
  pillarsIntro: "The five pillars below represent the way I approach my work. They reflect my belief that transformation requires both structure and fluidity, technical rigor and deep empathy. These principles guide how I show up in service of collective liberation.",
  pillars: [
    {
      title: "Build",
      image: "images/pillars/build.jpg",
      description: "\"Build\" isn't just about creating structures—it's about cultivating the connections and relationships that form the bedrock of lasting change. As a community organizer at heart, I understand that true impact comes from patiently weaving together networks of people, nurturing leadership in others, and fostering coalitions that amplify our collective strength. Building means knowing when to step forward and, just as importantly, when to step back."
    },
    {
      title: "Discomfort",
      image: "images/pillars/discomfort.jpg",
      description: "In my work, I've learned that transformative change often emerges from moments of tension. I actively lean into discomfort because I recognize it as an opportunity to break through constraints. When we feel unsettled, it often means we have to unlearn what is deep inside us. The status quo might feel comfortable, but it can also mean we are settling for a system steeped in inequity."
    },
    {
      title: "Rigor",
      image: "images/pillars/rigor.jpg",
      description: "\"Rigor\" means wielding tools with intention, expertise, and awareness. My approach combines mastery of diverse methodologies—from statistical modeling to facilitation techniques, from data visualization to narrative frameworks—with a critical understanding of how these tools have been historically deployed. True rigor isn't just about technical precision—it's about thoughtfully selecting and applying the right tools for each unique challenge."
    },
    {
      title: "Space",
      image: "images/pillars/space.jpg",
      description: "\"Space\" is about creating containers where possibilities can flourish. I cultivate environments that invite experimentation, amplify diverse voices, and nurture collective creation. Central to my understanding of space is the recognition that rest and healing are not luxuries—they are essential elements of transformative work. True co-creation requires room to breathe, to experiment, to fail, and to grow."
    },
    {
      title: "Root",
      image: "images/pillars/root.jpg",
      description: "\"Root\" embodies Angela Davis's powerful reminder that to be radical means to grasp things at the root. My work is driven by a commitment to uncover and shift the deeper structural foundations that shape our reality. Rather than addressing surface-level symptoms, I dig deeper to expose, understand, and ultimately transform root causes and systemic barriers."
    }
  ],

  // ----- PROJECTS PAGE -----
  projects: [
    {
      id: "critical-consciousness",
      title: "Praxis: Critical Consciousness",
      status: "Active",
      coverImage: "images/projects/critical-consciousness.jpg",
      shortDescription: "Examining how young people analyze and resist systemic oppression through Freirean critical consciousness.",
      fullDescription: [
        "My work sits at the intersection of critical consciousness, youth development, and social transformation. As both a researcher and practitioner, I approach critical consciousness through two complementary lenses: as a theoretical framework that guides my research practice, and as a focal point of my empirical investigations.",
        "Drawing on Paulo Freire's concept of praxis, I reject the notion of a neutral, impartial researcher. Instead, I actively align my institutional practices within higher education with my theoretical commitments to equity and social justice.",
        "My research examines how young people analyze, resist, and work to transform oppressive systems while strengthening their communities. A key aspect of this work involves challenging traditional dichotomies between actions considered to be \"within\" versus \"against\" existing systems."
      ],
      gallery: [
        "images/projects/critical-consciousness-1.jpg"
      ],
      externalLink: "https://sara-suzuki.com/critical-consciousness/",
      relatedPublications: [
        "The role of parents' and adolescents' critical reflection in the development of white youths' commitments to dismantling oppression",
        "Associations between hope and trajectories of critical consciousness among U.S. youth of color",
        "Situating Critical Consciousness Within the Developmental System"
      ],
      relatedPress: []
    },
    {
      id: "quantcrit",
      title: "QuantCrit: Equity and Statistical Methodology",
      status: "Active",
      coverImage: "images/projects/quantcrit.jpg",
      shortDescription: "Advancing the application of QuantCrit in developmental science with practical guidelines for researchers.",
      fullDescription: [
        "My research focuses on advancing the application of QuantCrit in developmental science, working to bridge critical theoretical frameworks with rigorous quantitative methods. This work spans both methodological innovation and practical application, with the goal of making critical quantitative approaches more accessible to researchers studying youth development.",
        "My work demonstrates how QuantCrit can enhance our understanding of youth development, particularly through advanced statistical methods like mixture modeling. In my dissertation research, I explored distinct patterns of critical consciousness among youth of color, revealing how different experiences of critical consciousness relate to positive youth development outcomes.",
        "I am currently developing a comprehensive framework to guide researchers in applying QuantCrit principles to statistical analysis in developmental science. Drawing from design thinking principles, this work addresses common challenges researchers face, such as working with small sample sizes while maintaining methodological rigor and theoretical integrity."
      ],
      gallery: [
        "images/projects/quantcrit-1.jpg"
      ],
      externalLink: "https://sara-suzuki.com/quantcrit/",
      relatedPublications: [
        "Using QuantCrit to advance an anti-racist developmental science: Applications to mixture modeling"
      ],
      relatedPress: []
    },
    {
      id: "inclusive-excellence",
      title: "Leading Institutional Change for Inclusive Excellence",
      status: "Active",
      coverImage: "images/projects/inclusive-excellence.jpeg",
      shortDescription: "Chair of the DEIJ committee at Tufts University's Tisch College, leading institutional change initiatives.",
      fullDescription: [
        "My commitment to diversity, equity, inclusion, and justice (DEIJ) has been a cornerstone of my professional journey, beginning with my role as a founding member of a departmental Anti-Racist Task Force during my doctoral studies.",
        "At Tufts University's Tisch College of Civic Life, I serve as chair of the college-wide DEIJ committee, advocating for over 70 staff members through the framework of institutional inclusive excellence. A significant achievement has been securing and implementing a $70,000 training institute for managerial-level staff focused on leadership for inclusive excellence.",
        "Under my leadership, the DEIJ Committee has undergone strategic expansion and restructuring through the recruitment and integration of eight new members, each bringing diverse perspectives and expertise to our work."
      ],
      gallery: [
        "images/projects/inclusive-excellence-1.jpg"
      ],
      externalLink: "https://sara-suzuki.com/inclusive-excellence/",
      relatedPublications: [],
      relatedPress: []
    },
    {
      id: "cambridge-heart",
      title: "Cambridge HEART: Community-Based Emergency Response",
      status: "Completed",
      coverImage: "images/projects/cambridge-heart.jpeg",
      shortDescription: "Supporting the development of a community-based emergency response as a volunteer and board member.",
      fullDescription: [
        "As a volunteer and board member with Cambridge HEART (Holistic Emergency Alternative Response Team), I played multiple roles in supporting this grassroots nonprofit during its crucial startup phase. Working closely with abolitionist, radical Black Feminist organizers of The Black Response, I contributed to building an alternative community safety program in Cambridge, Massachusetts.",
        "My responsibilities centered on resource generation and community engagement. I organized successful fundraising events that brought together community members, advocates, and supporters. I also engaged in local advocacy, including speaking to City Council members to build support for alternative approaches to community safety.",
        "This experience deepened my understanding of nonprofit management through an anti-oppression lens, while developing practical skills in sustaining grassroots organizations. Most importantly, it taught me the value of humility and patience in movement work, and the importance of learning from those who have been doing this work for generations."
      ],
      gallery: [
        "images/projects/cambridge-heart-1.jpg"
      ],
      externalLink: "https://www.cambridge-heart.org",
      relatedPublications: [
        "Making sense of the alternative highway"
      ],
      relatedPress: [
        "Community Safety",
        "Community Safety"
      ]
    },
    {
      id: "political-homes",
      title: "Political Homes",
      status: "Active",
      coverImage: "images/projects/political-homes.jpg",
      shortDescription: "Research on what helps youth vote through direct civic information and political homes.",
      fullDescription: [
        "This research project examines the concept of 'political homes'—the organizations, communities, and spaces where young people develop their civic identities and capacities for political engagement.",
        "Through this work, we investigate how direct civic information and supportive community structures help young people navigate the voting process and engage in broader forms of civic participation.",
        "The findings from this research inform practitioners and policymakers about effective strategies for supporting youth voter participation and civic engagement."
      ],
      gallery: [
        "images/projects/political-homes-1.jpg"
      ],
      externalLink: "",
      relatedPublications: [
        "What helps youth vote? Direct civic information and political homes"
      ],
      relatedPress: []
    },
    {
      id: "movement-building",
      title: "Strengthening and Measuring Movement-Building Infrastructure",
      status: "Active",
      coverImage: "images/projects/youth-voice.jpeg",
      shortDescription: "Research on organizational shifts for youth voice and movement-building infrastructure.",
      fullDescription: [
        "Youth voice and leadership are often celebrated but rarely centered in institutional decision-making. Through deep collaboration with long-standing institutions, I help build bridges between young people's lived experiences and institutional change.",
        "This work creates pathways for authentic youth engagement that transform both youth and adults, fostering organizational cultures that genuinely value and integrate youth perspectives.",
        "The research examines how organizations can shift their practices to better support youth leadership and voice in meaningful ways."
      ],
      gallery: [
        "images/projects/youth-voice-1.jpg"
      ],
      externalLink: "",
      relatedPublications: [
        "How effective youth-adult partnerships can grow voters"
      ],
      relatedPress: []
    }
  ],

  // ----- PUBLICATIONS PAGE -----
  publicationCategories: [
    { id: "all", label: "All" },
    { id: "journal-article", label: "Journal Article" },
    { id: "report", label: "Report" },
    { id: "book-chapter", label: "Book Chapter" },
    { id: "web-article", label: "Web Article" }
  ],
  publications: [
    // 2025
    {
      id: "genz-democracy-2025",
      title: "How does Gen Z really feel about democracy? Insights from three profiles of youth and democracy",
      type: "Report",
      year: "2025",
      publisher: "CIRCLE",
      authors: "Deborah Apau, Sara Suzuki, Alberto Medina, Ruby Belle Booth",
      description: "Research examining Gen Z attitudes toward democracy through profile analysis.",
      link: "https://circle.tufts.edu/report-genz-attitudes-democracy",
      downloadFile: ""
    },
    {
      id: "belonging-efficacy-2025",
      title: "A sense of belonging and a positive school climate are key to building youth political efficacy",
      type: "Web Article",
      year: "2025",
      publisher: "CIRCLE",
      authors: "Kelly Siegel-Stechler, Noorya Hayat, Alberto Medina, Katie Hilton, Sara Suzuki",
      description: "Research on the relationship between school climate and youth political efficacy.",
      link: "https://circle.tufts.edu/latest-research/sense-belonging-and-positive-school-climate-are-key-building-youth-political",
      downloadFile: ""
    },
    {
      id: "discriminatory-experiences-2025",
      title: "Discriminatory experiences, critical consciousness development, and well-being among emerging adults",
      type: "Journal Article",
      year: "2025",
      publisher: "Developmental Psychology",
      authors: "Elena Maker Castro, Sara Suzuki, Lindsay Till Hoyt, Laura Wray-Lake, Alison K. Cohen",
      description: "Examining the relationship between discrimination, critical consciousness, and wellbeing during COVID-19.",
      link: "https://doi.org/10.1037/dev0001917",
      downloadFile: "files/publications/2025_dp.pdf"
    },
    {
      id: "2024-poll-2025",
      title: "Young people and the 2024 election: Struggling, disconnected, and dissatisfied",
      type: "Web Article",
      year: "2025",
      publisher: "CIRCLE",
      authors: "Alberto Medina, Kelly Siegel-Stechler, Sara Suzuki, Ruby Belle Booth, Katie Hilton",
      description: "Poll findings on barriers, issues, and economy concerns among young voters in 2024.",
      link: "https://circle.tufts.edu/latest-research/2024-poll-barriers-issues-economy",
      downloadFile: ""
    },
    // 2024
    {
      id: "white-youth-2024",
      title: "The role of parents' and adolescents' critical reflection in the development of white youths' commitments to dismantling oppression",
      type: "Journal Article",
      year: "2024",
      publisher: "Journal of Research on Adolescence",
      authors: "Sara Suzuki, Aixa Marchand, Sara K. Johnson",
      description: "Research on how critical reflection develops anti-oppression commitments in white youth.",
      link: "http://dx.doi.org/10.1111/jora.13054",
      downloadFile: "files/publications/2024_jra.pdf"
    },
    {
      id: "black-youth-2024",
      title: "Black youth are invested in their communities but encounter barriers to voting",
      type: "Web Article",
      year: "2024",
      publisher: "CIRCLE",
      authors: "Sam Searles, Sara Suzuki, Alberto Medina, Katie HIlton",
      description: "Research on Black youth civic investment and voting barriers.",
      link: "https://circle.tufts.edu/latest-research/black-youth-are-invested-their-communities-encounter-barriers-voting",
      downloadFile: ""
    },
    {
      id: "republican-youth-2024",
      title: "Republican youth are numerous, politically active, and more moderate than older Republicans",
      type: "Web Article",
      year: "2024",
      publisher: "CIRCLE",
      authors: "Alberto Medina, CIRCLE Staff, Kei Kawashima-Ginsberg, Sara Suzuki",
      description: "Analysis of Republican youth political engagement and attitudes.",
      link: "https://circle.tufts.edu/latest-research/republican-youth-are-numerous-politically-active-and-more-moderate-older",
      downloadFile: ""
    },
    {
      id: "non-college-2024",
      title: "Non-college youth need information and opportunities to engage in civic life",
      type: "Web Article",
      year: "2024",
      publisher: "CIRCLE",
      authors: "Seona Maskara, Sara Suzuki, Ruby Belle Booth, Peter de Guzman, Alberto Medina, Katie Hilton",
      description: "Research on civic engagement barriers for non-college youth.",
      link: "https://circle.tufts.edu/latest-research/non-college-youth-need-information-and-opportunities-engage-civic-life",
      downloadFile: ""
    },
    {
      id: "voice-vote-2024",
      title: "Youth who develop their voice in high school are more likely to vote",
      type: "Web Article",
      year: "2024",
      publisher: "CIRCLE",
      authors: "Kelly Siegel-Stechler, Naraya Price, Alberto Medina, Abby Kiesa, Noorya Hayat, Sara Suzuki",
      description: "Research connecting high school voice development to voting behavior.",
      link: "https://circle.tufts.edu/latest-research/youth-who-develop-their-voice-high-school-are-more-likely-vote",
      downloadFile: ""
    },
    // 2023
    {
      id: "hope-trajectories-2023",
      title: "Associations between hope and trajectories of critical consciousness among U.S. youth of color",
      type: "Journal Article",
      year: "2023",
      publisher: "Journal of Research on Adolescence",
      authors: "Sara Suzuki, Sidney C. May, Scott Seider",
      description: "Research on hope and critical consciousness development in youth of color.",
      link: "https://doi.org/10.1111/jora.12872",
      downloadFile: "files/publications/2023_jra.pdf"
    },
    {
      id: "sociopolitical-stress-2023",
      title: "Trajectories of sociopolitical stress during the 2020 United States presidential election season",
      type: "Journal Article",
      year: "2023",
      publisher: "Comprehensive Psychoneuroendocrinology",
      authors: "Sara Suzuki, Lindsay Till Hoyt, Neshat Yazdani, Mariah Kornbluh, Elan C. Hope, Melissa J. Hagan, Alison K. Cohen, Parissa J. Ballard",
      description: "Examining sociopolitical stress trajectories and associations with wellbeing and civic action.",
      link: "https://doi.org/10.1016/j.cpnec.2023.100218",
      downloadFile: "files/publications/2023_cpnec.pdf"
    },
    {
      id: "cc-handbook-2023",
      title: "Situating Critical Consciousness Within the Developmental System",
      type: "Book Chapter",
      year: "2023",
      publisher: "Critical Consciousness: Expanding Theory and Measurement",
      authors: "Sara Suzuki, Sara K. Johnson, Kevin A. Ferreira van Leer",
      description: "Insights from the Phenomenological Variant of Ecological Systems Theory.",
      link: "",
      downloadFile: "files/publications/2023_handbook.pdf"
    },
    {
      id: "broadband-2023",
      title: "Expanding broadband for equitable democracy",
      type: "Report",
      year: "2023",
      publisher: "CIRCLE",
      authors: "Sara Suzuki, Ruby Belle Booth, Abby Kiesa, Alberto Medina, Jimmeka Anderson",
      description: "Research on broadband access and democratic participation.",
      link: "https://circle.tufts.edu/broadband-equitable-democracy",
      downloadFile: ""
    },
    {
      id: "media-ecosystems-2023",
      title: "Media ecosystems and youth voting",
      type: "Report",
      year: "2023",
      publisher: "CIRCLE",
      authors: "Sara Suzuki, Abby Kiesa, Alberto Medina",
      description: "Research on how media environments shape youth voting behavior.",
      link: "https://circle.tufts.edu/media-ecosystems",
      downloadFile: ""
    },
    {
      id: "political-homes-2023",
      title: "What helps youth vote? Direct civic information and political homes",
      type: "Report",
      year: "2023",
      publisher: "CIRCLE",
      authors: "Sara Suzuki, Abby Kiesa, Alberto Medina, SJ McGeady",
      description: "Research on factors that support youth voter participation.",
      link: "https://circle.tufts.edu/latest-research/what-helps-youth-vote-direct-civic-information-and-political-homes",
      downloadFile: ""
    },
    {
      id: "yap-voters-2023",
      title: "How effective youth-adult partnerships can grow voters",
      type: "Web Article",
      year: "2023",
      publisher: "CIRCLE",
      authors: "Ruby Belle Booth, Peter de Guzman, Sara Suzuki",
      description: "Research on youth-adult partnerships and voter development.",
      link: "https://circle.tufts.edu/latest-research/how-effective-youth-adult-partnerships-can-grow-voters",
      downloadFile: ""
    },
    // 2022
    {
      id: "critical-action-2022",
      title: "Critical action among Asian and Hispanic/Latinx youth: Identifying a multidimensional measure",
      type: "Journal Article",
      year: "2022",
      publisher: "Journal of Community & Applied Social Psychology",
      authors: "Sara Suzuki, Taina B. Quiles, Elena Maker Castro",
      description: "Exploring within-group differences in critical action among diverse youth.",
      link: "https://doi.org/10.1002/casp.2660",
      downloadFile: "files/publications/2022_casp.pdf"
    },
    {
      id: "civic-assets-2022",
      title: "Profiles of civic assets among youth of color: Relations with civic action",
      type: "Journal Article",
      year: "2022",
      publisher: "Journal of Applied Developmental Psychology",
      authors: "Sara Suzuki, Stacy L. Morris, Sara K. Johnson",
      description: "Research on civic asset profiles and their relationship to civic action.",
      link: "https://doi.org/10.1016/j.appdev.2022.101476",
      downloadFile: "files/publications/2022_jadp.pdf"
    },
    {
      id: "running-office-2022",
      title: "From interest to candidacy: Supporting young people on their path to running for office",
      type: "Report",
      year: "2022",
      publisher: "CIRCLE",
      authors: "Sara Suzuki, Kelly Siegel-Stechler, Peter de Guzman, Alberto Medina, Abby Kiesa, Maha Mapara, Kei Kawashima-Ginsberg",
      description: "Research on pathways and support for young candidates.",
      link: "https://circle.tufts.edu/latest-research/running-for-office",
      downloadFile: ""
    },
    {
      id: "climate-activism-2022",
      title: "Growing and diversifying youth climate activism",
      type: "Report",
      year: "2022",
      publisher: "CIRCLE",
      authors: "Sara Suzuki, LeeAnn Sangalang",
      description: "Research on youth climate activism trends and diversification.",
      link: "https://circle.tufts.edu/latest-research/growing-and-diversifying-youth-climate-activism",
      downloadFile: ""
    },
    // 2021
    {
      id: "quantcrit-2021",
      title: "Using QuantCrit to advance an anti-racist developmental science: Applications to mixture modeling",
      type: "Journal Article",
      year: "2021",
      publisher: "Journal of Adolescent Research",
      authors: "Sara Suzuki, Stacy L. Morris, Sara K. Johnson",
      description: "Methodological paper on applying QuantCrit frameworks to statistical analysis.",
      link: "https://doi.org/10.1177/07435584211028229",
      downloadFile: "files/publications/2021_jar.pdf"
    },
    // Blog
    {
      id: "alternative-highway-2024",
      title: "Making sense of the alternative highway",
      type: "Web Article",
      year: "2024",
      publisher: "Aurora Commons",
      authors: "Stephanie Guirand, Sara Suzuki",
      description: "Reflections on community-based alternatives to traditional emergency response.",
      link: "https://www.auroracommons.com/nc-content-fellows/alternative",
      downloadFile: ""
    }
  ],

  // ----- PRESS PAGE -----
  press: [
    {
      id: "pittsburgh-post-gazette",
      outlet: "Pittsburgh Post-Gazette",
      title: "Republicans",
      date: "February 2, 2025",
      type: "Feature",
      link: "https://sara-suzuki.com/2025/02/02/pittsburgh-post-gazette/"
    },
    {
      id: "wfyi",
      outlet: "WFYI",
      title: "Radio Interview on Sociopolitical Stress",
      date: "October 24, 2024",
      type: "Radio Interview",
      link: "https://sara-suzuki.com/2024/10/24/wfyi/"
    },
    {
      id: "ct-mirror",
      outlet: "CT Mirror",
      title: "Climate and Youth Engagement",
      date: "October 13, 2024",
      type: "Feature",
      link: "https://sara-suzuki.com/2024/10/13/ct-mirror/"
    },
    {
      id: "texas-tribune",
      outlet: "The Texas Tribune",
      title: "Running for Office",
      date: "October 8, 2024",
      type: "Feature",
      link: "https://sara-suzuki.com/2024/10/08/the-texas-tribune/"
    },
    {
      id: "michigan-public",
      outlet: "Michigan Public",
      title: "Elections",
      date: "October 8, 2024",
      type: "Radio Interview",
      link: "https://sara-suzuki.com/2024/10/08/michigan-public/"
    },
    {
      id: "sarasota-magazine",
      outlet: "Sarasota Magazine",
      title: "Youth Organizing",
      date: "August 19, 2024",
      type: "Feature",
      link: "https://sara-suzuki.com/2024/08/19/sarasota-magazine/"
    },
    {
      id: "pra-podcast",
      outlet: "Creating Positive Social Change with PRA",
      title: "Sociopolitical Stress",
      date: "August 15, 2024",
      type: "Podcast",
      link: "https://sara-suzuki.com/2024/08/15/creating-positive-social-change-with-pra/"
    },
    {
      id: "fast-company",
      outlet: "Fast Company",
      title: "Running for Office",
      date: "July 24, 2024",
      type: "Feature",
      link: "https://sara-suzuki.com/2024/07/24/fast-company/"
    },
    {
      id: "kera-think",
      outlet: "KERA's Think",
      title: "Elections",
      date: "March 21, 2024",
      type: "Radio Interview",
      link: "https://sara-suzuki.com/2024/03/21/keras-think/"
    },
    {
      id: "governing",
      outlet: "Governing",
      title: "Elections",
      date: "February 5, 2024",
      type: "Feature",
      link: "https://sara-suzuki.com/2024/02/05/governing/"
    },
    {
      id: "politico-2024",
      outlet: "POLITICO",
      title: "Climate",
      date: "January 18, 2024",
      type: "Feature",
      link: "https://sara-suzuki.com/2024/01/18/politico/"
    },
    {
      id: "usa-today",
      outlet: "USA Today",
      title: "Running for Office",
      date: "November 15, 2023",
      type: "Feature",
      link: "https://sara-suzuki.com/2023/11/15/usa-today/"
    },
    {
      id: "detroit-news",
      outlet: "Detroit News",
      title: "Running for Office",
      date: "September 21, 2023",
      type: "Feature",
      link: "https://sara-suzuki.com/2023/09/21/detroit-news/"
    },
    {
      id: "bbc-news",
      outlet: "BBC News",
      title: "Running for Office",
      date: "October 6, 2022",
      type: "Feature",
      link: "https://sara-suzuki.com/2022/10/06/bbc-news/"
    },
    {
      id: "wgbh",
      outlet: "WGBH",
      title: "Community Safety",
      date: "February 23, 2022",
      type: "Radio Interview",
      link: "https://sara-suzuki.com/2022/02/23/wgbh/"
    },
    {
      id: "harvard-crimson",
      outlet: "The Harvard Crimson",
      title: "Community Safety",
      date: "January 27, 2022",
      type: "Feature",
      link: "https://sara-suzuki.com/2022/01/27/the-harvard-crimson/"
    }
  ],

  // ----- SPEAKING PAGE -----
  speaking: {
    intro: "As an experienced speaker and educator, I bring research-informed content and engaging real-world examples to discussions of youth development, civic engagement, and career pathways. My talks blend theoretical frameworks with practical lessons, leaving audiences with actionable insights.",
    topics: [
      {
        title: "Strengthening the Youth Vote",
        description: "Research-informed strategies for increasing youth voter participation and civic engagement."
      },
      {
        title: "Youth Civic Engagement and Critical Consciousness",
        description: "How young people develop awareness of systemic issues and take action for social change."
      },
      {
        title: "Applying QuantCrit in Research",
        description: "Practical guidance on integrating critical frameworks with quantitative methods."
      },
      {
        title: "Post-PhD Careers Beyond Academia",
        description: "Navigating career paths and opportunities outside traditional academic roles."
      },
      {
        title: "Sociopolitical Development and Healing",
        description: "The intersection of civic engagement, wellbeing, and collective healing."
      },
      {
        title: "Positive Youth Development",
        description: "Frameworks and practices for supporting young people's growth and empowerment."
      }
    ],
    pastEngagements: [
      {
        event: "Convening on Affective Polarization Among Young People",
        type: "Presentation",
        date: "April 2025",
        location: "Institute for Citizens & Scholars"
      },
      {
        event: "Harvard Kennedy School Executive Session",
        type: "Presentation",
        date: "February 2025",
        location: "Cambridge, MA"
      },
      {
        event: "Made By Us Youth250 Bureau",
        type: "Presentation",
        date: "January 2025",
        location: "Virtual"
      },
      {
        event: "Allstate Young Leaders Learning Community",
        type: "Workshop",
        date: "September 2024",
        location: "Virtual"
      },
      {
        event: "IMMERSE Institute",
        type: "Workshop",
        date: "August 2024",
        location: "UC Santa Barbara"
      },
      {
        event: "Tufts University Community Symposium",
        type: "Presentation",
        date: "April 2024",
        location: "Medford, MA"
      },
      {
        event: "Boston College Guest Lecture",
        type: "Guest Lecture",
        date: "November 2023",
        location: "Chestnut Hill, MA"
      }
    ],
    bookingNote: "My experience includes guest lectures at both undergraduate and graduate levels, contributions to panels and conferences of professional organizations, as well as professional development workshops. I tailor each presentation to meet the specific needs and knowledge level of your audience. Honorariums are adjusted on a sliding scale to ensure accessibility for various organizations and institutions. To discuss speaking opportunities, please contact sara.suzuki@tufts.edu."
  },

  // ----- FOOTER -----
  footer: {
    copyright: "© 2025 Sara Suzuki. All rights reserved.",
    message: "Building a more just democracy through co-creating knowledge and power with young people."
  }
};

// Make config available globally
if (typeof window !== 'undefined') {
  window.CONFIG = CONFIG;
}
