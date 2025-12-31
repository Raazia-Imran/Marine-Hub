import { Calendar, ArrowUpRight, MapPin, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { cn } from "@/lib/utils";

// --- ACTIVITY DATA ---
// NOTE: To add new updates, simply add an object to this array.
// If this array is empty, a "No recent updates" message will appear.
const activities = [
//   {
//     id: 1,
//     category: "Milestone",
//     title: "Launch of Pakistan’s First Digital Maritime Hub",
//     date: "December 2025",
//     location: "Online Beta",
//     // Using a generic ocean placeholder image
//     image:
//       "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2000&auto=format&fit=crop",
//     color: "bg-blue-100 text-blue-700 hover:bg-blue-200",
//   },
//   {
//     id: 2,
//     category: "Roadmap",
//     title: "Phase 1: Stakeholder & Service Registration",
//     date: "Coming Soon",
//     location: "Membership Portal",
//     image:
//       "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
//     color: "bg-teal-100 text-teal-700 hover:bg-teal-200",
//   },
//   {
//     id: 3,
//     category: "Initiative",
//     title: "The Unheard Ocean: Storytelling Platform",
//     date: "Upcoming",
//     location: "Ocean Kafe",
//     image:
//       "https://images.unsplash.com/photo-1534960680480-ca9853707e10?q=80&w=2000&auto=format&fit=crop",
//     color: "bg-orange-100 text-orange-700 hover:bg-orange-200",
//   },
];

export default function RecentActivities() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      {/* 1. Hero Section */}
      <div className="bg-[#0a192f] py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a192f] via-[#102a43] to-[#004e92] opacity-90" />
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />

        <div className="container relative z-10 px-4 text-center">
          <Badge
            variant="outline"
            className="mb-4 border-teal-400/50 text-teal-300"
          >
            Stay Updated
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Recent Activities
          </h1>
          <p className="text-slate-300 max-w-xl mx-auto text-lg">
            Follow the journey of BlueNet+ as we transform Pakistan's maritime
            economy.
          </p>
        </div>
      </div>

      {/* 2. Activities Grid */}
      <div className="container mx-auto px-4 py-16">
        <SectionHeader
          title="Project Updates"
          subtitle="Latest news, features, and roadmap highlights."
          icon={Calendar}
          className="mb-10"
        />

        {activities.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map((item) => (
              <ActivityCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          /* Empty State Handling */
          <div className="text-center py-20 bg-white rounded-xl shadow-sm border border-slate-100">
            <div className="bg-slate-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-slate-400" />
            </div>
            <h3 className="text-lg font-bold text-slate-700">No updates yet</h3>
            <p className="text-slate-500">
              Check back soon for the latest news.
            </p>
          </div>
        )}

        {/* 3. Load More Button  Only show if there are many items */}
        {activities.length > 6 && (
          <div className="mt-16 text-center">
            <Button
              variant="outline"
              size="lg"
              className="border-2 hover:bg-slate-100 px-8"
            >
              Load More Activities
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

// --- REUSABLE CARD COMPONENT ---
function ActivityCard({ item }: { item: any }) {
  return (
    <Card className="group overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col bg-white">
      {/* Image Area with Zoom Effect */}
      <div className="relative h-56 overflow-hidden bg-slate-100">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

        {/* Floating Category Badge */}
        <div className="absolute top-4 left-4">
          <Badge
            className={cn(
              "px-3 py-1 text-xs font-bold uppercase tracking-wider border-0",
              item.color
            )}
          >
            {item.category}
          </Badge>
        </div>
      </div>

      {/* Content Area */}
      <CardContent className="p-6 flex-1">
        <div className="flex items-center gap-4 text-slate-500 text-xs mb-3">
          <span className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" /> {item.date}
          </span>
          <span className="flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5" /> {item.location}
          </span>
        </div>

        <h3 className="text-xl font-bold text-slate-900 leading-tight mb-2 group-hover:text-blue-700 transition-colors">
          {item.title}
        </h3>
      </CardContent>

      {/* Footer with Action */}
      <CardFooter className="p-6 pt-0 mt-auto border-t border-slate-50">
        <Button
          variant="ghost"
          className="w-full justify-between text-slate-600 hover:text-blue-700 hover:bg-blue-50 p-0 h-auto py-4 font-semibold"
        >
          Read More
          <ArrowUpRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </Button>
      </CardFooter>
    </Card>
  );
}
