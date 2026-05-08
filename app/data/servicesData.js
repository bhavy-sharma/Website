// app/data/servicesData.js

export const servicesData = {
  "web-development": {
    title: "Web Development",
    icon: "Code",
    heroGradient: "from-blue-500 to-cyan-400",
    shortDesc: "Custom websites & web apps built with Next.js, React, and Node. Fast, secure, and scalable.",
    fullDescription: `
      In today's digital-first world, your website is often the first impression potential customers have of your business. 
      We create stunning, high-performance web applications that not only look beautiful but also deliver exceptional user experiences.

      Our development process focuses on creating scalable solutions that grow with your business. Whether you need a simple 
      brochure website or a complex enterprise application, we have the expertise to bring your vision to life.

      We use cutting-edge technologies like Next.js, React, and Node.js to ensure your website is fast, secure, and SEO-friendly. 
      Our team follows best practices in code architecture, performance optimization, and security to deliver products that stand the test of time.
    `,
    process: [
      {
        step: "01",
        title: "Discovery & Planning",
        description: "We understand your business goals, target audience, and technical requirements."
      },
      {
        step: "02",
        title: "Design & Prototyping",
        description: "Create wireframes and interactive prototypes for your approval."
      },
      {
        step: "03",
        title: "Development",
        description: "Agile development with regular progress updates and demos."
      },
      {
        step: "04",
        title: "Testing & Launch",
        description: "Rigorous testing and smooth deployment to production."
      },
      {
        step: "05",
        title: "Maintenance & Support",
        description: "Ongoing support, updates, and performance monitoring."
      }
    ],
    features: [
      {
        title: "E-commerce Solutions",
        description: "Custom online stores with secure payment integration and inventory management."
      },
      {
        title: "Custom Dashboards",
        description: "Admin panels and analytics dashboards for data-driven decision making."
      },
      {
        title: "API Integration",
        description: "Seamless integration with third-party services and APIs."
      },
      {
        title: "Responsive Design",
        description: "Perfect viewing experience across all devices and screen sizes."
      }
    ],
    technologies: [
      "React/Next.js",
      "Node.js",
      "MongoDB/PostgreSQL",
      "Tailwind CSS",
      "TypeScript",
      "GraphQL"
    ],
    projects: [
      {
        name: "E-commerce Platform",
        description: "Full-featured online store with 10k+ monthly users"
      },
      {
        name: "Analytics Dashboard",
        description: "Real-time data visualization for enterprise clients"
      }
    ],
    faq: [
      {
        question: "How long does it take to build a website?",
        answer: "Typically 4-12 weeks depending on complexity and features."
      },
      {
        question: "Do you provide hosting services?",
        answer: "Yes, we offer hosting setup and maintenance on platforms like Vercel, AWS, or Netlify."
      },
      {
        question: "Can you redesign my existing website?",
        answer: "Absolutely! We specialize in modernizing legacy websites."
      }
    ],
    ctaText: "Start Your Web Project",
    metaTitle: "Web Development Services | Custom Websites & Web Apps",
    metaDescription: "Professional web development services using Next.js, React, and Node. Get a custom website that's fast, secure, and scalable."
  },

  "video-editing": {
    title: "Video Editing",
    icon: "Video",
    heroGradient: "from-purple-500 to-pink-500",
    shortDesc: "Cinematic editing for YouTube, Reels, and Ads. Color grading, VFX, and sound design included.",
    fullDescription: `
      Transform your raw footage into compelling visual stories that captivate your audience. Our video editing services 
      combine technical expertise with creative storytelling to produce content that stands out in today's crowded digital landscape.

      From social media short-form content to documentary-style productions, we handle everything from basic cuts to complex 
      visual effects. Our team uses professional tools like Adobe Premiere Pro, After Effects, and DaVinci Resolve to deliver 
      cinematic quality that elevates your brand.

      Whether you're a content creator looking to grow your YouTube channel or a business needing promotional videos, 
      we'll help you communicate your message effectively through the power of visual storytelling.
    `,
    process: [
      {
        step: "01",
        title: "Raw Footage Review",
        description: "We analyze your footage and understand your vision."
      },
      {
        step: "02",
        title: "Rough Cut",
        description: "Initial assembly of the story structure and pacing."
      },
      {
        step: "03",
        title: "Color Grading & VFX",
        description: "Enhance visuals with professional color correction and effects."
      },
      {
        step: "04",
        title: "Sound Design",
        description: "Audio enhancement, background music, and voice-over integration."
      },
      {
        step: "05",
        title: "Final Delivery",
        description: "Export in multiple formats optimized for different platforms."
      }
    ],
    features: [
      {
        title: "Short-form Content",
        description: "Engaging videos for Reels, TikTok, and YouTube Shorts."
      },
      {
        title: "Documentary Style",
        description: "Cinematic storytelling for brand stories and case studies."
      },
      {
        title: "Motion Graphics",
        description: "Animated titles, lower thirds, and visual effects."
      },
      {
        title: "Color Grading",
        description: "Professional color correction for consistent look and feel."
      }
    ],
    technologies: [
      "Adobe Premiere Pro",
      "After Effects",
      "DaVinci Resolve",
      "Final Cut Pro",
      "Blender"
    ],
    projects: [
      {
        name: "YouTube Channel Launch",
        description: "Helped creator grow from 0 to 100k subscribers in 6 months"
      },
      {
        name: "Brand Documentary",
        description: "10-minute brand story video for tech startup"
      }
    ],
    faq: [
      {
        question: "What video formats do you accept?",
        answer: "We accept MP4, MOV, AVI, and most common formats."
      },
      {
        question: "How long is the turnaround time?",
        answer: "Typically 3-7 days depending on video length and complexity."
      }
    ],
    ctaText: "Edit My Video",
    metaTitle: "Professional Video Editing Services | Cinematic Quality",
    metaDescription: "Expert video editing for YouTube, social media, and ads. Color grading, VFX, and sound design included."
  },

  "content-writing": {
    title: "Content Writing",
    icon: "PenTool",
    heroGradient: "from-emerald-500 to-teal-400",
    shortDesc: "SEO-optimized blogs, copywriting, and technical documentation that converts readers into customers.",
    fullDescription: `
      Words have power. Our content writing services help you communicate your brand message effectively, engage your audience, 
      and drive conversions. We create compelling, well-researched content that ranks high on search engines and resonates with readers.

      From blog posts that establish your authority to website copy that converts visitors into customers, our team of experienced 
      writers delivers content that's both informative and engaging. We specialize in SEO optimization, ensuring your content 
      reaches the right audience at the right time.

      Whether you need technical documentation for your software product or creative copy for your marketing campaign, 
      we adapt our writing style to match your brand voice and industry requirements.
    `,
    process: [
      {
        step: "01",
        title: "Brief & Research",
        description: "We study your brand, audience, and content goals."
      },
      {
        step: "02",
        title: "SEO Strategy",
        description: "Keyword research and content structure planning."
      },
      {
        step: "03",
        title: "Drafting",
        description: "First draft with proper formatting and citations."
      },
      {
        step: "04",
        title: "Review & Revisions",
        description: "Collaborative feedback and content refinement."
      },
      {
        step: "05",
        title: "Final Delivery",
        description: "SEO-optimized, proofread content ready for publishing."
      }
    ],
    features: [
      {
        title: "Blog Posts",
        description: "Engaging, SEO-optimized articles that drive traffic."
      },
      {
        title: "Website Copy",
        description: "Persuasive copy for landing pages and product descriptions."
      },
      {
        title: "Whitepapers",
        description: "In-depth research documents for B2B audiences."
      },
      {
        title: "Technical Documentation",
        description: "Clear, accurate API docs and user guides."
      }
    ],
    technologies: [
      "SEO Best Practices",
      "Google Docs",
      "Grammarly",
      "Ahrefs/Semrush",
      "WordPress"
    ],
    projects: [
      {
        name: "Tech Blog Growth",
        description: "Increased organic traffic by 300% in 3 months"
      },
      {
        name: "SaaS Landing Page",
        description: "35% increase in conversion rate after copy rewrite"
      }
    ],
    faq: [
      {
        question: "Do you do SEO research?",
        answer: "Yes, all our content is SEO-optimized with proper keyword research."
      },
      {
        question: "Can you match my brand voice?",
        answer: "Absolutely! We study your existing content to match tone and style."
      }
    ],
    ctaText: "Get Quality Content",
    metaTitle: "Professional Content Writing Services | SEO-Optimized Copy",
    metaDescription: "Expert content writers for blogs, websites, and technical documentation. Get engaging, SEO-friendly content that converts."
  },

  "trip-planner": {
    title: "Your Trip Planner",
    icon: "Map",
    heroGradient: "from-orange-500 to-yellow-400",
    shortDesc: "Personalized itineraries, budget planning, and hidden gem discoveries for your next adventure.",
    fullDescription: `
      Travel planning can be overwhelming. Let our experts craft the perfect journey for you. We create personalized itineraries 
      that match your interests, budget, and travel style. From hidden local gems to must-see attractions, we ensure you experience 
      the best each destination has to offer.

      Whether you're planning a solo backpacking trip, a romantic honeymoon, or a family vacation, our travel planners handle 
      every detail so you can focus on making memories. We consider your preferences for accommodations, activities, dining, 
      and transportation to create a seamless travel experience.

      Our local knowledge and industry connections help us find the best deals and unique experiences you won't find in guidebooks. 
      Let us turn your travel dreams into reality.
    `,
    process: [
      {
        step: "01",
        title: "Consultation",
        description: "We discuss your travel preferences, budget, and must-see destinations."
      },
      {
        step: "02",
        title: "Research",
        description: "Our team researches best flights, hotels, and activities."
      },
      {
        step: "03",
        title: "Itinerary Creation",
        description: "Custom day-by-day plan with timings and recommendations."
      },
      {
        step: "04",
        title: "Booking Assistance",
        description: "We help you book or provide direct booking links."
      },
      {
        step: "05",
        title: "Trip Support",
        description: "24/7 assistance during your journey."
      }
    ],
    features: [
      {
        title: "Itinerary Design",
        description: "Detailed day-by-day travel plans with activities."
      },
      {
        title: "Budget Optimization",
        description: "Smart recommendations to maximize your budget."
      },
      {
        title: "Local Guides",
        description: "Hidden gems and authentic local experiences."
      },
      {
        title: "Booking Management",
        description: "We handle all your bookings in one place."
      }
    ],
    technologies: [
      "Google Maps API",
      "Travel Booking Platforms",
      "Budget Tracking Tools",
      "Local Partnerships"
    ],
    projects: [
      {
        name: "European Backpacking Trip",
        description: "15-day itinerary across 5 countries under €2000"
      },
      {
        name: "Honeymoon in Bali",
        description: "Luxury romantic getaway with private tours"
      }
    ],
    faq: [
      {
        question: "How much does trip planning cost?",
        answer: "Planning fees start at $49 depending on trip complexity and duration."
      },
      {
        question: "Can you book everything for me?",
        answer: "We can provide booking links or book directly on your behalf."
      }
    ],
    ctaText: "Plan My Trip",
    metaTitle: "Personalized Trip Planning Services | Custom Travel Itineraries",
    metaDescription: "Expert travel planners creating custom itineraries based on your preferences, budget, and travel style."
  },

  "social-media-marketing": {
    title: "Social Media Marketing",
    icon: "Share2",
    heroGradient: "from-red-500 to-rose-400",
    shortDesc: "Data-driven strategies to grow your audience. Content calendars, ad management, and analytics.",
    fullDescription: `
      Build a powerful social media presence that drives real business results. Our data-driven marketing strategies help you 
      reach your target audience, increase engagement, and convert followers into customers.

      We create comprehensive social media strategies tailored to each platform—Instagram, LinkedIn, Twitter, Facebook, and TikTok. 
      From content creation to community management, we handle every aspect of your social media presence so you can focus on 
      running your business.

      Our team tracks key metrics and continuously optimizes campaigns to improve ROI. Whether you need to increase brand awareness, 
      drive website traffic, or generate leads, we have the expertise to help you achieve your goals.
    `,
    process: [
      {
        step: "01",
        title: "Audit & Strategy",
        description: "We analyze your current presence and set clear goals."
      },
      {
        step: "02",
        title: "Content Calendar",
        description: "Monthly planning of posts, stories, and campaigns."
      },
      {
        step: "03",
        title: "Content Creation",
        description: "Design graphics, write captions, and produce videos."
      },
      {
        step: "04",
        title: "Community Management",
        description: "Engage with followers and respond to comments/DMs."
      },
      {
        step: "05",
        title: "Analytics & Reporting",
        description: "Monthly reports on growth, engagement, and ROI."
      }
    ],
    features: [
      {
        title: "Instagram Growth",
        description: "Increase followers and engagement organically."
      },
      {
        title: "Ad Campaigns",
        description: "Targeted ads on Facebook, Instagram, and LinkedIn."
      },
      {
        title: "Brand Strategy",
        description: "Develop consistent brand voice across platforms."
      },
      {
        title: "Influencer Marketing",
        description: "Connect with influencers in your niche."
      }
    ],
    technologies: [
      "Meta Business Suite",
      "Hootsuite/Buffer",
      "Canva",
      "Google Analytics",
      "Social Listening Tools"
    ],
    projects: [
      {
        name: "Fashion Brand Growth",
        description: "Grew Instagram from 5k to 50k followers in 6 months"
      },
      {
        name: "B2B Lead Generation",
        description: "Generated 200+ qualified leads via LinkedIn"
      }
    ],
    faq: [
      {
        question: "How many posts per week do you recommend?",
        answer: "We recommend 3-5 posts per week plus daily stories for optimal engagement."
      },
      {
        question: "Do you run paid ads?",
        answer: "Yes, we create and manage paid campaigns with your budget."
      }
    ],
    ctaText: "Grow My Social Media",
    metaTitle: "Social Media Marketing Services | Grow Your Audience",
    metaDescription: "Data-driven social media strategies to increase engagement, followers, and conversions across all platforms."
  },

  "live-music-concert": {
    title: "Live Music Concert",
    icon: "Music",
    heroGradient: "from-indigo-500 to-violet-400",
    shortDesc: "End-to-end event management for concerts. Artist booking, stage setup, and ticketing solutions.",
    fullDescription: `
      Create unforgettable live music experiences with our comprehensive concert management services. From intimate club shows 
      to large-scale festivals, we handle every aspect of event production so you can focus on the music.

      Our team has extensive experience in artist booking, stage design, sound engineering, and crowd management. We work with 
      venues, sponsors, and vendors to ensure seamless execution while maximizing your ROI.

      Whether you're an artist planning your own tour or a promoter organizing a music festival, we provide end-to-end solutions 
      that deliver exceptional experiences for both performers and audiences.
    `,
    process: [
      {
        step: "01",
        title: "Artist Booking",
        description: "Negotiate contracts and schedule performers."
      },
      {
        step: "02",
        title: "Venue Selection",
        description: "Find the perfect venue based on audience size and budget."
      },
      {
        step: "03",
        title: "Production Setup",
        description: "Sound, lighting, stage design, and video walls."
      },
      {
        step: "04",
        title: "Ticketing & Marketing",
        description: "Promote the event and manage ticket sales."
      },
      {
        step: "05",
        title: "Event Day Management",
        description: "Coordinate staff, security, and crowd flow."
      }
    ],
    features: [
      {
        title: "Artist Management",
        description: "Book local or international talent for your event."
      },
      {
        title: "Stage Production",
        description: "Professional sound, lighting, and visual effects."
      },
      {
        title: "Ticketing System",
        description: "Online ticketing with QR codes and analytics."
      },
      {
        title: "Sponsorship Mgmt",
        description: "Secure sponsors and manage brand activations."
      }
    ],
    technologies: [
      "Professional Audio Systems",
      "LED Wall Displays",
      "Ticketing Platforms",
      "Event Management Software",
      "CRM Tools"
    ],
    projects: [
      {
        name: "Electronic Music Festival",
        description: "5,000 attendees, 15 international artists"
      },
      {
        name: "Corporate Concert",
        description: "Private event for 500 employees"
      }
    ],
    faq: [
      {
        question: "What's the minimum budget for a concert?",
        answer: "Small shows start at $5,000. Festival-scale events require larger budgets."
      },
      {
        question: "Do you handle permits and licenses?",
        answer: "Yes, we manage all legal requirements including permits and licenses."
      }
    ],
    ctaText: "Book Your Concert",
    metaTitle: "Live Music Concert Management | Event Production Services",
    metaDescription: "Professional concert and event management services. Artist booking, stage production, and ticketing solutions."
  },

  "hackathon-organiser": {
    title: "Hackathon Organiser",
    icon: "Trophy",
    heroGradient: "from-slate-500 to-gray-400",
    shortDesc: "We organize large-scale hackathons. Platform setup, judge coordination, and participant engagement.",
    fullDescription: `
      Inspire innovation and discover talent with professionally organized hackathons. We handle everything from platform setup 
      to judge coordination, creating engaging experiences for participants, sponsors, and organizers.

      Our team has organized hackathons ranging from 50 to 5,000 participants, both in-person and virtual. We provide the 
      infrastructure, mentorship, and judging framework needed to run successful innovation challenges.

      Whether you're a company looking to source talent, a university promoting tech education, or a community builder fostering 
      innovation, our hackathon management services deliver results while saving you time and resources.
    `,
    process: [
      {
        step: "01",
        title: "Theme Definition",
        description: "Define problem statements and judging criteria."
      },
      {
        step: "02",
        title: "Platform Setup",
        description: "Configure hackathon platform for submissions and judging."
      },
      {
        step: "03",
        title: "Sponsor Outreach",
        description: "Secure prizes, APIs, and mentorship from sponsors."
      },
      {
        step: "04",
        title: "Participant Registration",
        description: "Marketing and onboarding of participants."
      },
      {
        step: "05",
        title: "Event Execution",
        description: "Coordinate judging, mentoring, and awards ceremony."
      }
    ],
    features: [
      {
        title: "Platform Development",
        description: "Custom hackathon platform with submission portal."
      },
      {
        title: "Sponsorship Management",
        description: "Connect with relevant sponsors and manage relationships."
      },
      {
        title: "Judge Coordination",
        description: "Expert judges from industry and academia."
      },
      {
        title: "Mentorship Program",
        description: "Technical mentors to guide participants."
      }
    ],
    technologies: [
      "Devfolio/MLH",
      "Discord/Slack",
      "GitHub",
      "Video Conferencing",
      "Judging Platforms"
    ],
    projects: [
      {
        name: "National Coding Challenge",
        description: "2,500 participants from 200+ colleges"
      },
      {
        name: "Corporate Innovation Hackathon",
        description: "Internal hackathon for 500 employees"
      }
    ],
    faq: [
      {
        question: "How long does hackathon planning take?",
        answer: "Typically 2-3 months for large-scale events, 2-4 weeks for smaller ones."
      },
      {
        question: "Do you handle virtual hackathons?",
        answer: "Yes, we specialize in both in-person and virtual hackathons."
      }
    ],
    ctaText: "Organize a Hackathon",
    metaTitle: "Hackathon Organization Services | Event Management",
    metaDescription: "Professional hackathon management services. Platform setup, judge coordination, and participant engagement."
  }
};

// Helper function to get all service slugs (for static generation)
export function getAllServiceSlugs() {
  return Object.keys(servicesData).map(slug => ({ slug }));
}

// Helper function to get service data by slug
export function getServiceData(slug) {
  return servicesData[slug] || null;
}


// Too add new service 
// "new-service-slug": {
//   title: "New Service",
//   icon: "Code", // Choose from available icons
//   heroGradient: "from-blue-500 to-cyan-400",
//   shortDesc: "Brief description",
//   fullDescription: "Detailed description...",
//   process: [...],
//   features: [...],
//   technologies: [...],
//   projects: [...],
//   faq: [...],
//   ctaText: "Get Started",
//   metaTitle: "SEO Title",
//   metaDescription: "SEO Description"
// }
