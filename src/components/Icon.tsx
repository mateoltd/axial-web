import type { ComponentType, SVGProps } from 'react';
import {
  ArrowRight,
  Check,
  Download,
  Play,
  SettingsSlider,
  ShieldCheck,
  Stack,
} from '@openai/apps-sdk-ui/components/Icon';

const icons = {
  arrow: ArrowRight,
  check: Check,
  download: Download,
  play: Play,
  settings: SettingsSlider,
  shield: ShieldCheck,
  stack: Stack,
} satisfies Record<string, ComponentType<SVGProps<SVGSVGElement>>>;

export type IconName = keyof typeof icons;

interface IconProps {
  name: IconName;
  size?: number;
  className?: string;
}

export function Icon({ name, size = 20, className }: IconProps) {
  const Glyph = icons[name];
  return (
    <Glyph
      width={size}
      height={size}
      className={className}
      aria-hidden="true"
      focusable="false"
    />
  );
}
