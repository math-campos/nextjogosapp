function SSR({ jogos }) {
    return (
        <div>
            <h1>Meus Jogos - SSR</h1>
            <table>
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Nome</th>
                        <th>Descrição</th>
                        <th>Estrelas</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        jogos.map(obj => (
                            <tr key={obj.codigo}>
                                <td>{obj.codigo}</td>
                                <td>{obj.nome}</td>
                                <td>{obj.descricao}</td>
                                <td>{obj.estrelas}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default SSR;

export async function getServerSideProps() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/jogos`);
    const jogos = await res.json();

    return {
        props: {
            jogos
        }
    }
}
