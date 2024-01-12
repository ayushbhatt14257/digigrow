import { React, useState } from 'react'
import './home.css'
import IMG from '../assests/logo.png'
import IMG2 from '../assests/coursework_writing_services.png'
import IMG3 from '../assests/Student3.png'
import IMG4 from '../assests/projectsdeal_dissertation_writing_services_offer.png'
import IMG5 from '../assests/index2.png'
import google from '../assests/google_read_reviews.png'
import sitejabber from '../assests/Sitejabber_final.png'
import Trustpilot from '../assests/Trustpilot.png'
import yelp from '../assests/yelp_final.png'
import Yell from '../assests/Yell_1.png'
import star from '../assests/5-Star-Reviews-on-Facebook.png'
import order from '../assests/Order-Now-Button-Vector.png'
import orderNow from '../assests/order-now.png'
import learnMore from '../assests/Learn-More.png'
import experience from '../assests/experience.png'
import file from '../assests/08.png'
import satisfaction from '../assests/satisfaction.png'
import deadline from '../assests/deadline.png'


const Home = () => {
    const [isMobile, setIsMobile] = useState(false);

    return (
        <>
            <section className='headerSection'>
                <div className="headerContainer">
                    <div className="headerImg">
                        <img src={IMG} alt="" />
                    </div>
                    <div className="headerText">
                        <h3>No. 1 Dissertation Writing Services in UK, <span>Since 2001!</span></h3>
                        <button><i className="fa-solid fa-phone"></i> Call +44 20 32900046</button>
                    </div>
                    <button className='mobile-menu-icon'
                        onClick={() => setIsMobile(!isMobile)}>
                        {isMobile ? <i className="fa-solid fa-xmark"></i> : <i className="fa-solid fa-bars"></i>}
                    </button>
                </div>
            </section>

            <nav>
                <div className="navContainer">
                    <ul className={isMobile ? 'nav_menu-mobile ' : 'nav_menu'}
                        onClick={() => setIsMobile(false)}>
                        <li>Home</li>
                        <li>Dissertation</li>
                        <li>Coursework Help</li>
                        <li>Research Paper Help</li>
                        <li>Dissertation Topics</li>
                        <li>Dissertation Examples</li>
                        <li>Dissertation Structure</li>
                        <li>Essay Help</li>
                        <li>PhD Proposal</li>
                        <li>PhD Thesis</li>
                        <li>Assignment Help</li>
                        <li>Blog</li>
                    </ul>
                </div>
            </nav>

            <section className='banner'>
                <div className="bannerImg">
                    <img src={IMG2} alt="" />
                </div>
                <div className="bannerFormContainer">
                    <div className="ladyImg">
                        <img src={IMG3} alt="" />
                    </div>
                    <div className="bannerf">
                        <div className="bannerForm">
                            <div className="bannerFromSale">
                                <img src={IMG4} alt="" />
                            </div>
                            <div className="formHeading">
                                <img src={IMG5} alt="" />
                                <h1>Calculate Pricing</h1>

                            </div>
                            <div className="subHeading">
                                <h2>Just Select Correct Options and Calculate Best Price</h2>
                            </div>
                            <div className="fromContainer">
                                <form action="">
                                    <select name="languages" id="lang" >
                                        <option value="Please Select Academic Level">-- Please Select Academic Level --</option>
                                        <option value="Masters">Masters</option>
                                        <option value="Undergraduate">Undergraduate</option>
                                        <option value="PhD">PhD</option>
                                    </select>
                                    <select name="languages" id="lang" >
                                        <option value="Please Select Domain">-- Please Select Domain --</option>
                                        <option value="Masters">Accounting & Finance</option>
                                    </select>
                                    <select name="languages" id="lang" >
                                        <option value="Please Select Desired Service">-- Please Select Desired Service --</option>
                                        <option value="Masters">Accounting & Finance</option>
                                    </select>
                                    <select name="languages" id="lang" >
                                        <option value="Select No. of Words/Pages">-- Select No. of Words/Pages --</option>
                                        <option value="Masters">Accounting & Finance</option>
                                    </select>
                                    <select name="languages" id="lang" >
                                        <option value="-- Select Tool --">-- Select Tool --</option>
                                        <option value="Masters">Accounting & Finance</option>
                                    </select>
                                    <input type="text" placeholder='Email Id' />
                                    <input type="number" placeholder='Valid mobile number' />
                                    <input type="date" placeholder='Date' />
                                </form>
                                <div className="formButton">

                                    <button>Click to calculate
                                        <i className="fa-solid fa-calculator"></i>
                                    </button>
                                </div>
                                <div className="formResult">
                                    <h3>Result All that matter</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='emtysec'>

            </section>

            {/* =========================================== BANNER END ============================================================ */}

            <section className='service'>
                <div className="serviceHeading">
                    <h1>Dissertation Writing Services UK</h1>
                    <p>
                        Projectsdeal is the UK's only dissertation writing service that is consistently awarded the title of "No.1 Dissertation Writing Service" by every major public review platform, including Google, TrustPilot, Sitejabber, Yell, and Yelp, with all reviews receiving a perfect 5-star rating. The rationale behind this achievement is simple: We Deliver! We go to the extreme ends to ensure our Clients are Happy and Super Successful. And that's Non-Negotiable for us. <br />
                        We have been, we are, and we will always be the Most Loved & Trusted Dissertation Writing Service in the UK. We are proud, & you will be too! We are proud of our achievements & flawless track record. Please read our reviews:
                    </p>
                </div>

                <div className="Partners">
                    <div className="row text-center">
                        <div className="col-lg-2 col-md-12 Partnersimg">
                            <img src={google} alt="" />
                        </div>
                        <div className="col-lg-2 col-md-12 Partnersimg">
                            <img src={sitejabber} alt="" />
                        </div>
                        <div className="col-lg-2 col-md-12 Partnersimg">
                            <img src={Trustpilot} alt="" />
                        </div>
                        <div className="col-lg-2 col-md-12 Partnersimg">
                            <img src={yelp} alt="" />
                        </div>
                        <div className="col-lg-2 col-md-12 Partnersimg">
                            <img src={Yell} alt="" />
                        </div>
                        <div className="col-lg-2 col-md-12 Partnersimg">
                            <img src={star} alt="" />
                        </div>
                    </div>
                </div>

                <div className="courseWork">
                    <div className="courseWorkHeading">
                        <h1>We specialise in Essays, Assignments, Courseworks, Online exams, and Dissertation Writing Services, Since 2001!</h1>
                        <p>We have literally delivered success and helped thousands of
                            anxious and vulnerable students, many many of your senior and super seniors
                            peers, with Assignments, Coursework, Online exams, and Dissertations. We understand
                            and appreciate the challenges you face in juggling your job, studies, family, your
                            ugly and demanding  supervisor,
                            and we feel responsible that your career and literally your life depends on
                            your Results. We have delivered success, Since 2001, So now it's effortless to deliver exactly what your supervisor is
                            looking for. If you study in UK, you can please focus on your other important priorities
                            while we look after your academic success. </p>
                        <h2>Just Sit Back Relax & Consider Your Work Done!!</h2>
                        <div className="workimg">

                            <img src={order} alt="" />
                        </div>
                        <p>Projectsdeal is the best dissertation writing services in the UK, with all 5 star reviews. Our team of experienced British writers will craft your dissertation with a research-oriented approach, ensuring exceptional quality. Our dissertation writers will diligently work on your dissertation, making it engaging and captivating, ultimately helping you score distinction. Projectsdeal has years of experience in the industry, making it one of the top dissertation writing service in UK. All of our dissertation helpers are veteran writers and research experts with several years of expertise. We are hailed as the best dissertation help for providing PhD thesis, assignments and essay writing.</p>
                    </div>
                </div>

            </section>

            <section className='videoSection'>
                <div className="videoContainer">
                    <div className="row text-center">
                        <div className="col-lg-6 col-md-12 vidoGrid">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/YVbMIIdpvWQ?si=OMM2z4n55XdU5rmR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                        <div className="col-lg-6 col-12 videoText">
                            <p>✔ Established 2001</p>
                            <p>✔ 24 Years of Successful Track Record </p>
                            <p>✔ PhD Qualified Writers</p>
                            <p>✔ Top Notch Quality</p>
                            <p>✔ Enjoy Full Confidentiality</p>
                            <p>✔ Plagiarism Free</p>
                            <p>✔ Free Unlimited Revisions</p>
                            <p>✔ Professional Project Management</p>
                            <p>✔ 5 star Reviews on Google, SiteJabber, TrustPilot </p>
                            <p>✔ 600+ Domain Experts</p>
                            <p>✔ 46 Project Coordinators</p>
                            <p>✔ Guaranteed Grades</p>
                        </div>
                    </div>
                </div>

                <div className="videoHeading">
                    <h1>For Urgent Deadlines WhatsApp Us</h1>
                    <div className="videoButton">
                        <button><i className="fa-brands fa-whatsapp"></i>
                            WhatsApp +44 7447882377</button>
                    </div>
                    <p>When it comes to hiring Best Dissertation Writing Service in London trust becomes one of the major concerns for students. Students have many concerns regarding the methodology, deadlines, quality of work, pricing, experience of the British writers, plagiarism, and revisions or amendments etc. We are so good that the results of our works speak for themselves as more than 82% of our clients have bagged for themselves Merits and Distinctions. Balancing your odd Job, other imp priorities and Score!<br />
                        A dissertation determines your overall grade and can either help your academic career or break it. It requires investing time, energy, motivation and skills such as research skills in order to do a great job. However, to ensure that your dissertation is not only accepted but also wins you a great grade and high regard, you must present an original dissertation that fulfills the objectives it has indicated. It should be well-researched, coherent and a demonstration of knowledge applied in solving a real life situation effectively.
                    </p>
                </div>

            </section>

            <section className='nextService'>
                <div className="nextServiceHeading">
                    <h1>What makes Projectsdeal UK #1 Dissertation Writing Service</h1>
                </div>
                <div className="nextServiceGrid">
                    <div className="row text-center serviceRow">
                        <div className="col-lg-3 col-md-6 col-sm-12 serviceCart">
                            <i className="fa-solid fa-thumbs-up"></i>
                            <h3>Premium Quality</h3>
                            <p>Projectsdeal is Gold Standard in Academic Research & Writing</p>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 serviceCart">
                            <i className="fa-solid fa-ban"></i>
                            <h3>Plagiarism Free</h3>
                            <p>Use Official License of Turnitin to Validate 6% plagiarism</p>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 serviceCart">
                            <i className="fa-solid fa-clock"></i>
                            <h3>Meeting Deadline</h3>
                            <p>Projectsdeal team values on-time submission. We deliver before the deadline. Relax!</p>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 serviceCart">
                            <i className="fa-solid fa-lock"></i>
                            <h3>100% Privacy</h3>
                            <p>Follow Strict Code of Confidentiality. We are known for HIGH Business Ethics.</p>
                        </div>
                    </div>

                    <div className="row text-center serviceRow">
                        <div className="col-lg-3 col-md-6 col-sm-12 serviceCart">
                            <i className="fa-regular fa-money-bill-1"></i>
                            <h3>Affordable Prices</h3>
                            <p>Every year if more than 80% of your own className can afford it, you can surely! Your work be worth every pound spend.</p>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 serviceCart">
                            <i className="fa-solid fa-phone"></i>
                            <h3>Dedicated Team</h3>
                            <p>Dedicated Personal Managers to ensure high level of service experience.</p>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 serviceCart">
                            <i className="fa-regular fa-copy"></i>
                            <h3>Free Revision</h3>
                            <p>We understand that your supervisor is our client! We prioritize your success above all else, so feel free to request any number of modifications.</p>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 serviceCart">
                            <i className="fa-solid fa-repeat"></i>
                            <h3>Playback Guarantee</h3>
                            <p>Our Terms & Conditions are designed with Fair Usage and SOLID Guarantees to ensure success! Result is all that matters!</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className='worry'>
                <div className="worryHeading">
                    <h1>Simply get rid of your Dissertation worries Now:</h1>
                </div>
                <div className="worryPoint">
                    <ol>
                        <li>Just select your domain</li>
                        <li>Choose the exact word count </li>
                        <li>Select the final submission date</li>
                        <li>Get instant pricing</li>
                    </ol>
                </div>
                <div className="worryImg">
                    <img src={orderNow} alt="" />
                </div>
            </section>

            <section className='testimonial'>
                <div className="testmonialHeading">
                    <h1> Recent Dissertation Writing Services Reviews</h1>
                </div>

                <div id="slider">
                    <ul>
                        <li>
                            <div class="slider-container">
                                <p>"Being an international student, I needed reliable dissertation help, and ProjectsDeal exceeded my expectations. Their team provided exceptional dissertation, ensuring my literature review was comprehensive and aligned with my research objectives. Their expert writers delivered a well-structured and cohesive complete dissertation. I'm grateful for their assistance!” <br />
                                    -Chinedu Okonkwo
                                </p>
                            </div>
                        </li>


                        <li>
                            <div class="slider-container">
                                <p>“Being a PhD candidate, I often struggle with the extensive literature review required for my dissertation. However, ProjectsDeal came to my rescue. Their team of experts provided invaluable guidance and assistance in conducting a comprehensive literature review, enabling me to excel in my research. I'm truly grateful!
                                    <br />
                                    - David Wilson
                                </p>
                            </div>
                        </li>
                        <li>
                            <div class="slider-container">
                                <p>“As a postgraduate student, I needed reliable dissertation help to meet the demands of my program. ProjectsDeal proved to be the perfect choice. Their writers conducted an in-depth literature review, ensuring the foundation of my dissertation was strong. They delivered a well-researched and well-written dissertation. Thank you!"
                                    <br />
                                    - Emma Thompson
                                </p>
                            </div>
                        </li>

                    </ul>
                </div>
            </section>


            <section className='achive'>
                <div className="achiveHeading">
                    <h1>How we consistently achieve Merits and Distinctions in Dissertations?</h1>
                </div>
                <div className="achivePara">
                    <p>  To produce such a dissertation and get high marks for it, you need to know how a dissertation is evaluated so that you can tailor it for a great evaluation. While these evaluations differ among different departments or universities the criteria is pretty much the same and may include the following:</p>
                    <p>
                        • Emphasis is mainly placed on the skill with which you have used the research methods to obtain scientifically presented findings as well as masterfully draw conclusions from these results. <br />
                    </p>

                    <p>
                        • The dissertation should be original and relevant as well as demonstrate your ability to thoroughly conduct a research study. <br />
                    </p>

                    <p>
                        • Your literature review should be relevant and very specific to your topic instead of an account of general information related to your field of study. The review should be both descriptive and critically analyze previous works while explicitly showing how his research methodology and the review are linked. <br />
                    </p>

                    <p>
                        • The dissertation you present should have the research methodology appropriate and justified. You should minimize the likelihood of bias and limitations. <br />
                    </p>

                    <p>
                        • The findings from your research should answer your research questions as well as meet your objectives. There should be no doubt as to the testing of your hypotheses. <br />
                    </p>


                    <p>
                        • Your results should be well presented such that the patterns can be clearly identified and have been summarized. <br />
                    </p>

                    <p>
                        • In your discussion, make a point of analyzing the main points first and speculations or reconceptualization should be well-founded in the results presented as well as linked to literature. Results should be interpreted exhaustively and innovatively related to the research hypothesis. <br />
                    </p>

                    <p>
                        • The reference list should give a complete and accurate account of sources used in the dissertation. <br />
                    </p>

                    <p>
                        • Finally, there should be some recommendations for future studies. <br />
                    </p>


                    <p>
                        • Once the evaluation is done by supervisors and advisors who propose a grade that is either confirmed or rejected by a board of examiners, the final grade is given. <br />
                    </p>

                    <h3>We Make Dissertation Writing Easier!</h3>
                    <p>With our dissertation writing help will make writing your dissertation easier. We put our wealth of experience into use and making us reliable and accurate dissertation help and writing services. We guarantee you the best through our time-proven research and thesis writing service. We are your go-to dissertation writing help provider, ensuring that your dissertation meets your university specifications. Our experience spans across all major universities in UK, where we have consistently delivered exceptional results with all 5 star reviews on all platforms. With our expertise, we are committed to providing the highest quality dissertation assistance to students from all academic backgrounds.</p>

                </div>
            </section>

            <section className='simpleLearning'>
                <div className='simpleLearningHeading'>
                    <h3>Simply relieve yourself from your dissertation worries in just 1 step:</h3>

                </div>
                <div className='simpleLearningButton'>
                    <img src={learnMore} alt="" />
                </div>

                <div className="simpleLearningGrid">
                    <div class="row text-center">
                        <div class="col learningGrid">
                            <img src={experience} alt="" />
                            <p>Ask any 5 of your Own Classmates & we bet at least 3 of them would already be our clients!</p>
                        </div>
                        <div class="col learningGrid">
                            <img src={file} alt="" />
                            <p>Over 96% of our clients have scored Merits & Distinctions Since 2001, It's effortless now!</p>
                        </div>
                        <div class="col learningGrid">
                            <img src={satisfaction} alt="" />
                            <p>Intermediate drafts & Unlimited number of Revisions to flawlessly meet the Supervisors thought process</p>
                        </div>
                        <div class="col learningGrid">
                            <img src={deadline} alt="" />
                            <p>100% Confidentiality, 0% Plagiarism on turnitin, Get Ready for Submission Work</p>
                        </div>
                        <h4> Frequently Asked Questions </h4>
                    </div>

                    <div className="learningPara">
                        <p> What do you need to start writing my dissertation ?
                            <br />

                            In order to write your dissertation, we'll need the following:
                            <br />

                            1. Dissertation handbook, Proposal approved by university, ethics form
                            <br />

                            2. A full list of requirements, deadlines, and expectations of your work.

                            <br />
                        </p>

                        <p>Can you do my dissertation?
                            <br />
                            Yes. Our experienced team can handle all aspects, including topic selection, dissertation proposal help, ethics forms, questionnaire, data collection, and analysis. We will conduct a thorough literature review, ensuring that the latest and most relevant references are incorporated into your dissertation. We carefully consider all your comments and requirements. With our years of expertise, our writers provide precise recommendations and conclusions to add value to your research field. Our aim is to provide you with a fully ready-for-submission dissertation that includes proper research and referencing to guarantee excellent grades.

                        </p>

                        <p>How do I get reliable dissertation help services in the UK? <br />
                            We maintain 100% confidentiality as we understand the importance of results to your life, to your career. The massive amount of expectations the supervisors and the university has of you in known to us. All out clients for the last 20 years are all students from PhD, Masters and undergraduate. We conduct knowledge transfer sessions so you can also learn while you score! Your entire career, your entire life depends on your Scorecard. Hence we have multiple intermediate interactions to ensure all of us work as one team and progress together on your Essay, Coursework, Dissertation. So, please be assured!</p>
                    </div>

                </div>

            </section>

            <section className="awardPara">
                <div className='awaradHeading'>
                    <h1>Awarded Best Dissertation Writing Service in the UK - </h1>
                </div>
            </section>
        </>
    )
}

export default Home