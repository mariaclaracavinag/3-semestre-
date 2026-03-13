CREATE TABLE USUARIOS(
  id_usuario SERIAL primary key,
  nome VARCHAR(100) NOT NULL,
  email VARCHAR(150) NOT NULL,
  senha VARCHAR (255) Not NULL
);

CREATE TABLE DEPARTAMENTOS(
  id_departamento SERIAL primary key,
  nome VARCHAR(100) NOT NULL,
  descricao VARCHAR (400) 
);

CREATE TABLE ORDEM_SERVICO(
  id_ordem SERIAL primary key,
  numero_ordem INT unique, 
  titulo VARCHAR (100) NOT NULL,
  descricao VARCHAR (400) NOT NULL,
  prioridade VARCHAR (400) NOT NULL,
  status VARCHAR (400) NOT NULL,
  data DATE NOT NULL, 
  id_usuario INT NOT NULL references USUARIOS (id_usuario),
  id_departamento INT NOT NULL references DEPARTAMENTOS (id_departamento)
);

INSERT INTO USUARIOS (nome,email,senha) VALUES('Ana Silva', 'ana.silva@email.com', 'senha123')
INSERT INTO USUARIOS (nome,email,senha) VALUES('Maria Clara', 'Maria.Clara@email.com', 'senha123');

INSERT INTO DEPARTAMENTOS (nome,descricao) VALUES
('TI', 'tecnologia da informação'),
('Manutenção', 'Setor de manutenção geral');

INSERT INTO ordem_servico (numero_ordem, titulo, descricao, prioridade, status, data, id_usuario, id_departamento) VALUES
(1001,'troca cabo de rede', 'ponto de rede da sala 203 está sem conexão', 'media', 'aberta', '2026-02-26',1,1),
(1002,'Consertar ar-condicionado', 'Unidde do laboratorio parou de gelar', 'alta', 'em_andamento', '2026-02-26',2,2)


