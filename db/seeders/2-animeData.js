"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert(
      "Animes",
      [
        {
          title: "The Promised Neverland",
          description:
            "Emma, Norman and Ray are the brightest kids at the Grace Field House orphanage. And under the care of the woman they refer to as “Mom,” all the kids have enjoyed a comfortable life. Good food, clean clothes and the perfect environment to learn—what more could an orphan ask for? One day, though, Emma and Norman uncover the dark truth of the outside world they are forbidden from seeing.",
          image_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx101759-NhSwxv7HY9y9.jpg",
          poster_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/banner/101759-MhlCoeqnODso.jpg",
          studio: "CloverWorks",
          episodes: 12,
          status: "Finished",
          aired: "Jan 10, 2019",
          rating: "85%",
          top: true,
          winter: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Another",
          description:
            "When Kouichi Sakakibara transfers to a new school, he senses a frightening atmosphere in his new class, a secret none of them will talk about. At the center is the beautiful Mei Misaki. Kouichi is immediately drawn to her mysterious aura, but he begins to realize that no one else in the class is aware of her presence. Soon after his arrival, what is known as the Calamity begins, and it claims the lives of many students.",
          image_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx11111-Y4QgkX8gJQCa.png",
          poster_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/banner/11111.jpg",
          studio: "P.A. Works",
          episodes: 12,
          status: "Finished",
          aired: "Jan 10, 2012",
          rating: "71%",
          top: false,
          winter: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "BEASTARS",
          description:
            "In a world populated by anthropomorphic animals, herbivores and carnivores coexist with each other. For the adolescents of Cherryton Academy, school life is filled with hope, romance, distrust, and uneasiness. The main character is Legoshi the wolf, a member of the drama club. Despite his menacing appearance, he has a very gentle heart. Throughout most of his life, he has always been an object of fear and hatred by other animals, and he’s been quite accustomed to that lifestyle. But soon, he finds himself becoming more involved with his fellow classmates who have their own share of insecurities and finds his life in school changing slowly.",
          image_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx107660-nANW2Fco3aDK.png",
          poster_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/banner/107660-AxwrzHkXzYYN.jpg",
          studio: "Orange",
          episodes: 12,
          status: "Finished",
          aired: "Oct 10, 2019",
          rating: "78%",
          top: false,
          winter: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Boogiepop and Others",
          description:
            "There is an urban legend that children tell one another about a shinigami that can release people from the pain they may be suffering. This 'Angel of Death' has a name—Boogiepop. And the legends are true. Boogiepop is real.",
          image_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/nx101283-YpZqD7wrzWui.jpg",
          poster_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/banner/101283-zElfCjrvqqQY.jpg",
          studio: "MADHOUSE",
          episodes: 18,
          status: "Finished",
          aired: "Jan 4, 2019",
          rating: "67%",
          top: false,
          winter: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Tokyo Ghoul √A",
          description:
            "The second season of Tokyo Ghoul. The ghouls of Anteiku invaded the Aogiri's site in order to rescue Ken Kaneki who is being tortured. Due to provocation, he unleashed greater power enough to defeat Yamori. To become stronger, he decided to join Aogiri and left Anteiku. Ghoul investigators also making their moves by collecting information about the eye-patched ghoul - Ken Kaneki.",
          image_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx20850-HO9hwgvavYtw.jpg",
          poster_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/banner/20850-YjtRXQkNl0xz.jpg",
          studio: "Studio Pierrot",
          episodes: 12,
          status: "Finished",
          aired: "Jan 9, 2015",
          rating: "67%",
          top: false,
          winter: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "ACCA: 13-Territory Inspection Dept.",
          description:
            "'ACCA' is a giant unified syndicate residing in a kingdom split into 13 autonomous regions. ACCA was formed back when there was threat of a coup d'etat, and it has continued to protect the peace of civilians for almost one hundred years. Jean Otus, the vice-chairman of the inspections department at ACCA headquarters, is one of the most cunning men in the syndicate's history with the nickname 'Jean the Cigarette Peddler.' Whimsically puffing his cigarettes, he wanders through the 13 districts, checking to see if there is any foul play afoot.",
          image_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx21823-0XTjZ0Rtm7va.jpg",
          poster_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/banner/21823-ZTH4ucO2AHMQ.png",
          studio: "MADHOUSE",
          episodes: 12,
          status: "Finished",
          aired: "Jan 10, 2017",
          rating: "75%",
          top: false,
          winter: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Made in Abyss",
          description:
            "The 'Abyss' is the last unexplored place in the world. Strange and wonderful creatures roam within, and it is full of precious relics that present humans can't recreate. Those that dare to explore the depths are known as 'Cave Raiders.' An orphan girl named Riko lives on the rim. Her dream is to become a Cave Raider like her mother and solve the mysteries of the cave system. One day, Riko starts exploring the caves and discovers a robot who resembles a human boy.",
          image_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx97986-fzJBML9qecb4.jpg",
          poster_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/banner/97986-mXXqF2jR0ywU.jpg",
          studio: "Kinema Citrus",
          episodes: 13,
          status: "Finished",
          aired: "Jul 7, 2017",
          rating: "85%",
          top: false,
          winter: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Durarara!!",
          description:
            "In Tokyo's downtown district of Ikebukuro, amidst many strange rumors and warnings of anonymous gangs and dangerous occupants, one urban legend stands out above the rest—the existence of a headless 'Black Rider' who is said to be seen driving a jet-black motorcycle through the city streets. Ryuugamine Mikado has always longed for the excitement of the city life, and an invitation from a childhood friend convinces him to move to Tokyo. Witnessing the Black Rider on his first day in the city, his wishes already seem to have been granted. But as supernatural events begin to occur, ordinary citizens like himself, along with Ikebukuro's most colorful inhabitants, are mixed up in the commotion breaking out in their city.",
          image_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx6746-Q4EmstN2fy0R.png",
          poster_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/banner/6746-84oNA7P9pboV.jpg",
          studio: "Brain's Base",
          episodes: 24,
          status: "Finished",
          aired: "Jan 8, 2010",
          rating: "79%",
          top: false,
          winter: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "MONSTER",
          description:
            "Dr. Kenzo Tenma is a renowned Japanese brain surgeon working at a leading hospital in Germany. One night, Dr. Tenma risks his reputation and career to save the life of a critically wounded young boy over that of the town mayor who had been planning to support the hospital financially. A string of mysterious murders begin to occur soon after the operation, and Dr. Tenma emerges as the primary suspect despite no incriminating evidence. A doctor is taught to believe that all life is equal; however, when another series of murders occur in the surgeon's vicinity, Dr. Tenma's beliefs are shaken as his actions that night are shown to have much broader consequences than he could have imagined. Leaving behind his life as a surgeon he embarks on a journey across the country to unravel the mystery of the boy he saved.",
          image_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/nx19-95nNPzaSr2V5.jpg",
          poster_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/banner/19-kJhwsB0Z97tL.jpg",
          studio: "MADHOUSE",
          episodes: 74,
          status: "Finished",
          aired: "Apr 7, 2004",
          rating: "87%",
          top: false,
          winter: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Hyouka",
          description:
            "Energy-conservative high school student Houtarou Oreki ends up with more than he bargained for when he signs up for the Classic Literature Club at his sister's behest—especially when he realizes how deep-rooted the club's history really is. Begrudgingly, Oreki is dragged into an investigation concerning the 45-year-old mystery that surrounds the club room. Accompanied by his fellow club members, the knowledgeable Satoshi Fukube, the stern but benign Mayaka Ibara, and the ever-curious Eru Chitanda, Oreki must combat deadlines and lack of information with resourcefulness and hidden talent, in order to not only find the truth buried beneath the dust of works created years before them, but of other side cases as well. Based on the award-winning Koten-bu light novel series, and directed by Yasuhiro Takemoto of Suzumiya Haruhi no Shoushitsu, Hyouka shows that normal life can be full of small mysteries, be it family history, a student film, or even the withered flowers that make up a ghost story.",
          image_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx12189-lMhv0yetGUc5.jpg",
          poster_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/banner/12189-TG0peUcKFqur.jpg",
          studio: "Kyoto Animation",
          episodes: 22,
          status: "Finished",
          aired: "Apr 23, 2012",
          rating: "79%",
          top: false,
          winter: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          title: "The Vision of Escaflowne",
          description:
            "Hitomi Kanzaki is just an ordinary 15-year-old schoolgirl with an interest in tarot cards and fortune telling, but one night, a boy named Van Fanel suddenly appears from the sky along with a vicious dragon. Thanks to a premonition from Hitomi, Van successfully kills the dragon, but a pillar of light appears and envelopes them both. As a result, Hitomi finds herself transported to the world of Gaea, a mysterious land where the Earth hangs in the sky. In this new land, Hitomi soon discovers that Van is a prince of the Kingdom of Fanelia, which soon falls under attack by the evil empire of Zaibach. In an attempt to fight them off, Van boards his family's ancient guymelef Escaflowne—a mechanized battle suit—but fails to defeat them, and Fanelia ends up destroyed. Now on the run, Hitomi and Van encounter a handsome Asturian knight named Allen Schezar, whom Hitomi is shocked to find looks exactly like her crush from Earth. With some new allies on their side, Van and Hitomi fight back against the forces of Zaibach as the empire strives to revive an ancient power.",
          image_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx182-YzZtZWMZCSFf.png",
          poster_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/banner/182-jYvvtYE14yi4.jpg",
          studio: "Sunrise",
          episodes: 26,
          status: "Finished",
          aired: "Apr 2, 1996",
          rating: "72%",
          top: false,
          winter: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Gundam Build Fighters",
          description:
            "The story is set in the near future when GunPla Battles, competitions that pit Gundam plastic models against each other, have become popular worldwide in the 'Second GunPla Boom.' Sei Iori, a first-year middle-school student and the only son of a model shop owner, is talented at building GunPla, but inexperienced in the GunPla Battles. He encounters a mysterious boy named Reiji, who happens to be an accomplished Gundam Fighter. Together, they strive for the GunPla Battle world championships.",
          image_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx19319-0YuU672PSgix.jpg",
          poster_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/banner/19319-BXhc7pDTUWvi.jpg",
          studio: "Sunrise",
          episodes: 25,
          status: "Finished",
          aired: "Oct 7, 2013",
          rating: "75%",
          top: false,
          winter: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Mobile Suit Gundam Wing",
          description:
            "It is the year After Colony 195, and war between the Space Colonies and Earth has begun. To give the colonies an edge, they send 5 young soldiers, trained to perfection, to earth in the most powerful of Mobile Suits-Gundams. With their arrival, the tide of the war changes as they battle against the Earth forces and the Colonies of their origin.",
          image_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/b90-umBjF3yaeIdo.png",
          poster_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/banner/90-hhE4GDd5rx1G.jpg",
          studio: "Sunrise",
          episodes: 49,
          status: "Finished",
          aired: "Apr 7, 1995",
          rating: "91%",
          top: true,
          winter: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Mobile Suit Gundam Hathaway",
          description: `The year is U.C. 0105. Twelve years have passed since the end of the second Neo Zeon War (Char’s Rebellion). Even after “the Axis Shock,” which seemed to indicate the future of humanity and the Universal Century, the world is still in a chaotic situation where intermittent military conflicts continue to break out. The Earth Federation government is more corrupt than ever, and its leadership has not only accelerated Earth's pollution, but also implemented an inhuman "Man Hunting" policy in which civilians are forcibly exiled to outer space.`,
          image_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx105595-HRhmAGp4WPbV.jpg",
          poster_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/banner/105595-BGReO3kFGaoB.jpg",
          studio: "Sunrise",
          episodes: 1,
          status: "Finished",
          aired: "Jun 11, 2021",
          rating: "78%",
          top: false,
          winter: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Gundam vs Hello Kitty",
          description: `A collaboration to celebrate the 40th anniversary of Gundam and the 45th anniversary of Hello Kitty.`,
          image_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx110419-cXl0m924Yrz1.jpg",
          poster_url:
            "https://geekculture.co/wp-content/uploads/2019/04/gundam-vs-kitty.jpg",
          studio: "Sanrio",
          episodes: 3,
          status: "Finished",
          aired: "Mar 29, 2019",
          rating: "64%",
          top: false,
          winter: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Mobile Suit Gundam",
          description: `What would you do if you suddenly found yourself in the middle of a war? Teenager Amuro Ray sees his life shattered when war comes to his home. During the chaos, Amuro finds himself inside the mobile suit Gundam, the Earth Federation's new secret weapon, and he somehow gets it to work. Amuro and the other refugees flee their homeland on the warship White Base. This group of children and inexperienced soldiers will change the outcome of the war.`,
          image_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/nx80-HKQTjSNuFlHu.jpg",
          poster_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/banner/80-LcQhJ600WeDn.jpg",
          studio: "Sunrise",
          episodes: 25,
          status: "Finished",
          aired: "Apr 7, 1979",
          rating: "78%",
          top: false,
          winter: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Zoids",
          description: `Zoids are beast-like fighting machines used in both everyday use such as transportation, and special use such as war. Some types of Zoids, know as Organoids, are miniature Zoids that are living organisms. These Organoids have the capability to fuse with a non-living Zoid and make it much more powerful. Van (Ban) Freiheit discovers a Zoid Organoid in an abandoned laboratory while running from two strangers piloting Zoids. Also in the laboratory, in an animated suspension tube is a strange girl. He breaks the tube open and takes her and the Organoid with him. Spotting a ruined Shield Liger Zoid outside nearby, the Organoid fuses with it and repairs the damages. Making his escape, Van names the Organoid Zeke, and decides to keep him as a friend. The girl, who says her name is Fiona, wants to find something called Zoids Eve, and so Van, Zeke, and Fiona begin their adventure.`,
          image_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/b763-1T59JdI5ohJd.jpg",
          poster_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/banner/n763-kDX6Sqr6GaBu.jpg",
          studio: "Xebec",
          episodes: 67,
          status: "Finished",
          aired: "Sep 4, 1999",
          rating: "69%",
          top: false,
          winter: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Neon Genesis Evangelion",
          description: `In the year 2015, the Angels, huge, tremendously powerful, alien war machines, appear in Tokyo for the second time. The only hope for Mankind's survival lies in the Evangelion, a humanoid fighting machine developed by NERV, a special United Nations agency. Capable of withstanding anything the Angels can dish out, the Evangelion's one drawback lies in the limited number of people able to pilot them. Only a handful of teenagers, all born fourteen years ago, nine months after the Angels first appeared, are able to interface with the Evangelion. One such teenager is Shinji Ikari, whose father heads the NERV team that developed and maintains the Evangelion. Thrust into a maelstrom of battle and events that he does not understand, Shinji is forced to plumb the depths of his own inner resources for the courage and strength to not only fight, but to survive, or risk losing everything.`,
          image_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx30-1Ro1NFFg28bu.jpg",
          poster_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/banner/30-gEMoHHIqxDgN.jpg",
          studio: "Gainax",
          episodes: 25,
          status: "Finished",
          aired: "Oct 3, 1995",
          rating: "83%",
          top: false,
          winter: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "VOLTES V",
          description: `From out of nowhere, a mysterious alien race known as the Boazan Forces has invaded the Earth. A group of individuals specially trained to handle this kind of situation has been unleashed. Kenichi, Ippei, Daijirou, Hiyoshi & Megumi are the pilots of the Choudenji Machine Voltes V (5), Earth's defense against the Boazan and their terrible Beast Warriors. The plot thickens as the Go Brothers discover their true heritage and the truth behind their father's disappearance. Conflicts and mixed emotions hinder the Go Brothers at times but due to their unwavering desire to find their dad, they must go to the place where it all started. With the help of the rebels based on Earth and on the aliens' homeworld, the Voltes Team has another mission, remove the tyrant Zu Zanbajil and liberate the people of Boazan.`,
          image_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx1069-bNxKpwG1m9JQ.jpg",
          poster_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/banner/n1069-180gKfFlsS6C.jpg",
          studio: "Sunrise",
          episodes: 40,
          status: "Finished",
          aired: "Jun 4, 1977",
          rating: "67%",
          top: false,
          winter: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "DARLING in the FRANXX",
          description: `The distant future: Humanity established the mobile fort city, Plantation, upon the ruined wasteland. Within the city were pilot quarters, Mistilteinn, otherwise known as the “Birdcage.” That is where the children live... Their only mission in life was the fight. Their enemies are the mysterious giant organisms known as Kyoryu. The children operate robots known as FRANXX in order to face these still unseen enemies. Among them was a boy who was once called a child prodigy: Code number 016, Hiro. One day, a mysterious girl called Zero Two appears in front of Hiro. “I’ve found you, my Darling.”`,
          image_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/nx99423-8MBxtwCeHf8B.png",
          poster_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/banner/99423-QuaAVbwhUWUS.png",
          studio: "Trigger",
          episodes: 24,
          status: "Finished",
          aired: "Jan 13, 2018",
          rating: "70%",
          top: false,
          winter: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "My Hero Academia",
          description:
            "What would the world be like if 80 percent of the population manifested extraordinary superpowers called 'Quirks' at age four? Heroes and villains would be battling it out everywhere! Becoming a hero would mean learning to use your power, but where would you go to study? U.A. High's Hero Program of course! But what would you do if you were one of the 20 percent who were born Quirkless?",
          image_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/nx21459-oZMZ7JwS5Sxq.jpg",
          poster_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/banner/21459-yeVkolGKdGUV.jpg",
          studio: "bones",
          episodes: 13,
          status: "Finished",
          aired: "Apr 3, 2016",
          rating: "79%",
          top: true,
          winter: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Naruto",
          description:
            "Naruto Uzumaki, a hyperactive and knuckle-headed ninja, lives in Konohagakure, the Hidden Leaf village. Moments prior to his birth, a huge demon known as the Kyuubi, the Nine-tailed Fox, attacked Konohagakure and wreaked havoc. In order to put an end to the Kyuubi's rampage, the leader of the village, the 4th Hokage, sacrificed his life and sealed the monstrous beast inside the newborn Naruto.",
          image_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx20-E3YH5W6sz6H7.jpg",
          poster_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/banner/20-HHxhPj5JD13a.jpg",
          studio: "Studio Pierrot",
          episodes: 220,
          status: "Finished",
          aired: "Oct 3, 2002",
          rating: "80%",
          top: true,
          winter: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Naruto: Shippuuden",
          description:
            "Naruto: Shippuuden is the continuation of the original animated TV series Naruto. The story revolves around an older and slightly more matured Uzumaki Naruto and his quest to save his friend Uchiha Sasuke from the grips of the snake-like Shinobi, Orochimaru. After 2 and a half years Naruto finally returns to his village of Konoha, and sets about putting his ambitions to work, though it will not be easy, as he has amassed a few (more dangerous) enemies, in the likes of the shinobi organization; Akatsuki.",
          image_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx1735-80JNLAlnxrKj.png",
          poster_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/banner/1735.jpg",
          studio: "Studio Pierrot",
          episodes: 500,
          status: "Finished",
          aired: "Feb 15, 2007",
          rating: "82%",
          top: true,
          winter: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Boruto: Naruto Next Generations",
          description:
            "Naruto was a young shinobi with an incorrigible knack for mischief. He achieved his dream to become the greatest ninja in the village and his face sits atop the Hokage monument. But this is not his story... A new generation of ninja are ready to take the stage, led by Naruto's own son, Boruto!",
          image_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx97938-BnF6M5yTaNB1.jpg",
          poster_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/banner/97938-cT6wkSRifTEC.jpg",
          studio: "Studio Pierrot",
          episodes: 216,
          status: "Releasing",
          aired: "Apr 5, 2017",
          rating: "59%",
          top: false,
          winter: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Bleach",
          description:
            "Ichigo Kurosaki is a rather normal high school student apart from the fact he has the ability to see ghosts. This ability never impacted his life in a major way until the day he encounters the Shinigami Kuchiki Rukia, who saves him and his family's lives from a Hollow, a corrupt spirit that devours human souls.",
          image_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx269-KxkqTIuQgJ6v.png",
          poster_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/banner/269.jpg",
          studio: "Studio Pierrot",
          episodes: 366,
          status: "Finished",
          aired: "Oct 5, 2004",
          rating: "75%",
          top: true,
          winter: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Demon Slayer: Kimetsu no Yaiba",
          description:
            "It is the Taisho Period in Japan. Tanjiro, a kindhearted boy who sells charcoal for a living, finds his family slaughtered by a demon. To make matters worse, his younger sister Nezuko, the sole survivor, has been transformed into a demon herself. Though devastated by this grim reality, Tanjiro resolves to become a “demon slayer” so that he can turn his sister back into a human, and kill the demon that massacred his family.",
          image_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx101922-PEn1CTc93blC.jpg",
          poster_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/banner/101922-YfZhKBUDDS6L.jpg",
          studio: "ufotable",
          episodes: 26,
          status: "Finished",
          aired: "Apr 6, 2019",
          rating: "85%",
          top: true,
          winter: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Hunter x Hunter(2011)",
          description:
            "A Hunter is one who travels the world doing all sorts of dangerous tasks. From capturing criminals to searching deep within uncharted lands for any lost treasures. Gon is a young boy whose father disappeared long ago, being a Hunter. He believes if he could also follow his father's path, he could one day reunite with him.",
          image_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx11061-sIpBprNRfzCe.png",
          poster_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/banner/11061-8WkkTZ6duKpq.jpg",
          studio: "MADHOUSE",
          episodes: 148,
          status: "Finished",
          aired: "Oct 2, 2011",
          rating: "90%",
          top: true,
          winter: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Jujutsu Kaisen",
          description:
            "Itadori Yuji is a boy with tremendous physical strength, though he lives a completely ordinary high school life. One day, to save a friend who has been attacked by Curses, he eats the finger of the Double-Faced Specter, taking the Curse into his own soul. From then on, he shares one body with the Double-Faced Specter. Guided by the most powerful of sorcerers, Gojou Satoru, Itadori is admitted to the Tokyo Metropolitan Technical High School of Sorcery, an organization that fights the Curses... and thus begins the heroic tale of a boy who became a Curse to exorcise a Curse, a life from which he could never turn back.",
          image_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx113415-979nF8TZP2xC.jpg",
          poster_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/banner/113415-jQBSkxWAAk83.jpg",
          studio: "MAPPA",
          episodes: 24,
          status: "Finished",
          aired: "Oct 3, 2020",
          rating: "88%",
          top: true,
          winter: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "One Piece",
          description:
            "Gold Roger was known as the Pirate King, the strongest and most infamous being to have sailed the Grand Line. The capture and death of Roger by the World Government brought a change throughout the world. His last words before his death revealed the location of the greatest treasure in the world, One Piece. It was this revelation that brought about the Grand Age of Pirates, men who dreamed of finding One Piece (which promises an unlimited amount of riches and fame), and quite possibly the most coveted of titles for the person who found it, the title of the Pirate King.",
          image_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/nx21-tXMN3Y20PIL9.jpg",
          poster_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/banner/21-wf37VakJmZqs.jpg",
          studio: "Toei Animation",
          episodes: 993,
          status: "Releasing",
          aired: "Oct 20, 1999",
          rating: "86%",
          top: true,
          winter: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Dragon Ball Super",
          description:
            "After 18 years, we have the newest Dragon Ball story from creator Akira Toriyama. With Majin Buu defeated, Goku has taken a completely new role as...a radish farmer?! With Earth at peace, our heroes have settled into normal lives. But they can’t get too comfortable. Far away, the powerful God of Destruction, Beerus, awakens to a prophecy revealing his demise at the hands of an even more formidable being. When his search for the Saiyan God brings him to Earth, can Goku and his friends take on their strongest foe yet?",
          image_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx21175-EH06qlfF8TnB.jpg",
          poster_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/banner/21175-bXEDZ4sk6jTJ.png",
          studio: "Toei Animation",
          episodes: 131,
          status: "Finished",
          aired: "Jul 5, 2015",
          rating: "71%",
          top: true,
          winter: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Good Luck Girl!",
          description:
            "At the expense of the people and things around her, Sakura has absorbed so much 'happiness energy' that she has caused an energy imbalance in the world. In order to return balance to the world, the Poverty God, Momiji, sets out to take away Sakura's ability to absorb this energy. Will Momiji be able to put a stop to Sakura's absorbing abilities, or will the God succumb to her happiness?",
          image_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx13535-gf9MSAFgTDkj.png",
          poster_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/banner/13535-wNcONynXJe2o.jpg",
          studio: "Sunrise",
          episodes: 13,
          status: "Finished",
          aired: "Jul 5, 2012",
          rating: "74%",
          top: true,
          winter: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Gintama",
          description:
            "Life isn't easy in feudal Japan... especially since the aliens landed and conquered everything! Oh sure, the new health care is great, but the public ban on the use of swords has left a lot of defeated samurai with a difficult decision to make concerning their future career paths! This is especially true if, as in the case of Gintoki Sakata, they're not particularly inclined towards holding a day job, which is why Gintoki's opted for the freelance route, taking any job that's offered to him as long as the financial remuneration sounds right. Unfortunately, in a brave new world filled with stray bug-eyed monsters, upwardly mobile Yakuza and overly ambitious E.T. entrepreneurs, those jobs usually don't pay as well as they should for the pain, suffering and indignities endured!",
          image_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx918-lWneCW2xF7x6.png",
          poster_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/banner/918-bljqHE1PFArH.jpg",
          studio: "Sunrise",
          episodes: 201,
          status: "Finished",
          aired: "Apr 4, 2006",
          rating: "85%",
          top: true,
          winter: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "KONOSUBA -God's blessing on this wonderful world!",
          description:
            "Kazuma Satou decides that today is the day to get out of the house for a bit. Since he dies, pointlessly, it's clearly a bad choice. The goddess who greets him in the afterlife, however, offers him a chance to be reborn in a world not unlike that of a video game, and as a bonus she'll even throw in a cool item or power! Can't possibly be a bad choice, right? Except he arrives with no money at all, dead average skills, and his 'bonus' isn't useful at all--since he picked the goddess, Aqua, herself. How are the two of them supposed to defeat the evil Devil King and live happily ever after? Well, for them, it probably starts with day laboring rather than adventuring. And it's only going to get more disappointing from there!",
          image_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx21202-TfzXuWQf2oLQ.png",
          poster_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/banner/21202-UWijdV7RMnXo.jpg",
          studio: "Studio DEEN",
          episodes: 10,
          status: "Finished",
          aired: "Jan 14, 2016",
          rating: "80%",
          top: true,
          winter: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "The Disastrous Life of Saiki K.",
          description:
            "To the average person, psychic abilities might seem a blessing; for Kusuo Saiki, however, this couldn't be further from the truth. Gifted with a wide assortment of supernatural abilities ranging from telepathy to x-ray vision, he finds this so-called blessing to be nothing but a curse. As all the inconveniences his powers cause constantly pile up, all Kusuo aims for is an ordinary, hassle-free life—a life where ignorance is bliss.",
          image_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx21804-0upO8z4gYGDZ.png",
          poster_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/banner/21804-Ebkf1Kt32s4L.jpg",
          studio: "EGG FIRM",
          episodes: 120,
          status: "Finished",
          aired: "Jul 4, 2016",
          rating: "83%",
          top: true,
          winter: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Grand Blue",
          description:
            "A new life begins for Kitahara Iori as he begins his college career near the ocean in Izu city, full of excitement for his new life. He will be moving into his Uncle's diving store Grand Blue. There he finds the beautiful ocean, beautiful women, and men that love diving and alcohol. Will Iori be able to live his dream college life?",
          image_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx100922-ltoQa6rosUyP.png",
          poster_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/banner/100922-ef1bBJCUCfxk.jpg",
          studio: "Zero-G",
          episodes: 12,
          status: "Finished",
          aired: "Jul 14, 2018",
          rating: "82%",
          top: true,
          winter: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Haven't You Heard? I'm Sakamoto",
          description:
            "First year high school student Sakamoto isn't just cool, he's the coolest! Almost immediately after starting school, he began attracting everyone's attention. The girls love him, and most of the boys resent him. There's even a boy in the class who works as a model, but who is constantly upstaged by Sakamoto! No matter what tricks the other boys try to play on him, Sakamoto always manages to foil them with ease and grace. Though Sakamoto may seem cool and aloof, he helps others when asked, such as in the case of the boy in his class who was being constantly bullied. No matter what difficulties Sakamoto encounters, he moves through his high school life with confidence and class!",
          image_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx21595-vQ658r2Roe1g.jpg",
          poster_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/banner/21595-q5qX7BfnCanQ.jpg",
          studio: "Studio DEEN",
          episodes: 12,
          status: "Finished",
          aired: "Apr 8, 2016",
          rating: "73%",
          top: false,
          winter: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Barakamon",
          description:
            "As punishment, and also in order to aid him in self-reflection, Seishuu's father exiles him to the Goto Islands, far from the comfortable Tokyo lifestyle the temperamental artist is used to. Now thrown into a rural setting, Seishuu must attempt to find new inspiration and develop his own unique art style—that is, if boisterous children (headed by the frisky Naru Kotoishi), fujoshi middle schoolers, and energetic old men stop barging into his house! The newest addition to the intimate and quirky Goto community only wants to get some work done, but the islands are far from the peaceful countryside he signed up for. Thanks to his wacky neighbors who are entirely incapable of minding their own business, the arrogant calligrapher learns so much more than he ever hoped to.",
          image_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx20722-mQQHyu4HXpCE.png",
          poster_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/banner/20722-vjD7BMct1l1n.jpg",
          studio: "Kinema Citrus",
          episodes: 12,
          status: "Finished",
          aired: "Jul 6, 2014",
          rating: "82%",
          top: true,
          winter: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Isekai Quartet",
          description:
            "Isekai Quartet is a petit anime crossover project airing in Spring 2019. It will feature such works as Overlord, KonoSuba, Re:Zero, and Youjo Senki.",
          image_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/b104454-06TUBzEfpfYW.png",
          poster_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/banner/104454-saTOUkEAtcMC.jpg",
          studio: "Studio PuYUKAI",
          episodes: 12,
          status: "Finished",
          aired: "Apr 10, 2019",
          rating: "72%",
          top: false,
          winter: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Prison School",
          description:
            "Hachimitsu Private Academy was a revered and elite all-girls' boarding school on the outskirts of Tokyo...once upon a time. But with the new school year comes a revision to school policy: Boys are to be admitted into the student body for the first time ever. But on his first day at Hachimitsu, Kiyoshi Fujino discovers that he's one of only five boys enrolled at the school. Their numbers overwhelmed by the thousand girls in the student body, is it heaven or hell that awaits these five (un)fortunates?!.",
          image_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx20807-8nFoO0AUdGsy.jpg",
          poster_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/banner/20807-IHYC4Qby3dkT.jpg",
          studio: "J.C. Staff",
          episodes: 12,
          status: "Finished",
          aired: "Jul 11, 2015",
          rating: "74%",
          top: false,
          winter: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Detroit Metal City",
          description:
            "Led by phallus-waiving terrorist-from-hell Johannes Krauser II (guitar/vocals,) and given pulsing, throbbing life by indestructible drummer Camus and bassist Alexander Jagi, Detroit Metal City is the hottest ticket on the concert circuit! There's just one catch. That 'hottest ticket' is just a meal ticket, and beneath the makeup, these ultimate head-bangers are hired doppelgangers who don't even LIKE what they do! Jaggi is actually Wada, who wants to play glam rock; Camus is Nishida, an anime fan with an appalling weakness for curry and NSFW videos; and Krauser is... oh the shame... street-singing Soichi Negishi, whose dreams of singing happy pop hits seem hopelessly doomed by the success of his rage-fueled alter ego! Worse, he can't even tell anyone who Krauser is. Not even the girl he likes, who HATES DMC! Will rage against the corporate machine consume Negishi's tortured soul? Is there life after death metal? What it's like to put your head in a jet engine and turn up the volume?",
          image_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx3702-TCo0UYxWQzYj.jpg",
          poster_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/banner/3702-91zk0nfkGfYi.png",
          studio: "Studio 4°C",
          episodes: 12,
          status: "Finished",
          aired: "Aug 8, 2008",
          rating: "77%",
          top: false,
          winter: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "DEATH NOTE",
          description:
            "Light Yagami is a genius high school student who is about to learn about life through a book of death. When a bored shinigami, a God of Death, named Ryuk drops a black notepad called a Death Note, Light receives power over life and death with the stroke of a pen. Determined to use this dark gift for the best, Light sets out to rid the world of evil… namely, the people he believes to be evil. Should anyone hold such power?",
          image_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx1535-lawCwhzhi96X.jpg",
          poster_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/banner/1535.jpg",
          studio: "MADHOUSE",
          episodes: 37,
          status: "Finished",
          aired: "Oct 4, 2006",
          rating: "84%",
          top: true,
          winter: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Ghost in the Shell: Stand Alone Complex",
          description:
            "In the not so distant future, mankind has advanced to a state where complete body transplants from flesh to machine is possible. This allows for great increases in both physical and cybernetic prowess and blurring the lines between the two worlds. However, criminals can also make full use of such technology, leading to new and sometimes, very dangerous crimes. In response to such innovative new methods, the Japanese Government has established Section 9, an independently operating police unit which deals with such highly sensitive crimes.",
          image_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx467-mBTtIoR13qs2.jpg",
          poster_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/banner/467-n0kTT3ecHMrG.jpg",
          studio: "Production I.G",
          episodes: 26,
          status: "Finished",
          aired: "Oct 1, 2002",
          rating: "82%",
          top: true,
          winter: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Ergo Proxy",
          description:
            "Something is wrong in the perfect domed city of Romdo. Between the sudden rash of murders and a virus affecting all AutoReivs-cyborg companions and workers who assist the people of Romdo - all is not right in their dome home. Detective Re-l Meyer begins to investigate, seeking answers to the weird occurrences that are happening more and more around her. But when she begins to uncover the truth, her world is turned upside down.",
          image_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx790-YTUCvBKX8ZWK.jpg",
          poster_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/banner/790.jpg",
          studio: "Manglobe",
          episodes: 23,
          status: "Finished",
          aired: "Feb 5, 2006",
          rating: "76%",
          top: true,
          winter: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "The Tatami Galaxy",
          description:
            "When a college dropout stops for a late night bite at a mysterious ramen stand, he crosses paths with a self-proclaimed deity of matrimony. This bizarre meeting sends the young man hurtling through a horrifying flashback to his not-so-glorious college days when the influence of a cruel new friend turned him from a hopeless romantic into a mischievous “black cupid.”",
          image_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/nx7785-TMqYIFkWDCgy.jpg",
          poster_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/banner/7785.jpg",
          studio: "MADHOUSE",
          episodes: 11,
          status: "Finished",
          aired: "Apr 23, 2010",
          rating: "85%",
          top: true,
          winter: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Revolutionary Girl Utena",
          description:
            "Just after Utena's parents died she was consoled by a prince who gave her a ring with a rose crest on it. Utena was so impressed by the Prince that she vowed to become one herself one day. A few years later Utena is attending Ohtori Academy where she gives all the teachers headaches because she dresses in a boys uniform so she can be like the prince she met long ago.",
          image_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/nx440-7muMZaQ7r84M.jpg",
          poster_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/banner/440-0Gzds5AlVDN6.jpg",
          studio: "J.C. Staff",
          episodes: 39,
          status: "Finished",
          aired: "Apr 2, 1997",
          rating: "81%",
          top: true,
          winter: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Ping Pong THE ANIMATION",
          description:
            "Tsukimoto Makoto (nicknamed Smile) is a quiet high-schooler who's been friends with the loud and energetic Hoshino Yukata (nicknamed Peko). They're both in the table tennis club and are very good at it, though Smile's personality prevents him from winning against Peko. The club teacher however notices Smile's talent and tries to make him gain some sportive tenacity.",
          image_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx20607-gG1XChXDtzAB.jpg",
          poster_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/banner/20607-AYghLMjh7reA.jpg",
          studio: "Tatsunoko Production",
          episodes: 11,
          status: "Finished",
          aired: "Apr 11, 2014",
          rating: "85%",
          top: true,
          winter: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "One Outs",
          description:
            "The story begins when Hiromichi Kojima, the star batter of the fictional Lycaons in Japan's Pacific League, heads to the southern Japanese island of Okinawa to train and bring himself out of a slump. There, he meets Toua Tokuchi, a 134-kmph (83 miles per hour) pitcher and the undisputed king of a gambling form of baseball called 'One Out.' At Kojima's urging, Tokuchi signs up with the Lycaons under an unusual contract: he gets 5,000,000 yen (about US$46,000) for every out he pitches, but loses 50,000,000 yen (US$460,000) for every point he gives up.",
          image_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx5040-OpWkR6shhDv1.jpg",
          poster_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/banner/5040-Vpk8PmvE5o27.png",
          studio: "MADHOUSE",
          episodes: 25,
          status: "Finished",
          aired: "Oct 8, 2008",
          rating: "81%",
          top: true,
          winter: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Texhnolyze",
          description:
            "In a man-made underground society, descendants of a banished generation vie for control of the crumbling city of Lux. Ichise, an orphan turned prize fighter, loses a leg and an arm to satisfy an enraged fight promoter. On the brink of death he is taken in by a young woman doctor and used as a guinea pig for the next evolution of Texhnolyze. With his new limbs, Ichise is taken under the wing of Oonishi, a powerful leader of Organ, an organization with some hold on Lux. As Ichise is drawn deeper into a war for territorial control of the city, he learns of his possible future from the young girl prophet Ran, who guides him from the shadows in his darkest times. With the explosion of the warfare, Ichise must uncover the truth about Lux and fight for his survival as he realizes his destiny.",
          image_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx26-u2SawALYH3w3.jpg",
          poster_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/banner/26-FWJgAONj7etr.jpg",
          studio: "MADHOUSE",
          episodes: 22,
          status: "Finished",
          aired: "Sep 25, 2003",
          rating: "76%",
          top: true,
          winter: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Wolf's Rain",
          description:
            "In some distant future, it's common knowledge that all wolves have been extinct for 200 years. However, it seems this is false as wolves have not disappeared but rather have taken human form. Kiba, a lone wolf, wanders into a city, trying to sniff out the Lunar Flowers that are supposed to lead whoever follows the scent to paradise. The source of the smell is Cheza, a girl who sleeps in what appears to be suspended animation in a lab. She and the wolves are drawn to each other, and Kiba hopes to find paradise once he finds the source of the scent of Lunar Flowers. However, once Kiba finds Cheza, she is kidnapped by a mysterious person called Darcia, and his search begins anew. Before he leaves the city, he meets 3 other wolves, Tsume, Hige and Toboe. All four wolves have very different personalities and ideas, and their friendliness towards each other is a little rough around the edges. However, they soon band together to continue to search for paradise.",
          image_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/nx202-876AzCrdWaZ7.jpg",
          poster_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/banner/202-3Ud0fKK0ithq.jpg",
          studio: "bones",
          episodes: 26,
          status: "Finished",
          aired: "Jan 7, 2003",
          rating: "74%",
          top: false,
          winter: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Kaiji - Ultimate Survivor",
          description:
            "Itou Kaiji is a bum who steals car emblems and slashes tires on what seems to be a regular basis. This routine changes one day when he is paid a visit by a man in a trench-coat. Once the two get talking, it seems that the visitor (Calling himself Endou) is a debt collector. The reason for his visit is an unpaid loan which Kaiji had previously co-signed for a work-mate (Furuhata Takeshi). The original loan was 300,000 yen and once Takeshi had disappeared, the loan then fell on Kaiji.",
          image_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx3002-RhSiBs8HiP4g.png",
          poster_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/banner/3002-66EzBxaLDB9z.jpg",
          studio: "MADHOUSE",
          episodes: 26,
          status: "Finished",
          aired: "Oct 3, 2007",
          rating: "82%",
          top: false,
          winter: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Kuroko's Basketbal",
          description:
            "Teikou Junior High School's basketball team is crowned champion three years in a row thanks to five outstanding players who, with their breathtaking and unique skills, leave opponents in despair and fans in admiration. However, after graduating, these teammates, known as 'The Generation of Miracles', go their separate ways and now consider each other as rivals.",
          image_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx11771-82QwcjXwGoeg.jpg",
          poster_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/banner/11771-Bjm9Q0ow0nEh.jpg",
          studio: "Production I.G",
          episodes: 25,
          status: "Finished",
          aired: "Apr 8, 2012",
          rating: "78%",
          top: true,
          winter: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "HAIKYU!!",
          description:
            "Inspired after watching a volleyball ace nicknamed 'Little Giant' in action, small-statured Shouyou Hinata revives the volleyball club at his middle school. The newly-formed team even makes it to a tournament; however, their first match turns out to be their last when they are brutally squashed by the 'King of the Court,' Tobio Kageyama. Hinata vows to surpass Kageyama, and so after graduating from middle school, he joins Karasuno High School's volleyball team—only to find that his sworn rival, Kageyama, is now his teammate.",
          image_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx20464-eW7ZDBOcn74a.png",
          poster_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/banner/20464-HbmkPacki4sl.jpg",
          studio: "Production I.G",
          episodes: 25,
          status: "Finished",
          aired: "Apr 6, 2014",
          rating: "84%",
          top: true,
          winter: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "The Prince of Tennis",
          description:
            "Echizen Ryoma is a young tennis prodigy who has won 4 consecutive tennis championships but who constantly lies in the shadow of his father, a former pro tennis player. He joins the Seishun Gakuen junior highschool, one of the best tennis schools in Japan, and there along with his teamates he learns to find his own type of tennis in an attempt to defeat his biggest obstacle of all: his father as well as himself.",
          image_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx22-8Qg3NZXH6asP.png",
          poster_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/banner/22-wVJjA9tGMt4k.jpg",
          studio: "Production I.G",
          episodes: 178,
          status: "Finished",
          aired: "Oct 10, 2001",
          rating: "75%",
          top: false,
          winter: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Yowamushi Pedal",
          description:
            "Otaku Sakamichi Onoda has just entered high school and plans to join the anime club. In middle school, Onoda didn’t have any friends with whom he could talk about anime, games, Akihabara and other otaku things, and he is hoping he can make such friends in the anime club, but he finds out it's been disbanded. In order to reestablish the club he tries to find 4 other people who would like to join.",
          image_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx18179-IVG3RMuEgHsQ.png",
          poster_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/banner/18179-WCCATFM18Jzo.jpg",
          studio: "Toho Company",
          episodes: 38,
          status: "Finished",
          aired: "Oct 8, 2013",
          rating: "77%",
          top: false,
          winter: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Eyeshield 21",
          description:
            "Welcome To the Gridiron of the Damned! Huge hulking bodies throw themselves at each other, while a tiny lithe body runs between them for the goal! No, it’s not a game of football, it’s Sena Kobayakawa trying to evade the monstrous Ha-Ha brothers down the halls of Deimon High School! But wait! Sena’s incredible skills at not getting caught have been spotted by the devilish (possibly actually demonic) captain of the school’s embryonic American style football team, and when Sena asks to be the teams manager, he gets thrust onto the field as a running back instead! But there are two BIG catches: first, to keep the identity of their new “star” player an absolute secret, Yoichi makes Sena wear an opaque visor on his helmet and gives him the alias of “Eyeshield 21.” And the second catch? Well, in order to hit his fastest “speed of light” running mode, Sena usually has to be absolutely terrified. Not that THAT will be a problem with the monstrous players that he’ll soon find himself running from! The insanity hits the streets when the feet meet the cleats in EYESHIELD 21!",
          image_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/15-a3ka6ByDvnZv.jpg",
          poster_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/banner/n15-1eTutXlxYzYl.jpg",
          studio: "Studio Gallop",
          episodes: 145,
          status: "Finished",
          aired: "Apr 6, 2005",
          rating: "76%",
          top: false,
          winter: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Major ",
          description:
            "Honda Shigeharu is a Major League batter on the rise. His son Goro is a Little League pitcher who one day hopes to follow in his father's footsteps. Hoshino Momoko is Goro's schoolteacher, and the first woman Shigeharu has been interested in since the death of Goro's mother. The destines of these three individuals will become intertwined as father and son experience both heartbreak and triumph on the baseball diamond. But when an unspeakable tragedy visits the family, it will take everything they have to pick up the pieces and reclaim their dreams.",
          image_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx627-B0V5aoDfwtz0.png",
          poster_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/banner/627-jIPZjL2FkTpu.jpg",
          studio: "Studio Hibari",
          episodes: 26,
          status: "Finished",
          aired: "May 21, 2005",
          rating: "80%",
          top: true,
          winter: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Baby Steps",
          description:
            "Based on the original manga by Hikaru Katsuki, Baby Steps centers on a honor student named Eiichiro Maruo who becomes frustrated with his life and decides to join the tennis club. Despite lacking experience and physical strength, he utilizes his studious nature to develop a strategic approach to playing tennis. Taking notes of his opponents’ habits and tendencies, he is able to predict their next move before they even react. He also meets Natsu Takasaki, a beautiful girl with a passion for tennis. With her help, he aims to become a professional tennis player.",
          image_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx20510-7YPpNueZjzhC.png",
          poster_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/banner/n20510-9SKDDNdPJlx5.jpg",
          studio: "Studio Pierrot",
          episodes: 25,
          status: "Finished",
          aired: "Apr 6, 2014",
          rating: "76%",
          top: false,
          winter: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Hajime no Ippo: THE FIGHTING!",
          description:
            "Makunouchi Ippo has been bullied his entire life. Constantly running errands and being beaten up by his classmates, Ippo has always dreamed of changing himself, but never has the passion to act upon it. One day, in the midst of yet another bullying, Ippo is saved by Takamura Mamoru, who happens to be a boxer. Ippo faints from his injuries and is brought to the Kamogawa boxing gym to recover. As he regains consciousness, he is awed and amazed at his new surroundings in the gym, though lacks confidence to attempt anything. Takamura places a photo of Ippo's classmate on a punching bag and forces him to punch it. It is only then that Ippo feels something stir inside him and eventually asks Takamura to train him in boxing. Thinking that Ippo does not have what it takes, Takamura gives him a task deemed impossible and gives him a one week time limit. With a sudden desire to get stronger, for himself and his hard working mother, Ippo trains relentlessly to accomplish the task within the time limit. Thus Ippo's journey to the top of the boxing world begins.",
          image_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx263-G7RlubsM73YY.png",
          poster_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/banner/263-8Zejtdb3r2bI.jpg",
          studio: "MADHOUSE",
          episodes: 75,
          status: "Finished",
          aired: "Oct 4, 2000",
          rating: "86%",
          top: true,
          winter: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Big Windup!",
          description:
            "After a falling out with his middle school team, Mihashi enters Nishiura high school with no social skill, a warped opinion of himself, and every intention to quit baseball. The newly formed Nishiura baseball team, however, needs a pitcher, and they welcome him. Most enthusiastic is Abe, a domineering catcher with his own game issues.",
          image_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx2159-edhh8oByLOFz.png",
          poster_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/banner/2159-mLfzFO9ZQFjU.jpg",
          studio: "A-1 Pictures",
          episodes: 25,
          status: "Finished",
          aired: "Apr 13, 2007",
          rating: "77%",
          top: false,
          winter: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Slam Dunk",
          description:
            "One day, a girl named Haruko Akagi approaches Hanamichi without any fear. When she asks Hanamichi: 'do you like basketball?' Hanamichi falls head over heels for the girl of his dreams. Without missing a beat, Hanamichi tells her he loves basketball, and the two head to the gymnasium where Hanamichi learns about the slam dunk. He also learns of Rukawa, one of the country’s top basketball prospects, also a freshman at Shohoku.",
          image_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/nx170-EHrwa8o5hJGo.jpg",
          poster_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/banner/n170-Doo7vqAXRJ3p.jpg",
          studio: "Toei Animation",
          episodes: 101,
          status: "Finished",
          aired: "Oct 16, 1993",
          rating: "82%",
          top: true,
          winter: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Your Lie in April",
          description:
            "Piano prodigy Arima Kousei dominated the competition and all child musicians knew his name. But after his mother, who was also his instructor, passed away, he had a mental breakdown while performing at a recital. This resulted in him no longer being able to hear the sound of his piano playing. Two years later, Kousei hasn’t touched the piano and views the world without any flair or color. He was content at living out his life with his good friends Tsubaki and Watari until, one day, a girl changed everything. Miyazono Kaori is a pretty, free spirited violinist whose playing style reflects her personality. Kaori helps Kousei return to the music world and show that it should be free and mold breaking unlike the structured and rigid style Kousei was used to.",
          image_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx20665-CnzR2zVpdxtR.png",
          poster_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/banner/20665-j4kSsfhfkM24.jpg",
          studio: "A-1 Pictures",
          episodes: 22,
          status: "Finished",
          aired: "Oct 10, 2014",
          rating: "84%",
          top: false,
          winter: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "NANA",
          description:
            "Two twenty-somethings seemingly share nothing in common apart from their first name, but a chance meeting on a train bound for Tokyo sets Nana Komatsu and Nana Oosaki on a collision course with destiny. Nana Komatsu, a love-at-first-sight dreamer, aims to find enduring happiness in the big city. Nana Oosaki, neo punk rock vocalist, pursues her burning ambitions of musical stardom and worldwide fame. As their fates increasingly intertwine, they each chase their dreams — until the harsh realities of life in big city Tokyo threaten to tear everything apart.",
          image_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx877-rgaDbTMM9R59.png",
          poster_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/banner/877-5yVMHXHApFzf.jpg",
          studio: "MADHOUSE",
          episodes: 47,
          status: "Finished",
          aired: "Apr 5, 2006",
          rating: "84%",
          top: false,
          winter: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Carole & Tuesday",
          description:
            "Fifty years have passed since mankind began migrating to the new frontier: Mars. It's an age where most culture is produced by AI, and people are content to be passive consumers. There's a girl. Scrapping a living in the metropolis of Alba City, she's working part-time while trying to become a musician. She's always felt like something is missing. Her name is Carole. There's a girl. Born to a wealthy family in the provincial town of Herschel City, she dreams of becoming a musician, but nobody around her understands. She feels like the loneliest person in the world. Her name is Tuesday. A chance meeting brings them together. They want to sing. They want to make music. Together, they feel like they just might have a chance. The two of them may only create a tiny wave. But that wave will eventually grow into something larger...",
          image_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx101281-s1UoXUaYXhxn.jpg",
          poster_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/banner/101281-omdu2Vio02xt.jpg",
          studio: "bones",
          episodes: 24,
          status: "Finished",
          aired: "Apr 10, 2019",
          rating: "77%",
          top: false,
          winter: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Kids on the Slope",
          description:
            "The beginning of summer, 1966. Because of his father's job situation, freshman high school student Kaoru Nishimi moves by himself from Yokosuka to Kyushu to live with relatives. Until then, Kaoru was an honor roll student who tended to keep to himself, but meeting notorious bad boy Sentaro Kawabuchi starts to change him. Through his devil-may-care classmate, Kaoru learns the attractions of jazz and finds the first person he can call a 'friend'. He also discovers how much fun it is to play music with a pal. Other characters include Sentaro's kind childhood chum, Ritsuko, who is the daughter of a record shop owner; the mysterious upperclassman, Yurika; and Brother Jun, the much-admired leader among their peers. Set against the backdrop of a seaside town with a scent of American culture, this series is a drama about young people coming into their own, crossing each other's paths, and finding friendship, love, and music!",
          image_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/nx12531-Z5K3przHadiD.jpg",
          poster_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/banner/12531-S7FaZwnZPCWQ.jpg",
          studio: "MAPPA",
          episodes: 12,
          status: "Finished",
          aired: "Apr 13, 2012",
          rating: "81%",
          top: false,
          winter: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Beck: Mongolian Chop Squad",
          description:
            "Tanaka Yukio, better known by his nickname Koyuki is a 14 year old who feels disconnected from life in general. Through the act of saving a mismatched dog, he meets guitarist Minami Ryuusuke, and becomes involved in Ryuusuke's new band BECK. Koyuki's life starts to change as the band struggles towards fame.",
          image_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx57-HhnvbHS4ujea.png",
          poster_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/banner/57-fLzMIA5ZXvwp.jpg",
          studio: "MADHOUSE",
          episodes: 26,
          status: "Finished",
          aired: "Oct 7, 2004",
          rating: "80%",
          top: false,
          winter: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Sounds of Life",
          description:
            "In the story, Takezou is the last remaining member of the koto club, a club dedicated to the traditional Japanese string instrument. If he doesn't find new members, the koto club will be terminated. One day, Takezou is alone in the club room when a student barges in and demands to join. The student is delinquent Chika Kudou, a guy who even scares delinquent upperclassmen at other schools.",
          image_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx103302-RVGwGRDGdMQq.jpg",
          poster_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/banner/103302-bEkF9A0W10rj.jpg",
          studio: "Platinum Vision",
          episodes: 13,
          status: "Finished",
          aired: "Apr 7, 2019",
          rating: "77%",
          top: false,
          winter: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Nodame Cantabile",
          description:
            "Shinichi Chiaki is a first class musician whose dream is to play among the elites in Europe. Coming from a distinguished family, he is an infamous perfectionist; not only is he highly critical of himself, but of others as well. The only thing stopping Chiaki from leaving for Europe is his fear of flying. As a result, he's grounded in Japan. During his 4th year at Japan's top music university, Chiaki happens to meet Noda Megumi; or as she refers to herself, Nodame. On the surface, she seems to be an unkempt girl with no direction in life. However, when Chiaki hears Nodame play the piano for the first time, he is in awe at the kind of music she plays. To Chiaki's dismay, Nodame moves into the apartment next to his and finds out that she is head over heels in love with him. Nodame Cantabile tells the story of Chiaki and Nodame, as they not only learn to deal with each other, but learn lessons from one another as they strive for the top of the musical world.",
          image_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/nx1698-VhVaiOLkcGCp.jpg",
          poster_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/banner/n1698-YhbmezYfngCk.jpg",
          studio: "MADHOUSE",
          episodes: 23,
          status: "Finished",
          aired: "Jan 12, 2007",
          rating: "80%",
          top: false,
          winter: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Given",
          description:
            "Tightly clutching his Gibson guitar, Mafuyu Satou steps out of his dark apartment to begin another day of his high school life. While taking a nap in a quiet spot on the gymnasium staircase, he has a chance encounter with fellow student Ritsuka Uenoyama, who berates him for letting his guitar's strings rust and break. Noticing Uenoyama's knowledge of the instrument, Satou pleads for him to fix it and to teach him how to play. Uenoyama eventually agrees and invites him to sit in on a jam session with his two band mates: bassist Haruki Nakayama and drummer Akihiko Kaji. Satou's voice is strikingly beautiful, filling Uenoyama with the determination to make Satou the lead singer of the band. Though reticent at first, Satou takes the offer after an emotional meeting with an old friend. With the support of his new friends, Satou must not only learn how to play guitar, but also come to terms with the mysterious circumstances that led him to be its owner.",
          image_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx108430-LcVOT7ntUbjT.jpg",
          poster_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/banner/108430-L8rZPUpXjDzv.jpg",
          studio: "Lerche",
          episodes: 11,
          status: "Finished",
          aired: "Jul 12, 2019",
          rating: "84%",
          top: false,
          winter: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Forest of Piano",
          description:
            "A tranquil tale about two boys from very different upbringings. On one hand you have Kai, born as the son of a prostitute, who's been playing the abandoned piano in the forest near his home ever since he was young. And on the other you have Shuuhei, practically breast-fed by the piano as the son of a family of prestigious pianists. Yet it is their common bond with the piano that eventually intertwines their paths in life.",
          image_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/nx100401-frKNiXOnRKdu.jpg",
          poster_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/banner/100401-ox7dBr8i1q35.jpg",
          studio: "Gaina",
          episodes: 12,
          status: "Finished",
          aired: "Jul 12, 2019",
          rating: "71%",
          top: false,
          winter: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Nodame Cantabile Finale",
          description:
            "The series continues the relationship between two aspiring classical musicians, Megumi 'Nodame' Noda and Shinichi Chiaki, as students and after graduation.",
          image_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/nx5690-FEBLLRnlMvlx.jpg",
          poster_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/banner/n5690-9lv3wPkcJmyW.jpg",
          studio: "J.C. Staff",
          episodes: 11,
          status: "Finished",
          aired: "Jan 15, 2010",
          rating: "80%",
          top: false,
          winter: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Wotakoi: Love is Hard for Otaku",
          description:
            "Having slept through all four of her alarms, the energetic Narumi Momose finds herself running late for her first day of work at a new office. As she races to catch her train, she makes a promise to herself that none of her coworkers will find out about her dark secret: that she is an otaku and a fujoshi. Her plan goes instantly awry, though, when she runs into Hirotaka Nifuji, an old friend from middle school. Although she tries to keep her secret by inviting him out for drinks after work, her cover is blown when he casually asks her whether or not she will be attending the upcoming Summer Comiket. Luckily for her, the only witnesses—Hanako Koyanagi and Tarou Kabakura—are otaku as well. Later that night, the pair go out for drinks so that they can catch up after all the years apart. After Narumi complains about her previous boyfriend breaking up with her because he refused to date a fujoshi, Hirotaka suggests that she try dating a fellow otaku, specifically himself. He makes a solemn promise to always be there for her, to support her, and to help her farm for rare drops in Monster Hunter. Blown away by the proposal, Narumi agrees immediately. Thus the two otaku start dating, and their adorably awkward romance begins.",
          image_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/nx99578-oO5KChtfhzln.png",
          poster_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/banner/99578-8orFGgDq7NS8.jpg",
          studio: "A-1 Pictures",
          episodes: 11,
          status: "Finished",
          aired: "Apr 13, 2018",
          rating: "79%",
          top: false,
          winter: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Clannad: After Story",
          description:
            "Events in After Story take place immediately after the first season, following Tomoya's final semester of high school. After declaring his love to Nagisa, they begin to have a close relationship. Their life together will be faced with unexpected challenges, as the truth behind the illusionary world and the city's legend come to light.",
          image_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx4181-V1LCtX1rJgbR.png",
          poster_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/banner/4181.jpg",
          studio: "Kyoto Animation",
          episodes: 24,
          status: "Finished",
          aired: "Oct 3, 2008",
          rating: "87%",
          top: false,
          winter: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Kokoro Connect",
          description:
            "The five members of the Cultural Research Club - Taichi Yaegashi, Iori Nagase, Himeko Inaba, Yui Kiriyama, and Yoshifumi Aoki - encounter a bizarre phenomenon one day when Aoki and Yui switch bodies without warning. The same begins to happen to the other club members, throwing their daily lives into disarray. At first the five students find some amusement amidst the confusion, but this unwarranted connection also exposes the painful scars hidden within their hearts. As their calm lives are shattered, the relationships between the five students also begin to change...",
          image_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx11887-AJezDTY27LxZ.png",
          poster_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/banner/11887-DWtqKSd0DBFF.jpg",
          studio: "SILVER LINK.",
          episodes: 13,
          status: "Finished",
          aired: "Jul 8, 2012",
          rating: "75%",
          top: false,
          winter: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Anohana: The Flower We Saw That Day",
          description:
            "Jinta Yadomi and his group of childhood friends have become estranged after a tragic accident split them apart. Now in their high school years, a sudden surprise forces each of them to confront their guilt over what happened that day and come to terms with the ghosts of their past.",
          image_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx9989-qCd2RgAL0P8I.png",
          poster_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/banner/9989-pyr6rXlV1oAm.jpg",
          studio: "A-1 Pictures",
          episodes: 11,
          status: "Finished",
          aired: "Apr 15, 2011",
          rating: "81%",
          top: false,
          winter: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Violet Evergarden",
          description:
            "A certain point in time, in the continent of Telesis. The great war which divided the continent into North and South has ended after four years, and the people are welcoming a new generation. Violet Evergarden, a young girl formerly known as “the weapon”, has left the battlefield to start a new life at CH Postal Service. There, she is deeply moved by the work of “Auto Memories Dolls”, who carry people's thoughts and convert them into words. Violet begins her journey as an Auto Memories Doll, and comes face to face with various people's emotions and differing shapes of love. There are words Violet heard on the battlefield, which she cannot forget. These words were given to her by someone she holds dear, more than anyone else. She does not yet know their meaning but she searches to find it.",
          image_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/nx21827-10F6m50H4GJK.png",
          poster_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/banner/21827-ROucgYiiiSpR.jpg",
          studio: "Kyoto Animation",
          episodes: 13,
          status: "Finished",
          aired: "Jan 11, 2018",
          rating: "85%",
          top: false,
          winter: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Keep Your Hands Off Eizouken!",
          description:
            "First year high schooler Midori Asakusa loves anime so much, she insists that 'concept is everything' in animation. Though she draws a variety of ideas in her sketchbook, she hasn't taken the first step to creating anime, insisting that she can't do it alone. The producer-type Sayaka Kanamori is the first to notice Asakusa's genius. Then, when it becomes clear that their classmate, charismatic fashion model Tsubame Mizusaki, really wants to be an animator, they create an animation club to realize the 'ultimate world' that exists in their minds.",
          image_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx109298-YvjfI88hX76T.png",
          poster_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/banner/109298-ej4YYg87HHoA.jpg",
          studio: "Science SARU",
          episodes: 12,
          status: "Finished",
          aired: "Jan 6, 2020",
          rating: "80%",
          top: false,
          winter: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "March comes in like a lion",
          description:
            "Rei Kiriyama is a 17 year old boy who recently started living alone, financed by his salary as a professional Shogi player. Despite his independence, however, he's yet to mature emotionally, and his problems continue to haunt him in his daily life. His relationship with his adoptive family is strained, and he has difficulties interacting with his fellow high school students. Meanwhile, his professional career in Shogi has entered a slump. Burdened with the heavy expectations placed upon him, his wins and losses are fluctuating as his record and progression into the ranks begin to stagnate. Acquainted with Rei are the three Kawamoto sisters: Akari, Hinata, and Momo. Unlike Rei, they live happily in their modest home, which they warmly welcome Rei into as if he were one of their own. He frequently visits the family, interacting with them and receiving the kind of care and affection he never quite had while under his foster home. This is the story of Rei's triumphs and failures, relationships new and old, and his growth as a person.",
          image_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx21366-u3ksu16pivGg.png",
          poster_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/banner/21366-0oGI0V0ouXxi.png",
          studio: "Shaft",
          episodes: 22,
          status: "Finished",
          aired: "Oct 8, 2016",
          rating: "83%",
          top: false,
          winter: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Natsume's Book of Friends",
          description:
            "Natsume has always been an outcast because he inherited his grandmother's ability to see yokai. After moving to his grandmother's hometown and accidentally releasing a yokai imprisoned in a Lucky Cat statue, he learns about his grandmother's 'Book of Friends,' which contains the names of the yokai she defeated, and allows its wielder to command the yokai named within. Since then, yokai now visit him on a daily basis, seeking to either get their names back or take possession of the Book of Friends.",
          image_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx4081-33BLrdaPdZjP.jpg",
          poster_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/banner/4081-dbeE4uMExtgc.jpg",
          studio: "Brain's Base",
          episodes: 13,
          status: "Finished",
          aired: "Jul 8, 2008",
          rating: "81%",
          top: false,
          winter: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Kino's Journey",
          description:
            "Based on a hit light novel series by Keiichi Sigsawa, the philosophical Kino's Journey employs the time-honored motif of the road trip as a vehicle for self-discovery and universal truth. Deeply meditative and cooler than zero, the series follows the existential adventures of the apt marksman Kino along with talking motorcycle Hermes as they travel the world and learn much about themselves in the process. Imaginative, thought-provoking, and sometimes disturbing, Kino's journey is documented in an episodic style with an emphasis on atmosphere rather than action or plot, though still prevalent.",
          image_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx486-ygOzgiYJJsB9.jpg",
          poster_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/banner/486-cDPgzYdzHNEq.jpg",
          studio: "A.C.G.T.",
          episodes: 13,
          status: "Finished",
          aired: "Apr 8, 2003",
          rating: "81%",
          top: false,
          winter: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "From Me to You",
          description:
            "Kuronuma Sawako is completely misunderstood by her classmates. Her timid and sweet demeanor is often mistaken for malicious behavior. This is due to her resemblance to the ghost girl from 'The Ring', which has led her peers to give her the nickname Sadako. Longing to make friends and live a normal life, she is naturally drawn to Kazehaya Shouta, the most popular guy in class, whose '100% refreshing' personality earns him great admiration from Sawako. So when Kazehaya starts talking to her, maybe there is hope for the friendships Sawako has always longed for. Maybe...there is even a little hope for some romance in her future.",
          image_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx6045-txJOukR5Qve4.jpg",
          poster_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/banner/n6045-HmG3MtJalXIH.jpg",
          studio: "SILVER LINK.",
          episodes: 25,
          status: "Finished",
          aired: "Oct 7, 2009",
          rating: "78%",
          top: false,
          winter: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Noragami",
          description:
            "Minor god Yato is down on his luck. Fed up with his slacker lifestyle, his partner abruptly quits. He has no money, no worshippers, and no shrine to call home. But just when things are starting to seem hopeless, a bus accident forces him to cross paths with Hiyori Iki, a sweet and perky high school girl. After the accident, Hiyori's soul has a bad habit of slipping out of her body, and after enlisting Yato's help to get her back to normal, she begins to fall into the world of spirits and gods. But Hiyori's not the only one who's keeping tabs on Yato. A god from Yato's past is back, and he's not interested in a friendly reunion.",
          image_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx20447-EoQXeygHaVCK.jpg",
          poster_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/banner/20447-nlgQQzcgWbgw.jpg",
          studio: "bones",
          episodes: 12,
          status: "Finished",
          aired: "Jan 5, 2014",
          rating: "78%",
          top: false,
          winter: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Natsume's Book of Friends 2",
          description:
            "The second season of Natsume's Book of Friends. As with its prequel, Zoku Natsume Yuujinchou is about Natsume Takashi, a boy who has had the ability to see youkai since he was young, and his bodyguard youkai, Madara, nicknamed Nyanko-sensei. Natsume attempts to return names written in his Book of Friends, which he inherited from his grandmother Reiko, to youkai in his village. Throughout these adventures, he meets some youkai that are friendly, some that want to steal the Book of Friends, and some that want to kill him. Natsume learns about himself and his relationship with youkai along the way.",
          image_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx5300-uqduKJg8yGVr.jpg",
          poster_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/banner/5300-sEIrQMgijOo7.jpg",
          studio: "Brain's Base",
          episodes: 13,
          status: "Finished",
          aired: "Jan 6, 2009",
          rating: "83%",
          top: false,
          winter: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Claymore",
          description:
            "In this world, humans coexist with demonic predators called Yoma. These demonic beasts feast on human innards and can blend into human society by taking on human appearance. As a counter force, a mysterious organization created half-human, half-Yoma warriors known as the 'Silver Eyed Witches' or 'Claymores', after the huge claymore swords they carry. They are detested by humanity however necessary. The story begins with a young boy, Raki, who has lost everything in a Yoma attack, and the Claymore, Clare, who is generally detested by society. Throughout the series, Clare and Raki show their deeper qualities, powers and Clare's never ending devotion to the goal she swore to fulfill in her childhood.",
          image_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx1818-XX52j6ECeO7O.jpg",
          poster_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/banner/1818-7Nt2HYxVIxtA.jpg",
          studio: "MADHOUSE",
          episodes: 26,
          status: "Finished",
          aired: "Apr 4, 2007",
          rating: "73%",
          top: false,
          winter: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Attack on Titan Season 3",
          description:
            "Eren and his companions in the 104th are assigned to the newly-formed Levi Squad, whose assignment is to keep Eren and Historia safe given Eren's newly-discovered power and Historia's knowledge and pedigree. Levi and Erwin have good reason to be concerned, because the priest of the Church that Hanji had hidden away was found tortured to death, making it clear that the Military Police are involved with the cover-up. Things get more harrowing when the MPs make a move on Erwin and the Levi Squad narrowly avoids capture. Eren is also having problems with his Titan transformation, and a deadly killer has been hired to secure Eren and Historia, one Levi knows all too well from his youth.",
          image_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx99147-5RXELRvwjFl6.jpg",
          poster_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/banner/99147-HACsFVrynFf5.jpg",
          studio: "Wit Studio",
          episodes: 12,
          status: "Finished",
          aired: "Jul 23, 2018",
          rating: "86%",
          top: false,
          winter: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Fate/stay night: Unlimited Blade Works",
          description:
            "Fuyuki City - a city surrounded by the sea and mountains becomes the setting for an ancient ritual. Seven masters are given control of heroic spirits in order to realize the mythical Holy Grail, which is said to grant its owner any wish. These heroic spirits or servants represent legendary heroes of various classes: 'Saber,' 'Lancer,' 'Archer,' 'Rider,' 'Caster,' 'Assassin,' and 'Berserker.' Each master will enter into a contract with their chosen servant and battle the others to the death until only one pair remains... This is the 'Holy Grail War.' The young and capable mage, Rin Tohsaka, prepares for her long-awaited Fifth Holy Grail War to begin... With her servant Archer, Rin enters the Holy Grail War as the sole heir to the prestigious Tohsaka family after her father's death. But when Shirou Emiya, a boy from Rin's school, unwittingly becomes a Master and is fatally wounded in battle, she has no choice but to save him. With Shirou and his servant Saber, Rin sets out to strike down the conspiracies surrounding the Holy Grail War. Will the Holy Grail bless Rin and Shirou's path toward victory or will they be cursed with defeat?",
          image_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/nx19603-pc0lrFinBpTg.jpg",
          poster_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/banner/19603.jpg",
          studio: "ufotable",
          episodes: 13,
          status: "Finished",
          aired: "Oct 5, 2014",
          rating: "80%",
          top: false,
          winter: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "The Case Study of Vanitas",
          description:
            "It’s 19th-century Paris, and young vampire Noé hunts for the Book of Vanitas. Attacked by a vampire driven insane, a human intercedes, rescues Noé, and heals the sick creature. Commanding the book and calling himself Vanitas, this doctor tempts Noé with a mad crusade to “cure” the entire vampire race. Allying with one who wields arcane power so easily may be dangerous, but does he have a choice?",
          image_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx131646-k6u2UXIsMXEa.jpg",
          poster_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/banner/131646-ewbYrSfyUyp6.jpg",
          studio: "bones",
          episodes: 12,
          status: "Finished",
          aired: "Jul 3, 2021",
          rating: "78%",
          top: false,
          winter: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Haibane Renmei",
          description:
            "A dream of falling from the sky... and then birth. Rakka is born from a large cocoon into the Old Home, greeted by a group of females with small wings on their backs and shining halos above their heads. Soon Rakka’s own wings grow, a halo is placed on her head and she is told that she must work in the nearby town of Grie. She soon realizes that the town and the entire world they live in are confined behind the Wall, a tall, impenetrable wall that none except the mysterious Toga are allowed to exit.",
          image_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx387-eewftYhOOFVP.png",
          poster_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/banner/387-2ogrNTbIYy2T.jpg",
          studio: "Radix",
          episodes: 13,
          status: "Finished",
          aired: "Oct 10, 2002",
          rating: "79%",
          top: false,
          winter: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Natsume's Book of Friends 5",
          description: "The fifth season of Natsume's Book of Friends.",
          image_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/nx21710-uot0VnHffzqd.jpg",
          poster_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/banner/21710-t9uyLEVqcBXJ.jpg",
          studio: "Shuka",
          episodes: 11,
          status: "Finished",
          aired: "Oct 5, 2016",
          rating: "84%",
          top: false,
          winter: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Kyousougiga",
          description:
            "Koto and her brothers, A and Un are stuck in a strange city causing massive mayhem through the land called Kyoto but not the Kyoto they are from. They are searching for an atypical rabbit in order to return home. Koto, who is the eldest of the three, seems to have some sort of connection to this weird place ruled by a monk, a demon, and a priest.",
          image_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx19703-vLR6TxRgEIlo.png",
          poster_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/banner/19703-TXOqMdKutRU6.jpg",
          studio: "Toei Animation",
          episodes: 10,
          status: "Finished",
          aired: "Oct 10, 2013",
          rating: "76%",
          top: false,
          winter: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "MUSHI-SHI The Next Passage",
          description:
            "They existed long before anyone can remember. They are simple and strange in nature, not resembling any other plant or animal in this world. In ancient times, people revered these bizarre creatures and called them 'Mushi.' People once again began to believe in the existence of these 'Mushi' when they began affecting their lives in inexplicable ways. The one who connects the world of 'Mushi' to the world of humans—they were called the 'Mushi-shi.' All life exists not to hinder others in this world. They are simply there to live as they were meant to.",
          image_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/nx20595-dXPvrTNRKFUb.jpg",
          poster_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/banner/n20595-y2Snh07wJ00v.jpg",
          studio: "Artland",
          episodes: 10,
          status: "Finished",
          aired: "Apr 5, 2014",
          rating: "86%",
          top: false,
          winter: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Cowboy Bebop",
          description:
            "Enter a world in the distant future, where Bounty Hunters roam the solar system. Spike and Jet, bounty hunting partners, set out on journeys in an ever struggling effort to win bounty rewards to survive. While traveling, they meet up with other very interesting people. Could Faye, the beautiful and ridiculously poor gambler, Edward, the computer genius, and Ein, the engineered dog be a good addition to the group?",
          image_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx1-CXtrrkMpJ8Zq.png",
          poster_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/banner/1-T3PJUjFJyRwg.jpg",
          studio: "Deca",
          episodes: 22,
          status: "Finished",
          aired: "Apr 5, 2011",
          rating: "86%",
          top: true,
          winter: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "That Time I Got Reincarnated as a Slime",
          description:
            "Lonely thirty-seven-year-old Satoru Mikami is stuck in a dead-end job, unhappy with his mundane life, but after dying at the hands of a robber, he awakens to a fresh start in a fantasy realm...as a slime monster! As he acclimates to his goopy new existence, his exploits with the other monsters set off a chain of events that will change his new world forever!",
          image_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx101280-ezBXqEHi8pg0.jpg",
          poster_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/banner/101280-9t7J3774n955.jpg",
          studio: "Madhouse",
          episodes: 12,
          status: "Finished",
          aired: "Sep 5, 2020",
          rating: "89%",
          top: true,
          winter: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Tokyo Revengers",
          description:
            "Takemichi Hanagaki is a freelancer that's reached the absolute pits of despair in his life. He finds out that the only girlfriend he ever had in his life that he dated in middle school, Hinata Tachibana, had been killed by the ruthless Tokyo Manji Gang. The day after hearing about her death, he's standing on the station platform and ends up being pushed over onto the tracks by a herd of people. He closes his eyes thinking he's about to die, but when he opens his eyes back up, he somehow had gone back in time 12 years. Now that he's back living the best days of his life, Takemichi decides to get revenge on his life by saving his girlfriend and changing himself that he'd been running away from.",
          image_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx120120-jDXkzl3oepKo.jpg",
          poster_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/banner/120120-zTaqdgW2ZUPu.jpg",
          studio: "Anmiplex",
          episodes: 24,
          status: "Finished",
          aired: "Dec 5, 2020",
          rating: "91%",
          top: true,
          winter: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Tower of God",
          description:
            "There is a tower that summons chosen people called 'Regulars' with the promise of granting their deepest desires. Whether it be wealth, fame, authority, or something that surpasses them all—everything awaits those who reach the top. Twenty-Fifth Bam is a boy who had only known a dark cave, a dirty cloth, and an unreachable light his entire life. So when a girl named Rachel came to him through the light, his entire world changed. Becoming close friends with Rachel, he learned various things about the outside world from her. But when Rachel says she must leave him to climb the Tower, his world shatters around him. Vowing to follow after her no matter what it takes, he sets his sight on the tower, and a miracle occurs. Thus begins the journey of Bam, a young boy who was not chosen by the Tower but opened its gates by himself. They call his kind 'Irregulars'—beings that have shaken the very foundation of the Tower each time they set foot inside it.",
          image_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx115230-aHcNrjMJkPnx.png",
          poster_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/banner/115230-wjDIxW77TLv3.jpg",
          studio: "Crunchyroll",
          episodes: 12,
          status: "Finished",
          aired: "Apr 2, 2020",
          rating: "74%",
          top: true,
          winter: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Mob Psycho 100",
          description:
            "The story revolves around 'Mob,' a boy who will explode if his emotional capacity reaches 100%. This boy with psychic powers earned his nickname 'Mob' because he does not stand out among other people. He keeps his psychic powers bottled up so he can live normally, but if his emotional level reaches 100, something will overwhelm his entire body.",
          image_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/nx21507-UaVmcRIUjhUa.jpg",
          poster_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/banner/21507-Qx8bGsLXUgLo.jpg",
          studio: "FASH",
          episodes: 12,
          status: "Finished",
          aired: "Jul 17, 2016",
          rating: "84%",
          top: true,
          winter: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Dr. STONE",
          description:
            "After five years of harboring unspoken feelings, high-schooler Taiju Ooki is finally ready to confess his love to Yuzuriha Ogawa. Just when Taiju begins his confession however, a blinding green light strikes the Earth and petrifies mankind around the world— turning every single human into stone. Several millennia later, Taiju awakens to find the modern world completely nonexistent, as nature has flourished in the years humanity stood still. Among a stone world of statues, Taiju encounters one other living human: his science-loving friend Senkuu, who has been active for a few months. Taiju learns that Senkuu has developed a grand scheme—to launch the complete revival of civilization with science. Taiju's brawn and Senkuu's brains combine to forge a formidable par However, Senkuu's master plan is threatened when his ideologies are challenged by those who awaken. All the while, the reason for mankind's petrification remains unknown.",
          image_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx105333-BBxkPhen07Zj.jpg",
          poster_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/banner/105333-KWKGvBM8Hyga.jpg",
          studio: "TMS Entertainment",
          episodes: 24,
          status: "Finished",
          aired: "Jul 5, 2019",
          rating: "82%",
          top: true,
          winter: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Seven deadly sins",
          description:
            "When they were accused of trying to overthrow the monarchy, the feared warriors the Seven Deadly Sins were sent into exile. Princess Elizabeth discovers the truth - the Sins were framed by the king's guard, the Holy Knights - too late to prevent them from assassinating her father and seizing the throne! Now the princess is on the run, seeking the Sins to help her reclaim the kingdom. But the first Sin she meets, Meliodas, is a little innkeeper with a talking pig. He doesn't even have a real sword! Have the legends of the Sins' strength been exaggerated?",
          image_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx20789-SsAI4pvvI9EU.jpg",
          poster_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/banner/20789-qwG9GcxIrmVE.jpg",
          studio: "A-1 Pictures",
          episodes: 24,
          status: "Finished",
          aired: "Oct 5, 2014",
          rating: "75%",
          top: true,
          winter: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Re:Zero − Starting Life in Another World",
          description:
            "In the story, Subaru Natsuki is an ordinary high school student who is lost in an alternate world, where he is rescued by a beautiful, silver-haired girl. He stays near her to return the favor, but the destiny she is burdened with is more than Subaru can imagine. Enemies attack one by one, and both of them are killed. He then finds out he has the power to rewind death, back to the time he first came to this world. But only he remembers what has happened since.",
          image_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx21355-xsLpqMFkMQQk.png",
          poster_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/banner/21355-f9SjOfEJMk5P.jpg",
          studio: "White Fox",
          episodes: 25,
          status: "Finished",
          aired: "Apr 4, 2016",
          rating: "81%",
          top: true,
          winter: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Kill la Kill",
          description:
            "After the murder of her father, Ryuuko Matoi has been wandering the land in search of his killer. Following her only lead—the missing half of his invention, the Scissor Blade—she arrives at the prestigious Honnouji Academy, a high school unlike any other. The academy is ruled by the imposing and cold-hearted student council president Satsuki Kiryuuin alongside her powerful underlings, the Elite Four. In the school's brutally competitive hierarchy, Satsuki bestows upon those at the top special clothes called 'Goku Uniforms,' which grant the wearer unique superhuman abilities.",
          image_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/nx18679-zE07Y4SFaOiO.png",
          poster_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/banner/18679-rpC99hxBxaMn.jpg",
          studio: "Trigger",
          episodes: 24,
          status: "Finished",
          aired: "Oct 4, 2013",
          rating: "79%",
          top: true,
          winter: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "JoJo’s Bizarre Adventure STONE OCEAN",
          description:
            "In Florida, 2011, Jolyne Kuujou sits in a jail cell like her father Joutarou once did; yet this situation is not of her own choice. Framed for a crime she didn’t commit, and manipulated into serving a longer sentence, Jolyne is ready to resign to a dire fate as a prisoner of Green Dolphin Street Jail. Though all hope seems lost, a gift from Joutarou ends up awakening her latent abilities, manifesting into her Stand, Stone Free. Now armed with the power to change her fate, Jolyne sets out to find an escape from the stone ocean that holds her. However, she soon discovers that her incarceration is merely a small part of a grand plot: one that not only takes aim at her family, but has additional far-reaching consequences. What's more, the mastermind is lurking within the very same prison, and is under the protection of a lineup of menacing Stand users. Finding unlikely allies to help her cause, Jolyne sets course to stop their plot, clear her name, and take back her life.",
          image_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx131942-jFwJ6ULfNb2o.png",
          poster_url:
            "https://s4.anilist.co/file/anilistcdn/media/anime/banner/131942-RFnwSz9rPqj3.jpg",
          studio: "David Production",
          episodes: 24,
          status: "Finished",
          aired: "Dec, 2021",
          rating: "90%",
          top: true,
          winter: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete("Animes", null, {});
  },
};
