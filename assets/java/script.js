    let modalWin = document.querySelector ('.button-first');
    let winUp = document.querySelector('.windows');
    let darkLayer = document.createElement('div');
    darkLayer.id = 'shadow';

    modalWin.addEventListener ('click', () => {
        console.log('clicked!!!!');
        winUp.style.display = 'block';
    });

    modalWin.addEventListener ('click', () =>  {
        document.body.appendChild(darkLayer);
       });

       darkLayer.addEventListener ('click', () => {
        darkLayer.parentNode.removeChild(darkLayer);
        winUp.style.display = 'none';
        return false;
       });

       let closeWin = document.querySelector ('.button_up');
    let container = document.querySelector ('.container-text');

   closeWin.addEventListener ('click', () => {
    if (container !== " ") {
        console.error ('ERORR!');
        alert('Вы не ввели данные!');
    } else {
        alert('Данные отправлены успешно!'); 
        darkLayer.parentNode.removeChild(darkLayer);
        winUp.style.display = 'none';
    }
   });




let newsArray = [
    {
        title: "Французский багет вошел в список культурного наследия ЮНЕСКО",
        content:"Знаменитый хрустящий хлеб Франции официально внесли в список нематериального культурного наследия человечества ЮНЕСКО. В отличие от других видов хлеба, французский багет состоит всего из четырех ингредиентов (мука, вода, соль и дрожжи), также важным элементом для получения уникального продукта является мастерство пекаря. "
    },
    {
        title: "Полезный молочный шоколад будущего создан с помощью искусственного интеллекта",
        content: "Финская молочная компания Valio создала новую плитку молочного шоколада «The Bar» с помощью искусственного интеллекта. Совместно с компанией Aiwo Digital был проведен анализ более 1,5 миллионов публичных обсуждений в социальных сетях, связанных с молочным шоколадом, по всему миру."
    },
    {
        title: "В Испании прошел фестиваль помидоров",
        content: "В Испании ежегодно проводят веселый и всеми любимый фестиваль Ла Томатина, начиная с 1959 года. Десятки тысяч участников приезжают из разных стран, чтобы поучаствовать в битве, «оружием» в которой служат перезревшие помидоры. Организацией праздника и снабжением помидорами занимается мэрия ..."
    }
];



//    let newsArray = [
//     {
//         data:"21 OCT, 2022",
//         title: "У робота есть «библиотека поведения»",
//         content: "Boston Dynamics рассказала, как научила роботов Atlas заниматься паркуром. Машина на каждом этапе сама решает, что ей делать в этой ситуации."
//     },
//     {
//         data:"03 Dec, 2022",
//         title: "Производство электромобилей под маркой Lada.",
//         content: "Через 7 лет в России появятся свои электромобили. Их будут производить под маркой Lada."
//     },
//     {
//         data:"20 Dec, 2022",
//         title: "В GitHub появилась встроенная поддержка файлов CITATION.cff.",
//         content: "В GitHub завезли расширенную поддержку цитирования, чтобы было проще ссылаться на репозитории исследователей."
//     }
//   ];

  let newsBlock = document.querySelector ('.news-one');
  let newsOneTitle = newsBlock.querySelector ('h5');
  newsOneTitle.textContent = newsArray[0].title;
  let newsOne = newsBlock.querySelector ('p');
  newsOne.textContent = newsArray[0].content;

  let newsBlockTwo = document.querySelector ('.news-two');
  let newsTwoTitle = newsBlockTwo.querySelector ('h5');
  newsTwoTitle.textContent = newsArray[1].title;
  let newsTwo = newsBlockTwo.querySelector ('p');
  newsTwo.textContent = newsArray[1].content;

  let newsBlockThree = document.querySelector ('.news-three');
  let newsThreeTitle = newsBlockThree.querySelector ('h5');
  newsThreeTitle.textContent = newsArray[2].title;
  let newsThree = newsBlockThree.querySelector ('p');
  newsThree.textContent = newsArray[2].content;