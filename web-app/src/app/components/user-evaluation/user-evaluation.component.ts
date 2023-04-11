import { UserEvaluationService } from './user-evaluation.service';
import { User_review, date } from '../../../../../server/src/models/reviews';
import { Component, OnInit } from '@angular/core';
import { defineComponents, IgcRatingComponent } from 'igniteui-webcomponents';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Atracao } from '../../../../../server/src/models/atracao';
import { ListaAtracoesPageComponent } from 'src/app/pages/lista-atracoes-page/lista-atracoes-page.component';


defineComponents(IgcRatingComponent);

@Component({
  selector: 'app-user-evaluation',
  templateUrl: './user-evaluation.component.html',
  styleUrls: ['./user-evaluation.component.scss','./user-make-review.component.scss']
})
export class UserEvaluationComponent implements OnInit {

  constructor(
    //private listaDeAtracoes : ListaAtracoesPageComponent,
    private ueService : UserEvaluationService,
    private fb: FormBuilder
    ) {
      this.evaluationForm = this.fb.group({
        overallR: ['', Validators.required],
        cleanR: ['', Validators.required],
        securityR: ['', Validators.required],
        funnyR: ['', Validators.required],
        writtenR: ['', Validators.required]
      })
    };
  
  //atracoes: Atracao[] = [];

  // variaveis para exibir elementos no front end
  createReview: boolean = false;
  ratingValue: number = 0;
  ratingCleanValue: number = 0;
  ratingFunnyValue: number = 0;
  ratingSecurityValue: number = 0;

  evaluationForm: FormGroup;

  // variaveis placeholder  para exibir comentarios
  /*today: date = {
    day : 8,
    month: "april",
    year: 2022
  };
  
  comentario: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";*/

  reviews: User_review[] = [];

  // metodos da classe 

  onSubmit() {
    const formData = this.evaluationForm.value;
    this.ueService.addReview(formData).subscribe();
    this.evaluationForm.reset();
  }

  openCloseReview(): void{
    this.createReview = !this.createReview;
  }

  ngOnInit(): void {
    this.ueService.getData().subscribe((data: any) => {
      this.reviews = data.allReviews;
    });

    // todas as atracoes com ids
    //this.atracoes = this.listaDeAtracoes.getAllAtracoes();
  }

}
