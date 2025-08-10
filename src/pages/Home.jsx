import HeroBanner from '../components/HeroBanner';
import MissionVisionSection from '../components/MissionVisionSection';
import CourseHighlights from './Course';
import LearningOutcomes from '../components/LearningOutcomes';
import PricingTable from '../components/PricingTable';

export default function Home() {
  return (
    <div>
      <HeroBanner />
      <MissionVisionSection />
      <CourseHighlights />
      <LearningOutcomes />
      <PricingTable />
    </div>
  );
}