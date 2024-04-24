import { Component, inject, signal } from '@angular/core';

// Interface
import { IProjects } from '../../interface/IProjects.interface';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  public arrayProjects = signal<IProjects[]>([
    {
      src: 'assets/img/projects/unb-web.png',
      alt: 'Projeto UnB Web',
      title: 'UnB Web',
      with: '100px',
      height: '100px',
      description:
        '<p>O projeto UnB Web SAAS é um projeto da faculdade que tem como objetivo de ser um Software as a Service que possibilite o professor crie turmas e aulas para que seus estudantes assinem a chamada, respondam e revisem exames e etc.</p> <p>A aplicação é desenvolvida utilizando principalmente Python, JavaScript e Flask como framework.</p>',
      links: [
        {
          name: 'Github do Projeto',
          href: 'https://github.com/maydMoon/unb-web',
        },
      ],
    },
  ]);
}
