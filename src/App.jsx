import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ALL from './Pages/ALL';
import Fullsatack from './Pages/Fullsatack';
import Datascience from './Pages/Datascience';
import Cyber from './Pages/Cyber';
import Career from './Pages/Career';
import Pagenotfound from './Pages/Pagenotfound';
import Navbar from './Components/Navbar/Navbar';

const App = () => {
  const data=[
    
    {
      Image:"https://www.guvi.in/blog/wp-content/uploads/2023/07/how-long-it-would-it-take-to-learn-full-stack-development_-2048x1072.webp",
      title: "How Long Would It Take to Be a Full Stack Developer?",
      author: " Meghana D",
      Contentline: "3 Min Read",
      Postdate: "26 Mar, 2024",
      Catagory: "FULL STACK DEVELOPMENT",
    },
    
    {
      Image:"https://www.guvi.in/blog/wp-content/uploads/2024/02/full_stack_developer_roadmap_in_2024.webp",
      title: "Full Stack Developer Roadmap: A Complete Guide [2024]",
      author: " Meghana D",
      Contentline: "6 Min Read",
      Postdate: "19 Mar, 2024",
      Catagory: "FULL STACK DEVELOPMENT",
    },
    
    {
      Image:"https://www.guvi.in/blog/wp-content/uploads/2023/08/Feature-image-Best-Full-Stack-Development-Online-Courses.webp",
      title: "7 Best Full-Stack Development Online Courses [2024]",
      author: "Srinithi Sankar",
      Contentline: "5 Min Read",
      Postdate: "25 Mar, 2024",
      Catagory: "FULL STACK DEVELOPMENT",
    },
    
    {
      Image:"https://www.guvi.in/blog/wp-content/uploads/2023/10/Featured-Image-top-product-based-companies-for-full-stack-developers.webp",
      title: "Top 10 Product-Based Companies for Full-Stack Developers [2024]",
      author: "Isha Sharma",
      Contentline: "3 Min Read",
      Postdate: "21 Mar, 2024",
      Catagory: "FULL STACK DEVELOPMENT",
    },
    
    {
      Image:"https://www.guvi.in/blog/wp-content/uploads/2024/02/Feature-image-Backend-Development-Roadmap-A-Complete-Guide.webp",
      title: "Backend Development Roadmap: A Complete Guide 2024",
      author: " Meghana D",
      Contentline: "7 Min Read",
      Postdate: "25 Mar, 2024",
      Catagory: "FULL STACK DEVELOPMENT",
    },
    
    {
      Image:"https://www.guvi.in/blog/wp-content/uploads/2024/02/Project-Ideas-for-Frontend-Development.webp",
      title: "Comprehensive List of Project Ideas for Frontend Development [2024]",
      author: " Lukesh S",
      Contentline: "7 Min Read",
      Postdate: "19 Mar, 2024",
      Catagory: "FULL STACK DEVELOPMENT",
    },
    
    {
      Image:"https://www.guvi.in/blog/wp-content/uploads/2024/02/Feature-image-Steps-to-Create-a-Simple-Hello-World-Page-Using-HTML.webp",
      title: "How to Create a Simple “Hello World” Page Using HTML?",
      author: "Meghana D",
      Contentline: "5 Min Read",
      Postdate: "03 Apr, 2024",
      Catagory: "FULL STACK DEVELOPMENT",
    },
    
    {
      Image:"https://www.guvi.in/blog/wp-content/uploads/2024/03/Feature-3.webp",
      title: "7 Unique Web Development Project Ideas for Beginners",
      author: " Lukesh S",
      Contentline: "02 Apr, 2024",
      Postdate: "6 Min Read",
      Catagory: "FULL STACK DEVELOPMENT",
    },
    
    {
      Image:"https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Top-High-Paying-Non-Coding-Jobs-in-Data-Science.webp",
      title: "Top 10 High Paying Non-Coding Jobs in DATA SCIENCE in 2024",
      author: "Isha Sharma",
      Contentline: "6 Min Read",
      Postdate: "16 Apr, 2024",
      Catagory: "DATA SCIENCE",
    },
    
    {
      Image:"https://www.guvi.in/blog/wp-content/uploads/2023/07/Real-World-Data-Science-Examples-2048x1072.webp",
      title: "12 Real-World DATA SCIENCE Examples: Power Of DATA SCIENCE",
      author: "Lukesh S",
      Contentline: "5 Min Read",
      Postdate: "25 Mar, 2024",
      Catagory: "DATA SCIENCE",
    },
    
    {
      Image:"https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-Top-Product-Based-Companies-for-Data-Scientists.webp",
      title: "Top Product-Based Companies for Data Scientists in 2024",
      author: "Jaishree Tomar",
      Contentline: "5 Min read",
      Postdate: "26 Mar, 2024",
      Catagory: "DATA SCIENCE",
    },
    
    {
      Image:"https://www.guvi.in/blog/wp-content/uploads/2023/08/feature-image-Best-Data-Science-Online-Courses-for-Beginners.webp",
      title: "10 Best Data Science Online Courses for Beginners | 2024",
      author: "Srinithi Sankar",
      Contentline: "7 Min Read",
      Postdate: "Apr 02, 2024",
      Catagory: "DATA SCIENCE",
    },
    
    {
      Image:"https://www.guvi.in/blog/wp-content/uploads/2023/11/feature-image-product-based-companies-for-data-science-freshers.webp",
      title: "Top Product-Based Companies for Data Science Freshers",
      author: "Jaishree Tomar",
      Contentline: "4 Min Read",
      Postdate: "10 Nov, 2023",
      Catagory: "DATA SCIENCE",
    },
    
    {
      Image:"https://www.guvi.in/blog/wp-content/uploads/2023/07/feature-image-Best-Websites-to-Learn-Data-Science-1.webp",
      title: "Best Websites to Learn Data Science in 2024: Beginner to Expert",
      author: "Meghana D",
      Contentline: "6 Min Read",
      Postdate: "14 Dec, 2023",
      Catagory: "DATA SCIENCE",
    },
    
    {
      Image:"https://www.guvi.in/blog/wp-content/uploads/2023/08/data-science-webinars-and-workshops-2048x1072.webp",
      title: "Data Science Webinars and Workshops",
      author: "Saanchi Bhardwaj",
      Contentline: "5 Min Read",
      Postdate: "15 Apr, 2024 ",
      Catagory: "DATA SCIENCE",
    },
    
    {
      Image:"https://www.guvi.in/blog/wp-content/uploads/2023/07/best-data-science-frameworks.webp",
      title: "10 Best Data Science Frameworks in 2024",
      author: "Isha Sharma",
      Contentline: "4 Min Read",
      Postdate: "13 Dec, 2023",
      Catagory: "DATA SCIENCE",
    },
    
    {
      Image:"https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Non-Coding-Jobs-in-Cybersecurity.webp",
      title: "Non-Coding Jobs in CYBER SECURITY: A Comprehensive Guide",
      author: "Jaishree Tomar",
      Contentline: "4 Min Read",
      Postdate: "26 Mar, 2024",
      Catagory: "CYBER SECURITY",
    },
    
    {
      Image:"https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-What-Is-Hacking_-Types-of-Hacking-More.webp",
      title: "What Is Hacking? Types of Hacking & More",
      author: " Meghana D",
      Contentline:"4 Min Read",
      Postdate: "25 Mar, 2024",
      Catagory: "CYBER SECURITY",
    },
    
    {
      Image:"https://www.guvi.in/blog/wp-content/uploads/2021/03/The-Ultimate-%E2%80%A8Cybersecurity-Roadmap-for-Beginners.webp",
      title: "The Ultimate CYBER SECURITY Roadmap for Beginners",
      author: "Srinithi Sankar",
      Contentline:"4 Min Read",
      Postdate: "23 Mar, 2024",
      Catagory: "CYBER SECURITY",
    },
    
    {
      Image:"https://www.guvi.in/blog/wp-content/uploads/2023/07/best-data-science-frameworks.webp",
      title: "Roles and Responsibilities of a Data Scientist",
      author: "Jaishree Tomar",
      Contentline: "6 Min Read",
      Postdate: "16 Apr, 2024",
      Catagory: "CYBER SECURITY",
    },
    
    {
      Image:"https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Non-Coding-Jobs-in-Cybersecurity.webp",
      title: "<strong>How Long Would It Take to Learn Data Science?</strong>",
      author: "Meghana D",
      Contentline: "4 Min Read",
      Postdate: "16 Apr, 2024",
      Catagory: "CYBER SECURITY",
    },
    
    {
      Image:"https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Top-High-Paying-Non-Coding-Jobs-in-Data-Science.webp",
      title: "Is coding required for cybersecurity? If yes, how crucial is coding for cyb...",
      author: " Tushar Vinocha",
      Contentline: "3 Min Read",
      Postdate: "25 Mar, 2024",
      Catagory: "CYBER SECURITY",
    },
    
    {
      Image:"https://www.guvi.in/blog/wp-content/uploads/2024/05/SEO-certfication.webp",
      title: "The Cybersecurity Surge: 5 Must-Have Cybersecurity Certifications!",
      author: " Tushar Vinocha",
      Contentline: "3 Min Read",
      Postdate: "25 Mar, 2024",
      Catagory: "CYBER SECURITY",
    },
  
    {
      Image:"https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-How-to-Become-a-Web-Developer-%E2%80%93-Your-Web-Development-Career-Roadmap.webp",
      title: "How Is Cyber Security Important To Our Lives?",
      author: "GUVI Geek",
      Contentline: "2 Min Read",
      Postdate: "29 Apr, 2024",
      Catagory: "CYBER SECURITY",
    },
      //----------------------
    {
      Image:"https://www.guvi.in/blog/wp-content/uploads/2023/05/Beginner-mistakes-in-data-science-career.webp",
      title: "8 Mistakes To Avoid When You Begin a Data Science Career",
      author: "Srinithi Sankar",
      Contentline: "7 Min Read",
      Postdate: "27 May, 2024",
      Catagory: "CAREER",
    },
    
    {
      Image:"https://www.guvi.in/blog/wp-content/uploads/2024/03/9-Creative-Data-Engineering-Project-Ideas-To-Kickstart-Your-Career.webp",
      title: "9 Most Creative Data Engineering Project Ideas To Kickstart Your Career",
      author: "Lukesh S",
      Contentline: "6 Min Read",
      Postdate: "26 Mar, 2024",
      Catagory: "CAREER",
    },
    
    {
      Image:"https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-How-to-Become-a-Web-Developer-%E2%80%93-Your-Web-Development-Career-Roadmap.webp",
      title: "How to Become a Web Developer – Your Web Development Career Roadmap",
      author: " Meghana D",
      Contentline: "5 Min Read",
      Postdate: "26 Mar, 2024",
      Catagory: "CAREER",
    },
    
    {
      Image:"https://www.guvi.in/blog/wp-content/uploads/2023/08/feature-image-How-to-Become-a-Motion-Graphics-Designer.webp",
      title: "How to Become a Motion Graphics Designer – Complete CAREER Roadmap",
      author: "Meghana D",
      Contentline: "4 Min Read",
      Postdate: "16 Apr, 2024",
      Catagory: "CAREER",
    },
    
    {
      Image:"https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-How-to-Become-a-Digital-Marketer-%E2%80%93-Digital-Marketing-Career-Roadmap.webp",
      title: "How to Become a Digital Marketer Digital Marketing CAREER Roadmap",
      author: " Meghana D",
      Contentline: "4 Min Read",
      Postdate:"Apr 16, 2024",
      Catagory: "CAREER",
    },
    
    {
      Image:"https://www.guvi.in/blog/wp-content/uploads/2024/04/Feature-Image-Tips-to-Stay-Motivated-in-Your-Motion-Graphic-Design-Career.webp",
      title: "10 Tips to Stay Motivated in Your Motion Graphic Design CAREER",
      author: "Saakshi Priyadarshini",
      Contentline:"5 Min Read",
      Postdate: "29 Apr, 2024",
      Catagory: "CAREER",
    },
    
    {
      Image:"https://www.guvi.in/blog/wp-content/uploads/2024/05/Feature-Image-Career-in-Animation.webp",
      title: "CAREER in Animation: Jobs, Salary, Future Scope in India (2024)",
      author: "Saanchi Bhardwaj",
      Contentline:"6 Min Read",
      Postdate: "03 May, 2024",
      Catagory: "CAREER",
    },
    {
      Image:"https://www.guvi.in/blog/wp-content/uploads/2024/05/SEO-certfication.webp",
      title: "How Does an SEO Certification Elevate Your Digital Marketing CAREER?",
      author: "Srinithi Sankar",
      Contentline: "5 Min Read",
      Postdate: "23 May, 2024 ",
      Catagory: "CAREER",
    },
  ]
  return (
    <div>
      <BrowserRouter>
      <div>
        <Navbar/>
      </div>
      <Routes>
        <Route path='/' element={<ALL data={data}/>}/>
        <Route path='/FSD' element={<Fullsatack data={data}/>}/>
        <Route path='/DATA' element={<Datascience data={data}/>}/>
        <Route path='/cyber' element={<Cyber data={data}/>}/>
        <Route path='/career' element={<Career data={data}/>}/>
        <Route path='*' element={<Pagenotfound data={data}/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;