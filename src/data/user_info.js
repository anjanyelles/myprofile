const info = {
    // ============ MAIN DETAILS ============
    main: {
        name: "Anil k",
        description: "I'm a full-stack developer specializing in building scalable, secure, and high-quality web and mobile applications. With expertise in frameworks like React, Next.js, and Node.js, I follow industry best practices to deliver reliable and performant solutions across platforms.",

        role: "Hi, my name is Anil",
        photo: "../photo1.jpeg",
        email: "anil@gmail.com",
    },  

    // ============ SOCIAL LINKS ============
    socials: {
        twitter: "https://twitter.com/",
		github: "https://github.com/",
		linkedin: "https://linkedin.com/in/",
		instagram: "https://instagram.com/",
		facebook: "https://facebook.com/",
    },

    // ============ PROJECTS ============
    projects: [
        {
			title: "Oxyloans",
			description: "I developed a peer-to-peer lending web app that connects borrowers and lenders directly, focusing on security and scalability. It uses Java and Spring Boot for the back end, React for the front end, and a reliable database to ensure smooth and secure transactions.",
            technologies: "React, Tailwind, Java, Pgsql",
			// github: "https://github.com/dsbalico/pseudocode-to-c",
            link: "https://oxyloans.com"
		},

        {
			title: "LLT Overseas",
			description: "We developed a consultancy website for students seeking to study abroad. The site offers guidance on application processes, visa requirements, and funding options, including loans to help students secure financial support for their studies.",
			technologies: "Tailwind, PostgreSQL",
			github: "https://github.com/dsbalico/YouShare",
            link: "https://lltoverseas.com"
		},

        {   
			title: "Askoxy.AI",
			description: "We developed Askoxy.AI, a web application built with Java and React TypeScript that leverages APIs to provide users with intelligent responses and insights. The platform focuses on delivering a seamless and interactive experience for users seeking information and assistance.",
			technologies: "React, Tailwind, java, typescript",
			github: "https://github.com/dsbalico/letter-digit-shape-classification",
            link: "https://letterdigitshape-classification.netlify.app/"
		},

		{
			title: "Gatnix.com",
			description: "We developed a Job Application Tracker that streamlines employee management. This platform simplifies the application process, enables efficient tracking, and enhances communication between applicants and hiring teams..",
			technologies: "React, Tailwind, Firebase",
			github: "https://github.com/dsbalico/chatroom",
            link: "https://www.askoxy.ai"
		},

		{
			title: "Oxybricks.world",
			description: "OxyBricks.world is a fractional investment web app for real estate, enabling users to invest in properties through shared ownership and making real estate investment accessible to everyone.",
			technologies: "React, Tailwind, TypeScript",
			github: "https://github.com/dsbalico/sudoku-solver-using-simulated-annealing",
            link: "https://oxybricks.world"
		},

		{
			title: "Studentx",
			description: "Student Study Abroad is a platform designed for students seeking to study abroad. It provides detailed university information, including course offerings and application processes, along with insights into the cost of living in different countries to help students make informed decisions.",
			technologies: "React, Tailwind, Flask",
			github: "https://github.com/dsbalico/pcso-lotto-number-generator",
            link: "https://bmv.money/StudentX.world/index.html"
		},
    ],

    // ============ EDUCATION ============
    education: [
        {
            school: "MVSR engineering college hyderabad.",
            degree: "Computer Science",

            duration: "2020 - 2022",
            image: "tup.webp"
        },
        {
            school: "Jntu College",
            degree: "Bachelor of Science in Computer Science",
            duration: "2017 - 2020",
            image: "sti.webp"
        },
    ],

    // ============ EXPERIENCE ============
    experience: [
        {
            position: "Full-Stack Developer ",
            company: "Infosys",
            duration: "Mar 2022 - Jun 2023 (6 Months)",
            image: "ccci.webp",
            descriptions: [
                "Completed an extensive training program in full-stack web development.",
                "Actively contributed to the ongoing development of a web application.",
                "Mentored by senior developers on best practices and code optimization.",
            ]
        },
        {
            position: "Full-Stack Developer ",
            company: "SRS Fintech Labs.",
            duration: "Nov 2022 - Dec 2024",
            image: "spvttc.webp",
            descriptions: [
                "Developed a platform that connects borrowers and lenders directly, streamlining the loan application process.",
                "Developed  a web app that allows users to invest in real estate."
            ]
        },
    ],

    // ============ CERTIFICATES ============
    certificates: [
        {
            title: "Foundations of Cybersecurity Certificate",
            description: "Provided by Coursera & Authorized by IBM",
            icon: "ibm",
            link: "https://www.coursera.org/account/accomplishments/records/SF2PPLNVTH6R",
        },
        {
            title: "Git and GitHub Essentials",
            description: "Provided by Coursera & Authorized by IBM",
            icon: "ibm",
            link: "https://www.credly.com/badges/fa00026a-4db5-4269-ab4f-340f5382ac03",
        },
        {
            title: "Crash Course on Python Certificate",
            description: "Provided by Coursera & Authorized by Google",
            icon: "google",
            link: "https://www.coursera.org/account/accomplishments/verify/S9773NBEK4S6"
        },
        {
            title: "Technical Support Fundamentals Certificate",
            description: "Provided by Coursera & Authorized by Google",
            icon: "google",
            link: "https://www.coursera.org/account/accomplishments/verify/P9EH5HNYRESZ"
        },
        {
            title: "Introduction to Web Development with HTML, CSS, JavaScript Certificate",
            description: "Provided by Coursera & Authorized by IBM",
            icon: "ibm",
            link: "https://www.credly.com/badges/7b88eb00-e1f9-4ae6-be2a-3b2ae8983c44"
        },
        {
            title: "Introduction to Cloud Computing Certificate",
            description: "Provided by Coursera & Authorized by IBM",
            icon: "ibm",
            link: "https://www.credly.com/badges/514b694a-8dc4-418d-9af4-61908dc29ca8"
        },
        {
            title: "Django Application Development with SQL and Databases Certificate",
            description: "Provided by Coursera & Authorized by IBM",
            icon: "ibm",
            link: "https://www.credly.com/badges/a36dd8a3-1050-4c4e-bcef-97b39babf55e"
        },
        {
            title: "Front-End Developer (React) Certificate",
            description: "Provided by HackerRank",
            icon: "hackerrank",
            link: "https://www.hackerrank.com/certificates/631ac3acf267"
        },
        {
            title: "Software Engineer Certificate",
            description: "Provided by HackerRank",
            icon: "hackerrank",
            link: "https://www.hackerrank.com/certificates/efdbdd44eb7d"
        }
    ],

    // ============ CONTACT ============
    contact: {
        title: "Let's Get in Touch: Ways to Connect with Me",
        description: "Thank you for your interest in getting in touch with me. I welcome your feedback, questions, and suggestions. If you have a specific question or comment, please feel free to email me directly at danielshan.balico@gmail.com. I make an effort to respond to all messages within 24 hours, although it may take me longer during busy periods. Finally, if you prefer to connect on social media, you can connect with me using the social media links below.",
    },

    // ============ FOOTER ============
    footer: "© 2024 Anil. All Rights Reserved"
}

export default info