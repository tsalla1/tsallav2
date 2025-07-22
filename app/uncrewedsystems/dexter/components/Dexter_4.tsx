import React from 'react';

// Define the props interface for the reusable SpecRow component for type safety.
interface SpecRowProps {
  label: string;
  value: string;
}

// A reusable component for a single row in the specifications table.
// Padding has been adjusted based on your request.
const SpecRow: React.FC<SpecRowProps> = ({ label, value }) => (
  <div className="flex border-t border-gray-300">
    <div className="w-1/3 px-6 py-3 border-r border-gray-300">
      <p className="font-semibold text-black">{label}</p>
    </div>
    <div className="w-2/3 px-6 py-3">
      <p className="text-gray-700">{value}</p>
    </div>
  </div>
);

// The main component that lays out the "Technical Specifications" section.
export default function TechnicalSpecifications(): JSX.Element {
  // Data for the technical specifications table.
  const specs: SpecRowProps[] = [
    { label: "Endurance", value: "8+ hours" },
    { label: "Range", value: "200 km" },
    { label: "Dimensions", value: "2.5m wingspan" },
    { label: "Payload", value: "Modular bay" },
    { label: "Connectivity", value: "Secure mesh network" },
    { label: "Autonomy", value: "Fully autonomous or remote operation" },
  ];

  return (
    <>
      {/*
        The link to the "Clash Grotesk" font is included here.
        The `jsx` and `global` attributes have been removed to fix the error.
      */}
      <style>{`
        @import url('https://fonts.cdnfonts.com/css/clash-grotesk');
        .font-clash-grotesk {
          font-family: 'Clash Grotesk', sans-serif;
        }
      `}</style>
      <section className="font-clash-grotesk bg-white w-full min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl w-full">
          {/* Header Section */}
          <div className="text-left mb-10">
            <h1 className="text-5xl font-medium text-black">
              Technical Specifications
            </h1>
          </div>

          {/* Specifications Table */}
          <div className="border border-gray-300 text-lg">
            {/* The first row is handled outside the loop to avoid the top border */}
            <div className="flex">
                <div className="w-1/3 px-6 py-3 border-r border-gray-300">
                    <p className="font-semibold text-black">{specs[0].label}</p>
                </div>
                <div className="w-2/3 px-6 py-3">
                    <p className="text-gray-700">{specs[0].value}</p>
                </div>
            </div>
            {/* Map over the rest of the specs */}
            {specs.slice(1).map((spec) => (
              <SpecRow
                key={spec.label}
                label={spec.label}
                value={spec.value}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
