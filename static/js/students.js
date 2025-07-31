const students = [
  {
    "id": 1,
    "name": "Abraão Rogério Alves Araujo",
    "matricula": "2021116BADM0011",
    "birthDate": "03/01/2002",
    "photo": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRuokRBmVB6p_OvpKkJhC9URbFgRW2D0bRGPhS_kRZcnZZpvgnBrKZVHzqJ11JrO9FMl9cqHQ_-ayyQYrO8qjf-RV2hg1SmyxauwiaAZE3V",
    "curso": "Bacharelado em Administração - Piripiri - Ser/Mod: 8"
  },
  {
    "id": 2,
    "name": "Aciclino Gomes da Silva Neto",
    "matricula": "2023116LMAT0040",
    "birthDate": "09/01/1999",
    "photo": null,
    "curso": "Licenciatura em Matemática - Piripiri - Ser/Mod: 5"
  },
  {
    "id": 3,
    "name": "ADALBERTO FARIAS NASCIMENTO",
    "matricula": "2024116ISINF0015",
    "birthDate": "17/02/2009",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116ISINF0015_25.jpg",
    "curso": "Técnico em Informática - Integrado Semestral - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 4,
    "name": "Addely D'Arc Souza Vieira",
    "matricula": "2025116BADM0013",
    "birthDate": "30/10/2006",
    "photo": null,
    "curso": "Bacharelado em Administração - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 5,
    "name": "Adevaldo Gomes Sousa",
    "matricula": "2024216JADM0005",
    "birthDate": "14/03/1988",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024216JADM0005_51.jpg",
    "curso": "Técnico em Administração Integrado ao Ensino Médio - PROEJA - Ser/Mod: 2"
  },
  {
    "id": 6,
    "name": "Adrian Moisés Silva Vieira",
    "matricula": "2024216MADM0017",
    "birthDate": "07/06/2002",
    "photo": null,
    "curso": "Técnico em Administração - Concomitante/Subsequente - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 7,
    "name": "Adriana Rosa da Costa",
    "matricula": "2021116LMAT0017",
    "birthDate": "02/02/2001",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2021116LMAT0017_14.jpg",
    "curso": "Licenciatura em Matemática - Piripiri - Ser/Mod: 9"
  },
  {
    "id": 8,
    "name": "Adriana Silva Santos",
    "matricula": "2023116TDSM0031",
    "birthDate": "01/03/1984",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116TDSM0031_16.jpg",
    "curso": "Tecnologia em Design de Moda - Piripiri - Ser/Mod: 4"
  },
  {
    "id": 9,
    "name": "Adriano César de Sousa Barroso",
    "matricula": "2025116UGRH0023",
    "birthDate": "23/04/1970",
    "photo": null,
    "curso": "Tecnologia em Gestão de Recursos Humanos - Ser/Mod: 1"
  },
  {
    "id": 10,
    "name": "Adrislani de Almeida Moura",
    "matricula": "2023116ISINF0055",
    "birthDate": "03/09/2007",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116ISINF0055_09.jpg",
    "curso": "Técnico em Informática - Integrado Semestral - Piripiri - Ser/Mod: 5"
  },
  {
    "id": 11,
    "name": "ADRYA YASMIM CARDOSO SOARES",
    "matricula": "2025116LMAT0021",
    "birthDate": "28/12/2006",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116LMAT0021_15.jpg",
    "curso": "Licenciatura em Matemática - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 12,
    "name": "AFONSO VANDERLEI DA SILVA",
    "matricula": "2025116TADS0031",
    "birthDate": "11/01/2007",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116TADS0031_43.jpg",
    "curso": "Tecnologia em Análise e Desenvolvimento de Sistemas - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 13,
    "name": "AGHATA EMMYLI SOUSA OLIVEIRA",
    "matricula": "2024116ISADM0057",
    "birthDate": "18/10/2007",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116ISADM0057_33.jpg",
    "curso": "Técnico em Administração - Integrado Semestral - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 14,
    "name": "AKILES RIBEIRO MOURA",
    "matricula": "2024116ISINF0032",
    "birthDate": "17/06/2008",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116ISINF0032_27.jpg",
    "curso": "Técnico em Informática - Integrado Semestral - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 15,
    "name": "ALAN FIDELES PEREIRA",
    "matricula": "2024116LMAT0026",
    "birthDate": "23/09/2005",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116LMAT0026_14.jpg",
    "curso": "Licenciatura em Matemática - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 16,
    "name": "ALAN FREITAS DA SILVA",
    "matricula": "2024116ISADM0007",
    "birthDate": "12/03/2009",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116ISADM0007_46.jpg",
    "curso": "Técnico em Administração - Integrado Semestral - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 17,
    "name": "ALANA BEATRIZ DA SILVA ARAUJO GONCALVES",
    "matricula": "2025216LPIN0001",
    "birthDate": "02/02/2000",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025216LPIN0001_58.jpg",
    "curso": "Licenciatura Intercultural Indígena - CAPIR - Ser/Mod: 1"
  },
  {
    "id": 18,
    "name": "Alana Soares da Cunha",
    "matricula": "2023116ISINF0043",
    "birthDate": "15/05/2007",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116ISINF0043_53.jpg",
    "curso": "Técnico em Informática - Integrado Semestral - Piripiri - Ser/Mod: 5"
  },
  {
    "id": 19,
    "name": "Alani Gabrieli Alcobaça Silva",
    "matricula": "2024116BADM0026",
    "birthDate": "15/02/2005",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116BADM0026_13.jpg",
    "curso": "Bacharelado em Administração - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 20,
    "name": "ALDILON SILVA ARAUJO",
    "matricula": "2025116UGRH0009",
    "birthDate": "23/05/1997",
    "photo": null,
    "curso": "Tecnologia em Gestão de Recursos Humanos - Ser/Mod: 1"
  },
  {
    "id": 21,
    "name": "ALESSANDERSSON JOSÉ RODRIGUES CARDOSO",
    "matricula": "2025116ISINF0005",
    "birthDate": "16/06/2009",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116ISINF0005_38.jpg",
    "curso": "Técnico em Informática - Integrado Semestral - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 22,
    "name": "ALEX NILTON CARNEIRO SANTOS",
    "matricula": "2025116BADM0039",
    "birthDate": "06/10/2005",
    "photo": null,
    "curso": "Bacharelado em Administração - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 23,
    "name": "ALEXANDRE OLIVEIRA MELO",
    "matricula": "2024116BADM0001",
    "birthDate": "02/09/2000",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116BADM0001_36.jpg",
    "curso": "Bacharelado em Administração - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 24,
    "name": "Alice David Sampaio",
    "matricula": "2025116ISADM0007",
    "birthDate": "22/09/2009",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116ISADM0007_59.jpg",
    "curso": "Técnico em Administração - Integrado Semestral - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 25,
    "name": "ALINE DE CARVALHO ALMEIDA",
    "matricula": "2025116TDSM0021",
    "birthDate": "30/09/2006",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116TDSM0021_21.jpg",
    "curso": "Tecnologia em Design de Moda - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 26,
    "name": "Aline dos Santos Dias",
    "matricula": "2023116BADM0036",
    "birthDate": "03/01/2003",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116BADM0036_01.jpg",
    "curso": "Bacharelado em Administração - Piripiri - Ser/Mod: 5"
  },
  {
    "id": 27,
    "name": "ALINE ROBERTA RODRIGUES BRITO",
    "matricula": "2024116LPIN0030",
    "birthDate": "28/06/1985",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116LPIN0030_49.jpg",
    "curso": "Licenciatura Intercultural Indígena - CAPIR - Ser/Mod: 1"
  },
  {
    "id": 28,
    "name": "ALISSON RAMIRES SENA DA SILVA",
    "matricula": "2025116TADS0044",
    "birthDate": "24/05/2006",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116TADS0044_40.jpg",
    "curso": "Tecnologia em Análise e Desenvolvimento de Sistemas - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 29,
    "name": "Allana Rakel de Sousa Alves",
    "matricula": "2022116LMAT0048",
    "birthDate": "07/09/2004",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2022116LMAT0048_00.jpg",
    "curso": "Licenciatura em Matemática - Piripiri - Ser/Mod: 6"
  },
  {
    "id": 30,
    "name": "Amanda Beatriz da Silva Carvalho",
    "matricula": "2023116ISADM0009",
    "birthDate": "14/02/2008",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116ISADM0009_43.jpg",
    "curso": "Técnico em Administração - Integrado Semestral - Piripiri - Ser/Mod: 5"
  },
  {
    "id": 31,
    "name": "Amanda de Sousa Brandao",
    "matricula": "2022116ISADM0613",
    "birthDate": "24/02/2003",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2022116ISADM0613_24.jpg",
    "curso": "Técnico em Administração - Integrado Semestral - Piripiri - Ser/Mod: 5"
  },
  {
    "id": 32,
    "name": "Amanda Laryssa da Silva Bringel",
    "matricula": "2024116TDSM0011",
    "birthDate": "20/09/2005",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116TDSM0011_49.jpg",
    "curso": "Tecnologia em Design de Moda - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 33,
    "name": "AMANDA MENDES DA SILVA",
    "matricula": "2025116BADM0044",
    "birthDate": "17/02/2007",
    "photo": null,
    "curso": "Bacharelado em Administração - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 34,
    "name": "Amuriel Ferreira do Nascimento",
    "matricula": "2023216JVES0008",
    "birthDate": "22/10/1985",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023216JVES0008_15.jpg",
    "curso": "Técnico em Vestuário Integrado ao Ensino Médio - PROEJA - Ser/Mod: 4"
  },
  {
    "id": 35,
    "name": "Amym Melo de Sena",
    "matricula": "2023116BADM0041",
    "birthDate": "21/06/2005",
    "photo": null,
    "curso": "Bacharelado em Administração - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 36,
    "name": "Ana Adriele Pereira dos Santos",
    "matricula": "2024116ISVES0035",
    "birthDate": "15/04/2008",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116ISVES0035_09.jpg",
    "curso": "Técnico em Vestuário - Integrado Semestral - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 37,
    "name": "ANA BEATRIZ DE CARVALHO",
    "matricula": "2024116ISADM0021",
    "birthDate": "29/10/2008",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116ISADM0021_37.jpg",
    "curso": "Técnico em Administração - Integrado Semestral - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 38,
    "name": "ANA BEATRIZ PEREIRA DA SILVA",
    "matricula": "2025116ISADM0038",
    "birthDate": "20/01/2010",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116ISADM0038_04.jpg",
    "curso": "Técnico em Administração - Integrado Semestral - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 39,
    "name": "Ana Beatriz Pinto Sousa",
    "matricula": "2024116LPIN0043",
    "birthDate": "27/12/2005",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116LPIN0043_18.jpg",
    "curso": "Licenciatura Intercultural Indígena - CAPIR - Ser/Mod: 1"
  },
  {
    "id": 40,
    "name": "ANA BEATRIZ SOARES DA SILVA",
    "matricula": "2024116ISVES0020",
    "birthDate": "17/01/2009",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116ISVES0020_33.jpg",
    "curso": "Técnico em Vestuário - Integrado Semestral - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 41,
    "name": "ANA CARINE PEREIRA SILVA",
    "matricula": "2024116ISINF0010",
    "birthDate": "17/05/2008",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116ISINF0010_10.jpg",
    "curso": "Técnico em Informática - Integrado Semestral - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 42,
    "name": "Ana Carolina Nascimento Damasceno",
    "matricula": "2025116UGRH0007",
    "birthDate": "16/07/2002",
    "photo": null,
    "curso": "Tecnologia em Gestão de Recursos Humanos - Ser/Mod: 1"
  },
  {
    "id": 43,
    "name": "Ana Caroline da Silva Sousa",
    "matricula": "2024216MADM0011",
    "birthDate": "21/01/2004",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024216MADM0011_31.jpg",
    "curso": "Técnico em Administração - Concomitante/Subsequente - Piripiri - Ser/Mod: 2"
  },
  {
    "id": 44,
    "name": "Ana Clara de Lima Pereira",
    "matricula": "2024116BADM0005",
    "birthDate": "04/02/1999",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116BADM0005_56.jpg",
    "curso": "Bacharelado em Administração - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 45,
    "name": "Ana Clara de Oliveira Felicio",
    "matricula": "2023116ISINF0017",
    "birthDate": "13/03/2006",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116ISINF0017_03.jpg",
    "curso": "Técnico em Informática - Integrado Semestral - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 46,
    "name": "Ana Clara Lima da Silva",
    "matricula": "2020116BADM0341",
    "birthDate": "10/09/1999",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2020116BADM0341_25.jpg",
    "curso": "Bacharelado em Administração - Piripiri - Ser/Mod: 9"
  },
  {
    "id": 47,
    "name": "Ana Clara Meneses de Brito",
    "matricula": "2023116ISADM0019",
    "birthDate": "19/11/2007",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116ISADM0019_34.jpg",
    "curso": "Técnico em Administração - Integrado Semestral - Piripiri - Ser/Mod: 5"
  },
  {
    "id": 48,
    "name": "Ana Clara Oliveira Rodrigues",
    "matricula": "2022116LMAT0366",
    "birthDate": "08/03/2004",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2022116LMAT0366_22.jpg",
    "curso": "Licenciatura em Matemática - Piripiri - Ser/Mod: 4"
  },
  {
    "id": 49,
    "name": "ANA CLARICE DOS SANTOS LIMA",
    "matricula": "2025116TDSM0008",
    "birthDate": "03/10/2006",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116TDSM0008_05.jpg",
    "curso": "Tecnologia em Design de Moda - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 50,
    "name": "Ana Cristina Silva Arruda",
    "matricula": "2025116TDSM0005",
    "birthDate": "12/06/1988",
    "photo": null,
    "curso": "Tecnologia em Design de Moda - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 51,
    "name": "ANA FLAVIA AGUIAR DAMASCENO",
    "matricula": "2025116ULLI0021",
    "birthDate": "19/07/1998",
    "photo": null,
    "curso": "Licenciatura em Letras Inglês - Ser/Mod: 1"
  },
  {
    "id": 52,
    "name": "ANA GABRIELEM DA SILVA VIEIRA",
    "matricula": "2024116ISVES0028",
    "birthDate": "11/08/2008",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116ISVES0028_13.jpg",
    "curso": "Técnico em Vestuário - Integrado Semestral - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 53,
    "name": "Ana Jaciele Gomes Mendes",
    "matricula": "2024216MKEM0007",
    "birthDate": "09/09/2001",
    "photo": null,
    "curso": "Especialização em Marketing e Empreendedorismo em Moda - Ser/Mod: 1"
  },
  {
    "id": 54,
    "name": "Ana Karoliny de Oliveira Carvalho",
    "matricula": "2022116LMAT0226",
    "birthDate": "31/08/2003",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2022116LMAT0226_58.jpg",
    "curso": "Licenciatura em Matemática - Piripiri - Ser/Mod: 6"
  },
  {
    "id": 55,
    "name": "Ana Letícia Oliveira Lima",
    "matricula": "2023116ISADM0022",
    "birthDate": "16/10/2007",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116ISADM0022_56.jpg",
    "curso": "Técnico em Administração - Integrado Semestral - Piripiri - Ser/Mod: 5"
  },
  {
    "id": 56,
    "name": "ANA LUIZA DA CONCEICAO DOS SANTOS",
    "matricula": "2025116ISADM0021",
    "birthDate": "01/01/2010",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116ISADM0021_31.jpg",
    "curso": "Técnico em Administração - Integrado Semestral - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 57,
    "name": "ANA LUIZA LOPES VIEIRA",
    "matricula": "2024116ISVES0029",
    "birthDate": "19/12/2008",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116ISVES0029_41.jpg",
    "curso": "Técnico em Vestuário - Integrado Semestral - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 58,
    "name": "Ana Maria de Sousa",
    "matricula": "2024116BADM0010",
    "birthDate": "18/03/2000",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116BADM0010_41.jpg",
    "curso": "Bacharelado em Administração - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 59,
    "name": "ANA MELL CARVALHO SANTOS",
    "matricula": "2024116LMAT0031",
    "birthDate": "11/06/2007",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116LMAT0031_58.jpg",
    "curso": "Licenciatura em Matemática - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 60,
    "name": "ANA NATASHA DE ARAUJO",
    "matricula": "2025116LMAT0033",
    "birthDate": "24/12/2006",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116LMAT0033_21.jpg",
    "curso": "Licenciatura em Matemática - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 61,
    "name": "ANA PAULA CORREIA DA SILVA",
    "matricula": "2024116ISADM0013",
    "birthDate": "06/04/2008",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116ISADM0013_06.jpg",
    "curso": "Técnico em Administração - Integrado Semestral - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 62,
    "name": "Ana Paula da Silva Bastos",
    "matricula": "2020116LMAT0355",
    "birthDate": "19/08/1987",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2020116LMAT0355_46.jpg",
    "curso": "Licenciatura em Matemática - Piripiri - Ser/Mod: 9"
  },
  {
    "id": 63,
    "name": "Ana Paula de Carvalho Gomes",
    "matricula": "2021116BADM0291",
    "birthDate": "15/05/2002",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2021116BADM0291_25.jpg",
    "curso": "Bacharelado em Administração - Piripiri - Ser/Mod: 8"
  },
  {
    "id": 64,
    "name": "Ana Paula dos Santos Sousa",
    "matricula": "2024216JADM0046",
    "birthDate": "03/02/2003",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024216JADM0046_02.jpg",
    "curso": "Técnico em Administração Integrado ao Ensino Médio - PROEJA - Ser/Mod: 2"
  },
  {
    "id": 65,
    "name": "ANA ROSA PEREIRA CHAVES",
    "matricula": "2025116TADS0018",
    "birthDate": "21/08/2006",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116TADS0018_14.jpg",
    "curso": "Tecnologia em Análise e Desenvolvimento de Sistemas - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 66,
    "name": "ANA SOPHYA ARRUDA OLIVEIRA",
    "matricula": "2025116ISVES0005",
    "birthDate": "24/09/2009",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116ISVES0005_13.jpg",
    "curso": "Técnico em Vestuário - Integrado Semestral - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 67,
    "name": "ANA THATILA DE LIMA RODRIGUES",
    "matricula": "2024116LMAT0027",
    "birthDate": "29/12/1994",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116LMAT0027_12.jpg",
    "curso": "Licenciatura em Matemática - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 68,
    "name": "ANDERSON FILIPI MOREIRA ARAUJO",
    "matricula": "2025116ISVES0006",
    "birthDate": "14/11/2009",
    "photo": null,
    "curso": "Técnico em Vestuário - Integrado Semestral - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 69,
    "name": "Anderson Mendes Ferreira",
    "matricula": "2022116BADM0123",
    "birthDate": "24/12/1991",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2022116BADM0123_07.jpg",
    "curso": "Bacharelado em Administração - Piripiri - Ser/Mod: 6"
  },
  {
    "id": 70,
    "name": "André de Paula Júnior",
    "matricula": "2023116BADM0043",
    "birthDate": "04/02/2005",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116BADM0043_39.jpg",
    "curso": "Bacharelado em Administração - Piripiri - Ser/Mod: 5"
  },
  {
    "id": 71,
    "name": "ANDRE DOS SANTOS OLIVEIRA",
    "matricula": "2024116ISINF0014",
    "birthDate": "02/03/2009",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116ISINF0014_24.jpg",
    "curso": "Técnico em Informática - Integrado Semestral - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 72,
    "name": "Andre Jackson Rodrigues",
    "matricula": "2025116UGRH0032",
    "birthDate": "12/10/1994",
    "photo": null,
    "curso": "Tecnologia em Gestão de Recursos Humanos - Ser/Mod: 1"
  },
  {
    "id": 73,
    "name": "ANDRE LUCAS PEREIRA DE SOUSA",
    "matricula": "2024116ISADM0005",
    "birthDate": "09/01/2009",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116ISADM0005_01.jpg",
    "curso": "Técnico em Administração - Integrado Semestral - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 74,
    "name": "Andréia da Rocha Gomes",
    "matricula": "2023116BADM0026",
    "birthDate": "28/02/2005",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116BADM0026_12.jpg",
    "curso": "Bacharelado em Administração - Piripiri - Ser/Mod: 5"
  },
  {
    "id": 75,
    "name": "Andreia da Silva Carvalho",
    "matricula": "2018118220369",
    "birthDate": "27/12/1999",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2018118220369_51.jpg",
    "curso": "Licenciatura em Matemática - Piripiri - Ser/Mod: 9"
  },
  {
    "id": 76,
    "name": "ANDRESSA DA ROCHA GOMES",
    "matricula": "2024216JADM0044",
    "birthDate": "09/09/2001",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024216JADM0044_13.jpg",
    "curso": "Técnico em Administração Integrado ao Ensino Médio - PROEJA - Ser/Mod: 2"
  },
  {
    "id": 77,
    "name": "Andressa Sousa de Miranda",
    "matricula": "2020116LMAT0312",
    "birthDate": "16/08/1998",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2020116LMAT0312_21.jpg",
    "curso": "Licenciatura em Matemática - Piripiri - Ser/Mod: 9"
  },
  {
    "id": 78,
    "name": "ANDREwss DIEGO SANTOS SENA",
    "matricula": "2025116ISINF0036",
    "birthDate": "14/02/2010",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116ISINF0036_55.jpg",
    "curso": "Técnico em Informática - Integrado Semestral - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 79,
    "name": "ANNA BEATRIZ SAMPAIO DE ARAUJO SOUSA",
    "matricula": "2025116ULLI0023",
    "birthDate": "13/04/2001",
    "photo": null,
    "curso": "Licenciatura em Letras Inglês - Ser/Mod: 1"
  },
  {
    "id": 80,
    "name": "Anna Beatriz Soares de Lima",
    "matricula": "2025116ISADM0010",
    "birthDate": "17/05/2009",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116ISADM0010_05.jpg",
    "curso": "Técnico em Administração - Integrado Semestral - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 81,
    "name": "ANNA FRANCYSCA SOUSA OLIVEIRA",
    "matricula": "2025116ISVES0026",
    "birthDate": "01/01/1970",
    "photo": null,
    "curso": "Técnico em Vestuário - Integrado Semestral - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 82,
    "name": "Anna Luiza Freitas Pereira",
    "matricula": "2023116ISADM0012",
    "birthDate": "20/06/2006",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116ISADM0012_22.jpg",
    "curso": "Técnico em Administração - Integrado Semestral - Piripiri - Ser/Mod: 5"
  },
  {
    "id": 83,
    "name": "Anny Cristyne da Silva Sousa",
    "matricula": "2023116ISADM0038",
    "birthDate": "15/03/2008",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116ISADM0038_42.jpg",
    "curso": "Técnico em Administração - Integrado Semestral - Piripiri - Ser/Mod: 5"
  },
  {
    "id": 84,
    "name": "ANNY GABRIELLY DOS SANTOS",
    "matricula": "2024116ISVES0025",
    "birthDate": "14/03/2008",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116ISVES0025_18.jpg",
    "curso": "Técnico em Vestuário - Integrado Semestral - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 85,
    "name": "ANNY GABRIELLY MEDEIROS DE BRITO",
    "matricula": "2025116ISVES0004",
    "birthDate": "19/12/2009",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116ISVES0004_35.jpg",
    "curso": "Técnico em Vestuário - Integrado Semestral - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 86,
    "name": "ANTHONY ERYCK DAMACENO CARVALHO",
    "matricula": "2025116TADS0027",
    "birthDate": "24/04/2006",
    "photo": null,
    "curso": "Tecnologia em Análise e Desenvolvimento de Sistemas - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 87,
    "name": "Antônia Danyelle Dutra Cardoso",
    "matricula": "2022116BADM0360",
    "birthDate": "06/06/1997",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2022116BADM0360_43.jpg",
    "curso": "Bacharelado em Administração - Piripiri - Ser/Mod: 6"
  },
  {
    "id": 88,
    "name": "ANTONIA DE CASSEA DE ARAUJO SANTOS",
    "matricula": "2024116LPIN0005",
    "birthDate": "15/08/1983",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116LPIN0005_25.jpg",
    "curso": "Licenciatura Intercultural Indígena - CAPIR - Ser/Mod: 1"
  },
  {
    "id": 89,
    "name": "ANTONIA GEICIANE DA SILVA PEREIRA",
    "matricula": "2025116LMAT0019",
    "birthDate": "20/03/2007",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116LMAT0019_16.jpg",
    "curso": "Licenciatura em Matemática - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 90,
    "name": "ANTONIA GEOVANA DOS SANTOS GOMES",
    "matricula": "2024116ISADM0014",
    "birthDate": "01/02/2009",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116ISADM0014_51.jpg",
    "curso": "Técnico em Administração - Integrado Semestral - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 91,
    "name": "Antonia Isabely Sousa Santos",
    "matricula": "2023116ISINF0023",
    "birthDate": "05/04/2007",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116ISINF0023_39.jpg",
    "curso": "Técnico em Informática - Integrado Semestral - Piripiri - Ser/Mod: 5"
  },
  {
    "id": 92,
    "name": "ANTONIA ISMERALDA SILVA RODRIGUES",
    "matricula": "2025116ISVES0014",
    "birthDate": "18/10/2009",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116ISVES0014_09.jpg",
    "curso": "Técnico em Vestuário - Integrado Semestral - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 93,
    "name": "Antonia Manuelly de Sousa Araujo",
    "matricula": "2023116BADM0022",
    "birthDate": "06/01/2004",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116BADM0022_57.jpg",
    "curso": "Bacharelado em Administração - Piripiri - Ser/Mod: 5"
  },
  {
    "id": 94,
    "name": "ANTONIA MARIA CARVALHO DE MEDEIROS",
    "matricula": "2024116LPIN0025",
    "birthDate": "19/07/1978",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116LPIN0025_55.jpg",
    "curso": "Licenciatura Intercultural Indígena - CAPIR - Ser/Mod: 1"
  },
  {
    "id": 95,
    "name": "Antônia Maria da Silva Santos Francisco",
    "matricula": "2024216MADM0013",
    "birthDate": "24/07/1969",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024216MADM0013_20.jpg",
    "curso": "Técnico em Administração - Concomitante/Subsequente - Piripiri - Ser/Mod: 2"
  },
  {
    "id": 96,
    "name": "Antônia Maria de Lima Silva",
    "matricula": "2023216JVES0001",
    "birthDate": "28/01/1984",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023216JVES0001_36.jpg",
    "curso": "Técnico em Vestuário Integrado ao Ensino Médio - PROEJA - Ser/Mod: 4"
  },
  {
    "id": 97,
    "name": "Antonia Mariane dos Santos Gomes",
    "matricula": "2023116ISADM0011",
    "birthDate": "03/04/2007",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116ISADM0011_46.jpg",
    "curso": "Técnico em Administração - Integrado Semestral - Piripiri - Ser/Mod: 5"
  },
  {
    "id": 98,
    "name": "Antônia Marta Oliveira da Silva",
    "matricula": "2023216JVES0006",
    "birthDate": "28/11/1977",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023216JVES0006_22.jpg",
    "curso": "Técnico em Vestuário Integrado ao Ensino Médio - PROEJA - Ser/Mod: 4"
  },
  {
    "id": 99,
    "name": "ANTONIA MILENA DE OLIVEIRA ALBUQUERQUE",
    "matricula": "2024116LMAT0028",
    "birthDate": "05/09/2005",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116LMAT0028_35.jpg",
    "curso": "Licenciatura em Matemática - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 100,
    "name": "ANTONIA RAYLINE DE OLIVEIRA MACEDO",
    "matricula": "2024116ISADM0060",
    "birthDate": "11/07/2008",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116ISADM0060_21.jpg",
    "curso": "Técnico em Administração - Integrado Semestral - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 101,
    "name": "ANTONIA THAVYNI SOUSA SILVA",
    "matricula": "2024116ISVES0012",
    "birthDate": "11/04/2008",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116ISVES0012_27.jpg",
    "curso": "Técnico em Vestuário - Integrado Semestral - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 102,
    "name": "ANTÔNIA VALDENE DO NASCIMENTO ARAÚJO",
    "matricula": "2024116LPIN0029",
    "birthDate": "25/04/1985",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116LPIN0029_02.jpg",
    "curso": "Licenciatura Intercultural Indígena - CAPIR - Ser/Mod: 1"
  },
  {
    "id": 103,
    "name": "Antonio Alex Viana da Silva",
    "matricula": "2019118220014",
    "birthDate": "10/11/2000",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2019118220014_53.jpg",
    "curso": "Licenciatura em Matemática - Piripiri - Ser/Mod: 8"
  },
  {
    "id": 104,
    "name": "Antonio Anderson Ferreira de Paula",
    "matricula": "2023116TDSM0017",
    "birthDate": "22/05/1999",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116TDSM0017_57.jpg",
    "curso": "Tecnologia em Design de Moda - Piripiri - Ser/Mod: 4"
  },
  {
    "id": 105,
    "name": "Antonio Carlos Cassiano de Brito Júnior",
    "matricula": "2024216JADM0002",
    "birthDate": "05/11/1995",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024216JADM0002_13.jpg",
    "curso": "Técnico em Administração Integrado ao Ensino Médio - PROEJA - Ser/Mod: 2"
  },
  {
    "id": 106,
    "name": "ANTONIO CARLOS DA SILVA BORGES",
    "matricula": "2025116LMAT0042",
    "birthDate": "05/04/1996",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116LMAT0042_40.jpg",
    "curso": "Licenciatura em Matemática - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 107,
    "name": "ANTONIO CARLOS GOMES",
    "matricula": "2025116TADS0024",
    "birthDate": "31/10/2006",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116TADS0024_33.jpg",
    "curso": "Tecnologia em Análise e Desenvolvimento de Sistemas - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 108,
    "name": "Antônio de Brito Carvalho",
    "matricula": "2024216JADM0023",
    "birthDate": "27/04/1977",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024216JADM0023_05.jpg",
    "curso": "Técnico em Administração Integrado ao Ensino Médio - PROEJA - Ser/Mod: 2"
  },
  {
    "id": 109,
    "name": "ANTONIO DE MIRANDA CERQUEIRA",
    "matricula": "2024116LMAT0021",
    "birthDate": "25/06/2002",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116LMAT0021_00.jpg",
    "curso": "Licenciatura em Matemática - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 110,
    "name": "ANTONIO DE OLIVEIRA MEDEIROS",
    "matricula": "2025116ULLI0007",
    "birthDate": "15/12/1977",
    "photo": null,
    "curso": "Licenciatura em Letras Inglês - Ser/Mod: 1"
  },
  {
    "id": 111,
    "name": "Antônio Èlden Costa Gomes",
    "matricula": "2023116ISINF0056",
    "birthDate": "24/09/2007",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116ISINF0056_13.jpg",
    "curso": "Técnico em Informática - Integrado Semestral - Piripiri - Ser/Mod: 5"
  },
  {
    "id": 112,
    "name": "Antônio Felipe Passos da Silva",
    "matricula": "2023116ISINF0030",
    "birthDate": "05/04/2007",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116ISINF0030_21.jpg",
    "curso": "Técnico em Informática - Integrado Semestral - Piripiri - Ser/Mod: 5"
  },
  {
    "id": 113,
    "name": "Antônio Francisco",
    "matricula": "2024216MADM0012",
    "birthDate": "29/02/1968",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024216MADM0012_55.jpg",
    "curso": "Técnico em Administração - Concomitante/Subsequente - Piripiri - Ser/Mod: 2"
  },
  {
    "id": 114,
    "name": "ANTONIO FRANCISCO DA COSTA RODRIGUES",
    "matricula": "2024116LMAT0025",
    "birthDate": "20/07/2002",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116LMAT0025_12.jpg",
    "curso": "Licenciatura em Matemática - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 115,
    "name": "Antônio Gleyson da Silva",
    "matricula": "2023116ISVES0013",
    "birthDate": "02/08/2006",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116ISVES0013_40.jpg",
    "curso": "Técnico em Vestuário - Integrado Semestral - Piripiri - Ser/Mod: 5"
  },
  {
    "id": 116,
    "name": "Antonio Lopes de Sousa Filho",
    "matricula": "2024116ISINF0069",
    "birthDate": "27/03/2009",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116ISINF0069_09.jpg",
    "curso": "Técnico em Informática - Integrado Semestral - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 117,
    "name": "ANTÔNIO LUCAS HONORATO",
    "matricula": "2024216JADM0004",
    "birthDate": "28/08/1994",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024216JADM0004_06.jpg",
    "curso": "Técnico em Administração Integrado ao Ensino Médio - PROEJA - Ser/Mod: 2"
  },
  {
    "id": 118,
    "name": "Antonio Luis Souza da Mata",
    "matricula": "2023116ISVES0036",
    "birthDate": "28/04/2007",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116ISVES0036_40.jpg",
    "curso": "Técnico em Vestuário - Integrado Semestral - Piripiri - Ser/Mod: 5"
  },
  {
    "id": 119,
    "name": "ANTONIO MATEUS DA SILVA SOUSA",
    "matricula": "2025116LMAT0031",
    "birthDate": "06/02/2006",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116LMAT0031_33.jpg",
    "curso": "Licenciatura em Matemática - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 120,
    "name": "Antonio Vitor de Oliveira",
    "matricula": "2019118230052",
    "birthDate": "08/11/1999",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2019118230052_33.jpg",
    "curso": "Bacharelado em Administração - Piripiri - Ser/Mod: 8"
  },
  {
    "id": 121,
    "name": "Antonio Wellitom Cardoso Barroso",
    "matricula": "2023116BADM0004",
    "birthDate": "11/12/2001",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116BADM0004_49.jpg",
    "curso": "Bacharelado em Administração - Piripiri - Ser/Mod: 5"
  },
  {
    "id": 122,
    "name": "ANTONIO WILLIAM RODRIGUES MARTINS",
    "matricula": "2025116ISVES0007",
    "birthDate": "14/12/2009",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116ISVES0007_31.jpg",
    "curso": "Técnico em Vestuário - Integrado Semestral - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 123,
    "name": "ARAMIRES HINGRID MOREIRA SOUSA",
    "matricula": "2024116LPIN0019",
    "birthDate": "20/03/1991",
    "photo": null,
    "curso": "Licenciatura Intercultural Indígena - CAPIR - Ser/Mod: 1"
  },
  {
    "id": 124,
    "name": "ARIANE CRISTINA DE BRITO SOUSA",
    "matricula": "2024116ISADM0058",
    "birthDate": "22/01/2009",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116ISADM0058_51.jpg",
    "curso": "Técnico em Administração - Integrado Semestral - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 125,
    "name": "Aristides Silva Gomes",
    "matricula": "2022116BADM0131",
    "birthDate": "18/12/2003",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2022116BADM0131_48.jpg",
    "curso": "Bacharelado em Administração - Piripiri - Ser/Mod: 6"
  },
  {
    "id": 126,
    "name": "ARMANO PEREIRA DE SOUSA",
    "matricula": "2024116LPIN0024",
    "birthDate": "30/09/1975",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116LPIN0024_30.jpg",
    "curso": "Licenciatura Intercultural Indígena - CAPIR - Ser/Mod: 1"
  },
  {
    "id": 127,
    "name": "Arone Maria Gomes",
    "matricula": "2024216MKEM0022",
    "birthDate": "28/05/2002",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024216MKEM0022_38.jpg",
    "curso": "Especialização em Marketing e Empreendedorismo em Moda - Ser/Mod: 2"
  },
  {
    "id": 128,
    "name": "Arthur Carvalho Lustosa de Araujo",
    "matricula": "2023116ISINF0054",
    "birthDate": "28/02/2008",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116ISINF0054_38.jpg",
    "curso": "Técnico em Informática - Integrado Semestral - Piripiri - Ser/Mod: 5"
  },
  {
    "id": 129,
    "name": "Arthur Dias Ximendes",
    "matricula": "2023116ISINF0039",
    "birthDate": "02/07/2007",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116ISINF0039_16.jpg",
    "curso": "Técnico em Informática - Integrado Semestral - Piripiri - Ser/Mod: 5"
  },
  {
    "id": 130,
    "name": "Arthur Medeiros de Souza",
    "matricula": "2024116ISINF0071",
    "birthDate": "31/03/2009",
    "photo": null,
    "curso": "Técnico em Informática - Integrado Semestral - Piripiri - Ser/Mod: 2"
  },
  {
    "id": 131,
    "name": "Arthur Rodrigues Neiva Mamede",
    "matricula": "2024116ISINF0062",
    "birthDate": "30/12/2008",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116ISINF0062_26.jpg",
    "curso": "Técnico em Informática - Integrado Semestral - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 132,
    "name": "Arthur Sousa Santana",
    "matricula": "2024116TADS0044",
    "birthDate": "09/08/2005",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116TADS0044_26.jpg",
    "curso": "Tecnologia em Análise e Desenvolvimento de Sistemas - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 133,
    "name": "Arthur Sousa Santos",
    "matricula": "2025116LMAT0001",
    "birthDate": "18/11/2006",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116LMAT0001_09.jpg",
    "curso": "Licenciatura em Matemática - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 134,
    "name": "Arthur Vinícius Rodrigues Santiago",
    "matricula": "2023116ISADM0028",
    "birthDate": "10/10/2007",
    "photo": null,
    "curso": "Técnico em Administração - Integrado Semestral - Piripiri - Ser/Mod: 5"
  },
  {
    "id": 135,
    "name": "Arthur Vinícius Silva Cardoso",
    "matricula": "2023116ISINF0024",
    "birthDate": "09/10/2007",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116ISINF0024_04.jpg",
    "curso": "Técnico em Informática - Integrado Semestral - Piripiri - Ser/Mod: 5"
  },
  {
    "id": 136,
    "name": "Artur Araujo Gomes",
    "matricula": "2022116ISINF0180",
    "birthDate": "18/03/2007",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2022116ISINF0180_22.jpg",
    "curso": "Técnico em Informática - Integrado Semestral - Piripiri - Ser/Mod: 5"
  },
  {
    "id": 137,
    "name": "Aurianne Ayres da Cruz França",
    "matricula": "2024216MKEM0011",
    "birthDate": "21/11/1998",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024216MKEM0011_18.jpg",
    "curso": "Especialização em Marketing e Empreendedorismo em Moda - Ser/Mod: 2"
  },
  {
    "id": 138,
    "name": "AURILANDE DE CARVALHO",
    "matricula": "2024216JADM0045",
    "birthDate": "24/10/1992",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024216JADM0045_19.jpg",
    "curso": "Técnico em Administração Integrado ao Ensino Médio - PROEJA - Ser/Mod: 2"
  },
  {
    "id": 139,
    "name": "AVILON SAYRU DO AMARAL MELO",
    "matricula": "2025116TADS0025",
    "birthDate": "07/04/2006",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116TADS0025_38.jpg",
    "curso": "Tecnologia em Análise e Desenvolvimento de Sistemas - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 140,
    "name": "BÁRBARA LETÍCIA LIMA BARROSO",
    "matricula": "2025116UGRH0034",
    "birthDate": "17/01/2005",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116UGRH0034_50.jpg",
    "curso": "Tecnologia em Gestão de Recursos Humanos - Ser/Mod: 1"
  },
  {
    "id": 141,
    "name": "BÁRBARA LETÍCIA LIMA BARROSO",
    "matricula": "2024216MADM0010",
    "birthDate": "17/01/2005",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024216MADM0010_26.jpg",
    "curso": "Técnico em Administração - Concomitante/Subsequente - Piripiri - Ser/Mod: 2"
  },
  {
    "id": 142,
    "name": "Beatriz da Silva Gonçalves do Nascimento",
    "matricula": "2023216JADM0001",
    "birthDate": "21/03/1983",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023216JADM0001_50.jpg",
    "curso": "Técnico em Administração Integrado ao Ensino Médio - PROEJA - Ser/Mod: 4"
  },
  {
    "id": 143,
    "name": "Bernardo Alves Pereira da Silva Neto",
    "matricula": "2025116ISADM0009",
    "birthDate": "26/05/2009",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116ISADM0009_52.jpg",
    "curso": "Técnico em Administração - Integrado Semestral - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 144,
    "name": "Bianca Lima Pereira",
    "matricula": "2023116ISVES0015",
    "birthDate": "14/06/2007",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116ISVES0015_23.jpg",
    "curso": "Técnico em Vestuário - Integrado Semestral - Piripiri - Ser/Mod: 5"
  },
  {
    "id": 145,
    "name": "BIANCA VERAS SILVA",
    "matricula": "2025116LMAT0029",
    "birthDate": "11/02/2006",
    "photo": null,
    "curso": "Licenciatura em Matemática - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 146,
    "name": "Brena Maria de Souza Silva",
    "matricula": "2023116ISADM0010",
    "birthDate": "07/12/2007",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116ISADM0010_47.jpg",
    "curso": "Técnico em Administração - Integrado Semestral - Piripiri - Ser/Mod: 5"
  },
  {
    "id": 147,
    "name": "BRENNO VICTOR SARAIVA DE SOUSA",
    "matricula": "2024116ISINF0031",
    "birthDate": "14/09/2008",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116ISINF0031_07.jpg",
    "curso": "Técnico em Informática - Integrado Semestral - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 148,
    "name": "Breno do Nascimento Silva",
    "matricula": "2023116ISADM0059",
    "birthDate": "08/05/2007",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116ISADM0059_42.jpg",
    "curso": "Técnico em Administração - Integrado Semestral - Piripiri - Ser/Mod: 5"
  },
  {
    "id": 149,
    "name": "BRIAN ITALO SOUSA DE OLIVEIRA",
    "matricula": "2024116ISINF0007",
    "birthDate": "15/02/2009",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116ISINF0007_14.jpg",
    "curso": "Técnico em Informática - Integrado Semestral - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 150,
    "name": "BRUNO FRANCISCO FERREIRA DO NASCIMENTO",
    "matricula": "2025116UGRH0014",
    "birthDate": "06/02/1985",
    "photo": null,
    "curso": "Tecnologia em Gestão de Recursos Humanos - Ser/Mod: 1"
  },
  {
    "id": 151,
    "name": "BRUNO PEREIRA COSTA",
    "matricula": "2024116ISADM0046",
    "birthDate": "28/08/2008",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116ISADM0046_07.jpg",
    "curso": "Técnico em Administração - Integrado Semestral - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 152,
    "name": "Bruno Silva dos Santos",
    "matricula": "2025116LMAT0017",
    "birthDate": "24/07/2006",
    "photo": null,
    "curso": "Licenciatura em Matemática - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 153,
    "name": "CAIO FELIPE DA SILVA FREITAS",
    "matricula": "2024116ISINF0042",
    "birthDate": "12/03/2009",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116ISINF0042_42.jpg",
    "curso": "Técnico em Informática - Integrado Semestral - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 154,
    "name": "Caio Matheus Pereira Monteiro",
    "matricula": "2023116ISINF0046",
    "birthDate": "14/08/2007",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116ISINF0046_23.jpg",
    "curso": "Técnico em Informática - Integrado Semestral - Piripiri - Ser/Mod: 5"
  },
  {
    "id": 155,
    "name": "CAIO MOISES ARAUJO LOPES",
    "matricula": "2024116ISVES0022",
    "birthDate": "20/07/2003",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116ISVES0022_21.jpg",
    "curso": "Técnico em Vestuário - Integrado Semestral - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 156,
    "name": "Caio Silva Santos",
    "matricula": "2022116ISADM0630",
    "birthDate": "29/01/2006",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2022116ISADM0630_40.jpg",
    "curso": "Técnico em Administração - Integrado Semestral - Piripiri - Ser/Mod: 6"
  },
  {
    "id": 157,
    "name": "CAIRON FERREIRA PRADO",
    "matricula": "2024116TADS0045",
    "birthDate": "07/07/2004",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116TADS0045_25.jpg",
    "curso": "Tecnologia em Análise e Desenvolvimento de Sistemas - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 158,
    "name": "Camila Soares Sales",
    "matricula": "2024216JADM0003",
    "birthDate": "06/04/1991",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024216JADM0003_48.jpg",
    "curso": "Técnico em Administração Integrado ao Ensino Médio - PROEJA - Ser/Mod: 2"
  },
  {
    "id": 159,
    "name": "CAMILLY VITORIA SILVA GOMES",
    "matricula": "2025116ISADM0020",
    "birthDate": "05/04/2009",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116ISADM0020_08.jpg",
    "curso": "Técnico em Administração - Integrado Semestral - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 160,
    "name": "Camily Vitória Gomes Pereira",
    "matricula": "2023116ISADM0052",
    "birthDate": "22/12/2007",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116ISADM0052_26.jpg",
    "curso": "Técnico em Administração - Integrado Semestral - Piripiri - Ser/Mod: 5"
  },
  {
    "id": 161,
    "name": "Carine do Livramento Macêdo",
    "matricula": "2021116BADM0380",
    "birthDate": "17/02/2004",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2021116BADM0380_01.jpg",
    "curso": "Bacharelado em Administração - Piripiri - Ser/Mod: 8"
  },
  {
    "id": 162,
    "name": "Carla Maria da Silva Ferreira",
    "matricula": "2024216JADM0013",
    "birthDate": "30/08/1985",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024216JADM0013_13.jpg",
    "curso": "Técnico em Administração Integrado ao Ensino Médio - PROEJA - Ser/Mod: 2"
  },
  {
    "id": 163,
    "name": "Carla Michele Silva Ferreira",
    "matricula": "2025116ULLI0010",
    "birthDate": "04/07/1995",
    "photo": null,
    "curso": "Licenciatura em Letras Inglês - Ser/Mod: 1"
  },
  {
    "id": 164,
    "name": "Carla Vilena Carvalho Costa",
    "matricula": "2023116ISINF0037",
    "birthDate": "20/06/2007",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116ISINF0037_38.jpg",
    "curso": "Técnico em Informática - Integrado Semestral - Piripiri - Ser/Mod: 5"
  },
  {
    "id": 165,
    "name": "CARLIANE CARRIAS SILVA",
    "matricula": "2025116LMAT0032",
    "birthDate": "17/01/2007",
    "photo": null,
    "curso": "Licenciatura em Matemática - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 166,
    "name": "Carlos André Sampaio do Nascimento",
    "matricula": "2024116TADS0026",
    "birthDate": "20/05/2004",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116TADS0026_44.jpg",
    "curso": "Tecnologia em Análise e Desenvolvimento de Sistemas - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 167,
    "name": "Carlos Brian Ferreira da Costa",
    "matricula": "2025116LMAT0008",
    "birthDate": "20/10/2005",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116LMAT0008_10.jpg",
    "curso": "Licenciatura em Matemática - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 168,
    "name": "Carlos Daniel Lima de Andrade",
    "matricula": "2023116ISADM0050",
    "birthDate": "25/03/2008",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116ISADM0050_52.jpg",
    "curso": "Técnico em Administração - Integrado Semestral - Piripiri - Ser/Mod: 5"
  },
  {
    "id": 169,
    "name": "CARLOS DE SOUSA SANTOS",
    "matricula": "2025116TDSM0014",
    "birthDate": "21/02/2005",
    "photo": null,
    "curso": "Tecnologia em Design de Moda - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 170,
    "name": "CARLOS EDUARDO CRUZ DA COSTA",
    "matricula": "2024116ISINF0055",
    "birthDate": "22/10/2008",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116ISINF0055_09.jpg",
    "curso": "Técnico em Informática - Integrado Semestral - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 171,
    "name": "Carlos Eduardo de Oliveira Benício",
    "matricula": "2023116ISINF0060",
    "birthDate": "28/01/2008",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116ISINF0060_37.jpg",
    "curso": "Técnico em Informática - Integrado Semestral - Piripiri - Ser/Mod: 5"
  },
  {
    "id": 172,
    "name": "Carlos Emanuel Costa da Silva",
    "matricula": "2023116BADM0035",
    "birthDate": "05/06/2004",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116BADM0035_38.jpg",
    "curso": "Bacharelado em Administração - Piripiri - Ser/Mod: 5"
  },
  {
    "id": 173,
    "name": "Carlos Felipe Soares Alves",
    "matricula": "2019118230443",
    "birthDate": "28/02/1997",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2019118230443_57.jpg",
    "curso": "Bacharelado em Administração - Piripiri - Ser/Mod: 9"
  },
  {
    "id": 174,
    "name": "Carlos Roberto Souza do Nascimento",
    "matricula": "2023116ISADM0020",
    "birthDate": "11/06/2007",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116ISADM0020_39.jpg",
    "curso": "Técnico em Administração - Integrado Semestral - Piripiri - Ser/Mod: 5"
  },
  {
    "id": 175,
    "name": "Carlos Venicio do Nascimento Pascoal",
    "matricula": "2024216JADM0022",
    "birthDate": "07/09/2001",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024216JADM0022_04.jpg",
    "curso": "Técnico em Administração Integrado ao Ensino Médio - PROEJA - Ser/Mod: 2"
  },
  {
    "id": 176,
    "name": "Carolayne da Silva Souza",
    "matricula": "2025116BADM0001",
    "birthDate": "07/02/2005",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116BADM0001_12.jpg",
    "curso": "Bacharelado em Administração - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 177,
    "name": "CAROLINA DA SILVA MEDEIROS",
    "matricula": "2024116ISVES0007",
    "birthDate": "31/05/2008",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116ISVES0007_52.jpg",
    "curso": "Técnico em Vestuário - Integrado Semestral - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 178,
    "name": "CASSIA HELLEN OLIVEIRA DE SOUSA",
    "matricula": "2025116LMAT0028",
    "birthDate": "01/10/2005",
    "photo": null,
    "curso": "Licenciatura em Matemática - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 179,
    "name": "CASSIA REGINA MENDES DA SILVA",
    "matricula": "2025116BADM0029",
    "birthDate": "13/04/2007",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116BADM0029_01.jpg",
    "curso": "Bacharelado em Administração - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 180,
    "name": "Cassio de Melo Cardoso",
    "matricula": "2019118230311",
    "birthDate": "30/12/1995",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2019118230311_27.jpg",
    "curso": "Bacharelado em Administração - Piripiri - Ser/Mod: 6"
  },
  {
    "id": 181,
    "name": "Cauane Nascimento Silva",
    "matricula": "2023116ISINF0042",
    "birthDate": "12/09/2007",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116ISINF0042_21.jpg",
    "curso": "Técnico em Informática - Integrado Semestral - Piripiri - Ser/Mod: 5"
  },
  {
    "id": 182,
    "name": "Cauany Beatriz Gonçalves do Nascimento",
    "matricula": "2023116ISADM0048",
    "birthDate": "31/03/2008",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116ISADM0048_40.jpg",
    "curso": "Técnico em Administração - Integrado Semestral - Piripiri - Ser/Mod: 5"
  },
  {
    "id": 183,
    "name": "CICERO ANDRADE SANTOS",
    "matricula": "2024116TADS0040",
    "birthDate": "18/07/2006",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116TADS0040_27.jpg",
    "curso": "Tecnologia em Análise e Desenvolvimento de Sistemas - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 184,
    "name": "CÍCERO EVANGELISTA DIAS",
    "matricula": "2024116LPIN0014",
    "birthDate": "25/02/1996",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116LPIN0014_03.jpg",
    "curso": "Licenciatura Intercultural Indígena - CAPIR - Ser/Mod: 1"
  },
  {
    "id": 185,
    "name": "Clara Beatriz Castelo Branco",
    "matricula": "2024116TDSM0015",
    "birthDate": "10/08/2003",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116TDSM0015_13.jpg",
    "curso": "Tecnologia em Design de Moda - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 186,
    "name": "Clarisse Lira da Cruz Silva",
    "matricula": "2025116ULLI0024",
    "birthDate": "09/06/2004",
    "photo": null,
    "curso": "Licenciatura em Letras Inglês - Ser/Mod: 1"
  },
  {
    "id": 187,
    "name": "Clarisse Mota Sousa",
    "matricula": "2024116TDSM0026",
    "birthDate": "20/11/1986",
    "photo": null,
    "curso": "Tecnologia em Design de Moda - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 188,
    "name": "CLARISSE RAIANE ARAUJO ALMEIDA",
    "matricula": "2025116UGRH0019",
    "birthDate": "27/03/2006",
    "photo": null,
    "curso": "Tecnologia em Gestão de Recursos Humanos - Ser/Mod: 1"
  },
  {
    "id": 189,
    "name": "Claudeni do Nascimento Isaías Sousa",
    "matricula": "2024216JADM0021",
    "birthDate": "17/04/1978",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024216JADM0021_46.jpg",
    "curso": "Técnico em Administração Integrado ao Ensino Médio - PROEJA - Ser/Mod: 2"
  },
  {
    "id": 190,
    "name": "Clauderlane Azevedo da Silva",
    "matricula": "2025116LMAT0041",
    "birthDate": "22/08/1994",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116LMAT0041_01.jpg",
    "curso": "Licenciatura em Matemática - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 191,
    "name": "CLÁUDIA MARIA CORDEIRO ISAIAS",
    "matricula": "2024216JADM0043",
    "birthDate": "22/10/1984",
    "photo": null,
    "curso": "Técnico em Administração Integrado ao Ensino Médio - PROEJA - Ser/Mod: 2"
  },
  {
    "id": 192,
    "name": "Claudinei Lustoza de Souza",
    "matricula": "2022116LMAT0056",
    "birthDate": "19/08/2002",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2022116LMAT0056_08.jpg",
    "curso": "Licenciatura em Matemática - Piripiri - Ser/Mod: 6"
  },
  {
    "id": 193,
    "name": "Claudio Sampaio da Silva Junior",
    "matricula": "2021116LMAT0173",
    "birthDate": "29/06/2001",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2021116LMAT0173_03.jpg",
    "curso": "Licenciatura em Matemática - Piripiri - Ser/Mod: 8"
  },
  {
    "id": 194,
    "name": "CLEICIANE MARIA SILVA DO CARMO",
    "matricula": "2024116ISADM0031",
    "birthDate": "09/09/2008",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116ISADM0031_39.jpg",
    "curso": "Técnico em Administração - Integrado Semestral - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 195,
    "name": "Cleisson Costa Nogueira",
    "matricula": "2024216MKEM0026",
    "birthDate": "03/04/1999",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024216MKEM0026_31.jpg",
    "curso": "Especialização em Marketing e Empreendedorismo em Moda - Ser/Mod: 2"
  },
  {
    "id": 196,
    "name": "Cleiton Alves de Sousa",
    "matricula": "2019118220421",
    "birthDate": "29/01/1999",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2019118220421_53.jpg",
    "curso": "Licenciatura em Matemática - Piripiri - Ser/Mod: 9"
  },
  {
    "id": 197,
    "name": "Cleiton Nascimento Rodrigues Júnior",
    "matricula": "2024116ISINF0066",
    "birthDate": "16/01/2009",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116ISINF0066_32.jpg",
    "curso": "Técnico em Informática - Integrado Semestral - Piripiri - Ser/Mod: 2"
  },
  {
    "id": 198,
    "name": "Clemilda Batista de Sousa",
    "matricula": "2024216MADM0008",
    "birthDate": "10/06/1983",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024216MADM0008_46.jpg",
    "curso": "Técnico em Administração - Concomitante/Subsequente - Piripiri - Ser/Mod: 2"
  },
  {
    "id": 199,
    "name": "Cleycielly do Nascimento Ferreira",
    "matricula": "2025116BADM0003",
    "birthDate": "03/09/2006",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116BADM0003_04.jpg",
    "curso": "Bacharelado em Administração - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 200,
    "name": "Cryslanne Pinto de Mesquita",
    "matricula": "2025116UGRH0022",
    "birthDate": "12/04/2005",
    "photo": null,
    "curso": "Tecnologia em Gestão de Recursos Humanos - Ser/Mod: 1"
  },
  {
    "id": 201,
    "name": "DALLYLE SILVA DOS SANTOS",
    "matricula": "2025116TDSM0009",
    "birthDate": "10/07/2003",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116TDSM0009_49.jpg",
    "curso": "Tecnologia em Design de Moda - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 202,
    "name": "Daniel da Silva",
    "matricula": "2022116BADM0409",
    "birthDate": "01/01/2000",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2022116BADM0409_16.jpg",
    "curso": "Bacharelado em Administração - Piripiri - Ser/Mod: 6"
  },
  {
    "id": 203,
    "name": "Daniel Pereira da Silva",
    "matricula": "2021116BADM0259",
    "birthDate": "04/10/2001",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2021116BADM0259_37.jpg",
    "curso": "Bacharelado em Administração - Piripiri - Ser/Mod: 8"
  },
  {
    "id": 204,
    "name": "Daniel Rodrigues Sousa",
    "matricula": "2024116LPIN0044",
    "birthDate": "01/11/2005",
    "photo": "http://siar.capira.ifpi.edu.br/uploads/A2024116LPIN0044_35.jpg",
    "curso": "Licenciatura Intercultural Indígena - CAPIR - Ser/Mod: 1"
  },
  {
    "id": 205,
    "name": "Danilo Sampaio Gonçalves",
    "matricula": "2025116BADM0042",
    "birthDate": "19/11/2006",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116BADM0042_55.jpg",
    "curso": "Bacharelado em Administração - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 206,
    "name": "Dantton Hércully de Oliveira Albuquerque",
    "matricula": "2025116TADS0042",
    "birthDate": "26/08/2002",
    "photo": null,
    "curso": "Tecnologia em Análise e Desenvolvimento de Sistemas - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 207,
    "name": "DARLYS EDUARDO DE DEUS AGUIAR",
    "matricula": "2024116ISINF0051",
    "birthDate": "12/02/2007",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116ISINF0051_47.jpg",
    "curso": "Técnico em Informática - Integrado Semestral - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 208,
    "name": "Darlyson Rafael Gomes do Nascimento",
    "matricula": "2025116TADS0043",
    "birthDate": "27/05/2002",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116TADS0043_24.jpg",
    "curso": "Tecnologia em Análise e Desenvolvimento de Sistemas - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 209,
    "name": "Davi Almeida Gomes",
    "matricula": "2025116TADS0008",
    "birthDate": "24/04/2006",
    "photo": null,
    "curso": "Tecnologia em Análise e Desenvolvimento de Sistemas - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 210,
    "name": "Davi Pierre Souza Nascimento",
    "matricula": "2023116ISADM0044",
    "birthDate": "27/01/2008",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116ISADM0044_33.jpg",
    "curso": "Técnico em Administração - Integrado Semestral - Piripiri - Ser/Mod: 5"
  },
  {
    "id": 211,
    "name": "DAVI SILVA GOMES",
    "matricula": "2025116ISINF0006",
    "birthDate": "16/03/2010",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116ISINF0006_24.jpg",
    "curso": "Técnico em Informática - Integrado Semestral - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 212,
    "name": "David José de Souza Nascimento",
    "matricula": "2025116LMAT0037",
    "birthDate": "26/01/2007",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116LMAT0037_41.jpg",
    "curso": "Licenciatura em Matemática - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 213,
    "name": "David William Santos Mendes",
    "matricula": "2023116TDSM0001",
    "birthDate": "17/12/2004",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116TDSM0001_17.jpg",
    "curso": "Tecnologia em Design de Moda - Piripiri - Ser/Mod: 4"
  },
  {
    "id": 214,
    "name": "DAYLA PATRICIA PEREIRA MARTINS",
    "matricula": "2024116ISADM0019",
    "birthDate": "31/01/2009",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116ISADM0019_27.jpg",
    "curso": "Técnico em Administração - Integrado Semestral - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 215,
    "name": "Débora Candido Pereira",
    "matricula": "2025116BADM0036",
    "birthDate": "23/07/2006",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116BADM0036_54.jpg",
    "curso": "Bacharelado em Administração - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 216,
    "name": "Debora Ellen Pereira Alves",
    "matricula": "2022116LMAT0013",
    "birthDate": "19/03/2004",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2022116LMAT0013_36.jpg",
    "curso": "Licenciatura em Matemática - Piripiri - Ser/Mod: 6"
  },
  {
    "id": 217,
    "name": "Deisiane Maria Pereira Cruz",
    "matricula": "2023116ISADM0049",
    "birthDate": "11/06/2007",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116ISADM0049_07.jpg",
    "curso": "Técnico em Administração - Integrado Semestral - Piripiri - Ser/Mod: 5"
  },
  {
    "id": 218,
    "name": "Deisy Ellen do Nascimento Sousa",
    "matricula": "2021116LMAT0157",
    "birthDate": "14/09/2003",
    "photo": null,
    "curso": "Licenciatura em Matemática - Piripiri - Ser/Mod: 8"
  },
  {
    "id": 219,
    "name": "Deivila Camily Souza Nascimento",
    "matricula": "2023116ISADM0043",
    "birthDate": "27/01/2008",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116ISADM0043_27.jpg",
    "curso": "Técnico em Administração - Integrado Semestral - Piripiri - Ser/Mod: 5"
  },
  {
    "id": 220,
    "name": "Denilson Bento Ventura",
    "matricula": "2023116BADM0017",
    "birthDate": "24/05/1986",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116BADM0017_18.jpg",
    "curso": "Bacharelado em Administração - Piripiri - Ser/Mod: 5"
  },
  {
    "id": 221,
    "name": "Denise de Almeida Pires",
    "matricula": "2023116BADM0014",
    "birthDate": "09/03/2005",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116BADM0014_50.jpg",
    "curso": "Bacharelado em Administração - Piripiri - Ser/Mod: 5"
  },
  {
    "id": 222,
    "name": "Déric Rodrigues de Sousa",
    "matricula": "2025116TADS0007",
    "birthDate": "15/07/2006",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116TADS0007_02.jpg",
    "curso": "Tecnologia em Análise e Desenvolvimento de Sistemas - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 223,
    "name": "DEYVISON SAMUEL GOMES DO NASCIMENTO",
    "matricula": "2024116TADS0015",
    "birthDate": "04/08/1998",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116TADS0015_49.jpg",
    "curso": "Tecnologia em Análise e Desenvolvimento de Sistemas - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 224,
    "name": "Diana Kely da Silva",
    "matricula": "2024216MADM0004",
    "birthDate": "12/06/2004",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024216MADM0004_39.jpg",
    "curso": "Técnico em Administração - Concomitante/Subsequente - Piripiri - Ser/Mod: 2"
  },
  {
    "id": 225,
    "name": "Diego dos Santos Costa",
    "matricula": "2024116LMAT0020",
    "birthDate": "26/03/2006",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116LMAT0020_57.jpg",
    "curso": "Licenciatura em Matemática - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 226,
    "name": "Diego Pablo Machado Silva",
    "matricula": "2025116ISADM0014",
    "birthDate": "18/09/2009",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116ISADM0014_24.jpg",
    "curso": "Técnico em Administração - Integrado Semestral - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 227,
    "name": "DIEGO RAFAEL FERREIRA FRANCO",
    "matricula": "2025116ISINF0030",
    "birthDate": "11/05/2009",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116ISINF0030_29.jpg",
    "curso": "Técnico em Informática - Integrado Semestral - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 228,
    "name": "Diego Rubens Penha de Souza",
    "matricula": "2025116ISADM0039",
    "birthDate": "09/03/2008",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116ISADM0039_48.jpg",
    "curso": "Técnico em Administração - Integrado Semestral - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 229,
    "name": "Dielson Cordeiro da Silva",
    "matricula": "2023116ISINF0048",
    "birthDate": "13/11/2006",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116ISINF0048_09.jpg",
    "curso": "Técnico em Informática - Integrado Semestral - Piripiri - Ser/Mod: 4"
  },
  {
    "id": 230,
    "name": "DIONATHA SILVA RAMOS",
    "matricula": "2024116ISADM0043",
    "birthDate": "14/08/2008",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116ISADM0043_55.jpg",
    "curso": "Técnico em Administração - Integrado Semestral - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 231,
    "name": "Douglas Brito Silva",
    "matricula": "2021116BADM0348",
    "birthDate": "04/05/2001",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2021116BADM0348_07.jpg",
    "curso": "Bacharelado em Administração - Piripiri - Ser/Mod: 8"
  },
  {
    "id": 232,
    "name": "DOUGLAS LEONE CUNHA PINHEIRO",
    "matricula": "2025116TADS0011",
    "birthDate": "10/06/2005",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116TADS0011_43.jpg",
    "curso": "Tecnologia em Análise e Desenvolvimento de Sistemas - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 233,
    "name": "Douglas Lima dos Reis",
    "matricula": "2024116LMAT0030",
    "birthDate": "13/10/2005",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116LMAT0030_32.jpg",
    "curso": "Licenciatura em Matemática - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 234,
    "name": "Douglas Raphael da Silva Marques",
    "matricula": "2024216MKEM0021",
    "birthDate": "28/03/1995",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024216MKEM0021_04.jpg",
    "curso": "Especialização em Marketing e Empreendedorismo em Moda - Ser/Mod: 1"
  },
  {
    "id": 235,
    "name": "DULCE MARIA DOS SANTOS",
    "matricula": "2024116ISINF0025",
    "birthDate": "22/02/2009",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116ISINF0025_18.jpg",
    "curso": "Técnico em Informática - Integrado Semestral - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 236,
    "name": "Edite Maria de Araújo Silva",
    "matricula": "2023116TDSM0018",
    "birthDate": "12/01/1963",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116TDSM0018_04.jpg",
    "curso": "Tecnologia em Design de Moda - Piripiri - Ser/Mod: 4"
  },
  {
    "id": 237,
    "name": "EDMIRLA ELEN MORAIS MELO",
    "matricula": "2025116TADS0019",
    "birthDate": "07/03/2007",
    "photo": null,
    "curso": "Tecnologia em Análise e Desenvolvimento de Sistemas - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 238,
    "name": "Ednara Andrade da Conceição",
    "matricula": "2024216JADM0028",
    "birthDate": "19/06/1997",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024216JADM0028_02.jpg",
    "curso": "Técnico em Administração Integrado ao Ensino Médio - PROEJA - Ser/Mod: 2"
  },
  {
    "id": 239,
    "name": "Ednardo dos Santos",
    "matricula": "2023116LMAT0033",
    "birthDate": "30/03/1994",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116LMAT0033_06.jpg",
    "curso": "Licenciatura em Matemática - Piripiri - Ser/Mod: 5"
  },
  {
    "id": 240,
    "name": "Eduardo Gomes Dias",
    "matricula": "2023116ISINF0034",
    "birthDate": "10/12/2006",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116ISINF0034_09.jpg",
    "curso": "Técnico em Informática - Integrado Semestral - Piripiri - Ser/Mod: 5"
  },
  {
    "id": 241,
    "name": "Eduardo Henrique da Silva Dias",
    "matricula": "2024116BADM0007",
    "birthDate": "05/02/2005",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116BADM0007_12.jpg",
    "curso": "Bacharelado em Administração - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 242,
    "name": "ELAYNE DA SILVA NASCIMENTO",
    "matricula": "2024116LPIN0001",
    "birthDate": "19/01/1997",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116LPIN0001_12.jpg",
    "curso": "Licenciatura Intercultural Indígena - CAPIR - Ser/Mod: 1"
  },
  {
    "id": 243,
    "name": "Elen Cristine da Rocha Santos",
    "matricula": "2025116UGRH0006",
    "birthDate": "03/05/1997",
    "photo": null,
    "curso": "Tecnologia em Gestão de Recursos Humanos - Ser/Mod: 1"
  },
  {
    "id": 244,
    "name": "ELIABE TRANQUEIRA SAMPAIO",
    "matricula": "2025116BADM0034",
    "birthDate": "16/08/2006",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116BADM0034_06.jpg",
    "curso": "Bacharelado em Administração - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 245,
    "name": "ELIANA DOS SANTOS SILVA",
    "matricula": "2025116ISADM0027",
    "birthDate": "20/11/2009",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116ISADM0027_56.jpg",
    "curso": "Técnico em Administração - Integrado Semestral - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 246,
    "name": "Elias Maycon Pereira de Souza",
    "matricula": "2020116LMAT0193",
    "birthDate": "29/04/2000",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2020116LMAT0193_22.jpg",
    "curso": "Licenciatura em Matemática - Piripiri - Ser/Mod: 9"
  },
  {
    "id": 247,
    "name": "Élida Mara do Amarante Sousa",
    "matricula": "2023116LMAT0022",
    "birthDate": "12/04/2005",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116LMAT0022_30.jpg",
    "curso": "Licenciatura em Matemática - Piripiri - Ser/Mod: 5"
  },
  {
    "id": 248,
    "name": "ELIELSON MELO AMARAL",
    "matricula": "2024116ISINF0020",
    "birthDate": "29/03/2009",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116ISINF0020_02.jpg",
    "curso": "Técnico em Informática - Integrado Semestral - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 249,
    "name": "Eliene Maria de Oliveira",
    "matricula": "2023116TDSM0005",
    "birthDate": "19/07/1984",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116TDSM0005_50.jpg",
    "curso": "Tecnologia em Design de Moda - Piripiri - Ser/Mod: 4"
  },
  {
    "id": 250,
    "name": "Elizabete da Silva Mendes",
    "matricula": "2022116LMAT0242",
    "birthDate": "15/09/2003",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2022116LMAT0242_42.jpg",
    "curso": "Licenciatura em Matemática - Piripiri - Ser/Mod: 6"
  },
  {
    "id": 251,
    "name": "Eliziane Jardele Paulo de Sousa",
    "matricula": "2024216MKEM0008",
    "birthDate": "28/10/1991",
    "photo": null,
    "curso": "Especialização em Marketing e Empreendedorismo em Moda - Ser/Mod: 1"
  },
  {
    "id": 252,
    "name": "Ellen Cristyna Vieira de Brito",
    "matricula": "2022116LMAT0072",
    "birthDate": "15/01/2004",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2022116LMAT0072_16.jpg",
    "curso": "Licenciatura em Matemática - Piripiri - Ser/Mod: 6"
  },
  {
    "id": 253,
    "name": "ELLEN GABRIELLE OLIVEIRA RAMOS",
    "matricula": "2024116ISINF0030",
    "birthDate": "27/03/2009",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116ISINF0030_51.jpg",
    "curso": "Técnico em Informática - Integrado Semestral - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 254,
    "name": "ELLEN VITORIA SILVA GOMES",
    "matricula": "2024116ISADM0016",
    "birthDate": "09/11/2008",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116ISADM0016_12.jpg",
    "curso": "Técnico em Administração - Integrado Semestral - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 255,
    "name": "EMANUELA BANDEIRA TAVARES SOUSA",
    "matricula": "2024116ISVES0009",
    "birthDate": "18/12/2008",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116ISVES0009_04.jpg",
    "curso": "Técnico em Vestuário - Integrado Semestral - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 256,
    "name": "Emanuele Cristina Barbosa",
    "matricula": "2023116BADM0046",
    "birthDate": "01/07/2004",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116BADM0046_10.jpg",
    "curso": "Bacharelado em Administração - Piripiri - Ser/Mod: 5"
  },
  {
    "id": 257,
    "name": "EMANUELLY VICTORIA DO NASCIMENTO SILVA",
    "matricula": "2025116ISADM0031",
    "birthDate": "13/06/2008",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116ISADM0031_30.jpg",
    "curso": "Técnico em Administração - Integrado Semestral - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 258,
    "name": "Emerson Silva de Meneses",
    "matricula": "2024216JADM0012",
    "birthDate": "17/10/1989",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024216JADM0012_11.jpg",
    "curso": "Técnico em Administração Integrado ao Ensino Médio - PROEJA - Ser/Mod: 1"
  },
  {
    "id": 259,
    "name": "EMILLY DE CARVALHO SILVA",
    "matricula": "2025116LMAT0003",
    "birthDate": "06/10/2005",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116LMAT0003_56.jpg",
    "curso": "Licenciatura em Matemática - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 260,
    "name": "Emilly Ferreira Aguiar",
    "matricula": "2022116TDSM0032",
    "birthDate": "14/09/2002",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2022116TDSM0032_58.jpg",
    "curso": "Tecnologia em Design de Moda - Piripiri - Ser/Mod: 6"
  },
  {
    "id": 261,
    "name": "Emilly Joice Gomes Siqueira",
    "matricula": "2024116ISINF0067",
    "birthDate": "12/05/2007",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116ISINF0067_13.jpg",
    "curso": "Técnico em Informática - Integrado Semestral - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 262,
    "name": "EMILLY VICTORIA SILVA DE OLIVEIRA",
    "matricula": "2025116ISVES0012",
    "birthDate": "16/03/2010",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116ISVES0012_27.jpg",
    "curso": "Técnico em Vestuário - Integrado Semestral - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 263,
    "name": "EMILLY VITORIA DOS SANTOS NASCIMENTO",
    "matricula": "2024116ISINF0026",
    "birthDate": "27/06/2008",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116ISINF0026_03.jpg",
    "curso": "Técnico em Informática - Integrado Semestral - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 264,
    "name": "Emily Cristine Silva Soares",
    "matricula": "2024116ISADM0068",
    "birthDate": "05/07/2008",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116ISADM0068_48.jpg",
    "curso": "Técnico em Administração - Integrado Semestral - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 265,
    "name": "EMILY RAFAIELLY LAGES SILVA",
    "matricula": "2025116ISINF0031",
    "birthDate": "09/11/2009",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116ISINF0031_07.jpg",
    "curso": "Técnico em Informática - Integrado Semestral - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 266,
    "name": "EMILY VITORIA MELO DA SILVA",
    "matricula": "2024116ISINF0037",
    "birthDate": "20/10/2008",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116ISINF0037_06.jpg",
    "curso": "Técnico em Informática - Integrado Semestral - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 267,
    "name": "ENZO REYLAN COSTA",
    "matricula": "2025116ISINF0007",
    "birthDate": "11/06/2009",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116ISINF0007_31.jpg",
    "curso": "Técnico em Informática - Integrado Semestral - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 268,
    "name": "Enzo Sales da Rocha",
    "matricula": "2022116LMAT0250",
    "birthDate": "24/07/2004",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2022116LMAT0250_43.jpg",
    "curso": "Licenciatura em Matemática - Piripiri - Ser/Mod: 6"
  },
  {
    "id": 269,
    "name": "ERIC ARAUJO URQUIZA DE SOUSA",
    "matricula": "2024116ISINF0039",
    "birthDate": "26/10/2008",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116ISINF0039_00.jpg",
    "curso": "Técnico em Informática - Integrado Semestral - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 270,
    "name": "Éric Lima de Brito",
    "matricula": "2018118220415",
    "birthDate": "26/09/1995",
    "photo": null,
    "curso": "Licenciatura em Matemática - Piripiri - Ser/Mod: 9"
  },
  {
    "id": 271,
    "name": "Eric Vinícius dos Santos Oliveira",
    "matricula": "2025116TADS0016",
    "birthDate": "15/03/2007",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116TADS0016_34.jpg",
    "curso": "Tecnologia em Análise e Desenvolvimento de Sistemas - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 272,
    "name": "ERICA DA SILVA DUARTE PENHA",
    "matricula": "2024116ISVES0019",
    "birthDate": "13/10/2008",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116ISVES0019_11.jpg",
    "curso": "Técnico em Vestuário - Integrado Semestral - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 273,
    "name": "Érica Oliveira dos Santos",
    "matricula": "2025116TDSM0019",
    "birthDate": "03/09/1993",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116TDSM0019_38.jpg",
    "curso": "Tecnologia em Design de Moda - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 274,
    "name": "Erica Vanessa de Macedo Pinho",
    "matricula": "2025116ULLI0005",
    "birthDate": "30/01/1997",
    "photo": null,
    "curso": "Licenciatura em Letras Inglês - Ser/Mod: 1"
  },
  {
    "id": 275,
    "name": "ERICK BRYAN SILVA SOUSA",
    "matricula": "2024116ISINF0045",
    "birthDate": "26/01/2009",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116ISINF0045_58.jpg",
    "curso": "Técnico em Informática - Integrado Semestral - Piripiri - Ser/Mod: 2"
  },
  {
    "id": 276,
    "name": "ERIKA PRISCILA DE SOUSA DOS SANTOS",
    "matricula": "2024116ISADM0059",
    "birthDate": "17/07/2008",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116ISADM0059_00.jpg",
    "curso": "Técnico em Administração - Integrado Semestral - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 277,
    "name": "Erisvaldo Daniel Junior",
    "matricula": "2023116LMAT0005",
    "birthDate": "20/10/2004",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116LMAT0005_10.jpg",
    "curso": "Licenciatura em Matemática - Piripiri - Ser/Mod: 5"
  },
  {
    "id": 278,
    "name": "Esdras Felipe Sousa Machado",
    "matricula": "2023116ISINF0035",
    "birthDate": "06/05/2007",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116ISINF0035_20.jpg",
    "curso": "Técnico em Informática - Integrado Semestral - Piripiri - Ser/Mod: 5"
  },
  {
    "id": 279,
    "name": "Esmeralda Monteiro Sousa",
    "matricula": "2022116LMAT0307",
    "birthDate": "23/04/2003",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2022116LMAT0307_01.jpg",
    "curso": "Licenciatura em Matemática - Piripiri - Ser/Mod: 6"
  },
  {
    "id": 280,
    "name": "Estevam Gabriel Silva de Sousa",
    "matricula": "2025116TADS0023",
    "birthDate": "15/02/2006",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116TADS0023_33.jpg",
    "curso": "Tecnologia em Análise e Desenvolvimento de Sistemas - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 281,
    "name": "Euclides Damasceno Sousa Junior",
    "matricula": "2022116LMAT0099",
    "birthDate": "05/12/2000",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2022116LMAT0099_42.jpg",
    "curso": "Licenciatura em Matemática - Piripiri - Ser/Mod: 6"
  },
  {
    "id": 282,
    "name": "EULALIA CONCEICAO DE MENEZES",
    "matricula": "2025116UGRH0001",
    "birthDate": "29/11/1973",
    "photo": null,
    "curso": "Tecnologia em Gestão de Recursos Humanos - Ser/Mod: 1"
  },
  {
    "id": 283,
    "name": "Evanilson Feitosa de Sousa",
    "matricula": "2023116LMAT0023",
    "birthDate": "13/08/2004",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116LMAT0023_26.jpg",
    "curso": "Licenciatura em Matemática - Piripiri - Ser/Mod: 5"
  },
  {
    "id": 284,
    "name": "EVELYN NAIARA DA SILVA FAÇANHA",
    "matricula": "2024116ISVES0010",
    "birthDate": "16/03/2009",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116ISVES0010_44.jpg",
    "curso": "Técnico em Vestuário - Integrado Semestral - Piripiri - Ser/Mod: 2"
  },
  {
    "id": 285,
    "name": "EVERALDO FERREIRA DO NASCIMENTO JUNIOR",
    "matricula": "2025116LMAT0006",
    "birthDate": "26/09/2003",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116LMAT0006_55.jpg",
    "curso": "Licenciatura em Matemática - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 286,
    "name": "Everton Ribeiro de Lima",
    "matricula": "2022116ISVES0110",
    "birthDate": "08/08/2006",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2022116ISVES0110_33.jpg",
    "curso": "Técnico em Vestuário - Integrado Semestral - Piripiri - Ser/Mod: 6"
  },
  {
    "id": 287,
    "name": "Fabiana Noelia da Silva",
    "matricula": "2025116UGRH0015",
    "birthDate": "13/04/1985",
    "photo": null,
    "curso": "Tecnologia em Gestão de Recursos Humanos - Ser/Mod: 1"
  },
  {
    "id": 288,
    "name": "FABIO DE CARVALHO SILVA FILHO",
    "matricula": "2024116ISADM0037",
    "birthDate": "25/07/2008",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116ISADM0037_41.jpg",
    "curso": "Técnico em Administração - Integrado Semestral - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 289,
    "name": "Fabio Vaz de Carvalho",
    "matricula": "2022116LMAT0102",
    "birthDate": "25/06/2003",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2022116LMAT0102_43.jpg",
    "curso": "Licenciatura em Matemática - Piripiri - Ser/Mod: 6"
  },
  {
    "id": 290,
    "name": "FABRICIO DE CARVALHO MOTA",
    "matricula": "2024116TADS0002",
    "birthDate": "26/12/2005",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116TADS0002_02.jpg",
    "curso": "Tecnologia em Análise e Desenvolvimento de Sistemas - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 291,
    "name": "Fabrício de Oliveira Rodrigues",
    "matricula": "2023116LMAT0024",
    "birthDate": "26/08/2004",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116LMAT0024_23.jpg",
    "curso": "Licenciatura em Matemática - Piripiri - Ser/Mod: 5"
  },
  {
    "id": 292,
    "name": "FABRICIO DE SOUSA RODRIGUES",
    "matricula": "2025116LMAT0025",
    "birthDate": "12/12/2006",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116LMAT0025_26.jpg",
    "curso": "Licenciatura em Matemática - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 293,
    "name": "FELIPE GOMES ALVES",
    "matricula": "2024116ISINF0021",
    "birthDate": "19/01/2009",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116ISINF0021_29.jpg",
    "curso": "Técnico em Informática - Integrado Semestral - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 294,
    "name": "FELIPE MARDONIO DE SOUZA SILVA",
    "matricula": "2025116UGRH0024",
    "birthDate": "09/01/1989",
    "photo": null,
    "curso": "Tecnologia em Gestão de Recursos Humanos - Ser/Mod: 1"
  },
  {
    "id": 295,
    "name": "Felipe Mendes Gomes",
    "matricula": "2023116ISINF0014",
    "birthDate": "04/09/2007",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116ISINF0014_05.jpg",
    "curso": "Técnico em Informática - Integrado Semestral - Piripiri - Ser/Mod: 5"
  },
  {
    "id": 296,
    "name": "Felipe Oliveira do Nascimento",
    "matricula": "2023116ISADM0021",
    "birthDate": "20/07/2007",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116ISADM0021_58.jpg",
    "curso": "Técnico em Administração - Integrado Semestral - Piripiri - Ser/Mod: 5"
  },
  {
    "id": 297,
    "name": "Ferdinan Oliveira Lima",
    "matricula": "2020116LMAT0215",
    "birthDate": "17/03/2001",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2020116LMAT0215_47.jpg",
    "curso": "Licenciatura em Matemática - Piripiri - Ser/Mod: 9"
  },
  {
    "id": 298,
    "name": "Fernanda dos Santos Silva",
    "matricula": "2023116ISVES0027",
    "birthDate": "02/07/2007",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116ISVES0027_05.jpg",
    "curso": "Técnico em Vestuário - Integrado Semestral - Piripiri - Ser/Mod: 5"
  },
  {
    "id": 299,
    "name": "Fernanda Nicole Oliveira Silva",
    "matricula": "2023116LMAT0032",
    "birthDate": "02/01/2005",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116LMAT0032_06.jpg",
    "curso": "Licenciatura em Matemática - Piripiri - Ser/Mod: 5"
  },
  {
    "id": 300,
    "name": "FERNANDA RODRIGUES FELIX",
    "matricula": "2024116ISADM0018",
    "birthDate": "07/11/2008",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116ISADM0018_53.jpg",
    "curso": "Técnico em Administração - Integrado Semestral - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 301,
    "name": "FERNANDO JOSE GALENO MOREIRA",
    "matricula": "2024116BADM0019",
    "birthDate": "02/09/2002",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116BADM0019_43.jpg",
    "curso": "Bacharelado em Administração - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 302,
    "name": "Fernando Keyrrisson Melo de Andrade Moraes",
    "matricula": "2024116ISADM0069",
    "birthDate": "20/02/2009",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116ISADM0069_11.jpg",
    "curso": "Técnico em Administração - Integrado Semestral - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 303,
    "name": "FLAVIA CORREIA DA SILVA",
    "matricula": "2024116BADM0025",
    "birthDate": "13/09/2005",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116BADM0025_43.jpg",
    "curso": "Bacharelado em Administração - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 304,
    "name": "FLAVIA MARIA DA SILVA",
    "matricula": "2025116ULLI0012",
    "birthDate": "19/07/1986",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116ULLI0012_32.jpg",
    "curso": "Licenciatura em Letras Inglês - Ser/Mod: 1"
  },
  {
    "id": 305,
    "name": "Flavia Regina de Melo Rodrigues",
    "matricula": "2025116TDSM0023",
    "birthDate": "10/07/1978",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116TDSM0023_20.jpg",
    "curso": "Tecnologia em Design de Moda - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 306,
    "name": "Flávio José de Oliveira Pereira",
    "matricula": "2022116BADM0263",
    "birthDate": "18/05/2000",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2022116BADM0263_41.jpg",
    "curso": "Bacharelado em Administração - Piripiri - Ser/Mod: 6"
  },
  {
    "id": 307,
    "name": "Flávison Natan Fontenele de Sousa",
    "matricula": "2025116BADM0040",
    "birthDate": "21/08/2006",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116BADM0040_59.jpg",
    "curso": "Bacharelado em Administração - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 308,
    "name": "Franciele Aparecida da Silva Pereira",
    "matricula": "2020116LMAT0320",
    "birthDate": "07/07/1998",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2020116LMAT0320_43.jpg",
    "curso": "Licenciatura em Matemática - Piripiri - Ser/Mod: 9"
  },
  {
    "id": 309,
    "name": "FRANCIELLY FERREIRA CARVALHO",
    "matricula": "2025116TDSM0013",
    "birthDate": "03/07/2006",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116TDSM0013_13.jpg",
    "curso": "Tecnologia em Design de Moda - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 310,
    "name": "FRANCILENE LEITE DE SOUSA",
    "matricula": "2024116LPIN0026",
    "birthDate": "24/03/1979",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116LPIN0026_44.jpg",
    "curso": "Licenciatura Intercultural Indígena - CAPIR - Ser/Mod: 1"
  },
  {
    "id": 311,
    "name": "Francilene Rodrigues da Silva",
    "matricula": "2023216BADM0002",
    "birthDate": "23/09/1993",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023216BADM0002_09.jpg",
    "curso": "Bacharelado em Administração - Piripiri - Ser/Mod: 6"
  },
  {
    "id": 312,
    "name": "Francimauro Rodrigues dos Santos",
    "matricula": "2023116LMAT0031",
    "birthDate": "20/06/1996",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116LMAT0031_42.jpg",
    "curso": "Licenciatura em Matemática - Piripiri - Ser/Mod: 5"
  },
  {
    "id": 313,
    "name": "FRANCINALVA LIMA DE SOUZA",
    "matricula": "2025116BADM0002",
    "birthDate": "26/01/1982",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116BADM0002_05.jpg",
    "curso": "Bacharelado em Administração - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 314,
    "name": "Francisca Clara Medeiros Sousa",
    "matricula": "2025116ISADM0029",
    "birthDate": "04/08/2008",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116ISADM0029_01.jpg",
    "curso": "Técnico em Administração - Integrado Semestral - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 315,
    "name": "Francisca das Chagas Alves do Nascimento Rodrigues",
    "matricula": "2021116BADM0240",
    "birthDate": "11/05/1990",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2021116BADM0240_16.jpg",
    "curso": "Bacharelado em Administração - Piripiri - Ser/Mod: 8"
  },
  {
    "id": 316,
    "name": "Francisca das Chagas Silva Gomes",
    "matricula": "2022116TDSM0180",
    "birthDate": "30/07/1968",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2022116TDSM0180_54.jpg",
    "curso": "Tecnologia em Design de Moda - Piripiri - Ser/Mod: 6"
  },
  {
    "id": 317,
    "name": "FRANCISCA EDUARDA DE OLIVEIRA ALVES",
    "matricula": "2025116ISVES0020",
    "birthDate": "29/03/2023",
    "photo": null,
    "curso": "Técnico em Vestuário - Integrado Semestral - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 318,
    "name": "FRANCISCA GEYCIANE PEREIRA DA SILVA",
    "matricula": "2024116ISINF0027",
    "birthDate": "12/06/2008",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116ISINF0027_17.jpg",
    "curso": "Técnico em Informática - Integrado Semestral - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 319,
    "name": "FRANCISCA JAIRLA DA SILVA OLIVEIRA",
    "matricula": "2024116LPIN0021",
    "birthDate": "29/06/2002",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116LPIN0021_38.jpg",
    "curso": "Licenciatura Intercultural Indígena - CAPIR - Ser/Mod: 1"
  },
  {
    "id": 320,
    "name": "FRANCISCA KARIANE COSTA SOUSA",
    "matricula": "2025116LMAT0016",
    "birthDate": "07/12/2006",
    "photo": null,
    "curso": "Licenciatura em Matemática - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 321,
    "name": "FRANCISCA KESSIANE COSTA SOUSA",
    "matricula": "2024116ISVES0004",
    "birthDate": "01/10/2008",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116ISVES0004_21.jpg",
    "curso": "Técnico em Vestuário - Integrado Semestral - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 322,
    "name": "FRANCISCA LAISLA MATOS VIEIRA",
    "matricula": "2024116ISADM0050",
    "birthDate": "20/10/2008",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116ISADM0050_16.jpg",
    "curso": "Técnico em Administração - Integrado Semestral - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 323,
    "name": "Francisca Maria Andrade da Conceição",
    "matricula": "2024216JADM0026",
    "birthDate": "09/08/2003",
    "photo": null,
    "curso": "Técnico em Administração Integrado ao Ensino Médio - PROEJA - Ser/Mod: 2"
  },
  {
    "id": 324,
    "name": "FRANCISCA MARIA CARDOSO ARAUJO",
    "matricula": "2025116TDSM0007",
    "birthDate": "04/10/1983",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116TDSM0007_21.jpg",
    "curso": "Tecnologia em Design de Moda - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 325,
    "name": "Francisca Maria de Oliveira",
    "matricula": "2024216JADM0018",
    "birthDate": "27/01/1988",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024216JADM0018_49.jpg",
    "curso": "Técnico em Administração Integrado ao Ensino Médio - PROEJA - Ser/Mod: 2"
  },
  {
    "id": 326,
    "name": "Francisca Oliveira da Silva",
    "matricula": "2024216MKEM0023",
    "birthDate": "22/11/1984",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024216MKEM0023_27.jpg",
    "curso": "Especialização em Marketing e Empreendedorismo em Moda - Ser/Mod: 2"
  },
  {
    "id": 327,
    "name": "Francisca Raiane da Silva",
    "matricula": "2023116BADM0044",
    "birthDate": "27/06/2002",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116BADM0044_39.jpg",
    "curso": "Bacharelado em Administração - Piripiri - Ser/Mod: 5"
  },
  {
    "id": 328,
    "name": "Francisca Raissa Chagas da Silva",
    "matricula": "2025116ISADM0006",
    "birthDate": "08/04/2009",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116ISADM0006_10.jpg",
    "curso": "Técnico em Administração - Integrado Semestral - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 329,
    "name": "Francisca Rita de Assuncao Santos",
    "matricula": "2022116TDSM0040",
    "birthDate": "16/09/2003",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2022116TDSM0040_20.jpg",
    "curso": "Tecnologia em Design de Moda - Piripiri - Ser/Mod: 6"
  },
  {
    "id": 330,
    "name": "FRANCISCA VALDELICE GADEIA DA SILVA",
    "matricula": "2025116UGRH0012",
    "birthDate": "18/12/1996",
    "photo": null,
    "curso": "Tecnologia em Gestão de Recursos Humanos - Ser/Mod: 1"
  },
  {
    "id": 331,
    "name": "Francisca Valdene Silva Santos",
    "matricula": "2024216MKEM0019",
    "birthDate": "04/10/1995",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024216MKEM0019_32.jpg",
    "curso": "Especialização em Marketing e Empreendedorismo em Moda - Ser/Mod: 1"
  },
  {
    "id": 332,
    "name": "Francisca Vitória Sampaio Ribeiro",
    "matricula": "2023116ISADM0016",
    "birthDate": "29/01/2008",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116ISADM0016_04.jpg",
    "curso": "Técnico em Administração - Integrado Semestral - Piripiri - Ser/Mod: 5"
  },
  {
    "id": 333,
    "name": "FRANCISCO ADRIEL MORAES DE OLIVEIRA",
    "matricula": "2024116ISADM0063",
    "birthDate": "29/10/2008",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116ISADM0063_50.jpg",
    "curso": "Técnico em Administração - Integrado Semestral - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 334,
    "name": "FRANCISCO ADRIELL SANTOS DO NASCIMENTO",
    "matricula": "2025116LMAT0038",
    "birthDate": "12/02/2007",
    "photo": null,
    "curso": "Licenciatura em Matemática - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 335,
    "name": "FRANCISCO AUGUSTO DE SOUZA",
    "matricula": "2025116ISINF0010",
    "birthDate": "28/01/2010",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116ISINF0010_27.jpg",
    "curso": "Técnico em Informática - Integrado Semestral - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 336,
    "name": "FRANCISCO AURELIO GONCALVES NASCIMENTO",
    "matricula": "2024116LMAT0009",
    "birthDate": "16/03/2006",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116LMAT0009_30.jpg",
    "curso": "Licenciatura em Matemática - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 337,
    "name": "Francisco Cairo de Sousa",
    "matricula": "2022116ISADM0460",
    "birthDate": "29/06/2004",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2022116ISADM0460_00.jpg",
    "curso": "Técnico em Administração - Integrado Semestral - Piripiri - Ser/Mod: 6"
  },
  {
    "id": 338,
    "name": "Francisco das Chagas do Nascimento",
    "matricula": "2024116TDSM0005",
    "birthDate": "10/12/2001",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116TDSM0005_08.jpg",
    "curso": "Tecnologia em Design de Moda - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 339,
    "name": "Francisco das Chagas dos Santos",
    "matricula": "2024116ISINF0059",
    "birthDate": "15/09/2008",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116ISINF0059_30.jpg",
    "curso": "Técnico em Informática - Integrado Semestral - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 340,
    "name": "FRANCISCO DAS CHAGAS PASSOS DE CARVALHO JUNIOR",
    "matricula": "2025116ULLI0013",
    "birthDate": "02/08/1993",
    "photo": null,
    "curso": "Licenciatura em Letras Inglês - Ser/Mod: 1"
  },
  {
    "id": 341,
    "name": "FRANCISCO DAVI SANTOS SOUSA",
    "matricula": "2025116BADM0016",
    "birthDate": "03/07/2005",
    "photo": null,
    "curso": "Bacharelado em Administração - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 342,
    "name": "Francisco de Assis do Nascimento Silva",
    "matricula": "2024116BADM0009",
    "birthDate": "28/01/2005",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116BADM0009_48.jpg",
    "curso": "Bacharelado em Administração - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 343,
    "name": "FRANCISCO DE CASSIO SALES SAMPAIO",
    "matricula": "2025116TADS0034",
    "birthDate": "17/03/2000",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116TADS0034_27.jpg",
    "curso": "Tecnologia em Análise e Desenvolvimento de Sistemas - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 344,
    "name": "Francisco Eduardo Fernandes da Costa",
    "matricula": "2022116BADM0158",
    "birthDate": "04/02/2004",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2022116BADM0158_30.jpg",
    "curso": "Bacharelado em Administração - Piripiri - Ser/Mod: 6"
  },
  {
    "id": 345,
    "name": "Francisco Eduardo Matos Ximendes Vieira",
    "matricula": "2025116ISINF0001",
    "birthDate": "23/11/2009",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116ISINF0001_21.jpg",
    "curso": "Técnico em Informática - Integrado Semestral - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 346,
    "name": "FRANCISCO EMANUEL DA CONCEICAO",
    "matricula": "2025116BADM0019",
    "birthDate": "22/06/2005",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116BADM0019_58.jpg",
    "curso": "Bacharelado em Administração - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 347,
    "name": "Francisco Gabriel Carvalho Leitão",
    "matricula": "2022116ISVES0145",
    "birthDate": "18/02/2006",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2022116ISVES0145_09.jpg",
    "curso": "Técnico em Vestuário - Integrado Semestral - Piripiri - Ser/Mod: 6"
  },
  {
    "id": 348,
    "name": "FRANCISCO GABRIEL DE CARVALHO GAMA",
    "matricula": "2024116ISADM0048",
    "birthDate": "08/11/2007",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116ISADM0048_44.jpg",
    "curso": "Técnico em Administração - Integrado Semestral - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 349,
    "name": "FRANCISCO HERISSON SOUSA BRITO",
    "matricula": "2024116ISADM0009",
    "birthDate": "22/01/2009",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116ISADM0009_01.jpg",
    "curso": "Técnico em Administração - Integrado Semestral - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 350,
    "name": "FRANCISCO ICARO SOUSA BRANDAO",
    "matricula": "2025116LMAT0015",
    "birthDate": "01/09/2006",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116LMAT0015_13.jpg",
    "curso": "Licenciatura em Matemática - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 351,
    "name": "Francisco Igor Silva Santos",
    "matricula": "2024116TADS0030",
    "birthDate": "07/01/2002",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116TADS0030_23.jpg",
    "curso": "Tecnologia em Análise e Desenvolvimento de Sistemas - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 352,
    "name": "Francisco Kellviny Crúz Feitosa",
    "matricula": "2023116ISINF0006",
    "birthDate": "02/08/2007",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116ISINF0006_52.jpg",
    "curso": "Técnico em Informática - Integrado Semestral - Piripiri - Ser/Mod: 5"
  },
  {
    "id": 353,
    "name": "Francisco Lael Silva Souza",
    "matricula": "2024116TADS0035",
    "birthDate": "20/04/2005",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116TADS0035_21.jpg",
    "curso": "Tecnologia em Análise e Desenvolvimento de Sistemas - Piripiri - Ser/Mod: 2"
  },
  {
    "id": 354,
    "name": "Francisco Lopes de Araujo Neto",
    "matricula": "2023116LMAT0013",
    "birthDate": "26/11/2001",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116LMAT0013_10.jpg",
    "curso": "Licenciatura em Matemática - Piripiri - Ser/Mod: 5"
  },
  {
    "id": 355,
    "name": "Francisco Machado Alves",
    "matricula": "2024216JADM0010",
    "birthDate": "14/01/1967",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024216JADM0010_41.jpg",
    "curso": "Técnico em Administração Integrado ao Ensino Médio - PROEJA - Ser/Mod: 2"
  },
  {
    "id": 356,
    "name": "Francisco Mailson da Silva Sousa",
    "matricula": "2025116TADS0001",
    "birthDate": "22/08/2005",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116TADS0001_14.jpg",
    "curso": "Tecnologia em Análise e Desenvolvimento de Sistemas - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 357,
    "name": "FRANCISCO MATHEUS DIAS DO NASCIMENTO",
    "matricula": "2024116ISADM0020",
    "birthDate": "10/09/2008",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116ISADM0020_07.jpg",
    "curso": "Técnico em Administração - Integrado Semestral - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 358,
    "name": "FRANCISCO PAULO ARAUJO DA SILVA",
    "matricula": "2025116ISINF0026",
    "birthDate": "13/08/2009",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116ISINF0026_52.jpg",
    "curso": "Técnico em Informática - Integrado Semestral - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 359,
    "name": "FRANCISCO PIETRO ANDRADE DE BRITO",
    "matricula": "2024116ISADM0035",
    "birthDate": "16/04/2009",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116ISADM0035_04.jpg",
    "curso": "Técnico em Administração - Integrado Semestral - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 360,
    "name": "Francisco Rafaelson dos Santos Rodrigues",
    "matricula": "2023116ISINF0016",
    "birthDate": "14/11/2007",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116ISINF0016_16.jpg",
    "curso": "Técnico em Informática - Integrado Semestral - Piripiri - Ser/Mod: 5"
  },
  {
    "id": 361,
    "name": "Francisco Raylan Mendes de Oliveira",
    "matricula": "2023116ISADM0017",
    "birthDate": "21/02/2008",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116ISADM0017_48.jpg",
    "curso": "Técnico em Administração - Integrado Semestral - Piripiri - Ser/Mod: 5"
  },
  {
    "id": 362,
    "name": "Francisco Roniérisson Pereira Silva",
    "matricula": "2023116LMAT0003",
    "birthDate": "15/11/2002",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116LMAT0003_27.jpg",
    "curso": "Licenciatura em Matemática - Piripiri - Ser/Mod: 5"
  },
  {
    "id": 363,
    "name": "Francisco Ruan de Memória Ferreira",
    "matricula": "2023116ISINF0058",
    "birthDate": "22/09/2007",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116ISINF0058_01.jpg",
    "curso": "Técnico em Informática - Integrado Semestral - Piripiri - Ser/Mod: 5"
  },
  {
    "id": 364,
    "name": "Francisco Stanlr Lopes da Silva",
    "matricula": "2020116LMAT0398",
    "birthDate": "19/04/1997",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2020116LMAT0398_52.jpg",
    "curso": "Licenciatura em Matemática - Piripiri - Ser/Mod: 9"
  },
  {
    "id": 365,
    "name": "FRANCISCO THANACK DOS SANTOS VIEIRA",
    "matricula": "2024116ISINF0016",
    "birthDate": "29/03/2008",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116ISINF0016_08.jpg",
    "curso": "Técnico em Informática - Integrado Semestral - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 366,
    "name": "FRANCISCO VINICIOS NUNES DE SOUSA",
    "matricula": "2025116UGRH0018",
    "birthDate": "11/10/2005",
    "photo": null,
    "curso": "Tecnologia em Gestão de Recursos Humanos - Ser/Mod: 1"
  },
  {
    "id": 367,
    "name": "Francisco Vitor de Sousa Pereira",
    "matricula": "2020116BADM0350",
    "birthDate": "21/08/1999",
    "photo": null,
    "curso": "Bacharelado em Administração - Piripiri - Ser/Mod: 8"
  },
  {
    "id": 368,
    "name": "FRANCISCO VITOR GONCALVES SOUZA",
    "matricula": "2025116ISINF0008",
    "birthDate": "14/11/2009",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116ISINF0008_12.jpg",
    "curso": "Técnico em Informática - Integrado Semestral - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 369,
    "name": "FRANCISCO WERYK DA CONCEICAO SANTOS",
    "matricula": "2025116ISADM0024",
    "birthDate": "21/09/2009",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116ISADM0024_41.jpg",
    "curso": "Técnico em Administração - Integrado Semestral - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 370,
    "name": "Francislane Santos Nascimento",
    "matricula": "2023116ISINF0061",
    "birthDate": "15/12/2007",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116ISINF0061_19.jpg",
    "curso": "Técnico em Informática - Integrado Semestral - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 371,
    "name": "Francisnilto dos Santos Nascimento",
    "matricula": "2024116TADS0012",
    "birthDate": "25/07/2004",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116TADS0012_20.jpg",
    "curso": "Tecnologia em Análise e Desenvolvimento de Sistemas - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 372,
    "name": "FRANKCIANA DE SOUSA GÓIS LUSTOSA",
    "matricula": "2024216MADM0006",
    "birthDate": "02/04/1985",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024216MADM0006_00.jpg",
    "curso": "Técnico em Administração - Concomitante/Subsequente - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 373,
    "name": "FRANKCIANA DE SOUSA GÓIS LUSTOSA",
    "matricula": "2025116BADM0033",
    "birthDate": "02/04/1985",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116BADM0033_43.jpg",
    "curso": "Bacharelado em Administração - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 374,
    "name": "Gabriel Arcanjo Brasil Celestino",
    "matricula": "2024116BADM0038",
    "birthDate": "21/03/2005",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116BADM0038_17.jpg",
    "curso": "Bacharelado em Administração - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 375,
    "name": "Gabriel Cardoso Souza",
    "matricula": "2022116BADM0085",
    "birthDate": "24/01/2004",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2022116BADM0085_27.jpg",
    "curso": "Bacharelado em Administração - Piripiri - Ser/Mod: 6"
  },
  {
    "id": 376,
    "name": "GABRIEL DO NASCIMENTO LOPES",
    "matricula": "2024116TDSM0007",
    "birthDate": "27/10/2005",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116TDSM0007_30.jpg",
    "curso": "Tecnologia em Design de Moda - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 377,
    "name": "GABRIEL MATEUS VIEIRA DE ARAUJO",
    "matricula": "2025116BADM0037",
    "birthDate": "17/10/2005",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116BADM0037_17.jpg",
    "curso": "Bacharelado em Administração - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 378,
    "name": "Gabriel Pereira Resende",
    "matricula": "2023116ISADM0041",
    "birthDate": "21/08/2007",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116ISADM0041_29.jpg",
    "curso": "Técnico em Administração - Integrado Semestral - Piripiri - Ser/Mod: 5"
  },
  {
    "id": 379,
    "name": "Gabriel Victor Nascimento Oliveira",
    "matricula": "2025116ISADM0008",
    "birthDate": "17/05/2009",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116ISADM0008_47.jpg",
    "curso": "Técnico em Administração - Integrado Semestral - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 380,
    "name": "GEAN CHARLES DE BRITO",
    "matricula": "2024116LMAT0007",
    "birthDate": "13/07/2005",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116LMAT0007_04.jpg",
    "curso": "Licenciatura em Matemática - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 381,
    "name": "GEDEAN PEREIRA DE SOUSA",
    "matricula": "2024116LPIN0038",
    "birthDate": "18/04/1998",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116LPIN0038_35.jpg",
    "curso": "Licenciatura Intercultural Indígena - CAPIR - Ser/Mod: 1"
  },
  {
    "id": 382,
    "name": "Geisivane Amaral Sousa",
    "matricula": "2023116TDSM0009",
    "birthDate": "23/01/2005",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116TDSM0009_25.jpg",
    "curso": "Tecnologia em Design de Moda - Piripiri - Ser/Mod: 4"
  },
  {
    "id": 383,
    "name": "GENEZIO DE SOUSA PEREIRA",
    "matricula": "2024116LPIN0020",
    "birthDate": "23/01/1998",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116LPIN0020_48.jpg",
    "curso": "Licenciatura Intercultural Indígena - CAPIR - Ser/Mod: 1"
  },
  {
    "id": 384,
    "name": "George Caldas de Oliveira",
    "matricula": "2022116BADM0344",
    "birthDate": "09/05/2003",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2022116BADM0344_20.jpg",
    "curso": "Bacharelado em Administração - Piripiri - Ser/Mod: 6"
  },
  {
    "id": 385,
    "name": "Geovana do Nascimento Silva",
    "matricula": "2025116ISINF0003",
    "birthDate": "15/02/2010",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116ISINF0003_32.jpg",
    "curso": "Técnico em Informática - Integrado Semestral - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 386,
    "name": "GEOVANA OLIVEIRA DE MORAIS",
    "matricula": "2025116ULLI0019",
    "birthDate": "06/12/2005",
    "photo": null,
    "curso": "Licenciatura em Letras Inglês - Ser/Mod: 1"
  },
  {
    "id": 387,
    "name": "Geovane de Oliveira Santos",
    "matricula": "2024216JADM0034",
    "birthDate": "19/02/1985",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024216JADM0034_27.jpg",
    "curso": "Técnico em Administração Integrado ao Ensino Médio - PROEJA - Ser/Mod: 2"
  },
  {
    "id": 388,
    "name": "GEOVANNA ARAUJO SANTANA ALVES",
    "matricula": "2024116ISINF0050",
    "birthDate": "09/08/2008",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116ISINF0050_22.jpg",
    "curso": "Técnico em Informática - Integrado Semestral - Piripiri - Ser/Mod: 2"
  },
  {
    "id": 389,
    "name": "Geovanna da Silva Lima",
    "matricula": "2025116ISADM0013",
    "birthDate": "10/02/2010",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116ISADM0013_39.jpg",
    "curso": "Técnico em Administração - Integrado Semestral - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 390,
    "name": "Geovany de Oliveira Silva Batista",
    "matricula": "2025116TADS0033",
    "birthDate": "25/03/2003",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116TADS0033_52.jpg",
    "curso": "Tecnologia em Análise e Desenvolvimento de Sistemas - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 391,
    "name": "GEYSILANE KAROLLINE SEVERO DE SOUSA",
    "matricula": "2024116ISADM0023",
    "birthDate": "05/09/2008",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116ISADM0023_29.jpg",
    "curso": "Técnico em Administração - Integrado Semestral - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 392,
    "name": "Gil Wanderson Lima Lustosa de Meneses",
    "matricula": "2018118220229",
    "birthDate": "15/09/2000",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2018118220229_01.jpg",
    "curso": "Licenciatura em Matemática - Piripiri - Ser/Mod: 9"
  },
  {
    "id": 393,
    "name": "Giovana de Sousa Silva",
    "matricula": "2025116ISADM0040",
    "birthDate": "19/10/2009",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116ISADM0040_12.jpg",
    "curso": "Técnico em Administração - Integrado Semestral - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 394,
    "name": "Giovanna Cardoso da Silva",
    "matricula": "2023116ISADM0007",
    "birthDate": "26/06/2007",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116ISADM0007_54.jpg",
    "curso": "Técnico em Administração - Integrado Semestral - Piripiri - Ser/Mod: 5"
  },
  {
    "id": 395,
    "name": "Giovanna de Amorim Ferreira",
    "matricula": "2021116BADM0135",
    "birthDate": "16/03/2002",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2021116BADM0135_04.jpg",
    "curso": "Bacharelado em Administração - Piripiri - Ser/Mod: 8"
  },
  {
    "id": 396,
    "name": "Gisele Dias Placido",
    "matricula": "2025116TADS0036",
    "birthDate": "13/02/2007",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116TADS0036_52.jpg",
    "curso": "Tecnologia em Análise e Desenvolvimento de Sistemas - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 397,
    "name": "Gisele Lustosa da Silva",
    "matricula": "2024216MKEM0013",
    "birthDate": "23/01/2002",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024216MKEM0013_35.jpg",
    "curso": "Especialização em Marketing e Empreendedorismo em Moda - Ser/Mod: 2"
  },
  {
    "id": 398,
    "name": "Glaysson Taislan Ferreira da Silva",
    "matricula": "2023116ISINF0028",
    "birthDate": "26/07/2007",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116ISINF0028_54.jpg",
    "curso": "Técnico em Informática - Integrado Semestral - Piripiri - Ser/Mod: 5"
  },
  {
    "id": 399,
    "name": "Glenda Marcelly Meneses da Silva",
    "matricula": "2023116ISADM0006",
    "birthDate": "12/11/2007",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116ISADM0006_13.jpg",
    "curso": "Técnico em Administração - Integrado Semestral - Piripiri - Ser/Mod: 5"
  },
  {
    "id": 400,
    "name": "Gleysla Mirelly Meneses da Silva",
    "matricula": "2025116ISADM0028",
    "birthDate": "15/11/2009",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116ISADM0028_17.jpg",
    "curso": "Técnico em Administração - Integrado Semestral - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 401,
    "name": "GLEYSON DA SILVA CAVALCANTE",
    "matricula": "2025116TADS0004",
    "birthDate": "12/10/2006",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116TADS0004_04.jpg",
    "curso": "Tecnologia em Análise e Desenvolvimento de Sistemas - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 402,
    "name": "Goncalo Meneses Gomes",
    "matricula": "2022116BADM0328",
    "birthDate": "02/03/2002",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2022116BADM0328_45.jpg",
    "curso": "Bacharelado em Administração - Piripiri - Ser/Mod: 6"
  },
  {
    "id": 403,
    "name": "Gracielle da Silva Andrade",
    "matricula": "2022116TDSM0059",
    "birthDate": "05/03/2003",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2022116TDSM0059_13.jpg",
    "curso": "Tecnologia em Design de Moda - Piripiri - Ser/Mod: 6"
  },
  {
    "id": 404,
    "name": "Graziele Pereira de Sousa",
    "matricula": "2025116ISADM0041",
    "birthDate": "02/06/2009",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116ISADM0041_38.jpg",
    "curso": "Técnico em Administração - Integrado Semestral - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 405,
    "name": "Graziele Sousa Barbosa",
    "matricula": "2023116BADM0010",
    "birthDate": "03/09/2001",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116BADM0010_37.jpg",
    "curso": "Bacharelado em Administração - Piripiri - Ser/Mod: 5"
  },
  {
    "id": 406,
    "name": "Grazielle Sousa Santos",
    "matricula": "2023116ISVES0021",
    "birthDate": "21/05/2007",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116ISVES0021_06.jpg",
    "curso": "Técnico em Vestuário - Integrado Semestral - Piripiri - Ser/Mod: 5"
  },
  {
    "id": 407,
    "name": "Graziellen da Costa Sousa",
    "matricula": "2025116TDSM0027",
    "birthDate": "31/03/2007",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116TDSM0027_20.jpg",
    "curso": "Tecnologia em Design de Moda - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 408,
    "name": "Guilherme de Oliveira Andrade",
    "matricula": "2023116ISADM0060",
    "birthDate": "05/06/2007",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116ISADM0060_03.jpg",
    "curso": "Técnico em Administração - Integrado Semestral - Piripiri - Ser/Mod: 5"
  },
  {
    "id": 409,
    "name": "Guilherme Marques Carneiro",
    "matricula": "2024116ISINF0064",
    "birthDate": "25/10/2008",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116ISINF0064_39.jpg",
    "curso": "Técnico em Informática - Integrado Semestral - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 410,
    "name": "Guilherme Meneses dos Santos",
    "matricula": "2017118220220",
    "birthDate": "20/03/1998",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2017118220220_05.jpg",
    "curso": "Licenciatura em Matemática - Piripiri - Ser/Mod: 9"
  },
  {
    "id": 411,
    "name": "GUILHERME VICTOR CHAVES SILVA",
    "matricula": "2024116ISINF0017",
    "birthDate": "13/02/2009",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116ISINF0017_07.jpg",
    "curso": "Técnico em Informática - Integrado Semestral - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 412,
    "name": "GUSTAVO ALVES FAUSTINO DA SILVA",
    "matricula": "2025116ISINF0009",
    "birthDate": "10/12/2009",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116ISINF0009_03.jpg",
    "curso": "Técnico em Informática - Integrado Semestral - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 413,
    "name": "GUSTAVO CARDOSO PORTELA",
    "matricula": "2024116LMAT0016",
    "birthDate": "30/08/2006",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116LMAT0016_41.jpg",
    "curso": "Licenciatura em Matemática - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 414,
    "name": "Gustavo Marques Andrade",
    "matricula": "2023116ISADM0040",
    "birthDate": "08/01/2008",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116ISADM0040_12.jpg",
    "curso": "Técnico em Administração - Integrado Semestral - Piripiri - Ser/Mod: 5"
  },
  {
    "id": 415,
    "name": "Gustavo Pierre de Barros Rodrigues",
    "matricula": "2022116ISINF0040",
    "birthDate": "04/08/2006",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2022116ISINF0040_08.jpg",
    "curso": "Técnico em Informática - Integrado Semestral - Piripiri - Ser/Mod: 6"
  },
  {
    "id": 416,
    "name": "Gustavo Renan Mendes Alves",
    "matricula": "2021116LMAT0149",
    "birthDate": "13/05/2003",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2021116LMAT0149_31.jpg",
    "curso": "Licenciatura em Matemática - Piripiri - Ser/Mod: 8"
  },
  {
    "id": 417,
    "name": "Hadrian Santos Duarte",
    "matricula": "2023116TDSM0020",
    "birthDate": "25/12/2002",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116TDSM0020_03.jpg",
    "curso": "Tecnologia em Design de Moda - Piripiri - Ser/Mod: 4"
  },
  {
    "id": 418,
    "name": "HANANDA ISLLA OLIVEIRA SILVA",
    "matricula": "2024116ISINF0018",
    "birthDate": "14/08/2008",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116ISINF0018_55.jpg",
    "curso": "Técnico em Informática - Integrado Semestral - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 419,
    "name": "HAYLLA SOUSA SILVA",
    "matricula": "2024116ISADM0024",
    "birthDate": "18/09/2008",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116ISADM0024_21.jpg",
    "curso": "Técnico em Administração - Integrado Semestral - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 420,
    "name": "Heber Pinto Bringel Correia",
    "matricula": "2025116TADS0002",
    "birthDate": "14/03/2007",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116TADS0002_38.jpg",
    "curso": "Tecnologia em Análise e Desenvolvimento de Sistemas - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 421,
    "name": "HEITOR ANDRADE CAVALCANTE DE MESQUITA",
    "matricula": "2025116ISINF0011",
    "birthDate": "25/07/2009",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116ISINF0011_03.jpg",
    "curso": "Técnico em Informática - Integrado Semestral - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 422,
    "name": "Helen Damaris Soares da Silva Caxias",
    "matricula": "2023116TDSM0014",
    "birthDate": "04/10/1998",
    "photo": null,
    "curso": "Tecnologia em Design de Moda - Piripiri - Ser/Mod: 4"
  },
  {
    "id": 423,
    "name": "HELLEN HORRANA LIMA DE FRANCA",
    "matricula": "2024116ISADM0044",
    "birthDate": "08/05/2008",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116ISADM0044_10.jpg",
    "curso": "Técnico em Administração - Integrado Semestral - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 424,
    "name": "HEMILLY VITORIA SILVA NASCIMENTO",
    "matricula": "2024116ISVES0005",
    "birthDate": "23/03/2009",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116ISVES0005_48.jpg",
    "curso": "Técnico em Vestuário - Integrado Semestral - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 425,
    "name": "HENRIQUE DE FREITAS PESSOA SOUSA",
    "matricula": "2025116ISINF0028",
    "birthDate": "17/03/2009",
    "photo": null,
    "curso": "Técnico em Informática - Integrado Semestral - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 426,
    "name": "HENRY MICHEL MELO CASTELO BRANCO",
    "matricula": "2025116BADM0006",
    "birthDate": "19/09/2006",
    "photo": null,
    "curso": "Bacharelado em Administração - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 427,
    "name": "HERON MACIEL SOUZA SANTOS",
    "matricula": "2025116ISADM0033",
    "birthDate": "31/01/2010",
    "photo": null,
    "curso": "Técnico em Administração - Integrado Semestral - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 428,
    "name": "Hévila Maria do Nascimento Sousa",
    "matricula": "2024116TDSM0025",
    "birthDate": "08/09/2003",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116TDSM0025_27.jpg",
    "curso": "Tecnologia em Design de Moda - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 429,
    "name": "HORRANA ZAYRA GONCALVES AGUIAR",
    "matricula": "2025116ISVES0021",
    "birthDate": "16/02/2010",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116ISVES0021_01.jpg",
    "curso": "Técnico em Vestuário - Integrado Semestral - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 430,
    "name": "Hubert Leonardo Melo Pereira",
    "matricula": "2023116ISINF0059",
    "birthDate": "17/10/2007",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116ISINF0059_36.jpg",
    "curso": "Técnico em Informática - Integrado Semestral - Piripiri - Ser/Mod: 5"
  },
  {
    "id": 431,
    "name": "Ian Pablo Lima Ribeiro",
    "matricula": "2022116ISADM0427",
    "birthDate": "31/08/2006",
    "photo": null,
    "curso": "Técnico em Administração - Integrado Semestral - Piripiri - Ser/Mod: 6"
  },
  {
    "id": 432,
    "name": "Ian Pedro de Sousa Carvalho",
    "matricula": "2024116TADS0019",
    "birthDate": "22/06/2004",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116TADS0019_04.jpg",
    "curso": "Tecnologia em Análise e Desenvolvimento de Sistemas - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 433,
    "name": "Ianny Letícia Castro de Andrade",
    "matricula": "2025116ISADM0005",
    "birthDate": "12/03/2010",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116ISADM0005_43.jpg",
    "curso": "Técnico em Administração - Integrado Semestral - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 434,
    "name": "Iasmim Raiane dos Santos Araújo",
    "matricula": "2023116ISVES0030",
    "birthDate": "12/11/2007",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116ISVES0030_27.jpg",
    "curso": "Técnico em Vestuário - Integrado Semestral - Piripiri - Ser/Mod: 5"
  },
  {
    "id": 435,
    "name": "Iasmim Vitória da Silva Vieira",
    "matricula": "2025116LMAT0034",
    "birthDate": "28/11/2006",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116LMAT0034_35.jpg",
    "curso": "Licenciatura em Matemática - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 436,
    "name": "Iasmin Lorrane de Andrade Oliveira",
    "matricula": "2023116ISINF0002",
    "birthDate": "16/12/2007",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116ISINF0002_02.jpg",
    "curso": "Técnico em Informática - Integrado Semestral - Piripiri - Ser/Mod: 5"
  },
  {
    "id": 437,
    "name": "Iasmin Nunes da Silva",
    "matricula": "2023116ISVES0029",
    "birthDate": "21/09/2007",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116ISVES0029_41.jpg",
    "curso": "Técnico em Vestuário - Integrado Semestral - Piripiri - Ser/Mod: 5"
  },
  {
    "id": 438,
    "name": "IGOR LUIZ DA COSTA MELO",
    "matricula": "2025116ULLI0003",
    "birthDate": "30/12/1995",
    "photo": null,
    "curso": "Licenciatura em Letras Inglês - Ser/Mod: 1"
  },
  {
    "id": 439,
    "name": "IHORRANA ANDRIELLY LOPES",
    "matricula": "2024116ISADM0015",
    "birthDate": "28/11/2008",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116ISADM0015_18.jpg",
    "curso": "Técnico em Administração - Integrado Semestral - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 440,
    "name": "Íkaro Herbert Vasconcelos Gomes",
    "matricula": "2024116TADS0032",
    "birthDate": "12/05/2005",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116TADS0032_47.jpg",
    "curso": "Tecnologia em Análise e Desenvolvimento de Sistemas - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 441,
    "name": "Ingrid Gabrielly Gomes Torres",
    "matricula": "2024216MKEM0002",
    "birthDate": "31/07/1991",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024216MKEM0002_36.jpg",
    "curso": "Especialização em Marketing e Empreendedorismo em Moda - Ser/Mod: 1"
  },
  {
    "id": 442,
    "name": "Iolanda de Lima Paiva",
    "matricula": "2025116TDSM0015",
    "birthDate": "21/09/1978",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116TDSM0015_41.jpg",
    "curso": "Tecnologia em Design de Moda - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 443,
    "name": "Iraci Ferreira da Silva",
    "matricula": "2023216JADM0007",
    "birthDate": "04/06/1976",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023216JADM0007_24.jpg",
    "curso": "Técnico em Administração Integrado ao Ensino Médio - PROEJA - Ser/Mod: 4"
  },
  {
    "id": 444,
    "name": "Íris dos Santos Nogueira",
    "matricula": "2022116ISVES0080",
    "birthDate": "28/11/2006",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2022116ISVES0080_57.jpg",
    "curso": "Técnico em Vestuário - Integrado Semestral - Piripiri - Ser/Mod: 6"
  },
  {
    "id": 445,
    "name": "IRIS GLECIA DA SILVA MELO",
    "matricula": "2024116TDSM0019",
    "birthDate": "28/05/1986",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116TDSM0019_44.jpg",
    "curso": "Tecnologia em Design de Moda - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 446,
    "name": "ISAAC DA SILVA SANTOS",
    "matricula": "2025116ISINF0013",
    "birthDate": "31/12/2009",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116ISINF0013_06.jpg",
    "curso": "Técnico em Informática - Integrado Semestral - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 447,
    "name": "Isabel Barbosa Silva",
    "matricula": "2022116ISADM0540",
    "birthDate": "12/09/2006",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2022116ISADM0540_52.jpg",
    "curso": "Técnico em Administração - Integrado Semestral - Piripiri - Ser/Mod: 6"
  },
  {
    "id": 448,
    "name": "Isabel Cristina Ferreira Cardoso da Silva",
    "matricula": "2022116LMAT0110",
    "birthDate": "22/08/2001",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2022116LMAT0110_33.jpg",
    "curso": "Licenciatura em Matemática - Piripiri - Ser/Mod: 6"
  },
  {
    "id": 449,
    "name": "Isabel Cristina Silva Rocha",
    "matricula": "2022116BADM0220",
    "birthDate": "11/11/1999",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2022116BADM0220_13.jpg",
    "curso": "Bacharelado em Administração - Piripiri - Ser/Mod: 6"
  },
  {
    "id": 450,
    "name": "Isabela de Oliveira Sousa",
    "matricula": "2025116ISADM0036",
    "birthDate": "26/06/2009",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116ISADM0036_28.jpg",
    "curso": "Técnico em Administração - Integrado Semestral - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 451,
    "name": "Isabele Rodrigues de Souza",
    "matricula": "2023116ISINF0040",
    "birthDate": "05/06/2007",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116ISINF0040_21.jpg",
    "curso": "Técnico em Informática - Integrado Semestral - Piripiri - Ser/Mod: 5"
  },
  {
    "id": 452,
    "name": "ISABELLE DE SOUSA FONTENELE",
    "matricula": "2025116ISINF0012",
    "birthDate": "27/03/2010",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116ISINF0012_01.jpg",
    "curso": "Técnico em Informática - Integrado Semestral - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 453,
    "name": "Isabelle Maria de Alencar Brito",
    "matricula": "2025116BADM0043",
    "birthDate": "08/12/2001",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116BADM0043_40.jpg",
    "curso": "Bacharelado em Administração - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 454,
    "name": "ISABELLE VITORIA DA SILVA FONTENELLE",
    "matricula": "2024116ISVES0002",
    "birthDate": "06/08/2007",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116ISVES0002_35.jpg",
    "curso": "Técnico em Vestuário - Integrado Semestral - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 455,
    "name": "Isabelly Cristinne Leitão da Silva",
    "matricula": "2023116ISADM0023",
    "birthDate": "25/11/2007",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116ISADM0023_07.jpg",
    "curso": "Técnico em Administração - Integrado Semestral - Piripiri - Ser/Mod: 5"
  },
  {
    "id": 456,
    "name": "ISABELLY DE HOLANDA SILVA SOUSA",
    "matricula": "2024116ISINF0043",
    "birthDate": "16/03/2009",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116ISINF0043_53.jpg",
    "curso": "Técnico em Informática - Integrado Semestral - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 457,
    "name": "Isabelly Louize de Lima Costa",
    "matricula": "2023116ISVES0014",
    "birthDate": "24/10/2007",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116ISVES0014_07.jpg",
    "curso": "Técnico em Vestuário - Integrado Semestral - Piripiri - Ser/Mod: 5"
  },
  {
    "id": 458,
    "name": "Isabelly Silva Sousa",
    "matricula": "2025116ISADM0012",
    "birthDate": "11/07/2009",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116ISADM0012_54.jpg",
    "curso": "Técnico em Administração - Integrado Semestral - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 459,
    "name": "Isabely de Sousa Nascimento",
    "matricula": "2025116ISINF0002",
    "birthDate": "10/08/2009",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116ISINF0002_37.jpg",
    "curso": "Técnico em Informática - Integrado Semestral - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 460,
    "name": "Isabely Sousa da Silva",
    "matricula": "2023116ISINF0041",
    "birthDate": "09/05/2007",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116ISINF0041_38.jpg",
    "curso": "Técnico em Informática - Integrado Semestral - Piripiri - Ser/Mod: 5"
  },
  {
    "id": 461,
    "name": "Isadora Kethelen do Amaral Oliveira Gomes",
    "matricula": "2025116ISVES0009",
    "birthDate": "24/02/2010",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116ISVES0009_25.jpg",
    "curso": "Técnico em Vestuário - Integrado Semestral - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 462,
    "name": "ISADORA MARIA DAMATO DAMASCENO",
    "matricula": "2025116ISVES0025",
    "birthDate": "30/06/2009",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116ISVES0025_31.jpg",
    "curso": "Técnico em Vestuário - Integrado Semestral - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 463,
    "name": "Isadora Marianna Fortes Santos",
    "matricula": "2022116ISADM0648",
    "birthDate": "13/09/2005",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2022116ISADM0648_04.jpg",
    "curso": "Técnico em Administração - Integrado Semestral - Piripiri - Ser/Mod: 6"
  },
  {
    "id": 464,
    "name": "Isadora Maysa de Sousa Silva",
    "matricula": "2023116ISADM0045",
    "birthDate": "13/08/2007",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116ISADM0045_33.jpg",
    "curso": "Técnico em Administração - Integrado Semestral - Piripiri - Ser/Mod: 5"
  },
  {
    "id": 465,
    "name": "ISNAIRA RAYANE DO REGO SOUZA",
    "matricula": "2024116ISVES0027",
    "birthDate": "29/06/2008",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116ISVES0027_23.jpg",
    "curso": "Técnico em Vestuário - Integrado Semestral - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 466,
    "name": "ISNARA VITORIA SILVA",
    "matricula": "2024116ISADM0053",
    "birthDate": "25/05/2008",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116ISADM0053_25.jpg",
    "curso": "Técnico em Administração - Integrado Semestral - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 467,
    "name": "Ítalo de Melo Lima",
    "matricula": "2023116ISADM0026",
    "birthDate": "07/02/2008",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116ISADM0026_26.jpg",
    "curso": "Técnico em Administração - Integrado Semestral - Piripiri - Ser/Mod: 5"
  },
  {
    "id": 468,
    "name": "IVONILDO DE SOUSA SILVA",
    "matricula": "2025116TADS0014",
    "birthDate": "03/12/2006",
    "photo": null,
    "curso": "Tecnologia em Análise e Desenvolvimento de Sistemas - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 469,
    "name": "Izabel de Meneses Sousa",
    "matricula": "2024216MKEM0016",
    "birthDate": "31/12/1994",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024216MKEM0016_30.jpg",
    "curso": "Especialização em Marketing e Empreendedorismo em Moda - Ser/Mod: 2"
  },
  {
    "id": 470,
    "name": "Izabel Linhares da Silva",
    "matricula": "2022116LMAT0129",
    "birthDate": "23/08/2004",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2022116LMAT0129_52.jpg",
    "curso": "Licenciatura em Matemática - Piripiri - Ser/Mod: 6"
  },
  {
    "id": 471,
    "name": "IZADORA BORGES SILVA SANTOS",
    "matricula": "2025116ISADM0022",
    "birthDate": "17/09/2009",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116ISADM0022_56.jpg",
    "curso": "Técnico em Administração - Integrado Semestral - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 472,
    "name": "Izaína de Meneses Sousa",
    "matricula": "2023116ISVES0008",
    "birthDate": "18/04/2007",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116ISVES0008_22.jpg",
    "curso": "Técnico em Vestuário - Integrado Semestral - Piripiri - Ser/Mod: 5"
  },
  {
    "id": 473,
    "name": "JADYLLA SOPHIA SOUZA LIMA",
    "matricula": "2024116ISINF0057",
    "birthDate": "02/12/2008",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116ISINF0057_01.jpg",
    "curso": "Técnico em Informática - Integrado Semestral - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 474,
    "name": "Jailane Vieira Cardoso",
    "matricula": "2022116BADM0280",
    "birthDate": "21/12/2001",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2022116BADM0280_37.jpg",
    "curso": "Bacharelado em Administração - Piripiri - Ser/Mod: 6"
  },
  {
    "id": 475,
    "name": "Jamily Vitória Paranhos Pereira Coelho de Melo",
    "matricula": "2025116ISADM0034",
    "birthDate": "11/03/2010",
    "photo": null,
    "curso": "Técnico em Administração - Integrado Semestral - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 476,
    "name": "Jamine Nascimento Souza",
    "matricula": "2023116ISINF0036",
    "birthDate": "04/06/2007",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116ISINF0036_55.jpg",
    "curso": "Técnico em Informática - Integrado Semestral - Piripiri - Ser/Mod: 5"
  },
  {
    "id": 477,
    "name": "Janaina Pereira de Sousa",
    "matricula": "2025116TDSM0018",
    "birthDate": "01/06/1980",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116TDSM0018_09.jpg",
    "curso": "Tecnologia em Design de Moda - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 478,
    "name": "Janaína Victória da Silva Ferreira",
    "matricula": "2025116ISADM0016",
    "birthDate": "31/07/2008",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116ISADM0016_04.jpg",
    "curso": "Técnico em Administração - Integrado Semestral - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 479,
    "name": "Jânia Isabelle da Silva Gomes",
    "matricula": "2022116ISINF0342",
    "birthDate": "22/12/2006",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2022116ISINF0342_09.jpg",
    "curso": "Técnico em Informática - Integrado Semestral - Piripiri - Ser/Mod: 6"
  },
  {
    "id": 480,
    "name": "Jaqueane Memoria da Silva",
    "matricula": "2021116BADM0216",
    "birthDate": "02/10/1994",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2021116BADM0216_34.jpg",
    "curso": "Bacharelado em Administração - Piripiri - Ser/Mod: 8"
  },
  {
    "id": 481,
    "name": "Jason Henrique Silva",
    "matricula": "2025116BADM0015",
    "birthDate": "16/06/2005",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116BADM0015_06.jpg",
    "curso": "Bacharelado em Administração - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 482,
    "name": "JAYLYA ALVES DE ALEXANDRIA SILVA",
    "matricula": "2025116ISVES0019",
    "birthDate": "11/01/2009",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116ISVES0019_39.jpg",
    "curso": "Técnico em Vestuário - Integrado Semestral - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 483,
    "name": "JAYNE PEREIRA DE OLIVEIRA",
    "matricula": "2024116LPIN0035",
    "birthDate": "07/12/1996",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116LPIN0035_48.jpg",
    "curso": "Licenciatura Intercultural Indígena - CAPIR - Ser/Mod: 1"
  },
  {
    "id": 484,
    "name": "Jean Caldas de Oliveira",
    "matricula": "2024116BADM0013",
    "birthDate": "09/05/2003",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116BADM0013_30.jpg",
    "curso": "Bacharelado em Administração - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 485,
    "name": "Jediel Douglas de Araujo Medeiros",
    "matricula": "2021116LMAT0343",
    "birthDate": "06/07/2003",
    "photo": null,
    "curso": "Licenciatura em Matemática - Piripiri - Ser/Mod: 8"
  },
  {
    "id": 486,
    "name": "Jefferson Ferreira Santos",
    "matricula": "2024116BADM0039",
    "birthDate": "31/08/1995",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116BADM0039_33.jpg",
    "curso": "Bacharelado em Administração - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 487,
    "name": "JEFFERSON LUIS FERREIRA ARAUJO",
    "matricula": "2025116ULLI0018",
    "birthDate": "08/12/1997",
    "photo": null,
    "curso": "Licenciatura em Letras Inglês - Ser/Mod: 1"
  },
  {
    "id": 488,
    "name": "Jefferson Silva Amorim",
    "matricula": "2025116ISADM0003",
    "birthDate": "16/12/2009",
    "photo": null,
    "curso": "Técnico em Administração - Integrado Semestral - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 489,
    "name": "Jeniffer de Sousa Fontenele",
    "matricula": "2023116ISADM0032",
    "birthDate": "30/01/2008",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116ISADM0032_00.jpg",
    "curso": "Técnico em Administração - Integrado Semestral - Piripiri - Ser/Mod: 5"
  },
  {
    "id": 490,
    "name": "JENNIFER ALEXANDRA DA COSTA SILVA",
    "matricula": "2025116ISINF0014",
    "birthDate": "29/01/2010",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116ISINF0014_51.jpg",
    "curso": "Técnico em Informática - Integrado Semestral - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 491,
    "name": "Jessica Maria Lopes Pedrosa",
    "matricula": "2022116BADM0387",
    "birthDate": "24/09/2004",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2022116BADM0387_09.jpg",
    "curso": "Bacharelado em Administração - Piripiri - Ser/Mod: 6"
  },
  {
    "id": 492,
    "name": "Jessica Thayla Almeida",
    "matricula": "2023116ISINF0052",
    "birthDate": "24/09/2007",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116ISINF0052_05.jpg",
    "curso": "Técnico em Informática - Integrado Semestral - Piripiri - Ser/Mod: 5"
  },
  {
    "id": 493,
    "name": "Jessica Tuane de Amorim Moraes",
    "matricula": "2022116TDSM0067",
    "birthDate": "30/01/1997",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2022116TDSM0067_59.jpg",
    "curso": "Tecnologia em Design de Moda - Piripiri - Ser/Mod: 6"
  },
  {
    "id": 494,
    "name": "Jirlany Naiara Apoliano dos Santos",
    "matricula": "2025116UGRH0005",
    "birthDate": "12/01/1991",
    "photo": null,
    "curso": "Tecnologia em Gestão de Recursos Humanos - Ser/Mod: 1"
  },
  {
    "id": 495,
    "name": "JOANA DARC ALVES",
    "matricula": "2024116LPIN0037",
    "birthDate": "15/01/1998",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116LPIN0037_16.jpg",
    "curso": "Licenciatura Intercultural Indígena - CAPIR - Ser/Mod: 1"
  },
  {
    "id": 496,
    "name": "JOANA DARC DE ARAUJO SILVA",
    "matricula": "2025116UGRH0004",
    "birthDate": "24/07/1984",
    "photo": null,
    "curso": "Tecnologia em Gestão de Recursos Humanos - Ser/Mod: 1"
  },
  {
    "id": 497,
    "name": "Joana Darque do Nascimento Souza",
    "matricula": "2025116BADM0008",
    "birthDate": "20/09/1987",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116BADM0008_18.jpg",
    "curso": "Bacharelado em Administração - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 498,
    "name": "JOANA TERESA DE OLIVEIRA SOUZA",
    "matricula": "2025116ULLI0008",
    "birthDate": "12/11/1980",
    "photo": null,
    "curso": "Licenciatura em Letras Inglês - Ser/Mod: 1"
  },
  {
    "id": 499,
    "name": "João Batista Alves Queiroz",
    "matricula": "2024216JADM0039",
    "birthDate": "24/01/2005",
    "photo": null,
    "curso": "Técnico em Administração Integrado ao Ensino Médio - PROEJA - Ser/Mod: 1"
  },
  {
    "id": 500,
    "name": "João Clécio Lopes do Nascimento",
    "matricula": "2024216JADM0038",
    "birthDate": "19/11/2005",
    "photo": null,
    "curso": "Técnico em Administração Integrado ao Ensino Médio - PROEJA - Ser/Mod: 2"
  },
  {
    "id": 501,
    "name": "João de Lima Campos",
    "matricula": "2025116BADM0041",
    "birthDate": "23/11/2006",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116BADM0041_53.jpg",
    "curso": "Bacharelado em Administração - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 502,
    "name": "JOÃO FRANCISCO EVANGELISTA CONRADO",
    "matricula": "2024116LPIN0039",
    "birthDate": "27/07/1998",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116LPIN0039_44.jpg",
    "curso": "Licenciatura Intercultural Indígena - CAPIR - Ser/Mod: 1"
  },
  {
    "id": 503,
    "name": "João Gabrieal Viana Galvão",
    "matricula": "2025116ULLI0009",
    "birthDate": "31/08/1987",
    "photo": null,
    "curso": "Licenciatura em Letras Inglês - Ser/Mod: 1"
  },
  {
    "id": 504,
    "name": "João Gabriel do Amaral",
    "matricula": "2023116ISINF0053",
    "birthDate": "01/11/2007",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116ISINF0053_30.jpg",
    "curso": "Técnico em Informática - Integrado Semestral - Piripiri - Ser/Mod: 5"
  },
  {
    "id": 505,
    "name": "JOAO GABRIEL OLIVEIRA SANTOS SILVA",
    "matricula": "2024116ISADM0022",
    "birthDate": "08/12/2008",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116ISADM0022_20.jpg",
    "curso": "Técnico em Administração - Integrado Semestral - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 506,
    "name": "João Paulo Lima e Silva",
    "matricula": "2016118220192",
    "birthDate": "08/10/1998",
    "photo": null,
    "curso": "Licenciatura em Matemática - Piripiri - Ser/Mod: 9"
  },
  {
    "id": 507,
    "name": "JOAO PEDRO DA SILVA MAGALHAES",
    "matricula": "2024116ISADM0026",
    "birthDate": "29/12/2008",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116ISADM0026_37.jpg",
    "curso": "Técnico em Administração - Integrado Semestral - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 508,
    "name": "João Pedro de Oliveira Sousa Silva",
    "matricula": "2022116ISADM0729",
    "birthDate": "24/07/2006",
    "photo": null,
    "curso": "Técnico em Administração - Integrado Semestral - Piripiri - Ser/Mod: 5"
  },
  {
    "id": 509,
    "name": "João Pedro de Sales Sousa",
    "matricula": "2023116ISADM0054",
    "birthDate": "01/01/2008",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116ISADM0054_19.jpg",
    "curso": "Técnico em Administração - Integrado Semestral - Piripiri - Ser/Mod: 5"
  },
  {
    "id": 510,
    "name": "João Pedro dos Santos",
    "matricula": "2023116ISVES0017",
    "birthDate": "17/08/2007",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116ISVES0017_49.jpg",
    "curso": "Técnico em Vestuário - Integrado Semestral - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 511,
    "name": "JOAO PEDRO JUCA SILVA",
    "matricula": "2024116ISVES0018",
    "birthDate": "11/06/2008",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116ISVES0018_35.jpg",
    "curso": "Técnico em Vestuário - Integrado Semestral - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 512,
    "name": "JOAO PEDRO SILVA PORTELA",
    "matricula": "2024116ISINF0049",
    "birthDate": "28/12/2008",
    "photo": null,
    "curso": "Técnico em Informática - Integrado Semestral - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 513,
    "name": "João Victor Araujo Visgueira",
    "matricula": "2023116ISINF0003",
    "birthDate": "15/05/2007",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116ISINF0003_37.jpg",
    "curso": "Técnico em Informática - Integrado Semestral - Piripiri - Ser/Mod: 5"
  },
  {
    "id": 514,
    "name": "JOAO VICTOR DE OLIVEIRA COSTA",
    "matricula": "2025116LMAT0027",
    "birthDate": "10/03/2007",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116LMAT0027_44.jpg",
    "curso": "Licenciatura em Matemática - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 515,
    "name": "João Victor dos Santos Silva",
    "matricula": "2023116ISINF0038",
    "birthDate": "31/01/2007",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116ISINF0038_40.jpg",
    "curso": "Técnico em Informática - Integrado Semestral - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 516,
    "name": "João Victor Vieira Ferreira",
    "matricula": "2023116ISINF0064",
    "birthDate": "05/05/2005",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116ISINF0064_53.jpg",
    "curso": "Técnico em Informática - Integrado Semestral - Piripiri - Ser/Mod: 4"
  },
  {
    "id": 517,
    "name": "João Vinícius Chaves de Melo",
    "matricula": "2025116ISADM0004",
    "birthDate": "20/10/2009",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116ISADM0004_55.jpg",
    "curso": "Técnico em Administração - Integrado Semestral - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 518,
    "name": "Joaquim Gomes da Silva Neto",
    "matricula": "2023116LMAT0011",
    "birthDate": "11/08/2005",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116LMAT0011_55.jpg",
    "curso": "Licenciatura em Matemática - Piripiri - Ser/Mod: 5"
  },
  {
    "id": 519,
    "name": "Joaquina Maria da Conceição",
    "matricula": "2024216JADM0025",
    "birthDate": "16/12/1983",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024216JADM0025_32.jpg",
    "curso": "Técnico em Administração Integrado ao Ensino Médio - PROEJA - Ser/Mod: 2"
  },
  {
    "id": 520,
    "name": "Jocelaine Oliveira de Souza",
    "matricula": "2022116TDSM0172",
    "birthDate": "03/01/1986",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2022116TDSM0172_17.jpg",
    "curso": "Tecnologia em Design de Moda - Piripiri - Ser/Mod: 6"
  },
  {
    "id": 521,
    "name": "Jociane Soares dos Santos",
    "matricula": "2023116TDSM0016",
    "birthDate": "09/05/2004",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116TDSM0016_38.jpg",
    "curso": "Tecnologia em Design de Moda - Piripiri - Ser/Mod: 4"
  },
  {
    "id": 522,
    "name": "Joeldo Fontenele de Castro Junior",
    "matricula": "2022116BADM0182",
    "birthDate": "10/07/2003",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2022116BADM0182_18.jpg",
    "curso": "Bacharelado em Administração - Piripiri - Ser/Mod: 6"
  },
  {
    "id": 523,
    "name": "Joelma Pereira do Nascimento",
    "matricula": "2023116ISVES0007",
    "birthDate": "31/03/2007",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116ISVES0007_05.jpg",
    "curso": "Técnico em Vestuário - Integrado Semestral - Piripiri - Ser/Mod: 5"
  },
  {
    "id": 524,
    "name": "Joice Araujo Fontenele",
    "matricula": "2020116LMAT0142",
    "birthDate": "16/02/2002",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2020116LMAT0142_26.jpg",
    "curso": "Licenciatura em Matemática - Piripiri - Ser/Mod: 8"
  },
  {
    "id": 525,
    "name": "Jonas da Silva Fernandes",
    "matricula": "2023116ISINF0027",
    "birthDate": "14/02/2008",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116ISINF0027_13.jpg",
    "curso": "Técnico em Informática - Integrado Semestral - Piripiri - Ser/Mod: 2"
  },
  {
    "id": 526,
    "name": "Jônatas Santos Mendes do Nascimento",
    "matricula": "2021116LMAT0190",
    "birthDate": "08/11/2000",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2021116LMAT0190_38.jpg",
    "curso": "Licenciatura em Matemática - Piripiri - Ser/Mod: 9"
  },
  {
    "id": 527,
    "name": "JORGE LUÍS DE SOUSA SILVA",
    "matricula": "2024216JADM0047",
    "birthDate": "05/11/1996",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024216JADM0047_14.jpg",
    "curso": "Técnico em Administração Integrado ao Ensino Médio - PROEJA - Ser/Mod: 2"
  },
  {
    "id": 528,
    "name": "Jorrana Sthefany Magalhaes Amaral",
    "matricula": "2021116LMAT0041",
    "birthDate": "19/04/2003",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2021116LMAT0041_18.jpg",
    "curso": "Licenciatura em Matemática - Piripiri - Ser/Mod: 8"
  },
  {
    "id": 529,
    "name": "Jose Andrei Carvalho de Abreu",
    "matricula": "2024116LMAT0035",
    "birthDate": "20/03/2005",
    "photo": null,
    "curso": "Licenciatura em Matemática - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 530,
    "name": "José Antonio da Silva Neto",
    "matricula": "2023116ISADM0031",
    "birthDate": "01/06/2007",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116ISADM0031_19.jpg",
    "curso": "Técnico em Administração - Integrado Semestral - Piripiri - Ser/Mod: 5"
  },
  {
    "id": 531,
    "name": "José de Ribamar Silva Filho",
    "matricula": "2023116BADM0020",
    "birthDate": "31/05/2005",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116BADM0020_32.jpg",
    "curso": "Bacharelado em Administração - Piripiri - Ser/Mod: 5"
  },
  {
    "id": 532,
    "name": "José Elryan Costa Gomes",
    "matricula": "2023116ISINF0057",
    "birthDate": "24/09/2007",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116ISINF0057_02.jpg",
    "curso": "Técnico em Informática - Integrado Semestral - Piripiri - Ser/Mod: 5"
  },
  {
    "id": 533,
    "name": "Jose Expedito Rodrigues Macedo",
    "matricula": "2022116LMAT0315",
    "birthDate": "28/06/2004",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2022116LMAT0315_47.jpg",
    "curso": "Licenciatura em Matemática - Piripiri - Ser/Mod: 6"
  },
  {
    "id": 534,
    "name": "Jose Francisco Mendes da Silva",
    "matricula": "2022116LMAT0200",
    "birthDate": "17/02/2001",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2022116LMAT0200_28.jpg",
    "curso": "Licenciatura em Matemática - Piripiri - Ser/Mod: 9"
  },
  {
    "id": 535,
    "name": "José Gabriel de Oliveira Farias",
    "matricula": "2025116TADS0040",
    "birthDate": "17/12/2006",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116TADS0040_11.jpg",
    "curso": "Tecnologia em Análise e Desenvolvimento de Sistemas - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 536,
    "name": "JOSE GABRIEL LIMA GADELHA",
    "matricula": "2024116ISINF0024",
    "birthDate": "01/03/2009",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116ISINF0024_54.jpg",
    "curso": "Técnico em Informática - Integrado Semestral - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 537,
    "name": "José Gilson Araújo Rebouças",
    "matricula": "2024116TADS0041",
    "birthDate": "19/03/2007",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116TADS0041_59.jpg",
    "curso": "Tecnologia em Análise e Desenvolvimento de Sistemas - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 538,
    "name": "Jose Henrique Silva Rego",
    "matricula": "2022116BADM0050",
    "birthDate": "04/01/2001",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2022116BADM0050_02.jpg",
    "curso": "Bacharelado em Administração - Piripiri - Ser/Mod: 5"
  },
  {
    "id": 539,
    "name": "José Iann Santos Silva",
    "matricula": "2023116LMAT0016",
    "birthDate": "02/08/2004",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116LMAT0016_23.jpg",
    "curso": "Licenciatura em Matemática - Piripiri - Ser/Mod: 5"
  },
  {
    "id": 540,
    "name": "JOSE LUCIANO RIBEIRO NASCIMENTO",
    "matricula": "2024116ISVES0011",
    "birthDate": "05/02/2009",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116ISVES0011_27.jpg",
    "curso": "Técnico em Vestuário - Integrado Semestral - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 541,
    "name": "JOSÉ NILTON SILVA LIMA",
    "matricula": "2024116TADS0033",
    "birthDate": "06/01/1998",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116TADS0033_54.jpg",
    "curso": "Tecnologia em Análise e Desenvolvimento de Sistemas - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 542,
    "name": "José Victor da Silva Sousa",
    "matricula": "2023116LMAT0020",
    "birthDate": "19/06/2004",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116LMAT0020_22.jpg",
    "curso": "Licenciatura em Matemática - Piripiri - Ser/Mod: 5"
  },
  {
    "id": 543,
    "name": "José Victor Ferreira de Oliveira",
    "matricula": "2022116ISADM0125",
    "birthDate": "19/03/2007",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2022116ISADM0125_48.jpg",
    "curso": "Técnico em Administração - Integrado Semestral - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 544,
    "name": "José Wallison Nascimento Barros",
    "matricula": "2025116ISINF0033",
    "birthDate": "03/08/2009",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116ISINF0033_45.jpg",
    "curso": "Técnico em Informática - Integrado Semestral - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 545,
    "name": "JOSERLANE HONORATO DE OLIVEIRA",
    "matricula": "2024116BADM0023",
    "birthDate": "13/08/2005",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116BADM0023_54.jpg",
    "curso": "Bacharelado em Administração - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 546,
    "name": "JOSIANE AMORIM MENDES",
    "matricula": "2025116TADS0028",
    "birthDate": "25/02/2006",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116TADS0028_41.jpg",
    "curso": "Tecnologia em Análise e Desenvolvimento de Sistemas - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 547,
    "name": "Josiane Silva Sousa",
    "matricula": "2024116LPIN0042",
    "birthDate": "16/04/2001",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116LPIN0042_17.jpg",
    "curso": "Licenciatura Intercultural Indígena - CAPIR - Ser/Mod: 1"
  },
  {
    "id": 548,
    "name": "JOSIEL PAULO DOS SANTOS",
    "matricula": "2024116LPIN0018",
    "birthDate": "13/09/1981",
    "photo": null,
    "curso": "Licenciatura Intercultural Indígena - CAPIR - Ser/Mod: 1"
  },
  {
    "id": 549,
    "name": "Josielly Araújo da Silva",
    "matricula": "2023116ISVES0024",
    "birthDate": "23/04/2007",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116ISVES0024_46.jpg",
    "curso": "Técnico em Vestuário - Integrado Semestral - Piripiri - Ser/Mod: 5"
  },
  {
    "id": 550,
    "name": "JOSILENE RODRIGUES DA SILVA PEREIRA",
    "matricula": "2024116LPIN0010",
    "birthDate": "26/01/1996",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116LPIN0010_07.jpg",
    "curso": "Licenciatura Intercultural Indígena - CAPIR - Ser/Mod: 1"
  },
  {
    "id": 551,
    "name": "JOVINA DE BRITO CERQUEIRA",
    "matricula": "2025116TDSM0011",
    "birthDate": "10/02/1978",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116TDSM0011_52.jpg",
    "curso": "Tecnologia em Design de Moda - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 552,
    "name": "JUAN RIBEIRO DE LIMA",
    "matricula": "2025116ISINF0015",
    "birthDate": "15/11/2009",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116ISINF0015_44.jpg",
    "curso": "Técnico em Informática - Integrado Semestral - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 553,
    "name": "JUCINARA MARIA DOS SANTOS SOUZA",
    "matricula": "2025116LMAT0009",
    "birthDate": "27/03/2004",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116LMAT0009_53.jpg",
    "curso": "Licenciatura em Matemática - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 554,
    "name": "JULIA ALLEF KUSTER COSTA",
    "matricula": "2024116ISVES0036",
    "birthDate": "28/04/2008",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116ISVES0036_04.jpg",
    "curso": "Técnico em Vestuário - Integrado Semestral - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 555,
    "name": "JULIA BEATRIZ SILVA PEREIRA",
    "matricula": "2025116ISVES0002",
    "birthDate": "03/11/2009",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116ISVES0002_35.jpg",
    "curso": "Técnico em Vestuário - Integrado Semestral - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 556,
    "name": "JULIA VITORIA FERREIRA LIMA",
    "matricula": "2025116LMAT0014",
    "birthDate": "20/09/2003",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116LMAT0014_05.jpg",
    "curso": "Licenciatura em Matemática - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 557,
    "name": "JULIANA DA SILVA NASCIMENTO",
    "matricula": "2024116LPIN0028",
    "birthDate": "05/09/1994",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116LPIN0028_27.jpg",
    "curso": "Licenciatura Intercultural Indígena - CAPIR - Ser/Mod: 1"
  },
  {
    "id": 558,
    "name": "Juliana Nunes da Costa",
    "matricula": "2024216JADM0030",
    "birthDate": "15/05/1990",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024216JADM0030_53.jpg",
    "curso": "Técnico em Administração Integrado ao Ensino Médio - PROEJA - Ser/Mod: 2"
  },
  {
    "id": 559,
    "name": "Juliele Carvalho da Silva",
    "matricula": "2024216MKEM0018",
    "birthDate": "05/09/2002",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024216MKEM0018_19.jpg",
    "curso": "Especialização em Marketing e Empreendedorismo em Moda - Ser/Mod: 2"
  },
  {
    "id": 560,
    "name": "Júlio César Cergueira Pires",
    "matricula": "2024116TADS0004",
    "birthDate": "30/06/2005",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116TADS0004_35.jpg",
    "curso": "Tecnologia em Análise e Desenvolvimento de Sistemas - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 561,
    "name": "Kailane Maria Vitalino de Souza",
    "matricula": "2023116ISADM0001",
    "birthDate": "12/11/2007",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116ISADM0001_25.jpg",
    "curso": "Técnico em Administração - Integrado Semestral - Piripiri - Ser/Mod: 5"
  },
  {
    "id": 562,
    "name": "KAILANE PEREIRA DIAS",
    "matricula": "2025116TDSM0012",
    "birthDate": "14/04/2003",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116TDSM0012_21.jpg",
    "curso": "Tecnologia em Design de Moda - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 563,
    "name": "KAILANY GABRIELLY OLIVEIRA NASCIMENTO",
    "matricula": "2024116ISINF0054",
    "birthDate": "01/04/2008",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116ISINF0054_56.jpg",
    "curso": "Técnico em Informática - Integrado Semestral - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 564,
    "name": "Kaio Brenner Vieira Lira",
    "matricula": "2023116ISINF0004",
    "birthDate": "05/09/2007",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116ISINF0004_17.jpg",
    "curso": "Técnico em Informática - Integrado Semestral - Piripiri - Ser/Mod: 5"
  },
  {
    "id": 565,
    "name": "Kaio Vinícius da Silva Vasconcelos",
    "matricula": "2023116ISINF0044",
    "birthDate": "13/02/2008",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116ISINF0044_02.jpg",
    "curso": "Técnico em Informática - Integrado Semestral - Piripiri - Ser/Mod: 5"
  },
  {
    "id": 566,
    "name": "KAMILA LAYS ARCANJO SOUSA SILVA",
    "matricula": "2024116ISADM0036",
    "birthDate": "30/05/2009",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116ISADM0036_29.jpg",
    "curso": "Técnico em Administração - Integrado Semestral - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 567,
    "name": "Kamille Monteiro Souza",
    "matricula": "2022116TDSM0199",
    "birthDate": "10/07/2003",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2022116TDSM0199_15.jpg",
    "curso": "Tecnologia em Design de Moda - Piripiri - Ser/Mod: 6"
  },
  {
    "id": 568,
    "name": "KAMILLY BRITO DA SILVA",
    "matricula": "2024116ISADM0017",
    "birthDate": "19/08/2008",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116ISADM0017_33.jpg",
    "curso": "Técnico em Administração - Integrado Semestral - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 569,
    "name": "Karine de Sousa Morais dos Reis",
    "matricula": "2018118240157",
    "birthDate": "11/02/1999",
    "photo": null,
    "curso": "Tecnologia em Design de Moda - Piripiri - Ser/Mod: 5"
  },
  {
    "id": 570,
    "name": "Karliane de Sousa Almeida",
    "matricula": "2022116TDSM0156",
    "birthDate": "30/05/2002",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2022116TDSM0156_51.jpg",
    "curso": "Tecnologia em Design de Moda - Piripiri - Ser/Mod: 6"
  },
  {
    "id": 571,
    "name": "Karlla Iriany da Silva Vieira",
    "matricula": "2024116ISINF0058",
    "birthDate": "26/03/2009",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116ISINF0058_18.jpg",
    "curso": "Técnico em Informática - Integrado Semestral - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 572,
    "name": "KARLOS EDUARDO SOARES MARTINS",
    "matricula": "2025116ISINF0016",
    "birthDate": "25/03/2010",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116ISINF0016_42.jpg",
    "curso": "Técnico em Informática - Integrado Semestral - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 573,
    "name": "Kauã da Silva Alves Macêdo",
    "matricula": "2024116BADM0022",
    "birthDate": "27/07/2004",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116BADM0022_21.jpg",
    "curso": "Bacharelado em Administração - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 574,
    "name": "KAUA DE SOUSA PASSOS",
    "matricula": "2024116LMAT0008",
    "birthDate": "13/04/2006",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116LMAT0008_03.jpg",
    "curso": "Licenciatura em Matemática - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 575,
    "name": "KAUA THAYLOR ANDRADE DE CARVALHO",
    "matricula": "2025116ISINF0027",
    "birthDate": "09/03/2010",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116ISINF0027_43.jpg",
    "curso": "Técnico em Informática - Integrado Semestral - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 576,
    "name": "Kauan Araújo de Souza",
    "matricula": "2023116ISINF0020",
    "birthDate": "21/11/2007",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116ISINF0020_57.jpg",
    "curso": "Técnico em Informática - Integrado Semestral - Piripiri - Ser/Mod: 5"
  },
  {
    "id": 577,
    "name": "KAUANNY RAELLY SAMPAIO DE ARAUJO",
    "matricula": "2025116ISINF0034",
    "birthDate": "13/01/2010",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116ISINF0034_05.jpg",
    "curso": "Técnico em Informática - Integrado Semestral - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 578,
    "name": "Kauany Isabelly Gomes Oliveira",
    "matricula": "2022116TDSM0075",
    "birthDate": "02/06/2004",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2022116TDSM0075_58.jpg",
    "curso": "Tecnologia em Design de Moda - Piripiri - Ser/Mod: 6"
  },
  {
    "id": 579,
    "name": "KAUE ROBLEDO SANTIAGO SOUSA",
    "matricula": "2025116ISADM0023",
    "birthDate": "21/01/2010",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116ISADM0023_23.jpg",
    "curso": "Técnico em Administração - Integrado Semestral - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 580,
    "name": "Kayki Sousa Magalhães",
    "matricula": "2022116ISADM0010",
    "birthDate": "21/11/2006",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2022116ISADM0010_07.jpg",
    "curso": "Técnico em Administração - Integrado Semestral - Piripiri - Ser/Mod: 6"
  },
  {
    "id": 581,
    "name": "KAYLANE FONTENELE DE MENESES MELO",
    "matricula": "2024116TDSM0006",
    "birthDate": "31/01/2005",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116TDSM0006_52.jpg",
    "curso": "Tecnologia em Design de Moda - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 582,
    "name": "KAYLLANNE EDUARDA NEVES CALDAS",
    "matricula": "2024116ISINF0052",
    "birthDate": "23/01/2009",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116ISINF0052_47.jpg",
    "curso": "Técnico em Informática - Integrado Semestral - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 583,
    "name": "Kayllany dos Santos Portela Sousa",
    "matricula": "2023116ISVES0028",
    "birthDate": "13/11/2007",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116ISVES0028_26.jpg",
    "curso": "Técnico em Vestuário - Integrado Semestral - Piripiri - Ser/Mod: 5"
  },
  {
    "id": 584,
    "name": "Keiciane Yasmim da Costa Soares",
    "matricula": "2023116ISADM0030",
    "birthDate": "09/01/2008",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116ISADM0030_57.jpg",
    "curso": "Técnico em Administração - Integrado Semestral - Piripiri - Ser/Mod: 5"
  },
  {
    "id": 585,
    "name": "KELLE CRISTINA CARVALHO DA SILVA",
    "matricula": "2025116UGRH0021",
    "birthDate": "11/04/2004",
    "photo": null,
    "curso": "Tecnologia em Gestão de Recursos Humanos - Ser/Mod: 1"
  },
  {
    "id": 586,
    "name": "Kellyton Rodrigues de Sousa",
    "matricula": "2024116LMAT0036",
    "birthDate": "16/10/2005",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116LMAT0036_48.jpg",
    "curso": "Licenciatura em Matemática - Piripiri - Ser/Mod: 2"
  },
  {
    "id": 587,
    "name": "Kelriane de Arcanjo Costa",
    "matricula": "2024116BADM0036",
    "birthDate": "18/06/2005",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116BADM0036_56.jpg",
    "curso": "Bacharelado em Administração - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 588,
    "name": "KELSON CARDOSO MEMORIA",
    "matricula": "2024116ISADM0066",
    "birthDate": "16/12/2008",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116ISADM0066_02.jpg",
    "curso": "Técnico em Administração - Integrado Semestral - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 589,
    "name": "Kelton Gomes Martins",
    "matricula": "2022116LMAT0137",
    "birthDate": "11/04/2003",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2022116LMAT0137_14.jpg",
    "curso": "Licenciatura em Matemática - Piripiri - Ser/Mod: 6"
  },
  {
    "id": 590,
    "name": "Ketellyn Myrelly Coelho da Silva",
    "matricula": "2024116ISINF0063",
    "birthDate": "16/03/2009",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116ISINF0063_54.jpg",
    "curso": "Técnico em Informática - Integrado Semestral - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 591,
    "name": "KETTLYN LORRANNY SILVA FERREIRA",
    "matricula": "2024116ISADM0002",
    "birthDate": "15/08/2007",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116ISADM0002_00.jpg",
    "curso": "Técnico em Administração - Integrado Semestral - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 592,
    "name": "KEVYLLEN ARAUJO PEREIRA",
    "matricula": "2025116TADS0003",
    "birthDate": "24/03/2007",
    "photo": null,
    "curso": "Tecnologia em Análise e Desenvolvimento de Sistemas - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 593,
    "name": "Keylany Ferreira Barroso",
    "matricula": "2022116BADM0069",
    "birthDate": "15/02/2003",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2022116BADM0069_44.jpg",
    "curso": "Bacharelado em Administração - Piripiri - Ser/Mod: 6"
  },
  {
    "id": 594,
    "name": "Kyara Rodrigues de Oliveira",
    "matricula": "2023116ISVES0005",
    "birthDate": "14/10/2007",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116ISVES0005_41.jpg",
    "curso": "Técnico em Vestuário - Integrado Semestral - Piripiri - Ser/Mod: 5"
  },
  {
    "id": 595,
    "name": "Laiane da Silva Castro",
    "matricula": "2022116MVES0038",
    "birthDate": "19/03/2003",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2022116MVES0038_42.jpg",
    "curso": "Técnico em Vestuário - Concomitante/Subsequente - Piripiri - Ser/Mod: 4"
  },
  {
    "id": 596,
    "name": "Laiane Freire dos Santos",
    "matricula": "2023116TDSM0011",
    "birthDate": "14/02/2004",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116TDSM0011_03.jpg",
    "curso": "Tecnologia em Design de Moda - Piripiri - Ser/Mod: 4"
  },
  {
    "id": 597,
    "name": "Laila Fernandes dos Santos",
    "matricula": "2025116LMAT0010",
    "birthDate": "13/08/1992",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116LMAT0010_04.jpg",
    "curso": "Licenciatura em Matemática - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 598,
    "name": "Laila Nicole de Oliveira Silva",
    "matricula": "2023116TDSM0028",
    "birthDate": "03/12/2002",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116TDSM0028_24.jpg",
    "curso": "Tecnologia em Design de Moda - Piripiri - Ser/Mod: 4"
  },
  {
    "id": 599,
    "name": "Laiza Katarine de Carvalho Barbosa",
    "matricula": "2024116LMAT0032",
    "birthDate": "03/03/2000",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116LMAT0032_11.jpg",
    "curso": "Licenciatura em Matemática - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 600,
    "name": "Lanay Melo Pinheiro da Silva",
    "matricula": "2023116ISINF0019",
    "birthDate": "07/03/2008",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116ISINF0019_59.jpg",
    "curso": "Técnico em Informática - Integrado Semestral - Piripiri - Ser/Mod: 5"
  },
  {
    "id": 601,
    "name": "LARA CAMILA ARAUJO DE SOUSA",
    "matricula": "2025116ISINF0017",
    "birthDate": "10/07/2009",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116ISINF0017_50.jpg",
    "curso": "Técnico em Informática - Integrado Semestral - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 602,
    "name": "LARA GABRIELE GONCALVES CAVALCANTE",
    "matricula": "2025116ISADM0026",
    "birthDate": "10/09/2009",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116ISADM0026_14.jpg",
    "curso": "Técnico em Administração - Integrado Semestral - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 603,
    "name": "Lara Raquely Costa Oliveira",
    "matricula": "2024116ISADM0071",
    "birthDate": "08/06/2008",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116ISADM0071_05.jpg",
    "curso": "Técnico em Administração - Integrado Semestral - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 604,
    "name": "LARA RODRIGUES BARBOSA",
    "matricula": "2024116ISADM0012",
    "birthDate": "21/08/2008",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116ISADM0012_05.jpg",
    "curso": "Técnico em Administração - Integrado Semestral - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 605,
    "name": "Lardiele Costa de Oliveira",
    "matricula": "2024116LPIN0046",
    "birthDate": "01/08/2004",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116LPIN0046_22.jpg",
    "curso": "Licenciatura Intercultural Indígena - CAPIR - Ser/Mod: 1"
  },
  {
    "id": 606,
    "name": "Larissa Souza do Nascimento",
    "matricula": "2024116TADS0027",
    "birthDate": "02/01/2006",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116TADS0027_29.jpg",
    "curso": "Tecnologia em Análise e Desenvolvimento de Sistemas - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 607,
    "name": "Lauana Oliveira de Holanda",
    "matricula": "2025116BADM0032",
    "birthDate": "29/07/2002",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116BADM0032_15.jpg",
    "curso": "Bacharelado em Administração - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 608,
    "name": "Layane Alves de Oliveira",
    "matricula": "2022116LMAT0145",
    "birthDate": "14/12/2003",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2022116LMAT0145_08.jpg",
    "curso": "Licenciatura em Matemática - Piripiri - Ser/Mod: 6"
  },
  {
    "id": 609,
    "name": "Layla Gomes Oliveira",
    "matricula": "2025116ULLI0004",
    "birthDate": "25/01/2006",
    "photo": null,
    "curso": "Licenciatura em Letras Inglês - Ser/Mod: 1"
  },
  {
    "id": 610,
    "name": "Layla Thauane Mota Silva",
    "matricula": "2022116TDSM0083",
    "birthDate": "17/11/2003",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2022116TDSM0083_44.jpg",
    "curso": "Tecnologia em Design de Moda - Piripiri - Ser/Mod: 6"
  },
  {
    "id": 611,
    "name": "LAYRA MARIA NASCIMENTO SOUSA",
    "matricula": "2024116ISADM0049",
    "birthDate": "10/05/2008",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116ISADM0049_43.jpg",
    "curso": "Técnico em Administração - Integrado Semestral - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 612,
    "name": "LAZARO DE BRITO ARAUJO",
    "matricula": "2025116LMAT0026",
    "birthDate": "27/12/2006",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116LMAT0026_23.jpg",
    "curso": "Licenciatura em Matemática - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 613,
    "name": "Leila Regina de Oliveira",
    "matricula": "2024216MADM0002",
    "birthDate": "27/07/1994",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024216MADM0002_03.jpg",
    "curso": "Técnico em Administração - Concomitante/Subsequente - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 614,
    "name": "Leonardo Amaral da Silva",
    "matricula": "2023116LMAT0025",
    "birthDate": "25/06/2002",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116LMAT0025_08.jpg",
    "curso": "Licenciatura em Matemática - Piripiri - Ser/Mod: 5"
  },
  {
    "id": 615,
    "name": "LEONARDO DE MORAES ARAUJO",
    "matricula": "2024116ISADM0047",
    "birthDate": "09/01/2009",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116ISADM0047_58.jpg",
    "curso": "Técnico em Administração - Integrado Semestral - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 616,
    "name": "LETICIA HELLEN DA SILVA SOBRINHO",
    "matricula": "2025116LMAT0012",
    "birthDate": "13/09/2006",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116LMAT0012_00.jpg",
    "curso": "Licenciatura em Matemática - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 617,
    "name": "LETICIA MENESES DE OLIVEIRA ANDRADE",
    "matricula": "2024116ISVES0003",
    "birthDate": "29/06/2008",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116ISVES0003_38.jpg",
    "curso": "Técnico em Vestuário - Integrado Semestral - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 618,
    "name": "LETICIA SILVA FERREIRA NUNES",
    "matricula": "2024116TDSM0017",
    "birthDate": "30/11/2001",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116TDSM0017_10.jpg",
    "curso": "Tecnologia em Design de Moda - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 619,
    "name": "Letícia Silva Pontes",
    "matricula": "2023116ISADM0018",
    "birthDate": "13/07/2007",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116ISADM0018_13.jpg",
    "curso": "Técnico em Administração - Integrado Semestral - Piripiri - Ser/Mod: 5"
  },
  {
    "id": 620,
    "name": "LETICIA SOARES CHAVES",
    "matricula": "2024116LMAT0001",
    "birthDate": "23/03/2006",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116LMAT0001_06.jpg",
    "curso": "Licenciatura em Matemática - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 621,
    "name": "Letícia Valéria Rodrigues",
    "matricula": "2023116TDSM0008",
    "birthDate": "10/04/1996",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116TDSM0008_57.jpg",
    "curso": "Tecnologia em Design de Moda - Piripiri - Ser/Mod: 4"
  },
  {
    "id": 622,
    "name": "LIANA FERREIRA DE SOUZA MACEDO",
    "matricula": "2025116UGRH0033",
    "birthDate": "09/09/1985",
    "photo": null,
    "curso": "Tecnologia em Gestão de Recursos Humanos - Ser/Mod: 1"
  },
  {
    "id": 623,
    "name": "LIANDRA MARIA SAMPAIO MENDES",
    "matricula": "2024116LMAT0011",
    "birthDate": "21/12/2005",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116LMAT0011_31.jpg",
    "curso": "Licenciatura em Matemática - Piripiri - Ser/Mod: 2"
  },
  {
    "id": 624,
    "name": "LIATRÍCIA MARIA DE FARIAS",
    "matricula": "2025116ULLI0011",
    "birthDate": "12/01/2012",
    "photo": null,
    "curso": "Licenciatura em Letras Inglês - Ser/Mod: 1"
  },
  {
    "id": 625,
    "name": "LIDIANE LIRA MACEDO",
    "matricula": "2024116TDSM0009",
    "birthDate": "15/02/1992",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116TDSM0009_58.jpg",
    "curso": "Tecnologia em Design de Moda - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 626,
    "name": "LIÉDSON RODRIGUES PAZ",
    "matricula": "2024216LPIN0002",
    "birthDate": "05/07/2003",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024216LPIN0002_25.jpg",
    "curso": "Licenciatura Intercultural Indígena - CAPIR - Ser/Mod: 1"
  },
  {
    "id": 627,
    "name": "Lilian Gomes da Silva",
    "matricula": "2019118240236",
    "birthDate": "08/09/1993",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2019118240236_08.jpg",
    "curso": "Tecnologia em Design de Moda - Piripiri - Ser/Mod: 6"
  },
  {
    "id": 628,
    "name": "Lilian keury Ferreira Sousa",
    "matricula": "2024116BADM0029",
    "birthDate": "15/10/2005",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116BADM0029_30.jpg",
    "curso": "Bacharelado em Administração - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 629,
    "name": "Linda Jessica Maria Rodrigues da Silva",
    "matricula": "2019118240066",
    "birthDate": "20/10/1996",
    "photo": null,
    "curso": "Tecnologia em Design de Moda - Piripiri - Ser/Mod: 6"
  },
  {
    "id": 630,
    "name": "LIVIA MARIA DE OLIVEIRA SILVA",
    "matricula": "2025116UGRH0003",
    "birthDate": "24/01/1978",
    "photo": null,
    "curso": "Tecnologia em Gestão de Recursos Humanos - Ser/Mod: 1"
  },
  {
    "id": 631,
    "name": "LIVIA VITORIA NASCIMENTO RIBEIRO",
    "matricula": "2025116ISVES0003",
    "birthDate": "24/11/2008",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116ISVES0003_54.jpg",
    "curso": "Técnico em Vestuário - Integrado Semestral - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 632,
    "name": "Lizandra Raíza Souza Oliveira",
    "matricula": "2023116BADM0031",
    "birthDate": "09/06/1996",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116BADM0031_00.jpg",
    "curso": "Bacharelado em Administração - Piripiri - Ser/Mod: 5"
  },
  {
    "id": 633,
    "name": "Lorenna Rocha de Melo Cerqueira",
    "matricula": "2024216MKEM0004",
    "birthDate": "22/10/1988",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024216MKEM0004_02.jpg",
    "curso": "Especialização em Marketing e Empreendedorismo em Moda - Ser/Mod: 2"
  },
  {
    "id": 634,
    "name": "LORENNA VICTORIA OLIVEIRA RAMOS",
    "matricula": "2024116ISINF0013",
    "birthDate": "27/03/2009",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116ISINF0013_39.jpg",
    "curso": "Técnico em Informática - Integrado Semestral - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 635,
    "name": "Louhane Batista Mesquita",
    "matricula": "2025116BADM0010",
    "birthDate": "07/09/2004",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116BADM0010_39.jpg",
    "curso": "Bacharelado em Administração - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 636,
    "name": "LOURIVAL CAMPELO DA SILVA NETO",
    "matricula": "2024116ISINF0029",
    "birthDate": "10/11/2008",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116ISINF0029_56.jpg",
    "curso": "Técnico em Informática - Integrado Semestral - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 637,
    "name": "LUANA AGUIAR DE SOUSA",
    "matricula": "2024116LPIN0034",
    "birthDate": "26/08/1996",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116LPIN0034_46.jpg",
    "curso": "Licenciatura Intercultural Indígena - CAPIR - Ser/Mod: 1"
  },
  {
    "id": 638,
    "name": "Luana Cardozo de Carvalho Damasceno",
    "matricula": "2025116LMAT0024",
    "birthDate": "14/12/1996",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116LMAT0024_20.jpg",
    "curso": "Licenciatura em Matemática - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 639,
    "name": "Luana da Silva Oliveira",
    "matricula": "2023116BADM0009",
    "birthDate": "06/12/1997",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116BADM0009_37.jpg",
    "curso": "Bacharelado em Administração - Piripiri - Ser/Mod: 5"
  },
  {
    "id": 640,
    "name": "Luana da Silva Santos",
    "matricula": "2025116BADM0009",
    "birthDate": "21/11/1994",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116BADM0009_11.jpg",
    "curso": "Bacharelado em Administração - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 641,
    "name": "LUANA GOMES DA SILVA",
    "matricula": "2024216JADM0041",
    "birthDate": "10/10/1995",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024216JADM0041_58.jpg",
    "curso": "Técnico em Administração Integrado ao Ensino Médio - PROEJA - Ser/Mod: 2"
  },
  {
    "id": 642,
    "name": "LUARA EDWIRGES AMORIM CARVALHO",
    "matricula": "2024116TDSM0004",
    "birthDate": "11/08/2006",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116TDSM0004_55.jpg",
    "curso": "Tecnologia em Design de Moda - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 643,
    "name": "LUARA MARIA BRITO LIMA",
    "matricula": "2024116ISADM0003",
    "birthDate": "21/05/2008",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116ISADM0003_51.jpg",
    "curso": "Técnico em Administração - Integrado Semestral - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 644,
    "name": "Lucas Alves de Lima (Laysla)",
    "matricula": "2024116TDSM0022",
    "birthDate": "07/06/1998",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116TDSM0022_05.jpg",
    "curso": "Tecnologia em Design de Moda - Piripiri - Ser/Mod: 2"
  },
  {
    "id": 645,
    "name": "LUCAS DA CONCEICAO DE ARAUJO",
    "matricula": "2025116ISINF0018",
    "birthDate": "19/03/2010",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116ISINF0018_50.jpg",
    "curso": "Técnico em Informática - Integrado Semestral - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 646,
    "name": "LUCAS DA SILVA CARMO LINS",
    "matricula": "2024116BADM0017",
    "birthDate": "07/12/2000",
    "photo": null,
    "curso": "Bacharelado em Administração - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 647,
    "name": "LUCAS GUILHERME DE SOUSA SILVA",
    "matricula": "2025116UGRH0008",
    "birthDate": "12/01/2007",
    "photo": null,
    "curso": "Tecnologia em Gestão de Recursos Humanos - Ser/Mod: 1"
  },
  {
    "id": 648,
    "name": "Lucas Rafael do Nascimento Silva",
    "matricula": "2025116ISINF0019",
    "birthDate": "25/10/2008",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116ISINF0019_17.jpg",
    "curso": "Técnico em Informática - Integrado Semestral - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 649,
    "name": "Lucas Samuel Lima Gomes",
    "matricula": "2022116BADM0298",
    "birthDate": "02/11/2001",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2022116BADM0298_24.jpg",
    "curso": "Bacharelado em Administração - Piripiri - Ser/Mod: 6"
  },
  {
    "id": 650,
    "name": "Lucas Sousa Nascimento",
    "matricula": "2023116ISADM0029",
    "birthDate": "02/08/2006",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116ISADM0029_33.jpg",
    "curso": "Técnico em Administração - Integrado Semestral - Piripiri - Ser/Mod: 5"
  },
  {
    "id": 651,
    "name": "Lucia Maria Teles de Melo Lima",
    "matricula": "2023216JVES0009",
    "birthDate": "09/04/1961",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023216JVES0009_54.jpg",
    "curso": "Técnico em Vestuário Integrado ao Ensino Médio - PROEJA - Ser/Mod: 4"
  },
  {
    "id": 652,
    "name": "LUCIANA DA SILVA PEREIRA",
    "matricula": "2025116TDSM0004",
    "birthDate": "28/02/2003",
    "photo": null,
    "curso": "Tecnologia em Design de Moda - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 653,
    "name": "Luciana Ferreira de Sousa",
    "matricula": "2025116TDSM0017",
    "birthDate": "19/04/1999",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116TDSM0017_39.jpg",
    "curso": "Tecnologia em Design de Moda - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 654,
    "name": "Lucijane Leitao Lopes",
    "matricula": "2024216JADM0024",
    "birthDate": "11/11/1998",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024216JADM0024_59.jpg",
    "curso": "Técnico em Administração Integrado ao Ensino Médio - PROEJA - Ser/Mod: 2"
  },
  {
    "id": 655,
    "name": "LUCIVANDA SOUSA ISAIAS",
    "matricula": "2024116BADM0002",
    "birthDate": "27/01/2006",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116BADM0002_41.jpg",
    "curso": "Bacharelado em Administração - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 656,
    "name": "Ludjan Virles Rodrigues Pereira",
    "matricula": "2024216JADM0016",
    "birthDate": "18/10/1992",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024216JADM0016_52.jpg",
    "curso": "Técnico em Administração Integrado ao Ensino Médio - PROEJA - Ser/Mod: 2"
  },
  {
    "id": 657,
    "name": "LUIS CARLOS DE CASTRO SILVA",
    "matricula": "2024216JADM0048",
    "birthDate": "14/02/2004",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024216JADM0048_44.jpg",
    "curso": "Técnico em Administração Integrado ao Ensino Médio - PROEJA - Ser/Mod: 2"
  },
  {
    "id": 658,
    "name": "Luis Eduardo Santos Miranda",
    "matricula": "2024116ISINF0070",
    "birthDate": "18/06/2009",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116ISINF0070_31.jpg",
    "curso": "Técnico em Informática - Integrado Semestral - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 659,
    "name": "LUIS FELIPE ARAUJO DA SILVA",
    "matricula": "2024216MADM0016",
    "birthDate": "09/02/2003",
    "photo": null,
    "curso": "Técnico em Administração - Concomitante/Subsequente - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 660,
    "name": "Luis Felipe Sousa dos Santos",
    "matricula": "2022116ISADM0672",
    "birthDate": "06/04/2006",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2022116ISADM0672_58.jpg",
    "curso": "Técnico em Administração - Integrado Semestral - Piripiri - Ser/Mod: 6"
  },
  {
    "id": 661,
    "name": "Luis Fernando Barbosa da Silva",
    "matricula": "2022116ISADM0060",
    "birthDate": "29/01/2007",
    "photo": null,
    "curso": "Técnico em Administração - Integrado Semestral - Piripiri - Ser/Mod: 6"
  },
  {
    "id": 662,
    "name": "Luis Gabriel Nocrato Leite",
    "matricula": "2021116BADM0283",
    "birthDate": "14/10/2000",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2021116BADM0283_21.jpg",
    "curso": "Bacharelado em Administração - Piripiri - Ser/Mod: 8"
  },
  {
    "id": 663,
    "name": "Luis Guilherme Sampaio Fontenele",
    "matricula": "2024116TADS0031",
    "birthDate": "18/05/2005",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116TADS0031_47.jpg",
    "curso": "Tecnologia em Análise e Desenvolvimento de Sistemas - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 664,
    "name": "LUIS GUSTAVO DA SILVA OLIVEIRA",
    "matricula": "2024116ISINF0009",
    "birthDate": "22/04/2008",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116ISINF0009_07.jpg",
    "curso": "Técnico em Informática - Integrado Semestral - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 665,
    "name": "Luis Gustavo de Oliveira Mesquita",
    "matricula": "2025116ISVES0010",
    "birthDate": "26/01/2010",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116ISVES0010_39.jpg",
    "curso": "Técnico em Vestuário - Integrado Semestral - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 666,
    "name": "Luís Gustavo Gomes Sousa",
    "matricula": "2024116ISINF0068",
    "birthDate": "28/11/2008",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116ISINF0068_36.jpg",
    "curso": "Técnico em Informática - Integrado Semestral - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 667,
    "name": "Luis Gustavo Nery Silva",
    "matricula": "2024116TADS0016",
    "birthDate": "08/02/2006",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116TADS0016_03.jpg",
    "curso": "Tecnologia em Análise e Desenvolvimento de Sistemas - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 668,
    "name": "Luís Gustavo Pereira Sobrinho",
    "matricula": "2023116ISINF0025",
    "birthDate": "03/06/2007",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116ISINF0025_07.jpg",
    "curso": "Técnico em Informática - Integrado Semestral - Piripiri - Ser/Mod: 4"
  },
  {
    "id": 669,
    "name": "LUIS HENRIQUE DE SOUZA ANANIAS",
    "matricula": "2024116ISINF0047",
    "birthDate": "05/01/2009",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116ISINF0047_22.jpg",
    "curso": "Técnico em Informática - Integrado Semestral - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 670,
    "name": "Luís Henrique Pontes da Silva",
    "matricula": "2023116ISINF0047",
    "birthDate": "25/08/2007",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116ISINF0047_20.jpg",
    "curso": "Técnico em Informática - Integrado Semestral - Piripiri - Ser/Mod: 4"
  },
  {
    "id": 671,
    "name": "LUIS VICTOR DA COSTA BEZERRA",
    "matricula": "2024116ISADM0032",
    "birthDate": "23/11/2007",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116ISADM0032_03.jpg",
    "curso": "Técnico em Administração - Integrado Semestral - Piripiri - Ser/Mod: 2"
  },
  {
    "id": 672,
    "name": "LUIZ HENRIQUE FURTADO REIS",
    "matricula": "2024116LMAT0002",
    "birthDate": "18/09/2006",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116LMAT0002_30.jpg",
    "curso": "Licenciatura em Matemática - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 673,
    "name": "LUZIRENE DE MELO OLIVEIRA",
    "matricula": "2024116LPIN0023",
    "birthDate": "07/03/1974",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116LPIN0023_14.jpg",
    "curso": "Licenciatura Intercultural Indígena - CAPIR - Ser/Mod: 1"
  },
  {
    "id": 674,
    "name": "Maiza Sousa da Silva",
    "matricula": "2023116BADM0008",
    "birthDate": "27/09/1999",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116BADM0008_53.jpg",
    "curso": "Bacharelado em Administração - Piripiri - Ser/Mod: 5"
  },
  {
    "id": 675,
    "name": "MANUEL FABIO ALVES DE MELO",
    "matricula": "2024116ISVES0006",
    "birthDate": "12/01/2008",
    "photo": null,
    "curso": "Técnico em Vestuário - Integrado Semestral - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 676,
    "name": "MARCIA GABRYELLE LIMA DE SOUSA",
    "matricula": "2024116ISADM0034",
    "birthDate": "01/09/2008",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116ISADM0034_19.jpg",
    "curso": "Técnico em Administração - Integrado Semestral - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 677,
    "name": "Marcia Kelly Ferreira da Silva",
    "matricula": "2021116LMAT0165",
    "birthDate": "07/01/2002",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2021116LMAT0165_49.jpg",
    "curso": "Licenciatura em Matemática - Piripiri - Ser/Mod: 8"
  },
  {
    "id": 678,
    "name": "Márcia Naiara Duarte Silva",
    "matricula": "2024116BADM0030",
    "birthDate": "09/04/1988",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116BADM0030_00.jpg",
    "curso": "Bacharelado em Administração - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 679,
    "name": "Marcilio Martone Almeida da Silva",
    "matricula": "2024116ISADM0070",
    "birthDate": "29/05/2008",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116ISADM0070_48.jpg",
    "curso": "Técnico em Administração - Integrado Semestral - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 680,
    "name": "Marcos Adriano da Silva",
    "matricula": "2023116BADM0011",
    "birthDate": "26/08/2001",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116BADM0011_04.jpg",
    "curso": "Bacharelado em Administração - Piripiri - Ser/Mod: 5"
  },
  {
    "id": 681,
    "name": "MARCOS ANDRE DA COSTA NUNES",
    "matricula": "2024116LMAT0012",
    "birthDate": "14/12/2004",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116LMAT0012_15.jpg",
    "curso": "Licenciatura em Matemática - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 682,
    "name": "MARCOS ANTONIO SOUSA ARAUJO",
    "matricula": "2024116LPIN0015",
    "birthDate": "13/06/1996",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116LPIN0015_59.jpg",
    "curso": "Licenciatura Intercultural Indígena - CAPIR - Ser/Mod: 1"
  },
  {
    "id": 683,
    "name": "MARCOS VINICIUS ALVES DE SOUSA",
    "matricula": "2025116ISADM0019",
    "birthDate": "19/05/2009",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116ISADM0019_26.jpg",
    "curso": "Técnico em Administração - Integrado Semestral - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 684,
    "name": "MARCOS VINICIUS DE OLIVEIRA TEIXEIRA",
    "matricula": "2025116TADS0013",
    "birthDate": "06/04/2006",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116TADS0013_20.jpg",
    "curso": "Tecnologia em Análise e Desenvolvimento de Sistemas - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 685,
    "name": "Marcos Vinicius Varanda da Silva",
    "matricula": "2023116LMAT0007",
    "birthDate": "08/07/2004",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116LMAT0007_47.jpg",
    "curso": "Licenciatura em Matemática - Piripiri - Ser/Mod: 5"
  },
  {
    "id": 686,
    "name": "Marcus James Duarte Santos Silva",
    "matricula": "2023116LMAT0006",
    "birthDate": "06/09/2004",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116LMAT0006_23.jpg",
    "curso": "Licenciatura em Matemática - Piripiri - Ser/Mod: 5"
  },
  {
    "id": 687,
    "name": "Mardone Silva Pereira",
    "matricula": "2024116TADS0034",
    "birthDate": "04/11/2002",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116TADS0034_38.jpg",
    "curso": "Tecnologia em Análise e Desenvolvimento de Sistemas - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 688,
    "name": "Mardônio Nascimento Cruz",
    "matricula": "2020116LMAT0347",
    "birthDate": "14/12/1997",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2020116LMAT0347_33.jpg",
    "curso": "Licenciatura em Matemática - Piripiri - Ser/Mod: 9"
  },
  {
    "id": 689,
    "name": "Mardonis de Sousa Silva",
    "matricula": "2022116ISADM0087",
    "birthDate": "05/03/2007",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2022116ISADM0087_00.jpg",
    "curso": "Técnico em Administração - Integrado Semestral - Piripiri - Ser/Mod: 6"
  },
  {
    "id": 690,
    "name": "MARESA DE SOUZA NASCIMENTO",
    "matricula": "2024116ISINF0023",
    "birthDate": "08/07/2008",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116ISINF0023_57.jpg",
    "curso": "Técnico em Informática - Integrado Semestral - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 691,
    "name": "Margarida Oliveira da Silva",
    "matricula": "2023216JVES0007",
    "birthDate": "13/06/1976",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023216JVES0007_18.jpg",
    "curso": "Técnico em Vestuário Integrado ao Ensino Médio - PROEJA - Ser/Mod: 4"
  },
  {
    "id": 692,
    "name": "MARIA JÉSSICA DE MELO LUSTOSA",
    "matricula": "2025116UGRH0031",
    "birthDate": "09/05/1993",
    "photo": null,
    "curso": "Tecnologia em Gestão de Recursos Humanos - Ser/Mod: 1"
  },
  {
    "id": 693,
    "name": "MARIA ADRIELLY NASCIMENTO SILVA",
    "matricula": "2024116ISVES0030",
    "birthDate": "13/02/2009",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116ISVES0030_43.jpg",
    "curso": "Técnico em Vestuário - Integrado Semestral - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 694,
    "name": "Maria Alice de Sousa Marinho",
    "matricula": "2023216JVES0002",
    "birthDate": "20/11/1992",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023216JVES0002_12.jpg",
    "curso": "Técnico em Vestuário Integrado ao Ensino Médio - PROEJA - Ser/Mod: 4"
  },
  {
    "id": 695,
    "name": "MARIA AMANDA DE SOUSA LIMA",
    "matricula": "2024116ISVES0024",
    "birthDate": "25/02/2009",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116ISVES0024_01.jpg",
    "curso": "Técnico em Vestuário - Integrado Semestral - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 696,
    "name": "MARIA AURILANE ALVES DA SILVA",
    "matricula": "2025116BADM0021",
    "birthDate": "22/06/2007",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116BADM0021_12.jpg",
    "curso": "Bacharelado em Administração - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 697,
    "name": "MARIA BEATRIZ CUNHA DA SILVA",
    "matricula": "2024116LPIN0022",
    "birthDate": "10/08/2002",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116LPIN0022_18.jpg",
    "curso": "Licenciatura Intercultural Indígena - CAPIR - Ser/Mod: 1"
  },
  {
    "id": 698,
    "name": "Maria Beatriz de Sousa Araujo",
    "matricula": "2024216MKEM0024",
    "birthDate": "14/06/1998",
    "photo": null,
    "curso": "Especialização em Marketing e Empreendedorismo em Moda - Ser/Mod: 1"
  },
  {
    "id": 699,
    "name": "Maria Camilla da Silva Oliveira",
    "matricula": "2022116LMAT0153",
    "birthDate": "21/09/2003",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2022116LMAT0153_47.jpg",
    "curso": "Licenciatura em Matemática - Piripiri - Ser/Mod: 6"
  },
  {
    "id": 700,
    "name": "MARIA CLARA ALMEIDA MARTINS",
    "matricula": "2025116TADS0012",
    "birthDate": "31/12/2006",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116TADS0012_43.jpg",
    "curso": "Tecnologia em Análise e Desenvolvimento de Sistemas - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 701,
    "name": "Maria Clara da Silva Damasceno",
    "matricula": "2023116ISADM0033",
    "birthDate": "17/06/2007",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116ISADM0033_49.jpg",
    "curso": "Técnico em Administração - Integrado Semestral - Piripiri - Ser/Mod: 5"
  },
  {
    "id": 702,
    "name": "Maria Clara Leitão de Carvalho",
    "matricula": "2023116ISINF0011",
    "birthDate": "24/02/2008",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116ISINF0011_03.jpg",
    "curso": "Técnico em Informática - Integrado Semestral - Piripiri - Ser/Mod: 5"
  },
  {
    "id": 703,
    "name": "MARIA CLEOMA DA SILVA PINTO SOUSA",
    "matricula": "2024116LPIN0004",
    "birthDate": "04/11/1980",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116LPIN0004_25.jpg",
    "curso": "Licenciatura Intercultural Indígena - CAPIR - Ser/Mod: 1"
  },
  {
    "id": 704,
    "name": "MARIA CRISTIANE DA SILVA",
    "matricula": "2024116LMAT0022",
    "birthDate": "03/03/2003",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116LMAT0022_29.jpg",
    "curso": "Licenciatura em Matemática - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 705,
    "name": "MARIA DA CONCEICAO DE ARAUJO SANTOS",
    "matricula": "2024116LPIN0002",
    "birthDate": "08/01/1979",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116LPIN0002_58.jpg",
    "curso": "Licenciatura Intercultural Indígena - CAPIR - Ser/Mod: 1"
  },
  {
    "id": 706,
    "name": "MARIA DA CONCEIÇÃO DIAS PEREIRA",
    "matricula": "2024216JADM0007",
    "birthDate": "08/12/1984",
    "photo": null,
    "curso": "Técnico em Administração Integrado ao Ensino Médio - PROEJA - Ser/Mod: 1"
  },
  {
    "id": 707,
    "name": "MARIA DA CONCEICAO NUNES DE SOUSA",
    "matricula": "2025116LMAT0022",
    "birthDate": "09/08/2006",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116LMAT0022_43.jpg",
    "curso": "Licenciatura em Matemática - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 708,
    "name": "MARIA DA CONCEIÇÃO SOUSA DOS SANTOS",
    "matricula": "2024116LPIN0003",
    "birthDate": "03/12/1980",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116LPIN0003_53.jpg",
    "curso": "Licenciatura Intercultural Indígena - CAPIR - Ser/Mod: 1"
  },
  {
    "id": 709,
    "name": "Maria da Consolação Duarte do Nascimento",
    "matricula": "2023116ISINF0010",
    "birthDate": "01/01/2008",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116ISINF0010_13.jpg",
    "curso": "Técnico em Informática - Integrado Semestral - Piripiri - Ser/Mod: 5"
  },
  {
    "id": 710,
    "name": "MARIA DA CONSOLACAO NASCIMENTO DOS SANTOS",
    "matricula": "2024116ISINF0022",
    "birthDate": "22/05/2007",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116ISINF0022_00.jpg",
    "curso": "Técnico em Informática - Integrado Semestral - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 711,
    "name": "Maria da Paz Vieira da Silva",
    "matricula": "2024216JADM0020",
    "birthDate": "10/10/1976",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024216JADM0020_20.jpg",
    "curso": "Técnico em Administração Integrado ao Ensino Médio - PROEJA - Ser/Mod: 2"
  },
  {
    "id": 712,
    "name": "MARIA DALILA DE SOUSA BARROS",
    "matricula": "2024116ISADM0051",
    "birthDate": "10/02/2009",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116ISADM0051_57.jpg",
    "curso": "Técnico em Administração - Integrado Semestral - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 713,
    "name": "Maria Daniele de Araújo Rodrigues",
    "matricula": "2024116ISVES0032",
    "birthDate": "08/06/2008",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116ISVES0032_53.jpg",
    "curso": "Técnico em Vestuário - Integrado Semestral - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 714,
    "name": "Maria Darlane Ribeiro Araujo",
    "matricula": "2022116LMAT0331",
    "birthDate": "23/03/2003",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2022116LMAT0331_18.jpg",
    "curso": "Licenciatura em Matemática - Piripiri - Ser/Mod: 6"
  },
  {
    "id": 715,
    "name": "Maria das Graças de Souza da Silva",
    "matricula": "2023216JADM0002",
    "birthDate": "07/09/1987",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023216JADM0002_26.jpg",
    "curso": "Técnico em Administração Integrado ao Ensino Médio - PROEJA - Ser/Mod: 4"
  },
  {
    "id": 716,
    "name": "Maria Dayelle Freire Gomes",
    "matricula": "2023116ISADM0014",
    "birthDate": "14/11/2007",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116ISADM0014_39.jpg",
    "curso": "Técnico em Administração - Integrado Semestral - Piripiri - Ser/Mod: 5"
  },
  {
    "id": 717,
    "name": "Maria de Jesus Ferreira da Silva",
    "matricula": "2023116BADM0040",
    "birthDate": "04/10/2000",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116BADM0040_23.jpg",
    "curso": "Bacharelado em Administração - Piripiri - Ser/Mod: 6"
  },
  {
    "id": 718,
    "name": "Maria Diele de Macêdo Gomes",
    "matricula": "2023116BADM0016",
    "birthDate": "05/04/2001",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116BADM0016_01.jpg",
    "curso": "Bacharelado em Administração - Piripiri - Ser/Mod: 5"
  },
  {
    "id": 719,
    "name": "Maria do Carmo de Brito Fontenele",
    "matricula": "2021116LMAT0130",
    "birthDate": "13/11/2003",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2021116LMAT0130_54.jpg",
    "curso": "Licenciatura em Matemática - Piripiri - Ser/Mod: 8"
  },
  {
    "id": 720,
    "name": "Maria do Carmo de Sousa Silva",
    "matricula": "2025116ULLI0025",
    "birthDate": "16/07/2005",
    "photo": null,
    "curso": "Licenciatura em Letras Inglês - Ser/Mod: 1"
  },
  {
    "id": 721,
    "name": "Maria do Carmo do Nascimento",
    "matricula": "2025116TDSM0016",
    "birthDate": "12/12/1990",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116TDSM0016_14.jpg",
    "curso": "Tecnologia em Design de Moda - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 722,
    "name": "Maria do Carmo Oliveira Pereira",
    "matricula": "2023116TDSM0013",
    "birthDate": "30/04/1999",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116TDSM0013_31.jpg",
    "curso": "Tecnologia em Design de Moda - Piripiri - Ser/Mod: 4"
  },
  {
    "id": 723,
    "name": "MARIA DO CARMO SILVA LIMA",
    "matricula": "2025116ISADM0017",
    "birthDate": "28/03/2010",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116ISADM0017_57.jpg",
    "curso": "Técnico em Administração - Integrado Semestral - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 724,
    "name": "MARIA DO DESTERRO DE OLIVEIRA SILVA",
    "matricula": "2025116UGRH0010",
    "birthDate": "15/06/1990",
    "photo": null,
    "curso": "Tecnologia em Gestão de Recursos Humanos - Ser/Mod: 1"
  },
  {
    "id": 725,
    "name": "MARIA DO ROZARIO DE FATIMA NERES DA CUNHA",
    "matricula": "2025116UGRH0029",
    "birthDate": "23/09/1988",
    "photo": null,
    "curso": "Tecnologia em Gestão de Recursos Humanos - Ser/Mod: 1"
  },
  {
    "id": 726,
    "name": "Maria do Socorro Cordeiro",
    "matricula": "2024216JADM0015",
    "birthDate": "08/02/1972",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024216JADM0015_43.jpg",
    "curso": "Técnico em Administração Integrado ao Ensino Médio - PROEJA - Ser/Mod: 2"
  },
  {
    "id": 727,
    "name": "Maria do Socorro Gomes da Rocha",
    "matricula": "2024216JADM0040",
    "birthDate": "14/04/1983",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024216JADM0040_03.jpg",
    "curso": "Técnico em Administração Integrado ao Ensino Médio - PROEJA - Ser/Mod: 2"
  },
  {
    "id": 728,
    "name": "Maria do Socorro Marques Carvalho",
    "matricula": "2019118240090",
    "birthDate": "30/04/1985",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2019118240090_58.jpg",
    "curso": "Tecnologia em Design de Moda - Piripiri - Ser/Mod: 6"
  },
  {
    "id": 729,
    "name": "Maria do Socorro Silva Soares",
    "matricula": "2024116BADM0021",
    "birthDate": "03/11/1995",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116BADM0021_23.jpg",
    "curso": "Bacharelado em Administração - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 730,
    "name": "Maria dos Remédios da Silva Ananias",
    "matricula": "2024216JADM0042",
    "birthDate": "12/06/1984",
    "photo": null,
    "curso": "Técnico em Administração Integrado ao Ensino Médio - PROEJA - Ser/Mod: 2"
  },
  {
    "id": 731,
    "name": "Maria dos Remedios de Sousa",
    "matricula": "2022116BADM0115",
    "birthDate": "29/10/2003",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2022116BADM0115_44.jpg",
    "curso": "Bacharelado em Administração - Piripiri - Ser/Mod: 6"
  },
  {
    "id": 732,
    "name": "MARIA DOS REMÉDIOS DE SOUZA FERREIRA",
    "matricula": "2025116TDSM0030",
    "birthDate": "07/04/1997",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116TDSM0030_39.jpg",
    "curso": "Tecnologia em Design de Moda - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 733,
    "name": "MARIA DOS REMEDIOS DE SOUZA LIMA",
    "matricula": "2024116LPIN0027",
    "birthDate": "07/05/1994",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116LPIN0027_45.jpg",
    "curso": "Licenciatura Intercultural Indígena - CAPIR - Ser/Mod: 1"
  },
  {
    "id": 734,
    "name": "MARIA DOS REMEDIOS FERNANDES DE SOUSA",
    "matricula": "2025116UGRH0020",
    "birthDate": "18/10/1990",
    "photo": null,
    "curso": "Tecnologia em Gestão de Recursos Humanos - Ser/Mod: 1"
  },
  {
    "id": 735,
    "name": "MARIA DOS REMEDIOS FONTENELE SILVA SOUSA",
    "matricula": "2024116BADM0024",
    "birthDate": "26/08/1985",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116BADM0024_30.jpg",
    "curso": "Bacharelado em Administração - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 736,
    "name": "Maria dos Remedios Jessica da Silva Lima",
    "matricula": "2023116LMAT0037",
    "birthDate": "28/11/1995",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116LMAT0037_32.jpg",
    "curso": "Licenciatura em Matemática - Piripiri - Ser/Mod: 5"
  },
  {
    "id": 737,
    "name": "Maria Eduarda Braz Cardoso",
    "matricula": "2023116BADM0015",
    "birthDate": "03/12/2004",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116BADM0015_13.jpg",
    "curso": "Bacharelado em Administração - Piripiri - Ser/Mod: 5"
  },
  {
    "id": 738,
    "name": "MARIA EDUARDA CRUZ SOUSA",
    "matricula": "2025116ISVES0023",
    "birthDate": "02/07/2009",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116ISVES0023_44.jpg",
    "curso": "Técnico em Vestuário - Integrado Semestral - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 739,
    "name": "MARIA EDUARDA DA SILVA",
    "matricula": "2024116TDSM0013",
    "birthDate": "20/08/2005",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116TDSM0013_22.jpg",
    "curso": "Tecnologia em Design de Moda - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 740,
    "name": "Maria Eduarda da Silva Sousa",
    "matricula": "2022116ISADM0249",
    "birthDate": "16/06/2006",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2022116ISADM0249_07.jpg",
    "curso": "Técnico em Administração - Integrado Semestral - Piripiri - Ser/Mod: 6"
  },
  {
    "id": 741,
    "name": "MARIA EDUARDA DA SILVA SOUZA",
    "matricula": "2025116ISVES0015",
    "birthDate": "02/09/2009",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116ISVES0015_05.jpg",
    "curso": "Técnico em Vestuário - Integrado Semestral - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 742,
    "name": "MARIA EDUARDA DE OLIVEIRA SOUSA",
    "matricula": "2025116ISADM0025",
    "birthDate": "30/08/2009",
    "photo": null,
    "curso": "Técnico em Administração - Integrado Semestral - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 743,
    "name": "Maria Eduarda do Nascimento Gomes",
    "matricula": "2022116BADM0395",
    "birthDate": "07/03/2003",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2022116BADM0395_29.jpg",
    "curso": "Bacharelado em Administração - Piripiri - Ser/Mod: 6"
  },
  {
    "id": 744,
    "name": "Maria Eduarda Galvao dos Santos",
    "matricula": "2022116LMAT0340",
    "birthDate": "19/07/2004",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2022116LMAT0340_58.jpg",
    "curso": "Licenciatura em Matemática - Piripiri - Ser/Mod: 6"
  },
  {
    "id": 745,
    "name": "Maria Eduarda Menezes Lopes",
    "matricula": "2025116ISVES0011",
    "birthDate": "22/11/2009",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116ISVES0011_27.jpg",
    "curso": "Técnico em Vestuário - Integrado Semestral - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 746,
    "name": "Maria Eduarda Nascimento Lima",
    "matricula": "2023116LMAT0014",
    "birthDate": "17/09/2004",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116LMAT0014_50.jpg",
    "curso": "Licenciatura em Matemática - Piripiri - Ser/Mod: 5"
  },
  {
    "id": 747,
    "name": "MARIA EDUARDA PEREIRA DE SOUZA",
    "matricula": "2025116TDSM0024",
    "birthDate": "07/06/2004",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116TDSM0024_19.jpg",
    "curso": "Tecnologia em Design de Moda - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 748,
    "name": "MARIA EDUARDA SILVA GOMES",
    "matricula": "2025116ISINF0020",
    "birthDate": "15/01/2010",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116ISINF0020_21.jpg",
    "curso": "Técnico em Informática - Integrado Semestral - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 749,
    "name": "Maria Eloa Pereira Santos",
    "matricula": "2025116ISVES0001",
    "birthDate": "19/11/2009",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116ISVES0001_32.jpg",
    "curso": "Técnico em Vestuário - Integrado Semestral - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 750,
    "name": "MARIA EMANUELE CARVALHO DE ARAUJO",
    "matricula": "2024116ISINF0028",
    "birthDate": "20/03/2009",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116ISINF0028_11.jpg",
    "curso": "Técnico em Informática - Integrado Semestral - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 751,
    "name": "MARIA EMANUELE DA SILVA SANTOS",
    "matricula": "2024116ISINF0046",
    "birthDate": "20/10/2008",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116ISINF0046_07.jpg",
    "curso": "Técnico em Informática - Integrado Semestral - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 752,
    "name": "Maria Erlane da Silva Ferreira",
    "matricula": "2022116ISADM0141",
    "birthDate": "04/01/2006",
    "photo": null,
    "curso": "Técnico em Administração - Integrado Semestral - Piripiri - Ser/Mod: 6"
  },
  {
    "id": 753,
    "name": "Maria Erlane de Oliveira Silva",
    "matricula": "2022116LMAT0269",
    "birthDate": "01/03/1998",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2022116LMAT0269_13.jpg",
    "curso": "Licenciatura em Matemática - Piripiri - Ser/Mod: 5"
  },
  {
    "id": 754,
    "name": "Maria Erlane de Oliveira Silva",
    "matricula": "2024216MKEM0014",
    "birthDate": "01/03/1998",
    "photo": null,
    "curso": "Especialização em Marketing e Empreendedorismo em Moda - Ser/Mod: 1"
  },
  {
    "id": 755,
    "name": "MARIA EUGENIA DA SILVA",
    "matricula": "2025116BADM0026",
    "birthDate": "11/07/2006",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116BADM0026_48.jpg",
    "curso": "Bacharelado em Administração - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 756,
    "name": "Maria Fernanda Alves de Sousa",
    "matricula": "2023116LMAT0029",
    "birthDate": "25/09/2004",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116LMAT0029_19.jpg",
    "curso": "Licenciatura em Matemática - Piripiri - Ser/Mod: 5"
  },
  {
    "id": 757,
    "name": "Maria Fernanda Andrade Teixeira Costa",
    "matricula": "2024116ISADM0067",
    "birthDate": "13/04/2008",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116ISADM0067_25.jpg",
    "curso": "Técnico em Administração - Integrado Semestral - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 758,
    "name": "MARIA FERNANDA DE ARAUJO DIAS",
    "matricula": "2025116UGRH0028",
    "birthDate": "17/07/1988",
    "photo": null,
    "curso": "Tecnologia em Gestão de Recursos Humanos - Ser/Mod: 1"
  },
  {
    "id": 759,
    "name": "Maria Fernanda de Melo",
    "matricula": "2023116ISADM0024",
    "birthDate": "14/04/2007",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116ISADM0024_09.jpg",
    "curso": "Técnico em Administração - Integrado Semestral - Piripiri - Ser/Mod: 4"
  },
  {
    "id": 760,
    "name": "MARIA FERNANDA DE MELO ELEUTERIO",
    "matricula": "2024116ISADM0030",
    "birthDate": "18/09/2008",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116ISADM0030_22.jpg",
    "curso": "Técnico em Administração - Integrado Semestral - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 761,
    "name": "MARIA FERNANDA FIDELES DA SILVA",
    "matricula": "2025116ISVES0013",
    "birthDate": "28/04/2009",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116ISVES0013_01.jpg",
    "curso": "Técnico em Vestuário - Integrado Semestral - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 762,
    "name": "Maria Gabriely Nascimento Pereira",
    "matricula": "2023116ISADM0003",
    "birthDate": "16/08/2007",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116ISADM0003_52.jpg",
    "curso": "Técnico em Administração - Integrado Semestral - Piripiri - Ser/Mod: 5"
  },
  {
    "id": 763,
    "name": "MARIA GARDENIA DOS SANTOS NASCIMENTO",
    "matricula": "2024116LPIN0012",
    "birthDate": "14/05/1988",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116LPIN0012_45.jpg",
    "curso": "Licenciatura Intercultural Indígena - CAPIR - Ser/Mod: 1"
  },
  {
    "id": 764,
    "name": "Maria Geiciane Fortuna Nascimento",
    "matricula": "2024216JADM0009",
    "birthDate": "18/08/1998",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024216JADM0009_55.jpg",
    "curso": "Técnico em Administração Integrado ao Ensino Médio - PROEJA - Ser/Mod: 2"
  },
  {
    "id": 765,
    "name": "MARIA GERCIELLY SOUSA DA SILVA",
    "matricula": "2025116BADM0024",
    "birthDate": "11/10/2006",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116BADM0024_46.jpg",
    "curso": "Bacharelado em Administração - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 766,
    "name": "Maria Graziele Felício de Sousa",
    "matricula": "2023116ISVES0026",
    "birthDate": "04/05/2007",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116ISVES0026_38.jpg",
    "curso": "Técnico em Vestuário - Integrado Semestral - Piripiri - Ser/Mod: 5"
  },
  {
    "id": 767,
    "name": "MARIA IANDRA RODRIGUES LIMA",
    "matricula": "2025116LMAT0018",
    "birthDate": "03/05/2006",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116LMAT0018_41.jpg",
    "curso": "Licenciatura em Matemática - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 768,
    "name": "MARIA ISABELLE PEREIRA",
    "matricula": "2025116LMAT0043",
    "birthDate": "24/11/2006",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116LMAT0043_53.jpg",
    "curso": "Licenciatura em Matemática - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 769,
    "name": "Maria Isabelli Pinto Lopes",
    "matricula": "2023116ISVES0022",
    "birthDate": "23/07/2007",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116ISVES0022_18.jpg",
    "curso": "Técnico em Vestuário - Integrado Semestral - Piripiri - Ser/Mod: 5"
  },
  {
    "id": 770,
    "name": "Maria Isabelly de Brito Rodrigues",
    "matricula": "2024116TADS0020",
    "birthDate": "07/07/2006",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116TADS0020_14.jpg",
    "curso": "Tecnologia em Análise e Desenvolvimento de Sistemas - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 771,
    "name": "Maria Ivonete Gomes de Oliveira",
    "matricula": "2024216MKEM0001",
    "birthDate": "22/12/1966",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024216MKEM0001_06.jpg",
    "curso": "Especialização em Marketing e Empreendedorismo em Moda - Ser/Mod: 2"
  },
  {
    "id": 772,
    "name": "Maria Jaqueline Oliveira Souza",
    "matricula": "2023116ISADM0037",
    "birthDate": "17/07/2007",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116ISADM0037_03.jpg",
    "curso": "Técnico em Administração - Integrado Semestral - Piripiri - Ser/Mod: 5"
  },
  {
    "id": 773,
    "name": "MARIA JOSE DA SILVA NASCIMENTO",
    "matricula": "2025116UGRH0013",
    "birthDate": "17/11/1967",
    "photo": null,
    "curso": "Tecnologia em Gestão de Recursos Humanos - Ser/Mod: 1"
  },
  {
    "id": 774,
    "name": "Maria José Silva",
    "matricula": "2024216MKEM0006",
    "birthDate": "21/06/1957",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024216MKEM0006_49.jpg",
    "curso": "Especialização em Marketing e Empreendedorismo em Moda - Ser/Mod: 2"
  },
  {
    "id": 775,
    "name": "Maria Josenice da Silva Cardoso",
    "matricula": "2023216JVES0004",
    "birthDate": "29/11/1985",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023216JVES0004_39.jpg",
    "curso": "Técnico em Vestuário Integrado ao Ensino Médio - PROEJA - Ser/Mod: 4"
  },
  {
    "id": 776,
    "name": "Maria Josilene Galeno",
    "matricula": "2023216JADM0006",
    "birthDate": "03/12/1987",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023216JADM0006_54.jpg",
    "curso": "Técnico em Administração Integrado ao Ensino Médio - PROEJA - Ser/Mod: 4"
  },
  {
    "id": 777,
    "name": "Maria Juliane Sousa Pereira",
    "matricula": "2025116BADM0020",
    "birthDate": "25/08/2006",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116BADM0020_36.jpg",
    "curso": "Bacharelado em Administração - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 778,
    "name": "Maria Keilana Alves da Silva",
    "matricula": "2021116LMAT0300",
    "birthDate": "03/11/2002",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2021116LMAT0300_10.jpg",
    "curso": "Licenciatura em Matemática - Piripiri - Ser/Mod: 8"
  },
  {
    "id": 779,
    "name": "Maria keilane de Brito Paz",
    "matricula": "2023116TDSM0026",
    "birthDate": "04/04/1989",
    "photo": null,
    "curso": "Tecnologia em Design de Moda - Piripiri - Ser/Mod: 4"
  },
  {
    "id": 780,
    "name": "MARIA LARA RIBEIRO DA SILVA",
    "matricula": "2024116ISADM0042",
    "birthDate": "08/08/2007",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116ISADM0042_54.jpg",
    "curso": "Técnico em Administração - Integrado Semestral - Piripiri - Ser/Mod: 2"
  },
  {
    "id": 781,
    "name": "Maria Leticia Ferreira Santos",
    "matricula": "2022116TDSM0091",
    "birthDate": "13/02/2000",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2022116TDSM0091_28.jpg",
    "curso": "Tecnologia em Design de Moda - Piripiri - Ser/Mod: 6"
  },
  {
    "id": 782,
    "name": "Maria Leticia Marcos Cardoso",
    "matricula": "2023116LMAT0028",
    "birthDate": "08/12/2004",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116LMAT0028_10.jpg",
    "curso": "Licenciatura em Matemática - Piripiri - Ser/Mod: 4"
  },
  {
    "id": 783,
    "name": "MARIA LETICIA NASCIMENTO SOUZA",
    "matricula": "2024116ISADM0052",
    "birthDate": "25/11/2008",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116ISADM0052_10.jpg",
    "curso": "Técnico em Administração - Integrado Semestral - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 784,
    "name": "MARIA LUCIA MEDEIROS DE CARVALHO",
    "matricula": "2025116TDSM0006",
    "birthDate": "21/11/1994",
    "photo": null,
    "curso": "Tecnologia em Design de Moda - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 785,
    "name": "MARIA LUCYELLE SILVA PEREIRA",
    "matricula": "2024116ISVES0026",
    "birthDate": "21/01/2009",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116ISVES0026_38.jpg",
    "curso": "Técnico em Vestuário - Integrado Semestral - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 786,
    "name": "Maria Luiza Ferreira de Morais",
    "matricula": "2025116UGRH0016",
    "birthDate": "07/12/1998",
    "photo": null,
    "curso": "Tecnologia em Gestão de Recursos Humanos - Ser/Mod: 1"
  },
  {
    "id": 787,
    "name": "MARIA LUIZA MENESES SILVA",
    "matricula": "2025116ISADM0032",
    "birthDate": "23/11/2009",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116ISADM0032_09.jpg",
    "curso": "Técnico em Administração - Integrado Semestral - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 788,
    "name": "MARIA LUIZA VIEIRA DA SILVA",
    "matricula": "2024116ISADM0027",
    "birthDate": "06/11/2008",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116ISADM0027_06.jpg",
    "curso": "Técnico em Administração - Integrado Semestral - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 789,
    "name": "MARIA MADALENA DE SOUSA",
    "matricula": "2025116TDSM0002",
    "birthDate": "10/04/2007",
    "photo": null,
    "curso": "Tecnologia em Design de Moda - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 790,
    "name": "MARIA MARLENE SENA CLEMENTE",
    "matricula": "2024116LMAT0019",
    "birthDate": "29/10/2002",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116LMAT0019_09.jpg",
    "curso": "Licenciatura em Matemática - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 791,
    "name": "Maria Natalice de Souza Cordeiro",
    "matricula": "2024216MKEM0015",
    "birthDate": "11/03/1989",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024216MKEM0015_52.jpg",
    "curso": "Especialização em Marketing e Empreendedorismo em Moda - Ser/Mod: 2"
  },
  {
    "id": 792,
    "name": "MARIA QUEUCIVANE SOUSA COSTA",
    "matricula": "2025116ULLI0006",
    "birthDate": "21/07/1996",
    "photo": null,
    "curso": "Licenciatura em Letras Inglês - Ser/Mod: 1"
  },
  {
    "id": 793,
    "name": "MARIA RAIMUNDA DIAS PEREIRA",
    "matricula": "2025116LMAT0039",
    "birthDate": "25/10/1988",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116LMAT0039_51.jpg",
    "curso": "Licenciatura em Matemática - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 794,
    "name": "MARIA RAYSA DA SILVA BONFIM",
    "matricula": "2024116BADM0011",
    "birthDate": "13/06/2003",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116BADM0011_11.jpg",
    "curso": "Bacharelado em Administração - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 795,
    "name": "Maria Roberta da Silva Ribeiro",
    "matricula": "2023116ISVES0001",
    "birthDate": "02/10/2007",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116ISVES0001_15.jpg",
    "curso": "Técnico em Vestuário - Integrado Semestral - Piripiri - Ser/Mod: 5"
  },
  {
    "id": 796,
    "name": "Maria Salete Lucena de Andrade",
    "matricula": "2024216JADM0037",
    "birthDate": "22/04/1989",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024216JADM0037_11.jpg",
    "curso": "Técnico em Administração Integrado ao Ensino Médio - PROEJA - Ser/Mod: 2"
  },
  {
    "id": 797,
    "name": "Maria Sandra de Oliveira Pereira",
    "matricula": "2023116TDSM0015",
    "birthDate": "31/12/2001",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116TDSM0015_08.jpg",
    "curso": "Tecnologia em Design de Moda - Piripiri - Ser/Mod: 4"
  },
  {
    "id": 798,
    "name": "MARIA SELMA NERES DA CUNHA",
    "matricula": "2025116ULLI0015",
    "birthDate": "25/10/1983",
    "photo": null,
    "curso": "Licenciatura em Letras Inglês - Ser/Mod: 1"
  },
  {
    "id": 799,
    "name": "Maria Silmara Silva Lima",
    "matricula": "2024216MADM0007",
    "birthDate": "16/06/2005",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024216MADM0007_09.jpg",
    "curso": "Técnico em Administração - Concomitante/Subsequente - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 800,
    "name": "Maria Steffany da Silva Viana",
    "matricula": "2020116TDSM0064",
    "birthDate": "15/09/2001",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2020116TDSM0064_08.jpg",
    "curso": "Tecnologia em Design de Moda - Piripiri - Ser/Mod: 6"
  },
  {
    "id": 801,
    "name": "MARIA TAUANA BORGES DA SILVA MOREIRA",
    "matricula": "2025116ULLI0016",
    "birthDate": "01/01/1991",
    "photo": null,
    "curso": "Licenciatura em Letras Inglês - Ser/Mod: 1"
  },
  {
    "id": 802,
    "name": "MARIA TERESA RAULINO BARROSO",
    "matricula": "2024116ISADM0062",
    "birthDate": "27/07/2008",
    "photo": null,
    "curso": "Técnico em Administração - Integrado Semestral - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 803,
    "name": "Maria Thicielly da Silva Farias",
    "matricula": "2025116ISADM0011",
    "birthDate": "08/04/2009",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116ISADM0011_33.jpg",
    "curso": "Técnico em Administração - Integrado Semestral - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 804,
    "name": "Maria Vanessa Guimarães dos Santos",
    "matricula": "2025116LMAT0011",
    "birthDate": "17/02/2007",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116LMAT0011_33.jpg",
    "curso": "Licenciatura em Matemática - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 805,
    "name": "MARIA VITORIA DA SILVA ARAUJO",
    "matricula": "2024116TADS0037",
    "birthDate": "31/07/2005",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116TADS0037_52.jpg",
    "curso": "Tecnologia em Análise e Desenvolvimento de Sistemas - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 806,
    "name": "Maria Vitória de Sousa Silva",
    "matricula": "2023116ISINF0018",
    "birthDate": "13/11/2007",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116ISINF0018_45.jpg",
    "curso": "Técnico em Informática - Integrado Semestral - Piripiri - Ser/Mod: 5"
  },
  {
    "id": 807,
    "name": "MARIA VITORIA LIVRAMENTO FEITOSA",
    "matricula": "2024116ISINF0053",
    "birthDate": "06/12/2008",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116ISINF0053_22.jpg",
    "curso": "Técnico em Informática - Integrado Semestral - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 808,
    "name": "Maria Yasmin Oliveira Mélo",
    "matricula": "2024116TADS0014",
    "birthDate": "12/11/2003",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116TADS0014_52.jpg",
    "curso": "Tecnologia em Análise e Desenvolvimento de Sistemas - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 809,
    "name": "Mariana de Araújo Alves Ferreira",
    "matricula": "2023116ISINF0049",
    "birthDate": "03/07/2006",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116ISINF0049_25.jpg",
    "curso": "Técnico em Informática - Integrado Semestral - Piripiri - Ser/Mod: 5"
  },
  {
    "id": 810,
    "name": "MARIANA DE CARVALHO OLIVEIRA",
    "matricula": "2025116LMAT0004",
    "birthDate": "08/05/2006",
    "photo": null,
    "curso": "Licenciatura em Matemática - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 811,
    "name": "Mariana de Lima Rodrigues",
    "matricula": "2023116ISINF0063",
    "birthDate": "08/01/2008",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116ISINF0063_21.jpg",
    "curso": "Técnico em Informática - Integrado Semestral - Piripiri - Ser/Mod: 5"
  },
  {
    "id": 812,
    "name": "Mariana Lima da Silva",
    "matricula": "2023116LMAT0027",
    "birthDate": "04/04/2005",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116LMAT0027_48.jpg",
    "curso": "Licenciatura em Matemática - Piripiri - Ser/Mod: 5"
  },
  {
    "id": 813,
    "name": "Mariana Lima Monteiro",
    "matricula": "2024116LPIN0045",
    "birthDate": "08/03/1994",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116LPIN0045_21.jpg",
    "curso": "Licenciatura Intercultural Indígena - CAPIR - Ser/Mod: 1"
  },
  {
    "id": 814,
    "name": "MARIANA LINS CARVALHO DA SILVA",
    "matricula": "2024116ISADM0054",
    "birthDate": "14/10/2008",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116ISADM0054_15.jpg",
    "curso": "Técnico em Administração - Integrado Semestral - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 815,
    "name": "Mariana Melo Medeiros",
    "matricula": "2024216MADM0005",
    "birthDate": "30/04/2000",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024216MADM0005_22.jpg",
    "curso": "Técnico em Administração - Concomitante/Subsequente - Piripiri - Ser/Mod: 2"
  },
  {
    "id": 816,
    "name": "Mariane da Costa Mourão",
    "matricula": "2025116UGRH0030",
    "birthDate": "23/06/1983",
    "photo": null,
    "curso": "Tecnologia em Gestão de Recursos Humanos - Ser/Mod: 1"
  },
  {
    "id": 817,
    "name": "MARIANE DA SILVA XIMENES",
    "matricula": "2025116BADM0014",
    "birthDate": "29/05/2006",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116BADM0014_27.jpg",
    "curso": "Bacharelado em Administração - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 818,
    "name": "Marina Damasceno Silva",
    "matricula": "2025116LMAT0035",
    "birthDate": "10/03/1997",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116LMAT0035_12.jpg",
    "curso": "Licenciatura em Matemática - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 819,
    "name": "Marina Sousa Cavalcante",
    "matricula": "2022116TDSM0105",
    "birthDate": "17/03/2003",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2022116TDSM0105_25.jpg",
    "curso": "Tecnologia em Design de Moda - Piripiri - Ser/Mod: 6"
  },
  {
    "id": 820,
    "name": "Marisa de Oliveira Andrade",
    "matricula": "2025116TDSM0022",
    "birthDate": "12/11/2005",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116TDSM0022_36.jpg",
    "curso": "Tecnologia em Design de Moda - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 821,
    "name": "MARISTELLA DA SILVA VIANA",
    "matricula": "2025116BADM0028",
    "birthDate": "14/07/2006",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116BADM0028_24.jpg",
    "curso": "Bacharelado em Administração - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 822,
    "name": "Marlysandra Machado Dias",
    "matricula": "2024216MKEM0010",
    "birthDate": "29/12/2000",
    "photo": null,
    "curso": "Especialização em Marketing e Empreendedorismo em Moda - Ser/Mod: 1"
  },
  {
    "id": 823,
    "name": "Mateus Alves de Sousa",
    "matricula": "2022116BADM0301",
    "birthDate": "01/08/2003",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2022116BADM0301_30.jpg",
    "curso": "Bacharelado em Administração - Piripiri - Ser/Mod: 6"
  },
  {
    "id": 824,
    "name": "MATEUS DA SILVA MEDEIROS",
    "matricula": "2025116ISINF0021",
    "birthDate": "21/04/2009",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116ISINF0021_02.jpg",
    "curso": "Técnico em Informática - Integrado Semestral - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 825,
    "name": "Mateus de Araujo",
    "matricula": "2025116TADS0039",
    "birthDate": "10/05/2006",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116TADS0039_25.jpg",
    "curso": "Tecnologia em Análise e Desenvolvimento de Sistemas - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 826,
    "name": "Mateus de Sousa Pinheiro",
    "matricula": "2021116LMAT0050",
    "birthDate": "11/03/2001",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2021116LMAT0050_53.jpg",
    "curso": "Licenciatura em Matemática - Piripiri - Ser/Mod: 9"
  },
  {
    "id": 827,
    "name": "Mateus Flavio de Carvalho Araujo",
    "matricula": "2022116BADM0174",
    "birthDate": "23/01/2002",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2022116BADM0174_53.jpg",
    "curso": "Bacharelado em Administração - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 828,
    "name": "Matheus Abraão da Costa Nascimento",
    "matricula": "2025116BADM0011",
    "birthDate": "11/11/2006",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116BADM0011_22.jpg",
    "curso": "Bacharelado em Administração - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 829,
    "name": "Matheus Fernandes de Meneses",
    "matricula": "2024116ISINF0061",
    "birthDate": "22/09/2008",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116ISINF0061_53.jpg",
    "curso": "Técnico em Informática - Integrado Semestral - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 830,
    "name": "Matheus Henrique de Sousa Ferreira",
    "matricula": "2022116LMAT0161",
    "birthDate": "15/04/2004",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2022116LMAT0161_55.jpg",
    "curso": "Licenciatura em Matemática - Piripiri - Ser/Mod: 6"
  },
  {
    "id": 831,
    "name": "Matheus Henrique Fontenele Vieira",
    "matricula": "2025116BADM0005",
    "birthDate": "31/05/2006",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116BADM0005_59.jpg",
    "curso": "Bacharelado em Administração - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 832,
    "name": "Matheus Rodrigues Silva",
    "matricula": "2023116ISINF0031",
    "birthDate": "28/08/2007",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116ISINF0031_36.jpg",
    "curso": "Técnico em Informática - Integrado Semestral - Piripiri - Ser/Mod: 5"
  },
  {
    "id": 833,
    "name": "MATUSALEN COSTA ALVES",
    "matricula": "2024116TADS0005",
    "birthDate": "04/09/2005",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116TADS0005_20.jpg",
    "curso": "Tecnologia em Análise e Desenvolvimento de Sistemas - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 834,
    "name": "MAURA ALMEIDA RÊGO",
    "matricula": "2024116LPIN0007",
    "birthDate": "28/11/1973",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116LPIN0007_29.jpg",
    "curso": "Licenciatura Intercultural Indígena - CAPIR - Ser/Mod: 1"
  },
  {
    "id": 835,
    "name": "Mauro Jose dos Santos",
    "matricula": "2021116LMAT0068",
    "birthDate": "11/05/1994",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2021116LMAT0068_56.jpg",
    "curso": "Licenciatura em Matemática - Piripiri - Ser/Mod: 7"
  },
  {
    "id": 836,
    "name": "MAXYMMUS AQUILES FREITAS BARROSO",
    "matricula": "2024116ISADM0045",
    "birthDate": "07/02/2009",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116ISADM0045_09.jpg",
    "curso": "Técnico em Administração - Integrado Semestral - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 837,
    "name": "Mayna Leticia Brito Sousa",
    "matricula": "2021116BADM0143",
    "birthDate": "17/03/1999",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2021116BADM0143_01.jpg",
    "curso": "Bacharelado em Administração - Piripiri - Ser/Mod: 8"
  },
  {
    "id": 838,
    "name": "MAYRA LETICIA OLIVEIRA DA SILVA",
    "matricula": "2024116ISINF0048",
    "birthDate": "10/12/2008",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116ISINF0048_17.jpg",
    "curso": "Técnico em Informática - Integrado Semestral - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 839,
    "name": "MAYRA SAMY ARAUJO ROSA",
    "matricula": "2024116BADM0012",
    "birthDate": "06/04/2005",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116BADM0012_03.jpg",
    "curso": "Bacharelado em Administração - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 840,
    "name": "MAYSA CRISTINE DE MELO SILVA",
    "matricula": "2024116ISINF0006",
    "birthDate": "21/12/2008",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116ISINF0006_18.jpg",
    "curso": "Técnico em Informática - Integrado Semestral - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 841,
    "name": "Maysa de Araújo Cunha",
    "matricula": "2024116LPIN0049",
    "birthDate": "08/11/2004",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116LPIN0049_23.jpg",
    "curso": "Licenciatura Intercultural Indígena - CAPIR - Ser/Mod: 1"
  },
  {
    "id": 842,
    "name": "Maysa Ellen da Silva Araújo",
    "matricula": "2023116ISVES0019",
    "birthDate": "22/12/2007",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116ISVES0019_47.jpg",
    "curso": "Técnico em Vestuário - Integrado Semestral - Piripiri - Ser/Mod: 5"
  },
  {
    "id": 843,
    "name": "MAYSA STEFANY SOUSA ROCHA",
    "matricula": "2024116ISVES0017",
    "birthDate": "09/01/2009",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116ISVES0017_09.jpg",
    "curso": "Técnico em Vestuário - Integrado Semestral - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 844,
    "name": "MELCA DE SOUZA NASCIMENTO",
    "matricula": "2025116BADM0017",
    "birthDate": "05/04/2006",
    "photo": null,
    "curso": "Bacharelado em Administração - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 845,
    "name": "MESSIAS PEREIRA DE SOUSA",
    "matricula": "2024116LPIN0040",
    "birthDate": "10/11/2001",
    "photo": null,
    "curso": "Licenciatura Intercultural Indígena - CAPIR - Ser/Mod: 1"
  },
  {
    "id": 846,
    "name": "Micael Cardoso Reis",
    "matricula": "2025116TADS0041",
    "birthDate": "13/08/2006",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116TADS0041_41.jpg",
    "curso": "Tecnologia em Análise e Desenvolvimento de Sistemas - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 847,
    "name": "Michele Ribeiro de Oliveira",
    "matricula": "2024216MKEM0017",
    "birthDate": "31/03/2000",
    "photo": null,
    "curso": "Especialização em Marketing e Empreendedorismo em Moda - Ser/Mod: 1"
  },
  {
    "id": 848,
    "name": "Michele Vitória de Sousa Silva",
    "matricula": "2023116ISVES0002",
    "birthDate": "28/11/2007",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116ISVES0002_11.jpg",
    "curso": "Técnico em Vestuário - Integrado Semestral - Piripiri - Ser/Mod: 5"
  },
  {
    "id": 849,
    "name": "Michelly de Moura Passos",
    "matricula": "2023116TDSM0012",
    "birthDate": "17/01/2005",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116TDSM0012_39.jpg",
    "curso": "Tecnologia em Design de Moda - Piripiri - Ser/Mod: 4"
  },
  {
    "id": 850,
    "name": "Mikael Wallyson da Silva Souza",
    "matricula": "2025116LMAT0020",
    "birthDate": "28/08/2006",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116LMAT0020_52.jpg",
    "curso": "Licenciatura em Matemática - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 851,
    "name": "Mikaele Araújo da Silva",
    "matricula": "2023116ISVES0016",
    "birthDate": "03/06/2007",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116ISVES0016_31.jpg",
    "curso": "Técnico em Vestuário - Integrado Semestral - Piripiri - Ser/Mod: 5"
  },
  {
    "id": 852,
    "name": "Mikaelle Raulino Barroso",
    "matricula": "2025116TADS0005",
    "birthDate": "22/03/1981",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116TADS0005_26.jpg",
    "curso": "Tecnologia em Análise e Desenvolvimento de Sistemas - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 853,
    "name": "Mikaely Avelino de Souza",
    "matricula": "2024216MKEM0020",
    "birthDate": "13/08/1990",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024216MKEM0020_29.jpg",
    "curso": "Especialização em Marketing e Empreendedorismo em Moda - Ser/Mod: 1"
  },
  {
    "id": 854,
    "name": "Mikaely Cardoso Reis",
    "matricula": "2024116BADM0006",
    "birthDate": "09/06/2005",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116BADM0006_25.jpg",
    "curso": "Bacharelado em Administração - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 855,
    "name": "Milca Emanuely Carvalho Sousa",
    "matricula": "2023116ISADM0058",
    "birthDate": "17/08/2006",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116ISADM0058_14.jpg",
    "curso": "Técnico em Administração - Integrado Semestral - Piripiri - Ser/Mod: 5"
  },
  {
    "id": 856,
    "name": "MILTON CARDOSO MAGALHAES JUNIOR",
    "matricula": "2025116ULLI0014",
    "birthDate": "03/05/1983",
    "photo": null,
    "curso": "Licenciatura em Letras Inglês - Ser/Mod: 1"
  },
  {
    "id": 857,
    "name": "Miriâ de Jesus Sousa Santos",
    "matricula": "2024116ISVES0015",
    "birthDate": "07/04/2008",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116ISVES0015_25.jpg",
    "curso": "Técnico em Vestuário - Integrado Semestral - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 858,
    "name": "MIRIELLI RAVENA DE ARAUJO SILVA",
    "matricula": "2025116TADS0035",
    "birthDate": "28/12/2005",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116TADS0035_51.jpg",
    "curso": "Tecnologia em Análise e Desenvolvimento de Sistemas - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 859,
    "name": "Moema Maria Oliveira Ferreira",
    "matricula": "2023116TDSM0010",
    "birthDate": "11/07/1993",
    "photo": null,
    "curso": "Tecnologia em Design de Moda - Piripiri - Ser/Mod: 4"
  },
  {
    "id": 860,
    "name": "MOISES BASTOS DE SOUSA",
    "matricula": "2025116TADS0030",
    "birthDate": "05/06/2006",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116TADS0030_01.jpg",
    "curso": "Tecnologia em Análise e Desenvolvimento de Sistemas - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 861,
    "name": "Moisés da Silva Araújo",
    "matricula": "2022216BADM0002",
    "birthDate": "08/01/1995",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2022216BADM0002_58.jpg",
    "curso": "Bacharelado em Administração - Piripiri - Ser/Mod: 8"
  },
  {
    "id": 862,
    "name": "Moisés Silva Urquisa",
    "matricula": "2024116ISINF0065",
    "birthDate": "20/11/2008",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116ISINF0065_39.jpg",
    "curso": "Técnico em Informática - Integrado Semestral - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 863,
    "name": "Mônica Gisele da Silva",
    "matricula": "2023116ISVES0011",
    "birthDate": "15/02/2008",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116ISVES0011_22.jpg",
    "curso": "Técnico em Vestuário - Integrado Semestral - Piripiri - Ser/Mod: 5"
  },
  {
    "id": 864,
    "name": "Morgana Maria da Silva Araujo",
    "matricula": "2024216MKEM0003",
    "birthDate": "19/05/2002",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024216MKEM0003_44.jpg",
    "curso": "Especialização em Marketing e Empreendedorismo em Moda - Ser/Mod: 2"
  },
  {
    "id": 865,
    "name": "Nadia Lima Neves",
    "matricula": "2020116BADM0422",
    "birthDate": "20/11/1996",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2020116BADM0422_20.jpg",
    "curso": "Bacharelado em Administração - Piripiri - Ser/Mod: 9"
  },
  {
    "id": 866,
    "name": "Naiara Alves do Nascimento",
    "matricula": "2024216MADM0001",
    "birthDate": "19/05/1991",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024216MADM0001_46.jpg",
    "curso": "Técnico em Administração - Concomitante/Subsequente - Piripiri - Ser/Mod: 2"
  },
  {
    "id": 867,
    "name": "Naiara da Silva Araújo",
    "matricula": "2023116LMAT0035",
    "birthDate": "11/01/2003",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116LMAT0035_29.jpg",
    "curso": "Licenciatura em Matemática - Piripiri - Ser/Mod: 5"
  },
  {
    "id": 868,
    "name": "Naiara Medeiros Uchôa",
    "matricula": "2021116LMAT0319",
    "birthDate": "20/06/2003",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2021116LMAT0319_27.jpg",
    "curso": "Licenciatura em Matemática - Piripiri - Ser/Mod: 8"
  },
  {
    "id": 869,
    "name": "Naiara Rocha Oliveira",
    "matricula": "2023116TDSM0022",
    "birthDate": "21/01/1997",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116TDSM0022_33.jpg",
    "curso": "Tecnologia em Design de Moda - Piripiri - Ser/Mod: 4"
  },
  {
    "id": 870,
    "name": "Nainara do Nascimento Santos",
    "matricula": "2020116LMAT0304",
    "birthDate": "11/03/1996",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2020116LMAT0304_26.jpg",
    "curso": "Licenciatura em Matemática - Piripiri - Ser/Mod: 9"
  },
  {
    "id": 871,
    "name": "Naisa da Silva Brito",
    "matricula": "2023116LMAT0041",
    "birthDate": "23/06/1999",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116LMAT0041_05.jpg",
    "curso": "Licenciatura em Matemática - Piripiri - Ser/Mod: 5"
  },
  {
    "id": 872,
    "name": "NALANDA KELLE SILVA CRUZ",
    "matricula": "2024116BADM0037",
    "birthDate": "05/01/2006",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116BADM0037_49.jpg",
    "curso": "Bacharelado em Administração - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 873,
    "name": "NARA MONYZE CARDOSO OLIVEIRA",
    "matricula": "2025116ULLI0002",
    "birthDate": "12/11/1993",
    "photo": null,
    "curso": "Licenciatura em Letras Inglês - Ser/Mod: 1"
  },
  {
    "id": 874,
    "name": "NATALIA MARIA DA SILVA",
    "matricula": "2024216MADM0009",
    "birthDate": "03/08/1984",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024216MADM0009_00.jpg",
    "curso": "Técnico em Administração - Concomitante/Subsequente - Piripiri - Ser/Mod: 2"
  },
  {
    "id": 875,
    "name": "Natalino dos Santos Freitas",
    "matricula": "2019118220340",
    "birthDate": "25/12/1994",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2019118220340_44.jpg",
    "curso": "Licenciatura em Matemática - Piripiri - Ser/Mod: 9"
  },
  {
    "id": 876,
    "name": "Nathália Moraes Viana",
    "matricula": "2024116TADS0043",
    "birthDate": "16/12/2003",
    "photo": null,
    "curso": "Tecnologia em Análise e Desenvolvimento de Sistemas - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 877,
    "name": "NATIELLE QUARESMA DA SILVA",
    "matricula": "2024116LMAT0029",
    "birthDate": "13/03/2006",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116LMAT0029_59.jpg",
    "curso": "Licenciatura em Matemática - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 878,
    "name": "Naum da Silva Fernandes",
    "matricula": "2024216JADM0029",
    "birthDate": "18/11/2004",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024216JADM0029_43.jpg",
    "curso": "Técnico em Administração Integrado ao Ensino Médio - PROEJA - Ser/Mod: 2"
  },
  {
    "id": 879,
    "name": "Nayana Rafaela Medeiros Melo",
    "matricula": "2024116LPIN0041",
    "birthDate": "28/07/2003",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116LPIN0041_22.jpg",
    "curso": "Licenciatura Intercultural Indígena - CAPIR - Ser/Mod: 1"
  },
  {
    "id": 880,
    "name": "Nayara Brenda Meneses Silva",
    "matricula": "2020116LMAT0339",
    "birthDate": "29/08/2000",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2020116LMAT0339_09.jpg",
    "curso": "Licenciatura em Matemática - Piripiri - Ser/Mod: 9"
  },
  {
    "id": 881,
    "name": "Nayara Úllima de Melo Barros",
    "matricula": "2024116LMAT0013",
    "birthDate": "02/06/2005",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116LMAT0013_24.jpg",
    "curso": "Licenciatura em Matemática - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 882,
    "name": "NAYLANE MARTINS SANTOS",
    "matricula": "2024116ISVES0031",
    "birthDate": "28/01/2009",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116ISVES0031_13.jpg",
    "curso": "Técnico em Vestuário - Integrado Semestral - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 883,
    "name": "NAYRA MARIA DE SOUSA NASCIMENTO",
    "matricula": "2024116ISINF0038",
    "birthDate": "19/05/2008",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116ISINF0038_38.jpg",
    "curso": "Técnico em Informática - Integrado Semestral - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 884,
    "name": "Neiliane dos Santos Silva",
    "matricula": "2023116ISVES0010",
    "birthDate": "14/03/2007",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116ISVES0010_40.jpg",
    "curso": "Técnico em Vestuário - Integrado Semestral - Piripiri - Ser/Mod: 5"
  },
  {
    "id": 885,
    "name": "NEYLON MARDEY DA SILVA MELO",
    "matricula": "2025116LMAT0030",
    "birthDate": "17/01/2005",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116LMAT0030_36.jpg",
    "curso": "Licenciatura em Matemática - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 886,
    "name": "NICOLAS GAHEL GOMES DE MELO COSTA",
    "matricula": "2025116ISVES0016",
    "birthDate": "04/11/2009",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116ISVES0016_21.jpg",
    "curso": "Técnico em Vestuário - Integrado Semestral - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 887,
    "name": "Nícolas Moraes Viana",
    "matricula": "2024116TADS0042",
    "birthDate": "20/02/2006",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116TADS0042_58.jpg",
    "curso": "Tecnologia em Análise e Desenvolvimento de Sistemas - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 888,
    "name": "NICOLE SOFIA SOUZA DA SILVA",
    "matricula": "2025116ISVES0008",
    "birthDate": "23/11/2009",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116ISVES0008_27.jpg",
    "curso": "Técnico em Vestuário - Integrado Semestral - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 889,
    "name": "NICOLY APARECIDA ALVES DE SOUSA",
    "matricula": "2024116ISVES0013",
    "birthDate": "18/04/2008",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116ISVES0013_01.jpg",
    "curso": "Técnico em Vestuário - Integrado Semestral - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 890,
    "name": "Niely Souza dos Santos",
    "matricula": "2023116ISADM0035",
    "birthDate": "03/03/2008",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116ISADM0035_27.jpg",
    "curso": "Técnico em Administração - Integrado Semestral - Piripiri - Ser/Mod: 5"
  },
  {
    "id": 891,
    "name": "Nilson Rodrigues Borges de Sousa",
    "matricula": "2025116TADS0021",
    "birthDate": "17/04/2004",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116TADS0021_36.jpg",
    "curso": "Tecnologia em Análise e Desenvolvimento de Sistemas - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 892,
    "name": "NOEMI BATISTA DOS SANTOS",
    "matricula": "2024116ISVES0023",
    "birthDate": "10/07/2007",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116ISVES0023_16.jpg",
    "curso": "Técnico em Vestuário - Integrado Semestral - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 893,
    "name": "Nylemar Gonçalves do Nascimento",
    "matricula": "2018118240262",
    "birthDate": "23/08/1968",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2018118240262_12.jpg",
    "curso": "Tecnologia em Design de Moda - Piripiri - Ser/Mod: 6"
  },
  {
    "id": 894,
    "name": "Osmar Pedrosa de Sousa Junior",
    "matricula": "2021116BADM0186",
    "birthDate": "03/07/2001",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2021116BADM0186_47.jpg",
    "curso": "Bacharelado em Administração - Piripiri - Ser/Mod: 8"
  },
  {
    "id": 895,
    "name": "Ozanan Cruz da Rocha",
    "matricula": "2021116LMAT0254",
    "birthDate": "07/05/1981",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2021116LMAT0254_36.jpg",
    "curso": "Licenciatura em Matemática - Piripiri - Ser/Mod: 8"
  },
  {
    "id": 896,
    "name": "Pablo Henrique Gomes de Andrade",
    "matricula": "2023116ISADM0008",
    "birthDate": "11/03/2008",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116ISADM0008_35.jpg",
    "curso": "Técnico em Administração - Integrado Semestral - Piripiri - Ser/Mod: 5"
  },
  {
    "id": 897,
    "name": "PABLO VINICIUS SALES DE ARAUJO",
    "matricula": "2024116TADS0018",
    "birthDate": "17/09/2001",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116TADS0018_38.jpg",
    "curso": "Tecnologia em Análise e Desenvolvimento de Sistemas - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 898,
    "name": "Paloma dos Anjos Silva",
    "matricula": "2025116BADM0007",
    "birthDate": "14/10/2006",
    "photo": null,
    "curso": "Bacharelado em Administração - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 899,
    "name": "PAULO BARROS DA COSTA",
    "matricula": "2024116LPIN0033",
    "birthDate": "06/10/1995",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116LPIN0033_44.jpg",
    "curso": "Licenciatura Intercultural Indígena - CAPIR - Ser/Mod: 1"
  },
  {
    "id": 900,
    "name": "Paulo Eduardo de Souza Silva",
    "matricula": "2022116BADM0140",
    "birthDate": "07/06/2005",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2022116BADM0140_52.jpg",
    "curso": "Bacharelado em Administração - Piripiri - Ser/Mod: 6"
  },
  {
    "id": 901,
    "name": "Paulo Felipe Cardoso",
    "matricula": "2024116TDSM0018",
    "birthDate": "06/07/1990",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116TDSM0018_25.jpg",
    "curso": "Tecnologia em Design de Moda - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 902,
    "name": "Paulo Gomes Pereira",
    "matricula": "2024216JADM0001",
    "birthDate": "08/01/1966",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024216JADM0001_42.jpg",
    "curso": "Técnico em Administração Integrado ao Ensino Médio - PROEJA - Ser/Mod: 2"
  },
  {
    "id": 903,
    "name": "PAULO HENRIQUE SALES LIMA",
    "matricula": "2024116TADS0017",
    "birthDate": "28/03/2004",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116TADS0017_59.jpg",
    "curso": "Tecnologia em Análise e Desenvolvimento de Sistemas - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 904,
    "name": "Paulo Henrique Urquiza Oliveira",
    "matricula": "2023116ISINF0005",
    "birthDate": "15/01/2008",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116ISINF0005_43.jpg",
    "curso": "Técnico em Informática - Integrado Semestral - Piripiri - Ser/Mod: 5"
  },
  {
    "id": 905,
    "name": "PEDRO FILLIPE DA SILVA NASCIMENTO",
    "matricula": "2025116ISINF0024",
    "birthDate": "12/11/2009",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116ISINF0024_21.jpg",
    "curso": "Técnico em Informática - Integrado Semestral - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 906,
    "name": "Pedro Henrique Araujo Pereira",
    "matricula": "2019118220316",
    "birthDate": "12/03/2001",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2019118220316_49.jpg",
    "curso": "Licenciatura em Matemática - Piripiri - Ser/Mod: 8"
  },
  {
    "id": 907,
    "name": "PEDRO HENRIQUE LIMA DE SOUSA",
    "matricula": "2024116BADM0008",
    "birthDate": "09/10/2005",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116BADM0008_56.jpg",
    "curso": "Bacharelado em Administração - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 908,
    "name": "PEDRO HENRIQUE PAIVA DOS SANTOS",
    "matricula": "2025116ISADM0037",
    "birthDate": "01/09/2009",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116ISADM0037_27.jpg",
    "curso": "Técnico em Administração - Integrado Semestral - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 909,
    "name": "PEDRO HENRIQUE VALENTINO SILVA SOUSA",
    "matricula": "2024116TADS0013",
    "birthDate": "20/04/2005",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116TADS0013_12.jpg",
    "curso": "Tecnologia em Análise e Desenvolvimento de Sistemas - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 910,
    "name": "PEDRO RAMON SOUSA DO CARMO",
    "matricula": "2025116ULLI0017",
    "birthDate": "06/07/2006",
    "photo": null,
    "curso": "Licenciatura em Letras Inglês - Ser/Mod: 1"
  },
  {
    "id": 911,
    "name": "Pedro Silva Coutinho",
    "matricula": "2022116LMAT0218",
    "birthDate": "11/04/2004",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2022116LMAT0218_33.jpg",
    "curso": "Licenciatura em Matemática - Piripiri - Ser/Mod: 6"
  },
  {
    "id": 912,
    "name": "PEDRO VICTOR CUNHA DE SOUSA",
    "matricula": "2025116ISINF0032",
    "birthDate": "24/09/2009",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116ISINF0032_57.jpg",
    "curso": "Técnico em Informática - Integrado Semestral - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 913,
    "name": "Pedro Vitor da Silva Isaias",
    "matricula": "2024216MADM0018",
    "birthDate": "16/08/2003",
    "photo": null,
    "curso": "Técnico em Administração - Concomitante/Subsequente - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 914,
    "name": "PETRUS SILVA FIRMINO",
    "matricula": "2025116ISINF0025",
    "birthDate": "01/04/2010",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116ISINF0025_51.jpg",
    "curso": "Técnico em Informática - Integrado Semestral - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 915,
    "name": "Phelipe Matteus Souza Silva",
    "matricula": "2023116ISVES0020",
    "birthDate": "17/09/2007",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116ISVES0020_52.jpg",
    "curso": "Técnico em Vestuário - Integrado Semestral - Piripiri - Ser/Mod: 5"
  },
  {
    "id": 916,
    "name": "Rafael Alves Feitoza",
    "matricula": "2020116BADM0309",
    "birthDate": "02/04/1997",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2020116BADM0309_50.jpg",
    "curso": "Bacharelado em Administração - Piripiri - Ser/Mod: 9"
  },
  {
    "id": 917,
    "name": "RAFAEL EUSTÁQUIO DOS SANTOS",
    "matricula": "2024216JADM0006",
    "birthDate": "11/07/1991",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024216JADM0006_14.jpg",
    "curso": "Técnico em Administração Integrado ao Ensino Médio - PROEJA - Ser/Mod: 2"
  },
  {
    "id": 918,
    "name": "Rafaela Sara de Souza",
    "matricula": "2020116LMAT0371",
    "birthDate": "07/10/2001",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2020116LMAT0371_49.jpg",
    "curso": "Licenciatura em Matemática - Piripiri - Ser/Mod: 9"
  },
  {
    "id": 919,
    "name": "RAFAELLE ARAUJO SAMPAIO",
    "matricula": "2024116ISINF0012",
    "birthDate": "09/01/2009",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116ISINF0012_24.jpg",
    "curso": "Técnico em Informática - Integrado Semestral - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 920,
    "name": "Railan Douglas Lopes Lima",
    "matricula": "2023116ISINF0021",
    "birthDate": "31/01/2008",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116ISINF0021_11.jpg",
    "curso": "Técnico em Informática - Integrado Semestral - Piripiri - Ser/Mod: 5"
  },
  {
    "id": 921,
    "name": "RAILSON DE ARAUJO FERREIRA",
    "matricula": "2025116TADS0032",
    "birthDate": "23/08/2006",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116TADS0032_08.jpg",
    "curso": "Tecnologia em Análise e Desenvolvimento de Sistemas - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 922,
    "name": "Raimundo Evaldo Sousa Barros Junior",
    "matricula": "2023116TDSM0004",
    "birthDate": "26/08/2002",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116TDSM0004_04.jpg",
    "curso": "Tecnologia em Design de Moda - Piripiri - Ser/Mod: 4"
  },
  {
    "id": 923,
    "name": "Raira Reis Silva",
    "matricula": "2025116TADS0006",
    "birthDate": "28/04/2000",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116TADS0006_25.jpg",
    "curso": "Tecnologia em Análise e Desenvolvimento de Sistemas - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 924,
    "name": "RAISSA NICOLE NASCIMENTO SAMPAIO",
    "matricula": "2024116ISINF0001",
    "birthDate": "06/05/2008",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116ISINF0001_09.jpg",
    "curso": "Técnico em Informática - Integrado Semestral - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 925,
    "name": "RAIZIA OLIVEIRA COSTA",
    "matricula": "2024116ISADM0004",
    "birthDate": "15/05/2008",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116ISADM0004_26.jpg",
    "curso": "Técnico em Administração - Integrado Semestral - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 926,
    "name": "RANE KELY NASCIMENTO DE SOUSA",
    "matricula": "2024116LPIN0013",
    "birthDate": "17/03/2006",
    "photo": null,
    "curso": "Licenciatura Intercultural Indígena - CAPIR - Ser/Mod: 1"
  },
  {
    "id": 927,
    "name": "Rany Karoline da Silva",
    "matricula": "2023116TDSM0025",
    "birthDate": "11/11/2004",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116TDSM0025_55.jpg",
    "curso": "Tecnologia em Design de Moda - Piripiri - Ser/Mod: 4"
  },
  {
    "id": 928,
    "name": "Raquel Maria Nunes Costa",
    "matricula": "2024216JADM0027",
    "birthDate": "16/04/1982",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024216JADM0027_06.jpg",
    "curso": "Técnico em Administração Integrado ao Ensino Médio - PROEJA - Ser/Mod: 2"
  },
  {
    "id": 929,
    "name": "Raquel Silva dos Santos",
    "matricula": "2019118220430",
    "birthDate": "20/02/1999",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2019118220430_12.jpg",
    "curso": "Licenciatura em Matemática - Piripiri - Ser/Mod: 9"
  },
  {
    "id": 930,
    "name": "RAUAN DOS SANTOS BANDEIRA",
    "matricula": "2024116TADS0010",
    "birthDate": "18/11/2005",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116TADS0010_59.jpg",
    "curso": "Tecnologia em Análise e Desenvolvimento de Sistemas - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 931,
    "name": "Raul da Silva",
    "matricula": "2024116LMAT0037",
    "birthDate": "19/10/1990",
    "photo": null,
    "curso": "Licenciatura em Matemática - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 932,
    "name": "Rayane Rodrigues Silva",
    "matricula": "2023116LMAT0010",
    "birthDate": "20/12/1994",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116LMAT0010_42.jpg",
    "curso": "Licenciatura em Matemática - Piripiri - Ser/Mod: 5"
  },
  {
    "id": 933,
    "name": "RAYELE GOMES DE MACEDO",
    "matricula": "2025116BADM0025",
    "birthDate": "24/08/2005",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116BADM0025_28.jpg",
    "curso": "Bacharelado em Administração - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 934,
    "name": "Rayrla Francianne Sampaio de Sousa",
    "matricula": "2023116ISADM0055",
    "birthDate": "16/03/2007",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116ISADM0055_13.jpg",
    "curso": "Técnico em Administração - Integrado Semestral - Piripiri - Ser/Mod: 5"
  },
  {
    "id": 935,
    "name": "Rebecca Alves da Silva",
    "matricula": "2024116BADM0020",
    "birthDate": "12/05/2005",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116BADM0020_49.jpg",
    "curso": "Bacharelado em Administração - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 936,
    "name": "Rebeka Hylana Brito de Oliveira",
    "matricula": "2023116ISINF0033",
    "birthDate": "28/01/2008",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116ISINF0033_25.jpg",
    "curso": "Técnico em Informática - Integrado Semestral - Piripiri - Ser/Mod: 5"
  },
  {
    "id": 937,
    "name": "REGINALDO FERREIRA DUARTE",
    "matricula": "2025116ULLI0020",
    "birthDate": "05/01/1982",
    "photo": null,
    "curso": "Licenciatura em Letras Inglês - Ser/Mod: 1"
  },
  {
    "id": 938,
    "name": "REGISLANE DA SILVA SANTOS",
    "matricula": "2024116ISADM0039",
    "birthDate": "29/05/2008",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116ISADM0039_55.jpg",
    "curso": "Técnico em Administração - Integrado Semestral - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 939,
    "name": "Renan Jucá da Silva",
    "matricula": "2024116TADS0028",
    "birthDate": "22/11/2004",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116TADS0028_10.jpg",
    "curso": "Tecnologia em Análise e Desenvolvimento de Sistemas - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 940,
    "name": "Renata Fontenele Marques",
    "matricula": "2025116LMAT0007",
    "birthDate": "06/03/2007",
    "photo": null,
    "curso": "Licenciatura em Matemática - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 941,
    "name": "Renato Tertuliano Ferreira",
    "matricula": "2019118220197",
    "birthDate": "21/10/1997",
    "photo": null,
    "curso": "Licenciatura em Matemática - Piripiri - Ser/Mod: 9"
  },
  {
    "id": 942,
    "name": "RHANNA MARIA HONORATO OLIVEIRA SILVA",
    "matricula": "2025116ISVES0018",
    "birthDate": "14/11/2009",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116ISVES0018_00.jpg",
    "curso": "Técnico em Vestuário - Integrado Semestral - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 943,
    "name": "Riana Gabriele Nunes da Cruz",
    "matricula": "2024116ISVES0033",
    "birthDate": "06/02/2009",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116ISVES0033_54.jpg",
    "curso": "Técnico em Vestuário - Integrado Semestral - Piripiri - Ser/Mod: 2"
  },
  {
    "id": 944,
    "name": "RICARDO SANTOS MACHADO",
    "matricula": "2025116BADM0027",
    "birthDate": "30/04/2006",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116BADM0027_23.jpg",
    "curso": "Bacharelado em Administração - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 945,
    "name": "Rikelry Monteiro Souza",
    "matricula": "2025116TADS0026",
    "birthDate": "02/11/2005",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116TADS0026_28.jpg",
    "curso": "Tecnologia em Análise e Desenvolvimento de Sistemas - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 946,
    "name": "RIQUELME FONSECA LOPES",
    "matricula": "2025116BADM0038",
    "birthDate": "04/01/2007",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116BADM0038_40.jpg",
    "curso": "Bacharelado em Administração - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 947,
    "name": "RITA DE CASSIA PEREIRA DE SOUSA BRANDAO",
    "matricula": "2025116TDSM0010",
    "birthDate": "05/12/1975",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116TDSM0010_44.jpg",
    "curso": "Tecnologia em Design de Moda - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 948,
    "name": "RITA DE CASSYA DE SOUSA SILVA",
    "matricula": "2024116ISVES0001",
    "birthDate": "22/11/2008",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116ISVES0001_44.jpg",
    "curso": "Técnico em Vestuário - Integrado Semestral - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 949,
    "name": "RITHYE AMARAL DA SILVA",
    "matricula": "2025116ISINF0040",
    "birthDate": "25/02/2010",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116ISINF0040_06.jpg",
    "curso": "Técnico em Informática - Integrado Semestral - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 950,
    "name": "Rizia Carvalho Costa",
    "matricula": "2021116BADM0313",
    "birthDate": "11/07/2003",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2021116BADM0313_52.jpg",
    "curso": "Bacharelado em Administração - Piripiri - Ser/Mod: 8"
  },
  {
    "id": 951,
    "name": "RIZIA NICOLLY FEITOSA DE MEDEIROS",
    "matricula": "2025116ISVES0017",
    "birthDate": "16/04/2009",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116ISVES0017_20.jpg",
    "curso": "Técnico em Vestuário - Integrado Semestral - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 952,
    "name": "ROBERIO DOS SANTOS MACEDO",
    "matricula": "2024116LPIN0031",
    "birthDate": "22/05/1987",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116LPIN0031_17.jpg",
    "curso": "Licenciatura Intercultural Indígena - CAPIR - Ser/Mod: 1"
  },
  {
    "id": 953,
    "name": "ROBISON WILLIAN SOUZA DA SILVA",
    "matricula": "2024116ISINF0002",
    "birthDate": "10/02/2009",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116ISINF0002_15.jpg",
    "curso": "Técnico em Informática - Integrado Semestral - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 954,
    "name": "RODOLFO DE SOUSA PEREIRA",
    "matricula": "2024116LPIN0011",
    "birthDate": "29/09/1988",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116LPIN0011_07.jpg",
    "curso": "Licenciatura Intercultural Indígena - CAPIR - Ser/Mod: 1"
  },
  {
    "id": 955,
    "name": "Rodrigo Cardoso de Farias",
    "matricula": "2024116TADS0038",
    "birthDate": "09/10/2000",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116TADS0038_39.jpg",
    "curso": "Tecnologia em Análise e Desenvolvimento de Sistemas - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 956,
    "name": "Rodrigo de Carvalho Gomes",
    "matricula": "2024116TADS0009",
    "birthDate": "25/09/1995",
    "photo": null,
    "curso": "Tecnologia em Análise e Desenvolvimento de Sistemas - Piripiri - Ser/Mod: 2"
  },
  {
    "id": 957,
    "name": "RODRIGO MAGALHAES SILVA",
    "matricula": "2025116BADM0022",
    "birthDate": "06/06/2005",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116BADM0022_11.jpg",
    "curso": "Bacharelado em Administração - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 958,
    "name": "ROGER PIERRE REIS SILVA",
    "matricula": "2025116TADS0010",
    "birthDate": "18/10/2005",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116TADS0010_27.jpg",
    "curso": "Tecnologia em Análise e Desenvolvimento de Sistemas - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 959,
    "name": "ROGERIO RESENDE DE ARAUJO",
    "matricula": "2025116ULLI0026",
    "birthDate": "26/11/1969",
    "photo": null,
    "curso": "Licenciatura em Letras Inglês - Ser/Mod: 1"
  },
  {
    "id": 960,
    "name": "Rosa Kathleen Souza Santos",
    "matricula": "2021116BADM0194",
    "birthDate": "16/04/1999",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2021116BADM0194_22.jpg",
    "curso": "Bacharelado em Administração - Piripiri - Ser/Mod: 8"
  },
  {
    "id": 961,
    "name": "Rosa Mistica do Nascimento Gomes",
    "matricula": "2022116BADM0093",
    "birthDate": "24/02/2004",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2022116BADM0093_24.jpg",
    "curso": "Bacharelado em Administração - Piripiri - Ser/Mod: 6"
  },
  {
    "id": 962,
    "name": "ROSANGELA LIMA DA SILVA",
    "matricula": "2025116ULLI0001",
    "birthDate": "24/04/1995",
    "photo": null,
    "curso": "Licenciatura em Letras Inglês - Ser/Mod: 1"
  },
  {
    "id": 963,
    "name": "ROSIANE ALVES GOMES",
    "matricula": "2024116LPIN0008",
    "birthDate": "28/11/1973",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116LPIN0008_12.jpg",
    "curso": "Licenciatura Intercultural Indígena - CAPIR - Ser/Mod: 1"
  },
  {
    "id": 964,
    "name": "ROSIANE DO NASCIMENTO ARAÚJO",
    "matricula": "2024116LMAT0018",
    "birthDate": "15/08/2003",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116LMAT0018_06.jpg",
    "curso": "Licenciatura em Matemática - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 965,
    "name": "Rossandra Ribeiro Marreiros de Araújo",
    "matricula": "2023116TDSM0024",
    "birthDate": "15/12/1974",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116TDSM0024_21.jpg",
    "curso": "Tecnologia em Design de Moda - Piripiri - Ser/Mod: 4"
  },
  {
    "id": 966,
    "name": "Rossandra Ribeiro Marreiros de Araújo",
    "matricula": "2024216MKEM0027",
    "birthDate": "15/12/1974",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024216MKEM0027_26.jpg",
    "curso": "Especialização em Marketing e Empreendedorismo em Moda - Ser/Mod: 2"
  },
  {
    "id": 967,
    "name": "Ruan Pablo da Silva Ferreira",
    "matricula": "2022116BADM0034",
    "birthDate": "26/04/2004",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2022116BADM0034_53.jpg",
    "curso": "Bacharelado em Administração - Piripiri - Ser/Mod: 6"
  },
  {
    "id": 968,
    "name": "Ruan Portela de Araújo",
    "matricula": "2023116ISINF0022",
    "birthDate": "03/09/2005",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116ISINF0022_31.jpg",
    "curso": "Técnico em Informática - Integrado Semestral - Piripiri - Ser/Mod: 5"
  },
  {
    "id": 969,
    "name": "RUAN VICTOR SILVA LIMA",
    "matricula": "2024116ISADM0001",
    "birthDate": "19/06/2008",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116ISADM0001_52.jpg",
    "curso": "Técnico em Administração - Integrado Semestral - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 970,
    "name": "RUANNY LETICIA DE SOUSA DOS SANTOS",
    "matricula": "2025116BADM0004",
    "birthDate": "23/07/2007",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116BADM0004_33.jpg",
    "curso": "Bacharelado em Administração - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 971,
    "name": "Rute Magalhães Sousa",
    "matricula": "2021116BADM0305",
    "birthDate": "17/01/2003",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2021116BADM0305_01.jpg",
    "curso": "Bacharelado em Administração - Piripiri - Ser/Mod: 8"
  },
  {
    "id": 972,
    "name": "RYAN LIMA DA SILVA",
    "matricula": "2024116BADM0031",
    "birthDate": "12/01/2006",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116BADM0031_10.jpg",
    "curso": "Bacharelado em Administração - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 973,
    "name": "RYANNA DA SILVA ALVES",
    "matricula": "2024116ISINF0004",
    "birthDate": "07/07/2008",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116ISINF0004_59.jpg",
    "curso": "Técnico em Informática - Integrado Semestral - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 974,
    "name": "RYHANNA MARIA SILVA MELO",
    "matricula": "2025116ISINF0039",
    "birthDate": "13/08/2009",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116ISINF0039_32.jpg",
    "curso": "Técnico em Informática - Integrado Semestral - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 975,
    "name": "Sabrina Ribeiro da Silva Carvalho",
    "matricula": "2024116ISVES0034",
    "birthDate": "18/06/2008",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116ISVES0034_09.jpg",
    "curso": "Técnico em Vestuário - Integrado Semestral - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 976,
    "name": "Samilly Raíssa Gomes Alves",
    "matricula": "2023116ISVES0023",
    "birthDate": "29/10/2007",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116ISVES0023_31.jpg",
    "curso": "Técnico em Vestuário - Integrado Semestral - Piripiri - Ser/Mod: 5"
  },
  {
    "id": 977,
    "name": "Samire Vitória de Sousa Alves",
    "matricula": "2024116LMAT0024",
    "birthDate": "17/10/2005",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116LMAT0024_23.jpg",
    "curso": "Licenciatura em Matemática - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 978,
    "name": "SAMIRES OLIVEIRA FERREIRA",
    "matricula": "2025116ISADM0030",
    "birthDate": "02/04/2009",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116ISADM0030_37.jpg",
    "curso": "Técnico em Administração - Integrado Semestral - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 979,
    "name": "Samuel Cordeiro Chaves",
    "matricula": "2025116ISINF0029",
    "birthDate": "16/09/2009",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116ISINF0029_08.jpg",
    "curso": "Técnico em Informática - Integrado Semestral - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 980,
    "name": "SAMUEL DAMASCENO SALES",
    "matricula": "2025116ISINF0037",
    "birthDate": "27/04/2007",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116ISINF0037_48.jpg",
    "curso": "Técnico em Informática - Integrado Semestral - Piripiri - Ser/Mod: 5"
  },
  {
    "id": 981,
    "name": "Samuel de Sousa Santos",
    "matricula": "2022116BADM0239",
    "birthDate": "22/12/2002",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2022116BADM0239_38.jpg",
    "curso": "Bacharelado em Administração - Piripiri - Ser/Mod: 6"
  },
  {
    "id": 982,
    "name": "Samuel Lins de Oliveira",
    "matricula": "2025116ISINF0004",
    "birthDate": "26/06/2010",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116ISINF0004_12.jpg",
    "curso": "Técnico em Informática - Integrado Semestral - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 983,
    "name": "SAMUEL VICTOR ARAUJO MELO",
    "matricula": "2025116LMAT0005",
    "birthDate": "14/08/2006",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116LMAT0005_15.jpg",
    "curso": "Licenciatura em Matemática - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 984,
    "name": "SAMUEL VICTOR SOUSA SOBRINHO",
    "matricula": "2025116ISADM0018",
    "birthDate": "09/03/2010",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116ISADM0018_45.jpg",
    "curso": "Técnico em Administração - Integrado Semestral - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 985,
    "name": "Sanderlly dos Santos Machado",
    "matricula": "2021116LMAT0106",
    "birthDate": "07/05/2004",
    "photo": null,
    "curso": "Licenciatura em Matemática - Piripiri - Ser/Mod: 8"
  },
  {
    "id": 986,
    "name": "Sandrielly Ximendes Silva",
    "matricula": "2023116ISVES0031",
    "birthDate": "09/09/2007",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116ISVES0031_38.jpg",
    "curso": "Técnico em Vestuário - Integrado Semestral - Piripiri - Ser/Mod: 5"
  },
  {
    "id": 987,
    "name": "SARA GABRIELLY DE SOUSA ARAUJO",
    "matricula": "2025116BADM0030",
    "birthDate": "18/09/2006",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116BADM0030_57.jpg",
    "curso": "Bacharelado em Administração - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 988,
    "name": "Sara Kalina Simplicio de Araujo",
    "matricula": "2020116LMAT0177",
    "birthDate": "15/11/2001",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2020116LMAT0177_05.jpg",
    "curso": "Licenciatura em Matemática - Piripiri - Ser/Mod: 9"
  },
  {
    "id": 989,
    "name": "Sara Nayelle de Oliveira Santos",
    "matricula": "2022116BADM0077",
    "birthDate": "25/05/2001",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2022116BADM0077_41.jpg",
    "curso": "Bacharelado em Administração - Piripiri - Ser/Mod: 6"
  },
  {
    "id": 990,
    "name": "Sara Yasmim Gomes Silva",
    "matricula": "2024116ISINF0060",
    "birthDate": "10/03/2009",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116ISINF0060_48.jpg",
    "curso": "Técnico em Informática - Integrado Semestral - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 991,
    "name": "Sarah Kamily de Araújo Rocha",
    "matricula": "2022116ISINF0423",
    "birthDate": "24/03/2005",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2022116ISINF0423_35.jpg",
    "curso": "Técnico em Informática - Integrado Semestral - Piripiri - Ser/Mod: 6"
  },
  {
    "id": 992,
    "name": "SAULLO GABRIEL DE SOUSA RUFINO",
    "matricula": "2024116ISADM0011",
    "birthDate": "26/12/2008",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116ISADM0011_32.jpg",
    "curso": "Técnico em Administração - Integrado Semestral - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 993,
    "name": "Sávio Uriel Barbosa de Sousa",
    "matricula": "2022116ISVES0196",
    "birthDate": "24/05/2005",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2022116ISVES0196_54.jpg",
    "curso": "Técnico em Vestuário - Integrado Semestral - Piripiri - Ser/Mod: 4"
  },
  {
    "id": 994,
    "name": "SAVYO FRANCISCO BARBOSA NASCIMENTO",
    "matricula": "2024116TADS0003",
    "birthDate": "03/04/2002",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116TADS0003_52.jpg",
    "curso": "Tecnologia em Análise e Desenvolvimento de Sistemas - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 995,
    "name": "SAYETE DO NASCIMENTO ALVES SOUSA",
    "matricula": "2024116ISINF0056",
    "birthDate": "02/11/2008",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116ISINF0056_00.jpg",
    "curso": "Técnico em Informática - Integrado Semestral - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 996,
    "name": "Semiramis Silva Vieira",
    "matricula": "2022116TDSM0148",
    "birthDate": "29/05/2001",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2022116TDSM0148_47.jpg",
    "curso": "Tecnologia em Design de Moda - Piripiri - Ser/Mod: 6"
  },
  {
    "id": 997,
    "name": "Shaiane Cristina Costa Almeida",
    "matricula": "2023116ISVES0018",
    "birthDate": "05/05/2007",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116ISVES0018_34.jpg",
    "curso": "Técnico em Vestuário - Integrado Semestral - Piripiri - Ser/Mod: 5"
  },
  {
    "id": 998,
    "name": "SHEILA MARIA LEITE SALES",
    "matricula": "2024116LPIN0006",
    "birthDate": "17/11/1966",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116LPIN0006_55.jpg",
    "curso": "Licenciatura Intercultural Indígena - CAPIR - Ser/Mod: 1"
  },
  {
    "id": 999,
    "name": "Silvana Mara Fortes Albuquerque",
    "matricula": "2024216MKEM0028",
    "birthDate": "05/11/1978",
    "photo": null,
    "curso": "Especialização em Marketing e Empreendedorismo em Moda - Ser/Mod: 1"
  },
  {
    "id": 1000,
    "name": "Silvana Oliveira da Silva",
    "matricula": "2023216JVES0003",
    "birthDate": "28/07/1992",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023216JVES0003_04.jpg",
    "curso": "Técnico em Vestuário Integrado ao Ensino Médio - PROEJA - Ser/Mod: 3"
  },
  {
    "id": 1001,
    "name": "Silvana Pereira Oliveira",
    "matricula": "2021116LMAT0114",
    "birthDate": "08/11/2002",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2021116LMAT0114_07.jpg",
    "curso": "Licenciatura em Matemática - Piripiri - Ser/Mod: 6"
  },
  {
    "id": 1002,
    "name": "Silvestre Danilo da Silva Soares",
    "matricula": "2022116ISADM0443",
    "birthDate": "22/04/2006",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2022116ISADM0443_41.jpg",
    "curso": "Técnico em Administração - Integrado Semestral - Piripiri - Ser/Mod: 6"
  },
  {
    "id": 1003,
    "name": "Silvia Helena Ferreira do Nascimento",
    "matricula": "2022116LMAT0170",
    "birthDate": "18/08/1989",
    "photo": null,
    "curso": "Licenciatura em Matemática - Piripiri - Ser/Mod: 6"
  },
  {
    "id": 1004,
    "name": "Silviane da Trindade Nunes",
    "matricula": "2025116TDSM0025",
    "birthDate": "08/06/1981",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116TDSM0025_10.jpg",
    "curso": "Tecnologia em Design de Moda - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 1005,
    "name": "SIMONE BIZERRA DE ARAUJO",
    "matricula": "2025116UGRH0026",
    "birthDate": "22/11/1982",
    "photo": null,
    "curso": "Tecnologia em Gestão de Recursos Humanos - Ser/Mod: 1"
  },
  {
    "id": 1006,
    "name": "SIMPLICIO MARIO DE OLIVEIRA",
    "matricula": "2025116TDSM0026",
    "birthDate": "02/05/1952",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116TDSM0026_23.jpg",
    "curso": "Tecnologia em Design de Moda - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 1007,
    "name": "SOFIA VITORIA FONTENELE COSTA",
    "matricula": "2024116ISADM0025",
    "birthDate": "20/01/2009",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116ISADM0025_25.jpg",
    "curso": "Técnico em Administração - Integrado Semestral - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 1008,
    "name": "SONIA MARIA ANDRADE DE CARVALHO",
    "matricula": "2024116ISINF0033",
    "birthDate": "25/09/2008",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116ISINF0033_50.jpg",
    "curso": "Técnico em Informática - Integrado Semestral - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 1009,
    "name": "Stefani Araujo Magalhaes",
    "matricula": "2022116BADM0190",
    "birthDate": "03/06/2002",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2022116BADM0190_50.jpg",
    "curso": "Bacharelado em Administração - Piripiri - Ser/Mod: 6"
  },
  {
    "id": 1010,
    "name": "Sumaia Moreira da Silva Pinheiro",
    "matricula": "2020116LMAT0100",
    "birthDate": "27/07/2002",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2020116LMAT0100_04.jpg",
    "curso": "Licenciatura em Matemática - Piripiri - Ser/Mod: 6"
  },
  {
    "id": 1011,
    "name": "Suzana Maria da Silva Melo",
    "matricula": "2024116TDSM0024",
    "birthDate": "13/05/2006",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116TDSM0024_39.jpg",
    "curso": "Tecnologia em Design de Moda - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 1012,
    "name": "Suziane Maria da Silva Melo",
    "matricula": "2024116TDSM0008",
    "birthDate": "13/05/2006",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116TDSM0008_25.jpg",
    "curso": "Tecnologia em Design de Moda - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 1013,
    "name": "Taime de Araujo Cruz",
    "matricula": "2023116ISADM0025",
    "birthDate": "22/03/2008",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116ISADM0025_13.jpg",
    "curso": "Técnico em Administração - Integrado Semestral - Piripiri - Ser/Mod: 5"
  },
  {
    "id": 1014,
    "name": "Talita Clemente Nascimento",
    "matricula": "2022116BADM0247",
    "birthDate": "16/03/2003",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2022116BADM0247_31.jpg",
    "curso": "Bacharelado em Administração - Piripiri - Ser/Mod: 6"
  },
  {
    "id": 1015,
    "name": "TAMIRES DA SILVA ARAUJO",
    "matricula": "2024116ISVES0016",
    "birthDate": "20/03/2009",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116ISVES0016_13.jpg",
    "curso": "Técnico em Vestuário - Integrado Semestral - Piripiri - Ser/Mod: 2"
  },
  {
    "id": 1016,
    "name": "Tamires Soares da Silva",
    "matricula": "2022116ISINF0148",
    "birthDate": "25/04/2006",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2022116ISINF0148_31.jpg",
    "curso": "Técnico em Informática - Integrado Semestral - Piripiri - Ser/Mod: 6"
  },
  {
    "id": 1017,
    "name": "THAINARA MARQUES DE SOUSA",
    "matricula": "2024116BADM0018",
    "birthDate": "26/09/2000",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116BADM0018_28.jpg",
    "curso": "Bacharelado em Administração - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 1018,
    "name": "THAIS FERNANDA VIANA DE ARAÚJO",
    "matricula": "2024116LPIN0016",
    "birthDate": "15/10/2005",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116LPIN0016_31.jpg",
    "curso": "Licenciatura Intercultural Indígena - CAPIR - Ser/Mod: 1"
  },
  {
    "id": 1019,
    "name": "THALES DE MEDEIROS FREITAS",
    "matricula": "2024116LMAT0017",
    "birthDate": "02/05/2006",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116LMAT0017_56.jpg",
    "curso": "Licenciatura em Matemática - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 1020,
    "name": "THALISSON GABRIEL SILVA DE SOUSA",
    "matricula": "2025116ISINF0038",
    "birthDate": "04/08/2009",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116ISINF0038_02.jpg",
    "curso": "Técnico em Informática - Integrado Semestral - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 1021,
    "name": "THALLYSSON NOGUEIRA FERREIRA",
    "matricula": "2025116ISINF0022",
    "birthDate": "17/04/2009",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116ISINF0022_45.jpg",
    "curso": "Técnico em Informática - Integrado Semestral - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 1022,
    "name": "Thamires Sousa de Barcellos",
    "matricula": "2023116ISADM0057",
    "birthDate": "06/10/2007",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116ISADM0057_04.jpg",
    "curso": "Técnico em Administração - Integrado Semestral - Piripiri - Ser/Mod: 5"
  },
  {
    "id": 1023,
    "name": "Thayla Aparecida Marques Veras",
    "matricula": "2025116ISVES0024",
    "birthDate": "30/12/2009",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116ISVES0024_25.jpg",
    "curso": "Técnico em Vestuário - Integrado Semestral - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 1024,
    "name": "THAYNARA MARIA CARDOSO OLIVEIRA",
    "matricula": "2025116ULLI0022",
    "birthDate": "18/07/2000",
    "photo": null,
    "curso": "Licenciatura em Letras Inglês - Ser/Mod: 1"
  },
  {
    "id": 1025,
    "name": "Thayson Severo Rocha Santos",
    "matricula": "2021116BADM0097",
    "birthDate": "29/07/2001",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2021116BADM0097_05.jpg",
    "curso": "Bacharelado em Administração - Piripiri - Ser/Mod: 8"
  },
  {
    "id": 1026,
    "name": "Thiago de Oliveira Nascimento",
    "matricula": "2022116LMAT0188",
    "birthDate": "27/07/1999",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2022116LMAT0188_24.jpg",
    "curso": "Licenciatura em Matemática - Piripiri - Ser/Mod: 6"
  },
  {
    "id": 1027,
    "name": "THIAGO EMANUEL CARDOZO RODRIGUES",
    "matricula": "2024116ISINF0019",
    "birthDate": "01/05/2008",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116ISINF0019_49.jpg",
    "curso": "Técnico em Informática - Integrado Semestral - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 1028,
    "name": "Thiago Gomes Ferreira",
    "matricula": "2022116LMAT0196",
    "birthDate": "22/05/2002",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2022116LMAT0196_51.jpg",
    "curso": "Licenciatura em Matemática - Piripiri - Ser/Mod: 6"
  },
  {
    "id": 1029,
    "name": "Thiago Medeiros Cardoso",
    "matricula": "2019118220251",
    "birthDate": "11/02/2000",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2019118220251_29.jpg",
    "curso": "Licenciatura em Matemática - Piripiri - Ser/Mod: 9"
  },
  {
    "id": 1030,
    "name": "TIAGO MEDEIROS MELO",
    "matricula": "2024116LPIN0036",
    "birthDate": "23/11/1997",
    "photo": null,
    "curso": "Licenciatura Intercultural Indígena - CAPIR - Ser/Mod: 1"
  },
  {
    "id": 1031,
    "name": "VALDIANA DO NASCIMENTO",
    "matricula": "2024216JADM0011",
    "birthDate": "10/05/1993",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024216JADM0011_32.jpg",
    "curso": "Técnico em Administração Integrado ao Ensino Médio - PROEJA - Ser/Mod: 1"
  },
  {
    "id": 1032,
    "name": "Valéria de Carvalho Gomes",
    "matricula": "2023116LMAT0015",
    "birthDate": "20/09/2004",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116LMAT0015_57.jpg",
    "curso": "Licenciatura em Matemática - Piripiri - Ser/Mod: 5"
  },
  {
    "id": 1033,
    "name": "Valeria de Sousa Andrade",
    "matricula": "2024116LPIN0047",
    "birthDate": "29/11/1990",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116LPIN0047_35.jpg",
    "curso": "Licenciatura Intercultural Indígena - CAPIR - Ser/Mod: 1"
  },
  {
    "id": 1034,
    "name": "VALQUÍRIA DO NASCIMENTO SANTOS",
    "matricula": "2024116LPIN0048",
    "birthDate": "03/08/1986",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116LPIN0048_20.jpg",
    "curso": "Licenciatura Intercultural Indígena - CAPIR - Ser/Mod: 1"
  },
  {
    "id": 1035,
    "name": "Vanessa Antonia Nascimento dos Santos",
    "matricula": "2025116TADS0029",
    "birthDate": "13/06/2002",
    "photo": null,
    "curso": "Tecnologia em Análise e Desenvolvimento de Sistemas - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 1036,
    "name": "Vanessa Pereira Cunha",
    "matricula": "2024116TADS0023",
    "birthDate": "25/07/2004",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116TADS0023_57.jpg",
    "curso": "Tecnologia em Análise e Desenvolvimento de Sistemas - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 1037,
    "name": "Victor Augusto Oliveira Santos",
    "matricula": "2025116ISINF0035",
    "birthDate": "11/03/2010",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116ISINF0035_22.jpg",
    "curso": "Técnico em Informática - Integrado Semestral - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 1038,
    "name": "Victor Dias Ximendes",
    "matricula": "2024116TADS0022",
    "birthDate": "09/06/2003",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116TADS0022_49.jpg",
    "curso": "Tecnologia em Análise e Desenvolvimento de Sistemas - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 1039,
    "name": "VICTOR EMANOEL OLIVEIRA LOPES",
    "matricula": "2024116ISINF0035",
    "birthDate": "19/12/2008",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116ISINF0035_30.jpg",
    "curso": "Técnico em Informática - Integrado Semestral - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 1040,
    "name": "Vìctor Emanuel Quaresma da Silva",
    "matricula": "2021116LMAT0327",
    "birthDate": "30/09/2003",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2021116LMAT0327_15.jpg",
    "curso": "Licenciatura em Matemática - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 1041,
    "name": "Victor Manoel da Costa Silva",
    "matricula": "2022116LMAT0390",
    "birthDate": "28/07/2002",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2022116LMAT0390_33.jpg",
    "curso": "Licenciatura em Matemática - Piripiri - Ser/Mod: 6"
  },
  {
    "id": 1042,
    "name": "VICTOR PABLO DOS SANTOS BARROSO",
    "matricula": "2024116ISINF0040",
    "birthDate": "14/08/2008",
    "photo": null,
    "curso": "Técnico em Informática - Integrado Semestral - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 1043,
    "name": "Victor Ravel Santos Martins",
    "matricula": "2023116ISINF0029",
    "birthDate": "06/06/2007",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116ISINF0029_21.jpg",
    "curso": "Técnico em Informática - Integrado Semestral - Piripiri - Ser/Mod: 5"
  },
  {
    "id": 1044,
    "name": "Vikelmi Medeiros da Silva",
    "matricula": "2024116LMAT0003",
    "birthDate": "24/04/2006",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116LMAT0003_34.jpg",
    "curso": "Licenciatura em Matemática - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 1045,
    "name": "Vilmara da Silva Monteiro",
    "matricula": "2024216MKEM0012",
    "birthDate": "14/06/1997",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024216MKEM0012_21.jpg",
    "curso": "Especialização em Marketing e Empreendedorismo em Moda - Ser/Mod: 2"
  },
  {
    "id": 1046,
    "name": "VINICIUS CARDOSO DE BRITO",
    "matricula": "2024116ISADM0006",
    "birthDate": "13/03/2009",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116ISADM0006_14.jpg",
    "curso": "Técnico em Administração - Integrado Semestral - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 1047,
    "name": "VINICIUS OLIVEIRA DOS SANTOS",
    "matricula": "2025116TDSM0003",
    "birthDate": "17/07/2006",
    "photo": null,
    "curso": "Tecnologia em Design de Moda - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 1048,
    "name": "VITOR ERIC OLIVEIRA MELO",
    "matricula": "2025116ISINF0041",
    "birthDate": "22/08/2009",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116ISINF0041_05.jpg",
    "curso": "Técnico em Informática - Integrado Semestral - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 1049,
    "name": "Vitor Hugo Silva Gomes",
    "matricula": "2024216MADM0015",
    "birthDate": "09/05/2003",
    "photo": null,
    "curso": "Técnico em Administração - Concomitante/Subsequente - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 1050,
    "name": "Vitor Hugo Silva Gomes",
    "matricula": "2025116UGRH0017",
    "birthDate": "09/05/2003",
    "photo": null,
    "curso": "Tecnologia em Gestão de Recursos Humanos - Ser/Mod: 1"
  },
  {
    "id": 1051,
    "name": "VITOR LOPES DA SILVA",
    "matricula": "2025116TADS0009",
    "birthDate": "21/06/2001",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116TADS0009_36.jpg",
    "curso": "Tecnologia em Análise e Desenvolvimento de Sistemas - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 1052,
    "name": "VITOR MANUEL ALMEIDA BALBINO",
    "matricula": "2024116ISINF0034",
    "birthDate": "21/05/2008",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116ISINF0034_17.jpg",
    "curso": "Técnico em Informática - Integrado Semestral - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 1053,
    "name": "Vitória Brito da Silva",
    "matricula": "2023116ISVES0003",
    "birthDate": "16/08/2007",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116ISVES0003_36.jpg",
    "curso": "Técnico em Vestuário - Integrado Semestral - Piripiri - Ser/Mod: 5"
  },
  {
    "id": 1054,
    "name": "Vitória de Deus Silva Rodrigues",
    "matricula": "2025116TDSM0020",
    "birthDate": "16/11/2005",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116TDSM0020_56.jpg",
    "curso": "Tecnologia em Design de Moda - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 1055,
    "name": "VITORIA DE OLIVEIRA SOUSA SILVA",
    "matricula": "2024116ISADM0028",
    "birthDate": "28/03/2009",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116ISADM0028_22.jpg",
    "curso": "Técnico em Administração - Integrado Semestral - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 1056,
    "name": "VITORIA KAROLINE FONTENELE VIEIRA",
    "matricula": "2024116ISADM0029",
    "birthDate": "09/07/2008",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116ISADM0029_09.jpg",
    "curso": "Técnico em Administração - Integrado Semestral - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 1057,
    "name": "Vitória Lopes de Sousa",
    "matricula": "2023116ISVES0035",
    "birthDate": "19/08/2006",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116ISVES0035_32.jpg",
    "curso": "Técnico em Vestuário - Integrado Semestral - Piripiri - Ser/Mod: 5"
  },
  {
    "id": 1058,
    "name": "Vitoria Pereira Cunha",
    "matricula": "2020116LMAT0096",
    "birthDate": "13/04/2002",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2020116LMAT0096_22.jpg",
    "curso": "Licenciatura em Matemática - Piripiri - Ser/Mod: 9"
  },
  {
    "id": 1059,
    "name": "VITORINO LEITE DE SOUSA",
    "matricula": "2024116LPIN0017",
    "birthDate": "28/05/1974",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116LPIN0017_34.jpg",
    "curso": "Licenciatura Intercultural Indígena - CAPIR - Ser/Mod: 1"
  },
  {
    "id": 1060,
    "name": "VITTORYO RAYLAN OLIVEIRA DE AGUIAR",
    "matricula": "2025116ISINF0023",
    "birthDate": "06/01/2010",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116ISINF0023_12.jpg",
    "curso": "Técnico em Informática - Integrado Semestral - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 1061,
    "name": "WALEF RAPHAEL GOMES MELO",
    "matricula": "2025116LMAT0002",
    "birthDate": "10/08/2006",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116LMAT0002_15.jpg",
    "curso": "Licenciatura em Matemática - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 1062,
    "name": "Wálisson Cardoso de Souza",
    "matricula": "2023116ISADM0013",
    "birthDate": "22/07/2007",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116ISADM0013_16.jpg",
    "curso": "Técnico em Administração - Integrado Semestral - Piripiri - Ser/Mod: 5"
  },
  {
    "id": 1063,
    "name": "Wanderson Breno da Silva Carvalho",
    "matricula": "2023116LMAT0030",
    "birthDate": "08/01/2005",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116LMAT0030_22.jpg",
    "curso": "Licenciatura em Matemática - Piripiri - Ser/Mod: 5"
  },
  {
    "id": 1064,
    "name": "Wandeson Nascimento Barbosa",
    "matricula": "2023116LMAT0017",
    "birthDate": "05/03/1991",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116LMAT0017_01.jpg",
    "curso": "Licenciatura em Matemática - Piripiri - Ser/Mod: 5"
  },
  {
    "id": 1065,
    "name": "Wanessa Maria da Silva Sousa",
    "matricula": "2025116LMAT0040",
    "birthDate": "27/05/1982",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116LMAT0040_12.jpg",
    "curso": "Licenciatura em Matemática - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 1066,
    "name": "WELLISSON RENÊ CARVALHO DOS SANTOS",
    "matricula": "2024216MKEM0025",
    "birthDate": "01/10/1992",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024216MKEM0025_33.jpg",
    "curso": "Especialização em Marketing e Empreendedorismo em Moda - Ser/Mod: 1"
  },
  {
    "id": 1067,
    "name": "Welton de Araújo Sousa Filho",
    "matricula": "2025116ISADM0035",
    "birthDate": "18/11/2009",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116ISADM0035_29.jpg",
    "curso": "Técnico em Administração - Integrado Semestral - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 1068,
    "name": "WENDEN KESLEY OLIVEIRA RODRIGUES",
    "matricula": "2024116BADM0014",
    "birthDate": "22/07/2003",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116BADM0014_29.jpg",
    "curso": "Bacharelado em Administração - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 1069,
    "name": "WESLEY GABRIEL OLIVEIRA SILVA",
    "matricula": "2024116ISINF0003",
    "birthDate": "27/05/2008",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116ISINF0003_09.jpg",
    "curso": "Técnico em Informática - Integrado Semestral - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 1070,
    "name": "Wesley Tiago Medeiros Lustosa",
    "matricula": "2025116TADS0037",
    "birthDate": "14/08/2003",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116TADS0037_38.jpg",
    "curso": "Tecnologia em Análise e Desenvolvimento de Sistemas - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 1071,
    "name": "Weslley Branham Silva Castro",
    "matricula": "2024216MADM0003",
    "birthDate": "25/01/2007",
    "photo": null,
    "curso": "Técnico em Administração - Concomitante/Subsequente - Piripiri - Ser/Mod: 2"
  },
  {
    "id": 1072,
    "name": "Weverson Kauê Paiva Almeida de Meneses",
    "matricula": "2023116ISADM0005",
    "birthDate": "19/02/2006",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116ISADM0005_46.jpg",
    "curso": "Técnico em Administração - Integrado Semestral - Piripiri - Ser/Mod: 5"
  },
  {
    "id": 1073,
    "name": "WILLIAM ERIC DE SOUZA SANTOS",
    "matricula": "2024116ISINF0008",
    "birthDate": "09/10/2007",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116ISINF0008_51.jpg",
    "curso": "Técnico em Informática - Integrado Semestral - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 1074,
    "name": "Wyldson Kauan Cardoso da Silva",
    "matricula": "2023116ISINF0051",
    "birthDate": "12/10/2007",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116ISINF0051_54.jpg",
    "curso": "Técnico em Informática - Integrado Semestral - Piripiri - Ser/Mod: 5"
  },
  {
    "id": 1075,
    "name": "Yana Sousa Silva",
    "matricula": "2025116ISADM0002",
    "birthDate": "19/10/2009",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116ISADM0002_11.jpg",
    "curso": "Técnico em Administração - Integrado Semestral - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 1076,
    "name": "YANNE DE FATIMA SOUZA CUNHA",
    "matricula": "2024116ISADM0033",
    "birthDate": "13/01/2009",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116ISADM0033_22.jpg",
    "curso": "Técnico em Administração - Integrado Semestral - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 1077,
    "name": "YANNE MARIA DIAS DA COSTA",
    "matricula": "2024116ISVES0008",
    "birthDate": "15/06/2008",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116ISVES0008_01.jpg",
    "curso": "Técnico em Vestuário - Integrado Semestral - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 1078,
    "name": "Yara Micaele Xavier dos Santos",
    "matricula": "2022116TDSM0164",
    "birthDate": "14/04/2004",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2022116TDSM0164_58.jpg",
    "curso": "Tecnologia em Design de Moda - Piripiri - Ser/Mod: 6"
  },
  {
    "id": 1079,
    "name": "Yasmim de Souza Mesquita",
    "matricula": "2025116ISADM0015",
    "birthDate": "19/07/2009",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116ISADM0015_32.jpg",
    "curso": "Técnico em Administração - Integrado Semestral - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 1080,
    "name": "YASMIN DE ARAUJO BRITO",
    "matricula": "2024116BADM0027",
    "birthDate": "23/03/2005",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116BADM0027_42.jpg",
    "curso": "Bacharelado em Administração - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 1081,
    "name": "YASMIN DE SOUSA MESQUITA",
    "matricula": "2024116TDSM0012",
    "birthDate": "06/10/2005",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116TDSM0012_58.jpg",
    "curso": "Tecnologia em Design de Moda - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 1082,
    "name": "YASMIN GABRIELLY CARVALHO SOARES",
    "matricula": "2024116ISINF0044",
    "birthDate": "06/02/2009",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116ISINF0044_59.jpg",
    "curso": "Técnico em Informática - Integrado Semestral - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 1083,
    "name": "Yasmin Kauane Lopes Castro",
    "matricula": "2023116ISADM0027",
    "birthDate": "11/12/2007",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116ISADM0027_18.jpg",
    "curso": "Técnico em Administração - Integrado Semestral - Piripiri - Ser/Mod: 5"
  },
  {
    "id": 1084,
    "name": "Yasmin Lima Cardozo",
    "matricula": "2023116ISINF0001",
    "birthDate": "30/01/2008",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116ISINF0001_53.jpg",
    "curso": "Técnico em Informática - Integrado Semestral - Piripiri - Ser/Mod: 5"
  },
  {
    "id": 1085,
    "name": "Yasmin Suellen da Silva Oliveira",
    "matricula": "2023116ISVES0034",
    "birthDate": "30/07/2007",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2023116ISVES0034_35.jpg",
    "curso": "Técnico em Vestuário - Integrado Semestral - Piripiri - Ser/Mod: 5"
  },
  {
    "id": 1086,
    "name": "YLANA SILVA LEITE",
    "matricula": "2025116ISVES0022",
    "birthDate": "17/05/2009",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116ISVES0022_46.jpg",
    "curso": "Técnico em Vestuário - Integrado Semestral - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 1087,
    "name": "Yohan Cardoso da Silva",
    "matricula": "2025116BADM0018",
    "birthDate": "07/10/2006",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2025116BADM0018_42.jpg",
    "curso": "Bacharelado em Administração - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 1088,
    "name": "YSABELLI MARIA SANTOS SOUSA",
    "matricula": "2024116ISADM0041",
    "birthDate": "20/08/2009",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116ISADM0041_42.jpg",
    "curso": "Técnico em Administração - Integrado Semestral - Piripiri - Ser/Mod: 1"
  },
  {
    "id": 1089,
    "name": "YTALO ANDRADE GOMES DA SILVA",
    "matricula": "2024116ISINF0011",
    "birthDate": "27/02/2009",
    "photo": "http://siar.capir.ifpi.edu.br/uploads/A2024116ISINF0011_14.jpg",
    "curso": "Técnico em Informática - Integrado Semestral - Piripiri - Ser/Mod: 3"
  },
  {
    "id": 1090,
    "name": "Zildenny Gomes Ferreira",
    "matricula": "2025116TADS0045",
    "birthDate": "17/07/1995",
    "photo": null,
    "curso": "Tecnologia em Análise e Desenvolvimento de Sistemas - Piripiri - Ser/Mod: 1"
  }
]
