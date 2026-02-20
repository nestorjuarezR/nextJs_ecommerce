"use server";

import prisma from "@/prisma/prisma";


export async function getProductoBySlug(slug: string){
    const product = await prisma.producto.findUnique({
        where:{
            slug: slug,
        },
        include:{
            categeoria: true,
        },
    });
    if(!product) return null;
    return product;
}


