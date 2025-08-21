import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home";
import About from "./pages/About";
import Course from "./pages/Course";
import Enrollment from "./components/EnrollmentForm";
import Resources from "./pages/Resources";
import Contact from "./pages/Contact";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Refund from "./pages/Refund";
import AnimatedHeader from "./components/AnimatedHeader";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";
import pmilogo from "./assets/pmilogo.png";
import { TiTick } from "react-icons/ti";
import MicrosoftProject from "./pages/MicrosoftProject";
import FundamentalsPM from "./pages/FundamentalsPM";
import TeamBuilding from "./pages/TeamBuilding";
import ProfessionalCertification from "./pages/ProfessionalCertification";
import DataAnalysis from "./pages/DataAnalysis";
import LeadershipTraining from "./pages/LeadershipTraining";
import ProjectFinance from "./pages/ProjectFinance";
import PMIRiskManagementProfessional from "./pages/PMIRiskManagementProfessional";
import AgileCertifiedPractitioner from "./pages/AgileCertifiedPractitioner";
import ProfessionalBusinessAnalysis from "./pages/ProfessionalBusinessAnalysis";

// import ProjectFinance from './pages/ProjectFinance';
// import LeadershipTraining from './pages/LeadershipTraining';
// import ProfessionalCertification from './pages/ProfessionalCertification';
// import PMPCertification from './pages/PMPCertification';
// import PBACertification from './pages/PBACertification';
// import ACPCertification from './pages/ACPCertification';
// import RiskManagement from './pages/RiskManagement';
// import OnJobTraining from './pages/OnJobTraining';
// import MicrosoftProject from './pages/MicrosoftProject';
// import ProjectManagementFundamentals from './pages/ProjectManagementFundamentals';
// import TeamBuilding from './pages/TeamBuilding';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <AnimatedHeader />
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/course" element={<Course />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/refund" element={<Refund />} />
              <Route path="*" element={<NotFound />} />

              <Route path="project-finance" element={<ProjectFinance />} />
              <Route path="pba-certification" element={<ProfessionalBusinessAnalysis />} />
              <Route path="acp-certification" element={<AgileCertifiedPractitioner />} />
              <Route path="risk-management-certification" element={<PMIRiskManagementProfessional />} />
              <Route
                path="leadership-training"
                element={<LeadershipTraining />}
              />
              <Route path="data-analysis" element={<DataAnalysis />} />
              <Route
                path="pmp-certification"
                element={<ProfessionalCertification />}
              />

              <Route path="microsoft-project-training" element={<MicrosoftProject />} />
              <Route path="project-management-fundamentals" element={<FundamentalsPM />} />
              <Route path="team-building" element={<TeamBuilding />} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />

        {/* --- PMI Badge (Fixed, Bottom-Right) --- */}
        <div className="fixed right-6 bottom-6 z-50">
          <div className="bg-white p-3 rounded-md shadow-sm border border-gray-200 flex flex-col items-center text-center">
            {/* REPLACE THIS DIV WITH YOUR PMI LOGO IMAGE */}
            <img
              src={pmilogo} // Replace with your image path
              alt="PMI Logo"
              className="w-12 h-auto mb-1" // Adjust width/height as needed
            />

            {/* "Authorized Training Partner 2025" */}
            <p className="text-xs font-semibold text-gray-800 mb-1"></p>

            {/* Verified Checkmark */}
            <div className="flex items-center justify-center text-xs text-green-600 mb-1">
              <span>Verified</span>
              <span className="ml-1">
                <TiTick className="bg-green-500 rounded-lg text-white" />
              </span>
            </div>

            {/* Subtitle (Optional) */}
            <p className="text-[10px] text-gray-500 mb-2">
              Authorized Training Partner
            </p>

            {/* "Verify Badge" Link */}
            <span className=" text-xs px-2 rounded-md py-1 text-bold bg-green-500 text-white">
              verify badge
            </span>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
