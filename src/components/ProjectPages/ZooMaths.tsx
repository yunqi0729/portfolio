import ProjectDetail from '../ProjectDetail';

export default function ZooMathsProject() {
    return (
        <ProjectDetail
            title="Zoo! Maths, Mathematics Mobile Application for School-Going Children"
            subtitle="Mobile Applications Development Assignment"
            date="January 2025"
            stack={["Java", "XML", "Android Studio", "Android SDK"]}
            overview="An educational mobile application that makes learning mathematics fun for children through gamification. Zoo! Maths features engaging animal characters and interactive games to help children master mathematical concepts."
            features={[
                "<b>Gamified Learning</b>: Math exercises presented as interactive games with animal characters",
                "<b>Progressive Difficulty</b>: Adaptive difficulty levels based on student performance",
                "<b>Visual Learning</b>: Colorful graphics and animations to aid understanding",
                "<b>Progress Tracking</b>: Parents and teachers can monitor learning progress",
                "<b>Rewards System</b>: Earn badges and unlock new animal characters"
            ]}
            githubLink="https://github.com/yourusername/zoomaths"
        />
    );
}