import {
  ShieldCheck, Radar, BarChart3, Gift, QrCode, ScanSearch, Megaphone, Plug, Search, Users, Layers, Target,
  HeartCrack, TrendingDown, EyeOff, Link2, TriangleAlert, Utensils, Pill, Cpu, Shirt, Sparkles, GlassWater,
  Car, Sprout, PaintBucket, FlaskConical, Store, Dumbbell,
} from 'lucide-react';

const MAP = {
  shield: ShieldCheck, radar: Radar, chart: BarChart3, gift: Gift, qr: QrCode, scan: ScanSearch,
  megaphone: Megaphone, plug: Plug, search: Search, users: Users, layers: Layers, target: Target,
  heartCrack: HeartCrack, trendingDown: TrendingDown, eyeOff: EyeOff, link: Link2, alert: TriangleAlert,
  utensils: Utensils, pill: Pill, cpu: Cpu, shirt: Shirt, sparkles: Sparkles, glass: GlassWater,
  car: Car, sprout: Sprout, paint: PaintBucket, flask: FlaskConical, store: Store, dumbbell: Dumbbell,
};

export default function Icon({ name, size = 22, ...rest }) {
  const C = MAP[name] || ShieldCheck;
  return <C size={size} strokeWidth={1.8} {...rest} />;
}
