import React from 'react';
import { ChevronRight, Home } from 'lucide-react';

const Breadcrumbs = ({ items = [] }) => {
  const defaultItems = [
    { label: 'Home', href: '/', active: false },
    { label: 'Neelkanth Palangtod Capsules', href: '/', active: true }
  ];

  const breadcrumbItems = items.length > 0 ? items : defaultItems;

  return (
    <nav aria-label="Breadcrumb" className="bg-gray-50 py-3 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <ol className="flex items-center space-x-2 text-sm" itemScope itemType="https://schema.org/BreadcrumbList">
          {breadcrumbItems.map((item, index) => (
            <li 
              key={index}
              className="flex items-center"
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
            >
              {index > 0 && (
                <ChevronRight className="w-4 h-4 text-gray-400 mx-2" aria-hidden="true" />
              )}
              
              {item.active ? (
                <span 
                  className="text-gray-900 font-medium flex items-center"
                  itemProp="name"
                  aria-current="page"
                >
                  {index === 0 && <Home className="w-4 h-4 mr-1" aria-hidden="true" />}
                  {item.label}
                </span>
              ) : (
                <a 
                  href={item.href}
                  className="text-gray-600 hover:text-gray-900 transition-colors flex items-center"
                  itemProp="item"
                >
                  {index === 0 && <Home className="w-4 h-4 mr-1" aria-hidden="true" />}
                  <span itemProp="name">{item.label}</span>
                </a>
              )}
              
              <meta itemProp="position" content={index + 1} />
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumbs;