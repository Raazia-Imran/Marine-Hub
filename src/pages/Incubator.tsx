import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  Globe,
  Landmark,
  Lightbulb,
  Rocket,
  ShieldCheck,
  Sprout,
  Target,
  Users,
} from "lucide-react";

export default function Incubator() {
  return (
    <div className="py-24 min-h-screen animate-fade-in">
      <div className="container mx-auto px-4">
        {/* HERO SECTION */}
        <SectionHeader
          title="Incubation for Ocean Startups"
          subtitle="Accelerating Blue Innovation for a Sustainable Maritime Future."
          icon={Lightbulb}
          className="mb-16 text-center"
        />

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* LEFT COLUMN: Benefits & Focus Areas */}
          <div className="space-y-12">
            {/* 1. What We Provide */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <Rocket className="w-6 h-6 text-[#FF7F50]" />
                What We Provide
              </h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                We support early-stage entrepreneurs, youth innovators, and
                women-led enterprises to turn pioneering ocean ideas into
                scalable ventures.
              </p>
              <ul className="space-y-4">
                <BenefitItem text="Business Development & Mentoring (Industry/Finance experts)" />
                <BenefitItem text="Technical Labs & Field Access (Coastal sites/Facilities)" />
                <BenefitItem text="Investor & Funding Support (Grants, VC access)" />
                <BenefitItem text="IP Support (Patents & Licensing)" />
                <BenefitItem text="Digital Marketplace Integration" />
              </ul>
            </div>

            {/* 2. Focus Themes */}
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <Target className="w-6 h-6 text-teal-500" />
                Focus Themes
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <ThemeTag text="Smart Fishing & AI" />
                <ThemeTag text="Seaweed Value Chain" />
                <ThemeTag text="Ocean Robotics & Drones" />
                <ThemeTag text="Marine Renewable Energy" />
                <ThemeTag text="Coastal Eco-Tourism" />
                <ThemeTag text="Blue Circular Economy" />
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Eligibility & Partners (Replaces Form) */}
          <div className="space-y-10">
            {/* 3. Who Can Apply? (New Section) */}
            <div className="bg-[#001E2B] text-white rounded-2xl shadow-xl p-8 relative overflow-hidden">
              {/* Background Gradient */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500 rounded-full blur-[80px] opacity-20 pointer-events-none" />

              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Users className="w-6 h-6 text-teal-400" />
                Who Can Apply?
              </h3>

              <div className="space-y-4 relative z-10">
                <EligibilityItem
                  title="Ocean-Tech Innovators"
                  desc="Startups building hardware/software for marine use."
                />
                <EligibilityItem
                  title="Women-Led Enterprises"
                  desc="Dedicated track for female founders in the Blue Economy."
                />
                <EligibilityItem
                  title="Youth & University Incubators"
                  desc="Student teams with scalable research projects."
                />
                <EligibilityItem
                  title="Coastal Entrepreneurs"
                  desc="Locals solving problems in fisheries or tourism."
                />
              </div>

              <div className="mt-8 pt-8 border-t border-slate-700">
                
                <p className="text-center text-slate-400 text-sm mt-3">
                  Applications open soon.
                </p>
              </div>
            </div>

            {/* 4. Strategic Partners (New Section) */}
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <Globe className="w-6 h-6 text-blue-600" />
                Strategic Ecosystem
              </h3>
              <p className="text-slate-600 text-sm mb-6">
                Our incubator is connected with national and global entities to
                ensure your success.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <PartnerBadge
                  label="Govt Ministries"
                  icon={<Landmark className="w-4 h-4" />}
                />
                <PartnerBadge
                  label="Marine Institutes"
                  icon={<Globe className="w-4 h-4" />}
                />
                <PartnerBadge
                  label="Donor Agencies"
                  icon={<Users className="w-4 h-4" />}
                />
                <PartnerBadge
                  label="Impact Investors"
                  icon={<Rocket className="w-4 h-4" />}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ----------------------------------------------------------------------
// HELPER COMPONENTS
// ----------------------------------------------------------------------

function BenefitItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-3 text-slate-700">
      <ShieldCheck className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" />
      <span className="text-sm md:text-base">{text}</span>
    </li>
  );
}

function ThemeTag({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-2 bg-white border border-slate-200 text-slate-700 px-4 py-3 rounded-xl text-sm font-medium shadow-sm hover:border-teal-500 hover:text-teal-600 transition-colors cursor-default">
      <Sprout className="w-4 h-4 text-teal-500" />
      {text}
    </div>
  );
}

function EligibilityItem({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="flex gap-4">
      <div className="w-2 h-2 mt-2 rounded-full bg-teal-400 shrink-0" />
      <div>
        <h4 className="font-bold text-slate-100 text-sm">{title}</h4>
        <p className="text-slate-400 text-xs">{desc}</p>
      </div>
    </div>
  );
}

function PartnerBadge({
  label,
  icon,
}: {
  label: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-2 bg-white p-3 rounded-lg border border-slate-100 shadow-sm text-slate-700 text-sm font-medium">
      <div className="text-blue-500">{icon}</div>
      {label}
    </div>
  );
}
