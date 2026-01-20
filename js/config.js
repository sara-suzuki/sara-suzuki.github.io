// =====================================================
// SITE CONFIGURATION
// Edit this file to customize your website content
// =====================================================

const CONFIG = {
  // ----- PERSONAL INFO -----
  name: "Sara Suzuki",
  title: "Ph.D. (she/her/hers)",
  
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
    { name: "Speaking", href: "speaking.html", enabled: false },
    { name: "Press", href: "press.html", enabled: false },
  ],

  // ----- ABOUT PAGE -----
  about: {
    intro: "Hello there! Thank you for visiting my personal website. I am interested in opportunities for collaboration and look forward to connecting with you.",
    bio: [
      "My research focuses on uncovering and disrupting inequities in youth civic engagement. I consider all forms of change-making, including voting, running for office, community organizing, and service. I look at the pathways that young people have to tackle the issues that they care about and investigate shifts—individual, organizational, institutional, and system-wide—that can bring greater inclusion to those pathways.",
      "I believe that young people have the power to enact sociopolitical praxis (critical consciousness) to challenge systems of oppression and bring about social change. I strive to use my skills of quantitative, qualitative, and mixed methods research, facilitation, organizational capacity-building, and leadership development to learn from and with young people about how they are creating a more equitable future.",
      "{{pullquote}}I strive to build a more just democracy through co-creating knowledge and power with young people.{{/pullquote}}",
      "I currently work as a Senior Researcher at <a href='https://circle.tufts.edu/' target='_blank' rel='noopener'>CIRCLE</a>, a non-partisan research center that is part of the Tisch College of Civic Life at Tufts University. I received my Ph.D. in Applied Developmental and Educational Psychology from Boston College."
    ],
    // Profile image (place in /images/ folder)
    image: "images/profile.jpg"
  },

  // ----- PILLARS/VALUES PAGE -----
  pillarsIntro: "The five pillars below represent the way I approach my work. They reflect my belief that transformation requires both structure and fluidity, technical rigor and deep empathy. These principles guide how I show up in service of collective liberation.",
  pillars: [
    {
      title: "Build",
      image: "images/pillars/build.jpg",
      description: "\"Build\" isn't just about creating structures—it's about cultivating the connections and relationships that form the bedrock of lasting change. As a community organizer at heart, I understand that true impact comes from patiently weaving together networks of people, nurturing leadership in others, and fostering coalitions that amplify our collective strength. I also build structures for groups of us to be able to fluidly work together and achieve big wins.<br><br>Building means knowing when to step forward and, just as importantly, when to step back. It means recognizing that the strongest leaders aren't those who hoard power, but those who actively create space for others to grow and lead. Through mentorship and sharing knowledge, I help others discover and develop their own capacity for leadership.<br><br>I approach each initiative with the understanding that meaningful change is built one relationship, one conversation, and one small step at a time. I remain committed to the patient, persistent work of building something greater than any individual could achieve alone."
    },
    {
      title: "Discomfort",
      image: "images/pillars/discomfort.jpg",
      description: "In my work, I've learned that transformative change often emerges from moments of tension. I actively lean into discomfort because I recognize it as an opportunity to break through constraints. When we feel unsettled, it often means we have to unlearn what is deep inside us. The status quo might feel comfortable, but it can also mean we are settling for a system steeped in inequity.<br><br>Yet this approach isn't about seeking disruption for its own sake. I bring deep empathy to processes that involve discomfort, remaining attuned to how others experience and navigate change. By acknowledging and working through discomfort collectively, we can materialize new realities."
    },
    {
      title: "Rigor",
      image: "images/pillars/rigor.jpg",
      description: "\"Rigor\" means wielding tools with intention, expertise, and awareness. My approach combines mastery of diverse methodologies—from statistical modeling to facilitation techniques, from data visualization to narrative frameworks—with a critical understanding of how these tools have been historically deployed.<br><br>I recognize that certain tools carry more institutional legitimacy not because of their inherent superiority, but because of who has traditionally wielded them and for what purposes. Statistics, for instance, bears the weight of its origins in eugenics and systems of oppression. Yet rather than reject these tools entirely, I work to reclaim and repurpose them in service of equity and transformation.<br><br>My commitment to rigor demands continuous learning and humility. It means staying sharp with the tools I already possess while remaining open to adopting new ones. Like a craftsperson who both respects and questions their tools, I believe in understanding the fundamental principles of each methodology while remaining critical about its applications and limitations. True rigor isn't just about technical precision—it's about thoughtfully selecting and applying the right tools for each unique challenge, always with an eye toward their broader implications and impacts."
    },
    {
      title: "Space",
      image: "images/pillars/space.jpg",
      description: "\"Space\" is about creating containers where possibilities can flourish. I cultivate environments that invite experimentation, amplify diverse voices, and nurture collective creation. This means designing processes that embrace messiness and non-linear paths, recognizing that transformation rarely follows a straight line.<br><br>Central to my understanding of space is the recognition that rest and healing are not luxuries—they are essential elements of transformative work. This is particularly true for those whose communities have carried generational burdens of change-making and resistance. By intentionally creating space for pause and restoration, we honor both the work and those doing it.<br><br>True co-creation requires room to breathe, to experiment, to fail, and to grow. I design spaces that support these necessary elements of collective work, understanding that the most powerful solutions often emerge from giving ideas and relationships the time and space they need to develop organically."
    },
    {
      title: "Root",
      image: "images/pillars/root.jpg",
      description: "\"Root\" embodies Angela Davis's powerful reminder that to be radical means to grasp things at the root. My work is driven by a commitment to uncover and shift the deeper structural foundations that shape our reality. Rather than addressing surface-level symptoms, I dig deeper to expose, understand, and ultimately transform root causes and systemic barriers.<br><br>This principle extends beyond analysis into personal practice. I constantly reflect on my own roots—the complex web of privileges, experiences, struggles, and identities that shape my perspective and position in the world. I remember that self-awareness isn't just personal work; it's essential to understanding how we can collectively address deeply rooted systemic issues.<br><br>By anchoring the work in an understanding of root causes and a steadfast consciousness of our own roots, we can build more effective and authentic pathways to a more just future."
    }
  ],

  // ----- PROJECTS PAGE -----
  projects: [
    {
      id: "political-homes",
      title: "Political Homes",
      status: "Active",
      coverImage: "images/projects/political-homes.jpg",
      shortDescription: "",
      forthcoming: true,
      fullDescription: [
        
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
      coverImage: "images/projects/movement-infrastructure.jpg",
      shortDescription: "",
      forthcoming: true,
      fullDescription: [
      ],
      gallery: [
        "images/projects/movement-infrastructure-1.jpg"
      ],
      externalLink: "",
      relatedPublications: [
      ],
      relatedPress: []
    },
    {
      id: "critical-consciousness",
      title: "Praxis: Critical Consciousness",
      status: "Active",
      coverImage: "images/projects/critical-consciousness.jpg",
      shortDescription: "My research examines how young people analyze and resist systemic oppression. Drawing on Freirean critical consciousness, I investigate the relationship between youth social action and personal wellbeing, and challenge traditional boundaries between working \"within\" and \"against\" systems. This dual focus on individual liberation and collective transformation informs not only my research but also my approach to scholarship itself, as I work to align my institutional practices with my theoretical commitments to equity and justice.",
      fullDescription: [
        "My work sits at the intersection of critical consciousness, youth development, and social transformation. As both a researcher and practitioner, I approach critical consciousness through two complementary lenses: as a theoretical framework that guides my research practice, and as a focal point of my empirical investigations.",
        "Drawing on Paulo Freire's concept of praxis, I reject the notion of a neutral, impartial researcher. Instead, I actively align my institutional practices within higher education with my theoretical commitments to equity and social justice. This means ensuring that my actions within academic spaces directly reflect and inform my research on systemic inequities, creating a dynamic relationship between theory and practice.",
        "<h3>Research Focus</h3>My research examines how young people analyze, resist, and work to transform oppressive systems while strengthening their communities. A key aspect of this work involves challenging traditional dichotomies between actions considered to be \"within\" versus \"against\" existing systems. Drawing on both civic engagement and critical action frameworks, I explore how these boundaries are often more fluid and complex than commonly assumed.",
        "<h4>Key Research Areas</h4>",
        "<div style='margin-left: 20px;'><h5>Youth Critical Consciousness & Social Transformation</h5><ul style='margin-left: 40px;'><li>Investigating how young people understand and respond to systemic oppression</li><li>Examining the strategies youth employ to strengthen and transform their communities</li><li>Analyzing the relationship between individual and collective action</li></ul></div>",
        "<div style='margin-left: 20px;'><h5>Critical Consciousness & Youth Wellbeing</h5><ul style='margin-left: 40px;'><li>Exploring the connections between social action and personal liberation</li><li>Studying how engagement in critical consciousness relates to youth health outcomes</li><li>Investigating the role of critical consciousness in positive youth development</li></ul></div>",
        "<div style='margin-left: 20px;'><h5>Methodological Innovation</h5><ul style='margin-left: 40px;'><li>Developing research approaches that honor youth agency and expertise</li><li>Creating frameworks that capture the complexity of system-oriented action</li><li>Integrating critical consciousness into research methodology</li></ul></div>",
        "<h3>Impact & Applications</h3>This work contributes to our understanding of how young people can simultaneously work toward their own liberation while engaging in broader social transformation. By examining the interconnections between personal development and social change, my research helps illuminate pathways for supporting youth as agents of transformation in their communities."
      ],
      gallery: [
        "images/projects/critical-consciousness-1.jpg"
      ],
      externalLink: "https://sara-suzuki.com/critical-consciousness/",
      relatedPublications: [
        "Discriminatory experiences, critical consciousness development, and well-being among emerging adults",
        "The role of parents' and adolescents' critical reflection in the development of white youths' commitments to dismantling oppression",
        "Associations between hope and trajectories of critical consciousness among U.S. youth of color",
        "Situating Critical Consciousness Within the Developmental System",
        "Critical action among Asian and Hispanic/Latinx youth: Identifying a multidimensional measure",
        "Profiles of civic assets among youth of color: Relations with civic action"
      ],
      relatedPress: []
    },
    {
      id: "quantcrit",
      title: "QuantCrit: Equity and Statistical Methodology",
      status: "Active",
      coverImage: "images/projects/quantcrit.jpg",
      shortDescription: "My research advances the application of QuantCrit in developmental science. Currently, I am developing practical guidelines that integrate design thinking principles to help researchers implement QuantCrit approaches in their statistical analyses.",
      fullDescription: [
        "My research focuses on advancing the application of QuantCrit in developmental science, working to bridge critical theoretical frameworks with rigorous quantitative methods. This work spans both methodological innovation and practical application, with the goal of making critical quantitative approaches more accessible to researchers studying youth development.",
        "My work demonstrates how QuantCrit can enhance our understanding of youth development, particularly through advanced statistical methods like mixture modeling. In my dissertation research, I explored distinct patterns of critical consciousness among youth of color, revealing how different experiences of critical consciousness relate to positive youth development outcomes. This work exemplifies how quantitative methods can be used to illuminate the complexity and diversity of youth experiences while maintaining a critical lens.",
        "I am currently developing a comprehensive framework to guide researchers in applying QuantCrit principles to statistical analysis in developmental science. Drawing from design thinking principles, this work addresses common challenges researchers face, such as working with small sample sizes while maintaining methodological rigor and theoretical integrity. The framework aims to make QuantCrit approaches more transparent and practical for researchers across the field.",
        "My research contributes to the growing body of work that demonstrates how quantitative methods can be employed in service of critical inquiry. By focusing on practical implementation and methodological guidance, I aim to help researchers navigate the complexities of applying critical frameworks to quantitative research design and analysis.",
        "This work is particularly relevant for scholars studying marginalized populations, where traditional quantitative approaches may fail to capture the nuance and complexity of lived experiences. Through QuantCrit, we can develop more equitable and representative research practices that honor the experiences of diverse communities while maintaining scientific rigor."
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
      coverImage: "images/projects/inclusive-excellence.jpg",
      shortDescription: "As chair of the DEIJ committee at Tufts University's Tisch College of Civic Life, I lead institutional change initiatives that strengthen inclusive excellence through strategic vision, sustainable structures, and collective capacity building.",
      fullDescription: [
        "<h3>Foundational Leadership in DEIJ</h3>My commitment to diversity, equity, inclusion, and justice (DEIJ) has been a cornerstone of my professional journey, beginning with my role as a founding member of a departmental Anti-Racist Task Force during my doctoral studies. During this time, I led efforts addressing marginalization and secured $17,000 in grants to promote training on embedding equity within faculty-student mentoring relationships.",
        "<h3>Current Leadership Impact at Tisch College</h3>At Tufts University's Tisch College of Civic Life, I serve as chair of the college-wide DEIJ committee, advocating for over 70 staff members through the framework of <a href='https://education.umd.edu/research/centers/cdihe/research/institutional-inclusive-excellence-framework' target='_blank' rel='noopener'>institutional inclusive excellence</a>. A significant achievement has been securing and implementing a $70,000 training institute for managerial-level staff focused on leadership for inclusive excellence.",
        "<h3>Strategic Committee Development</h3>Under my leadership, the DEIJ Committee has undergone strategic expansion and restructuring through the recruitment and integration of eight new members, each bringing diverse perspectives and expertise to our work. I established focused subcommittees with clear focus areas, creating accountability structures that enable both targeted initiatives and cohesive progress. This restructuring included developing onboarding processes and ongoing support systems to ensure sustained engagement and impact.",
        "<h3>Facilitation and Professional Growth</h3>I foster a dynamic learning environment through carefully designed monthly committee meetings that balance community-building with strategic planning. Our annual retreats create dedicated space for celebration, reflection, and long-term visioning. Professional development remains central to our work, with opportunities ranging from training on facilitating difficult conversations to expert presentations on critical topics like affirmative action in higher education. These learning experiences are complemented by leadership development opportunities that strengthen our collective capacity for change.",
        "<h3>Leadership Philosophy</h3>My approach prioritizes developing the leadership capacities of all committee members, ensuring that diverse perspectives strengthen our collective impact. By combining strategic vision with practical implementation, we create lasting institutional change toward equity. This work has fostered meaningful transformations in our institutional culture and practices, demonstrating the tangible impact of our initiatives. Through intentional facilitation and strategic planning, we continue to advance our mission of creating a more equitable and inclusive environment at Tisch College."
      ],
      gallery: [
        "images/projects/inclusive-excellence-1.jpg"
      ],
      externalLink: "https://sara-suzuki.com/inclusive-excellence/",
      relatedPublications: [
        "The formation of scholars: Understanding graduate socialization through the lens of oppression"
      ],
      relatedPress: []
    },
        {
      id: "youth-voice",
      title: "Organizational Shifts for Youth Voice",
      status: "Active",
      coverImage: "images/projects/youth-voice.jpg",
      shortDescription: "Youth voice and leadership are often celebrated but rarely centered in institutional decision-making. Through deep collaboration with long-standing institutions, I helped build bridges between young people's lived experiences and institutional change, creating pathways for authentic youth engagement that transform both youth and adults.",
      fullDescription: [
        "I have contributed to initiatives within major media and philanthropic institutions to authentically integrate youth voice into organizational decision-making processes. These projects focused on shifting organizational culture to create sustainable systems for meaningful youth-adult partnerships.",
        "With one institution, we supported an eight-person youth cohort in an advisory role. We facilitated interactive spaces that developed their leadership capacity to influence institutional decisions. Our trauma-informed pedagogical framework acknowledged that young people's lived experiences both sharpen the equity focus of the institutions they advise and affect how they can participate in these spaces.",
        "In tandem with this youth engagement, we conducted capacity-building sessions for institutional staff using practical frameworks for positive youth development and youth-adult partnership. Through structured dialogue and collaborative learning, staff gained concrete tools to elevate youth perspectives while creating safe, supportive environments for authentic engagement.",
        "To ensure lasting impact, we conducted utilization-focused evaluations and captured key lessons in an organizational \"playbook.\" These resources provided institutions with concrete strategies for shifting traditional power dynamics and opportunities for continuous improvement.",
        "Through this work, we are trying to shift partner institutions beyond tokenistic youth involvement toward genuine youth-adult partnership, creating systemic change in how they engage with and learn from young people."
      ],
      gallery: [
        "images/projects/youth-voice-1.jpg"
      ],
      externalLink: "https://sara-suzuki.com/youth-voice",
      relatedPublications: [
        "How effective youth-adult partnerships can grow voters"
      ],
      relatedPress: []
    },
    {
      id: "cambridge-heart",
      title: "Supporting the Emergence of a Community-Based Emergency Response",
      status: "Completed",
      coverImage: "images/projects/cambridge-heart.jpg",
      shortDescription: "As a volunteer and board member with Cambridge HEART, I supported the development of a community-based emergency response through fundraising, volunteer coordination, and organizational development. Working alongside Black Feminist leaders and abolitionist organizers, I learned invaluable lessons about building sustainable alternatives to existing systems while being guided by movement elders and community wisdom.",
      fullDescription: [
        "As a volunteer and board member with <a href='https://www.cambridge-heart.org' target='_blank' rel='noopener'>Cambridge HEART</a> (Holistic Emergency Alternative Response Team), I played multiple roles in supporting this grassroots nonprofit during its crucial startup phase. Working closely with abolitionist, radical Black Feminist organizers of <a href='https://www.theblackresponsecambridge.com/' target='_blank' rel='noopener'>The Black Response</a>, I contributed to building an alternative community safety program in Cambridge, Massachusetts, from the ground up, while learning from decades of movement wisdom and experience.",
        "My responsibilities centered on resource generation and community engagement. I organized successful fundraising events that brought together community members, advocates, and supporters. I also engaged in local advocacy, including speaking to City Council members to build support for alternative approaches to community safety. On the development side, I successfully secured grant funding and built a dedicated grant-writing team to sustain our work.",
        "We drew inspiration and guidance from similar initiatives across the city, state, and country, connecting with movement leaders who had experience building alternative emergency response systems. Through workshops, retreats, and countless Zoom calls, we learned about successful models in other cities and the challenges they faced. This network of support helped us understand how our local work connected to broader national movements for abolition and community safety.",
        "The project highlighted both the challenges and possibilities in creating alternatives to existing systems. Working within an abolitionist, Black Feminist, framework challenged traditional approaches to public safety, and we faced relentless obstacles. Yet we collectively endeavored to reimagine what genuine community care could look like. Our organization's development was guided by the wisdom of long-time organizers who emphasized the importance of moving at the speed of trust and building deep relationships within the community. Through this work, I learned valuable approaches to resolving conflict, including circle process and other transformative justice practices.",
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
        "wgbh-community-safety",
        "harvard-crimson-community-safety"
      ]
    }
  ],

  // ----- PUBLICATIONS PAGE -----
  publicationCategories: [
    { id: "all", label: "All" },
    { id: "key-works", label: "Key Work" },
    { id: "journal-article", label: "Journal Article" },
    { id: "report", label: "Report" },
    { id: "book-chapter", label: "Book Chapter" },
    { id: "web-article", label: "Web Article" },
    { id: "dissertation", label: "Dissertation" }
  ],
  publications: [
    // 2025

        {
      id: "ripe-organizing-alabama-2025",
      title: "“Ripe For Organizing”: Youth Civic Engagement Lessons from Alabama",
      type: "Web Article",
      year: "2025",
      publisher: "CIRCLE",
      authors: "Nicole Li, Sara Suzuki",
      description: "Insights on youth civic engagement strategies and lessons from Alabama.",
      link: "https://circle.tufts.edu/latest-research/ripe-organizing-youth-civic-engagement-lessons-alabama",
      downloadFile: "",
      keyWork: true
    },
      {
      id: "mamdani-victory-2025",
      title: "Young Voters Power Mamdani Victory, Shape Key 2025 Elections",
      type: "Web Article",
      year: "2025",
      publisher: "CIRCLE",
      authors: "Alberto Medina, Sara Suzuki, Ruby Belle Booth",
      description: "Analysis of youth voter impact on the Mamdani election.",
      link: "https://circle.tufts.edu/latest-research/young-voters-power-mamdani-victory-shape-key-2025-elections",
      downloadFile: ""
    },
  {
      id: "rural-turnout-2025",
      title: "Rural Youth Voter Turnout Improved in 2024",
      type: "Web Article",
      year: "2025",
      publisher: "CIRCLE",
      authors: "Alberto Medina, Ruby Belle Booth, Katie Hilton, Peter de Guzman, Sara Suzuki",
      description: "Analysis of rural youth voter turnout trends in the 2024 election.",
      link: "https://circle.tufts.edu/index.php/latest-research/rural-youth-voter-turnout-improved-2024",
      downloadFile: ""
    },
    
{
      id: "voter-registration-restrictions-2025",
      title: "New restrictions on voter registration are likely to harm young voters",
      type: "Web Article",
      year: "2025",
      publisher: "CIRCLE",
      authors: "Ruby Belle Booth, Sara Suzuki, Alberto Medina, Katie Hilton, Nicole Li, Sam Searles",
      description: "Analysis of new voter registration restrictions and their impact on youth.",
      link: "https://circle.tufts.edu/latest-research/new-restrictions-voter-registration-are-likely-harm-young-voters",
      downloadFile: ""
    },
  {
      id: "media-literacy-2025",
      title: "Youth rely on digital platforms, need media literacy to access political information",
      type: "Web Article",
      year: "2025",
      publisher: "CIRCLE",
      authors: "Kelly Siegel-Stechler, Katie Hilton, Alberto Medina, Sara Suzuki",
      description: "Research on youth digital media consumption and media literacy needs.",
      link: "https://circle.tufts.edu/index.php/latest-research/youth-rely-digital-platforms-need-media-literacy-access-political-information",
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
      id: "genz-democracy-2025",
      title: "How does Gen Z really feel about democracy? Insights from three profiles of youth and democracy",
      type: "Report",
      year: "2025",
      publisher: "CIRCLE",
      authors: "Deborah Apau, Sara Suzuki, Alberto Medina, Ruby Belle Booth",
      description: "Research examining Gen Z attitudes toward democracy through profile analysis.",
      link: "https://circle.tufts.edu/report-genz-attitudes-democracy",
      downloadFile: "",
      keyWork: true
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
      authors: "Sam Searles, Sara Suzuki, Alberto Medina, Katie Hilton",
      description: "Research on Black youth civic investment and voting barriers.",
      link: "https://circle.tufts.edu/latest-research/black-youth-are-invested-their-communities-encounter-barriers-voting",
      downloadFile: "",
      keyWork: true
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
    },

    // 2023

 {
      id: "involving-youth-research-2023",
      title: "Involving youth in research on youth civic engagement",
      type: "Web Article",
      year: "2023",
      publisher: "CIRCLE",
      authors: "Xol Aceytuno, Ava Mateo, Ruby Belle Booth, Sara Suzuki, Mahnoor Hussain",
      description: "Participatory research approach involving youth as researchers.",
      link: "https://circle.tufts.edu/index.php/latest-research/involving-youth-research-youth-civic-engagement",
      downloadFile: ""
    },
  {
      id: "climate-concern-2023",
      title: "Concern for climate change directly informs youth civic engagement",
      type: "Report",
      year: "2023",
      publisher: "CIRCLE",
      authors: "Abby Kiesa, Sara Suzuki, Alberto Medina",
      description: "Research linking climate change concern to youth civic participation.",
      link: "https://circle.tufts.edu/sites/default/files/2023-12/concern_climate_informs_youth_engagement_2024.pdf",
      downloadFile: ""
    },

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
      id: "youth-ready-election-2023",
      title: "Youth and the 2024 Election: Likely to Vote and Ready to Drive Action on Key Political Issues",
      type: "Web Article",
      year: "2023",
      publisher: "CIRCLE",
      authors: "Peter de Guzman, Alberto Medina, Katie Hilton, Kei Kawashima-Ginsberg, Abby Kiesa, Kelly Siegel-Stechler, Sara Suzuki",
      description: "Analysis of youth readiness and engagement for the 2024 election.",
      link: "https://circle.tufts.edu/latest-research/youth-and-the-2024-election-likely-to-vote-and-ready-to-drive-action-on-key-political-issues",
      downloadFile: ""
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
      downloadFile: "files/publications/2023_cpnec.pdf",
      keyWork: true
    },

 {
      id: "genz-2024-eligible-2023",
      title: "41 million members of Gen Z will be eligible to vote in 2024",
      type: "Web Article",
      year: "2023",
      publisher: "CIRCLE",
      authors: "Alberto Medina, Sara Suzuki, Peter de Guzman, Lily Feng, Katie Hilton",
      description: "Analysis of Gen Z voter eligibility for the 2024 election.",
      link: "https://circle.tufts.edu/latest-research/41-million-members-gen-z-will-be-eligible-vote-2024",
      downloadFile: ""
    },
    {
      id: "black-youth-barriers-2023",
      title: "Black youth value voting, have political ambition, face barriers to engagement",
      type: "Web Article",
      year: "2023",
      publisher: "CIRCLE",
      authors: "Lily Feng, Sara Suzuki, Alberto Medina, Katie Hilton",
      description: "Research on political attitudes and barriers among Black youth.",
      link: "https://circle.tufts.edu/latest-research/black-youth-value-voting-have-political-ambition-face-barriers-engagement",
      downloadFile: ""
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
      id: "genz-turnout-2023",
      title: "Gen Z voted at a higher rate in 2022 than previous generations in their first midterm election",
      type: "Web Article",
      year: "2023",
      publisher: "CIRCLE",
      authors: "Alberto Medina, Katie Hilton, Sara Suzuki",
      description: "Analysis comparing Gen Z midterm turnout to previous generations.",
      link: "https://circle.tufts.edu/latest-research/gen-z-voted-higher-rate-2022-previous-generations-their-first-midterm-election",
      downloadFile: ""
    },

    {
      id: "youth-turnout-inequities-2023",
      title: "2022 youth turnout by race and gender reveals major inequities",
      type: "Web Article",
      year: "2023",
      publisher: "CIRCLE",
      authors: "Ruby Belle Booth, Alberto Medina, Sara Suzuki, SJ McGeady",
      description: "Demographic analysis of youth turnout disparities in 2022.",
      link: "https://circle.tufts.edu/latest-research/2022-youth-turnout-race-and-gender-reveals-major-inequities",
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
      downloadFile: "",
      keyWork: true
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
      downloadFile: "",
      keyWork: true
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
      downloadFile: "",
      keyWork: true
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
      downloadFile: "files/publications/2023_handbook.pdf",
      keyWork: true
    },
    



    {
      id: "community-mental-health-2023",
      title: "Community connections matter for the mental health of politically active youth",
      type: "Web Article",
      year: "2023",
      publisher: "CIRCLE",
      authors: "L. Feng, Sara Suzuki, Alberto Medina, SJ McGeady",
      description: "Research on community support and mental health among politically engaged youth.",
      link: "https://circle.tufts.edu/latest-research/community-connections-matter-mental-health-politically-active-youth",
      downloadFile: "",
      keyWork: true
    },
    {
      id: "genz-power-2023",
      title: "Gen Z, aware of its power, wants to have impact on a wide range of issues",
      type: "Web Article",
      year: "2023",
      publisher: "CIRCLE",
      authors: "Ruby Belle Booth, Alberto Medina, Sara Suzuki",
      description: "Research on Gen Z political consciousness and issue priorities.",
      link: "https://circle.tufts.edu/latest-research/gen-z-aware-its-power-wants-have-impact-wide-range-issues",
      downloadFile: ""
    },




 
 


   
 
   
    
    // 2022
    {
      id: "young-voters-2022",
      title: "Young voters in 2022: Black and non-college youth were underrepresented",
      type: "Web Article",
      year: "2022",
      publisher: "CIRCLE",
      authors: "Sara Suzuki, Peter de Guzman, Alberto Medina",
      description: "Analysis of demographic disparities in youth voter turnout in 2022.",
      link: "https://circle.tufts.edu/latest-research/young-voters-2022-black-and-non-college-youth-were-underrepresented",
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
    {
      id: "uneven-election-policies-2022",
      title: "Uneven election policies across the country shape youth voting",
      type: "Web Article",
      year: "2022",
      publisher: "CIRCLE",
      authors: "Peter de Guzman, Jamie Frye, Megan Lam, Alberto Medina, Sara Suzuki",
      description: "Analysis of how varying state election policies affect youth turnout.",
      link: "https://circle.tufts.edu/latest-research/uneven-election-policies-across-country-shape-youth-voting",
      downloadFile: ""
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
      id: "running-office-research-2022",
      title: "What the research says: Youth running for office",
      type: "Web Article",
      year: "2022",
      publisher: "CIRCLE",
      authors: "Megan Lam, Sara Suzuki, Alberto Medina",
      description: "Research synthesis on youth candidacy and political leadership.",
      link: "https://circle.tufts.edu/latest-research/what-research-says-youth-running-office",
      downloadFile: ""
    },
   {
      id: "community-orgs-yoc-2022",
      title: "Outreach from community organizations is key to engaging youth of color",
      type: "Web Article",
      year: "2022",
      publisher: "CIRCLE",
      authors: "Megan Lam, Sara Suzuki, Alberto Medina, Maha Mapara",
      description: "Research on effective community outreach strategies for youth of color.",
      link: "https://circle.tufts.edu/latest-research/outreach-community-organizations-key-engaging-youth-color",
      downloadFile: ""
    },


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
      id: "aapi-mail-voting-2022",
      title: "Mail-in voting is critical to young Asian Americans' voter participation",
      type: "Web Article",
      year: "2022",
      publisher: "CIRCLE",
      authors: "Peter de Guzman, Alberto Medina, Sara Suzuki, Kelly Siegel-Stechler",
      description: "Research on mail-in voting and Asian American youth participation.",
      link: "https://circle.tufts.edu/latest-research/mail-voting-critical-young-asian-americans-voter-participation",
      downloadFile: ""
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
      downloadFile: "",
      keyWork: true
    },



    {
      id: "poll-workers-2022",
      title: "Youth poll worker programs are a key but underused way to grow voters",
      type: "Web Article",
      year: "2022",
      publisher: "CIRCLE",
      authors: "Ruby Belle Booth, Alberto Medina, Sara Suzuki",
      description: "Research on youth poll worker programs and voter development.",
      link: "https://circle.tufts.edu/latest-research/youth-poll-worker-programs-are-key-underused-way-grow-voters",
      downloadFile: ""
    },

    {
      id: "news-to-action-2022",
      title: "From news attention to action: A key role for civic organizations",
      type: "Web Article",
      year: "2022",
      publisher: "CIRCLE",
      authors: "Madeline McGee, Sara Suzuki, Abby Kiesa, Alberto Medina",
      description: "Research on how news consumption translates to civic action.",
      link: "https://circle.tufts.edu/latest-research/news-attention-action-key-role-civic-organizations",
      downloadFile: "",
      keyWork: true
    },


    {
      id: "climate-civic-engagement-2022",
      title: "Youth concern about climate change drives civic engagement",
      type: "Web Article",
      year: "2022",
      publisher: "CIRCLE",
      authors: "Sara Suzuki, Alberto Medina, Peter de Guzman",
      description: "Research linking climate concern to youth civic participation.",
      link: "https://circle.tufts.edu/latest-research/youth-concern-about-climate-change-drives-civic-engagement",
      downloadFile: ""
    },
    
 

    
  

    // 2021

    {
      id: "media-making-2021",
      title: "Media-making about social and political issues builds confidence in teens",
      type: "Web Article",
      year: "2021",
      publisher: "CIRCLE",
      authors: "Madeline McGee, Abby Kiesa, Sara Suzuki",
      description: "Research on youth media creation and civic confidence.",
      link: "https://circle.tufts.edu/latest-research/media-making-about-social-and-political-issues-builds-confidence-teens",
      downloadFile: ""
    },


    {
      id: "dissertation-2021",
      title: "Critical consciousness and positive youth development: A group-differential longitudinal study among youth of color in the United States",
      type: "Dissertation",
      year: "2021",
      publisher: "Boston College",
      authors: "Sara Suzuki",
      description: "Doctoral dissertation examining critical consciousness development among youth of color.",
      link: "",
      downloadFile: ""
        },
    {
      id: "quantcrit-2021",
      title: "Using QuantCrit to advance an anti-racist developmental science: Applications to mixture modeling",
      type: "Journal Article",
      year: "2021",
      publisher: "Journal of Adolescent Research",
      authors: "Sara Suzuki, Stacy L. Morris, Sara K. Johnson",
      description: "Methodological paper on applying QuantCrit frameworks to statistical analysis.",
      link: "https://doi.org/10.1177/07435584211028229",
      downloadFile: "files/publications/2021_jar.pdf",
      keyWork: true
    },
   
    // 2020
    {
      id: "rwanda-pyd-2020",
      title: "Toward a measure for assessing features of effective youth development programs: Contextual safety and the 'Big Three' components of positive youth development programs in Rwanda",
      type: "Journal Article",
      year: "2020",
      publisher: "Child & Youth Care Forum",
      authors: "Jonathan M. Tirrell, Elizabeth M. Dowling, Patricia Gansert, Mary Buckingham, Caitlin A. Wong, Sara Suzuki, Catherine Naliaka, Patience Kibbedi, Emmanuel Namurinda, Kate Williams",
      description: "Cross-cultural study of positive youth development program features in Rwanda.",
      link: "",
      downloadFile: ""
    },
    {
      id: "formation-scholars-2020",
      title: "The formation of scholars: Understanding graduate socialization through the lens of oppression",
      type: "Web Article",
      year: "2020",
      publisher: "Blog",
      authors: "Sara Suzuki, Liza A. Talusan",
      description: "Blog post examining graduate socialization and scholarly formation through a critical lens.",
      link: "",
      downloadFile: ""
    },
    // 2016
    {
      id: "role-models-2016",
      title: "Adolescents' character role models: Exploring who young people look up to as examples of how to be a good person",
      type: "Journal Article",
      year: "2016",
      publisher: "Research in Human Development",
      authors: "Sara K. Johnson, Mary H. Buckingham, Stacy L. Morris, Sara Suzuki, Michelle B. Weiner, Rachel M. Hershberg, Ettya R. Fremont, Milena Batanova, Caitlin C. Aymong, Cristina J. Hunter",
      description: "Research on adolescent character role models and moral development.",
      link: "",
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
      id: "wgbh-community-safety",
      outlet: "WGBH",
      title: "Community Safety",
      date: "February 23, 2022",
      type: "Radio Interview",
      link: "https://sara-suzuki.com/2022/02/23/wgbh/"
    },
    {
      id: "harvard-crimson-community-safety",
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
    copyright: "© 2024-2026 Sara Suzuki. All rights reserved.",
    message: "Building a more just democracy through co-creating knowledge and power with young people."
  }
};

// Make config available globally
if (typeof window !== 'undefined') {
  window.CONFIG = CONFIG;
}
