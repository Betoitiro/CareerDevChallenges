import React from 'react'
import './Home.css'

const produtos = [
  { id: 1, nome: 'Biscoito Crocante', preco: 8.99, descricao: 'Sabor amanteigado, perfeito para o café.', imagem: 'https://images.unsplash.com/photo-1600718374916-d7e15c15b9af?auto=format&fit=crop&w=400&q=80' },
  { id: 2, nome: 'Suco Natural de Laranja', preco: 5.49, descricao: 'Refrescante e feito na hora.', imagem: 'https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&w=400&q=80' },
  { id: 3, nome: 'Pão Integral', preco: 4.25, descricao: 'Saudável e nutritivo, feito com grãos integrais.', imagem: 'https://images.unsplash.com/photo-1604917877937-7c94e1d1337f?auto=format&fit=crop&w=400&q=80' },
  { id: 4, nome: 'Café Torrado', preco: 12.50, descricao: 'Grãos selecionados, sabor intenso.', imagem: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=400&q=80' },
  { id: 5, nome: 'Marmita Fitness', preco: 18.90, descricao: 'Almoço balanceado para sua dieta.', imagem: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=400&q=80' },
  { id: 6, nome: 'Tapioca Recheada', preco: 9.75, descricao: 'Opção leve com recheio de queijo.', imagem: 'https://images.unsplash.com/photo-1572441710076-79b5e88aeb46?auto=format&fit=crop&w=400&q=80' },
  { id: 7, nome: 'Salada Fresca', preco: 7.30, descricao: 'Mix de folhas e legumes frescos.', imagem: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80' },
  { id: 8, nome: 'Bolo de Chocolate', preco: 15.00, descricao: 'Delicioso bolo com cobertura cremosa.', imagem: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=400&q=80' },
  { id: 9, nome: 'Iogurte Natural', preco: 6.40, descricao: 'Fonte de probióticos para seu intestino.', imagem: 'https://images.unsplash.com/photo-1560807707-8cc77767d783?auto=format&fit=crop&w=400&q=80' },
  { id: 10, nome: 'Sanduíche Natural', preco: 10.80, descricao: 'Pão integral com peito de peru e alface.', imagem: 'https://images.unsplash.com/photo-1562967916-eb82221dfb28?auto=format&fit=crop&w=400&q=80' },
  { id: 11, nome: 'Água Mineral 500ml', preco: 2.00, descricao: 'Água pura para hidratar seu dia.', imagem: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80' },
  { id: 12, nome: 'Suco Detox', preco: 7.99, descricao: 'Combinação especial para desintoxicação.', imagem: 'https://images.unsplash.com/photo-1547516508-2c5b8779d3b6?auto=format&fit=crop&w=400&q=80' },
  { id: 13, nome: 'Empada de Frango', preco: 4.50, descricao: 'Massa crocante e recheio saboroso.', imagem: 'https://images.unsplash.com/photo-1562967916-eb82221dfb28?auto=format&fit=crop&w=400&q=80' },
  { id: 14, nome: 'Pudim de Leite', preco: 9.00, descricao: 'Sobremesa clássica com toque especial.', imagem: 'https://images.unsplash.com/photo-1604908177523-3b5e5ce8d15c?auto=format&fit=crop&w=400&q=80' },
  { id: 15, nome: 'Macarrão Integral', preco: 11.50, descricao: 'Alimento leve e cheio de fibras.', imagem: 'https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=400&q=80' },
  { id: 16, nome: 'Suco de Uva', preco: 6.20, descricao: 'Natural e refrescante.', imagem: 'https://images.unsplash.com/photo-1571689935746-9cc0ed5273cc?auto=format&fit=crop&w=400&q=80' },
  { id: 17, nome: 'Omelete com Legumes', preco: 13.00, descricao: 'Proteína e vegetais na medida certa.', imagem: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=400&q=80' },
  { id: 18, nome: 'Coxinha Fit', preco: 8.50, descricao: 'Delícia saudável para o lanche.', imagem: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=400&q=80' },
  { id: 19, nome: 'Wrap de Frango', preco: 14.20, descricao: 'Leve e prático para sua refeição.', imagem: 'https://images.unsplash.com/photo-1514516870937-98d5577e82c0?auto=format&fit=crop&w=400&q=80' },
  { id: 20, nome: 'Chá Gelado', preco: 5.00, descricao: 'Refrescância com sabor natural.', imagem: 'https://images.unsplash.com/photo-1505253210343-d09f35b4f528?auto=format&fit=crop&w=400&q=80' },
]

const Home = () => {
  return (
    <div className="home-container">
      <h1>Produtos</h1>
      <div className="produtos-grid">
        {produtos.map(({ id, nome, preco, descricao, imagem }) => (
          <div key={id} className="produto-card">
            <img src={imagem} alt={nome} className="imagem-produto" />
            <h2>{nome}</h2>
            <p className="descricao">{descricao}</p>
            <p className="preco">R$ {preco.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
