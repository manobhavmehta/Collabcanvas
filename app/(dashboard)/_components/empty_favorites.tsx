import Image from "next/image";

export const EmptyFavorites = () => {
    return(
        <div className="h-full flex flex-col items-center justify-center">
            <Image
                src="/empty-favorites.svg"
                height={140}
                width={140}
                alt="Empty"
                >
            </Image>
            <h2 className="text-2xl font-semibold mt-6">No Favourite Canvas</h2>
            <p className="text-muted-foreground textg-s">
                Try favouriting a canvas
            </p>
        </div>
    )
}