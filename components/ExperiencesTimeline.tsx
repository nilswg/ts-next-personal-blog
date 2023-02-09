import getJobDate from '@/lib/getJobDate'
import getJobTenure from '@/lib/getJobTenure'
import { useStores } from '@/stores'
import Image from 'next/image'

type ExperienceProps = {
  id: string
  img: string
  company: string
  jobtitle: string
  location: string
  begintime: number[]
  endtime: number[]
  texts: string[]
}

const data: { en: ExperienceProps[]; ch: ExperienceProps[] } = {
  en: [
    {
      id: 'work2',
      img: '/img/experiences/lattek.jpg',
      company: 'DAH LIH PUH CO. LTD',
      jobtitle: 'Full Stack Developer',
      location: '台中市',
      begintime: [2021, 12],
      endtime: [2022, 9],
      texts: [
        'Assist in the development and rebuilding of ERP systems.',
        'Use Angular(2+) to build the user interface.',
        'Build RESTful CRUD APIs with ASP.NET Core(3.1+) and provide JWT Authentication.',
        'Create stored procedures in PL/SQL to interact Oracle Database',
        'Develop new system features and version control with Git.',
        'Assist team to standardize coding style with TypeScript, Prettier, ESLint.',
        "Assist the architect in upkeeping the company's own front-end shared modules.",
        'Understand front-end build tools (e.g. Webpack, Esbuild) to improve product build speed.',
      ],
    },
    {
      id: 'work1',
      img: '/img/experiences/chungyo.png',
      company: 'LA PLUMA FASHION GROUP CO. LTD',
      jobtitle: 'Game Program Developer',
      location: '台中市',
      begintime: [2019, 10],
      endtime: [2021, 3],
      texts: [
        'Develop web-based games projects using canvas 2d and webgl.',
        "Using TypeScript with company's own game framework.",
        'Maintaining game to run correctly on different browsers and mobile devices.',
        'Working with PM and desiners to construct game appearance and add animation effects.',
        'Integrate APIs to complete main game and other payment functions.',
        'Pixi.js for 2d casino games, like slots, little mary and match-3.',
        'Babylon.js for 3d games, like coin pusher.',
      ],
    },
    {
      id: 'university',
      img: '/img/experiences/thu.png',
      company: 'Tung Hai University',
      jobtitle: 'Computer Science and Information Engineering',
      location: '台中市',
      begintime: [2013, 7],
      endtime: [2017, 1],
      texts: [],
    },
  ],
  ch: [
    {
      id: 'work2',
      img: '/img/experiences/lattek.jpg',
      company: '英屬維京群島商拿鐵科技股份有限公司',
      jobtitle: '全端工程師',
      location: '台中市',
      begintime: [2021, 12],
      endtime: [2022, 9],
      texts: [
        '協助企業打造新一代一致性 MES 與 ERP 系統',
        '以 Angular(2+) 構建使用者操作介面',
        '使用 ASP.NET Core(3.1+) 實作 RESTful CRUD API 與 JWT 驗證',
        '使用 Node.js 輔助開發工作，實作程式碼產出工具',
        '使用 PL/SQL 撰寫 Store Procedure 存取 Oracle ',
        '根據需求開發新系統功能，使用 Git 版控，發佈產品上線',
        '協助團隊導入 Prettier、ESLint 規範寫作風格',
        '協助架構師維護底層共用模組與工具',
        '瞭解前端構建工具(如 Webpack、Esbuild)提升建置速度',
      ],
    },
    {
      id: 'work1',
      img: '/img/experiences/chungyo.png',
      company: '中佑集團凡谷興業有限公司',
      jobtitle: '遊戲程式設計師',
      location: '台中市',
      begintime: [2019, 10],
      endtime: [2021, 3],
      texts: [
        '開發基於 canvas 2d 與 webgl 技術的網頁遊戲項目',
        '以 TypeScript 為開發語言，配合公司自製的遊戲框架',
        '擁有不同瀏覽器與移動裝置的產品開發與維護經驗',
        '配合企劃、美術設計，導入遊戲素材與實作遊戲特效',
        '前後端 API 整合，完成遊戲主體功能與其他金流操作功能',
        '2d 遊戲以 Pixi.js 作為主，如老虎機、小瑪莉、消消樂',
        '3d 遊戲以 Babylon.js 為主，如推幣機',
      ],
    },
    {
      id: 'university',
      img: '/img/experiences/thu.png',
      company: '私立東海大學',
      jobtitle: '資訊工程學系(資電組) 畢業',
      location: '台中市',
      begintime: [2013, 7],
      endtime: [2017, 1],
      texts: ['原學校以轉學考方式進入資工系二年級就讀'],
    },
  ],
}

const ExperiencesTimeline = () => {
  const lang = useStores((state) => state.lang)
  const experiences = data[lang]
  const fontStyles = lang === 'en' ? 'font-outfit' : 'font-zhtw'
  return (
    <div className="flex w-full flex-col items-center pl-6 pr-3 md:pl-56">
      <ul
        id="timeline"
        className="list-none border-l-8 border-l-sky-800 pl-8 text-white"
      >
        {experiences.map((e, i) => (
          <li key={e.id} className="relative my-20">
            <input
              id={e.id}
              type="radio"
              name="experiences"
              className="hidden"
            />
            <div
              id="circle"
              className="absolute top-[50%] -ml-[3.55rem] h-10 w-10 translate-y-[-50%] rounded-full border-[5px] border-sky-800 bg-myblack md:-ml-[3.6rem]"
            >
              <Image
                className="rounded-full"
                src={e.img}
                alt={`image of ${e.company}`}
                height={60}
                width={60}
              />
            </div>
            <p
              id="date"
              className={`pointer-events-none absolute top-[-3rem] cursor-none ${fontStyles} text-base tracking-wider text-sky-600 md:absolute md:top-[50%] md:-left-[18rem] md:-mt-6 md:w-[13rem] md:px-0 md:text-right`}
            >
              {getJobDate(e.begintime, lang)} - {getJobDate(e.endtime, lang)}
            </p>
            <p
              id="job-tenure"
              className={`pointer-events-none absolute top-[-1.5rem] cursor-none ${fontStyles} text-base tracking-wider text-sky-600 md:absolute md:top-[50%] md:-left-[18rem] md:mt-0 md:w-[13rem] md:px-0 md:text-right`}
            >
              {getJobTenure(e.begintime, e.endtime, lang)}
            </p>
            <label htmlFor={e.id} className="experience-box">
              <h1
                id="company"
                className="mt-1 px-3 font-russon text-base transition-transform duration-200 sm:text-xl"
              >
                {e.company}
              </h1>
              <h2
                id="jobtitle"
                className="mt-2 px-3 font-play text-base text-white xs:text-base sm:text-lg"
              >
                {e.jobtitle}
              </h2>
              {e.texts.map((text, i) => (
                <p
                  key={i}
                  className={`my-2 hidden overflow-hidden px-4  text-justify ${fontStyles} text-sm sm:text-base lg:text-lg`}
                >
                  <span className="inline-block">-&nbsp;</span>
                  <span className="inline-block" key={i}>
                    {text}
                  </span>
                </p>
              ))}
            </label>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ExperiencesTimeline
