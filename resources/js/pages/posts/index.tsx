import { Head, Link } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';

interface Post {
    id: number;
    title: string;
    slug: string;
    excerpt: string | null;
    published_at: string | null;
    user: { name: string };
}

interface Props {
    posts: {
        data: Post[];
        links: any[];
    };
}

export default function Index({ posts }: Props) {
    return (
        <AppLayout>
            <Head title="Posts" />

            <div className="mx-auto max-w-3xl px-4 py-10">
                <h1 className="mb-6 text-2xl font-semibold">Posts</h1>

                <div className="space-y-6">
                    {posts.data.map((post) => (
                        <div key={post.id} className="rounded-lg border p-5">
                            <p className="mb-1 text-sm text-gray-500">
                                {post.user.name}
                            </p>
                            <h2 className="mb-2 text-lg font-medium">
                                <Link
                                    href={`/posts/${post.slug}`}
                                    className="hover:underline"
                                >
                                    {post.title}
                                </Link>
                            </h2>
                            {post.excerpt && (
                                <p className="text-sm text-gray-600">
                                    {post.excerpt}
                                </p>
                            )}
                            {post.published_at && (
                                <p className="mt-2 text-xs text-gray-400">
                                    {post.published_at}
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </AppLayout>
    );
}
