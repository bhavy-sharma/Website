// app/programs/[slug]/page.js
import { programsData, getAllProgramSlugs } from "@/app/data/programsData";
import ProgramDetailClient from "./ProgramDetailClient";

// Generate static paths for all programs at build time
export async function generateStaticParams() {
  const slugs = getAllProgramSlugs();
  return slugs;
}

// Generate metadata for SEO
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const program = programsData[slug];
  
  if (!program) {
    return {
      title: "Program Not Found",
    };
  }
  
  return {
    title: program.metaTitle,
    description: program.metaDescription,
  };
}

// Main page component - FIXED: Must return JSX directly
export default async function ProgramDetailPage({ params }) {
  // ✅ Await params first
  const { slug } = await params;
  const program = programsData[slug];
  
  // If program not found, show 404
  if (!program) {
    return (
      <div className="min-h-screen bg-[#050505] text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Program Not Found</h1>
          <p className="text-gray-400">The program you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }
  
  // ✅ Return the client component directly
  return <ProgramDetailClient program={program} slug={slug} />;
}