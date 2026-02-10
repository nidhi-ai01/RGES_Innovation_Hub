import React, { useState } from "react";
import {
  Calendar,
  Clock,
  Users,
  ArrowRight,
  CheckCircle,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const ProgramsSection = ({ onApply }) => {
  const [expandedProgram, setExpandedProgram] = useState(-1);

  const programs = [
    {
      name: "Spring Cohort 2025",
      type: "Full-Time Accelerator",
      duration: "12 Weeks",
      startDate: "April 2025",
      deadline: "March 15, 2025",
      status: "Open",
      participants: "15-20 Startups",
      description:
        "Intensive 12-week program for early-stage startups ready to build and launch their MVP.",
      highlights: [
        "Weekly mentorship",
        "₹5L funding opportunity",
        "Demo day pitch",
        "Office space access",
      ],
    },
    {
      name: "Idea Validation Workshop",
      type: "Weekend Program",
      duration: "3 Days",
      startDate: "February 2025",
      deadline: "January 31, 2025",
      status: "Open",
      participants: "30-40 Participants",
      description:
        "Fast-paced workshop to validate your startup idea and learn customer discovery techniques.",
      highlights: [
        "Customer interviews",
        "Market sizing",
        "Business model canvas",
        "Pitch practice",
      ],
    },
    {
      name: "Summer Innovation Camp",
      type: "Student Program",
      duration: "8 Weeks",
      startDate: "June 2025",
      deadline: "May 15, 2025",
      status: "Upcoming",
      participants: "20-25 Students",
      description:
        "Designed for student founders to build their startups during summer break.",
      highlights: [
        "Stipend support",
        "Peer learning",
        "Founder sessions",
        "Prototype development",
      ],
    },
  ];

  return (
    <section
      id="programs"
      aria-labelledby="programs-heading"
      className="relative py-20 md:py-32 bg-slate-50 overflow-hidden"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 sm:mb-20">
          <h2
            id="programs-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-slate-900 tracking-tight"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Programs & Cohorts
          </h2>
          <p
            className="text-lg md:text-xl text-slate-600 max-w-3xl leading-relaxed"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Choose the program that fits your stage and commitment level.
          </p>
        </div>

        {/* Programs List */}
        <div className="flex flex-col gap-6">
          {programs.map((program, index) => {
            const isExpanded = expandedProgram === index;

            return (
              <div
                key={index}
                className={`group relative bg-white rounded-xl border transition-all duration-300 overflow-hidden
                  ${isExpanded ? "border-blue-600 shadow-md ring-1 ring-blue-600/10" : "border-slate-200 hover:border-slate-300"}`}
              >
                {/* Mobile Layout - Always expanded */}
                <div className="md:hidden p-6 space-y-4">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
                          {program.type}
                        </span>
                        {program.status === "Open" && (
                          <span className="px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-700 border border-green-200">
                            Open
                          </span>
                        )}
                        {program.status === "Upcoming" && (
                          <span className="px-2 py-0.5 rounded text-xs font-medium bg-purple-100 text-purple-700 border border-purple-200">
                            Upcoming
                          </span>
                        )}
                      </div>
                      <h3
                        className="text-base font-bold text-slate-900"
                        style={{ fontFamily: "Inter, sans-serif" }}
                      >
                        {program.name}
                      </h3>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    {/* Left side - Description and Highlights */}
                    <div className="flex-1">
                      <p className="text-slate-600 text-xs leading-relaxed mb-4">
                        {program.description}
                      </p>

                      <div className="space-y-2">
                        {program.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs text-slate-600">
                            <ArrowRight className="w-4 h-4 text-blue-600 flex-shrink-0" />
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Right side - Details sidebar */}
                    <div className="w-32 flex-shrink-0 space-y-3 text-right">
                      <div className="text-right">
                        <div className="flex items-center justify-end gap-2 mb-1">
                          <Clock className="w-4 h-4 text-slate-400" />
                        </div>
                        <div className="text-xs uppercase tracking-wider font-medium text-slate-500">Duration</div>
                        <span className="text-slate-900 text-sm font-semibold block">
                          {program.duration}
                        </span>
                      </div>

                      <div className="text-right">
                        <div className="flex items-center justify-end gap-2 mb-1">
                          <Calendar className="w-4 h-4 text-slate-400" />
                        </div>
                        <div className="text-xs uppercase tracking-wider font-medium text-slate-500">Start Date</div>
                        <span className="text-slate-900 text-sm font-semibold block">
                          {program.startDate}
                        </span>
                      </div>

                      <div className="text-right">
                        <div className="flex items-center justify-end gap-2 mb-1">
                          <Calendar className="w-4 h-4 text-slate-400" />
                        </div>
                        <div className="text-xs uppercase tracking-wider font-medium text-slate-500">Application Deadline</div>
                        <span className="text-slate-900 text-sm font-semibold block">
                          {program.deadline}
                        </span>
                      </div>

                      <div className="text-right">
                        <div className="flex items-center justify-end gap-2 mb-1">
                          <Users className="w-4 h-4 text-slate-400" />
                        </div>
                        <div className="text-xs uppercase tracking-wider font-medium text-slate-500">Participants</div>
                        <span className="text-slate-900 text-sm font-semibold block">
                          {program.participants}
                        </span>
                      </div>
                    </div>
                  </div>

                  {program.status === "Open" && (
                    <button
                      onClick={onApply}
                      className="w-full inline-flex justify-center items-center gap-2 px-4 py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-lg font-semibold transition-colors mt-4"
                    >
                      Apply Now
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  )}
                </div>

                {/* Desktop Layout - Expandable */}
                <div className="hidden md:block">
                  <div
                    className="p-6 sm:p-8 cursor-pointer"
                    onClick={() => setExpandedProgram(isExpanded ? -1 : index)}
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
                            {program.type}
                          </span>
                          {program.status === "Open" && (
                            <span className="px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-700 border border-green-200">
                              Open
                            </span>
                          )}
                        </div>
                        <h3
                          className="text-lg font-bold text-slate-900 mb-2"
                          style={{ fontFamily: "Inter, sans-serif" }}
                        >
                          {program.name}
                        </h3>
                        {!isExpanded && (
                          <p className="text-slate-500 text-xs md:text-sm line-clamp-1">
                            {program.description}
                          </p>
                        )}
                      </div>

                      <div className="flex items-center gap-6 text-slate-500 text-sm font-medium">
                        <div className="hidden md:flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{program.startDate}</span>
                        </div>
                        <div
                          className={`p-2 rounded-full transition-colors ${isExpanded ? "bg-slate-100 text-slate-900" : "bg-transparent text-slate-400"}`}
                        >
                          {isExpanded ? (
                            <ChevronUp className="w-5 h-5" />
                          ) : (
                            <ChevronDown className="w-5 h-5" />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Expanded Content */}
                  {isExpanded && (
                    <div className="px-6 sm:px-8 pb-8 pt-0 animate-in slide-in-from-top-2 duration-200">
                      <div className="h-px bg-slate-100 mb-8"></div>

                      <div className="grid lg:grid-cols-3 gap-10">
                        <div className="lg:col-span-2">
                          <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-widest mb-4">
                            Description
                          </h4>
                          <p className="text-slate-600 leading-relaxed mb-8">
                            {program.description}
                          </p>

                          <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-widest mb-4">
                            Highlights
                          </h4>
                          <div className="grid sm:grid-cols-2 gap-4">
                            {program.highlights.map((highlight, idx) => (
                              <div key={idx} className="flex items-center gap-3">
                                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                                <span className="text-slate-700">
                                  {highlight}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="bg-slate-50 rounded-lg p-6 border border-slate-100 h-fit">
                          <div className="space-y-4 mb-8">
                            <div className="flex justify-between items-center pb-3 border-b border-slate-200/60">
                              <span className="text-slate-500 text-sm">
                                Duration
                              </span>
                              <span className="text-slate-900 text-sm sm:text-sm font-medium">
                                {program.duration}
                              </span>
                            </div>
                            <div className="flex justify-between items-center pb-3 border-b border-slate-200/60">
                              <span className="text-slate-500 text-sm">
                                Deadline
                              </span>
                              <span className="text-slate-900 text-sm sm:text-sm font-medium">
                                {program.deadline}
                              </span>
                            </div>
                            <div className="flex justify-between items-center pb-3 border-b border-slate-200/60">
                              <span className="text-slate-500 text-sm">
                                Participants
                              </span>
                              <span className="text-slate-900 text-sm sm:text-sm font-medium">
                                {program.participants}
                              </span>
                            </div>
                          </div>

                          {program.status === "Open" && (
                            <button
                              onClick={onApply}
                              className="w-full inline-flex justify-center items-center gap-2 px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-lg font-semibold transition-colors"
                            >
                              Apply Now
                              <ArrowRight className="w-4 h-4" />
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
