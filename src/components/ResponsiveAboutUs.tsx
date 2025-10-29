import { useState } from "react";
import Header from "./Header";
import imgRectangle42486 from "figma:asset/7fa0dbfeaba1836dbd1cc74831c45122fa4597ee.png";
import imgRectangle42484 from "figma:asset/4119647cd06e1e9256eda89e43a973c936710789.png";
import imgRectangle42483 from "figma:asset/79f8651369f3cc15b249590fd81f1b903390d724.png";
import imgRectangle42485 from "figma:asset/ec7c023dd33fe0a5f29d2b5196da90241612535e.png";
import imgComponent16 from "figma:asset/4ea2d64c5bf79ee45bda5ebdd92918aee2a9ed9b.png";
import imgComponent17 from "figma:asset/b51c7be8cc34f3b06137c24e1551dae1170ccfb6.png";
import img67Cf827D2C6C72Dc540F83AdUntitled2400X2400Px1366X770Px181 from "figma:asset/569cd745ba1275064a1cef28f02698043c55057f.png";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export default function ResponsiveAboutUs() {
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  return (
    <div className="bg-[#0441fe] min-h-screen w-full overflow-x-hidden">
      {/* Header */}
      <Header />

      {/* Spacer for fixed header */}
      <div className="h-24 md:h-32" />

      {/* Hero Section - Story of Goooey */}
      <section className="relative px-4 md:px-8 lg:px-16 py-12 md:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Column - Text */}
            <div className="space-y-8 order-2 lg:order-1">
              <div className="space-y-2 text-center lg:text-left">
                <h1 className="font-['Bricolage_Grotesque:96pt_ExtraBold',sans-serif] font-extrabold text-[42px] md:text-[62px] text-white uppercase leading-tight">
                  story of
                </h1>
                <div className="font-['Mentimun:Regular',sans-serif] text-[42px] md:text-[62px] text-[#fed97c] not-italic">
                  Goooey
                </div>
              </div>

              <p className="font-['Bricolage_Grotesque:Medium',sans-serif] font-medium text-[18px] md:text-[24px] lg:text-[32px] text-white leading-relaxed">
                <span className="font-['Bricolage_Grotesque:Bold',sans-serif] font-bold">Goooey Treats isn't just a snack, it's an experience!</span> Founded by <span className="font-bold">Mich Vital,</span> a passionate entrepreneur with a vision to create the gooiest, most delicious treats, Goooey has grown into a <span className="font-bold">must-have brand</span> for dessert lovers everywhere.
              </p>
            </div>

            {/* Right Column - Image */}
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative w-full max-w-md rotate-[-7deg]">
                <ImageWithFallback
                  src={imgRectangle42483}
                  alt="Goooey Treats"
                  className="w-full h-auto rounded-[42px] border-[3px] border-white shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 right-10 hidden lg:block">
          <div className="w-20 h-20 animate-bounce">
            <svg viewBox="0 0 90 41" className="text-[#FFEB7A]">
              <path d="M0.72749 4.48535C0.196148 4.636 -0.112469 5.18886 0.0381762 5.7202C0.188821 6.25154 0.741681 6.56016 1.27302 6.40951L1.00026 5.44743L0.72749 4.48535ZM41.6327 15.0629L42.5361 15.4918L42.5361 15.4918L41.6327 15.0629ZM47.8042 41.5997L47.6033 42.5793L47.6033 42.5793L47.8042 41.5997ZM92.7044 28.5123C92.8635 27.9834 92.5636 27.4258 92.0347 27.2667L83.4158 24.6755C82.8869 24.5165 82.3292 24.8164 82.1702 25.3453C82.0112 25.8742 82.3111 26.4318 82.84 26.5908L90.5012 28.8941L88.1979 36.5554C88.0389 37.0843 88.3387 37.6419 88.8676 37.801C89.3965 37.96 89.9542 37.6601 90.1132 37.1312L92.7044 28.5123ZM1.00026 5.44743C1.27302 6.40951 1.27305 6.40951 1.27327 6.40944C1.27361 6.40935 1.27402 6.40923 1.2747 6.40904C1.27605 6.40866 1.27819 6.40805 1.28111 6.40723C1.28695 6.40558 1.29592 6.40306 1.30796 6.39968C1.33205 6.39293 1.36842 6.38278 1.41664 6.36942C1.51309 6.34271 1.65691 6.3032 1.84457 6.25255C2.21991 6.15123 2.77051 6.00535 3.46809 5.82806C4.8635 5.47343 6.84565 4.99347 9.18847 4.49333C13.8815 3.49147 19.9907 2.41535 25.7206 2.09498C28.5854 1.9348 31.3305 1.9651 33.7428 2.27936C36.1665 2.59509 38.1834 3.18876 39.6448 4.10441C41.0744 5.00016 41.9647 6.1941 42.2293 7.80021C42.5016 9.45305 42.1333 11.677 40.7294 14.634L41.6327 15.0629L42.5361 15.4918C44.031 12.343 44.5671 9.68716 44.2027 7.47508C43.8305 5.21626 42.5429 3.56015 40.7067 2.40962C38.9023 1.279 36.5656 0.630183 34.0012 0.296114C31.4254 -0.0394318 28.5479 -0.06623 25.609 0.0980971C19.7313 0.426733 13.5083 1.52607 8.77091 2.5374C6.39854 3.04386 4.39097 3.52994 2.97546 3.88968C2.26758 4.06959 1.70742 4.21799 1.32337 4.32165C1.13133 4.37349 0.983296 4.41415 0.882808 4.44198C0.832563 4.4559 0.794202 4.46661 0.768169 4.47391C0.755152 4.47755 0.745217 4.48035 0.738419 4.48227C0.735019 4.48322 0.732405 4.48396 0.730581 4.48448C0.729669 4.48474 0.728896 4.48495 0.728439 4.48508C0.727865 4.48525 0.72749 4.48535 1.00026 5.44743ZM41.6327 15.0629L40.7294 14.634C38.6089 19.1002 36.6199 25.2099 36.9762 30.638C37.1556 33.3702 37.9337 35.9888 39.6488 38.124C41.3721 40.2693 43.9668 41.8337 47.6033 42.5793L47.8042 41.5997L48.005 40.6201C44.7396 39.9506 42.5894 38.5911 41.2081 36.8715C39.8187 35.1418 39.1326 32.9543 38.9719 30.507C38.6482 25.5759 40.4753 19.8324 42.5361 15.4918L41.6327 15.0629ZM47.8042 41.5997L47.6033 42.5793C51.271 43.3314 55.9151 42.8082 60.7226 41.6773C65.5557 40.5404 70.6678 38.7608 75.3227 36.9021C79.9812 35.042 84.2026 33.0942 87.2583 31.6121C88.7867 30.8707 90.025 30.2452 90.8821 29.8045C91.3106 29.5842 91.644 29.41 91.8708 29.2905C91.9842 29.2308 92.071 29.1848 92.1298 29.1535C92.1591 29.1379 92.1815 29.126 92.1966 29.1179C92.2042 29.1138 92.21 29.1107 92.214 29.1086C92.2159 29.1075 92.2175 29.1067 92.2185 29.1061C92.2191 29.1058 92.2195 29.1056 92.2198 29.1055C92.2201 29.1053 92.2204 29.1051 91.7468 28.2244C91.2732 27.3436 91.2732 27.3436 91.2731 27.3437C91.2729 27.3438 91.2727 27.3439 91.2723 27.3441C91.2715 27.3446 91.2703 27.3452 91.2686 27.3461C91.2653 27.3479 91.2601 27.3507 91.2532 27.3544C91.2392 27.3618 91.2181 27.3731 91.1901 27.3881C91.1339 27.4179 91.0497 27.4626 90.939 27.5209C90.7176 27.6374 90.39 27.8086 89.9675 28.0259C89.1225 28.4604 87.8983 29.0788 86.3855 29.8126C83.3588 31.2806 79.1827 33.2073 74.581 35.0447C69.9757 36.8836 64.9649 38.6248 60.2647 39.7304C55.5388 40.8421 51.2392 41.2832 48.005 40.6201L47.8042 41.5997Z" fill="currentColor"/>
            </svg>
          </div>
        </div>
      </section>

      {/* Curved Divider with Text */}
      <section className="relative h-32 md:h-64 overflow-hidden">
        <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 1440 253">
          <path d="M-23.502 131C-23.502 131 187.114 84.0622 289.998 88.4997C413.417 93.8228 466.253 185.435 589.498 177C690.437 170.091 727 97.5 833.5 93C944 88.331 987.283 227.826 1093.5 201.5C1166.86 183.319 1168.01 76.424 1243 67C1317.99 57.576 1343.52 206.257 1439 201.5C1537.31 196.602 1529.06 44.9304 1626.5 30.9999C1740.62 14.6838 1775.8 176.643 1891 181C2014.41 185.667 2063.13 72.878 2186.5 78.4998C2305.9 83.9408 2310.65 222.713 2428 200C2490 188 2650 45.9997 2650 45.9997" stroke="black" strokeWidth="70"/>
          <text className="fill-white font-['Bricolage_Grotesque:Bold',sans-serif]" fontSize="48" style={{ dominantBaseline: 'middle' }}>
            <textPath href="#curve" startOffset="50%" textAnchor="middle">
              WHERE TASTE COMES ALIVE • WHERE TASTE COMES ALIVE •
            </textPath>
          </text>
        </svg>
      </section>

      {/* Why Goooey Section */}
      <section className="relative bg-[#FED97C] px-4 md:px-8 lg:px-16 py-20 md:py-32">
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

              <div className="space-y-4 font-['Bricolage_Grotesque:Medium',sans-serif] font-medium text-[18px] text-black leading-relaxed">
                <p>
                  <span className="font-bold">Handcrafted with Love</span> – Each treat is made with high-quality ingredients and a <span className="font-bold">perfect balance of crispy and gooey.</span>
                </p>
                <p>
                  <span className="font-bold">One-of-a-Kind Flavours –</span> We take the classic marshmallow treat and <span className="font-bold">push the boundaries of flavour innovation.</span>
                </p>
                <p>
                  <span className="font-bold">Community First –</span> We believe in giving back, supporting local initiatives, and making every moment sweeter.
                </p>
              </div>

              <button className="bg-[#0441fe] text-white px-6 py-3 rounded-full shadow-[2px_2px_0px_0px_#000000] font-['Bricolage_Grotesque:Bold',sans-serif] font-bold inline-flex items-center gap-3 hover:translate-y-0.5 hover:shadow-[1px_1px_0px_0px_#000000] transition-all">
                Contact Us
                <div className="bg-black rounded-full p-2">
                  <svg width="16" height="16" viewBox="0 0 32 32" fill="none">
                    <path d="M10.6896 17.3172C10.3126 17.4886 10.1458 17.9333 10.3172 18.3104C10.4886 18.6874 10.9333 18.8542 11.3104 18.6828L11 18L10.6896 17.3172ZM22.7022 13.2633C22.8477 12.8755 22.6512 12.4432 22.2633 12.2978L15.9431 9.92767C15.5553 9.78223 15.123 9.97873 14.9775 10.3666C14.8321 10.7544 15.0286 11.1867 15.4164 11.3322L21.0344 13.4389L18.9277 19.0569C18.7822 19.4447 18.9787 19.877 19.3666 20.0225C19.7544 20.1679 20.1867 19.9714 20.3322 19.5836L22.7022 13.2633ZM11 18L11.3104 18.6828L22.3104 13.6828L22 13L21.6896 12.3172L10.6896 17.3172L11 18Z" fill="white"/>
                  </svg>
                </div>
              </button>
            </div>

            {/* Images */}
            <div className="relative grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <ImageWithFallback
                  src={imgRectangle42484}
                  alt="Goooey treats"
                  className="w-full h-auto rounded-[42px] border-4 border-white rotate-[7deg] shadow-xl"
                />
              </div>
              <div className="space-y-4 mt-12">
                <ImageWithFallback
                  src={imgRectangle42486}
                  alt="Goooey treats close-up"
                  className="w-full h-auto rounded-[42px] border-4 border-white rotate-[-353deg] shadow-xl"
                />
                <ImageWithFallback
                  src={imgRectangle42485}
                  alt="More treats"
                  className="w-full h-auto rounded-[42px] border-[3px] border-white rotate-[7deg] shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Decorative wave */}
        <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none">
          <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1440 100">
            <path d="M0,50 Q360,0 720,50 T1440,50 L1440,100 L0,100 Z" fill="#0441fe"/>
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
            <FounderCard
              image={imgComponent16}
              name="Mich Vital"
              description="The heart behind Goooey, crafting joy one treat at a time."
            />

            {/* Founder 2 */}
            <FounderCard
              image={imgComponent17}
              name='Sky "Directs" Palmer'
              description="A visionary shaping the brand's creative direction and story telling."
            />

            {/* Founder 3 */}
            <FounderCard
              image={imgRectangle42486}
              name="Chaysun Sky & Brysun Palmer"
              description="The next generation of Goooey, helping to expand the dream and innovate new flavors."
            />
          </div>
        </div>
      </section>

      {/* Story Section with Mich */}
      <section className="relative px-4 md:px-8 lg:px-16 py-12 md:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <p className="font-['Bricolage_Grotesque:Medium',sans-serif] font-medium text-[18px] text-white leading-relaxed mb-8">
                Alongside her family <span className="font-bold">Sky Directs, Chaysun Sky, and Brysun Palmer</span> Michelle turned a simple love for <span className="font-bold">homemade marshmallow treats</span> into a movement that brings <span className="font-bold">happiness in every bite.</span>
              </p>
              <button className="bg-black text-white px-6 py-3 rounded-full shadow-[2px_2px_0px_0px_#fed97c] font-['Bricolage_Grotesque:Bold',sans-serif] font-bold inline-flex items-center gap-3 hover:translate-y-0.5 hover:shadow-[1px_1px_0px_0px_#fed97c] transition-all">
                Contact Us
                <div className="bg-[#0441fe] rounded-full p-2">
                  <svg width="16" height="16" viewBox="0 0 32 32" fill="none">
                    <path d="M10.6896 17.3172C10.3126 17.4886 10.1458 17.9333 10.3172 18.3104C10.4886 18.6874 10.9333 18.8542 11.3104 18.6828L11 18L10.6896 17.3172ZM22.7022 13.2633C22.8477 12.8755 22.6512 12.4432 22.2633 12.2978L15.9431 9.92767C15.5553 9.78223 15.123 9.97873 14.9775 10.3666C14.8321 10.7544 15.0286 11.1867 15.4164 11.3322L21.0344 13.4389L18.9277 19.0569C18.7822 19.4447 18.9787 19.877 19.3666 20.0225C19.7544 20.1679 20.1867 19.9714 20.3322 19.5836L22.7022 13.2633ZM11 18L11.3104 18.6828L22.3104 13.6828L22 13L21.6896 12.3172L10.6896 17.3172L11 18Z" fill="white"/>
                  </svg>
                </div>
              </button>
            </div>
            <div className="order-1 lg:order-2 flex justify-center">
              <ImageWithFallback
                src={imgRectangle42483}
                alt="Mich with family"
                className="w-full max-w-md h-auto rounded-[42px] border-[3px] border-white rotate-[-353deg] shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="relative px-4 md:px-8 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-['Mentimun:Regular',sans-serif] not-italic text-[28px] md:text-[42px] text-white tracking-[-1.26px] leading-relaxed">
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
              <circle cx="16" cy="16" r="15.5" stroke="white" fill="black"/>
              <path d="M10.6896 17.3172C10.3126 17.4886 10.1458 17.9333 10.3172 18.3104C10.4886 18.6874 10.9333 18.8542 11.3104 18.6828L11 18L10.6896 17.3172ZM22.7022 13.2633C22.8477 12.8755 22.6512 12.4432 22.2633 12.2978L15.9431 9.92767C15.5553 9.78223 15.123 9.97873 14.9775 10.3666C14.8321 10.7544 15.0286 11.1867 15.4164 11.3322L21.0344 13.4389L18.9277 19.0569C18.7822 19.4447 18.9787 19.877 19.3666 20.0225C19.7544 20.1679 20.1867 19.9714 20.3322 19.5836L22.7022 13.2633ZM11 18L11.3104 18.6828L22.3104 13.6828L22 13L21.6896 12.3172L10.6896 17.3172L11 18Z" fill="white"/>
            </svg>
          </div>
        </button>
      </section>

      {/* Footer */}
      <footer className="relative bg-black rounded-t-[200px] pt-32 pb-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Logo */}
          <div className="flex justify-center mb-16">
            <ImageWithFallback
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
                      <path d="M10.6896 17.3172C10.3126 17.4886 10.1458 17.9333 10.3172 18.3104C10.4886 18.6874 10.9333 18.8542 11.3104 18.6828L11 18L10.6896 17.3172ZM22.7022 13.2633C22.8477 12.8755 22.6512 12.4432 22.2633 12.2978L15.9431 9.92767C15.5553 9.78223 15.123 9.97873 14.9775 10.3666C14.8321 10.7544 15.0286 11.1867 15.4164 11.3322L21.0344 13.4389L18.9277 19.0569C18.7822 19.4447 18.9787 19.877 19.3666 20.0225C19.7544 20.1679 20.1867 19.9714 20.3322 19.5836L22.7022 13.2633ZM11 18L11.3104 18.6828L22.3104 13.6828L22 13L21.6896 12.3172L10.6896 17.3172L11 18Z" fill="white"/>
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
                <path d="M19.8044 7H16.7709V19.2608C16.7709 20.7217 15.6041 21.9218 14.1522 21.9218C12.7003 21.9218 11.5335 20.7217 11.5335 19.2608C11.5335 17.8261 12.6743 16.6522 14.0744 16.6V13.5217C10.989 13.5739 8.5 16.1043 8.5 19.2608C8.5 22.4435 11.0409 25 14.1781 25C17.3153 25 19.8562 22.4174 19.8562 19.2608V12.9739C20.997 13.8087 22.3971 14.3044 23.875 14.3305V11.2522C21.5934 11.1739 19.8044 9.29565 19.8044 7Z"/>
              </svg>
            </button>
            <button className="bg-white rounded-full w-11 h-11 flex items-center justify-center border border-[#FFD800] shadow-[2px_2px_0px_0px_#0441FE] hover:translate-y-0.5 hover:shadow-[1px_1px_0px_0px_#0441FE] transition-all">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="black">
                <path d="M22 11.8535C25.3064 11.8535 25.698 11.868 26.9983 11.926C28.2068 11.9791 28.8594 12.1822 29.2945 12.3514C29.8697 12.5737 30.2854 12.8444 30.7157 13.2747C31.1507 13.7097 31.4166 14.1206 31.639 14.6958C31.8082 15.1309 32.0112 15.7883 32.0644 16.992C32.1224 18.2972 32.1369 18.6887 32.1369 21.9903C32.1369 25.2968 32.1224 25.6883 32.0644 26.9887C32.0112 28.1972 31.8082 28.8498 31.639 29.2848C31.4166 29.8601 31.1459 30.2758 30.7157 30.706C30.2806 31.1411 29.8697 31.4069 29.2945 31.6293C28.8594 31.7985 28.202 32.0015 26.9983 32.0547C25.6932 32.1127 25.3016 32.1272 22 32.1272C18.6936 32.1272 18.302 32.1127 17.0017 32.0547C15.7932 32.0015 15.1406 31.7985 14.7055 31.6293C14.1303 31.4069 13.7146 31.1362 13.2843 30.706C12.8493 30.2709 12.5834 29.8601 12.361 29.2848C12.1918 28.8498 11.9888 28.1923 11.9356 26.9887C11.8776 25.6835 11.8631 25.2919 11.8631 21.9903C11.8631 18.6839 11.8776 18.2923 11.9356 16.992C11.9888 15.7835 12.1918 15.1309 12.361 14.6958C12.5834 14.1206 12.8541 13.7049 13.2843 13.2747C13.7194 12.8396 14.1303 12.5737 14.7055 12.3514C15.1406 12.1822 15.798 11.9791 17.0017 11.926C18.302 11.868 18.6936 11.8535 22 11.8535Z"/>
              </svg>
            </button>
            <button className="bg-white rounded-full w-11 h-11 flex items-center justify-center border border-[#FFD800] shadow-[2px_2px_0px_0px_#0441FE] hover:translate-y-0.5 hover:shadow-[1px_1px_0px_0px_#0441FE] transition-all">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="black">
                <path d="M24.8207 12.4C24.8207 12.4 24.6449 11.159 24.1035 10.6141C23.418 9.89691 22.6516 9.89339 22.3 9.85121C19.7828 9.66839 16.0035 9.66839 16.0035 9.66839H15.9965C15.9965 9.66839 12.2172 9.66839 9.7 9.85121C9.34844 9.89339 8.58203 9.89691 7.89648 10.6141C7.35508 11.159 7.18281 12.4 7.18281 12.4C7.18281 12.4 7 13.859 7 15.3145V16.6785C7 18.134 7.1793 19.593 7.1793 19.593C7.1793 19.593 7.35508 20.834 7.89297 21.3789C8.57852 22.0961 9.47852 22.0715 9.8793 22.1489C11.3207 22.286 16 22.3282 16 22.3282C16 22.3282 19.7828 22.3211 22.3 22.1418C22.6516 22.0996 23.418 22.0961 24.1035 21.3789C24.6449 20.834 24.8207 19.593 24.8207 19.593C24.8207 19.593 25 18.1375 25 16.6785V15.3145C25 13.859 24.8207 12.4 24.8207 12.4Z"/>
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
                <circle cx="37" cy="37" r="36" fill="white" stroke="#0441FE" strokeWidth="2"/>
                <path d="M35.2677 53.7814C35.2576 54.4717 35.8089 55.0395 36.4992 55.0496C37.1895 55.0598 37.7573 54.5084 37.7674 53.8182L36.5176 53.7998L35.2677 53.7814ZM37.8968 20.1292C37.4159 19.6339 36.6245 19.6223 36.1292 20.1032L28.0581 27.9403C27.5628 28.4212 27.5512 29.2126 28.0321 29.7079C28.5131 30.2032 29.3044 30.2148 29.7997 29.7339L36.974 22.7676L43.9403 29.9419C44.4212 30.4372 45.2126 30.4488 45.7079 29.9679C46.2032 29.4869 46.2148 28.6956 45.7339 28.2003L37.8968 20.1292ZM36.5176 53.7998L37.7674 53.8182L38.2499 21.0184L37 21L35.7501 20.9816L35.2677 53.7814L36.5176 53.7998Z" fill="#0441FE"/>
              </svg>
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Founder Card Component
function FounderCard({ image, name, description }: { image: string; name: string; description: string }) {
  return (
    <div className="relative group">
      <div className="bg-white rounded-[42px] border-[3px] border-white shadow-2xl overflow-hidden transform transition-all duration-300 hover:scale-105">
        <div className="aspect-[350/400] relative">
          <ImageWithFallback
            src={image}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="bg-white p-6 text-center space-y-4">
          <h3 className="font-['Bricolage_Grotesque:Bold',sans-serif] font-bold text-[18px] text-black">
            {name}
          </h3>
          <p className="font-['Bricolage_Grotesque:Medium',sans-serif] font-medium text-[14px] text-black/60">
            {description}
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-[#0441fe] rounded-full w-8 h-8 flex items-center justify-center shadow-[1px_1px_0px_0px_#000000] hover:translate-y-0.5 transition-all">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                <path d="M19.8044 7H16.7709V19.2608C16.7709 20.7217 15.6041 21.9218 14.1522 21.9218C12.7003 21.9218 11.5335 20.7217 11.5335 19.2608C11.5335 17.8261 12.6743 16.6522 14.0744 16.6V13.5217C10.989 13.5739 8.5 16.1043 8.5 19.2608C8.5 22.4435 11.0409 25 14.1781 25C17.3153 25 19.8562 22.4174 19.8562 19.2608V12.9739C20.997 13.8087 22.3971 14.3044 23.875 14.3305V11.2522C21.5934 11.1739 19.8044 9.29565 19.8044 7Z"/>
              </svg>
            </button>
            <button className="bg-[#0441fe] rounded-full w-8 h-8 flex items-center justify-center shadow-[1px_1px_0px_0px_#000000] hover:translate-y-0.5 transition-all">
              <svg width="18" height="18" viewBox="0 0 32 32" fill="white">
                <path d="M16 11.377C13.4477 11.377 11.377 13.4477 11.377 16C11.377 18.5523 13.4477 20.623 16 20.623C18.5523 20.623 20.623 18.5523 20.623 16C20.623 13.4477 18.5523 11.377 16 11.377ZM16 18.9988C14.3441 18.9988 13.0012 17.6559 13.0012 16C13.0012 14.3441 14.3441 13.0012 16 13.0012C17.6559 13.0012 18.9988 14.3441 18.9988 16C18.9988 17.6559 17.6559 18.9988 16 18.9988Z"/>
              </svg>
            </button>
            <button className="bg-[#0441fe] rounded-full w-8 h-8 flex items-center justify-center shadow-[1px_1px_0px_0px_#000000] hover:translate-y-0.5 transition-all">
              <svg width="18" height="18" viewBox="0 0 32 32" fill="white">
                <path d="M24.8207 12.4C24.8207 12.4 24.6449 11.159 24.1035 10.6141C23.418 9.89691 22.6516 9.89339 22.3 9.85121C19.7828 9.66839 16.0035 9.66839 16.0035 9.66839H15.9965C15.9965 9.66839 12.2172 9.66839 9.7 9.85121C9.34844 9.89339 8.58203 9.89691 7.89648 10.6141C7.35508 11.159 7.18281 12.4 7.18281 12.4C7.18281 12.4 7 13.859 7 15.3145V16.6785C7 18.134 7.1793 19.593 7.1793 19.593C7.1793 19.593 7.35508 20.834 7.89297 21.3789C8.57852 22.0961 9.47852 22.0715 9.8793 22.1489C11.3207 22.286 16 22.3282 16 22.3282C16 22.3282 19.7828 22.3211 22.3 22.1418C22.6516 22.0996 23.418 22.0961 24.1035 21.3789C24.6449 20.834 24.8207 19.593 24.8207 19.593C24.8207 19.593 25 18.1375 25 16.6785V15.3145C25 13.859 24.8207 12.4 24.8207 12.4Z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
