export type HonorsEntry = {
  slug: string
  title: string
  subtitle?: string
  category: 'year-in-review' | 'experience'
  year: string
  date: string
  summary: string
  content: string[]
  images?: { src: string; alt: string; caption?: string }[]
  videoUrl?: string
  tags: string[]
}

export const honorsEntries: HonorsEntry[] = [
  {
    slug: 'year-in-review-2022-2023',
    title: '2022–2023',
    subtitle: 'Year-in-Review',
    category: 'year-in-review',
    year: '2023',
    date: 'Freshman Year',
    summary:
      'Transitioning from Abu Dhabi to Cincinnati, finding community through engineering clubs and research, and discovering a passion for entrepreneurship through Startup Weekend.',
    content: [
      'This past year has been one of the most transformative and impactful periods of personal growth in my life. As an international student, transitioning from high school to college presented numerous challenges, especially after emerging from the confines of the COVID-19 lockdown and leaving behind familiar faces and loved ones. Initially, settling down and finding a sense of belonging at the University of Cincinnati seemed like an insurmountable task. However, through my determination and resilience, I was able to overcome these obstacles and experience significant personal growth.',
      'One of the key ways in which I grew this year was by stepping out of my comfort zone. Instead of succumbing to feelings of isolation and homesickness, I actively sought out opportunities to forge new connections and create lasting memories. Recognizing that my college experience was not going as I had initially envisioned, I took it upon myself to change the narrative. I joined clubs and organizations such as Engineers Without Borders and ACM, fully immersing myself in their activities and building meaningful relationships within those communities. This allowed me to feel more at home and see college life through a completely different lens.',
      'Additionally, I pushed myself to explore new ventures by participating in the RaMP and ENED Honors Research experiences. These opportunities not only expanded my knowledge but also helped me connect with peers who shared similar interests. The research experiences provided a platform for personal and intellectual growth, further strengthening my resilience and determination.',
      'Moreover, my participation in the Startup Weekend competition was a pivotal moment that fueled my curiosity and passion for entrepreneurship. Collaborating with a friend, we developed an innovative startup idea called PhizzIO, focusing on physiotherapy. Surprisingly, we received the second-place award and received positive feedback for our concept. This experience led me to join the Bearcat Ventures club and work closely with the Center for Entrepreneurship, broadening my horizons and nurturing my newfound interest.',
      'Throughout these endeavors, I continuously demonstrated resilience by not allowing setbacks or initial difficulties to discourage me. Instead, I embraced challenges as opportunities for personal growth and learning. I learned the importance of perseverance, adaptability, and maintaining a positive mindset. These qualities enabled me to overcome the obstacles I faced during my first year at UC and thrive academically, socially, and emotionally.',
      'Moreover, I will continue to foster connections with my newfound friends and colleagues, as they have been instrumental in my personal growth journey. By maintaining these relationships, I can rely on their support and encouragement, and we can hold each other accountable for our individual growth.',
      'In conclusion, this past year has been a transformative period of personal growth for me. Through resilience, stepping out of my comfort zone, and actively seeking opportunities, I was able to overcome challenges and establish a sense of belonging at the University of Cincinnati. By utilizing the resources available to me and nurturing my support network, I will hold myself accountable for continuing this growth and ensuring that my college experience remains filled with exploration, connection, and meaningful experiences.',
    ],
    tags: ['Resilience', 'Community', 'Entrepreneurship', 'PhizzIO'],
  },
  {
    slug: 'year-in-review-2023-2024',
    title: '2023–2024',
    subtitle: 'Year-in-Review',
    category: 'year-in-review',
    year: '2024',
    date: 'Sophomore Year',
    summary:
      'Silicon Valley trip with the Center of Entrepreneurship, Venture Lab accelerator with PhizzIO, and first co-op at Phillips Edison — a year of solidifying direction in AI and startups.',
    content: [
      'Just when I thought I had experienced a great freshman year, my sophomore year turned out to be even more enriching, filled with opportunities that significantly impacted my personal, academic, and professional growth. The past academic year has been a journey of exploration and realization, with several key experiences shaping my goals and life trajectory.',
      'The most impactful experience was the trip to San Francisco with the Center of Entrepreneurship and the College of Engineering and Applied Sciences. As a computer science student, visiting Silicon Valley was a dream come true. During this trip, I visited renowned companies like IDEO, Notion, Google, and Apple. These visits provided me with the opportunity to engage with AI engineers and software developers, gaining invaluable insights into the fields of computer science and artificial intelligence. Conversations with these industry leaders helped me understand the current trends and future possibilities in AI and technology. This experience was instrumental in solidifying my interest in AI and guiding me toward a focused career path.',
      'San Francisco itself was an inspiring city. Walking across the Golden Gate Bridge, a marvel of engineering built by UC alumnus Joseph Strauss, was particularly moving. It was a tangible reminder of how hard work and passion can lead to monumental achievements. This trip reinforced my belief that dedication and perseverance are key to success, motivating me to pursue my goals with renewed energy.',
      'Another significant experience was my participation in the Venture Lab accelerator program at the 1819 Innovation Hub. I have been working on a startup aimed at making physical therapy more accessible and ensuring better patient adherence. The accelerator program was a deep dive into the entrepreneurial world, where I learned about the intricacies of launching and managing a startup. The focus on customer discovery was particularly enlightening, as it emphasized the importance of understanding and addressing customer needs. Through this program, I gained essential entrepreneurial skills, from market research to pitching ideas, and this experience affirmed my passion for developing my physical therapy startup. It also provided me with the confidence and knowledge to push forward with my entrepreneurial endeavors.',
      'Additionally, my first internship at Phillips Edison and Company was a transformative experience. This co-op opportunity allowed me to apply my academic knowledge in a real-world setting, giving me a deeper understanding of how the industry operates. Working on various projects, collaborating with professionals, and navigating the corporate environment helped me develop critical skills and clarified my career aspirations. This internship confirmed my desire to work in the tech industry and provided a clearer picture of the field I want to specialize in post-graduation.',
      'Looking ahead, my goals for the next year are both ambitious and exciting. I aim to advance my startup by expanding my team and developing a fully functional product that can be tested clinically. This will involve rigorous development, testing, and refinement to ensure the product meets the needs of physical therapy patients effectively. Additionally, I plan to deepen my knowledge in machine learning and AI, fields that have captivated my interest. To achieve this, I intend to take advanced courses and secure an internship focused on machine learning. Hands-on experience in this area will be invaluable, allowing me to apply theoretical knowledge to practical problems and gain insights from industry experts.',
      'These experiences have not only shaped my personal and professional goals but also set a clear trajectory for my future endeavors. The past year has demonstrated the importance of hard work, passion, and the pursuit of knowledge. As I move forward, I am excited to build on these experiences, continue learning, and strive toward making meaningful contributions to the fields of AI and physical therapy.',
    ],
    tags: ['Silicon Valley', 'Venture Lab', 'Co-op', 'AI'],
  },
  {
    slug: 'year-in-review-2024-2025',
    title: '2024–2025',
    subtitle: 'Year-in-Review',
    category: 'year-in-review',
    year: '2025',
    date: 'Junior Year',
    summary:
      'The most defining year yet — first internship at Phillips Edison, top-25 at EFest, podium presentation at AMIA, 2nd place at CMU\'s VC competition, and promoted to General Partner at Bearcat Ventures.',
    content: [
      'Looking back, 2024 was without a doubt the most defining and transformative year of my life so far. It felt like everything I was passionate about — technology, research, startups, and AI — all started to come together in ways I hadn\'t fully imagined before. It was the kind of year that didn\'t just help me grow — it completely reshaped how I think about my future.',
      'The year kicked off with my very first internship as a software engineer at Phillips Edison, a real estate investment trust (REIT). Walking into a corporate office and contributing to real production systems for the first time was both intimidating and exciting. I spent that semester diving deep into backend engineering and learning how data moves across complex systems. I got exposure to data pipelines, clean architecture, and the importance of writing code that scales and lasts. But more than the tech, I learned what kind of environment I thrive in and what kind of work genuinely excites me. That internship laid the groundwork for everything that followed.',
      'In the spring, I had the chance to represent my startup at the EFest Startup Competition, where we were selected as one of the top 25 student-led startups in the country. We ended up placing in the top 20 and even won a cash prize, but the real value was in being surrounded by so many creative, driven student founders. Traveling to Minneapolis for the event, pitching to judges, and networking with other teams was surreal — it was one of the first moments where I felt, "Wow, I can really do this."',
      'Another unforgettable milestone was presenting my research at the AMIA Clinical Informatics Conference. I gave a full podium presentation on agile user-centered design in healthcare settings, and it pushed me way outside my comfort zone. Preparing for that talk taught me how to communicate complex ideas clearly and convincingly, especially to a room full of professionals. That experience made me realize how much I love being at the intersection of healthcare and technology — working on things that not only work but actually help people.',
      'Then came the Venture Capital Investment Competition at Carnegie Mellon. Our team represented the University of Cincinnati and placed 2nd in an incredibly intense and competitive national round. It was one of those moments where months of preparation, teamwork, and late nights all came together. I learned how to evaluate startups from an investor\'s lens, think critically under pressure, and work collaboratively with brilliant peers.',
      'And in the middle of all this, I was promoted to general partner at Bearcat Ventures. Taking on that role gave me the chance to lead investments, mentor new analysts, and support some amazing early-stage startups. It\'s one thing to build technology, but being able to evaluate it from a venture standpoint gave me a whole new appreciation for the ecosystem I want to be part of long-term.',
      'Coming out of this year, one thing is clearer than ever: I want to be at the forefront of AI innovation, especially in areas that make a real-world impact like healthcare. I\'ve always been passionate about AI — long before it became the buzzword it is now — and this year just confirmed how deeply I want to contribute to the field, not just follow it. Whether it\'s through research, building tools, or supporting others through VC, I want to be a builder, a problem solver, and someone who helps shape where technology goes next.',
      'Heading into 2025, I\'m setting some big goals. I\'m currently doing a summer internship with Kinetic Vision as a machine learning intern and hope to learn a lot about this field. And, of course, I want to keep growing with Bearcat Ventures and continue contributing to the startup ecosystem.',
      'If 2024 was the year I built the foundation, 2025 is going to be about expanding on it.',
    ],
    tags: ['EFest', 'AMIA', 'Carnegie Mellon VC', 'Bearcat Ventures', 'AI'],
  },
  {
    slug: 'design-thinking-research',
    title: 'Foundation of Engineering Design Thinking Research',
    category: 'experience',
    year: '2023',
    date: 'Spring 2023',
    summary:
      'Applying engineering design thinking to redesign the UC mobile app with Dr. Nora Honken — from empathy surveys to a working prototype presented at the Undergraduate Scholarly Showcase.',
    content: [
      'As a College of Engineering and Applied Science student, I strongly believe that cultivating an engineering mindset is crucial for success in the field. This mindset encompasses critical thinking, problem-solving skills, and the ability to develop innovative solutions. The Foundation of Engineering Design Thinking experience offered me a valuable opportunity to apply my engineering skills in a research setting. Working alongside Dr. Nora Honken and a motivated team, our primary goal was to enhance the UC mobile application using engineering design thinking processes. We followed five key steps: Empathize, Define, Ideate, Prototype, and Test.',
      'During the empathize phase, we surveyed UC students to understand their challenges and identify areas for improvement. This feedback guided our definition of the problem, including issues like a slow interface, limited features, and inconvenient buttons. Through ideation and collaborative design, we created a wireframe prototype that addressed these problems and showcased the reimagined UC mobile app.',
      'This research opportunity allowed us to demonstrate effective application development using engineering principles, highlighting the importance of an engineering mindset. The project personally had a great impact on me as I learned the application of engineering principles in research and app development. I was able to achieve an engineering mindset and apply design thinking principles effectively.',
      'Our team participated in the Undergraduate Scholarly Showcase where we demonstrated a video presentation highlighting the engineering process that was employed to develop the application, and what could be learned from this research opportunity.',
    ],
    videoUrl: 'https://www.youtube.com/watch?v=__hmRZitjAk',
    tags: ['Design Thinking', 'Research', 'UX', 'UC Mobile App'],
  },
  {
    slug: 'ramp',
    title: 'Biomedical Research and Mentorship Program (RaMP)',
    category: 'experience',
    year: '2023',
    date: 'Spring 2023',
    summary:
      'Working with the ICDCU bioinformatics lab on HIRConnect — a research project management system for Cincinnati Children\'s Hospital. Co-authored a paper and won "Excellence in Research Communication" at the USS.',
    content: [
      'Being a computer science student, biomedical research is not something that I really expected to get involved in. However, the motivation to explore new ventures and procure knowledge pushed me to apply for this program. I had the wonderful opportunity to work with the ICDCU bioinformatics lab during the mentorship program where I got worked on a research project management system developed for the Cincinnati Children\'s Hospital.',
      'My time in the lab proved to be enlightening and fruitful. Commencing with a comprehensive introduction to basic research practices, I was immersed in a world of scientific literature and research papers. Engaging in tasks such as reviewing papers and delivering presentations on various research topics, I gradually honed my understanding of the research process itself. These foundational training exercises not only equipped me with invaluable knowledge but also served as a gateway into the world of research.',
      'After my brief training period, I worked with the research team and collaborated with the tech team to develop a research project management system for a pediatric health institute using a user-centered design and agile software development principles. The research project management system for the academic hospital would help manage the vast number of clinical research that takes place. Since such research projects have various financial and time constraints, the project management system aims to help the research project by allocating the limited resources effectively and ensuring the completion of the project.',
      'To build such an application, the research and development team worked closely with the health institutions in developing a system that supported the workflow of the institution and had minimal usability issues. By working with the HIRC staff, we developed prototypes of the application and conducted several one-on-one usability testing sessions to ensure that the application was easily accessible and usable. I worked on fixing the usability issues faced by the users and improving the accessibility and user interface of the portal.',
      'While involved in the development work, I was also involved in usability testing research for the same project, and demonstrating the best method to develop such complex applications by using agile software development principles and user-centered design. I worked on co-authoring a research paper and a podium presentation which was submitted to AMIA 2023 conference. Furthermore, I made a poster and presented the poster at the Undergraduate Scholarly Showcase for which I was awarded "Excellence in Research Communication".',
      'My experience at the USS 2023 exposed me to fellow research students and their work. This inspired me to continue working on such a research project.',
    ],
    images: [
      {
        src: '/honors/ramp-poster-presentation.jpg',
        alt: 'Aniruddhan presenting research poster at the Undergraduate Scholarly Showcase',
        caption: 'Presenting at the Undergraduate Scholarly Showcase 2023',
      },
      {
        src: '/honors/ramp-excellence-award.jpg',
        alt: 'Excellence in Research Communication award from UC',
        caption: 'Excellence in Research Communication — April 2023',
      },
      {
        src: '/honors/ramp-research-poster.jpg',
        alt: 'Research poster: User-centered Design and Evaluation of a Research Project Management System',
        caption: 'Research poster presented at USS 2023',
      },
    ],
    tags: ['Biomedical Informatics', 'HIRConnect', 'User-Centered Design', 'AMIA'],
  },
  {
    slug: 'ramp-continuation',
    title: 'RaMP Continuation',
    subtitle: 'Biomedical Research and Mentorship Program',
    category: 'experience',
    year: '2023',
    date: 'Summer 2023',
    summary:
      'Continuing as a full-stack developer on HIRConnect under Dr. Danny Wu — taking ownership of front-end and back-end development, co-authoring a research paper, and learning hard lessons about production testing.',
    content: [
      'After completing a highly successful spring semester with the RaMP program, I eagerly accepted the opportunity to continue my journey at the ICDCU bio-informatics lab under the guidance of my supervisor, Dr. Danny Wu. My experience in the spring of 2023 had introduced me to the fascinating world of Biomedical Informatics, where my passion for technology converged with my interest in healthcare.',
      'In the summer of 2023, as part of the RaMP Continuation program, I continued my role as a developer and student researcher. My primary focus was on the research project management system, HIRConnect, which plays a pivotal role in helping health professionals at Cincinnati Children\'s Hospital (CCHMC) manage their research projects.',
      'During the initial phase of my RaMP continuation, I delved into the intricacies of the databases integral to our research project management system. Working closely with the research team, I co-authored a research paper centered on user-centered design and best practices for applications intended for a broader audience. Over time, my responsibilities expanded to include addressing usability issues and bugs. I received invaluable mentorship from Dr. Danny Wu and my team leader, Shubhra Gupta, who guided me on software development principles and the importance of creating user-friendly, readable code. I eagerly applied these insights to resolve issues and enhance the system.',
      'As my team leader temporarily stepped away, I took on the role of a full-stack developer, overseeing both the front-end (user interface) and back-end (database management and data processing) aspects of HIRConnect. This phase involved intensive development work, resulting in the creation of several pages used for usability testing sessions. Collaborating closely with our talented design team, we identified and addressed usability issues, resolved bugs, and expanded the system\'s functionality to seamlessly align with the HIRC workflow. Regular meetings with professionals from Cincinnati Children\'s Hospital provided me with a deep appreciation for the effort required to develop applications that cater to users with minimal technical expertise.',
      'Throughout this development process, I witnessed significant improvements in my programming skills, leading to increased efficiency and productivity. Tasks that once consumed days now took mere hours to complete. This experience reinforced the notion that software\'s complexity should not overshadow its usability for a diverse audience.',
      'One particularly enlightening episode occurred when I introduced changes that inadvertently disrupted a usability testing session with healthcare professionals from CCHMC. This incident underscored the importance of thorough testing before implementation, a lesson I now apply diligently to all my work, whether software-related or academic.',
      'As the semester concluded, I couldn\'t help but reflect on the transformative impact of my RaMP continuation. Beyond enhancing my computer science skills, it instilled qualities such as punctuality, dedication, and enhanced confidence. I eagerly anticipate the opportunity to further contribute to the lab\'s work as a student worker and look forward to the continued growth and learning experiences that lie ahead.',
    ],
    images: [
      {
        src: '/honors/ramp-research-paper.jpg',
        alt: 'Research paper: User-centered Design and Evaluation of a Research Project Management System',
        caption: 'Co-authored research paper on user-centered design for healthcare applications',
      },
    ],
    tags: ['Full-Stack Development', 'HIRConnect', 'Research Paper', 'CCHMC'],
  },
  {
    slug: 'venture-lab',
    title: 'Venture Lab',
    subtitle: 'UC Center of Entrepreneurship',
    category: 'experience',
    year: '2024',
    date: 'Fall 2023 – Spring 2024',
    summary:
      'Selected for the 24th Cohort of the Venture Lab pre-accelerator. Refined PhizzIO\'s business model through customer discovery, mentorship from healthcare EIRs, and pitched to the Cincinnati startup ecosystem.',
    content: [
      'The startup ecosystem, with its fusion of innovation and business, captivates me deeply. My journey into entrepreneurship unfolded through the co-founding of PhizzIO, a startup addressing the challenges of accessibility and adherence in physiotherapy treatment. Witnessing a friend\'s struggle with physiotherapy adherence sparked the idea for PhizzIO, as I discovered the widespread issue faced by many. This realization fueled my determination to create a solution.',
      'Participating in the Venture Lab, a pre-accelerator program by the UC Center of Entrepreneurship, and the 1819 Innovation Hub, became a pivotal chapter in my entrepreneurial journey. Selected for the 24th Cohort, I delved into a structured program providing invaluable resources and mentorship, especially tailored for early-stage startups. Interacting with Entrepreneurs in Residence (EIRs) specializing in healthcare offered insights into the intricacies of the health tech market. Through various program exercises, my co-founder and I refined our understanding of the target market, value proposition, and revenue model, aligning PhizzIO with the expectations of a startup.',
      'The program\'s culmination in the pitch week marked a significant milestone. Leveraging the guidance received, I fine-tuned PhizzIO\'s pitch deck and presented it to a diverse audience from the Cincinnati startup ecosystem. The positive reception opened doors for potential collaborations and networking opportunities with fellow entrepreneurs.',
      'Venture Lab extended beyond professional development, profoundly impacting me personally. It became a crucible for learning how to navigate criticism and feedback effectively. Initially surrounded by supportive voices, I recognized the importance of seeking unbiased feedback from relevant sources. Learning to embrace constructive criticism and translate it into growth rather than offense became a critical skill. Founders, fueled by passion, often find it challenging to pivot based on negative feedback. Through this experience, I understood the urgency of recognizing the need for change and the transformative power it holds for our startup.',
      'In essence, Venture Lab has been a transformative learning experience, equipping me with practical skills and insights crucial for entrepreneurial success. It has not only refined PhizzIO\'s trajectory but has shaped my mindset, fostering resilience and adaptability in the face of challenges — a testament to the dynamic and ever-evolving nature of the startup world.',
    ],
    images: [
      {
        src: '/honors/venture-lab-pitch.jpg',
        alt: 'Aniruddhan pitching PhizzIO at Venture Lab Demo Day',
        caption: 'Pitching PhizzIO at the Venture Lab Demo Day — the culmination of 8 weeks of refining our business model and pitch deck',
      },
    ],
    tags: ['Entrepreneurship', 'PhizzIO', 'Customer Discovery', '1819 Innovation Hub'],
  },
  {
    slug: 'trip-to-san-francisco',
    title: 'Trip to San Francisco',
    subtitle: 'Center of Entrepreneurship & CEAS',
    category: 'experience',
    year: '2024',
    date: 'Spring 2024',
    summary:
      'A life-changing trip to Silicon Valley — visiting Apple, Google, IDEO, Y Combinator, and attending Notion\'s AI feature launch. A reminder that no goal is beyond reach.',
    content: [
      'In the heart of innovation, I embarked on a life-changing journey to San Francisco, an opportunity extended by the Center of Entrepreneurship and the College of Engineering and Applied Sciences. As the co-founder of a startup dedicated to improving access and adherence to physiotherapy treatment, this trip was more than an exploration of the city; it was a golden opportunity to connect with like-minded peers and draw inspiration from the tech founders shaping Silicon Valley.',
      'The visit to iconic locations like the Apple garage, Apple headquarters, and Google SFO office held particular significance for me as a computer science student. Standing in these legendary spaces, witnessing the birthplace of technological giants, was nothing short of extraordinary. The tour extended to IDEO, where engineers walked us through the design process behind globally influential products, reinforcing the impact of innovation on humanity.',
      'Exploring startup landmarks, including Y Combinator and Sequoia Capital, inspired me as an entrepreneur, urging me to push my limits and aspire to collaborate with such startup resource giants. Immersing myself in the diverse cultures of Chinatown, Japan Town, Korea Town, and Little Italy added a rich cultural layer to the experience, offering culinary delights and expanding my worldview.',
      'The pinnacle of the trip was the invitation from Notion, a productivity software company, to their headquarters for the launch of their AI features during an AI meetup. The fireside talk with the co-founders of Chroma DB, a widely used database software, left me awestruck, as I had utilized their services in my AI projects. Networking with AI engineers and tech founders engaged in groundbreaking projects further fueled my passion for the field.',
      'This experience served as a profound personal and professional learning opportunity. Growing up with financial limitations, my fascination with technology often seemed constrained. However, standing at the Apple visitors center, gazing at the iconic Apple ring, I realized that my journey in startups had brought me farther than I had imagined. It became evident that living and working in Silicon Valley, once deemed beyond my reach, was indeed achievable through passion and perseverance.',
      'In conclusion, this journey through San Francisco has left an indelible mark on my learning portfolio, underscoring the transformative power of passion, dedication, and the courage to overcome limitations. It has instilled in me the belief that no goal is beyond reach, and with hard work, dedication, and an unwavering commitment to pushing boundaries, one can not only achieve but exceed their aspirations.',
    ],
    tags: ['Silicon Valley', 'Apple', 'Google', 'Notion', 'IDEO'],
  },
]

export function getEntryBySlug(slug: string): HonorsEntry | undefined {
  return honorsEntries.find((e) => e.slug === slug)
}

export const yearInReviews = honorsEntries.filter((e) => e.category === 'year-in-review')
export const experiences = honorsEntries.filter((e) => e.category === 'experience')
