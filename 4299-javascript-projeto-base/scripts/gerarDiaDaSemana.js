function gerarDiaDaSemana(){
    const diaDaSemana = new Date().toLocaleDateString("pt-BR", { weekday: "long" });
    const hora = new Date().toLocaleTimeString("pt-BR", { hour: "numeric", minute: "numeric", second: "numeric" })
    const data = new Date().toLocaleDateString("pt-BR");

    const dataCompleta = `${diaDaSemana} (${data}) às ${hora} `;
    
    return dataCompleta;
}

export default gerarDiaDaSemana;