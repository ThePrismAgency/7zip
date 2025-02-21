window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  var player = GetPlayer();
// Получаем значения переменных из курса Storyline
var textEntry = player.GetVar("TextEntry1");
var variable_1 = player.GetVar("Variable_1");
var variable_2 = player.GetVar("Variable_2");
var variable_3 = player.GetVar("Variable_3");
var variable_4 = player.GetVar("Variable_4");
// Проверяем длину переменной TextEntry
if (textEntry.length >= 12) {
    variable_1 = 1;
} else {
    variable_1 = 2;
}

// Проверяем наличие символов в разных регистрах (латинские и кириллические)
var hasUppercase = /[A-ZА-Я]/.test(textEntry);
var hasLowercase = /[a-zа-я]/.test(textEntry);

if (hasUppercase && hasLowercase) {
    variable_2 = 1;
} else {
    variable_2 = 2;
}

// Проверяем наличие специальных символов
if (/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(textEntry)) {
    variable_3 = 1;
} else {
    variable_3 = 2;
}

// Проверяем наличие цифр
if (/\d/.test(textEntry)) {
    variable_4 = 1;
} else {
    variable_4 = 2;
}

// Записываем обновленные значения переменных обратно в курс Storyline
player.SetVar("Variable_1", variable_1);
player.SetVar("Variable_2", variable_2);
player.SetVar("Variable_3", variable_3);
player.SetVar("Variable_4", variable_4); // Записываем значение Variable_4

}

};
