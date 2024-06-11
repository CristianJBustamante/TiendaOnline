export const productList = [
  {
    id: "1",
    name: "Catan",
    distributor: "Devir",
    price: 40,
    players: "3-4",
    theme: "Colonización",
    description: "Catan es un juego de mesa multijugador diseñado por Klaus Teuber.",
    img: "https://m.media-amazon.com/images/I/71kQ14KmFML._AC_UL320_.jpg"
  },
  {
    id: "2",
    name: "Carcassonne",
    distributor: "Devir",
    price: 35,
    players: "2-5",
    theme: "Construcción",
    description: "Carcassonne es un juego de mesa en el que los jugadores desarrollan el área alrededor de la ciudad medieval francesa de Carcasona.",
    img: "https://m.media-amazon.com/images/I/81mj6maLP3L._AC_UL320_.jpg",
  },
  {
    id: "3",
    name: "Dixit",
    distributor: "Libellud",
    price: 30,
    players: "3-6",
    theme: "Narrativa",
    description: "Dixit es un juego de mesa de cartas ilustradas en el que los jugadores deben interpretar las imágenes y contar historias.",
    img: "https://m.media-amazon.com/images/I/812SzDfc2SL._AC_UL320_.jpg",
  },
  {
    id: "4",
    name: "Pandemic",
    distributor: "Z-ManGames",
    price: 45,
    players: "2-4",
    theme: "Cooperativo",
    description: "Pandemic es un juego de mesa cooperativo donde los jugadores deben trabajar juntos para detener la propagación de enfermedades.",
    img: "https://m.media-amazon.com/images/I/811YPz8YufL._AC_UL320_.jpg",
  },
  {
    id: "5",
    name: "Terraforming Mars",
    distributor: "Devir",
    price: 60,
    players: "1-5",
    theme: "Ciencia Ficción",
    description: "Terraforming Mars es un juego de estrategia donde los jugadores compiten para terraformar el planeta Marte.",
    img: "https://m.media-amazon.com/images/I/91x5bb0PyaL._AC_UL320_.jpg",
  },
  {
    id: "6",
    name: "7 Wonders",
    distributor: "Libellud",
    price: 50,
    players: "2-7",
    theme: "Civilización",
    description: "7 Wonders es un juego de construcción de civilizaciones en el que los jugadores desarrollan una de las siete maravillas del mundo antiguo.",
    img: "https://m.media-amazon.com/images/I/81DF9OaRQiL._AC_UL320_.jpg",
  },
  {
    id: "7",
    name: "Ticket to Ride",
    distributor: "Z-ManGames",
    price: 40,
    players: "2-5",
    theme: "Aventura",
    description: "Ticket to Ride es un juego de mesa en el que los jugadores coleccionan cartas de tren para completar rutas en un mapa.",
    img: "https://m.media-amazon.com/images/I/91YNJM4oyhL._AC_UL320_.jpg",
  },
  {
    id: "8",
    name: "Azul",
    distributor: "Devir",
    price: 30,
    players: "2-4",
    theme: "Abstracto",
    description: "Azul es un juego de mesa abstracto en el que los jugadores compiten por construir el mosaico más hermoso.",
    img: "https://m.media-amazon.com/images/I/91A0nIsV57S._AC_UL320_.jpg",
  },
  {
    id: "9",
    name: "Gloomhaven",
    distributor: "CephalofairGames",
    price: 150,
    players: "1-4",
    theme: "Aventura",
    description: "Gloomhaven es un juego de aventuras y exploración de mazmorras con elementos de rol.",
    img: "https://m.media-amazon.com/images/I/81crhhZd63L._AC_UL320_.jpg",
  },
  {
    id: "10",
    name: "Root",
    distributor: "Libellud",
    price: 50,
    players: "2-4",
    theme: "Estratégico",
    description: "Root es un juego de estrategia y aventura donde los jugadores compiten por el control de un vasto desierto.",
    img: "https://m.media-amazon.com/images/I/91ezFG-gQ6L._AC_UL320_.jpg",
  }
];


export const getProducts = (idDistributor) => {

    const list = idDistributor ? productList.filter(aProduct => aProduct.distributor === idDistributor) : productList

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