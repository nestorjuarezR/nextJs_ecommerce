import ProductoDetalle from "@/app/components/Product/ProductPage";
import { getProductoBySlug } from "@/lib/actions";
import { notFound } from "next/navigation";

interface Params{
    params: Promise<{
        slug: string;
    }>
}

export default async function ProductoBySlugPage({params}: Params){
    const paramValues = await params;
    const slug = paramValues.slug;
    const producto = await getProductoBySlug(slug);

    if(!producto){
        return notFound();
    }
    return <ProductoDetalle producto={producto}/>;

}