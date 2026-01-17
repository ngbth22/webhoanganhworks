import {
  User,
  Target,
  GraduationCap,
  Code,
  Briefcase,
  Award,
  Heart,
  Mail,
  Phone,
  MapPin,
  Globe,
} from "lucide-react";

export default function Resume() {
  return (
    <div className="w-full max-w-4xl mx-auto py-12 px-4 h-[80vh] overflow-y-auto no-scrollbar">
      <div className="space-y-12">
        {/* Header / Personal Info */}
        <section className="border-b border-white/10 pb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">
                Bùi Hoàng Anh
              </h1>
              <p className="text-xl text-white/60">Software Developer</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-white/40" />
                <span>buihoanganh.contact@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-white/40" />
                <span>0852089998</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-white/40" />
                <span>Hà Nội, Việt Nam</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-white/40" />
                <span>portfolio.com</span>
              </div>
            </div>
          </div>
        </section>

        {/* Objective */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <Target className="w-6 h-6 text-white" />
            <h2 className="text-2xl font-semibold text-white uppercase tracking-wider">
              Mục tiêu nghề nghiệp
            </h2>
          </div>
          <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
            <p className="text-gray-300 leading-relaxed">
              Sinh viên năm 3 ngành Công nghệ thông tin, mong muốn ứng tuyển vị
              trí Thực tập sinh Frontend Developer để áp dụng kiến thức đã học,
              rèn luyện kỹ năng thực tế và phát triển chuyên môn lâu dài trong
              lĩnh vực phát triển web. Chăm chỉ, có khả năng tự học tốt và mong
              muốn đóng góp giá trị cho dự án của công ty.
            </p>
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="space-y-12">
            {/* Education */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap className="w-6 h-6 text-white" />
                <h2 className="text-2xl font-semibold text-white uppercase tracking-wider">
                  Học vấn
                </h2>
              </div>
              <div className="border-l-2 border-white/20 ml-3 pl-6 space-y-8">
                <div className="relative">
                  <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-white border-4 border-black"></div>
                  <h3 className="text-lg font-medium text-white">
                    Trường Đại học Điện Lực
                  </h3>
                  <p className="text-white/60 text-sm">
                    Công nghệ thông tin | 2024 - Nay
                  </p>
                </div>
              </div>
            </section>

            {/* Skills */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Code className="w-6 h-6 text-white" />
                <h2 className="text-2xl font-semibold text-white uppercase tracking-wider">
                  Kỹ năng
                </h2>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-bold text-white/40 uppercase mb-3">
                    Chuyên môn
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "HTML",
                      "CSS",
                      "JavaScript",
                      "Python",
                      "Git / GitHub",
                      "Excel",
                    ].map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300 border border-white/5"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white/40 uppercase mb-3">
                    Kỹ năng mềm
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Tự học tốt",
                      "Làm việc nhóm",
                      "Quản lý thời gian",
                      "Tư duy logic",
                    ].map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300 border border-white/5"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column */}
          <div className="space-y-12">
            {/* Projects */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Briefcase className="w-6 h-6 text-white" />
                <h2 className="text-2xl font-semibold text-white uppercase tracking-wider">
                  Dự án học tập
                </h2>
              </div>
              <div className="space-y-6">
                <div className="group bg-white/5 p-5 rounded-2xl border border-white/10 hover:border-white/30 transition-all">
                  <h3 className="text-lg font-medium text-white group-hover:text-white transition-colors">
                    Website cá nhân (HTML/CSS)
                  </h3>
                  <ul className="mt-2 text-sm text-gray-400 space-y-1 list-disc list-inside">
                    <li>Xây dựng website giới thiệu bản thân</li>
                    <li>Responsive cơ bản</li>
                    <li>Deploy bằng GitHub Pages</li>
                  </ul>
                </div>
                <div className="group bg-white/5 p-5 rounded-2xl border border-white/10 hover:border-white/30 transition-all">
                  <h3 className="text-lg font-medium text-white group-hover:text-white transition-colors">
                    Bài tập Python
                  </h3>
                  <ul className="mt-2 text-sm text-gray-400 space-y-1 list-disc list-inside">
                    <li>Xử lý dữ liệu cơ bản</li>
                    <li>Làm việc với file CSV</li>
                    <li>Viết script tự động đơn giản</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Certifications
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Award className="w-6 h-6 text-white" />
                <h2 className="text-2xl font-semibold text-white uppercase tracking-wider">
                  Chứng chỉ
                </h2>
              </div>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white/40 shrink-0"></div>
                  <span>Chứng chỉ Python cơ bản (Coursera / Udemy)</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white/40 shrink-0"></div>
                  <span>IELTS 6.5</span>
                </li>
              </ul>
            </section> */}

            {/* Interests */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Heart className="w-6 h-6 text-white" />
                <h2 className="text-2xl font-semibold text-white uppercase tracking-wider">
                  Sở thích
                </h2>
              </div>
              <div className="flex flex-wrap gap-4">
                {["Lập trình", "Tìm hiểu công nghệ", "Thể thao"].map(
                  (interest) => (
                    <div
                      key={interest}
                      className="text-gray-400 flex items-center gap-2"
                    >
                      <div className="w-1 h-1 rounded-full bg-white/20"></div>
                      {interest}
                    </div>
                  ),
                )}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
