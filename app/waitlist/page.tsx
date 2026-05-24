"use client";

import { useWaitlistEntries } from "../_lib/hooks/useWaitlist";

const SKELETON_ROWS = 6;

const SkeletonRow = () => (
  <tr className="border-b border-sand animate-pulse">
    <td className="px-6 py-4">
      <div className="h-4 bg-sand rounded w-6" />
    </td>
    <td className="px-6 py-4">
      <div className="h-4 bg-sand rounded w-48" />
    </td>
    <td className="px-6 py-4">
      <div className="h-4 bg-sand rounded w-28" />
    </td>
  </tr>
);

const WaitlistEntry = () => {
  const { data, isLoading, error } = useWaitlistEntries();

  return (
    <div className="min-h-screen bg-sugar-milk px-6 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-garamond text-3xl text-darkout mb-2">Waitlist</h1>
        <p className="text-elkhound text-sm mb-8">
          {isLoading ? "Loading entries…" : error ? "" : `${data?.length ?? 0} people signed up`}
        </p>

        <div className="rounded-2xl overflow-hidden border border-sand shadow-sm bg-white">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-peaceful-peach text-espresso">
                <th className="px-6 py-4 text-left font-medium w-12">#</th>
                <th className="px-6 py-4 text-left font-medium">Email</th>
                <th className="px-6 py-4 text-left font-medium">Date joined</th>
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                Array.from({ length: SKELETON_ROWS }).map((_, i) => <SkeletonRow key={i} />)
              ) : error ? (
                <tr>
                  <td colSpan={3} className="px-6 py-16 text-center">
                    <p className="text-terracotta font-medium mb-1">Something went wrong</p>
                    <p className="text-elkhound text-xs">We couldn&apos;t load the waitlist. Please try again later.</p>
                  </td>
                </tr>
              ) : data?.length === 0 ? (
                <tr>
                  <td colSpan={3} className="px-6 py-16 text-center text-elkhound">
                    No one on the waitlist yet.
                  </td>
                </tr>
              ) : (
                data?.map((entry, index) => (
                  <tr
                    key={entry.email}
                    className="border-b border-sand last:border-0 hover:bg-strawberry-dust transition-colors"
                  >
                    <td className="px-6 py-4 text-elkhound">{index + 1}</td>
                    <td className="px-6 py-4 text-darkout">{entry.email}</td>
                    <td className="px-6 py-4 text-elkhound">
                      {new Date(entry.date).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default WaitlistEntry;
