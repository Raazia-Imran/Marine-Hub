import { SectionHeader } from "@/components/ui/SectionHeader";
import { CourseCard } from "@/components/ui/CourseCard";
import { COURSES } from "@/data/mockData";
import { useToast } from "@/hooks/use-toast";
import { GraduationCap } from "lucide-react";
import { Course } from "@/types";

export default function Academy() {
  const { toast } = useToast();

  const handleEnroll = (course: Course) => {
    toast({
      title: "Enrolled Successfully",
      description: `You've been enrolled in "${course.title}". Check your email for course materials.`,
    });
  };

  return (
    <div className="py-12 bg-background min-h-screen animate-fade-in">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Blue Skills Academy"
          subtitle="Future-ready training for Pakistan's next-gen maritime workforce."
          icon={GraduationCap}
        />

        {/* Course Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {COURSES.map((course, idx) => (
            <div
              key={course.id}
              className="animate-fade-in"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <CourseCard course={course} onEnroll={handleEnroll} />
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="gradient-ocean rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-primary-foreground">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">1,200+</div>
              <div className="text-primary-foreground/70">Graduates</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">25+</div>
              <div className="text-primary-foreground/70">Courses</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">15</div>
              <div className="text-primary-foreground/70">Expert Instructors</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">95%</div>
              <div className="text-primary-foreground/70">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
