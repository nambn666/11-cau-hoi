
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  CheckCircle2, 
  ChevronDown, 
  ShieldCheck, 
  ArrowRight,
  Star,
  Facebook,
  Youtube,
  Quote,
  Zap,
  Target,
  Wallet,
  MapPin,
  ClipboardCheck,
  ZapIcon,
  FastForward,
  Mail,
  User,
  MessageCircle,
  Eye,
  TrendingUp,
  Loader2,
  Heart,
  Bookmark,
  Share2
} from 'lucide-react';

// URL Google Apps Script (Đảm bảo đã deploy phiên bản mới nhất)
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzSCy_BRdd6bJGwHPMmCPGi-hqZ-LqShqlPZleBWF62hdB-NyFZ8BESWQaXb0lWfACp/exec";

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.89-.6-4.13-1.47V18c0 1.94-.96 3.82-2.67 4.72-1.71.9-3.93.85-5.5-.12-1.58-.97-2.5-2.85-2.26-4.67.24-1.82 1.64-3.39 3.45-3.74.62-.12 1.25-.16 1.88-.1v4.06c-.46-.06-.94-.04-1.39.04-1.13.19-1.93 1.31-1.73 2.45.2 1.14 1.32 1.94 2.46 1.74 1.14-.2 1.94-1.32 1.74-2.46-.06-.35-.06-.71 0-1.07V0l.21.02z"/>
  </svg>
);

