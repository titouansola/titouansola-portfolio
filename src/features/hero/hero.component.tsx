import { HeroLeftSide } from '@/features/hero/left-side.component';
import { HeroRightSide } from '@/features/hero/right-side.client.component';
import { flex } from '@styles/patterns';

export function Hero() {
  return (
    <section
      className={flex({
        height: 'calc(100vh - 250px)',
        padding: '0',
        '& > *': { lg: { height: '100%', width: '50%' } },
      })}
    >
      <HeroLeftSide />
      <HeroRightSide />
    </section>
  );
}
