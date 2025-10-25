import Image from "next/image";
import img1 from "../public/hemachin-img-1.jpeg";
import img2 from "../public/hemachin-img-2.jpeg";
import img3 from "../public/hemachin-img-3.jpeg";
import img4 from "../public/hemachin-img-4.jpeg";
import img5 from "../public/hemachin-img-5.jpeg";
import img6 from "../public/hemachin-img-6.jpeg";
import img7 from "../public/hemachin-img-7.jpeg";
import img8 from "../public/hemachin-img-8.jpeg";
import img9 from "../public/hemachin-img-9.jpeg";
import img10 from "../public/hemachin-img-10.jpeg";
import img11 from "../public/hemachin-img-11.jpeg";
import img12 from "../public/hemachin-img-12.jpeg";
import img13 from "../public/hemachin-img-13.jpeg";
import img14 from "../public/hemachin-img-14.jpeg";
import img15 from "../public/hemachin-img-15.jpeg";
import img16 from "../public/hemachin-img-16.jpeg";
import img17 from "../public/hemachin-img-17.jpeg";
import img18 from "../public/hemachin-img-18.jpeg";
import img19 from "../public/hemachin-img-19.jpeg";
import img20 from "../public/hemachin-img-20.jpeg";
import img21 from "../public/hemachin-img-21.jpeg";
import star from "../public/star.png";
import checkbox from "../public/checkbox.png";

