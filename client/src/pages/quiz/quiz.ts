import { Component } from '@angular/core';
import { ModalController, ViewController } from 'ionic-angular';
import { NavController, NavParams } from 'ionic-angular';
import { CongratsModalPage } from '../congrats-modal/congrats-modal';


export class Question {
    Id: number;
    Text: string;
    IsActive: boolean;
    Answers: {}[];
}

export class Answer {
    Id: number;
    Text: string;
}

@Component({
    selector: 'page-quiz',
    templateUrl: 'quiz.html'
})
export class QuizPage {
    questions: Question[];
    progress: number;
    response: {};
    constructor(public viewCtrl: ViewController,
        public navCtrl: NavController,
        public modalCtrl: ModalController) {
        this.questions = [];
        this.response = {};
        this.progress = 50;

        let question1 = new Question;
        question1.Id = 1;
        question1.Text = ' At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti' +
            'quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia' +
            'deserunt mollitia animi, id est laborum et dolorum fuga.';
        question1.IsActive = true;

        let answer = new Answer();
        answer.Id = 1;
        answer.Text = 'abc';
        let answer1 = new Answer();
        answer1.Id = 1;
        answer1.Text = 'abc';
        let answer2 = new Answer();
        answer2.Id = 1;
        answer2.Text = 'abc';
        question1.Answers = [];
        question1.Answers.push(answer);
        question1.Answers.push(answer1);
        question1.Answers.push(answer2);
        this.questions.push(question1);

        let question2 = new Question;
        question2.Id = 1;
        question2.Text = ' At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti' +
            'quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia' +
            'deserunt mollitia animi, id est laborum et dolorum fuga.';
        question2.IsActive = false;

        let answer3 = new Answer();
        answer3.Id = 1;
        answer3.Text = 'abc';
        let answer4 = new Answer();
        answer4.Id = 1;
        answer4.Text = 'abc';
        let answer5 = new Answer();
        answer5.Id = 1;
        answer5.Text = 'abc';
        question2.Answers = [];
        question2.Answers.push(answer3);
        question2.Answers.push(answer4);
        question2.Answers.push(answer5);
        this.questions.push(question2);
    }
    show() {
        let profileModal = this.modalCtrl.create(CongratsModalPage);
        profileModal.onDidDismiss(data => {
            console.log(data);
        });
        profileModal.present();
    }
    next(question) {
        var indexQuestion = this.questions.indexOf(question)
        if (indexQuestion == this.questions.length - 1) {
            this.show();
            this.viewCtrl.dismiss();
        } else {
            question.IsActive = false;
            let nextQuestion = new Question();
            nextQuestion = this.questions[indexQuestion + 1];
            nextQuestion.IsActive = true;
            this.progress = 100;
        }
    }
}