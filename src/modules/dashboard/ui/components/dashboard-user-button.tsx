import { authClient } from "@/lib/auth-client";
import { GeneratedAvatar } from "@/components/generated-avatar";
import { ChevronDownIcon, CreditCardIcon, LogOutIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerClose,
  DrawerTrigger,
  DrawerFooter,
  DrawerDescription,
} from "@/components/ui/drawer";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { DropdownMenuSeparator } from "@radix-ui/react-dropdown-menu";
import { useRouter } from "next/navigation";
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";

export const DashboardUserButton = () => {
  const { data, isPending } = authClient.useSession();
  const router = useRouter();
  const isMobile = useIsMobile();

  const handleSignOut = () => {
    authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/sign-in");
        },
      },
    });
  };

  if (isPending || !data?.user) {
    return null;
  }

  if (isMobile) {
    return (
      <Drawer>
        <DrawerTrigger className="w-full rounded-lg border border-side-accent-foreground/10 bg-side-accent p-2 flex items-center justify-between bg-transparent hover:bg-side-accent/50 transition-colors bg-white/5">
          {data.user.image ? (
            <Avatar>
              <AvatarImage src={data.user.image} />
            </Avatar>
          ) : (
            <GeneratedAvatar
              seed={data.user.name || data.user.email || "User"}
              variant="initials"
              className="w-8 h-8 rounded-full"
            />
          )}
          <div className="flex flex-col gap-0.5 text-left overflow-hidden flex-1 min-w-0 mx-2">
            <p className="text-sm truncate w-full">{data.user.name}</p>
            <p className="text-sm truncate w-full">{data.user.email}</p>
          </div>
          <ChevronDownIcon className="size-4 shrink-4" />
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>{data.user.name}</DrawerTitle>
            <DrawerDescription>{data.user.email}</DrawerDescription>
          </DrawerHeader>
          <DropdownMenuSeparator />
          <DrawerFooter className="flex flex-col gap-2">
            <Button
              variant="outline"
              className="w-full justify-center gap-2"
              onClick={() => {}}
            >
              <CreditCardIcon className="size-4 opacity-50" />
              Billing &amp; Plans
            </Button>

            <Button
              variant="outline"
              className="w-full justify-center gap-2"
              onClick={handleSignOut}
            >
              <LogOutIcon className="size-4 opacity-50" />
              Log Out
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    );
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="w-full rounded-lg border border-side-accent-foreground/10 bg-side-accent p-2 flex items-center justify-between bg-transparent hover:bg-side-accent/50 transition-colors bg-white/5">
        {data.user.image ? (
          <Avatar>
            <AvatarImage src={data.user.image} />
          </Avatar>
        ) : (
          <GeneratedAvatar
            seed={data.user.name || data.user.email || "User"}
            variant="initials"
            className="w-8 h-8 rounded-full"
          />
        )}
        <div className="flex flex-col gap-0.5 text-left overflow-hidden flex-1 min-w-0 mx-2">
          <p className="text-sm truncate w-full">{data.user.name}</p>
          <p className="text-sm truncate w-full">{data.user.email}</p>
        </div>
        <ChevronDownIcon className="size-4 shrink-4" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" side="bottom" className="w-56">
        <DropdownMenuLabel>
          <div className="flex flex-col gap-1">
            <span className="font-medium truncate">{data.user.name}</span>
            <span className="text-sm text-muted-foreground truncate font-normal">
              {data.user.email}
            </span>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="cursor-pointer flex items-center justify-between">
          Billing &amp; Plans
          <CreditCardIcon className="size-4 ml-auto opacity-50" />
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={handleSignOut}
          className="cursor-pointer flex items-center justify-between"
        >
          Log Out
          <LogOutIcon className="size-4 ml-auto opacity-50" />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
