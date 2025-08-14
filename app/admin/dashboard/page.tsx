"use client";

import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import DashNav from "@/app/admin/dashboard/DashNav";
import Loading from "@/app/admin/loading";
import PaintingsGallery from "@/components/PaintingsManager";
import { Toaster } from "sonner";
import AnalyticsCard from "@/components/dashboard/AnalyticsCard";

export default function AdminDashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [analytics, setAnalytics] = useState({
    websiteViews: 0,
    totalPaintings: 0,
    lastUpdated: "",
  });
  const [analyticsLoading, setAnalyticsLoading] = useState(true);

  useEffect(() => {
    if (status === "loading") return;
    if (!session) router.push("/admin/login");
  }, [session, status, router]);

  useEffect(() => {
    const fetchAnalytics = async () => {
      if (!session) return;

      try {
        setAnalyticsLoading(true);
        const response = await fetch("/api/admin/analytics");
        if (response.ok) {
          const data = await response.json();
          setAnalytics(data);
        } else {
          console.error("Failed to fetch analytics");
        }
      } catch (error) {
        console.error("Analytics fetch error:", error);
      } finally {
        setAnalyticsLoading(false);
      }
    };

    fetchAnalytics();
  }, [session]);

  if (status === "loading") {
    return <Loading />;
  }

  if (!session) {
    return null;
  }

  return (
    <div className="min-h-screen relative z-30">
      <DashNav />

      <div className="container mx-auto my-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8 mt-28">
          <h1 className="text-3xl font-bold text-slate-800  mb-2">
            Welcome to Admin Dashboard,
            <span className="uppercase">{session.user?.name || "Admin"}</span>!
          </h1>
          <p className="text-slate-600">
            Manage your art gallery and track performance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <AnalyticsCard
            title="Website Views"
            value={
              analyticsLoading
                ? "Loading..."
                : analytics.websiteViews.toLocaleString()
            }
            description="Total page views"
            loading={analyticsLoading}
            colorScheme="blue"
            icon={
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            }
          />

          <AnalyticsCard
            title="Total Paintings"
            value={analyticsLoading ? "Loading..." : analytics.totalPaintings}
            description="Artworks listed"
            loading={analyticsLoading}
            colorScheme="rose"
            icon={
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            }
          />

          <AnalyticsCard
            title="Last Updated"
            value={analyticsLoading ? "Loading..." : analytics.lastUpdated}
            description="Content last modified"
            loading={analyticsLoading}
            colorScheme="emerald"
            icon={
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            }
          />
        </div>

        <PaintingsGallery isAdmin={true} />
      </div>

      <Toaster richColors position="bottom-right" />
    </div>
  );
}