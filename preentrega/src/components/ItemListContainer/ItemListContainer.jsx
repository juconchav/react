function ItemListContainer(props){
    return (
      <div className = "articles">
        <h1>{props.titulo}</h1>
          <ul>
            <li>articulo w</li>
            <li>articulo e</li>
            <li>articulo j</li>
            <li>articulo a</li>
        </ul>
      </div>
      
    );
}

export default ItemListContainer;