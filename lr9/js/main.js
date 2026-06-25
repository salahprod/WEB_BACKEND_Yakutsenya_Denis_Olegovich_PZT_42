/**
 * ==========================================================================
 * ВНЕШНИЙ JS-ФАЙЛ (способ 1 внедрения JavaScript)
 * ==========================================================================
 * 
 * Содержит дополнительные функции и демонстрацию всех операторов JS
 */

// ================================================================
// ДИАЛОГОВЫЕ ОКНА (alert, confirm, prompt) — вынесены в глобальную область
// ================================================================

function showMessage(title, text) {
    alert(title + '\n\n' + text);
}

function askQuestion(question) {
    return confirm(question);
}

function getUserInput(promptText, defaultValue) {
    return prompt(promptText, defaultValue);
}

// ================================================================
// ОПЕРАТОРЫ JS (полная демонстрация)
// ================================================================

// 1. if / else if / else
function getUserRole(age, experience) {
    if (age < 18) {
        return 'Молодой специалист';
    } else if (age >= 18 && age < 30) {
        if (experience >= 3) {
            return 'Перспективный профессионал';
        } else {
            return 'Начинающий специалист';
        }
    } else if (age >= 30 && age < 50) {
        return 'Опытный специалист';
    } else {
        return 'Эксперт с большим опытом';
    }
}

// 2. switch
function getTrainingModule(moduleNumber) {
    switch (moduleNumber) {
        case 1:
            return 'Модуль 1: Стратегия и изучение рынка';
        case 2:
            return 'Модуль 2: Инструменты ведения бизнеса';
        case 3:
            return 'Модуль 3: Основы работы в команде';
        case 4:
            return 'Модуль 4: Методология трекинга';
        default:
            return 'Модуль не найден';
    }
}

// 3. for (с break и continue)
function filterCourses(courses, minDuration) {
    var result = [];
    for (var i = 0; i < courses.length; i++) {
        // continue — пропускаем курсы с длительностью меньше указанной
        if (courses[i].duration < minDuration) {
            continue;
        }
        // break — ограничиваем количество результатов
        if (result.length >= 5) {
            break;
        }
        result.push(courses[i]);
    }
    return result;
}

// 4. while
function findFirstMatch(array, condition) {
    var i = 0;
    while (i < array.length) {
        if (condition(array[i])) {
            return array[i];
        }
        i++;
    }
    return null;
}

// 5. do..while
function collectUserData(requiredFields) {
    var data = {};
    var fieldIndex = 0;
    do {
        var fieldName = requiredFields[fieldIndex];
        var value = getUserInput('Введите ' + fieldName + ':', '');
        if (value !== null && value.trim() !== '') {
            data[fieldName] = value.trim();
        } else {
            alert('Поле ' + fieldName + ' не может быть пустым!');
            continue;
        }
        fieldIndex++;
    } while (fieldIndex < requiredFields.length);
    return data;
}

// 6. return
function calculateTotalPrice(items, discount) {
    var total = 0;
    for (var i = 0; i < items.length; i++) {
        total += items[i].price * items[i].quantity;
    }
    if (discount > 0) {
        return total * (1 - discount / 100);
    }
    return total;
}

// ================================================================
// ДОПОЛНИТЕЛЬНЫЕ ФУНКЦИИ ДЛЯ САЙТА
// ================================================================

// Функция для подсчета элементов на странице (демонстрация цикла for)
function countPageElements() {
    var sections = document.querySelectorAll('section');
    var count = 0;
    for (var i = 0; i < sections.length; i++) {
        if (sections[i].className) {
            count++;
        }
    }
    return count;
}

// Функция для поиска элемента по тексту (демонстрация while)
function findElementByText(selector, searchText) {
    var elements = document.querySelectorAll(selector);
    var i = 0;
    while (i < elements.length) {
        if (elements[i].textContent.includes(searchText)) {
            return elements[i];
        }
        i++;
    }
    return null;
}

// Функция для генерации уникальных ID (демонстрация do..while)
function generateUniqueIds(count, prefix) {
    var ids = [];
    var attempts = 0;
    var maxAttempts = count * 10;
    do {
        var id = prefix + '-' + Math.floor(Math.random() * 10000).toString().padStart(4, '0');
        if (ids.indexOf(id) === -1) {
            ids.push(id);
        }
        attempts++;
    } while (ids.length < count && attempts < maxAttempts);
    return ids;
}

// ================================================================
// ИНИЦИАЛИЗАЦИЯ ПРИ ЗАГРУЗКЕ СТРАНИЦЫ
// ================================================================

document.addEventListener('DOMContentLoaded', function() {
    console.log('✅ Внешний JS-файл загружен!');
    console.log('📊 Количество секций на странице: ' + countPageElements());
    
    // Демонстрация switch
    console.log('📚 ' + getTrainingModule(2));
    console.log('📚 ' + getTrainingModule(5));
    
    // Демонстрация if
    var role = getUserRole(25, 4);
    console.log('👤 Роль пользователя: ' + role);
    
    // Демонстрация работы с курсами
    var courses = [
        { name: 'Бизнес-тренер', duration: 80 },
        { name: 'Трекер', duration: 100 },
        { name: 'Стартап-менеджер', duration: 40 },
        { name: 'Product-менеджер', duration: 60 },
        { name: 'Инновационный менеджмент', duration: 120 },
        { name: 'Бизнес-аналитика', duration: 50 },
        { name: 'Управление проектами', duration: 70 }
    ];
    
    var filtered = filterCourses(courses, 60);
    console.log('✅ Курсы с длительностью >= 60 часов:');
    for (var i = 0; i < filtered.length; i++) {
        console.log('  • ' + filtered[i].name + ' (' + filtered[i].duration + ' ч.)');
    }
    
    // Демонстрация while
    var found = findElementByText('h2', 'Бизнес-тренер');
    if (found) {
        console.log('🔍 Найден заголовок: ' + found.textContent);
    }
    
    // Демонстрация do..while
    var ids = generateUniqueIds(5, 'KROKIT');
    console.log('🆔 Сгенерированные ID: ' + ids.join(', '));
    
    // Демонстрация return
    var items = [
        { price: 100, quantity: 2 },
        { price: 50, quantity: 3 },
        { price: 200, quantity: 1 }
    ];
    var total = calculateTotalPrice(items, 10);
    console.log('💰 Итоговая сумма (со скидкой 10%): $' + total);
    
    console.log('🎯 KROKIT — все JS-функции загружены!');
});