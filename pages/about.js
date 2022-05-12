import Head from 'next/head'
import styled from 'styled-components';
import Footer from '../components/Footer';
import FooterCard from '../components/FooterCard';

export default function About() {
  return (
    <>
      <Head>
        <title>About | Geexu</title>
        
        <link rel="shortcut icon" 
              href="/header-img/favicon.png"
              type="image/x-icon"/>
         <meta charset="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />

          {/* <!-- Mono font link --> */}
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@700&family=Source+Serif+Pro:wght@300&display=swap"
            rel="stylesheet"
          />
          {/* <!-- mono font link end here --> */}

          {/* <!-- Serif font link --> */}
          <link
            href="https://fonts.googleapis.com/css2?family=Source+Serif+Pro:wght@300&display=swap"
            rel="stylesheet"
          />

          {/* <!-- fontawsome link Start here --> */}
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
          />
          <script
            type="module"
            src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
          ></script>
          <script
            nomodule
            src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
          ></script>
          {/* <!-- fontawsome link End here --> */}

          {/* <!-- Tailwind Css Script Tag Start Here --> */}
          <script src="https://cdn.tailwindcss.com"></script>
          {/* <!-- Taiwind Css Script Tag End Here --> */}
   
      </Head>
      <div className="bg-black">
        {/* Hero section starts here */}
        <div className="container-fluid bg-black px-6 md:px-16 lg:px-28 2xl:px-0">
          <div
            className="container mx-auto bg-black sm:-mt-24 -m-20 sm:pt-36 pt-14 2xl:pb-[6.5rem] lg:pb-[5.5rem] md:pb-[3.375rem] sm:pb-[1.375rem] pb-[1.563rem] min-h-[490px] md:min-h-[877px]"
          >
          {/* <!-- Hero Section Start Here --> */}
            <div className="md:mt-[0px] box-border">
              <div
                className="main heading 2xl:mt-[8.5rem] lg:mt-[7.5rem] md:mt-[6.5rem] sm:mt-[3.1rem] mt-[7.5rem]"
              >
                <h1
                  className="font-[Signifier] xl:font-[300] 2xl:text-[20rem] 2xl:leading-[20rem] xl:text-[18rem] xl:font-[270] xl:leading-[17rem] lg:text-[14rem] lg:leading-[14rem] lg:font-[275] md:text-[12rem] md:leading-[12rem] md:font-[270] sm:text-[10rem] sm:leading-[10rem] sm:font-[270] text-[3.75rem] leading-[3.75rem] font-[230] text-white 2xl:mt-5 2xl:pb-0 xl:mt-36 lg:mt-0 xl:pb-2 lg:pb-0 lg:mb-8 md:mb-0 sm:mb-4 pb-8"
                >
                  About
                </h1>
              </div>
              <div
                className="font-[signifier] text-white font-[100] lg:text-4xl lg:leading-[3.125rem] md:text-[2.25rem] md:leading-[3.125rem] sm:text-[1.875rem] sm:leading-[2.563rem] text-[1.5rem] leading-[2.063rem] pt-0 pb-40"
              >
                <h3 className="mb-7">Yup, we develop software.</h3>
                <p
                  className="xl:pt-[0.106rem] lg:pt-[0.188rem] md:pt-[0.240rem] sm:pt-[0.195rem] lg:text-4xl lg:leading-[3.125rem] md:text-[2.25rem] md:leading-[3.125rem] sm:text-[1.875rem] sm:leading-[2.563rem] text-[1.5rem] leading-[2.063rem] leading-[2.063rem] pt-[3px]"
                >

                However, we're also here to assist everyone we come across
                  <br className="hidden lg:block" />
                  with in living a better and, more successful life.
                </p>
              </div>
            </div>
          {/* <!-- Hero Section Start Here --> */}
          </div>
        </div>
      {/* Hero section ends here */}
      {/* second contaier starts here */}
      <div className="container-fluid px-6 md:px-16 lg:px-28 py-10 md:py-16 lg:py-24 relative bg-[#272727]">
        <div className="container mx-auto">
          <div className="max-w-screen-2xl mx-auto py-6 md:py-10">
            <div className="absolute top-0 right-0 z-0 w-1/4 origin-right scale-110 -translate-y-3 md:-translate-y-6">
              <svg aria-hidden="true" className="w-full h-full" viewBox="0 0 625 825">
                <g>
                  <path d="M824.999 412.5C824.999 640.318 640.317 825.008 412.491 825.008C184.664 825.008 -0.0175781 640.327 -0.0175781 412.5C-0.0175781 255.879 87.2596 119.636 215.862 49.7894C276.206 17.01 343.81 -0.108923 412.482 2.85354e-05C640.317 2.85354e-05 824.999 184.682 824.999 412.5Z" fill="#272727"></path>
                  <path d="M387.437 46.5863C586.421 46.5863 747.719 207.893 747.719 406.868C747.719 605.844 586.421 767.142 387.437 767.142C188.453 767.142 27.1631 605.844 27.1631 406.868C27.1631 270.073 103.399 151.08 215.715 90.0686C268.42 61.4462 327.461 46.4963 387.437 46.5863Z" fill="#295044"></path>
                  <path d="M362.382 93.1725C532.515 93.1725 670.437 231.095 670.437 401.228C670.437 571.361 532.515 709.283 362.382 709.283C192.249 709.283 54.3262 571.361 54.3262 401.228C54.3262 284.26 119.521 182.524 215.542 130.339C260.611 105.868 311.098 93.0901 362.382 93.1725Z" fill="#2d5b4f"></path>
                  <path d="M337.326 139.759C478.617 139.759 593.156 254.306 593.156 395.596C593.156 536.886 478.617 651.425 337.326 651.425C196.036 651.425 81.4971 536.886 81.4971 395.596C81.4971 298.438 135.634 213.961 215.377 170.643C252.805 150.313 294.734 139.694 337.326 139.759Z" fill="#2f665a"></path>
                  <path d="M312.271 186.353C424.719 186.353 515.874 277.508 515.874 389.956C515.874 502.404 424.752 593.567 312.271 593.567C199.791 593.567 108.66 502.412 108.66 389.956C108.644 363.213 113.9 336.73 124.126 312.02C134.353 287.31 149.35 264.858 168.261 245.948C187.171 227.038 209.624 212.042 234.334 201.816C259.045 191.59 285.529 186.336 312.271 186.353Z" fill="#347e72"></path>
                  <path d="M287.249 232.94C370.862 232.94 438.642 300.711 438.642 384.324C438.642 467.938 370.821 535.709 287.249 535.709C203.677 535.709 135.864 467.929 135.864 384.324C135.853 364.441 139.762 344.751 147.366 326.379C154.97 308.008 166.12 291.314 180.18 277.255C194.239 263.195 210.932 252.045 229.304 244.441C247.676 236.837 267.366 232.929 287.249 232.94Z" fill="#368a80"></path>
                  <path d="M262.153 279.551C286.311 279.563 309.632 288.398 327.734 304.395C345.836 320.393 357.471 342.451 360.454 366.424C363.436 390.397 357.56 414.634 343.93 434.579C330.3 454.524 309.854 468.804 286.436 474.735C263.018 480.666 238.239 477.84 216.758 466.787C195.277 455.734 178.573 437.216 169.785 414.714C160.997 392.211 160.73 367.274 169.035 344.588C177.339 321.903 193.644 303.032 214.883 291.522C229.398 283.659 245.646 279.544 262.153 279.551Z" fill="#37978f"></path>
                  <path d="M237.098 419.993C263.022 419.993 284.038 398.977 284.038 373.052C284.038 347.128 263.022 326.112 237.098 326.112C211.173 326.112 190.157 347.128 190.157 373.052C190.157 398.977 211.173 419.993 237.098 419.993Z" fill="#38a49f"></path>
                </g>
              </svg>
            </div>
            <div className="relative z-10 pb-6 font-[signifier] text-5xl text-white md:text-7xl font-[100] sm:pb-12 lg:pb-24">
              <h3>Our core values</h3>
            </div>
            <div className="z-10 md:pl-8 md:pr-16 lg:pl-12 lg:pr-24 xl:pl-12 xl:pr-32 2xl:pl-28 2xl:pr-48">
              <div className="2xl:pr-28 pr-0">
                <div className="py-6 lg:py-8">
                  <h3 className="text-3xl lg:text-4xl text-[#65b722] font-[signifier] font-[100] pb-4 lg:pb-8">
                    <span className="hidden sm:inline font-[Pitch-Sans] word-spacing-tight font-semibold text-base text-gray-400 w-12">01</span>
                    We prioritize trust
                  </h3>
                  <p className="text-[#D1D1D1] md:pl-8 lg:pl-12 xl:pl-20 2xl:text-[1.125rem] 2xl:leading-[2.125rem] xl:text-[1.125rem] xl:leading-[2.125rem] lg:text-[1.125rem] lg:leading-[2.125rem] md:text-[1.125rem] md:leading-[2.125rem]">
                  Making the decision to do business together involves extending mutual trust.
                  No amount of due diligence can eliminate the uncertainty that comes with starting a new relationship; 
                  trusting someone is a matter of faith, and we want to work with people who are willing to take that risk. 
                  We extend the presumption of good faith in all interactions based on trust, 
                  and we expect it in return.
                  </p>
                </div>
              </div>
              <div className="py-6 lg:py-8">
                <h3 className="text-3xl lg:text-4xl text-[#65b722] font-[signifier] font-[100] pb-4 lg:pb-8">
                  <span className="hidden sm:inline font-[Pitch-Sans] word-spacing-tight font-semibold text-base text-gray-400 w-12">02</span>
                  Empathize relentlessly
                </h3>
                <p className="text-[#D1D1D1] md:pl-8 lg:pl-12 xl:pl-20 2xl:text-[1.125rem] 2xl:leading-[2.125rem] xl:text-[1.125rem] xl:leading-[2.125rem] lg:text-[1.125rem] lg:leading-[2.125rem] md:text-[1.125rem] md:leading-[2.125rem]">
                People-first is business-first,
                and showing empathy and building an extraordinary company are inextricably linked. 
                Active listening, giving space, responding with intention, 
                and pushing through surface conversations to the heart of the matter are all aspects
                  that illustrate this value.
                  Uncomfortable conversations become opportunities for mutual growth when your goal is 
                  to understand and care for someone.

                </p>
              </div>
              <div className="py-6 lg:py-8">
                <h3 className="text-3xl lg:text-4xl text-[#65b722] font-[signifier] font-[100] pb-4 lg:pb-8">
                  <span className="hidden sm:inline font-[Pitch-Sans] word-spacing-tight font-semibold text-base text-gray-400 w-12">03</span>
                  Practice benevolent ambition
                </h3>
                <p className="text-[#D1D1D1] md:pl-8 lg:pl-12 xl:pl-20 2xl:text-[1.125rem] 2xl:leading-[2.125rem] xl:text-[1.125rem] xl:leading-[2.125rem] lg:text-[1.125rem] lg:leading-[2.125rem] md:text-[1.125rem] md:leading-[2.125rem]">
                  We strive to improve ourselves not so that we can get a bigger slice of the pie,
                  but so that we can pay it forward and inspire others to do the same.
                  We all know that mentoring benefits both the mentor and the mentee.
                  Similarly, our apprenticeships, conference talks,
                  and open-source work contribute to the strength of our 
                  community while also providing a venue for us to keep our skills sharp and our 
                  minds occupied.

                </p>
              </div>
              <div className="py-6 lg:py-8">
                <h3 className="text-3xl lg:text-4xl text-[#65b722] font-[signifier] font-[100] pb-4 lg:pb-8">
                  <span className="hidden sm:inline font-[Pitch-Sans] word-spacing-tight font-semibold text-base text-gray-400 w-12">04</span>
                  Be compassionate, speak truth, and don’t put it off
                </h3>
                <p className="text-[#D1D1D1] md:pl-8 lg:pl-12 xl:pl-20 2xl:text-[1.125rem] 2xl:leading-[2.125rem] xl:text-[1.125rem] xl:leading-[2.125rem] lg:text-[1.125rem] lg:leading-[2.125rem] md:text-[1.125rem] md:leading-[2.125rem]">
                We're kind and considerate, but we also try to tell the truth,
                even if it's difficult. There's a time to be light and airy, 
                and then there's a time to take someone aside and be honest about something important. 
                The longer you wait, the more difficult it will become, so be direct, be specific,
                and act now.

                </p>
              </div>
              <div className="py-6 lg:py-8">
                <h3 className="text-3xl lg:text-4xl text-[#65b722] font-[signifier] font-[100] pb-4 lg:pb-8">
                  <span className="hidden sm:inline font-[Pitch-Sans] word-spacing-tight font-semibold text-base text-gray-400 w-12">05</span>
                  Avoid hustle culture
                </h3>
                <p className="text-[#D1D1D1] md:pl-8 lg:pl-12 xl:pl-20 2xl:text-[1.125rem] 2xl:leading-[2.125rem] xl:text-[1.125rem] xl:leading-[2.125rem] lg:text-[1.125rem] lg:leading-[2.125rem] md:text-[1.125rem] md:leading-[2.125rem]">
                Our society's deification of "hard work" must be put to rest once and for all.
                Work is a crucial part of life, but it does not have to be painful.
                That person who was "first to arrive, last to leave" should get a therapist 
                or a dog instead of a trophy. We aim higher: show up, put in a good and focused day's work,
                move on to something else, and then show up rested and ready the next day.
                If you think sending an email at 3 a.m. is a sign of dedication,
                you're probably not a good fit for Geexu, either as an employee or as a client.

                </p>
              </div>
              <div className="py-6 lg:py-8">
                <h3 className="text-3xl lg:text-4xl text-[#65b722] font-[signifier] font-[100] pb-4 lg:pb-8">
                  <span className="hidden sm:inline font-[Pitch-Sans] word-spacing-tight font-semibold text-base text-gray-400 w-12">06</span>
                  Bizarre means captivating
                </h3>
                <p className="text-[#D1D1D1] md:pl-8 lg:pl-12 xl:pl-20 2xl:text-[1.125rem] 2xl:leading-[2.125rem] xl:text-[1.125rem] xl:leading-[2.125rem] lg:text-[1.125rem] lg:leading-[2.125rem] md:text-[1.125rem] md:leading-[2.125rem]">
                Geexu actively recruit people who add spice to our lives.
                Work is a lot more fun when you're surrounded by fabulous weirdos who aren't 
                afraid to bring their entire selves to work, including (especially) the nerdy parts. 
                We appreciate it when they are willing to teach us about their interests, 
                and we make time for this exchange of ideas during company hours.

                </p>
              </div>
              <div className="py-6 lg:py-8">
                <h3 className="text-3xl lg:text-4xl text-[#65b722] font-[signifier] font-[100] pb-4 lg:pb-8">
                  <span className="hidden sm:inline font-[Pitch-Sans] word-spacing-tight font-semibold text-base text-gray-400 w-12">07</span>
                  You’ve already made it
                </h3>
                <p className="text-[#D1D1D1] md:pl-8 lg:pl-12 xl:pl-20 2xl:text-[1.125rem] 2xl:leading-[2.125rem] xl:text-[1.125rem] xl:leading-[2.125rem] lg:text-[1.125rem] lg:leading-[2.125rem] md:text-[1.125rem] md:leading-[2.125rem]">
                Being an expert does not imply knowing all of the answers.
                It entails having the knowledge, experience, and confidence to ask probing questions
                and apply your knowledge creatively. When an unfamiliar term or acronym comes up in 
                conversation, don't ignore it because you're afraid asking for clarification will
                make you look foolish. Creating a shared understanding is far more important than
                proving your intelligence. That is something we already know about you.

                </p>
              </div>
              <div className="py-6 lg:py-8">
                <h3 className="text-3xl lg:text-4xl text-[#65b722] font-[signifier] font-[100] pb-4 lg:pb-8">
                  <span className="hidden sm:inline font-[Pitch Sans] word-spacing-tight font-semibold text-base text-gray-400 w-12">08</span>
                  Wellness is a collaborative process 
                </h3>
                <p className="text-[#D1D1D1] md:pl-8 lg:pl-12 xl:pl-20 2xl:text-[1.125rem] 2xl:leading-[2.125rem] xl:text-[1.125rem] xl:leading-[2.125rem] lg:text-[1.125rem] lg:leading-[2.125rem] md:text-[1.125rem] md:leading-[2.125rem]">
                  It's sometimes easier to help someone else than it is to help yourself.
                  Rather than fighting this perverse tendency, we use it to our advantage by
                  normalizing the instinct to care for and protect our peers. When we notice 
                  someone is struggling, we reach out to them while respecting their privacy and autonomy.
                  Whether you have the flu or a bad mental health day, the treatment is the same: take 
                  a break, rest, and return to work when you're feeling better.

                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    {/* second container ends here */}
    {/* <!-- Third [This is Us] Section Start Here --> */}
    <div
      className="container-fluid bg-black text-white px-6 md:px-16 lg:px-28 py-10 md:py-16 lg:py-36"
    >
      <div className="container mx-auto">
        <div className="max-w-screen-2xl mx-auto">
          <h1
            className="w-full text-7xl md:text-8xl lg:text-[10rem] font-[signifier] font-[200] 2xl:mt-0 mt-10 mb-10 md:mb-16 lg:mb-20"
          >
            This is us.
          </h1>
          <div className="flex justify-end">
            <div
              className="font-[signifier] text-3xl lg:text-5xl xl:text-6xl 2xl:text-6xl font-[100] w-full md:w-3/4 lg:w-2/3"
            >
              <p>
                Ankush, Trushant, Niraj, Akahay, Jaywardhan, Manju, Love, Baldev,
                Vinod, Naitik, Pooja, Girish and 18 other clever folks.
              </p>
              <div
                className="flex mt-12 space-x-6 md:space-x-10"
              >
                <div className="flex">
                  <a
                    href="/team"
                    className="font-mono 2xl:text-[1rem] 2xl:leading-[1.5rem] text-sm md:text-base text-white hover:bg-white hover:text-black duration-300 tracking-[0.125rem] font-bold tracking-widest rounded-full py-3 px-8 uppercase leading-none bg-[#65b722] box-border"
                  >
                    <span className="hidden sm:inline">Meet </span>Our Team
                  </a>
                </div>
                <div className="flex">
                  <a
                    href="/team"
                    className="font-mono text-sm md:text-base text-white hover:bg-white hover:text-black duration-300 tracking-[0.125rem] font-bold tracking-widest rounded-full py-3 px-4 uppercase leading-none bg-[#65b722] box-border"
                  >
                    <span className=" sm:inline">COLLOBARATE WITH US</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* <!-- Third [This is Us] Section End Here --> */}

    
    {/* <!-- Fouth [Community initiatives] Section Start Here --> */}
    <div
      className="container-fluid px-6 md:px-16 lg:px-28 py-10 md:py-16 lg:py-24 bg-[#1A1A1A]"
    >
      <div className="container max-w-screen-2xl mx-auto">
        <div>
          <h1
            className="text-5xl md:text-7xl font-[signifier] font-[100] text-white mt-6 sm:mt-12 mb-12 sm:mb-16 md:mb-24"
          >
            Community initiatives
          </h1>
        </div>
        <div
          className="grid gap-12 sm:grid-cols-3 sm:gap-6 md:gap-8 lg:gap-12 xl:gap-16"
        >
          {/* <!-- Scholarships --> */}
          <div className="group cursor-pointer flex flex-col mb-8 text-white">
            <a
              href="https://laraconscholarship.com/"
              className="transition ease-in-out duration-300 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-blue-500/20"
            >
              <div
                className="flex flex-col justify-end relative overflow-hidden aspect-w-1 aspect-h-1"
              >
                <img
                  src="/About-img/pattern-diamond-blue.png"
                  alt=""
                />
                <div
                  className="absolute top-auto bottom-0 left-0 right-0 h-2/3 opacity-40 bg-gradient-to-b from-transparent to-black"
                ></div>
                <div
                  className="absolute flex flex-col justify-end mx-1 p-5 sm:p-3 lg:p-5 xl:p-8 z-10"
                >
                  <p
                    className="font-[signifier] font-[300] text-white 2xl:text-[2.25rem] 2xl:leading-[2.813rem] text-4xl leading-tight sm:text-2xl sm:leading-tight xl:text-4xl xl:leading-tight"
                  >
                    Laracon <br className="2xl:hidden block" />
                    Scholarships
                  </p>
                </div>
              </div>
            </a>

            <div className="text-charcoal-20 mt-4 md:mt-6 xl:mt-9 px-4">
              <a
                href="https://laraconscholarship.com/"
                className="block text-[#c0c0c0] font-[400] 2xl:text-[1.225rem] 2xl:leading-[2.125rem] xl:text-[1.063rem] xl:leading-[1.875]"
              >
                We gather the community to provide educational opportunities to all, regardless of cost.
              </a>
            </div>
          </div>

          {/* <!-- Program --> */}
          <div className="group cursor-pointer flex flex-col mb-8 text-white">
            <a
              href="https://laraconscholarship.com/"
              className="transition ease-in-out duration-300 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-green-500/20"
            >
              <div
                className="flex flex-col justify-end overflow-hidden relative aspect-w-1 aspect-h-1"
              >
                <img
                  src="/About-img/pattern-circle-green.png"
                  alt=""
                />
                <div
                  className="absolute top-auto bottom-0 left-0 right-0 h-2/3 opacity-40 bg-gradient-to-b from-transparent to-black"
                ></div>
                <div
                  className="absolute flex flex-col justify-end mx-1 p-5 sm:p-3 lg:p-5 xl:p-8"
                >
                  <p
                    className="font-[signifier] font-[300] text-white 2xl:text-[2.25rem] 2xl:leading-[2.813rem] text-4xl leading-tight sm:text-2xl sm:leading-tight xl:text-4xl xl:leading-tight"
                  >
                    Apprenticeship <br className="2xl:hidden block" />
                    Program
                  </p>
                </div>
              </div>
            </a>
            <div className="text-charcoal-20 mt-4 md:mt-6 xl:mt-9 px-4">
              <a
                href="https://laraconscholarship.com/"
                className="block text-[#c0c0c0] font-[400] 2xl:text-[1.225rem] 2xl:leading-[2.125rem] xl:text-[1.063rem] xl:leading-[1.875]"
              >
                We work to take an active part in building a pipeline of new programmers.
              </a>
            </div>
          </div>

          {/* <!-- Onramp --> */}
          <div className="group cursor-pointer flex flex-col mb-8 text-white">
            <a
              href="https://laraconscholarship.com/"
              className="transition ease-in-out duration-300 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-pink-500/20"
            >
              <div className="flex flex-col justify-end overflow-hidden relative">
                <img
                  src="/About-img/pattern-torque-pink.png"
                  alt="pink-img"
                />
                <div
                  className="absolute top-auto bottom-0 left-0 right-0 h-2/3 opacity-40 bg-gradient-to-b from-transparent to-black"
                ></div>
                <div
                  className="absolute flex flex-col justify-end mx-1 p-5 sm:p-3 lg:p-5 xl:p-8"
                >
                  <p
                    className="font-[signifier] font-[300] text-white 2xl:text-[2.25rem] 2xl:leading-[2.813rem] text-4xl leading-tight sm:text-2xl sm:leading-tight xl:text-4xl xl:leading-tight"
                  >
                    Onramp
                  </p>
                </div>
              </div>
            </a>
            <div className="text-charcoal-20 mt-4 md:mt-6 xl:mt-9 px-4">
              <a
                href="https://laraconscholarship.com/"
                className="block text-[#c0c0c0] font-[400] 2xl:text-[1.225rem] 2xl:leading-[2.125rem] xl:text-[1.063rem] xl:leading-[1.875]"
              >
                Our site Onramp helps developerslearn Laravel as easily andeffectively as possible — for free.
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Community initiatives end here */}

    {/* Technology and comapany cult. starts here */}
    <div className="container-fulid bg-black -mt-74 text-white px-6 md:px-16 lg:px-28 py-10 md:py-16 lg:py-28 ">
      <div className="container mt-10 mx-auto">
          
          <div className="w-full sm:w-3/4 text-4xl md:text-5xl lg:text-6xl leading-tight-2 md:leading-tight-2 lg:leading-tight-2 font-[signifier] font-extralight mb-10 sm:mb-20">
            We write, speak, and podcast on technology and company culture.
          
          </div>
        <div className="grid gap-12 sm:grid-cols-3 sm:gap-6 md:gap-8 lg:gap-12 xl:gap-16">

          <div className="group cursor-pointer flex-1 flex flex-col mb-8 text-white">         
     
            <a href="#" aria-label="Twenty Percent Time Podcast" className="transition ease-in-out duration-300 group-hover:scale-105 group-hover:shadow-2xl  bg-neutral-800">
        
                <div className="flex flex-col justify-end overflow-hidden aspect-w-1 aspect-h-1 bg-charcoal" title="Twenty Percent Time Podcast" subtext="Tighten folks take some of their Twenty Percent Time to share and teach." link="https://twentypercent.fm/">
                    
                    <div className="flex items-center justify-center transition duration-300 sm:grayscale sm:group-hover:grayscale-0 h-[327px] sm:p-6 xl:p-12 2xl:p-20 sm:opacity-50 sm:group-hover:opacity-100">
                       {/* svg is used here for image */}
                       <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 93 93" className="w-full h-full"><defs><clipPath id="clip-path-tpt"><rect width={93} height={93} style={{"fill":"none"}} /></clipPath></defs><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><g style={{}}><path d="M46.5,2A44.5,44.5,0,1,1,2,46.5,44.5,44.5,0,0,1,46.5,2" style={{"fill":"#e6e6e6"}} /></g><polyline points="9.5 23.5 74.5 23.5 74.5 81.5" style={{"fill":"none","stroke":"#ff6e52","stroke-miterlimit":"10","strokeWidth":"4px"}} /><g style={{}}><line x1={75} y1="42.5" x2="2.6" y2="42.5" style={{"fill":"none","stroke":"#ff6e52","stroke-miterlimit":"10","strokeWidth":"3.5px"}} /><circle cx="46.5" cy="46.5" r="44.5" style={{"fill":"none","stroke":"#ff6e52","stroke-miterlimit":"10","strokeWidth":"4px"}} /><path d="M64.6,28.1h0A2.1,2.1,0,0,1,62.4,26V20.1A2.1,2.1,0,0,1,64.6,18a2.1,2.1,0,0,1,2.1,2.1V26a2.1,2.1,0,0,1-2.1,2.1" style={{"fill":"#666ef5"}} /><path d="M56.6,28.1h0A2.1,2.1,0,0,1,54.4,26V20.1A2.1,2.1,0,0,1,56.6,18a2.1,2.1,0,0,1,2.1,2.1V26a2.1,2.1,0,0,1-2.1,2.1" style={{"fill":"#666ef5"}} /></g><line x1={16} y1={23} x2={16} y2={78} style={{"fill":"none","stroke":"#ff6e52","stroke-miterlimit":"10","strokeWidth":"3.5px"}} /><polygon points="35.9 32.6 35.9 33.5 37 33.5 37 34.4 35.9 34.4 35.9 36.2 34.5 36.2 34.5 31.6 37.7 31.6 37.7 32.6 35.9 32.6" style={{"fill":"#666ef5"}} /><g style={{}}><path d="M40.3,32.9a.3.3,0,0,0-.3-.3h-.4v1H40c.2,0,.3,0,.3-.2Zm.4,3.3c-.2,0-.3-.3-.3-.7v-.7a.3.3,0,0,0-.3-.3h-.5v1.7H38.1V31.6h2.3c.9,0,1.3.5,1.3,1.1v.5a.8.8,0,0,1-.6.8.8.8,0,0,1,.7.8v.7a.8.8,0,0,0,.2.7H40.7Z" style={{"fill":"#666ef5"}} /></g><rect x="42.3" y="31.6" width="1.5" height="4.66" style={{"fill":"#666ef5"}} /><g style={{}}><path d="M46.8,33.2c0-.4-.1-.5-.5-.5h-.4v2.4h.4c.4,0,.5-.1.5-.5Zm-.4,3H44.5V31.6h1.9c1.4,0,1.9.7,1.9,1.7v1.3c0,1-.5,1.6-1.9,1.6" style={{"fill":"#666ef5"}} /></g><path d="M50.4,33.1l-.3,1.5h.6Zm.7,3.1-.2-.7h-1l-.2.7H48.4l1.3-4.6h1.6l1.3,4.6Z" style={{"fill":"#666ef5"}} /><polygon points="55.1 34.4 55.1 36.2 53.6 36.2 53.6 34.4 52.2 31.6 53.7 31.6 54.4 33.2 55 31.6 56.5 31.6 55.1 34.4" style={{"fill":"#666ef5"}} /><g style={{}}><path d="M32.5,64.7a.3.3,0,0,0-.3-.3h-.3v1.1h.3a.3.3,0,0,0,.3-.3Zm.2,1.8h-.8v1.6H30.2V63.2h2.4a1.4,1.4,0,0,1,1.6,1.2v.7a1.4,1.4,0,0,1-1.4,1.4h-.1" style={{"fill":"#ff6e52"}} /></g><polygon points="34.6 68.1 34.6 63.2 38.2 63.2 38.2 64.5 36.3 64.5 36.3 65.1 37.5 65.1 37.5 66.1 36.3 66.1 36.3 66.8 38.2 66.8 38.2 68.2 34.6 68.1" style={{"fill":"#ff6e52"}} /><g style={{}}><path d="M41,64.6c0-.2-.1-.2-.3-.2h-.3v1h.3a.3.3,0,0,0,.3-.3Zm.4,3.5c-.3,0-.4-.4-.4-.7v-.7a.4.4,0,0,0-.4-.4h-.2v1.8H38.6V63.2h2.5c.9,0,1.6.4,1.6,1.3v.3a1,1,0,0,1-.8,1,.8.8,0,0,1,.8.9h0v.7a1,1,0,0,0,.2.7Z" style={{"fill":"#ff6e52"}} /><path d="M45.2,68.3a1.8,1.8,0,0,1-2.1-1.9V64.9c0-1,.7-1.8,2.1-1.8a1.7,1.7,0,0,1,2,1.5h0v.5H45.7v-.4c0-.2-.1-.4-.3-.4h-.1c-.3,0-.4.1-.4.5v1.6c0,.3.1.5.4.5a.4.4,0,0,0,.4-.4h0v-.5h1.5v.5a1.8,1.8,0,0,1-1.9,1.7h-.1" style={{"fill":"#ff6e52"}} /></g><polygon points="47.7 68.1 47.7 63.2 51.3 63.2 51.3 64.5 49.5 64.5 49.5 65.1 50.7 65.1 50.7 66.1 49.5 66.1 49.5 66.8 51.3 66.8 51.3 68.2 47.7 68.1" style={{"fill":"#ff6e52"}} /><polygon points="54.6 68.1 53.6 66.5 53.3 66 53.3 68.2 51.8 68.2 51.8 63.2 53.3 63.2 54.3 64.9 54.5 65.3 54.5 63.2 56 63.2 56 68.1 54.6 68.1" style={{"fill":"#ff6e52"}} /><polygon points="59.3 64.5 59.3 68.1 57.5 68.1 57.5 64.5 56.4 64.5 56.4 63.2 60.5 63.2 60.5 64.5 59.3 64.5" style={{"fill":"#ff6e52"}} /><polygon points="39.9 71 39.9 74.6 38.2 74.6 38.2 71 37 71 37 69.7 41.1 69.7 41.1 71 39.9 71" style={{"fill":"#ff6e52"}} /><rect x="41.5" y="69.7" width="1.8" height="4.93" style={{"fill":"#ff6e52"}} /><polygon points="47.8 74.6 47.8 72 47.6 72.7 47.1 74.6 45.8 74.6 45.4 72.7 45.2 72 45.2 74.6 43.7 74.6 43.7 69.7 46.1 69.7 46.5 71.5 46.6 72 46.8 71.5 47.2 69.7 49.5 69.7 49.5 74.6 47.8 74.6" style={{"fill":"#ff6e52"}} /><polygon points="50 74.6 50 69.7 53.6 69.7 53.6 70.9 51.8 70.9 51.8 71.6 53 71.6 53 72.6 51.8 72.6 51.8 73.3 53.7 73.3 53.7 74.6 50 74.6" style={{"fill":"#ff6e52"}} /><g style={{}}><path d="M32.1,78.5H32c-.3-.1-.8-.5-.1-1.1h0l2.1-.2c3.7-.3,7.3-.5,11-.6h9.5l3.3.5c2.2.3,1.3.5-.1.6l-3.3.2H44.8l-10.7.6Z" style={{"fill":"#ff8069"}} /></g><polygon points="26.8 55.2 26.8 61 24 61 24 55.2 22.1 55.2 22.1 53 28.7 53 28.7 55.1 26.8 55.2" style={{"fill":"#666ef5"}} /><polygon points="37.5 61 34.7 61 33.9 57.4 33.1 61 30.5 61 28.7 53 31.6 53 32.3 57.2 33 53 35.3 53 36 57.2 36.8 53 39.3 53 37.5 61" style={{"fill":"#666ef5"}} /><polygon points="39.6 61 39.6 53 45.5 53 45.5 55 42.5 55 42.5 56.1 44.4 56.1 44.4 57.7 42.4 57.7 42.4 58.8 45.4 58.8 45.4 61 39.6 61" style={{"fill":"#666ef5"}} /><polygon points="50.7 61 49.1 58.4 48.7 57.5 48.7 61 46.2 61 46.2 53 48.5 53 50.2 55.7 50.5 56.4 50.5 53 53 53 53 61 50.7 61" style={{"fill":"#666ef5"}} /><polygon points="58.3 55.2 58.3 61 55.5 61 55.5 55.2 53.6 55.2 53.6 53 60.2 53 60.2 55.1 58.3 55.2" style={{"fill":"#666ef5"}} /><polygon points="65.5 58.1 65.5 61 62.6 61 62.6 58 60.3 53 63.3 53 64.2 55.5 65.1 53 67.9 53 65.5 58.1" style={{"fill":"#666ef5"}} /></g></g></svg>     
                    </div>

                    
                    <div>
                    </div>
                </div>
            </a>

            <div className="pt-6 font-serif font-light text-3xl leading-tight sm:text-2xl sm:leading-tight xl:text-4xl xl:leading-tight group-hover:text-[#65b722]">
                 <a href="#" aria-label="Twenty Percent Time Podcast" className="block">
                 Twenty Percent Time Podcast
                 </a>
            </div>

            <div className="text-charcoal-20 mt-4 md:mt-6 xl:mt-10 leading-loose sm:text-sm sm:leading-loose lg:text-base lg:leading-loose 2xl:text-lg 2xl:leading-loose px-0">
                 <a href="#" aria-label="Twenty Percent Time Podcast" className="block">
                  Tighten folks take some of their Twenty Percent Time to share and teach.
                 </a>
            </div>

          </div> 
         {/*  */}
         <div className="group cursor-pointer flex-1 flex flex-col mb-8 text-white">        
     
           <a href="#" aria-label="Conference Talks" className="transition ease-in-out duration-300 group-hover:scale-105 group-hover:shadow-2xl  bg-neutral-800">
     
            <div className="flex flex-col justify-end overflow-hidden aspect-w-1 aspect-h-1 bg-charcoal" title="Conference Talks" subtext="Members of Team Tighten have given talks at nearly every Laracon in history." link="https://laracon.net/">
             
              <div className="flex items-center justify-center transition duration-300 sm:grayscale sm:group-hover:grayscale-0 h-[327px] sm:p-5 xl:p-10 2xl:p-16 sm:opacity-40 sm:group-hover:opacity-100">
                <svg fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 727.6 278.7" className="w-full h-full">
                  {/* svg is used here for image */}
                  <path d="M467.5,166.6C443.2,130.4,438.9,16.7,498,17.2a32.2,32.2,0,0,1,20.4,7.3c20.5,17.2-1.4,39.2-14.2,21.6-3.8-5.2-10.5-4-14.5.2-17.4,18.5-17,86.5,4.2,109.2,4.5,4.8,11.3,7.3,17.6,4.6h0a6.5,6.5,0,0,0,3.9-3.9l2-4.9a15.1,15.1,0,0,1,1.1-2.2,13.4,13.4,0,0,1,19.7-2.5C559.8,164.4,507.4,220.7,467.5,166.6ZM262.2,186.2a210.1,210.1,0,0,1-6.1-20.3,52.8,52.8,0,0,1-1.5-12.5c0-4.9.5-9.9.2-14.9-.2-11.1-14.1-17.4-22.1-9.1s-.3,20.8-11.2,29.2c-17.1,13.2-36.8-2.7-37.8-23.1s5-38.5,21.4-46.5l2.7-1c9.2-2.9,16.2,2,20.4,8.2a11.6,11.6,0,0,1,1.8,4c.4,2.8.5,3.2.5,3.2,2.3,10.3,18.6,11.8,21.5.5,5.2-55.1-70.2-45.9-86.2-7.7-20.1,48,11.5,115.3,66.6,86.4A124.6,124.6,0,0,0,244.3,211a18.7,18.7,0,0,0,5.2,6c13.8,10.6,28-6.4,17.1-22.2A69.6,69.6,0,0,1,262.2,186.2Zm465.1-113c-.6-17.1-25.4-17.5-26.7-.9,0,.6-.8,3.7-.9,4.3-3.3,50.7-19.4,69.6-19.4,69.6s-3.8-86.1-28.7-80.9c-6,1.3-9.4,5.6-9.8,12.9-1.6,27.6-7.8,69.2-41.6,91.3-5.2,3.4-5.1,12.4,0,16.7,17.8,14.8,56.2-37,55.3-55.5,1.4,30.3-6.2,55.3,4.3,62.5,15.5,10.7,57.4-35.9,65.7-89.4C727.7,89.4,728.1,83.4,727.3,73.2Zm-548,153c-4.6,5-13,6.9-19.1,0-21.7-24.5-44.6-48.1-71.9-66.1-13.7,31.6-48,55-73.7,31.8A43.7,43.7,0,0,1,.5,166.1c-5.7-38.4,42.6-64.4,77.4-42.8a316.1,316.1,0,0,0,24.6-87.9c-.1.7,1.6-16.6,2.2-24.5.3-14.5,22.3-14.5,22.4,0,.9,43.2-9,86.4-26.9,125.6l7.4,5.1C123.4,154,198.2,205.7,179.3,226.2ZM66,146.5c-1.5-.8-8.5-4.9-16-5.4s-27.1,6.8-23.5,22.3a20,20,0,0,0,2.9,6.5l.5.7c12.5,12.9,25.3-4.7,31.3-15.9Zm375.5,62.6a20,20,0,0,1-7.4-5.2,116.2,116.2,0,0,1-16.3-23.1c-28,26-69.9,5.7-80.8-27.4-7.8-19.4-8.3-42.7.3-62-2.4-12.6-4.7-25.2-7-37.9a130.5,130.5,0,0,1-22.1,11.1c10.8,37.7,10.9,80.2-4.9,116.6-6,11.6-25,3.5-21.2-8.9,2.2-8.2,4.6-16.3,6.1-24.6,3.3-15.2,2.9-40.2,1.3-50.7A156.3,156.3,0,0,0,284,71.7c-27.5,8-59.8-18-47.9-43.6a28.7,28.7,0,0,1,15.2-14.7C270.2,6,292.4,20.8,299.1,40h0a114,114,0,0,0,29.3-17.7,27.6,27.6,0,0,1,3.9-2.8C356.8,5.8,354.3,51.4,359,66c53.3-32.3,87.6,39.1,60.6,47.3a10.7,10.7,0,0,1-8.4-.7c-9.2-5.1-2.4-19.6-15.3-26.2-10.4-6.5-23.7-1.2-30.4,8a56,56,0,0,0-5.1,8.8c0-.1.1-.1.1-.2-9.3,22.7,2.3,69.2,33.6,61.2l-.3.2c.3-.2,2.5-1,1.4-.8l3.2-1.7-.4.4a33.3,33.3,0,0,0,4.6-4.6l-.4.3a20.4,20.4,0,0,0,3-15.9h0c-3.4-16.1,21.2-24.3,25.4-7.8l.5,2.2A110.7,110.7,0,0,0,446.3,176c.5.9,1.6,2.4,2.4,3.6a12.1,12.1,0,0,0,2.1,2.4C466.6,194.6,457.2,215.1,441.5,209.1ZM276.3,47.5c-.9-1.4-7-13.8-14.9-15.7-3.5-.5-5.2,1.7-5.5,5.2C255.8,43.6,275.3,47.3,276.3,47.5ZM538.4,62.2c39.9-42.8,108,10.3,75,60.7C572.3,179.1,490.6,113.6,538.4,62.2Zm58.2,31.4c-.3-14.2-11-25.1-25.2-22s-21.5,12.1-22,25.2,11.1,23.8,25.2,22S596.9,106.7,596.6,93.6Z"></path>
                  <path d="M381.1,278c-3.5,1.2-8.2.1-11.9-.1a3.5,3.5,0,0,1-3.4-3.4c.1-13.5,0-26.9,1.2-40.3a1.6,1.6,0,0,1,3.1,0c1.5,12.3,1.8,24.6,2.3,36.9,3.2,0,6.6,0,9.4,1.2S383.4,277.2,381.1,278Zm-50.4-33.8a55.7,55.7,0,0,1,0,16.3c-.9,6.2-3.9,21.7-13.7,17.3-3.9-1.8-5.6-6.4-6.9-10.2a44.7,44.7,0,0,1-2.4-15.4,35.4,35.4,0,0,1,1.6-10.3,13.4,13.4,0,0,1,4-7.9c3.5-3.1,8.7-3.8,12.4-.7S330.2,240.2,330.7,244.2Zm-6.4-.4c-.6-2.8-2.2-7.7-5.9-5.5s-3.5,7.6-3.7,11.2a2.7,2.7,0,0,1-1.8,2.5,43.3,43.3,0,0,0,.6,5.8,37.2,37.2,0,0,0,3.7,11.7c.6,1.1,1.5,3.1,3,2.8s2-2.4,2.3-3.4A48.7,48.7,0,0,0,324.3,243.8Zm35-1.5c-.2-3.3-.1-6.8-.9-10s-5.5-3.1-5.9,0c-.9,6.3.2,13.3.5,19.7.1,1.6.2,3.3.2,4.9l-3.7-6.8c-1.7-3.2-3.5-6.3-5.4-9.5s-3.4-6.1-6.2-8.2a1.1,1.1,0,0,0-1-.1,1.3,1.3,0,0,0-1.5,1.1c-1.1,6.7-.4,13.8-.2,20.5s.2,13.3.7,20a2.4,2.4,0,0,0,0,1.2,4.3,4.3,0,0,1,.2,1.1c.7,3.5,6.4,2.7,6.2-.8-.2-7.1-1-14.3-1.6-21.4l-.6-8.4c1.2,2.6,2.4,5.2,3.7,7.8,3.5,6.9,6.9,13.8,10.4,20.6,1.6,3,6.7,1.7,6.5-1.8-.4-6.7-.7-13.5-1.1-20.2C359.7,248.8,359.5,245.6,359.3,242.3Zm98.6,29.4c-2.1-.2-4.3.9-6.4.1s-2.3-3.6-2.7-5.5a75,75,0,0,1-1.4-9.5l4.2-.2c2.2-.2,4.3-.1,5.9-1.7a2.7,2.7,0,0,0-.5-4.2c-2.1-1.1-3.9-.4-6.1.1s-2.5.5-3.7.9v-.4c-.1-4.1-.4-9,1.1-13a8.3,8.3,0,0,1,4.3-4.7c1.5-.6,3.2-.5,4.7-1l.2-.2c-.3-5.3-8.2-3.3-10.7-1.2-5.2,4.3-5.5,12.1-5.6,18.3s.2,15.8,2.7,22.7,10,8.2,15.5,5C462,275.5,460.6,272,457.9,271.7Zm-26.8-40.9c-.8-4.2-7.2-2.4-6.4,1.8a186.6,186.6,0,0,1,3.2,23.8l-2.4-4.7c-3.4-6.6-7-13.6-12.1-19-1.5-1.6-4.8.1-3.9,2.3h.1a49,49,0,0,0-.5,7.7c-.1,3.7-.1,7.5,0,11.2.2,7.2.5,14.4.9,21.5-.5,3.6,6.4,4.7,6.2.2-.3-7.5-.8-15-1.5-22.4-.3-3.2-.6-6.3-1-9.5,1.8,3.4,3.7,6.8,5.4,10.2,3.2,6.7,5.8,13.6,8.7,20.5,1.3,3.2,6.8,3.3,6.6-.9-.2-7.2,0-14.4-.6-21.7A166.8,166.8,0,0,0,431.1,230.8Zm-28.7,42.7a5.7,5.7,0,0,0-3.8-.9,32.1,32.1,0,0,0-.2-5.3c-.3-3.9-.5-7.7-.8-11.6s-.4-7.3-.7-10.9c-.1-1.8-.1-3.9-.3-5.9h2.7c4.1.1,4-6.6,0-6.3s-9.9,0-13.8,2.1a1.6,1.6,0,0,0,0,2.8,15.2,15.2,0,0,0,5.3,1.2,45.2,45.2,0,0,0,.2,5.3c.1,3.9.3,7.7.4,11.6s.3,7.3.4,10.9-.2,4.6.4,6.6a27.4,27.4,0,0,0-3.9.9,1.2,1.2,0,0,0,0,2.3,34.7,34.7,0,0,0,7.1,1.6c2.4.3,4.9,1.1,7.1-.3A2.4,2.4,0,0,0,402.4,273.5Z"></path>
                </svg>
              </div>
    
             
              <div>
              </div>
            </div>
             </a>
     
             <div className="pt-6 font-serif font-light text-3xl leading-tight sm:text-2xl sm:leading-tight xl:text-4xl xl:leading-tight group-hover:text-[#65b722]">
                     <a href="https://laracon.net/" aria-label="Conference Talks" className="block">
                     Conference Talks
                     </a>
                 </div>
     
            <div className="text-charcoal-20 mt-4 md:mt-6 xl:mt-10 leading-loose sm:text-sm sm:leading-loose lg:text-base lg:leading-loose 2xl:text-lg 2xl:leading-loose px-0">
                     <a href="#" aria-label="Conference Talks" className="block">
                 Members of Team Tighten have given talks at nearly every Laracon in history.
                     </a>
            </div>
    
        </div>
        {/*  */}
        {/*  */}
        <div className="group cursor-pointer flex-1 flex flex-col mb-8 text-white">
         
     
     <a href="#" aria-label="The Laravel Podcast" className="transition ease-in-out duration-300 group-hover:scale-105 group-hover:shadow-2xl  bg-neutral-800">
 
     <div className="flex flex-col justify-end overflow-hidden aspect-w-1 aspect-h-1 bg-charcoal" title="The Laravel Podcast" subtext="We sponsor, and Matt hosts, the official podcast for all things Laravel." link="https://laravelpodcast.com/">
         
         <div className="flex items-center justify-center transition duration-300 sm:grayscale sm:group-hover:grayscale-0 h-[326px] sm:p-6 xl:p-12 2xl:p-20">
                {/* svg is used here for image */}
                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 291.5 306.1" className="w-full h-full"><defs><clipPath id="clip-path-laravel-podcast" transform="translate(0 0)"><rect width="291.5" height="306.08" style={{"fill":"none"}} /></clipPath></defs><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><polygon points="87.1 125.4 63.8 112 63.5 204.1 138.3 247.2 138.3 226.3 86.9 196.7 87.1 125.4" style={{"fill":"#ff0005"}} /><g style={{}}><path d="M209.7,128.9l-47.2,27.3.3,92.1,23.3-13.5V202.2l23.9-13.8c20.6-11.9,31.2-29.8,31.2-46.7v-2.2c-.1-16.9-10.8-22.4-31.4-10.6M186,186.5V162.1l19.4-11.2c8.7-5,12.3-2.8,12.3,3.7v2.7c0,6.4-3.4,13-12,17.9Z" transform="translate(0 0)" style={{"fill":"#ff0005"}} /><path d="M225.4,96.5l-66-38.2L111.2,82.4l13.9,11.7c9,.3,17.1,2.1,24.5,6.4,10,5.7,9.8,11.6,3.7,15.1l-1.8,1.1c-7,4.1-17,4-29-2.9A44.4,44.4,0,0,1,103.7,93L82.1,95.3C85.4,105.2,92.5,115,108,124c22.4,12.9,48.8,14.1,64.1,5.2l2.6-1.5c13.8-8,14.7-19.9-3.7-30.6-10.6-6.1-20.9-8.3-32.9-8.8l21.8-11,34.6,20c10,5.8,18.3,5.4,30.9-.8" transform="translate(0 0)" style={{"fill":"#ff0005"}} /></g><polygon points="21.6 99.5 4.9 91.5 6.4 88.3 20.3 94.9 21.9 91.5 24.8 92.9 21.6 99.5" style={{"fill":"#ff0005"}} /><path d="M23.3,70l5.5,4.8.8-1.2Zm11.4,6.5L32.1,75l-1.2,1.7,2.3,2-1.8,2.6L17.7,68.6,20,65.2l16.7,8.3Z" transform="translate(0 0)" style={{"fill":"#ff0005"}} /><g style={{}}><path d="M38.6,48.9c-.4-.4-.7-.4-1-.1l-.6.6L40.8,53l.6-.6c.2-.3.2-.6-.2-1Zm11.2,9.5c-.4.4-1.8-.5-2.6-1.3l-2.7-2.6a.9.9,0,0,0-1.2-.2l-.6.6,5.4,5.3-2.5,2.6L32.4,49.9l3.4-3.6a3.4,3.4,0,0,1,5,0l2.7,2.5a2.6,2.6,0,0,1,.6,2.7,2.6,2.6,0,0,1,2.7.5l2.6,2.5a7.9,7.9,0,0,0,2.5,1.7h0Z" transform="translate(0 0)" style={{"fill":"#ff0005"}} /></g><path d="M58,34.2l3.6,6.3,1.2-.9ZM66.7,44l-2-2.2L63,43l1.5,2.6L62,47.5,53.1,31l3.3-2.4L69.6,41.9Z" transform="translate(0 0)" style={{"fill":"#ff0005"}} /><polygon points="86.1 32.2 83.1 33.8 71.9 18.7 75.1 17.1 81.6 26.8 77.5 15.8 80.5 14.3 86.1 32.2" style={{"fill":"#ff0005"}} /><polygon points="101.8 25.5 96.1 7.9 103.3 5.6 104.2 8.6 100.5 9.8 101.8 14 104.3 13.2 105.2 16 102.7 16.8 104.2 21.3 108 20.1 109 23.2 101.8 25.5" style={{"fill":"#ff0005"}} /><polygon points="123 19.9 120.2 1.6 123.7 1.1 126 16.2 129.7 15.7 130.2 18.8 123 19.9" style={{"fill":"#ff0005"}} /><g style={{}}><path d="M168,4.4c.1-.6-.1-.8-.5-.9h-.9l-.7,5.8h.9c.4,0,.6-.2.7-.8Zm-1.1,7.7-1.3-.2-.9,6.9-3.6-.5L163.5,0l4.9.6a3.4,3.4,0,0,1,3,4.1l-.5,4.1c-.4,2.6-2.1,3.5-4,3.3" transform="translate(0 0)" style={{"fill":"#ff0005"}} /><path d="M192.9,9.8a.9.9,0,0,0-.6-1.1,1,1,0,0,0-1.1.6L188,19.9a.8.8,0,0,0,.6,1,.7.7,0,0,0,1-.5ZM187.7,24a4.2,4.2,0,0,1-3.1-5.4l3.1-10.2a4.1,4.1,0,0,1,5.5-2.7,4.2,4.2,0,0,1,3.1,5.3l-3.1,10.2a4.1,4.1,0,0,1-5.5,2.8" transform="translate(0 0)" style={{"fill":"#ff0005"}} /><path d="M216.7,20.1c.3-.7.3-1.2-.4-1.5l-.6-.4-5.5,11,.6.4c.6.3,1.1.1,1.4-.6Zm-7,12.4-4.1-2.1,8.3-16.5,4.1,2a4.1,4.1,0,0,1,1.9,5.8l-4.6,9c-1.2,2.5-3.5,2.8-5.6,1.8" transform="translate(0 0)" style={{"fill":"#ff0005"}} /><path d="M229.3,44.9a4.3,4.3,0,0,1-1.1-6.3l6.1-8.3a4.4,4.4,0,0,1,6.4-.8,3.9,3.9,0,0,1,.7,5.8l-1.6,2.3-2.5-1.8,1.7-2.4a.8.8,0,0,0-.3-1.3.9.9,0,0,0-1.4.2L231,40.9a.9.9,0,0,0,.2,1.4c.6.4,1.1.3,1.4-.2l1.7-2.3,2.5,1.8-1.7,2.3c-1.5,2.1-3.8,2.6-5.8,1" transform="translate(0 0)" style={{"fill":"#ff0005"}} /></g><path d="M255.6,50.1l-5.7,4.5,1,1Zm-8.5,10,1.9-2.3-1.4-1.5-2.4,1.9L243,55.9l15.1-11,2.8,2.9L249.6,62.6Z" transform="translate(0 0)" style={{"fill":"#ff0005"}} /><g style={{}}><path d="M260.5,76.9a4,4,0,0,1,1-6.1l1.3-.9,1.8,2.5-1.4,1a1.2,1.2,0,0,0-.4,1.7c.4.6,1,.6,1.7.2s1.6-2.3,2.2-4.2,1.3-4.7,3.2-6,4.7-1.5,6.4,1,.9,4.2-1.3,5.7l-1.3,1-1.8-2.6,1.5-1a1,1,0,0,0,.4-1.4,1.1,1.1,0,0,0-1.5-.2c-1.4,1-1.6,2.2-2.2,4.2s-1.4,4.7-3.3,6-4.9,1.2-6.3-.9" transform="translate(0 0)" style={{"fill":"#ff0005"}} /></g><polygon points="286.5 90.8 272.7 97.4 271.2 94.2 284.9 87.6 283.8 85.3 286.7 83.9 290.5 91.7 287.6 93.1 286.5 90.8" style={{"fill":"#ff0005"}} /><g style={{}}><path d="M56.7,276.1c-2.9-2.2-3.5-5-1.6-7.5l.6-.7,3.3,2.5-.6.6a1.5,1.5,0,0,0,.3,2.1,1.2,1.2,0,0,0,1.9-.4c.7-.8.1-2.2-.5-3.9s-1.6-4.4,0-6.5,4.8-3.1,7.8-.8a5,5,0,0,1,1.2,7.1l-.5.6-3.2-2.5.4-.6a1.1,1.1,0,0,0-.1-1.7,1.2,1.2,0,0,0-1.8.3c-.6.8,0,2.2.6,3.8s1.6,4.5-.1,6.7a5.3,5.3,0,0,1-7.7.9" transform="translate(0 0)" style={{"fill":"#ff0005"}} /></g><polygon points="75.6 287.9 83.5 272.2 92.5 276.8 90.8 280.2 86 277.8 84.7 280.5 87.7 282.1 86.2 285.1 83.2 283.5 81.7 286.4 86.4 288.8 84.6 292.5 75.6 287.9" style={{"fill":"#ff0005"}} /><path d="M108.6,289l-2.6,5.4,1.7.5Zm-1.7,11.6.3-2.5-2.6-.8-1.1,2.3-4.1-1.2,8.3-15.9,5.3,1.6-1.6,17.8Z" transform="translate(0 0)" style={{"fill":"#ff0005"}} /><g style={{}}><path d="M132.6,305.9c-3.6-.4-5.5-2.5-5.2-5.6v-.9l4.1.4v.8a1.3,1.3,0,0,0,1.3,1.6c.9.1,1.3-.4,1.4-1.3s-1.1-1.9-2.4-3-3.7-3-3.5-5.6,2.5-5.1,6.3-4.8a5,5,0,0,1,4.7,5.5v.7l-4.1-.4v-.8a1.1,1.1,0,0,0-1-1.3,1.2,1.2,0,0,0-1.4,1.1c-.1,1.1,1.2,2,2.5,3s3.7,3,3.5,5.7a5.5,5.5,0,0,1-6.2,4.9" transform="translate(0 0)" style={{"fill":"#ff0005"}} /><path d="M160.7,292.4a1.1,1.1,0,0,0-1.2-.9c-.5.1-1,.5-.9,1l.7,8.8a1.1,1.1,0,0,0,1.2.9,1,1,0,0,0,.9-1.1Zm.1,13.6c-3.3.3-6.1-1.5-6.3-4.5l-.7-8.3c-.3-3,2.1-5.2,5.4-5.5s6.1,1.5,6.3,4.5l.7,8.3c.3,3-2.1,5.3-5.4,5.5" transform="translate(0 0)" style={{"fill":"#ff0005"}} /></g><polygon points="191.3 299.8 187.1 295 185.2 292.9 187.5 300.8 183.4 302 178.6 285.1 182.5 284 186.7 288.9 188.5 291 186.2 282.9 190.2 281.8 195 298.7 191.3 299.8" style={{"fill":"#ff0005"}} /><g style={{}}><path d="M226.3,267.4l-3.1,2.1,1.7,3a3.9,3.9,0,0,1,1.8-3,3.2,3.2,0,0,1,4.7,1.1l2.3,3.4c1.6,2.3.8,5.2-1.9,7a4.8,4.8,0,0,1-6.8-1l-.8-1.2,3.3-2.2.5.8a1.1,1.1,0,0,0,1.8.4,1.1,1.1,0,0,0,.3-1.6l-1.8-2.7a1.1,1.1,0,0,0-1.5-.3c-.5.3-.7,1-.4,1.3l-3.4,1.8-4.7-7.9,7.9-5.4c1.2,2.3,1.3,3.6.1,4.4" transform="translate(0 0)" style={{"fill":"#ff0005"}} /><path d="M280.9,115.4S313.3,197,246,262.2M10.6,108.9s-32.4,81.6,34.8,146.8" transform="translate(0 0)" style={{"fill":"none","stroke":"#ff0005","stroke-miterlimit":"10","strokeWidth":"5.556000232696533px"}} /></g></g></g></svg>
             </div>

         
         <div>
                         </div>
     </div>
         </a>
 
         <div className="pt-6 font-serif font-light text-3xl leading-tight sm:text-2xl sm:leading-tight xl:text-4xl xl:leading-tight group-hover:text-[#65b722]">
                 <a href="#" aria-label="The Laravel Podcast" className="block">
                 The Laravel Podcast
                 </a>
             </div>
 
 <div className="text-charcoal-20 mt-4 md:mt-6 xl:mt-10 leading-loose sm:text-sm sm:leading-loose lg:text-base lg:leading-loose 2xl:text-lg 2xl:leading-loose px-0">
                 <a href="#" aria-label="The Laravel Podcast" className="block">
             We sponsor, and Matt hosts, the official podcast for all things Laravel.
                 </a>
         </div>

 </div>
 {/*  */}


        </div>


      </div>
    </div>
    {/* Technology and comapany cult. ends here */}
    {/* <!-- Fouth [Community initiatives] Section End Here --> */}


    </div>
    <FooterCard/>
    <Footer/>
      
    </>
  );
}




// import Head from 'next/head'


// export default function About() {
//     return (
//       <>
//         <Head>
//           <title>Create Next App</title>
//           <meta name="description" content="Generated by create next app" />
//           <link rel="icon" href="/favicon.ico" />
//         </Head>
        
//         <h1>About</h1>
//       </>
//     )
//   }
  
  
 
