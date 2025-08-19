// src/pages/what-we-do/customized-training/ProjectFinance.js
import TrainingPageLayout from '../../components/TrainingPageLayout';

export default function ProjectFinance() {
  const breadcrumbs = [
    { label: 'Home', path: '/' },
    { label: 'What we do', path: '/what-we-do' },
    { label: 'Customized Training', path: '/what-we-do/customized-training' },
    { label: 'Project Finance', path: '' }
  ];

  return (
    <TrainingPageLayout
      breadcrumbs={breadcrumbs}
      title="MASTER CLASS"
      description="An overall view of the concepts and approach used in structuring and arranging project finance transactions for major infrastructure schemes in the Africa and overseas."
    >
      <div className="space-y-10">
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Who should attend?</h2>
          <p className="text-gray-700">
            This course will be of benefit to those working within, or intending to move into, project development or project finance areas. Previous participants have included engineers, bankers, accountants, lawyers and middle/senior managers in utility companies, commercial banks, consultancy and law firms.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">What you will gain</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>An overview of the concepts and approach used in structuring and arranging project finance transactions for major infrastructure schemes</li>
            <li>An understanding of risk analysis and risk management technique</li>
            <li>A project appraisal methodology</li>
            <li>An understanding of the language and approach of financiers</li>
            <li>Insight into the drivers, approaches and concerns of the key players involved in creating and financing major projects</li>
            <li>A focus on finance and the tools to value a project</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">PROGRAMME OUTLINE</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>1.0 Introduction and overview of project finance</li>
            <li>2.0 Project finance market</li>
            <li>3.0 The main parties in a project finance</li>
            <li>4.0 Risks and mitigants</li>
            <li>5.0 Credit analysis by the lenders</li>
            <li>6.0 The financial statements</li>
            <li>7.0 Advanced cash flow analysis</li>
            <li>8.0 Structuring a project finance</li>
            <li>9.0 Financial projections</li>
            <li>10.0 The documentation</li>
          </ul>
          <p className="mt-4 text-gray-600 italic">
            No prior knowledge of project finance or finance is assumed.
          </p>
        </section>
      </div>
    </TrainingPageLayout>
  );
}