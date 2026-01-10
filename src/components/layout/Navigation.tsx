import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Ship,
  Anchor,
  Users,
  Briefcase,
  Database,
  GraduationCap,
  Lightbulb,
  Calendar, //  IMPORT CALENDAR ICON
  Menu,
  X,
  LogOut,
} from "lucide-react";

//  UPDATED LIST
const navItems = [
  { path: "/", label: "Home", icon: Anchor },
  { path: "/activities", label: "Activities", icon: Calendar }, // 👈 ADD THIS LINE
  { path: "/membership", label: "Membership", icon: Users },
  { path: "/marketplace", label: "Marketplace", icon: Briefcase },
  { path: "/data", label: "Ocean Data", icon: Database },
  { path: "/academy", label: "Blue Skills", icon: GraduationCap },
  { path: "/incubator", label: "Incubator", icon: Lightbulb },
  { path: "/about", label: "About Us", icon: Users },
];

interface NavigationProps {
  isLoggedIn?: boolean;
  onLogin?: () => void;
  onLogout?: () => void;
}

export function Navigation({
  isLoggedIn = false,
  onLogin,
  onLogout,
}: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="bg-navy sticky top-0 z-50 border-b border-navy-light shadow-lg">
      <div className="container mx-auto px-4">
        <div className="relative flex items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="bg-primary p-2 rounded-lg transition-transform group-hover:scale-105">
              <Ship className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-primary-foreground tracking-tight">
                Blue <span className="text-primary">Net+</span>
              </h1>
              <p className="text-[10px] text-muted-foreground uppercase tracking-wider">
                Maritime Hub
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1 absolute left-1/2 -translate-x-1/2 whitespace-nowrap">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "px-3 py-2 rounded-lg text-sm font-medium transition-all flex items-center space-x-1.5",
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:bg-navy-light hover:text-primary-foreground"
                  )}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>

          {/* Auth Section */}

          {isLoggedIn && (
            <div className="flex items-center space-x-3">
              <div className="text-right">
                <p className="text-sm font-medium text-primary-foreground">
                  Member
                </p>
                <p className="text-xs text-muted-foreground">Active</p>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={onLogout}
                className="text-destructive hover:bg-destructive/10"
              >
                <LogOut className="w-5 h-5" />
              </Button>
            </div>
          )}

          {/* <div className="hidden lg:flex items-center ml-4 border-l border-navy-light pl-4">
            {isLoggedIn ? (
              <div className="flex items-center space-x-3">
                <div className="text-right">
                  <p className="text-sm font-medium text-primary-foreground">Member</p>
                  <p className="text-xs text-muted-foreground">Active</p>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={onLogout}
                  className="text-destructive hover:bg-destructive/10"
                >
                  <LogOut className="w-5 h-5" />
                </Button>
              </div>
            ) : (
              <Button variant="hero" size="default" onClick={onLogin}>
                <User className="w-4 h-4" />
                <span>Join Hub</span>
              </Button>
            )}
          </div> */}

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-muted-foreground hover:text-primary-foreground transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-navy-light border-t border-navy animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "flex items-center space-x-3 px-3 py-3 rounded-lg text-base font-medium transition-all",
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:bg-navy hover:text-primary-foreground"
                  )}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </Link>
              );
            })}

            <div className="pt-4 border-t border-navy mt-2">
              {/* {isLoggedIn ? (
                <button
                  onClick={() => {
                    onLogout?.();
                    setMobileMenuOpen(false);
                  }}
                  className="flex w-full items-center space-x-3 px-3 py-3 text-destructive hover:bg-navy rounded-lg"
                >
                  <LogOut className="w-5 h-5" />
                  <span>Sign Out</span>
                </button>
              ) : (
                <button
                  onClick={() => {
                    onLogin?.();
                    setMobileMenuOpen(false);
                  }}
                  className="flex w-full items-center space-x-3 px-3 py-3 text-primary hover:bg-navy rounded-lg"
                >
                  <User className="w-5 h-5" />
                  <span>Login / Register</span>
                </button> */}
              {/* )} */}

              {isLoggedIn && (
                <button
                  onClick={() => {
                    onLogout?.();
                    setMobileMenuOpen(false);
                  }}
                  className="flex w-full items-center space-x-3 px-3 py-3 text-destructive hover:bg-navy rounded-lg"
                >
                  <LogOut className="w-5 h-5" />
                  <span>Sign Out</span>
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
