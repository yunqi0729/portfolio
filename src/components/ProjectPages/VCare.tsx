import ProjectDetail from '../ProjectDetail';

export default function VCareProject() {
    return (
        <ProjectDetail
            title="VCare, AI-powered Healthcare Mobile Application"
            subtitle="Varsity Hackathon Project"
            date="March 2025"
            stack={["Flutter", "Dart", "Python", "TensorFlow"]}
            overview="An AI-powered mobile health application developed during the Varsity Hackathon. VCare uses machine learning to provide personalized health recommendations, symptom checking, and connects users with healthcare professionals."
            features={[
                "<b>AI Symptom Checker</b>: ML-powered symptom analysis and preliminary diagnosis",
                "<b>Health Tracking</b>: Monitor vital signs and health metrics over time",
                "<b>Telemedicine</b>: Connect with doctors through video consultations",
                "<b>Medication Reminders</b>: Smart notifications for medication schedules",
                "<b>Emergency Services</b>: Quick access to emergency contacts and services"
            ]}
            githubLink="https://github.com/yourusername/vcare"
        />
    );
}