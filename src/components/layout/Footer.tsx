import { Link } from "react-router-dom";
import {
  Ship,
  MapPin,
  Globe,
  Mail,
  Phone,
  Facebook,
  Linkedin,
  Instagram,
} from "lucide-react";

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
              <span className="font-bold text-lg text-primary-foreground">
                BlueNet+
              </span>
            </div>

            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Connecting stakeholders, empowering innovation, and building a
              resilient Blue Economy for Pakistan.
            </p>

            {/* Social Media Links */}
            <div className="flex items-center space-x-4">
              <a
                href="https://www.facebook.com/Bluenetplus"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>

              <a
                href="https://www.linkedin.com/company/bluenetplus/?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnyFWt_U-9u3OrdwTsYNUSSQEwgDasbyviLZOdiNsaDVYffwLZRM7EShc8pGE_aem_EIx-TKa8kHtnOwiQCAvu1A"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>

              <a
                href="https://www.instagram.com/bluenetplus/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Platform Links */}
          <div>
            <h4 className="text-primary-foreground font-bold mb-4">Platform</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/membership"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Membership
                </Link>
              </li>
              <li>
                <Link
                  to="/marketplace"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Services Market
                </Link>
              </li>
              <li>
                <Link
                  to="/data"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
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
                <Link
                  to="/academy"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Blue Skills Academy
                </Link>
              </li>
              <li>
                <Link
                  to="/incubator"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
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
                +92 333 3265984
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Globe className="w-4 h-4 text-primary" />
                www.bluenetplus.pk
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-navy-light text-center">
          <p className="text-xs text-muted-foreground">
            © 2025 Maritime Stakeholders Hub. Powered by BlueNet+. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
