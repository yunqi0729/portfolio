import ProjectDetail from '../ProjectDetail';
import yunqiHome from '../../assets/yunqi_photos/yunqi_home.png';
import yunqiAbout from '../../assets/yunqi_photos/yunqi_about.png';
import yunqiEducation from '../../assets/yunqi_photos/yunqi_education.png';
import yunqiExperiences from '../../assets/yunqi_photos/yunqi_experiences.png';
import yunqiProjects from '../../assets/yunqi_photos/yunqi_projects.png';
import yunqiContact from '../../assets/yunqi_photos/yunqi_contact.png';

export default function YunqiProject() {
    return (
        <ProjectDetail
            title="<i>yunqi.</i>, Personal Development Portfolio Website"
            subtitle=""
            date="February 2026"
            stack={["React", "TypeScript", "Tailwind CSS", "Vite"]}
            overview="<i>yunqi.</i> is a <b>modern and responsive web application</b> developed to present personal background, academic journey, experiences, and technical projects in a structured and professional manner. <br><br>The website serves as a central platform to showcase personal growth, educational achievements, and project accomplishments, including final year projects and hackathon works. With a clear navigation structure and visually engaging layout, the system enables visitors to easily explore different sections and gain a comprehensive understanding of the individual’s profile, skills, and interests."
            features={[
                "<b>Home Section</b>: Acts as a welcoming landing area that introduces the website and presents a brief personal tagline or statement.",
                "<b>About Section</b>: Provides a detailed self-introduction, including personal background, interests, and career aspirations.",
                "<b>Education Section</b>: Displays academic history covering secondary school, foundation studies, and degree programme with relevant descriptions and achievements.",
                "<b>Experiences Section</b>: Highlights experiences gained during school time such as leadership roles, events, competitions, and extracurricular involvement.",
                "<b>Projects Section</b>: Showcases past projects including final year projects and hackathon projects with descriptions, technologies used, and key outcomes.",
                "<b>Contact Section</b>: Enables visitors to send messages or inquiries through provided contact details.",
                "<b>Modern Front-End Architecture</b>: Developed using React with TypeScript and Vite for fast loading, maintainability, and improved development efficiency."
            ]}
            images={[
                {
                    url: yunqiHome,
                    caption: "Home Section <span style='font-size: 12px;'>(Light Mode)</span>"
                },
                {
                    url: yunqiAbout,
                    caption: "About Section <span style='font-size: 12px;'>(Dark Mode)</span>"
                },
                {
                    url: yunqiEducation,
                    caption: "Education Section <span style='font-size: 12px;'>(Light Mode)</span>"
                },
                {
                    url: yunqiExperiences,
                    caption: "Experiences Section <span style='font-size: 12px;'>(Dark Mode)</span>"
                },
                {
                    url: yunqiProjects,
                    caption: "Projects Section <span style='font-size: 12px;'>(Light Mode)</span>"
                },
                {
                    url: yunqiContact,
                    caption: "Contact Section <span style='font-size: 12px;'>(Dark Mode)</span>"
                },
            ]}
            githubLink="https://github.com/yunqi0729/portfolio"
            liveLink='https://yunqi0729.github.io/portfolio/'
        />
    );
}