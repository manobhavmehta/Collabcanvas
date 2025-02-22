"use client";

import { useOrganizationList } from "@clerk/nextjs";
import { Item } from "./item";

export const List = () => {
    const {userMemberships} = useOrganizationList({
        userMemberships: {
            infinite: true,
        },
    });
    if(!userMemberships.data?.length) return null;
    // console.log(userMemberships);
    return(
        <ul className="space-y-4">
            {userMemberships.data?.map((mem) => {
                // console.log(mem.organization.id);
                return(
                <Item 
                key={mem.organization.id}
                id={mem.organization.id}
                name={mem.organization.name}
                imageUrl={mem.organization.imageUrl}
                />
                
            )})}

        </ul>
    );
};