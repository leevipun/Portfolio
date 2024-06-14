const projects = [
    {
        id: 1,
        title: "E-Commerce Platform",
        description: "Developed a comprehensive e-commerce platform featuring robust search functionality, seamless payment integration, and user-friendly design.",
        imgSrc: "/images/1.jpg",
        altText: "E-Commerce Platform",
    },
    {
        id: 2,
        title: "Social Media Application",
        description: "Created a social media application that fosters community engagement with features like real-time chat, content sharing, and notifications.",
        imgSrc: "/images/2.jpg",
        altText: "Social Media Application",
    },
    {
        id: 3,
        title: "Portfolio Website",
        description: "Designed and developed a portfolio website to showcase projects and achievements, emphasizing clean design and ease of navigation.",
        imgSrc: "/images/3.jpg",
        altText: "Portfolio Website",
    },
    // Add more projects here
];

export default function RecentProjects() {
    return (
        <div className="p-6 bg-black-100">
            <h1 className="text-3xl font-bold text-center mb-8 text-white-800">
                Recent Projects
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => (
                    <div key={project.id} className="bg-black shadow-lg overflow-hidden border border-gray-200 rounded-lg">
                        <img className="w-full h-48 object-cover" src={project.imgSrc} alt={project.altText} />
                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-2 text-gray-900">{project.title}</h3>
                            <p className="text-gray-700">
                                {project.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
