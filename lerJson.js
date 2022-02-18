// JavaScript Document
const data = {
  livro: {
    salmos: [
      {
        id: "1.0",
        verso: "Salmo 1"
      },
      {
        id: "1,1",
        verso:
          " BEM-AVENTURADO o homem que não anda segundo o conselho dos ímpios, nem se detém no caminho dos pecadores, nem se assenta na roda dos escarnecedores."
      },

      {
        id: "1.2",
        verso:
          " Antes tem o seu prazer na lei do SENHOR, e na sua lei medita de dia e de noite."
      },

      {
        id: "1.3",
        verso:
          " Pois será como a árvore plantada junto a ribeiros de águas, a qual dá o seu fruto no seu tempo; as suas folhas nao ca1rao, e tudo quanto fizer prosperará."
      }
    ]
  }
};

function findVersicle(book, chapter, versicle) {
  const [item] = data.livro[book].filter(
    (item) => item.id === "${chapter}.${versicle}"
  );

  if (item) {
    return item.verso;
  } else {
    return "item é indefinido";
  }
}

console.log(findVersicle("salmos", 1, 1));
