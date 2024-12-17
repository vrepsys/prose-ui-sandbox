import Link from 'next/link'
import { Logo } from './logo'

export const Footer = () => (
  <div className="border-color-base text-color-lower fon-medium border-t">
    <div className="mx-auto grid w-full max-w-[var(--site-width)] grid-cols-1 gap-4 px-[var(--site-padding-x)] py-16">
      <div className="flex items-center gap-4 md:gap-1">
        <Logo />{' '}
        <p className="text-color-lowest !my-0 text-sm font-medium">
          Open source documentation stater template with{' '}
          <Link href="https://nextjs.org">Next.js</Link> and{' '}
          <Link href="https://prose-ui.com">Prose UI.</Link> Source code available on{' '}
          <a
            className="text-color-low hover:text-color-base underline decoration-[hsl(var(--p-color-text-lowest))] underline-offset-4 hover:decoration-[hsl(var(--p-color-text-base))]"
            href="https://github.com/valdemaras/prose-ui"
          >
            GitHub
          </a>
          .{' '}
        </p>
      </div>
    </div>
  </div>
)
