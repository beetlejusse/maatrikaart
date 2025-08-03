import React, { ReactNode } from "react";

interface AnalyticsCardProps {
  title: string;
  value: string | number;
  description: string;
  icon: ReactNode;
  loading?: boolean;
  colorScheme?: "blue" | "rose" | "emerald";
}

export default function AnalyticsCard({
  title,
  value,
  description,
  icon,
  loading = false,
  colorScheme = "blue",
}: AnalyticsCardProps) {
  // Define color variables based on colorScheme
  const colors = {
    blue: {
      gradient: "from-blue-50 via-white to-blue-50/30",
      border: "border-blue-200/40",
      hoverText: "group-hover:text-blue-700",
      iconGradient: "from-blue-500 to-blue-600",
      iconShadow: "group-hover:shadow-blue-500/25",
      decorationColor: "bg-blue-500/10 group-hover:bg-blue-500/20",
      textGradient: "from-blue-600 to-blue-800",
      decorationGradient: "from-blue-500/5",
    },
    rose: {
      gradient: "from-rose-50 via-white to-pink-50/30",
      border: "border-rose-200/40",
      hoverText: "group-hover:text-rose-700",
      iconGradient: "from-rose-500 to-pink-600",
      iconShadow: "group-hover:shadow-rose-500/25",
      decorationColor: "bg-rose-500/10 group-hover:bg-rose-500/20",
      textGradient: "from-rose-600 to-pink-800",
      decorationGradient: "from-rose-500/5",
    },
    emerald: {
      gradient: "from-emerald-50 via-white to-green-50/30",
      border: "border-emerald-200/40",
      hoverText: "group-hover:text-emerald-700",
      iconGradient: "from-emerald-500 to-green-600",
      iconShadow: "group-hover:shadow-emerald-500/25",
      decorationColor: "bg-emerald-500/10 group-hover:bg-emerald-500/20",
      textGradient: "from-emerald-600 to-green-800",
      decorationGradient: "from-emerald-500/5",
    },
  };

  const color = colors[colorScheme];

  return (
    <div 
      className={`group relative bg-gradient-to-br ${color.gradient} backdrop-blur-lg rounded-2xl p-6 border ${color.border} shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer overflow-hidden`}
    >
      {/* Background decoration */}
      <div className={`absolute inset-0 bg-gradient-to-br ${color.decorationGradient} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
      <div className={`absolute -top-4 -right-4 w-24 h-24 ${color.decorationColor} rounded-full blur-xl transition-all duration-500`}></div>
      
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-6">
          <h3 className={`text-lg font-semibold text-slate-700 ${color.hoverText} transition-colors duration-300`}>
            {title}
          </h3>
          <div className={`p-3 bg-gradient-to-br ${color.iconGradient} rounded-xl shadow-lg ${color.iconShadow} group-hover:scale-110 transition-all duration-300`}>
            {icon}
          </div>
        </div>
        <div className="space-y-2">
          <p className={`text-4xl font-bold bg-gradient-to-r ${color.textGradient} bg-clip-text text-transparent`}>
            {loading ? (
              <span className="animate-pulse bg-gradient-to-r from-slate-300 to-slate-400 bg-clip-text text-transparent">
                Loading...
              </span>
            ) : (
              <span className="animate-fade-in">
                {value}
              </span>
            )}
          </p>
          <p className="text-sm text-slate-500 font-medium">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
