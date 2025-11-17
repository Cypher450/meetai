"use client";

import { Button } from "@/components/ui/button";
import { useSidebar } from "@/components/ui/sidebar";
import { PanelLeftIcon, PanelLeftCloseIcon, SearchIcon} from "lucide-react";
import { DashboardCommand } from "@/modules/dashboard/ui/components/dashboard-command";
import { useEffect, useState } from "react";


export const DashboardNavbar = () => {
    const { state, toggleSidebar, isMobile } = useSidebar();
    const [commandOpen, setCommandOpen] = useState(false);

    useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
                e.preventDefault();
                setCommandOpen((open) => !open);
            }
        };
        document.addEventListener('keydown', down);
        return () => document.removeEventListener('keydown', down);
    }, []);
    return (
        <>
            <DashboardCommand open={commandOpen} setOpen={setCommandOpen}/>
            <nav className="flex px-4 gap-x-2 items-center py-3 border-b bg-background">
                <Button className="size-9" variant="outline" onClick={toggleSidebar}>
                    {(state === "collapsed" || isMobile)
                        ? <PanelLeftIcon className="size-4"/>
                        : <PanelLeftCloseIcon className="size-4"/>
                    }   
                </Button>
                <Button 
                    variant="outline" 
                    className="h-9 w-[240px] md:w-[300px] lg:w-[400px] xl:w-[500px] 2xl:w-[600px] justify-start text-left font-normal text-muted-foreground hover:text-muted-foreground"
                    size="sm"
                    onClick={() => setCommandOpen((open) => !open)}
                    >
                    <SearchIcon className="size-4 mr-2"/>
                        Search
                    <kbd className="ml-auto text-xs font-normal text-muted-foreground flex items-center gap-1 px-1 bg-muted/50 rounded-md py-0.5 px-1.5 border border-muted-foreground/10">
                        <span className="text-xs">&#8984;</span>K
                    </kbd>
                </Button>
            </nav>
        </>
    );
};
