import React from 'react'
import image1 from '../../assets/history.png'

const MoreHistory = () => {
  return (
    <div className='w-full h-fit bg-white'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center items-center pt-10'>
        <h1 className='text-6xl font-pacifico text-blueVap'>История на училището</h1>
        <div className='w-[100%] flex flex-col justify-center items-center mt-10 gap-10'>
          <img src={image1} alt="" className='w-[500px]' />
          <p>
            Средно училище “Никола Вапцаров” се ражда от мечтата на айтозлии за ново, модерно, просторно и красиво училище. За първи път то отваря врати през учебната 1983 / 1984 г. В основата на новооткритото училище стои елитът от ученици и учители на Първо основно училище “Кирил и Методий”
            <br />
            <br />
            При откриването на училището в него се обучават ученици от I до Х клас по общообразователен учебен план и два профила на учебно – професионален комплекс (УПК)- “Електроника” и ” Машиностроене”.
            <br />
            <br />
            През годините училището гради свой собствен облик, амбициозно поставя основите на нови за града и общината неща:
          </p>
          <h1 className='text-4xl font-pacifico text-blueVap'>За ПЪРВИ ПЪТ в града и общината :</h1>
          <ul>
            <li>
            1983г. – Профилирано обучение В УПК по два профила.
            </li>
            <li>
            1983г. – Компютърен кабинет с компютри “Правец – 16”.
            </li>
            <li>
            1984г. – Засилено изучаване на изкуства. 1986г. – Оборудван училищен комплекс на здравето.
            </li> 
            <li>
            1988г. – Хор на айтоските момчета.
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default MoreHistory