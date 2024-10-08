
const logotext = "AKSHYAT";
const meta = {
    title: "Akshyat Pathak",
    description: "I’m Akshyat Pathak, a data scientist and full stack developer, currently based in India.",
};

const introdata = {
    title: "I’m Akshyat Pathak",
    animated: {
        first: "I love coding",
        second: "I build scalable applications",
        third: "I optimize algorithms",
    },
    description: "Passionate about coding, problem-solving, and building efficient software solutions.",
    your_img_url: "https://images.unsplash.com/photo-1514790193030-c89d266d5a9d",
};

const dataabout = {
    title: "A bit about myself",
    aboutme: "I am a MERN stack developer, a data enthusiast, and a competitive programming enthusiast with proven skills on LeetCode, CodeChef, and Codeforces. I enjoy solving complex challenges in software development and creating innovative applications. Currently, I'm focused on learning cutting-edge technologies and applying them to real-world problems.",
};

const worktimeline = [{
        jobtitle: "Software Developer Intern",
        where: "Sangin Jwellers",
        date: "2023",
    },
];

const skills = [{
        name: "C++",
        value: 90,
    },
    {
        name: "JavaScript",
        value: 85,
    },
    {
        name: "React",
        value: 80,
    },
    {
        name: "Node.js",
        value: 75,
    },
    {
        name: "MongoDB",
        value: 70,
    },
];

const services = [{
        title: "Full Stack Development",
        description: "Building scalable web applications using the MERN stack.",
    },
    {
        title: "Data Analysis",
        description: "Extracting insights from data and applying machine learning techniques.",
    },
    
];

const dataportfolio = [{
        img: "https://cdn.prod.website-files.com/5ded36b5e942e74b13468d23/5fcf46212efe8d5118c6434a_00-Header%402x.png",
        description: "Developed a real-time cryptocurrency tracker web app.",
        link: "https://main--cryptozzz.netlify.app/",
    },
    {
        img: "data:image/png;base64,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",
        description: "Built an AI-based solution optimizer for LeetCode problems.",
        link: "https://mysooo-leetcode-solver-app-5jxxvz.streamlit.app",
    },
    {
        img: "data:image/jpeg;base64,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",
        description: "Created a dynamic portfolio website using React and Node.js.",
        link: "https://akshyatpathak.netlify.app",
    },
];

const contactConfig = {
    YOUR_EMAIL: "21cs3003@rgipt.ac.in",
    YOUR_FONE: "6392104865",
    description: "Feel free to reach out for collaboration or just a friendly chat about technology.",
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    github: "https://github.com/mysooo",
    leetcode: "https://leetcode.com/u/mysojinyeast/",
    linkedin: "https://www.linkedin.com/in/akshyat-pathak-2a7958230/",
    twitter: "https://x.com/PathakAkshyat",
};

export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};
