const CardList11 = [
  {
    title: "Маркетинг",
    category: "Marketing",
    id: 2,
    image:
      "data:image/jpeg;base64,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",
    desc:
      "Студии на случај ќе научиш како да се справуваш со маркетинг предизвиците во дигиталниот свет и ќе ги стекнеш најбараните дигитални вештини во моментот",
    isClicked: false,
    lesson: [
      {
        title: "Вовед во дигитален маркетинг",
        desc:
          "На ова предавање Теодора Николовска од Vrootok ќе ве воведе во основите на Дигиталниот маркетинг.",
        time: "1h 25m",
        link: "https://www.youtube.com/watch?v=-nTS6teTfPE",
      },
      {
        title: "Маркетинг на социјалните мрежи",
        desc:
          "Запознај се со основите на управување со социјалните мрежи и креирање содржина што ќе ги донесе и задржи посетителите на твоите канали.",
        time: "1h 33m",
        link: "https://www.youtube.com/watch?v=CrSpcOS5QxQ",
      },
      {
        title: "Како до кариера во Дигитален маркетинг",
        desc:
          "Следи го бесплатното online предавање на кое Дарјан Раденковиќ ќе сподели искуства како да започнеш кариера во Дигитален маркетинг",
        time: "1h 40m",
        link: "https://www.youtube.com/watch?v=TahJJyR6b-o",
      },
    ],
  },
  {
    title: "Бизнис",
    category: "Business",
    id: 3,
    image:
      "https://sunedison.in/wp-content/uploads/2020/01/Physics-and-business-1.jpg",
    desc:
      "Студии на случај ќе научиш како да се справуваш со маркетинг предизвиците во дигиталниот свет и ќе ги стекнеш најбараните дигитални вештини во моментот",
    isClicked: false,
    lesson: [
      {
        title: "Building a corporate start up in 12 months",
        desc:
          "A short 30 minute webinar where we will cover in depth what are the milestones,how to set it up and tasks and pitfalls",
        time: "35m",
        link: "https://online.brainster.co/build-a-corporate-startup/",
      },
      {
        title: "Основи на Scrum",
        desc:
          "Scrum методологијата е едноставен проектен пристап кој овозможува поголема ефективност и продуктивност на тимот, навреме завршени проекти и задоволни клиенти.",
        time: "51m",
        link: "https://online.brainster.co/osnovi-na-scrum/",
      },
    ],
  },
  {
    title: "UX",
    category: "UX",
    id: 4,
    image: "https://miro.medium.com/max/1050/1*hp-yfKsmzsj711iLbM8eEw.jpeg",
    desc:
      "Студии на случај ќе научиш како да се справуваш со маркетинг предизвиците во дигиталниот свет и ќе ги стекнеш најбараните дигитални вештини во моментот",
    isClicked: false,
    lesson: [
      {
        title: "Што е UX, а што UI дизајн?",
        desc:
          "Ако имаш интерес за кариера во UX/UI дизајн ова предавање ќе одговори на клучното прашање, што е разликата помеѓу UX и UI дизајн и што подразбира кариера во оваа професија.",
        time: "58m",
        link: "https://online.brainster.co/ux-ui-dizajn/",
      },
      {
        title: "Што значи UX Мindset?",
        desc:
          "На ова предавање ќе се запозаеме малку повеќе со поимот User Experience, со цел да сфатиме, дека всушност е начин на размислување на еден дизајнер. ",
        time: "35m",
        link:
          "https://online.brainster.co/free-ux-ui-webinar-with-ilija-dimkoski/",
      },
      {
        title: "UX Design in everyday life",
        desc:
          "User Experience Design is about a user-centered mindset above all and we can enhance our learning process by practicing it in our daily activities and interactions...",
        time: "45m",
        link: "https://online.brainster.co/ana-ux-ui-webinar/",
      },
      {
        title: "Why switching a career in UX/UI is a great idea?",
        desc:
          "In this webinar, We will show you why UX design will help you future-proof your career.",
        time: "1h 21m",
        link: "https://www.youtube.com/watch?v=TahJJyR6b-o",
      },
    ],
  },
  {
    title: "Дизајн",
    category: "Design",
    id: 5,
    image:
      "https://image.freepik.com/free-vector/design-word-concept_23-2147844787.jpg",
    desc:
      "Студии на случај ќе научиш како да се справуваш со маркетинг предизвиците во дигиталниот свет и ќе ги стекнеш најбараните дигитални вештини во моментот",
    isClicked: false,
    lesson: [
      {
        title: "ОД СКИЦА ДО ГРАФИЧКИ ДИЗАЈН",
        desc:
          "На ова предавање ќе се запознаеш со процесот на скицирање и како твојата идеја да ја пренесеш на лист хартија па се до графичко решение.",
        time: "1h 10m",
        link: "https://online.brainster.co/skica-do-dizajn/",
      },
      {
        title: "КРЕИРАЊЕ НА БРЕНД ИДЕНТИТЕТ",
        desc:
          "Како се создава еден бренд? Низ анализа на реални проекти – LAIKA & COLONY,  ќе можеш да ги научиш основите на создавање на еден бренд. Од креирање на лого, преку избор на бои, до типографија и приказната која стои позади брендот.",
        time: "1h 17m",
        link: "https://online.brainster.co/kreiranje-na-brend-identitet/",
      },
    ],
  },
  {
    title: "Програмирање",
    category: "Programming",
    id: 6,
    image:
      "https://www.goodcore.co.uk/blog/wp-content/uploads/2019/08/coding-vs-programming-2-1024x439.jpg",
    desc:
      "Студии на случај ќе научиш како да се справуваш со маркетинг предизвиците во дигиталниот свет и ќе ги стекнеш најбараните дигитални вештини во моментот",
    isClicked: false,
    lesson: [
      {
        title: "Основи на WordPress",
        desc:
          "На ова предавање ќе се запознаеш со можностите на платформата што сочинува 1/3 од денешниот Интернет, ќе научиш да ги користиш клучните алатки и ќе дознаеш какви кариерни опции ти нуди владеење на WordPress.",
        time: "1h 30m",
        link: "https://www.youtube.com/watch?v=eB1gDC8OGEU&feature=youtu.be",
      },
      {
        title: "Напиши го твојот прв код во JavaScript",
        desc:
          "Најдобар начин да се запознаеш со програмирање и да го надминеш иницијалниот страв од истото е да седнеш и да почнеш да пишуваш код.",
        time: "1h 43m",
        link: "https://online.brainster.co/voved-vo-javascript/",
      },
    ],
  },
  {
    title: "Data-Science",
    category: "Data-Science",
    id: 7,
    image: "https://miro.medium.com/max/925/1*E1haIGB9K4K89PsFZgm-pw.jpeg",
    desc:
      "Студии на случај ќе научиш како да се справуваш со маркетинг предизвиците во дигиталниот свет и ќе ги стекнеш најбараните дигитални вештини во моментот",
    isClicked: false,
    lesson: [
      {
        title: "ВОВЕД ВО DEEP LEARNING",
        desc:
          "Запознај се со најпопуларниот домен во Data Science – Deep Learning.",
        time: "1h 48m",
        link: "https://online.brainster.co/deep-learning/",
      },
      {
        title: "Како до кариера во Data Science",
        desc:
          "Следи го бесплатното online предавање на кое Мартина Ристеска ќе сподели искуства како да започнеш кариера во Data Science ",
        time: "2h 28m",
        link: "https://www.youtube.com/watch?v=GR8-EztBI9I&feature=youtu.be",
      },
      {
        title:
          "Data Science вебинар - Вовед во Computer Vision & Multitask Learning",
        desc:
          "На ова предавање ќе се запознаеш со можностите на Computer Visiоn, Artificial Intelligence, како и со нов тип на учење во Data Science со назив - Many Task Learning.",
        time: "1h 33m",
        link: "https://www.youtube.com/watch?v=k92DWvhNtYA&feature=youtu.be",
      },
      {
        title: "Вовед во Machine Learning: Emotion Detection",
        desc:
          "Запознај се со основите на Machine Learning, еден од најпопуларните домени во Data Science, преку детектирање на човечки емоции и афектни состојби",
        time: "1h 58m",
        link: "https://online.brainster.co/ml-emotion-detection/",
      },
    ],
  },
];

export default CardList11;
