export const metadata= {
  title: 'our products',
  name: 'traditional drink',
}

export default async function Products() {
  const resp = await fetch('http://localhost:9999/data');
  const datas = await resp.json();

  return(
    <div>
      <h1>our products</h1>
      <p>
        {datas.map((data)=>{
          return <p key={data.id}>{data.name}</p>
        })}
      </p>
    </div>
  )
}