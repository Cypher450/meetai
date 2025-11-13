import { createAvatar } from '@dicebear/core';
import { botttsNeural, initials } from '@dicebear/collection';

import { cn } from '@/lib/utils';

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface GeneratedAvatarProps {
  seed: string;
    className?: string;
  variant?: 'botttsNeural' | 'initials';
}

export const GeneratedAvatar = ({
  seed,
  className,
  variant
}: GeneratedAvatarProps) => {
    let avatar;

    if (variant === 'botttsNeural') {
        avatar = createAvatar(botttsNeural, {
            seed,
            size: 128,
        });
    } else {
        avatar = createAvatar(initials, {
            seed,
            fontWeight: 500,
            size: 128,
            fontSize: 60,
        });
    }

    return (
        <Avatar className={cn(className)}>
            <AvatarImage src={avatar.toDataUri()} alt = "Avatar"/>
            <AvatarFallback>{seed.charAt(0).toUpperCase()}</AvatarFallback>
        </Avatar>
    );
};