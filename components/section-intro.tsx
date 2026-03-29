import { cn } from '@/lib/utils';

type SectionIntroProps = {
  eyebrow?: string;
  title: string;
  body?: string;
  align?: 'left' | 'center';
  invert?: boolean;
  as?: 'h1' | 'h2';
};

export function SectionIntro({ eyebrow, title, body, align = 'left', invert = false, as = 'h2' }: SectionIntroProps) {
  const HeadingTag = as;

  return (
    <div className={cn('space-y-5', align === 'center' && 'mx-auto text-center')}>
      {eyebrow ? (
        <p className={cn('text-xs font-semibold uppercase tracking-[0.28em]', invert ? 'text-secondary' : 'text-accent')}>
          {eyebrow}
        </p>
      ) : null}
      <div className={cn('space-y-4', align === 'center' && 'mx-auto max-w-[44rem]')}>
        <HeadingTag className={cn('font-heading text-4xl leading-none md:text-[2.75rem]', invert ? 'text-ivory' : 'text-primary')}>
          {title}
        </HeadingTag>
        {body ? (
          <p className={cn('max-w-[68ch] text-base leading-8 md:text-lg', invert ? 'text-ivory/78' : 'text-muted')}>
            {body}
          </p>
        ) : null}
      </div>
    </div>
  );
}
