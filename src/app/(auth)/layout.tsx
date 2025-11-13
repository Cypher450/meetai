interface Props {
  children: React.ReactNode;
}

const layout = ({ children }: Props) => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-2xl font-semibold">{children}</div>
    </div>
  );
};

export default layout;
