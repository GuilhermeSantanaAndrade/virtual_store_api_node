CREATE TABLE produtos (
  id INT PRIMARY KEY auto_increment,
  nome VARCHAR(60),
  descricao VARCHAR(300),
  preco DOUBLE PRECISION,
  imagemPath VARCHAR(500)
);
  
CREATE TABLE vendas_itens (  
  id int PRIMARY KEY AUTO_INCREMENT,
  id_venda INT,
  id_produto INT,
  FOREIGN KEY(id_venda) REFERENCES vendas(id),
  FOREIGN KEY(id_produto) REFERENCES produtos(id)
)
  
CREATE TABLE vendas (
  id INT PRIMARY KEY auto_increment,
  data_hora TIMESTAMP
);