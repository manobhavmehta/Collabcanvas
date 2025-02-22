import { Plus } from "lucide-react";
import { OrganizationProfile } from "@clerk/nextjs";

import { Dialog,DialogContent,DialogTrigger } from "@radix-ui/react-dialog";
import { Button } from "@/components/ui/button";

export const Invite = () => {
    return (
        <Dialog>   
            <DialogTrigger asChild> 
                <Button>
                    <Plus className="h-4 w-4 mr-2"></Plus>
                    Invite
                </Button>
            </DialogTrigger>
            <DialogContent className="p-0 bg-transparent border-none max-w-[880px]">
                <OrganizationProfile />
            </DialogContent>
        </Dialog>
    )
}