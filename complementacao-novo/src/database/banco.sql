CREATE DATABASE IF NOT EXISTS portfolio;
USE portfolio;

CREATE TABLE perfil (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  descricao TEXT
);

CREATE TABLE cursos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  fk_perfil INT NOT NULL,
  nome VARCHAR(100) NOT NULL,
  horas INT NOT NULL,
  FOREIGN KEY (fk_perfil) REFERENCES perfil(id)
);

CREATE TABLE certificados (
  id INT AUTO_INCREMENT PRIMARY KEY,
  fk_perfil INT NOT NULL,
  titulo VARCHAR(100) NOT NULL,
  ano INT NOT NULL,
  FOREIGN KEY (fk_perfil) REFERENCES perfil(id)
);

INSERT INTO perfil (nome, descricao) VALUES
('Gabriel Vinicius Andrade', 'Estudante de Desenvolvimento de Sistemas');

INSERT INTO cursos (fk_perfil, nome, horas) VALUES
(1, 'Desenvolvimento Web', 120),
(1, 'Banco de Dados', 80);

INSERT INTO certificados (fk_perfil, titulo, ano) VALUES
(1, 'Certificado HTML/CSS', 2025),
(1, 'Certificado JavaScript', 2026);