import { ProductGrid } from "@/components/products/product-grid/ProductGrid";
import { Title } from "@/components/ui/title/Title";
import { Category } from "@/interfaces";
import { initialData } from "@/seed/seed";
import { notFound } from "next/navigation";

interface Props {
    params: {
        id: Category;
    }
}

const products = initialData.products;

export default function ({ params }: Props) {
    
    const { id } = params;
    const productsFiltrados = initialData.products.filter(product => product.gender === id);

    switch (id) {
        case 'kid':
            return (<>
                <Title
                    title="Tienda"
                    subtitle="Productos de Niños"
                    className="mb-2"
                />

                <ProductGrid
                    products={productsFiltrados}
                />

            </>);
        case 'women':
            return (<>
                <Title
                    title="Tienda"
                    subtitle="Productos de Mujer"
                    className="mb-2"
                />

                <ProductGrid
                    products={productsFiltrados}
                />

            </>);
        case 'men':
            return (<>
                <Title
                    title="Tienda"
                    subtitle="Productos de Hombre"
                    className="mb-2"
                />

                <ProductGrid
                    products={productsFiltrados}
                />

            </>);
        default: break;
    }
  
}