import ProjectDetail from '../ProjectDetail';
import zoomathsCompare from '../../assets/zoomaths_photos/zoomaths_compare.png';
import zoomathsArrange from '../../assets/zoomaths_photos/zoomaths_arrange.png';
import zoomathsCompose from '../../assets/zoomaths_photos/zoomaths_compose.png';
import zoomathsChallenge from '../../assets/zoomaths_photos/zoomaths_challenge.png';

export default function ZooMathsProject() {
    return (
        <ProjectDetail
            title="Zoo! Maths, Mathematics Mobile Application for School-Going Children"
            subtitle="Mobile Applications Development Individual Assignment"
            date="January 2025"
            stack={["Java", "XML", "Android Studio", "Android SDK"]}
            overview="<i>Zoo! Maths</i> is an <b>interactive educational mobile application</b> developed to help school-going children strengthen their basic mathematics skills through fun and engaging activities. The application adopts a zoo-themed interface with colourful visuals and child-friendly design to attract young learners and enhance learning motivation. <br><br>The system provides four core learning modules: Compare Numbers, Arrange Numbers, Compose Numbers, and Challenge Yourself. These modules focus on improving number sense, ordering skills, and basic addition through randomly generated questions and instant feedback. A timed challenge mode is also included to test users’ understanding and speed, making learning both educational and enjoyable."
            features={[
                "<b>Compare Numbers Module</b>: Allows users to practice comparing two random numbers using less than, greater than, and equal to symbols with instant feedback.",
                "<b>Arrange Numbers Module</b>: Enables users to arrange five random numbers in ascending or descending order using an interactive caterpillar-style layout.",
                "<b>Compose Numbers Module</b>: Allows users to compose a target sum by selecting two correct numbers from multiple options to reinforce addition skills.",
                "<b>Challenge Yourself Module</b>: Provides a timed challenge consisting of five randomly selected questions from all learning modules to test speed and accuracy.",
                "<b>User-Friendly Interface</b>: Designed with large buttons, bright colours, and simple interactions suitable for young children."
            ]}
            images={[
                {
                    url: zoomathsCompare,
                    caption: "Compare Numbers Module"
                },
                {
                    url: zoomathsArrange,
                    caption: "Arrange Numbers Module"
                },
                {
                    url: zoomathsCompose,
                    caption: "Compose Numbers Module"
                },
                {
                    url: zoomathsChallenge,
                    caption: "Challenge Yourself Module"
                }
            ]}
            githubLink="https://github.com/yunqi0729/Zoo_Maths"
        />
    );
}