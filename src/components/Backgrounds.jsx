// Overlay de ruído + fundo aurora (as órbitas recebem parallax via useSiteEffects)
export default function Backgrounds() {
  return (
    <>
      <div className="noise-overlay"></div>
      <div className="aurora-bg">
        <div className="aurora-orb aurora-orb-1"></div>
        <div className="aurora-orb aurora-orb-2"></div>
        <div className="aurora-orb aurora-orb-3"></div>
      </div>
    </>
  );
}
