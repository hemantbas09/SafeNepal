import { Component } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent {
  projectDetails: Array<any> = [
    {
      image: 'assets/images/project/poem.jpg',
      title: 'Celebrating World Environment Day 2023',
      aboutWork:
        'We are thrilled to share the highlights of the wonderful event organized on the auspicious occasion of World Environment Day 2023 - a "Poem Competition" with the theme "Solution to Plastic Pollution." This special event brought together passionate individuals from diverse backgrounds, united by their dedication to environmental preservation.',
    },
    {
      image: 'assets/images/project/bag.jpg',
      title:
        'Spreading Joy and Clean Air: SAFA Project Distributes "Bags of Joy"',
      aboutWork:
        'We are delighted to share the incredible experience of the SAFA Project as we recently had the privilege of distributing "Bags of Joy" to the beautiful and deserving children in our community. These school bags are not just ordinary backpacks; they carry a powerful message aimed at combating air pollution and fostering a cleaner, healthier future for all. 🌬️💪',
    },
    {
      image: 'assets/images/project/cycle.jpg',
      title:
        'Burn Fat, Not Fuel: A Resounding Success for Sustainable Transportation',
      aboutWork:
        'We are thrilled to share the tremendous success of our "Burn Fat, not Fuel" cycle rally, a remarkable event aimed at promoting sustainable transportation and raising awareness about the critical importance of reducing our carbon footprint. It is, therefore, our collective responsibility to take action and actively contribute to a cleaner, greener future.',
    },
    {
      image: 'assets/images/project/running.jpg',
      title:
        ' Running Towards a Greener Future: Successful 2nd Short Marathon on Zero Emission Day',
      aboutWork:
        'We are thrilled to share the resounding success of the 2nd Short Marathon, organized by SAFE-Nepal, with the inspiring theme "Run for Green." The event, held on the occasion of "Zero Emission Day" on September 24th, 2022, in Pokhara, Nepal, was a remarkable celebration of environmental consciousness and sustainable practices. We extend our heartfelt gratitude to everyone who contributed to making this event a grand success.',
    },
    {
      image: 'assets/images/project/teach.jpg',
      title:
        'Empowering Change: A Successful School Teaching and Community Outreach Program Against Air Pollution',
      aboutWork:
        'We are thrilled to share the remarkable success of our School Teaching and Community Outreach Program against air pollution, an initiative that brought together more than 500 students from Wards 10, 14, and 15 of Pokhara Metro. This program, driven by our shared commitment to combat air pollution and promote a greener environment, has left a lasting impact on both the participants and the community.',
    },
    {
      image: 'assets/images/project/article.jpg',
      title: 'Online Article Writing Competition',
      aboutWork:
        '"Online Article Writing Competition" and the "Presentation Design Competition" held on April 1st. We were overwhelmed by the enthusiastic response and the high-quality submissions received for both competitions. Your dedication and passion for expressing your ideas and creativity through writing and design were truly commendable.',
    },
  ];
}