export default function Home() {
  return (
    <div className="font-sans gap-16 leading-[2em] text-[1.25rem]">
      <main className="p-8 flex flex-col gap-[32px]  leading-[2.2em] pb-10 w-full">
        <h2 className="text-[2.2rem]  font-bold text-center md:w-6/10 lg:6/10 lg:text-[2.75rem] mx-auto">
          Say Goodbye to STDs, STIs, Itching, Rashes & Recurring Infections in
          Just 7 Days!
        </h2>
        <div className="w-full h-[5px] bg-red-500"></div>
        <h2 className="text-[2.2rem] font-bold text-center text-red-500 md:w-6/10 lg:6/10 lg:text-[2.75rem] mx-auto">
          Discover the Fast-Acting, All-Natural Hamachin Detox Capsule – Your
          Trusted Cure for Chronic Infections in Ghana.
        </h2>
        <Image
          className=" mx-auto"
          src={img1}
          alt="image one"
          width={800}
          height={800}
        ></Image>
        <div className="leading-[2em]">
          <h2 className="uppercase text-[2.2rem] font-bold text-center mb-2">
            Attention: Are You Tired of the Shame, Pain & Recurrence of
            Infections?
          </h2>

          <p className="text-[1.25rem] ">
            You’ve tried antibiotics and creams.
          </p>
          <p className="text-[1.25rem]">
            You’ve endured the burning sensations, foul discharge, rashes, and
            itching in silence.
          </p>
          <p className="text-[1.25rem]">
            You’ve hoped it would go away— But it keeps coming back. Worse, it’s
            affecting your relationship, your confidence, and your peace of
            mind.
          </p>
        </div>
        <h3 className="font-bold text-[2.25rem] text-center">
          Introducing....
        </h3>
        <Image
          className="mx-auto"
          src={img2}
          alt="image two"
          width={800}
          height={800}
        ></Image>
        <p className="text-[2.2rem] font-bold text-center text-red-500">
          Few Positive Feedbacks We Receive on Daily Basis
        </p>
        <Image
          className="mx-auto"
          src={img3}
          alt="image three"
          width={800}
          height={800}
        ></Image>
        <Image
          className="mx-auto"
          src={img4}
          alt="image four"
          width={800}
          height={800}
        ></Image>
        <p className="text-[2.2rem] font-bold text-center capitalize text-red-500">
          If you’re dealing with STDs, STIs, stubborn infections, genital
          itching, or mysterious skin rashes, Hamachin Detox Herbal Capsule is
          the trusted solution you’ve been waiting for
        </p>
        <div className="w-full h-[5px] bg-red-500"></div>
        <p className="text-[2.2rem] font-bold text-center">
          Why Do Infections Keep Coming Back?
        </p>
        <p className="text-[1.25rem]">
          Most conventional treatments
          <span className="font-500">do not eliminate the root cause.</span>
          They only suppress symptoms. The infection hides, then returns
          stronger.
          <ul className="mt-[1rem] list-disc ">
            This is why:
            <li className="ml-10 ">
              The same STD or STI keeps showing up again.
            </li>
            <li className="ml-10">
              You feel fine for a week, then the itching and discomfort return.
            </li>
            <li className="ml-10">
              Medications help temporarily, but the symptoms never go away
              permanently.
            </li>
          </ul>
          <span className="font-bold">
            Hamachin Detox Herbal Capsule is different.
          </span>
          <br />
          It’s a <span className="font-bold">powerful herbal formula</span>{" "}
          designed to
          <span className="font-bold"> flush out the root cause </span>of all
          STDs, STIs, and recurring infections from your blood, reproductive
          organs, and immune system.
        </p>

        <Image
          className="mx-auto"
          src={img5}
          alt="image five"
          width={800}
          height={800}
        ></Image>
        <p className="text-[2rem] font-bold text-red-500">
          What Makes Hamachin Detox Herbal Capsule So Effective?
        </p>
        <ul className="list-disc">
          Hamachin Detox Capsule is:
          <li className="ml-10">
            <span className="font-bold">100% Herbal & Safe</span> – No side
            effects, no chemicals, no synthetic drugs.
          </li>
          <li className="ml-10">
            <span className="font-bold"> Fast-Acting</span> – Notice relief
            within 3 days, complete cure within 7 days.
          </li>
          <li className="ml-10">
            <span className="font-bold">Trusted in Ghana</span> – Used and
            recommended by hundreds nationwide.
          </li>
          <li className="ml-10">
            <span className="font-bold">Tested & Proven</span> – Fights
            gonorrhea, syphilis, chlamydia, staph, trichomoniasis, yeast
            infections, herpes, rashes, and itching.
          </li>
        </ul>
        <ol className="list-decimal font-bold ">
          How It Works:
          <li className=" ml-10">Detoxifies your blood & organs</li>
          <li className=" ml-10">Boosts immunity against infections</li>
          <li className="ml-10">Repairs internal tissue damage</li>
          <li className="ml-10">Prevents recurrence of STDs/STIs</li>
        </ol>
        <div className="w-full h-[5px] bg-red-500"></div>
        <p className="lg:text-[2.5rem] text-[2rem] font-bold text-red-500 text-center md:w-6/10 lg:6/10 mx-auto">
          Below Are Worse Cases Of Infection Left Untreated, Get The Solution
          Today And Be Free Forever
        </p>
        <Image
          className="mx-auto"
          src={img6}
          alt="image six"
          width={800}
          height={800}
        ></Image>
        <Image
          className="mx-auto"
          src={img7}
          alt="image seven"
          width={800}
          height={800}
        ></Image>
        <Image
          className="mx-auto"
          src={img8}
          alt="image eight"
          width={800}
          height={800}
        ></Image>

        <p className="text-[2rem] font-bold text-blue-700 text-center uppercase mt-2">
          FEW OF THE POSITIVE FEEDBACKS WE GET ON A DAILY BASIS
        </p>

        <Image
          className="mx-auto"
          src={img9}
          alt="image nine"
          width={800}
          height={800}
        ></Image>

        <p className="text-[2rem] font-bold">
          Who Needs Hamachin Detox Herbal Capsule?
        </p>
        <ul className="list-disc">
          If you are:
          <li className="ml-10">
            Male or female suffering from{" "}
            <span className="font-bold">STDs or STIs</span>
          </li>
          <li className="ml-10">
            Experiencing{" "}
            <span className="font-bold">
              itching, discharge, rashes, or unpleasant odor
            </span>
          </li>
          <li className="ml-10">
            Tired of{" "}
            <span className="font-bold">
              recurring infections and failed treatments
            </span>
          </li>
          <li className="ml-10">
            Afraid of infecting your partner or facing public shame
          </li>
          <li className="ml-10">
            Looking for a{" "}
            <span className="font-bold">
              permanent herbal cure that works in 7 days
            </span>
          </li>
        </ul>

        <div className="w-full h-[5px] bg-blue-600"></div>
        <p className="capitalize text-[2.5rem] font-bold text-blue-600 text-center">
          Hamachin Detox is made for you.
        </p>
        <div className="w-full h-[5px] bg-blue-600"></div>
        <p className="text-[2rem] font-bold text-center md:w-6/10 lg:6/10 lg:text-[2.5rem] mx-auto">
          See Below Some Outcomes Of Infections Left Untreated, Please Don't Let
          Your Case Get To This Stage
        </p>
        <Image
          className="mx-auto"
          src={img10}
          alt="image ten"
          width={800}
          height={800}
        ></Image>
        <Image
          className="mx-auto"
          src={img11}
          alt="image eleven"
          width={800}
          height={800}
        ></Image>
        <Image
          className="mx-auto"
          src={img12}
          alt="image twelve"
          width={800}
          height={800}
        ></Image>

        <h3 className="uppercase font-bold text-red-500 text-[1.5rem]">
          What You’ll Experience in 7 Days
        </h3>
        <p className="">
          <span className="font-bold"> Day 1-2: </span>Itching reduces,
          discharge slows, body feels lighter
        </p>
        <p className="">
          <span className="font-bold"> Day 3-4: </span>Swelling, rashes, and
          odor begin to clear
        </p>
        <p className="">
          <span className="font-bold"> Day 5-6: </span> Infections flushed out,
          body detox complete
        </p>
        <p className="">
          <span className="font-bold"> Day 7: </span>Total healing and renewed
          health!
        </p>

        <h3 className="capitalize font-bold text-red-500 text-[1.5rem] ">
          bonus benefits of hemachin detox:
        </h3>

        <ul className="list-disc">
          <li className="ml-10">Improves libido and reproductive health</li>
          <li className="ml-10">Clears internal heat and bloating</li>
          <li className="ml-10">Boosts energy and immune system</li>
          <li className="ml-10">Balances hormones naturally</li>
          <li className="ml-10">Clear Itching and Rashes</li>
        </ul>
        <Image
          className="mx-auto"
          src={img13}
          alt="image thirteen"
          width={800}
          height={800}
        ></Image>

        <h3 className="font-bold text-[2rem] text-center text-red-500 capitalize md:w-7/10 lg:7/10 lg:text-[2.5rem] mx-auto">
          No More Embarrassment. No More Suffering in Silence. Your health is
          your confidence. Stop hiding. Stop managing symptoms. Start healing
          now.
        </h3>
        <h3 className="font-bold text-[2rem] text-center text-blue-600 uppercase">
          BELOW ARE LIKELY SYMPTOMS YOU MAY BE EXPERIENCING:
        </h3>

        <ul className="list-disc">
          <li className="font-bold capitalize ml-10">staphylococcus aureus</li>
          <li className="font-bold capitalize ml-10">candidiasis</li>
          <li className="font-bold capitalize ml-10">
            nattle rashes (sweetie)
          </li>
          <li className="font-bold capitalize ml-10">vaginal infections</li>
          <li className="font-bold capitalize ml-10">syphillis</li>
          <li className="font-bold capitalize ml-10">
            fallopian tube blockage
          </li>
          <li className="font-bold capitalize ml-10">miscarriages</li>
          <li className="font-bold capitalize ml-10">itching</li>

          <li className="font-bold capitalize ml-10">
            body pain and bumps, pus
          </li>
          <li className="font-bold capitalize ml-10">pelvic pain</li>
          <li className="font-bold capitalize ml-10">
            whiteness of skin, peelings around private part
          </li>
          <li className="font-bold capitalize ml-10">frequent urination</li>
          <li className="font-bold capitalize ml-10">discharges</li>
        </ul>
      </main>
      <div className="bg-blue-800 text-center text-white p-8 leading-[1.75em]">
        <p className="font-bold text-[2.25rem] capitalize md:text-[2.5rem] lg:text-[2.75rem] mx-auto text-yellow-300">
          see what users are saying
        </p>
        <p className="font-bold mt-4 leading-[1.5em] md:text-[1.5rem] lg:text-[1.75rem]">
          Don't just take our word for it!
          <br />
          Here are some satisfied customers who have experienced the Magic Of
          The Life Saving Product
        </p>
      </div>
      <div className="flex flex-col gap-[32px] leading-[2.2em] p-8 pb-20">
        <div className="lg:flex lg:flex-row w-full justify-between">
          <Image
            className="mx-auto w-full lg:w-2/10"
            src={img14}
            alt="image fourteen"
          ></Image>
          <Image
            className="mx-auto w-full lg:w-2/10"
            src={img15}
            alt="image fifteen"
          ></Image>
          <Image
            className="mx-auto w-full lg:w-2/10"
            src={img16}
            alt="image sixteen"
          ></Image>
          <Image
            className="mx-auto w-full lg:w-2/10"
            src={img17}
            alt="image seventeen"
          ></Image>
          <Image
            className="mx-auto w-full md:w-2/10 lg:w-2/10"
            src={img18}
            alt="image eighteen"
          ></Image>
        </div>

        <section className="flex flex-col items-center lg:flex-row leading-[1.75em]">
          <div className="flex flex-col items-center lg:w-25/100 justify-evenly">
            <Image src={star} alt="star1" width={50} height={50}></Image>
            <h3 className="text-center font-bold text-[1.5rem] capitalize">
              made from natural ingredients
            </h3>
            <p className="text-center ">
              Unlike other similar product that are made with harmful chemicals,
              this product is made from some rare African herbs extract which
              makes it the safest product out there without any side effects.
            </p>
          </div>
          <div className="flex flex-col items-center mt-8 lg:w-25/100 justify-evenly">
            <Image src={star} alt="star2" width={50} height={50}></Image>
            <h3 className="text-center font-bold text-[1.5rem] capitalize">
              you get a long-lasting result
            </h3>
            <p className="text-center ">
              This product offers permanent solution and not temporary. Other
              similar products will continue to drain your money every month,
              but when you buy this product, it solves all the long time
              infection .
            </p>
          </div>
          <div className="flex flex-col items-center text-center mt-8 lg:w-25/100 justify-evenly">
            <Image src={star} alt="star3" width={50} height={50}></Image>
            <h3 className=" font-bold text-[1.5rem] capitalize">
              how to use hemachin detox herbal capsule:
            </h3>
            <ul className="list-disc">
              <li className="ml-10">
                <span className="font-bold">Dosage: </span>One capsule, twice
                daily after meals
              </li>
              <li className="ml-10">
                <span className="font-bold">Duration: </span>Full treatment
                takes 7 days
              </li>
              <li className="ml-10">
                <span className="font-bold">No Restrictions: </span>Eat normal
                food, no injections, no hospital visits
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center mt-8 lg:w-25/100 justify-evenly">
            <Image src={star} alt="star4" width={50} height={50}></Image>
            <h3 className="text-center font-bold text-[1.5rem] capitalize ">
              Safe. Affordable. Available Across Ghana.
            </h3>

            <ul className="list-disc">
              Hemachin Detox is
              <li className="ml-10">Nafdac-approved</li>
              <li className="ml-10">
                Packed and sealed for hygiene and safety
              </li>
              <li className="ml-10">Discretely delivered nationawide</li>
            </ul>
          </div>
        </section>

        <h3 className="font-bold text-[2.5rem] text-center uppercase text-blue-700">
          be rest assured that you are getting the best infection remedy across
          the whole africa
        </h3>
        <Image
          className="mx-auto"
          src={img19}
          alt="image nineteen"
          width={800}
          height={800}
        ></Image>
        <div className="w-full h-[5px] bg-red-500"></div>

        <p className="uppercase font-bold leading-[1.25em] text-red-500 text-[1.5rem] text-center">
          free one month health consultation with our expert
        </p>
        <Image
          className="mx-auto"
          src={img20}
          alt="image twenty"
          width={800}
          height={800}
        ></Image>

        <ul className="text-[1rem] mx-auto">
          <h3 className="uppercase font-bold text-[1.75rem] text-center">
            limited offer for the first 100 buyers in ghana!
          </h3>
          <li className="flex flex-row items-center ">
            <div className="mr-4 ">
              <Image
                src={checkbox}
                alt="checkbox"
                width={16}
                height={16}
              ></Image>
            </div>
            <p> Get FREE DELIVERY WITHIN 48 HOURS</p>
          </li>
          <li className="flex flex-row items-center ">
            <div className="mr-4 ">
              <Image
                src={checkbox}
                alt="checkbox"
                width={16}
                height={16}
              ></Image>
            </div>
            <p>
              Enjoy <span className="font-bold"> free consultation</span> with
              our expert herbal team
            </p>
          </li>
          <li className="flex flex-row items-center ">
            <div className="mr-4 ">
              <Image
                src={checkbox}
                alt="checkbox"
                width={16}
                height={16}
              ></Image>
            </div>
            <p>
              Receive
              <span className="font-bold"> discrete doorstep delivery</span>
            </p>
          </li>
        </ul>
        <div className="w-full h-[3px] bg-black"></div>
        <div className="mx-auto leading-[1.75em] ">
          <h3 className="font-bold capitalize text-[1.75rem] lg:text-[2rem]">
            ready to reclaim your health and freedom?
          </h3>
          <p className="">
            Don’t let another day pass with pain, fear, or shame.
          </p>
          <p className="">
            Join the hundreds of men and women in Ghana who have experienced a
            total cure using{" "}
            <span className="font-bold"> Hamachin Detox Herbal Capsule.</span>
          </p>
          <div className=" text-[1.25rem] leading-[1.75em] mt-4">
            <p className="font-bold text-[1.5rem] lg:text-[2rem]">
              You Deserve to Be Free from STDs & Infections—For Good.
            </p>
            <p className="mt-4">
              Choose
              <span className="font-bold"> Hamachin Detox Herbal Capsule.</span>
            </p>
            <p>Choose health. Choose confidence</p>
            <p>
              Choose Your 7-day transformation begins
              <span className="font-bold"> NOW</span>
            </p>
          </div>
        </div>
        <h3 className="uppercase text-center text-[1.75rem] mx-auto text-red-700 font-bold leading-[1.5em] lg:w-1/2">
          do you want to start enjoying an infection free life? Then get any of
          our packages!
        </h3>

        <div className="flex flex-col text-center items-center text-red-700">
          <p className="font-bold text-[5rem] mb-2">89</p>
          <p className="font-bold">Purchases</p>
        </div>
        <div className="leading-[1.75em] text-center lg:w-1/2 mx-auto">
          <h3 className="capitalize text-[2rem] font-bold  text-blue-700">
            what if this doesn't work for you?
          </h3>
          <p className="text-[1.2rem] mt-4">
            We understand how difficult it is for you to buy items online but
            based on feedbacks from over
            <span className="font-bold">
              {" "}
              1,455 all over the world, this product works.
            </span>
          </p>
          <p className="text-[1.2rem] mt-4">
            But just to show you how confident we are in our product and how
            committed we are to your health, here is our “No Bullshit”
            Guaranteed…
          </p>
        </div>
      </div>
      <footer className="flex flex-col items-center justify-center w-full leading-[2.2em]">
        <h3 className="capitalize text-[2rem] font-bold text-center mb-4 px-2 lg:text-[2.25rem]">
          kindly fill the order form here
        </h3>
        <div className="bg-blue-800 w-full ">
          <form className="p-8 text-[1.15rem] lg:w-6/10  md:w-6/10 mx-auto">
            <div className="flex flex-col bg-white py-2 px-4 text-black-500 mb-4 w-full rounded-[6px]">
              <label for="name" className="font-bold">
                Name:
              </label>
              <input
                className="border-[#9d9d9d] border border-2 rounded-[6px] p-2 mb-4"
                type="text"
                placeholder="Input Your Name"
                id="name"
                name="name"
                minlength="4"
              ></input>
            </div>
            <div className="flex flex-col bg-white py-2 px-4 text-black-500 mb-4 w-full rounded-[6px]">
              <label for="address" className="font-bold">
                Full Address:*
              </label>
              <input
                className="p-2 mb-4 border-[#9d9d9d] border border-2 rounded-[6px]"
                type="address"
                placeholder="Input Your Delivery Address"
                id="address"
                name="address"
                minlength="10"
                required
              ></input>
            </div>
            <div className="round-4px flex flex-col bg-white py-2 px-4 text-black-500 mb-4 w-full rounded-[6px]">
              <label for="phone-number" className="font-bold">
                Phone Number:*
              </label>
              <input
                className="p-2 mb-2 border-[#9d9d9d] border border-2 rounded-[6px]"
                type="text"
                placeholder="Input Your Phone Number"
                id="phone-number"
                name="phone-number"
                minlength="11"
                required
              ></input>
            </div>
            <fieldset className="text-white leading-[1.75em]">
              <legend className="font-bold text-[1.5rem]  uppercase my-2">
                quantity needed:
              </legend>

              <div className="">
                <input className="" type="checkbox" id="one" name="one" />
                <label for="one" className="m-2">
                  1 PIECE OF HAMACHIN DETOX + ONE EXTRA IS 250 GHc
                </label>
              </div>

              <div>
                <input type="checkbox" id="two" name="two" />
                <label for="two" className="m-2">
                  2 PIECES OF HAMACHIN DETOX + TWO EXTRA IS 450 GHc
                </label>
              </div>
              <div>
                <input type="checkbox" id="three" name="three" />
                <label for="three" className="m-2">
                  3 PIECES OF HAMACHIN DETOX + THREE EXTRA IS 600 GHc
                </label>
              </div>
            </fieldset>
            <button className="text-center uppercase py-4 text-white font-bold bg-blue-600 w-full mt-6 rounded-[8px] hover:bg-green-500">
              submit
            </button>
          </form>
        </div>
        <div className="bg-blue-900 text-white leading-[2em] w-full ">
          <h3 className="font-bold my-4 text-[2rem] capitalize text-center">
            100% satifaction guaranteed!
          </h3>
          <Image
            className="mx-auto"
            src={img21}
            alt="image twenty-one"
            width={500}
            height={500}
          ></Image>
          <div className="text-yellow-300 leading-[1.75em]">
            <h3 className="font-bold mt-4 text-[2rem] capitalize text-center">
              Here's Our 'Unconditional' 30-Days Guaranty!
            </h3>
            <p className="text-center mt-4">
              For 30 days you can get a full refund if you’re not 500% satisfied
              with the result.
            </p>
          </div>
          <div className="leading-[1.75em]">
            <p className="text-center mt-4">
              I’m pretty sure big pharma don’t offer a refund or a trial period
              when they give you a migraine and heart palpitations with their
              pills
            </p>
            <p className="text-center mt-4">
              We are pretty sure they keep every kobo in their pockets, even
              when their pills do nothing for you
            </p>
            <p className="text-center mt-2">
              Test drive this infection treatment for a full 1 month and if you
              don’t get results, we will refund you without terms and
              conditions.
            </p>
          </div>
        </div>
        <div className="bg-black p-4 text-white leading-[1.75em] text-[1rem]">
          <p className="text-center capitalize p-2">
            The Contents Of This Website, Text, Images, Products Are Sold Or
            Distributed By LDK Ltd and Protected Under The Nigerian Copyright
            Act Pursuant To Nigeria And International Copyright Laws.
            Copy/Edit/Use Of Our Contents Without My Express Written Permission
            And You WILL Be Subject To The Maximum Fine/Penalty Imposed By The
            Law.
          </p>
          <p className="text-center text-yellow-300 py-2 uppercase font-bold text-[1.25rem]">
            disclaimer
          </p>
          <p className="text-center pt-2 pb-4 px-2">
            THIS IS NOT FACEBOOK: This site is not part of the Facebook or
            Facebook Inc. website. In addition, this site is NOT endorsed by
            Facebook in any way. FACEBOOK is a trademark of FACEBOOK, Inc.
          </p>
        </div>
      </footer>
    </div>
  );
}
