import NavigationWrapper from "@/src/components/ui/layout/NavigationWrapper";

export default function FooterLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <NavigationWrapper>{children}</NavigationWrapper>;
}
