import { getById } from "@/lib/getById";

type Params = {
  params: {
    id: string;
  };
};

export default async function Subcategory({ params: { id } }: Params) {
  let data = await getById(id);

  return (
    <div
      style={{
        marginTop: "150px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
      }}
    >
      <h1 style={{ textAlign: "center", margin: "50px" }}>
        {data &&
          data.map((product) => <span key={product[0]}> {product[1]} </span>)}
      </h1>
    </div>
  );
}