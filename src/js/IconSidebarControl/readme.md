# IconSidebarControl

Боковая панель с вкладками. Реализует `IControl`.


### Параметры

| Параметр | Описание |
| -------- | -------- |
| `<Boolean> useAnimation` | использовать ли анимацию |


### События

| Событие | Описание |
|---------|----------|
| `opening` `{ }` | сайдбар начал разворачиваться |
| `closing` `{ }` | сайдбар начал сворачиваться |
| `opened` `{ id: <String> }` | сайдбар развернулся |
| `closed` `{ id: <String> }` | сайдбар свернулся |
| `stick` `{ isStuck: <Boolean> }` | сайдбар прилепился/отлепился от противоположного конца экрана (в мобильной версии) |


### Методы

| Метод | Описание |
|-------|----------|
| `setPane(<String> id, <Object> paneOptions)` | добавить вкладку с идентификатором `id`. Принимает объект опций вкладки `paneOptions` |
| `enable(<String> id, <Boolean> enabled)` | установить доступность вкладки |
| `open(<String> id)` | открыть вкладку с идентификатором `id` и сделать ее текущей |
| `close()` | закрыть текущую вкладку |
| `isOpened()` | возвращает состояние контрола (открыт/закрыт) |


### Опции вкладки (`paneOptions`)

| Опция | Описание |
|-------|----------|
| `<Function> createTab(<Object> tabOptions)` | функция, создающая вкладку. Принимает объект опций `tabOptions`. Возвращает контейнер вкладки` |
| `<Integer> position ?` | порядковый номер вкладки. По умолчанию `0` |
| `<Boolean> enabled ?` | разрешить/запретить взаимодействие со вкладкой. По умолчанию `true` |


### Опции коллбэка создания вкладки (`tabOptions`)

| Опция | Описание |
|-------|----------|
| `<String> icon` | css-класс иконки данной вкладки |
| `<String> active` | css-класс активного состояния иконки данной вкладки |
| `<String> inactive` | css-класс неактивного состояния иконки данной вкладки |
| `<String> hint` | title иконки данной вкладки |


### Пример использования

```javascript
var sidebarControl = new IconSidebarControl({
    useAnimation: true // by default
});

sidebarControl.addTo(map);

sidebarControl.on('opening', function() {
    // sidebar opening
});

sidebarControl.on('closing', function() {
    // sidebar closing
});

sidebarControl.on('opened', function(e) {
    console.log(e.id === sidebarControl.getActiveTabId()); // true
});

sidebarControl.on('stick', function(e) {
    if (e.isStuck) {
        // hide some controls
    }
});
```
