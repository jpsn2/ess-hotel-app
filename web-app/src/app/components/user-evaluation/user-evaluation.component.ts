import { UserEvaluationService } from './user-evaluation.service';
import { User_review, date } from '../../../../../server/src/models/reviews';
import { Component, OnInit } from '@angular/core';
import { defineComponents, IgcRatingComponent } from 'igniteui-webcomponents';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Atracao } from '../../../../../server/src/models/atracao';
import { ListaAtracoesPageComponent } from 'src/app/pages/lista-atracoes-page/lista-atracoes-page.component';
import { ActivatedRoute } from '@angular/router';


defineComponents(IgcRatingComponent);

@Component({
  selector: 'app-user-evaluation',
  templateUrl: './user-evaluation.component.html',
  styleUrls: ['./user-evaluation.component.scss','./user-make-review.component.scss']
})
export class UserEvaluationComponent implements OnInit {

  nomeUsuario = 'John';
  nacionalidadeUser = 'Canada';
  comment = '';
  gostou: boolean = false;
  id: string = '';
  mediaEval: number = 4.7;
  numEval: number = 33;

  constructor(
    //private listaDeAtracoes : ListaAtracoesPageComponent,
    private route: ActivatedRoute,
    private ueService : UserEvaluationService,
    private fb: FormBuilder
    ) {
      this.evaluationForm = this.fb.group({
        nome: '',
        nacionalidade: '',
        writtenR: ['', Validators.required],
        liked: '',
      })
    };
  
  //atracoes: Atracao[] = [];

  // variaveis para exibir elementos no front end
  createReview: boolean = false;
  

  evaluationForm: FormGroup;

  // variaveis placeholder  para exibir comentarios
  today: date = {
    day : 8,
    month: "april",
    year: 2022
  };
  
  /*comentario: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";*/

  reviews: User_review[] = [];

  // metodos da classe 

  onSubmit():void{
    return
  }

  /*onSubmit() {
    this.evaluationForm.value.liked = this.gostou;
    this.evaluationForm.value.nome = this.nomeUsuario;
    this.evaluationForm.value.nacionalidade = this.nacionalidadeUser;
    const formData = this.evaluationForm.value;
    //this.ueService.addReview(formData).subscribe();
    const review = new User_review(formData.nome,formData.nacionalidade,formData.writtenR,this.today,formData.liked,this.id);
    this.reviews.unshift(review);
    this.evaluationForm.reset();
    this.openCloseReview();
  }*/

  openCloseReview(): void{
    this.createReview = !this.createReview;
  }

  ngOnInit(): void {
    this.ueService.getData().subscribe((data: any) => {
      this.reviews = data.allReviews;
    });

    let check;

    this.route.paramMap.subscribe((params) => {

      check = params.get('atracaoId');
      if (check != null){
        this.id = check;
      }
      //console.log(this.id);
    });

  }
}
