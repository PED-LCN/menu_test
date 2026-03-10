export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  categoryId: string;
  ingredients?: string[];
}

export interface Category {
  id: string;
  name: string;
}

export const categories: Category[] = [
  { id: 'destaques', name: 'Destaques' },
  { id: 'bolos', name: 'Bolos em Fatias' },
  { id: 'docinhos', name: 'Docinhos Tradicionais' },
  { id: 'sobremesas', name: 'Sobremesas na Taça' },
  { id: 'bebidas', name: 'Bebidas' },
];

export const products: Product[] = [
  {
    id: 'p1',
    name: 'Bolo de Cenoura com Chocolate',
    description: 'Fatia generosa de bolo de cenoura fofinho com cobertura cremosa de brigadeiro belga.',
    price: 14.90,
    imageUrl: 'https://picsum.photos/seed/bolocenoura/400/400',
    categoryId: 'destaques',
    ingredients: ['Cenoura fresca', 'Farinha de trigo', 'Ovos', 'Açúcar', 'Chocolate 50% cacau', 'Leite condensado', 'Manteiga'],
  },
  {
    id: 'p5',
    name: 'Banoffee na Taça',
    description: 'Camadas de biscoito amanteigado, doce de leite artesanal, banana e chantilly fresco.',
    price: 18.50,
    imageUrl: 'https://picsum.photos/seed/banoffee/400/400',
    categoryId: 'destaques',
    ingredients: ['Biscoito maizena', 'Manteiga', 'Doce de leite artesanal', 'Banana nanica', 'Nata fresca', 'Canela em pó'],
  },
  {
    id: 'p2',
    name: 'Bolo Red Velvet',
    description: 'Fatia de bolo Red Velvet com recheio e cobertura de cream cheese com fava de baunilha.',
    price: 16.90,
    imageUrl: 'https://picsum.photos/seed/redvelvet/400/400',
    categoryId: 'bolos',
    ingredients: ['Massa amanteigada com cacau', 'Corante natural', 'Cream cheese', 'Açúcar de confeiteiro', 'Fava de baunilha'],
  },
  {
    id: 'p9',
    name: 'Bolo de Ninho com Nutella',
    description: 'Massa branca super molhadinha, recheio de leite ninho cremoso e nutella pura.',
    price: 17.50,
    imageUrl: 'https://picsum.photos/seed/ninhonutella/400/400',
    categoryId: 'bolos',
    ingredients: ['Massa de baunilha', 'Leite Ninho', 'Creme de leite', 'Leite condensado', 'Nutella original'],
  },
  {
    id: 'p3',
    name: 'Brigadeiro Tradicional',
    description: 'O clássico brigadeiro de chocolate ao leite, feito com ingredientes premium. (Unidade 20g)',
    price: 3.50,
    imageUrl: 'https://picsum.photos/seed/brigadeiro/400/400',
    categoryId: 'docinhos',
    ingredients: ['Leite condensado', 'Chocolate belga ao leite', 'Manteiga extra', 'Granulado de chocolate puro'],
  },
  {
    id: 'p4',
    name: 'Beijinho de Coco',
    description: 'Docinho de coco cremoso coberto com coco ralado fresco. (Unidade 20g)',
    price: 3.50,
    imageUrl: 'https://picsum.photos/seed/beijinho/400/400',
    categoryId: 'docinhos',
    ingredients: ['Leite condensado', 'Coco ralado seco', 'Manteiga', 'Coco ralado fresco para cobertura'],
  },
  {
    id: 'p10',
    name: 'Surpresa de Uva',
    description: 'Uva verde sem semente envolta em brigadeiro branco cremoso. (Unidade 25g)',
    price: 4.00,
    imageUrl: 'https://picsum.photos/seed/surpresauva/400/400',
    categoryId: 'docinhos',
    ingredients: ['Uva Thompson', 'Leite condensado', 'Leite em pó', 'Manteiga'],
  },
  {
    id: 'p6',
    name: 'Cheesecake de Frutas Vermelhas',
    description: 'Cheesecake clássico assado com generosa calda artesanal de frutas vermelhas.',
    price: 22.00,
    imageUrl: 'https://picsum.photos/seed/cheesecake/400/400',
    categoryId: 'sobremesas',
    ingredients: ['Cream cheese', 'Ovos', 'Açúcar', 'Biscoito', 'Manteiga', 'Morango', 'Amora', 'Framboesa'],
  },
  {
    id: 'p11',
    name: 'Tiramisù',
    description: 'Sobremesa italiana com camadas de biscoito champagne, café e creme mascarpone.',
    price: 24.00,
    imageUrl: 'https://picsum.photos/seed/tiramisu/400/400',
    categoryId: 'sobremesas',
    ingredients: ['Queijo Mascarpone', 'Gemas de ovos', 'Açúcar', 'Biscoito Champagne', 'Café forte', 'Cacau em pó'],
  },
  {
    id: 'p7',
    name: 'Café Expresso',
    description: 'Café expresso tirado na hora. Grãos 100% arábica.',
    price: 6.00,
    imageUrl: 'https://picsum.photos/seed/cafe/400/400',
    categoryId: 'bebidas',
    ingredients: ['Grãos de café 100% Arábica', 'Água filtrada'],
  },
  {
    id: 'p8',
    name: 'Suco Natural de Laranja',
    description: 'Suco de laranja 100% natural, espremido na hora. 300ml.',
    price: 9.00,
    imageUrl: 'https://picsum.photos/seed/suco/400/400',
    categoryId: 'bebidas',
    ingredients: ['Laranjas frescas selecionadas'],
  },
  {
    id: 'p12',
    name: 'Água Mineral com Gás',
    description: 'Garrafa 500ml.',
    price: 4.50,
    imageUrl: 'https://picsum.photos/seed/aguagas/400/400',
    categoryId: 'bebidas',
    ingredients: ['Água mineral natural', 'Gás carbônico'],
  }
];
