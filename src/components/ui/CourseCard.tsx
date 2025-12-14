import { Clock, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Course } from "@/types";
import { cn } from "@/lib/utils";

interface CourseCardProps {
  course: Course;
  onEnroll: (course: Course) => void;
  className?: string;
}

const levelColors = {
  Beginner: "bg-accent text-accent-foreground",
  Intermediate: "bg-primary text-primary-foreground",
  Advanced: "bg-navy text-primary-foreground",
};

export function CourseCard({ course, onEnroll, className }: CourseCardProps) {
  return (
    <div
      className={cn(
        "bg-card rounded-xl border border-border overflow-hidden hover-lift group cursor-pointer",
        className
      )}
    >
      <div className="h-48 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/80 to-navy/40" />
        <div className="absolute bottom-4 left-4 right-4">
          <span
            className={cn(
              "px-2 py-1 text-xs rounded-md uppercase font-bold tracking-wider mb-2 inline-block",
              levelColors[course.level]
            )}
          >
            {course.level}
          </span>
          <h3 className="text-xl font-bold text-primary-foreground leading-tight">
            {course.title}
          </h3>
        </div>
      </div>
      
      <div className="p-5">
        {course.instructor && (
          <p className="text-sm text-muted-foreground mb-3">
            Instructor: <span className="font-medium text-foreground">{course.instructor}</span>
          </p>
        )}
        
        <div className="flex items-center justify-between text-muted-foreground text-sm mb-4">
          <span className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {course.duration}
          </span>
          <span className="flex items-center gap-1">
            <BookOpen className="w-4 h-4" />
            Online
          </span>
        </div>
        
        <Button variant="navy" className="w-full" onClick={() => onEnroll(course)}>
          Enroll Now
        </Button>
      </div>
    </div>
  );
}
