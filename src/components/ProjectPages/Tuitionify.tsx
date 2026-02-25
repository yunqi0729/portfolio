import ProjectDetail from '../ProjectDetail';
import tuitionifyProblem from '../../assets/tuitionify_photos/tuitionify_problem.png';
import tuitionifyPoster from '../../assets/tuitionify_photos/tuitionify_poster.png';
import tuitionifyUser from '../../assets/tuitionify_photos/tuitionify_user.png';
import tuitionifyStudent from '../../assets/tuitionify_photos/tuitionify_student.png';
import tuitionifyCourse from '../../assets/tuitionify_photos/tuitionify_course.png';
import tuitionifyClass from '../../assets/tuitionify_photos/tuitionify_class.png';
import tuitionifyFee from '../../assets/tuitionify_photos/tuitionify_fee.png';
import tuitionifyComm from '../../assets/tuitionify_photos/tuitionify_comm.png';
import tuitionifyReport from '../../assets/tuitionify_photos/tuitionify_report.png';
import tuitionifyFaceReg from '../../assets/tuitionify_photos/tuitionify_facereg.png';

export default function TuitionifyProject() {
    return (
        <ProjectDetail
            title="<i>Tuitionify</i>, Smart Management System for Tuition Centre Operations"
            subtitle="Final Year Project | 19/50 Shortlisted in FYP Competition"
            date="January 2025 - October 2025"
            stack={["Flutter", "Dart", "Python", "JavaScript", "Node.js", "Firebase"]}
            overview="<i>Tuitionify</i> is a <b>full-stack mobile application</b> developed to digitalize and streamline tuition centre operations. It was built as a <b>cross-platform mobile app</b> using Flutter (Dart) to support administrators, tutors, and parents on a single platform. <br><br>The system integrates facial recognition technology to enable fast, secure, and automated biometric attendance tracking. It also features a real-time parent–tutor communication module for announcements, progress updates, and messaging, enhancing transparency and engagement. In addition, an admin dashboard was implemented to manage class scheduling, student records, fee management, and reporting, improving overall operational efficiency."
            features={[
                "<b>User Authentication Module</b>: Role-based access control, which each of the roles can only access relevant features and data to enhance security.",
                "<b>Student Management Module</b>: Allows for personal information management, enrolment records, and class attendance histories.",
                "<b>Course Management Module</b>: Admins allow to create and manage courses; tutors allow to manage each course assigned.",
                "<b>Class Management Module</b>: Tutors can create new class schedules; admins and tutors can manage schedules with an advanced facial recognition-powered attendance tracking system.",
                "<b>Fee Management Module</b>: Admins can generate monthly student bills; parents can make payments directly, payment receipts and email notifications are automatically generated.",
                "<b>Communication Module</b>: Involves a real-time individual and group messaging system, as well as announcement posting and email notification features.",
                "<b>Reporting and Analytics Module</b>: Provide attendance, financial, and performance reports with data visualization for data-driven decision-making and operational insights.",
                "<b>Facial Recognition Attendance System</b>: Allows for fast and secure biometric attendance tracking, reducing manual errors and saving time."
            ]}
            images={[
                {
                    url: tuitionifyProblem,
                    caption: "Problem statements and objective of the project."
                },
                {
                    url: tuitionifyPoster,
                    caption: "Poster of the project."
                },
                {
                    url: tuitionifyUser,
                    caption: "User Authentication Module"
                },
                {
                    url: tuitionifyStudent,
                    caption: "Student Management Module"
                },
                {
                    url: tuitionifyCourse,
                    caption: "Course Management Module"
                },
                {
                    url: tuitionifyClass,
                    caption: "Class Management Module"
                },
                {
                    url: tuitionifyFee,
                    caption: "Fee Management Module"
                },
                {
                    url: tuitionifyComm,
                    caption: "Communication Module"
                },
                {
                    url: tuitionifyReport,
                    caption: "Performance Reporting Module"
                },
                {
                    url: tuitionifyFaceReg,
                    caption: "Face Recognition Attendance System"
                }
            ]}
            githubLink="https://github.com/yunqi0729/Tuitionify"
        // videoLink="https://youtube.com/watch?v=..."
        // liveLink='https://tuitionify.com'
        />
    );
}