// app/services/[slug]/page.js
import { servicesData, getAllServiceSlugs } from "@/app/data/servicesData";
import ServiceDetailClient from "./ServiceDetailClient";

// Generate static paths for all services at build time
export async function generateStaticParams() {
  const slugs = getAllServiceSlugs();
  return slugs;
}

// Generate metadata for SEO - FIXED for Next.js 15
export async function generateMetadata({ params }) {
  // ✅ Await params first (Next.js 15 requirement)
  const { slug } = await params;
  const service = servicesData[slug];
  
  if (!service) {
    return {
      title: "Service Not Found",
    };
  }
  
  return {
    title: service.metaTitle,
    description: service.metaDescription,
  };
}

// Main page component - FIXED for Next.js 15
export default async function ServiceDetailPage({ params }) {
  // ✅ Await params first (Next.js 15 requirement)
  const { slug } = await params;
  const service = servicesData[slug];
  
  // If service not found, show 404
  if (!service) {
    return (
      <div className="min-h-screen bg-[#050505] text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
          <p className="text-gray-400">The service you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }
  
  return <ServiceDetailClient service={service} slug={slug} />;
}