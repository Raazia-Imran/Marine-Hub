import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Ship, Home } from "lucide-react";

export default function NotFound() {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-secondary/30 animate-fade-in">
      <div className="text-center px-4">
        <div className="w-24 h-24 gradient-ocean rounded-full flex items-center justify-center mx-auto mb-8 animate-float">
          <Ship className="w-12 h-12 text-primary-foreground" />
        </div>
        <h1 className="text-6xl font-bold text-foreground mb-4">404</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Oops! This page seems to have drifted off course.
        </p>
        <Button variant="hero" size="lg" asChild>
          <Link to="/">
            <Home className="w-5 h-5" />
            Return to Home
          </Link>
        </Button>
      </div>
    </div>
  );
}
