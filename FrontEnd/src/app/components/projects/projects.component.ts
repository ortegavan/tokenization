import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  projects = [] as Project[];

  constructor(private service: ProjectService) {}

  ngOnInit(): void {
    this.service.get().subscribe((projects) => {
      this.projects = projects;
    });
  }
}
