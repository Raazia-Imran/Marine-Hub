import { Link } from "react-router-dom";
import { Ship, MapPin, Globe, Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-navy border-t border-navy-light">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-primary p-2 rounded-lg">
                <Ship className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="font-bold text-lg text-primary-foreground">MSH Pakistan</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Connecting stakeholders, empowering innovation, and building a resilient Blue Economy for Pakistan.
            </p>
          </div>

          {/* Platform Links */}
          <div>
            <h4 className="text-primary-foreground font-bold mb-4">Platform</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/membership" className="text-muted-foreground hover:text-primary transition-colors">
                  Membership
                </Link>
              </li>
              <li>
                <Link to="/marketplace" className="text-muted-foreground hover:text-primary transition-colors">
                  Services Market
                </Link>
              </li>
              <li>
                <Link to="/data" className="text-muted-foreground hover:text-primary transition-colors">
                  Ocean Data
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs Links */}
          <div>
            <h4 className="text-primary-foreground font-bold mb-4">Programs</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/academy" className="text-muted-foreground hover:text-primary transition-colors">
                  Blue Skills Academy
                </Link>
              </li>
              <li>
                <Link to="/incubator" className="text-muted-foreground hover:text-primary transition-colors">
                  Startup Incubator
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-primary-foreground font-bold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                Karachi, Pakistan
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="w-4 h-4 text-primary" />
                info@bluenetplus.org
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="w-4 h-4 text-primary" />
                +92 21 1234 5678
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Globe className="w-4 h-4 text-primary" />
                www.mshpakistan.gov.pk
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-navy-light text-center">
          <p className="text-xs text-muted-foreground">
            © 2025 Maritime Stakeholders Hub. Powered by BlueNet+. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
