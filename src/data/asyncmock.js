export const productList = [
    {
        id: "1",
        name: "Catan",
        distributor: "Devir",
        price: 40,
        players: "3-4",
        theme: "Colonización",
        description: "Catan es un juego de mesa multijugador diseñado por Klaus Teuber.",
        image: "https://example.com/catan.jpg"
      },
      {
        id: "2",
        name: "Carcassonne",
        distributor: "Devir",
        price: 35,
        players: "2-5",
        theme: "Construcción",
        description: "Carcassonne es un juego de mesa en el que los jugadores desarrollan el área alrededor de la ciudad medieval francesa de Carcasona.",
        image: "https://example.com/carcassonne.jpg"
      },
      {
        id: "3",
        name: "Dixit",
        distributor: "Libellud",
        price: 30,
        players: "3-6",
        theme: "Narrativa",
        description: "Dixit es un juego de mesa de cartas ilustradas en el que los jugadores deben interpretar las imágenes y contar historias.",
        image: "https://example.com/dixit.jpg"
      }
]


export const getProducts = (idCategory) => {

    const list = idCategory ? productList.filter(aProduct => aProduct.category === idCategory) : productList

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            list.length > 0 ?
                resolve(list)
                :
                reject("No hay datos")
        }, 500
        )
    })
}