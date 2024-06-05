"use client";

import { DropdownMenuContentProps } from "@radix-ui/react-dropdown-menu";
import {DropdownMenu,
DropdownMenuTrigger,
DropdownMenuContent,
DropdownMenuItem,
DropdownMenuSeparator} from "@/components/ui/dropdown-menu"
import { Link, Link2, Pencil, Trash2 } from "lucide-react";
import { useApiMutation } from "@/hooks/use-api-mutation";
import { toast } from "sonner";
import { api } from "@/convex/_generated/api";
import { ConfirmModal } from "./confirm-modal";
import { Button } from "./ui/button";
import { useRenameModal } from "@/store/use-rename-model";

interface ActionsProps {
    children: React.ReactNode;
    side?: DropdownMenuContentProps["side"];
    sideOffset?: DropdownMenuContentProps["sideOffset"];
    id: string;
    title: string;
}   

export const Actions = ({
    children,
    side,
    sideOffset,
    id,
    title,
}:ActionsProps) => {
    const {onOpen} = useRenameModal();
    const {mutate,pending} = useApiMutation(api.board.remove);
 
    const onCopyLink = () => {
        navigator.clipboard.writeText(
            `${window.location.origin}/board/${id}`,
        ).then(() => toast.success("Link copied"))
        .catch(()=> toast.error("Faild to Copy Link"))
    }

    const onDelete = () => {
        mutate({id})
        .then(() => toast.success("Board Deleted") )
        .catch(() => toast.error("Failed to Delete"))
    }

    return(
       <DropdownMenu>
        <DropdownMenuTrigger asChild>
            {children}
        </DropdownMenuTrigger>
        <DropdownMenuContent
        side={side}
        sideOffset={sideOffset}
        onClick={(e)=>e.stopPropagation()}
        className="w-60">
            <DropdownMenuItem
            onClick={onCopyLink}
            className="p-3 cursor-pointer"
            >
                <Link2 className="h-4 w-4 mr-2"> </Link2>
                 Copy Board Link
            </DropdownMenuItem>
            <DropdownMenuItem
            onClick={()=> onOpen(id,title)}
            className="p-3 cursor-pointer"
            >
                <Pencil className="h-4 w-4 mr-2"> </Pencil>
                 Rename
            </DropdownMenuItem>

            <ConfirmModal 
            header="Delete Board?"
            description="This will delete the board."
            disabled={pending}
            onConfirm={onDelete}
            >
                <Button
                // onClick={onDelete}
                variant="ghost"
                className="p-3 cursor-pointer text-sm w-full justify-start font-normal"
                >
                    <Trash2 className="h-4 w-4 mr-2"> </Trash2>
                    Delete
                </Button>
            </ConfirmModal>

        </DropdownMenuContent>
       </DropdownMenu>
    )
}