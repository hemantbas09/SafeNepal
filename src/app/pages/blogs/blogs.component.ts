import { Component } from '@angular/core';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss'],
})
export class BlogsComponent {
  projectDetails: Array<any> = [
    { title: 'Celebrating World Environment Day 2023: Poem Competition on "Solution to Plastic Pollution',
     aboutWork: '
The "Poem Competition" held on World Environment Day 2023 with the theme "Solution to Plastic Pollution" was a resounding success, uniting individuals from diverse backgrounds to address the pressing challenge of plastic pollution. The competition showcased the creative and innovative solutions through poetry, inspiring a sense of responsibility in participants to protect the environment. The top three winners, Ms. Sabita Thapa, Ms. Rojita Sharma, and Ms. Muna Poudel, were commended for their exceptional contributions. The event generated awareness and introspection, reminding everyone of the importance of safeguarding the planet. The organizers expressed gratitude to all participants and supporters and emphasized the need to continue efforts in reducing plastic pollution and embracing eco-friendly alternatives for a plastic-free future.' 
    },
    { title: 'Spreading Joy and Clean Air: SAFA Project Distributes "Bags of Joy',
     aboutWork: '
The SAFA Project recently distributed "Bags of Joy" to deserving children in their community, carrying a powerful message to combat air pollution and promote a cleaner, healthier future. These special school bags contain educational materials that raise awareness about air pollution and its solutions, aiming to empower children as environmental advocates. Witnessing the children's excitement and hope-filled smiles served as a reminder of the collective potential to inspire change. The SAFA Project invites the community to join them in spreading awareness about clean air and environmental consciousness, igniting a movement of positive action for a greener, healthier world for future generations.' 
    },
    { title: '"Online Article Writing Competition" and the "Presentation Design Competition"',
      aboutWork: 'The "Online Article Writing Competition" and the "Presentation Design Competition" held on April 1st received an overwhelming and enthusiastic response with high-quality submissions. The winners of the writing competition were Ms. Angel Kattel (1st place), Ms. Shila Gurung (2nd place), and Ms. Kabita Pokharel (3rd place), recognized for their outstanding articles with unique perspectives and engaging writing styles. In the design competition, a tie resulted in three winners: Shankar Shrestha, Ms. Angel Kattel, and Ritu Joshi, commended for their innovative and creatively effective presentations. The organizers expressed gratitude to all participants for their contributions, acknowledging the impact of their work in raising awareness and promoting meaningful discussions. The event showcased immense talent and enthusiasm, and the organizers look forward to hosting more such events in the future to continue celebrating creativity and knowledge exchange. Congratulations to the winners, and appreciation for the efforts of all participants in making the event a success.' 
    },
    { title: 'Burn Fat, Not Fuel: A Resounding Success for Sustainable Transportation', 
      aboutWork: 'The "Burn Fat, not Fuel" cycle rally was a tremendous success, aiming to promote sustainable transportation and raise awareness about reducing the carbon footprint to combat air pollution and climate change. The event brought together passionate individuals advocating for cleaner modes of transportation and received overwhelming support from participants and the community. Cycling was highlighted as a means to prioritize physical health while reducing harmful emissions from conventional vehicles. Gratitude was expressed to all participants and supporters for amplifying the message of environmental consciousness. The rally exemplifies the belief that individual actions can create a significant impact, encouraging the adoption of greener alternatives and eco-friendly practices. Initiatives like the SAFA Project contribute to creating a cleaner, healthier world for future generations, emphasizing the collective responsibility to protect the environment for a brighter future.' 
    },
    { title: 'Running Towards a Greener Future: Successful 2nd Short Marathon on Zero Emission Day]', 
      aboutWork: '
SAFE-Nepal's 2nd Short Marathon, themed "Run for Green," was a resounding success, held on "Zero Emission Day" in Pokhara, Nepal. The event celebrated environmental consciousness and sustainable practices, thanks to the support of various organizations, including the Ministry of Youth and Sports, Gandaki province, and Pokhara Municipality. Despite challenges posed by rain, the participants and volunteers showed unwavering enthusiasm. Esteemed individuals, including Ms. Mandira Pariyar and police officers, graced the event as guests. Gratitude was expressed to all contributors, including the Institute of Forestry and volunteers, for making the marathon impactful and inspiring. Congratulations were extended to the winners, highlighting their commitment to a cleaner, greener world. The SAFE-Nepal family encourages continued efforts towards a sustainable future and environmental stewardship for generations to come' 
    },
    { title: 'Empowering Change: A Successful School Teaching and Community Outreach Program Against Air Pollution', 
      aboutWork: 'The School Teaching and Community Outreach Program against air pollution in Pokhara Metro was a remarkable success, uniting over 500 students from different wards. Through diverse activities like mass presentations, interactive sessions, eco-club formations, and tree planting, the initiative aimed to empower young minds to combat air pollution and promote a greener environment. The program left a lasting impact on participants and the community, fostering a sense of responsibility and leadership among the students. Gratitude was expressed to volunteers, school administrations, and supporters like Clean Energy Nepal, the US Embassy, and American Corner-Pokhara for their contributions to the program's success. The initiative highlighted the power of collective efforts in creating a cleaner, healthier future and emphasized the ongoing journey towards environmental preservation'
    },

  ];
}
