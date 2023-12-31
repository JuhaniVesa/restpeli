CREATE DATABASE visailu

CREATE TABLE visailu_kysymykset (
    id INT AUTO_INCREMENT PRIMARY KEY,
    kysymys VARCHAR(300) NOT NULL,
    vaihtoehto1 VARCHAR(100) NOT NULL,
    vaihtoehto2 VARCHAR(100) NOT NULL,
    vaihtoehto3 VARCHAR(100) NOT NULL,
    vaihtoehto4 VARCHAR(100) NOT NULL,
    vastaus VARCHAR(100) NOT NULL,
    pelaajan_vastaus VARCHAR(100) NOT NULL
);

DROP TABLE visailu_kysymykset

INSERT INTO visailu_kysymykset (kysymys, vaihtoehto1, vaihtoehto2, vaihtoehto3, vaihtoehto4, vastaus)
VALUES 
('Mihin hollantilaiseen jalkapalloseuraan Sami Hyypiä siirtyi MyPasta 1995?', 'Feynoordiin', 'Willem II:een', 'Ajaxiin', 'PSV:hen', 'Willem II:een' ),
('Minkä vuoden olympialaset Helsingissä piti alunperin järjestää?', 1948, 1940, 1944, 1936, 1940),
('Kuka on naisten jalkapallon A-maajoukkueen paras maalintekijä?', 'Anne Mäkinen', 'Sanna Talonen', 'Sanni Franssi', 'Laura Kalmari','Laura Kalmari' ),
('Mitkä joukkueet kohtasivat Hakametsän hallin avauspelissä?', 'Tappara-Ilves', 'Tampere vastaan Turka', 'Tampere vastaan muu Suomi', 'Hilpara-KooVee', 'Tampere vastaan muu Suomi'),
('Missä Mika Häkkinen voitti ensimmäisen GP-kisansa formula ykkösissä (1997)?', 'Monzassa', 'Silverstonessa', 'Espanjan Jerezissä', 'Monacossa', 'Espanjan Jerezissä')





