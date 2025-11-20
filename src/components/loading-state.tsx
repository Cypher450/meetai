import { Loader2Icon } from "lucide-react";

interface Props{
    title: string;
    description: string;
};

export const LoadingState = ({ title, description }: Props) => {
  return (
    <div className="flex flex-col items-center justify-center h-full gap-3 animate-in fade-in duration-300">
      <Loader2Icon className="h-10 w-10 animate-spin text-muted-foreground" />

      <div className="flex flex-col items-center text-center gap-1">
        <h2 className="text-base font-semibold text-foreground/90">
          {title}
        </h2>

        {description && (
          <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </div>
  );
};