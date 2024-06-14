import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "../button";

const projects = [
    {
        id: 1,
        title: "E-Commerce Platform",
        description: "Developed a comprehensive e-commerce platform featuring robust search functionality, seamless payment integration, and user-friendly design.",
        imgSrc: "/ecom.png",
        altText: "E-Commerce Platform",
        link: "https://b2-c-e-commerce.vercel.app/"
    },
    {
        id: 2,
        title: "Social Media Application",
        description: "Created a social media application that fosters community engagement with features like real-time chat, content sharing, and notifications.",
        imgSrc: "/media.png",
        altText: "Social Media Application",
        link: "https://social-media-application-liart.vercel.app/feed"
    },
    {
        id: 3,
        title: "Portfolio Website",
        description: "Designed and developed a portfolio website to showcase projects and achievements, emphasizing clean design and ease of navigation.",
        imgSrc: "/portfolio.png",
        altText: "Portfolio Website",
        link: "https://leepu-portfolio.vercel.app/"
    },
    // Add more projects here
];

export default function RecentProjects() {
    return (
      <section id="projects">
        <div className="p-6 bg-black-100">
        <h1 className="text-3xl font-bold text-center mb-8 text-purple">
          Recent Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-black rounded-lg overflow-hidden shadow-md">
              <img
                className="w-full h-48 object-cover"
                src={project.imgSrc}
                alt={project.altText}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white-800">
                  {project.title}
                </h3>
                <p className="text-white-600">
                  {project.description}
                </p>
              </div>
              <MagicButton title='Visit live Site' icon={<FaLocationArrow/>} position="left" handleClick={() => window.location.href=`${project.link}`}/>
            </div>
          ))}
        </div>
      </div>
      </section>
    );
}
