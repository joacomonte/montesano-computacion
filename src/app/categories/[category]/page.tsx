type Params = {
    params : {
        category : string
    }
}
  
  export default function Category({params: {category}} :Params) {
    return <h1>Lista de productos de {category}</h1>
  }