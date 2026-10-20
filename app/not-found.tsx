import Link from "next/link";

export default function NotFound() {
  return (
    <div className="gutter flex min-h-svh flex-col justify-center gap-8 pt-[72px]">
      <h1 className="h-section">Page not found</h1>
      <Link href="/" className="link w-fit py-2">Back to the homepage</Link>
    </div>
  );
}
