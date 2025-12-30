"use client";

import { useEffect, useState } from "react";

// Animated background component
function AnimatedBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern" />

      {/* Floating orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 rounded-full bg-[#00ffc1] glow-orb animate-float-slow" />
      <div className="absolute top-1/3 right-20 w-80 h-80 rounded-full bg-[#ff0043] glow-orb animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full bg-[#ff9855] glow-orb animate-pulse-glow" />
      <div className="absolute bottom-20 right-1/3 w-72 h-72 rounded-full bg-[#00ffc1] glow-orb animate-float-slow" style={{ animationDelay: "4s" }} />

      {/* Gradient mesh */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="grad1" cx="20%" cy="20%" r="50%">
              <stop offset="0%" stopColor="#00ffc1" stopOpacity="0.3" />
              <stop offset="100%" stopColor="transparent" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="grad2" cx="80%" cy="80%" r="50%">
              <stop offset="0%" stopColor="#ff0043" stopOpacity="0.2" />
              <stop offset="100%" stopColor="transparent" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#grad1)" />
          <rect width="100%" height="100%" fill="url(#grad2)" />
        </svg>
      </div>

      {/* Animated lines */}
      <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00ffc1" stopOpacity="0" />
            <stop offset="50%" stopColor="#00ffc1" stopOpacity="1" />
            <stop offset="100%" stopColor="#00ffc1" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[...Array(5)].map((_, i) => (
          <line
            key={i}
            x1="0"
            y1={`${20 + i * 20}%`}
            x2="100%"
            y2={`${20 + i * 20}%`}
            stroke="url(#lineGrad)"
            strokeWidth="1"
            className="animate-shimmer"
            style={{ animationDelay: `${i * 0.5}s` }}
          />
        ))}
      </svg>
    </div>
  );
}

// Icon components
function CheckIcon() {
  return (
    <svg className="w-5 h-5 text-[#00ffc1]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  );
}

function UsersIcon() {
  return (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  );
}

function ChatIcon() {
  return (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </svg>
  );
}

function BoltIcon() {
  return (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  );
}

function RocketIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.63 8.41m6.96 5.96a14.926 14.926 0 01-5.84 2.58m0 0a6 6 0 01-7.38-5.84h4.8m2.58 5.84V3a6 6 0 015.84 7.38" />
    </svg>
  );
}

