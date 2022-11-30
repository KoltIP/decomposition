import './App.css';
import Page from './components/Page';

function App() {

  const topics = ['СЕЙЧАС В СМИ','в Германии','Рекомендуем']
  const news = [
    'Путин упростил получение автомобильных номеров',
    'В команде Зеленского раскрыли план реформ на Украине',
    '«Турпомощь» прокомментировала гибель десятков россиян в Анталье',
    'Суд закрыл дело Демпартии США против России',
    'На Украине призвали создать ракеты для удара по Москве'
  ]
  const themes = [
    'Видео','Картинки','Новости','Карты','Макет','Переводчик','Эфир', 'Ещё'
  ]

  const exchanges = [
    {
    exchangesName :'USD MOEX',
    exchangesValue : '63,52',
    change : '+0,09'
    },
    {
      exchangesName :'EUR MOEX',
      exchangesValue : '70,86',
      change : '+0,14'
    },
    {
      exchangesName :'НЕФТЬ',
      exchangesValue : '64,90',
      change : '+1,63'
    },
  ]

  const exampleFind = 'фаза Луны сегодня'

  const options = [
    {
      name:'Погода',
      content: <img src='./img/weather.png' />
    },
    {
      name:'Карта Германии',
      content: <span>Расписание</span>
    },
    {
      name:'Эфир',
      content:<ul><li>Управление, как искусство</li><li>Ночь.Мир в это время</li><li>Андрей Возн...</li></ul>
    },
    {
      name:'Посещаемое',
      content:<ul><li><span className='bold'>Недвижимость</span> - о сталинках</li><li><span className='bold'>Маркет</span> - люстры и светильники</li><li><span className='bold'>Авто.ру</span> - привод 4x4 до 500 000</li></ul>
    },
    {
      name:'Телепрограмма',
      content:<ul style={{listStyle : 0}}><li>2.00  ТНТ.Best</li><li>2.15 Джинглики</li><li>2.25  Наедине со всеми</li></ul>
    }
  ]
  return (
    <>
      <Page
          topics = {topics}
          news = {news}
          exchanges={exchanges}
          themes = {themes}
          exampleFind = {exampleFind}
          options = {options}
      />   
      
    </>  
  )
}

export default App;
