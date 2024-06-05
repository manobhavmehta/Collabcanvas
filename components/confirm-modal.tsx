"use client";

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger

} from "@/components/ui/alert-dialog";

interface ConfirmationModalProps {
    children: React.ReactNode;
    onConfirm: ()=> void;
    disabled?: boolean;
    header: string;
    description?: string;
};

export const ConfirmModal = (
    {
        children,
        onConfirm,
        disabled,
        header,
        description,
    }: ConfirmationModalProps
) => {

    const handleconfirm = () => {
        onConfirm();
    }

    return(
        <AlertDialog>
            <AlertDialogTrigger asChild>
                {children}
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>
                        {header}
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                        {description}
                    </AlertDialogDescription>
                    <AlertDialogCancel>
                        Cancel
                    </AlertDialogCancel>
                    <AlertDialogAction
                        disabled={disabled}
                        onClick={handleconfirm}
                    >
                        Confirm
                    </AlertDialogAction>
                </AlertDialogHeader>
            </AlertDialogContent>
        </AlertDialog>
    );
};