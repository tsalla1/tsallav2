"use client";

import React from "react";

// Props interface for a single mission profile card
interface ProfileCardProps {
  title: string;
  imageUrl: string;
  description: string;
  hasHighlight?: boolean;
}

// Reusable component for the image cards in the grid
const ProfileCard: React.FC<ProfileCardProps> = ({
  title,
  imageUrl,
  description,
  hasHighlight = false,
}) => (
  <div
    className={`relative aspect-square w-full overflow-hidden group ${
      hasHighlight ? "border-2 border-blue-500" : ""
    }`}
  >
    <img
      src={imageUrl}
      alt={title}
      className="absolute inset-0 w-full h-full object-cover transition-all duration-300 ease-in-out group-hover:scale-105 group-hover:blur-sm"
      onError={(e) => {
        const target = e.target as HTMLImageElement;
        target.onerror = null; // prevent infinite loop
        target.src = `https://placehold.co/400x400/1a1a1a/ffffff?text=Image+Not+Found`;
      }}
    />

    {/* Gradient overlay for text readability */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

    {/* Text content always visible at the bottom */}
    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
      <h3 className="text-2xl font-semibold tracking-tight">{title}</h3>
    </div>

    {/* Hover overlay with description */}
    <div className="absolute inset-0 p-6 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
      <p className="text-center text-white/90 text-base leading-relaxed">
        {description}
      </p>
    </div>
  </div>
);

// Props for a section of mission profiles
interface MissionSectionProps {
  title: string;
  profiles: ProfileCardProps[];
}

// Component for rendering a full section (e.g., Military or Commercial)
const MissionSection: React.FC<MissionSectionProps> = ({ title, profiles }) => (
  <div className="mb-16">
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-3xl font-medium">{title}</h2>
      <span className="text-3xl font-light">+</span>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {profiles.map((profile) => (
        <ProfileCard
          key={profile.title}
          title={profile.title}
          imageUrl={profile.imageUrl}
          description={profile.description}
          hasHighlight={profile.hasHighlight}
        />
      ))}
    </div>
  </div>
);

export default function FenixMissionProfiles(): JSX.Element {
  const imagePlaceholder = "https://shield.ai/wp-content/uploads/2025/03/company-1b.jpg";

  const militaryProfiles: ProfileCardProps[] = [
    {
      title: "Counter Terrorism",
      imageUrl: imagePlaceholder,
      description:
        "Covertly monitor high-risk environments, track targets, and provide real-time intel to ground teams, preventing threats before they escalate.",
    },
    {
      title: "Search & Rescue",
      imageUrl: imagePlaceholder,
      description:
        "Locate missing persons in challenging terrain, assess situational awareness from the air, and guide rescue teams to precise locations.",
    },
    {
      title: "Counter Inversion",
      imageUrl: imagePlaceholder,
      description:
        "Identify and neutralize inverted threats, providing a clear operational picture in complex aerial engagements.",
    },
  ];

  const commercialProfiles: ProfileCardProps[] = [
    {
      title: "Pipeline & Ductwork Inspection",
      imageUrl: imagePlaceholder,
      description:
        "Efficiently inspect vast networks of pipelines and ductwork, identifying potential leaks or damage with high-resolution visuals.",
    },
    {
      title: "Warehouse Management",
      imageUrl: imagePlaceholder,
      description:
        "Automate inventory checks, monitor stock levels, and identify misplaced items in large-scale warehouses, improving efficiency.",
    },
    {
      title: "Ongoing Build Surveillance",
      imageUrl: imagePlaceholder,
      description:
        "Provide continuous aerial surveillance of construction sites, tracking progress, ensuring security, and identifying potential safety hazards.",
    },
  ];

  return (
    <>
      <style jsx global>{`
        @import url("https://fonts.cdnfonts.com/css/clash-grotesk");
        .font-clash-grotesk {
          font-family: "Clash Grotesk", sans-serif !important;
        }
      `}</style>

      <section className="font-clash-grotesk bg-black text-white w-full min-h-screen py-20 px-8 sm:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto">
          {/* Main Header */}
          <div className="mb-16">
            <h1 className="text-6xl font-medium tracking-tight">Mission Profiles</h1>
            <p className="text-lg text-gray-400 mt-3">
              Engineered for reliability in critical scenarios.
            </p>
          </div>

          {/* Sections */}
          <MissionSection title="Military Applications" profiles={militaryProfiles} />
          <MissionSection title="Commercial Applications" profiles={commercialProfiles} />
        </div>
      </section>
    </>
  );
}
