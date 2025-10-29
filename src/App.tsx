import { useState } from "react";
import { ShoppingCart, Menu, X } from "lucide-react";
import svgPaths from "./imports/svg-kxlx7chjdl";
import imgRectangle42486 from "figma:asset/7fa0dbfeaba1836dbd1cc74831c45122fa4597ee.png";
import imgRectangle42484 from "figma:asset/4119647cd06e1e9256eda89e43a973c936710789.png";
import img67Cf827D2C6C72Dc540F83AdUntitled2400X2400Px1366X770Px181 from "figma:asset/569cd745ba1275064a1cef28f02698043c55057f.png";
import imgRectangle42483 from "figma:asset/79f8651369f3cc15b249590fd81f1b903390d724.png";
import imgRectangle42485 from "figma:asset/ec7c023dd33fe0a5f29d2b5196da90241612535e.png";
import imgComponent16 from "figma:asset/4ea2d64c5bf79ee45bda5ebdd92918aee2a9ed9b.png";
import imgComponent17 from "figma:asset/b51c7be8cc34f3b06137c24e1551dae1170ccfb6.png";
import imgLogo from "figma:asset/8ae2b0e7cfa45b5837323c269a0fcf261ea020e6.png";

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  return (
    <div className="bg-[#0441fe] relative min-h-screen w-full overflow-x-hidden">
      {/* Navigation Header */}
      <div className="fixed top-0 left-0 right-0 z-50 px-4 pt-6">
        <div className="max-w-[1238px] mx-auto">
          <nav className="bg-[#fed97c] rounded-[38px] shadow-[-1px_-1px_0px_0px_#000000,2px_-2px_0px_0px_#000000,2px_6px_0px_0px_#000000] relative">
            <div className="flex items-center justify-between px-4 md:px-6 py-2 md:py-3">
              {/* Logo */}
              <div className="h-[43px] w-[96px]">
                <img src={imgLogo} alt="Goooey Logo" className="w-full h-full object-cover" />
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center gap-8 font-['Bricolage_Grotesque:SemiBold',sans-serif] font-semibold text-[16px] text-black">
                <button className="hover:opacity-70 transition-opacity">Home</button>
                <button className="hover:opacity-70 transition-opacity">Packs</button>
                <button className="hover:opacity-70 transition-opacity">Audition</button>
                <button className="hover:opacity-70 transition-opacity">Contact</button>
              </div>

              {/* Right Side Actions */}
              <div className="flex items-center gap-4">
                {/* Cart Icon */}
                <button className="relative hover:opacity-70 transition-opacity">
                  <ShoppingCart className="w-6 h-6 text-black" strokeWidth={2} />
                  <div className="absolute -top-1 -right-1 bg-[#FF003C] border border-white rounded-full w-[11px] h-[11px] flex items-center justify-center">
                    <span className="text-white text-[8px] font-['Bricolage_Grotesque:Medium',sans-serif]">0</span>
                  </div>
                </button>

                {/* Login Button */}
                <button className="hidden md:block bg-[#f9f9f9] px-6 py-2 rounded-full shadow-[1px_2px_0px_0px_#000000] font-['Bricolage_Grotesque:Bold',sans-serif] font-bold text-[16px] text-black hover:translate-y-0.5 hover:shadow-[1px_1px_0px_0px_#000000] transition-all">
                  Login
                </button>

                {/* Mobile Menu Button */}
                <button
                  className="md:hidden"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                  {mobileMenuOpen ? (
                    <X className="w-6 h-6 text-black" />
                  ) : (
                    <Menu className="w-6 h-6 text-black" />
                  )}
                </button>
              </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
              <div className="md:hidden border-t border-black/10 px-4 py-4">
                <div className="flex flex-col gap-4 font-['Bricolage_Grotesque:SemiBold',sans-serif] font-semibold text-[16px] text-black">
                  <button className="text-left hover:opacity-70 transition-opacity">Home</button>
                  <button className="text-left hover:opacity-70 transition-opacity">Packs</button>
                  <button className="text-left hover:opacity-70 transition-opacity">Audition</button>
                  <button className="text-left hover:opacity-70 transition-opacity">Contact</button>
                  <button className="bg-[#f9f9f9] px-6 py-2 rounded-full shadow-[1px_2px_0px_0px_#000000] font-['Bricolage_Grotesque:Bold',sans-serif] font-bold text-black text-center mt-2">
                    Login
                  </button>
                </div>
              </div>
            )}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="pt-32 pb-16 px-4">
        {/* Hero Section - Story of Goooey */}
        <section className="max-w-7xl mx-auto mb-32">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Column - Text */}
            <div className="space-y-8 order-2 lg:order-1 text-center lg:text-left">
              <div className="space-y-2">
                <h1 className="font-['Bricolage_Grotesque:96pt_ExtraBold',sans-serif] font-extrabold text-[42px] md:text-[62px] text-white uppercase leading-tight">
                  story of
                </h1>
                <div className="font-['Mentimun:Regular',sans-serif] text-[42px] md:text-[62px] text-[#fed97c] not-italic">
                  Goooey
                </div>
              </div>

              <p className="font-['Bricolage_Grotesque:Medium',sans-serif] font-medium text-[18px] md:text-[24px] lg:text-[32px] text-white leading-[38.4px]">
                <span className="font-['Bricolage_Grotesque:Bold',sans-serif] font-bold">Goooey Treats isn't just a snack, it's an experience!</span> Founded by <span className="font-bold">Mich Vital,</span> a passionate entrepreneur with a vision to create the gooiest, most delicious treats, Goooey has grown into a <span className="font-bold">must-have brand</span> for dessert lovers everywhere.
              </p>

              {/* Decorative Arrows */}
              <div className="hidden lg:block absolute right-[200px] top-[600px]">
                <svg width="93" height="43" viewBox="0 0 93 43" fill="none" className="text-[#FFEB7A]">
                  <path d={svgPaths.p3587c480} fill="currentColor" />
                </svg>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative w-full max-w-md" style={{ transform: 'rotate(-7deg)' }}>
                <img
                  src={imgRectangle42483}
                  alt="Goooey Treats"
                  className="w-full h-auto rounded-[42px] border-[3px] border-white shadow-2xl"
                />
              </div>
            </div>
          </div>

          {/* Decorative Yellow Stars */}
          <div className="hidden lg:block absolute left-[100px] top-[300px]">
            <svg width="22" height="36" viewBox="0 0 22 36" fill="none">
              <path d={svgPaths.p2b888c00} fill="#FFEB7A" />
            </svg>
          </div>
        </section>

        {/* Wavy Divider with Text */}
        <section className="relative h-[200px] md:h-[253px] overflow-hidden my-16">
          <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 1440 253" fill="none">
            <path d={svgPaths.p1e64d2c0} stroke="black" strokeWidth="70" />
            <text className="fill-white font-['Bricolage_Grotesque:Bold',sans-serif]" fontSize="32" fontWeight="bold">
              <textPath href="#wavePath" startOffset="50%" textAnchor="middle">
                WHERE TASTE COMES ALIVE • WHERE TASTE COMES ALIVE •
              </textPath>
            </text>
            <defs>
              <path id="wavePath" d={svgPaths.p1e64d2c0} />
            </defs>
          </svg>
        </section>

        {/* Why Goooey Section */}
        <section className="relative bg-[#FED97C] rounded-t-[200px] px-4 md:px-8 lg:px-16 py-20 md:py-32 -mx-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Text Content */}
              <div className="space-y-8">
                <div className="space-y-2">
                  <h2 className="font-['Bricolage_Grotesque:96pt_ExtraBold',sans-serif] font-extrabold text-[32px] md:text-[42px] text-black uppercase">
                    why
                  </h2>
                  <div className="font-['Mentimun:Regular',sans-serif] text-[32px] md:text-[42px] text-[#0441fe] not-italic">
                    Goooey
                  </div>
                </div>

                <div className="space-y-4 font-['Bricolage_Grotesque:Medium',sans-serif] font-medium text-[18px] text-black leading-[24px]">
                  <p>
                    <span className="font-['Bricolage_Grotesque:Bold',sans-serif] font-bold">Handcrafted with Love</span> – Each treat is made with high-quality ingredients and a <span className="font-['Bricolage_Grotesque:Bold',sans-serif] font-bold">perfect balance of crispy and gooey.</span>
                  </p>
                  <p>
                    <span className="font-['Bricolage_Grotesque:Bold',sans-serif] font-bold">One-of-a-Kind Flavours –</span> We take the classic marshmallow treat and <span className="font-['Bricolage_Grotesque:Bold',sans-serif] font-bold">push the boundaries of flavour innovation.</span>
                  </p>
                  <p>
                    <span className="font-['Bricolage_Grotesque:Bold',sans-serif] font-bold">Community First –</span> We believe in giving back, supporting local initiatives, and making every moment sweeter.
                  </p>
                </div>

                {/* Contact Us Button */}
                <button className="bg-[#0441fe] text-white px-6 py-3 rounded-full shadow-[2px_2px_0px_0px_#000000] font-['Bricolage_Grotesque:Bold',sans-serif] font-bold text-[18px] inline-flex items-center gap-3 hover:translate-y-0.5 hover:shadow-[1px_1px_0px_0px_#000000] transition-all">
                  Contact Us
                  <div className="bg-black rounded-full p-2">
                    <svg width="16" height="16" viewBox="0 0 32 32" fill="none">
                      <path d={svgPaths.p14a25600} fill="white" />
                    </svg>
                  </div>
                </button>
              </div>

              {/* Images */}
              <div className="relative grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div style={{ transform: 'rotate(7deg)' }}>
                    <img
                      src={imgRectangle42484}
                      alt="Goooey treats"
                      className="w-full h-auto rounded-[42px] border-4 border-white shadow-xl"
                    />
                  </div>
                </div>
                <div className="space-y-4 mt-12">
                  <div style={{ transform: 'rotate(-7deg)' }}>
                    <img
                      src={imgRectangle42486}
                      alt="Goooey treats close-up"
                      className="w-full h-auto rounded-[42px] border-4 border-white shadow-xl"
                    />
                  </div>
                  <div style={{ transform: 'rotate(7deg)' }}>
                    <img
                      src={imgRectangle42485}
                      alt="More treats"
                      className="w-full h-auto rounded-[42px] border-[3px] border-white shadow-xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative wave */}
          <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none">
            <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1440 100">
              <path d="M0,50 Q360,0 720,50 T1440,50 L1440,100 L0,100 Z" fill="#0441fe" />
            </svg>
          </div>
        </section>

        {/* Meet the Founders Section */}
        <section className="relative px-4 md:px-8 lg:px-16 py-20 md:py-32">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-['Bricolage_Grotesque:96pt_ExtraBold',sans-serif] font-extrabold text-[42px] md:text-[62px] text-white uppercase">
                meet the
              </h2>
              <div className="font-['Mentimun:Regular',sans-serif] text-[42px] md:text-[62px] text-[#fed97c] not-italic">
                Founders
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
              {/* Founder 1 */}
              <div className="relative group">
                <div className="bg-white rounded-[42px] border-[3px] border-white shadow-2xl overflow-hidden transform transition-all duration-300 hover:scale-105">
                  <div className="aspect-[350/400] relative">
                    <img
                      src={imgComponent16}
                      alt="Mich Vital"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="bg-white p-6 text-center space-y-4">
                    <h3 className="font-['Bricolage_Grotesque:Bold',sans-serif] font-bold text-[18px] text-black">
                      Mich Vital
                    </h3>
                    <p className="font-['Bricolage_Grotesque:Medium',sans-serif] font-medium text-[14px] text-black/60">
                      The heart behind Goooey, crafting joy one treat at a time.
                    </p>
                    <div className="flex justify-center gap-4">
                      {/* Social Icons */}
                      <button className="bg-[#0441fe] rounded-full w-8 h-8 flex items-center justify-center shadow-[1px_1px_0px_0px_#000000] hover:translate-y-0.5 transition-all">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                          <path d={svgPaths.p15e84380} />
                        </svg>
                      </button>
                      <button className="bg-[#0441fe] rounded-full w-8 h-8 flex items-center justify-center shadow-[1px_1px_0px_0px_#000000] hover:translate-y-0.5 transition-all">
                        <svg width="18" height="18" viewBox="0 0 32 32" fill="white">
                          <path d={svgPaths.p39412100} />
                          <path d={svgPaths.p33abd200} />
                          <path d={svgPaths.p26ae9600} />
                        </svg>
                      </button>
                      <button className="bg-[#0441fe] rounded-full w-8 h-8 flex items-center justify-center shadow-[1px_1px_0px_0px_#000000] hover:translate-y-0.5 transition-all">
                        <svg width="18" height="18" viewBox="0 0 32 32" fill="white">
                          <path d={svgPaths.p3195b300} />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Founder 2 */}
              <div className="relative group">
                <div className="bg-white rounded-[42px] border-[3px] border-white shadow-2xl overflow-hidden transform transition-all duration-300 hover:scale-105">
                  <div className="aspect-[350/400] relative">
                    <img
                      src={imgComponent17}
                      alt='Sky "Directs" Palmer'
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="bg-white p-6 text-center space-y-4">
                    <h3 className="font-['Bricolage_Grotesque:Bold',sans-serif] font-bold text-[18px] text-black">
                      Sky "Directs" Palmer
                    </h3>
                    <p className="font-['Bricolage_Grotesque:Medium',sans-serif] font-medium text-[14px] text-black/60">
                      A visionary shaping the brand's creative direction and story telling.
                    </p>
                    <div className="flex justify-center gap-4">
                      <button className="bg-[#0441fe] rounded-full w-8 h-8 flex items-center justify-center shadow-[1px_1px_0px_0px_#000000] hover:translate-y-0.5 transition-all">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                          <path d={svgPaths.p15e84380} />
                        </svg>
                      </button>
                      <button className="bg-[#0441fe] rounded-full w-8 h-8 flex items-center justify-center shadow-[1px_1px_0px_0px_#000000] hover:translate-y-0.5 transition-all">
                        <svg width="18" height="18" viewBox="0 0 32 32" fill="white">
                          <path d={svgPaths.p39412100} />
                          <path d={svgPaths.p33abd200} />
                          <path d={svgPaths.p26ae9600} />
                        </svg>
                      </button>
                      <button className="bg-[#0441fe] rounded-full w-8 h-8 flex items-center justify-center shadow-[1px_1px_0px_0px_#000000] hover:translate-y-0.5 transition-all">
                        <svg width="18" height="18" viewBox="0 0 32 32" fill="white">
                          <path d={svgPaths.p3195b300} />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Founder 3 */}
              <div className="relative group">
                <div className="bg-white rounded-[42px] border-[3px] border-white shadow-2xl overflow-hidden transform transition-all duration-300 hover:scale-105">
                  <div className="aspect-[350/400] relative">
                    <img
                      src={imgRectangle42486}
                      alt="Chaysun Sky & Brysun Palmer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="bg-white p-6 text-center space-y-4">
                    <h3 className="font-['Bricolage_Grotesque:Bold',sans-serif] font-bold text-[18px] text-black">
                      Chaysun Sky & Brysun Palmer
                    </h3>
                    <p className="font-['Bricolage_Grotesque:Medium',sans-serif] font-medium text-[14px] text-black/60">
                      The next generation of Goooey, helping to expand the dream and innovate new flavors.
                    </p>
                    <div className="flex justify-center gap-4">
                      <button className="bg-[#0441fe] rounded-full w-8 h-8 flex items-center justify-center shadow-[1px_1px_0px_0px_#000000] hover:translate-y-0.5 transition-all">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                          <path d={svgPaths.p15e84380} />
                        </svg>
                      </button>
                      <button className="bg-[#0441fe] rounded-full w-8 h-8 flex items-center justify-center shadow-[1px_1px_0px_0px_#000000] hover:translate-y-0.5 transition-all">
                        <svg width="18" height="18" viewBox="0 0 32 32" fill="white">
                          <path d={svgPaths.p39412100} />
                          <path d={svgPaths.p33abd200} />
                          <path d={svgPaths.p26ae9600} />
                        </svg>
                      </button>
                      <button className="bg-[#0441fe] rounded-full w-8 h-8 flex items-center justify-center shadow-[1px_1px_0px_0px_#000000] hover:translate-y-0.5 transition-all">
                        <svg width="18" height="18" viewBox="0 0 32 32" fill="white">
                          <path d={svgPaths.p3195b300} />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Story Section */}
        <section className="relative px-4 md:px-8 lg:px-16 py-12 md:py-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <p className="font-['Bricolage_Grotesque:Medium',sans-serif] font-medium text-[18px] text-white leading-[24px] mb-8">
                  Alongside her family <span className="font-['Bricolage_Grotesque:Bold',sans-serif] font-bold">Sky Directs, Chaysun Sky, and Brysun Palmer</span> Michelle turned a simple love for <span className="font-['Bricolage_Grotesque:Bold',sans-serif] font-bold">homemade marshmallow treats</span> into a movement that brings <span className="font-['Bricolage_Grotesque:Bold',sans-serif] font-bold">happiness in every bite.</span>
                </p>
                <button className="bg-black text-white px-6 py-3 rounded-full shadow-[2px_2px_0px_0px_#ffffff] font-['Bricolage_Grotesque:Bold',sans-serif] font-bold text-[18px] inline-flex items-center gap-3 hover:translate-y-0.5 hover:shadow-[1px_1px_0px_0px_#ffffff] transition-all">
                  Contact Us
                  <div className="bg-[#0441fe] rounded-full p-2 border border-white">
                    <svg width="16" height="16" viewBox="0 0 32 32" fill="none">
                      <path d={svgPaths.p14a25600} fill="white" />
                    </svg>
                  </div>
                </button>
              </div>
              <div className="order-1 lg:order-2 flex justify-center">
                <div style={{ transform: 'rotate(-7deg)' }}>
                  <img
                    src={imgRectangle42483}
                    alt="Mich with family"
                    className="w-full max-w-md h-auto rounded-[42px] border-[3px] border-white shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quote Section */}
        <section className="relative px-4 md:px-8 py-20 md:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <p className="font-['Mentimun:Regular',sans-serif] not-italic text-[28px] md:text-[42px] text-white tracking-[-1.26px] leading-[56px]">
              From a simple kitchen creation to a <span className="text-[#fed97c]">nationwide obsession</span>, Goooey Treats is here to <span className="text-[#fed97c]">sweeten every moment</span> of life!
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative px-4 pb-32 flex justify-center">
          <button className="bg-black text-white px-8 py-4 rounded-full shadow-[2px_2px_0px_0px_#fed97c] font-['Bricolage_Grotesque:Bold',sans-serif] font-bold text-[18px] inline-flex items-center gap-3 hover:translate-y-0.5 hover:shadow-[1px_1px_0px_0px_#fed97c] transition-all">
            Reach Out
            <div className="bg-black rounded-full p-2 border border-white">
              <svg width="16" height="16" viewBox="0 0 32 32" fill="none">
                <circle cx="16" cy="16" r="15.5" stroke="white" fill="black" />
                <path d={svgPaths.p14a25600} fill="white" />
              </svg>
            </div>
          </button>
        </section>
      </div>

      {/* Footer */}
      <footer className="relative bg-black rounded-t-[200px] pt-32 pb-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Logo */}
          <div className="flex justify-center mb-16">
            <img
              src={img67Cf827D2C6C72Dc540F83AdUntitled2400X2400Px1366X770Px181}
              alt="Goooey Logo"
              className="w-48 h-auto"
            />
          </div>

          {/* Newsletter & Links */}
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Links Column 1 */}
            <div className="space-y-6">
              <div className="font-['Bricolage_Grotesque:Medium',sans-serif] font-medium text-[16px] text-white space-y-4">
                <button className="block hover:opacity-70 transition-opacity">Home</button>
                <button className="block hover:opacity-70 transition-opacity">About</button>
                <button className="block hover:opacity-70 transition-opacity">Contact</button>
                <button className="block hover:opacity-70 transition-opacity">Join the team</button>
              </div>
            </div>

            {/* Links Column 2 */}
            <div className="space-y-6">
              <div className="font-['Bricolage_Grotesque:Medium',sans-serif] font-medium text-[16px] text-white space-y-4">
                <button className="block hover:opacity-70 transition-opacity">Wholesale</button>
                <button className="block hover:opacity-70 transition-opacity">Franchise</button>
                <button className="block hover:opacity-70 transition-opacity">Corporate Catering</button>
                <button className="block hover:opacity-70 transition-opacity">Fundraising</button>
              </div>
            </div>

            {/* Newsletter */}
            <div className="space-y-6">
              <p className="capitalize font-['Mentimun:Regular',sans-serif] text-[24px] text-white tracking-[0.48px]">
                Get in <span className="text-[#ffd800]">touch</span>
              </p>
              <form onSubmit={handleNewsletterSubmit} className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email here..."
                  className="w-full bg-[#0441fe] text-white placeholder-white/60 px-6 py-4 rounded-full border-2 border-white shadow-[0px_3px_0px_0px_#000000] font-['Bricolage_Grotesque:Medium',sans-serif] focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-white text-black px-6 py-2 rounded-full font-['Bricolage_Grotesque:Bold',sans-serif] font-bold inline-flex items-center gap-2 hover:bg-gray-100 transition-colors"
                >
                  Submit
                  <div className="bg-black rounded-full p-1">
                    <svg width="16" height="16" viewBox="0 0 32 32" fill="none">
                      <path d={svgPaths.p14a25600} fill="white" />
                    </svg>
                  </div>
                </button>
              </form>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-4 mb-12">
            <button className="bg-white rounded-full w-11 h-11 flex items-center justify-center shadow-[2px_2px_0px_0px_#0441FE] hover:translate-y-0.5 hover:shadow-[1px_1px_0px_0px_#0441FE] transition-all">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="black">
                <path d={svgPaths.p15e84380} />
              </svg>
            </button>
            <button className="bg-white rounded-full w-11 h-11 flex items-center justify-center border border-[#FFD800] shadow-[2px_2px_0px_0px_#0441FE] hover:translate-y-0.5 hover:shadow-[1px_1px_0px_0px_#0441FE] transition-all">
              <svg width="24" height="24" viewBox="0 0 32 32" fill="black">
                <path d={svgPaths.p15364d00} />
                <path d={svgPaths.p31f76340} />
                <path d={svgPaths.p21a96b00} />
              </svg>
            </button>
            <button className="bg-white rounded-full w-11 h-11 flex items-center justify-center border border-[#FFD800] shadow-[2px_2px_0px_0px_#0441FE] hover:translate-y-0.5 hover:shadow-[1px_1px_0px_0px_#0441FE] transition-all">
              <svg width="24" height="24" viewBox="0 0 32 32" fill="black">
                <path d={svgPaths.p34bed000} />
              </svg>
            </button>
          </div>

          {/* Scroll to top button */}
          <div className="flex justify-center">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="bg-white rounded-full w-16 h-16 flex items-center justify-center shadow-[2px_2px_0px_0px_#0441FE] hover:translate-y-0.5 hover:shadow-[1px_1px_0px_0px_#0441FE] transition-all"
            >
              <svg width="32" height="32" viewBox="0 0 74 74" fill="none">
                <circle cx="37" cy="37" r="36" fill="white" stroke="#0441FE" strokeWidth="2" />
                <path d={svgPaths.p78d0e80} fill="#0441FE" />
              </svg>
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
