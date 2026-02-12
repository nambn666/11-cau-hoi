
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft,
  ShieldCheck,
  Facebook,
  Youtube
} from 'lucide-react';

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.89-.6-4.13-1.47V18c0 1.94-.96 3.82-2.67 4.72-1.71.9-3.93.85-5.5-.12-1.58-.97-2.5-2.85-2.26-4.67.24-1.82 1.64-3.39 3.45-3.74.62-.12 1.25-.16 1.88-.1v4.06c-.46-.06-.94-.04-1.39.04-1.13.19-1.93 1.31-1.73 2.45.2 1.14 1.32 1.94 2.46 1.74 1.14-.2 1.94-1.32 1.74-2.46-.06-.35-.06-.71 0-1.07V0l.21.02z"/>
  </svg>
);

const ThankYouPage: React.FC = () => {
  const AVATAR_URL = "https://i.postimg.cc/GtngZLrM/nam-nho.jpg"; 
  const [progress, setProgress] = useState(0);

  const STEP_IMAGES = [
    "https://i.postimg.cc/GmP1Y4KN/Bu_o_c_1.png",
    "https://i.postimg.cc/XYK0FrLt/Bu_o_c_2.png",
    "https://i.postimg.cc/wvh1tXMV/Bu-o-c_3-new.png"
  ];

  useEffect(() => {
    const timer = setTimeout(() => setProgress(95), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-[#F8FAFC] min-h-screen flex flex-col font-sans text-gray-900">
      {/* Header */}
      <header className="py-3 px-6 bg-white border-b border-gray-100 flex justify-between items-center sticky top-0 z-50">
        <div className="max-w-6xl mx-auto w-full flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full overflow-hidden border border-gray-200 shadow-sm">
              <img src={AVATAR_URL} alt="Nguyễn Nam" className="w-full h-full object-cover" />
            </div>
            <span className="font-bold text-sm tracking-tight uppercase text-gray-800">Nguyễn Nam BĐS</span>
          </div>
          <Link to="/" className="text-gray-400 hover:text-gray-600 px-3 py-1 rounded-full font-bold text-xs flex items-center gap-1 transition-colors">
            <ArrowLeft className="w-3 h-3" /> QUAY LẠI
          </Link>
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center py-6 md:py-8 px-4">
        <div className="max-w-7xl w-full text-center space-y-6 md:space-y-8">
          
          <div className="space-y-2">
            <h1 className="text-5xl md:text-7xl font-black text-[#E11D48] tracking-tighter uppercase leading-none">
              ĐÃ GỬI EMAIL!
            </h1>
            <p className="text-lg md:text-xl text-gray-500 font-bold italic">Hãy làm theo hướng dẫn bên dưới</p>
          </div>

          {/* Steps Area - Tightened Spacing */}
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 items-stretch">
              
              {/* Step 1 */}
              <div className="flex flex-col group h-full">
                <div className="bg-white rounded-[2rem] p-2 md:p-3 w-full h-full border border-gray-100 shadow-xl hover:shadow-red-50 transition-all duration-300 flex flex-col">
                  <div className="rounded-[1.5rem] overflow-hidden mb-3 flex items-center justify-center bg-gray-50 aspect-[4/5] w-full shadow-inner">
                    <img 
                      src={STEP_IMAGES[0]} 
                      alt="Check Inbox" 
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="mt-auto px-2 mb-4 min-h-[50px] flex items-center justify-center text-center">
                    <p className="text-gray-900 font-extrabold leading-tight text-lg md:text-xl">
                      Kiểm tra hộp thư <span className="text-[#E11D48]">Inbox (Chính)</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col group h-full">
                <div className="bg-white rounded-[2rem] p-2 md:p-3 w-full h-full border border-gray-100 shadow-xl hover:shadow-red-50 transition-all duration-300 flex flex-col">
                  <div className="rounded-[1.5rem] overflow-hidden mb-3 flex items-center justify-center bg-gray-50 aspect-[4/5] w-full shadow-inner">
                    <img 
                      src={STEP_IMAGES[1]} 
                      alt="Check Promotions" 
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="mt-auto px-2 mb-4 min-h-[50px] flex items-center justify-center text-center">
                    <p className="text-gray-900 font-extrabold leading-tight text-lg md:text-xl">
                      Kiểm tra tab <span className="text-[#E11D48]">Thư rác (Spam)</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col group h-full">
                <div className="bg-white rounded-[2rem] p-2 md:p-3 w-full h-full border border-gray-100 shadow-xl hover:shadow-red-50 transition-all duration-300 flex flex-col border-b-[8px] border-b-red-500">
                  <div className="rounded-[1.5rem] overflow-hidden mb-3 flex items-center justify-center bg-gray-50 aspect-[4/5] w-full shadow-inner">
                    <img 
                      src={STEP_IMAGES[2]} 
                      alt="Check Spam" 
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="mt-auto px-2 mb-4 min-h-[50px] flex items-center justify-center text-center">
                    <p className="text-gray-900 font-extrabold leading-tight text-lg md:text-xl uppercase">
                      BẤM <span className="text-[#E11D48]">"NOT SPAM"</span> ĐỂ NHẬN TÀI LIỆU
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Instruction Steps Box - Reduced Padding */}
          <div className="max-w-4xl mx-auto w-full space-y-4">
            <div className="bg-white border border-blue-50 rounded-[2rem] shadow-lg overflow-hidden text-left">
              <div className="p-6 md:p-8 space-y-6">
                
                {/* Step 1 Text */}
                <div className="flex items-start gap-4 md:gap-6">
                  <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xl flex-shrink-0 shadow-md">1</div>
                  <p className="text-gray-700 text-lg md:text-xl leading-relaxed pt-1">
                    Kiểm tra hộp thư <span className="font-bold text-gray-900">Inbox (Hộp thư đến)</span> hoặc tab <span className="font-bold text-gray-900">Promotions (Quảng cáo)</span>.
                  </p>
                </div>

                <div className="h-px bg-gray-50 w-full"></div>

                {/* Step 2 Text */}
                <div className="flex items-start gap-4 md:gap-6">
                  <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xl flex-shrink-0 shadow-md">2</div>
                  <p className="text-gray-700 text-lg md:text-xl leading-relaxed pt-1">
                    Nếu không thấy, vui lòng kiểm tra mục <span className="font-bold text-gray-900">Spam (Thư rác)</span>.
                  </p>
                </div>

                <div className="h-px bg-gray-50 w-full"></div>

                {/* Step 3 Text */}
                <div className="flex items-start gap-4 md:gap-6">
                  <div className="w-10 h-10 rounded-full bg-[#F43F5E] text-white flex items-center justify-center font-bold text-xl flex-shrink-0 shadow-md">3</div>
                  <div className="space-y-2 pt-1">
                    <p className="text-[#F43F5E] font-black text-xl md:text-2xl uppercase tracking-tight">QUAN TRỌNG:</p>
                    <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
                      Nếu mail nằm trong Spam, hãy bấm nút <span className="font-bold text-gray-900">"Report not spam"</span> để đảm bảo bạn nhận được tài liệu từ Nguyễn Nam.
                    </p>
                  </div>
                </div>

              </div>
            </div>
            <p className="text-gray-400 text-base md:text-lg italic font-bold">
              * Email tự động có thể mất 30s để đến hộp thư của bạn.
            </p>
          </div>

          {/* Footer Links Area */}
          <div className="pt-4 flex flex-col items-center gap-4">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-gray-400 hover:text-gray-600 transition-colors font-bold text-xl"
            >
              <ArrowLeft className="w-6 h-6" />
              Quay lại trang chính
            </Link>
            
            <div className="flex items-center gap-2 text-[12px] text-gray-300 font-bold uppercase tracking-[0.4em]">
              <ShieldCheck className="w-5 h-5" />
              BẢO MẬT & HỖ TRỢ 24/7
            </div>
          </div>
        </div>
      </main>

      <footer className="py-12 bg-white text-gray-400 text-xs border-t border-gray-100 mt-auto">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <span className="font-bold tracking-tight uppercase text-gray-900 opacity-60">Nguyễn Nam BĐS</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="https://www.facebook.com/namtuyendungbds/" className="hover:text-[#E11D48] transition-colors" aria-label="Facebook">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="https://www.youtube.com/channel/UCyX8IefNC42CONw7QAaVl7w" className="hover:text-[#E11D48] transition-colors" aria-label="YouTube">
              <Youtube className="w-5 h-5" />
            </a>
            <a href="https://www.tiktok.com/@namtuyendung" className="hover:text-[#E11D48] transition-colors" aria-label="TikTok">
              <TikTokIcon />
            </a>
          </div>

          <p className="font-medium text-center md:text-right">© 2026 Nguyễn Nam BĐS. Bảo lưu mọi quyền.</p>
        </div>
      </footer>
    </div>
  );
};

export default ThankYouPage;
