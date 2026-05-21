"use client";

import { useState } from "react";
import {
  Sparkles,
  ArrowRight,
  ChartColumn,
  Zap,
  Euro,
  TrendingUp,
  MessageCircle,
  Wrench,
  Globe,
  Rocket,
  Shield,
  Gift,
  Calendar,
  ChevronDown,
  Play,
} from "lucide-react";

export default function Home() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  const accordionItems = [
    {
      title: "Identify and unlock cost relief opportunities",
      content:
        "Identify and legally process electricity and gas cost relief applications for our customers, including tax refunds, network fee exemptions, and investment subsidies. Stay ahead of regulatory changes so no opportunity goes unclaimed.",
    },
    {
      title: "Be the internal regulatory expert",
      content:
        "Serve as the go-to authority on energy regulation and subsidies for our CS team and customers alike. Make complex regulatory topics accessible, actionable, and consistent across all customer interactions.",
    },
    {
      title: "Drive automation and process efficiency",
      content:
        "Don't just solve regulatory problems once. Work with product to automate analyses, standardize processes, and build frameworks that enable third parties to act independently at scale.",
    },
    {
      title: "Manage authorities and regulatory processes",
      content:
        "Own interactions with German energy authorities and regulatory bodies. Ensure compliance, track submissions, and manage the relationships that create real financial impact for our customers.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#00095B] h-12">
        <div className="max-w-screen-xl mx-auto px-6 md:px-16 h-full flex items-center justify-between">
          <img src="/ecoplanet-logo-wordmark.svg" alt="ecoplanet" className="h-5" />
          <span className="text-white/60 text-sm hidden sm:block">Confidential offer</span>
        </div>
      </nav>
      <div className="h-12" />

      {/* Hero */}
      <section className="relative bg-[#00095B] text-white overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#1A2FEE] rounded-full opacity-[0.07] -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#7582F6] rounded-full opacity-[0.07] translate-y-1/2 -translate-x-1/3" />
        <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-[#E2EC2B] rounded-full opacity-[0.04] -translate-x-1/2 -translate-y-1/2" />
        <div className="relative max-w-screen-xl mx-auto px-6 md:px-16 py-16 md:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#E2EC2B]/40 text-[#E2EC2B] text-sm font-medium mb-8">
              <Sparkles className="w-4 h-4" aria-hidden="true" />
              Your personal offer
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.08] mb-6">
              Yannick,<br />
              <span className="text-white/60">come build the future of</span><br />
              <span className="bg-gradient-to-r from-[#E2EC2B] to-[#00C48C] bg-clip-text text-transparent">
                integrated energy management
              </span><br />
              <span className="text-white/60">for companies across Europe</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/60 max-w-2xl leading-relaxed">
              We&apos;re offering you the role of{" "}
              <strong className="text-white">Energieberater Regulatorik &amp; Fördermittel</strong> at ecoplanet, where your work directly shapes how European industry manages energy
            </p>
            <div className="mt-12 flex flex-wrap gap-4">
              <a
                href="#offer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#E2EC2B] text-[#00095B] rounded-lg font-semibold hover:bg-[#d4dc1a] transition-colors"
              >
                See your offer <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>
              <a
                href="#why-ecoplanet"
                className="inline-flex items-center gap-2 px-6 py-3 border border-white/30 text-white rounded-lg font-medium hover:bg-white/5 transition-colors"
              >
                Why ecoplanet?
              </a>
            </div>
          </div>
        </div>
        <div className="relative h-16 overflow-hidden">
          <svg viewBox="0 0 1440 64" className="absolute bottom-0 w-full" preserveAspectRatio="none">
            <path d="M0 32C360 64 720 0 1440 32V64H0V32Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Why you, Walid */}
      <section className="py-20 md:py-28 border-b border-gray-100">
        <div className="max-w-screen-xl mx-auto px-6 md:px-16">
          <div className="max-w-3xl mx-auto">
            <p className="text-sm font-semibold text-[#00C48C] uppercase tracking-wider mb-3">Why you, Yannick</p>
            <h2 className="text-3xl md:text-5xl font-bold text-[#00095B] mb-8">We know what you&apos;re capable of</h2>
            <div className="space-y-6">
              <div className="bg-[#00095B]/[0.03] rounded-2xl p-8 border border-[#00095B]/5">
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  In every conversation we had, you convinced us across the board. You bring a rare combination: deep knowledge of and genuine enthusiasm for the regulatory landscape, paired with the hands-on experience at the IHK that most candidates simply don&apos;t have. You know the German Mittelstand, because you&apos;ve worked with them directly, including with companies who are already our{" "}
                  <strong className="text-[#00095B]">customers</strong>.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  What makes you stand out is your drive to build something new. You don&apos;t see complex, repetitive regulatory work as something to endure. You see it as an opportunity to systematize, automate, and scale. Your openness to working with modern tools, including AI, is exactly the mindset we need to take this function to the next level.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  We see in you the drive to become one of the <strong className="text-[#00095B]">key players at ecoplanet</strong>. Not someone who processes applications in the background, but someone who builds the regulatory foundation that makes our platform indispensable for every industrial customer in Germany.
                </p>
              </div>
              <div className="bg-gradient-to-r from-[#E2EC2B]/10 to-[#00C48C]/10 rounded-2xl p-8 border border-[#E2EC2B]/20">
                <p className="text-lg font-semibold text-[#00095B] mb-2">The challenge ahead</p>
                <p className="text-gray-700 leading-relaxed">
                  Germany&apos;s regulatory landscape holds enormous untapped value for industrial companies. Most of it goes unclaimed because the complexity is too high and the expertise too rare. This year, we&apos;re building the function that changes that systematically, across 120+ customers. It requires someone who knows the regulations, understands the people behind them, and has the drive to turn that knowledge into a scalable product. That&apos;s the role you&apos;re stepping into.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team photo */}
      <section className="relative">
        <div className="max-w-screen-xl mx-auto px-6 md:px-16">
          <div className="rounded-2xl overflow-hidden shadow-xl -mt-2">
            <img src="/team-photo-2.jpg" alt="ecoplanet team offsite" className="w-full h-64 md:h-96 object-cover object-center" />
          </div>
          <p className="text-center text-sm text-gray-400 mt-3">Team offsite, where the best ideas happen</p>
        </div>
      </section>

      {/* Why ecoplanet */}
      <section id="why-ecoplanet" className="py-20 md:py-28">
        <div className="max-w-screen-xl mx-auto px-6 md:px-16">
          <div className="max-w-3xl mb-16">
            <p className="text-sm font-semibold text-[#00C48C] uppercase tracking-wider mb-3">The mission</p>
            <h2 className="text-3xl md:text-5xl font-bold text-[#00095B] mb-6">
              We turn energy management into a competitive advantage
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Industrial companies run on energy, yet most manage it with spreadsheets, gut feeling, and fragmented tools. ecoplanet helps them{" "}
              <strong className="text-[#00095B]">save real money and secure their competitiveness</strong>. We&apos;re building the operating system for the energy transition: an integrated platform that transforms messy energy data into automated decisions and provable savings.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-[#00095B] to-[#1A2FEE] rounded-2xl p-8 text-white">
              <ChartColumn className="w-8 h-8 text-[#E2EC2B] mb-4" aria-hidden="true" />
              <h3 className="text-xl font-bold mb-3">Data excellence</h3>
              <p className="text-white/70 leading-relaxed">
                We consolidate fragmented energy data across meters, machines, and markets into one single source of truth.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#00095B] to-[#1A2FEE] rounded-2xl p-8 text-white">
              <Zap className="w-8 h-8 text-[#E2EC2B] mb-4" aria-hidden="true" />
              <h3 className="text-xl font-bold mb-3">Automated decisions</h3>
              <p className="text-white/70 leading-relaxed">
                Our AI identifies savings, flags anomalies, and turns reactive energy management into proactive optimization.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#00095B] to-[#1A2FEE] rounded-2xl p-8 text-white">
              <Euro className="w-8 h-8 text-[#E2EC2B] mb-4" aria-hidden="true" />
              <h3 className="text-xl font-bold mb-3">Provable savings</h3>
              <p className="text-white/70 leading-relaxed">
                Every customer can quantify and prove the financial impact of their energy strategy, from board report to ISO audit.
              </p>
            </div>
          </div>
          <div className="mt-12 rounded-xl border border-gray-200 overflow-hidden shadow-sm">
            <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
              <iframe
                src="https://drive.google.com/file/d/1hNQxZ-EuXbD-3c4NkC5MIPcRQ-_62Zd8/preview"
                className="absolute inset-0 w-full h-full border-0"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="Maximilian Dekorsy: how companies work with ecoplanet"
              />
            </div>
            <div className="bg-white px-6 py-4 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#00095B] flex items-center justify-center flex-shrink-0">
                <Play className="w-4 h-4 text-[#E2EC2B]" aria-hidden="true" />
              </div>
              <div>
                <p className="text-sm font-semibold text-[#00095B]">Maximilian Dekorsy: how companies work with ecoplanet</p>
                <p className="text-xs text-gray-400">A quick walkthrough of the platform and the value we deliver</p>
              </div>
            </div>
          </div>
          <div className="mt-12 bg-gray-50 rounded-2xl p-8 md:p-12 border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <p className="text-3xl md:text-4xl font-bold text-[#00095B]">120+</p>
                <p className="text-sm text-gray-500 mt-1">Industrial customers</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold text-[#00095B]">40+</p>
                <p className="text-sm text-gray-500 mt-1">Team members</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold text-[#00095B]">Series A</p>
                <p className="text-sm text-gray-500 mt-1">Funded &amp; growing</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why we need you */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-screen-xl mx-auto px-6 md:px-16">
          <div className="max-w-3xl mb-16">
            <p className="text-sm font-semibold text-[#00C48C] uppercase tracking-wider mb-3">Why we need you</p>
            <h2 className="text-3xl md:text-5xl font-bold text-[#00095B] mb-6">Regulatory expertise is how we unlock the full value of energy management</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Most industrial companies leave significant money on the table because navigating Germany&apos;s regulatory landscape is too complex. You change that. As the expert at the intersection of regulation, customer value, and product, you make sure every eligible customer gets every euro they&apos;re entitled to.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: Euro,
                title: "Unlock financial relief for customers",
                text: "Identify and process cost relief applications across tax refunds, network fees, and investment subsidies. Direct bottom-line impact for every customer you touch.",
              },
              {
                icon: TrendingUp,
                title: "Drive regulatory upsells",
                text: "Turn regulatory expertise into a scalable commercial offering. Every customer who doesn't yet use our regulatory services is an upsell opportunity.",
              },
              {
                icon: MessageCircle,
                title: "Close the feedback loop",
                text: "Turn real customer needs into actionable product improvements. Your field experience shapes what we build next.",
              },
              {
                icon: Wrench,
                title: "Build automated regulatory processes",
                text: "Systematize what works. Work with product to automate analyses and build frameworks that scale the function without scaling the headcount.",
              },
            ].map(({ icon: Icon, title, text }) => (
              <div key={title} className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-[#00095B]/20 transition-colors">
                <div className="w-12 h-12 bg-[#00095B]/5 rounded-xl flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-[#00095B]" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-bold text-[#00095B] mb-2">{title}</h3>
                <p className="text-gray-600 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 md:py-28">
        <div className="max-w-screen-xl mx-auto px-6 md:px-16">
          <div className="max-w-3xl mb-16">
            <p className="text-sm font-semibold text-[#00C48C] uppercase tracking-wider mb-3">Your team</p>
            <h2 className="text-3xl md:text-5xl font-bold text-[#00095B] mb-6">Small team, big ownership</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              You&apos;ll join a tight-knit team where everyone has real impact. No layers of middle management, just smart people building something meaningful.
            </p>
          </div>
          <div className="bg-[#00095B] rounded-2xl p-8 md:p-12 text-white mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-[#E2EC2B] text-sm font-semibold uppercase tracking-wider mb-4">Reporting to</p>
                <div className="flex items-center gap-4 mb-4">
                  <img src="/vera-maag.jpg" alt="Vera Maag" className="w-16 h-16 rounded-full object-cover border-2 border-[#E2EC2B]/30 flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-bold">Vera Maag</h3>
                    <p className="text-white/60">Head of GTM</p>
                  </div>
                </div>
                <p className="text-white/80 leading-relaxed">
                  Vera owns all topics that enable ecoplanet&apos;s commercial functions to become better, highly efficient, and successful. For you, that means direct access to all relevant commercial topics and the real possibility to shape how ecoplanet&apos;s commercial engine works.
                </p>
              </div>
              <div className="space-y-4">
                <div className="bg-white/10 rounded-xl p-5 border border-white/10">
                  <p className="text-sm text-white/50 mb-1">Your peers</p>
                  <p className="text-white font-medium">Lukas Blaschka (Value Engineering Base), Robin Böhm (Value Engineering Smart Site), Luca Stier (GTM Engineering)</p>
                </div>
                <div className="bg-white/10 rounded-xl p-5 border border-white/10">
                  <p className="text-sm text-white/50 mb-1">In close collaboration with</p>
                  <p className="text-white font-medium">Julius Press (Senior Corporate Development Manager) and our product team</p>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden mb-8">
            <img src="/team-photo-1.jpg" alt="ecoplanet team" className="w-full h-56 md:h-80 object-cover object-center" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Globe, title: "Munich-based, flexible", text: "Office in Munich with flexible hybrid setup" },
              { icon: Rocket, title: "High-growth stage", text: "Series A, scaling from 120 to 300+ customers in 2026" },
              { icon: Shield, title: "Real mission", text: "Helping European industry save energy at scale, not just another SaaS widget" },
            ].map(({ icon: Icon, title, text }) => (
              <div key={title} className="text-center p-6">
                <div className="w-14 h-14 bg-[#E2EC2B]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-7 h-7 text-[#00095B]" aria-hidden="true" />
                </div>
                <h4 className="font-bold text-[#00095B] mb-2">{title}</h4>
                <p className="text-gray-500 text-sm">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offer */}
      <section id="offer" className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-screen-xl mx-auto px-6 md:px-16">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-[#00C48C] uppercase tracking-wider mb-3">Your offer</p>
            <h2 className="text-3xl md:text-5xl font-bold text-[#00095B] mb-4">Compensation &amp; benefits</h2>
            <p className="text-lg text-gray-500">Designed for high performers who want ownership and upside</p>
          </div>
          {/* Total comp */}
          <div className="max-w-3xl mx-auto mb-10">
            <div className="bg-gradient-to-br from-[#00095B] to-[#1A2FEE] rounded-2xl p-8 md:p-10 text-white text-center">
              <p className="text-sm text-white/50 uppercase tracking-wider mb-2">Base salary (year 1)</p>
              <p className="text-5xl md:text-7xl font-bold mb-2">
                €78<span className="text-3xl md:text-4xl text-white/60">,000</span>
              </p>
              <p className="text-white/50 text-sm">Variable + VSOP to be confirmed</p>
            </div>
          </div>
          {/* Comp breakdown */}
          <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div className="bg-white rounded-2xl p-8 border border-gray-200 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 rounded-full -translate-y-1/2 translate-x-1/2 bg-[#E2EC2B]/10" />
              <Euro className="w-8 h-8 text-[#00095B] mb-4" aria-hidden="true" />
              <p className="text-sm text-gray-400 uppercase tracking-wider mb-1">Base salary</p>
              <p className="text-3xl font-bold text-[#00095B]">€78,000</p>
              <p className="text-gray-500 text-sm mt-2">Annual gross, paid monthly</p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-200 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 rounded-full -translate-y-1/2 translate-x-1/2 bg-[#E2EC2B]/10" />
              <Calendar className="w-8 h-8 text-[#00095B] mb-4" aria-hidden="true" />
              <p className="text-sm text-gray-400 uppercase tracking-wider mb-1">Vacation</p>
              <p className="text-3xl font-bold text-[#00095B]">26 days</p>
              <p className="text-gray-500 text-sm mt-2">Annual paid vacation days</p>
            </div>
          </div>
          {/* Benefits */}
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <h3 className="text-lg font-bold text-[#00095B] mb-6 flex items-center gap-2">
                <Gift className="w-5 h-5" aria-hidden="true" />
                Additional benefits
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: "Jobrad", desc: "Lease your dream bike tax-free" },
                  { title: "Jobticket", desc: "Public transport fully covered" },
                  { title: "Wellpass", desc: "Access to gyms and wellness" },
                  { title: "Team events", desc: "Quarterly offsites, summer parties, team dinners" },
                  { title: "Flexible hybrid", desc: "Munich office with remote flexibility" },
                ].map(({ title, desc }) => (
                  <div key={title} className="flex items-start gap-3 p-3 rounded-lg bg-gray-50">
                    <div className="w-2 h-2 bg-[#00C48C] rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-[#00095B]">{title}</p>
                      <p className="text-sm text-gray-500">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Role */}
      <section className="py-20 md:py-28">
        <div className="max-w-screen-xl mx-auto px-6 md:px-16">
          <div className="max-w-3xl mx-auto">
            <p className="text-sm font-semibold text-[#00C48C] uppercase tracking-wider mb-3">The role</p>
            <h2 className="text-3xl md:text-5xl font-bold text-[#00095B] mb-6">Energieberater Regulatorik &amp; Fördermittel</h2>
            <p className="text-lg text-gray-600 mb-4 leading-relaxed">
              Full-time, permanent. Based in Munich (hybrid). Reporting directly to Vera Maag, Head of GTM.
            </p>
            <div className="bg-gradient-to-r from-[#E2EC2B]/10 to-[#00C48C]/10 rounded-2xl p-6 border border-[#E2EC2B]/20 mb-10">
              <p className="text-xs font-semibold text-[#00095B] uppercase tracking-wider mb-2">Top-level ambition</p>
              <p className="text-base text-gray-700 leading-relaxed">
                <strong className="text-[#00095B]">Maximise customer value by identifying and unlocking regulatory and subsidy opportunities at scale.</strong> As an Energieberater at ecoplanet, you turn regulatory complexity into competitive advantage. By identifying and processing cost relief opportunities systematically, you create direct financial impact for customers while building the regulatory foundation that makes our platform indispensable.
              </p>
            </div>
            <div className="space-y-4">
              {accordionItems.map((item, i) => (
                <div key={i} className="bg-white border border-gray-200 rounded-xl overflow-hidden">
                  <button
                    className="w-full text-left px-6 py-5 hover:bg-gray-50 transition-colors"
                    onClick={() => setOpenAccordion(openAccordion === i ? null : i)}
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-bold text-[#00095B]">{item.title}</h3>
                      <ChevronDown
                        className={`w-5 h-5 text-gray-400 transition-transform flex-shrink-0 ml-4 ${openAccordion === i ? "rotate-180" : ""}`}
                        aria-hidden="true"
                      />
                    </div>
                  </button>
                  {openAccordion === i && (
                    <div className="px-6 pb-5 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                      {item.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-[#00095B] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#1A2FEE] rounded-full opacity-[0.08] translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#E2EC2B] rounded-full opacity-[0.05] -translate-x-1/3 translate-y-1/3" />
        <div className="relative max-w-screen-xl mx-auto px-6 md:px-16 text-center">
          <div className="max-w-2xl mx-auto">
            <Sparkles className="w-10 h-10 text-[#E2EC2B] mx-auto mb-6" aria-hidden="true" />
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to shape the energy transition?</h2>
            <p className="text-xl text-white/60 mb-10 leading-relaxed">
              We&apos;re building something that matters. The team is strong, the timing is right, and the seat is yours.
            </p>
            <a
              href="mailto:vera.maag@ecoplanet.tech?subject=I'm%20in%20🚀"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#E2EC2B] text-[#00095B] rounded-xl font-bold text-lg hover:bg-[#d4dc1a] transition-colors"
            >
              Let&apos;s do this <Rocket className="w-5 h-5" aria-hidden="true" />
            </a>
            <p className="text-white/40 text-sm mt-6">Or reach out directly: vera.maag@ecoplanet.tech</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-100">
        <div className="max-w-screen-xl mx-auto px-6 md:px-16 flex items-center justify-between">
          <img src="/ecoplanet-logo.svg" alt="ecoplanet" className="h-6 opacity-30" />
          <p className="text-xs text-gray-300">This offer is confidential and intended for Yannick Dederichs only</p>
        </div>
      </footer>
    </div>
  );
}
