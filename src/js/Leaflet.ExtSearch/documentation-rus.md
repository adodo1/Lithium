## Плагин контрола поиска

### nsGmx.SearchControl
Позволяет производить поиск объектов и размещать их на карте. Расширяет [L.Control](http://leafletjs.com/reference.html#control).

#### Создание контрола поиска

##### `new nsGmx.SearchControl (<SearchControlOptions>, options?)`


#### SearchControlOptions

| Свойство | Тип | По умолчанию | Описание |
|----------|:---:|:------------:|:---------|
| id | String | search | Идентификатор контрола. |
|position | String | `topright` | Положение контрола в одном из углов карты (`topleft`, `topright`, `bottomleft` или `bottomright`) |
| placeHolder | String | Поиск по кадастру, адресам, координатам | Подсказка поля ввода поисковой строки. |
| limit | Int | 10 | Ограничение количества выводимых объектов. |
| providers | массив объектов типа [`Provider`](#pr) | [] | Список поставщиков данных для поиска ([CoordinatesDataProvider](#pr), [OsmDataProvider](#pr)). |  
<br/>

#### Методы

###### `setPlaceholder (value)`

| Параметр | Возвращает | Тип данных | Описание |  
|----------|:----------:|:-----------|----------|
| value | - | String | Ввод текста в поле поисковой строки |


###### `setText (value)`
заменяет  содержимое строки поиска.

| Параметр | Возвращает | Тип данных | Описание |  
|----------|:----------:|:-----------|----------|
| value | - | String | Установка значения поля ввода поисковой строки. |
<br/>

### nsGmx.SearchWidget

#### Создание

##### `new nsGmx.SearchWidget(container, <SearchWidgetOptions> options)`
container - элемент, в который помещается SearchWidget.

#### SearchWidgetOptions

| Свойство | Тип | По умолчанию | Описание |
|----------|-----|:-------------|:---------|
| placeHolder | String | Поиск по кадастру, адресам, координатам | Подсказка поля ввода поисковой строки. |
| providers | массив объектов типа [`Provider`](#pr) | [] | Список поставщиков данных для поиска ([CoordinatesDataProvider](#pr), [OsmDataProvider](#pr)). |
| suggestionTimeout | Int | 1000 | Задержка вывода списка при вводе поисковой строки в миллисекундах |
| fuzzySearchLimit | Int | 1000 | Ограничение количества возвращаемых результатов при нечетком поиске |
| retrieveManyOnEnter | Bool | false | Считать нажатие "Enter" командой поиска |
| replaceInputOnEnter  | Bool | false | Заменять содержимое строки поиска описанием найденного объекта |
<br/>

#### События

| Имя | Тип | Описание |
| --- | -------- |:---------|
| `suggestions:confirm` | Event | Срабатывает при нажатии пользователем "Enter" в строке поиска. |

#### Event

| Свойство | Описание |
| -------- |:---------|
| `detail` | Текущий текст в строке поиска |

<br/>

### <a name="pr">`Провайдеры`</a>

Провайдер - это интерфейс, который должен обладать следующими свойствами.

#### Свойства поискового провайдера

| Свойство | Тип | По умолчанию | Описание |
|----------|-----|:------------:|:---------|
| showOnEnter| Bool | false | Поиск объекта, который показывается на карте |
| showSuggestion | Bool | false | Показывать список подсказок |

<br/>

#### Методы

##### `find(value, limit, strong, retrieveGeometry)`: [`Promise`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
Выполняет поиск объектов по введенной строке.

| Параметр | Тип данных | Описание | Значение по умолчанию |
|----------|------------|:---------|-----------------------|
| value | String | Поисковая строка | - |
| limit | Int | Количество элементов, возвращаемых провайдером при поиске | 10 |
| strong | Bool | Строгий поиск объектов | false |
| retrieveGeometry | Bool | Возвращает геометрию объектов | false |


##### `fetch (obj)`: [`Promise`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
Возвращает искомый объект со всеми метаданными.

| Параметр | Тип данных | Описание | Значение по умолчанию |
|----------|------------|:---------|-----------------------|
| obj | Object | Объект поиска | Null |


Метод `fetch` срабатывает при нажатии клавиши "Enter". <br/>
Имеется возможность создать собственный провайдер, реализовав соответствующие методы (`find` и `fetch`). <br/>
Крайне важен порядок поиска по провайдерам. Поиск выполняется последовательно по порядку расположения в массиве. В случае если первым провайдером получен результат, следующий уже не вызывается.

Возможно подключение следующих провайдеров: [CoordinatesDataProvider](#pr), [OsmDataProvider](#pr).

<br/>

### CoordinatesDataProvider

#### Создание провайдера поиска по координатам.

##### `new nsGmx.CoordinatesDataProvider ()`
<br/>

### OsmDataProvider

#### Создание поискового провайдера OSM

##### `new nsGmx.SearchControl.OsmDataProvider (<OsmDataProviderOptions> options)`

<br/>

#### OsmDataProviderOptions

| Свойство | Тип | По умолчанию | Описание |
|----------|-----|:------------:|:---------|
| serverBaseOptions | String | - | URL-адрес геомиксера |

#### Свойства провайдера

| Свойство | Тип | По умолчанию | Описание |
|----------|-----|:------------:|:---------|
| showOnSelect | Bool | false | Показывать объект при выделении в списке |


#### События поискового провайдера OSM

| Имя | Тип | Описание |
| --- | --- |:---------|
| fetch  | Event | Результат поискового запроса пользователя |
<br/>

`response` - параметр обработчика событий. Обладает следующим свойством.

| Свойство | Тип | Описание |
| --- | -------- | ---------|
| detail  |  OsmDataProviderResult | Массив найденных провайдером  объектов |


#### OsmDataProviderResult

| Свойство | Тип | Описание |
| -------- | --- | -------- |
| feature | GeoJSonFeature | Метаданные найденного объекта в формате [GeoJSON](https://tools.ietf.org/html/rfc7946#page-11) |
| provider | provider | Ссылка на провайдер |
| query | object | Поисковый объект, который возвращается провайдером |
<br/>
