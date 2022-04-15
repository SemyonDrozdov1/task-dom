/*
  В функцию appendToBody передаются 3 параметра:
  tag - имя тега, content - содержимое тега и count - количество вставок.
  Необходимо, чтобы функция осуществила вставку на страницу указанный тег с указанным содержимым указанное число раз.
  Считаем, что всегда передается тег, допускающий вставку текста в качестве своего содержимого (P, DIV, I и пр.).
*/
export function appendToBody(tag, content, count) {
    let i = 0;
    for (i = 0; i < count; i++) {
        let newitem = document.createElement(tag);
        newitem.innerHTML = content;
        document.body.appendChild(newitem);
    }
}

/*
  Создайте дерево вложенных тегов DIV.
  Каждый узел дерева должен содержать childrenCount узлов.
  Глубина дерева задается параметром level.
  Каждый элемент должен иметь класс вида item_n, где n - глубина вложенности элемента. (Нумерацию ведем с единицы).
  Сформированное дерево верните в качестве результата работы функции.
*/
export function generateTree(childrenCount, level) {
    function insertNewDiv(currentLevel) {
        let newdiv = document.createElement('div');
        newdiv.classList.add(`item_` + currentLevel);
        if (currentLevel >= level) return newdiv;

        for (let i = 0; i < childrenCount; i++) {
            newdiv.append(insertNewDiv(currentLevel + 1));
        }
        return newdiv;
    }
    return insertNewDiv(1);
}

/*
  Используйте функцию для создания дерева тегов DIV из предыдущего задания.
  Создайте дерево с вложенностью 3 и числом элементов в каждом узле 2.
  Далее замените все узлы второго уровня (т.е. имеющие класс item_2) на теги SECTION.
  Остальную структуру дерева сохраните неизменной, включая классы и те элементы,
  которые находились внутри переписанных тегов.
  Сформированное дерево верните в качестве результата работы функции.
*/
export function replaceNodes() {
    let tree = generateTree(2, 3);
    let node = tree.getElementsByClassName('item_2');
    for (let elements of node) {
        let section = document.createElement('section');
        section.className = 'item_2';
        section.innerHTML = elements.innerHTML;
        elements.replaceWith(section);
    }
    return tree;
}