// Delivery card component
function DeliveryCard({ icon, title, description, delay }: { icon: React.ReactNode; title: string; description: string; delay: string }) {
  return (
    <div className={`gradient-border card-hover p-6 animate-fade-in-up opacity-0 ${delay}`}>
      <div className="flex items-start gap-4">
        <div className="p-3 rounded-xl bg-gradient-to-br from-[#00ffc1]/20 to-[#00ffc1]/5 text-[#00ffc1]">
          {icon}
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-400 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
}

// Topic card component
function TopicCard({ title, items, gradient, delay }: { title: string; items: string[]; gradient: string; delay: string }) {
  return (
    <div className={`gradient-border card-hover p-6 h-full animate-fade-in-up opacity-0 ${delay}`}>
      <div className={`inline-block px-4 py-1 rounded-full text-sm font-medium mb-4 ${gradient}`}>
        {title}
      </div>
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-3">
            <CheckIcon />
            <span className="text-gray-300">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Animated counter
function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [target]);

  return <span>{count.toLocaleString()}{suffix}</span>;
}

export default function ProposalPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-[#00102e] text-white relative">
      <AnimatedBackground />

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Logo/Badge */}
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
            <div className="w-2 h-2 rounded-full bg-[#00ffc1] animate-pulse" />
            <span className="text-sm text-gray-400">Rev Pilot Consulting</span>
          </div>

          {/* Main heading */}
          <h1 className={`text-5xl md:text-7xl font-bold mb-6 leading-tight ${isVisible ? "animate-fade-in-up delay-100" : "opacity-0"}`}>
            Scale Faster.{" "}
            <span className="gradient-text">Close More.</span>
          </h1>

          <p className={`text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed ${isVisible ? "animate-fade-in-up delay-200" : "opacity-0"}`}>
            A 2-month intensive to optimize your sales engine, affiliate systems, and event strategy.
          </p>

          {/* CTA Button */}
          <div className={`${isVisible ? "animate-fade-in-up delay-300" : "opacity-0"}`}>
            <a
              href="https://checkout.payfunnels.co/invoice/jxp86v4jz7/t9oktko0zdtbh2g0"
              className="btn-primary text-lg inline-flex items-center gap-2"
            >
              Click Here to Pay
            </a>
          </div>

          {/* Scroll indicator */}
          <div className={`absolute bottom-10 left-1/2 transform -translate-x-1/2 ${isVisible ? "animate-fade-in-up delay-500" : "opacity-0"}`}>
            <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2">
              <div className="w-1 h-2 bg-[#00ffc1] rounded-full animate-bounce" />
            </div>
          </div>
        </div>
      </section>

      {/* Investment Section */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="gradient-border p-8 md:p-12 animate-scale-in">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              {/* Investment */}
              <div className="text-center md:text-left">
                <p className="text-gray-400 uppercase tracking-wider text-sm mb-2">Your Investment</p>
                <div className="flex items-baseline gap-1 justify-center md:justify-start">
                  <span className="text-5xl md:text-6xl font-bold gradient-text">$<AnimatedCounter target={20000} /></span>
                  <span className="text-gray-500 text-xl">USD</span>
                </div>
              </div>

              {/* Divider */}
              <div className="hidden md:block w-px h-24 bg-gradient-to-b from-transparent via-[#00ffc1]/50 to-transparent mx-auto" />

              {/* Timeline */}
              <div className="text-center md:text-left">
                <p className="text-gray-400 uppercase tracking-wider text-sm mb-2">Delivery Window</p>
                <div className="flex items-baseline gap-2 justify-center md:justify-start">
                  <span className="text-5xl md:text-6xl font-bold text-[#00ffc1]">2</span>
                  <span className="text-2xl text-gray-300">Months</span>
                </div>
                <p className="text-gray-500 mt-2">Intensive, focused engagement</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Stats */}
      <section className="relative z-10 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-[#00ffc1]">$100M+</div>
              <p className="text-gray-400 text-sm uppercase tracking-wider">Client Revenue Generated</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold gradient-text">300+</div>
              <p className="text-gray-400 text-sm uppercase tracking-wider">Sales Reps Onboarded</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-[#00ffc1]">87%</div>
              <p className="text-gray-400 text-sm uppercase tracking-wider">Net Promoter Score</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold gradient-text">#1</div>
              <p className="text-gray-400 text-sm uppercase tracking-wider">Close CRM Partner</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="relative z-10 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-gray-500 uppercase tracking-widest text-sm mb-10">Trusted by Industry Leaders</p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
            {[
              "Dean Graziosi",
              "Matt Gray (Founder OS)",
              "Jeremy Miner (7th Level)",
              "Tarek El Moussa",
              "Pedro Adao",
              "Timothy Sykes",
              "Pace Morby (Subto)"
            ].map((client) => (
              <div
                key={client}
                className="text-gray-400 hover:text-white transition-colors duration-300 font-medium text-lg"
              >
                {client}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="section-divider max-w-4xl mx-auto" />
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Engagement <span className="gradient-text">Scope</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Direct access to senior-level strategy and hands-on implementation support
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <DeliveryCard
              icon={<UsersIcon />}
              title="4 1:1 Calls with Jordan"
              description="Strategic sessions focused on your highest-priority challenges. Direct access to diagnose issues and implement solutions."
              delay="delay-100"
            />
            <DeliveryCard
              icon={<CalendarIcon />}
              title="2 Guest Calls"
              description="Targeted sessions with subject matter experts from our network—brought in based on your specific needs."
              delay="delay-200"
            />
            <DeliveryCard
              icon={<BoltIcon />}
              title="12 Full Implementation Hours"
              description="Hands-on execution from our team. We build, configure, and optimize your systems—not just advise."
              delay="delay-300"
            />
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="section-divider max-w-4xl mx-auto" />

      {/* Topics Covered Section */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Focus <span className="text-[#00ffc1] teal-glow">Areas</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              We&apos;ll prioritize based on where we can drive the most immediate ROI
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <TopicCard
              title="Affiliate Systems"
              items={[
                "Outreach methodology & sequencing",
                "High-converting message frameworks",
                "Content structure for activation"
              ]}
              gradient="bg-gradient-to-r from-[#ff0043]/20 to-[#ff9855]/20 text-[#ff9855]"
              delay="delay-100"
            />
            <TopicCard
              title="Sales Infrastructure"
              items={[
                "HubSpot pipeline optimization",
                "Dialer.io configuration",
                "Close CRM implementation",
                "Automation workflows"
              ]}
              gradient="bg-gradient-to-r from-[#00ffc1]/20 to-[#00d9a6]/20 text-[#00ffc1]"
              delay="delay-200"
            />
            <TopicCard
              title="Event Operations"
              items={[
                "Event structure & flow design",
                "Room management & engagement",
                "Live event sales execution"
              ]}
              gradient="bg-gradient-to-r from-[#ff9855]/20 to-[#ffbe57]/20 text-[#ffbe57]"
              delay="delay-300"
            />
            <TopicCard
              title="Network & Partnerships"
              items={[
                "Warm introductions to operators",
                "Strategic partnership frameworks",
                "Industry relationship building"
              ]}
              gradient="bg-gradient-to-r from-[#00ffc1]/20 to-[#00d9a6]/20 text-[#00ffc1]"
              delay="delay-400"
            />
            <TopicCard
              title="Hiring & Team"
              items={[
                "Role definition & hiring process",
                "Team structure optimization",
                "Specialist sourcing as needed"
              ]}
              gradient="bg-gradient-to-r from-[#ff0043]/20 to-[#ff9855]/20 text-[#ff9855]"
              delay="delay-500"
            />
            <TopicCard
              title="Flex Capacity"
              items={[
                "Agenda adapts to your priorities",
                "Additional SMEs on demand",
                "Solve problems as they arise"
              ]}
              gradient="bg-gradient-to-r from-[#ff9855]/20 to-[#ffbe57]/20 text-[#ffbe57]"
              delay="delay-600"
            />
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="gradient-border p-8 md:p-12">
            <h3 className="text-2xl font-bold mb-8 text-center">Platforms We&apos;ll Optimize</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {["HubSpot", "Dialer.io", "Close CRM", "Automations", "Slack"].map((tech, index) => (
                <div
                  key={tech}
                  className="px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:border-[#00ffc1]/50 hover:bg-[#00ffc1]/5 transition-all duration-300 cursor-default"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span className="font-medium">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Video Testimonial Section */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Hear From Our <span className="gradient-text">Clients</span>
            </h2>
            <p className="text-xl text-gray-400">
              Real results from real partnerships
            </p>
          </div>
          <div className="gradient-border p-2 md:p-3">
            <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-xl"
                src="https://www.youtube.com/embed/f7sQ3r2ZT-s"
                title="Client Testimonial"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
          <div className="mt-8 text-center">
            <p className="text-gray-400 italic">&ldquo;Their depth with HubSpot, Close, dialers, and automations is next-level.&rdquo;</p>
            <p className="text-[#00ffc1] font-medium mt-2">— Ben Gower, Founder</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="gradient-border p-12 md:p-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let&apos;s <span className="gradient-text">Move</span>.
            </h2>
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
              60 days. Full execution support. Results you can measure.
            </p>
            <a
              href="https://checkout.payfunnels.co/invoice/jxp86v4jz7/t9oktko0zdtbh2g0"
              className="btn-primary text-lg inline-flex items-center gap-2 justify-center"
            >
              Accept & Pay
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-8 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#00ffc1] to-[#00d9a6] flex items-center justify-center">
              <span className="font-bold text-[#00102e] text-sm">RP</span>
            </div>
            <span className="font-semibold">Rev Pilot</span>
          </div>
          <p className="text-gray-500 text-sm">
            This proposal is valid for 30 days from receipt
          </p>
        </div>
      </footer>
    </div>
  );
}
