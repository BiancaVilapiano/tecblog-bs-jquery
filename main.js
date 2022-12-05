$(document).ready(function(){

let article = [
    {titulo: 'Produtos da Apple', subtitulo: 'Lancamento do iphone 14', conteudo: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima consequuntur obcaecati porro, perspiciatis illo ratione sunt nihil magni neque, iusto distinctio, ipsam nostrum velit! Ducimus id debitis quae alias tenetur'},
    {titulo: 'Games Online', subtitulo: 'Amizades em jogos online', conteudo: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima consequuntur obcaecati porro, perspiciatis illo ratione sunt nihil magni neque, iusto distinctio, ipsam nostrum velit! Ducimus id debitis quae alias tenetur'},
    {titulo: 'tecnologia', subtitulo: 'Avanco da Tec em 2022', conteudo: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima consequuntur obcaecati porro, perspiciatis illo ratione sunt nihil magni neque, iusto distinctio, ipsam nostrum velit! Ducimus id debitis quae alias tenetur'},
    {titulo: 'Poder do Cafe', subtitulo: 'Vantagens do cafe', conteudo: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima consequuntur obcaecati porro, perspiciatis illo ratione sunt nihil magni neque, iusto distinctio, ipsam nostrum velit! Ducimus id debitis quae alias tenetur'},
    {titulo: 'Ellon Musk', subtitulo: 'Ellon Musk brinca com twitter', conteudo: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima consequuntur obcaecati porro, perspiciatis illo ratione sunt nihil magni neque, iusto distinctio, ipsam nostrum velit! Ducimus id debitis quae alias tenetur'},
    {titulo: 'Lula vs Bolsonaro', subtitulo: 'fraldado a eleição ??', conteudo: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima consequuntur obcaecati porro, perspiciatis illo ratione sunt nihil magni neque, iusto distinctio, ipsam nostrum velit! Ducimus id debitis quae alias tenetur'},
]

article.forEach(lista => {
    
    let template = $($('#template-section').html())

    let h2 = template.find('strong')

    let p_sub = template.find('#p-subtitulo')

    let p_cont = template.find('#p-conteudo')


    h2.append(lista.titulo)

    p_sub.append(lista.subtitulo)
   
    p_cont.append(lista.conteudo)


    let destination = $('.template-destination')


    destination.append(template)
    
    













})





















})