const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: '', email: '', consent: true });
  const [loading, setLoading] = useState(false);
  const [showStickyCTA, setShowStickyCTA] = useState(false);
  const [currentNotification, setCurrentNotification] = useState(0);
  const [showNotification, setShowNotification] = useState(false);

  const AVATAR_URL = "https://i.postimg.cc/GtngZLrM/nam-nho.jpg"; 
  const PROOF_IMG_URL = "https://i.postimg.cc/3wbQBJrS/IMG_6260.png";
  
  const TRUST_PHOTOS = useMemo(() => [
    "https://i.postimg.cc/KY2RG5Mx/217553126_2044978578983660_718762978980990897_n.jpg",
    "https://i.postimg.cc/5tV64mCv/600394147_1226128239412780_5762387967117193079_n.jpg",
    "https://i.postimg.cc/QM3H8qT9/606894250_122183162888527916_6301686403838280563_n.jpg",
    "https://i.postimg.cc/xd2cfPzN/616814452_3875597362738499_8652052263035896694_n.jpg"
  ], []);

  const recentDownloads = useMemo(() => [
    { name: "Anh Tuấn (Hà Nội)", time: "2 phút trước" },
    { name: "Chị Lan Anh (TP.HCM)", time: "5 phút trước" },
    { name: "Hoàng Nam (Đà Nẵng)", time: "1 phút trước" },
    { name: "Anh Quang (Bắc Ninh)", time: "30 giây trước" }
  ], []);

  const testimonials = [
    {
      name: "Anh Quang",
      role: "Môi giới Ocean Park",
      content: "Bộ câu hỏi thực sự rất tinh tế. Tôi đã áp dụng ngay vào cuộc gọi sáng nay và khách hàng chia sẻ rất nhiều về tài chính - điều mà trước đây tôi rất ngại hỏi.",
      avatar: "https://i.postimg.cc/KY2RG5Mx/217553126_2044978578983660_718762978980990897_n.jpg"
    },
    {
      name: "Anh Tuân",
      role: "Chuyên viên Chung cư",
      content: "Tài liệu nhỏ gọn nhưng võ công cao. Cách Nam hướng dẫn hỏi về khu vực quan tâm giúp tôi lọc được khách nét cực nhanh, đỡ mất công dẫn đi xem linh tinh.",
      avatar: "https://i.postimg.cc/5tV64mCv/600394147_1226128239412780_5762387967117193079_n.jpg"
    },
    {
      name: "Chị My",
      role: "Môi giới đất nền",
      content: "Cảm ơn Nam nhé. Video TikTok đã hay rồi, tài liệu PDF này còn chi tiết hơn. Đã in ra dán ngay bàn làm việc để luyện tập hàng ngày.",
      avatar: "https://i.postimg.cc/QM3H8qT9/606894250_122183162888527916_6301686403838280563_n.jpg"
    }
  ];

  const benefits = [
    { title: "Khai thác mục đích thật", desc: "Xác định nhanh khách mua để ở, đầu tư lãi vốn hay kinh doanh dòng tiền.", icon: <Target className="w-5 h-5" /> },
    { title: "Hỏi về tài chính tinh tế", desc: "Cách hỏi khéo léo về tiền mặt hay vay ngân hàng mà khách không cảm thấy bị soi xét.", icon: <Wallet className="w-5 h-5" /> },
    { title: "Nắm bắt khu vực quan tâm", desc: "Kỹ thuật hỏi để biết khách đang nghiên cứu vùng nào (Hà Nội, Bắc Ninh hay tỉnh khác).", icon: <MapPin className="w-5 h-5" /> },
    { title: "Chốt tiêu chí chi tiết", desc: "Nắm rõ các yêu cầu của khách hàng như: pháp lý, hướng nhà và các tiện ích ưu tiên.", icon: <ClipboardCheck className="w-5 h-5" /> },
    { title: "Thiết kế để 'Thực chiến'", desc: "Tài liệu nhỏ gọn, có thể in ra dán tại bàn làm việc hoặc cài làm hình nền máy tính.", icon: <ZapIcon className="w-5 h-5" /> },
    { title: "Rút ngắn lộ trình chốt cọc", desc: "Tư vấn đúng nhu cầu ngay từ cuộc gọi đầu tiên, tránh việc dẫn khách đi xem lan man.", icon: <FastForward className="w-5 h-5" /> }
  ];

  useEffect(() => {
    const handleScroll = () => setShowStickyCTA(window.scrollY > 600);
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    const notifyInterval = setInterval(() => {
      setShowNotification(true);
      setCurrentNotification(prev => (prev + 1) % recentDownloads.length);
      setTimeout(() => setShowNotification(false), 5000);
    }, 12000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(notifyInterval);
    };
  }, [recentDownloads.length]);

  const scrollToForm = () => {
    document.getElementById('register-form')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);

    try {
      const params = new URLSearchParams();
      params.append('name', formData.name.trim());
      params.append('email', formData.email.trim().toLowerCase());
      params.append('source', 'Landing Page 11 Cau Hoi');

      // Chế độ no-cors để tránh lỗi cross-origin trên browser
      fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: params.toString(),
      });

      // Tạo độ trễ cảm nhận để người dùng thấy hệ thống đang xử lý chuyên nghiệp
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setLoading(false);
      navigate('/thank-you');
    } catch (error) {
      console.error("Lỗi gửi dữ liệu:", error);
      setLoading(false);
      navigate('/thank-you'); // Vẫn chuyển trang để không làm đứt mạch trải nghiệm
    }
  };

  return (
    <div className="bg-cream min-h-screen font-sans text-gray-900 overflow-x-hidden selection:bg-gold/30">
      
      {/* Notification Toast */}
      <div className={`fixed bottom-6 left-4 z-[100] transition-all duration-700 transform ${showNotification ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'}`}>
        <div className="bg-white/95 backdrop-blur-md shadow-2xl border border-gold/20 p-4 rounded-2xl flex items-center gap-4 max-w-[280px]">
          <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold flex-shrink-0">
            <CheckCircle2 className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-800 leading-tight">{recentDownloads[currentNotification].name}</p>
            <p className="text-[11px] text-slate-500 font-medium">Vừa nhận tài liệu ({recentDownloads[currentNotification].time})</p>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${showStickyCTA ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img src={AVATAR_URL} alt="Nguyễn Nam" className="w-9 h-9 rounded-full border border-gray-200 object-cover" loading="eager" />
            <span className="font-extrabold text-sm tracking-tighter uppercase text-slate-800">Nguyễn Nam BĐS</span>
          </div>
          <button 
            onClick={scrollToForm}
            className={`gold-gradient text-white px-8 py-2.5 rounded-full font-bold text-xs tracking-widest transition-all hover:scale-105 active:scale-95 shadow-lg shadow-gold/20 ${showStickyCTA ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
          >
            TẢI PDF NGAY
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
        <div className="space-y-12 animate-in fade-in slide-in-from-left duration-700">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-100 shadow-sm text-slate-500 font-semibold text-[10px] uppercase tracking-[0.2em]">
            <Star className="w-4 h-4 text-gold fill-current" /> Quà tặng thực chiến cho Môi giới
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 leading-[1.05] tracking-tighter">
            11 câu hỏi giúp bạn <span className="text-gold">thấu hiểu nhu cầu</span> khách hàng
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-500 leading-relaxed font-medium italic border-l-4 border-gold/30 pl-6 opacity-80">
            "Hỏi đúng để khách mở lòng. Tư vấn đúng để khách xuống cọc. Bộ câu hỏi tinh tế dành riêng cho môi giới BĐS thực chiến."
          </p>

          <div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-10 relative overflow-hidden shadow-2xl border-l-[12px] border-gold group hover-lift">
            <div className="absolute -top-10 -right-10 opacity-[0.05] group-hover:rotate-12 transition-transform duration-1000">
               <Zap className="w-64 h-64 text-gold fill-current" />
            </div>
            <div className="relative z-10 space-y-6">
              <p className="text-white text-2xl md:text-3xl font-medium tracking-tight uppercase leading-none">
                Giá gốc <span className="text-slate-500 line-through decoration-red-500 decoration-4">2.000.000đ</span>
              </p>
              <h2 className="text-gold text-4xl md:text-5xl font-extrabold tracking-tighter uppercase drop-shadow-sm">Miễn phí hôm nay</h2>
              <div className="flex items-center gap-3 bg-red-500/10 border border-red-500/20 py-3 px-5 rounded-2xl w-fit">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-red-600"></span>
                </span>
                <p className="text-red-500 text-xs font-semibold uppercase tracking-widest">Chỉ còn 5 suất cuối cùng</p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-6 pt-4">
             <div className="flex -space-x-3">
                {TRUST_PHOTOS.map((url, i) => (
                  <div key={i} className="w-12 h-12 rounded-full border-2 border-white bg-gray-200 overflow-hidden shadow-sm">
                    <img src={url} alt={`User ${i+1}`} className="w-full h-full object-cover" loading="lazy" />
                  </div>
                ))}
             </div>
             <p className="text-lg text-slate-500 font-medium italic">Đã có 500+ môi giới tải về</p>
          </div>
        </div>

        {/* Form Container */}
        <div className="flex justify-center lg:justify-end animate-in fade-in slide-in-from-right duration-700 delay-200">
          <div id="register-form" className="bg-white p-8 md:p-12 rounded-[3.5rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] border border-slate-50 w-full max-w-[480px] relative">
            <div className="absolute top-0 left-0 w-full h-3 gold-gradient rounded-t-full"></div>
            
            <div className="text-center mb-10">
              <img src={AVATAR_URL} alt="Nguyễn Nam" className="w-24 h-24 rounded-full border-4 border-white shadow-xl mx-auto mb-6 object-cover" loading="lazy" />
              <h3 className="text-2xl font-bold text-slate-800 tracking-tight uppercase">Đăng ký nhận tài liệu</h3>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Họ và tên của bạn</label>
                <div className="relative">
                  <User className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-300" />
                  <input 
                    required 
                    type="text" 
                    autoComplete="name"
                    placeholder="Nguyễn Văn Nam" 
                    className="w-full pl-14 pr-7 py-5 rounded-2xl border-2 border-slate-100 bg-slate-50 focus:bg-white focus:border-gold outline-none transition-all text-lg font-medium placeholder:text-slate-300" 
                    value={formData.name} 
                    onChange={(e) => setFormData({...formData, name: e.target.value})} 
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Email nhận quà</label>
                <div className="relative">
                  <Mail className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-300" />
                  <input 
                    required 
                    type="email" 
                    autoComplete="email"
                    placeholder="nambds@gmail.com" 
                    className="w-full pl-14 pr-7 py-5 rounded-2xl border-2 border-slate-100 bg-slate-50 focus:bg-white focus:border-gold outline-none transition-all text-lg font-medium placeholder:text-slate-300" 
                    value={formData.email} 
                    onChange={(e) => setFormData({...formData, email: e.target.value})} 
                  />
                </div>
              </div>

              <div className="flex items-start gap-4 py-2">
                <input id="consent" type="checkbox" checked={formData.consent} onChange={(e) => setFormData({...formData, consent: e.target.checked})} className="mt-1.5 w-5 h-5 accent-gold cursor-pointer" />
                <label htmlFor="consent" className="text-sm text-slate-500 font-medium leading-snug cursor-pointer select-none">Tôi đồng ý nhận bộ quà tặng qua Email cá nhân.</label>
              </div>

              <button 
                type="submit" 
                disabled={loading} 
                className={`w-full gold-gradient text-white font-bold py-5 rounded-3xl text-xl hover:brightness-105 hover:shadow-2xl hover:shadow-gold/30 active:scale-[0.98] transition-all flex items-center justify-center gap-3 ${loading ? 'opacity-70 cursor-wait' : ''}`}
              >
                {loading ? (
                  <>
                    <Loader2 className="w-6 h-6 animate-spin" /> ĐANG XỬ LÝ...
                  </>
                ) : (
                  <>
                    TẢI MIỄN PHÍ <ArrowRight className="w-6 h-6" />
                  </>
                )}
              </button>
              
              <p className="text-center text-[9px] text-slate-400 font-bold uppercase tracking-[0.3em] flex items-center justify-center gap-2 pt-2">
                <ShieldCheck className="w-4 h-4 text-green-500" /> Cam kết bảo mật 100%
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-32 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-24 space-y-6">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tighter uppercase leading-tight">Bạn sẽ đạt được gì nếu áp dụng?</h2>
            <div className="w-24 h-1.5 gold-gradient mx-auto rounded-full"></div>
            <p className="text-slate-500 text-xl font-medium italic opacity-80">"Những kỹ thuật này đã giúp tôi và cộng sự rút ngắn thời gian tư vấn gấp nhiều lần."</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="p-8 md:p-10 rounded-[2.5rem] bg-cream border border-slate-50 hover-lift group transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-white shadow-md flex items-center justify-center text-gold group-hover:scale-110 group-hover:bg-gold group-hover:text-white transition-all duration-500">
                    {benefit.icon}
                  </div>
                  <h4 className="text-lg font-bold text-slate-800 tracking-tight uppercase leading-tight">{benefit.title}</h4>
                </div>
                <p className="text-slate-500 leading-relaxed font-medium opacity-80">
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proof Section - UPDATED WITH NEW STATS */}
      <section className="py-32 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-2 gold-gradient"></div>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-12">
              <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-gold/40 text-gold font-bold text-xs uppercase tracking-widest bg-gold/5">
                <TrendingUp className="w-4 h-4" /> Minh chứng sức hút thực tế
              </div>
              <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter leading-tight uppercase">
                Hơn <span className="text-gold">300 anh em</span> môi giới đã săn đón
              </h2>
              
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="bg-white/5 border border-white/10 p-6 rounded-3xl text-left hover:bg-white/10 transition-colors">
                  <Eye className="w-6 h-6 text-gold mb-3" />
                  <p className="text-3xl font-bold text-white">150K+</p>
                  <p className="text-[10px] uppercase text-slate-500 font-bold tracking-[0.2em] mt-1">Lượt xem thực tế</p>
                </div>
                <div className="bg-white/5 border border-white/10 p-6 rounded-3xl text-left hover:bg-white/10 transition-colors">
                  <MessageCircle className="w-6 h-6 text-green-500 mb-3" />
                  <p className="text-3xl font-bold text-white">300+</p>
                  <p className="text-[10px] uppercase text-slate-500 font-bold tracking-[0.2em] mt-1">Người xin tài liệu</p>
                </div>
                <div className="bg-white/5 border border-white/10 p-6 rounded-3xl text-left hover:bg-white/10 transition-colors">
                  <Heart className="w-6 h-6 text-red-500 mb-3" />
                  <p className="text-3xl font-bold text-white">4.337</p>
                  <p className="text-[10px] uppercase text-slate-500 font-bold tracking-[0.2em] mt-1">Lượt yêu thích</p>
                </div>
                <div className="bg-white/5 border border-white/10 p-6 rounded-3xl text-left hover:bg-white/10 transition-colors">
                  <Bookmark className="w-6 h-6 text-blue-500 mb-3" />
                  <p className="text-3xl font-bold text-white">1.430</p>
                  <p className="text-[10px] uppercase text-slate-500 font-bold tracking-[0.2em] mt-1">Lượt lưu video</p>
                </div>
                <div className="bg-white/5 border border-white/10 p-6 rounded-3xl text-left hover:bg-white/10 transition-colors col-span-2">
                  <div className="flex items-center gap-4">
                    <Share2 className="w-6 h-6 text-white/50" />
                    <div>
                      <p className="text-2xl font-bold text-white">506</p>
                      <p className="text-[10px] uppercase text-slate-500 font-bold tracking-[0.2em]">Lượt chia sẻ bài viết</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center">
               <div className="relative group max-w-[420px]">
                  <div className="relative rounded-[4rem] border-[12px] border-slate-800 shadow-2xl overflow-hidden bg-slate-900 transform lg:rotate-2 group-hover:rotate-0 transition-transform duration-1000">
                    <img 
                      src={PROOF_IMG_URL} 
                      alt="Minh chứng thực tế TikTok" 
                      className="w-full h-auto object-cover"
                      loading="lazy"
                    />
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-cream overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center mb-24 space-y-6">
          <h2 className="text-4xl md:text-5xl font-extrabold italic tracking-tighter uppercase text-slate-900 underline underline-offset-8 decoration-gold decoration-4">Tiếng nói cộng đồng</h2>
        </div>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-white p-12 rounded-[3.5rem] shadow-xl border border-slate-100 relative group hover-lift transition-all duration-700">
              <Quote className="absolute top-10 right-12 w-10 h-10 text-gold/10 group-hover:text-gold/20 transition-all" />
              <div className="flex items-center gap-6 mb-10">
                <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-gold/10 shadow-xl group-hover:border-gold transition-colors duration-500">
                  <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="text-left">
                  <h4 className="font-bold text-2xl text-slate-900 tracking-tight">{t.name}</h4>
                  <p className="text-[12px] text-slate-400 font-semibold uppercase tracking-[0.05em] mt-2 bg-slate-50 px-3 py-1 rounded-full w-fit">
                    {t.role}
                  </p>
                </div>
              </div>
              <p className="text-slate-700 leading-relaxed italic text-xl text-left font-medium opacity-90">"{t.content}"</p>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="py-32 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-24 items-center">
          <div className="relative">
            <div className="relative rounded-[4rem] overflow-hidden shadow-2rem border-[16px] border-white group">
              <img src={AVATAR_URL} alt="Nguyễn Nam" className="w-full h-full object-cover aspect-[4/5] transition-transform duration-[2s] group-hover:scale-110" loading="lazy" />
              <div className="absolute bottom-0 left-0 w-full p-12 bg-gradient-to-t from-slate-900 via-slate-900/70 to-transparent">
                <p className="text-white font-bold text-4xl tracking-tight">Nguyễn Nam BĐS</p>
                <p className="text-gold font-bold text-xl tracking-[0.2em] uppercase mt-3">Chuyên gia Môi giới Thực chiến</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-12">
            <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-slate-900 leading-none">Về Nguyễn Nam</h2>
            <div className="space-y-10 text-2xl text-slate-600 leading-relaxed italic font-medium">
              <p>"Chào bạn, tôi là Nguyễn Nam. Với hơn 4 năm thực chiến trong lĩnh vực bất động sản, tôi thấu hiểu những khó khăn mà anh em môi giới gặp phải khi tiếp cận khách hàng mới."</p>
              <p>"Sứ mệnh của tôi là giúp bạn chuyển từ một 'người đi chào hàng' thành một 'chuyên gia tư vấn' thực thụ."</p>
            </div>

            <div className="flex gap-8 pt-6">
                <a href="https://www.facebook.com/namtuyendungbds/" target="_blank" rel="noopener noreferrer" className="w-16 h-16 rounded-full bg-cream flex items-center justify-center text-slate-400 hover:text-gold hover:-translate-y-2 transition-all border-2 border-slate-50">
                    <Facebook className="w-8 h-8" />
                </a>
                <a href="https://www.youtube.com/channel/UCyX8IefNC42CONw7QAaVl7w" target="_blank" rel="noopener noreferrer" className="w-16 h-16 rounded-full bg-cream flex items-center justify-center text-slate-400 hover:text-gold hover:-translate-y-2 transition-all border-2 border-slate-50">
                    <Youtube className="w-8 h-8" />
                </a>
                <a href="https://www.tiktok.com/@namtuyendung" target="_blank" rel="noopener noreferrer" className="w-16 h-16 rounded-full bg-cream flex items-center justify-center text-slate-400 hover:text-gold hover:-translate-y-2 transition-all border-2 border-slate-50">
                    <TikTokIcon />
                </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-32 bg-cream">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-extrabold text-center mb-20 text-slate-900 tracking-tighter uppercase">Giải đáp thắc mắc</h2>
          <div className="space-y-6">
            {[
              { q: "Tài liệu này có mẫu câu hỏi cụ thể không?", a: "Có. Nam cung cấp 11 mẫu câu hỏi thực tế giúp bạn bắt chuyện và khai thác thông tin khách hàng cực kỳ tự nhiên." },
              { q: "Tôi có thể in tài liệu này ra không?", a: "Hoàn toàn được. Tài liệu được thiết kế tối ưu để bạn in ra dán ngay tại bàn làm việc." },
              { q: "Tôi nhận PDF bằng cách nào?", a: "Hệ thống sẽ gửi link tải PDF trực tiếp vào email của bạn ngay sau khi đăng ký thành công." }
            ].map((faq, idx) => (
              <details key={idx} className="group bg-white rounded-[2rem] border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
                <summary className="list-none p-8 cursor-pointer flex justify-between items-center font-bold text-lg text-slate-800 uppercase tracking-tight">
                  {faq.q} <ChevronDown className="w-6 h-6 group-open:rotate-180 transition-transform text-gold duration-500" />
                </summary>
                <div className="px-8 pb-8 text-slate-500 font-medium italic border-t border-slate-50 pt-6 leading-relaxed">"{faq.a}"</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 bg-white border-t border-slate-100 text-center">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-10 opacity-50">
          <span className="font-bold tracking-[0.3em] uppercase text-xs">Nguyễn Nam BĐS</span>
          <p className="text-[10px] font-bold uppercase tracking-widest">© 2026 Nguyễn Nam BĐS. Bảo lưu mọi quyền.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
