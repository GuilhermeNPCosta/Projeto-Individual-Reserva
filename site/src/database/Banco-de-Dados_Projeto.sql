Create database Projeto_PI;

Use Projeto_PI;

Create table usuario (
	idUsuario int primary key auto_increment,
    nomeUsuario varchar(40) not null,
    email varchar(40) not null,
    senha varchar(40) not null,
	celular char(11)
);

Create table comentario (
	idComentario int auto_increment,
    FkUsuario int,
    Foreign key (FkUsuario) references usuario(idUsuario),
    texto varchar(300),
	evento datetime not null,
    Primary key (idComentario, FkUsuario)
    );
    
    Insert into usuario values 
    (null, 'Gary Bryac', 'garyb@gmail.com', 'crazyduck099', '13978957634'),
    (null, 'Mason Steryll', 'massteryll@outlook.com', 'horsepowwer50084', '15971845283'),
    (null, 'Ashley Grayson', 'ash.gray@hotmail.com', 'steamedturkey095', '21984527563');
    
    Insert into comentario values
    (1, 1, 'Boa estrutura de site, tem potencial!', '2021-09-30 11:00'),
    (2, 2, 'Interessante como apresenta o conteúdo para leigos com relação à essa possibilidade chamada de RPG de Mesa.', '2021-10-12 14:00'),
    (3, 3, 'Vi o site, e me apaixonei à primeira vista pela coisa, estou animada, tem alguma dica de como encontro alguém para jogar?', '2021-10-16 17:00');
    
    Select * from usuario;
    Select * from comentario;
    
    Drop tables comentario, usuario;