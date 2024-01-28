
export default function Product(products) {
    return(
        <>
        <h1>OUR PRODUCTS</h1>
        <ul>
        <li key={products.전통주명}>
        </li>
        </ul>
        </>
    )
}
export async function GET() {
    try {
      const res = await fetch('https://api.odcloud.kr/api/15048755/v1/uddi:fec53d3a-2bef-4494-b50e-f4e566f403e0');
      const data = await res.json();
  
      console.log(`Show data fetched. Count: ${data.data.length}`);
  
      return {
        props: {
          product: data.data,
        },
      };
    } catch (error) {
      console.error('Error fetching data:', error);
      return {
        props: {
          products: null,
        },
      };
    }
  };
