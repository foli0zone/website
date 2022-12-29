import Image from 'next/image';
import Link from 'next/link';

import { findLatestPosts } from '~/utils/posts';

export default async function Home({}) {
  const posts = await findLatestPosts();
  return (
    <section className="mx-auto max-w-3xl px-6 py-12 sm:px-6 sm:py-16 lg:py-20">
      <header>
        <h1 class="leading-tighter font-heading mb-8 text-center text-4xl font-bold tracking-tighter md:mb-16 md:text-5xl">
          Blog
        </h1>
      </header>
      <div className="grid grid-cols-1 p-4  md:p-0 lg:grid-cols-2 gap-6">
        {posts.map(({ slug, frontmatter }) => (
          <div key={slug} className="flex flex-col overflow-hidden rounded-xl border border-gray-200 shadow-lg">
            <Link href={`/${slug}`}>
              <Image width={650} height={340} alt={frontmatter.title} src={`${frontmatter.image}`} />
              <h2 className="p-4 font-bold">{frontmatter.title}</h2>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
