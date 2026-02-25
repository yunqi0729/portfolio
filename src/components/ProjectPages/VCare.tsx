import ProjectDetail from '../ProjectDetail';
import vcareProblems from '../../assets/vcare_photos/vcare_problems.png';
import vcareFeatures1 from '../../assets/vcare_photos/vcare_features1.png';
import vcareFeatures2 from '../../assets/vcare_photos/vcare_features2.png';
import vcareTracking from '../../assets/vcare_photos/vcare_tracking.png';
import vcareChatbots from '../../assets/vcare_photos/vcare_chatbots.png';
import vcareDiet from '../../assets/vcare_photos/vcare_diet.png';
import vcareDiagnosis from '../../assets/vcare_photos/vcare_diagnosis.png';
import vcareCheckIn from '../../assets/vcare_photos/vcare_checkIn.png';

export default function VCareProject() {
    return (
        <ProjectDetail
            title="<i>VCare, We Care For Your Health</i>, AI-powered Healthcare Mobile Application"
            subtitle="Varsity Hackathon Project"
            date="March 2025"
            stack={["Flutter", "Dart", "Python", "TensorFlow"]}
            overview="<i>VCare</i> is an <b>AI-powered healthcare mobile application</b> developed by <i>Team Roti Planta</i>. <br><br>It is designed to provide real-time medical assistance and support, particularly for underserved populations such as low-income individuals, illness and mental health patients, healthcare volunteers, and caregivers. The app leverages advanced technologies like AI chatbots, image-to-text diagnostics, and real-time tracking to deliver personalized healthcare solutions. "
            features={[
                "<b>Real-Time Tracking</b>: Integrates with smartwatches to monitor heart rate, step count, and oxygen saturation, enabling timely interventions to prevent health deterioration.",
                "<b>AI Chatbots</b>: Offer real-time symptom checking, medicine recommendation, and mental health support assistance.",
                "<b>AI Diet Recommendation</b>: Suggests meal choices tailored to users’ specific health needs, promoting better well-being <span style='font-size: 14px;'>(SDG Target 3.4)</span>.",
                "<b>AI Image and Report Diagnosis</b>: Analyzes uploaded medical images and reports to provide personalized diagnostic insights <span style='font-size: 14px;'>(SDG Target 3.8)</span>.",
                "<b>Check-In Rewards System</b>: Earn points through regular check-ins, which can be redeemed for exclusive vouchers and rewards."
            ]}
            images={[
                {
                    url: vcareProblems,
                    caption: "Problem statements of the project."
                },
                {
                    url: vcareFeatures1,
                    caption: "Key features of VCare."
                },
                {
                    url: vcareFeatures2,
                    caption: "Key features of VCare."
                },
                {
                    url: vcareTracking,
                    caption: "Real-time Tracking Feature"
                },
                {
                    url: vcareChatbots,
                    caption: "AI Chatbots Feature"
                },
                {
                    url: vcareDiet,
                    caption: "AI Diet Recommendation Feature"
                },
                {
                    url: vcareDiagnosis,
                    caption: "AI Image and Report Diagnosis Feature"
                },
                {
                    url: vcareCheckIn,
                    caption: "Check-in Rewards System"
                }
            ]}
            githubLink="https://github.com/yunqi0729/VCare_WeCareForYourHealth"
        />
    );
}