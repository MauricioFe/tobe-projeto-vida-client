import { useEffect, useLayoutEffect, useState } from 'react';
import '../../LandPage/Courses/Style/Courses.scss'
import '../../LandPage/Courses/Style/CoursesResponsive.scss'
import ButtonSlide from './ButtonSlide';
import CardCourse from "./CardCourse";
import changeItemPosition from "../../../utils/ArrayUtils";

export default function Courses() {

  interface Course {
    id: number,
    title: String,
    description: String
  }

  interface SlideButton {
    id: number,
    cardIdList: Array<number>
  }

  //TODO remover mocks e buscar da api
  const allCourseList: Array<Course> = [
    {
      id: 1,
      title: "Liderança",
      description: "Neste curso você desenvolverá as habilidades necessárias para liderar nesse cenário em que a única constante é a mudança."
    },
    {
      id: 2,
      title: "Oratória",
      description: "Aprenda a se expressar de forma clara e objetiva, melhorando sua comunicação interpessoal e, consequentemente, se destacando educacional e profissionalmente."
    },
    {
      id: 3,
      title: "Comunicação",
      description: "A comunicação é uma das principais  chaves para abrir as portas de um caminhar bem sucedido. Saber se comunicar é fundamental e fará toda diferença."
    },
    {
      id: 4,
      title: "Pensamento Disruptivo",
      description: "Neste curso você terá a oportunidade de desenvolver habilidades de liderança e inteligência disruptiva para ser capaz de inovar em qualquer segmento ou indústria que atua ou deseja atuar."
    },
    {
      id: 5,
      title: "StoryTelling",
      description: "Storytelling é a habilidade de contar histórias utilizando enredo elaborado e narrativa envolvente. Um bom storytelling ajuda a promover o seu negócio e vender seus serviços de forma indireta."
    },
    {
      id: 6,
      title: "Alta Produtividade",
      description: "Aumente sua produtividade e saiba como produzir muito, com o mínimo de recursos possíveis, mantendo a qualidade e a motivação de sua equipe."
    },
    {
      id: 7,
      title: "Inteligência Emocional",
      description: "A inteligência emocional é uma competência essencial, pois ajuda a lidar com a pressão, conflitos nos relacionamentos internos e desafios do cotidiano."
    },
    {
      id: 8,
      title: "Arte de falar bem",
      description: "Aprenda a organizar sua fala e transmitir sua mensagem de forma clara, objetiva e envolvente, conquistando seu público e expandindo seus horizontes."
    },
  ]
  let slideButtonList: Array<SlideButton> = []
  if (window.screen.width > 934) {
    slideButtonList = [
      {
        id: 1,
        cardIdList: [allCourseList[0].id, allCourseList[1].id]
      },
      {
        id: 2,
        cardIdList: [allCourseList[2].id, allCourseList[3].id]
      },
      {
        id: 3,
        cardIdList: [allCourseList[4].id, allCourseList[5].id]
      },
      {
        id: 4,
        cardIdList: [allCourseList[6].id, allCourseList[7].id]
      },
    ]
  } else {
    slideButtonList = [
      {
        id: 1,
        cardIdList: [allCourseList[0].id]
      },
      {
        id: 2,
        cardIdList: [allCourseList[1].id]
      },
      {
        id: 3,
        cardIdList: [allCourseList[2].id]
      },
      {
        id: 4,
        cardIdList: [allCourseList[3].id]
      },
      {
        id: 5,
        cardIdList: [allCourseList[4].id]
      },
      {
        id: 6,
        cardIdList: [allCourseList[5].id]
      },
      {
        id: 7,
        cardIdList: [allCourseList[6].id]
      },
      {
        id: 8,
        cardIdList: [allCourseList[7].id]
      },
    ]
  }
  let arrayParId: Array<number> = []
  let arrayImparId: Array<number> = []
  for (let j = 0; j < allCourseList.length; j++) {
    if (j % 2 == 0) {
      arrayImparId = [...arrayImparId, allCourseList[j].id];
    } else {
      arrayParId = [...arrayParId, allCourseList[j].id];
    }
  }
  const [screenWidth, setScreenWidth] = useState(0)
  const [courses, setCourses] = useState<Course[]>([allCourseList[0], allCourseList[1]]);
  const [activeButton, setActiveButton] = useState(0)
  const [slideButtons, setSlideButtons] = useState<SlideButton[]>(slideButtonList);
  useEffect(() => {
    defineSizeOfSlideButtonListByScreen(window.innerWidth)
    const resizeListener = () => {
      console.log("width normal "+window.screen.width)
      console.log("inner width "+window.innerWidth)     
        setScreenWidth(window.innerWidth)
        defineSizeOfSlideButtonListByScreen(window.innerWidth)
    };
    window.addEventListener('resize', resizeListener);
    return () => {
      window.removeEventListener('resize', resizeListener);
    }
  }, [])
  const handleCarouselAction = (ActivesCardsId: Array<number>, event: React.MouseEvent) => {
    var newCourses = changeItemPosition(allCourseList, ActivesCardsId)
    setCourses(newCourses)
    setActiveButton(parseInt(event.currentTarget.id.slice(-1)))
  }

  return (
    <section id="carousel">
      <div className="container">
        <div id="carousel-presentation">
          <div id="description">
            <h2>Quais cursos a ToBe <span>oferece?</span></h2>
            <h4>Temos uma variedade de cursos para você</h4>
          </div>
        </div>

        <div className="cards-carousel">
          {courses.map((item, index) => {
            return (
              <CardCourse key={item.id} {...item} index={index} />
            );
          })}

        </div>
      </div>
      <div id="slider">
        {
          slideButtons.map((item, index) => {
            return <ButtonSlide idCard={item.cardIdList}
              key={item.id}
              index={index}
              switchCardsCarousel={handleCarouselAction}
              activeButton={activeButton} />
          })
        }
      </div>
    </section>
  )

  //O parâmetro division é para definir de acordo com o tamanho
  // da tela para definir o número de bullets de slids
  function fillSlideButtonList(division: number) {
    slideButtonList.length = 0
    for (let i = 0; i < allCourseList.length / division; i++) {
      if (division === 2) {
        slideButtonList.push({ id: i + 1, cardIdList: [arrayImparId[i], arrayParId[i]] });
      } else {
        slideButtonList.push({ id: i + 1, cardIdList: [allCourseList[i].id] });
      }
    }
    setSlideButtons(slideButtonList)
  }

  function defineSizeOfSlideButtonListByScreen(width: number) {
    if (width <= 934) {
      fillSlideButtonList(1)
    } else {
      fillSlideButtonList(2)
    }
  }
}
