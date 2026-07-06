import {
  Headset,
  ShieldCheck,
  Cloud,
  Target,
  Settings,
  Lock,
  Fingerprint,
  Eye,
  type LucideProps,
} from "lucide-react";

const map = {
  headset: Headset,
  shield: ShieldCheck,
  cloud: Cloud,
  target: Target,
  settings: Settings,
  lock: Lock,
  fingerprint: Fingerprint,
  eye: Eye,
} as const;

export type IconName = keyof typeof map;

export default function Icon({ name, ...props }: { name: IconName } & LucideProps) {
  const Cmp = map[name];
  return <Cmp {...props} />;
}
