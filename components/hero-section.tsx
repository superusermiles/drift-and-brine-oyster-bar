import { SectionIntro } from '@/components/section-intro';
import type { ImageAsset } from '@/lib/site-data';

type HeroSectionProps = {
  eyebrow?: string;
  title: string;
  body: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  image: ImageAsset;
  caption?: string;
  overlay?: 'dark' | 'medium';
  headingLevel?: 'h1' | 'h2';
};

export function HeroSection({ eyebrow, title, body, primaryCta, secondaryCta, image, caption, overlay = 'dark', headingLevel = 'h1' }: HeroSectionProps) {
  return (
    <section className="relative min-h-[92svh] overflow-hidden text-ivory">
      <img src={image.src} alt={image.alt} width={image.width} height={image.height} className="absolute inset-0 h-full w-full object-cover" />
      <div className={`absolute inset-0 ${overlay === 'dark' ? 'bg-[linear-gradient(180deg,rgba(9,20,24,0.74),rgba(9,20,24,0.5)_35%,rgba(9,20,24,0.72))]' : 'bg-[linear-gradient(180deg,rgba(9,20,24,0.6),rgba(9,20,24,0.46)_35%,rgba(9,20,24,0.6))]'}`} />
      <div className="relative flex min-h-[92svh] items-end pb-20 pt-32 md:pb-28">
        <div className="container-site w-full">
          <div className="max-w-[35rem] space-y-8">
            <SectionIntro eyebrow={eyebrow} title={title} body={body} invert as={headingLevel} />
            <div className="flex flex-col gap-4 sm:flex-row">
              <a href={primaryCta.href} className="rounded-pill bg-accent px-6 py-3.5 text-center text-sm font-semibold text-ivory transition hover:-translate-y-0.5 hover:shadow-medium">
                {primaryCta.label}
              </a>
              {secondaryCta ? (
                <a href={secondaryCta.href} className="rounded-pill border border-ivory/35 px-6 py-3.5 text-center text-sm font-semibold text-ivory transition hover:bg-ivory hover:text-primary">
                  {secondaryCta.label}
                </a>
              ) : null}
            </div>
          </div>
          {caption ? <p className="mt-16 text-sm text-ivory/75 md:mt-24">{caption}</p> : null}
        </div>
      </div>
    </section>
  );
}
