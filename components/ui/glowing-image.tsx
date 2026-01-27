export function GlowingImage() {
  return (
    <div className="relative h-[420px] w-[420px] overflow-hidden rounded-full shadow-[0_0_80px_20px_rgba(255,255,255,0.85)]">
      

      {/* Image */}
      <img
        src="/me_about_img.jpeg"
        alt="My Photo"
        className="relative z-10 h-full w-full object-cover rounded-full"
      />
    </div>
  )
}
