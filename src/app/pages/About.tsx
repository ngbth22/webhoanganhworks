import hoanganhImg from "../../../img/hoanganh.jpg";

export default function About() {
  return (
    <div className="w-full h-full flex items-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
        {/* Left Column: Text */}
        <div className="space-y-6">
          <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-white mb-6">
            About Me
          </h1>
          <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
            <p>
              Hello! I'm Bùi Hoàng Anh, a passionate Software Developer based in
              Vietnam.
            </p>
            <p>
              I specialize in building exceptional digital experiences,
              combining technical expertise with a keen eye for design.
            </p>
            <p>
              My journey in tech is driven by a curiosity to understand how
              things work and a desire to create impactful solutions.
            </p>
          </div>
        </div>

        {/* Right Column: Image */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[400px] aspect-[3/4] rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl">
            <img
              src={hoanganhImg}
              alt="Bùi Hoàng Anh"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
