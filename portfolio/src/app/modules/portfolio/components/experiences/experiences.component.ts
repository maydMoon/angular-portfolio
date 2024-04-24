import { Component, signal } from '@angular/core';

// Interface
import { IExperiences } from '../../interface/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss',
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong: 'Front-end Developer',
        p: 'Autotrac | Fev 2024 - Present',
      },
      text: '<p>Desde fevereiro de 2024, atuo como estagiária na Autotrac, desempenhando várias funções e aprimorando minhas habilidades técnicas como desenvolvedora Front-end.</p> <p>Minhas responsabilidades incluem auxiliar nas atividades da equipe de desenvolvimento, participando ativamente no ciclo de desenvolvimento (código/testes) em múltiplos projetos.</p> <p>Além disso, estou envolvida na concepção, construção e otimização de interfaces para projetos web. Isso requer um entendimento do Angular, que é a principal tecnologia que utilizo para essas tarefas.</p> <p>Outra parte importante do meu papel é garantir a qualidade do código e a manutenção da base de código e também participo ativamente das reuniões de planejamento e revisão para implementar novas funcionalidades e melhorias em nossos sistemas.</p>',
    },
    {
      summary: {
        strong: 'Técnico de Suporte em TI',
        p: 'Administração Regional da Candangolândia | Maio 2021 - Maio 2023',
      },
      text: '<p>Durante meu período de 2 anos como estagíaria desempenhando várias funções e desenvolvendo minhas habilidades técnicas.</p> <p>Auxiliei na manutenção de redes e protocolos de comunicação, garantindo a conectividade e a segurança de nossos sistemas.</p> <p>Fornecia suporte ao Help Desk, auxiliando na resolução de problemas técnicos e garantindo que todos os usuários recebessem assistência oportuna e eficaz.</p> <p>Também era responsável pela manutenção de computadores. Isso incluía a solução de problemas de hardware e software, a realização de atualizações regulares e a garantia de que todos os nossos sistemas estavam funcionando de maneira ideal.</p>',
    },
  ]);
}
