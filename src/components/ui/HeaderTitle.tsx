interface HeaderTitleProps {
  title: string;
}

export default function HeaderTitle({ title }: HeaderTitleProps) {
  return <div className="text-4xl font-medium px-5 mt-3">{title}</div>;
}
