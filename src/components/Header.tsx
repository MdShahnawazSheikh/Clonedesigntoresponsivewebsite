import { useState } from "react";
import { Menu, X, ShoppingCart } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-6">
      <div className="max-w-7xl mx-auto">
        <nav className="bg-[#fed97c] rounded-[38px] shadow-[-1px_-1px_0px_0px_#000000,2px_-2px_0px_0px_#000000,2px_6px_0px_0px_#000000] relative">
          <div className="flex items-center justify-between px-4 md:px-6 py-2 md:py-3">
            {/* Logo */}
            <div className="flex-shrink-0">
              <div className="h-10 md:h-12 w-20 md:w-24 relative">
                <svg viewBox="0 0 96 43" className="w-full h-full">
                  <text x="0" y="30" className="fill-black font-['Mentimun:Regular',sans-serif] text-[24px]">Goooey</text>
                </svg>
              </div>
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
                <ShoppingCart className="w-6 h-6 text-black" />
                <div className="absolute -top-1 -right-1 bg-[#FF003C] border border-white rounded-full w-4 h-4 flex items-center justify-center">
                  <span className="text-white text-[8px] font-['Bricolage_Grotesque:Medium',sans-serif]">0</span>
                </div>
              </button>

              {/* Login Button */}
              <button className="hidden md:block bg-[#f9f9f9] px-6 py-2 rounded-full shadow-[1px_2px_0px_0px_#000000] font-['Bricolage_Grotesque:Bold',sans-serif] font-bold text-black hover:translate-y-0.5 hover:shadow-[1px_1px_0px_0px_#000000] transition-all">
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
    </header>
  );
}
