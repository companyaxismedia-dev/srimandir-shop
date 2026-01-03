import CategoryClient from "./CategoryClient";

export default async function CategoryPage({ params }) {
  const { slug } = await params; // ✅ Next.js 15 fix

  return <CategoryClient slug={slug} />;
}
