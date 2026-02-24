import ProjectDetail from '../ProjectDetail';
import mountainBackground from '../../assets/mountain_background.jpg';
import fictUtar from '../../assets/fict_utar.jpg';

export default function TuitionifyProject() {
    return (
        <ProjectDetail
            title="<i>Tuitionify</i>, Smart Management System for Tuition Centre Operations"
            subtitle="Final Year Project | 19/50 Shortlisted in FYP Competition"
            date="January 2025 - October 2025"
            stack={["Flutter", "Dart", "Python", "JavaScript", "Firebase"]}
            overview="A comprehensive management system designed specifically for tuition centres to streamline their operations. Tuitionify provides tools for student management, class scheduling, attendance tracking, payment processing, and performance analytics."
            features={[
                "<b>Student Management</b>: Comprehensive student profiles with enrollment history and performance tracking. Comprehensive student profiles with enrollment history and performance tracking.",
                "<b>Class Scheduling</b>: Intuitive interface for creating and managing class timetables. Intuitive interface for creating and managing class timetables.",
                "<b>Attendance Tracking</b>: Digital attendance system with automated notifications",
                "<b>Payment Processing</b>: Integrated payment tracking and invoice generation",
                "<b>Performance Analytics</b>: Data-driven insights and progress reports",
                "<b>Parent Portal</b>: Dedicated portal for parents to monitor their children's progress"
            ]}
            images={[
                {
                    url: mountainBackground,
                    caption: "The mountain dashboard providing a clear overview of student statistics. The mountain dashboard providing a clear overview of student statistics."
                },
                {
                    url: fictUtar,
                    caption: "The UTAR FICT integration portal for academic synchronization."
                },
                {
                    url: fictUtar,
                    caption: "The UTAR FICT integration portal for academic synchronization."
                },
                {
                    url: mountainBackground,
                    caption: "The mountain dashboard providing a clear overview of student statistics. The mountain dashboard providing a clear overview of student statistics."
                }
            ]}
            githubLink="https://github.com/yourusername/tuitionify"
            videoLink="https://youtube.com/watch?v=..."
            liveLink='https://tuitionify.com'
        />
    );
}