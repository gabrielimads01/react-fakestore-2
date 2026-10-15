const Header = ({ filtrarProdutos, ordenarProdutos, pesquisarProdutos }) => {
    return (
        <header className="flex items-center justify-between px-4 lg:px-15 py-4 bg-orange-500">
            <div className="eb-4 md:md0">
                <input
                    type="text"
                    placeholder="Digite o nome do produto"
                    className="w-full lg:w-120 h-10 rounded bg-white pl-4"
                    onChange={(event) => pesquisarProdutos(event.target.value)}
                />
            </div>
            <div className="flex gap-4 *:w-full lg:*:w-auto">
                <select onChange={(event) => filtrarProdutos(event.target.value)} className="h-10 rounded bg-white px-4">
                    <option selected disabled>Filtrar produtos</option>
                    <option>All</option>
                    <option>Men's clothing</option>
                    <option>Women's clothing</option>
                    <option>Electronics</option>
                    <option>Jewelery</option>
                </select>
                <select onChange={(event) => ordenarProdutos(event.target.value)} className="h-10 rounded bg-white px-4">
                    <option selected disabled>Ordenar produtos</option>
                    <option value="preco">Ordernar por Preço</option>
                    <option value="nota">Ordernar por Avaliação</option>
                </select>
            </div>
        </header>
    );
}

export default Header;