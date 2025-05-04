# s
Здравствуйте, меня зовут… Человек. Число рук равно 2. Число ног равно 2. Группа крови равна 1. Резус равен истине.

  

Вам может показаться, что лишь по этой информации, без имени, фамилии и даже никнейма меня сложно отличить от множества других авторов статей. И будете правы. Однако, во фронтенде я часто вижу, как имя элемента заменяется его описанием. И это никого не волнует.

  

![Три мужика и девочка](https://habrastorage.org/r/w1560/webt/6w/cb/a3/6wcba379mp1ofvxslmervuell7q.jpeg)

  

Присаживайтесь поудобнее, впереди вас ждёт увлекательное путешествие по серьёзным проблемам серьёзных проектов, которые, тем не менее, зачастую недооценивают.

  

# Тесты

  

Представьте себя в роли писателя автоматических End-To-End тестов. Вам нужно протестировать, что, например, в [Яндексе](https://yandex.ru/) в правом верхнем углу выводится правильное имя залогиненного пользователя.

  

![Морда Яндекса глазами Админа](https://habrastorage.org/r/w1560/webt/dd/h-/gx/ddh-gxqk_vqdyj_oqhaxwydvkdm.png)

  

Дайте заверстать эту страницу типичному верстальщику и он родит вам нечто такое:

  

```html
<body>
    <aside>
        <div class="card">

            <div class="username">admin</div>

        </div>
        <!-- какой-то хтмл -->
    </aside>
    <section>
        <!-- какой-то хтмл -->
    </section>
</body>
```

  

Вопрос на засыпку: как найти дом-элемент, где выводится имя пользователя?

  

![Два пути, а суть одна](https://habrastorage.org/r/w1560/webt/4k/lz/qw/4klzqw327a80xzmtzfxmwb1azzy.jpeg)

  

Тут у тестировщика есть выбор из двух стульев:

  

1. **Написать css или xpath селектор** вида `aside > .card > .username` и молиться, чтобы в боковой панели никогда не появилось других карточек. А в карточке не появилось других имён пользователей. И чтобы никто её не поменял на какую-нибудь кнопочку. И не завернул её в какую-нибудь панельку. Короче, это очень хрупкий селектор, использование которого будет ломать тесты при малейших изменениях на странице.
2. **Попросить разработчика добавить уникальный для страницы идентификатор**. Это верный путь наслать на себя гнев разработчика. Ведь у него всё на компонентах. А компоненты выводятся много где, и не знают (и не должны знать) ничего о приложении. Наивно полагать, что какой-либо компонент всегда будет на странице в единственном экземпляре, а значит в сам компонент нельзя зашивать идентификатор. Но на уровне приложения есть только использование компонента LegoSidebar. А прокидывать идентификаторы через несколько уровней вложенности компонент — та ещё оказия.

  

Как видно, один вариант хуже другого — страдают либо разработчики, либо тестировщики. Причём, как правило перекос в сторону последних. Потому как они вступают в дело как правило, когда первые уже закончили разработку этой фичи, и вовсю пилят другую.

  

Посмотрим, как справились с вёрсткой этого простого блока верстальщики из Яндекса (пришлось удалить 90% мусора, чтобы была видна суть):

  

```html
<div class="desk-notif-card">
    <div class="desk-notif-card__card">
        <div class="desk-notif-card__domik-user usermenu-link">
            <a class="home-link usermenu-link__control" href="https://passport.yandex.ru">

                <span class="username desk-notif-card__user-name">admin</span>

            </a>
        <!-- какой-то хтмл -->
        </div>
    </div>
</div>
<!-- какой-то хтмл -->
```

  

Благодаря БЭМ, у нужного нам элемента есть в имени класса информация о контексте на 1 уровень вверх (какое-то имя пользователя в какой-то карточке). Но можно ли быть уверенным, что такая карточка всегда будет одна на странице? Смелое предположение. А значит, опять приходится выбирать между двумя табуретами.

  

![Ой, какой сложный выбор](https://habrastorage.org/r/w1560/webt/ux/uq/yk/uxuqykx7oeavyh3se-z_bbwv-di.jpeg)

  

А вот [другой пример](https://yandex.ru/#text) с полем поиска, где разработчика заставили поставить идентификатор. Ну он и поставил:

  

```html
<input
    class="input__control input__input"
    id="text"
    name="text"
/>
```

  

Разработчик плохой? Нет, **плоха архитектура**, не помогающая генерировать глобально уникальные идентификаторы.

  

# Статистика

  

Представьте себя в роли аналитика. Вам нужно понять по чему пользователи чаще кликают для открытия меню аккаунта в боковой панели [Яндекса](https://yandex.ru/): по имени пользователя или по его аватарке.

  

![База кликов по лицам](https://habrastorage.org/r/w1560/webt/u7/y5/ui/u7y5uie7llird8noggd1iwkzjzq.jpeg)

  

Информация нужна вам вот прямо сейчас, поэтому скамья у вас есть только одна — работать с той статистикой, что уже собрана. Даже если разработчики озаботились тем, чтобы уже записывались все клики по всем страницам с сохранением всей иерархии элементов в момент клика, вы всё-равно не сможете составить правильный селектор, чтобы отфильтровать нужные клики. И даже если вы попросите это сделать разработчика — он тоже скорее всего где-то ошибётся. Особенно, если вёрстка менялась со временем.

  

То есть вам нужны глобальные уникальные идентификаторы нужных вам элементов. Причём проставленные сильно заблаговременно. Но так как разработчики в массе своей плохо справляются с точным предсказанием будущего, то выглядит это как правило так: аналитик приходит к разработчикам и просит поставить идентификатор, а информацию получает в лучшем случае через месяц.

  

![Чую здесь нужен идентификатор](https://habrastorage.org/r/w1560/webt/f_/d5/bl/f_d5bli-vewz44uaxzicsondbw4.jpeg)

  

В случае с Яндексом плод героических усилий разработчиков выглядит так:

  

```html
<div class="desk-notif-card__domik-user usermenu-link">
    <a
        class="home-link usermenu-link__control"
        href="https://passport.yandex.ru"
        data-statlog="notifications.mail.login.usermenu.toggle"
        >
        <!-- какой-то хтмл -->
    </a>
    <a
        class="home-link desk-notif-card__user-icon-link usermenu-link__control avatar"
        href="https://passport.yandex.ru"
        data-statlog="notifications.mail.login.usermenu.toggle-icon"
        >
        <!-- какой-то хтмл -->
    </a>
</div>
```

  

Эх, а как было бы классно, чтобы **у любого элемента** всегда были такие идентификаторы. Чтобы они были так же понятны человеку. И при этом были стабильными, а не менялись при любом изменении вёрстки. Но с ручным приводом счастья не достигнуть.

  

# Стили

  

Представьте себя в роли верстальщика. Вам нужно по особенному стилизовать имя пользователя в карточке в боковой панели Яндекса. Сделаем первый подход к снаряду, без использования БЭМ. Вот ваш компонент:

  

```javascript
const Morda = ()=>
    <div class="morda">
        {/* какой-то контент*/}
        <LegoSidebar />
    </div>
```

  

А вот пачка компонент, поддерживаемая совсем другими ребятами:

  

```javascript
const LegoSidebar = ( { username } )=>
    <aside className="lego-sidebar">
        <LegoCard>
            <LegoUsername>{ username }</LegoUsername>
        </LegoCard>
    </aside>

const LegoCard = ( {} , ... children )=>
    <div className="lego-card">
        { ... children }
    </div>

const LegoUsername = ( {} , ... children )=>
    <div className="lego-username">
        { ... children }
    </div>
```

  

Всё в сумме даёт такой результат:

  

```html
<body class="morda">
    <aside class="lego-sidebar">
        <div class="lego-card">

            <div class="lego-username">admin</div>

        </div>
        <!-- какой-то хтмл -->
    </aside>
</body>
```

  

![Тут определённо нужна валерьянка](https://habrastorage.org/r/w1560/webt/yk/vf/sz/ykvfsz7hi0rrwzoft0hdzvhra0m.jpeg)

  

Если используется изоляция стилей, то присесть вам попросту не на что. Стойте и ждите, пока эти другие ребята добавят в свои компоненты прокидывание кастомного класса через LegoSidebar, до LegoUsername:

  

```javascript
const LegoSidebar = ( { username , rootClass , cardClass , usernameClass } )=>
    <aside className={ "lego-sidebar " + rootClass }>
        <LegoCard rootClass={ cardClass }>
            <LegoUsername rootClass={ usernameClass}>{ username }</LegoUsername>
        </LegoCard>
    </aside>

const LegoCard = ( { rootClass } , ... children )=>
    <div className={ "lego-card " + rootClass }>
        { ... children }
    </div>

const LegoUsername = ( { rootClass } , ... children )=>
    <div className={ "lego-username " + rootClass }>
        { ... children }
    </div>
```

  

И хорошо, если они вложены друг в друга непосредственно, а не через десяток промежуточных компонент. Иначе они помрут под грузом лапши из копипасты.

  

![Преодолевая трудности, созданные своими же руками](https://habrastorage.org/r/w1560/webt/rp/k-/pc/rpk-pcqblsxadg8by9fwfhu0qpi.jpeg)

  

Если же изоляция не используется, то добро пожаловать в кресло из хрупких селекторов:

  

```css
.morda .lego-sidebar > .lego-card > .lego-username:first-letter {
    color : inherit;
}
```

  

Однако, если бы у нас был инструмент, который бы брал локальные имена:

  

```javascript
const Morda = ()=>
    <div>
        {/* какой-то контент*/}
        <Lego_sidebar id="sidebar" />
    </div>

const Lego_sidebar = ( { username } )=>
    <aside>
        <Lego_card id="profile">
            <Lego_username id="username">{ username }</Lego_username>
        </Lego_card>
    </aside>

const Lego_card = ( {} , ... children )=>
    <div>
        { ... children }
    </div>

const Lego_username = ( {} , ... children )=>
    <div>
        { ... children }
    </div>
```

  

Склеивал бы их с учётом вложенности компонент, генерируя классы вплоть до корня приложения:

  

```html
<body class="morda">
    <aside class="lego_sidebar morda_sidebar">
        <div class="lego_card lego_sidebar_profile morda_sidebar_profile">

            <div class="lego_username lego_sidebar_username morda_sidebar_username">admin</div>

        </div>
        <!-- какой-то хтмл -->
    </aside>
</body>
```

  

То мы могли бы **стилизовать любой элемент**, как бы глубоко он ни находился:

  

```css
.morda_sidebar_username:first-letter {
    color : inherit;
}
```

  

Не, это фантастика. Такого не бывает.

  

![Через 5 лет 99% хипстерского кода можно только выбросить](https://habrastorage.org/r/w1560/webt/i4/tw/wo/i4twwo_ixm9rtjedb3cgjjwx6ck.jpeg)

  

# Перенос элементов

  

Представьте себя в роли разработчика библиотеки рендеринга. Высокоэффективные реактивные алгоритмы с применением VirtualDOM, IncrementalDOM, DOM Batching и прочих WhateverDOM позволяют вам всего лишь за считанные секунды генерировать такого вида DOM для скрам-доски:

  

```html
<div class="dashboard">
    <div class="column-todo">
        <div class="task">
            <!-- много html -->
        </div>
        <!-- много других карточек -->
    </div>
    <div class="column-wip">
    </div>
    <div class="column-done">
    </div>
</div>
```

  

Из такого вида стейта:

  

```javascript
{
    todo : [
        {
            /* много данных */
        },
        /* много задач */
    ] ,
    wip : [] ,
    done : [] ,
}
```

  

И вот незадача: пользователь начинает дрегендропить задачи туда-сюда и ожидает, что происходить это будет быстро. Казалось бы, нужно просто взять DOM элемент задачи и переместить его в другое место в DOM-e. Но это придётся вручную работать с DOM и быть уверенным, что во всех местах задачи всегда рендерятся в адсолютно одно и то же DOM дерево, что зачастую не так — мелкие различия обычно есть. Короче, менять DOM вручную — это как сидеть на одноколёсном велосипеде: одно не осторожное движение и ничто вас уже не спасёт от силы тяжести. Надо как-то объяснять системе рендеринга, чтобы она понимала, где задача перенесена, а где одна была удалена, а другая добавлена.

  

![Ошибка переноса идентичности не в то тело](https://habrastorage.org/r/w1560/webt/6c/co/zr/6ccozr3zlfgxounqgzyl1j0njdm.jpeg)

  

Чтобы решить эту проблему, необходимо снабжать вьюшки идентификаторами. Если идентификаторы совпали, то отрендеренную вьюшку можно просто перенести в новое место. Если не совпали, значит это разные сущности и нужно одну уничтожить, а другую создать. При этом важно, чтобы идентификаторы не повторялись, и не могли совпасть случайно.

  

Пока вы переносите элементы в рамках одного родительского DOM элемента, вам могут помочь [аттрибут key из Реакта](https://ru.reactjs.org/docs/lists-and-keys.html), [параметр ngForTrackBy из Ангуляра](https://angular.io/api/common/NgForOf#ngForTrackBy) и аналогичные штуки в других фреймворках. Но это слишком частные решения. Стоит перенести задачу в другую колонку, и все эти оптимизации перестают работать.

  

Но если бы у каждого DOM элемента был был глобально уникальный идентификатор, не зависящий от того, куда этот элемент отрендерен, то использование `getElementById` позволило бы быстро переиспользовать существующее DOM дерево при переносе сущности из одного места в другое. В отличие от упомянутых выше костылей к рендерингу списков, глобальные идентификаторы решают проблему системно и не сломаются, даже если в колонках появятся группироки или ещё какая дичь:

  

```html
<div id="/dashboard">

    <div id="/dashboard/column-todo">

        <div id="/dashboard/todo/priority=critical">

            <div id="/dashboard/task=y43uy4t6">
                <!-- много html -->
            </div>

            <!-- много других карточек -->

        </div>

        <!-- другие группы по приоритетам -->

    </div>

    <div id="/dashboard/column-wip">

        <div id="/dashboard/wip/assignee=jin"></div>
        <!-- другие группы по ответственному -->

    </div>

    <div id="/dashboard/column-done">

        <div id="/dashboard/done/release=0.9.9"></div>
        <!-- другие группы по релизам -->

    </div>

</div>
```

  

![Колонки с группировками](https://habrastorage.org/r/w1560/webt/6w/mx/mi/6wmxmitxj80xyg3zlkcxeekh8kw.jpeg)

  

# Семантика

  

Представьте себя в роли верстальщика. И вам нужно добавить `div` вот туда. Представили? Теперь убейте себя. Вы уже испорчены html-ом.

  

На самом деле вам нужно не `div` добавить, а блок названия карточки. `title` — имя этого блока, отражающее его семантику в месте использования. `div` — тип блока, отражающий его внешность и поведение независимо от места использования. Если бы мы верстали на TypeScript, то это выражалось бы так:

  

```plaintext
const Title : DIV
```

  

Мы можем тут же создать экземпляр типа:

  

```plaintext
const Title : DIV = new DIV({ children : [ taskName ] })
```

  

И позволить тайпскрипту вывести тип автоматически:

  

```plaintext
const Title = new DIV({ children : [ taskName ] })
```

  

Ну а тут уже и до HTML не далеко:

  

```plaintext
const Title = <div>{ taskName }</div>
```

  

Обратите внимание, что `Title` — это не просто случайное имя переменной, которой воспользовался и выбросил. Это первичная семантика данного элемента. И чтобы её не терять она должна быть отражена в результате:

  

```plaintext
const Title = <div id="title">{ taskName }</div>
```

  

И снова избавляемся от тавтологии:

  

```plaintext
<div id="title">{ taskName }</div>
```

  

Добавим остальные элементы:

  

```plaintext
<div id="task">
    <div id="title">{ taskName }</div>
    <div id="deadline">{ taskDue }</div>
    <div id="description">{ taskDescription }</div>
</div>
```

  

Учтём, что кроме заголовка карточки задачи может быть много других заголовков и в том числе заголовков карточек других задач:

  

```plaintext
<div id="/dashboar/column-todo">
    <div id="/dashboard/column-todo/title">To Do</div>
    <div id="/dashboard/task=fh5yfp6e">
        <div id="/dashboard/task=fh5yfp6e/title">{ taskName }</div>
        <div id="/dashboard/task=fh5yfp6e/deadline">{ taskDue }</div>
        <div id="/dashboard/task=fh5yfp6e/description">{ taskDescription }</div>
    </div>
    <div id="/dashboard/task=fhty50or">
        <div id="/dashboard/task=fhty50or/title">{ taskName }</div>
        <div id="/dashboard/task=fhty50or/deadline">{ taskDue }</div>
        <div id="/dashboard/task=fhty50or/description">{ taskDescription }</div>
    </div>
</div>
```

  

Таким образом у нас для каждого элемента формируются человекопонятные идентификаторы предельно точно отражающие их семантику и потому являющиеся глобально уникальными.

  

Обратите внимание, что семантика определяется по принадлежности, а не по расположению. Хотя карточка задачи `/dashboard/task=fh5yfp6e` и находится в колонке `/dashboard/todo`, но принадлежит она дашборду `/dashboard`. Именно он её создал. Он её настроил. Он дал ей имя и обеспечил уникальность её идентификатора. Он ею полностью управляет. Он же её и уничтожит.

  

![Знай, кто твой папочка](https://habrastorage.org/r/w1560/webt/xm/dd/lm/xmddlmqozt7l9ohnrppox3jqyz0.jpeg)

  

А вот использование "правильных html тегов" — это не семантика, это типизация:

  

```plaintext
<section id="/dashboard/column-todo">
    <h4 id="/dashboard/column-todo/title">To Do</h4>
    <figure id="/dashboard/task=fh5yfp6e">
        <h5 id="/dashboard/task=fh5yfp6e/title">{ taskName }</h5>
        <time id="/dashboard/task=fh5yfp6e/created">{ taskCreated }</time>
        <time id="/dashboard/task=fh5yfp6e/deadline">{ taskDue }</time>
        <div id="/dashboard/task=fh5yfp6e/description">{ taskDescription }</div>
    </figure>
</section>
```

  

Обратите внимание на два тега `time` имеющих совершенно разную семантику.

  

# Локализация

  

Представьте себя в роли переводчика. У вас предельно простая задача — перевести строку текста с английского на русский. Вам досталась строка "Done". Если это действие, то переводить надо как "Завершить", а если состояние, то как "Завершено", но если это состояние задачи, то "Выполнено". Без информации о контексте употребления невозможно правильно перевести текст. И тут у разработчика опять есть две лавки:

  

1. Снабжать тексты комментариями с информацией о контексте. А комментарии писать лень. И насколько полная нужна информация не понятно. И кода уже получается больше, чем при получении текстов по ключу.
2. Получать тексты по ключу, прочитав который можно понять контекст употребления. Вручную заданный он не гарантирует полноту информации, но он хотя бы будет уникальным.

  

![Опять выбор из двух зол](https://habrastorage.org/r/w1560/webt/77/qp/6x/77qp6xx1zhvuzoackq_gryssyzs.jpeg)

  

Но что если мы не хотим абы как сидеть, а хотим гордо стоять на твёрдой основе из лучших практик? Тогда нам нужно в качестве ключа использовать комбинацию из имени типа (компонента, шаблона), локального имени элемента в рамках этого типа и имени его свойства. Для текста "Done" как названия колонки таким ключом будет `github_issues_dashboard:column-done:title`. А для текста "Done" на кнопке завершения задачи в карточке задачи идентификатор будет уже `github_issues_task-card:button-done:label`). Это, конечно, не те идентификаторы, о которых мы говорили ранее, но формируются эти ключи из тех же имён, которые мы явно или неявно даём составным элементам. Если мы именуем их явно, то у нас есть возможность автоматизировать генерацию различных ключей и идентификаторов. Но если неявно, то приходится задавать эти ключи и идентификаторы вручную и надеяться, что не вспыхнет бардака с именованием одной и той же сущности в разных местах по разному.

  

# Отладка

  

Представьте себя в роли прикладного разработчика. Прилетает вам баг-репорт:

  

```plaintext
Ничего не работает! Всё пропало!

Приложение не открывается, в консоли такое:

Uncaught TypeError: f is not a function
    at <Button>
    at <Panel>
    at <App>
```

  

— Ага, та самая известная `f` из какой-то кнопки, на какой-то панели, — заявил бы диванный эксперт, — Всё ясно.

  

![Тут и дураку понятно](https://habrastorage.org/r/w1560/webt/5f/-n/ko/5f-nkocnp4fr7agr-sidcb3cny0.jpeg)

  

Или нет? А если бы это был всего один уникальный идентификатор:

  

```plaintext
/morda/sidebar/close
```

  

— Ага, кнопка закрытия сайдбара сломалась. ВасяП, это к тебе, шевели булками.

  

Садится Вася за приложуху, вбивает полученный идентификатор в девелоперской консоли, и тут же получает экземпляр компонента, где сразу видно, что кнопке в качестве обработчика нажатия кто-то умный передал строку:

  

![Кажется это не совсем HTML](https://habrastorage.org/r/w1560/webt/yr/fz/sg/yrfzsgsjqmklclclwwlczzknuws.png)

  

Хорошо, что у каждого компонента есть идентификатор. И по этому идентификатору этот **компонент легко получить**, без плясок вокруг дебаггера. Правда нужен инструмент, позволяющий найти компонент по идентификатору. А что если сам идентификатор будет программным кодом, для получения компонента?

  

```plaintext
<button id="Components['/morda/sidebar/close']">X</button>
```

  

Тогда этот код можно скопипастить прямо в консоль для быстрого доступа к состоянию компонента, сколько бы раз мы ни перезагружили страницу и не изменяли код.

  

# Что делать?

  

Если вы используете $mol, то вам ничего делать не надо — просто садитесь и получаете вибромассаж по полной:

  

```plaintext
$ya_morda $mol_view
    sub /
        <= Sidebar $ya_lego_sidebar

$ya_lego_sidebar $mol_view
    sub /
        <= Profile $ya_lego_card
            sub /
                <= Username $ya_lego_username
                    sub /
                        <= username \

$ya_lego_card $mol_view

$ya_lego_username $mol_view
```

  

Программист просто синтаксически не сможет не дать компоненту уникальное имя. Из этого описания компонент генерируется следующий DOM:

  

```html
<body
    id="$ya_morda.Root(0)"
    ya_morda
    mol_view
    >

    <ya_lego_sidebar
        id="$ya_morda.Root(0).Sidebar()"
        ya_lego_sidebar
        mol_view
        ya_morda_sidebar
        >

        <ya_lego_card
            id="$ya_morda.Root(0).Sidebar().Profile()"
            ya_lego_card
            mol_view
            ya_lego_sidebar_profile
            ya_morda_sidebar_profile
            >

            <ya_lego_username
                id="$ya_morda.Root(0).Sidebar().Username()"
                ya_lego_username
                mol_view
                ya_lego_sidebar_username
                ya_morda_sidebar_username
                >
                admin
            </ya_lego_username>

        </ya_lego_card>

    </ya_lego_sidebar>

</body>
```

  

Код в идентификаторах мало того, что глобально уникальный, так ещё и являет собой API через который можно обратиться к любому компоненту. Ну а стектрейсы — это просто сказка:

  

```javascript
Uncaught (in promise) Error: Test error
    at $mol_state_local.value("mol-todos-85").calculate
    at $mol_state_local.value("mol-todos-85").pull
    at $mol_state_local.value("mol-todos-85").update
    at $mol_state_local.value("mol-todos-85").get
    at $mol_app_todomvc.Root(0).task
    at $mol_app_todomvc.Root(0).task_title
    at $mol_app_todomvc.Root(0).task_title(85).calculate
    at $mol_app_todomvc.Root(0).task_title(85).pull
    at $mol_app_todomvc.Root(0).task_title(85).update
    at $mol_app_todomvc.Root(0).task_title(85).get
    at $mol_app_todomvc.Root(0).Task_row(85).title
    at $mol_app_todomvc.Root(0).Task_row(85).Title().value
    at $mol_app_todomvc.Root(0).Task_row(85).Title().event_change
```

  

![Побеждают не те, кто хочет сделать мир лучше](https://habrastorage.org/r/w1560/webt/cu/jl/1u/cujl1ugoxrmvusc3b8a2n434m0k.jpeg)

  

Если вы подсели на Реакт, то можете пересесть на [кастомный JSX трансформер](https://github.com/eigenmethod/mol/tree/master/jsx) для генерации глобально уникальных идентификаторов по локальным именам вложенных в компонент элементов. Можете сделать себе такой же да ещё и с генерацией классов для стилизации. На примере с дашбордом шаблоны выглядят примерно так:

  

```plaintext
const Dashboard = ()=> (
    <div>
        <Column id="/column-todo" title="To Do">
            <Task
                id="/task=fh5yfp6e"
                title="foobar"
                deadline="yesterday"
                content="Do it fast!"
            />
        </Column>
        <Column id="/column-wip" title="WIP" />
        <Column id="/column-done" title="Done" />
    </div>
)

const Column = ( { title } , ... tasks )=> (
    <div>
        <div id="/title">{ title }</div>
        { tasks }
    </div>
)
const Task = ({ title , deadline , description })=> (
    <div>
        <div id="/title">{ title }</div>
        <div id="/deadline">{ deadline }</div>
        <div id="/description">{ description }</div>
    </div>
)

const App = ()=> <Dashboard id="/dashboard" />
```

  

На выходе генерируя:

  

```plaintext
<div id="/dashboar">
    <div id="/dashboar/column-todo">
        <div id="/dashboard/column-todo/title">To Do</div>
        <div id="/dashboard/task=fh5yfp6e">
            <div id="/dashboard/task=fh5yfp6e/title">foobar</div>
            <div id="/dashboard/task=fh5yfp6e/deadline">yesterday</div>
            <div id="/dashboard/task=fh5yfp6e/description">Do it fast!</div>
        </div>
    </div>
    <div id="/dashboar/wip">
        <div id="/dashboard/column-wip/title">WIP</div>
    </div>
    <div id="/dashboar/done">
        <div id="/dashboard/column-done/title">Done</div>
    </div>
</div>
```

  

![Ох, сколько копипасты](https://habrastorage.org/r/w1560/webt/ek/-h/xr/ek-hxrdgphlbluaucjcbcof5qso.jpeg)

  

Если же вы в заложниках у какого-либо другого фреймворка, то создавайте его авторам issue на добавление опциональной возможности генерации идентификаторов и классов. Или хотя бы на добавление API, через который такие возможности можно было бы реализовать самостоятельно.

  

Резюмируя, напомню, зачем надо давать уникальные имена всем элементам:

  

* Простота и стабильность E2E тестов.
* Простота сбора статистики использования приложения и её анализа.
* Простота стилизации.
* Эффективность рендеринга.
* Точная и исчерпывающая семантика.
* Простота локализации.
* Удобство отладки.