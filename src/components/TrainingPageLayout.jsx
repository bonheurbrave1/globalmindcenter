// src/components/TrainingPageLayout.js
import Breadcrumbs from './Breadcrumbs';

export default function TrainingPageLayout({ breadcrumbs, title, description, children }) {
  return (
    <div className="container mx-auto px-4 py-12">
      <Breadcrumbs items={breadcrumbs} />
      
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">{title}</h1>
        <p className="text-lg text-gray-700 mb-8">{description}</p>
        
        {children}
      </div>
    </div>
  );
}