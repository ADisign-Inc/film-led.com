import Link from "next/link";

interface BreadcrumbProps {
  items: {
    label: string;
    href?: string;
  }[];
}

export const Breadcrumb = ({ items }: BreadcrumbProps) => {
  return (
    <nav className="container max-w-7xl pt-20 md:pt-28">
      <ul className="flex items-center gap-2 [&_li]:text-sm [&_li]:text-gray-300">
        {items.map((item, index) => (
          <li key={index}>
            {item.href ? (
              <Link
                href={item.href}
                className="hover:text-white hover:underline"
              >
                {item.label}
              </Link>
            ) : (
              <span className="!text-white">{item.label}</span>
            )}
            {index < items.length - 1 && <span className="ml-2">＞</span>}
          </li>
        ))}
      </ul>
    </nav>
  );
};
